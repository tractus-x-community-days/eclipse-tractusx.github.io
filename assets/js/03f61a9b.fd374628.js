"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[14446],{91883:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var o=i(87462),n=(i(67294),i(3905)),r=i(26389),a=i(94891),s=(i(75190),i(47507),i(24310)),d=(i(63303),i(75035),i(85162));const c={id:"provide-production-forecast-information",title:"Information provided by MP to Client",description:"Information provided by MP to Client",sidebar_label:"Information provided by MP to Client",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"ProvideProductionForecastInformation",requestBody:{description:"Optional description in *Markdown*",required:!0,content:{"application/json":{schema:{description:"Answer to a customer with all information about the requested items",type:"object",properties:{productionForecastResponse:{description:"The concrete information about a production forecast",type:"object",properties:{listOfForecastItems:{description:"List of ForecastItems matching the items to an order",type:"array",items:{description:"ForecastItem entry for the requested order",type:"object",properties:{positionId:{description:"Identifier of a position of an order",type:"string"},productionForecast:{description:"Date of completion",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},precisionOfForecast:{description:"Accuracy of the prediction",type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},productionStatus:{description:"Status of the order/position within MP",type:"string",enum:["itemReceived","itemPlanned","itemInProduction","itemCompleted","statusUndefined"]},reasonsForDelay:{description:"Optional field to provide information to the customer why a delivery date is not met",type:"string",enum:["supplyProblems","otherCircumstances","internalProblems","noInformationAvailable"]},returnCode:{description:"Return code that indicates whether a single item of an order matches the customers desired request",type:"string",enum:["ok","lowerAccuracyOfPrecision","noForecastAvailable"]},forecastDate:{description:"Date/time of the forecast calculation",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"}},required:["positionId","productionForecast","precisionOfForecast","productionStatus","returnCode","forecastDate"]}},iterationNumber:{description:'Only set in CommunicationMode == "notification/cyclic" to be able to check the order of the notifications. \n\nNot required for communication mode = "synchronous"',type:"number"},communicationMode:{description:"Specification of the communication mode",type:"string",enum:["synchronous","cyclic","notification"]},versionDataModel:{description:"Specifies the used version of the data model",type:"string"}},required:["listOfForecastItems","communicationMode","versionDataModel"]},header:{description:"Contains information common to all messages",type:"object",properties:{messageId:{description:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",type:"string"},context:{description:"Information about the context the message should be considered in.\r\nDefault: For Use Cases which need to validate against the Semantic Hub automatically.\r\nFallback: For Use Cases which do not use automatic validation.\r\nIn both cases: Versioning only refers to major versions.\r\nString pattern of the value follows: <domain>-<subdomain>-<object>-<major version>",type:"string"},sentDateTime:{description:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},senderBpn:{description:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",type:"string"},receiverBpn:{description:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",type:"string"},expectedResponseBy:{description:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](.[0-9]+)?|(24:00:00(.0+)?))(Z|(+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},relatedMessageId:{description:"Unique ID identifying a message somehow related to the current one",type:"string"},version:{description:"The version of the standard defining the semantics and the structure of the message's header. The version number should follow the Semantic Versioning 2.0.0 specification.",type:"string"}},required:["messageId","context","sentDateTime","senderBpn","receiverBpn","version"]}},required:["productionForecastResponse","header"]}}}},responses:{200:{description:"OK. The request has succeeded"},400:{description:"Bad request. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."},401:{description:'Unauthorized. Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'},403:{description:"Forbidden. The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource."},420:{description:"lowerAccuracyOfPrecision. the returned data has a lower precision than requested"},421:{description:"noForecastAvailable. No data available"}},description:"Information provided by MP to Client",method:"post",path:"/ProvideProductionForecastInformation",servers:[{url:"http://example.mp.org"}],jsonRequestBodyExample:{productionForecastResponse:{listOfForecastItems:[{positionId:"string",productionForecast:"string",precisionOfForecast:{timeUnit:"unit:secondUnitOfTime",value:0},productionStatus:"itemReceived",reasonsForDelay:"supplyProblems",returnCode:"ok",forecastDate:"string"}],iterationNumber:0,communicationMode:"synchronous",versionDataModel:"string"},header:{messageId:"string",context:"string",sentDateTime:"string",senderBpn:"string",receiverBpn:"string",expectedResponseBy:"string",relatedMessageId:"string",version:"string"}},info:{version:"1.0.0",title:"SIS EDC Consumer",license:{name:"MIT"}},postman:{name:"Information provided by MP to Client",description:{type:"text/plain"},url:{path:["ProvideProductionForecastInformation"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Modular Production Kit/Software Development View/Consumer//sis-edc-consumer",custom_edit_url:null},l=void 0,m={unversionedId:"kits/Modular Production Kit/Software Development View/Consumer/provide-production-forecast-information",id:"version-24.03/kits/Modular Production Kit/Software Development View/Consumer/provide-production-forecast-information",title:"Information provided by MP to Client",description:"Information provided by MP to Client",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Modular Production Kit/Software Development View/Consumer/provide-production-forecast-information.api.mdx",sourceDirName:"kits/Modular Production Kit/Software Development View/Consumer",slug:"/kits/Modular Production Kit/Software Development View/Consumer/provide-production-forecast-information",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Modular Production Kit/Software Development View/Consumer/provide-production-forecast-information",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"provide-production-forecast-information",title:"Information provided by MP to Client",description:"Information provided by MP to Client",sidebar_label:"Information provided by MP to Client",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"ProvideProductionForecastInformation",requestBody:{description:"Optional description in *Markdown*",required:!0,content:{"application/json":{schema:{description:"Answer to a customer with all information about the requested items",type:"object",properties:{productionForecastResponse:{description:"The concrete information about a production forecast",type:"object",properties:{listOfForecastItems:{description:"List of ForecastItems matching the items to an order",type:"array",items:{description:"ForecastItem entry for the requested order",type:"object",properties:{positionId:{description:"Identifier of a position of an order",type:"string"},productionForecast:{description:"Date of completion",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},precisionOfForecast:{description:"Accuracy of the prediction",type:"object",properties:{timeUnit:{description:"Specifies the unit in which the time is represented",type:"string",pattern:"[a-zA-Z]*:[a-zA-Z]+",enum:["unit:secondUnitOfTime","unit:minuteUnitOfTime","unit:hour","unit:day","unit:week","unit:month","unit:year"]},value:{description:"The amount of timeUnits considered",type:"number"}},required:["timeUnit","value"]},productionStatus:{description:"Status of the order/position within MP",type:"string",enum:["itemReceived","itemPlanned","itemInProduction","itemCompleted","statusUndefined"]},reasonsForDelay:{description:"Optional field to provide information to the customer why a delivery date is not met",type:"string",enum:["supplyProblems","otherCircumstances","internalProblems","noInformationAvailable"]},returnCode:{description:"Return code that indicates whether a single item of an order matches the customers desired request",type:"string",enum:["ok","lowerAccuracyOfPrecision","noForecastAvailable"]},forecastDate:{description:"Date/time of the forecast calculation",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"}},required:["positionId","productionForecast","precisionOfForecast","productionStatus","returnCode","forecastDate"]}},iterationNumber:{description:'Only set in CommunicationMode == "notification/cyclic" to be able to check the order of the notifications. \n\nNot required for communication mode = "synchronous"',type:"number"},communicationMode:{description:"Specification of the communication mode",type:"string",enum:["synchronous","cyclic","notification"]},versionDataModel:{description:"Specifies the used version of the data model",type:"string"}},required:["listOfForecastItems","communicationMode","versionDataModel"]},header:{description:"Contains information common to all messages",type:"object",properties:{messageId:{description:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",type:"string"},context:{description:"Information about the context the message should be considered in.\r\nDefault: For Use Cases which need to validate against the Semantic Hub automatically.\r\nFallback: For Use Cases which do not use automatic validation.\r\nIn both cases: Versioning only refers to major versions.\r\nString pattern of the value follows: <domain>-<subdomain>-<object>-<major version>",type:"string"},sentDateTime:{description:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},senderBpn:{description:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",type:"string"},receiverBpn:{description:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",type:"string"},expectedResponseBy:{description:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",type:"string",pattern:"-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?"},relatedMessageId:{description:"Unique ID identifying a message somehow related to the current one",type:"string"},version:{description:"The version of the standard defining the semantics and the structure of the message's header. The version number should follow the Semantic Versioning 2.0.0 specification.",type:"string"}},required:["messageId","context","sentDateTime","senderBpn","receiverBpn","version"]}},required:["productionForecastResponse","header"]}}}},responses:{200:{description:"OK. The request has succeeded"},400:{description:"Bad request. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."},401:{description:'Unauthorized. Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'},403:{description:"Forbidden. The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource."},420:{description:"lowerAccuracyOfPrecision. the returned data has a lower precision than requested"},421:{description:"noForecastAvailable. No data available"}},description:"Information provided by MP to Client",method:"post",path:"/ProvideProductionForecastInformation",servers:[{url:"http://example.mp.org"}],jsonRequestBodyExample:{productionForecastResponse:{listOfForecastItems:[{positionId:"string",productionForecast:"string",precisionOfForecast:{timeUnit:"unit:secondUnitOfTime",value:0},productionStatus:"itemReceived",reasonsForDelay:"supplyProblems",returnCode:"ok",forecastDate:"string"}],iterationNumber:0,communicationMode:"synchronous",versionDataModel:"string"},header:{messageId:"string",context:"string",sentDateTime:"string",senderBpn:"string",receiverBpn:"string",expectedResponseBy:"string",relatedMessageId:"string",version:"string"}},info:{version:"1.0.0",title:"SIS EDC Consumer",license:{name:"MIT"}},postman:{name:"Information provided by MP to Client",description:{type:"text/plain"},url:{path:["ProvideProductionForecastInformation"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Modular Production Kit/Software Development View/Consumer//sis-edc-consumer",custom_edit_url:null},sidebar:"kits",previous:{title:"Sample Data",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Modular Production Kit/Software Development View/Sample Data Modular Production Kit"},next:{title:"Client asking for MP information",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Modular Production Kit/Software Development View/Provider/get-production-forecast-information"}},u={},p=[{value:"Information provided by MP to Client",id:"information-provided-by-mp-to-client",level:2}],h={toc:p};function f(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"information-provided-by-mp-to-client"},"Information provided by MP to Client"),(0,n.kt)("p",null,"Information provided by MP to Client"),(0,n.kt)(a.Z,{mdxType:"MimeTabs"},(0,n.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:"1rem",marginBottom:"1rem"}},(0,n.kt)("p",null,"Optional description in ",(0,n.kt)("em",{parentName:"p"},"Markdown")))),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(s.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"productionForecastResponse"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"The concrete information about a production forecast")),(0,n.kt)(s.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"listOfForecastItems"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"List of ForecastItems matching the items to an order")),(0,n.kt)(s.Z,{collapsible:!1,name:"positionId",required:!0,deprecated:void 0,schemaDescription:"Identifier of a position of an order",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"productionForecast",required:!0,deprecated:void 0,schemaDescription:"Date of completion",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"precisionOfForecast"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Accuracy of the prediction")),(0,n.kt)(s.Z,{collapsible:!1,name:"timeUnit",required:!0,deprecated:void 0,schemaDescription:"Specifies the unit in which the time is represented",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `[a-zA-Z]*:[a-zA-Z]+`, [`unit:secondUnitOfTime`, `unit:minuteUnitOfTime`, `unit:hour`, `unit:day`, `unit:week`, `unit:month`, `unit:year`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"value",required:!0,deprecated:void 0,schemaDescription:"The amount of timeUnits considered",schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(s.Z,{collapsible:!1,name:"productionStatus",required:!0,deprecated:void 0,schemaDescription:"Status of the order/position within MP",schemaName:"string",qualifierMessage:"**Possible values:** [`itemReceived`, `itemPlanned`, `itemInProduction`, `itemCompleted`, `statusUndefined`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"reasonsForDelay",required:!1,deprecated:void 0,schemaDescription:"Optional field to provide information to the customer why a delivery date is not met",schemaName:"string",qualifierMessage:"**Possible values:** [`supplyProblems`, `otherCircumstances`, `internalProblems`, `noInformationAvailable`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"returnCode",required:!0,deprecated:void 0,schemaDescription:"Return code that indicates whether a single item of an order matches the customers desired request",schemaName:"string",qualifierMessage:"**Possible values:** [`ok`, `lowerAccuracyOfPrecision`, `noForecastAvailable`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"forecastDate",required:!0,deprecated:void 0,schemaDescription:"Date/time of the forecast calculation",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(s.Z,{collapsible:!1,name:"iterationNumber",required:!1,deprecated:void 0,schemaDescription:'Only set in CommunicationMode == "notification/cyclic" to be able to check the order of the notifications. \n\nNot required for communication mode = "synchronous"',schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"communicationMode",required:!0,deprecated:void 0,schemaDescription:"Specification of the communication mode",schemaName:"string",qualifierMessage:"**Possible values:** [`synchronous`, `cyclic`, `notification`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"versionDataModel",required:!0,deprecated:void 0,schemaDescription:"Specifies the used version of the data model",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(s.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"header"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"Contains information common to all messages")),(0,n.kt)(s.Z,{collapsible:!1,name:"messageId",required:!0,deprecated:void 0,schemaDescription:"Unique ID identifying the message. The purpose of the ID is to uniquely identify a single message, therefore it MUST not be reused.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"context",required:!0,deprecated:void 0,schemaDescription:"Information about the context the message should be considered in.\r\nDefault: For Use Cases which need to validate against the Semantic Hub automatically.\r\nFallback: For Use Cases which do not use automatic validation.\r\nIn both cases: Versioning only refers to major versions.\r\nString pattern of the value follows: <domain>-<subdomain>-<object>-<major version>",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"sentDateTime",required:!0,deprecated:void 0,schemaDescription:"Time zone aware timestamp holding the date and the time the message was sent by the sending party. The value MUST be formatted according to the ISO 8601 standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"senderBpn",required:!0,deprecated:void 0,schemaDescription:"The Business Partner Number of the sending party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"receiverBpn",required:!0,deprecated:void 0,schemaDescription:"The Business Partner Number of the receiving party. The value MUST be a valid BPN. BPNA and BPNS are not allowed. Applicable constraints are defined in the corresponding standard.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"expectedResponseBy",required:!1,deprecated:void 0,schemaDescription:"Time zone aware timestamp holding the date and time by which the sending party expects a certain type of response from the receiving party. The meaning and interpretation of the fields's value are context-bound and MUST therefore be defined by any business domain or platform capability making use of it. The value MUST be formatted according to the ISO 8601 standard",schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `-?([1-9][0-9]{3,}|0[0-9]{3})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\\.[0-9]+)?|(24:00:00(\\.0+)?))(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))?`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"relatedMessageId",required:!1,deprecated:void 0,schemaDescription:"Unique ID identifying a message somehow related to the current one",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(s.Z,{collapsible:!1,name:"version",required:!0,deprecated:void 0,schemaDescription:"The version of the standard defining the semantics and the structure of the message's header. The version number should follow the Semantic Versioning 2.0.0 specification.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK. The request has succeeded")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Bad request. The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,'Unauthorized. Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.')),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Forbidden. The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"420",value:"420",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"lowerAccuracyOfPrecision. the returned data has a lower precision than requested")),(0,n.kt)("div",null)),(0,n.kt)(d.Z,{label:"421",value:"421",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"noForecastAvailable. No data available")),(0,n.kt)("div",null)))))}f.isMDXComponent=!0}}]);