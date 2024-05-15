"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[36840],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>f});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),p=u(i),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return i?n.createElement(f,s(s({ref:t},l),{},{components:i})):n.createElement(f,s({ref:t},l))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,s=new Array(a);s[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:o,s[1]=r;for(var u=2;u<a;u++)s[u]=i[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},76680:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var n=i(87462),o=(i(67294),i(3905));const a={sidebar_class_name:"hidden"},s=void 0,r={unversionedId:"kits/Industry Core Kit/Software Development View/part_uniqueidpush",id:"version-24.03/kits/Industry Core Kit/Software Development View/part_uniqueidpush",title:"part_uniqueidpush",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Industry Core Kit/Software Development View/part_uniqueidpush.mdx",sourceDirName:"kits/Industry Core Kit/Software Development View",slug:"/kits/Industry Core Kit/Software Development View/part_uniqueidpush",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Industry Core Kit/Software Development View/part_uniqueidpush",draft:!1,tags:[],version:"24.03",frontMatter:{sidebar_class_name:"hidden"},sidebar:"kits",previous:{title:"part_aspect-model-overview",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Industry Core Kit/Software Development View/part_aspect-model-overview"},next:{title:"part_notice",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Industry Core Kit/part_notice"}},c={},u=[{value:"Unique ID Push",id:"unique-id-push",level:3},{value:"Prerequisites and Constraints",id:"prerequisites-and-constraints",level:4},{value:"Unique ID Push Process Overview",id:"unique-id-push-process-overview",level:4},{value:"Schema of Unique ID Push Notifications",id:"schema-of-unique-id-push-notifications",level:4},{value:"Notification Receiver (Customer)",id:"notification-receiver-customer",level:4},{value:"EDC Asset",id:"edc-asset",level:5},{value:"EDC Policies",id:"edc-policies",level:5},{value:"Backend Data Service to Process Unique ID Push Notifications",id:"backend-data-service-to-process-unique-id-push-notifications",level:5},{value:"Notification Sender (Manufacturer, Supplier)",id:"notification-sender-manufacturer-supplier",level:4},{value:"Mapping BPN to EDC URL with Discovery Service API",id:"mapping-bpn-to-edc-url-with-discovery-service-api",level:5}],l={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"unique-id-push"},"Unique ID Push"),(0,o.kt)("p",null,"Unique ID Push notifications are a way for a manufacturer to notify a customer as soon as possible when a new digital twin for a part is available."),(0,o.kt)("p",null,"The solution is based on notification assets in the EDC (which is the same approach that is used for quality alerts & investigations). The customer creates a notification asset in the EDC and the customer's suppliers send their notifications (with the Unique Id) to this notification asset. As this notification asset is a general EDC asset - as for all EDC assets - access policies, usage policies and contract definitions must be created."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u270b It is important to understand that the customer (receiver) creates EDC asset and policies, and thus, the supplier (sender) of the Unique ID push notification must check during the EDC negotiation process if the conditions the receiver offers are acceptable for the sender.")),(0,o.kt)("h4",{id:"prerequisites-and-constraints"},"Prerequisites and Constraints"),(0,o.kt)("p",null,"In order to be able to push Unique ID(s) of part(s) to the correct partner, it is required that the data provider (manufacturer) pushing the Unique IDs is aware of the BPN of the actual receiver of the part (i.e., the customer) or has enough data in its context to use BPDM functions to determine the BPN Number of the receiver."),(0,o.kt)("p",null,"For actively pushing Unique IDs, an EDC is required and the data provider needs to be enabled to execute the complete process including EDC communication and HTTP Push (i.e., HTTP POST) of the payload."),(0,o.kt)("p",null,"Secondly, EDCs are being used for the exchange and it is currently required to offer a HTTP POST API to receive the Unique IDs push at the receiver's side. This API needs to be registered in the EDC Catalog as a data offer and requires specific properties to be set to standardized values, as this allows discover-ability. Details still tbd."),(0,o.kt)("h4",{id:"unique-id-push-process-overview"},"Unique ID Push Process Overview"),(0,o.kt)("p",null,"How the actual process is triggered is application specific. It is recommended to trigger the push of Unique IDs towards the customer after the Goods Issue has been booked, since commonly at that point the serial numbers/batch numbers of the parts being delivered are fixed in the logistics process and shall be contained in delivery documents, EDI Messages and/or any internal representation of the received items (non-Catena-X communication)."),(0,o.kt)("p",null,"The Unique ID push is initiated by the supplier (acting as sender) towards their customer (acting as receiver). Since the Unique ID of the asset (i.e., serial unit / batch) is unknown in the logistics process, the message needs to include local identifiers to be matched towards the information from the delivery documents and furthermore the internal data of the recipient's traceability solution."),(0,o.kt)("p",null,"Upon receipt of the message, the customer needs to match the local identifiers with its internal traceability records and attach each Unique ID to the respective data set. How this is done is depending on the customer's internal systems:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If there is an object for incoming deliveries, this event could be updated.\nAlternatively, if only production events are tracked, the data could be integrated at this point into the data provisioning pipeline's data structure for consumed materials."),(0,o.kt)("li",{parentName:"ul"},"In the end this enables the customer to integrate the child parts into the SingleLevelBomAsBuilt aspect.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Unique ID Push Process",src:i(78539).Z,width:"1310",height:"562"})),(0,o.kt)("h4",{id:"schema-of-unique-id-push-notifications"},"Schema of Unique ID Push Notifications"),(0,o.kt)("p",null,"The notifications send to inform a customer about the creating of a new digital twin for one of the parts they received have a standardized format."),(0,o.kt)("p",null,"All endpoints as well as the schema of the notification below are described in detail in the ",(0,o.kt)("a",{parentName:"p",href:"Unique%20ID%20Push%20API/unique-id-push-notification-api"},"Unique ID Push API documentation"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Adding the customer part id to the notification is optional. The main reason for this is that it cannot be guaranteed that every manufacturer knows the customer part id for their parts. But, in case the manufacturer knows the customer and the corresponding customer part id of its part though, it is required to always add the customer part id to the notification.")),(0,o.kt)("h4",{id:"notification-receiver-customer"},"Notification Receiver (Customer)"),(0,o.kt)("p",null,"Here is a short overview what the receiver has to do when they want to support Unique Id Push notifications. This is an optional feature."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The receiver in this scenario is the customer of a part."),(0,o.kt)("li",{parentName:"ul"},"The receiver must create a EDC asset in their EDC that works as the endpoint for receiving notifications. Also, access & usage policies as described below must be configured."),(0,o.kt)("li",{parentName:"ul"},"The EDC in which the notification EDC asset was created must be registered at the Discovery Service (so that the sender can find the partner's EDC which should receive notifications)"),(0,o.kt)("li",{parentName:"ul"},"When the Receiver receives a Unique Id Push notification, it must process this notification after it was received by the EDC (in a Backend Data Service)"),(0,o.kt)("li",{parentName:"ul"},"How the Receiver processes the notification is up to them, but the following steps are recommended:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Verify the correctness of the data in the notification (i.e., the receiver is actually the customer of this part)."),(0,o.kt)("li",{parentName:"ul"},"Store the notification data for later."),(0,o.kt)("li",{parentName:"ul"},"Use this data when the digital twin for the part into which the delivered part is built into is created instead of doing a lookup to a supplier's Digital Twin Registry.")))),(0,o.kt)("h5",{id:"edc-asset"},"EDC Asset"),(0,o.kt)("p",null,"For the EDC asset for receiving Unique ID Push notifications, the following conventions apply: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'The asset ID  must be "uniqueidpushnnotification-receipt".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The following properties must be set for this asset:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "cx-common": "https://w3id.org/catenax/ontology/common#",\n    "cx-taxo": "https://w3id.org/catenax/taxonomy#",\n    "dct": "https://purl.org/dc/terms/"\n  },\n  "@id": "{{ _.assetId }}",\n  "properties": {\n    "dct:type": { "@id": "cx-taxo:ReceiveUniqueIdPushNotification" },\n    "cx-common:version": "1.0",\n    "asset:prop:id": "uniqueidpushnnotification-receipt",\n    "asset:prop:type": "notification.trace.uniqueidpush",\n    "asset:prop:notificationtype": "uniqueidpush",\n    "asset:prop:notificationmethod": "receive"\n  },\n  "privateProperties": {},\n  "dataAddress": {}\n}\n')),(0,o.kt)("p",{parentName:"li"},'Properties "asset:prop:*" must still be added to be backward compatible with previous releases. Properties "dct:type" and "cx-common:version" are used to classify the asset and are explained in the ',(0,o.kt)("a",{parentName:"p",href:"https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/Specification%20Digital%20Twin%20KIT#registration-at-edc"},"Digital Twin KIT")," in more detail. "))),(0,o.kt)("h5",{id:"edc-policies"},"EDC Policies"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Access Policies"),"\nA data provider can decide on its own what access policies they want to define for their notification asset. Based on the purpose of the asset, all suppliers of the data provider should in general be allowed to send notifications to this asset. Therefore, either a public access policy or a BPN-based access policy (allowing all suppliers) should be used."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage Policies"),"\nIn general, a data provider is free to decide which usage policies to define for its assets. For notifications, though, the data provider is actually the receiver of notifications, i.e., the usage policy here has the purpose to define what the data provider does or is allowed to do with the notifications. It's something the sender of the notification has to rely on and accept when sending its notification."),(0,o.kt)("p",null,"Keep in mind that usage policies currently aren't technically enforced by the EDC or other components."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u270b ",(0,o.kt)("strong",{parentName:"p"},"Usage Policy for Unique ID Push"),'\nThe Unique ID push notification endpoints are protected with a purpose-based usage policy and "purpose.trace.v1.aspects" as purpose.')),(0,o.kt)("h5",{id:"backend-data-service-to-process-unique-id-push-notifications"},"Backend Data Service to Process Unique ID Push Notifications"),(0,o.kt)("p",null,"The receiver must setup a backend data service that provides an HTTP Endpoint for notifications. All endpoints as well as the schema of the notification below are described in detail in the ",(0,o.kt)("a",{parentName:"p",href:"Unique%20ID%20Push%20API/unique-id-push-notification-api"},"Unique ID Push API documentation"),"."),(0,o.kt)("h4",{id:"notification-sender-manufacturer-supplier"},"Notification Sender (Manufacturer, Supplier)"),(0,o.kt)("p",null,"Here is a short overview what the sender has to do when they want to support Unique Id Push notifications. This is an optional feature."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Sender in this scenario is the manufacturer or supplier of a part."),(0,o.kt)("li",{parentName:"ul"},"When a new digital twin for a part was created, the manufacturer is responsible to send a Unique Id Push notification for this twin to the customer of this part."),(0,o.kt)("li",{parentName:"ul"},"It is recommended to send this notification as soon as possible, i.e., directly after the digital twin was created.")),(0,o.kt)("h5",{id:"mapping-bpn-to-edc-url-with-discovery-service-api"},"Mapping BPN to EDC URL with Discovery Service API"),(0,o.kt)("p",null,"The sender must first find the EDC of the customer to which the notification should be sent to. For this, the BPN of the customer is required. With this, the Discovery Service can be used to query for all EDCs of the customer. After that, the data catalog of each of these EDCs must be queried for the notification EDC asset as described above. If this notification EDC asset is found in one of these EDCs, the notification can be sent."),(0,o.kt)("p",null,"There should only be one EDC which provides the notification EDC asset for Unique Id Push. If more than one EDC (for the same BPN/partner) are found, this is considered a misconfiguration of the corresponding partner."))}p.isMDXComponent=!0},78539:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/unique_id_push_process-f39f701d98ca8a7046544c95e1dc6d14.png"}}]);