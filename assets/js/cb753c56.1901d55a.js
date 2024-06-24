"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[30987],{8489:(e,E,t)=>{t.r(E),t.d(E,{assets:()=>R,contentTitle:()=>I,default:()=>m,frontMatter:()=>O,metadata:()=>N,toc:()=>n});var a=t(87462),s=(t(67294),t(3905)),T=t(26389),i=t(94891),l=(t(75190),t(47507)),o=t(24310),r=t(63303),_=(t(75035),t(85162));const O={id:"get-all-aspect-models",title:"Get all available aspect models from semantic hub or local models.",description:"Get all available aspect models from semantic hub or local models.",sidebar_label:"Get all available aspect models from semantic hub or local models.",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get all available aspect models from semantic hub or local models.",operationId:"getAllAspectModels",responses:{200:{content:{"application/json":{examples:{complete:{value:{lastUpdated:"2023-02-13T08:18:11.990659500Z",models:[{urn:"urn:bamm:io.catenax.single_level_bom_as_built:1.0.0#SingleLevelBomAsBuilt",name:"SingleLevelBomAsBuilt",status:"RELEASED",type:"BAMM",version:"1.0.0"},{urn:"urn:bamm:io.catenax.serial_part:1.0.0#SerialPart",name:"SerialPart",status:"RELEASED",type:"BAMM",version:"1.0.0"}]}}},schema:{type:"object",additionalProperties:!1,properties:{lastUpdated:{type:"string"},models:{type:"array",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string"},status:{type:"string"},type:{type:"string"},urn:{type:"string"},version:{type:"string"}}}}}}}},description:"Returns all available aspect models."},401:{content:{"application/json":{examples:{error:{value:{error:"Unauthorized",messages:["UnauthorizedException"],statusCode:"401 UNAUTHORIZED"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"No valid authentication credentials."},403:{content:{"application/json":{examples:{error:{value:{error:"Forbidden",messages:["ForbiddenException"],statusCode:"403 FORBIDDEN"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"Authorization refused by server."}},security:[{oAuth2:[]}],tags:["Aspect Models"],method:"get",path:"/irs/aspectmodels",servers:[{url:"http://localhost:8080"}],securitySchemes:{oAuth2:{flows:{clientCredentials:{scopes:{},tokenUrl:"https://localhost"}},type:"oauth2"}},info:{description:"The API of the Item Relationship Service (IRS) for retrieving item graphs along the value chain of CATENA-X partners.",title:"IRS API",version:"2.1.0"},postman:{name:"Get all available aspect models from semantic hub or local models.",description:{content:"Get all available aspect models from semantic hub or local models.",type:"text/plain"},url:{path:["irs","aspectmodels"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Chain Kit/Software Development View/Job Api/irs-api",custom_edit_url:null},I=void 0,N={unversionedId:"kits/Data Chain Kit/Software Development View/Job Api/get-all-aspect-models",id:"version-24.03/kits/Data Chain Kit/Software Development View/Job Api/get-all-aspect-models",title:"Get all available aspect models from semantic hub or local models.",description:"Get all available aspect models from semantic hub or local models.",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Data Chain Kit/Software Development View/Job Api/get-all-aspect-models.api.mdx",sourceDirName:"kits/Data Chain Kit/Software Development View/Job Api",slug:"/kits/Data Chain Kit/Software Development View/Job Api/get-all-aspect-models",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Data Chain Kit/Software Development View/Job Api/get-all-aspect-models",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"get-all-aspect-models",title:"Get all available aspect models from semantic hub or local models.",description:"Get all available aspect models from semantic hub or local models.",sidebar_label:"Get all available aspect models from semantic hub or local models.",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get all available aspect models from semantic hub or local models.",operationId:"getAllAspectModels",responses:{200:{content:{"application/json":{examples:{complete:{value:{lastUpdated:"2023-02-13T08:18:11.990659500Z",models:[{urn:"urn:bamm:io.catenax.single_level_bom_as_built:1.0.0#SingleLevelBomAsBuilt",name:"SingleLevelBomAsBuilt",status:"RELEASED",type:"BAMM",version:"1.0.0"},{urn:"urn:bamm:io.catenax.serial_part:1.0.0#SerialPart",name:"SerialPart",status:"RELEASED",type:"BAMM",version:"1.0.0"}]}}},schema:{type:"object",additionalProperties:!1,properties:{lastUpdated:{type:"string"},models:{type:"array",items:{type:"object",additionalProperties:!1,properties:{name:{type:"string"},status:{type:"string"},type:{type:"string"},urn:{type:"string"},version:{type:"string"}}}}}}}},description:"Returns all available aspect models."},401:{content:{"application/json":{examples:{error:{value:{error:"Unauthorized",messages:["UnauthorizedException"],statusCode:"401 UNAUTHORIZED"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"No valid authentication credentials."},403:{content:{"application/json":{examples:{error:{value:{error:"Forbidden",messages:["ForbiddenException"],statusCode:"403 FORBIDDEN"}}},schema:{type:"object",additionalProperties:!1,description:"Error response.",properties:{error:{type:"string",description:"Error."},messages:{type:"array",description:"List of error messages.",items:{type:"string"},maxItems:2147483647},statusCode:{type:"string",description:"Error code.",enum:["100 CONTINUE","101 SWITCHING_PROTOCOLS","102 PROCESSING","103 EARLY_HINTS","103 CHECKPOINT","200 OK","201 CREATED","202 ACCEPTED","203 NON_AUTHORITATIVE_INFORMATION","204 NO_CONTENT","205 RESET_CONTENT","206 PARTIAL_CONTENT","207 MULTI_STATUS","208 ALREADY_REPORTED","226 IM_USED","300 MULTIPLE_CHOICES","301 MOVED_PERMANENTLY","302 FOUND","302 MOVED_TEMPORARILY","303 SEE_OTHER","304 NOT_MODIFIED","305 USE_PROXY","307 TEMPORARY_REDIRECT","308 PERMANENT_REDIRECT","400 BAD_REQUEST","401 UNAUTHORIZED","402 PAYMENT_REQUIRED","403 FORBIDDEN","404 NOT_FOUND","405 METHOD_NOT_ALLOWED","406 NOT_ACCEPTABLE","407 PROXY_AUTHENTICATION_REQUIRED","408 REQUEST_TIMEOUT","409 CONFLICT","410 GONE","411 LENGTH_REQUIRED","412 PRECONDITION_FAILED","413 PAYLOAD_TOO_LARGE","413 REQUEST_ENTITY_TOO_LARGE","414 URI_TOO_LONG","414 REQUEST_URI_TOO_LONG","415 UNSUPPORTED_MEDIA_TYPE","416 REQUESTED_RANGE_NOT_SATISFIABLE","417 EXPECTATION_FAILED","418 I_AM_A_TEAPOT","419 INSUFFICIENT_SPACE_ON_RESOURCE","420 METHOD_FAILURE","421 DESTINATION_LOCKED","422 UNPROCESSABLE_ENTITY","423 LOCKED","424 FAILED_DEPENDENCY","425 TOO_EARLY","426 UPGRADE_REQUIRED","428 PRECONDITION_REQUIRED","429 TOO_MANY_REQUESTS","431 REQUEST_HEADER_FIELDS_TOO_LARGE","451 UNAVAILABLE_FOR_LEGAL_REASONS","500 INTERNAL_SERVER_ERROR","501 NOT_IMPLEMENTED","502 BAD_GATEWAY","503 SERVICE_UNAVAILABLE","504 GATEWAY_TIMEOUT","505 HTTP_VERSION_NOT_SUPPORTED","506 VARIANT_ALSO_NEGOTIATES","507 INSUFFICIENT_STORAGE","508 LOOP_DETECTED","509 BANDWIDTH_LIMIT_EXCEEDED","510 NOT_EXTENDED","511 NETWORK_AUTHENTICATION_REQUIRED"]}}}}},description:"Authorization refused by server."}},security:[{oAuth2:[]}],tags:["Aspect Models"],method:"get",path:"/irs/aspectmodels",servers:[{url:"http://localhost:8080"}],securitySchemes:{oAuth2:{flows:{clientCredentials:{scopes:{},tokenUrl:"https://localhost"}},type:"oauth2"}},info:{description:"The API of the Item Relationship Service (IRS) for retrieving item graphs along the value chain of CATENA-X partners.",title:"IRS API",version:"2.1.0"},postman:{name:"Get all available aspect models from semantic hub or local models.",description:{content:"Get all available aspect models from semantic hub or local models.",type:"text/plain"},url:{path:["irs","aspectmodels"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"oauth2",oauth2:[]}}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Data Chain Kit/Software Development View/Job Api/irs-api",custom_edit_url:null},sidebar:"kits",previous:{title:"Removes a policy that should no longer be accepted in EDC negotiation.",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Data Chain Kit/Software Development View/Job Api/delete-allowed-policy"},next:{title:"Lists the registered policies that should be accepted in EDC negotiation.",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Data Chain Kit/Software Development View/Job Api/get-allowed-policies"}},R={},n=[{value:"Get all available aspect models from semantic hub or local models.",id:"get-all-available-aspect-models-from-semantic-hub-or-local-models",level:2}],A={toc:n};function m(e){let{components:E,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},A,t,{components:E,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-all-available-aspect-models-from-semantic-hub-or-local-models"},"Get all available aspect models from semantic hub or local models."),(0,s.kt)("p",null,"Get all available aspect models from semantic hub or local models."),(0,s.kt)("div",null,(0,s.kt)(T.Z,{mdxType:"ApiTabs"},(0,s.kt)(_.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Returns all available aspect models.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(_.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(r.Z,{mdxType:"SchemaTabs"},(0,s.kt)(_.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"lastUpdated",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"models"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"urn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(_.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "lastUpdated": "string",\n  "models": [\n    {\n      "name": "string",\n      "status": "string",\n      "type": "string",\n      "urn": "string",\n      "version": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(_.Z,{label:"Complete",value:"Complete",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "lastUpdated": "2023-02-13T08:18:11.990659500Z",\n  "models": [\n    {\n      "urn": "urn:bamm:io.catenax.single_level_bom_as_built:1.0.0#SingleLevelBomAsBuilt",\n      "name": "SingleLevelBomAsBuilt",\n      "status": "RELEASED",\n      "type": "BAMM",\n      "version": "1.0.0"\n    },\n    {\n      "urn": "urn:bamm:io.catenax.serial_part:1.0.0#SerialPart",\n      "name": "SerialPart",\n      "status": "RELEASED",\n      "type": "BAMM",\n      "version": "1.0.0"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(_.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"No valid authentication credentials.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(_.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(r.Z,{mdxType:"SchemaTabs"},(0,s.kt)(_.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"Error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:"List of error messages.",schemaName:"string[]",qualifierMessage:"**Possible values:** `<= 2147483647`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"statusCode",required:!1,deprecated:void 0,schemaDescription:"Error code.",schemaName:"string",qualifierMessage:"**Possible values:** [`100 CONTINUE`, `101 SWITCHING_PROTOCOLS`, `102 PROCESSING`, `103 EARLY_HINTS`, `103 CHECKPOINT`, `200 OK`, `201 CREATED`, `202 ACCEPTED`, `203 NON_AUTHORITATIVE_INFORMATION`, `204 NO_CONTENT`, `205 RESET_CONTENT`, `206 PARTIAL_CONTENT`, `207 MULTI_STATUS`, `208 ALREADY_REPORTED`, `226 IM_USED`, `300 MULTIPLE_CHOICES`, `301 MOVED_PERMANENTLY`, `302 FOUND`, `302 MOVED_TEMPORARILY`, `303 SEE_OTHER`, `304 NOT_MODIFIED`, `305 USE_PROXY`, `307 TEMPORARY_REDIRECT`, `308 PERMANENT_REDIRECT`, `400 BAD_REQUEST`, `401 UNAUTHORIZED`, `402 PAYMENT_REQUIRED`, `403 FORBIDDEN`, `404 NOT_FOUND`, `405 METHOD_NOT_ALLOWED`, `406 NOT_ACCEPTABLE`, `407 PROXY_AUTHENTICATION_REQUIRED`, `408 REQUEST_TIMEOUT`, `409 CONFLICT`, `410 GONE`, `411 LENGTH_REQUIRED`, `412 PRECONDITION_FAILED`, `413 PAYLOAD_TOO_LARGE`, `413 REQUEST_ENTITY_TOO_LARGE`, `414 URI_TOO_LONG`, `414 REQUEST_URI_TOO_LONG`, `415 UNSUPPORTED_MEDIA_TYPE`, `416 REQUESTED_RANGE_NOT_SATISFIABLE`, `417 EXPECTATION_FAILED`, `418 I_AM_A_TEAPOT`, `419 INSUFFICIENT_SPACE_ON_RESOURCE`, `420 METHOD_FAILURE`, `421 DESTINATION_LOCKED`, `422 UNPROCESSABLE_ENTITY`, `423 LOCKED`, `424 FAILED_DEPENDENCY`, `425 TOO_EARLY`, `426 UPGRADE_REQUIRED`, `428 PRECONDITION_REQUIRED`, `429 TOO_MANY_REQUESTS`, `431 REQUEST_HEADER_FIELDS_TOO_LARGE`, `451 UNAVAILABLE_FOR_LEGAL_REASONS`, `500 INTERNAL_SERVER_ERROR`, `501 NOT_IMPLEMENTED`, `502 BAD_GATEWAY`, `503 SERVICE_UNAVAILABLE`, `504 GATEWAY_TIMEOUT`, `505 HTTP_VERSION_NOT_SUPPORTED`, `506 VARIANT_ALSO_NEGOTIATES`, `507 INSUFFICIENT_STORAGE`, `508 LOOP_DETECTED`, `509 BANDWIDTH_LIMIT_EXCEEDED`, `510 NOT_EXTENDED`, `511 NETWORK_AUTHENTICATION_REQUIRED`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(_.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "messages": [\n    "string"\n  ],\n  "statusCode": "100 CONTINUE"\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(_.Z,{label:"Error",value:"Error",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "error": "Unauthorized",\n  "messages": [\n    "UnauthorizedException"\n  ],\n  "statusCode": "401 UNAUTHORIZED"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(_.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Authorization refused by server.")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(_.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(r.Z,{mdxType:"SchemaTabs"},(0,s.kt)(_.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"Error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"messages",required:!1,deprecated:void 0,schemaDescription:"List of error messages.",schemaName:"string[]",qualifierMessage:"**Possible values:** `<= 2147483647`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"statusCode",required:!1,deprecated:void 0,schemaDescription:"Error code.",schemaName:"string",qualifierMessage:"**Possible values:** [`100 CONTINUE`, `101 SWITCHING_PROTOCOLS`, `102 PROCESSING`, `103 EARLY_HINTS`, `103 CHECKPOINT`, `200 OK`, `201 CREATED`, `202 ACCEPTED`, `203 NON_AUTHORITATIVE_INFORMATION`, `204 NO_CONTENT`, `205 RESET_CONTENT`, `206 PARTIAL_CONTENT`, `207 MULTI_STATUS`, `208 ALREADY_REPORTED`, `226 IM_USED`, `300 MULTIPLE_CHOICES`, `301 MOVED_PERMANENTLY`, `302 FOUND`, `302 MOVED_TEMPORARILY`, `303 SEE_OTHER`, `304 NOT_MODIFIED`, `305 USE_PROXY`, `307 TEMPORARY_REDIRECT`, `308 PERMANENT_REDIRECT`, `400 BAD_REQUEST`, `401 UNAUTHORIZED`, `402 PAYMENT_REQUIRED`, `403 FORBIDDEN`, `404 NOT_FOUND`, `405 METHOD_NOT_ALLOWED`, `406 NOT_ACCEPTABLE`, `407 PROXY_AUTHENTICATION_REQUIRED`, `408 REQUEST_TIMEOUT`, `409 CONFLICT`, `410 GONE`, `411 LENGTH_REQUIRED`, `412 PRECONDITION_FAILED`, `413 PAYLOAD_TOO_LARGE`, `413 REQUEST_ENTITY_TOO_LARGE`, `414 URI_TOO_LONG`, `414 REQUEST_URI_TOO_LONG`, `415 UNSUPPORTED_MEDIA_TYPE`, `416 REQUESTED_RANGE_NOT_SATISFIABLE`, `417 EXPECTATION_FAILED`, `418 I_AM_A_TEAPOT`, `419 INSUFFICIENT_SPACE_ON_RESOURCE`, `420 METHOD_FAILURE`, `421 DESTINATION_LOCKED`, `422 UNPROCESSABLE_ENTITY`, `423 LOCKED`, `424 FAILED_DEPENDENCY`, `425 TOO_EARLY`, `426 UPGRADE_REQUIRED`, `428 PRECONDITION_REQUIRED`, `429 TOO_MANY_REQUESTS`, `431 REQUEST_HEADER_FIELDS_TOO_LARGE`, `451 UNAVAILABLE_FOR_LEGAL_REASONS`, `500 INTERNAL_SERVER_ERROR`, `501 NOT_IMPLEMENTED`, `502 BAD_GATEWAY`, `503 SERVICE_UNAVAILABLE`, `504 GATEWAY_TIMEOUT`, `505 HTTP_VERSION_NOT_SUPPORTED`, `506 VARIANT_ALSO_NEGOTIATES`, `507 INSUFFICIENT_STORAGE`, `508 LOOP_DETECTED`, `509 BANDWIDTH_LIMIT_EXCEEDED`, `510 NOT_EXTENDED`, `511 NETWORK_AUTHENTICATION_REQUIRED`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(_.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "messages": [\n    "string"\n  ],\n  "statusCode": "100 CONTINUE"\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(_.Z,{label:"Error",value:"Error",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "error": "Forbidden",\n  "messages": [\n    "ForbiddenException"\n  ],\n  "statusCode": "403 FORBIDDEN"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}m.isMDXComponent=!0}}]);