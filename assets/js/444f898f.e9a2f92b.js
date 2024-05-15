"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[41814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),c=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(r.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,g=u["".concat(r,".").concat(p)]||u[p]||h[p]||o;return n?i.createElement(g,s(s({ref:t},d),{},{components:n})):i.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},17433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={},s="DTR Tutorial",l={unversionedId:"tutorials/e2e/boost/DTR_Tutorial",id:"tutorials/e2e/boost/DTR_Tutorial",title:"DTR Tutorial",description:"Tutorial Goal",source:"@site/docs/tutorials/e2e/boost/DTR_Tutorial.md",sourceDirName:"tutorials/e2e/boost",slug:"/tutorials/e2e/boost/DTR_Tutorial",permalink:"/eclipse-tractusx.github.io/docs/tutorials/e2e/boost/DTR_Tutorial",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/tutorials/e2e/boost/DTR_Tutorial.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorials",previous:{title:"Restricting users from accessing an asset",permalink:"/eclipse-tractusx.github.io/docs/tutorials/e2e/boost/restrictData"},next:{title:"Changelog",permalink:"/eclipse-tractusx.github.io/docs/tutorials/e2e/CHANGELOG"}},r={},c=[{value:"Tutorial Goal",id:"tutorial-goal",level:2},{value:"Introduction",id:"introduction",level:2},{value:"High Level Architecture",id:"high-level-architecture",level:3},{value:"Exchange Digital Twins",id:"exchange-digital-twins",level:2},{value:"Register a DTR in your EDC",id:"register-a-dtr-in-your-edc",level:3},{value:"Create the DTR asset",id:"create-the-dtr-asset",level:4},{value:"Create a policy",id:"create-a-policy",level:4},{value:"Contract Definition",id:"contract-definition",level:4},{value:"Register a Digital Twin",id:"register-a-digital-twin",level:3},{value:"Create a submodel",id:"create-a-submodel",level:4},{value:"Host/store a submodel",id:"hoststore-a-submodel",level:4},{value:"Create Contract Definition at EDC with the submodel",id:"create-contract-definition-at-edc-with-the-submodel",level:4},{value:"Register/create a Digital Twin at the DTR",id:"registercreate-a-digital-twin-at-the-dtr",level:4},{value:"Reference a Submodel in the Digital Twin",id:"reference-a-submodel-in-the-digital-twin",level:4},{value:"Registering new Submodels at existing Digital Twins",id:"registering-new-submodels-at-existing-digital-twins",level:4},{value:"Find and consume a Digital Twin",id:"find-and-consume-a-digital-twin",level:3},{value:"Notice",id:"notice",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dtr-tutorial"},"DTR Tutorial"),(0,a.kt)("h2",{id:"tutorial-goal"},"Tutorial Goal"),(0,a.kt)("p",null,"Alongside the connector, the Digital Twin Registry (DTR) is another central component in a data ecosystem when it comes to exchanging digital twins. Anyone who provides digital twins in Catena-X must register them in a DTR so that they can be found by other parties."),(0,a.kt)("p",null,"This tutorial focuses on the working with the DTR. You will learn what the DTR is, how to deploy it and go through a complete use case scenario by depositing a DTR in the EDC, registering a digital twin in the DTR, and showing how external parties can find and consume the digital twin."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,'Catena-X uses the Asset Administration Shell (AAS) to represent digital twins. Such a digital twin is basically a shell with an ID in UUID-format that makes it uniquely identifiable. Also it contains IDs ("specificAssetIds") that connect the shell with the original asset it represents (e.g. the "manufacturerPartId"). The shell also contains SubmodelDescriptors which reference to submodels that contain the actual data of specific aspects of the asset.'),(0,a.kt)("p",null,"The Digital Twin Registry (DTR) contains a list of all registered digital twins of the owner and therefore acts as an address book for Digital Twins. With the DTR of a data provider, a data consumer can therefore find digital twin and also get directed to the desired submodels of the twin."),(0,a.kt)("p",null,"Further details can be found in the ",(0,a.kt)("a",{parentName:"p",href:"https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/dt-kit-software-development-view/"},"Digital Twin KIT")," or the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-digital-twin-registry/tree/main/docs"},"sldt-digital-twin-registry")," Github repository."),(0,a.kt)("p",null,"In this tutorial, Bob will assume the role of an automotive supplier that manufactures gearboxes and acts as the data provider. Alice represents an OEM that uses these gearboxes. Alice's goal is to calculate the product carbon footprint (PCF) of a car, and she also needs the carbon footprints of the individual parts to calculate the total footprint. Therefore, Alice is the data consumer in this tutorial."),(0,a.kt)("p",null,"The steps of the tutorial are as follows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bob registers a DTR at his EDC"),(0,a.kt)("li",{parentName:"ul"},"Bob registers a Digital Twin at his DTR"),(0,a.kt)("li",{parentName:"ul"},"Alice finds and consumes the Digital Twin")),(0,a.kt)("p",null,"This tutorial will guide you through the steps outlined above. For a deeper understanding, more detailed documentation will be linked."),(0,a.kt)("h3",{id:"high-level-architecture"},"High Level Architecture"),(0,a.kt)("h2",{id:"exchange-digital-twins"},"Exchange Digital Twins"),(0,a.kt)("h3",{id:"register-a-dtr-in-your-edc"},"Register a DTR in your EDC"),(0,a.kt)("h4",{id:"create-the-dtr-asset"},"Create the DTR asset"),(0,a.kt)("p",null,"To ensure that Bob's DTR becomes visible for Alice and to start the data exchange between them, Bob has to create a data asset."),(0,a.kt)("p",null,"Action (Bob): Create a data asset using the following command:"),(0,a.kt)("p",null,'(note: that the "asset:prop:type" is standardized with "data.core.digitalTwinRegistry" for the Digital Twin Registry.)'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl",metastring:"--location 'http://dataprovider-controlplane.tx.test/management/v3/assets' \\","--location":!0,"'http://dataprovider-controlplane.tx.test/management/v3/assets'":!0,"\\":!0},'--header \'Content-Type: application/json\' \\\n--header \'X-Api-Key: TEST2\' \\\n--data-raw \'{\n   "@context":{\n      "edc":"https://w3id.org/edc/v0.0.1/ns/",\n      "cx-common":"https://w3id.org/catenax/ontology/common#",\n      "cx-taxo":"https://w3id.org/catenax/taxonomy#",\n      "dct":"https://purl.org/dc/terms/"\n   },\n   "@id":"{{ASSET_ID}}",\n   "properties":{\n      "dct:type":{\n         "@id":"cx-taxo:DigitalTwinRegistry"\n      }\n   },\n   "dataAddress":{\n      "@type":"DataAddress",\n      "type":"HttpData",\n      "baseUrl":"{{BACKEND_SERVICE}}",\n      "proxyPath":"true",\n      "proxyBody":"true",\n      "proxyMethod":"true",\n      "proxyQueryParams":"true",\n      "oauth2:clientId":"satest02",\n      "oauth2:clientSecretKey":"{{REGISTRY_CLIENT_SECRET_KEY}}",\n      "oauth2:tokenUrl":"http://centralidp.tx.test/auth/realms/CX-Central/protocol/openid-connect/token",\n      "oauth2:scope":"{{REGISTRY_TOKEN_SCOPE}}"\n   }\n}\'\n')),(0,a.kt)("h4",{id:"create-a-policy"},"Create a policy"),(0,a.kt)("p",null,"After Bob has created an data asset, he must define a BPN-restrictive policy in order to give Alice access to the asset. This policy is not standardized and can be chosen according to its needs. Bob wants to define the policy that only Alice can see the DTR Asset."),(0,a.kt)("p",null,"Action (Bob): Defines the access policy using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'{\n    "@context": {\n        "odrl": "http://www.w3.org/ns/odrl/2/"\n    },\n    "@type": "PolicyDefinitionRequestDto",\n    "@id": "{{POLICY_ID}}",\n    "policy": {\n  "@type": "Policy",\n  "odrl:permission" : [{\n   "odrl:action" : "USE",\n   "odrl:constraint" : {\n    "@type": "LogicalConstraint",\n    "odrl:or" : [{\n     "@type" : "Constraint",\n     "odrl:leftOperand" : "BusinessPartnerNumber",\n     "odrl:operator" : {\n                        "@id": "odrl:eq"\n                    },\n     "odrl:rightOperand" : "{{CONSUMER_BPN}}"\n    }]\n   }\n  }]\n    }\n}\n')),(0,a.kt)("h4",{id:"contract-definition"},"Contract Definition"),(0,a.kt)("p",null,"To offer the DTR in his EDC Catalog, Bob has to create a contract definition. This contains linking the data asset with the policy."),(0,a.kt)("p",null,"Action (Bob): Create the contract policy using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'{\n    "@context": {},\n    "@id": "{{CONTRACT_DEFINITION_ID}}",\n    "@type": "ContractDefinition",\n    "accessPolicyId": "{{ACCESS_POLICY_ID}}",\n    "contractPolicyId": "{{CONTRACT_POLICY_ID}}",\n    "assetsSelector" : {\n        "@type" : "CriterionDto",\n        "operandLeft": "{{EDC_NAMESPACE}}id",\n        "operator": "=",\n        "operandRight": "{{ASSET_ID}}"\n    }\n}\n')),(0,a.kt)("p",null,"The DTR Asset from Bob is now available for Alice to request via contract negotiation. Currently it is still empty. Therefore Bob will register his first digital twin in the next step of this tutorial."),(0,a.kt)("p",null,"Continue the tutorial in ",(0,a.kt)("a",{parentName:"p",href:"#register-a-digital-twin"},"Register a Digital")," Twin."),(0,a.kt)("h3",{id:"register-a-digital-twin"},"Register a Digital Twin"),(0,a.kt)("p",null,"The basic steps for providing digital twins with the DTR contain:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a compliant submodel"),(0,a.kt)("li",{parentName:"ul"},"Store the submodel on a submodel server"),(0,a.kt)("li",{parentName:"ul"},"Register/create a digital twin at the DTR"),(0,a.kt)("li",{parentName:"ul"},"Reference the Submodel in the digital twin")),(0,a.kt)("h4",{id:"create-a-submodel"},"Create a submodel"),(0,a.kt)("p",null,"Submodels needs to be compliant to the domain specified standards. Bob has already prepaired the submodel he wants to share with Alice. Thefore the first step is already taken care of."),(0,a.kt)("h4",{id:"hoststore-a-submodel"},"Host/store a submodel"),(0,a.kt)("p",null,'Bob also needs to store his submodels somewhere. Usually a submodel server is used for this task. For this tutorial a service called "backend-data-service" (short BDS) is provided. This service fulfills the role of the submodel server. It can store any text based data (e.g. JSON, XML, plain text) under a specific ID. This data can be received again, by using the same ID. Bob will use this service to host his data.'),(0,a.kt)("p",null,"Action (Bob): Store submodel on the BDS using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'id="bobs-data"\nbdsBaseUrl="http://localhost/bobs-bds"\nclusterInternalBdsBaseUrl="http://bobs-bds-bds"\n\ncurl -i -X POST "${bdsBaseUrl}/data/${id}" -H "Content-Type: application/json" --data-raw \'{\n    "diameter": 380,\n    "length": 810,\n    "width": 590,\n    "weight": 85,\n    "height": 610\n}\'\n')),(0,a.kt)("h4",{id:"create-contract-definition-at-edc-with-the-submodel"},"Create Contract Definition at EDC with the submodel"),(0,a.kt)("p",null,"Bob has now stored his submodel on the BDS. However, because he wants to preserve data sovereignty over his data, he cannot directly provide access to the BDS. Instead, the data exchange shall take place via the EDC."),(0,a.kt)("p",null,'Therefore Bob needs to create an according contract definition. This follows the same three steps as explained in "Create DTR Asset" of creating an data asset, creating a policy and finally creating the contract definition.'),(0,a.kt)("p",null,"Info:"),(0,a.kt)("p",null,'edcManagementBaseUrl="',(0,a.kt)("a",{parentName:"p",href:"http://localhost/bob/management"},"http://localhost/bob/management"),'"\nedcApiKey="password"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Asset\n# assetId="$(uuidgen)"\nassetId="0bc6a8af-8682-4dba-86b1-0433f9762e42"\nclusterInternalBdsBaseUrl="http://bobs-bds-bds:8080"\nbdsDataId="bobs-data"\nassetUrl="${clusterInternalBdsBaseUrl}/data/${bdsDataId}"\n\n# Policy\n# policyId="$(uuidgen)"\npolicyId="1bc6a8af-8682-4dba-86b1-0433f9762e42"\n\n# Contract Definition\n# contractDefinitionId="$(uuidgen)"\ncontractDefinitionId="2bc6a8af-8682-4dba-86b1-0433f9762e42"\n')),(0,a.kt)("p",null,"Action (Bob): Create a data asset with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'curl -i -X POST "${edcManagementBaseUrl}/v3/assets" -H "X-Api-Key: ${edcApiKey}" -H "Content-Type: application/json" --data-raw "{\n    \\"@context\\": {},\n    \\"@id\\": \\"${assetId}\\",\n    \\"properties\\": {\n        \\"description\\": \\"Product EDC Demo Asset\\"\n    },\n    \\"dataAddress\\": {\n        \\"@type\\": \\"DataAddress\\",\n        \\"baseUrl\\": \\"${assetUrl}\\",\n        \\"type\\": \\"HttpData\\"\n    }\n}" | jq\n')),(0,a.kt)("p",null,"Action (Bob): Create a Policy with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'curl -i -X POST "${edcManagementBaseUrl}/v2/policydefinitions" -H "X-Api-Key: ${edcApiKey}" -H "Content-Type: application/json" --data-raw "{\n    \\"@context\\": {\n        \\"odrl\\": \\"http://www.w3.org/ns/odrl/2/\\"\n    },\n    \\"@type\\": \\"PolicyDefinitionRequestDto\\",\n    \\"@id\\": \\"${policyId}\\",\n    \\"policy\\": {\n        \\"@type\\": \\"Policy\\",\n        \\"odrl:permission\\": [{\n            \\"odrl:action\\": \\"USE\\",\n            \\"odrl:constraint\\": {\n                \\"@type\\": \\"LogicalConstraint\\",\n                \\"odrl:or\\": []\n            }\n        }]\n    }\n}" | jq\n')),(0,a.kt)("p",null,"Action (Bob): Create a contract definition with the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'curl -i -X POST "${edcManagementBaseUrl}/v2/contractdefinitions" -H "X-Api-Key: ${edcApiKey}" -H "Content-Type: application/json" --data-raw "{\n    \\"@context\\": {},\n    \\"@id\\": \\"${contractDefinitionId}\\",\n    \\"@type\\": \\"ContractDefinition\\",\n    \\"accessPolicyId\\": \\"${policyId}\\",\n    \\"contractPolicyId\\": \\"${policyId}\\",\n    \\"assetsSelector\\" : {\n        \\"@type\\" : \\"CriterionDto\\",\n        \\"operandLeft\\": \\"https://w3id.org/edc/v0.0.1/ns/id\\",\n        \\"operator\\": \\"=\\",\n        \\"operandRight\\": \\"${assetId}\\"\n    }\n}" | jq\n')),(0,a.kt)("p",null,"The submodel is now stored at the BDS and made available through a contract definition at the EDC."),(0,a.kt)("h4",{id:"registercreate-a-digital-twin-at-the-dtr"},"Register/create a Digital Twin at the DTR"),(0,a.kt)("p",null,"Now that Bob has stored his submodel at the BDS and offered it at the EDC for sovereign data exchange, he wants to make it findable via the DTR. This contains two steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Register/create a Digital Twin at the DTR"),(0,a.kt)("li",{parentName:"ul"},"Reference the submodel in the Digital Twin")),(0,a.kt)("p",null,"The registration of a digital twin in Catena-X is equivalent to the creation of a new digital twin. Thus, Bob should always ensure that there is no digital twin created for the respective \u201cspecificAssetIds\u201d yet to avoid duplicates."),(0,a.kt)("p",null,"Action (Bob): Create a new digital twin at the DTR with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'POST /shell-descriptors\n{\n  "id": "urn:uuid:e5c96ab5-896a-1234-8761-efd74777ca97",\n  "idShort": "myAas",\n  "specificAssetIds": [\n    {\n      "name": "manufacturerPartId",\n      "value": "123-345-567103",\n      "externalSubjectId": {\n        "type": "ExternalReference",\n        "keys": [\n          {\n            "type": "GlobalReference",\n            "value": "{{BPN of the party privileged}}"\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Bob has now successfully created/registered a Digital Twin at his DTR.  Right now the Digital Twin is pretty empty, except the AAS-ID and the specificAssetIds.\nThus, the next step for Bob is to reference his submodel in the Digital Twin to make it findable for consumers."),(0,a.kt)("h4",{id:"reference-a-submodel-in-the-digital-twin"},"Reference a Submodel in the Digital Twin"),(0,a.kt)("p",null,"In order to reference the submodel in the digital twin, submodel descriptors can be added to the digital twin."),(0,a.kt)("p",null,'When adding a submodel to an existing digital twin, it is important to use the correct AAS-Id. This has to be added for the parameter "id", e.g. "id": "e5c96ab5-896a-482c-8761-efd74777ca97".'),(0,a.kt)("p",null,"To reference the endoint of the submodel we use the DSP protocol. Thus you have to provide the subprotocolBody with the Id of the contract definition/asset (?) as well as the dspEndpoint of the EDC."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-curl"},'POST /shell-descriptors/{{aasId}}\n\n{\n  "id": "e5c96ab5-896a-482c-8761-efd74777ca97",  \n  "semanticId": {\n    "type": "ExternalReference",\n    "keys": [\n      {\n        "type": "GlobalReference",\n        "value": "urn:bamm:io.catenax.material_for_recycling:1.1.0#MaterialForRecycling"\n      }\n    ]\n  },\n  "endpoints": [\n    {\n      "interface": "SUBMODEL-3.0",\n      "protocolInformation": {\n        "href": "https://edc.data.plane/mypath/submodel",\n        "endpointProtocol": "HTTP",\n        "endpointProtocolVersion": [\n          "1.1"\n        ],\n        "subprotocol": "DSP",\n        "subprotocolBody": "id=123;dspEndpoint=http://edc.control.plane/api/v1/dsp",\n        "subprotocolBodyEncoding": "plain",\n        "securityAttributes": [\n          {\n            "type": "NONE",\n            "key": "NONE",\n            "value": "NONE"\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Bob has now successfully added a submodel descriptor to the digital twin and made the Submodel accessible for comsumption. In the next step of the tutorial Alice will find and consume the digital twin and its submodel."),(0,a.kt)("h4",{id:"registering-new-submodels-at-existing-digital-twins"},"Registering new Submodels at existing Digital Twins"),(0,a.kt)("p",null,"If you want to add a submodel to an already existing digital twin, you just need to reference the ID (UUID )of the digital twin in the submodel to link the two."),(0,a.kt)("p",null,"Lets also go through this process. \u2026"),(0,a.kt)("h3",{id:"find-and-consume-a-digital-twin"},"Find and consume a Digital Twin"),(0,a.kt)("p",null,"Alice, the data consumer, now wants to fetch Bob's digital twin. Since she knows Bob, she knows his BPN. With this BPN, she can now determine Bob's EDC endpoint using the EDC Discovery Service. The Discovery Services are not part of this tutorial. So the tutorial starts with Alice already knowing Bob's EDC endpoint."),(0,a.kt)("p",null,"In general, Alice's only responsibility is to deploy a connector, negotiate for access and terms of usage and finally fetch the data from the right offers.\nA detailed interaction flow is detailed in the ",(0,a.kt)("a",{parentName:"p",href:"https://eclipse-tractusx.github.io/docs-kits/kits/Digital%20Twin%20Kit/Software%20Development%20View/dt-kit-interaction-patterns#1-fetching-a-suppliers-twin"},"Digital Twin KIT - Fetching a supplier's twin"),"."),(0,a.kt)("p",null,"But step by step. First of all, Alice wants to see Bob's DTR."),(0,a.kt)("p",null,"Action (Alice): Use the following API POST to find Bob's DTR Asset."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /catalog/request with filter looking for DTR")),(0,a.kt)("p",null,"You will receive the ",(0,a.kt)("inlineCode",{parentName:"p"},"dcat:Dataset for Bob's DTR"),". A negotiation for the DTR can now take place. You retrieve a token for this, which you get back in return if the negotiation is successful."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Step1",src:n(91035).Z,width:"989",height:"308"})),(0,a.kt)("p",null,"In the second step, Alice can use this access token to access Bob's DTR directly and perform a lookup there. As feedback, she receives the AAS IDs that she is authorised to see."),(0,a.kt)("p",null,"Action (Alice): Use the following API GET to receive the provided AAS Ids:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /lookup/shells?assetIds=xyz")),(0,a.kt)("p",null,"Alice receives a list of AAS Ids that she is allowed to see. This should include the digital twin created in the previous tutorial steps."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Step2",src:n(42602).Z,width:"828",height:"191"})),(0,a.kt)("p",null,"Now Alice can get the AAS descriptors because she now has the AAS IDs."),(0,a.kt)("p",null,"Action (Alice): Use the following API GET to the shell descriptors for the AAS ID."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GET /shell-descriptors/{{aas-id}} with aas-id encoded base64url")),(0,a.kt)("p",null,"In response, Alice receives the AAS descriptor she needs. This contains the submodel descriptors. These contain the location of the submodels."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Step3",src:n(84790).Z,width:"832",height:"191"})),(0,a.kt)("p",null,"Now the process is repeating itself. Alice performs a catalog request again and can now use the dataset IDs as a filter."),(0,a.kt)("p",null,"Action (Alice): Use the following API POST to receive Bob's catalog with the Dataset-ID as a filter:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /catalog/request with filter looking for Dataset-ID")),(0,a.kt)("p",null,"A negotiation for the Submodel Server can now take place. Alice retrieves a token for this, which she gets back in return if the negotiation is successful."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Step4",src:n(26726).Z,width:"1033",height:"308"})),(0,a.kt)("p",null,"The relevant endpoint on the submodel server can now be accessed directly, which returns the actual data in response."),(0,a.kt)("p",null,"Action (Alice): Use the following API GET to receive the data:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Step5",src:n(35566).Z,width:"828",height:"191"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulations, you've got a first digital twin from a customer!!!")),(0,a.kt)("h2",{id:"notice"},"Notice"),(0,a.kt)("p",null,"This work is licensed under the ",(0,a.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 sovity GmbH"),(0,a.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 msg systems AG"),(0,a.kt)("li",{parentName:"ul"},"Source URL: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"))))}u.isMDXComponent=!0},91035:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Step1-82ccf001fa08ad0083acaf21b7c26b89.png"},42602:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Step2-deb8ad2912cf242e1db242f1ad8b247c.png"},84790:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Step3-b8f559d2325551ac414955ab62add1f3.png"},26726:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Step4-ca161fcbfa13cdbefc4907c03cc58232.png"},35566:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Step5-5b892e4275a6de24e76fc5609eaab727.png"}}]);