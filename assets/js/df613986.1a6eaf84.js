"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5635],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>i,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){return function(t){var n=s(t.components);return a.createElement(e,l({},t,{components:n}))}},s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,x=p["".concat(o,".").concat(u)]||p[u]||c[u]||l;return n?a.createElement(x,d(d({ref:t},i),{},{components:n})):a.createElement(x,d({ref:t},i))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=x;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},27318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var a=n(83117),r=(n(67294),n(3905));const l={sidebar_position:29},o=void 0,d={unversionedId:"commands/push",id:"commands/push",title:"push",description:"push",source:"@site/docs/commands/push.md",sourceDirName:"commands",slug:"/commands/push",permalink:"/docs/commands/push",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/commands/push.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29},sidebar:"tutorialSidebar",previous:{title:"pull",permalink:"/docs/commands/pull"},next:{title:"rebase",permalink:"/docs/commands/rebase"}},m={},i=[{value:"push",id:"push",level:2},{value:"arguments",id:"arguments",level:2}],p={toc:i};function s(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"push"},"push"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"push changes to the specified destination")),(0,r.mdx)("p",null,"Push commits from the local repository to the specified\ndestination."),(0,r.mdx)("p",null,"By default, push does not allow creation of new heads at the\ndestination since multiple heads make it unclear which head\nto use. In this situation, it is recommended to pull and merge\nbefore pushing."),(0,r.mdx)("p",null,"Extra care should be taken with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"-f/--force")," option,\nwhich will push all new heads on all branches, an action which will\nalmost always cause confusion for collaborators."),(0,r.mdx)("p",null,"If ",(0,r.mdx)("inlineCode",{parentName:"p"},"-r/--rev")," is used, the specified revision and all its ancestors\nwill be pushed to the remote repository."),(0,r.mdx)("p",null,"If ",(0,r.mdx)("inlineCode",{parentName:"p"},"-B/--bookmark")," is used, the specified bookmarked revision, its\nancestors, and the bookmark will be pushed to the remote\nrepository. Specifying ",(0,r.mdx)("inlineCode",{parentName:"p"},".")," is equivalent to specifying the active\nbookmark's name."),(0,r.mdx)("p",null,"Please see ",(0,r.mdx)("inlineCode",{parentName:"p"},"sl help urls")," for important details about ",(0,r.mdx)("inlineCode",{parentName:"p"},"ssh://"),"\nURLs. If DESTINATION is omitted, a default path will be used."),(0,r.mdx)("p",null,"Returns 0 if push was successful, 1 if nothing to push."),(0,r.mdx)("h2",{id:"arguments"},"arguments"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"shortname"),(0,r.mdx)("th",{parentName:"tr",align:null},"fullname"),(0,r.mdx)("th",{parentName:"tr",align:null},"default"),(0,r.mdx)("th",{parentName:"tr",align:null},"description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-f")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--force")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"force push")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-r")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--rev")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"a changeset intended to be included in the destination")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-B")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--bookmark")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"bookmark to push")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-t")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--to")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"push revs to this bookmark")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"-d")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--delete")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"delete remote bookmark")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--create")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"create a new remote bookmark")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--allow-anon")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"allow a new unbookmarked head")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--non-forward-move")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"allows moving a remote bookmark to an arbitrary place")))))}s.isMDXComponent=!0}}]);