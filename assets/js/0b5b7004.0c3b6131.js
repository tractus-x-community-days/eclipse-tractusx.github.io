"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[73602],{3106:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>f,frontMatter:()=>m,metadata:()=>v,toc:()=>h});var a=i(87462),s=(i(67294),i(3905)),n=i(26389),o=i(94891),l=i(75190),r=i(47507),d=i(24310),c=i(63303),p=(i(75035),i(85162));const m={id:"delete-contract-definition-by-id",title:"Delete contract definition by its id",description:"Removes contract definition with the given ID if possible",sidebar_label:"Delete contract definition by its id",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Contract Definition"],description:"Removes contract definition with the given ID if possible",operationId:"deleteContractDefinitionById",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Contract definition was deleted successfully",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"}}}}}},400:{description:"Request body was malformed, e.g. id was null",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}},404:{description:"Contract definition with the given ID does not exist",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},method:"delete",path:"/contractdefinitions/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Delete contract definition by its id",description:{content:"Removes contract definition with the given ID if possible",type:"text/plain"},url:{path:["contractdefinitions",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},u=void 0,v={unversionedId:"kits/Data Governance Kit/resources/MDX Files/delete-contract-definition-by-id",id:"version-24.03/kits/Data Governance Kit/resources/MDX Files/delete-contract-definition-by-id",title:"Delete contract definition by its id",description:"Removes contract definition with the given ID if possible",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Data Governance Kit/resources/MDX Files/delete-contract-definition-by-id.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/delete-contract-definition-by-id",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Data Governance Kit/resources/MDX Files/delete-contract-definition-by-id",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"delete-contract-definition-by-id",title:"Delete contract definition by its id",description:"Removes contract definition with the given ID if possible",sidebar_label:"Delete contract definition by its id",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Contract Definition"],description:"Removes contract definition with the given ID if possible",operationId:"deleteContractDefinitionById",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Contract definition was deleted successfully",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"}}}}}},400:{description:"Request body was malformed, e.g. id was null",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}},404:{description:"Contract definition with the given ID does not exist",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},method:"delete",path:"/contractdefinitions/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Delete contract definition by its id",description:{content:"Removes contract definition with the given ID if possible",type:"text/plain"},url:{path:["contractdefinitions",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Delete connector by its id",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Data Governance Kit/resources/MDX Files/delete-connector-by-id"},next:{title:"Marks a policy definition as deleted in DGK",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Data Governance Kit/resources/MDX Files/delete-policy-by-id"}},y={},h=[{value:"Delete contract definition by its id",id:"delete-contract-definition-by-its-id",level:2}],g={toc:h};function f(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"delete-contract-definition-by-its-id"},"Delete contract definition by its id"),(0,s.kt)("p",null,"Removes contract definition with the given ID if possible"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Contract definition was deleted successfully")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "message": "string",\n  "level": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Request body was malformed, e.g. id was null")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Contract definition with the given ID does not exist")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);