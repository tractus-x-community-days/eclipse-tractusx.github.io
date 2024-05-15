"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[33230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return r?i.createElement(f,n(n({ref:t},u),{},{components:r})):i.createElement(f,n({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,n[1]=c;for(var s=2;s<o;s++)n[s]=r[s];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var i=r(87462),a=(r(67294),r(3905));const o={title:"FAQ",sidebar_position:1},n=void 0,c={unversionedId:"dev_faq",id:"dev_faq",title:"FAQ",description:"The ECA Check is failing while merging a PR. What to do?",source:"@site/docs/dev_faq.md",sourceDirName:".",slug:"/dev_faq",permalink:"/eclipse-tractusx.github.io/docs/dev_faq",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/dev_faq.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"FAQ",sidebar_position:1},sidebar:"docs",previous:{title:"Central Github Checks",permalink:"/eclipse-tractusx.github.io/docs/github-checks"},next:{title:"Links",permalink:"/eclipse-tractusx.github.io/docs/dev_links"}},l={},s=[{value:"The ECA Check is failing while merging a PR. What to do?",id:"the-eca-check-is-failing-while-merging-a-pr-what-to-do",level:2},{value:"How can I check that somebody has a valid ECA?",id:"how-can-i-check-that-somebody-has-a-valid-eca",level:2},{value:"How can I become an official Tractus-X contributor with triage role?",id:"how-can-i-become-an-official-tractus-x-contributor-with-triage-role",level:2},{value:"How do I figure out the user name in Eclipse (= GitLab) and GitHub?",id:"how-do-i-figure-out-the-user-name-in-eclipse--gitlab-and-github",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-eca-check-is-failing-while-merging-a-pr-what-to-do"},"The ECA Check is failing while merging a PR. What to do?"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://www.eclipse.org/projects/handbook/#resources-github"},"Handbook")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Verify that all contributors to this PR have a signed ECA."),(0,a.kt)("li",{parentName:"ol"},"Verify that the EF account email addresses and the primary email address configured in GitHub match."),(0,a.kt)("li",{parentName:"ol"},"Verify that your commits include the correct email address (tip: add .patch to the GitHub commit url to see the plaintext)."),(0,a.kt)("li",{parentName:"ol"},"Make sure you have added your GitHub ID to your Eclipse profile (Section: Social Media Links)."),(0,a.kt)("li",{parentName:"ol"},"Check the ",(0,a.kt)("a",{parentName:"li",href:"https://gitlab.eclipse.org/eclipsefdn/helpdesk/-/issues/?sort=created_date&state=opened"},"Helpdesk")," issues, if there is a known problem or open an issue.")),(0,a.kt)("h2",{id:"how-can-i-check-that-somebody-has-a-valid-eca"},"How can I check that somebody has a valid ECA?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Go to your Eclipse profile, click on "Eclipse Contributor Agreement" -> ECA Validation Tool')),(0,a.kt)("h2",{id:"how-can-i-become-an-official-tractus-x-contributor-with-triage-role"},"How can I become an official Tractus-X contributor with triage role?"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/oss/getting-started#extended-contributor-permissions"},"Getting Started Page")),(0,a.kt)("h2",{id:"how-do-i-figure-out-the-user-name-in-eclipse--gitlab-and-github"},"How do I figure out the user name in Eclipse (= GitLab) and GitHub?"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{parentName:"p",href:"https://webdev.eclipse.org/docs/api/eclipsefdn-profile-api/#tag/User-Profile"},"Eclipse User Profile REST services")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"- Get the profile with the Eclipse user name:\nhttps://api.eclipse.org/account/profile/{eclipse_username}\n- Get the profile with the GitHub user name:\nhttps://api.eclipse.org/github/profile/{github_username}\n")))}p.isMDXComponent=!0}}]);