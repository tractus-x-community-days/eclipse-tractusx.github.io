"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=a,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var i=n(87462),a=(n(67294),n(3905));const r={id:"Specification OSim Kit",title:"Specification",description:"OSim Kit"},o=void 0,s={unversionedId:"kits/OSim Kit/Software Development View/Specification OSim Kit",id:"kits/OSim Kit/Software Development View/Specification OSim Kit",title:"Specification",description:"OSim Kit",source:"@site/docs-kits/kits/OSim Kit/Software Development View/02-page_software-development-view.md",sourceDirName:"kits/OSim Kit/Software Development View",slug:"/kits/OSim Kit/Software Development View/Specification OSim Kit",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/OSim Kit/Software Development View/Specification OSim Kit",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Specification OSim Kit",title:"Specification",description:"OSim Kit"},sidebar:"kits",previous:{title:"Introduction",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/OSim Kit/Software Development View/osim-api"},next:{title:"requestLatestSimulationResult",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/OSim Kit/Software Development View/request-latest-simulation-result"}},l={},m=[{value:"OSim Kit",id:"osim-kit",level:3},{value:"Sample Data",id:"sample-data",level:2},{value:"Sample-1",id:"sample-1",level:3},{value:"Sample-2",id:"sample-2",level:3}],c={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"osim kit banner",src:n(40775).Z,width:"285",height:"245"})),(0,a.kt)("h3",{id:"osim-kit"},"OSim Kit"),(0,a.kt)("h2",{id:"sample-data"},"Sample Data"),(0,a.kt)("h3",{id:"sample-1"},"Sample-1"),(0,a.kt)("p",null,"The following example shows the payload used for exchange of simulation results between the OSim partners. The format corresponds with AAS format serialized as a JSON string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "owner": { "id": "BPNL00000007OTZ3" },\n  "dataQuality": 1,\n  "description": "Daily standard simulation",\n  "comment": "successful simulation",\n  "expirationTimestamp": "2023-03-24T09:15:24.000Z",\n  "runId": "0fece48b-c8d1-4180-1a9caca6d67e",\n  "shipments": [\n    {\n      "handlingUnits": [\n        {\n          "name": "Palette",\n          "volume": 1,\n          "weight": 189,\n          "batches": [\n            {\n              "unitOfMeasurement": "KG",\n              "materialName": "KK1000GR-Geh\xe4use-Rot",\n              "quantity": 50,\n              "materialNumber": "KK1000GR",\n              "batchOrderId": "Order-0001",\n              "batchId": "Batch_1",\n              "hazardousGoods": false,\n              "batchExpirationTimestamp": "2023-08-22T16:00:00.000Z",\n              "batchNumber": "45"\n            }\n          ],\n          "handlingUnitId": "HUT_1",\n          "amount": 1\n        }\n      ],\n      "shipmentId": "DE51515151",\n      "recipientTimestampPlanned": "2023-04-19T09:00:00.000Z",\n      "destination": { "id": "BPNL00000007OTZ3" },\n      "recipient": { "id": "BPNL00000007OTZ4" },\n      "logistics": { "id": "BPNL00000007OS0H" },\n      "preceding": {},\n      "splittingAllowed": true,\n      "destinationTimestamp": "2023-03-19T09:00:00.000Z"\n    }\n  ],\n  "timestamp": "2023-03-09T14:13:42.806Z"\n}\n')),(0,a.kt)("h3",{id:"sample-2"},"Sample-2"),(0,a.kt)("p",null,"The following example shows the payload used for exchange of scenario data between the OSim partners. The format corresponds with AAS format serialized as a JSON string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "materialFlowScenarioRequest": {\n    "scenarioSimResults": {\n      "resultOwnId": "916b5688-8bd8-4d7e-83b9-e0d40939274e",\n      "resultOwnSimRunInitial": {\n        "owner": {},\n        "dataQuality": 0,\n        "description": "Please simulate asap",\n        "comment": "successful simulation",\n        "expirationTimestamp": "2023-03-24T09:15:24.000Z",\n        "runId": "0fece48b-c8d1-4180-1a9caca6d67e",\n        "shipments": [\n          {\n            "handlingUnits": [\n              {\n                "name": "Palette",\n                "volume": 1.0,\n                "weight": 189.0,\n                "batches": [\n                  {\n                    "unitOfMeasurement": "KG",\n                    "materialName": "KK1000GR-Geh\xe4use-Rot",\n                    "quantity": 50.0,\n                    "materialNumber": "KK1000GR",\n                    "materialHazardousGoods": false,\n                    "batchOrderId": "Order-0001",\n                    "batchId": "Batch_1",\n                    "batchExpirationTimestamp": "2023-08-22T16:00:00.000Z",\n                    "batchNumber": "45"\n                  }\n                ],\n                "handlingUnitId": "HUT_1",\n                "amount": 1\n              }\n            ],\n            "shipmentId": "DE51515151",\n            "recipientTimestampPlanned": "2023-04-19T09:00:00.000Z",\n            "destination": {},\n            "recipient": {},\n            "logistics": {},\n            "preceding": {},\n            "splittingAllowed": true,\n            "destinationTimestamp": "2023-03-19T09:00:00.000Z"\n          }\n        ],\n        "timestamp": "2023-03-09T14:13:42.806Z"\n      },\n      "resultOwnSimRunUpdated": {\n        "owner": {},\n        "dataQuality": 0,\n        "description": "Please simulate asap",\n        "comment": "successful simulation",\n        "expirationTimestamp": "2023-03-24T09:15:24.000Z",\n        "runId": "0fece48b-c8d1-4180-1a9caca6d67e",\n        "shipments": [\n          {\n            "handlingUnits": [\n              {\n                "name": "Palette",\n                "volume": 1.0,\n                "weight": 189.0,\n                "batches": [\n                  {\n                    "unitOfMeasurement": "KG",\n                    "materialName": "KK1000GR-Geh\xe4use-Rot",\n                    "quantity": 50.0,\n                    "materialNumber": "KK1000GR",\n                    "materialHazardousGoods": false,\n                    "batchOrderId": "Order-0001",\n                    "batchId": "Batch_1",\n                    "batchExpirationTimestamp": "2023-08-22T16:00:00.000Z",\n                    "batchNumber": "45"\n                  }\n                ],\n                "handlingUnitId": "HUT_1",\n                "amount": 1\n              }\n            ],\n            "shipmentId": "DE51515151",\n            "recipientTimestampPlanned": "2023-04-19T09:00:00.000Z",\n            "destination": {},\n            "recipient": {},\n            "logistics": {},\n            "preceding": {},\n            "splittingAllowed": true,\n            "destinationTimestamp": "2023-03-19T09:00:00.000Z"\n          }\n        ],\n        "timestamp": "2023-03-09T14:13:42.806Z"\n      }\n    },\n    "scenarioParameter": {\n      "unitOfMeasurement": "KG",\n      "parameterScenario": "8d464b8b-6977-4952-8a22-0489067ca081",\n      "parameterComment": "updated Delivery Date",\n      "materialName": "KK1000GR-Geh\xe4use-Rot",\n      "parameterQuantityUpdated": 1.0,\n      "parameterId": "847c71e5-614a-468b-a3a0-674bf2af3004",\n      "materialNumber": "KK1000GR",\n      "parameterDeliveryDateUpdated": "2023-10-10T09:00:00.000Z",\n      "parameterDeliveryDateInitial": "2023-10-09T10:00:00.000Z",\n      "parameterOrderId": "OID-011123456",\n      "parameterQuantityInitial": 1.0\n    },\n    "scenarioHeader": {\n      "scenarioOwnerRole": "Customer",\n      "scenarioCreationTimestamp": "2023-10-04T09:10:00.000Z",\n      "scenarioExpirationTimestamp": "2023-10-07T09:10:00.000Z",\n      "scenarioOwner": "BPNL0000007OTZ3",\n      "scenarioDescription": "Changes in Delivery Date",\n      "scenarioId": "8d464b8b-6977-4952-8a22-0489067ca081",\n      "scenarioTitle": "Delivery Modification"\n    }\n  }\n}\n')))}p.isMDXComponent=!0},40775:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/OSimKitIcon-5a297c66f720e50339198bbd38a4bc42.svg"}}]);