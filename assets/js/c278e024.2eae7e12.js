(self.webpackChunk=self.webpackChunk||[]).push([[1046],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>m,kt:()=>u});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},i=Object.keys(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=l.createContext({}),p=function(t){var e=l.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},m=function(t){var e=p(t.components);return l.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=p(a),u=n,k=c["".concat(s,".").concat(u)]||c[u]||h[u]||i;return a?l.createElement(k,r(r({ref:e},m),{},{components:a})):l.createElement(k,r({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,r=new Array(i);r[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8349:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>o,metadata:()=>s,toc:()=>p,default:()=>h});var l=a(2122),n=a(9756),i=(a(7294),a(3905)),r=["components"],o={author:"Tomasz Godzik",title:"Metals v0.9.0 - Lithium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},s={permalink:"/metals/blog/2020/05/04/lithium",source:"@site/blog/2020-05-04-lithium.md",title:"Metals v0.9.0 - Lithium",description:'We are happy to announce the release of Metals v0.9.0, codename "Lithium", which',date:"2020-05-04T00:00:00.000Z",formattedDate:"May 4, 2020",tags:[],readingTime:6.505,truncated:!1,prevItem:{title:"Metals v0.9.1 - Lithium",permalink:"/metals/blog/2020/07/01/lithium"},nextItem:{title:"Metals v0.5.0 (Redirect)",permalink:"/metals/blog/2020/04/12/mercury"}},p=[{value:"TL;DR",id:"tldr",children:[]},{value:"Basic Scala 3 support",id:"basic-scala-3-support",children:[]},{value:"Improvements related to Bloop/Metals integration",id:"improvements-related-to-bloopmetals-integration",children:[]},{value:"Automatically add &#39;+&#39; on newline inside a string",id:"automatically-add--on-newline-inside-a-string",children:[]},{value:"Code action to import all missing symbols",id:"code-action-to-import-all-missing-symbols",children:[]},{value:"Miscellaneous improvements",id:"miscellaneous-improvements",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Merged PRs",id:"merged-prs",children:[]},{value:"v0.9.0 (2020-05-04)",id:"v090-2020-05-04",children:[]}],m={toc:p};function h(t){var e=t.components,a=(0,n.Z)(t,r);return(0,i.kt)("wrapper",(0,l.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'We are happy to announce the release of Metals v0.9.0, codename "Lithium", which\nmain focus is introducing support for Scala 3 starting with versions 0.23.0 and\n0.24.0-RC1. We also added support for Scala 2.13.2 and a number of other useful\nimprovements.'),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Commits since last release"),(0,i.kt)("td",{align:"center"},"140")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Merged PRs"),(0,i.kt)("td",{align:"center"},"45")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Contributors"),(0,i.kt)("td",{align:"center"},"14")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Closed issues"),(0,i.kt)("td",{align:"center"},"9")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"New features"),(0,i.kt)("td",{align:"center"},"3")))),(0,i.kt)("p",null,"For full details: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/13?closed=1"},"https://github.com/scalameta/metals/milestone/13?closed=1")),(0,i.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text, Atom and Eclipse. Metals is developed at the\n",(0,i.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,i.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,i.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,i.kt)("h2",{id:"tldr"},"TL;DR"),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Scala 2.13.2 and basic Scala 3 support"),(0,i.kt)("li",{parentName:"ul"},"Improvements to the Bloop integration"),(0,i.kt)("li",{parentName:"ul"},"Automatically add '+' on newline when inside a string"),(0,i.kt)("li",{parentName:"ul"},'New Code action: "Import all missing symbols"')),(0,i.kt)("h2",{id:"basic-scala-3-support"},"Basic Scala 3 support"),(0,i.kt)("p",null,"For a couple of the last months we have been working on making Metals work with\nthe Dotty compiler, which will become the new Scala 3. This effort included\ncontributions to Metals, Bloop as well as to Dotty. Thanks to the great help\nfrom the Dotty compiler team, we now have an option to generate semanticDB files\nused for our internal indexes, which allowed some features to work without any\nchanges to the core code. It is also important to mention that without\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jvican"},"jvican")," and his Bloop project, which already\nsupports Scala 3, all this would have taken a much longer time."),(0,i.kt)("p",null,"That said, there are some issues that are lacking in the Scala 3 support that\nare available for 2.x versions. Most notably, we are still missing all of the\nmore advanced completions, filtering and sorting of completion items or auto\nimports. There are also some possible issues connected to optional braces and\ntop level methods features. In the upcoming months we are planning to address\nmost of these issues and implement the lacking features."),(0,i.kt)("p",null,"You can find missing features in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals-feature-requests/issues?q=is%3Aissue+is%3Aopen+label%3Ascala3"},"feature requests repository"),"\nand currently known bugs in the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/issues?q=is%3Aissue+is%3Aopen+label%3A%22Scala+3%22"},"main Metals repo.")),(0,i.kt)("p",null,"The first supported versions will be ",(0,i.kt)("inlineCode",{parentName:"p"},"0.23.0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"0.24.0-RC1"),", which are the\nlatest stable and the latest release candidate respectably. We plan to always\nsupport the latest stable and release candidate until there is a more stable\nrelease cycle for Scala 3."),(0,i.kt)("p",null,"Please do report any issues you encounter, especially connected to some new\nScala 3 features, which will be an immense help to the team."),(0,i.kt)("h2",{id:"improvements-related-to-bloopmetals-integration"},"Improvements related to Bloop/Metals integration"),(0,i.kt)("p",null,"There have been multiple reported issues in the last weeks about hanging\ncompilation, which can make the Metals workspace hard to use. Our top priority\nhas been figuring out all the possible issues both in Metals as well as in\nBloop. Thanks to some fixes done by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jvican"},"jvican"),", and\nsome work on the Metals side on the Bloop integration we're hopeful that some of\nthe issues are becoming less frequent. These fixes are included in this release."),(0,i.kt)("p",null,"We also reworked the Metals tree view to highlight some commands that a user can\nuse to fix their workspace as well as added two new commands:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Clean compile workspace")," - clean compile the whole workspace - might be\nneeded in case of broken compiler caches.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Restart Bloop server")," - restart the Bloop build server, which should help\nwith the cases where compilation would hang."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/PERfNqt.png",alt:"reworked-tree-view"})))),(0,i.kt)("p",null,"Even if those commands help, do not hesitate to report any issues. We are also\nmonitoring the situation ourselves and investigating all problems encountered."),(0,i.kt)("h2",{id:"automatically-add--on-newline-inside-a-string"},"Automatically add '+' on newline inside a string"),(0,i.kt)("p",null,"The Metals team was recently joined by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mlachkar"},"mlachkar"),",\nan engineer from the Scala Center, who already contributed a number of features\nand bug fixes to the project. Thanks to her, we can now easily enter a newline\ninside a single line string and that string will be correctly split with an\nadditional ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/uhF0MOx.gif",alt:"split-line"})),(0,i.kt)("h2",{id:"code-action-to-import-all-missing-symbols"},"Code action to import all missing symbols"),(0,i.kt)("p",null,"Previously, it was only available to import one symbol at a time in case of\nmissing imports. Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/colineto"},"colineto")," we now have\nthe ability to import everything in bulk for every unambiguous import available.\nUnambiguous in this case meaning that there is only one possible import to\nchoose from."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/mmzgJs7.gif",alt:"import-all"})),(0,i.kt)("h2",{id:"miscellaneous-improvements"},"Miscellaneous improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Added an option to ignore .scalafmt.conf creation message."),(0,i.kt)("li",{parentName:"ul"},"Fixed hanging while debugging if workspace had errors."),(0,i.kt)("li",{parentName:"ul"},"Fixed issue with folding in non 2.12.11 workspaces."),(0,i.kt)("li",{parentName:"ul"},'Turn off "Go to parent" code lenses by default due to performance problems in\nlarge workspaces.'),(0,i.kt)("li",{parentName:"ul"},"Fixed false parsing errors in 2.13.x workspaces."),(0,i.kt)("li",{parentName:"ul"},"Added date string to metals logs."),(0,i.kt)("li",{parentName:"ul"},"Fixed issue with additional src directories being created automatically."),(0,i.kt)("li",{parentName:"ul"},'Fixed "Go to implementation" to work with local aliases.'),(0,i.kt)("li",{parentName:"ul"},"Fixed auto-import issue in package objects.")),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("p",null,"Big thanks to everybody who contributed to this release! We had a lot of new\ncontributors doing some really exemplary work."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.8.4..v0.9.0\nAyoub Benali\nTomasz Godzik\nScala Steward\nChris Kipp\nColine Thomas\nMeriam Lachkar\nWin Wang\nElie Poussou\nKrzysztof Bochenek\nOlafur Pall Geirsson\nAleksei Alefirov\nNaoki Takezoe\nNathaniel Fischer\nTomasz Pasternak\n\n")),(0,i.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,i.kt)("h2",{id:"v090-2020-05-04"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.9.0"},"v0.9.0")," (2020-05-04)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.8.4...v0.9.0"},"Full Changelog")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reworked Bloop connection and Tree View\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1677"},"#","1677"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"fix auto import position when package object inside package\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1686"},"#","1686"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/colineto"},"colineto"),")"),(0,i.kt)("li",{parentName:"ul"},"Move additional settings to InitializationOptions\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1684"},"#","1684"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Improve code lens generation time\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1679"},"#","1679"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kpbochenek"},"kpbochenek"),")"),(0,i.kt)("li",{parentName:"ul"},"Don't ask .scalafmt.conf creation again\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1607"},"#","1607"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/takezoe"},"takezoe"),")"),(0,i.kt)("li",{parentName:"ul"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"ClientConfig")," to contain all configuration\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1674"},"#","1674"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Handle return to line in strings in OnTypeFormatting\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1611"},"#","1611"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mlachkar"},"mlachkar"),")"),(0,i.kt)("li",{parentName:"ul"},"Bump Bloop version to check if it solves issues with hanging compilation\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1680"},"#","1680"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Improve rendering of Pants command errors.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1681"},"#","1681"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Allow amending without editor prompt\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1676"},"#","1676"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tpasternak"},"tpasternak"),")"),(0,i.kt)("li",{parentName:"ul"},"Add Bloop zipkin trace debug and verbose settings\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1678"},"#","1678"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wiwa"},"wiwa"),")"),(0,i.kt)("li",{parentName:"ul"},"Update Scala 3 version to 0.23.0\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1671"},"#","1671"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Make sure that the workspace contains no errors when running\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1658"},"#","1658"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Turn off go to parent code lenses by default\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1666"},"#","1666"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Use DefinitionProvider instead of index in RenameProvider\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1637"},"#","1637"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Feature : Code action Import all missing symbols\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1652"},"#","1652"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/coline-lunatech"},"coline-lunatech"),")"),(0,i.kt)("li",{parentName:"ul"},"Add support for Scala 2.13.2\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1659"},"#","1659"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Properly set the arguments field in sever commands documentation\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1606"},"#","1606"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ayoub-benali"},"ayoub-benali"),")"),(0,i.kt)("li",{parentName:"ul"},"Handle initialization options\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1626"},"#","1626"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ayoub-benali"},"ayoub-benali"),")"),(0,i.kt)("li",{parentName:"ul"},"Remove optimisation to reuse semanticdb jar from the classpath\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1657"},"#","1657"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"update dialect of worksheet to scala213\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1656"},"#","1656"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mlachkar"},"mlachkar"),")"),(0,i.kt)("li",{parentName:"ul"},"Add in updated documentation for vim\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1651"},"#","1651"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"Dynamically read fastpass zipkin properties from fastpass/fastpass.properties\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1655"},"#","1655"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wiwa"},"wiwa"),")"),(0,i.kt)("li",{parentName:"ul"},"Detect Scala 3 main outer methods to create code lenses\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1640"},"#","1640"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Delete all created folders created for the FileWatcher\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1629"},"#","1629"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mlachkar"},"mlachkar"),")"),(0,i.kt)("li",{parentName:"ul"},"goto Implementations with local alias types\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1598"},"#","1598"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/eilite"},"eilite"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix NewFileLspSuite on Windows\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1624"},"#","1624"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update Sublime in the editors overview doc\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1631"},"#","1631"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ayoub-benali"},"ayoub-benali"),")"),(0,i.kt)("li",{parentName:"ul"},"Show date in logs ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1630"},"#","1630"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mlachkar"},"mlachkar"),")"),(0,i.kt)("li",{parentName:"ul"},"Add support for Scala 3\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1523"},"#","1523"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Update bloop-config, bloop-frontend, ... to 1.4.0-RC1-192-72a856b6\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1615"},"#","1615"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update guava to 29.0-jre\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1618"},"#","1618"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update flyway-core to 6.3.3\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1619"},"#","1619"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update ipcsocket to 1.0.1\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1621"},"#","1621"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update scalameta, semanticdb-scalac, ... to 4.3.8\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1623"},"#","1623"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt, scripted-plugin to 1.3.9\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1620"},"#","1620"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update metaconfig-core to 0.9.10\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1617"},"#","1617"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update sbt-scalafix to 0.9.14\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1616"},"#","1616"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Update munit, sbt-munit to 0.7.2\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1622"},"#","1622"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,i.kt)("li",{parentName:"ul"},"Don't generate timestamp in ",(0,i.kt)("inlineCode",{parentName:"li"},".bsp/bloop.json")," file.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1612"},"#","1612"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,i.kt)("li",{parentName:"ul"},"Http client delegates ",(0,i.kt)("inlineCode",{parentName:"li"},"metalsInputBox")," to the underlying client\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1613"},"#","1613"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/alekseiAlefirov"},"alekseiAlefirov"),")"),(0,i.kt)("li",{parentName:"ul"},"Add properties for bloop zipkin tracing to fastpass\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1582"},"#","1582"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wiwa"},"wiwa"),")"),(0,i.kt)("li",{parentName:"ul"},"Update millw.bat ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1602"},"#","1602"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kag0"},"kag0"),")"),(0,i.kt)("li",{parentName:"ul"},"Update installation guide for Sublime\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1597"},"#","1597"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ayoub-benali"},"ayoub-benali"),")"),(0,i.kt)("li",{parentName:"ul"},"Add release notes for 0.8.4 version\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1596"},"#","1596"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}h.isMDXComponent=!0}}]);