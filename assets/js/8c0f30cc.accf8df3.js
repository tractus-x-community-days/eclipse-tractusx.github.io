"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[26023],{27842:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var a=s(87462),i=(s(67294),s(3905)),l=s(26389),r=s(94891),n=(s(75190),s(47507)),o=s(24310),p=s(63303),c=(s(75035),s(85162));const d={id:"get-readiness",title:"getReadiness",description:"Performs a readiness probe to determine whether the runtime is able to accept requests.",sidebar_label:"getReadiness",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Application Observability"],description:"Performs a readiness probe to determine whether the runtime is able to accept requests.",operationId:"getReadiness",responses:{200:{description:"The runtime is able to accept requests.",content:{"application/json":{schema:{type:"object",properties:{componentResults:{type:"array",example:null,items:{type:"object",properties:{component:{type:"string",example:null},failure:{type:"object",properties:{failureDetail:{type:"string",example:null},messages:{type:"array",example:null,items:{type:"string",example:null}}},example:null},isHealthy:{type:"boolean",example:null}},example:null}},isSystemHealthy:{type:"boolean",example:null}},example:null}}}}},method:"get",path:"/check/readiness",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"get Readiness",description:{content:"Performs a readiness probe to determine whether the runtime is able to accept requests.",type:"text/plain"},url:{path:["check","readiness"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},m=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-readiness",id:"version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-readiness",title:"getReadiness",description:"Performs a readiness probe to determine whether the runtime is able to accept requests.",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-readiness.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-readiness",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-readiness",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"get-readiness",title:"getReadiness",description:"Performs a readiness probe to determine whether the runtime is able to accept requests.",sidebar_label:"getReadiness",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Application Observability"],description:"Performs a readiness probe to determine whether the runtime is able to accept requests.",operationId:"getReadiness",responses:{200:{description:"The runtime is able to accept requests.",content:{"application/json":{schema:{type:"object",properties:{componentResults:{type:"array",example:null,items:{type:"object",properties:{component:{type:"string",example:null},failure:{type:"object",properties:{failureDetail:{type:"string",example:null},messages:{type:"array",example:null,items:{type:"string",example:null}}},example:null},isHealthy:{type:"boolean",example:null}},example:null}},isSystemHealthy:{type:"boolean",example:null}},example:null}}}}},method:"get",path:"/check/readiness",servers:[{url:"/"}],info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"get Readiness",description:{content:"Performs a readiness probe to determine whether the runtime is able to accept requests.",type:"text/plain"},url:{path:["check","readiness"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getPolicyDefinition",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-policy-definition"},next:{title:"getStartup",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-startup"}},h={},y=[{value:"getReadiness",id:"getreadiness",level:2}],k={toc:y};function b(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getreadiness"},"getReadiness"),(0,i.kt)("p",null,"Performs a readiness probe to determine whether the runtime is able to accept requests."),(0,i.kt)("div",null,(0,i.kt)(l.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The runtime is able to accept requests.")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"componentResults"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"component",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"failure"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"failureDetail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"isHealthy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"isSystemHealthy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);