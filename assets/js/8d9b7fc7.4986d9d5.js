"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[77704,19916],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return a?i.createElement(m,s(s({ref:t},d),{},{components:a})):i.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},20644:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=a(87462),n=(a(67294),a(3905)),r=a(95607);const s={id:"Architecture View Traceability Kit",title:"Architecture View",description:"Traceability Kit",sidebar_position:2},o=void 0,l={unversionedId:"kits/Traceability Kit/Architecture View Traceability Kit",id:"version-24.03/kits/Traceability Kit/Architecture View Traceability Kit",title:"Architecture View",description:"Traceability Kit",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Traceability Kit/page_architecture-view.mdx",sourceDirName:"kits/Traceability Kit",slug:"/kits/Traceability Kit/Architecture View Traceability Kit",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Traceability Kit/Architecture View Traceability Kit",draft:!1,tags:[],version:"24.03",sidebarPosition:2,frontMatter:{id:"Architecture View Traceability Kit",title:"Architecture View",description:"Traceability Kit",sidebar_position:2},sidebar:"kits",previous:{title:"Business View",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Traceability Kit/Business View Traceability Kit"},next:{title:"Operation View",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Traceability Kit/Operation View Traceability Kit"}},c={},d=[{value:"Scope and Context",id:"scope-and-context",level:2},{value:"Building Block View",id:"building-block-view",level:2},{value:"Traceability Components",id:"traceability-components",level:3},{value:"Catena-X Core Services",id:"catena-x-core-services",level:3},{value:"Data Provisioning",id:"data-provisioning",level:2},{value:"Basic Data Processing Flow",id:"basic-data-processing-flow",level:3},{value:"Digital Twins and Aspect Models",id:"digital-twins-and-aspect-models",level:3},{value:"Policies",id:"policies",level:3},{value:"Access Policies",id:"access-policies",level:3},{value:"Usage Policies",id:"usage-policies",level:3},{value:"Traceability App",id:"traceability-app",level:2},{value:"Functional Requirements",id:"functional-requirements",level:3},{value:"Non-Functional Requirements",id:"non-functional-requirements",level:3},{value:"Quality Investigations &amp; Quality Alerts",id:"quality-investigations--quality-alerts",level:3},{value:"Notification State Model",id:"notification-state-model",level:4},{value:"Runtime View",id:"runtime-view",level:2},{value:"Processes for Sending, Updating and Resolving Notifications",id:"processes-for-sending-updating-and-resolving-notifications",level:3},{value:"Sending and Receiving of a Quality Investigation",id:"sending-and-receiving-of-a-quality-investigation",level:4},{value:"Sending and Receiving of a Quality Alert (Optional)",id:"sending-and-receiving-of-a-quality-alert-optional",level:4},{value:"Update of a Quality Investigation",id:"update-of-a-quality-investigation",level:4},{value:"Update of a Quality Alert",id:"update-of-a-quality-alert",level:4},{value:"Standards",id:"standards",level:2}],p={toc:d};function u(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Traceability kit banner",src:a(76510).Z,width:"285",height:"244"})),(0,n.kt)("p",null,"The following page offers an architecture perspective including the main building blocks and information regarding communication between different components, shown as sequence diagrams in a runtime view."),(0,n.kt)("p",null,"The architecture of Traceability is built upon several other components of Catena-X. You need to be familiar with these components to understand the Traceability architecture:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Industry Core for a basic understanding of digital twins and aspect models,"),(0,n.kt)("li",{parentName:"ul"},"Asset Administration Shell (AAS) as the underlying standard for digital twins,"),(0,n.kt)("li",{parentName:"ul"},"Digital Twin Registry (DTR) as the main service to store, publish, and search digital twins, and"),(0,n.kt)("li",{parentName:"ul"},"Eclipse Dataspace Connector (EDC) as the central data exchange infrastructure of Catena-X.")),(0,n.kt)("p",null,"Additionally you might make yourself familiar with"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Item Relationship Service for traversing digital twin data chains based on the Data Chain Template,"),(0,n.kt)("li",{parentName:"ul"},"EDC Discovery for finding the EDC of a Catena-X partner, and"),(0,n.kt)("li",{parentName:"ul"},"SAMM as the modelling standard for aspect models.")),(0,n.kt)("h2",{id:"scope-and-context"},"Scope and Context"),(0,n.kt)("p",null,"This KIT describes two core capabilties of Traceability: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data Provisioning: This capability focusses on how data providers must prepare and publish their data (from their internal systems) to participate in the Traceability use case (and other use cases that want to use Traceability data)."),(0,n.kt)("li",{parentName:"ul"},"Traceability App: This capability defines what mandatory features a Traceability app must provide and how to implement them to be interoperable with other Traceability apps. Additionally, optional features of Traceability apps are also included. This information is used by software vendors to develop Traceability-compliant apps for Catena-X.")),(0,n.kt)("h2",{id:"building-block-view"},"Building Block View"),(0,n.kt)("p",null,"This overview shows the two core capabilities of Traceabilty and the Catena-X Core Services onto which Traceability is built and which are required by the Traceability architecture."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture - Level 1",src:a(15711).Z,width:"1420",height:"1283"})),(0,n.kt)("h3",{id:"traceability-components"},"Traceability Components"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Subsystem"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Data Provisioning"),(0,n.kt)("td",{parentName:"tr",align:"left"},"This component extracts data from a company's internal systems,  transforms it into digital twins, and publishes these digital twins in the DTR and their data in the EDC (as submodels, based on aspect models). The published data is used by Traceability apps as well as other use cases that require Traceabiilty data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Traceability App"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A Traceability app has two core functionalities:",(0,n.kt)("ul",null,(0,n.kt)("li",null,"providing an UI to show the parts manufactured by a company and published as digital twins"),(0,n.kt)("li",null,"create and process quality alerts and quality investigations for quality actions")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Internal Systems"),(0,n.kt)("td",{parentName:"tr",align:"left"},"These are existing internal systems of a Catena-X partner which provides data to Traceability components, e.g.,",(0,n.kt)("ul",null,(0,n.kt)("li",null,"for data provisioning: The data provided to Catena-X is fetched from a partner's internal PLM and parts master data systems."),(0,n.kt)("li",null,"for Traceability apps: A Traceability app may show more data to a user than just the data that is provided to Catena-X. Generally, the business scope of COTS software is bigger than just Traceability and they have existing interfaces to fetch all data they need for their business functionality (and not only Traceability data).")),"Both components can also send data back to internal systems. That's at the discretion of the Catena-X partner and neither required nor prohibited by the Traceability use case.")))),(0,n.kt)("h3",{id:"catena-x-core-services"},"Catena-X Core Services"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Subsystem"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://eclipse-tractusx.github.io/docs-kits/category/digital-twin-kit"},"Digital Twin Registry (DTR)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Digital Twin Registry acts as an address book for digital twins. Data Providers register their digital twins in their own DTR. Data consumers query a DTR to find digital twins and interact with them further, i.e., fetch data for a digtil twin.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://eclipse-tractusx.github.io/docs-kits/category/data-chain-kit/"},"Item Relationship Service (IRS)")),(0,n.kt)("td",{parentName:"tr",align:"left"},'The IRS builds a digital representation of a product (digital twin) and the relationships of items the product consists of in a hierarchical structure. The result is an item graph in which each node represents a digital item of the product - this graph is called "Item Graph".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://eclipse-tractusx.github.io/docs-kits/category/connector-kit"},"Eclipse Dataspace Components (EDC)")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The EDC as a connector implements a framework agreement for sovereign, cross-organizational data exchange. The International Data Spaces Standard (IDS) and relevant principles in connection with GAIA-X were implemented. The connector is designed to be extensible to support alternative protocols and to be integrated into different ecosystems.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/Specification%20Digital%20Twin%20KIT#discovery-sequence"},"Discovery Service")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The EDC / dataspace discovery interface is a CX network public available endpoint which can get used to retrieve EDC endpoints and the related BPNs, as well as search for endpoints via the BPN.")))),(0,n.kt)("h2",{id:"data-provisioning"},"Data Provisioning"),(0,n.kt)("p",null,"This capability focusses on how data providers must prepare and publish their data (from their internal systems) to participate in the Traceability use case (and other use cases that want to use Traceability data)."),(0,n.kt)("h3",{id:"basic-data-processing-flow"},"Basic Data Processing Flow"),(0,n.kt)("p",null,"The following diagram shows a basic data processing flow how a company's internal data can be transformed into a Traceability-compliant format. Implementations of data providers can deviate from this basic flow as it's just one way to do it. But it should give a basic idea what the essential steps are."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Data Processing Flow",src:a(88406).Z,width:"1921",height:"1241"})),(0,n.kt)("h3",{id:"digital-twins-and-aspect-models"},"Digital Twins and Aspect Models"),(0,n.kt)("p",null,"Data provisioning of Traceabilty is built on the data provisioning of the ",(0,n.kt)("a",{parentName:"p",href:"../Industry%20Core%20Kit/Architecture%20View%20Industry%20Core%20Kit"},"Industry Core KIT"),", i.e., Traceability extends the digital twins PartType and PartInstance with additional aspect models:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Digital Twin "PartType"',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Aspect model ",(0,n.kt)("a",{parentName:"li",href:"../Traceability%20Kit/Software%20Development%20View/Data%20Provider%20Development%20View%20Traceability%20Kit#singellevelusageasplanned"},'"SingelLevelUsageAsPlanned"')))),(0,n.kt)("li",{parentName:"ul"},'Digital Twin "PartInstance"',(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Aspect model ",(0,n.kt)("a",{parentName:"li",href:"../Traceability%20Kit/Software%20Development%20View/Data%20Provider%20Development%20View%20Traceability%20Kit#tractionbatterycode"},'"TractionBatteryCode"')),(0,n.kt)("li",{parentName:"ul"},"Aspect model ",(0,n.kt)("a",{parentName:"li",href:"../Traceability%20Kit/Software%20Development%20View/Data%20Provider%20Development%20View%20Traceability%20Kit#singlelevelusageasbuilt"},'"SingleLevelUsageAsBuilt"'))))),(0,n.kt)("p",null,"Details about these aspect models, i.e., the SAMM data model as well as example data, can be found in the ",(0,n.kt)("a",{parentName:"p",href:"../Traceability%20Kit/Software%20Development%20View/Data%20Provider%20Development%20View%20Traceability%20Kit"},"Developer View"),"."),(0,n.kt)("h3",{id:"policies"},"Policies"),(0,n.kt)("p",null,"To enable data sovereignty, access and usage policies are important to protect the data assets of a data provider in the EDC, described in the following. Further details are described in the ",(0,n.kt)("a",{parentName:"p",href:"#standards"},"CX - 0018 Sovereign Data Exchange")," standard."),(0,n.kt)("h3",{id:"access-policies"},"Access Policies"),(0,n.kt)("p",null,"To decide which company has access to the data assets, access policy should be used. Note that without protecting data assets with access policies, they become publicly available in the Catena-X network which is not recommended. Therefore, every asset should be protected and only be made available for specific companies, identified through their business partner number (BPN)."),(0,n.kt)("p",null,"Implementation details and examples can be found ",(0,n.kt)("a",{parentName:"p",href:"../Traceability%20Kit/Software%20Development%20View/Data%20Provider%20Development%20View%20Traceability%20Kit#access-policies"},"here"),"."),(0,n.kt)("h3",{id:"usage-policies"},"Usage Policies"),(0,n.kt)("p",null,"To decide which company can use the data asset under specific conditions, usage policies (or contract policies) are used. Therefore, they are more specific than access policies and only used just after access is granted. Currently, the usage policies aren't technically enforced but based on a legal framework (keep this in mind when publishing data assets)."),(0,n.kt)("p",null,"Implementation details and examples can be found ",(0,n.kt)("a",{parentName:"p",href:"./Traceability%20Kit/Software%20Development%20View/Data%20Provider%20Development%20View%20Traceability%20Kit#usage-policies--contract-policies"},"here"),"."),(0,n.kt)("h2",{id:"traceability-app"},"Traceability App"),(0,n.kt)("p",null,"This capability defines what mandatory features a Traceability app must provide and how to implement them to be interoperable with other Traceability apps. Additionally, optional features of Traceability apps are also included. This information is used by software vendors to develop Traceability-compliant apps for Catena-X."),(0,n.kt)("h3",{id:"functional-requirements"},"Functional Requirements"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Requirement"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Mandatory"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Visualize Digital Twin Data"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A Traceability app must be able to visualize data from PartInstance digital twins. This data will also be used by quality investigations & alerts, so it's essential for a Traceability app. The data for the manufacturer's parts is retrieved from the manufacturer's internal systems; the data for built-in parts from suppliers must be retrieved from the supplier's EDC as this is a cross-company data transfer (if necessary).",(0,n.kt)("br",null),"The data for the manufacturer's parts can be retrieved from a company's internal systems:",(0,n.kt)("ul",null,(0,n.kt)("li",null,"via a dedicated interface for the Traceability app"),(0,n.kt)("li",null,"via the EDC using the data also provided to other partner's in the Catena-X ecosystem")),"It is not mandatory to use EDC to retrieve this data as this is not a cross-company data transfer, but a data transfer from one application of the company to another application of the company.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Data Exchange via ",(0,n.kt)("a",{parentName:"td",href:"#standards"},"CX-0018")," compliant connector"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data exchange with other Catena-X partners (for Traceability partners, these are their customers and suppliers mostly) must be done via via a ",(0,n.kt)("a",{parentName:"td",href:"#standards"},"CX-0018")," compliant connector (e.g. EDC).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Data Sovereignty"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The usage of data in the Traceability app is compliant with the Access and Usage Policies as defined in this KIT.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Quality Alerts"),(0,n.kt)("td",{parentName:"tr",align:"center"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"},"In the event of an incident the partner's value chain, the partner would like to be informed promptly and in a structured manner by the triggering partners (e.g., manufacturing problem, field problems) so that the partner can respond as quickly as possible (Supplier/Customer). In the same way, the partner wants to inform their value chain partners easily and specifically in the event of relevant incidents. The traceability apps are able to exchange the alerts in the same interoperable way.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Quality Investigations"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"For a given incident in a partner's supply chain, the partner would like to be able to narrow down the affected products as sharply as possible in order to carry out suitable actions in a targeted manner. The partners in the value chain use interoperable Traceability apps for this purpose.")))),(0,n.kt)("h3",{id:"non-functional-requirements"},"Non-Functional Requirements"),(0,n.kt)("p",null,"There are no non-functional requirements defined for this release."),(0,n.kt)("h3",{id:"quality-investigations--quality-alerts"},"Quality Investigations & Quality Alerts"),(0,n.kt)("p",null,"Notifications are - in contrast to classical data offers - a way to push data from a sender to a receiver. In the below paragraphs, the implementation is described to realize quality notifications. In that sense, the below specification has not the scope and intention to be a general solution pattern for notifications across various use cases. For now, it is limited to the sending and receiving of quality notifications as well as the update of the notification status (following a predefined status model)."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u270b Detailed Open API specifications for Quality Alerts & Investigations are available in the Software Development View. For the current release, ",(0,n.kt)("a",{parentName:"p",href:"./Software%20Development%20View/Notification%20API/v1.1.0%20-%20mandatory/notification-api"},"version 1.1.0")," is mandatory and must be supported by every App provider. The newer ",(0,n.kt)("a",{parentName:"p",href:"./Software%20Development%20View/Notification%20API/v1.2.0%20-%20optional/notification-api"},"version 1.2.0")," can be supported optionally.")),(0,n.kt)("h4",{id:"notification-state-model"},"Notification State Model"),(0,n.kt)("p",null,"The notification itself has various states. The states and their cycle are described in the following figure:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Notification State Model",src:a(66637).Z,width:"601",height:"473"})),(0,n.kt)("h2",{id:"runtime-view"},"Runtime View"),(0,n.kt)("h3",{id:"processes-for-sending-updating-and-resolving-notifications"},"Processes for Sending, Updating and Resolving Notifications"),(0,n.kt)("p",null,"Below the sequence for sending, updating and resolving of notifications between (traceability) applications is shown with UML sequence diagrams. In all cases, Http POST requests are used. Those Http endpoints are described in the section (TRS) Quality Notification Endpoints and EDC Contract Offerings."),(0,n.kt)("p",null,"To read the UML sequence diagrams correctly, some remarks:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The shown Notification EDC Adapter is not mandatory. It is just one option to send a notification via the EDC control and data plane. Important is that a similar functionality must be provided/implemented by the (traceability) application vendor. The Notification EDC Adapter or a similar component / functionality will not be provided as a central service from Catena-X.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To know where a notification must be send to, the (traceability) application must resolve the BPN of the receiver. This can either be happen because the (traceability) application has this information in its data model or it could - alternatively - also be resolved e.g. via a lookup of the digital twin in the central asset administration shell (AAS) registry."),(0,n.kt)("p",{parentName:"li"},"\u270b The (traceability) applications that fully rely on the AAS registry and the corresponding AAS submodels can only support quality investigations. With the release of the AAS submodel SingleLevelUsageAsBuilt or a similar AAS submodel that contains the information, which supply chain partner purchased/assembled a part / batch, it is possible to also support quality alerts for those (traceability) applications. (Warnung)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The resolution of the EDC URL for a given BPN is done via the Discovery Service API. The entry for each EDC into this Discovery Service is done via the CX Portal.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In each UML sequence diagram the step ","[01]"," describes the publishing of the notification endpoints as described in the above sections")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Similarly, the Http POST request and response bodies are described in the above sections"))),(0,n.kt)("h4",{id:"sending-and-receiving-of-a-quality-investigation"},"Sending and Receiving of a Quality Investigation"),(0,n.kt)("p",null,"Below, the UML sequence diagram to send and receive a quality investigation is depicted. In addition to the above mentioned general remarks, the following remark:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NotificationSendReceive",src:a(81767).Z,width:"1371",height:"1565"})),(0,n.kt)("h4",{id:"sending-and-receiving-of-a-quality-alert-optional"},"Sending and Receiving of a Quality Alert (Optional)"),(0,n.kt)("p",null,"Below, the UML sequence diagram to send and receive a quality alert is depicted. In addition to the above mentioned general remarks, the following remark:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The status transition from SENT to RECEIVED has to be done by the sender once it received the Http status code 201 from the receiver")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NotificationSendReceiveAlert",src:a(64992).Z,width:"1338",height:"1565"})),(0,n.kt)("h4",{id:"update-of-a-quality-investigation"},"Update of a Quality Investigation"),(0,n.kt)("p",null,"Below, the UML sequence diagram to update a quality investigation is depicted."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NotificationUpdateInvestigation",src:a(55822).Z,width:"1327",height:"1276"})),(0,n.kt)("h4",{id:"update-of-a-quality-alert"},"Update of a Quality Alert"),(0,n.kt)("p",null,"Below, the UML sequence diagram to update a quality alert is depicted."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"NotificationUpdateAlert",src:a(73201).Z,width:"1285",height:"1276"})),(0,n.kt)("h2",{id:"standards"},"Standards"),(0,n.kt)("p",null,"Our relevant standards can be downloaded from the official ",(0,n.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"Catena-X Standard Library"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Traceability is built on the Industry Core. Please check the relevant ",(0,n.kt)("a",{parentName:"li",href:"../Industry%20Core%20Kit/Architecture%20View%20Industry%20Core%20Kit#standards"},"standards of the Industry Core"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0022 Notification Process 1.1.1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0023 Notification API 1.2.2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0062 Traceability Notification Triangle 1.0.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/de/standard-library"},"CX - 0093 Aspect Model Traction Battery Code 1.0.0"))),(0,n.kt)(r.default,{components:s.components,mdxType:"Notice"}))}u.isMDXComponent=!0},95607:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const r={sidebar_class_name:"hidden"},s=void 0,o={unversionedId:"kits/Traceability Kit/part_notice",id:"version-24.03/kits/Traceability Kit/part_notice",title:"part_notice",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Traceability Kit/part_notice.mdx",sourceDirName:"kits/Traceability Kit",slug:"/kits/Traceability Kit/part_notice",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Traceability Kit/part_notice",draft:!1,tags:[],version:"24.03",frontMatter:{sidebar_class_name:"hidden"},sidebar:"kits",previous:{title:"part_bill-of-materials",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Traceability Kit/part_bill-of-materials"},next:{title:"Resiliency Domain",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Resiliency/"}},l={},c=[{value:"NOTICE",id:"notice",level:2}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"notice"},"NOTICE"),(0,n.kt)("p",null,"This work is licensed under the ",(0,n.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 BASF SE"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Fraunhofer-Gesellschaft zur Foerderung der angewandten Forschung e.V. (represented by Fraunhofer ISST & Fraunhofer IML)"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 German Edge Cloud GmbH & Co. KG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Mercedes Benz AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Robert Bosch Manufacturing Solutions GmbH"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Siemens AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 T-Systems International GmbH"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 ZF Friedrichshafen AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Contributors to the Eclipse Foundation"),(0,n.kt)("li",{parentName:"ul"},"Source URL: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs-kits/kits/Traceability%20Kit"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs-kits/kits/Traceability%20Kit")," (latest version)")))}p.isMDXComponent=!0},15711:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/architecture_level_1-9ed5f0259c7a3cb4c50bfcb3b93afece.png"},88406:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/data_provisioning_data_flow-f1e82901f5636a03f8bb3805ec3e426e.png"},66637:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/notification-state-model-ba6b4e2b7c7173004d15a2eb76e6863b.png"},81767:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/notifcation_send-receive-6714234e5119b78315c3a203c5ed41a9.png"},64992:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/notification_send-receive-alert-1d9f4f440ef65859fab0c95ce49fd175.png"},73201:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/notification_update-alert-912c02a5851901bf68d2788cf6c713eb.png"},55822:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/notification_update-investigation-b35e4e25e7579be950c04f0a5d296044.png"},76510:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/doc-traceability_header-minified-114fb0cc97a4825a22f0ae83af993b2a.png"}}]);