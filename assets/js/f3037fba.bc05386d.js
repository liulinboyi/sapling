"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6283],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),m=function(e){return function(n){var t=p(n.components);return a.createElement(e,l({},n,{components:t}))}},p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},x=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,x=m["".concat(i,".").concat(u)]||m[u]||c[u]||l;return t?a.createElement(x,d(d({ref:n},s),{},{components:t})):a.createElement(x,d({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=x;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}x.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var a=t(67294),r=t(86010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.default)(l,i),hidden:t},n)}},65488:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var a=t(83117),r=t(67294),l=t(86010),i=t(72389),d=t(67392),o=t(7094),s=t(12466);const m="tabList__CuJ",p="tabItem_LNqP";function u(e){var n,t;const{lazy:i,block:u,defaultValue:c,values:x,groupId:h,className:v}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=x?x:f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),N=(0,d.l)(b,((e,n)=>e.value===n.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===c?c:null!=(n=null!=c?c:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?n:f[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:L}=(0,o.U)(),[C,E]=(0,r.useState)(g),I=[],{blockElementScrollPositionUntilNextRender:A}=(0,s.o5)();if(null!=h){const e=y[h];null!=e&&e!==C&&b.some((n=>n.value===e))&&E(e)}const T=e=>{const n=e.currentTarget,t=I.indexOf(n),a=b[t].value;a!==C&&(A(n),E(a),null!=h&&L(h,String(a)))},k=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=I.indexOf(e.currentTarget)+1;t=null!=(a=I[n])?a:I[0];break}case"ArrowLeft":{var r;const n=I.indexOf(e.currentTarget)-1;t=null!=(r=I[n])?r:I[I.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.default)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":u},v)},b.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>I.push(e),onKeyDown:k,onFocus:T,onClick:T},i,{className:(0,l.default)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),i?(0,r.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function c(e){const n=(0,i.default)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},97882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>s,toc:()=>p});var a=t(83117),r=(t(67294),t(3905)),l=t(65488),i=t(85162);const d={},o="LineLog",s={unversionedId:"internals/linelog",id:"internals/linelog",title:"LineLog",description:"LineLog is an implementation of interleaved deltas..",source:"@site/docs/internals/linelog.md",sourceDirName:"internals",slug:"/internals/linelog",permalink:"/docs/internals/linelog",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/internals/linelog.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Internal Differences from Mercurial",permalink:"/docs/internals/internal-difference-hg"},next:{title:"ZstDelta",permalink:"/docs/internals/zstdelta"}},m={},p=[{value:"Bytecode",id:"bytecode",level:2},{value:"Interpretation",id:"interpretation",level:2},{value:"Example",id:"example",level:3},{value:"Checkout and Annotate",id:"checkout-and-annotate",level:3},{value:"Range of Revisions",id:"range-of-revisions",level:3},{value:"Linear History",id:"linear-history",level:3},{value:"Editing LineLog",id:"editing-linelog",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"linelog"},"LineLog"),(0,r.mdx)("p",null,"LineLog is an implementation of ",(0,r.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Interleaved_deltas"},"interleaved deltas"),"..\nIt provides conflict-free stack editing ability. It is used by the ",(0,r.mdx)("inlineCode",{parentName:"p"},"absorb"),"\ncommand."),(0,r.mdx)("h2",{id:"bytecode"},"Bytecode"),(0,r.mdx)("p",null,"LineLog uses a bytecode format that is interpreted to produce content.\nThere are 4 instructions:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Operand 1"),(0,r.mdx)("th",{parentName:"tr",align:null},"Operand 2"),(0,r.mdx)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"JGE"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Rev")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Addr")),(0,r.mdx)("td",{parentName:"tr",align:null},"Jump to ",(0,r.mdx)("inlineCode",{parentName:"td"},"Addr")," if ",(0,r.mdx)("inlineCode",{parentName:"td"},"Current Rev")," >= ",(0,r.mdx)("inlineCode",{parentName:"td"},"Rev"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"J"),(0,r.mdx)("td",{parentName:"tr",align:null},"0"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Addr")),(0,r.mdx)("td",{parentName:"tr",align:null},"Jump to ",(0,r.mdx)("inlineCode",{parentName:"td"},"Addr")," unconditionally")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"JL"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Rev")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Addr")),(0,r.mdx)("td",{parentName:"tr",align:null},"Jump to ",(0,r.mdx)("inlineCode",{parentName:"td"},"Addr")," if ",(0,r.mdx)("inlineCode",{parentName:"td"},"Current Rev")," < ",(0,r.mdx)("inlineCode",{parentName:"td"},"Rev"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"LINE"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Rev")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Line")),(0,r.mdx)("td",{parentName:"tr",align:null},"Append the ",(0,r.mdx)("inlineCode",{parentName:"td"},"Line + 1"),"-th line in ",(0,r.mdx)("inlineCode",{parentName:"td"},"Rev"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"END"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"Stop execution")))),(0,r.mdx)("p",null,"Instructions are fixed-sized. The opcode takes 2 bits. ",(0,r.mdx)("inlineCode",{parentName:"p"},"J")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"JGE")," share the\nsame opcode. Operand 1 takes 30 bits. Operand 2 takes 32 bits."),(0,r.mdx)("h2",{id:"interpretation"},"Interpretation"),(0,r.mdx)("h3",{id:"example"},"Example"),(0,r.mdx)("p",null,"It is easier to understand with an example. Given a file with 3 revisions:"),(0,r.mdx)("div",{className:"row"},(0,r.mdx)("div",{className:"col col--4"},"Rev 1",(0,r.mdx)("pre",null,"a",(0,r.mdx)("br",null),"b",(0,r.mdx)("br",null),"c")),(0,r.mdx)("div",{className:"col col--4"},"Rev 2: Inserted 2 lines.",(0,r.mdx)("pre",null,"a",(0,r.mdx)("br",null),"b",(0,r.mdx)("br",null),"1",(0,r.mdx)("br",null),"2",(0,r.mdx)("br",null),"c")),(0,r.mdx)("div",{className:"col col--4"},"Rev 3: Deleted 2 lines.",(0,r.mdx)("pre",null,"a",(0,r.mdx)("br",null),"2",(0,r.mdx)("br",null),"c"))),(0,r.mdx)("p",null,"It can be encoded in LineLog bytecode like:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"# Addr: Instruction\n     0: JL   1 8\n     1: LINE 1 0\n     2: JGE  3 6\n     3: LINE 1 1\n     4: JL   2 7\n     5: LINE 2 2\n     6: LINE 2 3\n     7: LINE 1 2\n     8: END\n")),(0,r.mdx)("p",null,"To check out a specified revision, set ",(0,r.mdx)("inlineCode",{parentName:"p"},"Current Rev")," to the revision to check\nout, then execute the instructions from the beginning."),(0,r.mdx)("p",null,"Here are the steps to check out each revision:"),(0,r.mdx)(l.default,{mdxType:"Tabs"},(0,r.mdx)(i.default,{value:"r0",label:"Rev 0",mdxType:"TabItem"},(0,r.mdx)("ul",null,(0,r.mdx)("li",null,"Address 0: JL 1 8: Jump to address 8, because Current Rev (0) < 1."),(0,r.mdx)("li",null,"Address 8: END: Stop execution. The content is empty."))),(0,r.mdx)(i.default,{value:"r1",label:"Rev 1",default:!0,mdxType:"TabItem"},(0,r.mdx)("ul",null,(0,r.mdx)("li",null,"Address 0: JL 1 8: Do nothing, because Current Rev (1) is not < 1."),(0,r.mdx)("li",null,'Address 1: LINE 1 0: Append the first line from rev 1 ("a").'),(0,r.mdx)("li",null,"Address 2: JGE 3 6: Do nothing, because 1 is not \u2265 3."),(0,r.mdx)("li",null,'Address 3: LINE 1 1: Append the second line from rev 1 ("b").'),(0,r.mdx)("li",null,"Address 4: JL 2 7: Jump to address 7, because 1 < 2."),(0,r.mdx)("li",null,'Address 7: LINE 1 2: Append the third line from rev 1 ("c").'),(0,r.mdx)("li",null,'Address 8: END: Stop. The final content is "abc".'))),(0,r.mdx)(i.default,{value:"r2",label:"Rev 2",mdxType:"TabItem"},(0,r.mdx)("ul",null,(0,r.mdx)("li",null,"Address 0: JL 1 8: Do nothing, because Current Rev (2) is not < 1."),(0,r.mdx)("li",null,'Address 1: LINE 1 0: Append the first line from rev 1 ("a").'),(0,r.mdx)("li",null,"Address 2: JGE 3 6: Do nothing, because 2 is not \u2265 3."),(0,r.mdx)("li",null,'Address 3: LINE 1 1: Append the second line from rev 1 ("b").'),(0,r.mdx)("li",null,"Address 4: JL 2 7: Do nothing, because 2 is not < 2."),(0,r.mdx)("li",null,'Address 5: LINE 2 2: Append the 3rd line from rev 2 ("1").'),(0,r.mdx)("li",null,'Address 6: LINE 2 3: Append the 4th line from rev 2 ("2").'),(0,r.mdx)("li",null,'Address 7: LINE 1 2: Append the third line from rev 1 ("c").'),(0,r.mdx)("li",null,'Address 8: END: Stop. The final content is "ab12c".'))),(0,r.mdx)(i.default,{value:"r3",label:"Rev 3",mdxType:"TabItem"},(0,r.mdx)("ul",null,(0,r.mdx)("li",null,"Address 0: JL 1 8: Do nothing, because Current Rev (3) is not < 1."),(0,r.mdx)("li",null,'Address 1: LINE 1 0: Append the first line from rev 1 ("a").'),(0,r.mdx)("li",null,"Address 2: JGE 3 6: Jump to address 6, because 3 \u2265 3."),(0,r.mdx)("li",null,'Address 6: LINE 2 3: Append the 4th line from rev 2 ("2").'),(0,r.mdx)("li",null,'Address 7: LINE 1 2: Append the third line from rev 1 ("c").'),(0,r.mdx)("li",null,'Address 8: END: Stop. The final content is "a2c".')))),(0,r.mdx)("h3",{id:"checkout-and-annotate"},"Checkout and Annotate"),(0,r.mdx)("p",null,'Note the lines that are not changed across multiple revisions, such as "a" only\noccurs once as ',(0,r.mdx)("inlineCode",{parentName:"p"},"LINE 1 0")," in the bytecode. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"LINE")," instruction points to the\nrevision and line that introduces the line. By tracking the operands of ",(0,r.mdx)("inlineCode",{parentName:"p"},"LINE"),"\ninstructions in addition to line contents, LineLog could also produce the\n",(0,r.mdx)("inlineCode",{parentName:"p"},"annotate")," (also called ",(0,r.mdx)("inlineCode",{parentName:"p"},"blame"),") result at the same time."),(0,r.mdx)("p",null,"In LineLog, the checkout and annotate operation are basically the same."),(0,r.mdx)("h3",{id:"range-of-revisions"},"Range of Revisions"),(0,r.mdx)("p",null,'A variation of the interpretation is to treat "Current Rev" as a range, not a\nsingle fixed revision number. More specifically, given an inclusive range from\n',(0,r.mdx)("inlineCode",{parentName:"p"},"minRev")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"maxRev"),", treat ",(0,r.mdx)("inlineCode",{parentName:"p"},"JL"),' as "< ',(0,r.mdx)("inlineCode",{parentName:"p"},"maxRev"),'", ',(0,r.mdx)("inlineCode",{parentName:"p"},"JGE"),' as ">= ',(0,r.mdx)("inlineCode",{parentName:"p"},"minRev"),'". This\ncan produce all lines that existed in the revision range, in a reasonable order,\nlike:'),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"rev 1: a\nrev 1: b\nrev 2: 1\nrev 2: 2\nrev 1: c\n")),(0,r.mdx)("h3",{id:"linear-history"},"Linear History"),(0,r.mdx)("p",null,"LineLog assumes linear history. The revision comparisons are done using direct\ninteger comparisons. It might be not too difficult to support non-linear\nhistory (i.e.  with merges) by changing the revision comparisons to consider\nthe graph topology. But that hasn't been attempted due to lack of use-cases so\nfar."),(0,r.mdx)("h2",{id:"editing-linelog"},"Editing LineLog"),(0,r.mdx)("p",null,"LineLog provides a method for editing: ",(0,r.mdx)("inlineCode",{parentName:"p"},"replace_lines(brev, a1, a2, b1, b2)"),".\nIt means replacing the line range ",(0,r.mdx)("inlineCode",{parentName:"p"},"[a1, a2)")," from the current checkout to line\nrange ",(0,r.mdx)("inlineCode",{parentName:"p"},"[b1, b2)")," in the given ",(0,r.mdx)("inlineCode",{parentName:"p"},"brev")," revision. This covers insertion and\ndeletion too. If ",(0,r.mdx)("inlineCode",{parentName:"p"},"a1")," equals to ",(0,r.mdx)("inlineCode",{parentName:"p"},"a2"),", it is an insertion. If ",(0,r.mdx)("inlineCode",{parentName:"p"},"b1")," equals to\n",(0,r.mdx)("inlineCode",{parentName:"p"},"b2"),", it means lines from ",(0,r.mdx)("inlineCode",{parentName:"p"},"a1")," to ",(0,r.mdx)("inlineCode",{parentName:"p"},"a2")," are deleted in revision ",(0,r.mdx)("inlineCode",{parentName:"p"},"brev"),"."),(0,r.mdx)("p",null,"This is implemented by appending a block that appends the lines from the\n",(0,r.mdx)("inlineCode",{parentName:"p"},"brev"),", and removes lines from ",(0,r.mdx)("inlineCode",{parentName:"p"},"a"),". Then change the ",(0,r.mdx)("inlineCode",{parentName:"p"},"LINE")," instruction for the\n",(0,r.mdx)("inlineCode",{parentName:"p"},"a1")," line to point to the added block."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"# Before             # After\n# Addr: Instruction  # Addr: Instruction\n      : ...                : ...\n    a1: <a1's LINE>     a1 : J len\n  a1+1: ...           a1+1 : ...\n      : ...                : ...\n    a2: ...             a2 : ...\n      : ...                : ...\n   len: N/A            len : JL brev p\n                           : LINE brev b1\n                           : LINE brev b1+1\n                           : ...\n                           : LINE brev b2-1\n                         p : JGE brev a2\n                           : <a1's LINE> (copied)\n                           : J a1+1\n")),(0,r.mdx)("p",null,"To construct LineLog for a file, one needs to run through the contents of revisions\nof the file in commit order, calculate diffs for adjacent revisions, and then\nfeed LineLog the diffs using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"replace_lines")," method."),(0,r.mdx)("p",null,"Usually ",(0,r.mdx)("inlineCode",{parentName:"p"},"replace_lines")," is used to edit the latest revision. However, it can\nalso be used to edit past revisions, if past revisions are checked out. This\nis how the ",(0,r.mdx)("inlineCode",{parentName:"p"},"absorb")," command works under the hood."))}c.isMDXComponent=!0}}]);