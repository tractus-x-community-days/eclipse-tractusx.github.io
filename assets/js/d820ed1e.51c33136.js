"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[248],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||r;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},53210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={sidebar_position:2,title:"Agent-Enabled Dataspace Connector"},o=void 0,l={unversionedId:"kits/knowledge-agents/operation-view/agent_edc",id:"version-24.03/kits/knowledge-agents/operation-view/agent_edc",title:"Agent-Enabled Dataspace Connector",description:"\x3c!--",source:"@site/docs-kits_versioned_docs/version-24.03/kits/knowledge-agents/operation-view/agent_edc.md",sourceDirName:"kits/knowledge-agents/operation-view",slug:"/kits/knowledge-agents/operation-view/agent_edc",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/knowledge-agents/operation-view/agent_edc",draft:!1,tags:[],version:"24.03",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Agent-Enabled Dataspace Connector"},sidebar:"kits",previous:{title:"Deployment",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/knowledge-agents/operation-view/deployment"},next:{title:"Provisioning",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/knowledge-agents/operation-view/provider"}},s={},c=[{value:"Quick Setup Guide for Agent-Enabled EDC (KA-EDC)",id:"quick-setup-guide-for-agent-enabled-edc-ka-edc",level:3},{value:"Quick Setup Guide for Registering A Skill",id:"quick-setup-guide-for-registering-a-skill",level:3},{value:"Register A Skill Policy",id:"register-a-skill-policy",level:4},{value:"Register A Skill Contract",id:"register-a-skill-contract",level:4},{value:"Register a Skill Asset",id:"register-a-skill-asset",level:4},{value:"Quick Setup Guide for Calling A Skill",id:"quick-setup-guide-for-calling-a-skill",level:3},{value:"Calling A Local Skill",id:"calling-a-local-skill",level:4},{value:"Calling A Remote Skill",id:"calling-a-remote-skill",level:4}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For participating in Semantic-Web Driven Dataspace Applications following the Catena-X Knowledge Agents Standard, we recommend deploying an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/knowledge-agents-edc/tree/main/docs/README.md"},"Agent-Enabled Tractus-X EDC")),(0,i.kt)("p",null,"For more information see"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Our ",(0,i.kt)("a",{parentName:"li",href:"../adoption-view/intro"},"Adoption")," guidelines"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"../development-view/architecture"},"Implementation")," documentation"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"deployment"},"Deployment")," overview"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"testbed"},"Conformity")," testbed"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"policy"},"Data Sovereignity & Graph Policy")," discussion")),(0,i.kt)("h3",{id:"quick-setup-guide-for-agent-enabled-edc-ka-edc"},"Quick Setup Guide for Agent-Enabled EDC (KA-EDC)"),(0,i.kt)("p",null,"Add a helm dependency to your umbrella/infrastructure Chart.yaml (this example uses the postgresql-hashicorp variant but abstracts away from vault and SSI settings - ",(0,i.kt)("em",{parentName:"p"},"vaultsettings and"),"ssisettings as well as the persistence config, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/knowledge-agents-edc/tree/main/docs/README.md"},"here")," for more options and full details)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"   - name: agent-connector\n      repository: https://eclipse-tractusx.github.io/charts/dev\n      version: 1.11.16\n      alias: my-agent-connector\n")),(0,i.kt)("p",null,"Then configure the connector in the values.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'my-agent-connector:\n  participant:\n    id: {{MYBPNL}}\n  nameOverride: my-agent-connector\n  fullnameOverride: "my-agent-connector"\n  vault: *vaultsettings\n  controlplane:\n    image: \n      pullPolicy: Always\n    ssi: *ssisettings\n    endpoints: \n      management:\n        authKey: "{{EDC_API_KEY}}"\n    ## Ingress declaration to expose the network service.\n    ingresses:\n      - enabled: true\n        # -- The hostname to be used to precisely map incoming traffic onto the underlying network service\n        hostname: "{{controlPlaneName}}"\n        # -- EDC endpoints exposed by this ingress resource\n        endpoints:\n          - protocol\n          - management\n          - control\n        # -- Enables TLS on the ingress resource\n        tls:\n          enabled: true\n  dataplanes:\n    dataplane:\n      configs: \n        dataspace.ttl: |-\n          ################################################\n          # Catena-X Agent Bootstrap\n          ################################################\n          @prefix : <GraphAsset?local=Dataspace> .\n          @prefix cx-core: <https://w3id.org/catenax/ontology/core#> .\n          @prefix cx-common: <https://w3id.org/catenax/ontology/common#> .\n          @prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n          @prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n          @prefix bpnl: <bpn:legal:> .\n          @base <GraphAsset?local=Dataspace> .\n\n          bpnl:{{PARTNERBPNL}} cx-common:hasBusinessPartnerNumber "{{PARTNERBPNL}}"^^xsd:string;\n                               cx-common:hasConnector <edcs://{{partnerControlPlanePublic}}>.\n\n          bpnl:{{MYBPNL}}      cx-common:hasBusinessPartnerNumber "MYBPNL"^^xsd:string;\n                               cx-common:hasConnector <edcs://{{controlPlaneName}}>.\n      agent:\n        synchronization: 60000\n        connectors:\n          - [https://{{controlPlaneName}}]https://{{partnerControlPlanePublic}}\n\n      ## Ingress declaration to expose the network service.\n      ingresses:\n        - enabled: true\n          hostname: "{{agentPlaneName}}"\n          # -- EDC endpoints exposed by this ingress resource\n          endpoints:\n            - public\n            - default\n            - control\n            - callback\n          # -- Enables TLS on the ingress resource\n          tls:\n            enabled: true\n')),(0,i.kt)("h3",{id:"quick-setup-guide-for-registering-a-skill"},"Quick Setup Guide for Registering A Skill"),(0,i.kt)("p",null,"We demonstrate the steps by interacting with the EDC Control Plane Management API and the EDC Data Plane Agent Endpoint"),(0,i.kt)("h4",{id:"register-a-skill-policy"},"Register A Skill Policy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl --location --globoff \'{{controlPlaneName}}/management/v2/policydefinitions\' \\\n--header \'X-Api-Key: {{EDC_API_KEY}}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "@context": {\n        "odrl": "http://www.w3.org/ns/odrl/2/",\n        "cx-common": "https://w3id.org/catenax/ontology/common#"\n    },\n    "@type": "PolicyDefinitionRequestDto",\n    "@id": "Policy?me=SkillPolicy",\n    "policy": {\n  "@type": "Policy",\n  "odrl:permission" : [{\n   "odrl:action" : "USE",\n   "odrl:constraint" : {\n    "@type": "LogicalConstraint",\n    "odrl:or" : [{\n     "@type" : "Constraint",\n     "odrl:leftOperand" : "BusinessPartnerNumber",\n     "odrl:operator" : {\n                        "@id": "odrl:eq"\n                    },\n     "odrl:rightOperand" : "{{PARTNERBPNL}}"\n    },\n                {\n     "@type" : "Constraint",\n     "odrl:leftOperand" : "BusinessPartnerNumber",\n     "odrl:operator" : {\n                        "@id": "odrl:eq"\n                    },\n     "odrl:rightOperand" : "{{MYBPNL}}"\n    }]\n   }\n  }]\n    }\n}\n\'\n')),(0,i.kt)("h4",{id:"register-a-skill-contract"},"Register A Skill Contract"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl --location --globoff \'{{controlPlaneName}}/management/v2/policydefinitions\' \\\n--header \'X-Api-Key: {{EDC_API_KEY}}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "@context": {\n         "cx-common": "https://w3id.org/catenax/ontology/common#"\n    },\n    "@id": "Contract?me=SkillContract",\n    "@type": "ContractDefinition",\n    "accessPolicyId": "Policy?me=SkillPolicy",\n    "contractPolicyId": "Policy?me=SkillPolicy",\n    "assetsSelector" : {\n        "@type" : "CriterionDto",\n        "operandLeft": "https://w3id.org/catenax/ontology/common#publishedUnderContract",\n        "operator": "=",\n        "operandRight": "Contract?me=Skill"\n    }\n}\n\'\n')),(0,i.kt)("h4",{id:"register-a-skill-asset"},"Register a Skill Asset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"curl --location --globoff '{{dataPlaneName}}/api/agent/skill?asset=SkillAsset%3Fsupplier%3DRemainingUsefulLife&distributionMode=ALL&contract=Contract?me=SkillContract' \\\n--header 'Content-Type: application/sparql-query' \\\n--header '{{DATA_PLANE_KEY}}: {{DATA_PLANE_TOKEN}}' \\\n--data-raw 'PREFIX cx-common:       <https://w3id.org/catenax/ontology/common#>\nPREFIX cx-core:         <https://w3id.org/catenax/ontology/core#>\nPREFIX cx-vehicle:      <https://w3id.org/catenax/ontology/vehicle#>\nPREFIX cx-reliability:  <https://w3id.org/catenax/ontology/reliability#>\nPREFIX cx-behaviour:    <https://w3id.org/catenax/ontology/behaviour#>\nPREFIX rdf:             <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\nPREFIX rdfs:            <http://www.w3.org/2000/01/rdf-schema#>\nPREFIX xsd:             <http://www.w3.org/2001/XMLSchema#>\nPREFIX json:            <https://json-schema.org/draft/2020-12/schema#> \nPREFIX bpnl:      <bpn:legal:>\nPREFIX oem:             <GraphAsset?oem=>\nPREFIX supplier:        <GraphAsset?supplier=>\n\n################################################################\n# Sample for a Federated (Consumer-Deployed) SparQL Skill which\n#  - Jumps into an OEM-owned reliability asset given a set of candidate VANs\n#  - Feeds the gathered data back into the respective supplier connector/agent \n#.   to perform a health indication \n# Author: cgjung\n# (c) 2023 Catena-X assocation\n################################################################\n\nSELECT ?vehicle ?van ?aggregate ?assembly ?supplier ?lc ?operatingTime ?mileage ?recordDate ?ls_type ?ls_name ?ls_value ?ls_unit ?ls_method ?ls_channels ?ls_classes ?ls_values ?distanceKm ?timeHours WHERE {\n\n  VALUES (?van ?aggregate ?ls_type) { \n      (\"@van\"^^xsd:string \"Differential Gear\"^^xsd:string \"GearOil\"^^xsd:string) \n  }\n\n  bpnl:BPNL00000003AYRE cx-common:hasConnector ?oemEDC.\n  ?oemEDC cx-common:offers [ rdfs:isDefinedBy <https://w3id.org/catenax/ontology/reliability>; cx-common:id ?reliabilityAssetId].\n  \n  SERVICE ?oemEDC {  \n      GRAPH ?reliabilityAssetId {\n        ?vehicle rdf:type cx-vehicle:Vehicle;\n            cx-vehicle:vehicleIdentificationNumber ?van.\n\n        ?assembly rdf:type cx-vehicle:Part;\n            cx-vehicle:name ?aggregate;\n            cx-vehicle:isPartOf ?vehicle;\n            cx-vehicle:supplier ?supplier.\n            \n        ?teleAnalysis rdf:type cx-reliability:Analysis;\n            cx-reliability:analysedObject ?assembly;\n            cx-reliability:operatingHoursOfVehicle ?operatingTime;\n            cx-reliability:mileageOfVehicle ?mileage;\n            cx-core:startDateTime ?recordDate;\n            cx-reliability:result [\n                cx-core:id ?ls_type;\n                cx-core:name ?ls_name;\n                cx-reliability:countingValue ?ls_value;\n                cx-reliability:countingUnit ?ls_unit;\n                cx-reliability:countingMethod ?ls_method;\n                cx-reliability:channels ?ls_channels;\n                cx-reliability:classes ?ls_classes;\n                cx-reliability:values ?ls_values\n            ].\n    } # OEM#GRAPH\n\n    ?supplier cx-common:hasConnector ?supplierEDC.\n    ?supplierEDC cx-common:offers [ rdfs:isDefinedBy <https://w3id.org/catenax/ontology/behaviour>; cx-common:id ?prognosisAssetId].\n\n    SERVICE ?supplierEDC {\n        GRAPH ?prognosisAssetId {\n            ?invocation a cx-behaviour:RemainingUsefulLife;\n                    cx-behaviour:sender bpnl:BPNL00000003AYRE;\n                    cx-behaviour:senderConnector ?oemEDC;\n                    cx-behaviour:recipient ?supplier;\n                    cx-behaviour:recipientConnector ?supplierEDC;\n                    cx-behaviour:targetDate ?recordDate;\n                    cx-behaviour:timeStamp ?recordDate;\n                    cx-behaviour:component \"GearBox\";\n                    cx-behaviour:statusDate ?recordDate;\n                    cx-behaviour:statusOperatingHours ?operatingTime;\n                    cx-behaviour:statusMileage ?mileage;\n                    cx-behaviour:countingValue ?ls_value;\n                    cx-behaviour:countingUnit ?ls_unit;\n                    cx-behaviour:countingMethod ?ls_method;\n                    cx-behaviour:headerChannels ?ls_channels;\n                    cx-behaviour:bodyClasses ?ls_classes;\n                    cx-behaviour:bodyCountsList ?ls_values;\n                    cx-behaviour:remainingOperatingHours ?timeHours;\n                    cx-behaviour:remainingRunningDistance ?distanceKm.\n        } # SUPPLIER#GRAPH          \n    } # SUPPLIER#CATALOG\n\n  } # OEM#CATALOG\n\n} # SELECT\n'\n")),(0,i.kt)("h3",{id:"quick-setup-guide-for-calling-a-skill"},"Quick Setup Guide for Calling A Skill"),(0,i.kt)("p",null,"We demonstrate the steps by interacting with the EDC Data Plane Agent Endpoint"),(0,i.kt)("h4",{id:"calling-a-local-skill"},"Calling A Local Skill"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl --location --globoff \'{{agentPlaneName}}/api/agent?asset=SkillAsset%3Fsupplier%3DRemainingUsefulLife\' \\\n--header \'Content-Type: application/sparql-results+json\' \\\n--header \'Accept: application/json\' \\\n--header \'{{DATA_PLANE_KEY}}: {{DATA_PLANE_TOKEN}}\' \\\n--data \'{\n    "head": {\n        "vars": [\n            "van"\n        ]\n    },\n    "results": {\n        "bindings": [\n            {\n                "van": {\n                    "type": "literal",\n                    "value": "FNLQNRVCOFLHAQ"\n                }\n            },\n            {\n                "van": {\n                    "type": "literal",\n                    "value": "FGPTXINYZAVJYK"\n                }\n            },\n            {\n                "van": {\n                    "type": "literal",\n                    "value": "DVAJDTLJMKKZGY"\n                }\n            }   \n        ]\n    }\n}\'\n')),(0,i.kt)("h4",{id:"calling-a-remote-skill"},"Calling A Remote Skill"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl --location --globoff \'{{agentPlaneName}}/api/agent?asset={{URLENCODED_PARTNER_CONTROL_PLANE}}%23SkillAsset%3Fsupplier%3DRemainingUsefulLife\' \\\n--header \'Content-Type: application/sparql-results+json\' \\\n--header \'Accept: application/json\' \\\n--header \'{{DATA_PLANE_KEY}}: {{DATA_PLANE_TOKEN}}\' \\\n--data \'{\n    "head": {\n        "vars": [\n            "van"\n        ]\n    },\n    "results": {\n        "bindings": [\n            {\n                "van": {\n                    "type": "literal",\n                    "value": "FNLQNRVCOFLHAQ"\n                }\n            },\n            {\n                "van": {\n                    "type": "literal",\n                    "value": "FGPTXINYZAVJYK"\n                }\n            },\n            {\n                "van": {\n                    "type": "literal",\n                    "value": "DVAJDTLJMKKZGY"\n                }\n            }   \n        ]\n    }\n}\'\n')),(0,i.kt)("sub",null,(0,i.kt)("sup",null,"(C) 2021,2023 Contributors to the Eclipse Foundation. SPDX-License-Identifier: CC-BY-4.0")))}d.isMDXComponent=!0}}]);