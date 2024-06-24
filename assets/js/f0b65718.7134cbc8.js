"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[55934],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),d=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=d(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,s(s({ref:e},l),{},{components:n})):a.createElement(m,s({ref:e},l))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48693:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r={title:"Provide data",sidebar_position:2},s=void 0,i={unversionedId:"tutorials/e2e/boost/provideData",id:"tutorials/e2e/boost/provideData",title:"Provide data",description:"Create first data asset",source:"@site/docs/tutorials/e2e/boost/provideData.md",sourceDirName:"tutorials/e2e/boost",slug:"/tutorials/e2e/boost/provideData",permalink:"/eclipse-tractusx.github.io/docs/tutorials/e2e/boost/provideData",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/tutorials/e2e/boost/provideData.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Provide data",sidebar_position:2},sidebar:"tutorials",previous:{title:"Chapter 3: Boost",permalink:"/eclipse-tractusx.github.io/docs/tutorials/e2e/boost/"},next:{title:"Consume data",permalink:"/eclipse-tractusx.github.io/docs/tutorials/e2e/boost/consumeData"}},c={},d=[{value:"Create first data asset",id:"create-first-data-asset",level:2},{value:"Request catalog",id:"request-catalog",level:2},{value:"Create first access policy",id:"create-first-access-policy",level:2},{value:"Request catalog - second try",id:"request-catalog---second-try",level:2},{value:"Create first contract definition",id:"create-first-contract-definition",level:2},{value:"Request catalog - third try",id:"request-catalog---third-try",level:2},{value:"Notice",id:"notice",level:2}],l={toc:d};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-first-data-asset"},"Create first data asset"),(0,o.kt)("p",null,"In this step we will focus on inserting data into our provider connector using\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/eclipse-edc-bot/management-api"},"Management API"),". We will use plain\nCLI tools (",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),") for this, but feel free to use graphical tools such as Postman or Insomnia."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Alice acts here as a data consumer and Bob as a data provider."),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Bob -> ",(0,o.kt)("a",{parentName:"li",href:"http://dataprovider-controlplane.tx.test"},"http://dataprovider-controlplane.tx.test")),(0,o.kt)("li",{parentName:"ul"},"Alice -> ",(0,o.kt)("a",{parentName:"li",href:"http://dataconsumer-1-controlplane.tx.test"},"http://dataconsumer-1-controlplane.tx.test")))),(0,o.kt)("p",null,"Alice, as a data consumer, wants to consume data from Bob. Bob, as a data provider, needs to create an asset for Alice.\nAction (Bob): Create this asset using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://dataprovider-controlplane.tx.test/management/v3/assets\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: TEST2\' \\\n--data-raw \'{\n    "@context": {},\n    "@type": "Asset",\n    "@id": "3",\n    "properties": {\n        "description": "Product EDC Demo Asset 3"\n    },\n    "dataAddress": {\n        "@type": "DataAddress",\n        "type": "HttpData",\n        "baseUrl": "https://jsonplaceholder.typicode.com/todos/3"\n    }\n}\' | jq\n')),(0,o.kt)("p",null,"Just to be sure, that the asset was created succesfully, Bob can check the asset using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST http://dataprovider-controlplane.tx.test/management/v2/assets/request -H "x-api-key: TEST2" -H "content-type: application/json" | jq\n')),(0,o.kt)("p",null,"The result shows the already existing assets and the newly created asset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "@id": "registry-asset",\n    "@type": "edc:Asset",\n    "edc:properties": {\n      "edc:type": "data.core.digitalTwinRegistry",\n      "edc:description": "Digital Twin Registry Endpoint of IRS DEV",\n      "edc:id": "registry-asset"\n    },\n    "edc:dataAddress": {\n      "@type": "edc:DataAddress",\n      "edc:proxyPath": "true",\n      "edc:type": "HttpData",\n      "edc:proxyMethod": "true",\n      "edc:proxyQueryParams": "true",\n      "edc:proxyBody": "true",\n      "edc:baseUrl": "http://umbrella-dataprovider-dtr:8080/api/v3.0"\n    },\n    "@context": {\n      "dct": "https://purl.org/dc/terms/",\n      "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n      "edc": "https://w3id.org/edc/v0.0.1/ns/",\n      "dcat": "https://www.w3.org/ns/dcat/",\n      "odrl": "http://www.w3.org/ns/odrl/2/",\n      "dspace": "https://w3id.org/dspace/v0.8/"\n    }\n  },\n  {\n    "@id": "urn:uuid:dc641d45-95e7-4284-a472-43f30255d0cb",\n    "@type": "edc:Asset",\n    "edc:properties": {\n      "edc:description": "IRS EDC Test Asset",\n      "edc:id": "urn:uuid:dc641d45-95e7-4284-a472-43f30255d0cb"\n    },\n    "edc:dataAddress": {\n      "@type": "edc:DataAddress",\n      "edc:proxyPath": "true",\n      "edc:type": "HttpData",\n      "edc:proxyMethod": "false",\n      "edc:proxyQueryParams": "false",\n      "edc:proxyBody": "false",\n      "edc:baseUrl": "http://umbrella-dataprovider-submodelserver:8080"\n    },\n    "@context": {\n      "dct": "https://purl.org/dc/terms/",\n      "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n      "edc": "https://w3id.org/edc/v0.0.1/ns/",\n      "dcat": "https://www.w3.org/ns/dcat/",\n      "odrl": "http://www.w3.org/ns/odrl/2/",\n      "dspace": "https://w3id.org/dspace/v0.8/"\n    }\n  },\n  {\n    "@id": "3",\n    "@type": "edc:Asset",\n    "edc:properties": {\n      "edc:description": "Product EDC Demo Asset 3",\n      "edc:id": "3"\n    },\n    "edc:dataAddress": {\n      "@type": "edc:DataAddress",\n      "edc:type": "HttpData",\n      "edc:baseUrl": "https://jsonplaceholder.typicode.com/todos/3"\n    },\n    "@context": {\n      "dct": "https://purl.org/dc/terms/",\n      "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n      "edc": "https://w3id.org/edc/v0.0.1/ns/",\n      "dcat": "https://www.w3.org/ns/dcat/",\n      "odrl": "http://www.w3.org/ns/odrl/2/",\n      "dspace": "https://w3id.org/dspace/v0.8/"\n    }\n  }\n]\n')),(0,o.kt)("h2",{id:"request-catalog"},"Request catalog"),(0,o.kt)("p",null,"Bob tells Alice, that he created an asset, and she should now be able to request it. In the next step, Alice requests a contract offer catalog. In the catalog, all contract offers for Alice are listed."),(0,o.kt)("p",null,"Action (Alice): Execute a request using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://dataconsumer-1-controlplane.tx.test/management/v2/catalog/request\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: TEST1\' \\\n--data-raw \'{\n    "@context": {},\n    "protocol": "dataspace-protocol-http",\n    "counterPartyAddress": "http://dataprovider-controlplane.tx.test/api/v1/dsp",\n    "querySpec": {\n        "offset": 0,\n        "limit": 100\n    }\n}\' | jq\n')),(0,o.kt)("p",null,"The requested catalog looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@id": "be17c3e7-3156-46db-8934-f1ea92d1f2a3",\n  "@type": "dcat:Catalog",\n  "dcat:dataset": [\n    {\n      "@id": "registry-asset",\n      "@type": "dcat:Dataset",\n      "odrl:hasPolicy": {\n        "@id": "MTcxODBlMTAtNmFjNS00NTYzLWE2MTUtNGM1MjQ5ZTUxMTU5:cmVnaXN0cnktYXNzZXQ=:NzE0ODk2YjMtY2VlYy00NmY5LWE5ZTgtY2NiMWI1NGUzOTgy",\n        "@type": "odrl:Set",\n        "odrl:permission": {\n          "odrl:target": "registry-asset",\n          "odrl:action": {\n            "odrl:type": "USE"\n          },\n          "odrl:constraint": {\n            "odrl:or": {\n              "odrl:leftOperand": "PURPOSE",\n              "odrl:operator": {\n                "@id": "odrl:eq"\n              },\n              "odrl:rightOperand": "ID 3.0 Trace"\n            }\n          }\n        },\n        "odrl:prohibition": [],\n        "odrl:obligation": [],\n        "odrl:target": "registry-asset"\n      },\n      "dcat:distribution": [\n        {\n          "@type": "dcat:Distribution",\n          "dct:format": {\n            "@id": "HttpProxy"\n          },\n          "dcat:accessService": "49a693e0-835d-457a-99b4-e781f2bd643d"\n        },\n        {\n          "@type": "dcat:Distribution",\n          "dct:format": {\n            "@id": "AmazonS3"\n          },\n          "dcat:accessService": "49a693e0-835d-457a-99b4-e781f2bd643d"\n        }\n      ],\n      "edc:type": "data.core.digitalTwinRegistry",\n      "edc:description": "Digital Twin Registry Endpoint of IRS DEV",\n      "edc:id": "registry-asset"\n    },\n    {\n      "@id": "urn:uuid:dc641d45-95e7-4284-a472-43f30255d0cb",\n      "@type": "dcat:Dataset",\n      "odrl:hasPolicy": {\n        "@id": "MTIzYjJlM2QtNTUxOC00ZWViLWFmMGItNTU5ZTYxZGY3Zjhk:dXJuOnV1aWQ6ZGM2NDFkNDUtOTVlNy00Mjg0LWE0NzItNDNmMzAyNTVkMGNi:YzBhOGFhOTQtNzg4OS00Y2MxLTkzNmMtMWYwMTNkODc3Nzk4",\n        "@type": "odrl:Set",\n        "odrl:permission": {\n          "odrl:target": "urn:uuid:dc641d45-95e7-4284-a472-43f30255d0cb",\n          "odrl:action": {\n            "odrl:type": "USE"\n          },\n          "odrl:constraint": {\n            "odrl:or": {\n              "odrl:leftOperand": "PURPOSE",\n              "odrl:operator": {\n                "@id": "odrl:eq"\n              },\n              "odrl:rightOperand": "ID 3.0 Trace"\n            }\n          }\n        },\n        "odrl:prohibition": [],\n        "odrl:obligation": [],\n        "odrl:target": "urn:uuid:dc641d45-95e7-4284-a472-43f30255d0cb"\n      },\n      "dcat:distribution": [\n        {\n          "@type": "dcat:Distribution",\n          "dct:format": {\n            "@id": "HttpProxy"\n          },\n          "dcat:accessService": "49a693e0-835d-457a-99b4-e781f2bd643d"\n        },\n        {\n          "@type": "dcat:Distribution",\n          "dct:format": {\n            "@id": "AmazonS3"\n          },\n          "dcat:accessService": "49a693e0-835d-457a-99b4-e781f2bd643d"\n        }\n      ],\n      "edc:description": "IRS EDC Test Asset",\n      "edc:id": "urn:uuid:dc641d45-95e7-4284-a472-43f30255d0cb"\n    }\n  ],\n  "dcat:service": {\n    "@id": "49a693e0-835d-457a-99b4-e781f2bd643d",\n    "@type": "dcat:DataService",\n    "dct:terms": "connector",\n    "dct:endpointUrl": "http://dataprovider-controlplane.tx.test/api/v1/dsp"\n  },\n  "edc:participantId": "BPNL00000003AYRE",\n  "@context": {\n    "dct": "https://purl.org/dc/terms/",\n    "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "dcat": "https://www.w3.org/ns/dcat/",\n    "odrl": "http://www.w3.org/ns/odrl/2/",\n    "dspace": "https://w3id.org/dspace/v0.8/"\n  }\n}\n')),(0,o.kt)("h2",{id:"create-first-access-policy"},"Create first access policy"),(0,o.kt)("p",null,"Let\xb4s see if Alice can see the Asset (ID: 3)."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},'As you can see in the response, the data offer "Product EDC Demo Asset 3" (asset ID: 3) does not appear. Unfortunately, Alice sees some contract offers but she cannot find the contract offer from Bob.')),(0,o.kt)("p",null,"Alice calls Bob and says she can\xb4t see the asset. Bob remembers that he did not create an access policy. An access policy defines who is allowed to see a data offering."),(0,o.kt)("p",null,"Action (Bob): Create the access policy using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://dataprovider-controlplane.tx.test/management/v2/policydefinitions\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: TEST2\' \\\n--data-raw \'{\n  "@context": {\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "@type": "PolicyDefinitionRequestDto",\n  "@id": "3-1",\n  "policy": {\n    "@type": "Policy"\n  }\n}\' | jq\n')),(0,o.kt)("p",null,"The polica was successfully created, if the response is something like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "edc:IdResponse",\n  "@id": "3-1",\n  "edc:createdAt": 1715627034106,\n  "@context": {\n    "dct": "https://purl.org/dc/terms/",\n    "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "dcat": "https://www.w3.org/ns/dcat/",\n    "odrl": "http://www.w3.org/ns/odrl/2/",\n    "dspace": "https://w3id.org/dspace/v0.8/"\n  }\n}\n')),(0,o.kt)("h2",{id:"request-catalog---second-try"},"Request catalog - second try"),(0,o.kt)("p",null,"Now that Bob created an access policy, Alice can once again try to access Bob's asset."),(0,o.kt)("p",null,"Action (Alice): Execute the request again using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://dataconsumer-1-controlplane.tx.test/management/v2/catalog/request\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: TEST1\' \\\n--data-raw \'{\n    "@context": {},\n    "protocol": "dataspace-protocol-http",\n    "counterPartyAddress": "http://dataprovider-controlplane.tx.test/api/v1/dsp",\n    "querySpec": {\n        "offset": 0,\n        "limit": 100\n    }\n}\' | jq\n')),(0,o.kt)("h2",{id:"create-first-contract-definition"},"Create first contract definition"),(0,o.kt)("p",null,"Let\xb4s see if Alice can see the Asset."),(0,o.kt)("p",null,"Once again Alice cannot find the data offer. This is by design and to be expected since Bob has only created an asset and a policy definition. An asset and a policy can not be displayed to Alice as a consumer without a contract definition."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is the first lesson in this tutorial: For providing data, a contract definition must be created on the provider side. This must always contain an asset, an access policy, and a contract policy.")),(0,o.kt)("p",null,"Contract definitions state how assets and policies are linked together. Contract definitions express under what conditions an asset is published in a data space. Those conditions are comprised of a contract policy and an access policy. Those policies are referenced by ID, that means they must already exist in the policy store before creating the contract definition."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Access policy:")," determines whether or not a particular consumer can see an asset in the provider's catalog. For example, we may want to restrict certain assets such that only selected consumers from a list of selected partners can access the asset. This can be done using a unique identifier such as the Business Partner Number (BPN). Other data space participants than those whose BPN is listed in the access policy wouldn't even be able to see the asset in the catalog."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Contract policy:")," determines the conditions for initiating a contract negotiation for a particular asset. Note that this does not automatically guarantee the successful creation of a contract, it merely expresses the eligibility to start the negotiation.")),(0,o.kt)("p",null,"Find additional information on transferring data in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/docs/blob/main/developer/handbook.md"},"Developer's Handbook"),"."),(0,o.kt)("p",null,"Since an access policy has already been created, a contract policy must be created and linked in a contract definition."),(0,o.kt)("p",null,"Action (BoB): Create the contract policy using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://dataprovider-controlplane.tx.test/management/v2/policydefinitions\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: TEST2\' \\\n--data-raw \'{\n  "@context": {\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "@type": "PolicyDefinitionRequestDto",\n  "@id": "3-2",\n  "policy": {\n    "@type": "Policy"\n  }\n}\' | jq\n')),(0,o.kt)("p",null,"And again the policy was successfully created"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "edc:IdResponse",\n  "@id": "3-2",\n  "edc:createdAt": 1715627218849,\n  "@context": {\n    "dct": "https://purl.org/dc/terms/",\n    "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "dcat": "https://www.w3.org/ns/dcat/",\n    "odrl": "http://www.w3.org/ns/odrl/2/",\n    "dspace": "https://w3id.org/dspace/v0.8/"\n  }\n}\n')),(0,o.kt)("p",null,"Action (Bob): Create a contract definition including the asset and the policies you have created. For this, use the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://dataprovider-controlplane.tx.test/management/v2/contractdefinitions\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: TEST2\' \\\n--data-raw \'{\n  "@context": {},\n  "@id": "3",\n  "@type": "ContractDefinition",\n  "accessPolicyId": "3-1",\n  "contractPolicyId": "3-2",\n  "assetsSelector": {\n    "@type": "CriterionDto",\n    "operandLeft": "https://w3id.org/edc/v0.0.1/ns/id",\n    "operator": "=",\n    "operandRight": "3"\n  }\n}\' | jq\n')),(0,o.kt)("p",null,"As a check, the result should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "edc:IdResponse",\n  "@id": "3",\n  "edc:createdAt": 1715627302307,\n  "@context": {\n    "dct": "https://purl.org/dc/terms/",\n    "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "dcat": "https://www.w3.org/ns/dcat/",\n    "odrl": "http://www.w3.org/ns/odrl/2/",\n    "dspace": "https://w3id.org/dspace/v0.8/"\n  }\n}\n')),(0,o.kt)("h2",{id:"request-catalog---third-try"},"Request catalog - third try"),(0,o.kt)("p",null,"Let\xb4s see if Alice can finally see the Asset.\nAction (Alice): Execute the request again using the following ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \'http://dataconsumer-1-controlplane.tx.test/management/v2/catalog/request\' \\\n--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: TEST1\' \\\n--data-raw \'{\n    "@context": {},\n    "protocol": "dataspace-protocol-http",\n    "counterPartyAddress": "http://dataprovider-controlplane.tx.test/api/v1/dsp",\n    "querySpec": {\n        "offset": 0,\n        "limit": 100\n    }\n}\' | jq\n')),(0,o.kt)("p",null,"In the response an additional entry should appear:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n      "@id": "3",\n      "@type": "dcat:Dataset",\n      "odrl:hasPolicy": {\n        "@id": "Mw==:Mw==:ZDA5YzE2ZWYtMzkyZC00ODExLWE5NjEtN2U4ZjRhMTU3ZGRh",\n        "@type": "odrl:Set",\n        "odrl:permission": [],\n        "odrl:prohibition": [],\n        "odrl:obligation": [],\n        "odrl:target": "3"\n      },\n      "dcat:distribution": [\n        {\n          "@type": "dcat:Distribution",\n          "dct:format": {\n            "@id": "HttpProxy"\n          },\n          "dcat:accessService": "49a693e0-835d-457a-99b4-e781f2bd643d"\n        },\n        {\n          "@type": "dcat:Distribution",\n          "dct:format": {\n            "@id": "AmazonS3"\n          },\n          "dcat:accessService": "49a693e0-835d-457a-99b4-e781f2bd643d"\n        }\n      ],\n      "edc:description": "Product EDC Demo Asset 3",\n      "edc:id": "3"\n    }\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Finally Alice can see the Contract Offer from Bob. Congratulations on yor first successful offering of data in your own data space!")),(0,o.kt)("h2",{id:"notice"},"Notice"),(0,o.kt)("p",null,"This work is licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 sovity GmbH"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 msg systems AG"),(0,o.kt)("li",{parentName:"ul"},"Source URL: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"))))}p.isMDXComponent=!0}}]);