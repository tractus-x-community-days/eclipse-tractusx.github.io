"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[16501],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),g=n,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||r;return a?i.createElement(m,o(o({ref:t},c),{},{components:a})):i.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},20540:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const r={id:"to-be-considered",title:"To Be Considered",description:"Behaviour Twin KIT"},o=void 0,l={unversionedId:"kits/behaviour-twin-kit/adoption-view/to-be-considered",id:"kits/behaviour-twin-kit/adoption-view/to-be-considered",title:"To Be Considered",description:"Behaviour Twin KIT",source:"@site/docs-kits/kits/behaviour-twin-kit/adoption-view/to-be-considered.md",sourceDirName:"kits/behaviour-twin-kit/adoption-view",slug:"/kits/behaviour-twin-kit/adoption-view/to-be-considered",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/behaviour-twin-kit/adoption-view/to-be-considered",draft:!1,tags:[],version:"current",frontMatter:{id:"to-be-considered",title:"To Be Considered",description:"Behaviour Twin KIT"},sidebar:"kits",previous:{title:"Versioning",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/behaviour-twin-kit/adoption-view/versioning"},next:{title:"New Use Cases",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/behaviour-twin-kit/adoption-view/new-use-cases"}},s={},d=[{value:"DATA PROTECTION",id:"data-protection",level:2},{value:"GENERAL",id:"general",level:3},{value:"ACCESS DATA BY VIN",id:"access-data-by-vin",level:3},{value:"DATA SOVEREIGNTY",id:"data-sovereignty",level:2},{value:"USE CASE FRAMEWORK AND CONTRACTS",id:"use-case-framework-and-contracts",level:3},{value:"WRITING SKILLS",id:"writing-skills",level:3},{value:"DATA QUALITY",id:"data-quality",level:2},{value:"VERSIONING AND BREAKING CHANGES",id:"versioning-and-breaking-changes",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{style:{display:"block"}},(0,n.kt)("div",{style:{display:"inline-block",verticalAlign:"top"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Behaviour Twin KIT banner",src:a(3266).Z,width:"51",height:"42"}))),(0,n.kt)("div",{style:{display:"inline-block",fontSize:17,color:"rgb(255,166,1)",marginLeft:7,verticalAlign:"top",paddingTop:6}},"Behaviour Twin KIT")),(0,n.kt)("h2",{id:"data-protection"},"DATA PROTECTION"),(0,n.kt)("h3",{id:"general"},"GENERAL"),(0,n.kt)("p",null,"Behaviour Twin use cases usually utilize usage data. Therefore, data protection laws must be complied with. In the EU, the General Data Protection Regulation (GDPR) must be observed."),(0,n.kt)("p",null,"In general, users of data must have obtained consent from the data owner for each type of processing separately. If a data provider gets a request for passing along or processing usage data, it must ensure, that the data owner has given consent for the requested purpose. A automated consent system may be implemented."),(0,n.kt)("p",null,"Also note that usage data in a vehicle may be generated by other persons (drivers) than the vehicle owner."),(0,n.kt)("h3",{id:"access-data-by-vin"},"ACCESS DATA BY VIN"),(0,n.kt)("p",null,"Currently, to access usage data of a vehicle from outside the data provider, the vehicle identification number (VIN) would be needed. Until the release of the current KIT version, there is no general legally permissible option for using VINs to obtain usage data. A regulation\nis under discussion."),(0,n.kt)("p",null,"In individual cases, the usage of a VIN or some generated anonymized number may be possible."),(0,n.kt)("h2",{id:"data-sovereignty"},"DATA SOVEREIGNTY"),(0,n.kt)("p",null,"The supply chain is visible to each company ",(0,n.kt)("em",{parentName:"p"},"only one")," up and ",(0,n.kt)("em",{parentName:"p"},"one down")," (there may be exceptions):"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"supply chain visibility",src:a(78125).Z,width:"571",height:"160"})),(0,n.kt)("h3",{id:"use-case-framework-and-contracts"},"USE CASE FRAMEWORK AND CONTRACTS"),(0,n.kt)("p",null,"For each use case there must be a ",(0,n.kt)("em",{parentName:"p"},"Use Case Framework"),", see the ",(0,n.kt)("a",{parentName:"p",href:"https://catena-x.net/en/catena-x-introduce-implement/governance-framework-for-data-space-operations"},"Catena-X webpage ",(0,n.kt)("img",{alt:"(external link)",src:a(87827).Z,width:"11",height:"11"})),". There, all general requirements for all participants are defined."),(0,n.kt)("p",null,"Keep in mind that use cases must fulfill the one-up-one-down-policy. If your (new) use case cannot completely comply, adapt it or consider a special solution."),(0,n.kt)("p",null,"Additional contracts may be required (e.g. a subset of partners within a use case have higher requirements for data quality than the remaining partners)."),(0,n.kt)("h3",{id:"writing-skills"},"WRITING SKILLS"),(0,n.kt)("p",null,"When writing skills, keep in mind that all referenced assets are accessible in the current context (query scope/service level). An asset is accessible, if it's in the federated catalog of the related sub-skill (level). In the example diagram above, assets of Tier 4 are hidden to the Knowledge Agent of Tier 2. Within the skill, a ",(0,n.kt)("em",{parentName:"p"},"SERVICE")," at Tier 3 must be called that can resolve the missing data from Tier 4."),(0,n.kt)("h2",{id:"data-quality"},"DATA QUALITY"),(0,n.kt)("p",null,"Data quality depends on many factors. In some use cases, a minimum data quality must be ensured. Currently, there is no general concept for this. Some aspects should be kept in mind:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type of data acquisition:")," The data could be measured, calculated, estimated, processed, replaced ... The accuracy may vary, and data could be corrupted.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Availability:")," The data could be fully or partially missing.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Stability:")," For example, data may be accumulated and therefore monotonically increasing. Data could be reset or corrupted unintentionally or due to system fault.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Quality propagation:")," Calculated/processed data may be based on input data that are for example estimated. Without a quality indicator, the quality may vary very greatly from an alternative source where the base was a measurement.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Error propagation:")," With the Knowledge Agent, errors are not propagated by default. If some data is not available, an empty set is returned. If, for example, a service uses a variable number of parameters, and one of them is not available, a wrong result may be generated. If the result is then processed further, this issue will not be noticeable."))),(0,n.kt)("h2",{id:"versioning-and-breaking-changes"},"VERSIONING AND BREAKING CHANGES"),(0,n.kt)("p",null,"In Catena-X, breaking changes may only be allowed in major releases. If your use case is not affected by breaking changes, you may not need to release a new major version."),(0,n.kt)("p",null,"Since not all participants can update all their components at the same time, there will be a transition period."),(0,n.kt)("p",null,"There could be three dates within this period that must be considered:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Start of rollout:")," From this date on, the new version can be provided/supported."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"End of rollout (deadline):")," Until this date, the new version must be provided/supported."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"End of life:")," Until this date, the related version is supported. To ensure that there is always a common (compatible) version available, this date is not before the rollout deadline of the following version.")),(0,n.kt)("p",null,"There may be a period where two versions are provided/supported in parallel:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cx-releases timeline",src:a(69174).Z,width:"611",height:"271"})),(0,n.kt)("p",null,"The three dates may coincide on a date. In this case, start of rollout is on same date as end of rollout of the previous version, and end of rollout is on same date as end-of-life of the previous version:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"cx-releases timeline",src:a(31989).Z,width:"611",height:"251"})),(0,n.kt)("p",null,"If the release cycle follows the before mentioned schema it is always guaranteed that there is a version that is provided/supported from end of rollout until end-oflife."),(0,n.kt)("p",null,"\u26a0\ufe0f Take into account that other components (like your own EDC connectors and your partners' components), may not be updated to their corresponding new version before end of rollout. Therefore, you can only rely on the previous version."),(0,n.kt)("p",null,"This release procedure may affect you only if you have breaking changes within your use cases, or the Knowledge Agent interface changes in a breaking way. In most cases, the use-case-specific components are not affected."))}p.isMDXComponent=!0},31989:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/cx-releases-timeline-condensed.drawio-8e93d548242fb6e680d1ae7e124da748.svg"},69174:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/cx-releases-timeline.drawio-cc46fb416c82b6a7f1338918155a60c6.svg"},78125:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/supply-chain-visibility.drawio-f547f550900f0a5c943e05a77e2b3872.svg"},87827:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaG9zdD0iNjViZDcxMTQ0ZSIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMTEiCiAgIGhlaWdodD0iMTEiCiAgIHZpZXdCb3g9Ii0wLjUgLTAuNSAxMSAxMSIKICAgY29udGVudD0iJmx0O214ZmlsZSZndDsmbHQ7ZGlhZ3JhbSBuYW1lPSZxdW90O1NlaXRlLTEmcXVvdDsgaWQ9JnF1b3Q7ekcyNFhrY1NpZDBqRzVaZzFzSlYmcXVvdDsmZ3Q7MVZaZFQ4TWdGUDAxZlRScHdibjVxUFByeGNSRUU1K3hYRnNpN1cwbzJ6cC92VlJnbExYcVpuenhhWEM0SDl4enp0Z1N1cXk2VzhXYThoNDV5SVNrdkV2b1ZVSUltYzNQelVlUGJDMUN5U0t6U0tFRXQ5Z0FlQlR2NE1EVW9TdkJvWTBDTmFMVW9vbkJIT3NhY2gxaFRDbmN4R0d2S09PdURTdGdCRHptVEk3Ulo4RjFhZEVGbVFmOERrUlIrczdabVp1NFlqN1lUZEtXak9ObUFOSHJoQzRWb3JhcnFsdUM3Tm56dk5pOG15OU9keGRUVU90REV2cXpQbVBONU1vTjV5Nm10MzdhUXVHcUdSZDJ2ZGFnTkhSVHRMTVhYeUZNWmp3QldJRldXeFBuNUQ4Si9Hd0NtMTdyY2tpa3c1alRyOWpWQ2lPYWhadHlldUw1endORHpTOTZsNWhkamJVQkwwdGRtWHBYbVZtMld1RWJMRkdpK295bXI0eWxoSm9UUTFQTm9XK1RtdDJZTU44SmVPU3VNUzhERm1ZVExIaE1nV1JhckdOUFRsSGpPanlnTUZjaGFSZVQ2VlNZeGZrdHJsUU9MbVZvb0wwcWUybWFxUUwwS00zUXliYURzS1lQYUErK1c1Wk8zK0g3NDJBSTJ6N1lZOGYxUVk1WkhPV1lGNG41MjFNcDZ0ZzJKdUpHeUdOTlpPUDhHL012YkhYNkY2N2EvNklmYmF2b05UaE83dDNEOXRzWFlrckNLYWxqY2JQL0lDNkp4SjMvVHR5enFBZzlTT21mZFRUYjhMTnB3OE8vRDNyOUFRPT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7IgogICBpZD0ic3ZnNCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZXh0ZXJuYWwtbGluay5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMy4yICgwOTFlMjBlLCAyMDIzLTExLTI1LCBjdXN0b20pIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3NCIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICAgIGlua3NjYXBlOnpvb209Ijk3LjA1IgogICAgIGlua3NjYXBlOmN4PSI3LjUwMTI4OCIKICAgICBpbmtzY2FwZTpjeT0iMy4wMDM2MDY0IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMTM3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIyNTUyIgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQiIC8+CiAgPGRlZnMKICAgICBpZD0iZGVmczEiIC8+CiAgPGcKICAgICBpZD0iZzQiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMsLTcpIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDEzLDEyIHYgNSBIIDMgViA3IGggNSIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoMSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDcsMTIgOC4zOSwxMC44NCIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2Utd2lkdGg9IjAuMSIKICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIKICAgICAgIHBvaW50ZXItZXZlbnRzPSJub25lIgogICAgICAgaWQ9InBhdGgyIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Ik0gMTMsNyA5LjY3LDEyLjM4IDcuMTEsOS4zIFoiCiAgICAgICBmaWxsPSIjZmFhMDIzIgogICAgICAgc3Ryb2tlPSIjZmFhMDIzIgogICAgICAgc3Ryb2tlLXdpZHRoPSIwLjEiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoMyIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDUsMTQgOSwxMCIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoNCIgLz4KICA8L2c+Cjwvc3ZnPgo="},3266:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/behaviour-twin-kit-icon-mini-60cb99261b60d4cf2c9a200a41301ee2.svg"}}]);