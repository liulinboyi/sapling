# patchbomb.py - sending Mercurial changesets as patch emails
#
#  Copyright 2005-2009 Matt Mackall <mpm@selenic.com> and others
#
# This software may be used and distributed according to the terms of the
# GNU General Public License version 2 or any later version.

'''command to send changesets as (a series of) patch emails

The series is started off with a "[PATCH 0 of N]" introduction, which
describes the series as a whole.

Each patch email has a Subject line of "[PATCH M of N] ...", using the
first line of the changeset description as the subject text. The
message contains two or three body parts:

- The changeset description.
- [Optional] The result of running diffstat on the patch.
- The patch itself, as generated by :hg:`export`.

Each message refers to the first in the series using the In-Reply-To
and References headers, so they will show up as a sequence in threaded
mail and news readers, and in mail archives.

To configure other defaults, add a section like this to your
configuration file::

  [email]
  from = My Name <my@email>
  to = recipient1, recipient2, ...
  cc = cc1, cc2, ...
  bcc = bcc1, bcc2, ...
  reply-to = address1, address2, ...

Use ``[patchbomb]`` as configuration section name if you need to
override global ``[email]`` address settings.

Then you can use the :hg:`email` command to mail a series of
changesets as a patchbomb.

You can also either configure the method option in the email section
to be a sendmail compatible mailer or fill out the [smtp] section so
that the patchbomb extension can automatically send patchbombs
directly from the commandline. See the [email] and [smtp] sections in
hgrc(5) for details.
'''

import os, errno, socket, tempfile, cStringIO
import email
# On python2.4 you have to import these by name or they fail to
# load. This was not a problem on Python 2.7.
import email.Generator
import email.MIMEMultipart

from mercurial import cmdutil, commands, hg, mail, patch, util
from mercurial import scmutil
from mercurial.i18n import _
from mercurial.node import bin

cmdtable = {}
command = cmdutil.command(cmdtable)
testedwith = 'internal'

def prompt(ui, prompt, default=None, rest=':'):
    if default:
        prompt += ' [%s]' % default
    return ui.prompt(prompt + rest, default)

def introwanted(opts, number):
    '''is an introductory message apparently wanted?'''
    return number > 1 or opts.get('intro') or opts.get('desc')

def makepatch(ui, repo, patchlines, opts, _charsets, idx, total, numbered,
              patchname=None):

    desc = []
    node = None
    body = ''

    for line in patchlines:
        if line.startswith('#'):
            if line.startswith('# Node ID'):
                node = line.split()[-1]
            continue
        if line.startswith('diff -r') or line.startswith('diff --git'):
            break
        desc.append(line)

    if not patchname and not node:
        raise ValueError

    if opts.get('attach') and not opts.get('body'):
        body = ('\n'.join(desc[1:]).strip() or
                'Patch subject is complete summary.')
        body += '\n\n\n'

    if opts.get('plain'):
        while patchlines and patchlines[0].startswith('# '):
            patchlines.pop(0)
        if patchlines:
            patchlines.pop(0)
        while patchlines and not patchlines[0].strip():
            patchlines.pop(0)

    ds = patch.diffstat(patchlines, git=opts.get('git'))
    if opts.get('diffstat'):
        body += ds + '\n\n'

    addattachment = opts.get('attach') or opts.get('inline')
    if not addattachment or opts.get('body'):
        body += '\n'.join(patchlines)

    if addattachment:
        msg = email.MIMEMultipart.MIMEMultipart()
        if body:
            msg.attach(mail.mimeencode(ui, body, _charsets, opts.get('test')))
        p = mail.mimetextpatch('\n'.join(patchlines), 'x-patch',
                               opts.get('test'))
        binnode = bin(node)
        # if node is mq patch, it will have the patch file's name as a tag
        if not patchname:
            patchtags = [t for t in repo.nodetags(binnode)
                         if t.endswith('.patch') or t.endswith('.diff')]
            if patchtags:
                patchname = patchtags[0]
            elif total > 1:
                patchname = cmdutil.makefilename(repo, '%b-%n.patch',
                                                 binnode, seqno=idx,
                                                 total=total)
            else:
                patchname = cmdutil.makefilename(repo, '%b.patch', binnode)
        disposition = 'inline'
        if opts.get('attach'):
            disposition = 'attachment'
        p['Content-Disposition'] = disposition + '; filename=' + patchname
        msg.attach(p)
    else:
        msg = mail.mimetextpatch(body, display=opts.get('test'))

    flag = ' '.join(opts.get('flag'))
    if flag:
        flag = ' ' + flag

    subj = desc[0].strip().rstrip('. ')
    if not numbered:
        subj = '[PATCH%s] %s' % (flag, opts.get('subject') or subj)
    else:
        tlen = len(str(total))
        subj = '[PATCH %0*d of %d%s] %s' % (tlen, idx, total, flag, subj)
    msg['Subject'] = mail.headencode(ui, subj, _charsets, opts.get('test'))
    msg['X-Mercurial-Node'] = node
    return msg, subj, ds

emailopts = [
    ('', 'body', None, _('send patches as inline message text (default)')),
    ('a', 'attach', None, _('send patches as attachments')),
    ('i', 'inline', None, _('send patches as inline attachments')),
    ('', 'bcc', [], _('email addresses of blind carbon copy recipients')),
    ('c', 'cc', [], _('email addresses of copy recipients')),
    ('', 'confirm', None, _('ask for confirmation before sending')),
    ('d', 'diffstat', None, _('add diffstat output to messages')),
    ('', 'date', '', _('use the given date as the sending date')),
    ('', 'desc', '', _('use the given file as the series description')),
    ('f', 'from', '', _('email address of sender')),
    ('n', 'test', None, _('print messages that would be sent')),
    ('m', 'mbox', '', _('write messages to mbox file instead of sending them')),
    ('', 'reply-to', [], _('email addresses replies should be sent to')),
    ('s', 'subject', '', _('subject of first message (intro or single patch)')),
    ('', 'in-reply-to', '', _('message identifier to reply to')),
    ('', 'flag', [], _('flags to add in subject prefixes')),
    ('t', 'to', [], _('email addresses of recipients'))]

@command('email',
    [('g', 'git', None, _('use git extended diff format')),
    ('', 'plain', None, _('omit hg patch header')),
    ('o', 'outgoing', None,
     _('send changes not found in the target repository')),
    ('b', 'bundle', None, _('send changes not in target as a binary bundle')),
    ('', 'bundlename', 'bundle',
     _('name of the bundle attachment file'), _('NAME')),
    ('r', 'rev', [], _('a revision to send'), _('REV')),
    ('', 'force', None, _('run even when remote repository is unrelated '
       '(with -b/--bundle)')),
    ('', 'base', [], _('a base changeset to specify instead of a destination '
       '(with -b/--bundle)'), _('REV')),
    ('', 'intro', None, _('send an introduction email for a single patch')),
    ] + emailopts + commands.remoteopts,
    _('hg email [OPTION]... [DEST]...'))
def patchbomb(ui, repo, *revs, **opts):
    '''send changesets by email

    By default, diffs are sent in the format generated by
    :hg:`export`, one per message. The series starts with a "[PATCH 0
    of N]" introduction, which describes the series as a whole.

    Each patch email has a Subject line of "[PATCH M of N] ...", using
    the first line of the changeset description as the subject text.
    The message contains two or three parts. First, the changeset
    description.

    With the -d/--diffstat option, if the diffstat program is
    installed, the result of running diffstat on the patch is inserted.

    Finally, the patch itself, as generated by :hg:`export`.

    With the -d/--diffstat or --confirm options, you will be presented
    with a final summary of all messages and asked for confirmation before
    the messages are sent.

    By default the patch is included as text in the email body for
    easy reviewing. Using the -a/--attach option will instead create
    an attachment for the patch. With -i/--inline an inline attachment
    will be created. You can include a patch both as text in the email
    body and as a regular or an inline attachment by combining the
    -a/--attach or -i/--inline with the --body option.

    With -o/--outgoing, emails will be generated for patches not found
    in the destination repository (or only those which are ancestors
    of the specified revisions if any are provided)

    With -b/--bundle, changesets are selected as for --outgoing, but a
    single email containing a binary Mercurial bundle as an attachment
    will be sent.

    With -m/--mbox, instead of previewing each patchbomb message in a
    pager or sending the messages directly, it will create a UNIX
    mailbox file with the patch emails. This mailbox file can be
    previewed with any mail user agent which supports UNIX mbox
    files.

    With -n/--test, all steps will run, but mail will not be sent.
    You will be prompted for an email recipient address, a subject and
    an introductory message describing the patches of your patchbomb.
    Then when all is done, patchbomb messages are displayed. If the
    PAGER environment variable is set, your pager will be fired up once
    for each patchbomb message, so you can verify everything is alright.

    In case email sending fails, you will find a backup of your series
    introductory message in ``.hg/last-email.txt``.

    Examples::

      hg email -r 3000          # send patch 3000 only
      hg email -r 3000 -r 3001  # send patches 3000 and 3001
      hg email -r 3000:3005     # send patches 3000 through 3005
      hg email 3000             # send patch 3000 (deprecated)

      hg email -o               # send all patches not in default
      hg email -o DEST          # send all patches not in DEST
      hg email -o -r 3000       # send all ancestors of 3000 not in default
      hg email -o -r 3000 DEST  # send all ancestors of 3000 not in DEST

      hg email -b               # send bundle of all patches not in default
      hg email -b DEST          # send bundle of all patches not in DEST
      hg email -b -r 3000       # bundle of all ancestors of 3000 not in default
      hg email -b -r 3000 DEST  # bundle of all ancestors of 3000 not in DEST

      hg email -o -m mbox &&    # generate an mbox file...
        mutt -R -f mbox         # ... and view it with mutt
      hg email -o -m mbox &&    # generate an mbox file ...
        formail -s sendmail \\   # ... and use formail to send from the mbox
          -bm -t < mbox         # ... using sendmail

    Before using this command, you will need to enable email in your
    hgrc. See the [email] section in hgrc(5) for details.
    '''

    _charsets = mail._charsets(ui)

    bundle = opts.get('bundle')
    date = opts.get('date')
    mbox = opts.get('mbox')
    outgoing = opts.get('outgoing')
    rev = opts.get('rev')
    # internal option used by pbranches
    patches = opts.get('patches')

    def getoutgoing(dest, revs):
        '''Return the revisions present locally but not in dest'''
        url = ui.expandpath(dest or 'default-push', dest or 'default')
        url = hg.parseurl(url)[0]
        ui.status(_('comparing with %s\n') % util.hidepassword(url))

        revs = [r for r in scmutil.revrange(repo, revs) if r >= 0]
        if not revs:
            revs = [len(repo) - 1]
        revs = repo.revs('outgoing(%s) and ::%ld', dest or '', revs)
        if not revs:
            ui.status(_("no changes found\n"))
            return []
        return [str(r) for r in revs]

    def getpatches(revs):
        prev = repo['.'].rev()
        for r in scmutil.revrange(repo, revs):
            if r == prev and (repo[None].files() or repo[None].deleted()):
                ui.warn(_('warning: working directory has '
                          'uncommitted changes\n'))
            output = cStringIO.StringIO()
            cmdutil.export(repo, [r], fp=output,
                         opts=patch.diffopts(ui, opts))
            yield output.getvalue().split('\n')

    def getbundle(dest):
        tmpdir = tempfile.mkdtemp(prefix='hg-email-bundle-')
        tmpfn = os.path.join(tmpdir, 'bundle')
        try:
            commands.bundle(ui, repo, tmpfn, dest, **opts)
            fp = open(tmpfn, 'rb')
            data = fp.read()
            fp.close()
            return data
        finally:
            try:
                os.unlink(tmpfn)
            except OSError:
                pass
            os.rmdir(tmpdir)

    if not (opts.get('test') or mbox):
        # really sending
        mail.validateconfig(ui)

    if not (revs or rev or outgoing or bundle or patches):
        raise util.Abort(_('specify at least one changeset with -r or -o'))

    if outgoing and bundle:
        raise util.Abort(_("--outgoing mode always on with --bundle;"
                           " do not re-specify --outgoing"))

    if outgoing or bundle:
        if len(revs) > 1:
            raise util.Abort(_("too many destinations"))
        dest = revs and revs[0] or None
        revs = []

    if rev:
        if revs:
            raise util.Abort(_('use only one form to specify the revision'))
        revs = rev

    if outgoing:
        revs = getoutgoing(dest, rev)
    if bundle:
        opts['revs'] = revs

    # start
    if date:
        start_time = util.parsedate(date)
    else:
        start_time = util.makedate()

    def genmsgid(id):
        return '<%s.%s@%s>' % (id[:20], int(start_time[0]), socket.getfqdn())

    def getdescription(body, sender):
        if opts.get('desc'):
            body = open(opts.get('desc')).read()
        else:
            ui.write(_('\nWrite the introductory message for the '
                       'patch series.\n\n'))
            body = ui.edit(body, sender)
            # Save series description in case sendmail fails
            msgfile = repo.opener('last-email.txt', 'wb')
            msgfile.write(body)
            msgfile.close()
        return body

    def getpatchmsgs(patches, patchnames=None):
        msgs = []

        ui.write(_('this patch series consists of %d patches.\n\n')
                 % len(patches))

        # build the intro message, or skip it if the user declines
        if introwanted(opts, len(patches)):
            msg = makeintro(patches)
            if msg:
                msgs.append(msg)

        # are we going to send more than one message?
        numbered = len(msgs) + len(patches) > 1

        # now generate the actual patch messages
        name = None
        for i, p in enumerate(patches):
            if patchnames:
                name = patchnames[i]
            msg = makepatch(ui, repo, p, opts, _charsets, i + 1,
                            len(patches), numbered, name)
            msgs.append(msg)

        return msgs

    def makeintro(patches):
        tlen = len(str(len(patches)))

        flag = opts.get('flag') or ''
        if flag:
            flag = ' ' + ' '.join(flag)
        prefix = '[PATCH %0*d of %d%s]' % (tlen, 0, len(patches), flag)

        subj = (opts.get('subject') or
                prompt(ui, '(optional) Subject: ', rest=prefix, default=''))
        if not subj:
            return None         # skip intro if the user doesn't bother

        subj = prefix + ' ' + subj

        body = ''
        if opts.get('diffstat'):
            # generate a cumulative diffstat of the whole patch series
            diffstat = patch.diffstat(sum(patches, []))
            body = '\n' + diffstat
        else:
            diffstat = None

        body = getdescription(body, sender)
        msg = mail.mimeencode(ui, body, _charsets, opts.get('test'))
        msg['Subject'] = mail.headencode(ui, subj, _charsets,
                                         opts.get('test'))
        return (msg, subj, diffstat)

    def getbundlemsgs(bundle):
        subj = (opts.get('subject')
                or prompt(ui, 'Subject:', 'A bundle for your repository'))

        body = getdescription('', sender)
        msg = email.MIMEMultipart.MIMEMultipart()
        if body:
            msg.attach(mail.mimeencode(ui, body, _charsets, opts.get('test')))
        datapart = email.MIMEBase.MIMEBase('application', 'x-mercurial-bundle')
        datapart.set_payload(bundle)
        bundlename = '%s.hg' % opts.get('bundlename', 'bundle')
        datapart.add_header('Content-Disposition', 'attachment',
                            filename=bundlename)
        email.Encoders.encode_base64(datapart)
        msg.attach(datapart)
        msg['Subject'] = mail.headencode(ui, subj, _charsets, opts.get('test'))
        return [(msg, subj, None)]

    sender = (opts.get('from') or ui.config('email', 'from') or
              ui.config('patchbomb', 'from') or
              prompt(ui, 'From', ui.username()))

    if patches:
        msgs = getpatchmsgs(patches, opts.get('patchnames'))
    elif bundle:
        msgs = getbundlemsgs(getbundle(dest))
    else:
        msgs = getpatchmsgs(list(getpatches(revs)))

    showaddrs = []

    def getaddrs(header, ask=False, default=None):
        configkey = header.lower()
        opt = header.replace('-', '_').lower()
        addrs = opts.get(opt)
        if addrs:
            showaddrs.append('%s: %s' % (header, ', '.join(addrs)))
            return mail.addrlistencode(ui, addrs, _charsets, opts.get('test'))

        # not on the command line: fallback to config and then maybe ask
        addr = (ui.config('email', configkey) or
                ui.config('patchbomb', configkey) or
                '')
        if not addr and ask:
            addr = prompt(ui, header, default=default)
        if addr:
            showaddrs.append('%s: %s' % (header, addr))
            return mail.addrlistencode(ui, [addr], _charsets, opts.get('test'))
        else:
            return default

    to = getaddrs('To', ask=True)
    if not to:
        # we can get here in non-interactive mode
        raise util.Abort(_('no recipient addresses provided'))
    cc = getaddrs('Cc', ask=True, default='') or []
    bcc = getaddrs('Bcc') or []
    replyto = getaddrs('Reply-To')

    if opts.get('diffstat') or opts.get('confirm'):
        ui.write(_('\nFinal summary:\n\n'))
        ui.write(('From: %s\n' % sender))
        for addr in showaddrs:
            ui.write('%s\n' % addr)
        for m, subj, ds in msgs:
            ui.write(('Subject: %s\n' % subj))
            if ds:
                ui.write(ds)
        ui.write('\n')
        if ui.promptchoice(_('are you sure you want to send (yn)?'
                             '$$ &Yes $$ &No')):
            raise util.Abort(_('patchbomb canceled'))

    ui.write('\n')

    parent = opts.get('in_reply_to') or None
    # angle brackets may be omitted, they're not semantically part of the msg-id
    if parent is not None:
        if not parent.startswith('<'):
            parent = '<' + parent
        if not parent.endswith('>'):
            parent += '>'

    sender_addr = email.Utils.parseaddr(sender)[1]
    sender = mail.addressencode(ui, sender, _charsets, opts.get('test'))
    sendmail = None
    for i, (m, subj, ds) in enumerate(msgs):
        try:
            m['Message-Id'] = genmsgid(m['X-Mercurial-Node'])
        except TypeError:
            m['Message-Id'] = genmsgid('patchbomb')
        if parent:
            m['In-Reply-To'] = parent
            m['References'] = parent
        if not parent or 'X-Mercurial-Node' not in m:
            parent = m['Message-Id']

        m['User-Agent'] = 'Mercurial-patchbomb/%s' % util.version()
        m['Date'] = email.Utils.formatdate(start_time[0], localtime=True)

        start_time = (start_time[0] + 1, start_time[1])
        m['From'] = sender
        m['To'] = ', '.join(to)
        if cc:
            m['Cc']  = ', '.join(cc)
        if bcc:
            m['Bcc'] = ', '.join(bcc)
        if replyto:
            m['Reply-To'] = ', '.join(replyto)
        if opts.get('test'):
            ui.status(_('displaying '), subj, ' ...\n')
            ui.flush()
            if 'PAGER' in os.environ and not ui.plain():
                fp = util.popen(os.environ['PAGER'], 'w')
            else:
                fp = ui
            generator = email.Generator.Generator(fp, mangle_from_=False)
            try:
                generator.flatten(m, 0)
                fp.write('\n')
            except IOError, inst:
                if inst.errno != errno.EPIPE:
                    raise
            if fp is not ui:
                fp.close()
        else:
            if not sendmail:
                verifycert = ui.config('smtp', 'verifycert')
                if opts.get('insecure'):
                    ui.setconfig('smtp', 'verifycert', 'loose', 'patchbomb')
                try:
                    sendmail = mail.connect(ui, mbox=mbox)
                finally:
                    ui.setconfig('smtp', 'verifycert', verifycert, 'patchbomb')
            ui.status(_('sending '), subj, ' ...\n')
            ui.progress(_('sending'), i, item=subj, total=len(msgs))
            if not mbox:
                # Exim does not remove the Bcc field
                del m['Bcc']
            fp = cStringIO.StringIO()
            generator = email.Generator.Generator(fp, mangle_from_=False)
            generator.flatten(m, 0)
            sendmail(sender_addr, to + bcc + cc, fp.getvalue())

    ui.progress(_('writing'), None)
    ui.progress(_('sending'), None)
