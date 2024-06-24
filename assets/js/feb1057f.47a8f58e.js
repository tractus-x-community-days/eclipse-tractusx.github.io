"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[54928],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),f=r,h=d["".concat(c,".").concat(f)]||d[f]||m[f]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_class_name:"hidden"},o=void 0,s={unversionedId:"kits/Traceability Kit/Software Development View/part_policies",id:"version-24.03/kits/Traceability Kit/Software Development View/part_policies",title:"part_policies",description:"\x3c!---",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Traceability Kit/Software Development View/part_policies.mdx",sourceDirName:"kits/Traceability Kit/Software Development View",slug:"/kits/Traceability Kit/Software Development View/part_policies",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Traceability Kit/Software Development View/part_policies",draft:!1,tags:[],version:"24.03",frontMatter:{sidebar_class_name:"hidden"},sidebar:"kits",previous:{title:"part_aspect-models",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Traceability Kit/Software Development View/part_aspect-models"},next:{title:"part_bill-of-materials",permalink:"/eclipse-tractusx.github.io/docs-kits/24.03/kits/Traceability Kit/part_bill-of-materials"}},c={},l=[{value:"Policies",id:"policies",level:2},{value:"Access Policies",id:"access-policies",level:3},{value:"Usage Policies / Contract Policies",id:"usage-policies--contract-policies",level:3},{value:"Membership Policy",id:"membership-policy",level:4},{value:"Framework Agreement Policy",id:"framework-agreement-policy",level:4},{value:"Purpose-based Policy",id:"purpose-based-policy",level:4},{value:"Individual Agreements and Contracts",id:"individual-agreements-and-contracts",level:4},{value:"Contract Definitions",id:"contract-definitions",level:3}],p={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"policies"},"Policies"),(0,r.kt)("h3",{id:"access-policies"},"Access Policies"),(0,r.kt)("p",null,"Access policies like the BPN access policy are described in the ",(0,r.kt)("a",{parentName:"p",href:"../../Industry%20Core%20Kit/Software%20Development%20View/Policies%20Development%20View%20Industry%20Core%20Kit"},"policy section of the Industry Core KIT"),"."),(0,r.kt)("h3",{id:"usage-policies--contract-policies"},"Usage Policies / Contract Policies"),(0,r.kt)("p",null,"It is recommended to restrict the data usage for all traceability aspects. An example of one usage policy containing three different constraints is shown and described in the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "@type": "PolicyDefinitionRequestDto",\n  "@id": "<POLICY-ID>", // Important for the contract definition\n  "policy": {\n    "@type": "Policy",\n    "odrl:permission": [\n      {\n        "odrl:action": "USE",\n        "odrl:constraint": {\n          "@type": "LogicalConstraint",\n          "odrl:and": [ // All of the following three constraints have to be fullfilled (and, not or)\n            // First constraint to verify the the Catena-X membership\n            {\n              "@type": "Constraint",\n              "odrl:leftOperand": "Membership",\n              "odrl:operator": {\n                "@id": "odrl:eq"\n              },\n              "odrl:rightOperand": "active"\n            },\n            // Second constraint to verify if the framework agreement for the traceability use case is accepted\n            {\n              "@type": "Constraint",\n              "odrl:leftOperand": "FrameworkAgreement.traceability",\n              "odrl:operator": {\n                "@id": "odrl:eq"\n              },\n              "odrl:rightOperand": "active"\n            },\n            // Third constraint to define the specific purpose, further detailed in the framework agreement\n            {\n              "@type": "Constraint",\n              "odrl:leftOperand": "PURPOSE",\n              "odrl:operator": {\n                "@id": "odrl:eq"\n              },\n              "odrl:rightOperand": "<POSSIBLE-PURPOSE-STRING>" // See list in the framework agreement\n            }\n          ]\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u270b ",(0,r.kt)("strong",{parentName:"p"},"Standardization"),"\nKeep in mind that the ",(0,r.kt)("inlineCode",{parentName:"p"},"odrl:leftOperand")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"odrl:rightOperand")," will be standardized. Therefore, check the latest JSON payload after every release if it is still up-to-date. Otherwise, data sharing might not be possible if the policies are wrong.")),(0,r.kt)("h4",{id:"membership-policy"},"Membership Policy"),(0,r.kt)("p",null,"To verify the participants Catena-X membership, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Membership")," verifiable credential can be used. In case of a policy, the data can only be used from verified Catena-X members. The payload is shown in the first constraint-part of the example above and described in detail in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/ssi-docu/blob/8f305ef7007a6bdb753f22b69b81097a1b3b1661/docs/architecture/cx-3-2/edc/policy.definitions.md#1-membership-constraint"},"EDC part of the SSI documentation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "Constraint",\n  "odrl:leftOperand": "Membership",\n  "odrl:operator": {\n    "@id": "odrl:eq"\n  },\n  "odrl:rightOperand": "active"\n}\n')),(0,r.kt)("h4",{id:"framework-agreement-policy"},"Framework Agreement Policy"),(0,r.kt)("p",null,"To verify if a participant accepted the framework agreement of a specific use case created by the ",(0,r.kt)("a",{parentName:"p",href:"https://catena-x.net/en/about-us/the-association"},"Catena-X association"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"FrameworkAgreement.traceability")," verifiable credential can be used for the traceability framework agreement. Further details and the framework agreement itself can be downloaded from the ",(0,r.kt)("a",{parentName:"p",href:"https://catena-x.net/en/catena-x-introduce-implement/governance-framework-for-data-space-operations"},"Governance Framework for Data Space Operations"),". In case of a policy, the data can only be used from accepted and verified traceability framework agreement members. This is shown in the second constraint-part of the example above and described in detail in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/ssi-docu/blob/8f305ef7007a6bdb753f22b69b81097a1b3b1661/docs/architecture/cx-3-2/edc/policy.definitions.md#35-traceability"},"EDC part of the SSI documentation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "Constraint",\n  "odrl:leftOperand": "FrameworkAgreement.traceability",\n  "odrl:operator": {\n    "@id": "odrl:eq"\n  },\n  "odrl:rightOperand": "active"\n}\n')),(0,r.kt)("h4",{id:"purpose-based-policy"},"Purpose-based Policy"),(0,r.kt)("p",null,"To further restrict the data usage, a purpose-based policy can be used. If, for example, the purpose mentions a quality investigation, this means that the data usage is only allowed for handling and working on the quality investigation. All possible purposes and their meanings are defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://catena-x.net/en/catena-x-introduce-implement/governance-framework-for-data-space-operations"},"traceability framework agreement"),". This allows to create a uniform understanding and a standardized set of payloads in the network by connecting technical strings to legal agreements."),(0,r.kt)("p",null,"It is highly recommended to only use this purpose-based policy together with the ",(0,r.kt)("a",{parentName:"p",href:"#framework-agreement-policy"},"Framework Agreement Policy"),". Only with both together it can be ensured that the payload of the purpose policy is agreed by the other part and is based on the same set."),(0,r.kt)("p",null,"Details about the endpoint and payload can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/bc7a1aaf8e1d2a742f71c04e98bcdf409a274fc3/docs/samples/Transfer%20Data.md#2-setup-data-offer"},"Transfer Data sample in the tractus-x EDC repository"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "Constraint",\n  "odrl:leftOperand": "PURPOSE",\n  "odrl:operator": {\n    "@id": "odrl:eq"\n  },\n  "odrl:rightOperand": "<POSSIBLE-PURPOSE-STRING>"\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<POSSIBLE-PURPOSE-STRING>")," have to be replaced with one purpose string defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://catena-x.net/en/catena-x-introduce-implement/governance-framework-for-data-space-operations"},"traceability framework agreement"),"."),(0,r.kt)("h4",{id:"individual-agreements-and-contracts"},"Individual Agreements and Contracts"),(0,r.kt)("p",null,"There might be some individual agreements and contracts between two companies. It is possible to reference such a bilateral contract with the purpose-based policy. In this case, the ",(0,r.kt)("inlineCode",{parentName:"p"},"odrl:rightOperand")," includes the unique reference to the contract. It is planned to standardize the format in future upcoming releases."),(0,r.kt)("h3",{id:"contract-definitions"},"Contract Definitions"),(0,r.kt)("p",null,"In a last step, these policies need to be connected to the data by a contract definition (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/bc7a1aaf8e1d2a742f71c04e98bcdf409a274fc3/docs/samples/Transfer%20Data.md#2-setup-data-offer"},"Transfer Data sample in the tractus-x EDC repository")," for further details).\nWhen using an ",(0,r.kt)("a",{parentName:"p",href:"#access-policies"},"Access Policy"),", their ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," needs to be included as a value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessPolicyId")," key in the contract definition. When using an above-mentioned ",(0,r.kt)("a",{parentName:"p",href:"#usage-policies--contract-policies"},"Usage Policy"),", their ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," needs to be included as a value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"contractPolicyId")," key in the contract definition."))}d.isMDXComponent=!0}}]);