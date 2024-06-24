"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[86030],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),k=r,u=p["".concat(s,".").concat(k)]||p[k]||m[k]||i;return a?n.createElement(u,l(l({ref:t},c),{},{components:a})):n.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},9662:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={id:"architecture",title:"Architecture",description:"Behaviour Twin KIT"},l=void 0,o={unversionedId:"kits/behaviour-twin-kit/adoption-view/architecture",id:"kits/behaviour-twin-kit/adoption-view/architecture",title:"Architecture",description:"Behaviour Twin KIT",source:"@site/docs-kits/kits/behaviour-twin-kit/adoption-view/architecture.md",sourceDirName:"kits/behaviour-twin-kit/adoption-view",slug:"/kits/behaviour-twin-kit/adoption-view/architecture",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/behaviour-twin-kit/adoption-view/architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture",description:"Behaviour Twin KIT"},sidebar:"kits",previous:{title:"Introduction",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/behaviour-twin-kit/adoption-view/introduction"},next:{title:"Knowledge Agent",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/behaviour-twin-kit/adoption-view/knowledge-agent"}},s={},d=[{value:"BASIC ARCHITECTURE",id:"basic-architecture",level:2},{value:"OVERVIEW",id:"overview",level:3},{value:"ROLES",id:"roles",level:3},{value:"DETAILED ARCHITECTURE",id:"detailed-architecture",level:2},{value:"KNOWLEDGE AGENT",id:"knowledge-agent",level:3},{value:"BUSINESS PROCESS",id:"business-process",level:3},{value:"BUILDING BLOCK COMPONENTS",id:"building-block-components",level:3},{value:"USE-CASE-SPECIFIC COMPONENTS",id:"use-case-specific-components",level:4},{value:"KNOWLEDGE AGENT COMPONENTS",id:"knowledge-agent-components",level:4},{value:"CATENA-X CORE SERVICES (EXCEPT KNOWLEDGE AGENT COMPONENTS)",id:"catena-x-core-services-except-knowledge-agent-components",level:4},{value:"MANDATORY COMPONENTS",id:"mandatory-components",level:2},{value:"USE CASE TYPES",id:"use-case-types",level:2},{value:"COMBINATION OF ROLES",id:"combination-of-roles",level:3},{value:"SKILL PROVIDER IS NEUTRAL ENTITY",id:"skill-provider-is-neutral-entity",level:4},{value:"CONSUMER IS SKILL PROVIDER",id:"consumer-is-skill-provider",level:4},{value:"DATA PROVIDER IS CALCULATION SERVICE PROVIDER",id:"data-provider-is-calculation-service-provider",level:4},{value:"DATA PROVIDER IS SKILL PROVIDER",id:"data-provider-is-skill-provider",level:4},{value:"CALCULATION SERVICE PROVIDER IS SKILL PROVIDER",id:"calculation-service-provider-is-skill-provider",level:4},{value:"CONSUMER IS SKILL PROVIDER AND IS DATA PROVIDER",id:"consumer-is-skill-provider-and-is-data-provider",level:4},{value:"CONSUMER IS SKILL PROVIDER AND IS CALCULATION SERVICE PROVIDER",id:"consumer-is-skill-provider-and-is-calculation-service-provider",level:4},{value:"CONSUMER IS SKILL PROVIDER AND DATA PROVIDER IS CALCULATION SERVICE PROVIDER",id:"consumer-is-skill-provider-and-data-provider-is-calculation-service-provider",level:4},{value:"ALL ROLES COINCIDE",id:"all-roles-coincide",level:4},{value:"MORE COMBINATIONS",id:"more-combinations",level:4},{value:"SKILL EXECUTION",id:"skill-execution",level:3}],c=(p="BR",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var p;const m={toc:d};function k(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{style:{display:"block"}},(0,r.kt)("div",{style:{display:"inline-block",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Behaviour Twin KIT banner",src:a(3266).Z,width:"51",height:"42"}))),(0,r.kt)("div",{style:{display:"inline-block",fontSize:17,color:"rgb(255,166,1)",marginLeft:7,verticalAlign:"top",paddingTop:6}},"Behaviour Twin KIT")),(0,r.kt)("h2",{id:"basic-architecture"},"BASIC ARCHITECTURE"),(0,r.kt)("h3",{id:"overview"},"OVERVIEW"),(0,r.kt)("p",null,"A Behaviour Twin use case consists of data and calculation services. In addition, a logic is required, that defines how data and services must interact to produce the desired result. This logic is called ",(0,r.kt)("em",{parentName:"p"},"skill"),". It must be invoked directly or indirectly by the consumer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"logic",src:a(5488).Z,width:"373",height:"128"})),(0,r.kt)("p",null,"Data and services are federated over the dataspace:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dataspace",src:a(88481).Z,width:"641",height:"219"})),(0,r.kt)("p",null,"A use case may consist of multiple data sources and calculation services:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dataspace-complex",src:a(22481).Z,width:"641",height:"219"})),(0,r.kt)("h3",{id:"roles"},"ROLES"),(0,r.kt)("p",null,"Each participant in a Behaviour Twin use case applies to one or more of the following roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"consumer")," (result requester)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"skill provider")," (provider of the use case logic)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data provider")," (provider of usage data, likely an OEM)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"delegator")," (delegates data to calculation services, likely a supplier of a component that\nis assembled of sub-components which are providing calculation services)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"calculation service provider")," (likely a supplier of a part or component)")),(0,r.kt)("h2",{id:"detailed-architecture"},"DETAILED ARCHITECTURE"),(0,r.kt)("h3",{id:"knowledge-agent"},"KNOWLEDGE AGENT"),(0,r.kt)("p",null,"The architecture is based on so-called Knowledge Agents that consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Federated Catalog"),(0,r.kt)("li",{parentName:"ul"},"Matchmaking Agent"),(0,r.kt)("li",{parentName:"ul"},"Binding Agents (Provisioning Agent/Remoting Agent)"),(0,r.kt)("li",{parentName:"ul"},"Bindings (configurations of binding agents)")),(0,r.kt)("p",null,"The components are federated over all participants. All data (and services) are represented together as a federated knowledge graph. The processing logic for the agents is defined in so-called ",(0,r.kt)("em",{parentName:"p"},"skills"),". All communication is handled by EDC connectors."),(0,r.kt)("p",null,"A detailed view of how ",(0,r.kt)("em",{parentName:"p"},"Knowledge Agents")," and ",(0,r.kt)("em",{parentName:"p"},"skills")," work is given in the section ",(0,r.kt)("a",{parentName:"p",href:"./knowledge-agent"},"Knowledge Agent")," (which comes next to this section)."),(0,r.kt)("h3",{id:"business-process"},"BUSINESS PROCESS"),(0,r.kt)("p",null,"In Behaviour Twin use cases, the fist step into the federated logic is usually the data provider. There, dependencies of the targeted main-component (e.g. a vehicle) are known. Therefore, registering predefined skills at the data provider is a common option. Such skills then can be initiated by external partners as well as internally. As an alternative, skills can be hosted externally (at the consumer or a third party). In every case, especially if the skill is not located at the data provider, the skill must be written in a way that the relation between the usage data and the calculation services is resolved at the data provider or any other party, that has all the required information in its federated catalog (see ",(0,r.kt)("a",{parentName:"p",href:"./to-be-considered#data-sovereignty"},"To Be Considered"),")."),(0,r.kt)("p",null,"The following business process is only an example. Depending on how the skill is written, the process can vary."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"business-process",src:a(63952).Z,width:"718",height:"598"})),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Register skill asset (0.1) and sync federated catalog (0.2):")," ",(0,r.kt)("br",null)," The predefined skill is registered as an asset at the data provider's EDC connector. The federated catalogs are synchronized periodically.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Invoke skill asset:")," ",(0,r.kt)("br",null)," The consumer invokes the skill by calling the agents API at its own EDC connector. The partner's EDC connector address must be known. To resolve this address is up to the use case. A prognosis function result type and a component or vehicle ID (e.g. VIN) is set as parameter for the skill.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Request skill asset:")," ",(0,r.kt)("br",null)," The skill is invoked by requesting the skill asset at the data provider via EDC connectors.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resolve prognosis function assets by requested result type:")," ",(0,r.kt)("br",null)," The Knowledge Agent resolves all prognosis function assets from the federated catalog that matches the desired result type.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resolve prognosis data assets by function parameter types:")," ",(0,r.kt)("br",null)," The Knowledge Agent resolves all data assets by the parameter types of the previously matched prognosis function(s).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resolve actual usage data and service provider by component ID:")," ",(0,r.kt)("br",null)," The Knowledge Agent resolves the sub-component of interest, its supplier and the actual related data by the component's ID.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fetch data:")," ",(0,r.kt)("br",null)," The data (parameters for prognosis functions) are fetched from the data provider's bound data source. They are transferred into graph representation by a provisioning agent (data binding agent).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Transfer data and deploy sub-skill:")," ",(0,r.kt)("br",null)," The fetched data and a sub-skill (logic for calling the calculation service) are transferred to the calculation service provider's Knowledge Agent via EDC connectors.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call service and fetch result:")," ",(0,r.kt)("br",null)," The calculation service (prognosis function) is called. The data (parameters for the prognosis function) are translated into the format the service requires. This is automatically done by an remoting agent (service binding agent), which is statically configured by service bindings. The result of the service then is translated back into graph format by the remoting agent.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return result:")," ",(0,r.kt)("br",null)," The result is transferred to the invoker of the sub-skill (here, it is the data provider) via EDC connectors.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Delegate result:")," ",(0,r.kt)("br",null)," The result is delegated to the consumer via EDC connectors.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Get result:")," ",(0,r.kt)("br",null)," The result is delegated to the consumer's application."))),(0,r.kt)("p",null,"To have a common understanding of how to interpret and translate elements in the graph, common ontologies and taxonomies must be used. These are also needed for the interpretation of skills and sub-skills as there is e.g. inheritance in ontologies which must be known by the Knowledge Agent to resolve relations."),(0,r.kt)("h3",{id:"building-block-components"},"BUILDING BLOCK COMPONENTS"),(0,r.kt)("h4",{id:"use-case-specific-components"},"USE-CASE-SPECIFIC COMPONENTS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subsystem"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Consuming App"),(0,r.kt)("td",{parentName:"tr",align:null},"This component is the app that is hosted at the ",(0,r.kt)("em",{parentName:"td"},"consumer")," and provides the end user interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Usage Data"),(0,r.kt)("td",{parentName:"tr",align:null},"A data source at the ",(0,r.kt)("em",{parentName:"td"},"data provider")," that provides usage data that are required for prognosis services. ",(0,r.kt)(c,{mdxType:"BR"})," It can be accessed by the Knowledge Agent via data bindings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Calculation Service"),(0,r.kt)("td",{parentName:"tr",align:null},"A calculation service at the ",(0,r.kt)("em",{parentName:"td"},"service provider"),". It accepts input data from federated data sources, calculates the result values and returns them.")))),(0,r.kt)("h4",{id:"knowledge-agent-components"},"KNOWLEDGE AGENT COMPONENTS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subsystem"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Matchmaking Agent"),(0,r.kt)("td",{parentName:"tr",align:null},"This component supports SPARQL (skills/sub-skills) to traverse the federated data space as a large data structure. It interacts with the EDC connector. ",(0,r.kt)("br",null)," A ",(0,r.kt)("strong",{parentName:"td"},"provider's Matchmaking Agent")," will be activated by its EDC connector. Therefore, the EDC must offer a Graph Asset (variant of ordinary data assets in the related Catena-X standards). ",(0,r.kt)("br",null)," A ",(0,r.kt)("strong",{parentName:"td"},"consumer's Matchmaking Agent")," interacts with its EDC to negotiate and perform the transfer of sub-skills to other dataspace participants. ",(0,r.kt)("br",null)," The Matchmaking Agents are matching the (sub-)graphs and negotiate appropriated graph assets with the partner EDCs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Binding Agent"),(0,r.kt)("td",{parentName:"tr",align:null},"The Binding Agent is a restricted version of the Matchmaking Agent (subset of OWL/SPARQL, e.g., without federation) which is just focused on translating sub-skills of a particular business domain (Bill-Of-Material, Chemical Materials, Production Sites, etc.) into proper SQL- or REST based backend system calls. ",(0,r.kt)("br",null),"Binding agents for data bindings are called ",(0,r.kt)("strong",{parentName:"td"},"Provisioning Agent"),". ",(0,r.kt)("br",null),"Binding agents for service bindings are called ",(0,r.kt)("strong",{parentName:"td"},"Remoting Agent"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Binding"),(0,r.kt)("td",{parentName:"tr",align:null},"A Binding is part of the configuration of a Binding Agent. It defines the binding (translation form/into graph representation) for specific data/service instances.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ontology"),(0,r.kt)("td",{parentName:"tr",align:null},"The ontology is a formal representation of knowledge that captures concepts, relationships, and properties. It allows a shared understanding and reasoning about the respective domain. ",(0,r.kt)(c,{mdxType:"BR"})," It must be hosted in a way that all participants can access it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Skill/Sub-Skill"),(0,r.kt)("td",{parentName:"tr",align:null},"The Skill describes, what to do (which data have to be connected, transferred, processed ...).")))),(0,r.kt)("h4",{id:"catena-x-core-services-except-knowledge-agent-components"},"CATENA-X CORE SERVICES (EXCEPT KNOWLEDGE AGENT COMPONENTS)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subsystem"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EDC connector"),(0,r.kt)("td",{parentName:"tr",align:null},"The Connector of the Eclipse Dataspace Components (EDC) provides a framework for sovereign, inter-organizational data exchange. It implements the International Data Spaces standard (IDS) as well as relevant protocols associated with GAIA-X. The connector is designed in an extensible way in order to support alternative protocols and integrate in various ecosystems.")))),(0,r.kt)("h2",{id:"mandatory-components"},"MANDATORY COMPONENTS"),(0,r.kt)("p",null,"You always need access to your ",(0,r.kt)("strong",{parentName:"p"},"running connector (EDC) with knowledge agent components")," and\nthe (extensible) ",(0,r.kt)("strong",{parentName:"p"},"ontologies of Catena-X"),". In most cases, you can use them as they are.  "),(0,r.kt)("p",null,"Depending on your role, you need a combination of the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EDC connector + knowledge agent"),(0,r.kt)("li",{parentName:"ul"},"ontologies (semantic models)"),(0,r.kt)("li",{parentName:"ul"},"usage data"),(0,r.kt)("li",{parentName:"ul"},"calculation services"),(0,r.kt)("li",{parentName:"ul"},"matchmaking agent: mapping ontology to knowledge graph, integrated into KA-dataplane"),(0,r.kt)("li",{parentName:"ul"},"binding agents:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"provisioning agent: provide data"),(0,r.kt)("li",{parentName:"ul"},"remoting agent: bind service to graph")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:"center"},"service provider"),(0,r.kt)("th",{parentName:"tr",align:"center"},"delegator"),(0,r.kt)("th",{parentName:"tr",align:"center"},"data provider"),(0,r.kt)("th",{parentName:"tr",align:"center"},"consumer"),(0,r.kt)("th",{parentName:"tr",align:"center"},"skill provider"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EDC connector ",(0,r.kt)("br",null)," + agent plane / matchmaking agent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ontologies"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skill-access"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"usage data"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provisioning agent"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"calculation service"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remoting agent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"x"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h2",{id:"use-case-types"},"USE CASE TYPES"),(0,r.kt)("p",null,"Depending on how roles coincide and where skills are executed, the use case architecture, graph assets and skills must be adapted. Detailed information about how to write dedicated skills can be found in the ",(0,r.kt)("a",{parentName:"p",href:"../../knowledge-agents/operation-view/agent_edc"},"Agents KIT's Operation View"),"."),(0,r.kt)("h3",{id:"combination-of-roles"},"COMBINATION OF ROLES"),(0,r.kt)("p",null,"The use cases can be divided depending on which roles coincide. When writing a skill, you always have to keep in mind who has access to whose resources and how to write the skill correctly and safely."),(0,r.kt)("p",null,"The roles ",(0,r.kt)("em",{parentName:"p"},"data provider")," and ",(0,r.kt)("em",{parentName:"p"},"calculation service provider")," can occur more than once. There are many combinations of the roles possible, but the following ones are the more common ones."),(0,r.kt)("h4",{id:"skill-provider-is-neutral-entity"},"SKILL PROVIDER IS NEUTRAL ENTITY"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"combination skill provider is neutral entity",src:a(42920).Z,width:"689",height:"309"})),(0,r.kt)("p",null,"There may be reasons why the ",(0,r.kt)("em",{parentName:"p"},"skill provider")," is not the consumer, as well as not one of the other roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The skill provider invents new skills and offers them."),(0,r.kt)("li",{parentName:"ul"},"The skill provider is a trustee, it has knowledge over relations that others don't have.")),(0,r.kt)("h4",{id:"consumer-is-skill-provider"},"CONSUMER IS SKILL PROVIDER"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"combination consumer is skill provider.drawio",src:a(24652).Z,width:"603",height:"309"})),(0,r.kt)("p",null,"Often the consumer is also the skill provider. It knows what to ask for and how to process the data to get the desired results."),(0,r.kt)("h4",{id:"data-provider-is-calculation-service-provider"},"DATA PROVIDER IS CALCULATION SERVICE PROVIDER"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"combination data provider is service provider",src:a(98447).Z,width:"554",height:"309"})),(0,r.kt)("p",null,"If the ",(0,r.kt)("em",{parentName:"p"},"data provider")," is also the ",(0,r.kt)("em",{parentName:"p"},"calculation service provider"),", from the caller's point of view, it's like they're different entities that have full access to each other. The ",(0,r.kt)("em",{parentName:"p"},"skill provider")," is a neutral entity."),(0,r.kt)("h4",{id:"data-provider-is-skill-provider"},"DATA PROVIDER IS SKILL PROVIDER"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"combination data provider is skill provider",src:a(76137).Z,width:"602",height:"309"})),(0,r.kt)("p",null,"In some cases, the ",(0,r.kt)("em",{parentName:"p"},"data provider")," provides a skill that can process its data in a data sovereign way. Through this, it has the full control over how its data can be processed."),(0,r.kt)("h4",{id:"calculation-service-provider-is-skill-provider"},"CALCULATION SERVICE PROVIDER IS SKILL PROVIDER"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"combination service provider is skill provider",src:a(23871).Z,width:"555",height:"309"})),(0,r.kt)("p",null,"If the ",(0,r.kt)("em",{parentName:"p"},"calculation service provider")," provides a skill, from the caller's point of view, it's like a data asset that can be parameterized."),(0,r.kt)("h4",{id:"consumer-is-skill-provider-and-is-data-provider"},"CONSUMER IS SKILL PROVIDER AND IS DATA PROVIDER"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"combination consumer is skill and data provider",src:a(92971).Z,width:"481",height:"309"})),(0,r.kt)("p",null,"With this combination, a ",(0,r.kt)("em",{parentName:"p"},"consumer")," can utilize its own data in any way it wants to by using external calculation services."),(0,r.kt)("h4",{id:"consumer-is-skill-provider-and-is-calculation-service-provider"},"CONSUMER IS SKILL PROVIDER AND IS CALCULATION SERVICE PROVIDER"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"combination consumer is skill and service provider",src:a(55330).Z,width:"481",height:"309"})),(0,r.kt)("p",null,"With this combination, a ",(0,r.kt)("em",{parentName:"p"},"consumer")," can parameterize its own calculation service with data of partners in any way it wants to."),(0,r.kt)("h4",{id:"consumer-is-skill-provider-and-data-provider-is-calculation-service-provider"},"CONSUMER IS SKILL PROVIDER AND DATA PROVIDER IS CALCULATION SERVICE PROVIDER"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"combination consumer is skill provider and data provider is service provider",src:a(14290).Z,width:"414",height:"308"})),(0,r.kt)("p",null,"If the ",(0,r.kt)("em",{parentName:"p"},"data provider")," is also the ",(0,r.kt)("em",{parentName:"p"},"calculation service provider"),", from the caller's point of view, it's like they're different entities that have full access to each other. When using its own skill, the consumer has control over how the data is processed."),(0,r.kt)("h4",{id:"all-roles-coincide"},"ALL ROLES COINCIDE"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"combination all roles coincide",src:a(20061).Z,width:"312",height:"296"})),(0,r.kt)("p",null,"With this combination, a ",(0,r.kt)("em",{parentName:"p"},"consumer")," can utilize its own data in any way it wants to."),(0,r.kt)("h4",{id:"more-combinations"},"MORE COMBINATIONS"),(0,r.kt)("p",null,"All combinations above may be extended by additional, separate data and/or calculation service providers."),(0,r.kt)("h3",{id:"skill-execution"},"SKILL EXECUTION"),(0,r.kt)("p",null,"There are different options where and how the skill is executed initially:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"at consumer side or at provider side"),(0,r.kt)("li",{parentName:"ul"},"ad hoc or as a registered skill")),(0,r.kt)("p",null,"Allowed variants may be dependent on a ",(0,r.kt)("em",{parentName:"p"},"framework agreement"),"."),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"../../knowledge-agents/operation-view/agent_edc"},"Agents KIT's Operation View"),"."))}k.isMDXComponent=!0},63952:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/business-process.drawio-e6ceb275a093fe732e435a1845118b5b.svg"},20061:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/combination-all-roles-coincide.drawio-a8a0b44131f4b31c61d6c04aae4a9032.svg"},92971:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/combination-consumer-is-skill-and-data-provider.drawio-80537cf2120985b90278114fa058e3f1.svg"},55330:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/combination-consumer-is-skill-and-service-provider.drawio-40e56c0176c1cdf7a54f7f87bb6fd418.svg"},14290:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/combination-consumer-is-skill-provider-and-data-provider-is-service-provider.drawio-ad11bff3ecc7aab204742cd9df3de4a0.svg"},24652:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/combination-consumer-is-skill-provider.drawio-7badab1d39e9a6c9a75aaa80404f7163.svg"},98447:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/combination-data-provider-is-service-provider.drawio-bf43b09da58a36c7465f140d737e71ee.svg"},76137:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/combination-data-provider-is-skill-provider.drawio-2d4b46521d72f5aceaf2e7389a38cf2f.svg"},23871:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/combination-service-provider-is-skill-provider.drawio-831156432e2e2f5850ae61f9930fdfc7.svg"},42920:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/combination-skill-provider-is-neutral-entity.drawio-07064f63c6283a9a617ca47262637eda.svg"},22481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataspace-complex.drawio-dba2abc9e5582ee1f93becea35685cb3.svg"},88481:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dataspace.drawio-b23b3e0a7d772f8270643758914298da.svg"},5488:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/logic.drawio-2b5e73b5046d5f0406e4a7613a4f1b0e.svg"},3266:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/behaviour-twin-kit-icon-mini-60cb99261b60d4cf2c9a200a41301ee2.svg"}}]);