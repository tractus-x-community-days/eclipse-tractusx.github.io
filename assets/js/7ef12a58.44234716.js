"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[18919],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),d=s,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(h,n(n({ref:t},c),{},{components:r})):a.createElement(h,n({ref:t},c))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,n=new Array(i);n[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,n[1]=o;for(var p=2;p<i;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),s=(r(67294),r(3905));const i={title:"Issue Tracker",sidebar_position:40},n=void 0,o={unversionedId:"oss/issues",id:"oss/issues",title:"Issue Tracker",description:"In the Eclipse infrastructure there are different issue trackers for different purposes.",source:"@site/docs/oss/issues.md",sourceDirName:"oss",slug:"/oss/issues",permalink:"/eclipse-tractusx.github.io/docs/oss/issues",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/oss/issues.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Issue Tracker",sidebar_position:40},sidebar:"docs",previous:{title:"Eclipse project roles",permalink:"/eclipse-tractusx.github.io/docs/oss/contributor-committer"},next:{title:"Release Guidelines",permalink:"/eclipse-tractusx.github.io/docs/release"}},l={},p=[{value:"GitHub Issues related to a repository",id:"github-issues-related-to-a-repository",level:2},{value:"Tractus-X sig-infra Issue Tracker",id:"tractus-x-sig-infra-issue-tracker",level:2},{value:"Create (manage) a repository in <code>eclipse-tractusx</code>",id:"create-manage-a-repository-in-eclipse-tractusx",level:2},{value:"Otterdog self-service",id:"otterdog-self-service",level:3},{value:"Eclipse Foundation Helpdesk",id:"eclipse-foundation-helpdesk",level:2},{value:"Eclipse GitLab IP Issue Tracker",id:"eclipse-gitlab-ip-issue-tracker",level:2},{value:"Contact EMO (Eclipse Management Organisation)",id:"contact-emo-eclipse-management-organisation",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In the Eclipse infrastructure there are different issue trackers for different purposes."),(0,s.kt)("h2",{id:"github-issues-related-to-a-repository"},"GitHub Issues related to a repository"),(0,s.kt)("p",null,"Create all issues related to your code and development here. You are free to define your own rules, e.g. naming conventions.\nE.g. ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/issues"},"issues for this webpage")),(0,s.kt)("h2",{id:"tractus-x-sig-infra-issue-tracker"},"Tractus-X sig-infra Issue Tracker"),(0,s.kt)("p",null,"Link: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sig-infra/issues"},"Tractus-X sig-infra Issue Tracker")),(0,s.kt)("p",null,"This is the place to open issues for requests about infrastructure provided by Tractus-X\nfrom the System and the Security Team. Requests about the Catena-X Github organization also go here."),(0,s.kt)("p",null,'Several issue templates are provided for standard requests and an general "Support: other topics" template.'),(0,s.kt)("h2",{id:"create-manage-a-repository-in-eclipse-tractusx"},"Create (manage) a repository in ",(0,s.kt)("inlineCode",{parentName:"h2"},"eclipse-tractusx")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"  Creating a sig-infra issue is the recommended way!")),(0,s.kt)("p",null,"There a two ways to manage repositories in the Tractus-X organization:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Create a ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/sig-infra/issues"},"sig-infra issue"),", see ",(0,s.kt)("a",{parentName:"li",href:"/docs/oss/issues#tractus-x-sig-infra-issue-tracker"},"description")),(0,s.kt)("li",{parentName:"ul"},"Add one of the ",(0,s.kt)("a",{parentName:"li",href:"https://projects.eclipse.org/projects/automotive.tractusx/who"},"Eclipse Tractus-X Project Leads"),' to request a "thumbs up" for approval')),(0,s.kt)("p",null,"OR"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Change the Otterdog configuration in the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/.eclipsefdn"},".eclipsefdn repository")," and open a PR. In this case, please read the documentation below first.")),(0,s.kt)("h3",{id:"otterdog-self-service"},"Otterdog self-service"),(0,s.kt)("admonition",{title:"Note",type:"info"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"Only committers can use this way"),(0,s.kt)("li",{parentName:"ul"},"To review the PR, add one of the ",(0,s.kt)("a",{parentName:"li",href:"https://projects.eclipse.org/projects/automotive.tractusx/who"},"Eclipse Tractus-X Project Leads")," or one of the Systems Team committers"))),(0,s.kt)("p",null,"There is the Otterdog self-service to manage the repositories in our organization.\nOtterdog is a tool to manage GitHub organizations at scale using a configuration as code approach. It is actively developed by the Eclipse Foundation and used to manage its numerous projects hosted on GitHub, see ",(0,s.kt)("a",{parentName:"p",href:"https://gitlab.eclipse.org/eclipsefdn/security/otterdog"},"here"),"."),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://eclipse-tractusx.github.io/.eclipsefdn/"},"Otterdog Dashboard")," with the tabs for the overview, the current configuration and the playground."),(0,s.kt)("p",null,"To see and learn what is possible and was already done, have a look at the existing ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/.eclipsefdn/pulls?q=is%3Apr"},"PRs"),"."),(0,s.kt)("p",null,"If you are not sure how to use Otterdog, please create a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sig-infra/issues"},"sig-infra issue"),"."),(0,s.kt)("h2",{id:"eclipse-foundation-helpdesk"},"Eclipse Foundation Helpdesk"),(0,s.kt)("p",null,"Link: ",(0,s.kt)("a",{parentName:"p",href:"https://gitlab.eclipse.org/eclipsefdn/helpdesk/-/issues/?search=tractus&sort=created_date&state=opened&first_page_size=100"},"Eclipse Foundation Helpdesk")),(0,s.kt)("p",null,"Here all requests for Eclipse infrastructure go in.\nIf you are not sure if you should open an Eclipse Foundation Helpdesk Issue, first use this issue tracker."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Start the summary with "tractus-x:" prefix'),(0,s.kt)("li",{parentName:"ul"},'If you are not a committer, create the ticket and add a committer to request a "thumbs up" for approval'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://gitlab.eclipse.org/eclipsefdn/helpdesk/-/issues/2843"},"Example")," for requesting a sonar project for a repository"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://gitlab.eclipse.org/eclipsefdn/helpdesk/-/issues/2186"},"Example")," for requesting secrets in repository")),(0,s.kt)("h2",{id:"eclipse-gitlab-ip-issue-tracker"},"Eclipse GitLab IP Issue Tracker"),(0,s.kt)("p",null,"Link: ",(0,s.kt)("a",{parentName:"p",href:"https://gitlab.eclipse.org/eclipsefdn/emo-team/iplab/-/issues/?search=automotive.tractusx&sort=created_date&state=opened&first_page_size=20"},"Eclipse GitLab IP Issue Tracker")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"IMPORTANT:")," only a committer can create a valid IP Ticket!"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"IP issue for ",(0,s.kt)("a",{parentName:"li",href:"https://gitlab.eclipse.org/eclipsefdn/emo-team/iplab/-/issues/new"},"Code Contributions"),', choose template "vet-project"',(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/release/trg-7/trg-7-03"},"more information")),(0,s.kt)("li",{parentName:"ul"},"title pattern: ",(0,s.kt)("inlineCode",{parentName:"li"},"project/<project id>/-/<name>/0.0"),","),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://gitlab.eclipse.org/eclipsefdn/emo-team/iplab/-/issues/8097"},"Example")),(0,s.kt)("li",{parentName:"ul"},"For PRs: use the link to the PR as source reference!"))),(0,s.kt)("li",{parentName:"ul"},"IP issue for ",(0,s.kt)("a",{parentName:"li",href:"https://gitlab.eclipse.org/eclipsefdn/emo-team/iplab/-/issues/new"},"3rd party content"),', choose template "vet-third party":',(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/release/trg-7/trg-7-04#checking-other-content-fonts-images-"},"more information")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://gitlab.eclipse.org/eclipsefdn/emo-team/iplab/-/issues/5875"},"Example")))),(0,s.kt)("li",{parentName:"ul"},"Automatic IP Team Review Requests via the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/eclipse/dash-licenses"},"Dash Tool")," (",(0,s.kt)("a",{parentName:"li",href:"/docs/release/trg-7/trg-7-04#checking-libraries-using-the-eclipse-dash-license-tool"},"more information"),")")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Notes:")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"use the templates, follow the INSTRUCTIONs in the templates"),(0,s.kt)("li",{parentName:"ul"},"project name: Eclipse Tractus-X"),(0,s.kt)("li",{parentName:"ul"},"project id: automotive.tractusx"),(0,s.kt)("li",{parentName:"ul"},"SPDX License Identfier: Apache-2.0"),(0,s.kt)("li",{parentName:"ul"},"Format the source reference as Markdown in the description as follows: ",(0,s.kt)("inlineCode",{parentName:"li"},"[Source](<link to the code>)")),(0,s.kt)("li",{parentName:"ul"},"do not forget to add the last line of the templates, for setting the labels")),(0,s.kt)("h2",{id:"contact-emo-eclipse-management-organisation"},"Contact EMO (Eclipse Management Organisation)"),(0,s.kt)("p",null,"If you have a question that cannot be answered by project lead, mentor, or PMC, ask the EMO."),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"https://www.eclipse.org/projects/handbook/#roles-emo"},"Handbook")))}u.isMDXComponent=!0}}]);