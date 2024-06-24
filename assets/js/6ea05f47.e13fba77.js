"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[21095],{24400:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>y,frontMatter:()=>m,metadata:()=>h,toc:()=>g});var i=a(87462),s=(a(67294),a(3905)),r=a(26389),n=a(94891),o=a(75190),d=a(47507),c=a(24310),l=a(63303),p=(a(75035),a(85162));const m={id:"get-get-production-tracking",title:"getGetProductionTracking",description:"getGetProductionTracking",sidebar_label:"getGetProductionTracking",hide_title:!0,hide_table_of_contents:!0,api:{tags:["GetProductionTracking"],operationId:"getGetProductionTracking",parameters:[{name:"tenant-id",in:"path",description:"The ID of the tenant owning the requested Twin.",required:!0,schema:{type:"string",format:"uuid"}}],responses:{200:{content:{"application/json":{schema:{description:"Aspect to request product specific data from modular production",type:"object",properties:{request:{description:"Contains the data for the production tracking request",type:"object",properties:{stepIdentifierList:{description:"List of manufacturing steps from which a set of parameter is requested. The manufacturing steps are either determined by a capability or a process step identifier",type:"array",items:{description:"Concrete identifier of a manufacturing step, either based on a process step identifier or a capability",type:"object",properties:{capabilityId:{description:"Identifier of a capability that is required in case of a capability based request",type:"string"},billOfMaterialId:{description:"Identifier for a bill of material, which is known by both partners",type:"string"},processStepId:{description:"Id of a process Step, specified within an instance of a bill of process data model that is known to both partners",type:"string"},processParameterList:{description:"List of requested Process parameter",type:"array",items:{description:"Entity to define process parameters",type:"object",properties:{processParameterName:{description:"Name of a process parameter",type:"string"},processParameterSemanticId:{description:"Reference to a semantic that defines the unit and the data type of the parameter",type:"string"}},required:["processParameterName","processParameterSemanticId"]}},partInstanceLevel:{description:"Specifies for the case of a  capability based request, whether the parts are identified with a serial number or with a bill of material ",type:"string",enum:["partInstanceId","bomId"]},partInstanceId:{description:"Identifies an instance of a part in case that the partInstanceLevel property has the value partInstanceId ",type:"string"},billOfMaterialElementId:{description:"Identifier of an element that is part of the bill of material, referenced by the bill of material Id ",type:"string"}},required:["processParameterList","partInstanceLevel","partInstanceId","billOfMaterialElementId"]}},processReferenceType:{description:"Value of an enumeration that determines whether the request is based on concrete process steps (Bill of process) or capabilities",type:"string",enum:["processStep","capability"]},billOfProcessId:{description:"Id to identify an instance of the bill of process data model ",type:"string"},customerId:{description:"Internal customer Identification",type:"string",pattern:"^BPNL[a-zA-Z0-9]{12}$"},catenaXId:{description:"The fully anonymous Catena-X ID of the serialized part, valid for the Catena-X dataspace.",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},version:{description:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",type:"string",pattern:"^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$"},identifierType:{description:"Identifies a product based on an identifier and distinguishes whether the request is based on a bill of material, part instance identifier oder a batch identifier.",type:"string",enum:["partInstanceId","batchId","bomId"]},identifierNumber:{description:"Identifier number of a product",type:"string"}},required:["stepIdentifierList","customerId","version","identifierType","identifierNumber"]},header:{description:"Contains standardized attributes for message processing common across several use cases.",type:"object",properties:{messageId:{description:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},context:{description:"Information about the context the message should be considered in.\nThe value MUST consist of two parts: an identifier of the context (e.g. business domain, etc.) followed by a version number.\nBoth the identifier and the version number MUST correspond to the content of the message.\nIf the content of a message is described by an aspect model available in the Catena-X Semantic Hub, then the unique identifier of this semantic model (e.g. urn:samm:io.catenax.<ASPECT-MODEL-NAME>:1.x.x) MUST be used as a value of the context field. This is considered the default case.\nIn all other cases the value of the context field MUST follow the pattern <domain>-<subdomain>-<object>:<[major] version> (e.g. TRACE-QM-Alert:1.x.x).\nVersioning only refers to major versions in both default and fallback cases.\nNote: The version of the message's header is specified in the version field.",type:"string"},sentDateTime:{description:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},senderBpn:{description:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",type:"string",pattern:"^BPNL[0-9]{8}[a-zA-Z0-9]{4}$"},receiverBpn:{description:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",type:"string",pattern:"^BPNL[0-9]{8}[a-zA-Z0-9]{4}$"},expectedResponseBy:{description:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},relatedMessageId:{description:"Unique ID identifying a message somehow related to the current one",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},version:{description:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",type:"string",pattern:"^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$"}},required:["messageId","context","sentDateTime","senderBpn","receiverBpn","version"]}},required:["request","header"]}}},description:"The request was successful."},401:{description:"Payload or user input is invalid. See error details in the payload for more.",content:{"application/json":{schema:{type:"object",required:["error"],properties:{error:{type:"object",required:["details"],properties:{message:{type:"string",minLength:1},path:{type:"string",minLength:1},details:{type:"object",minLength:1,additionalProperties:{type:"object"}},code:{type:"string",nullable:!0}}}}}}}},402:{description:"The requesting user or client is not authenticated."},403:{description:"The requesting user or client is not authorized to access resources for the given tenant."},404:{description:"The requested Twin has not been found."}},description:"getGetProductionTracking",method:"get",path:"/{tenant-id}/get-production-tracking",servers:[{url:"catenax.io/api/v1",variables:{"api-version":{default:"v1"}}}],info:{title:"Get Production Tracking",version:"v1"},postman:{name:"get Get Production Tracking",description:{type:"text/plain"},url:{path:[":tenant-id","get-production-tracking"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The ID of the tenant owning the requested Twin.",type:"text/plain"},type:"any",value:"",key:"tenant-id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Modular Production Kit/Software Development View/Provider//get-production-tracking",custom_edit_url:null},u=void 0,h={unversionedId:"kits/Modular Production Kit/Software Development View/Provider/get-get-production-tracking",id:"kits/Modular Production Kit/Software Development View/Provider/get-get-production-tracking",title:"getGetProductionTracking",description:"getGetProductionTracking",source:"@site/docs-kits/kits/Modular Production Kit/Software Development View/Provider/get-get-production-tracking.api.mdx",sourceDirName:"kits/Modular Production Kit/Software Development View/Provider",slug:"/kits/Modular Production Kit/Software Development View/Provider/get-get-production-tracking",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Modular Production Kit/Software Development View/Provider/get-get-production-tracking",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-get-production-tracking",title:"getGetProductionTracking",description:"getGetProductionTracking",sidebar_label:"getGetProductionTracking",hide_title:!0,hide_table_of_contents:!0,api:{tags:["GetProductionTracking"],operationId:"getGetProductionTracking",parameters:[{name:"tenant-id",in:"path",description:"The ID of the tenant owning the requested Twin.",required:!0,schema:{type:"string",format:"uuid"}}],responses:{200:{content:{"application/json":{schema:{description:"Aspect to request product specific data from modular production",type:"object",properties:{request:{description:"Contains the data for the production tracking request",type:"object",properties:{stepIdentifierList:{description:"List of manufacturing steps from which a set of parameter is requested. The manufacturing steps are either determined by a capability or a process step identifier",type:"array",items:{description:"Concrete identifier of a manufacturing step, either based on a process step identifier or a capability",type:"object",properties:{capabilityId:{description:"Identifier of a capability that is required in case of a capability based request",type:"string"},billOfMaterialId:{description:"Identifier for a bill of material, which is known by both partners",type:"string"},processStepId:{description:"Id of a process Step, specified within an instance of a bill of process data model that is known to both partners",type:"string"},processParameterList:{description:"List of requested Process parameter",type:"array",items:{description:"Entity to define process parameters",type:"object",properties:{processParameterName:{description:"Name of a process parameter",type:"string"},processParameterSemanticId:{description:"Reference to a semantic that defines the unit and the data type of the parameter",type:"string"}},required:["processParameterName","processParameterSemanticId"]}},partInstanceLevel:{description:"Specifies for the case of a  capability based request, whether the parts are identified with a serial number or with a bill of material ",type:"string",enum:["partInstanceId","bomId"]},partInstanceId:{description:"Identifies an instance of a part in case that the partInstanceLevel property has the value partInstanceId ",type:"string"},billOfMaterialElementId:{description:"Identifier of an element that is part of the bill of material, referenced by the bill of material Id ",type:"string"}},required:["processParameterList","partInstanceLevel","partInstanceId","billOfMaterialElementId"]}},processReferenceType:{description:"Value of an enumeration that determines whether the request is based on concrete process steps (Bill of process) or capabilities",type:"string",enum:["processStep","capability"]},billOfProcessId:{description:"Id to identify an instance of the bill of process data model ",type:"string"},customerId:{description:"Internal customer Identification",type:"string",pattern:"^BPNL[a-zA-Z0-9]{12}$"},catenaXId:{description:"The fully anonymous Catena-X ID of the serialized part, valid for the Catena-X dataspace.",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},version:{description:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",type:"string",pattern:"^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$"},identifierType:{description:"Identifies a product based on an identifier and distinguishes whether the request is based on a bill of material, part instance identifier oder a batch identifier.",type:"string",enum:["partInstanceId","batchId","bomId"]},identifierNumber:{description:"Identifier number of a product",type:"string"}},required:["stepIdentifierList","customerId","version","identifierType","identifierNumber"]},header:{description:"Contains standardized attributes for message processing common across several use cases.",type:"object",properties:{messageId:{description:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},context:{description:"Information about the context the message should be considered in.\nThe value MUST consist of two parts: an identifier of the context (e.g. business domain, etc.) followed by a version number.\nBoth the identifier and the version number MUST correspond to the content of the message.\nIf the content of a message is described by an aspect model available in the Catena-X Semantic Hub, then the unique identifier of this semantic model (e.g. urn:samm:io.catenax.<ASPECT-MODEL-NAME>:1.x.x) MUST be used as a value of the context field. This is considered the default case.\nIn all other cases the value of the context field MUST follow the pattern <domain>-<subdomain>-<object>:<[major] version> (e.g. TRACE-QM-Alert:1.x.x).\nVersioning only refers to major versions in both default and fallback cases.\nNote: The version of the message's header is specified in the version field.",type:"string"},sentDateTime:{description:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},senderBpn:{description:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",type:"string",pattern:"^BPNL[0-9]{8}[a-zA-Z0-9]{4}$"},receiverBpn:{description:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",type:"string",pattern:"^BPNL[0-9]{8}[a-zA-Z0-9]{4}$"},expectedResponseBy:{description:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},relatedMessageId:{description:"Unique ID identifying a message somehow related to the current one",type:"string",pattern:"(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)"},version:{description:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",type:"string",pattern:"^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$"}},required:["messageId","context","sentDateTime","senderBpn","receiverBpn","version"]}},required:["request","header"]}}},description:"The request was successful."},401:{description:"Payload or user input is invalid. See error details in the payload for more.",content:{"application/json":{schema:{type:"object",required:["error"],properties:{error:{type:"object",required:["details"],properties:{message:{type:"string",minLength:1},path:{type:"string",minLength:1},details:{type:"object",minLength:1,additionalProperties:{type:"object"}},code:{type:"string",nullable:!0}}}}}}}},402:{description:"The requesting user or client is not authenticated."},403:{description:"The requesting user or client is not authorized to access resources for the given tenant."},404:{description:"The requested Twin has not been found."}},description:"getGetProductionTracking",method:"get",path:"/{tenant-id}/get-production-tracking",servers:[{url:"catenax.io/api/v1",variables:{"api-version":{default:"v1"}}}],info:{title:"Get Production Tracking",version:"v1"},postman:{name:"get Get Production Tracking",description:{type:"text/plain"},url:{path:[":tenant-id","get-production-tracking"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) The ID of the tenant owning the requested Twin.",type:"text/plain"},type:"any",value:"",key:"tenant-id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Modular Production Kit/Software Development View/Provider//get-production-tracking",custom_edit_url:null},sidebar:"kits",previous:{title:"getGetProductionForecast",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Modular Production Kit/Software Development View/Provider/get-get-production-forecast"},next:{title:"Client unsubscribing from information pushes",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Modular Production Kit/Software Development View/Provider/unsubscribe"}},f={},g=[{value:"getGetProductionTracking",id:"getgetproductiontracking",level:2}],b={toc:g};function y(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getgetproductiontracking"},"getGetProductionTracking"),(0,s.kt)("p",null,"getGetProductionTracking"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"tenant-id",in:"path",description:"The ID of the tenant owning the requested Twin.",required:!0,schema:{type:"string",format:"uuid"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The request was successful.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"request"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Contains the data for the production tracking request")),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"stepIdentifierList"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"List of manufacturing steps from which a set of parameter is requested. The manufacturing steps are either determined by a capability or a process step identifier")),(0,s.kt)(c.Z,{collapsible:!1,name:"capabilityId",required:!1,deprecated:void 0,schemaDescription:"Identifier of a capability that is required in case of a capability based request",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"billOfMaterialId",required:!1,deprecated:void 0,schemaDescription:"Identifier for a bill of material, which is known by both partners",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"processStepId",required:!1,deprecated:void 0,schemaDescription:"Id of a process Step, specified within an instance of a bill of process data model that is known to both partners",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"processParameterList"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"List of requested Process parameter")),(0,s.kt)(c.Z,{collapsible:!1,name:"processParameterName",required:!1,deprecated:void 0,schemaDescription:"Name of a process parameter",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"processParameterSemanticId",required:!1,deprecated:void 0,schemaDescription:"Reference to a semantic that defines the unit and the data type of the parameter",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,name:"partInstanceLevel",required:!1,deprecated:void 0,schemaDescription:"Specifies for the case of a  capability based request, whether the parts are identified with a serial number or with a bill of material ",schemaName:"string",qualifierMessage:"**Possible values:** [`partInstanceId`, `bomId`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"partInstanceId",required:!1,deprecated:void 0,schemaDescription:"Identifies an instance of a part in case that the partInstanceLevel property has the value partInstanceId ",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"billOfMaterialElementId",required:!1,deprecated:void 0,schemaDescription:"Identifier of an element that is part of the bill of material, referenced by the bill of material Id ",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!1,name:"processReferenceType",required:!1,deprecated:void 0,schemaDescription:"Value of an enumeration that determines whether the request is based on concrete process steps (Bill of process) or capabilities",schemaName:"string",qualifierMessage:"**Possible values:** [`processStep`, `capability`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"billOfProcessId",required:!1,deprecated:void 0,schemaDescription:"Id to identify an instance of the bill of process data model ",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"customerId",required:!1,deprecated:void 0,schemaDescription:"Internal customer Identification",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^BPNL[a-zA-Z0-9]{12}$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"catenaXId",required:!1,deprecated:void 0,schemaDescription:"The fully anonymous Catena-X ID of the serialized part, valid for the Catena-X dataspace.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"identifierType",required:!1,deprecated:void 0,schemaDescription:"Identifies a product based on an identifier and distinguishes whether the request is based on a bill of material, part instance identifier oder a batch identifier.",schemaName:"string",qualifierMessage:"**Possible values:** [`partInstanceId`, `batchId`, `bomId`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"identifierNumber",required:!1,deprecated:void 0,schemaDescription:"Identifier number of a product",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"header"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Contains standardized attributes for message processing common across several use cases.")),(0,s.kt)(c.Z,{collapsible:!1,name:"messageId",required:!1,deprecated:void 0,schemaDescription:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"context",required:!1,deprecated:void 0,schemaDescription:"Information about the context the message should be considered in.\nThe value MUST consist of two parts: an identifier of the context (e.g. business domain, etc.) followed by a version number.\nBoth the identifier and the version number MUST correspond to the content of the message.\nIf the content of a message is described by an aspect model available in the Catena-X Semantic Hub, then the unique identifier of this semantic model (e.g. urn:samm:io.catenax.<ASPECT-MODEL-NAME>:1.x.x) MUST be used as a value of the context field. This is considered the default case.\nIn all other cases the value of the context field MUST follow the pattern <domain>-<subdomain>-<object>:<[major] version> (e.g. TRACE-QM-Alert:1.x.x).\nVersioning only refers to major versions in both default and fallback cases.\nNote: The version of the message's header is specified in the version field.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"sentDateTime",required:!1,deprecated:void 0,schemaDescription:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"senderBpn",required:!1,deprecated:void 0,schemaDescription:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^BPNL[0-9]{8}[a-zA-Z0-9]{4}$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"receiverBpn",required:!1,deprecated:void 0,schemaDescription:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^BPNL[0-9]{8}[a-zA-Z0-9]{4}$`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"expectedResponseBy",required:!1,deprecated:void 0,schemaDescription:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"relatedMessageId",required:!1,deprecated:void 0,schemaDescription:"Unique ID identifying a message somehow related to the current one",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `(^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)|(^urn:uuid:[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$)`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:"The unique identifier of the aspect model defining the structure and the semantics of the message's header. The version number should reflect the versioning schema of aspect models in Catena-X.",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^(0|[1-9][0-9]*).(0|[1-9][0-9]*).(0|[1-9][0-9]*)(-(0|[1-9A-Za-z-][0-9A-Za-z-]*)(.[0-9A-Za-z-]+)*)?([0-9A-Za-z-]+(.[0-9A-Za-z-]+)*)?$`",defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "request": {\n    "stepIdentifierList": [\n      {\n        "capabilityId": "string",\n        "billOfMaterialId": "string",\n        "processStepId": "string",\n        "processParameterList": [\n          {\n            "processParameterName": "string",\n            "processParameterSemanticId": "string"\n          }\n        ],\n        "partInstanceLevel": "partInstanceId",\n        "partInstanceId": "string",\n        "billOfMaterialElementId": "string"\n      }\n    ],\n    "processReferenceType": "processStep",\n    "billOfProcessId": "string",\n    "customerId": "string",\n    "catenaXId": "string",\n    "version": "string",\n    "identifierType": "partInstanceId",\n    "identifierNumber": "string"\n  },\n  "header": {\n    "messageId": "string",\n    "context": "string",\n    "sentDateTime": "string",\n    "senderBpn": "string",\n    "receiverBpn": "string",\n    "expectedResponseBy": "string",\n    "relatedMessageId": "string",\n    "version": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Payload or user input is invalid. See error details in the payload for more.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"error"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Possible values:")," ",(0,s.kt)("inlineCode",{parentName:"p"},"non-empty"))),(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("code",null,"property name*"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,s.kt)(c.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "error": {\n    "message": "string",\n    "path": "string",\n    "details": {},\n    "code": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"402",value:"402",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The requesting user or client is not authenticated.")),(0,s.kt)("div",null)),(0,s.kt)(p.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The requesting user or client is not authorized to access resources for the given tenant.")),(0,s.kt)("div",null)),(0,s.kt)(p.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The requested Twin has not been found.")),(0,s.kt)("div",null)))))}y.isMDXComponent=!0}}]);