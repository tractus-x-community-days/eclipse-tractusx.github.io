"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[45367],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=i.createContext({}),o=function(e){var t=i.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):M(M({},t),e)),a},p=function(e){var t=o(e.components);return i.createElement(d.Provider,{value:t},e.children)},N="mdxType",I={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),N=o(a),s=n,g=N["".concat(d,".").concat(s)]||N[s]||I[s]||l;return a?i.createElement(g,M(M({ref:t},p),{},{components:a})):i.createElement(g,M({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,M=new Array(l);M[0]=s;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[N]="string"==typeof e?e:n,M[1]=r;for(var o=2;o<l;o++)M[o]=a[o];return i.createElement.apply(null,M)}return i.createElement.apply(null,a)}s.displayName="MDXCreateElement"},68657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>M,default:()=>N,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var i=a(87462),n=(a(67294),a(3905));const l={id:"overview",title:"Development View",description:"What do I have to implement?"},M=void 0,r={unversionedId:"kits/Demand and Capacity Management Kit/development-view/overview",id:"version-24.08/kits/Demand and Capacity Management Kit/development-view/overview",title:"Development View",description:"What do I have to implement?",source:"@site/docs-kits_versioned_docs/version-24.08/kits/Demand and Capacity Management Kit/development-view/overview.md",sourceDirName:"kits/Demand and Capacity Management Kit/development-view",slug:"/kits/Demand and Capacity Management Kit/development-view/overview",permalink:"/docs-kits/24.08/kits/Demand and Capacity Management Kit/development-view/overview",draft:!1,tags:[],version:"24.08",frontMatter:{id:"overview",title:"Development View",description:"What do I have to implement?"},sidebar:"kits",previous:{title:"FOSS - Application",permalink:"/docs-kits/24.08/kits/Demand and Capacity Management Kit/adoption-view/foss-app"},next:{title:"Aspect Model - WeekBasedMaterialDemand",permalink:"/docs-kits/24.08/kits/Demand and Capacity Management Kit/development-view/model-WeekBasedMaterialDemand"}},d={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Capabilities of a DCM application",id:"capabilities-of-a-dcm-application",level:2},{value:"Roles and rights of a DCM application",id:"roles-and-rights-of-a-dcm-application",level:2},{value:"Aspect models utilized by a DCM application",id:"aspect-models-utilized-by-a-dcm-application",level:2},{value:"Application Programming Interfaces",id:"application-programming-interfaces",level:2},{value:"APIs as data assets",id:"apis-as-data-assets",level:3},{value:"Asset example",id:"asset-example",level:4},{value:"Data exchange",id:"data-exchange",level:3},{value:"Payload structure",id:"payload-structure",level:4},{value:"APIs utilized by a DCM application",id:"apis-utilized-by-a-dcm-application",level:2},{value:"Notice",id:"notice",level:2}],p={toc:o};function N(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"DCM kit banner",src:a(93191).Z,width:"285",height:"245"})),(0,n.kt)("p",null,"This page describes the most important parts for the software implementation of the DCM standards. For the full\ntechnical specification, please refer to the\nstandard ",(0,n.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange"),"."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This document provides developers with resources to accelerate the development of apps and services."),(0,n.kt)("h2",{id:"capabilities-of-a-dcm-application"},"Capabilities of a DCM application"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange")," describes the following capabilities:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Capability"),(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Related Aspect Models"),(0,n.kt)("th",{parentName:"tr",align:null},"Related APIs"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Providing and consuming demand data"),(0,n.kt)("td",{parentName:"tr",align:null},"Core"),(0,n.kt)("td",{parentName:"tr",align:null},"WeekBasedMaterialDemand"),(0,n.kt)("td",{parentName:"tr",align:null},"WeekBasedMaterialDemand API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Providing and consuming capacity data"),(0,n.kt)("td",{parentName:"tr",align:null},"Core"),(0,n.kt)("td",{parentName:"tr",align:null},"WeekBasedCapacityGroup"),(0,n.kt)("td",{parentName:"tr",align:null},"WeekBasedCapacityGroup API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Comparing demand and capacity data"),(0,n.kt)("td",{parentName:"tr",align:null},"Core"),(0,n.kt)("td",{parentName:"tr",align:null},"WeekBasedMaterialDemand ",(0,n.kt)("br",null)," WeekBasedCapacityGroup"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Demand volatility metrics"),(0,n.kt)("td",{parentName:"tr",align:null},"Outer Core"),(0,n.kt)("td",{parentName:"tr",align:null},"WeekBasedCapacityGroup"),(0,n.kt)("td",{parentName:"tr",align:null},"WeekBasedCapacityGroup API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Simulated delta production"),(0,n.kt)("td",{parentName:"tr",align:null},"Outer Core"),(0,n.kt)("td",{parentName:"tr",align:null},"WeekBasedCapacityGroup"),(0,n.kt)("td",{parentName:"tr",align:null},"WeekBasedCapacityGroup API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Load factors"),(0,n.kt)("td",{parentName:"tr",align:null},"Outer Core"),(0,n.kt)("td",{parentName:"tr",align:null},"WeekBasedCapacityGroup"),(0,n.kt)("td",{parentName:"tr",align:null},"WeekBasedCapacityGroup API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Digital twins"),(0,n.kt)("td",{parentName:"tr",align:null},"Extended"),(0,n.kt)("td",{parentName:"tr",align:null},"WeekBasedMaterialDemand ",(0,n.kt)("br",null)," WeekBasedCapacity Group"),(0,n.kt)("td",{parentName:"tr",align:null},"DCM Asset Administration Shell API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Request for update"),(0,n.kt)("td",{parentName:"tr",align:null},"Extended"),(0,n.kt)("td",{parentName:"tr",align:null},"IdBasedRequestForUpdate"),(0,n.kt)("td",{parentName:"tr",align:null},"IdBasedRequestForUpdate AP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Comments"),(0,n.kt)("td",{parentName:"tr",align:null},"Extended"),(0,n.kt)("td",{parentName:"tr",align:null},"IdBasedComment"),(0,n.kt)("td",{parentName:"tr",align:null},"IdBasedComment API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supply chain disruption notifications"),(0,n.kt)("td",{parentName:"tr",align:null},"Extended"),(0,n.kt)("td",{parentName:"tr",align:null},"demandAndCapacityNotification"),(0,n.kt)("td",{parentName:"tr",align:null},"DemandAndCapacityNotification API")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Core capabilities are mandatory within the standard."),(0,n.kt)("li",{parentName:"ul"},"Outer core capabilities share APIs and aspect models with core capabilities, but are optional."),(0,n.kt)("li",{parentName:"ul"},"Extended capabilities introduce aspect models or APIs beyond the core and are optional.")),(0,n.kt)("p",null,"A MVP approach can be followed when developing software, implementing CX-0128, by taking care of core capabilities first, followed by outer core and finishing with extended capabilities."),(0,n.kt)("h2",{id:"roles-and-rights-of-a-dcm-application"},"Roles and rights of a DCM application"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange")," describes the business roles customer and supplier. In addition an admin role might be a sensible addition to any application. Most companies within a supply chain will have need of both business roles. Individual users within a company might need access to both business roles."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Role"),(0,n.kt)("th",{parentName:"tr",align:null},"Capabilities"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Customer"),(0,n.kt)("td",{parentName:"tr",align:null},"- Modify WeekBasedMaterialDemand ",(0,n.kt)("br",null)," - Compare WeekBasedMaterialDemand to WeekBasedCapacityGroup ",(0,n.kt)("br",null)," - Utilize comments ",(0,n.kt)("br",null)," - Utilize supply chain disruption notification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supplier"),(0,n.kt)("td",{parentName:"tr",align:null},"- Modify WeekBasedCapacityGroup ",(0,n.kt)("br",null)," - Compare WeekBasedMaterialDemand to WeekBasedCapacityGroup ",(0,n.kt)("br",null)," - Link WeekBasedMaterialDemand to WeekBasedCapacityGroup ",(0,n.kt)("br",null)," - Utilize comments ",(0,n.kt)("br",null)," - Utilize supply chain disruption notification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Admin"),(0,n.kt)("td",{parentName:"tr",align:null},"- Configure Request for update")))),(0,n.kt)("h2",{id:"aspect-models-utilized-by-a-dcm-application"},"Aspect models utilized by a DCM application"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs-kits/24.08/kits/Demand%20and%20Capacity%20Management%20Kit/development-view/model-WeekBasedMaterialDemand"},"WeekBasedMaterialDemand")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs-kits/24.08/kits/Demand%20and%20Capacity%20Management%20Kit/development-view/model-WeekBasedCapacityGroup"},"WeekBasedCapacityGroup")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs-kits/24.08/kits/Demand%20and%20Capacity%20Management%20Kit/development-view/model-IdBasedRequestForUpdate"},"IdBasedRequestForUpdate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs-kits/24.08/kits/Demand%20and%20Capacity%20Management%20Kit/development-view/model-IdBasedComment"},"IdBasedComment"))),(0,n.kt)("h2",{id:"application-programming-interfaces"},"Application Programming Interfaces"),(0,n.kt)("h3",{id:"apis-as-data-assets"},"APIs as data assets"),(0,n.kt)("p",null,"The data consumer registers one data-asset per API with his own EDC. Those data-assets need a ",(0,n.kt)("inlineCode",{parentName:"p"},"dataAddress")," with a ",(0,n.kt)("inlineCode",{parentName:"p"},"baseURL")," pointing to the URI of the API endpoint. The same ",(0,n.kt)("inlineCode",{parentName:"p"},"dataAddress")," needs to be setup to use the consumers EDC as a proxy, utilizing the different proxy related properties within the ",(0,n.kt)("inlineCode",{parentName:"p"},"dataAddress")," object."),(0,n.kt)("h4",{id:"asset-example"},"Asset example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@id": "capacitygroup-prod",\n  "@type": "Asset",\n  "properties": {\n    "http://purl.org/dc/terms/type": {\n      "@id": "https://w3id.org/catenax/taxonomy#DcmWeekBasedCapacityGroup"\n    },\n    "https://w3id.org/catenax/ontology/common#version": "2.0",\n    "id": "capacitygroup-prod"\n  },\n  "dataAddress": {\n    "@type": "DataAddress",\n    "proxyPath": "false",\n    "oauth2:clientId": {{clientID}},\n    "oauth2:tokenUrl": {{tokenUrl}},\n    "type": "HttpData",\n    "proxyMethod": "true",\n    "oauth2:clientSecretKey": "dcm-api-client-secret",\n    "oauth2:scope": "roles",\n    "proxyQueryParams": "true",\n    "proxyBody": "true",\n    "baseUrl": "https://myDCMapp.mycompany.com/catx/apis/weekbasedcapacitygroup"\n  },\n')),(0,n.kt)("h3",{id:"data-exchange"},"Data exchange"),(0,n.kt)("p",null,"The data provider is required to use HTTP POST to call the API in order to transfer the data. The POST request has to contain a messageHeader and can contain multiple information objects, with information objects being the different aspect models. Because one API is dedicated to one aspect models mixing different aspect models into the same payload as information objects will result in a malformed payload."),(0,n.kt)("h4",{id:"payload-structure"},"Payload structure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messageHeader":\n      <messageHeaderObject>,\n \n  "content":{\n      "informationObject":[\n        <informationObject>,\n        <informationObject>\n      ]\n  }\n}\n')),(0,n.kt)("p",null,"This format ensures that the header, which contains metadata about the message, is kept separate from the content, which includes the actual data being exchanged. The content section can hold multiple ",(0,n.kt)("inlineCode",{parentName:"p"},"informationObject")," entries. These objects can be one of the following types: ",(0,n.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"IdBasedComment")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"IdBasedRequestForUpdate"),"."),(0,n.kt)("p",null,"The master reference for generating additional file formats and serializations is the RDF turtle file, which is an instance of the Semantic Aspect Meta Model. The RDF turtle file for the ",(0,n.kt)("inlineCode",{parentName:"p"},"messageHeaderObject")," is defined in a centralized shared aspect model and can be accessed at the following URL:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.shared.message_header/3.0.0/MessageHeaderAspect.ttl\n")),(0,n.kt)("p",null,"Within the RDF turtle file, you will find detailed descriptions for how to use the message header."),(0,n.kt)("p",null,"For further information on the APIs and how to use them in order to facilitate data exchange, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0128 Demand and Capacity Management Data Exchange")," and ",(0,n.kt)("a",{parentName:"p",href:"https://catenax-ev.github.io/docs/next/standards/CX-0128-DemandandCapacityManagementDataExchange"},"CX-0018 Dataspace Connectivity")),(0,n.kt)("h2",{id:"apis-utilized-by-a-dcm-application"},"APIs utilized by a DCM application"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs-kits/24.08/kits/Demand%20and%20Capacity%20Management%20Kit/development-view/api-WeekBasedMaterialDemand"},"WeekBasedMaterialDemand API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs-kits/24.08/kits/Demand%20and%20Capacity%20Management%20Kit/development-view/api-WeekBasedCapacityGroup"},"WeekBasedCapacityGroup API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs-kits/24.08/kits/Demand%20and%20Capacity%20Management%20Kit/development-view/api-IdBasedRequestForUpdate"},"RequestForUpdate API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs-kits/24.08/kits/Demand%20and%20Capacity%20Management%20Kit/development-view/api-IdBasedComment"},"IdBasedComment API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs-kits/24.08/kits/Demand%20and%20Capacity%20Management%20Kit/development-view/api-aas"},"DCM Asset Administration Shell API (AAS API)"))),(0,n.kt)("h2",{id:"notice"},"Notice"),(0,n.kt)("p",null,"This work is licensed under the ",(0,n.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 ZF Friedrichshafen AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 SAP SE"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 Volkswagen AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 Mercedes Benz Group AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 BASF SE"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 SupplyOn AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 Henkel AG & Co.KGaA"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 Fraunhofer-Gesellschaft zur F\xf6rderung der angewandten Forschung e.V (Fraunhofer)"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023,2024 Contributors to the Eclipse Foundation")))}N.isMDXComponent=!0},93191:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg1IiBoZWlnaHQ9IjI0NSIgdmlld0JveD0iMCAwIDI4NSAyNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzE4MDYpIj4KPHBhdGggZD0iTTEyMy4wNDggOTEuODM2OUMxMzMuNzA1IDg1LjY4NDQgMTUwLjk4NSA4NS42ODQ0IDE2MS42NDIgOTEuODM2OUwyNTQuMzQ1IDE0NS4zNTRDMjY1LjAwMiAxNTEuNTA3IDI2NS4wMDIgMTYxLjQ4MiAyNTQuMzQ1IDE2Ny42MzVMMTYxLjY0MiAyMjEuMTUyQzE1MC45ODUgMjI3LjMwNCAxMzMuNzA1IDIyNy4zMDQgMTIzLjA0OCAyMjEuMTUyTDMwLjM0NTMgMTY3LjYzNUMxOS42ODc5IDE2MS40ODIgMTkuNjg3OCAxNTEuNTA3IDMwLjM0NTMgMTQ1LjM1NEwxMjMuMDQ4IDkxLjgzNjlaIiBmaWxsPSIjRTNERUU2IiBmaWxsLW9wYWNpdHk9IjAuOSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My4zOCAxNTguMTFMMTYwLjY3NyAxMDQuNTkzQzE1MC41NTMgOTguNzQ4MyAxMzQuMTM3IDk4Ljc0ODMgMTI0LjAxMyAxMDQuNTkzTDMxLjMxMDIgMTU4LjExQzIxLjE4NTYgMTYzLjk1NSAyMS4xODU2IDE3My40MzIgMzEuMzEwMiAxNzkuMjc3TDEyNC4wMTMgMjMyLjc5NEMxMzQuMTM3IDIzOC42MzkgMTUwLjU1MyAyMzguNjM5IDE2MC42NzcgMjMyLjc5NEwyNTMuMzggMTc5LjI3N0MyNjMuNTA0IDE3My40MzIgMjYzLjUwNCAxNjMuOTU1IDI1My4zOCAxNTguMTFaTTE2MS42NDIgMTA0LjAzNkMxNTAuOTg1IDk3Ljg4MzYgMTMzLjcwNSA5Ny44ODM2IDEyMy4wNDggMTA0LjAzNkwzMC4zNDU0IDE1Ny41NTNDMTkuNjg3OSAxNjMuNzA2IDE5LjY4NzkgMTczLjY4MSAzMC4zNDU0IDE3OS44MzRMMTIzLjA0OCAyMzMuMzUxQzEzMy43MDUgMjM5LjUwNCAxNTAuOTg1IDIzOS41MDQgMTYxLjY0MiAyMzMuMzUxTDI1NC4zNDUgMTc5LjgzNEMyNjUuMDAyIDE3My42ODEgMjY1LjAwMiAxNjMuNzA2IDI1NC4zNDUgMTU3LjU1M0wxNjEuNjQyIDEwNC4wMzZaIiBmaWxsPSIjRTVFMEU3Ii8+CjxwYXRoIGQ9Ik0xMjMuNjY0IDY0LjY5NjhDMTM0LjMyMiA1OC41NDQzIDE1MS42MDEgNTguNTQ0MyAxNjIuMjU5IDY0LjY5NjhMMjU0Ljk2MSAxMTguMjE0QzI2NS42MTkgMTI0LjM2NyAyNjUuNjE5IDEzNC4zNDIgMjU0Ljk2MSAxNDAuNDk0TDE2Mi4yNTkgMTk0LjAxMkMxNTEuNjAxIDIwMC4xNjQgMTM0LjMyMiAyMDAuMTY0IDEyMy42NjQgMTk0LjAxMkwzMC45NjE4IDE0MC40OTRDMjAuMzA0NCAxMzQuMzQyIDIwLjMwNDQgMTI0LjM2NyAzMC45NjE4IDExOC4yMTRMMTIzLjY2NCA2NC42OTY4WiIgZmlsbD0iI0Q2Q0VEQSIvPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kZGRkZF8xXzE4MDYpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTMuOTk2IDEzMC45N0wxNjEuMjk0IDc3LjQ1M0MxNTEuMTY5IDcxLjYwODEgMTM0Ljc1NCA3MS42MDgxIDEyNC42MjkgNzcuNDUzTDMxLjkyNjcgMTMwLjk3QzIxLjgwMjEgMTM2LjgxNSAyMS44MDIxIDE0Ni4yOTIgMzEuOTI2NyAxNTIuMTM3TDEyNC42MjkgMjA1LjY1NEMxMzQuNzU0IDIxMS40OTkgMTUxLjE2OSAyMTEuNDk5IDE2MS4yOTQgMjA1LjY1NEwyNTMuOTk2IDE1Mi4xMzdDMjY0LjEyMSAxNDYuMjkyIDI2NC4xMjEgMTM2LjgxNSAyNTMuOTk2IDEzMC45N1pNMTYyLjI1OSA3Ni44OTZDMTUxLjYwMSA3MC43NDM1IDEzNC4zMjIgNzAuNzQzNSAxMjMuNjY0IDc2Ljg5NkwzMC45NjE4IDEzMC40MTNDMjAuMzA0NCAxMzYuNTY2IDIwLjMwNDQgMTQ2LjU0MSAzMC45NjE4IDE1Mi42OTRMMTIzLjY2NCAyMDYuMjExQzEzNC4zMjIgMjEyLjM2MyAxNTEuNjAxIDIxMi4zNjMgMTYyLjI1OSAyMDYuMjExTDI1NC45NjEgMTUyLjY5NEMyNjUuNjE5IDE0Ni41NDEgMjY1LjYxOSAxMzYuNTY2IDI1NC45NjEgMTMwLjQxM0wxNjIuMjU5IDc2Ljg5NloiIGZpbGw9IiNENkNFREEiLz4KPC9nPgo8cGF0aCBkPSJNMTIzLjY2NCAzOC43ODk2QzEzNC4zMjIgMzIuNjM3IDE1MS42MDEgMzIuNjM3IDE2Mi4yNTkgMzguNzg5NkwyNTQuOTYxIDkyLjMwNjhDMjY1LjYxOSA5OC40NTk0IDI2NS42MTkgMTA4LjQzNSAyNTQuOTYxIDExNC41ODdMMTYyLjI1OSAxNjguMTA0QzE1MS42MDEgMTc0LjI1NyAxMzQuMzIyIDE3NC4yNTcgMTIzLjY2NCAxNjguMTA0TDMwLjk2MTggMTE0LjU4N0MyMC4zMDQ0IDEwOC40MzUgMjAuMzA0NCA5OC40NTk0IDMwLjk2MTggOTIuMzA2OEwxMjMuNjY0IDM4Ljc4OTZaIiBmaWxsPSIjQjZBNkJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUzLjk5NiAxMDUuMDYzTDE2MS4yOTQgNTEuNTQ1OEMxNTEuMTY5IDQ1LjcwMDkgMTM0Ljc1NCA0NS43MDA5IDEyNC42MjkgNTEuNTQ1OEwzMS45MjY3IDEwNS4wNjNDMjEuODAyMiAxMTAuOTA4IDIxLjgwMjIgMTIwLjM4NCAzMS45MjY3IDEyNi4yMjlMMTI0LjYyOSAxNzkuNzQ3QzEzNC43NTQgMTg1LjU5MiAxNTEuMTY5IDE4NS41OTIgMTYxLjI5NCAxNzkuNzQ3TDI1My45OTYgMTI2LjIyOUMyNjQuMTIxIDEyMC4zODQgMjY0LjEyMSAxMTAuOTA4IDI1My45OTYgMTA1LjA2M1pNMTYyLjI1OSA1MC45ODg4QzE1MS42MDEgNDQuODM2MyAxMzQuMzIyIDQ0LjgzNjMgMTIzLjY2NSA1MC45ODg4TDMwLjk2MTkgMTA0LjUwNkMyMC4zMDQ0IDExMC42NTkgMjAuMzA0NCAxMjAuNjM0IDMwLjk2MTkgMTI2Ljc4NkwxMjMuNjY1IDE4MC4zMDRDMTM0LjMyMiAxODYuNDU2IDE1MS42MDEgMTg2LjQ1NiAxNjIuMjU5IDE4MC4zMDRMMjU0Ljk2MSAxMjYuNzg2QzI2NS42MTkgMTIwLjYzNCAyNjUuNjE5IDExMC42NTkgMjU0Ljk2MSAxMDQuNTA2TDE2Mi4yNTkgNTAuOTg4OFoiIGZpbGw9IiNCNkE2QkYiLz4KPHBhdGggZD0iTTEyMy42NjUgMTEuNjQ5QzEzNC4zMjIgNS40OTY0MiAxNTEuNjAxIDUuNDk2NDEgMTYyLjI1OSAxMS42NDlMMjU0Ljk2MiA2NS4xNjYyQzI2NS42MTkgNzEuMzE4NyAyNjUuNjE5IDgxLjI5NCAyNTQuOTYyIDg3LjQ0NjVMMTYyLjI1OSAxNDAuOTY0QzE1MS42MDEgMTQ3LjExNiAxMzQuMzIyIDE0Ny4xMTYgMTIzLjY2NSAxNDAuOTY0TDMwLjk2MjIgODcuNDQ2NUMyMC4zMDQ4IDgxLjI5NCAyMC4zMDQ4IDcxLjMxODggMzAuOTYyMiA2NS4xNjYyTDEyMy42NjUgMTEuNjQ5WiIgZmlsbD0iIzk2NzZBNiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My45OTcgNzcuOTIyNEwxNjEuMjk0IDI0LjQwNTJDMTUxLjE3IDE4LjU2MDMgMTM0Ljc1NCAxOC41NjAzIDEyNC42MyAyNC40MDUyTDMxLjkyNzEgNzcuOTIyNEMyMS44MDI1IDgzLjc2NzMgMjEuODAyNSA5My4yNDM4IDMxLjkyNzEgOTkuMDg4OEwxMjQuNjMgMTUyLjYwNkMxMzQuNzU0IDE1OC40NTEgMTUxLjE3IDE1OC40NTEgMTYxLjI5NCAxNTIuNjA2TDI1My45OTcgOTkuMDg4OEMyNjQuMTIxIDkzLjI0MzggMjY0LjEyMSA4My43NjczIDI1My45OTcgNzcuOTIyNFpNMTYyLjI1OSAyMy44NDgyQzE1MS42MDEgMTcuNjk1NiAxMzQuMzIyIDE3LjY5NTYgMTIzLjY2NSAyMy44NDgyTDMwLjk2MjIgNzcuMzY1NEMyMC4zMDQ4IDgzLjUxOCAyMC4zMDQ4IDkzLjQ5MzIgMzAuOTYyMiA5OS42NDU4TDEyMy42NjUgMTUzLjE2M0MxMzQuMzIyIDE1OS4zMTYgMTUxLjYwMSAxNTkuMzE2IDE2Mi4yNTkgMTUzLjE2M0wyNTQuOTYyIDk5LjY0NThDMjY1LjYxOSA5My40OTMyIDI2NS42MTkgODMuNTE4IDI1NC45NjIgNzcuMzY1NEwxNjIuMjU5IDIzLjg0ODJaIiBmaWxsPSIjOTY3NkE2Ii8+CjxwYXRoIGQ9Ik0xMzguMjE3IDczLjI2NzFMMTE3LjcyNSA4NS4wOTc1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTE2MS42MzcgODkuODYwNEwxNDMuODA2IDEwMC4xNTQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPgo8cGF0aCBkPSJNMTU4LjQ0NCA3Ni42NDdMMTMwLjc2NSA5Mi42MjU3IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTExNy43MjUgNzAuMDQwNUwxMDQuNjg0IDc3LjU2OSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxwYXRoIGQ9Ik0xMTUuMDYzIDU2LjUyTDkxLjY0MyA3MC4wNDA1IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPHBhdGggZD0iTTEyNC42NDQgNDkuNDUyNUwxMjQuNzMzIDUxLjc5NjhDMTI1LjA0IDU5LjkwNjUgMTM3LjA0IDY2LjIxNzMgMTUxLjA1NiA2NS42Mzk1VjY1LjYzOTVDMTY2LjU4OSA2NC45OTkxIDE3OS4yMjUgNzIuNzUzOSAxNzcuMTY5IDgxLjY2NTVMMTc2Ljg1NiA4My4wMjMzIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kZGRkZF8xXzE4MDYiIHg9Ii00Mi4wMzEyIiB5PSI1OC4yODE3IiB3aWR0aD0iMzkxLjk4NSIgaGVpZ2h0PSI0MTguNTQzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMV8xODA2Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjEiIGR5PSIxMiIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMyIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18xXzE4MDYiIHJlc3VsdD0iZWZmZWN0Ml9kcm9wU2hhZG93XzFfMTgwNiIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR4PSIzIiBkeT0iNDciLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMjQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDkgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0Ml9kcm9wU2hhZG93XzFfMTgwNiIgcmVzdWx0PSJlZmZlY3QzX2Ryb3BTaGFkb3dfMV8xODA2Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjYiIGR5PSIxMDciLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMzIiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDUgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0M19kcm9wU2hhZG93XzFfMTgwNiIgcmVzdWx0PSJlZmZlY3Q0X2Ryb3BTaGFkb3dfMV8xODA2Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjExIiBkeT0iMTkwIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjM4Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDRfZHJvcFNoYWRvd18xXzE4MDYiIHJlc3VsdD0iZWZmZWN0NV9kcm9wU2hhZG93XzFfMTgwNiIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDVfZHJvcFNoYWRvd18xXzE4MDYiIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV8xODA2Ij4KPHJlY3Qgd2lkdGg9IjI4NC4zNDIiIGhlaWdodD0iMjQzLjk4MyIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMC41MDg3ODkpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);