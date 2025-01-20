"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[20473],{3905:(e,i,t)=>{t.d(i,{Zo:()=>p,kt:()=>h});var n=t(67294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),c=function(e){var i=n.useContext(o),t=i;return e&&(t="function"==typeof e?e(i):r(r({},i),e)),t},p=function(e){var i=c(e.components);return n.createElement(o.Provider,{value:i},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},g=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=a,h=d["".concat(o,".").concat(g)]||d[g]||u[g]||l;return t?n.createElement(h,r(r({ref:i},p),{},{components:t})):n.createElement(h,r({ref:i},p))}));function h(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=g;var s={};for(var o in i)hasOwnProperty.call(i,o)&&(s[o]=i[o]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<l;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},93579:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const l={id:"skill",title:"Skill",description:"Behaviour Twin KIT"},r=void 0,s={unversionedId:"kits/behaviour-twin-kit/use-cases/rul/development-view/skill",id:"version-24.08/kits/behaviour-twin-kit/use-cases/rul/development-view/skill",title:"Skill",description:"Behaviour Twin KIT",source:"@site/docs-kits_versioned_docs/version-24.08/kits/behaviour-twin-kit/use-cases/rul/development-view/skill.md",sourceDirName:"kits/behaviour-twin-kit/use-cases/rul/development-view",slug:"/kits/behaviour-twin-kit/use-cases/rul/development-view/skill",permalink:"/docs-kits/24.08/kits/behaviour-twin-kit/use-cases/rul/development-view/skill",draft:!1,tags:[],version:"24.08",frontMatter:{id:"skill",title:"Skill",description:"Behaviour Twin KIT"},sidebar:"kits",previous:{title:"Service Bindings",permalink:"/docs-kits/24.08/kits/behaviour-twin-kit/use-cases/rul/development-view/service-bindings"},next:{title:"Health Indicator",permalink:"/docs-kits/24.08/kits/behaviour-twin-kit/use-cases/hi/overview"}},o={},c=[{value:"SKILL DEFINITION",id:"skill-definition",level:2},{value:"FULL EXAMPLE",id:"full-example",level:3},{value:"DETAILED INFORMATION",id:"detailed-information",level:3},{value:"SELECT STATEMENT",id:"select-statement",level:4},{value:"PARAMETERS",id:"parameters",level:4},{value:"ASSET RESOLUTION",id:"asset-resolution",level:4},{value:"RESOLVING VEHICLE, PART OF INTEREST, ITS SUPPLIER AND THE RELATED LOAD DATA",id:"resolving-vehicle-part-of-interest-its-supplier-and-the-related-load-data",level:4},{value:"RESOLVING CALCULATION SERVICE ASSET AT SUPPLIER",id:"resolving-calculation-service-asset-at-supplier",level:4},{value:"INVOKE CALCULATION SERVICE AT SUPPLIER",id:"invoke-calculation-service-at-supplier",level:4},{value:"SKILL REGISTRATION AND INVOCATION",id:"skill-registration-and-invocation",level:2}],p={toc:c};function d(e){let{components:i,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("div",{style:{display:"block"}},(0,a.kt)("div",{style:{display:"inline-block",verticalAlign:"top"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Behaviour Twin KIT -- Remaining useful Life banner",src:t(250).Z,width:"50",height:"42"}))),(0,a.kt)("div",{style:{display:"inline-block",fontSize:17,color:"rgb(255,166,1)",marginLeft:7,verticalAlign:"top",paddingTop:6}},"Behaviour Twin KIT -- Remaining useful Life")),(0,a.kt)("p",null,"Applies to roles: ",(0,a.kt)("em",{parentName:"p"},"RuL skill provider")," and ",(0,a.kt)("em",{parentName:"p"},"RuL consumer")),(0,a.kt)("h2",{id:"skill-definition"},"SKILL DEFINITION"),(0,a.kt)("p",null,"The example skill below is inteded to calculate RuL values of a vehicle part."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"consumer")," is also the ",(0,a.kt)("em",{parentName:"p"},"skill proivder"),". It requests the calculation by providing the vehicle identification numbers (VINs) of the vehicles. The ",(0,a.kt)("em",{parentName:"p"},"data provider")," is an OEM, the manufacturer of the vehicles. It provides the load data in form of load spectra. The supplier of the part (component of interest) provides the related RuL calculation service, which accepts load spectra as input arguments."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"skill provider")," (in this example the consumer, but could also be the ",(0,a.kt)("em",{parentName:"p"},"data provider"),"/OEM or a third party or a CAB body), has to implement the skill and register it over the ",(0,a.kt)("em",{parentName:"p"},"Agent Plane API"),"."),(0,a.kt)("p",null,"In the current example, a RuL skill for a gearbox is implemented with the ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/sparql11-query/"},"SPARQL 1.1 Query Language ",(0,a.kt)("img",{alt:"(external link)",src:t(16129).Z,width:"11",height:"11"}))," as a query. The query is a federated query, which means that it is split into two parts, one for the ",(0,a.kt)("em",{parentName:"p"},"data provider"),"/OEM and one for the ",(0,a.kt)("em",{parentName:"p"},"calculation service provider"),"/supplier. In the first part, the OEM-owned reliability asset is queried to collect the load data of the vehicles with the given VINs and in the second part, the gathered data is fed back into the respective supplier EDC connector/agent to perform a RuL calculation."),(0,a.kt)("p",null,"For more information regarding skill development, registration and invocation options, see ",(0,a.kt)("a",{parentName:"p",href:"../../../../knowledge-agents/operation-view/agent_edc"},"Agents KIT's Operation View"),"."),(0,a.kt)("h3",{id:"full-example"},"FULL EXAMPLE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sparql"},'################################################################\n# Copyright (c) 2022-2024 T-Systems International GmbH\n# Copyright (c) 2022-2024 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)\n# Copyright (c) 2022-2024 ZF Friedrichshafen AG\n# Copyright (c) 2022-2024 Allgemeiner Deutscher Automobil-Club e.V. (ADAC)\n# Copyright (c) 2022-2024 Mercedes-Benz AG\n# Copyright (c) 2022-2024 Contributors to the Catena-X Association\n#\n# See the NOTICE file(s) distributed with this work for additional\n# information regarding copyright ownership.\n#\n# This program and the accompanying materials are made available under the\n# terms of the Apache License, Version 2.0 which is available at\n# https://www.apache.org/licenses/LICENSE-2.0.\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT\n# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the\n# License for the specific language governing permissions and limitations\n# under the License.\n#\n# SPDX-License-Identifier: Apache-2.0\n################################################################\n# Sample for a Federated (Consumer-Deployed) SPARQL Skill which\n#  - Jumps into an OEM-owned reliability asset given a set of candidate VINs\n#  - Feeds the gathered data back into the respective supplier connector/agent\n#.   to perform a health indication\n# Author: cgjung\n# (c) 2023-2024 Catena-X association\n################################################################\n\nPREFIX cx-common:       <https://w3id.org/catenax/ontology/common#>\nPREFIX cx-core:         <https://w3id.org/catenax/ontology/core#>\nPREFIX cx-vehicle:      <https://w3id.org/catenax/ontology/vehicle#>\nPREFIX cx-reliability:  <https://w3id.org/catenax/ontology/reliability#>\nPREFIX cx-behaviour:    <https://w3id.org/catenax/ontology/behaviour#>\nPREFIX rdf:             <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs:            <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd:             <http://www.w3.org/2001/XMLSchema#>\nPREFIX json:            <https://json-schema.org/draft/2020-12/schema#>\nPREFIX bpnl:            <bpn:legal:>\n\n################################################################\n# Sample for a Federated (Consumer-Deployed) SPARQL Skill which\n#  - Jumps into an OEM-owned reliability asset given a set of candidate VANs\n#  - Feeds the gathered data back into the respective supplier connector/agent\n#.   to perform a health indication\n# Author: cgjung\n# (c) 2023-2024 Catena-X association\n################################################################\n\nSELECT ?vehicle ?vin ?aggregate ?assembly ?supplier ?lc ?operatingTime ?mileage ?recordDate ?ls_type ?ls_name ?ls_value ?ls_unit ?ls_method ?ls_channels ?ls_classes ?ls_values ?distanceKm ?timeHours WHERE {\n\n  VALUES (?vin ?aggregate ?ls_type) {\n      ("@vin"^^xsd:string "Differential Gear"^^xsd:string "GearOil"^^xsd:string)\n  }\n\n  bpnl:BPNL000000000OEM cx-common:hasConnector ?oemEDC .\n  ?oemEDC cx-common:offers [ rdfs:isDefinedBy <https://w3id.org/catenax/ontology/reliability> ; cx-common:id ?reliabilityAssetId ] .\n\n  SERVICE ?oemEDC {\n      GRAPH ?reliabilityAssetId {\n        ?vehicle rdf:type cx-vehicle:Vehicle ;\n            cx-vehicle:vehicleIdentificationNumber ?vin .\n\n        ?assembly rdf:type cx-vehicle:Part ;\n            cx-vehicle:name ?aggregate ;\n            cx-vehicle:isPartOf ?vehicle ;\n            cx-vehicle:supplier ?supplier .\n\n        ?teleAnalysis rdf:type cx-reliability:Analysis ;\n            cx-reliability:analysedObject ?assembly ;\n            cx-reliability:operatingHoursOfVehicle ?operatingTime ;\n            cx-reliability:mileageOfVehicle ?mileage ;\n            cx-core:startDateTime ?recordDate ;\n            cx-reliability:result [\n                cx-core:id ?ls_type ;\n                cx-core:name ?ls_name ;\n                cx-reliability:countingValue ?ls_value ;\n                cx-reliability:countingUnit ?ls_unit ;\n                cx-reliability:countingMethod ?ls_method ;\n                cx-reliability:channels ?ls_channels ;\n                cx-reliability:classes ?ls_classes ;\n                cx-reliability:values ?ls_values\n            ] .\n    } # OEM#GRAPH\n\n    ?supplier cx-common:hasConnector ?supplierEDC.\n    ?supplierEDC cx-common:offers [ rdfs:isDefinedBy <https://w3id.org/catenax/ontology/behaviour> ; cx-common:id ?prognosisAssetId ] .\n\n    SERVICE ?supplierEDC {\n        GRAPH ?prognosisAssetId {\n            ?invocation a cx-behaviour:RemainingUsefulLife ;\n                    cx-behaviour:sender bpnl:BPNL00000003AYRE ;\n                    cx-behaviour:senderConnector ?oemEDC ;\n                    cx-behaviour:recipient ?supplier ;\n                    cx-behaviour:recipientConnector ?supplierEDC ;\n                    cx-behaviour:targetDate ?recordDate ;\n                    cx-behaviour:timeStamp ?recordDate ;\n                    cx-behaviour:component "GearBox" ;\n                    cx-behaviour:statusDate ?recordDate ;\n                    cx-behaviour:statusOperatingHours ?operatingTime ;\n                    cx-behaviour:statusMileage ?mileage ;\n                    cx-behaviour:countingValue ?ls_value ;\n                    cx-behaviour:countingUnit ?ls_unit ;\n                    cx-behaviour:countingMethod ?ls_method ;\n                    cx-behaviour:headerChannels ?ls_channels ;\n                    cx-behaviour:bodyClasses ?ls_classes ;\n                    cx-behaviour:bodyCountsList ?ls_values ;\n                    cx-behaviour:remainingOperatingHours ?timeHours ;\n                    cx-behaviour:remainingRunningDistance ?distanceKm .\n        } # SUPPLIER#GRAPH\n    } # SUPPLIER#CATALOG\n\n  } # OEM#CATALOG\n\n} # SELECT\n')),(0,a.kt)("h3",{id:"detailed-information"},"DETAILED INFORMATION"),(0,a.kt)("h4",{id:"select-statement"},"SELECT STATEMENT"),(0,a.kt)("p",null,"The select statement defines, which data should be returned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sparql"},"SELECT ?vehicle ?vin ?aggregate ?assembly ?supplier ?lc ?operatingTime ?mileage ?recordDate ?ls_type ?ls_name ?ls_value ?ls_unit ?ls_method ?ls_channels ?ls_classes ?ls_values ?distanceKm ?timeHours WHERE {\n")),(0,a.kt)("h4",{id:"parameters"},"PARAMETERS"),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"vin")," (list of VINs for vehicles of interest) is the only external parameter that is provided by the caller of this skill. ",(0,a.kt)("inlineCode",{parentName:"p"},"aggregate")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"Differential Gear")," to identify the component of interest (gearbox). ",(0,a.kt)("inlineCode",{parentName:"p"},"ls_type")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"GearOil"),". This is done, because prognosis functions for the given gearbox can provide RuL values for that."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sparql"},'  VALUES (?vin ?aggregate ?ls_type) {\n      ("@vin"^^xsd:string "Differential Gear"^^xsd:string "GearOil"^^xsd:string)\n  }\n')),(0,a.kt)("h4",{id:"asset-resolution"},"ASSET RESOLUTION"),(0,a.kt)("p",null,"The OEM's business partner number (BPNL) is known. A entity can have only one BPNL, but more than one EDC connectors. Therefore, the connector which provides the reliability asset (usage data asset for reliability related use cases), must be resolved. In addition, the ID of the offered asset is also resolved."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sparql"},"  bpnl:BPNL000000000OEM cx-common:hasConnector ?oemEDC .\n  ?oemEDC cx-common:offers [ rdfs:isDefinedBy <https://w3id.org/catenax/ontology/reliability ; cx-common:id ?reliabilityAssetId ] .\n")),(0,a.kt)("h4",{id:"resolving-vehicle-part-of-interest-its-supplier-and-the-related-load-data"},"RESOLVING VEHICLE, PART OF INTEREST, ITS SUPPLIER AND THE RELATED LOAD DATA"),(0,a.kt)("p",null,"At the OEM's EDC connector, the graph asset of the usage data is requested. Doing so, a sub-skill is transferred to the OEM's Knowledge Agent. At the OEM, the vehicle is resolved by its VIN. Then, the part of interrest (assembly) and its supplier are resolved by the part's name. At the end, the load for that part can be resolved."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sparql"},"  SERVICE ?oemEDC {\n      GRAPH ?reliabilityAssetId {\n        ?vehicle rdf:type cx-vehicle:Vehicle ;\n            cx-vehicle:vehicleIdentificationNumber ?vin .\n\n        ?assembly rdf:type cx-vehicle:Part ;\n            cx-vehicle:name ?aggregate ;\n            cx-vehicle:isPartOf ?vehicle ;\n            cx-vehicle:supplier ?supplier .\n\n        ?teleAnalysis rdf:type cx-reliability:Analysis ;\n            cx-reliability:analysedObject ?assembly ;\n            cx-reliability:operatingHoursOfVehicle ?operatingTime ;\n            cx-reliability:mileageOfVehicle ?mileage ;\n            cx-core:startDateTime ?recordDate ;\n            cx-reliability:result [\n                cx-core:id ?ls_type ;\n                cx-core:name ?ls_name ;\n                cx-reliability:countingValue ?ls_value ;\n                cx-reliability:countingUnit ?ls_unit ;\n                cx-reliability:countingMethod ?ls_method ;\n                cx-reliability:channels ?ls_channels ;\n                cx-reliability:classes ?ls_classes ;\n                cx-reliability:values ?ls_values\n            ] .\n    } # OEM#GRAPH\n")),(0,a.kt)("h4",{id:"resolving-calculation-service-asset-at-supplier"},"RESOLVING CALCULATION SERVICE ASSET AT SUPPLIER"),(0,a.kt)("p",null,"At the OEM, the supplier of the part of interest gets resolved, as well as the related asset for the RuL calculation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sparql"},"    ?supplier cx-common:hasConnector ?supplierEDC.\n    ?supplierEDC cx-common:offers [ rdfs:isDefinedBy <https://w3id.org/catenax/ontology/behaviour> ; cx-common:id ?prognosisAssetId ] .\n")),(0,a.kt)("h4",{id:"invoke-calculation-service-at-supplier"},"INVOKE CALCULATION SERVICE AT SUPPLIER"),(0,a.kt)("p",null,"At the supplier's EDC connector, the graph asset of the RuL calculation service is requested. Doing so, a sub-skill is transferred to the supplier's Knowledge Agent. At the supplier, the RuL calculation service is called implicit due to its service binding to the knowledge graph. The result then is bound to the knowledge graph."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sparql"},'    SERVICE ?supplierEDC {\n        GRAPH ?prognosisAssetId {\n            ?invocation a cx-behaviour:RemainingUsefulLife ;\n                    cx-behaviour:sender bpnl:BPNL00000003AYRE ;\n                    cx-behaviour:senderConnector ?oemEDC ;\n                    cx-behaviour:recipient ?supplier ;\n                    cx-behaviour:recipientConnector ?supplierEDC ;\n                    cx-behaviour:targetDate ?recordDate ;\n                    cx-behaviour:timeStamp ?recordDate ;\n                    cx-behaviour:component "GearBox" ;\n                    cx-behaviour:statusDate ?recordDate ;\n                    cx-behaviour:statusOperatingHours ?operatingTime ;\n                    cx-behaviour:statusMileage ?mileage ;\n                    cx-behaviour:countingValue ?ls_value ;\n                    cx-behaviour:countingUnit ?ls_unit ;\n                    cx-behaviour:countingMethod ?ls_method ;\n                    cx-behaviour:headerChannels ?ls_channels ;\n                    cx-behaviour:bodyClasses ?ls_classes ;\n                    cx-behaviour:bodyCountsList ?ls_values ;\n                    cx-behaviour:remainingOperatingHours ?timeHours ;\n                    cx-behaviour:remainingRunningDistance ?distanceKm .\n        } # SUPPLIER#GRAPH\n    } # SUPPLIER#CATALOG\n\n  } # OEM#CATALOG\n\n} # SELECT\n')),(0,a.kt)("h2",{id:"skill-registration-and-invocation"},"SKILL REGISTRATION AND INVOCATION"),(0,a.kt)("p",null,"For skill registration and invocation, have a look at the ",(0,a.kt)("a",{parentName:"p",href:"../../../development-view/skill#skill-registration"},"general Development View"),"."))}d.isMDXComponent=!0},16129:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgaG9zdD0iNjViZDcxMTQ0ZSIKICAgdmVyc2lvbj0iMS4xIgogICB3aWR0aD0iMTEiCiAgIGhlaWdodD0iMTEiCiAgIHZpZXdCb3g9Ii0wLjUgLTAuNSAxMSAxMSIKICAgY29udGVudD0iJmx0O214ZmlsZSZndDsmbHQ7ZGlhZ3JhbSBuYW1lPSZxdW90O1NlaXRlLTEmcXVvdDsgaWQ9JnF1b3Q7ekcyNFhrY1NpZDBqRzVaZzFzSlYmcXVvdDsmZ3Q7MVZaZFQ4TWdGUDAxZlRScHdibjVxUFByeGNSRUU1K3hYRnNpN1cwbzJ6cC92VlJnbExYcVpuenhhWEM0SDl4enp0Z1N1cXk2VzhXYThoNDV5SVNrdkV2b1ZVSUltYzNQelVlUGJDMUN5U0t6U0tFRXQ5Z0FlQlR2NE1EVW9TdkJvWTBDTmFMVW9vbkJIT3NhY2gxaFRDbmN4R0d2S09PdURTdGdCRHptVEk3Ulo4RjFhZEVGbVFmOERrUlIrczdabVp1NFlqN1lUZEtXak9ObUFOSHJoQzRWb3JhcnFsdUM3Tm56dk5pOG15OU9keGRUVU90REV2cXpQbVBONU1vTjV5Nm10MzdhUXVHcUdSZDJ2ZGFnTkhSVHRMTVhYeUZNWmp3QldJRldXeFBuNUQ4Si9Hd0NtMTdyY2tpa3c1alRyOWpWQ2lPYWhadHlldUw1endORHpTOTZsNWhkamJVQkwwdGRtWHBYbVZtMld1RWJMRkdpK295bXI0eWxoSm9UUTFQTm9XK1RtdDJZTU44SmVPU3VNUzhERm1ZVExIaE1nV1JhckdOUFRsSGpPanlnTUZjaGFSZVQ2VlNZeGZrdHJsUU9MbVZvb0wwcWUybWFxUUwwS00zUXliYURzS1lQYUErK1c1Wk8zK0g3NDJBSTJ6N1lZOGYxUVk1WkhPV1lGNG41MjFNcDZ0ZzJKdUpHeUdOTlpPUDhHL012YkhYNkY2N2EvNklmYmF2b05UaE83dDNEOXRzWFlrckNLYWxqY2JQL0lDNkp4SjMvVHR5enFBZzlTT21mZFRUYjhMTnB3OE8vRDNyOUFRPT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7IgogICBpZD0ic3ZnNCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZXh0ZXJuYWwtbGluay5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMy4yICgwOTFlMjBlLCAyMDIzLTExLTI1LCBjdXN0b20pIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3NCIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiMwMDAwMDAiCiAgICAgYm9yZGVyb3BhY2l0eT0iMC4yNSIKICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VjaGVja2VyYm9hcmQ9IjAiCiAgICAgaW5rc2NhcGU6ZGVza2NvbG9yPSIjZDFkMWQxIgogICAgIGlua3NjYXBlOnpvb209Ijk3LjA1IgogICAgIGlua3NjYXBlOmN4PSI3LjUwMTI4OCIKICAgICBpbmtzY2FwZTpjeT0iMy4wMDM2MDY0IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMzg0MCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIyMTM3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIyNTUyIgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQiIC8+CiAgPGRlZnMKICAgICBpZD0iZGVmczEiIC8+CiAgPGcKICAgICBpZD0iZzQiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMsLTcpIj4KICAgIDxwYXRoCiAgICAgICBkPSJtIDEzLDEyIHYgNSBIIDMgViA3IGggNSIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoMSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDcsMTIgOC4zOSwxMC44NCIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2Utd2lkdGg9IjAuMSIKICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIKICAgICAgIHBvaW50ZXItZXZlbnRzPSJub25lIgogICAgICAgaWQ9InBhdGgyIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Ik0gMTMsNyA5LjY3LDEyLjM4IDcuMTEsOS4zIFoiCiAgICAgICBmaWxsPSIjZmFhMDIzIgogICAgICAgc3Ryb2tlPSIjZmFhMDIzIgogICAgICAgc3Ryb2tlLXdpZHRoPSIwLjEiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoMyIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJNIDUsMTQgOSwxMCIKICAgICAgIGZpbGw9Im5vbmUiCiAgICAgICBzdHJva2U9IiNmYWEwMjMiCiAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICBwb2ludGVyLWV2ZW50cz0ibm9uZSIKICAgICAgIGlkPSJwYXRoNCIgLz4KICA8L2c+Cjwvc3ZnPgo="},250:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/behaviour-twin-rul-kit-icon-mini-284c453a1e4edf574a034868b618d468.svg"}}]);