"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[57175],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={id:"dt-kit-interaction-patterns",title:"Interaction Patterns",description:"Digital Twin KIT - Interaction Patterns",sidebar_position:2},o=void 0,s={unversionedId:"kits/Digital Twin Kit/Software Development View/dt-kit-interaction-patterns",id:"version-24.05/kits/Digital Twin Kit/Software Development View/dt-kit-interaction-patterns",title:"Interaction Patterns",description:"Digital Twin KIT - Interaction Patterns",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Digital Twin Kit/Software Development View/page_interaction-patterns.md",sourceDirName:"kits/Digital Twin Kit/Software Development View",slug:"/kits/Digital Twin Kit/Software Development View/dt-kit-interaction-patterns",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Digital Twin Kit/Software Development View/dt-kit-interaction-patterns",draft:!1,tags:[],version:"24.05",sidebarPosition:2,frontMatter:{id:"dt-kit-interaction-patterns",title:"Interaction Patterns",description:"Digital Twin KIT - Interaction Patterns",sidebar_position:2},sidebar:"kits",previous:{title:"Developing with the DT KIT",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Digital Twin Kit/Software Development View/dt-kit-software-development-view"},next:{title:"Introduction",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Digital Twin Kit/Software Development View/API AAS Discovery/dotaas-part-2-http-rest-discovery-service-specification"}},l={},c=[{value:"Interaction Patterns for Distributed Digital Twins",id:"interaction-patterns-for-distributed-digital-twins",level:2},{value:"1. Fetching a supplier&#39;s Twin",id:"1-fetching-a-suppliers-twin",level:3},{value:"2. Adding a new Twin for a given Asset",id:"2-adding-a-new-twin-for-a-given-asset",level:3},{value:"2.1. Discovery by Convention",id:"21-discovery-by-convention",level:4},{value:"2.2. Discovery by Registration",id:"22-discovery-by-registration",level:4},{value:"3. Updating an existing Submodel",id:"3-updating-an-existing-submodel",level:3},{value:"3.1. Access Control at the connector",id:"31-access-control-at-the-connector",level:4},{value:"3.2. Access Control in the backend",id:"32-access-control-in-the-backend",level:4},{value:"4. Updating an existing Twin",id:"4-updating-an-existing-twin",level:3},{value:"Notice",id:"notice",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interaction-patterns-for-distributed-digital-twins"},"Interaction Patterns for Distributed Digital Twins"),(0,i.kt)("p",null,"The Catena-X standard CX-0002 (Digital Twins in Catena-X) defines a subset of the AAS-standard that is relevant for\nCatena-X. However, it is concerned only with the network-facing APIs which in some cases may have to be augmented to\ncover use-case requirements. For example, resolving ",(0,i.kt)("inlineCode",{parentName:"p"},"specificAssetIds")," against a Shell's ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is standardized since\nConsumers rely on a well-defined API here. However, how the Provider ingests the relevant data into the DTR usually\nisn't\nrelevant for cross-dataspace interoperability and thus, the call isn't standardized."),(0,i.kt)("p",null,"While the assumptions are explicitly listed, all patterns assume that both partners involved are properly onboarded to\nthe Catena-X dataspace and thus have their connectors registered with the EDC Discovery Service like so:"),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    participant PAdmin as Provider Setup Admin\n    participant EDCD as EDC Discovery\n    participant CAdmin as Consumer Setup Admin\nautonumber\n    critical: setup of registration\n        PAdmin ->> EDCD: POST /api/administration/connectors <br/> with link between BPN and EDC endpoint\n        CAdmin ->> EDCD: POST /api/administration/connectors <br/> with link between BPN and EDC endpoint\n    end"}),(0,i.kt)("p",null,"This happens usually when onboarding a company to the network."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: While this Kit explicitly uses the APIs of the EDC (Eclipse Dataspace Connector), provisioning data with\nany other implementation of\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://docs.internationaldataspaces.org/ids-knowledgebase/v/dataspace-protocol/overview/readme"},"Dataspace Protocol"),"\n(DSP) is also permitted. The flows to integrate DTRs and Submodel endpoints will differ with each implementation.")),(0,i.kt)("h3",{id:"1-fetching-a-suppliers-twin"},"1. Fetching a supplier's Twin"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,i.kt)("th",{parentName:"tr",align:null},"Participants"),(0,i.kt)("th",{parentName:"tr",align:null},"Assumptions"),(0,i.kt)("th",{parentName:"tr",align:null},"Links to Use-Cases"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"The supplier has data required by the OEM. For instance a Product Passport."),(0,i.kt)("td",{parentName:"tr",align:null},"- Data Provider (Supplier) ",(0,i.kt)("br",null)," - Data Consumer (OEM)"),(0,i.kt)("td",{parentName:"tr",align:null},"1. Consumer knows Supplier's BPN ",(0,i.kt)("br",null)," 2. Consumer knows an id of the asset"),(0,i.kt)("td",{parentName:"tr",align:null},"- ",(0,i.kt)("a",{parentName:"td",href:"/eclipse-tractusx.github.io/docs-kits/kits/Industry%20Core%20Kit/Software%20Development%20View/Digital%20Twins%20Development%20View%20Industry%20Core%20Kit"},"Industry Core")," ",(0,i.kt)("br",null)," - ",(0,i.kt)("a",{parentName:"td",href:"../../PCF%20Exchange%20Kit"},"Product Carbon Footprint Kit"))))),(0,i.kt)("p",null,"The most common integration pattern with Digital Twins aims to offer asset-related data in expectable ways along the\nsupply chain. It defines conventions that allow locating data in the network. This most basic scenario assumes that the\nsupplier offers data about an asset that was sold to an OEM further up the chain. Supplier and OEM have agreed on\ncontractual terms on which to share data about said asset. Possible examples may include Bills of Material, carbon\nfootprints, technical specifications or regulatory documents. An OEM - or really any interested and privileged third\nparty - can assume that a part's supplier offers a Digital Twin if the data-exchange is based on the Digital Twin Kit\n(and by proxy CX-0002). The data provider deploys at least:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Digital Twin Registry (DTR)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"registered in a DSP-conformant connector offering the DTR to the Dataspace."),(0,i.kt)("li",{parentName:"ul"},"registers Digital Twins (AssetAdministrationShell-descriptors, or AAS-descriptor in AAS-vocabulary) with assetIds\nincluding at least one that's known at both, the supplier and customer."))),(0,i.kt)("li",{parentName:"ul"},"Submodels",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"registered in a DSP-conformant connector to the Dataspace."),(0,i.kt)("li",{parentName:"ul"},"registered to the correct AAS-descriptor in the DTR."),(0,i.kt)("li",{parentName:"ul"},"Serving payloads from the ",(0,i.kt)("inlineCode",{parentName:"li"},"/$value")," endpoint, in accordance with their semantic definition.")))),(0,i.kt)("p",null,"The Data Provider's setup is explained here:"),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    participant Act as Provider Setup Admin\n    participant PEDC as Provider EDC Control Plane\n    participant DTR as Digital Twin Registry\n    participant SM as Submodel Server\nautonumber\n    critical: Data Provisioning\n        Act ->> PEDC: POST /api/management/v3/assets with baseUrl and typization for AAS Registry\n        Act ->> PEDC: POST /api/management/v3/assets with baseUrl and typization for AAS Submodel(s)\n        Act ->> DTR: POST /shell-descriptors for all shell descriptors. Including submodel-descriptors\n        Act ->> SM: configure or populate server\n    end"}),(0,i.kt)("p",null,"The Data Consumer's only responsibility is to deploy a connector, negotiate for access and terms of usage and finally\nfetch the data from the right offers. The flow is specified here:"),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    participant Con as Data Consumer\n    participant CEDC as Consumer EDC <br/>Control Plane\n    participant PEDC as Provider EDC <br/>Control Plane\n    participant DTR as Digital Twin Registry\n    participant SM as Submodel Server\n    participant EDCD as EDC Discovery\n\nautonumber\n    critical: Consumer-Side discovery\n        Con->>EDCD: POST /api/administration/connectors/discovery with provider-bpn\n        EDCD--\x3e>Con: EDC-endpoint\n        Con->>CEDC: POST /catalog/request with <br/>filter looking for DTR\n        CEDC--\x3e>PEDC: forward\n        PEDC--\x3e>CEDC: return\n        CEDC--\x3e>Con: dcat:Dataset for DTR\n        Con->>PEDC: negotiate for DTR and retrieve token\n        PEDC--\x3e>Con: access token\n        Con->>DTR: GET {{provider-data.plane}}/lookup/shells?assetIds=xyz&assetIds=abc\n        DTR--\x3e>Con: aas-id\n        Con->>DTR: GET {{provider-data.plane}}/shell-descriptors/{{aas-id}} <br/> with aas-id encoded base64url\n        DTR--\x3e>Con: shell-descriptor including the  <br/> submodel's Dataset-ID (subprotocolBody)\n     end\n        Con->>CEDC: POST /catalog/request with <br/>filter looking for Dataset-ID\n        CEDC--\x3e>PEDC: forward\n        PEDC--\x3e>CEDC: return\n        CEDC--\x3e>Con: Dataset for submodel(-bundle)\n        Con->>PEDC: negotiate for Dataset and retrieve token\n        PEDC--\x3e>Con: access token\n        Con->>SM: GET {{submodel-descriptor/href}}/$value\n        SM--\x3e>Con: data"}),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," is a Bill of\nMaterial (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.single_level_bom_as_built/2.0.0/gen/SingleLevelBomAsBuilt.json"},"like this one"),")\nit returns a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"childItems")," that hold for each subcomponent the information that's assumed to be present\nfor the start of this very scenario (see Assumptions 1, 2). Thus, BoM and the DT deployment in combination\nenable recursive browsing of the parts-tree, collecting data along the way - given the data owners grant access."),(0,i.kt)("h3",{id:"2-adding-a-new-twin-for-a-given-asset"},"2. Adding a new Twin for a given Asset"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,i.kt)("th",{parentName:"tr",align:null},"Participants"),(0,i.kt)("th",{parentName:"tr",align:null},"Assumptions"),(0,i.kt)("th",{parentName:"tr",align:null},"Links to Use-Cases"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A party (who is not the supplier of an part) publishes data about a previously uncovered aspect of the asset."),(0,i.kt)("td",{parentName:"tr",align:null},"- Data Provider (Supplier) ",(0,i.kt)("br",null)," - Data Provider (Third Party)"),(0,i.kt)("td",{parentName:"tr",align:null},"1. Third Party knows an id of the asset"),(0,i.kt)("td",{parentName:"tr",align:null},"- PURIS (coming soon)")))),(0,i.kt)("p",null,"Let's suppose, a car has reached it end-of-life. The object is sold to a dismantler who disassembles the vehicle and\nwants\nto publish that exact information. As the Digital Twin is owned by the OEM of the vehicle, it will not be accessible,\neven less writable, to everyone in the network. Thus, the dismantler must publish the data themselves, by deploying:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Digital Twin Registry (DTR)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"registered in a DSP-conformant connector offering the DTR to the Dataspace."),(0,i.kt)("li",{parentName:"ul"},"registers Digital Twins (AAS-descriptors in AAS vocabulary) with assetIds including at least one that's\nequivalent to one attached to the OEM's twin."))),(0,i.kt)("li",{parentName:"ul"},"Submodel (like ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/4889d8482fc6b233eb0f56f3ac94c5ea4004bc05/io.catenax.certificate_of_destruction/1.0.1/gen/CertificateOfDestruction.json"},(0,i.kt)("em",{parentName:"a"},"Certificate of\nDestruction")),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"registered in a DSP-conformant connector to the Dataspace."),(0,i.kt)("li",{parentName:"ul"},"registered to the correct AAS-descriptor in the DTR."),(0,i.kt)("li",{parentName:"ul"},"Serving arbitrary but well-specified json via ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," requests from the ",(0,i.kt)("inlineCode",{parentName:"li"},"/$value")," endpoint.")))),(0,i.kt)("h4",{id:"21-discovery-by-convention"},"2.1. Discovery by Convention"),(0,i.kt)("p",null,"In certain use-cases, participants can agree on conventions where a specific Submodel may be expected.\nThis information can only be provided by the buyer of a certain part who creates a new Twin for the part with identical\n",(0,i.kt)("inlineCode",{parentName:"p"},"assetIds"),". Such conventions about how to locate certain types of Submodels should be explicitly mentioned in the\nStandards and Kits for a use-case as the default hypothesis is always that a supplier holds the relevant data."),(0,i.kt)("p",null,"For discovery of digital twins for parts, it might be useful to standardize the specific asset IDs the supplier should\nattach to its part twin. Via these ",(0,i.kt)("inlineCode",{parentName:"p"},"specificAssetIds")," the corresponding digital twin of the part can be found by the\nOEM. If the ",(0,i.kt)("inlineCode",{parentName:"p"},"globalAssetId")," is known to the OEM it is not necessary to defined additional specific asset IDs. Both serve\nsimilar purposes and are defined in the ",(0,i.kt)("a",{parentName:"p",href:"https://aas-core-works.github.io/aas-core-meta/v3/AssetInformation.html#properties"},"AAS-Specification"),"."),(0,i.kt)("p",null,"If multiple parties publish data on the same asset, each follows the Data Provisioning flow\nfrom ",(0,i.kt)("a",{parentName:"p",href:"#1-fetching-a-suppliers-twin"},"the default case")),(0,i.kt)("h4",{id:"22-discovery-by-registration"},"2.2. Discovery by Registration"),(0,i.kt)("p",null,"If no heuristic is precise enough to expect a Submodel's location, the dismantler must signal in\na ",(0,i.kt)("a",{parentName:"p",href:"/eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Operation%20View%20Digital%20Twin%20Kit"},"BPN-Discovery-Service"),"\nthat they indeed have data on said vehicle. This is the registration process:"),(0,i.kt)("mermaid",{value:'sequenceDiagram\n    participant Act as Provider Setup Admin\n    participant DFin as Discovery Finder\n    participant BPND as BPN Discovery Service\nautonumber\n    critical: Extended registration\n        Act ->> DFin: POST /api/administration/connectors/discovery with IdType-to-BPN-Discover-URL-Mapping\n        Act ->> BPND: POST /api/administration/connectors/bpnDiscovery with assetId, idType ("van", "cxId" etcetc)\n    end'}),(0,i.kt)("p",null,"It is followed by the regular Provisioning Process from ",(0,i.kt)("a",{parentName:"p",href:"#1-fetching-a-suppliers-twin"},"the default case"),". That way, any\ninterested Data Consumer can not only find data with the part's manufacturer but\nalso all third parties returned by the BPN Discovery Service who have registered there and interacted with the part\nsometime during its lifecycle. The Consumer's workflow to retrieve the registered data is (like the registration)\nextended\nas this scenario does not make the assumption that the Consumer knows the BPN of the data they're interested in. This is\nhealed by querying the previously populated discovery services to retrieve the BPN."),(0,i.kt)("mermaid",{value:"sequenceDiagram\n    participant DFin as Discovery Finder\n    participant BPND as BPN Discovery Service\n    participant Con as Data Consumer\nautonumber\ncritical: discovery from data consumer side\n        Con ->> DFin: POST /api/administration/connectors/discovery/search with body containing relevant idTypes\n        DFin --\x3e> Con: bpn-discovery-endpoints\n        loop forEach BPN Discovery instance\n            Con ->> BPND: POST /api/administration/connectors/bpnDiscovery/search with body containing assetId\n            BPND --\x3e>Con: provider-bpn\n        end\n    end"}),(0,i.kt)("p",null,"After that, ",(0,i.kt)("a",{parentName:"p",href:"#1-fetching-a-suppliers-twin"},"the default consumption process")," is executed."),(0,i.kt)("h3",{id:"3-updating-an-existing-submodel"},"3. Updating an existing Submodel"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,i.kt)("th",{parentName:"tr",align:null},"Participants"),(0,i.kt)("th",{parentName:"tr",align:null},"Assumptions"),(0,i.kt)("th",{parentName:"tr",align:null},"Links to Use-Cases"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A party (who is not the supplier of an part) updates data already covered by an existing Submodel."),(0,i.kt)("td",{parentName:"tr",align:null},"- Data Provider (Supplier) ",(0,i.kt)("br",null)," - Data Provider (Third Party)"),(0,i.kt)("td",{parentName:"tr",align:null},"1. Third Party knows an id of the asset"),(0,i.kt)("td",{parentName:"tr",align:null},"- DCM-AAS (coming soon)")))),(0,i.kt)("p",null,'There may be a scenario where a Supplier deploys a Digital Twin that holds data that will have to be updated during the\nlifecycle. A potential use-case would be the update of a particular vehicle\'s BoM - for instance if the engine is\nreplaced.\nThis could be represented in a Submodel "SingleLevelBomAsMaintained".\nCurrently, updating remote Submodels is a hypothetical example but, with the right tools, a pattern that can be executed\nin the Catena-X dataspace. Again, the Supplier registers the twin:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Digital Twin Registry (DTR)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"registered in a DSP-conformant connector offering the DTR to the Dataspace."),(0,i.kt)("li",{parentName:"ul"},"registers Digital Twins (AAS-descriptors in AAS vocabulary) with specificAssetIds including at least one that's\nequivalent to one attached to the OEM's twin."))),(0,i.kt)("li",{parentName:"ul"},"Submodel (like ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/blob/4889d8482fc6b233eb0f56f3ac94c5ea4004bc05/io.catenax.certificate_of_destruction/1.0.1/gen/CertificateOfDestruction.json"},(0,i.kt)("em",{parentName:"a"},"Certificate of\nDestruction")),")",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"registered in a DSP-conformant connector to the Dataspace."),(0,i.kt)("li",{parentName:"ul"},"registered to the correct AAS-descriptor in the DTR."),(0,i.kt)("li",{parentName:"ul"},"Serving arbitrary but well-specified json via GET-requests from the ",(0,i.kt)("inlineCode",{parentName:"li"},"/$value")," endpoint."),(0,i.kt)("li",{parentName:"ul"},"Allowing Changes to data via the PUT ",(0,i.kt)("inlineCode",{parentName:"li"},"submodel/submodel-elements/{{idShortPath}}")," endpoint.")))),(0,i.kt)("p",null,"So, different from the ",(0,i.kt)("a",{parentName:"p",href:"#1-fetching-a-suppliers-twin"},"default case"),", the Data Provider invites network participants\nto provide data themselves. The PUT and POST APIs of the AAS specification are not mandatory in Catena-X. However, they\ncan be deployed and exposed to cover scenarios like this one. Steps 19 and 20 are then replaced by this:"),(0,i.kt)("mermaid",{value:"\nsequenceDiagram\n    participant Con as Data Consumer\n    participant SM as Submodel Server\nautonumber\ncritical: discovery from data consumer side\n        Con->>SM: PUT {{submodel-descriptor/href}}/submodel-elements/idShortPath/$value\n        SM--\x3e>Con: HTTP 204\nend\n"}),(0,i.kt)("p",null,"Serving the last call is tricky. It requires a very differentiated access control concept on the Supplier's side,\ndifferentiating WHO is allowed to write into WHAT part of the Submodel. Several approaches to implementation can be\ntaken:"),(0,i.kt)("h4",{id:"31-access-control-at-the-connector"},"3.1. Access Control at the connector"),(0,i.kt)("p",null,"Connectors can prevent certain network participants from accessing the Submodel in the Supplier's backend. The EDC for\nexample can intercept or rewrite components of an HTTP-request like headers, methods/verbs, bodies. Only extending a\ndata offer after preliminary checks is another option, implemented for instance in the EDC's Access Policy checks. A\ncombination of the two approaches can lead to fairly complete access control but may require fine-grained data-offers\nin the provider's catalog (i.e. very restricted EDC-Assets with a lot of proxy-parameters set ",(0,i.kt)("inlineCode",{parentName:"p"},'"false"'),")."),(0,i.kt)("h4",{id:"32-access-control-in-the-backend"},"3.2. Access Control in the backend"),(0,i.kt)("p",null,"Depending on the backend's capabilities to fine-tune access control, it may be more beneficial to let the backend (like\na Submodel Repository) decide if data will certain API-operations will be allowed. In this example, it would be possible\nto let a user update certain properties in a Submodel but only read others. This differentiation can't be made by the\nconnector as a connector will usually be oblivious to the data model and API structure of backend systems like a DTR or\nSubmodel Repository."),(0,i.kt)("h3",{id:"4-updating-an-existing-twin"},"4. Updating an existing Twin"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Scenario"),(0,i.kt)("th",{parentName:"tr",align:null},"Participants"),(0,i.kt)("th",{parentName:"tr",align:null},"Assumptions"),(0,i.kt)("th",{parentName:"tr",align:null},"Links to Use-Cases"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A new customer wants their customerPartId as specificAssetId on the twin."),(0,i.kt)("td",{parentName:"tr",align:null},"- Data Provider (Supplier) ",(0,i.kt)("br",null)," - Data Provider (Third Party)"),(0,i.kt)("td",{parentName:"tr",align:null},"1. Third Party knows an id of the asset"),(0,i.kt)("td",{parentName:"tr",align:null},"None yet")))),(0,i.kt)("p",null,"An update to a twin is any change to the AAS-descriptor via the APIs of the AssetAdministrationShellServiceSpecification\nor DiscoveryServiceSpecification of AAS Part 2. While the relevant write-APIs are not mandatory in Catena-X, Data\nProviders\ncan implement and expose them to the dataspace. This obviously bears risks: not only can improper implementation and\nconfiguration lead to unauthorized access to data like in the simple read access (\nsee ",(0,i.kt)("a",{parentName:"p",href:"#1-fetching-a-suppliers-twin"},"scenario 1"),", ",(0,i.kt)("a",{parentName:"p",href:"#2-adding-a-new-twin-for-a-given-asset"},"scenario 2"),").\nIn this case, data could be manipulated and overwritten endangering the processes that build on it. That's why\nfine-grained access control for components like the DTR is a fundamental requirement to operate."),(0,i.kt)("p",null,"The same holds true for use-case-defined APIs that trigger automatic updates/creation of a remote Digital Twin."),(0,i.kt)("h2",{id:"notice"},"Notice"),(0,i.kt)("p",null,"This work is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Contributors of the Eclipse Foundation"),(0,i.kt)("li",{parentName:"ul"},"Source URL: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc"},"https://github.com/eclipse-tractusx/tractusx-edc"))))}d.isMDXComponent=!0}}]);