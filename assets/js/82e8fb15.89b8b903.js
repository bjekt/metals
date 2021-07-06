(self.webpackChunk=self.webpackChunk||[]).push([[2010],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>m,kt:()=>c});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=l.createContext({}),p=function(t){var e=l.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return l.createElement(o.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},u=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,o=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),u=p(a),c=n,k=u["".concat(o,".").concat(c)]||u[c]||h[c]||r;return a?l.createElement(k,i(i({ref:e},m),{},{components:a})):l.createElement(k,i({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5643:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>s,metadata:()=>o,toc:()=>p,default:()=>h});var l=a(2122),n=a(9756),r=(a(7294),a(3905)),i=["components"],s={author:"Tomasz Godzik",title:"Metals v0.9.3 - Lithium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},o={permalink:"/metals/blog/2020/08/19/lithium",source:"@site/blog/2020-08-19-lithium.md",title:"Metals v0.9.3 - Lithium",description:"We're happy to announce the release of Metals v0.9.3, which adds a couple of",date:"2020-08-19T00:00:00.000Z",formattedDate:"August 19, 2020",tags:[],readingTime:5.51,truncated:!1,prevItem:{title:"Metals v0.9.4 - Lithium",permalink:"/metals/blog/2020/09/21/lithium"},nextItem:{title:"A Dive into Configuring Metals",permalink:"/metals/blog/2020/07/23/configuring-a-client"}},p=[{value:"TL;DR",id:"tldr",children:[]},{value:"sbt script support",id:"sbt-script-support",children:[]},{value:"Scala 3 worksheet support",id:"scala-3-worksheet-support",children:[]},{value:"Running main classes from dependencies",id:"running-main-classes-from-dependencies",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Merged PRs",id:"merged-prs",children:[]},{value:"v0.9.3 (2020-08-19)",id:"v093-2020-08-19",children:[]}],m={toc:p};function h(t){var e=t.components,a=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,l.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We're happy to announce the release of Metals v0.9.3, which adds a couple of\nuseful new features as well as support for Scala 0.25.0 and 0.26.0-RC1."),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Commits since last release"),(0,r.kt)("td",{align:"center"},"123")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Merged PRs"),(0,r.kt)("td",{align:"center"},"59")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Contributors"),(0,r.kt)("td",{align:"center"},"9")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Closed issues"),(0,r.kt)("td",{align:"center"},"31")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"New features"),(0,r.kt)("td",{align:"center"},"3")))),(0,r.kt)("p",null,"For full details: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/26?closed=1"},"https://github.com/scalameta/metals/milestone/26?closed=1")),(0,r.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text, Atom and Eclipse. Metals is developed at the\n",(0,r.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,r.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nwith the help from ",(0,r.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from\nthe community."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sbt script support with hover, completions and go to definition."),(0,r.kt)("li",{parentName:"ul"},"Scala 3 worksheet support"),(0,r.kt)("li",{parentName:"ul"},"Scala 0.25.0 and 0.26.0-RC1 support."),(0,r.kt)("li",{parentName:"ul"},"Main classes from dependencies can now be run")),(0,r.kt)("h2",{id:"sbt-script-support"},"sbt script support"),(0,r.kt)("p",null,"Thanks to the great work by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dos65"},"dos65")," Metals now\nsupports sbt script files as well as build's Scala files. The full list of\ncurrently supported features is available\n",(0,r.kt)("a",{parentName:"p",href:"/metals/docs#additional-file-types"},"here"),"."),(0,r.kt)("p",null,"sbt support is is achieved by generating additional ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.sbt")," file for each\nlevel of sbt's project. For ",(0,r.kt)("inlineCode",{parentName:"p"},"build.sbt")," we now generate\n",(0,r.kt)("inlineCode",{parentName:"p"},"project/project/metals.sbt"),", for ",(0,r.kt)("inlineCode",{parentName:"p"},"project/other.sbt"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"project/project/project/metals.sbt")," etc. This is needed for the Bloop plugin to\nproperly generate information in the ",(0,r.kt)("inlineCode",{parentName:"p"},".bloop")," configuration files. It's\nrecommended to gitignore ",(0,r.kt)("inlineCode",{parentName:"p"},"metals.sbt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".bloop")," anywhere in the file tree."),(0,r.kt)("h2",{id:"scala-3-worksheet-support"},"Scala 3 worksheet support"),(0,r.kt)("p",null,"Finally, it is now possible to run worksheets for Scala 3 starting with version\n0.26.0-RC1. To try it out users need to create the worksheet inside of a Scala 3\nsource directory and then they can be used the same way as with previously\nsupported worksheets."),(0,r.kt)("p",null,"This is a great place for anyone to experiment with Scala 3 and see what is\ncoming around the corner!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/DZvz3Le.gif",alt:"worksheet-sample"})),(0,r.kt)("h2",{id:"running-main-classes-from-dependencies"},"Running main classes from dependencies"),(0,r.kt)("p",null,"Previously, users could only run main classes that are defined in the\nsourcecode, which made it impossible to run and debug in certain frameworks such\nas the ",(0,r.kt)("a",{parentName:"p",href:"https://www.playframework.com/"},"Play Framework"),". Metals now searches the\nclasspath additionally to find any classes that are defined by the user and not\navailable in the main sources."),(0,r.kt)("p",null,"To run any such class a full name needs to be provided via the configuration."),(0,r.kt)("p",null,"For example in Visual Studio Code this would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "scala",\n      "request": "launch",\n      "name": "Play main",\n      "mainClass": "play.core.server.ProdServerStart",\n      "buildTarget": "root",\n      "args": [],\n      "jvmOptions": []\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"In other editors users need to provide the same parameters for the run\nconfiguration."),(0,r.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed breakpoints are no longer hit."),(0,r.kt)("li",{parentName:"ul"},"Compilation is invoked only once for any change."),(0,r.kt)("li",{parentName:"ul"},"Worksheets now display types next to the code."),(0,r.kt)("li",{parentName:"ul"},"Fixed wrong completions in string interpolation."),(0,r.kt)("li",{parentName:"ul"},"Bloop now copies old artifacts by default even if the workspace does not\ncompile."),(0,r.kt)("li",{parentName:"ul"},"Fixed duplicate code actions in case of range selection."),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("inlineCode",{parentName:"li"},"metals.enableStripMargin")," option to work without restarting the\nworkspace."),(0,r.kt)("li",{parentName:"ul"},"Signature help now also triggers when typing ",(0,r.kt)("inlineCode",{parentName:"li"},","))),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)("p",null,"Big thanks to everybody who contributed to this release or reported an issue!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.9.2..v0.9.3\nTomasz Godzik\nScala Steward\nChris Kipp\nCheng Lian\nVadim Chelyshov\nAdrien Piquerez\nAyoub Benali\nKrzysztof Bochenek\nOlafur Pall Geirsson\n\n")),(0,r.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,r.kt)("h2",{id:"v093-2020-08-19"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.9.3"},"v0.9.3")," (2020-08-19)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.9.2...v0.9.3"},"Full Changelog")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Document how to run or debug applications\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2005"},"#","2005"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Properly detect semanticdb target for Scala 3\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2004"},"#","2004"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,r.kt)("li",{parentName:"ul"},"Add try/catch around unsafe code block.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2002"},"#","2002"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,r.kt)("li",{parentName:"ul"},"Allow to remove all breakpoints when debugging\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1992"},"#","1992"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update information about Sbt, Ammonite and worksheet support\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1994"},"#","1994"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update munit, sbt-munit to 0.7.11\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2000"},"#","2000"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Make sure we don't compile twice for open files\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1993"},"#","1993"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-mdoc to 2.2.5\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/2001"},"#","2001"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update jol-core to 0.12\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1999"},"#","1999"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update flyway-core to 6.5.4\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1998"},"#","1998"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update ammonite-util to 2.2.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1997"},"#","1997"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update jackson-databind to 2.11.2\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1996"},"#","1996"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-buildinfo to 0.10.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1995"},"#","1995"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Add types to worksheet values\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1990"},"#","1990"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Allow running main classes from dependencies\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1989"},"#","1989"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add support for Sbt's Scala files\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1988"},"#","1988"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Don't run worksheets on Scala 0.25.0 or lower\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1986"},"#","1986"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix go to defintion for Sbt's Scala sources\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1984"},"#","1984"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add in a few missing docs on the extensions and commands.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1980"},"#","1980"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Change hardcoded \\$(info) icon to read from ClientConfig instead.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1982"},"#","1982"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Add support for worksheets in Scala 3\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1979"},"#","1979"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Simplify logic to add metals.sbt files and make sure it's tested\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1978"},"#","1978"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add checking exact name to all references() invocations\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1976"},"#","1976"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Adjust locations returned from the presentation compiler\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1972"},"#","1972"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Sbt support - multiply bsp connections\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1865"},"#","1865"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix ",(0,r.kt)("inlineCode",{parentName:"li"},"filterText")," value for completion item in string interpolation\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1949"},"#","1949"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,r.kt)("li",{parentName:"ul"},"Add CleanCompile to server commands documentation\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1970"},"#","1970"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kpbochenek"},"kpbochenek"),")"),(0,r.kt)("li",{parentName:"ul"},"Change implicits to Dotty syntax.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1967"},"#","1967"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump recommended scalafmt version and local scalafmt version to 2.6.4\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1968"},"#","1968"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Update ammonite-util to 2.1.4-13-fb16e4e\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1955"},"#","1955"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update directory-watcher to 0.10.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1961"},"#","1961"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update flyway-core to 6.5.3\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1962"},"#","1962"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Bump default mill version and also add it to BuildInfo\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1954"},"#","1954"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Update sbt-munit to 0.7.10\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1964"},"#","1964"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update jol-core to 0.11\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1963"},"#","1963"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update ammonite-runner to 0.3.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1960"},"#","1960"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update coursier to 2.0.0-RC6-24\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1959"},"#","1959"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update ujson to 1.2.0 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1958"},"#","1958"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update requests to 0.6.5\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1957"},"#","1957"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update pprint to 0.6.0 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1956"},"#","1956"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scala-steward"},"scala-steward"),")"),(0,r.kt)("li",{parentName:"ul"},"Update Bloop version to support broken workspaces\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1953"},"#","1953"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Update Scala 3 version to 0.26.0-RC1\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1951"},"#","1951"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Enable BuildInfo for mtags3\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1950"},"#","1950"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix duplicated code actions\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1947"},"#","1947"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Fix enableStripMargin setting\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1946"},"#","1946"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Mark BillLspSuite.automatic-reconnect as flaky\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1942"},"#","1942"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add more documentation about worksheets.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1945"},"#","1945"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Add in blog post about configuring Metals.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1940"},"#","1940"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Add in , as a trigger for SignatureHelp.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1944"},"#","1944"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,r.kt)("li",{parentName:"ul"},"Update to Scala 3 to 0.25.0 version\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1939"},"#","1939"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add -Ximport-suggestion-timeout 0 to the presentation compiler options\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1938"},"#","1938"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add missing docs and move versions to a more prominent location.\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1934"},"#","1934"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Take into account server property in statusBarState\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1937"},"#","1937"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ayoub-benali"},"ayoub-benali"),")"),(0,r.kt)("li",{parentName:"ul"},"Update organize-imports to 0.4.0\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1933"},"#","1933"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/liancheng"},"liancheng"),")"),(0,r.kt)("li",{parentName:"ul"},"Add Bloop jvmopts in tests to limit memory used by it\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1930"},"#","1930"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Make sure a file exists when searching for definition\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1929"},"#","1929"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},'Reverting "Update interface to 0.0.24 (#1918)"\n',(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1928"},"#","1928"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add additional warn-unused flags\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1911"},"#","1911"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,r.kt)("li",{parentName:"ul"},"Add release notes for Metals 0.9.2\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/1915"},"#","1915"),"\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}h.isMDXComponent=!0}}]);