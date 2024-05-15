"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[65029],{88771:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>d,metadata:()=>g,toc:()=>y});var a=s(87462),i=(s(67294),s(3905)),n=s(26389),r=s(94891),o=s(75190),p=s(47507),l=s(24310),m=s(63303),c=(s(75035),s(85162));const d={id:"get-changelog-entries",title:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",description:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",sidebar_label:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",hide_title:!0,hide_table_of_contents:!0,api:{tags:["changelog-controller"],operationId:"getChangelogEntries",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{timestampAfter:{type:"string",description:"Only changelog entries created after this time. Ignored if empty.",format:"date-time",example:"2023-03-20T10:23:28.194Z"},bpns:{uniqueItems:!0,type:"array",description:"Only for business partners with the given array of BPNL/S/A. Ignored if empty.",items:{type:"string"}},businessPartnerTypes:{uniqueItems:!0,type:"array",description:"Only for business partners with the given array of business partner types. Ignored if empty.",items:{type:"string",enum:["LEGAL_ENTITY","SITE","ADDRESS","GENERIC"]}}},description:"Request for searching and filtering the business partner changelog"}}},required:!0},responses:{200:{description:"The specified changelog entries",content:{"application/json":{schema:{required:["content","contentSize","page","totalElements","totalPages"],type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{required:["bpn","businessPartnerType","changelogType","timestamp"],type:"object",properties:{bpn:{type:"string",description:"The business partner number for which the changelog entry was created. Can be either a BPNL, BPNS or BPNA."},businessPartnerType:{type:"string",description:"One of the types of business partners for which the changelog entry was created: legal entity, site, address.",enum:["LEGAL_ENTITY","SITE","ADDRESS","GENERIC"]},timestamp:{type:"string",description:"The date and time when the changelog entry was created.",format:"date-time"},changelogType:{type:"string",description:"One of the actions for which the changelog entry was created: create, update.",enum:["CREATE","UPDATE"]}},description:"An entry of the changelog, which is created each time a business partner is modified and contains data about the change. The actual new state of the business partner is not included."}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"},404:{description:"No business partner found for specified bpn"}},description:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",method:"post",path:"/api/catena/business-partners/changelog/search",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:{timestampAfter:"2023-03-20T10:23:28.194Z",bpns:["string"],businessPartnerTypes:["LEGAL_ENTITY"]},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"5.0.1-SNAPSHOT"},postman:{name:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",description:{type:"text/plain"},url:{path:["api","catena","business-partners","changelog","search"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},u=void 0,g={unversionedId:"kits/Business Partner Kit/Software Development View/Pool Api/get-changelog-entries",id:"kits/Business Partner Kit/Software Development View/Pool Api/get-changelog-entries",title:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",description:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",source:"@site/docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/get-changelog-entries.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Pool Api",slug:"/kits/Business Partner Kit/Software Development View/Pool Api/get-changelog-entries",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Business Partner Kit/Software Development View/Pool Api/get-changelog-entries",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-changelog-entries",title:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",description:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",sidebar_label:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",hide_title:!0,hide_table_of_contents:!0,api:{tags:["changelog-controller"],operationId:"getChangelogEntries",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{timestampAfter:{type:"string",description:"Only changelog entries created after this time. Ignored if empty.",format:"date-time",example:"2023-03-20T10:23:28.194Z"},bpns:{uniqueItems:!0,type:"array",description:"Only for business partners with the given array of BPNL/S/A. Ignored if empty.",items:{type:"string"}},businessPartnerTypes:{uniqueItems:!0,type:"array",description:"Only for business partners with the given array of business partner types. Ignored if empty.",items:{type:"string",enum:["LEGAL_ENTITY","SITE","ADDRESS","GENERIC"]}}},description:"Request for searching and filtering the business partner changelog"}}},required:!0},responses:{200:{description:"The specified changelog entries",content:{"application/json":{schema:{required:["content","contentSize","page","totalElements","totalPages"],type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{required:["bpn","businessPartnerType","changelogType","timestamp"],type:"object",properties:{bpn:{type:"string",description:"The business partner number for which the changelog entry was created. Can be either a BPNL, BPNS or BPNA."},businessPartnerType:{type:"string",description:"One of the types of business partners for which the changelog entry was created: legal entity, site, address.",enum:["LEGAL_ENTITY","SITE","ADDRESS","GENERIC"]},timestamp:{type:"string",description:"The date and time when the changelog entry was created.",format:"date-time"},changelogType:{type:"string",description:"One of the actions for which the changelog entry was created: create, update.",enum:["CREATE","UPDATE"]}},description:"An entry of the changelog, which is created each time a business partner is modified and contains data about the change. The actual new state of the business partner is not included."}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"},404:{description:"No business partner found for specified bpn"}},description:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",method:"post",path:"/api/catena/business-partners/changelog/search",servers:[{url:"http://localhost:8080",description:"Generated server url"}],jsonRequestBodyExample:{timestampAfter:"2023-03-20T10:23:28.194Z",bpns:["string"],businessPartnerTypes:["LEGAL_ENTITY"]},info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"5.0.1-SNAPSHOT"},postman:{name:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",description:{type:"text/plain"},url:{path:["api","catena","business-partners","changelog","search"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Pool Api/business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"changelog-controller",permalink:"/eclipse-tractusx.github.io/docs-kits/next/category/kits/Business Partner Kit/Software Development View/Pool Api/changelog-controller"},next:{title:"bpn-controller",permalink:"/eclipse-tractusx.github.io/docs-kits/next/category/kits/Business Partner Kit/Software Development View/Pool Api/bpn-controller"}},h={},y=[{value:"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types",id:"returns-changelog-entries-as-of-a-specified-timestamp-optionally-filtered-by-a-list-of-bpnlsa-or-business-partner-types",level:2}],f={toc:y};function b(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"returns-changelog-entries-as-of-a-specified-timestamp-optionally-filtered-by-a-list-of-bpnlsa-or-business-partner-types"},"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types"),(0,i.kt)("p",null,"Returns changelog entries as of a specified timestamp, optionally filtered by a list of BPNL/S/A, or business partner types"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"timestampAfter",required:!1,deprecated:void 0,schemaDescription:"Only changelog entries created after this time. Ignored if empty.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"bpns",required:!1,deprecated:void 0,schemaDescription:"Only for business partners with the given array of BPNL/S/A. Ignored if empty.",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"businessPartnerTypes",required:!1,deprecated:void 0,schemaDescription:"Only for business partners with the given array of business partner types. Ignored if empty.",schemaName:"string[]",qualifierMessage:"**Possible values:** [`LEGAL_ENTITY`, `SITE`, `ADDRESS`, `GENERIC`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The specified changelog entries")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:"Total number of all results in all pages",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:"Total number pages",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:"Current page number",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:"Number of results in the page",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"content"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Collection of results in the page")),(0,i.kt)(l.Z,{collapsible:!1,name:"bpn",required:!1,deprecated:void 0,schemaDescription:"The business partner number for which the changelog entry was created. Can be either a BPNL, BPNS or BPNA.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"businessPartnerType",required:!1,deprecated:void 0,schemaDescription:"One of the types of business partners for which the changelog entry was created: legal entity, site, address.",schemaName:"string",qualifierMessage:"**Possible values:** [`LEGAL_ENTITY`, `SITE`, `ADDRESS`, `GENERIC`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,deprecated:void 0,schemaDescription:"The date and time when the changelog entry was created.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"changelogType",required:!1,deprecated:void 0,schemaDescription:"One of the actions for which the changelog entry was created: create, update.",schemaName:"string",qualifierMessage:"**Possible values:** [`CREATE`, `UPDATE`]",defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "bpn": "string",\n      "businessPartnerType": "LEGAL_ENTITY",\n      "timestamp": "2024-02-22",\n      "changelogType": "CREATE"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"On malformed pagination request")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"No business partner found for specified bpn")),(0,i.kt)("div",null)))))}b.isMDXComponent=!0}}]);