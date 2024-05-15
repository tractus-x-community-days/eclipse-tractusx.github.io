"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[71720],{84038:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>k,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var a=s(87462),i=(s(67294),s(3905)),r=s(26389),o=s(94891),l=(s(75190),s(47507)),n=s(24310),p=s(63303),d=(s(75035),s(85162));const c={id:"get-assets-1",title:"Get all assets according to a particular query",description:"Note: query is not supported in current version of DGK.",sidebar_label:"Get all assets according to a particular query",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Asset"],description:"Note: query is not supported in current version of DGK.",operationId:"getAssets_1",requestBody:{content:{"application/json":{schema:{type:"string"}}}},responses:{200:{description:"The assets matching the query",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{createdAt:{type:"string",format:"date-time"},createdBy:{type:"string"},modifiedAt:{type:"string",format:"date-time"},modifiedBy:{type:"string"},isDeleted:{type:"boolean"},id:{type:"string"},properties:{type:"object",additionalProperties:{type:"object"}},privateProperties:{type:"object",additionalProperties:{type:"object"}},dataAddress:{type:"object",properties:{properties:{type:"object",additionalProperties:{type:"object"}}}},governanceStatus:{type:"string"},syncStatus:{type:"string"}}}}}}}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},method:"post",path:"/assets/request",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],jsonRequestBodyExample:"string",info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Get all assets according to a particular query",description:{content:"Note: query is not supported in current version of DGK.",type:"text/plain"},url:{path:["assets","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},m=void 0,u={unversionedId:"kits/Data Governance Kit/resources/MDX Files/get-assets-1",id:"kits/Data Governance Kit/resources/MDX Files/get-assets-1",title:"Get all assets according to a particular query",description:"Note: query is not supported in current version of DGK.",source:"@site/docs-kits/kits/Data Governance Kit/resources/MDX Files/get-assets-1.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/get-assets-1",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Data Governance Kit/resources/MDX Files/get-assets-1",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-assets-1",title:"Get all assets according to a particular query",description:"Note: query is not supported in current version of DGK.",sidebar_label:"Get all assets according to a particular query",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Asset"],description:"Note: query is not supported in current version of DGK.",operationId:"getAssets_1",requestBody:{content:{"application/json":{schema:{type:"string"}}}},responses:{200:{description:"The assets matching the query",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"object",properties:{items:{type:"array",items:{type:"object",properties:{createdAt:{type:"string",format:"date-time"},createdBy:{type:"string"},modifiedAt:{type:"string",format:"date-time"},modifiedBy:{type:"string"},isDeleted:{type:"boolean"},id:{type:"string"},properties:{type:"object",additionalProperties:{type:"object"}},privateProperties:{type:"object",additionalProperties:{type:"object"}},dataAddress:{type:"object",properties:{properties:{type:"object",additionalProperties:{type:"object"}}}},governanceStatus:{type:"string"},syncStatus:{type:"string"}}}}}}}}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},method:"post",path:"/assets/request",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],jsonRequestBodyExample:"string",info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Get all assets according to a particular query",description:{content:"Note: query is not supported in current version of DGK.",type:"text/plain"},url:{path:["assets","request"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Gets an asset with the given ID",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Data Governance Kit/resources/MDX Files/get-asset-by-id"},next:{title:"Gets more assets from a list of IDs",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Data Governance Kit/resources/MDX Files/get-assets-by-ids"}},y={},g=[{value:"Get all assets according to a particular query",id:"get-all-assets-according-to-a-particular-query",level:2}],v={toc:g};function k(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-all-assets-according-to-a-particular-query"},"Get all assets according to a particular query"),(0,i.kt)("p",null,"Note: query is not supported in current version of DGK."),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string"))))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The assets matching the query")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"result"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"items"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"createdBy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"modifiedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"modifiedBy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"isDeleted",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"privateProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"dataAddress"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))))))))),(0,i.kt)(n.Z,{collapsible:!1,name:"governanceStatus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"syncStatus",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": {\n    "items": [\n      {\n        "createdAt": "2024-02-27",\n        "createdBy": "string",\n        "modifiedAt": "2024-02-27",\n        "modifiedBy": "string",\n        "isDeleted": true,\n        "id": "string",\n        "properties": {},\n        "privateProperties": {},\n        "dataAddress": {\n          "properties": {}\n        },\n        "governanceStatus": "string",\n        "syncStatus": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request body was malformed")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(n.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(n.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);