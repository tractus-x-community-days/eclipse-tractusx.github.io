"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[82864,77053],{3905:(M,e,i)=>{i.d(e,{Zo:()=>T,kt:()=>c});var I=i(67294);function D(M,e,i){return e in M?Object.defineProperty(M,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):M[e]=i,M}function N(M,e){var i=Object.keys(M);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(M);e&&(I=I.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),i.push.apply(i,I)}return i}function t(M){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?N(Object(i),!0).forEach((function(e){D(M,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(i)):N(Object(i)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(i,e))}))}return M}function g(M,e){if(null==M)return{};var i,I,D=function(M,e){if(null==M)return{};var i,I,D={},N=Object.keys(M);for(I=0;I<N.length;I++)i=N[I],e.indexOf(i)>=0||(D[i]=M[i]);return D}(M,e);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);for(I=0;I<N.length;I++)i=N[I],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(M,i)&&(D[i]=M[i])}return D}var j=I.createContext({}),u=function(M){var e=I.useContext(j),i=e;return M&&(i="function"==typeof M?M(e):t(t({},e),M)),i},T=function(M){var e=u(M.components);return I.createElement(j.Provider,{value:e},M.children)},y="mdxType",r={inlineCode:"code",wrapper:function(M){var e=M.children;return I.createElement(I.Fragment,{},e)}},z=I.forwardRef((function(M,e){var i=M.components,D=M.mdxType,N=M.originalType,j=M.parentName,T=g(M,["components","mdxType","originalType","parentName"]),y=u(i),z=D,c=y["".concat(j,".").concat(z)]||y[z]||r[z]||N;return i?I.createElement(c,t(t({ref:e},T),{},{components:i})):I.createElement(c,t({ref:e},T))}));function c(M,e){var i=arguments,D=e&&e.mdxType;if("string"==typeof M||D){var N=i.length,t=new Array(N);t[0]=z;var g={};for(var j in e)hasOwnProperty.call(e,j)&&(g[j]=e[j]);g.originalType=M,g[y]="string"==typeof M?M:D,t[1]=g;for(var u=2;u<N;u++)t[u]=i[u];return I.createElement.apply(null,t)}return I.createElement.apply(null,i)}z.displayName="MDXCreateElement"},31579:(M,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>g,default:()=>r,frontMatter:()=>t,metadata:()=>j,toc:()=>T});var I=i(87462),D=(i(67294),i(3905)),N=i(63570);const t={id:"Policies Development View Industry Core Kit",title:"Policies",description:"Industry Core KIT",sidebar_position:3},g=void 0,j={unversionedId:"kits/Industry Core Kit/Software Development View/Policies Development View Industry Core Kit",id:"version-24.05/kits/Industry Core Kit/Software Development View/Policies Development View Industry Core Kit",title:"Policies",description:"Industry Core KIT",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Industry Core Kit/Software Development View/page_policies.mdx",sourceDirName:"kits/Industry Core Kit/Software Development View",slug:"/kits/Industry Core Kit/Software Development View/Policies Development View Industry Core Kit",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Industry Core Kit/Software Development View/Policies Development View Industry Core Kit",draft:!1,tags:[],version:"24.05",sidebarPosition:3,frontMatter:{id:"Policies Development View Industry Core Kit",title:"Policies",description:"Industry Core KIT",sidebar_position:3},sidebar:"kits",previous:{title:"Aspect Models",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Industry Core Kit/Software Development View/Aspect Models Development View Industry Core Kit"},next:{title:"part_aspect-model-overview",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Industry Core Kit/Software Development View/part_aspect-model-overview"}},u={},T=[{value:"Usage Policies / Contract Policies",id:"usage-policies--contract-policies",level:3},{value:"FrameworkAgreement",id:"frameworkagreement",level:4},{value:"UsagePurpose",id:"usagepurpose",level:4}],y={toc:T};function r(M){let{components:e,...t}=M;return(0,D.kt)("wrapper",(0,I.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,D.kt)("p",null,(0,D.kt)("img",{alt:"Industry Core kit banner",src:i(84588).Z,width:"287",height:"245"})),(0,D.kt)("p",null,"The Policies are used to increase data sovereignty by limiting the access and usage of data. In the following, access\nand usage policies with their usage in the EDC are described. An explanation of Policy-handling mechanics in the EDC\nis available in the ",(0,D.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/docs/usage/management-api-walkthrough/02_policies.md#access--usage-policies"},"EDC docs"),".\nFor general conventions about Usage Policies in Catena-X, check the ",(0,D.kt)("a",{parentName:"p",href:"../../../category/connector-kit"},"Connector Kit"),"."),(0,D.kt)("h3",{id:"usage-policies--contract-policies"},"Usage Policies / Contract Policies"),(0,D.kt)("p",null,"Policies are defined based on the ",(0,D.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/odrl-model/"},"W3C ODRL format"),". This allows a standardized way\nof formulating policy payloads. To further define and restrict the possibilities of the ODRL language, it is recommended\nto create separate, more specific ODRL profiles. For Catena-X, the profile is published ",(0,D.kt)("a",{parentName:"p",href:"https://github.com/catenax-eV/cx-odrl-profile"},"here"),"."),(0,D.kt)("h4",{id:"frameworkagreement"},"FrameworkAgreement"),(0,D.kt)("p",null,"As described in the Connector Kit, there is a Credential issued for each Use Case Framework. As the Industry Core (IC)\nis not a use-case but rather a set of foundational models and technologies, there is no specific Framework Agreement for\nit."),(0,D.kt)("h4",{id:"usagepurpose"},"UsagePurpose"),(0,D.kt)("p",null,"Instead, there's a set of purposes for the Industry Core. These purposes can be used in all use-cases that build on it,\nand for instance be chained with the FrameworkAgreementConstraint for the Traceability use-case.\nThe complete list is formalized in the CX-ODRL-Profile. Here's an example constraint for the IC's foundational purpose:"),(0,D.kt)("pre",null,(0,D.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": [\n     "https://www.w3.org/ns/odrl.jsonld",\n     {\n       "cx-policy": "https://w3id.org/catenax/policy/"\n     }\n  ],\n  "leftOperand": "cx-policy:UsagePurpose",\n  "operator": "eq",\n  "rightOperand": "cx.core.industrycore:1"\n}\n')),(0,D.kt)("p",null,"As the IC in turn relies on a set of other components and concepts. The ",(0,D.kt)("inlineCode",{parentName:"p"},"cx.core.industrycore:1")," purpose however should\nonly be used on offers leading to aspects, usually behind a Submodel API. Despite the fact that the Digital Twin\nRegistry (as defined in the ",(0,D.kt)("a",{parentName:"p",href:"../../../category/digital-twin-kit/"},"DT Kit"),") is\na mandatory component of the Industry Core, it should be exposed only with the purpose ",(0,D.kt)("inlineCode",{parentName:"p"},"cx.core.digitalTwinRegistry:1"),"."),(0,D.kt)(N.default,{components:t.components,mdxType:"Notice"}))}r.isMDXComponent=!0},63570:(M,e,i)=>{i.r(e),i.d(e,{assets:()=>j,contentTitle:()=>t,default:()=>y,frontMatter:()=>N,metadata:()=>g,toc:()=>u});var I=i(87462),D=(i(67294),i(3905));const N={sidebar_class_name:"hidden"},t=void 0,g={unversionedId:"kits/Industry Core Kit/part_notice",id:"version-24.05/kits/Industry Core Kit/part_notice",title:"part_notice",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Industry Core Kit/part_notice.mdx",sourceDirName:"kits/Industry Core Kit",slug:"/kits/Industry Core Kit/part_notice",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Industry Core Kit/part_notice",draft:!1,tags:[],version:"24.05",frontMatter:{sidebar_class_name:"hidden"},sidebar:"kits",previous:{title:"part_future-concepts",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Industry Core Kit/part_future-concepts"},next:{title:"Model Based Development and Data Processing (MDP) KIT",permalink:"/eclipse-tractusx.github.io/docs-kits/category/model-based-development-and-data-processing-mdp-kit"}},j={},u=[{value:"NOTICE",id:"notice",level:2}],T={toc:u};function y(M){let{components:e,...i}=M;return(0,D.kt)("wrapper",(0,I.Z)({},T,i,{components:e,mdxType:"MDXLayout"}),(0,D.kt)("h2",{id:"notice"},"NOTICE"),(0,D.kt)("p",null,"This work is licensed under the ",(0,D.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,D.kt)("ul",null,(0,D.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,D.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 BASF SE"),(0,D.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,D.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Fraunhofer-Gesellschaft zur Foerderung der angewandten Forschung e.V. (represented by Fraunhofer ISST & Fraunhofer IML)"),(0,D.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 German Edge Cloud GmbH & Co. KG"),(0,D.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Mercedes Benz AG"),(0,D.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Robert Bosch Manufacturing Solutions GmbH"),(0,D.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,D.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Siemens AG"),(0,D.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 T-Systems International GmbH"),(0,D.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 ZF Friedrichshafen AG"),(0,D.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Contributors to the Eclipse Foundation"),(0,D.kt)("li",{parentName:"ul"},"Source URL: ",(0,D.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs-kits/kits/Industry%20Core%20Kit"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs-kits/kits/Industry%20Core%20Kit")," (latest version)")))}y.isMDXComponent=!0},84588:(M,e,i)=>{i.d(e,{Z:()=>I});const I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg3IiBoZWlnaHQ9IjI0NSIgdmlld0JveD0iMCAwIDI4NyAyNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xNDI5XzEzMzMpIj4KPHBhdGggZD0iTTEyMy4wMyA5MS42MTQzQzEzMy42ODggODUuNDYxNyAxNTAuOTY3IDg1LjQ2MTcgMTYxLjYyNCA5MS42MTQzTDI1NC4zMjcgMTQ1LjEzMkMyNjQuOTg0IDE1MS4yODQgMjY0Ljk4NCAxNjEuMjU5IDI1NC4zMjcgMTY3LjQxMkwxNjEuNjI0IDIyMC45MjlDMTUwLjk2NyAyMjcuMDgyIDEzMy42ODggMjI3LjA4MiAxMjMuMDMgMjIwLjkyOUwzMC4zMjc1IDE2Ny40MTJDMTkuNjcgMTYxLjI1OSAxOS42NyAxNTEuMjg0IDMwLjMyNzUgMTQ1LjEzMkwxMjMuMDMgOTEuNjE0M1oiIGZpbGw9IiM1N0E2RjUiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUzLjM2MiAxNTcuODg4TDE2MC42NTkgMTA0LjM3MUMxNTAuNTM1IDk4LjUyNTYgMTM0LjEyIDk4LjUyNTYgMTIzLjk5NSAxMDQuMzcxTDMxLjI5MjMgMTU3Ljg4OEMyMS4xNjc4IDE2My43MzMgMjEuMTY3OCAxNzMuMjA5IDMxLjI5MjMgMTc5LjA1NEwxMjMuOTk1IDIzMi41NzFDMTM0LjEyIDIzOC40MTYgMTUwLjUzNSAyMzguNDE2IDE2MC42NTkgMjMyLjU3MUwyNTMuMzYyIDE3OS4wNTRDMjYzLjQ4NyAxNzMuMjA5IDI2My40ODcgMTYzLjczMyAyNTMuMzYyIDE1Ny44ODhaTTE2MS42MjQgMTAzLjgxNEMxNTAuOTY3IDk3LjY2MSAxMzMuNjg4IDk3LjY2MSAxMjMuMDMgMTAzLjgxNEwzMC4zMjc1IDE1Ny4zMzFDMTkuNjcgMTYzLjQ4MyAxOS42NyAxNzMuNDU5IDMwLjMyNzUgMTc5LjYxMUwxMjMuMDMgMjMzLjEyOEMxMzMuNjg4IDIzOS4yODEgMTUwLjk2NyAyMzkuMjgxIDE2MS42MjQgMjMzLjEyOEwyNTQuMzI3IDE3OS42MTFDMjY0Ljk4NCAxNzMuNDU5IDI2NC45ODQgMTYzLjQ4MyAyNTQuMzI3IDE1Ny4zMzFMMTYxLjYyNCAxMDMuODE0WiIgZmlsbD0iIzU3QTZGNSIvPgo8cGF0aCBkPSJNMTIzLjY0NyA2NC40NzQyQzEzNC4zMDUgNTguMzIxNiAxNTEuNTg0IDU4LjMyMTYgMTYyLjI0MSA2NC40NzQyTDI1NC45NDQgMTE3Ljk5MUMyNjUuNjAxIDEyNC4xNDQgMjY1LjYwMSAxMzQuMTE5IDI1NC45NDQgMTQwLjI3MkwxNjIuMjQxIDE5My43ODlDMTUxLjU4NCAxOTkuOTQyIDEzNC4zMDUgMTk5Ljk0MiAxMjMuNjQ3IDE5My43ODlMMzAuOTQ0NyAxNDAuMjcyQzIwLjI4NzIgMTM0LjExOSAyMC4yODcyIDEyNC4xNDQgMzAuOTQ0NyAxMTcuOTkxTDEyMy42NDcgNjQuNDc0MloiIGZpbGw9IiM0MzkwRUIiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RkZGRkXzE0MjlfMTMzMykiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My45NzkgMTMwLjc0OEwxNjEuMjc2IDc3LjIzMDRDMTUxLjE1MiA3MS4zODU1IDEzNC43MzcgNzEuMzg1NSAxMjQuNjEyIDc3LjIzMDRMMzEuOTA5NSAxMzAuNzQ4QzIxLjc4NDkgMTM2LjU5MyAyMS43ODQ5IDE0Ni4wNjkgMzEuOTA5NSAxNTEuOTE0TDEyNC42MTIgMjA1LjQzMUMxMzQuNzM3IDIxMS4yNzYgMTUxLjE1MiAyMTEuMjc2IDE2MS4yNzcgMjA1LjQzMUwyNTMuOTc5IDE1MS45MTRDMjY0LjEwNCAxNDYuMDY5IDI2NC4xMDQgMTM2LjU5MyAyNTMuOTc5IDEzMC43NDhaTTE2Mi4yNDEgNzYuNjczNEMxNTEuNTg0IDcwLjUyMDggMTM0LjMwNSA3MC41MjA4IDEyMy42NDcgNzYuNjczNEwzMC45NDQ3IDEzMC4xOTFDMjAuMjg3MiAxMzYuMzQzIDIwLjI4NzIgMTQ2LjMxOCAzMC45NDQ3IDE1Mi40NzFMMTIzLjY0NyAyMDUuOTg4QzEzNC4zMDUgMjEyLjE0MSAxNTEuNTg0IDIxMi4xNDEgMTYyLjI0MSAyMDUuOTg4TDI1NC45NDQgMTUyLjQ3MUMyNjUuNjAxIDE0Ni4zMTggMjY1LjYwMSAxMzYuMzQzIDI1NC45NDQgMTMwLjE5MUwxNjIuMjQxIDc2LjY3MzRaIiBmaWxsPSIjNDM5MEVCIi8+CjwvZz4KPHBhdGggZD0iTTEyMy42NDcgMzguNTY2OUMxMzQuMzA1IDMyLjQxNDQgMTUxLjU4NCAzMi40MTQ0IDE2Mi4yNDEgMzguNTY2OUwyNTQuOTQ0IDkyLjA4NDJDMjY1LjYwMSA5OC4yMzY3IDI2NS42MDEgMTA4LjIxMiAyNTQuOTQ0IDExNC4zNjVMMTYyLjI0MSAxNjcuODgyQzE1MS41ODQgMTc0LjAzNCAxMzQuMzA1IDE3NC4wMzQgMTIzLjY0NyAxNjcuODgyTDMwLjk0NDcgMTE0LjM2NUMyMC4yODcyIDEwOC4yMTIgMjAuMjg3MiA5OC4yMzY3IDMwLjk0NDcgOTIuMDg0MkwxMjMuNjQ3IDM4LjU2NjlaIiBmaWxsPSIjMjg1RUM2IiBmaWxsLW9wYWNpdHk9IjAuOSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My45NzkgMTA0Ljg0TDE2MS4yNzYgNTEuMzIzMkMxNTEuMTUyIDQ1LjQ3ODIgMTM0LjczNyA0NS40NzgyIDEyNC42MTIgNTEuMzIzMkwzMS45MDk1IDEwNC44NEMyMS43ODQ5IDExMC42ODUgMjEuNzg0OSAxMjAuMTYyIDMxLjkwOTUgMTI2LjAwN0wxMjQuNjEyIDE3OS41MjRDMTM0LjczNyAxODUuMzY5IDE1MS4xNTIgMTg1LjM2OSAxNjEuMjc3IDE3OS41MjRMMjUzLjk3OSAxMjYuMDA3QzI2NC4xMDQgMTIwLjE2MiAyNjQuMTA0IDExMC42ODUgMjUzLjk3OSAxMDQuODRaTTE2Mi4yNDEgNTAuNzY2MUMxNTEuNTg0IDQ0LjYxMzYgMTM0LjMwNSA0NC42MTM2IDEyMy42NDcgNTAuNzY2MUwzMC45NDQ3IDEwNC4yODNDMjAuMjg3MiAxMTAuNDM2IDIwLjI4NzIgMTIwLjQxMSAzMC45NDQ3IDEyNi41NjRMMTIzLjY0NyAxODAuMDgxQzEzNC4zMDUgMTg2LjIzNCAxNTEuNTg0IDE4Ni4yMzQgMTYyLjI0MSAxODAuMDgxTDI1NC45NDQgMTI2LjU2NEMyNjUuNjAxIDEyMC40MTEgMjY1LjYwMSAxMTAuNDM2IDI1NC45NDQgMTA0LjI4M0wxNjIuMjQxIDUwLjc2NjFaIiBmaWxsPSIjM0I4OENGIi8+CjxwYXRoIGQ9Ik0xMjUuNjkyIDExLjQyNjNDMTM2LjM1IDUuMjczNzYgMTUzLjYyOSA1LjI3Mzc2IDE2NC4yODYgMTEuNDI2M0wyNTYuOTg5IDY0Ljk0MzVDMjY3LjY0NiA3MS4wOTYxIDI2Ny42NDYgODEuMDcxMyAyNTYuOTg5IDg3LjIyMzlMMTY0LjI4NiAxNDAuNzQxQzE1My42MjkgMTQ2Ljg5NCAxMzYuMzUgMTQ2Ljg5NCAxMjUuNjkyIDE0MC43NDFMMzIuOTg5NiA4Ny4yMjM5QzIyLjMzMjEgODEuMDcxMyAyMi4zMzIxIDcxLjA5NjEgMzIuOTg5NiA2NC45NDM2TDEyNS42OTIgMTEuNDI2M1oiIGZpbGw9IiMxQTM0QkEiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTYuMDI0IDc3LjY5OThMMTYzLjMyMSAyNC4xODI1QzE1My4xOTcgMTguMzM3NiAxMzYuNzgyIDE4LjMzNzYgMTI2LjY1NyAyNC4xODI1TDMzLjk1NDQgNzcuNjk5OEMyMy44Mjk5IDgzLjU0NDcgMjMuODI5OSA5My4wMjEyIDMzLjk1NDQgOTguODY2MUwxMjYuNjU3IDE1Mi4zODNDMTM2Ljc4MiAxNTguMjI4IDE1My4xOTcgMTU4LjIyOCAxNjMuMzIxIDE1Mi4zODNMMjU2LjAyNCA5OC44NjYxQzI2Ni4xNDkgOTMuMDIxMiAyNjYuMTQ5IDgzLjU0NDcgMjU2LjAyNCA3Ny42OTk4Wk0xNjQuMjg2IDIzLjYyNTVDMTUzLjYyOSAxNy40NzMgMTM2LjM1IDE3LjQ3MyAxMjUuNjkyIDIzLjYyNTVMMzIuOTg5NiA3Ny4xNDI4QzIyLjMzMjEgODMuMjk1MyAyMi4zMzIxIDkzLjI3MDYgMzIuOTg5NiA5OS40MjMxTDEyNS42OTIgMTUyLjk0QzEzNi4zNSAxNTkuMDkzIDE1My42MjkgMTU5LjA5MyAxNjQuMjg2IDE1Mi45NEwyNTYuOTg5IDk5LjQyMzFDMjY3LjY0NiA5My4yNzA2IDI2Ny42NDYgODMuMjk1MyAyNTYuOTg5IDc3LjE0MjhMMTY0LjI4NiAyMy42MjU1WiIgZmlsbD0iIzFBMzRCQSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyNy4zODQgNTAuNzcyQzEyMy42ODggNDguNjM4NiAxMTcuNjk3IDQ4LjYzODYgMTE0LjAwMSA1MC43NzJDMTEwLjMwNiA1Mi45MDU0IDExMC4zMDYgNTYuMzY0MiAxMTQuMDAxIDU4LjQ5NzZMMTIyLjI1NCA2My4yNjE4QzEyMy40ODggNjMuOTc0MSAxMjQuOTc4IDY0LjQ0ODYgMTI2LjU1MyA2NC42ODUyTDEyNS41MjIgNjIuNDU4OUMxMjUuMTU0IDYyLjMyMTYgMTI0LjgwNiA2Mi4xNiAxMjQuNDg0IDYxLjk3NDFMMTE2LjIzMiA1Ny4yMUMxMTMuNzY4IDU1Ljc4NzggMTEzLjc2OCA1My40ODE4IDExNi4yMzIgNTIuMDU5NkMxMTguNjk1IDUwLjYzNzMgMTIyLjY5IDUwLjYzNzMgMTI1LjE1MyA1Mi4wNTk2TDEzMy40MDYgNTYuODIzN0MxMzUuMzUyIDU3Ljk0NzUgMTM1Ljc2MSA1OS42MjMgMTM0LjYzMSA2MC45Nzg0TDEzNS42NzcgNjMuMjM3OEMxMzkuMzMxIDYxLjEwMjUgMTM5LjMxOCA1Ny42NjE1IDEzNS42MzYgNTUuNTM2MUwxMjcuMzg0IDUwLjc3MloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTgzLjgxMyA4My4zNDg2QzE4Ny41MDggODUuNDgxOSAxODcuNTA4IDg4Ljk0MDggMTgzLjgxMyA5MS4wNzQyQzE4MC4xMTcgOTMuMjA3NiAxNzQuMTI2IDkzLjIwNzYgMTcwLjQzIDkxLjA3NDJMMTYyLjE3OCA4Ni4zMUMxNjAuOTQ0IDg1LjU5NzcgMTYwLjEyMiA4NC43Mzc1IDE1OS43MTIgODMuODI4M0wxNjMuNTY5IDg0LjQyMzRDMTYzLjgwNiA4NC42MzU2IDE2NC4wODYgODQuODM2NiAxNjQuNDA4IDg1LjAyMjRMMTcyLjY2MSA4OS43ODY2QzE3NS4xMjQgOTEuMjA4OCAxNzkuMTE5IDkxLjIwODggMTgxLjU4MiA4OS43ODY2QzE4NC4wNDYgODguMzY0MyAxODQuMDQ2IDg2LjA1ODQgMTgxLjU4MiA4NC42MzYyTDE3My4zMyA3OS44NzJDMTcxLjM4MyA3OC43NDgyIDE2OC40ODEgNzguNTEyNCAxNjYuMTMzIDc5LjE2NDZMMTYyLjIxOSA3OC41NjA2QzE2NS45MTggNzYuNDUxMSAxNzEuODc5IDc2LjQ1OSAxNzUuNTYgNzguNTg0NEwxODMuODEzIDgzLjM0ODZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0NS4xNTQgODEuNTgxNUMxNDMuNDkgODEuNjA0MSAxNDEuODEzIDgxLjI0ODkgMTQwLjU0MyA4MC41MTU4TDEzMi4yOTEgNzUuNzUxN0MxMzEuMDIxIDc1LjAxODYgMTMwLjQwNSA3NC4wNTA3IDEzMC40NDUgNzMuMDkwMUwxMjkuMDI0IDcwLjAyMTlDMTI2LjQwNSA3Mi4xNTQ2IDEyNi43NSA3NS4xMjg2IDEzMC4wNiA3Ny4wMzkzTDEzOC4zMTMgODEuODAzNEMxNDEuNjIyIDgzLjcxNDEgMTQ2Ljc3NCA4My45MTM2IDE1MC40NjggODIuNDAxN0wxNDUuMTU0IDgxLjU4MTVaTTE1NC40MTMgNzcuMzU1N0wxNTEuMDE0IDc2LjgzMTJDMTUwLjcxOCA3Ni4yOTUxIDE1MC4yMDEgNzUuNzkwNyAxNDkuNDY1IDc1LjM2NTRMMTQxLjIxMiA3MC42MDEzQzE0MC40NzUgNzAuMTc1OSAxMzkuNjAyIDY5Ljg3NzggMTM4LjY3MyA2OS43MDY5TDEzNy43NjUgNjcuNzQ0OEMxMzkuODM4IDY3Ljg3MyAxNDEuODUzIDY4LjM5NiAxNDMuNDQzIDY5LjMxMzdMMTUxLjY5NSA3NC4wNzc4QzE1My4yODUgNzQuOTk1NSAxNTQuMTkxIDc2LjE1ODUgMTU0LjQxMyA3Ny4zNTU3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMzMuNDQ0IDcyLjg5OTVMMTI3LjY0NSA2MC41Mzg1TDEzMC42ODkgNjAuMDYyNUwxMzYuNDg4IDcyLjQyMzVMMTMzLjQ0NCA3Mi44OTk1WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNDUuNDgyIDc5Ljg0ODhMMTY2Ljg5NCA4My4xOTY2TDE2Ny43MTkgODEuNDM5TDE0Ni4zMDcgNzguMDkxMkwxNDUuNDgyIDc5Ljg0ODhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwNS4wMDYgODYuNzMyMUMyMDcuMDQyIDg1LjU1NjUgMjA3LjA0MiA4My42NTA2IDIwNS4wMDYgODIuNDc1MUwyMDcuMjM2IDgxLjE4NzVDMjEwLjUwNCA4My4wNzQxIDIxMC41MDQgODYuMTMzIDIwNy4yMzYgODguMDE5N0wxNzAuNjg3IDEwOS4xMkMxNjcuNDE5IDExMS4wMDYgMTYyLjEyIDExMS4wMDYgMTU4Ljg1MiAxMDkuMTJMMTYxLjA4MiAxMDcuODMyQzE2My4xMTkgMTA5LjAwOCAxNjYuNDIgMTA5LjAwOCAxNjguNDU2IDEwNy44MzJMMjA1LjAwNiA4Ni43MzIxWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjEuNTIzIDM4LjUzNzFDMTIzLjU1OSAzNy4zNjE2IDEyNi44NiAzNy4zNjE2IDEyOC44OTcgMzguNTM3MUwxMzEuMTI3IDM3LjI0OTVDMTI3Ljg1OSAzNS4zNjI5IDEyMi41NiAzNS4zNjI5IDExOS4yOTIgMzcuMjQ5NUw4Mi43NDI3IDU4LjM0OTZDNzkuNDc0NyA2MC4yMzYyIDc5LjQ3NDcgNjMuMjk1MSA4Mi43NDI3IDY1LjE4MTdMODQuOTczMSA2My44OTQxQzgyLjkzNjkgNjIuNzE4NiA4Mi45MzY5IDYwLjgxMjcgODQuOTczMSA1OS42MzcyTDEyMS41MjMgMzguNTM3MVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjA0LjU5NiA3Ni40NjI0TDEzOS4zMTIgMzguNzczOUwxMzEuNTM3IDQzLjI2MjNMMTk2LjgyMSA4MC45NTA3TDIwNC41OTYgNzYuNDYyNFpNMTQxLjU0MiAzNy40ODYzQzE0MC4zMSAzNi43NzUyIDEzOC4zMTMgMzYuNzc1MiAxMzcuMDgxIDM3LjQ4NjNMMTI5LjMwNiA0MS45NzQ3QzEyOC4wNzUgNDIuNjg1OCAxMjguMDc1IDQzLjgzODcgMTI5LjMwNiA0NC41NDk5TDE5NC41OSA4Mi4yMzgzQzE5NS44MjIgODIuOTQ5NCAxOTcuODE5IDgyLjk0OTQgMTk5LjA1MSA4Mi4yMzgzTDIwNi44MjYgNzcuNzVDMjA4LjA1OCA3Ny4wMzg5IDIwOC4wNTggNzUuODg1OSAyMDYuODI2IDc1LjE3NDhMMTQxLjU0MiAzNy40ODYzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNTguNDQxIDEwMy4xMDdMOTMuMTU3MiA2NS40MTg1TDg1LjM4MjYgNjkuOTA2OEwxNTAuNjY3IDEwNy41OTVMMTU4LjQ0MSAxMDMuMTA3Wk05NS4zODc2IDY0LjEzMDlDOTQuMTU1OCA2My40MTk3IDkyLjE1ODYgNjMuNDE5NyA5MC45MjY4IDY0LjEzMDlMODMuMTUyMiA2OC42MTkyQzgxLjkyMDQgNjkuMzMwMyA4MS45MjA0IDcwLjQ4MzMgODMuMTUyMiA3MS4xOTQ0TDE0OC40MzYgMTA4Ljg4M0MxNDkuNjY4IDEwOS41OTQgMTUxLjY2NSAxMDkuNTk0IDE1Mi44OTcgMTA4Ljg4M0wxNjAuNjcyIDEwNC4zOTVDMTYxLjkwMyAxMDMuNjgzIDE2MS45MDMgMTAyLjUzIDE2MC42NzIgMTAxLjgxOUw5NS4zODc2IDY0LjEzMDlaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RkZGRkXzE0MjlfMTMzMyIgeD0iLTQyLjA0ODgiIHk9IjU4LjA1OTEiIHdpZHRoPSIzOTEuOTg2IiBoZWlnaHQ9IjQxOC41NDMiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldC8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18xNDI5XzEzMzMiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iMSIgZHk9IjEyIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEzIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93XzE0MjlfMTMzMyIgcmVzdWx0PSJlZmZlY3QyX2Ryb3BTaGFkb3dfMTQyOV8xMzMzIi8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjMiIGR5PSI0NyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyNCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wOSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3QyX2Ryb3BTaGFkb3dfMTQyOV8xMzMzIiByZXN1bHQ9ImVmZmVjdDNfZHJvcFNoYWRvd18xNDI5XzEzMzMiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iNiIgZHk9IjEwNyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzMiIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3QzX2Ryb3BTaGFkb3dfMTQyOV8xMzMzIiByZXN1bHQ9ImVmZmVjdDRfZHJvcFNoYWRvd18xNDI5XzEzMzMiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iMTEiIGR5PSIxOTAiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMzgiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDEgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0NF9kcm9wU2hhZG93XzE0MjlfMTMzMyIgcmVzdWx0PSJlZmZlY3Q1X2Ryb3BTaGFkb3dfMTQyOV8xMzMzIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0NV9kcm9wU2hhZG93XzE0MjlfMTMzMyIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNDI5XzEzMzMiPgo8cmVjdCB3aWR0aD0iMjg2LjM4NyIgaGVpZ2h0PSIyNDMuOTgzIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC40NjQ4NDQgMC4yODYxMzMpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);