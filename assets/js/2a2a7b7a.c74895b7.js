"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[77136],{27630:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>b});var a=s(87462),r=(s(67294),s(3905)),n=s(26389),i=s(94891),o=(s(75190),s(47507),s(24310)),d=(s(63303),s(75035),s(85162));const l={id:"post-sharing-state-ready",title:"Sets the given business partners into ready to be shared state",description:"The business partners to set the ready state for are identified by their external-id. Only business partners in an initial or error state can be set to ready. If any given business partner could not be set into ready state for any reason (for example, it has not been found or it is in the wrong state) the whole request fails (all or nothing approach).",sidebar_label:"Sets the given business partners into ready to be shared state",hide_title:!0,hide_table_of_contents:!0,api:{tags:["sharing-state-controller"],description:"The business partners to set the ready state for are identified by their external-id. Only business partners in an initial or error state can be set to ready. If any given business partner could not be set into ready state for any reason (for example, it has not been found or it is in the wrong state) the whole request fails (all or nothing approach).",operationId:"postSharingStateReady",requestBody:{content:{"application/json":{schema:{required:["externalIds"],type:"object",properties:{externalIds:{type:"array",items:{type:"string"}}},description:"Request for setting business partners into ready to be shared to golden record state"}}},required:!0},responses:{204:{description:"All business partners put in ready to be shared state"},404:{description:"Business partners can't be put into ready state (e.g. external-ID not found, wrong sharing state)"}},method:"post",path:"/api/catena/sharing-state/ready",servers:[{url:"http://localhost:8081",description:"Generated server url"}],jsonRequestBodyExample:{externalIds:["string"]},info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"5.0.1-SNAPSHOT"},postman:{name:"Sets the given business partners into ready to be shared state",description:{content:"The business partners to set the ready state for are identified by their external-id. Only business partners in an initial or error state can be set to ready. If any given business partner could not be set into ready state for any reason (for example, it has not been found or it is in the wrong state) the whole request fails (all or nothing approach).",type:"text/plain"},url:{path:["api","catena","sharing-state","ready"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},p=void 0,u={unversionedId:"kits/Business Partner Kit/Software Development View/Gate Api/post-sharing-state-ready",id:"kits/Business Partner Kit/Software Development View/Gate Api/post-sharing-state-ready",title:"Sets the given business partners into ready to be shared state",description:"The business partners to set the ready state for are identified by their external-id. Only business partners in an initial or error state can be set to ready. If any given business partner could not be set into ready state for any reason (for example, it has not been found or it is in the wrong state) the whole request fails (all or nothing approach).",source:"@site/docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/post-sharing-state-ready.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Gate Api",slug:"/kits/Business Partner Kit/Software Development View/Gate Api/post-sharing-state-ready",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Business Partner Kit/Software Development View/Gate Api/post-sharing-state-ready",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"post-sharing-state-ready",title:"Sets the given business partners into ready to be shared state",description:"The business partners to set the ready state for are identified by their external-id. Only business partners in an initial or error state can be set to ready. If any given business partner could not be set into ready state for any reason (for example, it has not been found or it is in the wrong state) the whole request fails (all or nothing approach).",sidebar_label:"Sets the given business partners into ready to be shared state",hide_title:!0,hide_table_of_contents:!0,api:{tags:["sharing-state-controller"],description:"The business partners to set the ready state for are identified by their external-id. Only business partners in an initial or error state can be set to ready. If any given business partner could not be set into ready state for any reason (for example, it has not been found or it is in the wrong state) the whole request fails (all or nothing approach).",operationId:"postSharingStateReady",requestBody:{content:{"application/json":{schema:{required:["externalIds"],type:"object",properties:{externalIds:{type:"array",items:{type:"string"}}},description:"Request for setting business partners into ready to be shared to golden record state"}}},required:!0},responses:{204:{description:"All business partners put in ready to be shared state"},404:{description:"Business partners can't be put into ready state (e.g. external-ID not found, wrong sharing state)"}},method:"post",path:"/api/catena/sharing-state/ready",servers:[{url:"http://localhost:8081",description:"Generated server url"}],jsonRequestBodyExample:{externalIds:["string"]},info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"5.0.1-SNAPSHOT"},postman:{name:"Sets the given business partners into ready to be shared state",description:{content:"The business partners to set the ready state for are identified by their external-id. Only business partners in an initial or error state can be set to ready. If any given business partner could not be set into ready state for any reason (for example, it has not been found or it is in the wrong state) the whole request fails (all or nothing approach).",type:"text/plain"},url:{path:["api","catena","sharing-state","ready"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},sidebar:"kits",previous:{title:"Creates or updates a sharing state of a business partner",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Business Partner Kit/Software Development View/Gate Api/upsert-sharing-state"},next:{title:"site-controller",permalink:"/eclipse-tractusx.github.io/docs-kits/next/category/kits/Business Partner Kit/Software Development View/Gate Api/site-controller"}},h={},b=[{value:"Sets the given business partners into ready to be shared state",id:"sets-the-given-business-partners-into-ready-to-be-shared-state",level:2}],y={toc:b};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sets-the-given-business-partners-into-ready-to-be-shared-state"},"Sets the given business partners into ready to be shared state"),(0,r.kt)("p",null,"The business partners to set the ready state for are identified by their external-id. Only business partners in an initial or error state can be set to ready. If any given business partner could not be set into ready state for any reason (for example, it has not been found or it is in the wrong state) the whole request fails (all or nothing approach)."),(0,r.kt)(i.Z,{mdxType:"MimeTabs"},(0,r.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body"),(0,r.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(o.Z,{collapsible:!1,name:"externalIds",required:!0,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(d.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"All business partners put in ready to be shared state")),(0,r.kt)("div",null)),(0,r.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Business partners can't be put into ready state (e.g. external-ID not found, wrong sharing state)")),(0,r.kt)("div",null)))))}c.isMDXComponent=!0}}]);