"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1539],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>o,MDXProvider:()=>u,mdx:()=>N,useMDXComponents:()=>p,withMDXComponents:()=>s});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)t=d[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){return function(n){var t=p(n.components);return a.createElement(e,d({},n,{components:t}))}},p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},x={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,d=e.originalType,l=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,c=s["".concat(l,".").concat(u)]||s[u]||x[u]||d;return t?a.createElement(c,i(i({ref:n},o),{},{components:t})):a.createElement(c,i({ref:n},o))}));function N(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var d=t.length,l=new Array(d);l[0]=c;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<d;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},73858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var a=t(83117),r=(t(67294),t(3905));const d={sidebar_position:40},l=void 0,i={unversionedId:"commands/status",id:"commands/status",title:"status",description:"status | st",source:"@site/docs/commands/status.md",sourceDirName:"commands",slug:"/commands/status",permalink:"/docs/commands/status",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/commands/status.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"ssl",permalink:"/docs/commands/ssl"},next:{title:"unamend",permalink:"/docs/commands/unamend"}},m={},o=[{value:"status | st",id:"status--st",level:2},{value:"arguments",id:"arguments",level:2}],s={toc:o};function p(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"status--st"},"status | st"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"list files with pending changes")),(0,r.mdx)("p",null,"Show status of files in the working copy using the following status\nindicators:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"M = modified\nA = added\nR = removed\nC = clean\n! = missing (deleted by a non-sl command, but still tracked)\n? = not tracked\nI = ignored\n  = origin of the previous file (with --copies)\n")),(0,r.mdx)("p",null,"By default, shows files that have been modified, added, removed,\ndeleted, or that are unknown (corresponding to the options ",(0,r.mdx)("inlineCode",{parentName:"p"},"-mardu"),",\nrespectively). Files that are unmodified, ignored, or the source of\na copy/move operation are not listed."),(0,r.mdx)("p",null,"To control the exact statuses that are shown, specify the relevant\nflags (like ",(0,r.mdx)("inlineCode",{parentName:"p"},"-rd")," to show only files that are removed or deleted).\nAdditionally, specify ",(0,r.mdx)("inlineCode",{parentName:"p"},"-q/--quiet")," to hide both unknown and ignored\nfiles."),(0,r.mdx)("p",null,"To show the status of specific files, provide a list of files to\nmatch. To include or exclude files using patterns or filesets, use\n",(0,r.mdx)("inlineCode",{parentName:"p"},"-I")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"-X"),"."),(0,r.mdx)("p",null,"If ",(0,r.mdx)("inlineCode",{parentName:"p"},"--rev")," is specified and only one revision is given, it is used as\nthe base revision. If two revisions are given, the differences between\nthem are shown. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"--change")," option can also be used as a shortcut\nto list the changed files of a revision from its first parent."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"sl status")," might appear to disagree with ",(0,r.mdx)("inlineCode",{parentName:"p"},"sl diff")," if permissions\nhave changed or a merge has occurred, because the standard diff\nformat does not report permission changes and ",(0,r.mdx)("inlineCode",{parentName:"p"},"sl diff")," only\nreports changes relative to one merge parent."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"-t/--terse")," option abbreviates the output by showing only the directory\nname if all the files in it share the same status. The option takes an\nargument indicating the statuses to abbreviate: 'm' for 'modified', 'a'\nfor 'added', 'r' for 'removed', 'd' for 'deleted', 'u' for 'unknown', 'i'\nfor 'ignored' and 'c' for clean."),(0,r.mdx)("p",null,"It abbreviates only those statuses which are passed. Note that clean and\nignored files are not displayed with ",(0,r.mdx)("inlineCode",{parentName:"p"},"--terse ic")," unless the ",(0,r.mdx)("inlineCode",{parentName:"p"},"-c/--clean"),"\nand ",(0,r.mdx)("inlineCode",{parentName:"p"},"-i/--ignored")," options are also used."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"-v/--verbose")," option shows information when the repository is in an\nunfinished merge, shelve, rebase state, etc. You can have this behavior\nturned on by default by enabling the ",(0,r.mdx)("inlineCode",{parentName:"p"},"commands.status.verbose")," config option."),(0,r.mdx)("p",null,"You can skip displaying some of these states by setting\n",(0,r.mdx)("inlineCode",{parentName:"p"},"commands.status.skipstates")," to one or more of: 'bisect', 'graft',\n'histedit', 'merge', 'rebase', or 'unshelve'."),(0,r.mdx)("p",null,"Examples:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"show changes in the working directory relative to a  commit:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"sl status --rev 88a692db8\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"show changes in the working copy relative to the  current directory (see ",(0,r.mdx)("inlineCode",{parentName:"li"},"sl help patterns")," for more information):")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"sl status re:\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"show all changes including copies in a commit:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"sl status --copies --change 88a692db8\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"get a NUL separated list of added files, suitable for xargs:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"sl status -an0\n")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"show more information about the repository status, abbreviating  added, removed, modified, deleted, and untracked paths:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"sl status -v -t mardu\n")),(0,r.mdx)("p",null,"Returns 0 on success."),(0,r.mdx)("h2",{id:"arguments"},"arguments"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"shortname"),(0,r.mdx)("th",{parentName:"tr",align:null},"fullname"),(0,r.mdx)("th",{parentName:"tr",align:null},"default"),(0,r.mdx)("th",{parentName:"tr",align:null},"description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-A")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--all")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"show status of all files")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-m")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--modified")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"show only modified files")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-a")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--added")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"show only added files")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-r")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--removed")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"show only removed files")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-d")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--deleted")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"show only deleted (but tracked) files")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-c")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--clean")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"show only files without changes")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-u")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--unknown")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"show only unknown (not tracked) files")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-i")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--ignored")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"show only ignored files")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-n")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--no-status")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"hide status prefix")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-C")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--copies")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"show source of copied files")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-0")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--print0")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"end filenames with NUL, for use with xargs")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--rev")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"show difference from revision")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--change")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"list the changed files of a revision")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--root-relative")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"false")),(0,r.mdx)("td",{parentName:"tr",align:null},"show status relative to root")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-I")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--include")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"include files matching the given patterns")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-X")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--exclude")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"exclude files matching the given patterns")))))}p.isMDXComponent=!0}}]);