(self.webpackChunk=self.webpackChunk||[]).push([[5359],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,d=c["".concat(s,".").concat(h)]||c[h]||u[h]||l;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2257:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>o,metadata:()=>s,toc:()=>p,default:()=>u});var r=a(2122),n=a(9756),l=(a(7294),a(3905)),i=["components"],o={author:"\xd3lafur P\xe1ll Geirsson",title:"Metals v0.7.0 - Thorium",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://github.com/olafurpg.png"},s={permalink:"/metals/blog/2019/06/28/thorium",source:"@site/blog/2019-06-28-thorium.md",title:"Metals v0.7.0 - Thorium",description:'We are excited to announce the release of Metals v0.7.0 - codename "Thorium" \ud83c\udf89',date:"2019-06-28T00:00:00.000Z",formattedDate:"June 28, 2019",tags:[],readingTime:6.65,truncated:!1,prevItem:{title:"Metals v0.7.2 - Thorium",permalink:"/metals/blog/2019/09/02/thorium"},nextItem:{title:"Metals v0.6.1 - Radium",permalink:"/metals/blog/2019/06/11/radium"}},p=[{value:"TL;DR",id:"tldr",children:[]},{value:"Tree views in VS Code",id:"tree-views-in-vs-code",children:[{value:"Projects explorer",id:"projects-explorer",children:[]},{value:"Libraries explorer",id:"libraries-explorer",children:[]},{value:"Reveal active file in Metals side bar",id:"reveal-active-file-in-metals-side-bar",children:[]},{value:"Compilation explorer",id:"compilation-explorer",children:[]},{value:"Help and feedback explorer",id:"help-and-feedback-explorer",children:[]}]},{value:"Support for Scala 2.13",id:"support-for-scala-213",children:[]},{value:"JDK 11 support",id:"jdk-11-support",children:[]},{value:"Improved classpath indexing performance",id:"improved-classpath-indexing-performance",children:[]},{value:"Fallback to &quot;find references&quot; from &quot;goto definition&quot;",id:"fallback-to-find-references-from-goto-definition",children:[]},{value:"Dropping older Scala versions",id:"dropping-older-scala-versions",children:[]},{value:"Fixes for auto importing builds",id:"fixes-for-auto-importing-builds",children:[]},{value:"No more &quot;work in progress&quot;",id:"no-more-work-in-progress",children:[]},{value:"Miscellaneous fixes",id:"miscellaneous-fixes",children:[]},{value:"Contributors",id:"contributors",children:[]},{value:"Merged PRs",id:"merged-prs",children:[]},{value:"v0.7.0 (2019-06-28)",id:"v070-2019-06-28",children:[]}],m={toc:p};function u(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'We are excited to announce the release of Metals v0.7.0 - codename "Thorium" \ud83c\udf89\nThe release includes several new features along with bug fixes.'),(0,l.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Atom, Vim,\nSublime Text and Emacs. Metals is developed at the\n",(0,l.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center")," and ",(0,l.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab"),"\nalong with contributors from the community."),(0,l.kt)("p",null,"In this release we merged 21 PRs and closed 8 issues, full details:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/11?closed=1"},"https://github.com/scalameta/metals/milestone/11?closed=1")),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New tree view in VS Code"),(0,l.kt)("li",{parentName:"ul"},"New support for Scala 2.13"),(0,l.kt)("li",{parentName:"ul"},"New support for JDK 11"),(0,l.kt)("li",{parentName:"ul"},"New improved classpath indexing performance"),(0,l.kt)("li",{parentName:"ul"},'New fallback to "find references" when calling "goto definition" on a symbol\ndefinition'),(0,l.kt)("li",{parentName:"ul"},"Bug fixes for importing builds in Gradle, Mill and sbt"),(0,l.kt)("li",{parentName:"ul"},"Dropped support for deprecated Scala versions 2.11.9, 2.11.10, 2.11.11,\n2.12.4, 2.12.5 and 2.12.6.")),(0,l.kt)("p",null,"Check out the website and give Metals a try: ",(0,l.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/")),(0,l.kt)("h2",{id:"tree-views-in-vs-code"},"Tree views in VS Code"),(0,l.kt)("p",null,'There is now a new "Metals" sidebar in VS Code that contains three tree views:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Build: overview of the build state, with buttons to manually trigger build\nimport."),(0,l.kt)("li",{parentName:"ul"},"Compile: overview of ongoing compilations, with buttons to manually cascade\ncompilation and cancel ongoing compilation."),(0,l.kt)("li",{parentName:"ul"},"Help and feedback: buttons to automate troubleshooting Metals issues and links\nto relevant online resources such as GitHub, Gitter and Twitter.")),(0,l.kt)("h3",{id:"projects-explorer"},"Projects explorer"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1408093/60208747-59589680-9859-11e9-8a09-2a6c38683975.gif",alt:"2019-06-26 20 28 14"})),(0,l.kt)("h3",{id:"libraries-explorer"},"Libraries explorer"),(0,l.kt)("p",null,"Browse symbols that are defined in jars of library dependencies."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1408093/60208786-6e352a00-9859-11e9-8d55-2125c91d506f.gif",alt:"2019-06-26 20 28 51"})),(0,l.kt)("h3",{id:"reveal-active-file-in-metals-side-bar"},"Reveal active file in Metals side bar"),(0,l.kt)("p",null,'There is a new command "Reveal active file in Metals side bar" that focuses the\nlibrary and project explorer to the current open file.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1408093/60277613-33d19880-98fe-11e9-9aee-71c0a0c0861f.gif",alt:"2019-06-27 16 02 33"})),(0,l.kt)("h3",{id:"compilation-explorer"},"Compilation explorer"),(0,l.kt)("p",null,"Get an overview of all compilations that are ongoing in the build. Previously,\nonly a single compilation progress was reported through the status bar."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1408093/60052207-f4743380-96d4-11e9-9192-f71db4100fe9.gif",alt:"2019-06-23 15 41 07"})),(0,l.kt)("h3",{id:"help-and-feedback-explorer"},"Help and feedback explorer"),(0,l.kt)("img",{width:"295",alt:"Screenshot 2019-06-27 at 15 57 15",src:"https://user-images.githubusercontent.com/1408093/60277560-1ef50500-98fe-11e9-8c02-70b841a590c3.png"}),(0,l.kt)("h2",{id:"support-for-scala-213"},"Support for Scala 2.13"),(0,l.kt)("p",null,"Metals now supports Scala 2.13.0! Please upgrade to Scalafmt v2.0.0 in order to\nformat 2.13-specific syntax such as underscore separators (",(0,l.kt)("inlineCode",{parentName:"p"},"1_000_000"),"). Note\nthat completions may in rare situations not work perfectly for Scala 2.13, in\nparticular:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"whitebox string interpolator macros, we had to disable one unit test for 2.13.\nSee ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/issues/777"},"#777"),"."),(0,l.kt)("li",{parentName:"ul"},"better-monadic-for compile plugin, we had to disable one unit test for 2.13.\nSee ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/issues/777"},"#777"),".")),(0,l.kt)("p",null,"Big thanks to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/gabro"},"@gabro")," for leading this effort!"),(0,l.kt)("h2",{id:"jdk-11-support"},"JDK 11 support"),(0,l.kt)("p",null,"Metals can now run on Java 11! To use Java 11 instead of Java 8, point the\n",(0,l.kt)("inlineCode",{parentName:"p"},"$JAVA_HOME")," environment variable to a Java 11 installation."),(0,l.kt)("p",null,'The VS Code extension will continue to use Java 8 by default, update the "Java\nHome" setting to use Java 11 instead.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/F5djfzt.png",alt:null})),(0,l.kt)("p",null,"To obtain the Java 11 home on macOS, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ /usr/libexec/java_home 11\n/Library/Java/JavaVirtualMachines/openjdk-11.0.1.jdk/Contents/Home\n")),(0,l.kt)("p",null,"Big thanks to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/er1c"},"@er1c")," for pushing for the effort on\nboth the Bloop and Metals side to support Java 11!"),(0,l.kt)("h2",{id:"improved-classpath-indexing-performance"},"Improved classpath indexing performance"),(0,l.kt)("p",null,"Previously, to support fuzzy symbol search Metals indexed classpath elements\nusing an algorithm that required a quadratic iteration on the number of\ncharacters in classfile names. Now, the fuzzy symbol search algorithm only\nrequires a linear pass on the characters of a classfile name. This optimization\nresulted in a 2x speedup for indexing a 235Mb classpath in our benchmarks."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"  Benchmark                   Mode  Cnt     Score    Error  Units\n- ClasspathIndexingBench.run    ss   10  1809.068 \xb1 61.461  ms/op # JDK 8\n+ ClasspathIndexingBench.run    ss   10  919.237  \xb1 42.827  ms/op # JDK 8\n+ ClasspathIndexingBench.run    ss   10  1316.451 \xb1 22.595  ms/op # JDK 11\n")),(0,l.kt)("h2",{id:"fallback-to-find-references-from-goto-definition"},'Fallback to "find references" from "goto definition"'),(0,l.kt)("p",null,'Previously, nothing happened when invoking "goto definition" on the symbol\ndefinition itself. Now, Metals falls back to "find references" in this\nsituation.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/BT3h0FJ.gif",alt:"Fallback"})),(0,l.kt)("p",null,"Big thanks to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tanishiking"},"@tanishiking")," for contributing\nthis new feature!"),(0,l.kt)("h2",{id:"dropping-older-scala-versions"},"Dropping older Scala versions"),(0,l.kt)("p",null,"The Scala versions supported by Metals are now the following."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Old Status"),(0,l.kt)("th",{parentName:"tr",align:null},"New Status"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2.11.9"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,l.kt)("td",{parentName:"tr",align:null},"Dropped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2.11.10"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,l.kt)("td",{parentName:"tr",align:null},"Dropped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2.11.11"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,l.kt)("td",{parentName:"tr",align:null},"Dropped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2.11.12"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated, with no plans to be dropped in upcoming releases","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2.12.4"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,l.kt)("td",{parentName:"tr",align:null},"Dropped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2.12.5"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,l.kt)("td",{parentName:"tr",align:null},"Dropped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2.12.6"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,l.kt)("td",{parentName:"tr",align:null},"Dropped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2.12.7"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated, please upgrade to 2.12.8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2.12.8"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"2.13.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Unsupported"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported")))),(0,l.kt)("p",null,"*"," Scala 2.11 support will likely stay around for a while given the situation\nwith Spark, Scala Native, Playframework and other libraries and frameworks that\nhave been late to adopt 2.12. Our download numbers show that ~10% of Metals\nusers are still on 2.11. Nevertheless, we encourage our users to upgrade to 2.12\nto enjoy a better code editing experience thanks to multiple improvements in the\ncompiler."),(0,l.kt)("h2",{id:"fixes-for-auto-importing-builds"},"Fixes for auto importing builds"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"digest only ",(0,l.kt)("inlineCode",{parentName:"li"},".sbt")," files at workspace level for sbt projects (thanks\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wojciechUrbanski"},"@wojciechUrbanski"),"!)"),(0,l.kt)("li",{parentName:"ul"},"fix SemanticDB plugin path on Windows for Gradle workspaces"),(0,l.kt)("li",{parentName:"ul"},"update default Mill version to 0.4.1 to fix an issue with classpath not\ncontaining Scala library"),(0,l.kt)("li",{parentName:"ul"},"Metals now pick up the version from ",(0,l.kt)("inlineCode",{parentName:"li"},".mill-version")," for the ",(0,l.kt)("inlineCode",{parentName:"li"},"millw")," script")),(0,l.kt)("h2",{id:"no-more-work-in-progress"},'No more "work in progress"'),(0,l.kt)("p",null,'Previously, the Metals website used the "Work-in-progress language server for\nScala" tagline to reflect the experimental status of the project. Now, the\ntagline on the website has been changed to "Scala language server with rich IDE\nfeatures" to reflect that Metals is used by thousands of developers today for\ntheir day-to-day coding.'),(0,l.kt)("h2",{id:"miscellaneous-fixes"},"Miscellaneous fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fix off-by-one for parameter hints when the cursor was after the closing ",(0,l.kt)("inlineCode",{parentName:"li"},")"),"\nparenthesis"),(0,l.kt)("li",{parentName:"ul"},"make sure we add an autoimport in the correct line in case of brackets"),(0,l.kt)("li",{parentName:"ul"},"document symbol outline no longer fails when ",(0,l.kt)("inlineCode",{parentName:"li"},"val _ = ()")," is the only thing in\na block expression"),(0,l.kt)("li",{parentName:"ul"},"nested objects are now imported correctly in case of deeper nesting"),(0,l.kt)("li",{parentName:"ul"},"fix concurrent modification in text document cache (thanks\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/chikei"},"@chikei"),"!)")),(0,l.kt)("h2",{id:"contributors"},"Contributors"),(0,l.kt)("p",null,"Big thanks to everybody who contributed to this release, it's amazing we had a\ncouple of new contributors to Metals!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.6.1..v0.7.0\nGabriele Petronella\n\xd3lafur P\xe1ll Geirsson\nTomasz Godzik\nEric Peters\ntanishiking\nRuben Berenguel\nTzeKei Lee\nWojciech Urbanski\n")),(0,l.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,l.kt)("h2",{id:"v070-2019-06-28"},(0,l.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.7.0"},"v0.7.0")," (2019-06-28)"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.6.1...v0.7.0"},"Full Changelog")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Upgrade to Scalameta v4.2.0\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/799"},"#","799"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,l.kt)("li",{parentName:"ul"},"Introduce Tree View Protocol\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/797"},"#","797"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,l.kt)("li",{parentName:"ul"},"Add a benchmark for classpath indexing performance.\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/795"},"#","795"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,l.kt)("li",{parentName:"ul"},"Migrate Java converters to 2.13\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/794"},"#","794"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,l.kt)("li",{parentName:"ul"},"Remove dot as a commit character\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/793"},"#","793"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,l.kt)("li",{parentName:"ul"},"Make classpath indexing linear instead of quadratic.\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/792"},"#","792"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,l.kt)("li",{parentName:"ul"},"Use 2.13 dialect for syntax errors\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/789"},"#","789"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,l.kt)("li",{parentName:"ul"},"Fix off-by-one for parameter hints.\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/786"},"#","786"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/olafurpg"},"olafurpg"),")"),(0,l.kt)("li",{parentName:"ul"},"Make sure we add an autoimport in the correct line\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/785"},"#","785"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,l.kt)("li",{parentName:"ul"},"Fix typo ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/784"},"#","784"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,l.kt)("li",{parentName:"ul"},"Remove Work-in-progress from the tagline\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/782"},"#","782"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,l.kt)("li",{parentName:"ul"},"Fix JdkSources not to ignore JAVA_HOME environment variable\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/781"},"#","781"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,l.kt)("li",{parentName:"ul"},"Fix importing nested objects\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/778"},"#","778"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,l.kt)("li",{parentName:"ul"},"Fix an issue when ",(0,l.kt)("inlineCode",{parentName:"li"},"val \\_ = \\(\\)")," is the only thing in the block\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/776"},"#","776"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,l.kt)("li",{parentName:"ul"},'Fallback to "show usages" from "Goto definition" if the symbol represents a\ndefinition itself ',(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/775"},"#","775"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,l.kt)("li",{parentName:"ul"},"Move slow tests to separate directories and run them separately on Travis\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/773"},"#","773"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,l.kt)("li",{parentName:"ul"},"Digest only sbt files at workspace level\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/772"},"#","772"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/wojciechUrbanski"},"wojciechUrbanski"),")"),(0,l.kt)("li",{parentName:"ul"},"Fix wrong windows SemanticDB file path\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/771"},"#","771"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,l.kt)("li",{parentName:"ul"},"Fix concurrent modification\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/766"},"#","766"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/chikei"},"chikei"),")"),(0,l.kt)("li",{parentName:"ul"},"Factor out a ClasspathLoader.getURLs","(","classLoader",")"," helper for java9+\ncompatability, update usages\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/765"},"#","765"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/er1c"},"er1c"),")"),(0,l.kt)("li",{parentName:"ul"},"Include mill version from .mill-version file\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/764"},"#","764"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,l.kt)("li",{parentName:"ul"},"Add 2.13 support and drop deprecated versions\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/763"},"#","763"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/gabro"},"gabro"),")"),(0,l.kt)("li",{parentName:"ul"},"Clarifiyng a setting ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/759"},"#","759"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rberenguel"},"rberenguel"),")"),(0,l.kt)("li",{parentName:"ul"},"Fix very small typo in docs\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/758"},"#","758"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rberenguel"},"rberenguel"),")"),(0,l.kt)("li",{parentName:"ul"},"Fix completions to compilation in blog\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/757"},"#","757"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,l.kt)("li",{parentName:"ul"},"Update VS Code docs ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/756"},"#","756"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,l.kt)("li",{parentName:"ul"},"Add release notes for Metals Radium release\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/752"},"#","752"),"\n(",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")")))}u.isMDXComponent=!0}}]);