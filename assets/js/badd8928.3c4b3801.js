"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[18880],{54503:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var s=i(87462),a=(i(67294),i(3905)),n=i(26389),o=i(94891),r=(i(75190),i(47507)),c=i(24310),p=i(63303),l=(i(75035),i(85162));const d={id:"post-batch-bpn-discovery",title:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",description:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",sidebar_label:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Discovery"],operationId:"PostBatchBpnDiscovery",requestBody:{description:"The request body is expecting a list of key (type, e.g. OEN, batteryID, etc.) - value (explicit number) pairs, where this service will respond with success/error message on persistance of this key-value-pairs. The BPN is hand-over by the authentication/authorization (\u2192 token). Only the owner of a BPN can link any number (e.g. OEN, batteryID, etc.) to his BPN.",content:{"application/json":{schema:{type:"array",maxItems:1e4,items:{title:"IdentifierTypeKeyPair",required:["type","key"],properties:{type:{type:"string",minLength:1,maxLength:200},key:{type:"string",minLength:1,maxLength:200}}}},examples:{complete:{value:[{type:"oenId",key:"oenId-123"},{type:"oen",key:"oen-4444"},{type:"bpid",key:"bpid-123"}]}}}},required:!0},responses:{201:{description:"key value for BPN in batch created successfully",content:{"application/json":{schema:{type:"array",maxItems:1e4,items:{type:"object",required:["message","key","status"],properties:{message:{type:"string",description:"The detailed message for the creation."},details:{type:"object",additionalProperties:{type:"object"},description:"An object with key/value pairs containing additional information exception."},key:{type:"string",description:"The created key."},status:{type:"integer",description:"The status code"}}}},examples:{complete:{value:[{message:"Validation failed.",details:{type:"type oenId is not allowed."},key:"oenId-123",status:400},{message:"BpnDiscovery successfully created",details:null,key:"oen-4444",status:200},{message:"BpnDiscovery successfully created",details:null,key:"bpid-123",status:200}]}}}}}},description:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",method:"post",path:"/api/administration/connectors/bpnDiscovery/batch",security:[{CatenaXOpenId:["profile"]}],securitySchemes:{CatenaXOpenId:{type:"openIdConnect",openIdConnectUrl:"../.well-known/openid-configuration"}},jsonRequestBodyExample:[{type:"string",key:"string"}],info:{title:"BPN Discovery Service",description:"BPN Discovery Service to find BPN based on a local identifier.",contact:{name:"SLDT Team"},version:"0.0.1"},postman:{name:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",description:{type:"text/plain"},url:{path:["api","administration","connectors","bpnDiscovery","batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/_versioned_docs/version-3.1.0/kits/Digital Twin Kit/Software Development View/API Specs/BPN Discovery//bpn-discovery-service",custom_edit_url:null},y=void 0,m={unversionedId:"kits/Digital Twin Kit/Software Development View/API BPN Discovery/post-batch-bpn-discovery",id:"version-24.03/kits/Digital Twin Kit/Software Development View/API BPN Discovery/post-batch-bpn-discovery",title:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",description:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Digital Twin Kit/Software Development View/API BPN Discovery/post-batch-bpn-discovery.api.mdx",sourceDirName:"kits/Digital Twin Kit/Software Development View/API BPN Discovery",slug:"/kits/Digital Twin Kit/Software Development View/API BPN Discovery/post-batch-bpn-discovery",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Digital Twin Kit/Software Development View/API BPN Discovery/post-batch-bpn-discovery",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"post-batch-bpn-discovery",title:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",description:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",sidebar_label:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Discovery"],operationId:"PostBatchBpnDiscovery",requestBody:{description:"The request body is expecting a list of key (type, e.g. OEN, batteryID, etc.) - value (explicit number) pairs, where this service will respond with success/error message on persistance of this key-value-pairs. The BPN is hand-over by the authentication/authorization (\u2192 token). Only the owner of a BPN can link any number (e.g. OEN, batteryID, etc.) to his BPN.",content:{"application/json":{schema:{type:"array",maxItems:1e4,items:{title:"IdentifierTypeKeyPair",required:["type","key"],properties:{type:{type:"string",minLength:1,maxLength:200},key:{type:"string",minLength:1,maxLength:200}}}},examples:{complete:{value:[{type:"oenId",key:"oenId-123"},{type:"oen",key:"oen-4444"},{type:"bpid",key:"bpid-123"}]}}}},required:!0},responses:{201:{description:"key value for BPN in batch created successfully",content:{"application/json":{schema:{type:"array",maxItems:1e4,items:{type:"object",required:["message","key","status"],properties:{message:{type:"string",description:"The detailed message for the creation."},details:{type:"object",additionalProperties:{type:"object"},description:"An object with key/value pairs containing additional information exception."},key:{type:"string",description:"The created key."},status:{type:"integer",description:"The status code"}}}},examples:{complete:{value:[{message:"Validation failed.",details:{type:"type oenId is not allowed."},key:"oenId-123",status:400},{message:"BpnDiscovery successfully created",details:null,key:"oen-4444",status:200},{message:"BpnDiscovery successfully created",details:null,key:"bpid-123",status:200}]}}}}}},description:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",method:"post",path:"/api/administration/connectors/bpnDiscovery/batch",security:[{CatenaXOpenId:["profile"]}],securitySchemes:{CatenaXOpenId:{type:"openIdConnect",openIdConnectUrl:"../.well-known/openid-configuration"}},jsonRequestBodyExample:[{type:"string",key:"string"}],info:{title:"BPN Discovery Service",description:"BPN Discovery Service to find BPN based on a local identifier.",contact:{name:"SLDT Team"},version:"0.0.1"},postman:{name:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",description:{type:"text/plain"},url:{path:["api","administration","connectors","bpnDiscovery","batch"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/_versioned_docs/version-3.1.0/kits/Digital Twin Kit/Software Development View/API Specs/BPN Discovery//bpn-discovery-service",custom_edit_url:null},sidebar:"kits",previous:{title:"Find BPN endpoints corresponding to numbers (e.g. OEN, batteryID, etc.)",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Digital Twin Kit/Software Development View/API BPN Discovery/get-bpn-discoveries"},next:{title:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as single entry.",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Digital Twin Kit/Software Development View/API BPN Discovery/post-bpn-discovery"}},u={},b=[{value:"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch.",id:"create-new-numbers-eg-oen-batteryid-etc-corresponding-to-bpn-endpoints-as-batch",level:2}],h={toc:b};function g(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-new-numbers-eg-oen-batteryid-etc-corresponding-to-bpn-endpoints-as-batch"},"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch."),(0,a.kt)("p",null,"Create new numbers (e.g. OEN, batteryID, etc.) corresponding to BPN endpoints as batch."),(0,a.kt)(o.Z,{mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Request Body"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array"),(0,a.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,a.kt)("p",null,"The request body is expecting a list of key (type, e.g. OEN, batteryID, etc.) - value (explicit number) pairs, where this service will respond with success/error message on persistance of this key-value-pairs. The BPN is hand-over by the authentication/authorization (\u2192 token). Only the owner of a BPN can link any number (e.g. OEN, batteryID, etc.) to his BPN."))),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"type",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 200 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"key",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 200 characters`",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(l.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"key value for BPN in batch created successfully")),(0,a.kt)("div",null,(0,a.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,a.kt)(p.Z,{mdxType:"SchemaTabs"},(0,a.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema"),(0,a.kt)("span",{style:{opacity:"0.6"}}," array")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(c.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:"The detailed message for the creation.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"An object with key/value pairs containing additional information exception.")),(0,a.kt)("li",null,(0,a.kt)("div",null,(0,a.kt)("code",null,"property name*"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,a.kt)(c.Z,{collapsible:!1,name:"key",required:!1,deprecated:void 0,schemaDescription:"The created key.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(c.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"The status code",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(r.Z,{responseExample:'[\n  {\n    "message": "string",\n    "details": {},\n    "key": "string",\n    "status": 0\n  }\n]',language:"json",mdxType:"ResponseSamples"})),(0,a.kt)(l.Z,{label:"Complete",value:"Complete",mdxType:"TabItem"},(0,a.kt)(r.Z,{responseExample:'[\n  {\n    "message": "Validation failed.",\n    "details": {\n      "type": "type oenId is not allowed."\n    },\n    "key": "oenId-123",\n    "status": 400\n  },\n  {\n    "message": "BpnDiscovery successfully created",\n    "details": null,\n    "key": "oen-4444",\n    "status": 200\n  },\n  {\n    "message": "BpnDiscovery successfully created",\n    "details": null,\n    "key": "bpid-123",\n    "status": 200\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);