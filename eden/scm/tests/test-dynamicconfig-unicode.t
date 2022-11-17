#chg-compatible
#debugruntest-compatible

  $ configure modern

  $ export HG_TEST_DYNAMICCONFIG="$TESTTMP/test_hgrc"
  $ cat > test_hgrc <<EOF
  > [section]
  > key=✓
  > EOF

  $ hg init client
  $ cd client

Verify it can be manually generated

  $ hg debugdynamicconfig
  $ cat .hg/hgrc.dynamic
  # version=4.4.2* (glob)
  # reponame=reponame-default
  # canary=None
  # username=
  # Generated by `hg debugdynamicconfig` - DO NOT MODIFY
  [section]
  key=✓
  
  $ hg config section.key
  ✓