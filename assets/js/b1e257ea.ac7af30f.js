"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6683],{3905:(t,e,a)=>{a.r(e),a.d(e,{MDXContext:()=>o,MDXProvider:()=>u,mdx:()=>s,useMDXComponents:()=>g,withMDXComponents:()=>p});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},r.apply(this,arguments)}function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),p=function(t){return function(e){var a=g(e.components);return n.createElement(t,r({},e,{components:a}))}},g=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},u=function(t){var e=g(t.components);return n.createElement(o.Provider,{value:e},t.children)},x={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),p=g(a),u=l,N=p["".concat(m,".").concat(u)]||p[u]||x[u]||r;return a?n.createElement(N,d(d({ref:e},o),{},{components:a})):n.createElement(N,d({ref:e},o))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,m=new Array(r);m[0]=N;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d.mdxType="string"==typeof t?t:l,m[1]=d;for(var o=2;o<r;o++)m[o]=a[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},64113:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>m,default:()=>g,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=a(83117),l=(a(67294),a(3905));const r={sidebar_position:30},m="Git Cheat Sheet",d={unversionedId:"introduction/git-cheat-sheet",id:"introduction/git-cheat-sheet",title:"Git Cheat Sheet",description:"Below is a quick cheat sheet for translating a number of Git commands into equivalent Sapling commands.",source:"@site/docs/introduction/git-cheat-sheet.md",sourceDirName:"introduction",slug:"/introduction/git-cheat-sheet",permalink:"/docs/introduction/git-cheat-sheet",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/introduction/git-cheat-sheet.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/introduction/getting-started"},next:{title:"Differences from Git",permalink:"/docs/introduction/differences-git"}},i={},o=[{value:"Cloning and Pulling a Repository",id:"cloning-and-pulling-a-repository",level:3},{value:"Understanding the Repository",id:"understanding-the-repository",level:3},{value:"Referring to Commits",id:"referring-to-commits",level:3},{value:"Working with Files",id:"working-with-files",level:3},{value:"Working with Commits",id:"working-with-commits",level:3},{value:"Undo, Redo, and Reverting",id:"undo-redo-and-reverting",level:3},{value:"Working with Stacks",id:"working-with-stacks",level:3},{value:"Giving Commits Names",id:"giving-commits-names",level:3},{value:"Resolving Conflicts",id:"resolving-conflicts",level:3}],p={toc:o};function g(t){let{components:e,...a}=t;return(0,l.mdx)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"git-cheat-sheet"},"Git Cheat Sheet"),(0,l.mdx)("p",null,"Below is a quick cheat sheet for translating a number of Git commands into equivalent Sapling commands."),(0,l.mdx)("p",null,"You can also use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"sl githelp")," command, or ",(0,l.mdx)("inlineCode",{parentName:"p"},"sl git")," for short, to automatically translate some git commands into their equivalent Sapling command."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"$ sl githelp -- git clone https://github.com/facebook/sapling\nsl clone https://github.com/facebook/sapling\n\n$ sl git -- checkout 060f340a9 my_file.txt\nsl revert -r 060f340a9 my_file.txt\n")),(0,l.mdx)("h3",{id:"cloning-and-pulling-a-repository"},"Cloning and Pulling a Repository"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null}),(0,l.mdx)("th",{parentName:"tr",align:null},"Git"),(0,l.mdx)("th",{parentName:"tr",align:null},"Sapling"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Clone"),(0,l.mdx)("td",{parentName:"tr",align:null},"git clone ",(0,l.mdx)("a",{parentName:"td",href:"http://github.com/foo"},"http://github.com/foo")," my_repo"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl clone ",(0,l.mdx)("a",{parentName:"td",href:"http://github.com/foo"},"http://github.com/foo")," my_repo")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Pull"),(0,l.mdx)("td",{parentName:"tr",align:null},"git fetch"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl pull")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Pull a Branch"),(0,l.mdx)("td",{parentName:"tr",align:null},"git fetch REFSPEC"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl pull -B my_branch")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Pull From"),(0,l.mdx)("td",{parentName:"tr",align:null},"git fetch origin"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl pull remote")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Pull and Rebase"),(0,l.mdx)("td",{parentName:"tr",align:null},"git pull"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl pull \u2014rebase")))),(0,l.mdx)("h3",{id:"understanding-the-repository"},"Understanding the Repository"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null}),(0,l.mdx)("th",{parentName:"tr",align:null},"Git"),(0,l.mdx)("th",{parentName:"tr",align:null},"Sapling"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Your Commits"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Current History"),(0,l.mdx)("td",{parentName:"tr",align:null},"git log"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl log")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Edit Files"),(0,l.mdx)("td",{parentName:"tr",align:null},"git status"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl status")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Current Hash"),(0,l.mdx)("td",{parentName:"tr",align:null},"git rev-parse HEAD"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl whereami")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Pending Changes"),(0,l.mdx)("td",{parentName:"tr",align:null},"git diff"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl diff")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Current Commit"),(0,l.mdx)("td",{parentName:"tr",align:null},"git show"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl show")))),(0,l.mdx)("h3",{id:"referring-to-commits"},"Referring to Commits"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null}),(0,l.mdx)("th",{parentName:"tr",align:null},"Git"),(0,l.mdx)("th",{parentName:"tr",align:null},"Sapling"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Current Commit"),(0,l.mdx)("td",{parentName:"tr",align:null},"HEAD"),(0,l.mdx)("td",{parentName:"tr",align:null},".")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Parent Commit"),(0,l.mdx)("td",{parentName:"tr",align:null},"HEAD^"),(0,l.mdx)("td",{parentName:"tr",align:null},".^")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"All local commits"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"draft()")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Commits in branch X but not Y"),(0,l.mdx)("td",{parentName:"tr",align:null},"Y..X"),(0,l.mdx)("td",{parentName:"tr",align:null},"X % Y")))),(0,l.mdx)("p",null,"See ",(0,l.mdx)("inlineCode",{parentName:"p"},"sl help revset")," for my ways of referencing commits."),(0,l.mdx)("h3",{id:"working-with-files"},"Working with Files"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null}),(0,l.mdx)("th",{parentName:"tr",align:null},"Git"),(0,l.mdx)("th",{parentName:"tr",align:null},"Sapling"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Add New File"),(0,l.mdx)("td",{parentName:"tr",align:null},"git add FILE"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl add FILE")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Un-add New File"),(0,l.mdx)("td",{parentName:"tr",align:null},"git rm --cached FILE"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl forget FILE")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Remove File"),(0,l.mdx)("td",{parentName:"tr",align:null},"git rm FILE"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl rm FILE")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Rename File"),(0,l.mdx)("td",{parentName:"tr",align:null},"git mv OLD NEW"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl mv OLD NEW")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Copy File"),(0,l.mdx)("td",{parentName:"tr",align:null},"cp OLD NEW"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl cp OLD NEW")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Add/Remove All Files"),(0,l.mdx)("td",{parentName:"tr",align:null},"git add -A ."),(0,l.mdx)("td",{parentName:"tr",align:null},"sl addremove")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Undo Changes"),(0,l.mdx)("td",{parentName:"tr",align:null},"git checkout -- FILE"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl revert FILE")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Undo All Changes"),(0,l.mdx)("td",{parentName:"tr",align:null},"git reset --hard"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl revert \u2014all")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Delete Untracked Files"),(0,l.mdx)("td",{parentName:"tr",align:null},"git clean -f"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl clean")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Output File Content"),(0,l.mdx)("td",{parentName:"tr",align:null},"git cat-file -p COMMIT:FILE"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl cat -r COMMIT FILE")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Show Blame"),(0,l.mdx)("td",{parentName:"tr",align:null},"git blame FILE"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl blame FILE")))),(0,l.mdx)("h3",{id:"working-with-commits"},"Working with Commits"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null}),(0,l.mdx)("th",{parentName:"tr",align:null},"Git"),(0,l.mdx)("th",{parentName:"tr",align:null},"Sapling"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Commit Changes"),(0,l.mdx)("td",{parentName:"tr",align:null},"git commit -a"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl commit")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Modify Commit"),(0,l.mdx)("td",{parentName:"tr",align:null},"git commit -a --amend"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl amend")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Move to Commit"),(0,l.mdx)("td",{parentName:"tr",align:null},"git checkout COMMIT"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl goto COMMIT")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Remove a Commit"),(0,l.mdx)("td",{parentName:"tr",align:null},"git reset -hard COMMIT"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl hide COMMIT")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Edit Message"),(0,l.mdx)("td",{parentName:"tr",align:null},"git commit --amend"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl metaedit")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Rebase Commits"),(0,l.mdx)("td",{parentName:"tr",align:null},"git rebase main"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl rebase -d main")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Complex Rebase"),(0,l.mdx)("td",{parentName:"tr",align:null},"git rebase --onto DEST BOTTOM^ TOP"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl rebase -d DEST -r BOTTOM::TOP")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Rebase All"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl rebase -d main -r 'draft()'")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Interactive Rebase"),(0,l.mdx)("td",{parentName:"tr",align:null},"git rebase -i"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl histedit")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Interactive Commit"),(0,l.mdx)("td",{parentName:"tr",align:null},"git add -p"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl commit -i / sl amend -i")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Cherry-pick"),(0,l.mdx)("td",{parentName:"tr",align:null},"git cherry-pick COMMIT"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl graft COMMIT")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Stash Changes"),(0,l.mdx)("td",{parentName:"tr",align:null},"git stash"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl shelve")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Unstach Changes"),(0,l.mdx)("td",{parentName:"tr",align:null},"git stash pop"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl unshelve")))),(0,l.mdx)("h3",{id:"undo-redo-and-reverting"},"Undo, Redo, and Reverting"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null}),(0,l.mdx)("th",{parentName:"tr",align:null},"Git"),(0,l.mdx)("th",{parentName:"tr",align:null},"Sapling"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Undo Commit"),(0,l.mdx)("td",{parentName:"tr",align:null},"git reset --soft HEAD^"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl uncommit")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Undo Partial Commit"),(0,l.mdx)("td",{parentName:"tr",align:null},"git reset --soft HEAD^ FILE"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl uncommit FILE")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Undo Amend"),(0,l.mdx)("td",{parentName:"tr",align:null},"git reset HEAD@{1}"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl unamend")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Undo Rebase/Etc"),(0,l.mdx)("td",{parentName:"tr",align:null},"git reset \u2014hard HEAD@{1}"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl undo")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Revert Already Landed Commit"),(0,l.mdx)("td",{parentName:"tr",align:null},"git revert COMMIT"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl backout COMMIT")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"View Recent Commits"),(0,l.mdx)("td",{parentName:"tr",align:null},"git reflog"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl journal")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Recover Commit"),(0,l.mdx)("td",{parentName:"tr",align:null},"git reset COMMIT"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl unhide COMMIT")))),(0,l.mdx)("h3",{id:"working-with-stacks"},"Working with Stacks"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null}),(0,l.mdx)("th",{parentName:"tr",align:null},"Git"),(0,l.mdx)("th",{parentName:"tr",align:null},"Sapling"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Modify Middle Commit"),(0,l.mdx)("td",{parentName:"tr",align:null},"git rebase -i"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl goto COMMIT && sl amend")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Move Up/Down the Stack"),(0,l.mdx)("td",{parentName:"tr",align:null},"git rebase -i"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl prev / sl next")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Squash Last Two Commits"),(0,l.mdx)("td",{parentName:"tr",align:null},"git reset --soft HEAD^ && git commit \u2014amend"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl fold \u2014from .^")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Split a Commit into Two"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl split")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Reorder Commits"),(0,l.mdx)("td",{parentName:"tr",align:null},"git rebase -i"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl histedit")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Amend Down into Stack"),(0,l.mdx)("td",{parentName:"tr",align:null},"N/A"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl absorb")))),(0,l.mdx)("h3",{id:"giving-commits-names"},"Giving Commits Names"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null}),(0,l.mdx)("th",{parentName:"tr",align:null},"Git"),(0,l.mdx)("th",{parentName:"tr",align:null},"Sapling"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Listing Branches"),(0,l.mdx)("td",{parentName:"tr",align:null},"git branch"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl bookmark")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Create Branch/Bookmark"),(0,l.mdx)("td",{parentName:"tr",align:null},"git branch NAME"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl book NAME")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Switch to Branch"),(0,l.mdx)("td",{parentName:"tr",align:null},"git checkout NAME"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl goto NAME")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Delete Branch"),(0,l.mdx)("td",{parentName:"tr",align:null},"git branch -d NAME"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl book -d NAME (deletes just the bookmark name) / sl book -D NAME (deletes the bookmark name and hides the commits)")))),(0,l.mdx)("h3",{id:"resolving-conflicts"},"Resolving Conflicts"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null}),(0,l.mdx)("th",{parentName:"tr",align:null},"Git"),(0,l.mdx)("th",{parentName:"tr",align:null},"Sapling"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"List Unresolved Conflicts"),(0,l.mdx)("td",{parentName:"tr",align:null},"git diff \u2014name-only \u2014diff-filter=U"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl resolve \u2014list")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Mark a File Resolved"),(0,l.mdx)("td",{parentName:"tr",align:null},"git add FILE"),(0,l.mdx)("td",{parentName:"tr",align:null},"sl resolve -m FILE")))))}g.isMDXComponent=!0}}]);