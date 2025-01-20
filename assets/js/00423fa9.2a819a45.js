"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[4044],{61547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>v,frontMatter:()=>c,metadata:()=>u,toc:()=>y});var s=a(87462),i=(a(67294),a(3905)),n=a(26389),o=a(94891),l=(a(75190),a(47507)),r=a(24310),p=a(63303),d=(a(75035),a(85162));const c={id:"update-asset-1",title:"Update an asset with the given ID",description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",sidebar_label:"Update an asset with the given ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Asset"],description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",operationId:"updateAsset_1",requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},properties:{type:"object",additionalProperties:{type:"object"}},privateProperties:{type:"object",additionalProperties:{type:"object"}},dataAddress:{type:"object",properties:{properties:{type:"object",additionalProperties:{type:"object"}}}}}}}},required:!0},responses:{200:{description:"Asset was updated successfully",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"}}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}},403:{description:"Operation denied",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}},404:{description:"Asset could not be updated, because it does not exist.",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},method:"put",path:"/assets",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],jsonRequestBodyExample:{id:"string",properties:{},privateProperties:{},dataAddress:{properties:{}}},info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Update an asset with the given ID",description:{content:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",type:"text/plain"},url:{path:["assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},m=void 0,u={unversionedId:"kits/Data Governance Kit/resources/MDX Files/update-asset-1",id:"version-24.08/kits/Data Governance Kit/resources/MDX Files/update-asset-1",title:"Update an asset with the given ID",description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",source:"@site/docs-kits_versioned_docs/version-24.08/kits/Data Governance Kit/resources/MDX Files/update-asset-1.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/update-asset-1",permalink:"/docs-kits/24.08/kits/Data Governance Kit/resources/MDX Files/update-asset-1",draft:!1,editUrl:null,tags:[],version:"24.08",frontMatter:{id:"update-asset-1",title:"Update an asset with the given ID",description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",sidebar_label:"Update an asset with the given ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Asset"],description:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",operationId:"updateAsset_1",requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},properties:{type:"object",additionalProperties:{type:"object"}},privateProperties:{type:"object",additionalProperties:{type:"object"}},dataAddress:{type:"object",properties:{properties:{type:"object",additionalProperties:{type:"object"}}}}}}}},required:!0},responses:{200:{description:"Asset was updated successfully",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"}}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}},403:{description:"Operation denied",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}},404:{description:"Asset could not be updated, because it does not exist.",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},method:"put",path:"/assets",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],jsonRequestBodyExample:{id:"string",properties:{},privateProperties:{},dataAddress:{properties:{}}},info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Update an asset with the given ID",description:{content:"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations.",type:"text/plain"},url:{path:["assets"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Creates new connector entries",permalink:"/docs-kits/24.08/kits/Data Governance Kit/resources/MDX Files/save-connector-info"},next:{title:"Update an asset with the given ID",permalink:"/docs-kits/24.08/kits/Data Governance Kit/resources/MDX Files/update-asset"}},h={},y=[{value:"Update an asset with the given ID",id:"update-an-asset-with-the-given-id",level:2}],g={toc:y};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"update-an-asset-with-the-given-id"},"Update an asset with the given ID"),(0,i.kt)("p",null,"Updates an asset with the given ID if it exists. If the asset is not found, no further action is taken. DANGER ZONE: Note that updating assets can have unexpected results, especially for contract offers that have been sent out or are ongoing in contract negotiations."),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"privateProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"dataAddress"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))))))))))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Asset was updated successfully")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "message": "string",\n  "level": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request body was malformed")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Operation denied")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Asset could not be updated, because it does not exist.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(r.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(r.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);