"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[77521],{57604:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>f,toc:()=>S});var s=t(87462),r=(t(67294),t(3905)),o=t(26389),n=t(94891),a=(t(75190),t(47507)),c=t(24310),l=t(63303),p=(t(75035),t(85162));const d={id:"get-description",title:"Returns the self-describing information of a network resource (ServiceDescription)",description:"Returns the self-describing information of a network resource (ServiceDescription)",sidebar_label:"Returns the self-describing information of a network resource (ServiceDescription)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Description API"],operationId:"GetDescription",responses:{200:{description:"Requested Description",content:{"application/json":{schema:{type:"object",properties:{profiles:{minItems:1,type:"array",items:{type:"string",enum:["AssetAdministrationShellServiceSpecification/V3.0","AssetAdministrationShellServiceSpecification/V3.0-MinimalProfile","SubmodelServiceSpecification/V3.0","SubmodelServiceSpecification/V3.0-ValueProfile","SubmodelServiceSpecification/V3.0-MinimalProfile","AasxFileServerServiceSpecification/V3.0","RegistryServiceSpecification/V3.0","RegistryServiceSpecification/V3.0- AssetAdministrationShellRegistry","RegistryServiceSpecification/V3.0-SubmodelRegistry","RepositoryServiceSpecification/V3.0","RepositoryServiceSpecification/V3.0-MinimalProfile","AssetAdministrationShellRepositoryServiceSpecification/V3.0","AssetAdministrationShellRepositoryServiceSpecification/V3.0-MinimalProfile","SubmodelRepositoryServiceSpecification/V3.0","SubmodelRepositoryServiceSpecification/V3.0-MinimalProfile","RegistryAndDiscoveryServiceSpecification/V3.0"]}}},description:"The Description object enables servers to present their capabilities to the clients, in particular which profiles they implement. At least one defined profile is required. Additional, proprietary attributes might be included. Nevertheless, the server must not expect that a regular client understands them.",example:'{\n  "profiles": [\n    "RepositoryServiceSpecification/V3.0-MinimalProfile",\n    "RegistryServiceSpecification/V3.0"\n  ]\n}'}}}},default:{description:"Default error handling for unmentioned status codes",content:{"application/json":{schema:{type:"object",properties:{messages:{type:"array",items:{type:"object",properties:{code:{maxLength:32,minLength:1,type:"string"},correlationId:{maxLength:128,minLength:1,type:"string"},messageType:{type:"string",enum:["Undefined","Info","Warning","Error","Exception"]},text:{type:"string"},timestamp:{pattern:"^-?(([1-9][0-9][0-9][0-9]+)|(0[0-9][0-9][0-9]))-((0[1-9])|(1[0-2]))-((0[1-9])|([12][0-9])|(3[01]))T(((([01][0-9])|(2[0-3])):[0-5][0-9]:([0-5][0-9])(.[0-9]+)?)|24:00:00(.0+)?)(Z|+00:00|-00:00)$",type:"string"}}}}}}}}}},"x-semanticIds":["https://admin-shell.io/aas/API/Descriptor/GetDescription/3/0"],description:"Returns the self-describing information of a network resource (ServiceDescription)",method:"get",path:"/description",servers:[{url:"{protocol}://{host_name}:{port}/api/{version_prefix}",variables:{protocol:{description:"Allows access through http and https (recommended)",default:"https",enum:["http","https"]},host_name:{description:"Hostname of server hosting the api",default:"admin-shell.io"},port:{description:"80 is default for http, 443 for https",default:"443",enum:["80","443"]},version_prefix:{default:"v3.0",enum:["v3.0"]}}}],info:{title:"DotAAS Part 2 | HTTP/REST | Discovery Service Specification",description:"The entire Full Profile of the Discovery Service Specification as part of Details of the Asset Administration Shell Part 2. Publisher: Industrial Digital Twin Association (IDTA) 2023",contact:{name:"Industrial Digital Twin Association (IDTA)",email:"info@idtwin.org"},license:{name:"CC BY 4.0",url:"https://creativecommons.org/licenses/by/4.0/"},version:"V3.0_SSP-001"},postman:{name:"Returns the self-describing information of a network resource (ServiceDescription)",description:{type:"text/plain"},url:{path:["description"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/_versioned_docs/version-3.1.0/kits/Digital Twin Kit/Software Development View/API Specs/AAS Discovery//dotaas-part-2-http-rest-discovery-service-specification",custom_edit_url:null},m=void 0,f={unversionedId:"kits/Digital Twin Kit/Software Development View/API AAS Discovery/get-description",id:"version-24.03/kits/Digital Twin Kit/Software Development View/API AAS Discovery/get-description",title:"Returns the self-describing information of a network resource (ServiceDescription)",description:"Returns the self-describing information of a network resource (ServiceDescription)",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Digital Twin Kit/Software Development View/API AAS Discovery/get-description.api.mdx",sourceDirName:"kits/Digital Twin Kit/Software Development View/API AAS Discovery",slug:"/kits/Digital Twin Kit/Software Development View/API AAS Discovery/get-description",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Digital Twin Kit/Software Development View/API AAS Discovery/get-description",draft:!1,editUrl:null,tags:[],version:"24.03",frontMatter:{id:"get-description",title:"Returns the self-describing information of a network resource (ServiceDescription)",description:"Returns the self-describing information of a network resource (ServiceDescription)",sidebar_label:"Returns the self-describing information of a network resource (ServiceDescription)",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Description API"],operationId:"GetDescription",responses:{200:{description:"Requested Description",content:{"application/json":{schema:{type:"object",properties:{profiles:{minItems:1,type:"array",items:{type:"string",enum:["AssetAdministrationShellServiceSpecification/V3.0","AssetAdministrationShellServiceSpecification/V3.0-MinimalProfile","SubmodelServiceSpecification/V3.0","SubmodelServiceSpecification/V3.0-ValueProfile","SubmodelServiceSpecification/V3.0-MinimalProfile","AasxFileServerServiceSpecification/V3.0","RegistryServiceSpecification/V3.0","RegistryServiceSpecification/V3.0- AssetAdministrationShellRegistry","RegistryServiceSpecification/V3.0-SubmodelRegistry","RepositoryServiceSpecification/V3.0","RepositoryServiceSpecification/V3.0-MinimalProfile","AssetAdministrationShellRepositoryServiceSpecification/V3.0","AssetAdministrationShellRepositoryServiceSpecification/V3.0-MinimalProfile","SubmodelRepositoryServiceSpecification/V3.0","SubmodelRepositoryServiceSpecification/V3.0-MinimalProfile","RegistryAndDiscoveryServiceSpecification/V3.0"]}}},description:"The Description object enables servers to present their capabilities to the clients, in particular which profiles they implement. At least one defined profile is required. Additional, proprietary attributes might be included. Nevertheless, the server must not expect that a regular client understands them.",example:'{\n  "profiles": [\n    "RepositoryServiceSpecification/V3.0-MinimalProfile",\n    "RegistryServiceSpecification/V3.0"\n  ]\n}'}}}},default:{description:"Default error handling for unmentioned status codes",content:{"application/json":{schema:{type:"object",properties:{messages:{type:"array",items:{type:"object",properties:{code:{maxLength:32,minLength:1,type:"string"},correlationId:{maxLength:128,minLength:1,type:"string"},messageType:{type:"string",enum:["Undefined","Info","Warning","Error","Exception"]},text:{type:"string"},timestamp:{pattern:"^-?(([1-9][0-9][0-9][0-9]+)|(0[0-9][0-9][0-9]))-((0[1-9])|(1[0-2]))-((0[1-9])|([12][0-9])|(3[01]))T(((([01][0-9])|(2[0-3])):[0-5][0-9]:([0-5][0-9])(\\.[0-9]+)?)|24:00:00(\\.0+)?)(Z|\\+00:00|-00:00)$",type:"string"}}}}}}}}}},"x-semanticIds":["https://admin-shell.io/aas/API/Descriptor/GetDescription/3/0"],description:"Returns the self-describing information of a network resource (ServiceDescription)",method:"get",path:"/description",servers:[{url:"{protocol}://{host_name}:{port}/api/{version_prefix}",variables:{protocol:{description:"Allows access through http and https (recommended)",default:"https",enum:["http","https"]},host_name:{description:"Hostname of server hosting the api",default:"admin-shell.io"},port:{description:"80 is default for http, 443 for https",default:"443",enum:["80","443"]},version_prefix:{default:"v3.0",enum:["v3.0"]}}}],info:{title:"DotAAS Part 2 | HTTP/REST | Discovery Service Specification",description:"The entire Full Profile of the Discovery Service Specification as part of Details of the Asset Administration Shell Part 2. Publisher: Industrial Digital Twin Association (IDTA) 2023",contact:{name:"Industrial Digital Twin Association (IDTA)",email:"info@idtwin.org"},license:{name:"CC BY 4.0",url:"https://creativecommons.org/licenses/by/4.0/"},version:"V3.0_SSP-001"},postman:{name:"Returns the self-describing information of a network resource (ServiceDescription)",description:{type:"text/plain"},url:{path:["description"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/_versioned_docs/version-3.1.0/kits/Digital Twin Kit/Software Development View/API Specs/AAS Discovery//dotaas-part-2-http-rest-discovery-service-specification",custom_edit_url:null},sidebar:"kits",previous:{title:"Returns a list of specific Asset identifiers based on an Asset Administration Shell id to edit discoverable content",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Digital Twin Kit/Software Development View/API AAS Discovery/get-all-asset-links-by-id"},next:{title:"Introduction",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Digital Twin Kit/Software Development View/API AAS Registry/dotaas-part-2-http-rest-registry-service-specification"}},u={},S=[{value:"Returns the self-describing information of a network resource (ServiceDescription)",id:"returns-the-self-describing-information-of-a-network-resource-servicedescription",level:2}],v={toc:S};function h(e){let{components:i,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},v,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"returns-the-self-describing-information-of-a-network-resource-servicedescription"},"Returns the self-describing information of a network resource (ServiceDescription)"),(0,r.kt)("p",null,"Returns the self-describing information of a network resource (ServiceDescription)"),(0,r.kt)("div",null,(0,r.kt)(o.Z,{mdxType:"ApiTabs"},(0,r.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Requested Description")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"profiles",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:"**Possible values:** [`AssetAdministrationShellServiceSpecification/V3.0`, `AssetAdministrationShellServiceSpecification/V3.0-MinimalProfile`, `SubmodelServiceSpecification/V3.0`, `SubmodelServiceSpecification/V3.0-ValueProfile`, `SubmodelServiceSpecification/V3.0-MinimalProfile`, `AasxFileServerServiceSpecification/V3.0`, `RegistryServiceSpecification/V3.0`, `RegistryServiceSpecification/V3.0- AssetAdministrationShellRegistry`, `RegistryServiceSpecification/V3.0-SubmodelRegistry`, `RepositoryServiceSpecification/V3.0`, `RepositoryServiceSpecification/V3.0-MinimalProfile`, `AssetAdministrationShellRepositoryServiceSpecification/V3.0`, `AssetAdministrationShellRepositoryServiceSpecification/V3.0-MinimalProfile`, `SubmodelRepositoryServiceSpecification/V3.0`, `SubmodelRepositoryServiceSpecification/V3.0-MinimalProfile`, `RegistryAndDiscoveryServiceSpecification/V3.0`], `>= 1`",defaultValue:void 0,mdxType:"SchemaItem"}))))))))),(0,r.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Default error handling for unmentioned status codes")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(l.Z,{mdxType:"SchemaTabs"},(0,r.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"messages"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(c.Z,{collapsible:!1,name:"code",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"correlationId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** `non-empty` and `<= 128 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"messageType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`Undefined`, `Info`, `Warning`, `Error`, `Exception`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(c.Z,{collapsible:!1,name:"timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** Value must match regular expression `^-?(([1-9][0-9][0-9][0-9]+)|(0[0-9][0-9][0-9]))-((0[1-9])|(1[0-2]))-((0[1-9])|([12][0-9])|(3[01]))T(((([01][0-9])|(2[0-3])):[0-5][0-9]:([0-5][0-9])(\\.[0-9]+)?)|24:00:00(\\.0+)?)(Z|\\+00:00|-00:00)$`",defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(a.Z,{responseExample:'{\n  "messages": [\n    {\n      "code": "string",\n      "correlationId": "string",\n      "messageType": "Undefined",\n      "text": "string",\n      "timestamp": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);