"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[68504],{3905:(e,M,n)=>{n.d(M,{Zo:()=>s,kt:()=>j});var t=n(67294);function i(e,M,n){return M in e?Object.defineProperty(e,M,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[M]=n,e}function r(e,M){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);M&&(t=t.filter((function(M){return Object.getOwnPropertyDescriptor(e,M).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var M=1;M<arguments.length;M++){var n=null!=arguments[M]?arguments[M]:{};M%2?r(Object(n),!0).forEach((function(M){i(e,M,n[M])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(M){Object.defineProperty(e,M,Object.getOwnPropertyDescriptor(n,M))}))}return e}function I(e,M){if(null==e)return{};var n,t,i=function(e,M){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],M.indexOf(n)>=0||(i[n]=e[n]);return i}(e,M);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],M.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),N=function(e){var M=t.useContext(c),n=M;return e&&(n="function"==typeof e?e(M):a(a({},M),e)),n},s=function(e){var M=N(e.components);return t.createElement(c.Provider,{value:M},e.children)},o="mdxType",D={inlineCode:"code",wrapper:function(e){var M=e.children;return t.createElement(t.Fragment,{},M)}},u=t.forwardRef((function(e,M){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=I(e,["components","mdxType","originalType","parentName"]),o=N(n),u=i,j=o["".concat(c,".").concat(u)]||o[u]||D[u]||r;return n?t.createElement(j,a(a({ref:M},s),{},{components:n})):t.createElement(j,a({ref:M},s))}));function j(e,M){var n=arguments,i=M&&M.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var I={};for(var c in M)hasOwnProperty.call(M,c)&&(I[c]=M[c]);I.originalType=e,I[o]="string"==typeof e?e:i,a[1]=I;for(var N=2;N<r;N++)a[N]=n[N];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75602:(e,M,n)=>{n.r(M),n.d(M,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>I,toc:()=>N});var t=n(87462),i=(n(67294),n(3905));const r={id:"Sample Data Modular Production Kit",title:"Sample Data",description:"Modular Production Kit",sidebar_position:4},a=void 0,I={unversionedId:"kits/Modular Production Kit/Software Development View/Sample Data Modular Production Kit",id:"version-24.05/kits/Modular Production Kit/Software Development View/Sample Data Modular Production Kit",title:"Sample Data",description:"Modular Production Kit",source:"@site/docs-kits_versioned_docs/version-24.05/kits/Modular Production Kit/Software Development View/page_software-development-view.md",sourceDirName:"kits/Modular Production Kit/Software Development View",slug:"/kits/Modular Production Kit/Software Development View/Sample Data Modular Production Kit",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Modular Production Kit/Software Development View/Sample Data Modular Production Kit",draft:!1,tags:[],version:"24.05",sidebarPosition:4,frontMatter:{id:"Sample Data Modular Production Kit",title:"Sample Data",description:"Modular Production Kit",sidebar_position:4},sidebar:"kits",previous:{title:"Adoption View",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Modular Production Kit/Adoption View Modular Production Kit"},next:{title:"getProvideProductionForecast",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Modular Production Kit/Software Development View/Consumer/get-provide-production-forecast"}},c={},N=[{value:"Bill of Process",id:"bill-of-process",level:2},{value:"Production Forecast",id:"production-forecast",level:2},{value:"GetProductionForecast",id:"getproductionforecast",level:3},{value:"ProvideProductionForecast",id:"provideproductionforecast",level:3},{value:"Production Tracking",id:"production-tracking",level:2},{value:"GetProductionTracking",id:"getproductiontracking",level:3},{value:"PartInstanceId based Request",id:"partinstanceid-based-request",level:4},{value:"Bill of Process based Request",id:"bill-of-process-based-request",level:4},{value:"ProvideProductionTracking",id:"provideproductiontracking",level:3}],s={toc:N};function o(e){let{components:M,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:M,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mp kit banner",src:n(12372).Z,width:"285",height:"245"})),(0,i.kt)("p",null,"The following examples show the payload used for exchange. All examples are based on a simple product,\na box with a lid, that are screwed together with 3 screws."),(0,i.kt)("img",{src:n(60332).Z,alt:"Example banner",width:"25%"}),(0,i.kt)("h2",{id:"bill-of-process"},"Bill of Process"),(0,i.kt)("p",null,"Since the Bill of Process aspect is a shared model, it does not include a Catena-X header and thus, can not be exchange between partners individually.\nInstead, it has to be included into other model, such as the Request for Quotation model."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "billOfProcessModel" : {\n        "billOfProcessIdentification" : "box-with-lid-12345678-bill-of-process",\n        "version" : "1.1.0",\n        "productName" : "Box with Lid",\n        "productVersion" : "box-with-lid-1.0.0",\n        "process" : [\n        {\n            "processStepIdentifier" : [ "001_3D-print-parts" ],\n            "processStepType" : "IsFirstElement",\n            "capabilityId" : "urn:manufacturing-capability:capability:3d-printing",\n            "precedenceRelation" : [ {\n                "precedenceElements" : [ {\n                    "successor" : [\n                                    "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben_01",\n                                    "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben_02",\n                                    "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben_03"\n                                  ]\n                } ]\n            } ]\n        },\n        {\n            "processStepIdentifier" : [ "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben_01" ],\n            "processStepType" : "IsLastElement",\n            "capabilityId" : "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben",\n            "inputParameters" : [ {\n                "name" : "Drehmoment_Max",\n                "parameterKey" : "HasValue",\n                "semanticReference" : [ "0173-1#02-ABK233#001" ],\n                "value" : "10"\n            } ],\n            "outputParameters" : [ {\n                "name": "Drehmoment_Max",\n                    "parameterKey": "HasNoValue",\n                    "semanticReference": [ "0173-1#02-ABK233#001" ]\n            } ]\n        },\n        {\n            "processStepIdentifier" : [ "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben_02" ],\n            "processStepType" : "IsLastElement",\n            "capabilityId" : "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben",\n            "inputParameters" : [ {\n                "name" : "Drehmoment_Max",\n                "parameterKey" : "HasValue",\n                "semanticReference" : [ "0173-1#02-ABK233#001" ],\n                "value" : "10"\n            } ],\n            "outputParameters" : [ {\n                "name": "Drehmoment_Max",\n                    "parameterKey": "HasNoValue",\n                    "semanticReference": [ "0173-1#02-ABK233#001" ]\n            } ]\n        },\n        {\n            "processStepIdentifier" : [ "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben_03" ],\n            "processStepType" : "IsLastElement",\n            "capabilityId" : "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben",\n            "inputParameters" : [ {\n                "name" : "Drehmoment_Max",\n                "parameterKey" : "HasValue",\n                "semanticReference" : [ "0173-1#02-ABK233#001" ],\n                "value" : "10"\n            } ],\n            "outputParameters" : [ {\n                "name": "Drehmoment_Max",\n                "parameterKey": "HasNoValue",\n                "semanticReference": [ "0173-1#02-ABK233#001" ]\n            } ]\n        }]\n    }\n}\n')),(0,i.kt)("h2",{id:"production-forecast"},"Production Forecast"),(0,i.kt)("h3",{id:"getproductionforecast"},"GetProductionForecast"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "header": {\n    "senderBpn": "BPNL1234567890SE",\n    "expectedResponseBy": "2023-07-01T21:24:00+07:00",\n    "context": "urn:samm:io.catenax.shopfloor_information.get_production_forecast:2.0.0",\n    "messageId": "00000000-0000-0000-C000-000000000042",\n    "recipientBpn": "BPNL7588787849VT",\n    "sentDateTime": "2023-06-18T21:24:00+07:00",\n    "version": "2.0.0"\n  },\n  "request": {\n    "precisionOfForecast": {\n      "timeUnit": "day",\n      "value": 1\n    },\n    "offset": {\n      "timeUnit": "day",\n      "value": 0\n    },\n    "orderId": "box-with-lid-order-1234",\n    "customerId": "BPNL7588787849VQ",\n    "productionForecastForAll": true,\n    "version": "2.0.0",\n    "communicationMode": "notification"\n  }\n}\n')),(0,i.kt)("h3",{id:"provideproductionforecast"},"ProvideProductionForecast"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "header" : {\n    "senderBpn" : "BPNL7588787849VT",\n    "relatedMessageId" : "00000000-0000-0000-C000-000000000042",\n    "expectedResponseBy" : "2023-07-02T21:24:00+07:00",\n    "context" : "urn:samm:io.catenax.shopfloor_information.provide_production_forecast:2.0.0",\n    "messageId" : "3b4edc05-e214-47a1-b0c2-1d831cdd9ba9",\n    "receiverBpn" : "BPNL1234567890SE",\n    "sentDateTime" : "2023-06-19T21:24:00+07:00",\n    "version" : "2.0.0"\n  },\n  "productionForecastResponse" : {\n    "listOfForecastItems" : [ {\n      "returnCode" : "ok",\n      "precisionOfForecast" : {\n        "value" : 12,\n        "timeUnit" : "unit:secondUnitOfTime"\n      },\n      "reasonsForDelay" : "supplyProblems",\n      "positionId" : "box-12345678",\n      "productionStatus" : "itemReceived",\n      "productionForecast" : "2023-08-19T21:24:00+07:00",\n      "forecastDate" : "2023-06-19T21:24:00+07:00"\n    } ],\n    "version" : "2.0.0",\n    "communicationMode" : "notification",\n    "iterationNumber" : 2\n  }\n}\n')),(0,i.kt)("h2",{id:"production-tracking"},"Production Tracking"),(0,i.kt)("h3",{id:"getproductiontracking"},"GetProductionTracking"),(0,i.kt)("p",null,"Since the GetProductionTracking data model contains different possibilities to identify a product for which the\nProduction Tracking service is applied, two different request are provided, the first is based on a partInstanceId\nand the second is based on a bill of process. However, since the model incorporates multiple optional fields that become mandatory for certain\nrequests, the following figure depicts the different cases and outlines the fields that become mandatory for each of the cases."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SIS.Tracking-Parameter",src:n(56998).Z,width:"801",height:"911"})),(0,i.kt)("h4",{id:"partinstanceid-based-request"},"PartInstanceId based Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "header": {\n      "senderBpn": "BPNL1234567890SE",\n      "expectedResponseBy": "2023-06-19T21:24:00+07:00",\n      "context": "urn:samm:io.catenax.shopfloor_information.get_production_tracking:1.0.0",\n      "messageId": "3b4edc05-e214-47a1-b0c2-1d831cdd9ba9",\n      "receiverBpn": "BPNL7588787849VT",\n      "sentDateTime": "2023-06-19T21:24:00+07:00",\n      "version": "2.0.0"\n    },\n    "request": {\n      "identifierNumber": "box-12345678",\n      "stepIdentifierList": [\n          {\n            "processParameterList": [\n                {\n                  "processParameterSemanticId": "0173-1#02-ABK233#001",\n                  "processParameterName": "Drehmoment_Max"\n                }\n            ],\n            "capabilityId": "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben",\n            "partInstanceLevel": "partInstanceId",\n            "partInstanceId": "Deckel-Serial-123"\n          }\n      ],\n      "customerId": "550e8400-e29b-41d4-a716-446655440000",\n      "identifierType": "partInstanceId",\n      "version": "1.0.0",\n      "processReferenceType": "capability"\n    }\n}\n')),(0,i.kt)("h4",{id:"bill-of-process-based-request"},"Bill of Process based Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "header": {\n      "senderBpn": "BPNL1234567890SE",\n      "expectedResponseBy": "2023-06-19T21:24:00+07:00",\n      "context": "urn:samm:io.catenax.shopfloor_information.get_production_tracking:1.0.0",\n      "messageId": "3b4edc05-e214-47a1-b0c2-1d831cdd9ba9",\n      "receiverBpn": "BPNL7588787849VT",\n      "sentDateTime": "2023-06-19T21:24:00+07:00",\n      "version": "2.0.0"\n    },\n    "request": {\n      "identifierNumber": "box-12345678",\n      "stepIdentifierList": [\n          {\n            "processStepId": "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben_01",\n            "processParameterList": [\n                {\n                  "processParameterSemanticId": "0173-1#02-ABK233#001",\n                  "processParameterName": "Drehmoment_Max"\n                }\n            ]\n          }\n      ],\n      "customerId": "550e8400-e29b-41d4-a716-446655440000",\n      "identifierType": "partInstanceId",\n      "billOfProcessId": "box-with-lid-12345678-bill-of-process",\n      "version": "1.0.0",\n      "processReferenceType": "processStep"\n    }\n}\n')),(0,i.kt)("h3",{id:"provideproductiontracking"},"ProvideProductionTracking"),(0,i.kt)("p",null,"Since the Bill of Process based Request enables a requester to receive the production tracking for a certain process step and the\npartInstanceId based request only allows to request all process steps that execute a specified capability, the instance of the ProvideProductionForecast\ndata model contains different items in the processStepIdentifierList. The shown example contains the response for the partInstanceId based request. the response\nfor the Bill of Process based request is quite similar, however, the processStepIdentifierList contains only a single item, namely the item with the\nprocessStepId Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben_01."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "header": {\n      "senderBpn": "BPNL7588787849VT",\n      "relatedMessageId": "3b4edc05-e214-47a1-b0c2-1d831cdd9ba9",\n      "expectedResponseBy": "2023-06-19T21:24:00+07:00",\n      "context": "urn:samm:io.catenax.shopfloor_information.provide_production_tracking:1.0.0",\n      "messageId": "3b4edc05-e214-47a1-b0c2-1d831cdd9111",\n      "receiverBpn": "BPNL1234567890SE",\n      "sentDateTime": "2023-06-20T21:24:00+07:00",\n      "version": "2.0.0"\n    },\n    "response": {\n      "identifierNumber": "box-12345678",\n      "identifierType": "partInstanceId",\n      "version": "1.0.0",\n      "processStepIdentifierList": [\n          {\n            "processStepId": "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben_01",\n            "processParameterValueList": [\n                {\n                  "processParameterName": "Drehmoment_Max",\n                  "semanticId": "0173-1#02-ABK233#001",\n                  "processParameterQuality": "ok",\n                  "processParameterValue": "10"\n                }\n            ]\n          },\n          {\n            "processStepId": "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben_02",\n            "processParameterValueList": [\n                {\n                  "processParameterName": "Drehmoment_Max",\n                  "semanticId": "0173-1#02-ABK233#001",\n                  "processParameterQuality": "ok",\n                  "processParameterValue": "10"\n                }\n            ]\n          },\n          {\n            "processStepId": "Fuegen.Anpressen_Einpressen.Schrauben.Deckelverschrauben_03",\n            "processParameterValueList": [\n                {\n                  "processParameterName": "Drehmoment_Max",\n                  "semanticId": "0173-1#02-ABK233#001",\n                  "processParameterQuality": "ok",\n                  "processParameterValue": "10"\n                }\n            ]\n          }\n      ]\n    }\n}\n')))}o.isMDXComponent=!0},60332:(e,M,n)=>{n.d(M,{Z:()=>t});const t=n.p+"assets/images/ISO-54a3619b710ece8f07979aebec659512.PNG"},56998:(e,M,n)=>{n.d(M,{Z:()=>t});const t=n.p+"assets/images/SIS.Tracking-Parameter-d64bf6cbb0f8564f7be46ece8b311c45.svg"},12372:(e,M,n)=>{n.d(M,{Z:()=>t});const t="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg1IiBoZWlnaHQ9IjI0NSIgdmlld0JveD0iMCAwIDI4NSAyNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzE4NDEpIj4KPHBhdGggZD0iTTEyMy4wNDggOTEuODM2OUMxMzMuNzA1IDg1LjY4NDQgMTUwLjk4NCA4NS42ODQ0IDE2MS42NDIgOTEuODM2OUwyNTQuMzQ0IDE0NS4zNTRDMjY1LjAwMiAxNTEuNTA3IDI2NS4wMDIgMTYxLjQ4MiAyNTQuMzQ0IDE2Ny42MzVMMTYxLjY0MiAyMjEuMTUyQzE1MC45ODQgMjI3LjMwNCAxMzMuNzA1IDIyNy4zMDQgMTIzLjA0OCAyMjEuMTUyTDMwLjM0NTEgMTY3LjYzNUMxOS42ODc2IDE2MS40ODIgMTkuNjg3NiAxNTEuNTA3IDMwLjM0NSAxNDUuMzU0TDEyMy4wNDggOTEuODM2OVoiIGZpbGw9IiNFM0RFRTYiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUzLjM4IDE1OC4xMUwxNjAuNjc3IDEwNC41OTNDMTUwLjU1MiA5OC43NDgzIDEzNC4xMzcgOTguNzQ4MyAxMjQuMDEzIDEwNC41OTNMMzEuMzEgMTU4LjExQzIxLjE4NTQgMTYzLjk1NSAyMS4xODU0IDE3My40MzIgMzEuMzEgMTc5LjI3N0wxMjQuMDEzIDIzMi43OTRDMTM0LjEzNyAyMzguNjM5IDE1MC41NTIgMjM4LjYzOSAxNjAuNjc3IDIzMi43OTRMMjUzLjM4IDE3OS4yNzdDMjYzLjUwNCAxNzMuNDMyIDI2My41MDQgMTYzLjk1NSAyNTMuMzggMTU4LjExWk0xNjEuNjQyIDEwNC4wMzZDMTUwLjk4NCA5Ny44ODM2IDEzMy43MDUgOTcuODgzNiAxMjMuMDQ4IDEwNC4wMzZMMzAuMzQ1MSAxNTcuNTUzQzE5LjY4NzcgMTYzLjcwNiAxOS42ODc3IDE3My42ODEgMzAuMzQ1MSAxNzkuODM0TDEyMy4wNDggMjMzLjM1MUMxMzMuNzA1IDIzOS41MDQgMTUwLjk4NCAyMzkuNTA0IDE2MS42NDIgMjMzLjM1MUwyNTQuMzQ0IDE3OS44MzRDMjY1LjAwMiAxNzMuNjgxIDI2NS4wMDIgMTYzLjcwNiAyNTQuMzQ0IDE1Ny41NTNMMTYxLjY0MiAxMDQuMDM2WiIgZmlsbD0iI0U1RTBFNyIvPgo8cGF0aCBkPSJNMTIzLjY2NCA2NC42OTY4QzEzNC4zMjIgNTguNTQ0MyAxNTEuNjAxIDU4LjU0NDMgMTYyLjI1OCA2NC42OTY4TDI1NC45NjEgMTE4LjIxNEMyNjUuNjE4IDEyNC4zNjcgMjY1LjYxOCAxMzQuMzQyIDI1NC45NjEgMTQwLjQ5NEwxNjIuMjU4IDE5NC4wMTJDMTUxLjYwMSAyMDAuMTY0IDEzNC4zMjIgMjAwLjE2NCAxMjMuNjY0IDE5NC4wMTJMMzAuOTYxNiAxNDAuNDk0QzIwLjMwNDEgMTM0LjM0MiAyMC4zMDQxIDEyNC4zNjcgMzAuOTYxNiAxMTguMjE0TDEyMy42NjQgNjQuNjk2OFoiIGZpbGw9IiNEM0M2REEiLz4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZGRkZGRfMV8xODQxKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUzLjk5NiAxMzAuOTdMMTYxLjI5MyA3Ny40NTNDMTUxLjE2OSA3MS42MDgxIDEzNC43NTQgNzEuNjA4MSAxMjQuNjI5IDc3LjQ1M0wzMS45MjY0IDEzMC45N0MyMS44MDE5IDEzNi44MTUgMjEuODAxOSAxNDYuMjkyIDMxLjkyNjQgMTUyLjEzN0wxMjQuNjI5IDIwNS42NTRDMTM0Ljc1NCAyMTEuNDk5IDE1MS4xNjkgMjExLjQ5OSAxNjEuMjkzIDIwNS42NTRMMjUzLjk5NiAxNTIuMTM3QzI2NC4xMjEgMTQ2LjI5MiAyNjQuMTIxIDEzNi44MTUgMjUzLjk5NiAxMzAuOTdaTTE2Mi4yNTggNzYuODk2QzE1MS42MDEgNzAuNzQzNSAxMzQuMzIyIDcwLjc0MzUgMTIzLjY2NCA3Ni44OTZMMzAuOTYxNiAxMzAuNDEzQzIwLjMwNDEgMTM2LjU2NiAyMC4zMDQxIDE0Ni41NDEgMzAuOTYxNiAxNTIuNjk0TDEyMy42NjQgMjA2LjIxMUMxMzQuMzIyIDIxMi4zNjMgMTUxLjYwMSAyMTIuMzYzIDE2Mi4yNTggMjA2LjIxMUwyNTQuOTYxIDE1Mi42OTRDMjY1LjYxOCAxNDYuNTQxIDI2NS42MTggMTM2LjU2NiAyNTQuOTYxIDEzMC40MTNMMTYyLjI1OCA3Ni44OTZaIiBmaWxsPSIjRDNDNkRBIi8+CjwvZz4KPHBhdGggZD0iTTEyMy42NjQgMzguNzg5NkMxMzQuMzIyIDMyLjYzNyAxNTEuNjAxIDMyLjYzNyAxNjIuMjU4IDM4Ljc4OTZMMjU0Ljk2MSA5Mi4zMDY4QzI2NS42MTggOTguNDU5NCAyNjUuNjE4IDEwOC40MzUgMjU0Ljk2MSAxMTQuNTg3TDE2Mi4yNTggMTY4LjEwNEMxNTEuNjAxIDE3NC4yNTcgMTM0LjMyMiAxNzQuMjU3IDEyMy42NjQgMTY4LjEwNEwzMC45NjE2IDExNC41ODdDMjAuMzA0MSAxMDguNDM1IDIwLjMwNDEgOTguNDU5NCAzMC45NjE2IDkyLjMwNjhMMTIzLjY2NCAzOC43ODk2WiIgZmlsbD0iI0MxQUNDRSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My45OTYgMTA1LjA2M0wxNjEuMjkzIDUxLjU0NThDMTUxLjE2OSA0NS43MDA5IDEzNC43NTQgNDUuNzAwOSAxMjQuNjI5IDUxLjU0NThMMzEuOTI2NSAxMDUuMDYzQzIxLjgwMTkgMTEwLjkwOCAyMS44MDE5IDEyMC4zODQgMzEuOTI2NSAxMjYuMjI5TDEyNC42MjkgMTc5Ljc0N0MxMzQuNzU0IDE4NS41OTIgMTUxLjE2OSAxODUuNTkyIDE2MS4yOTMgMTc5Ljc0N0wyNTMuOTk2IDEyNi4yMjlDMjY0LjEyMSAxMjAuMzg0IDI2NC4xMjEgMTEwLjkwOCAyNTMuOTk2IDEwNS4wNjNaTTE2Mi4yNTggNTAuOTg4OEMxNTEuNjAxIDQ0LjgzNjMgMTM0LjMyMiA0NC44MzYzIDEyMy42NjQgNTAuOTg4OEwzMC45NjE2IDEwNC41MDZDMjAuMzA0MiAxMTAuNjU5IDIwLjMwNDIgMTIwLjYzNCAzMC45NjE2IDEyNi43ODZMMTIzLjY2NCAxODAuMzA0QzEzNC4zMjIgMTg2LjQ1NiAxNTEuNjAxIDE4Ni40NTYgMTYyLjI1OCAxODAuMzA0TDI1NC45NjEgMTI2Ljc4NkMyNjUuNjE4IDEyMC42MzQgMjY1LjYxOCAxMTAuNjU5IDI1NC45NjEgMTA0LjUwNkwxNjIuMjU4IDUwLjk4ODhaIiBmaWxsPSIjQzFBQ0NFIi8+CjxwYXRoIGQ9Ik0xMjMuNjY1IDExLjY0OUMxMzQuMzIyIDUuNDk2NDIgMTUxLjYwMSA1LjQ5NjQxIDE2Mi4yNTkgMTEuNjQ5TDI1NC45NjEgNjUuMTY2MkMyNjUuNjE5IDcxLjMxODcgMjY1LjYxOSA4MS4yOTQgMjU0Ljk2MSA4Ny40NDY1TDE2Mi4yNTkgMTQwLjk2NEMxNTEuNjAxIDE0Ny4xMTYgMTM0LjMyMiAxNDcuMTE2IDEyMy42NjUgMTQwLjk2NEwzMC45NjIgODcuNDQ2NUMyMC4zMDQ2IDgxLjI5NCAyMC4zMDQ1IDcxLjMxODggMzAuOTYyIDY1LjE2NjJMMTIzLjY2NSAxMS42NDlaIiBmaWxsPSIjQTg4M0JCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUzLjk5NiA3Ny45MjI0TDE2MS4yOTQgMjQuNDA1MkMxNTEuMTY5IDE4LjU2MDMgMTM0Ljc1NCAxOC41NjAzIDEyNC42MjkgMjQuNDA1MkwzMS45MjY4IDc3LjkyMjRDMjEuODAyMyA4My43NjczIDIxLjgwMjMgOTMuMjQzOCAzMS45MjY5IDk5LjA4ODhMMTI0LjYzIDE1Mi42MDZDMTM0Ljc1NCAxNTguNDUxIDE1MS4xNjkgMTU4LjQ1MSAxNjEuMjk0IDE1Mi42MDZMMjUzLjk5NiA5OS4wODg4QzI2NC4xMjEgOTMuMjQzOCAyNjQuMTIxIDgzLjc2NzMgMjUzLjk5NiA3Ny45MjI0Wk0xNjIuMjU5IDIzLjg0ODJDMTUxLjYwMSAxNy42OTU2IDEzNC4zMjIgMTcuNjk1NiAxMjMuNjY1IDIzLjg0ODJMMzAuOTYyIDc3LjM2NTRDMjAuMzA0NSA4My41MTggMjAuMzA0NiA5My40OTMyIDMwLjk2MiA5OS42NDU4TDEyMy42NjUgMTUzLjE2M0MxMzQuMzIyIDE1OS4zMTYgMTUxLjYwMSAxNTkuMzE2IDE2Mi4yNTkgMTUzLjE2M0wyNTQuOTYxIDk5LjY0NThDMjY1LjYxOSA5My40OTMyIDI2NS42MTkgODMuNTE4IDI1NC45NjEgNzcuMzY1NEwxNjIuMjU5IDIzLjg0ODJaIiBmaWxsPSIjQTg4M0JCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQ1Ljc1OCA5My41NDY0TDE0NS43NTggOTcuNDU0QzE0NS43NTggOTkuMzk4NiAxNDguNDg4IDEwMC45NzUgMTUxLjg1NyAxMDAuOTc1SDE4MC4zMjVDMTgzLjY5NCAxMDAuOTc1IDE4Ni40MjUgOTkuMzk4NiAxODYuNDI1IDk3LjQ1NEwxODYuNDI1IDgxLjAxOTJDMTg2LjQyNSA3OS4wNzQ2IDE4My42OTQgNzcuNDk4MSAxODAuMzI1IDc3LjQ5ODFMMTczLjM3OSA3Ny40OTgxTDE3My4zNzkgNzkuODQ1NUwxODAuMzI1IDc5Ljg0NTVDMTgxLjQ0OCA3OS44NDU1IDE4Mi4zNTggODAuMzcxIDE4Mi4zNTggODEuMDE5MkwxODIuMzU4IDk3LjQ1NEMxODIuMzU4IDk4LjEwMjIgMTgxLjQ0OCA5OC42Mjc3IDE4MC4zMjUgOTguNjI3N0gxNTEuODU3QzE1MC43MzQgOTguNjI3NyAxNDkuODI0IDk4LjEwMjIgMTQ5LjgyNCA5Ny40NTRMMTQ5LjgyNCA5My41NDY0TDE0NS43NTggOTMuNTQ2NFpNMTY5LjMxMyA3OS44NDU1TDE2OS4zMTMgNzcuNDk4MUgxNjkuMzEyTDE2OS4zMTIgNzkuODQ1NUgxNjkuMzEzWk0xNDUuNzU4IDkxLjE5OUwxNDUuNzU4IDkxLjE5ODdMMTQ5LjgyNCA5MS4xOTg3TDE0OS44MjQgOTEuMTk5SDE0NS43NThaTTE1MS44NTcgNzcuNDk4MUwxNjEuMTggNzcuNDk4MVY3OS44NDU1TDE1MS44NTcgNzkuODQ1NUMxNTAuNzM0IDc5Ljg0NTUgMTQ5LjgyNCA4MC4zNzEgMTQ5LjgyNCA4MS4wMTkyTDE0OS44MjQgODYuNTA0TDE0NS43NTggODYuNTAzOUwxNDUuNzU4IDgxLjAxOTJDMTQ1Ljc1OCA3OS4wNzQ2IDE0OC40ODggNzcuNDk4MSAxNTEuODU3IDc3LjQ5ODFaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExMC45NjMgNzMuNDU3N0wxMDQuMTkzIDczLjQ1NzdDMTAwLjgyNCA3My40NTc3IDk4LjA5MzUgNzEuODgxMyA5OC4wOTM1IDY5LjkzNjZWNTMuNTAxOUM5OC4wOTM1IDUxLjU1NzIgMTAwLjgyNCA0OS45ODA4IDEwNC4xOTMgNDkuOTgwOEwxMzIuNjYxIDQ5Ljk4MDhDMTM2LjAzIDQ5Ljk4MDggMTM4Ljc2IDUxLjU1NzIgMTM4Ljc2IDUzLjUwMTlMMTM4Ljc2IDU3LjUxM0gxMzQuNjk0TDEzNC42OTQgNTMuNTAxOUMxMzQuNjk0IDUyLjg1MzYgMTMzLjc4NCA1Mi4zMjgyIDEzMi42NjEgNTIuMzI4MkwxMDQuMTkzIDUyLjMyODJDMTAzLjA3IDUyLjMyODIgMTAyLjE2IDUyLjg1MzYgMTAyLjE2IDUzLjUwMTlWNjkuOTM2NkMxMDIuMTYgNzAuNTg0OCAxMDMuMDcgNzEuMTEwMyAxMDQuMTkzIDcxLjExMDNMMTEwLjk2MyA3MS4xMTAzTDExMC45NjMgNzMuNDU3N1pNMTM4Ljc2IDY5LjkzNjZMMTM4Ljc2IDY0LjU1NDRMMTM0LjY5NCA2NC41NTQ0VjY5LjkzNjZDMTM0LjY5NCA3MC41ODQ4IDEzMy43ODQgNzEuMTEwMyAxMzIuNjYxIDcxLjExMDNMMTIzLjE2IDcxLjExMDNMMTIzLjE2IDczLjQ1NzdMMTMyLjY2MSA3My40NTc3QzEzNi4wMyA3My40NTc3IDEzOC43NiA3MS44ODEzIDEzOC43NiA2OS45MzY2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNjUuMjQ3IDg3LjIwOFY2My44ODY2QzE2NS4yNDcgNjIuOTc5MSAxNjMuOTczIDYyLjI0MzQgMTYyLjQwMSA2Mi4yNDM0SDEyMi4wMDNDMTIwLjQzMiA2Mi4yNDM0IDExOS4xNTcgNjIuOTc5MSAxMTkuMTU3IDYzLjg4NjZWODcuMjA4QzExOS4xNTcgODguMTE1NSAxMjAuNDMyIDg4Ljg1MTIgMTIyLjAwMyA4OC44NTEySDE2Mi40MDFDMTYzLjk3MyA4OC44NTEyIDE2NS4yNDcgODguMTE1NSAxNjUuMjQ3IDg3LjIwOFpNMTY5LjMxMyA2My44ODY2QzE2OS4zMTMgNjEuNjgyNiAxNjYuMjE5IDU5Ljg5NiAxNjIuNDAxIDU5Ljg5NkgxMjIuMDAzQzExOC4xODYgNTkuODk2IDExNS4wOTEgNjEuNjgyNiAxMTUuMDkxIDYzLjg4NjZWODcuMjA4QzExNS4wOTEgODkuNDEyIDExOC4xODYgOTEuMTk4NiAxMjIuMDAzIDkxLjE5ODZIMTYyLjQwMUMxNjYuMjE5IDkxLjE5ODYgMTY5LjMxMyA4OS40MTIgMTY5LjMxMyA4Ny4yMDhWNjMuODg2NloiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZGRkZGRfMV8xODQxIiB4PSItNDIuMDMxNSIgeT0iNTguMjgxNyIgd2lkdGg9IjM5MS45ODUiIGhlaWdodD0iNDE4LjU0MyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0Lz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzFfMTg0MSIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR4PSIxIiBkeT0iMTIiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTMiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMV8xODQxIiByZXN1bHQ9ImVmZmVjdDJfZHJvcFNoYWRvd18xXzE4NDEiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iMyIgZHk9IjQ3Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjI0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA5IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDJfZHJvcFNoYWRvd18xXzE4NDEiIHJlc3VsdD0iZWZmZWN0M19kcm9wU2hhZG93XzFfMTg0MSIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR4PSI2IiBkeT0iMTA3Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMyIi8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA1IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDNfZHJvcFNoYWRvd18xXzE4NDEiIHJlc3VsdD0iZWZmZWN0NF9kcm9wU2hhZG93XzFfMTg0MSIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR4PSIxMSIgZHk9IjE5MCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzOCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3Q0X2Ryb3BTaGFkb3dfMV8xODQxIiByZXN1bHQ9ImVmZmVjdDVfZHJvcFNoYWRvd18xXzE4NDEiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3Q1X2Ryb3BTaGFkb3dfMV8xODQxIiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzFfMTg0MSI+CjxyZWN0IHdpZHRoPSIyODQuMzQyIiBoZWlnaHQ9IjI0My45ODMiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4wMDAyNDQxNDEgMC41MDg3ODkpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);