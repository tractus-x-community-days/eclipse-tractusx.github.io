"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[75454],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(i),d=r,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return i?n.createElement(m,a(a({ref:t},l),{},{components:i})):n.createElement(m,a({ref:t},l))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:r,a[1]=p;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},78686:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const o={id:"Operations View PURIS-DCM Supply Chain Disruption Notifications",title:"Operations View",description:"PURIS-DCM Supply Chain Disruption Notifications",sidebar_position:4},a=void 0,p={unversionedId:"kits/Supply Chain Disruption Notifications KIT/Operations View PURIS-DCM Supply Chain Disruption Notifications",id:"kits/Supply Chain Disruption Notifications KIT/Operations View PURIS-DCM Supply Chain Disruption Notifications",title:"Operations View",description:"PURIS-DCM Supply Chain Disruption Notifications",source:"@site/docs-kits/kits/Supply Chain Disruption Notifications KIT/page_operations_view.md",sourceDirName:"kits/Supply Chain Disruption Notifications KIT",slug:"/kits/Supply Chain Disruption Notifications KIT/Operations View PURIS-DCM Supply Chain Disruption Notifications",permalink:"/docs-kits/next/kits/Supply Chain Disruption Notifications KIT/Operations View PURIS-DCM Supply Chain Disruption Notifications",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"Operations View PURIS-DCM Supply Chain Disruption Notifications",title:"Operations View",description:"PURIS-DCM Supply Chain Disruption Notifications",sidebar_position:4},sidebar:"kits",previous:{title:"Software Development View",permalink:"/docs-kits/next/kits/Supply Chain Disruption Notifications KIT/Software Development View PURIS-DCM Supply Chain Disruption Notifications"},next:{title:"PCF Exchange KIT",permalink:"/docs-kits/next/category/pcf-exchange-kit"}},s={},c=[{value:"Reference Implementation",id:"reference-implementation",level:2},{value:"Setup",id:"setup",level:2}],l={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Supply Chain Disruption Notifications kit banner",src:i(81072).Z,width:"264",height:"245"})),(0,r.kt)("h2",{id:"reference-implementation"},"Reference Implementation"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/puris/tree/main/docs"},"PURIS FOSS reference implementation")," serves as an application allowing to send and receive ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.demand_and_capacity_notification/2.0.0/DemandAndCapacityNotification.ttl"},"Demand and Capacity Notifications")," among other data objects that are described in the ",(0,r.kt)("a",{parentName:"p",href:"https://eclipse-tractusx.github.io/docs-kits/kits/PURIS%20Kit/Software%20Development%20View/Software%20Development%20PURIS%20Kit"},"PURIS KIT"),"."),(0,r.kt)("p",null,"Arc42 of the implementation is found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/puris/blob/main/docs/architecture/Index.md"},"here"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"The PURIS FOSS reference implementation can be deployed by following the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/puris/blob/29a20f9ea38e1eb54a9d9c938b94b57dfc898c32/INSTALL.md"},"project Installation")," guide."),(0,r.kt)("p",null,"To run a test scenario locally, follow the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/puris/blob/29a20f9ea38e1eb54a9d9c938b94b57dfc898c32/local/INSTALL.md"},"local testing and development guide"),"."),(0,r.kt)("p",null,"A guide to run the integration tests is found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/puris/blob/29a20f9ea38e1eb54a9d9c938b94b57dfc898c32/local/postman/README.md"},"here"),"."))}u.isMDXComponent=!0},81072:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/supply-chain-disruption-notification-kit-logo.drawio-95b03c59617e04f4beeeed3a31583145.svg"}}]);