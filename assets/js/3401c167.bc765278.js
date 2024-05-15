"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[48754],{78859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>y,frontMatter:()=>m,metadata:()=>c,toc:()=>h});var s=a(87462),n=(a(67294),a(3905)),i=a(26389),l=a(94891),r=a(75190),o=(a(47507),a(24310),a(63303)),p=(a(75035),a(85162));const m={id:"push-scenario-state",title:"pushScenarioState",description:"The pushScenarioState enables distribution of a new scenario status and thus a notification of the procedure with the planned scenario",sidebar_label:"pushScenarioState",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pushScenarioState"],operationId:"pushScenarioState",description:"The pushScenarioState enables distribution of a new scenario status and thus a notification of the procedure with the planned scenario",parameters:[{name:"bpns",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"BPNS00000007OTZ3"},{name:"scenarioId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"50737df3-4237-4652-b092-1ef8649f6ca6"},{name:"state",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",enum:["InRealization","Processed","Canceled"]},example:"InRealization"}],responses:{200:{description:"OK",content:{text:{schema:{type:"string",example:"The GET has succeeded. The pushScenarioState has been successfully processed in the backend system."}}}},400:{description:"Bad request",content:{text:{schema:{type:"string",example:"The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."}}}},401:{description:"Unauthorized",content:{text:{schema:{type:"string",example:'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'}}}},402:{description:"Unknown BPNS",content:{text:{schema:{type:"string",example:"The BPNS which is given as parameter is not registered in the data provider database as a direct partner."}}}},403:{description:"Forbidden",content:{text:{schema:{type:"string",example:"The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource."}}}},405:{description:"Method not allowed",content:{text:{schema:{type:"string",example:"The method used to request a scenario feedback was not GET"}}}},406:{description:"Unknown Scenario",content:{text:{schema:{type:"string",example:"The scenarioID which is given as parameter is not registered."}}}},407:{description:"Unknown State",content:{text:{schema:{type:"string",example:"The scenarioState value is unknown."}}}},500:{description:"Internal server error",content:{text:{schema:{type:"string",example:"The server has encountered a situation it does not know how to handle."}}}},501:{description:"Service unavailable",content:{text:{schema:{type:"string",example:"The server is not ready to handle the request."}}}}},servers:[{url:"https://{server-url}"}],method:"get",path:"/api/pushScenarioState/bpns/{bpns}/scenarioId/{scenarioId}/state/{state}",info:{title:"OSim API",description:"Osim API for requesting and receiving simulation results as well as for interactions related to scenario management.",version:"2.0.0"},postman:{name:"push Scenario State",description:{content:"The pushScenarioState enables distribution of a new scenario status and thus a notification of the procedure with the planned scenario",type:"text/plain"},url:{path:["api","pushScenarioState","bpns",":bpns","scenarioId",":scenarioId","state",":state"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"bpns"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"scenarioId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"state"}]},header:[{key:"Accept",value:"text"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/OSim Kit/Software Development View//osim-api",custom_edit_url:null},d=void 0,c={unversionedId:"kits/OSim Kit/Software Development View/push-scenario-state",id:"version-24.03/kits/OSim Kit/Software Development View/push-scenario-state",title:"pushScenarioState",description:"The pushScenarioState enables distribution of a new scenario status and thus a notification of the procedure with the planned scenario",source:"@site/docs-kits_versioned_docs/version-24.03/kits/OSim Kit/Software Development View/07-push-scenario-state.api.mdx",sourceDirName:"kits/OSim Kit/Software Development View",slug:"/kits/OSim Kit/Software Development View/push-scenario-state",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/OSim Kit/Software Development View/push-scenario-state",draft:!1,editUrl:null,tags:[],version:"24.03",sidebarPosition:7,frontMatter:{id:"push-scenario-state",title:"pushScenarioState",description:"The pushScenarioState enables distribution of a new scenario status and thus a notification of the procedure with the planned scenario",sidebar_label:"pushScenarioState",hide_title:!0,hide_table_of_contents:!0,api:{tags:["pushScenarioState"],operationId:"pushScenarioState",description:"The pushScenarioState enables distribution of a new scenario status and thus a notification of the procedure with the planned scenario",parameters:[{name:"bpns",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"BPNS00000007OTZ3"},{name:"scenarioId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"50737df3-4237-4652-b092-1ef8649f6ca6"},{name:"state",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",enum:["InRealization","Processed","Canceled"]},example:"InRealization"}],responses:{200:{description:"OK",content:{text:{schema:{type:"string",example:"The GET has succeeded. The pushScenarioState has been successfully processed in the backend system."}}}},400:{description:"Bad request",content:{text:{schema:{type:"string",example:"The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."}}}},401:{description:"Unauthorized",content:{text:{schema:{type:"string",example:'Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.'}}}},402:{description:"Unknown BPNS",content:{text:{schema:{type:"string",example:"The BPNS which is given as parameter is not registered in the data provider database as a direct partner."}}}},403:{description:"Forbidden",content:{text:{schema:{type:"string",example:"The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource."}}}},405:{description:"Method not allowed",content:{text:{schema:{type:"string",example:"The method used to request a scenario feedback was not GET"}}}},406:{description:"Unknown Scenario",content:{text:{schema:{type:"string",example:"The scenarioID which is given as parameter is not registered."}}}},407:{description:"Unknown State",content:{text:{schema:{type:"string",example:"The scenarioState value is unknown."}}}},500:{description:"Internal server error",content:{text:{schema:{type:"string",example:"The server has encountered a situation it does not know how to handle."}}}},501:{description:"Service unavailable",content:{text:{schema:{type:"string",example:"The server is not ready to handle the request."}}}}},servers:[{url:"https://{server-url}"}],method:"get",path:"/api/pushScenarioState/bpns/{bpns}/scenarioId/{scenarioId}/state/{state}",info:{title:"OSim API",description:"Osim API for requesting and receiving simulation results as well as for interactions related to scenario management.",version:"2.0.0"},postman:{name:"push Scenario State",description:{content:"The pushScenarioState enables distribution of a new scenario status and thus a notification of the procedure with the planned scenario",type:"text/plain"},url:{path:["api","pushScenarioState","bpns",":bpns","scenarioId",":scenarioId","state",":state"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"bpns"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"scenarioId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"state"}]},header:[{key:"Accept",value:"text"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/OSim Kit/Software Development View//osim-api",custom_edit_url:null},sidebar:"kits",previous:{title:"receiveScenarioFeedback",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/OSim Kit/Software Development View/receive-scenario-feedback"},next:{title:"PCF Exchange KIT",permalink:"/eclipse-tractusx.github.io/docs-kits/category/pcf-exchange-kit"}},u={},h=[{value:"pushScenarioState",id:"pushscenariostate",level:2}],k={toc:h};function y(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"pushscenariostate"},"pushScenarioState"),(0,n.kt)("p",null,"The pushScenarioState enables distribution of a new scenario status and thus a notification of the procedure with the planned scenario"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"bpns",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"BPNS00000007OTZ3"},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"scenarioId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"50737df3-4237-4652-b092-1ef8649f6ca6"},mdxType:"ParamsItem"}),(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"state",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",enum:["InRealization","Processed","Canceled"]},example:"InRealization"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(i.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"text",value:"text",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"))))))))))),(0,n.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Bad request")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"text",value:"text",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"))))))))))),(0,n.kt)(p.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unauthorized")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"text",value:"text",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"))))))))))),(0,n.kt)(p.Z,{label:"402",value:"402",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unknown BPNS")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"text",value:"text",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"))))))))))),(0,n.kt)(p.Z,{label:"403",value:"403",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Forbidden")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"text",value:"text",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"))))))))))),(0,n.kt)(p.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Method not allowed")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"text",value:"text",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"))))))))))),(0,n.kt)(p.Z,{label:"406",value:"406",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unknown Scenario")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"text",value:"text",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"))))))))))),(0,n.kt)(p.Z,{label:"407",value:"407",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Unknown State")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"text",value:"text",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"))))))))))),(0,n.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Internal server error")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"text",value:"text",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"))))))))))),(0,n.kt)(p.Z,{label:"501",value:"501",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Service unavailable")),(0,n.kt)("div",null,(0,n.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"text",value:"text",mdxType:"TabItem"},(0,n.kt)(o.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string"))))))))))))))}y.isMDXComponent=!0}}]);