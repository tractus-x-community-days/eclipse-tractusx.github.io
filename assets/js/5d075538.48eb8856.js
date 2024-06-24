"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[58495],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},93713:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={id:"architecture",title:"Architecture",description:"Behaviour Twin KIT"},o=void 0,s={unversionedId:"kits/behaviour-twin-kit/use-cases/hi/adoption-view/architecture",id:"kits/behaviour-twin-kit/use-cases/hi/adoption-view/architecture",title:"Architecture",description:"Behaviour Twin KIT",source:"@site/docs-kits/kits/behaviour-twin-kit/use-cases/hi/adoption-view/architecture.md",sourceDirName:"kits/behaviour-twin-kit/use-cases/hi/adoption-view",slug:"/kits/behaviour-twin-kit/use-cases/hi/adoption-view/architecture",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/behaviour-twin-kit/use-cases/hi/adoption-view/architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture",description:"Behaviour Twin KIT"},sidebar:"kits",previous:{title:"Introduction",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/behaviour-twin-kit/use-cases/hi/adoption-view/introduction"},next:{title:"Terminology",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/behaviour-twin-kit/use-cases/hi/adoption-view/terminology"}},l={},c=[{value:"BASIC ARCHITECTURE",id:"basic-architecture",level:2},{value:"OVERVIEW",id:"overview",level:3},{value:"ROLES",id:"roles",level:3},{value:"DETAILED ARCHITECTURE",id:"detailed-architecture",level:2},{value:"BUSINESS PROCESS",id:"business-process",level:3},{value:"BUILDING BLOCK COMPONENTS",id:"building-block-components",level:3},{value:"USE-CASE-SPECIFIC COMPONENTS",id:"use-case-specific-components",level:4},{value:"KNOWLEDGE AGENT COMPONENTS AND CATENA-X CORE SERVICES",id:"knowledge-agent-components-and-catena-x-core-services",level:4}],p=(d="BR",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const u={toc:c};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{style:{display:"block"}},(0,r.kt)("div",{style:{display:"inline-block",verticalAlign:"top"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Behaviour Twin KIT -- Health Indicator banner",src:a(75751).Z,width:"51",height:"42"}))),(0,r.kt)("div",{style:{display:"inline-block",fontSize:17,color:"rgb(255,166,1)",marginLeft:7,verticalAlign:"top",paddingTop:6}},"Behaviour Twin KIT -- Health Indicator")),(0,r.kt)("h2",{id:"basic-architecture"},"BASIC ARCHITECTURE"),(0,r.kt)("h3",{id:"overview"},"OVERVIEW"),(0,r.kt)("p",null,"A data provider (likely an OEM; can, but does not have to, share the data) wants to calculate health indicators of its component (e.g. a vehicle). It may use a Dashboard or some other App to consume the results. Usage data is collected continuously with the consent of the data owners. The usage history and all dependent components that can provide health values are known on the data provider's side. The data provider itself doesn't even have to know which components can provide health services/values. Its registered suppliers provide that information in their catalogs which are synchronized periodically. The data provider only must bind the usage data to the knowledge graph."),(0,r.kt)("p",null,"This approach is not limited only to OEMs and vehicles. Any system that provides usage data can utilize this approach, like tools/machines, production lines, building facilities, vending machines, computers, roads and so on."),(0,r.kt)("p",null,"It is also possible that a third party is consuming the HI values. In this case, it must have access to the data provider's and the calculation provider's graph assets. The skill itself would be the same."),(0,r.kt)("h3",{id:"roles"},"ROLES"),(0,r.kt)("p",null,"Each participant in the Health Indicator (HI) Behaviour Twin use case applies to one or more of the following roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HI consumer")," (result requester)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"skill provider")," (OEM, provider of the use case logic)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data provider")," (OEM, provider of usage data)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HI service provider")," (a component supplier, e.g. for gearboxes)")),(0,r.kt)("p",null,"One common case is that the data provider is also the HI consumer and skill provider. Calculation services may also be located at the data provider."),(0,r.kt)("h2",{id:"detailed-architecture"},"DETAILED ARCHITECTURE"),(0,r.kt)("h3",{id:"business-process"},"BUSINESS PROCESS"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"For better readability, it is assumed on this page that the ",(0,r.kt)("strong",{parentName:"em"},"data provider")," is always an ",(0,r.kt)("strong",{parentName:"em"},"OEM"),"/vehicle manufacturer.")),(0,r.kt)("p",null,"The skill is initially executed at the OEM. There it may be registered as an asset or used ad hoc. If the consumer is also the skill provider, it is his free choice which way to go. In the following description, the skill is registered."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"business-process",src:a(57210).Z,width:"718",height:"598"})),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Register skill asset (0.1) and sync federated catalog (0.2):")," ",(0,r.kt)("br",null)," The skill is registered as an asset at the OEM's EDC connector. The federated catalogs are synchronized periodically. As a result, the OEM can resolve HI calculation function assets that are located at the supplier.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Invoke HI skill:")," ",(0,r.kt)("br",null)," The consumer invokes the skill by calling the agents API at its own EDC connector (ad hoc or as predefined asset). There are three parameters that must be set:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"vehicle ID")," (VIN)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"component type")," (type of component for which the HI values should be calculated)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"result type")," (for HI, the result type may always be ",(0,r.kt)("inlineCode",{parentName:"li"},"HealthIndicationResult"),". Note: The exact same skill could be used to calculate Remaining useful Life values by using result type ",(0,r.kt)("inlineCode",{parentName:"li"},"RemainingUsefulLifeResult"),".)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resolve HI calculation function assets by result type HealthIndicatorResut:")," ",(0,r.kt)("br",null)," The Knowledge Agent resolves all calculation functions by the given result type ",(0,r.kt)("inlineCode",{parentName:"p"},"HealthIndicationResult"),". These can be located at different suppliers and is independent of the vehicle ID and the component of interest.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resolve load data assets of required type for arguments of resolved HI calculation functions:")," ",(0,r.kt)("br",null)," The Knowledge Agent resolves all usage data assets (for load data), that are required as arguments by the resolved calculation functions, by load data type.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resolve vehicle part of interest, supplier and actual HI calculation function for this part:")," ",(0,r.kt)("br",null)," At the data provider, the Knowledge Agent resolves the vehicle, its component of interest, the related supplier and the actual usage data.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fetch load data:")," ",(0,r.kt)("br",null)," The actual usage data (parameters for the HI calculation functions) are fetched from the data provider's bound data source. They are translated into graph representation by a provisioning agent (data binding agent).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Transfer load data and deploy sub-skill:")," ",(0,r.kt)("br",null)," The fetched data and a sub-skill (logic for calling the HI calculation service) are transferred to the HI calculation service provider's Knowledge Agent via EDC connectors.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Call service and fetch HI result:")," ",(0,r.kt)("br",null)," The HI calculation service (calculation function) is called. The data (parameters) are translated into the format the service requires. This is automatically done by an remoting agent (service binding agent), which is statically configured by service bindings. The result of the service then is translated back into graph representation by the remoting agent.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return HI result:")," ",(0,r.kt)("br",null)," The result is transferred to the OEM via EDC connectors."))),(0,r.kt)("p",null,"To have a common understanding of how to interpret and translate elements in the graph, common ontologies and taxonomies must be used. These are also needed for the interpretation of skills and sub-skills as there is e.g. inheritance in ontologies which must be known by the Knowledge Agent to resolve relations."),(0,r.kt)("h3",{id:"building-block-components"},"BUILDING BLOCK COMPONENTS"),(0,r.kt)("h4",{id:"use-case-specific-components"},"USE-CASE-SPECIFIC COMPONENTS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subsystem"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HI Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"This component is the app that is hosted at the ",(0,r.kt)("em",{parentName:"td"},"consumer")," and provides the end user interface.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Usage Data"),(0,r.kt)("td",{parentName:"tr",align:null},"A data source at the ",(0,r.kt)("em",{parentName:"td"},"data provider")," that provides usage data that are required for HI calculation services. ",(0,r.kt)(p,{mdxType:"BR"})," It can be accessed by the Knowledge Agent via data bindings.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HI Service"),(0,r.kt)("td",{parentName:"tr",align:null},"A calculation service at the ",(0,r.kt)("em",{parentName:"td"},"Supplier"),". It accepts a load spectrum as parameter, calculates the health indicator result values and returns them.")))),(0,r.kt)("h4",{id:"knowledge-agent-components-and-catena-x-core-services"},"KNOWLEDGE AGENT COMPONENTS AND CATENA-X CORE SERVICES"),(0,r.kt)("p",null,"For non-use-case-specific components, refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../../adoption-view/architecture#building-block-components"},"general Architecture section")," in the general adoption view."))}h.isMDXComponent=!0},57210:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/business-process.drawio-92970bbe913d2c74f799e618296d48af.svg"},75751:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/behaviour-twin-hi-kit-icon-mini-a446e6db3dca63644e32156c46622065.svg"}}]);