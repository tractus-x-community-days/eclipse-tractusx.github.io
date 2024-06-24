"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[70950],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),d=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return a?i.createElement(m,s(s({ref:t},c),{},{components:a})):i.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var d=2;d<r;d++)s[d]=a[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},18401:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const r={sidebar_position:1,title:"High-Level Architecture"},s=void 0,o={unversionedId:"kits/knowledge-agents/development-view/architecture",id:"version-24.05/kits/knowledge-agents/development-view/architecture",title:"High-Level Architecture",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-24.05/kits/knowledge-agents/development-view/architecture.md",sourceDirName:"kits/knowledge-agents/development-view",slug:"/kits/knowledge-agents/development-view/architecture",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/knowledge-agents/development-view/architecture",draft:!1,tags:[],version:"24.05",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"High-Level Architecture"},sidebar:"kits",previous:{title:"Adoption View",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/knowledge-agents/adoption-view/intro"},next:{title:"Detailed Architecture",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/knowledge-agents/development-view/Arc42"}},l={},d=[{value:"Agents KIT",id:"agents-kit",level:2},{value:"Compute-To-Data",id:"compute-to-data",level:2},{value:"App",id:"app",level:3},{value:"Skill",id:"skill",level:3},{value:"Semantic Model",id:"semantic-model",level:3},{value:"Matchmaking Agent",id:"matchmaking-agent",level:3},{value:"Graph Assets",id:"graph-assets",level:3},{value:"Binding Agent",id:"binding-agent",level:3},{value:"Federated Catalogue",id:"federated-catalogue",level:3},{value:"Abilities",id:"abilities",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Agents Kit Banner",src:a(3389).Z,width:"286",height:"244"})),(0,n.kt)("h2",{id:"agents-kit"},"Agents KIT"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Architecture for federated queries over the whole data space.")),(0,n.kt)("p",null,"For more information see"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Our ",(0,n.kt)("a",{parentName:"li",href:"../adoption-view/intro"},"Adoption")," guideline"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"Arc42"},"ARC42")," documentation"),(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)("a",{parentName:"li",href:"api"},"API")," specification"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"modelling"},"Ontology")," modelling guide"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"modules"},"Layers & Modules")," Architecture"),(0,n.kt)("li",{parentName:"ul"},"Our ",(0,n.kt)("a",{parentName:"li",href:"reference"},"Reference Implementation")),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"../operation-view/deployment"},"Deployment")," guide")),(0,n.kt)("h2",{id:"compute-to-data"},"Compute-To-Data"),(0,n.kt)("p",null,"This KIT describes a semantically-driven and state-of-the-art compute-to-data architecture for automotive use cases (and beyond), the so-called Knowledge Agents (KA) approach."),(0,n.kt)("p",null,"It builds on well-established standards and best practices around ",(0,n.kt)("a",{parentName:"p",href:"https://gaia-x.eu"},"GAIA-X"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/"},"W3C")," and ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Big_data"},"Big Data")," in order to empower powerful queries to the data space (Skills). Those Skills can be used to answer business questions directly (comparable to a search engine) or they can be embedded in apps to include query results (Knowledge) into workflows with more advanced visualization etc."),(0,n.kt)("p",null,"To reach this aim, full semantic integration, search and query with focus on relations between entities and data sovereignty is focused. In contrast to a simple file-based data transfer, this shifts the responsibility for the"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"access,"),(0,n.kt)("li",{parentName:"ol"},"authorization to the data and"),(0,n.kt)("li",{parentName:"ol"},"processing of the data")),(0,n.kt)("p",null,"from the application development to the provider and hence ultimately, the actual owner of the data."),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:a(43634).Z},(0,n.kt)("img",{alt:"Architecture Interaction",src:a(49755).Z,width:"261",height:"300"}))),(0,n.kt)("h3",{id:"app"},"App"),(0,n.kt)("p",null,"The App in the figure serves the consumer by gathering, analyzing, and presenting the knowledge about business questions such as: How much of a certain material can be found in a specific vehicle series? It is assumed that the data which is needed to answer such questions is distributed over the network and cannot be found at one central place."),(0,n.kt)("h3",{id:"skill"},"Skill"),(0,n.kt)("p",null,"To help collecting the data over the network, Skills are introduced. A Skill is a pre-formulated query (or: procedure) with limited scope such as: List all vehicle series that contain ",(0,n.kt)("inlineCode",{parentName:"p"},"material")," produced in ",(0,n.kt)("inlineCode",{parentName:"p"},"location"),". The Skill is used to access all federated data instances via the tenant (=authentication and authorization scope) of the caller."),(0,n.kt)("p",null,"A skill receives input in the form of a data set (we use a JSON notation in the following example):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'[{"material":{"type":"literal","value":\u201cRubber\u201d},"location":{"type":"literal","value":\u201cPhuket\u201d}}]\n')),(0,n.kt)("p",null,"which drives the control flow, the filtering and aggregating  of the information, and finally producing an output data set, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csharp"},'[\n  {"series":{"type":"uri","value":"OEM#4711"},"oem":{"type":"uri","value":"OEM"},"weightKg":{"type":"literal","datatype":"http://www.w3.org/2001/XMLSchema#float",\u201d3.2\u201d}},\n  {"series":{"type":"uri","value":"EMO:0815"},"oem":{"type":"uri","value":"EMO"},"weightKg":{"type":"literal","datatype":"http://www.w3.org/2001/XMLSchema#float",\u201d1.4\u201d}}\n]\n')),(0,n.kt)("h3",{id:"semantic-model"},"Semantic Model"),(0,n.kt)("p",null,"In order to obtain the correct results in a federated system, all the participants of the skill execution need to have common understanding (Semantic Model, in KA this is mechanized by a Federated Catalogue based on the Web Ontology Language  OWL) over the vocabulary (Data Model, in KA this is represented generically by sets, i.e., graphs of Resource Description Framework RDF triples). A guideline for how this vocabulary should be formulated can be found ",(0,n.kt)("a",{parentName:"p",href:"modelling"},"here"),"."),(0,n.kt)("p",null,"Relying on these conventions, a Skill executor can calculate which Providers are able to contribute or yield the necessary information in which sequence such that the resulting distributed operation will be performant."),(0,n.kt)("h3",{id:"matchmaking-agent"},"Matchmaking Agent"),(0,n.kt)("p",null,"This coordinating job is taken over by the Matchmaking Agent, an endpoint that is mandatory for any KA-enabled Dataspace Participant. For that purpose, the Matchmaking Agent supports the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/SPARQL"},"SPARQL")," specification with the effect that the dataspace can be traversed as one large data structure. Hereby, the Consumer-Side Matchmaking Agent will \u2013 as driven by the builtin federation features of SPARQL - interact with the KA-enabled EDC in order to negotiate and perform the transfer of Sub-Skills (=SPARQL Contexts) to other Dataspace Participants. See the ",(0,n.kt)("a",{parentName:"p",href:"api"},"Knowledge Agents SPARQL API")," for detailed information."),(0,n.kt)("p",null,"In turn, upon successful transfer of the Sub-Skill, the Provider-Side Matchmaking Agent(s) will be activated by their respective EDC. The precondition for this activation is that the Provider EDC first needs to offer a so-called Graph Asset."),(0,n.kt)("h3",{id:"graph-assets"},"Graph Assets"),(0,n.kt)("p",null,"are a variant of ordinary Data Assets in the Catena-X EDC Standard; while Data Assets typically refer to an actual backend system (e.g., an Blob in an Object Store, an AAS server, a REST endpoint), Graph Assets introduce another intermediary instance, the so-called Binding Agent."),(0,n.kt)("h3",{id:"binding-agent"},"Binding Agent"),(0,n.kt)("p",null,"Simply put, the ",(0,n.kt)("strong",{parentName:"p"},"Binding Agent")," is a restricted version of the Matchmaking Agent (which speaks a profile, i.e., a subset of SPARQL specification, see the ANNEX) which is just focused on translating Sub-Skills of a particular business domain (Bill-Of-Material, Chemical Materials, Production Sites, etc.) into proper SQL- or REST based backend system calls. This scheme has several advantages:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For different types of backend systems, business domains and usage scenarios, different Binding Agent implementations (Caching Graph Store, SQL Binding Engine, REST Binding Engine) can be switched-in without affecting both the shared dataspace/semantic model and the mostly immutable backend systems/data models as well."),(0,n.kt)("li",{parentName:"ul"},"Access to the backend systems can be optimized by JIT compilation technology."),(0,n.kt)("li",{parentName:"ul"},"The same backend system/data model can be used in various Graph Assets/Use Cases and different roles and policies."),(0,n.kt)("li",{parentName:"ul"},"Access to the backend system is decoupled by another layer of security, such that additional types of policies (role-based row-level and attribute-level access) can be implemented in the interplay of Matchmaking and Binding Agents."),(0,n.kt)("li",{parentName:"ul"},"There is a clear distinction between advanced graph operations (including type inference and transitive/recursive traversal also via EDC) on the Matchmaking Level and efficient, but more restricted and secure graph operations on the Binding/Data Level.")),(0,n.kt)("h3",{id:"federated-catalogue"},"Federated Catalogue"),(0,n.kt)("p",null,'As mentioned earlier, essential for the realization of the idea is the creation, governance and discoverability of a well-defined semantic catalogue, which forms together with the data a Federated Knowledge Graph. In this context, the definition of a Knowledge Graph (KG) as "a multi relational graph composed of entities and relations which are regarded as nodes and different types of edges, respectively" is extended with aspect of federation. This KIT defines a Federated KG as a KG where entities and relations reside physically distributed over multiple systems connected through a network and a common query language. This KIT defines semantic metadata as structural information to scope the entities and relations of the KG based on ontological principles. This is the agreement, necessary for the successful interplay of the distributed parties within the data space.'),(0,n.kt)("h2",{id:"abilities"},"Abilities"),(0,n.kt)("p",null,"To summarize, the Knowledge Agent standard shall achieve the following abilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ability to define well-formed and composable computations/scripts (skills) which operate over various assets of various business partners."),(0,n.kt)("li",{parentName:"ul"},"the ability to invoke and dynamically distribute these (sub-)skills over the relevant partners/connectors using an extensible agent interface."),(0,n.kt)("li",{parentName:"ul"},'the ability to safely provide data and service assets via appropriate agent implementations which "bind" the skill to the backend execution engines (rather than mapping data).'),(0,n.kt)("li",{parentName:"ul"},"the ability for an agent/connector/business partner to decide",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"whether to hide particular data and computations inside a sub-skill"),(0,n.kt)("li",{parentName:"ul"},"whether to delegate/federate particular computations/sub-skills to other agents"),(0,n.kt)("li",{parentName:"ul"},"whether to migrate or clone an agent/asset from a partner"))),(0,n.kt)("li",{parentName:"ul"},"the ability to describe data and service assets as well as appropriate federation policies in the IDS vocabulary in order to allow for a dynamic matchmaking of skills and agents."),(0,n.kt)("li",{parentName:"ul"},"the ability to define domain/use case-based ontologies which form the vocabulary used in the skill definitions."),(0,n.kt)("li",{parentName:"ul"},"the ability to visualize and develop the ontologies and skills in appropriate SDKs and User Experience components.")),(0,n.kt)("sub",null,(0,n.kt)("sup",null,"(C) 2021,2024 Contributors to the Eclipse Foundation. SPDX-License-Identifier: CC-BY-4.0")))}p.isMDXComponent=!0},43634:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/files/architecture-03ec60ef504f0b408090bbe662f196a4.png"},3389:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/AgentsKit-Icon-d790626da1d452d4369dd7cf814b7dfe.png"},49755:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/architecture_small-d8dd3dc4d15be0c57e742ee73d14658c.png"}}]);