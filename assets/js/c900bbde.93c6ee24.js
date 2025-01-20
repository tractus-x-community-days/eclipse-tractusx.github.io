"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[3073],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68211:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={id:"architecture",title:"Architecture",description:"Behaviour Twin KIT"},o=void 0,s={unversionedId:"kits/behaviour-twin-kit/use-cases/rul/adoption-view/architecture",id:"version-24.12/kits/behaviour-twin-kit/use-cases/rul/adoption-view/architecture",title:"Architecture",description:"Behaviour Twin KIT",source:"@site/docs-kits_versioned_docs/version-24.12/kits/behaviour-twin-kit/use-cases/rul/adoption-view/architecture.md",sourceDirName:"kits/behaviour-twin-kit/use-cases/rul/adoption-view",slug:"/kits/behaviour-twin-kit/use-cases/rul/adoption-view/architecture",permalink:"/docs-kits/kits/behaviour-twin-kit/use-cases/rul/adoption-view/architecture",draft:!1,tags:[],version:"24.12",frontMatter:{id:"architecture",title:"Architecture",description:"Behaviour Twin KIT"},sidebar:"kits",previous:{title:"Introduction",permalink:"/docs-kits/kits/behaviour-twin-kit/use-cases/rul/adoption-view/introduction"},next:{title:"Terminology",permalink:"/docs-kits/kits/behaviour-twin-kit/use-cases/rul/adoption-view/terminology"}},l={},c=[{value:"BASIC ARCHITECTURE",id:"basic-architecture",level:2},{value:"OVERVIEW",id:"overview",level:3},{value:"ROLES",id:"roles",level:3},{value:"DETAILED ARCHITECTURE",id:"detailed-architecture",level:2},{value:"BUSINESS PROCESS",id:"business-process",level:3},{value:"BUILDING BLOCK COMPONENTS",id:"building-block-components",level:3},{value:"USE-CASE-SPECIFIC COMPONENTS",id:"use-case-specific-components",level:4},{value:"KNOWLEDGE AGENT COMPONENTS AND CATENA-X CORE SERVICES",id:"knowledge-agent-components-and-catena-x-core-services",level:4}],p=(u="BR",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const d={toc:c};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{style:{display:"block"}},(0,r.kt)("div",{style:{display:"inline-block",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Behaviour Twin KIT -- Remaining useful Life banner",src:a(250).Z,width:"50",height:"42"}))),(0,r.kt)("div",{style:{display:"inline-block",fontSize:17,color:"rgb(255,166,1)",marginLeft:7,verticalAlign:"top",paddingTop:6}},"Behaviour Twin KIT -- Remaining useful Life")),(0,r.kt)("h2",{id:"basic-architecture"},"BASIC ARCHITECTURE"),(0,r.kt)("h3",{id:"overview"},"OVERVIEW"),(0,r.kt)("p",null,"An external consumer wants to know the remaining useful life of its component (e.g. a vehicle). It uses a RuL Consuming App (e.g. with a web interface) for this. At the data provider (likely an OEM), usage data is collected continuously with the consent and on behalf of the consumer. The usage history and all dependent components that can provide RuL values are known on the data provider's side. The data provider itself doesn't even have to know which components can provide RuL services/values. Its registed suppliers provide that information in their catalogs which are synchronized periodically. The data provider only must bind the usage data to the knowledge graph."),(0,r.kt)("p",null,"This approach is not limited only to OEMs and vehicles. Any system that provides usage data can utilize this approach, like tools/machines, production lines, building facilities, vending machines, computers, roads and so on."),(0,r.kt)("h3",{id:"roles"},"ROLES"),(0,r.kt)("p",null,"Each participant in the Remaining useful Life (RuL) Behaviour Twin use case applies to one or more of the following roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RuL consumer")," (result requester)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"skill provider")," (which is also the RuL consumer, provider of the use case logic)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data provider")," (OEM, provider of usage data)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"RuL service provider")," (a component supplier, e.g. for gearboxes)")),(0,r.kt)("p",null,"One of the special cases would be that the data provider is also the RuL consumer and/or RuL service provider and/or skill provider."),(0,r.kt)("h2",{id:"detailed-architecture"},"DETAILED ARCHITECTURE"),(0,r.kt)("h3",{id:"business-process"},"BUSINESS PROCESS"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For better readability, it is assumed on this page that the ",(0,r.kt)("strong",{parentName:"em"},"data provider")," is always an ",(0,r.kt)("strong",{parentName:"em"},"OEM"),"/vehicle manufacturer.")),(0,r.kt)("p",null,"The first addressee of a RuL skill must be the OEM since it has access to its suppliers who can provide RuL values."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"business-process",src:a(92324).Z,width:"718",height:"599"})),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"sync federated catalog:")," ",(0,r.kt)("br",null)," The federated catalogs are synchronized periodically. As a result, the OEM can resolve RuL prognosis function assets that are located at the supplier.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Invoke RuL skill:")," ",(0,r.kt)("br",null)," The consumer invokes the skill by calling the agents API at its own EDC connector (ad hoc or as predefined asset). The OEM's EDC connector address must be known. Resolving this address is up to the consumer. The vehicle ID (VIN) is set as parameter for the skill.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Delegate sub-skill:")," ",(0,r.kt)("br",null)," The skill is delegated to the OEM via EDC connectors.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resolve vehicle part of interest:")," ",(0,r.kt)("br",null)," The Knowledge Agent resolves the vehicle part for which the RuL value should be calculated.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resolve load data assets:")," ",(0,r.kt)("br",null)," The Knowledge Agent resolves the usage data asset for the vehicle part of interest.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resolve RuL prognosis function assets:")," ",(0,r.kt)("br",null)," The Knowledge Agent resolves all prognosis function assets from the federated catalog with type ",(0,r.kt)("inlineCode",{parentName:"p"},"RemainingUsefulLife")," and the correct input type of load spectra. This type is infered by the usage data asset.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fetch load data:")," ",(0,r.kt)("br",null)," The data (parameters for the RuL prognosis functions) are fetched from the data provider's bound data source. They are translated into graph representation by a provisioning agent (data binding agent).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Transfer load data and deploy sub-skill:")," ",(0,r.kt)("br",null)," The fetched data and a sub-skill (logic for calling the RuL calculation service) are transferred to the RuL calculation service provider's Knowledge Agent via EDC connectors.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call service and fetch RuL result:")," ",(0,r.kt)("br",null)," The RuL calculation service (prognosis function) is called. The data (parameters) are translated into the format the service requires. This is automatically done by an remoting agent (service binding agent), which is statically configured by service bindings. The result of the service then is translated back into graph representation by the remoting agent.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return RuL result:")," ",(0,r.kt)("br",null)," The result is transferred to the OEM via EDC connectors.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Delegate RuL result:")," ",(0,r.kt)("br",null)," The result is delegated to the consumer via EDC connectors."))),(0,r.kt)("p",null,"To have a common understanding of how to interpret and translate elements in the graph, common ontologies and taxonomies must be used. These are also needed for the interpretation of skills and sub-skills as there is e.g. inheritance in ontologies which must be known by the Knowledge Agent to resolve relations."),(0,r.kt)("h3",{id:"building-block-components"},"BUILDING BLOCK COMPONENTS"),(0,r.kt)("h4",{id:"use-case-specific-components"},"USE-CASE-SPECIFIC COMPONENTS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subsystem"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RuL Consuming App"),(0,r.kt)("td",{parentName:"tr",align:null},"This component is the app that is hosted at the ",(0,r.kt)("em",{parentName:"td"},"consumer")," and provides the end user interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Usage Data"),(0,r.kt)("td",{parentName:"tr",align:null},"A data source at the ",(0,r.kt)("em",{parentName:"td"},"data provider")," that provides usage data that are required for RuL prognosis services. ",(0,r.kt)(p,{mdxType:"BR"})," It can be accessed by the Knowledge Agent via data bindings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RuL Service"),(0,r.kt)("td",{parentName:"tr",align:null},"A calculation service at the ",(0,r.kt)("em",{parentName:"td"},"Supplier"),". It accepts load spectra as parameters, and calculates the Remaining useful Life result values and returns them.")))),(0,r.kt)("h4",{id:"knowledge-agent-components-and-catena-x-core-services"},"KNOWLEDGE AGENT COMPONENTS AND CATENA-X CORE SERVICES"),(0,r.kt)("p",null,"For non-use-case-specific components, refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../../adoption-view/architecture#building-block-components"},"general Architecture section")," in the general adoption view."))}h.isMDXComponent=!0},92324:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/business-process.drawio-ad1112bda61476a516c66a46fb94664c.svg"},250:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/behaviour-twin-rul-kit-icon-mini-284c453a1e4edf574a034868b618d468.svg"}}]);