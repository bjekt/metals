(self.webpackChunk=self.webpackChunk||[]).push([[713],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>m,kt:()=>h});var r=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(a),h=l,f=c["".concat(s,".").concat(h)]||c[h]||u[h]||n;return a?r.createElement(f,i(i({ref:e},m),{},{components:a})):r.createElement(f,i({ref:e},m))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2426:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>o,metadata:()=>s,toc:()=>p,default:()=>u});var r=a(2122),l=a(9756),n=(a(7294),a(3905)),i=["components"],o={author:"Tomasz Godzik",title:"Metals v0.7.6 - Thorium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},s={permalink:"/metals/blog/2019/09/23/thorium",source:"@site/blog/2019-09-23-thorium.md",title:"Metals v0.7.6 - Thorium",description:"We are excited to announce the release of Metals v0.7.6, which will most likely",date:"2019-09-23T00:00:00.000Z",formattedDate:"September 23, 2019",tags:[],readingTime:2.215,truncated:!1,prevItem:{title:"Metals v0.8.0 - Cobalt",permalink:"/metals/blog/2020/01/10/cobalt"},nextItem:{title:"Metals v0.7.5 - Thorium",permalink:"/metals/blog/2019/09/12/thorium"}},p=[{value:"TL;DR",id:"tldr",children:[]},{value:"Add support for Scala 2.12.10 and 2.13.1",id:"add-support-for-scala-21210-and-2131",children:[]},{value:"Formatting on paste for multiline strings",id:"formatting-on-paste-for-multiline-strings",children:[]},{value:"Fixes for autofill feature",id:"fixes-for-autofill-feature",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Merged PRs",id:"merged-prs",children:[]},{value:"v0.7.6 (2019-09-23)",id:"v076-2019-09-23",children:[]}],m={toc:p};function u(t){var e=t.components,a=(0,l.Z)(t,i);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We are excited to announce the release of Metals v0.7.6, which will most likely\nbe the last release before the v0.8.0 one. This release includes support for new\nScala versions (2.12.10, 2.13.1) and a couple of fixes. It also adds a new\nformatting on paste feature for multiline strings."),(0,n.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Atom, Vim,\nSublime Text and Emacs. Metals is developed at the\n",(0,n.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,n.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nalong with contributors from the community."),(0,n.kt)("p",null,"In this release we merged 11 PRs and closed 5 issues, full details:\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/18?closed=1"},"https://github.com/scalameta/metals/milestone/18?closed=1")),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,"Check out the website and give Metals a try: ",(0,n.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add support for Scala 2.12.10 and 2.13.1"),(0,n.kt)("li",{parentName:"ul"},"formatting on paste for multiline strings"),(0,n.kt)("li",{parentName:"ul"},"fixes for autofill feature")),(0,n.kt)("h2",{id:"add-support-for-scala-21210-and-2131"},"Add support for Scala 2.12.10 and 2.13.1"),(0,n.kt)("p",null,"Thanks to @gabro's continuing effort we were able to add support for both new\nScala versions. Those versions fix a couple of important regressions and are now\navailable to use with Metals!"),(0,n.kt)("h2",{id:"formatting-on-paste-for-multiline-strings"},"Formatting on paste for multiline strings"),(0,n.kt)("p",null,"Whenever text is pasted into a multiline string with ",(0,n.kt)("inlineCode",{parentName:"p"},"|")," it will be properly\nformatted by Metals:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/yJLAIxQ.gif",alt:"format-on-paste"})),(0,n.kt)("p",null,"To enable this feature you need to enable formatting on paste in your editor of\nchoice. In Visual Studio Code it can be done via modifying a checkbox:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/OaBxwer.png",alt:"format-on-paste"})),(0,n.kt)("h2",{id:"fixes-for-autofill-feature"},"Fixes for autofill feature"),(0,n.kt)("p",null,"After releasing the experimental autofill feature we addressed feedback by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"not filling in the default arguments"),(0,n.kt)("li",{parentName:"ul"},"adding ",(0,n.kt)("inlineCode",{parentName:"li"},"???")," as a first option when alternative values are available to avoid\nmistakes"),(0,n.kt)("li",{parentName:"ul"},"add subtypes as valid values"),(0,n.kt)("li",{parentName:"ul"},"only show autofill option when using named parameters or by explicitly typing\n",(0,n.kt)("inlineCode",{parentName:"li"},"autofill..."))),(0,n.kt)("p",null,"Let us know if you have any further feedback!"),(0,n.kt)("h2",{id:"contributors"},"Contributors"),(0,n.kt)("p",null,"Big thanks to everybody who contributed to this release!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.7.5..v0.7.6\nTomasz Godzik\nMarek \u017barnowski\nGabriele Petronella\n\xd3lafur P\xe1ll Geirsson\nSam Halliday\n")),(0,n.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,n.kt)("h2",{id:"v076-2019-09-23"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.7.6"},"v0.7.6")," (2019-09-23)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.7.5...v0.7.6"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"replace java streams with generators\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/938"},"#","938"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/marek1840"},"marek1840"),")"),(0,n.kt)("li",{parentName:"ul"},"ENSIME is not an alternative\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/936"},"#","936"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/fommil"},"fommil"),")"),(0,n.kt)("li",{parentName:"ul"},"Swap field to type parameter for scala Type\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/933"},"#","933"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Refactor autofill option ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/932"},"#","932"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Make sure we continue searching for symbols in try.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/930"},"#","930"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Disable flaky test. ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/918"},"#","918"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,n.kt)("li",{parentName:"ul"},"Fix indentation when adding pipes in multiline string.\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/922"},"#","922"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Remove dealias to properly support type\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/921"},"#","921"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Simplify testing when calculating position and automatically add pipes when\ncopy pasting input ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/919"},"#","919"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,n.kt)("li",{parentName:"ul"},"Add Scala 2.12.10 support and use 2.12.10 on Metals\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/913"},"#","913"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,n.kt)("li",{parentName:"ul"},"Update ",(0,n.kt)("inlineCode",{parentName:"li"},"isCompiled")," status of the build target regardless of the compilation\nresult ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/907"},"#","907"),"\n(",(0,n.kt)("a",{parentName:"li",href:"https://github.com/marek1840"},"marek1840"),")")))}u.isMDXComponent=!0}}]);