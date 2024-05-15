"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[30999],{20234:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>b,frontMatter:()=>u,metadata:()=>p,toc:()=>h});var a=i(87462),r=(i(67294),i(3905)),n=i(26389),s=i(94891),o=(i(75190),i(47507),i(24310)),c=i(63303),d=(i(75035),i(85162));const u={id:"receive-unique-id-push-notification",title:"receiveUniqueIdPushNotification",description:"Receives a Traceability Unique Id push notification",sidebar_label:"receiveUniqueIdPushNotification",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Unique ID Push Notification"],description:"Receives a Traceability Unique Id push notification",operationId:"receiveUniqueIdPushNotification",requestBody:{content:{"application/json":{schema:{required:["header","content"],type:"object",properties:{header:{type:"object",required:["notificationId","senderBPN","senderAddress","recipientBPN","classification"],properties:{notificationId:{type:"string",format:"uuid",example:"a7954026-3aff-4b6c-92bf-04671ef2fa46",description:"A UUIDv4 to uniquely identify a Unique ID push notification."},senderBPN:{type:"string",example:"BPNL00000003BW3S",description:"The business partner number (BPN) of the sender."},senderAddress:{type:"string",format:"uri",example:"https://edc.company-xyz.io/BPNL00000003BW3S",description:"The Eclipse Dataspace Connector (EDC) URL of the sender."},recipientBPN:{type:"string",example:"BPNL00000003BV4H",description:"The business partner number (BPN) of the receiver."},classification:{type:"string",enum:["Child-Relationship"],example:"Child-Relationship",description:"The classification defines the type of the Unique ID push notification."}}},content:{type:"object",required:["listOfItems"],properties:{information:{type:"string",maxLength:1e3,example:"Update of serialized parts and batches for which digital twins were created."},listOfItems:{type:"array",items:{oneOf:[{type:"object",required:["manufacturerId","manufacturerPartId","partInstanceId","catenaxId"],properties:{manufacturerId:{type:"string",example:"BPNL00000003BW3S",description:"The Business Partner Number (BPNL) of the manufacturer of the serialized part, i.e., the companies main entry."},manufacturerPartId:{type:"string",example:"8840838-04",description:"The ID of the type/catalog part (of which the serialized part is an instance of) from the manufacturer."},customerPartId:{type:"string",example:"AAX178378",description:"The ID of the type/catalog part (of which the serialized part is an instance of) from the customer."},partInstanceId:{type:"string",example:"NO-009284492099792129568369",description:"The serial number of the serialized part from the manufacturer. We assume here that the customer does not have or create its own serial number for a part, but just used the manufacturer's serial number."},catenaxId:{type:"string",example:"urn:uuid:d32d3b55-d222-41e9-8d19-554af53124dd",description:"Catena-X ID for a serialized part."}}},{type:"object",required:["manufacturerId","manufacturerPartId","batchId","catenaxId"],properties:{manufacturerId:{type:"string",example:"BPNL00000003BW3S",description:"The Business Partner Number (BPNL) of the manufacturer of the batch, i.e., the companies main entry."},manufacturerPartId:{type:"string",example:"8840838-04",description:"The ID of the type/catalog part (of which the batch is an instance of) from the manufacturer."},customerPartId:{type:"string",example:"AAX178378",description:"The ID of the type/catalog part (of which the batch is an instance of) from the customer."},batchId:{type:"string",example:"NO-009284492099792129568369",description:"The serial number of the batch from the manufacturer. We assume here that the customer does not have or create its own serial number for a batch, but just used the manufacturer's serial number."},catenaxId:{type:"string",example:"urn:uuid:d32d3b55-d222-41e9-8d19-554af53124dd",description:"Catena-X ID for a batch."}}}]}}}}}}}}},responses:{201:{description:"Notification was received successfully"},400:{description:"Request body was malformed"},401:{description:"Not authorized"},403:{description:"Forbidden"},405:{description:"Method not allowed"},409:{description:"Could not accept the send notification, because a notification with that notificationId already exists"},422:{description:"Could not accept the send notification even though it is syntactically correct. The notification is not accepted, because of semantic reasons (e.g., an item is not known by the receiver)."}},method:"post",path:"/uniqueidpush/receive",servers:[{url:"/"}],jsonRequestBodyExample:{header:{notificationId:"a7954026-3aff-4b6c-92bf-04671ef2fa46",senderBPN:"BPNL00000003BW3S",senderAddress:"https://edc.company-xyz.io/BPNL00000003BW3S",recipientBPN:"BPNL00000003BV4H",classification:"Child-Relationship"},content:{information:"Update of serialized parts and batches for which digital twins were created.",listOfItems:[{manufacturerId:"BPNL00000003BW3S",manufacturerPartId:"8840838-04",customerPartId:"AAX178378",partInstanceId:"NO-009284492099792129568369",catenaxId:"urn:uuid:d32d3b55-d222-41e9-8d19-554af53124dd"},{manufacturerId:"BPNL00000003BW3S",manufacturerPartId:"8840838-04",customerPartId:"AAX178378",batchId:"NO-009284492099792129568369",catenaxId:"urn:uuid:d32d3b55-d222-41e9-8d19-554af53124dd"}]}},info:{title:"Unique ID Push Notification API",description:"API documentation for Traceability Unique ID Push Notifications",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"1.0.0"},postman:{name:"receive Unique Id Push Notification",description:{content:"Receives a Traceability Unique Id push notification",type:"text/plain"},url:{path:["uniqueidpush","receive"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Traceability Kit/Software Development View/Unique ID Push API/unique-id-push-notification-api",custom_edit_url:null},l=void 0,p={unversionedId:"kits/Traceability Kit/Software Development View/Unique ID Push API/receive-unique-id-push-notification",id:"version-23.12/kits/Traceability Kit/Software Development View/Unique ID Push API/receive-unique-id-push-notification",title:"receiveUniqueIdPushNotification",description:"Receives a Traceability Unique Id push notification",source:"@site/docs-kits_versioned_docs/version-23.12/kits/Traceability Kit/Software Development View/Unique ID Push API/receive-unique-id-push-notification.api.mdx",sourceDirName:"kits/Traceability Kit/Software Development View/Unique ID Push API",slug:"/kits/Traceability Kit/Software Development View/Unique ID Push API/receive-unique-id-push-notification",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/Traceability Kit/Software Development View/Unique ID Push API/receive-unique-id-push-notification",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"receive-unique-id-push-notification",title:"receiveUniqueIdPushNotification",description:"Receives a Traceability Unique Id push notification",sidebar_label:"receiveUniqueIdPushNotification",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Unique ID Push Notification"],description:"Receives a Traceability Unique Id push notification",operationId:"receiveUniqueIdPushNotification",requestBody:{content:{"application/json":{schema:{required:["header","content"],type:"object",properties:{header:{type:"object",required:["notificationId","senderBPN","senderAddress","recipientBPN","classification"],properties:{notificationId:{type:"string",format:"uuid",example:"a7954026-3aff-4b6c-92bf-04671ef2fa46",description:"A UUIDv4 to uniquely identify a Unique ID push notification."},senderBPN:{type:"string",example:"BPNL00000003BW3S",description:"The business partner number (BPN) of the sender."},senderAddress:{type:"string",format:"uri",example:"https://edc.company-xyz.io/BPNL00000003BW3S",description:"The Eclipse Dataspace Connector (EDC) URL of the sender."},recipientBPN:{type:"string",example:"BPNL00000003BV4H",description:"The business partner number (BPN) of the receiver."},classification:{type:"string",enum:["Child-Relationship"],example:"Child-Relationship",description:"The classification defines the type of the Unique ID push notification."}}},content:{type:"object",required:["listOfItems"],properties:{information:{type:"string",maxLength:1e3,example:"Update of serialized parts and batches for which digital twins were created."},listOfItems:{type:"array",items:{oneOf:[{type:"object",required:["manufacturerId","manufacturerPartId","partInstanceId","catenaxId"],properties:{manufacturerId:{type:"string",example:"BPNL00000003BW3S",description:"The Business Partner Number (BPNL) of the manufacturer of the serialized part, i.e., the companies main entry."},manufacturerPartId:{type:"string",example:"8840838-04",description:"The ID of the type/catalog part (of which the serialized part is an instance of) from the manufacturer."},customerPartId:{type:"string",example:"AAX178378",description:"The ID of the type/catalog part (of which the serialized part is an instance of) from the customer."},partInstanceId:{type:"string",example:"NO-009284492099792129568369",description:"The serial number of the serialized part from the manufacturer. We assume here that the customer does not have or create its own serial number for a part, but just used the manufacturer's serial number."},catenaxId:{type:"string",example:"urn:uuid:d32d3b55-d222-41e9-8d19-554af53124dd",description:"Catena-X ID for a serialized part."}}},{type:"object",required:["manufacturerId","manufacturerPartId","batchId","catenaxId"],properties:{manufacturerId:{type:"string",example:"BPNL00000003BW3S",description:"The Business Partner Number (BPNL) of the manufacturer of the batch, i.e., the companies main entry."},manufacturerPartId:{type:"string",example:"8840838-04",description:"The ID of the type/catalog part (of which the batch is an instance of) from the manufacturer."},customerPartId:{type:"string",example:"AAX178378",description:"The ID of the type/catalog part (of which the batch is an instance of) from the customer."},batchId:{type:"string",example:"NO-009284492099792129568369",description:"The serial number of the batch from the manufacturer. We assume here that the customer does not have or create its own serial number for a batch, but just used the manufacturer's serial number."},catenaxId:{type:"string",example:"urn:uuid:d32d3b55-d222-41e9-8d19-554af53124dd",description:"Catena-X ID for a batch."}}}]}}}}}}}}},responses:{201:{description:"Notification was received successfully"},400:{description:"Request body was malformed"},401:{description:"Not authorized"},403:{description:"Forbidden"},405:{description:"Method not allowed"},409:{description:"Could not accept the send notification, because a notification with that notificationId already exists"},422:{description:"Could not accept the send notification even though it is syntactically correct. The notification is not accepted, because of semantic reasons (e.g., an item is not known by the receiver)."}},method:"post",path:"/uniqueidpush/receive",servers:[{url:"/"}],jsonRequestBodyExample:{header:{notificationId:"a7954026-3aff-4b6c-92bf-04671ef2fa46",senderBPN:"BPNL00000003BW3S",senderAddress:"https://edc.company-xyz.io/BPNL00000003BW3S",recipientBPN:"BPNL00000003BV4H",classification:"Child-Relationship"},content:{information:"Update of serialized parts and batches for which digital twins were created.",listOfItems:[{manufacturerId:"BPNL00000003BW3S",manufacturerPartId:"8840838-04",customerPartId:"AAX178378",partInstanceId:"NO-009284492099792129568369",catenaxId:"urn:uuid:d32d3b55-d222-41e9-8d19-554af53124dd"},{manufacturerId:"BPNL00000003BW3S",manufacturerPartId:"8840838-04",customerPartId:"AAX178378",batchId:"NO-009284492099792129568369",catenaxId:"urn:uuid:d32d3b55-d222-41e9-8d19-554af53124dd"}]}},info:{title:"Unique ID Push Notification API",description:"API documentation for Traceability Unique ID Push Notifications",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"1.0.0"},postman:{name:"receive Unique Id Push Notification",description:{content:"Receives a Traceability Unique Id push notification",type:"text/plain"},url:{path:["uniqueidpush","receive"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Traceability Kit/Software Development View/Unique ID Push API/unique-id-push-notification-api",custom_edit_url:null},sidebar:"kits",previous:{title:"Introduction",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/Traceability Kit/Software Development View/Unique ID Push API/unique-id-push-notification-api"},next:{title:"part_aspect-models",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/Traceability Kit/Software Development View/part_aspect-models"}},m={},h=[{value:"receiveUniqueIdPushNotification",id:"receiveuniqueidpushnotification",level:2}],f={toc:h};function b(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"receiveuniqueidpushnotification"},"receiveUniqueIdPushNotification"),(0,r.kt)("p",null,"Receives a Traceability Unique Id push notification"),(0,r.kt)(s.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"header"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"notificationId",required:!0,deprecated:void 0,schemaDescription:"A UUIDv4 to uniquely identify a Unique ID push notification.",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"senderBPN",required:!0,deprecated:void 0,schemaDescription:"The business partner number (BPN) of the sender.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"senderAddress",required:!0,deprecated:void 0,schemaDescription:"The Eclipse Dataspace Connector (EDC) URL of the sender.",schemaName:"uri",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"recipientBPN",required:!0,deprecated:void 0,schemaDescription:"The business partner number (BPN) of the receiver.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"classification",required:!0,deprecated:void 0,schemaDescription:"The classification defines the type of the Unique ID push notification.",schemaName:"string",qualifierMessage:"**Possible values:** [`Child-Relationship`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"content"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"information",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `<= 1000 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"listOfItems"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(d.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(o.Z,{collapsible:!1,name:"manufacturerId",required:!0,deprecated:void 0,schemaDescription:"The Business Partner Number (BPNL) of the manufacturer of the serialized part, i.e., the companies main entry.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"manufacturerPartId",required:!0,deprecated:void 0,schemaDescription:"The ID of the type/catalog part (of which the serialized part is an instance of) from the manufacturer.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"customerPartId",required:!1,deprecated:void 0,schemaDescription:"The ID of the type/catalog part (of which the serialized part is an instance of) from the customer.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"partInstanceId",required:!0,deprecated:void 0,schemaDescription:"The serial number of the serialized part from the manufacturer. We assume here that the customer does not have or create its own serial number for a part, but just used the manufacturer's serial number.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"catenaxId",required:!0,deprecated:void 0,schemaDescription:"Catena-X ID for a serialized part.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(d.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(o.Z,{collapsible:!1,name:"manufacturerId",required:!0,deprecated:void 0,schemaDescription:"The Business Partner Number (BPNL) of the manufacturer of the batch, i.e., the companies main entry.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"manufacturerPartId",required:!0,deprecated:void 0,schemaDescription:"The ID of the type/catalog part (of which the batch is an instance of) from the manufacturer.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"customerPartId",required:!1,deprecated:void 0,schemaDescription:"The ID of the type/catalog part (of which the batch is an instance of) from the customer.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"batchId",required:!0,deprecated:void 0,schemaDescription:"The serial number of the batch from the manufacturer. We assume here that the customer does not have or create its own serial number for a batch, but just used the manufacturer's serial number.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(o.Z,{collapsible:!1,name:"catenaxId",required:!0,deprecated:void 0,schemaDescription:"Catena-X ID for a batch.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))))))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Notification was received successfully")),(0,r.kt)("div",null)),(0,r.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request body was malformed")),(0,r.kt)("div",null)),(0,r.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Not authorized")),(0,r.kt)("div",null)),(0,r.kt)(d.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Forbidden")),(0,r.kt)("div",null)),(0,r.kt)(d.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Method not allowed")),(0,r.kt)("div",null)),(0,r.kt)(d.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Could not accept the send notification, because a notification with that notificationId already exists")),(0,r.kt)("div",null)),(0,r.kt)(d.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Could not accept the send notification even though it is syntactically correct. The notification is not accepted, because of semantic reasons (e.g., an item is not known by the receiver).")),(0,r.kt)("div",null)))))}b.isMDXComponent=!0}}]);