"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1173],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>l});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),l=function(e){return function(n){var t=c(n.components);return o.createElement(e,r({},n,{components:t}))}},c=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(t),u=a,h=l["".concat(m,".").concat(u)]||l[u]||p[u]||r;return t?o.createElement(h,i(i({ref:n},d),{},{components:t})):o.createElement(h,i({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,m=new Array(r);m[0]=h;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,m[1]=i;for(var d=2;d<r;d++)m[d]=t[d];return o.createElement.apply(null,m)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},99479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(83117),a=(t(67294),t(3905));const r={sidebar_position:90},m="Undo",i={unversionedId:"overview/undo",id:"overview/undo",title:"Undo",description:"Since Sapling keeps a full record of the rewrite history of commits, most Sapling commands that modify commits can be easily undone.  The sl undo command will revert the commit graph to its state prior to the last run command.",source:"@site/docs/overview/undo.md",sourceDirName:"overview",slug:"/overview/undo",permalink:"/docs/overview/undo",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/overview/undo.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Pull / Push",permalink:"/docs/overview/push-pull"},next:{title:"Shelve",permalink:"/docs/overview/shelve"}},s={},d=[{value:"Undo --interactive",id:"undo---interactive",level:4},{value:"Uncommit / Unamend",id:"uncommit--unamend",level:3}],l={toc:d};function c(e){let{components:n,...t}=e;return(0,a.mdx)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"undo"},"Undo"),(0,a.mdx)("p",null,"Since Sapling keeps a full record of the rewrite history of commits, most Sapling commands that modify commits can be easily undone.  The ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl undo")," command will revert the commit graph to its state prior to the last run command."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},'$ sl\n  @  e75394bbb  16 minutes ago  mary\n  \u2502  Commit Two\n  \u2502\n  o  4eefdfe1d  16 minutes ago  mary\n\u256d\u2500\u256f  Commit One\n\u2502\no  59125794a  16 minutes ago  remote/main\n\u2577\no  774057207  Today at 10:48  remote/stable\n\n# Change #1 to rename the commit.\n$ sl metaedit -m "Commit Two Renamed"\n\n# Change #2 to move the commit.\n$ sl rebase -s 4eefdfe1d -d stable\n\n$ sl\no  59125794a  24 minutes ago  remote/main\n\u2577\n\u2577 @  c87ec5f32  56 seconds ago  mary\n\u2577 \u2502  Commit Two Renamed\n\u2577 \u2502\n\u2577 o  a5054dd01  56 seconds ago  mary\n\u256d\u2500\u256f  Commit One\n\u2502\no  774057207  Today at 10:48  remote/stable\n\n# Undo change #2.\n$ sl undo\n$ sl\n  @  f5c155dd8  2 minutes ago  mary\n  \u2502  Commit Two Renamed\n  \u2502\n  o  4eefdfe1d  25 minutes ago  mary\n\u256d\u2500\u256f  Commit One\n\u2502\no  59125794a  25 minutes ago  remote/main\n\u2577\no  774057207  Today at 10:48  remote/stable\n\n')),(0,a.mdx)("p",null,"Running the command again will undo the command run before the last undone command. Use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl redo")," command to reverse the undo command."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"# Undo change #1.\n$ sl undo\n$ sl\n  @  e75394bbb  27 minutes ago  mary\n  \u2502  Commit Two\n  \u2502\n  o  4eefdfe1d  27 minutes ago  mary\n\u256d\u2500\u256f  Commit One\n\u2502\no  59125794a  27 minutes ago  remote/master\n\u2577\n\n# Oops! I didn't mean to undo that rename.\n$ sl redo\n$ sl\n$ @  f5c155dd8  5 minutes ago  mary\n  \u2502  Commit Two Renamed\n  \u2502\n  o  4eefdfe1d  28 minutes ago  mary\n\u256d\u2500\u256f  Commit One\n\u2502\no  59125794a  28 minutes ago  remote/main\n")),(0,a.mdx)("h4",{id:"undo---interactive"},"Undo --interactive"),(0,a.mdx)("p",null,"You can visualize the undo before it happens by using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl undo -i"),"\ninteractive command. This gives an interactive terminal UI where you can use the\nleft and right keyboard keys to view the previous states you can undo to."),(0,a.mdx)("p",null,"Red commits are those that will be removed, while yellow are commits that will be\nvisible. Press ",(0,a.mdx)("inlineCode",{parentName:"p"},"enter")," to confirm the rollback, or press ",(0,a.mdx)("inlineCode",{parentName:"p"},"q")," to abort."),(0,a.mdx)("p",null,"This UI is also useful for simply finding old commit hashes. Once you have the\nhash, you can exit the undo UI, then use ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl show HASH")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl unhide HASH")," to\nview and recover the commit."),(0,a.mdx)("h3",{id:"uncommit--unamend"},"Uncommit / Unamend"),(0,a.mdx)("p",null,"The undo command is limited to undoing changes to the comit graph. To undo changes related to the working copy, like a commit or amend, use ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl uncommit")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl unamend"),"."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},'$ sl\n  @  1a22ba0e9  83 seconds ago  mary\n\u256d\u2500\u256f  my feature\n\u2502\no  59125794a  36 minutes ago  remote/main\n\n$ echo "edit myproject.cpp" >> myproject.cpp\n$ sl commit -m "new commit"\n\n$ sl\n  @  6024e2ffd  14 seconds ago  mary\n  \u2502  new commit\n  \u2502\n  o  1a22ba0e9  3 minutes ago  mary\n\u256d\u2500\u256f  my feature\n\u2502\no  59125794a  38 minutes ago  remote/main\n\n# Oops! I meant to amend my changes instead.\n$ sl uncommit\n  @  1a22ba0e9  4 minutes ago  mary\n\u256d\u2500\u256f  my feature\n\u2502\no  59125794a  39 minutes ago  remote/main\n# Now we\'re back to the state prior to the commit.\n$ sl st\nM myproject.cpp\n\n\n$ sl amend\n$ sl\n  @  6ca2114d1  3 seconds ago  mary\n\u256d\u2500\u256f  my feature\n\u2502\no  59125794a  41 minutes ago  remote/main\n\n# Now let\'s say we change our mind and decide to make a new\n# commit after all. Let\'s undo the amend.\n$ sl unamend\n$ sl st\nM myproject.cpp\n# now the changes are back as pending changes in our working copy\n')),(0,a.mdx)("p",null,"You can limit uncommit only specific files by using ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl uncommit FILE1 FILE2 ..."),"."))}c.isMDXComponent=!0}}]);