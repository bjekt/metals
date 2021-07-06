(self.webpackChunk=self.webpackChunk||[]).push([[5014],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),h=p(a),d=r,c=h["".concat(s,".").concat(d)]||h[d]||m[d]||l;return a?n.createElement(c,i(i({ref:e},u),{},{components:a})):n.createElement(c,i({ref:e},u))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4588:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>o,metadata:()=>s,toc:()=>p,default:()=>m});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],o={author:"Chris Kipp",title:"A Metals Retrospective (Part 1)",authorURL:"https://twitter.com/ckipp01",authorImageURL:"https://avatars2.githubusercontent.com/u/13974112?v=4"},s={permalink:"/metals/blog/2021/02/02/metals-retro-part1",source:"@site/blog/2021-02-02-metals-retro-part1.md",title:"A Metals Retrospective (Part 1)",description:"metals-banner",date:"2021-02-02T00:00:00.000Z",formattedDate:"February 2, 2021",tags:[],readingTime:8.28,truncated:!1,prevItem:{title:"Metals v0.10.0 - Tungsten",permalink:"/metals/blog/2021/02/24/tungsten"},nextItem:{title:"Metals v0.9.10 - Lithium",permalink:"/metals/blog/2021/01/19/lithium"}},p=[{value:"Editor Support",id:"editor-support",children:[{value:"Will you support IntelliJ?",id:"will-you-support-intellij",children:[]}]},{value:"Why do people start using Metals",id:"why-do-people-start-using-metals",children:[]},{value:"Information and Help with Metals",id:"information-and-help-with-metals",children:[]},{value:"I wish Metals had... but it does!",id:"i-wish-metals-had-but-it-does",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],u={toc:p};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/FYZXteD.png",alt:"metals-banner"})),(0,l.kt)("p",null,"At the end of 2020 the Metals team sent out a survey to gather input from our\nusers in hopes to get a better picture of who you are, what you want out of\nMetals, and any other useful feedback you may have wanted to provide. With just\nunder 400 responses we got a ton of great data, some interesting insights, and\na nice picture of what is currently hindering users, and what common\nfunctionality continually comes up as feature requests. In order to best use this\ndata, and also to share some results, we thought it'd be a good idea to go over\nsome of the sections, address some of the points that came up, and also clear up\nany misconceptions that may have appeared in the survey results. The idea is for\nthis to be a 2 part series. You can expect the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Part 1 - Where we discuss some of the initial results and address some common\nmisconceptions and questions."),(0,l.kt)("li",{parentName:"ul"},"Part 2 - Where we go deeper into the desired features, the biggest pain\npoints, and our plans for this next year.")),(0,l.kt)("h2",{id:"editor-support"},"Editor Support"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/w67gMGW.png",alt:"editor-results"})),(0,l.kt)("p",null,"Surprising no one, VS Code came out on top for editors with the most desire for\nMetals support. Our ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals-vscode"},"VS Code\nextension")," has over 100k downloads\nand it is safe to say that it offers the best support for overall Metals usage.\nThe next most popular of our extensions is probably ",(0,l.kt)("inlineCode",{parentName:"p"},"coc-metals")," which had just\nover 20k downloads in 2020. There are certain features that do only work in VS\nCode mainly due to the robustness of the LSP support and other extra features.\nHere are a few examples of features that we added this past year that work\nextremely well with VS Code with no hardly no extra effort on the users part:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Debugging support - Early on in 2020 Metals v0.8.0 added debugging support.\nNow with the click of a button you can run, test, and debug your code right\nfrom inside VS Code."),(0,l.kt)("li",{parentName:"ul"},"Preview renames - in Metals v0.8.1 functionality was added so that you can now\npreview the changes after triggering a rename for up to 300 files."),(0,l.kt)("li",{parentName:"ul"},"Analyze stacktrace functionality - As of Metals v0.9.4 Metals gained the ability\nto take a stack trace and give you a nice view of the entire stack with\nclickable links to go to that part of your code. This is all found in the\nvery useful web view of VS Code."),(0,l.kt)("li",{parentName:"ul"},"Show implicits and type decorations - As of Metals v0.9.5 Metals gained the\nability to show implicits and type decorations as decorations directly\ninline of your code."),(0,l.kt)("li",{parentName:"ul"},"Show implicits conversion and classes - As of Metals v0.9.6 Metals gained the\nability to show implicits conversion and classes as decorations directly\ninline of your code."),(0,l.kt)("li",{parentName:"ul"},"Navigativing stacktrace while debugging - Also in Metals v0.9.6 the ability to\nnavigate stacktraces during a deubugging sesions was added, which re-used\nthe functionality introduced in v0.9.4 to analyze stacktraces.")),(0,l.kt)("p",null,"Now at this point you may be starting to assume that we heavily favor VS Code\nand that Metals is geared towards it. We got a few comments related to this\nthroughout the survey. However, I want to make a specific point that since the\ninception of Metals, the early maintainers did a fantastic job of ensuring that\neverything would work in clients that offered the necessary LSP support, and\nalso extra features to clients that offered support for the Metals specific LSP\nextensions that we use. This has remained core for us a we continue to provide\nnew features. Pretty much any new feature that is added is added in a way that\ncan also be utilized for editors that may not have the same level of support as\nVS Code. Here are a few examples:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Debugging support - Metals actually offers deubugging support for any client\nthat can serve as a DAP client. So for example using ",(0,l.kt)("inlineCode",{parentName:"li"},"coc-metals")," you can\nalso run, test, and debug your code while utilizing\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/puremourning/vimspector"},(0,l.kt)("inlineCode",{parentName:"a"},"vimspector")),". The same is true\nfor emacs clients that are utilizing\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/emacs-lsp/lsp-mode"},(0,l.kt)("inlineCode",{parentName:"a"},"lsp-mode")),"."),(0,l.kt)("li",{parentName:"ul"},"Analyze stacktrace functionality - For clients that don't have a web view,\nthis feature is still supported by producing a file with code lens' in it to\nallow you to navigate to the relevant parts of the stacktrace."),(0,l.kt)("li",{parentName:"ul"},"Implicits, type decorations, implicits conversions and classes - VS Code isn't\nthe only extension that actually implements this. There is also\n",(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals-sublime"},(0,l.kt)("inlineCode",{parentName:"a"},"metals-sublime"))," that has\ninline decorations. For other editors that may not support inline\ndecorations, this feature is still re-usable and the information is actually\ndisplayed in hover as another section.")),(0,l.kt)("p",null,"So again, while VS Code is an incredible editor, that offers incredible support\nfor the various Metals features, we work hard to ensure that these features are\nalso usable in our other extensions, even if they look a bit different. While\nthere are varying levels of support in the various editor extensions, much of\nthis is due to the those editors being the editors the current maintainers use.\nWe are always open for more help in any of the current editor extensions and\nthis is actually a great way to get involved. We are also open to help you\ncreate a new extension to maybe support an editor that is yet to have a\nMetals-specific extension! Here are links to the various Metals clients:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals-vscode"},"scalameta/metals-vscode")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/coc-metals"},"scalameta/coc-metals")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/nvim-metals"},"scalameta/nvim-metals")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals-sublime"},"scalameta/metals-sublime")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals-eclipse"},"scalameta/metals-eclipse")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/emacs-lsp/lsp-metals"},"emacs-lsp/lsp-metals"))),(0,l.kt)("h3",{id:"will-you-support-intellij"},"Will you support IntelliJ?"),(0,l.kt)("p",null,"When asked about what editor people wished had Metals support, here were the\nresults:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Editor"),(0,l.kt)("th",{parentName:"tr",align:null},"Votes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.jetbrains.com/idea/"},"IntelliJ")),(0,l.kt)("td",{parentName:"tr",align:null},"19")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://notepad-plus-plus.org/"},"Notepad++")),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://wiki.gnome.org/Apps/Builder"},"Gnome Builder")),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.nova.app/"},"Nova")),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://kakoune.org/"},"Kakoune")),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://netbeans.org/"},"Netbeans")),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://theia-ide.org/"},"Eclipse Theia")),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://www.jedit.org/"},"jEdit")),(0,l.kt)("td",{parentName:"tr",align:null},"1")))),(0,l.kt)("p",null,'Some of these editors will already actually work with Metals, especially if they\nsupport VS Code extensions like Eclipse Theia does. However, one question we\noften get is: "Will you support IntelliJ?" The simple answer to this question is\n',(0,l.kt)("em",{parentName:"p"},"No"),", but not for the reason people may think. IntelliJ is a fantastic project\nthat is the most widely used editor in Scala. Metals aims to be a language\nserver for clients that implement LSP. Since IntelliJ has no ",(0,l.kt)("em",{parentName:"p"},"official")," support\nfor LSP, we have no intention on adding support for IntelliJ. Many times the\ntarget audience is different as well."),(0,l.kt)("h2",{id:"why-do-people-start-using-metals"},"Why do people start using Metals"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Reason"),(0,l.kt)("th",{parentName:"tr",align:null},"Very Important"),(0,l.kt)("th",{parentName:"tr",align:null},"Somewhat important"),(0,l.kt)("th",{parentName:"tr",align:null},"Not important"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"I wanted a lighter alternative to other IDEs."),(0,l.kt)("td",{parentName:"tr",align:null},"245"),(0,l.kt)("td",{parentName:"tr",align:null},"74"),(0,l.kt)("td",{parentName:"tr",align:null},"27")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"I could use my favorite editor."),(0,l.kt)("td",{parentName:"tr",align:null},"223"),(0,l.kt)("td",{parentName:"tr",align:null},"62"),(0,l.kt)("td",{parentName:"tr",align:null},"56")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"I wanted more accurate compiler errors."),(0,l.kt)("td",{parentName:"tr",align:null},"220"),(0,l.kt)("td",{parentName:"tr",align:null},"86"),(0,l.kt)("td",{parentName:"tr",align:null},"36")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"I wanted a fully open source solution."),(0,l.kt)("td",{parentName:"tr",align:null},"133"),(0,l.kt)("td",{parentName:"tr",align:null},"138"),(0,l.kt)("td",{parentName:"tr",align:null},"69")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Metals had features other IDEs didn't"),(0,l.kt)("td",{parentName:"tr",align:null},"56"),(0,l.kt)("td",{parentName:"tr",align:null},"112"),(0,l.kt)("td",{parentName:"tr",align:null},"160")))),(0,l.kt)("h2",{id:"information-and-help-with-metals"},"Information and Help with Metals"),(0,l.kt)("p",null,"Over this past year we've done our best to make sure everyone is aware of all\nthe great stuff that is happening in Metals. We have multiple channels of\ncommunication open with pretty impressive response times if you ever get stuck.\nHere are the results about where people go for question about Metals and also\nwhere they get their news about Metals."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/6Ijm9Bv.png",alt:"metals info"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/2Qysoqe.png",alt:"metals help"})),(0,l.kt)("p",null,"Apart from the places that we had listed in the survey, the place mentioned the\nmost for where people hear about Metals related news was ",(0,l.kt)("a",{parentName:"p",href:"https://scalatimes.com/"},"Scala\nTimes"),"! "),(0,l.kt)("p",null,"As a reminder, don't ever hesitate to reach out, and if anything is missing in\nthe docs, please lend a helping hand or point it out to us."),(0,l.kt)("h2",{id:"i-wish-metals-had-but-it-does"},"I wish Metals had... but it does!"),(0,l.kt)("p",null,"Below are some things that appeared in the survey as wishes, but that Metals\nalready supports, or has added support for since the survey! Hopefully these\nwill help highlight some lesser known features of Metals or serve as a reminder\nof some of the features we have."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Requested"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Renaming symbols"),(0,l.kt)("td",{parentName:"tr",align:null},"Available since v0.8.0 and all supported editors support this.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Better info about Ammonite scripts failing."),(0,l.kt)("td",{parentName:"tr",align:null},"Actually because of this comment, there was some work done to improve the error messages about why Ammonite may not be starting. You can see this here ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/scalameta/metals/pull/2333"},"in this pr"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"A check telling me if everything is setup correctly."),(0,l.kt)("td",{parentName:"tr",align:null},"We recently did some work or the Metals Doctor to help you see what issues are going on. You can trigger Doctor by the ",(0,l.kt)("inlineCode",{parentName:"td"},"run-doctor")," command. It may differ a bit per client. You can see the recent changes made ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/scalameta/metals/pull/2339"},"here in this pr"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Seamless install in Vim"),(0,l.kt)("td",{parentName:"tr",align:null},"There are two Metals-specific Vim and Neovim extensions, both which offer an automated install feature. ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/scalameta/coc-metals"},"coc-metals")," and ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/scalameta/nvim-metals"},"nvim-metals"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Navigating stacktrace feature in emacs."),(0,l.kt)("td",{parentName:"tr",align:null},"This actually should work, since it just needs code lenses to work for clients that don't have a web view. Part of this is just documentation, so if you're an emacs user, please help us with docs!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Use a specific version of Ammonite"),(0,l.kt)("td",{parentName:"tr",align:null},"You can currently do this by setting the version in a comment on the top of a file like illustrated ",(0,l.kt)("a",{parentName:"td",href:"https://scalameta.org/metals/docs/troubleshooting/faq.html#how-do-i-use-scala-2xx-for-my-script"},"here"),". Also the next release of Metals will have better support for a fallback version of the compiler that is used for standalone scripts. This will give you more control over what version is used in situations like Ammonite scripts.")))),(0,l.kt)("h2",{id:"whats-next"},"What's next?"),(0,l.kt)("p",null,"We want to thank you again for taking the time and filling out our year-end\nsurvey. Keep on the lookout for Part 2 of this, and we'll be discussing the\nbiggest pain points and some of the most desired features that we plan to tackle\nthis next year. We'll also do a further look into build server and build tool\nsupport finishing off with an update on our current Scala 3 support and the\nefforts that are going into it."),(0,l.kt)("p",null,"Cheers,"),(0,l.kt)("p",null,"The Metals team"))}m.isMDXComponent=!0}}]);