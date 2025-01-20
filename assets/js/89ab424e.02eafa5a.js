"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[75722],{41687:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>h,toc:()=>y});var a=s(87462),i=(s(67294),s(3905)),n=s(26389),l=s(94891),r=s(75190),o=s(47507),c=s(24310),d=s(63303),p=(s(75035),s(85162));const m={id:"delete-asset-by-id-1",title:"Delete asset by its id",description:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",sidebar_label:"Delete asset by its id",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Asset"],description:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",operationId:"deleteAssetById_1",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Asset was deleted successfully",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"}}}}}},400:{description:"Request body was malformed, e.g. id was null",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}},404:{description:"An asset with the given ID does not exist",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}},409:{description:"The asset cannot be deleted, because it is referenced by a contract agreement",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},method:"delete",path:"/assets/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Delete asset by its id",description:{content:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",type:"text/plain"},url:{path:["assets",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},u=void 0,h={unversionedId:"kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id-1",id:"version-24.08/kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id-1",title:"Delete asset by its id",description:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",source:"@site/docs-kits_versioned_docs/version-24.08/kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id-1.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id-1",permalink:"/docs-kits/24.08/kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id-1",draft:!1,editUrl:null,tags:[],version:"24.08",frontMatter:{id:"delete-asset-by-id-1",title:"Delete asset by its id",description:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",sidebar_label:"Delete asset by its id",hide_title:!0,hide_table_of_contents:!0,api:{tags:["DGK Asset"],description:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",operationId:"deleteAssetById_1",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Asset was deleted successfully",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"}}}}}},400:{description:"Request body was malformed, e.g. id was null",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}},404:{description:"An asset with the given ID does not exist",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}},409:{description:"The asset cannot be deleted, because it is referenced by a contract agreement",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},method:"delete",path:"/assets/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Delete asset by its id",description:{content:"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations.",type:"text/plain"},url:{path:["assets",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Creates a new resource publication",permalink:"/docs-kits/24.08/kits/Data Governance Kit/resources/MDX Files/create-publication"},next:{title:"Delete asset by its id",permalink:"/docs-kits/24.08/kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id"}},g={},y=[{value:"Delete asset by its id",id:"delete-asset-by-its-id",level:2}],v={toc:y};function b(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"delete-asset-by-its-id"},"Delete asset by its id"),(0,i.kt)("p",null,"Removes an asset with the given ID if possible. Deleting an asset is only possible if that asset is not yet referenced by a contract agreement, in which case an error is returned. DANGER ZONE: Note that deleting assets can have unexpected results, especially for contract offers that have been sent out or ongoing or contract negotiations."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Asset was deleted successfully")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "level": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request body was malformed, e.g. id was null")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An asset with the given ID does not exist")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The asset cannot be deleted, because it is referenced by a contract agreement")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);