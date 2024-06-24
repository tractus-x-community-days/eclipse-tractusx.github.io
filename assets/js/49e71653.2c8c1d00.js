"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[21733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>x});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},h="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=p(n),u=o,x=h["".concat(s,".").concat(u)]||h[u]||l[u]||a;return n?i.createElement(x,r(r({ref:t},d),{},{components:n})):i.createElement(x,r({ref:t},d))}));function x(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:o,r[1]=c;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75431:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const a={id:"service-bindings",title:"Service Bindings",description:"Behaviour Twin KIT"},r=void 0,c={unversionedId:"kits/behaviour-twin-kit/use-cases/hi/development-view/service-bindings",id:"version-24.05/kits/behaviour-twin-kit/use-cases/hi/development-view/service-bindings",title:"Service Bindings",description:"Behaviour Twin KIT",source:"@site/docs-kits_versioned_docs/version-24.05/kits/behaviour-twin-kit/use-cases/hi/development-view/service-bindings.md",sourceDirName:"kits/behaviour-twin-kit/use-cases/hi/development-view",slug:"/kits/behaviour-twin-kit/use-cases/hi/development-view/service-bindings",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/behaviour-twin-kit/use-cases/hi/development-view/service-bindings",draft:!1,tags:[],version:"24.05",frontMatter:{id:"service-bindings",title:"Service Bindings",description:"Behaviour Twin KIT"},sidebar:"kits",previous:{title:"Data Bindings",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/behaviour-twin-kit/use-cases/hi/development-view/data-bindings"},next:{title:"Skill",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/behaviour-twin-kit/use-cases/hi/development-view/skill"}},s={},p=[{value:"OVERVIEW",id:"overview",level:3},{value:"SERVICE MAPPING CONFIGURATION (FULL EXAMPLE)",id:"service-mapping-configuration-full-example",level:3},{value:"GRAPH ASSET FOR THE SERVICE BINDINGS",id:"graph-asset-for-the-service-bindings",level:3},{value:"GRAPH ASSET DEFINITION",id:"graph-asset-definition",level:4},{value:"POLICY AND CONTRACT FOR THE GRAPH ASSET",id:"policy-and-contract-for-the-graph-asset",level:4}],d={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{style:{display:"block"}},(0,o.kt)("div",{style:{display:"inline-block",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Behaviour Twin KIT -- Health Indicator banner",src:n(75751).Z,width:"51",height:"42"}))),(0,o.kt)("div",{style:{display:"inline-block",fontSize:17,color:"rgb(255,166,1)",marginLeft:7,verticalAlign:"top",paddingTop:6}},"Behaviour Twin KIT -- Health Indicator")),(0,o.kt)("p",null,"Applies to role: ",(0,o.kt)("em",{parentName:"p"},"HI calculation service provider")),(0,o.kt)("h3",{id:"overview"},"OVERVIEW"),(0,o.kt)("p",null,"For general information about service bindings, have a look at the ",(0,o.kt)("a",{parentName:"p",href:"../../../development-view/service-bindings"},"generalized Service Bindings section")," and the ",(0,o.kt)("a",{parentName:"p",href:"../../../../knowledge-agents/operation-view/provider"},"Agents KIT's Operation View"),". In the current section, only a dedicated example is shown."),(0,o.kt)("h3",{id:"service-mapping-configuration-full-example"},"SERVICE MAPPING CONFIGURATION (FULL EXAMPLE)"),(0,o.kt)("p",null,"The following configuration for the mapping of a Health Indicator (HI) calculation service is written in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/turtle/"},"Terse RDF Triple Language ",(0,o.kt)("img",{alt:"(external link)",src:n(47567).Z,width:"11",height:"11"})),", also known as ",(0,o.kt)("em",{parentName:"p"},"Turtle"),"."),(0,o.kt)("p",null,"In this example, an asynchronous calculation service for gearbox HI values is bound. It uses the Catena-X notification format as a container for the input data. The content of the notification is a JSON structure with a list of load spectra in it. The input format provides more than one Element (batch processing), but the HI logic always requires exact one input per calculation. Therefore, always the first (and only the first) item of the input list is bound."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ttl"},'################################################################\n# Copyright (c) 2022-2024 T-Systems International GmbH\n# Copyright (c) 2022-2024 Bayerische Motoren Werke Aktiengesellschaft (BMW AG) \n# Copyright (c) 2022-2024 ZF Friedrichshafen AG\n# Copyright (c) 2023-2024 Allgemeiner Deutscher Automobil-Club e.V. (ADAC)\n# Copyright (c) 2022-2024 Mercedes-Benz AG\n# Copyright (c) 2022-2024 Contributors to the Catena-X Association\n#\n# See the NOTICE file(s) distributed with this work for additional\n# information regarding copyright ownership.\n#\n# This program and the accompanying materials are made available under the\n# terms of the Apache License, Version 2.0 which is available at\n# https://www.apache.org/licenses/LICENSE-2.0.\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT\n# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the\n# License for the specific language governing permissions and limitations\n# under the License.\n#\n# SPDX-License-Identifier: Apache-2.0\n################################################################\n#\n# Rdf4j configuration for a HI-specific remoting\n#\n@prefix rdf:            <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs:           <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix rep:            <http://www.openrdf.org/config/repository#> .\n@prefix sr:             <http://www.openrdf.org/config/repository/sail#> .\n@prefix sail:           <http://www.openrdf.org/config/sail#> .\n@prefix sp:             <http://spinrdf.org/sp#> .\n@prefix xsd:            <http://www.w3.org/2001/XMLSchema#> .\n@prefix json:           <https://json-schema.org/draft/2020-12/schema#> .\n@prefix dcterms:        <http://purl.org/dc/terms/> .\n@prefix cx-fx:          <https://w3id.org/catenax/ontology/function#> .\n@prefix cx-common:      <https://w3id.org/catenax/ontology/common#> .\n@prefix cx-core:        <https://w3id.org/catenax/ontology/core#> .\n@prefix cx-vehicle:     <https://w3id.org/catenax/ontology/vehicle#> .\n@prefix cx-reliability: <https://w3id.org/catenax/ontology/reliability#> .\n@prefix cx-behaviour:   <https://w3id.org/catenax/ontology/behaviour#> .\n\n[] rdf:type rep:Repository ;\n  rep:repositoryID "hi" ;\n  rdfs:label "Health Indicator Functions Repository" ;\n  rep:repositoryImpl [\n      rep:repositoryType "openrdf:SailRepository" ;\n      sr:sailImpl [\n        sail:sailType "org.eclipse.tractusx.agents:Remoting" ;\n        cx-fx:supportsInvocation cx-behaviour:HealthIndicator ;\n        cx-fx:callbackAddress <https://my-remoting-agent.domain/rdf4j-server/callback> ;\n      ]\n  ] .\n\ncx-behaviour:HealthIndicator rdf:type cx-fx:Function ;\n  dcterms:description "Health Indicator is an asynchronous batch invocation."@en ;\n  dcterms:title "Health Indicator" ;\n  cx-fx:targetUri "http://service-backend:5005/api/hi" ;\n  cx-fx:invocationMethod "POST-JSON" ;\n#  cx-common:authenticationKey "Authorization" ;\n#  cx-common:authenticationCode "Basic TOKEN" ;\n  cx-fx:invocationMethod "POST-JSON" ;\n  cx-fx:invocationIdProperty "header.notificationID,content.requestRefId" ;\n  cx-fx:callbackProperty "header.respondAssetId" ;\n  cx-fx:input cx-behaviour:notification ;\n  cx-fx:input cx-behaviour:sender ;\n  cx-fx:input cx-behaviour:senderConnector ;\n  cx-fx:input cx-behaviour:recipient ;\n  cx-fx:input cx-behaviour:recipientConnector ;\n  cx-fx:input cx-behaviour:recipient ;\n  cx-fx:input cx-behaviour:recipientConnector ;\n  cx-fx:input cx-behaviour:severity ;\n  cx-fx:input cx-behaviour:status ;\n  cx-fx:input cx-behaviour:targetDate ;\n  cx-fx:input cx-behaviour:timeStamp ;\n  cx-fx:input cx-behaviour:classification ;\n  cx-fx:input cx-behaviour:component ;\n  cx-fx:input cx-behaviour:observationType ;\n  cx-fx:input cx-behaviour:metadata ;\n  cx-fx:input cx-behaviour:statusDate ;\n  cx-fx:input cx-behaviour:statusOperatingHours ;\n  cx-fx:input cx-behaviour:statusMileage ;\n  cx-fx:input cx-behaviour:countingMethod ;\n  cx-fx:input cx-behaviour:countingValue ;\n  cx-fx:input cx-behaviour:countingUnit ;\n  cx-fx:input cx-behaviour:headerChannels ;\n  cx-fx:input cx-behaviour:bodyClasses ;\n  cx-fx:input cx-behaviour:bodyCountsList ;\n  cx-fx:result cx-behaviour:HealthIndicatorResult .\n\ncx-behaviour:notification rdf:type cx-fx:Argument ;\n  dcterms:description "A default notification output template."@en ;\n  dcterms:title "Notification Template" ;\n  cx-fx:argumentName "." ;\n  cx-fx:dataType json:Object ;\n  cx-fx:priority "-1"^^xsd:integer ;\n  cx-fx:default "{ \\"content\\": { \\"endurancePredictorInputs\\": []}}"^^json:Object .\n\ncx-behaviour:sender rdf:type cx-fx:Argument ;\n  dcterms:description "Sender of the notification as a BPN."@en ;\n  dcterms:title "Notification Sender" ;\n  cx-fx:argumentName "header.senderBPN" ;\n  cx-fx:default "anonymous" .\n\ncx-behaviour:senderConnector rdf:type cx-fx:Argument ;\n  dcterms:description "Sender Address of the notification as a URL."@en ;\n  dcterms:title "Notification Sender Address" ;\n  cx-fx:argumentName "header.senderAddress" ;\n  cx-fx:default "unknown" .\n\ncx-behaviour:recipient rdf:type cx-fx:Argument ;\n  dcterms:description "Recipient of the notification as a BPN."@en ;\n  dcterms:title "Notification Recipient" ;\n  cx-fx:argumentName "header.recipientBPN" ;\n  cx-fx:default "anonymous" .\n\ncx-behaviour:recipientConnector rdf:type cx-fx:Argument ;\n  dcterms:description "Recipient Address of the notification as a URL."@en ;\n  dcterms:title "Notification Recipient Address" ;\n  cx-fx:argumentName "header.recipientAddress" ;\n  cx-fx:default "unknown" .\n\ncx-behaviour:severity rdf:type cx-fx:Argument ;\n  dcterms:description "Severity of the notification."@en ;\n  dcterms:title "Notification Severity" ;\n  cx-fx:argumentName "header.severity" ;\n  cx-fx:dataType xsd:string ;\n  cx-fx:default "MINOR" .\n\ncx-behaviour:status rdf:type cx-fx:Argument ;\n  dcterms:description "Status of the notification."@en ;\n  dcterms:title "Notification Status" ;\n  cx-fx:argumentName "header.status" ;\n  cx-fx:dataType xsd:string ;\n  cx-fx:default "SENT" .\n\ncx-behaviour:targetDate rdf:type cx-fx:Argument ;\n  dcterms:description "Target Date of the notification."@en ;\n  dcterms:title "Notification Target Date" ;\n  cx-fx:dataType xsd:dateTime ;\n  cx-fx:argumentName "header.targetDate" .\n\ncx-behaviour:timeStamp rdf:type cx-fx:Argument ;\n  dcterms:description "Timestamp of the notification."@en ;\n  dcterms:title "Notification Timestamp" ;\n  cx-fx:dataType xsd:dateTime ;\n  cx-fx:argumentName "header.timeStamp" .\n\ncx-behaviour:classification rdf:type cx-fx:Argument ;\n  dcterms:description "Classification of the notification."@en ;\n  dcterms:title "Notification Classification" ;\n  cx-fx:argumentName "header.classification" ;\n  cx-fx:dataType xsd:string ;\n  cx-fx:default "HealthIndicatorService" .\n\ncx-behaviour:component rdf:type cx-fx:Argument ;\n  dcterms:description "Component of the Predicition."@en ;\n  dcterms:title "Predicted Component" ;\n  cx-fx:formsBatchGroup "true"^^xsd:boolean ;\n  cx-fx:argumentName "content.endurancePredictorInputs.0.componentId,content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.targetComponentId" .\n\ncx-behaviour:observationType rdf:type cx-fx:Argument ;\n  dcterms:description "The type of observation made."@en ;\n  dcterms:title "Observation Type" ;\n  cx-fx:strip <https://w3id.org/catenax/taxonomy#> ;\n  cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.metadata.componentDescription" ;\n  cx-fx:dataType xsd:string .\n\ncx-behaviour:metadata rdf:type cx-fx:Argument ;\n  dcterms:description "Metadata of the Loadspectrum."@en ;\n  dcterms:title "Loadspectrum Metadata" ;\n  cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}" ;\n  cx-fx:dataType json:Object ;\n  cx-fx:priority "0"^^xsd:integer ;\n  cx-fx:default "{ \\"metadata\\":{ \\"projectDescription\\": \\"pnr_76543\\", \\"routeDescription\\": \\"logged\\" }, \\"bammId\\": \\"urn:bamm:io.openmanufacturing.digitaltwin:1.0.0#ClassifiedLoadSpectrum\\" }"^^json:Object .\n\ncx-behaviour:statusDate rdf:type cx-fx:Argument ;\n  dcterms:description "Time of Recording."@en ;\n  dcterms:title "Loadspectrum Recording Time" ;\n  cx-fx:dataType xsd:dateTime ;\n  cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.metadata.status.date" .\n\ncx-behaviour:statusOperatingHours rdf:type cx-fx:Argument ;\n  dcterms:description "Operating Hours of Target Component at Time of Recording."@en ;\n  dcterms:title "Loadspectrum Operating Hours" ;\n  cx-fx:dataType xsd:float ;\n  cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.metadata.status.operatingHours" .\n\ncx-behaviour:statusMileage rdf:type cx-fx:Argument ;\n  dcterms:description "Mileage of Component at Time of Recording."@en ;\n  dcterms:title "Loadspectrum Mileage" ;\n  cx-fx:dataType xsd:int ;\n  cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.metadata.status.mileage" .\n\ncx-behaviour:countingUnit rdf:type cx-fx:Argument ;\n  dcterms:description "Counting Unit of Load Spectrum."@en ;\n  dcterms:title "Loadspectrum Counting Unit" ;\n  cx-fx:dataType xsd:string ;\n  cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.header.countingUnit" .\n\ncx-behaviour:countingValue rdf:type cx-fx:Argument ;\n  dcterms:description "Counting Value Name of Load Spectrum."@en ;\n  dcterms:title "Loadspectrum Counting Value" ;\n  cx-fx:dataType xsd:string ;\n  cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.header.countingValue,content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.body.counts.countsName" .\n\ncx-behaviour:countingMethod rdf:type cx-fx:Argument ;\n  dcterms:description "Counting Method of Load Spectrum."@en ;\n  dcterms:title "Loadspectrum Counting Method" ;\n  cx-fx:dataType xsd:string ;\n  cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.header.countingMethod" .\n\ncx-behaviour:headerChannels rdf:type cx-fx:Argument ;\n  dcterms:description "Channels of Load Spectrum."@en ;\n  dcterms:title "Loadspectrum Channels" ;\n  cx-fx:dataType json:Object ;\n  cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.header.channels" .\n\ncx-behaviour:bodyClasses rdf:type cx-fx:Argument ;\n  dcterms:description "Classes of Load Spectrum."@en ;\n  dcterms:title "Loadspectrum Classes" ;\n  cx-fx:dataType json:Object ;\n  cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.body.classes" .\n\ncx-behaviour:bodyCountsList rdf:type cx-fx:Argument ;\n  dcterms:description "Counts List of Load Spectrum."@en ;\n  dcterms:title "Loadspectrum Counts List" ;\n  cx-fx:dataType json:Object ;\n  cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.body.counts.countsList" .\n\ncx-behaviour:HealthIndicatorResult rdf:type owl:DatatypeProperty ;\n                                   rdfs:subPropertyOf cx-fx:returnValue ;\n                                   rdfs:comment "Health Indicator Values are percentages."@en ;\n                                   rdfs:label "Health Indicator Values"@en ;\n                                   cx-fx:dataType json:Object ;\n                                   cx-fx:valuePath "HealthIndicatorResult" ;\n                                   rdfs:domain cx-behaviour:HealthIndicatorResult ;\n                                   rdfs:range json:Object .\n\ncx-behaviour:indicatorVersion rdf:type owl:DatatypeProperty ;\n                              rdfs:subPropertyOf cx-fx:returnValue ;\n                              rdfs:comment "Version of the health indicator calculation."@en ;\n                              rdfs:label "Health Indicator Calculation Version" ;\n                              cx-fx:dataType xsd:string ;\n                              cx-fx:valuePath "version" ;\n                              rdfs:domain cx-behaviour:HealthIndicatorResult ;\n                              rdfs:range xsd:string .\n\ncx-behaviour:responseComponentId rdf:type owl:DatatypeProperty ;\n                                 rdfs:subPropertyOf cx-fx:returnValue ;\n                                 rdfs:comment "Component Id of the health indicator calculation."@en ;\n                                 rdfs:label "Health Indicator Calculation Component Id"@en ;\n                                 cx-fx:dataType xsd:string ;\n                                 cx-fx:valuePath "componentId" ;\n                                 rdfs:domain cx-behaviour:HealthIndicatorResult ;\n                                 rdfs:range xsd:string .\n')),(0,o.kt)("h3",{id:"graph-asset-for-the-service-bindings"},"GRAPH ASSET FOR THE SERVICE BINDINGS"),(0,o.kt)("p",null,"To enable the knowledge agent's matchmaking agent to utilize the service binding, a graph asset has to be registered at the calculation service provider's EDC connector. This asset must have a property ",(0,o.kt)("inlineCode",{parentName:"p"},"rdfs:isDefinedBy")," for ontology references and a property ",(0,o.kt)("inlineCode",{parentName:"p"},"sh:shapesGraph")," that defines the shape of the provided graph."),(0,o.kt)("h4",{id:"graph-asset-definition"},"GRAPH ASSET DEFINITION"),(0,o.kt)("p",null,"The following example is a full asset description, that can be registered at the EDC connector."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "@context": {\n        "@vocab": "https://w3id.org/edc/v0.0.1/ns/",\n        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",\n        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",\n        "cx-common": "https://w3id.org/catenax/ontology/common#",\n        "xsd": "http://www.w3.org/2001/XMLSchema#",\n        "sh": "http://www.w3.org/ns/shacl#",\n        "cs-taxo": "https://w3id.org/catenax/taxonomy#",\n        "dc": "https://purl.org/dc/terms/"\n    },\n    "@id": "cx-taxo:GraphAsset?supplier=HealthIndicatorGearbox",\n    "properties": {\n        "cx-common:name": "Health Prognosis Service for Gearboxes",\n        "cx-common:description": "A second sample graph asset/offering referring to a specific prognosis resource.",\n        "cx-common:description@de": "Ein weiteres Beispielasset f\xfcr eine Prognosefunktion.",\n        "cx-common:version": "1.12.19",\n        "cx-common:contenttype": "application/json, application/xml",\n        "cx-common:publishedUnderContract": "Contract?supplier=Graph",\n        "dc:type": "cx-taxo:GraphAsset",\n        "rdfs:isDefinedBy": "<https://w3id.org/catenax/ontology/common>,<https://w3id.org/catenax/ontology/core>,<https://w3id.org/catenax/ontology/function>,<https://w3id.org/catenax/ontology/behaviour>,<https://w3id.org/catenax/ontology/behaviour>",\n        "cx-common:implementsProtocol": "cx-common:Protocol?w3c:http:SPARQL",\n        "sh:shapesGraph": "@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\\n@prefix schema: <http://schema.org/> .\\n@prefix sh: <http://www.w3.org/ns/shacl#> .\\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\\n@prefix edc: <https://w3id.org/edc/v0.0.1/ns/> .\\n@prefix cx-common: <https://w3id.org/catenax/ontology/common#> .\\n@prefix cx-core: <https://w3id.org/catenax/ontology/core#> .\\n@prefix cx-vehicle: <https://w3id.org/catenax/ontology/vehicle#> .\\n@prefix cx-fx: <https://w3id.org/catenax/ontology/function#> .\\n@prefix cx-behaviour: <https://w3id.org/catenax/ontology/behaviour#> .\\n@prefix cx-reliability: <https://w3id.org/catenax/ontology/reliability#> .\\n@prefix cx-sh: <https://w3id.org/catenax/ontology/schema#> .\\n@prefix cx-taxo: <https://w3id.org/catenax/taxonomy#> .\\n@prefix : <https://w3id.org/catenax/taxonomy#GraphAsset?supplier=BehaviourTwinHI&shapeObject=> .\\n\\n# Prognosis Function\\n:PrognosisFunctionShape rdf:type sh:NodeShape ;\\n    sh:targetClass cx-behaviour:PrognosisFunction ;\\n    sh:property [\\n        cx-sh:hasAsArgument cx-reliability:countingMethod ;\\n        sh:path cx-behaviour:countingMethod ;\\n    ] ;\\n    sh:property [\\n        cx-sh:hasAsArgument cx-reliability:countingValue ;\\n        sh:path cx-behaviour:countingValue ;\\n    ] ;\\n    sh:property [\\n        cx-sh:hasAsArgument cx-reliability:countingUnit ;\\n        sh:path cx-behaviour:countingUnit ;\\n    ] ;\\n    sh:property [\\n        cx-sh:hasAsArgument cx-reliability:channels ;\\n        sh:path cx-behaviour:headerChannels ;\\n    ] ;\\n    sh:property [\\n        cx-sh:hasAsArgument cx-reliability:classes ;\\n        sh:path cx-behaviour:bodyClasses ;\\n    ] .\\n    \\n:HealthIndicationShape a sh:NodeShape ;\\n    cx-sh:extensionOf :PrognosisFunctionShape ;\\n    sh:targetClass cx-behaviour:HealthIndication ;\\n    sh:property [\\n        cx-sh:hasAsArgument cx-reliability:observationOf ;\\n        sh:path cx-behaviour:observationType ;\\n        sh:in ( cx-taxo:Clutch ) ;\\n    ] ;\\n    sh:property :HealthIndicationResultShape .\\n    \\n:HealthIndicationResultShape a sh:PropertyShape ;\\n    cx-sh:outputOf :HealthIndicationShape ;\\n    sh:path cx-behaviour:HealthIndicationResult .",\n        "cx-common:isFederated": "true^^xsd:boolean"\n    },\n    "dataAddress": {\n        "id": "cx-taxo:GraphAsset?supplier=HealthIndicatorGearbox",\n        "@type": "DataAddress",\n        "baseUrl": "https://my-remoting-agent.domain/rdf4j-server/repositories/health",\n        "type": "cx-common:Protocol?w3c:http:SPARQL",\n        "proxyPath": "false",\n        "proxyMethod": "true",\n        "proxyQueryParams": "true",\n        "proxyBody": "true",\n        "authKey": "Authorization",\n        "authCode": "\u2022\u2022\u2022\u2022\u2022\u2022",\n        "cx-common:allowServicePattern": "https://my-remoting-agent.domain/rdf4j-server/repositories/health"\n    }\n}\n')),(0,o.kt)("p",null,"The property ",(0,o.kt)("inlineCode",{parentName:"p"},"sh:shapesGraph")," contains the graph shape of the offered data, written in ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/shacl/"},"Shapes Constraint Language (SHACL) ",(0,o.kt)("img",{alt:"(external link)",src:n(47567).Z,width:"11",height:"11"})),". It describes the shape of a Health Indicator function and its output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shacl"},'<https://w3id.org/catenax/ontology/common>,<https://w3id.org/catenax/ontology/core>,<https://w3id.org/catenax/ontology/function>,<https://w3id.org/catenax/ontology/behaviour>,<https://w3id.org/catenax/ontology/behaviour>",\n        "cx-common:implementsProtocol": "cx-common:Protocol?w3c:http:SPARQL",\n        "sh:shapesGraph": "@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .\n@prefix schema: <http://schema.org/> .\n@prefix sh: <http://www.w3.org/ns/shacl#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix edc: <https://w3id.org/edc/v0.0.1/ns/> .\n@prefix cx-common: <https://w3id.org/catenax/ontology/common#> .\n@prefix cx-core: <https://w3id.org/catenax/ontology/core#> .\n@prefix cx-vehicle: <https://w3id.org/catenax/ontology/vehicle#> .\n@prefix cx-fx: <https://w3id.org/catenax/ontology/function#> .\n@prefix cx-behaviour: <https://w3id.org/catenax/ontology/behaviour#> .\n@prefix cx-reliability: <https://w3id.org/catenax/ontology/reliability#> .\n@prefix cx-sh: <https://w3id.org/catenax/ontology/schema#> .\n@prefix cx-taxo: <https://w3id.org/catenax/taxonomy#> .\n@prefix : <https://w3id.org/catenax/taxonomy#GraphAsset?supplier=BehaviourTwinHI&shapeObject=> .\n\n# Prognosis Function\n:PrognosisFunctionShape rdf:type sh:NodeShape ;\n    sh:targetClass cx-behaviour:PrognosisFunction ;\n    sh:property [\n        cx-sh:hasAsArgument cx-reliability:countingMethod ;\n        sh:path cx-behaviour:countingMethod ;\n    ] ;\n    sh:property [\n        cx-sh:hasAsArgument cx-reliability:countingValue ;\n        sh:path cx-behaviour:countingValue ;\n    ] ;\n    sh:property [\n        cx-sh:hasAsArgument cx-reliability:countingUnit ;\n        sh:path cx-behaviour:countingUnit ;\n    ] ;\n    sh:property [\n        cx-sh:hasAsArgument cx-reliability:channels ;\n        sh:path cx-behaviour:headerChannels ;\n    ] ;\n    sh:property [\n        cx-sh:hasAsArgument cx-reliability:classes ;\n        sh:path cx-behaviour:bodyClasses ;\n    ] .\n    \n:HealthIndicationShape a sh:NodeShape ;\n    cx-sh:extensionOf :PrognosisFunctionShape ;\n    sh:targetClass cx-behaviour:HealthIndication ;\n    sh:property [\n        cx-sh:hasAsArgument cx-reliability:observationOf ;\n        sh:path cx-behaviour:observationType ;\n        sh:in ( cx-taxo:Clutch ) ;\n    ] ;\n    sh:property :HealthIndicationResultShape .\n    \n:HealthIndicationResultShape a sh:PropertyShape ;\n    cx-sh:outputOf :HealthIndicationShape ;\n    sh:path cx-behaviour:HealthIndicationResult .\n')),(0,o.kt)("h4",{id:"policy-and-contract-for-the-graph-asset"},"POLICY AND CONTRACT FOR THE GRAPH ASSET"),(0,o.kt)("p",null,"All assets, including graph assets, must have a related policy and contract definition. These are described in the use-case-independent ",(0,o.kt)("a",{parentName:"p",href:"../../../development-view/contracts-and-policies"},"general Contracts And Policies section"),"."))}h.isMDXComponent=!0},47567:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaG9zdD0iNjViZDcxMTQ0ZSIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMTEiCiAgIGhlaWdodD0iMTEiCiAgIHZpZXdCb3g9Ii0wLjUgLTAuNSAxMSAxMSIKICAgY29udGVudD0iJmx0O214ZmlsZSZndDsmbHQ7ZGlhZ3JhbSBuYW1lPSZxdW90O1NlaXRlLTEmcXVvdDsgaWQ9JnF1b3Q7ekcyNFhrY1NpZDBqRzVaZzFzSlYmcXVvdDsmZ3Q7MVZaZFQ4TWdGUDAxZlRScHdibjVxUFByeGNSRUU1K3hYRnNpN1cwbzJ6cC92VlJnbExYcVpuenhhWEM0SDl4enp0Z1N1cXk2VzhXYThoNDV5SVNrdkV2b1ZVSUltYzNQelVlUGJDMUN5U0t6U0tFRXQ5Z0FlQlR2NE1EVW9TdkJvWTBDTmFMVW9vbkJIT3NhY2gxaFRDbmN4R0d2S09PdURTdGdCRHptVEk3Ulo4RjFhZEVGbVFmOERrUlIrczdabVp1NFlqN1lUZEtXak9ObUFOSHJoQzRWb3JhcnFsdUM3Tm56dk5pOG15OU9keGRUVU90REV2cXpQbVBONU1vTjV5Nm10MzdhUXVHcUdSZDJ2ZGFnTkhSVHRMTVhYeUZNWmp3QldJRldXeFBuNUQ4Si9Hd0NtMTdyY2tpa3c1alRyOWpWQ2lPYWhadHlldUw1endORHpTOTZsNWhkamJVQkwwdGRtWHBYbVZtMld1RWJMRkdpK295bXI0eWxoSm9UUTFQTm9XK1RtdDJZTU44SmVPU3VNUzhERm1ZVExIaE1nV1JhckdOUFRsSGpPanlnTUZjaGFSZVQ2VlNZeGZrdHJsUU9MbVZvb0wwcWUybWFxUUwwS00zUXliYURzS1lQYUErK1c1Wk8zK0g3NDJBSTJ6N1lZOGYxUVk1WkhPV1lGNG41MjFNcDZ0ZzJKdUpHeUdOTlpPUDhHL012YkhYNkY2N2EvNklmYmF2b05UaE83dDNEOXRzWFlrckNLYWxqY2JQL0lDNkp4SjMvVHR5enFBZzlTT21mZFRUYjhMTnB3OE8vRDNyOUFRPT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7IgogICBpZD0ic3ZnNCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZXh0ZXJuYWwtbGluay5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMy4yICgwOTFlMjBlLCAyMDIzLTExLTI1LCBjdXN0b20pIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3NCIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICAgIGlua3NjYXBlOnpvb209Ijk3LjA1IgogICAgIGlua3NjYXBlOmN4PSI3LjUwMTI4OCIKICAgICBpbmtzY2FwZTpjeT0iMy4wMDM2MDY0IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMTM3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIyNTUyIgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQiIC8+CiAgPGRlZnMKICAgICBpZD0iZGVmczEiIC8+CiAgPGcKICAgICBpZD0iZzQiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMsLTcpIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDEzLDEyIHYgNSBIIDMgViA3IGggNSIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoMSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDcsMTIgOC4zOSwxMC44NCIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2Utd2lkdGg9IjAuMSIKICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIKICAgICAgIHBvaW50ZXItZXZlbnRzPSJub25lIgogICAgICAgaWQ9InBhdGgyIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Ik0gMTMsNyA5LjY3LDEyLjM4IDcuMTEsOS4zIFoiCiAgICAgICBmaWxsPSIjZmFhMDIzIgogICAgICAgc3Ryb2tlPSIjZmFhMDIzIgogICAgICAgc3Ryb2tlLXdpZHRoPSIwLjEiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoMyIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDUsMTQgOSwxMCIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoNCIgLz4KICA8L2c+Cjwvc3ZnPgo="},75751:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/behaviour-twin-hi-kit-icon-mini-a446e6db3dca63644e32156c46622065.svg"}}]);