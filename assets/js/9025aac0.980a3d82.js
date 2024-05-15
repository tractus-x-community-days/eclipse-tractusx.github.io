"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[28860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={title:"How to update the News page by adding a new post?",sidebar_position:5},r=void 0,s={unversionedId:"website-guidelines/update-news-page",id:"website-guidelines/update-news-page",title:"How to update the News page by adding a new post?",description:"Our News section is developed making use of the Docusaurus blog feature.",source:"@site/docs/website-guidelines/update-news-page.md",sourceDirName:"website-guidelines",slug:"/website-guidelines/update-news-page",permalink:"/eclipse-tractusx.github.io/docs/website-guidelines/update-news-page",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/website-guidelines/update-news-page.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to update the News page by adding a new post?",sidebar_position:5},sidebar:"docs",previous:{title:"How to update and integrate React components?",permalink:"/eclipse-tractusx.github.io/docs/website-guidelines/update-and-integrate-react-components"},next:{title:"Automate KIT documentation update",permalink:"/eclipse-tractusx.github.io/docs/website-guidelines/automate-kit-doc-update"}},p={},l=[],u={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"News")," section is developed making use of the ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/2.2.0/blog"},"Docusaurus blog")," feature."),(0,o.kt)("p",null,"It's implementation is fairly simple, in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./blog")," folder you need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create an ",(0,o.kt)("inlineCode",{parentName:"li"},".md")," file which name follows the next convention: ",(0,o.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD-example.md")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"front-matter")," of the file should contain at least the next information:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"---\ntitle: Title Example // the name of the post that shows in the sidebar\ndescription: Description of the news post \nslug: this-is-a-post //slug is the url route of this post\ndate: YYYY-MM-DD // a time is optional, for example 2023-02-10T11:00\nhide_table_of_contents: false\nauthors:\n  - name: Author 1\n    title: Author 1 title/position\n    url: https://github.com/author1 or https://linkedin.com/author1\n    image_url: https://github.com/author1.png\n    email: author1@email.com\n  - name: Author 2\n    title: Author 2 title/position\n    url: https://github.com/author2 or https://linkedin.com/author2\n    image_url: https://github.com/author2.png\n    email: author2@email.com\n---\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The content of the post is entirely up to you, however here is an example where we use an ",(0,o.kt)("inlineCode",{parentName:"li"},"image")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"truncate")," the content to create a nice separation between the list of ",(0,o.kt)("inlineCode",{parentName:"li"},"posts")," and the actual content of each:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"![post related image](@site/static/img/example-related-img.png)\nHere will be placed the first part of the post, probably the first paragraph.\n\x3c!--truncate--\x3e\nHere the rest of the content and other paragraphs of the post.\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Docusaurus will take care of everything for you")),", all of our news are accessible in the ",(0,o.kt)("a",{parentName:"p",href:"https://eclipse-tractusx.github.io/blog"},"blog section")," of the page."),(0,o.kt)("p",null,"After you have created the ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," post, you have the option to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"Home")," page by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"release date")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"link")," of the article on the ",(0,o.kt)("inlineCode",{parentName:"p"},"NewsTicker")," component. That way the user is able to see and have access to the most relevant articles that rotate in an infinite loop in the ",(0,o.kt)("strong",{parentName:"p"},"banner")," of the page. Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/website-guidelines/update-and-integrate-react-components#newsticker-"},"How to update and integrate React components - NewsTicker")," section of this ",(0,o.kt)("inlineCode",{parentName:"p"},"guidelines")," to check the file that manages the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NewsTicker")," component and how to update it."))}c.isMDXComponent=!0}}]);