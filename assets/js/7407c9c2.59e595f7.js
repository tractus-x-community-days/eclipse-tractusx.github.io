"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[88729],{82286:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>m,toc:()=>x});var s=a(87462),i=(a(67294),a(3905)),p=a(26389),r=a(94891),n=(a(75190),a(47507)),o=a(24310),l=a(63303),d=(a(75035),a(85162));const u={id:"update-entry",title:"updateEntry",description:"Updates the entry for a particular BPN",sidebar_label:"updateEntry",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Business Partner Group"],description:"Updates the entry for a particular BPN",operationId:"updateEntry",requestBody:{content:{"application/json":{schema:{type:"object",properties:{"@id":{type:"string",example:null},groups:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}}},example:{"@context":{tx:"https://w3id.org/tractusx/v0.0.1/ns/"},"@id":"tx:BPN000001234","tx:groups":["group1","group2","group3"]}}}}},responses:{204:{description:"The object was successfully updated"},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},404:{description:"No entry for the given BPN was found"}},method:"put",path:"/business-partner-groups",servers:[{url:"/"}],jsonRequestBodyExample:{"@context":{tx:"https://w3id.org/tractusx/v0.0.1/ns/"},"@id":"tx:BPN000001234","tx:groups":["group1","group2","group3"]},info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"update Entry",description:{content:"Updates the entry for a particular BPN",type:"text/plain"},url:{path:["business-partner-groups"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},c=void 0,m={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-entry",id:"version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-entry",title:"updateEntry",description:"Updates the entry for a particular BPN",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-entry.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-entry",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-entry",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"update-entry",title:"updateEntry",description:"Updates the entry for a particular BPN",sidebar_label:"updateEntry",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Business Partner Group"],description:"Updates the entry for a particular BPN",operationId:"updateEntry",requestBody:{content:{"application/json":{schema:{type:"object",properties:{"@id":{type:"string",example:null},groups:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}}},example:{"@context":{tx:"https://w3id.org/tractusx/v0.0.1/ns/"},"@id":"tx:BPN000001234","tx:groups":["group1","group2","group3"]}}}}},responses:{204:{description:"The object was successfully updated"},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},404:{description:"No entry for the given BPN was found"}},method:"put",path:"/business-partner-groups",servers:[{url:"/"}],jsonRequestBodyExample:{"@context":{tx:"https://w3id.org/tractusx/v0.0.1/ns/"},"@id":"tx:BPN000001234","tx:groups":["group1","group2","group3"]},info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"update Entry",description:{content:"Updates the entry for a particular BPN",type:"text/plain"},url:{path:["business-partner-groups"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"updateDataAddress",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-data-address"},next:{title:"updatePolicyDefinition",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-policy-definition"}},y={},x=[{value:"updateEntry",id:"updateentry",level:2}],v={toc:x};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"updateentry"},"updateEntry"),(0,i.kt)("p",null,"Updates the entry for a particular BPN"),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"@id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"groups",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(p.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The object was successfully updated")),(0,i.kt)("div",null)),(0,i.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request body was malformed")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"No entry for the given BPN was found")),(0,i.kt)("div",null)))))}h.isMDXComponent=!0}}]);