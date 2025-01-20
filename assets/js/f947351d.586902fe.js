"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[97855],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>C});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var I=n.createContext({}),c=function(e){var t=n.useContext(I),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(I.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,I=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=c(i),p=a,C=g["".concat(I,".").concat(p)]||g[p]||d[p]||r;return i?n.createElement(C,l(l({ref:t},s),{},{components:i})):n.createElement(C,l({ref:t},s))}));function C(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=p;var o={};for(var I in t)hasOwnProperty.call(t,I)&&(o[I]=t[I]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},29838:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>I,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));const r={id:"overview",title:"Health Indicator",description:"Behaviour Twin KIT",hide_title:!0},l=void 0,o={unversionedId:"kits/behaviour-twin-kit/use-cases/hi/overview",id:"kits/behaviour-twin-kit/use-cases/hi/overview",title:"Health Indicator",description:"Behaviour Twin KIT",source:"@site/docs-kits/kits/behaviour-twin-kit/use-cases/hi/overview.md",sourceDirName:"kits/behaviour-twin-kit/use-cases/hi",slug:"/kits/behaviour-twin-kit/use-cases/hi/overview",permalink:"/docs-kits/next/kits/behaviour-twin-kit/use-cases/hi/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Health Indicator",description:"Behaviour Twin KIT",hide_title:!0},sidebar:"kits",previous:{title:"Skill",permalink:"/docs-kits/next/kits/behaviour-twin-kit/use-cases/rul/development-view/skill"},next:{title:"Adoption View",permalink:"/docs-kits/next/kits/behaviour-twin-kit/use-cases/hi/adoption-view/overview"}},I={},c=[{value:"PURPOSE",id:"purpose",level:2},{value:"DISCLAIMER",id:"disclaimer",level:2},{value:"CONTENTS",id:"contents",level:2},{value:"NOTICE",id:"notice",level:2}],s={toc:c};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{fontSize:40,color:"rgb(255,166,1)",marginBottom:13}},"Behaviour Twin KIT -- Health Indicator"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Behaviour Twin KIT -- Health Indicator banner",src:i(92759).Z,width:"285",height:"244"})),(0,a.kt)("h2",{id:"purpose"},"PURPOSE"),(0,a.kt)("p",null,"The business logic of the Health Indicator use case is to provide and get the health condition of technical systems."),(0,a.kt)("p",null,"This template shows a use case where an consumer who is also data provider defines a skill, where the schema of the calculation services' input parameters is unknown to the skill provider (due to heterogeneous calculation services). The consumer knows the actual calculation service provider(s) and can access its graph assets."),(0,a.kt)("h2",{id:"disclaimer"},"DISCLAIMER"),(0,a.kt)("p",null,"\u26a0\ufe0f This is only a template use case. It is not to be used as is, but provides great starting building blocks for further implementation of a concrete use case."),(0,a.kt)("h2",{id:"contents"},"CONTENTS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"adoption-view/overview"},"Adoption View")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"development-view/overview"},"Development View"))),(0,a.kt)("h2",{id:"notice"},"NOTICE"),(0,a.kt)("p",null,"This work is licensed under the ",(0,a.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0 ",(0,a.kt)("img",{alt:"(external link)",src:i(87827).Z,width:"11",height:"11"})),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2022-2024 Allgemeiner Deutscher Automobil-Club e.V. (ADAC)"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2022-2024 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2021-2024 T-Systems International GmbH"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2021-2024 Mercedes-Benz AG"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2022-2024 ZF Friedrichshafen AG"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2022-2024 Contributors to the Eclipse Foundation")))}g.isMDXComponent=!0},87827:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaG9zdD0iNjViZDcxMTQ0ZSIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMTEiCiAgIGhlaWdodD0iMTEiCiAgIHZpZXdCb3g9Ii0wLjUgLTAuNSAxMSAxMSIKICAgY29udGVudD0iJmx0O214ZmlsZSZndDsmbHQ7ZGlhZ3JhbSBuYW1lPSZxdW90O1NlaXRlLTEmcXVvdDsgaWQ9JnF1b3Q7ekcyNFhrY1NpZDBqRzVaZzFzSlYmcXVvdDsmZ3Q7MVZaZFQ4TWdGUDAxZlRScHdibjVxUFByeGNSRUU1K3hYRnNpN1cwbzJ6cC92VlJnbExYcVpuenhhWEM0SDl4enp0Z1N1cXk2VzhXYThoNDV5SVNrdkV2b1ZVSUltYzNQelVlUGJDMUN5U0t6U0tFRXQ5Z0FlQlR2NE1EVW9TdkJvWTBDTmFMVW9vbkJIT3NhY2gxaFRDbmN4R0d2S09PdURTdGdCRHptVEk3Ulo4RjFhZEVGbVFmOERrUlIrczdabVp1NFlqN1lUZEtXak9ObUFOSHJoQzRWb3JhcnFsdUM3Tm56dk5pOG15OU9keGRUVU90REV2cXpQbVBONU1vTjV5Nm10MzdhUXVHcUdSZDJ2ZGFnTkhSVHRMTVhYeUZNWmp3QldJRldXeFBuNUQ4Si9Hd0NtMTdyY2tpa3c1alRyOWpWQ2lPYWhadHlldUw1endORHpTOTZsNWhkamJVQkwwdGRtWHBYbVZtMld1RWJMRkdpK295bXI0eWxoSm9UUTFQTm9XK1RtdDJZTU44SmVPU3VNUzhERm1ZVExIaE1nV1JhckdOUFRsSGpPanlnTUZjaGFSZVQ2VlNZeGZrdHJsUU9MbVZvb0wwcWUybWFxUUwwS00zUXliYURzS1lQYUErK1c1Wk8zK0g3NDJBSTJ6N1lZOGYxUVk1WkhPV1lGNG41MjFNcDZ0ZzJKdUpHeUdOTlpPUDhHL012YkhYNkY2N2EvNklmYmF2b05UaE83dDNEOXRzWFlrckNLYWxqY2JQL0lDNkp4SjMvVHR5enFBZzlTT21mZFRUYjhMTnB3OE8vRDNyOUFRPT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7IgogICBpZD0ic3ZnNCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZXh0ZXJuYWwtbGluay5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMy4yICgwOTFlMjBlLCAyMDIzLTExLTI1LCBjdXN0b20pIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3NCIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICAgIGlua3NjYXBlOnpvb209Ijk3LjA1IgogICAgIGlua3NjYXBlOmN4PSI3LjUwMTI4OCIKICAgICBpbmtzY2FwZTpjeT0iMy4wMDM2MDY0IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMTM3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIyNTUyIgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQiIC8+CiAgPGRlZnMKICAgICBpZD0iZGVmczEiIC8+CiAgPGcKICAgICBpZD0iZzQiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMsLTcpIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDEzLDEyIHYgNSBIIDMgViA3IGggNSIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoMSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDcsMTIgOC4zOSwxMC44NCIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2Utd2lkdGg9IjAuMSIKICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIKICAgICAgIHBvaW50ZXItZXZlbnRzPSJub25lIgogICAgICAgaWQ9InBhdGgyIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Ik0gMTMsNyA5LjY3LDEyLjM4IDcuMTEsOS4zIFoiCiAgICAgICBmaWxsPSIjZmFhMDIzIgogICAgICAgc3Ryb2tlPSIjZmFhMDIzIgogICAgICAgc3Ryb2tlLXdpZHRoPSIwLjEiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoMyIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDUsMTQgOSwxMCIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoNCIgLz4KICA8L2c+Cjwvc3ZnPgo="},92759:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/behaviour-twin-hi-kit-icon-a0b872cc6d55034e841bddf0f5849f17.svg"}}]);