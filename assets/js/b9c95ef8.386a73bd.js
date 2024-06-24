"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[91777],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?o.createElement(h,n(n({ref:t},p),{},{components:r})):o.createElement(h,n({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,n[1]=s;for(var c=2;c<i;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},52786:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const i={title:"Chapter 3: Boost",sidebar_position:5},n=void 0,s={unversionedId:"tutorials/e2e/boost/boost",id:"tutorials/e2e/boost/boost",title:"Chapter 3: Boost",description:"In the Boost Chapter, you will configure and register your components so that they are discoverable in your local data space deployment. You will then take on the role of a data provider, build your first data pipeline, add your first assets, policies and create a contract offer in the EDC. As a data consumer you will discover the data that you have previously created and initiate a data transfer. After completing this step, you have all the foundational knowledge you need to get started with active participation in a use-case.",source:"@site/docs/tutorials/e2e/boost/boost.md",sourceDirName:"tutorials/e2e/boost",slug:"/tutorials/e2e/boost/",permalink:"/eclipse-tractusx.github.io/docs/tutorials/e2e/boost/",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/tutorials/e2e/boost/boost.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Chapter 3: Boost",sidebar_position:5},sidebar:"tutorials",previous:{title:"Deploying the components",permalink:"/eclipse-tractusx.github.io/docs/tutorials/e2e/connect/deployComponents"},next:{title:"Provide data",permalink:"/eclipse-tractusx.github.io/docs/tutorials/e2e/boost/provideData"}},l={},c=[{value:"Notice",id:"notice",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"Boost Chapter"),", you will configure and register your components so that they are discoverable in your local data space deployment. You will then take on the role of a data provider, build your first data pipeline, add your first ",(0,a.kt)("inlineCode",{parentName:"p"},"assets"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"policies")," and create a ",(0,a.kt)("inlineCode",{parentName:"p"},"contract offer")," in the EDC. As a data consumer you will discover the data that you have previously created and initiate a data transfer. After completing this step, you have all the foundational knowledge you need to get started with active participation in a use-case."),(0,a.kt)("h2",{id:"notice"},"Notice"),(0,a.kt)("p",null,"This work is licensed under the ",(0,a.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 sovity GmbH"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 msg systems AG"),(0,a.kt)("li",{parentName:"ul"},"Source URL: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"))))}u.isMDXComponent=!0}}]);