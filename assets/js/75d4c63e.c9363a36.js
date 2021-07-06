(self.webpackChunk=self.webpackChunk||[]).push([[3726],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(d,l(l({ref:t},u),{},{components:a})):n.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},4997:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>o,metadata:()=>s,toc:()=>p,default:()=>m});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=["components"],o={author:"Tomasz Godzik",title:"Metals v0.7.5 - Thorium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},s={permalink:"/metals/blog/2019/09/12/thorium",source:"@site/blog/2019-09-12-thorium.md",title:"Metals v0.7.5 - Thorium",description:'We are excited to announce the release of Metals v0.7.5 - codename "Thorium" \ud83c\udf89',date:"2019-09-12T00:00:00.000Z",formattedDate:"September 12, 2019",tags:[],readingTime:3.04,truncated:!1,prevItem:{title:"Metals v0.7.6 - Thorium",permalink:"/metals/blog/2019/09/23/thorium"},nextItem:{title:"Metals v0.7.2 - Thorium",permalink:"/metals/blog/2019/09/02/thorium"}},p=[{value:"TL;DR",id:"tldr",children:[]},{value:"Add auto-fill option to case classes",id:"add-auto-fill-option-to-case-classes",children:[]},{value:"Deduce values for named parameters completions",id:"deduce-values-for-named-parameters-completions",children:[]},{value:"Multiple fixes after adding support for Scala 2.12.9",id:"multiple-fixes-after-adding-support-for-scala-2129",children:[]},{value:"Fixes for automatic addition of <code>|</code> in multiline strings",id:"fixes-for-automatic-addition-of--in-multiline-strings",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Merged PRs",id:"merged-prs",children:[]},{value:"v0.7.5 (2019-09-12)",id:"v075-2019-09-12",children:[]}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'We are excited to announce the release of Metals v0.7.5 - codename "Thorium" \ud83c\udf89\nThe release includes couple of bug fixes for 0.7.2, which were present in some\nrare scenarios. We also added a new experimental feature, which we would be\nhappy to get feedback about.'),(0,i.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Atom, Vim,\nSublime Text and Emacs. Metals is developed at the\n",(0,i.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,i.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nalong with contributors from the community."),(0,i.kt)("p",null,"In this release we merged 12 PRs and closed 6 issues, full details:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/17?closed=1"},"https://github.com/scalameta/metals/milestone/17?closed=1")),(0,i.kt)("h2",{id:"tldr"},"TL;DR"),(0,i.kt)("p",null,"Check out the website and give Metals a try: ",(0,i.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add auto-fill option to case classes"),(0,i.kt)("li",{parentName:"ul"},"deduce values for named parameters completions"),(0,i.kt)("li",{parentName:"ul"},"multiple fixes after adding support for Scala 2.12.9"),(0,i.kt)("li",{parentName:"ul"},"fixes for automatic addition of ",(0,i.kt)("inlineCode",{parentName:"li"},"|")," in multiline strings")),(0,i.kt)("h2",{id:"add-auto-fill-option-to-case-classes"},"Add auto-fill option to case classes"),(0,i.kt)("p",null,"Whenever we invoke a method and try completions inside the brackets there is an\nadditional option to allow Metals to deduce what should be filled for each\nparameter."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/8pCiMqE.gif",alt:"auto-fill"})),(0,i.kt)("p",null,"This algorithm checks if there exists a value in scope with the same type as the\nparameters' and then works according to the rules below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'1. If there is only one candidate, use it.\n2. If there is more than one, give user an alternative to choose one of them.\n3. Otherwise use use "???".\n')),(0,i.kt)("p",null,"This feature also uses the snippets syntax to allow to quickly go over the\nauto-filled parameters and choose or replace the auto-filled values."),(0,i.kt)("h2",{id:"deduce-values-for-named-parameters-completions"},"Deduce values for named parameters completions"),(0,i.kt)("p",null,"Leveraging the work that went into the previous feature, we were also able to\nprovide additional support for concrete values in named parameter completions."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/m11xixy.gif",alt:"deduce"})),(0,i.kt)("p",null,"We generate completion item for each value that fits the type of the parameter."),(0,i.kt)("h2",{id:"multiple-fixes-after-adding-support-for-scala-2129"},"Multiple fixes after adding support for Scala 2.12.9"),(0,i.kt)("p",null,"After updating Metals to work with Scala 2.12.9 it turned out that completions\nand hover didn't work correctly and due to the presentation compiler crashing in\nthe following scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"whenever an older version of SemanticDB plugin was used as was the case with\nMill"),(0,i.kt)("li",{parentName:"ul"},"when using Scala 2.12.8 without SemanticDB plugin")),(0,i.kt)("p",null,"Both issues have now been fixed and additionally we updated the default Mill\nversion to 0.5.1, which works correctly with Scala 2.12.9."),(0,i.kt)("h2",{id:"fixes-for-automatic-addition-of--in-multiline-strings"},"Fixes for automatic addition of ",(0,i.kt)("inlineCode",{parentName:"h2"},"|")," in multiline strings"),(0,i.kt)("p",null,"We now make sure that ",(0,i.kt)("inlineCode",{parentName:"p"},"stripMargin")," exists when adding ",(0,i.kt)("inlineCode",{parentName:"p"},"|")," automatically in\nmultiline strings. This could cause issues in some scenarios, where multiline\nstring contained ",(0,i.kt)("inlineCode",{parentName:"p"},"|"),", but it was not only used for formatting."),(0,i.kt)("p",null,"Additionally, we fixed the feature to also work in interpolated strings, which\nwas missing in the previous release."),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("p",null,"Big thanks to everybody who contributed to this release!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.7.2..v0.7.5\nTomasz Godzik\nGabriele Petronella\n\u0141ukasz Byczy\u0144ski\nOlafur Pall Geirsson\n")),(0,i.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,i.kt)("h2",{id:"v075-2019-09-12"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.7.5"},"v0.7.5")," (2019-09-12)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.7.2...v0.7.5"},"Full Changelog")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Revert sbt version to 1.2.8\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/915"},"#","915"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Upgrade to latest sbt-sonatype for faster and more stable releases\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/912"},"#","912"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Update with new Eclipse capabilities\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/911"},"#","911"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mundacho"},"mundacho"),")"),(0,i.kt)("li",{parentName:"ul"},"Check for stripMargin when adding |\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/904"},"#","904"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Add additional tips & tricks to the sublime text documentation\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/906"},"#","906"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/LukaszByczynski"},"LukaszByczynski"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt to 1.3.0 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/905"},"#","905"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix more possible presentation compiler classpath issues\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/901"},"#","901"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update Mill to 0.5.1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/899"},"#","899"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update website overview and add information about Eclipse\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/894"},"#","894"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Retry with clean compiler after ShutdownReq\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/898"},"#","898"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Add automatic value completions on named arguments\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/827"},"#","827"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix links to merged PRs in blogpost\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/896"},"#","896"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Add release notes for v0.7.2\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/886"},"#","886"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}m.isMDXComponent=!0}}]);