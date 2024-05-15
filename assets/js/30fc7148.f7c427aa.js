"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[67860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={},i="Endpoint Data Reference API Overview",l={unversionedId:"kits/tractusx-edc/docs/samples/edr-api-overview/edr-api-overview",id:"version-23.12/kits/tractusx-edc/docs/samples/edr-api-overview/edr-api-overview",title:"Endpoint Data Reference API Overview",description:"Introduction",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/samples/edr-api-overview/edr-api-overview.md",sourceDirName:"kits/tractusx-edc/docs/samples/edr-api-overview",slug:"/kits/tractusx-edc/docs/samples/edr-api-overview/",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/samples/edr-api-overview/",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"How-To run two connectors and a DAPS",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/samples/example-dataspace/"},next:{title:"Postman Collection",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/development/postman/"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Features",id:"features",level:2},{value:"EDR Negotiation | Contract Negotiation and Transfer Process in a single request",id:"edr-negotiation--contract-negotiation-and-transfer-process-in-a-single-request",level:3},{value:"Payload",id:"payload",level:4},{value:"EDR Negotiation Response",id:"edr-negotiation-response",level:4},{value:"EDR Management | Fetch cached EDRs",id:"edr-management--fetch-cached-edrs",level:3},{value:"EDR Entry Response",id:"edr-entry-response",level:4},{value:"EDR Response",id:"edr-response",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"endpoint-data-reference-api-overview"},"Endpoint Data Reference API Overview"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Endpoint Data Reference")," serves the purpose of streamlining the consumer connector operators' interactions. Through its API, acts as a facade for two fundamental processes involved in Asset consumption: ",(0,r.kt)("strong",{parentName:"p"},"contract negotiation")," and ",(0,r.kt)("strong",{parentName:"p"},"transfer process")," initialization and additionally, it enables the management of ",(0,r.kt)("strong",{parentName:"p"},"EDR"),"s (Endpoint Data References)."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The new API is seamlessly deployed under the well-known management API context, requiring no additional configuration. However, this is not the case for the EDR Cache storage. The EDR Cache provides two implementations: ",(0,r.kt)("inlineCode",{parentName:"p"},"InMemory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SQL"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"edc-runtime-memory")," bundle utilizes the ",(0,r.kt)("inlineCode",{parentName:"p"},"InMemory")," implementation for the EDR Cache without any extra setup. On the other hand, the SQL Cache, found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"edc-controlplane-postgresql-*")," bundles, utilizes the SQL implementation and requires database access for schema migration and data management."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"property"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.edr.name"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the name associated with the EDR data source"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"edr")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.edr.url"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the database address to access the EDR data"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.edr.user"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines EDR database username"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.edr.password"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines EDR database password"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"edr-negotiation--contract-negotiation-and-transfer-process-in-a-single-request"},"EDR Negotiation | Contract Negotiation and Transfer Process in a single request"),(0,r.kt)("p",null,"This endpoint will perform the contract negotiation, transfer process and EDR storage respectively."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"data destination")," will always be ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpProxy"),", requiring a request against the provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"data-plane")," to fetch the asset data.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Query Params"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<MANAGEMENT_URL>/edrs")),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"none")))),(0,r.kt)("h4",{id:"payload"},"Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "@vocab": "https://w3id.org/edc/v0.0.1/ns/",\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "@type": "NegotiationInitiateRequestDto",\n  "connectorAddress": "<PROVIDER_DSP_URL>",\n  "protocol": "dataspace-protocol-http",\n  "connectorId": "<CONNECTOR_ID>",\n  "providerId": "<PROVIDER_ID>",\n  "offer": {\n    "offerId": "<OFFER_ID>",\n    "assetId": "<ASSET_ID>",\n    "policy": {\n      "@type": "odrl:Set",\n      "odrl:permission": {\n        "odrl:target": "<ASSET_ID>",\n        "odrl:action": {\n          "odrl:type": "USE"\n        }\n      },\n      "odrl:target": "<ASSET_ID>"\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"edr-negotiation-response"},"EDR Negotiation Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "edc:IdResponseDto",\n  "@id": "contract-negotiation-id",\n  "edc:createdAt": 1687405819736,\n  "@context": {\n    "dct": "https://purl.org/dc/terms/",\n    "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "dcat": "https://www.w3.org/ns/dcat/",\n    "odrl": "http://www.w3.org/ns/odrl/2/",\n    "dspace": "https://w3id.org/dspace/v0.8/"\n  }\n}\n')),(0,r.kt)("h3",{id:"edr-management--fetch-cached-edrs"},"EDR Management | Fetch cached EDRs"),(0,r.kt)("p",null,"This endpoint will retrieve all EDR entries by their ",(0,r.kt)("inlineCode",{parentName:"p"},"assetId")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"agreementId")," references, which are passed as ",(0,r.kt)("inlineCode",{parentName:"p"},"query parameters"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Query Params"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<MANAGEMENT_URL>/edrs")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"assetId, agreementId")))),(0,r.kt)("h4",{id:"edr-entry-response"},"EDR Entry Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "@type": "tx:EndpointDataReferenceEntry",\n    "edc:agreementId": "contract-agreement-id",\n    "edc:transferProcessId": "transfer-process-id",\n    "edc:assetId": "asset-id",\n    "@context": {\n      "dct": "https://purl.org/dc/terms/",\n      "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n      "edc": "https://w3id.org/edc/v0.0.1/ns/",\n      "dcat": "https://www.w3.org/ns/dcat/",\n      "odrl": "http://www.w3.org/ns/odrl/2/",\n      "dspace": "https://w3id.org/dspace/v0.8/"\n    }\n  }\n]\n')),(0,r.kt)("p",null,"This endpoint, through the ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer-process-id")," passed as ",(0,r.kt)("inlineCode",{parentName:"p"},"path variable"),", will retrieve the actual EDR."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Query Params"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<MANAGEMENT_URL>/edrs/{transfer-process-id}")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"none")))),(0,r.kt)("h4",{id:"edr-response"},"EDR Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "edc:DataAddress",\n  "edc:cid": "cid",\n  "edc:type": "EDR",\n  "edc:authCode": "authcode",\n  "edc:endpoint": "http://provider-data-plane/public-url",\n  "edc:id": "transfer-process-id",\n  "edc:authKey": "Authorization",\n  "@context": {\n    "dct": "https://purl.org/dc/terms/",\n    "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "dcat": "https://www.w3.org/ns/dcat/",\n    "odrl": "http://www.w3.org/ns/odrl/2/",\n    "dspace": "https://w3id.org/dspace/v0.8/"\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Please note that now with the EDR you are able to request the ",(0,r.kt)("inlineCode",{parentName:"p"},"Asset")," data from provider's ",(0,r.kt)("inlineCode",{parentName:"p"},"data-plane"),".")))}c.isMDXComponent=!0}}]);