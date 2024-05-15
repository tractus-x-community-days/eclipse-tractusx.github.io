"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[65658],{51605:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var s=i(87462),a=(i(67294),i(3905)),n=i(26389),o=i(94891),l=i(75190),r=i(47507),c=i(24310),d=i(63303),p=(i(75035),i(85162));const m={id:"delete-connector-by-id",title:"Delete connector by its id",description:"Delete connector by its id",sidebar_label:"Delete connector by its id",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Connector API"],operationId:"deleteConnectorById",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Connector was deleted successfully",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"}}}}}},404:{description:"A connector with the given ID does not exist",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},description:"Delete connector by its id",method:"delete",path:"/connector-info/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Delete connector by its id",description:{type:"text/plain"},url:{path:["connector-info",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},u=void 0,y={unversionedId:"kits/Data Governance Kit/resources/MDX Files/delete-connector-by-id",id:"kits/Data Governance Kit/resources/MDX Files/delete-connector-by-id",title:"Delete connector by its id",description:"Delete connector by its id",source:"@site/docs-kits/kits/Data Governance Kit/resources/MDX Files/delete-connector-by-id.api.mdx",sourceDirName:"kits/Data Governance Kit/resources/MDX Files",slug:"/kits/Data Governance Kit/resources/MDX Files/delete-connector-by-id",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Data Governance Kit/resources/MDX Files/delete-connector-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-connector-by-id",title:"Delete connector by its id",description:"Delete connector by its id",sidebar_label:"Delete connector by its id",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Connector API"],operationId:"deleteConnectorById",parameters:[{name:"id",in:"path",required:!0,schema:{type:"string"}}],responses:{200:{description:"Connector was deleted successfully",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"}}}}}},404:{description:"A connector with the given ID does not exist",content:{"application/json":{schema:{type:"object",properties:{message:{type:"string"},level:{type:"string"},result:{type:"string"}}}}}}},description:"Delete connector by its id",method:"delete",path:"/connector-info/{id}",servers:[{url:"https://dgk.cx.dev.dih-cloud.com",description:"Generated server url"}],info:{title:"data-governance-kit",description:"REST API Contract for Data Governance KIT",version:"0.0.1-SNAPSHOT"},postman:{name:"Delete connector by its id",description:{type:"text/plain"},url:{path:["connector-info",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs-kits/kits/Data Governance Kit/resources/data-governance-kit",custom_edit_url:null},sidebar:"kits",previous:{title:"Delete asset by its id",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Data Governance Kit/resources/MDX Files/delete-asset-by-id"},next:{title:"Delete contract definition by its id",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Data Governance Kit/resources/MDX Files/delete-contract-definition-by-id"}},v={},b=[{value:"Delete connector by its id",id:"delete-connector-by-its-id",level:2}],k={toc:b};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"delete-connector-by-its-id"},"Delete connector by its id"),(0,a.kt)("p",null,"Delete connector by its id"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(l.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Connector was deleted successfully")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(r.Z,{responseExample:'{\n  "message": "string",\n  "level": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"A connector with the given ID does not exist")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"level",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(r.Z,{responseExample:'{\n  "message": "string",\n  "level": "string",\n  "result": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);