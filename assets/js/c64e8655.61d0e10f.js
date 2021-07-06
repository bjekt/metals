(self.webpackChunk=self.webpackChunk||[]).push([[8784],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},222:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>c,default:()=>p});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=["components"],l={id:"project-goals",title:"Project Goals"},s={unversionedId:"contributors/project-goals",id:"contributors/project-goals",isDocsHomePage:!1,title:"Project Goals",description:"This document describes the project goals of Metals. This document does not",source:"@site/target/docs/contributors/project-goals.md",sourceDirName:"contributors",slug:"/contributors/project-goals",permalink:"/metals/docs/contributors/project-goals",editUrl:"https://github.com/scalameta/metals/edit/main/docs/target/docs/contributors/project-goals.md",version:"current",frontMatter:{id:"project-goals",title:"Project Goals"},sidebar:"docs",previous:{title:"sbt",permalink:"/metals/docs/build-tools/sbt"},next:{title:"Contributing to Metals",permalink:"/metals/docs/contributors/getting-started"}},c=[{value:"Simple installation",id:"simple-installation",children:[]},{value:"Robust navigation",id:"robust-navigation",children:[]},{value:"Low CPU and memory usage",id:"low-cpu-and-memory-usage",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document describes the project goals of Metals. This document does not\ndescribe existing functionality of Metals but rather what user experience we\nwant Metals to have in the future."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#simple-installation"},(0,r.kt)("strong",{parentName:"a"},"Simple installation")),": importing a project should be\nsimple and require as few steps as possible."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#robust-navigation"},(0,r.kt)("strong",{parentName:"a"},"Robust navigation")),": goto definition should work\neverywhere, including for external Scala/Java dependencies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#low-cpu-and-memory-usage"},(0,r.kt)("strong",{parentName:"a"},"Low CPU and memory usage")),": indexing should run\nin the background and not get in the way of your coding.")),(0,r.kt)("p",null,"We acknowledge that simple installation and robust navigation alone is not\nenough to make a great language server. A great language server should also\nsupport correct diagnostics, fast completions and solid refactorings. However,\nwe believe navigation is an important first milestone that needs full attention\nbefore focusing on other features."),(0,r.kt)("h2",{id:"simple-installation"},"Simple installation"),(0,r.kt)("p",null,"The first thing you do with an IDE is boring but critical: import a project. The\n",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/language-server-protocol/specification"},"Language Server Protocol (LSP)"),"\ndoes not provide utilities to extract metadata such as source directories,\ndependencies and compiler flags from a build tool. Instead, Metals uses the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/bsp/blob/master/docs/bsp.md"},"Build Server Protocol (BSP)"),"\nto standardize on communication between a language server and build tool. The\nsame way LSP allows Metals to support multiple editors with a unified interface,\nBSP allows Metals to import projects from multiple build tools with the same\ninterface."),(0,r.kt)("h2",{id:"robust-navigation"},"Robust navigation"),(0,r.kt)("p",null,"Goto definition and find references is a great way to navigate a codebase and\nunderstand how it works. Metals uses ",(0,r.kt)("a",{parentName:"p",href:"https://scalameta.org/"},"SemanticDB")," to\npower code navigation, SemanticDB is a data model for semantic information about\nprograms in Scala and other languages. Indexing happens during batch compilation\nin the build tool using a similar architecture as\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=jGJhnIT-D2M"},"Index-While-Building"),", which is\nused in Xcode 9 and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apple/sourcekit-lsp#indexing-while-building"},"sourcekit-lsp"),"."),(0,r.kt)("p",null,'Code navigation is not a single feature, it is a collection of several features\nthat help you understand a codebase. Below is a list of features that Metals\nconsiders as "code navigation".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Goto definition (",(0,r.kt)("inlineCode",{parentName:"li"},"textDocument/definition"),").",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"project -> project."),(0,r.kt)("li",{parentName:"ul"},"project -> Scala dependency."),(0,r.kt)("li",{parentName:"ul"},"project -> Java dependency."),(0,r.kt)("li",{parentName:"ul"},"dependency -> dependency."))),(0,r.kt)("li",{parentName:"ul"},"Find references (",(0,r.kt)("inlineCode",{parentName:"li"},"textDocument/references"),").",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"project sources"),(0,r.kt)("li",{parentName:"ul"},"Scala dependency sources"),(0,r.kt)("li",{parentName:"ul"},"Java dependency sources"))),(0,r.kt)("li",{parentName:"ul"},"Highlight references to a symbol in current buffer\n(",(0,r.kt)("inlineCode",{parentName:"li"},"textDocument/documentHighlight"),")."),(0,r.kt)("li",{parentName:"ul"},"Goto symbol in file (",(0,r.kt)("inlineCode",{parentName:"li"},"textDocument/documentSymbol"),")"),(0,r.kt)("li",{parentName:"ul"},"Goto symbol in workspace (",(0,r.kt)("inlineCode",{parentName:"li"},"workspace/symbol"),")"),(0,r.kt)("li",{parentName:"ul"},"Symbol outline in the sidebar of current buffer\n(",(0,r.kt)("inlineCode",{parentName:"li"},"textDocument/documentSymbol"),")."),(0,r.kt)("li",{parentName:"ul"},"Goto implementation (",(0,r.kt)("inlineCode",{parentName:"li"},"textDocument/implementation"),")"),(0,r.kt)("li",{parentName:"ul"},"Goto type definition (",(0,r.kt)("inlineCode",{parentName:"li"},"textDocument/typeDefinition"),")"),(0,r.kt)("li",{parentName:"ul"},"Show type of symbol at position (",(0,r.kt)("inlineCode",{parentName:"li"},"textDocument/hover"),")."),(0,r.kt)("li",{parentName:"ul"},"Show type of expression at position (",(0,r.kt)("inlineCode",{parentName:"li"},"textDocument/hover"),").")),(0,r.kt)("h2",{id:"low-cpu-and-memory-usage"},"Low CPU and memory usage"),(0,r.kt)("p",null,"Heavy resource usage is one of the most frequent complaints about IDEs. Low CPU\nand memory usage becomes even more important when working in larger codebases.\nOur goal in Metals is to support code navigation with as low CPU and memory\noverhead as possible without sacrificing rich functionality."))}p.isMDXComponent=!0}}]);