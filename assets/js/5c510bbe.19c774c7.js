"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[69141],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),o=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=o(n),m=r,c=u["".concat(s,".").concat(m)]||u[m]||g[m]||l;return n?a.createElement(c,p(p({ref:e},d),{},{components:n})):a.createElement(c,p({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91266:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={id:"postGraph",title:"Upload a Graph (Asset)",slug:"graph-post"},p=void 0,i={unversionedId:"kits/knowledge-agents/development-view/api/graph/postGraph",id:"kits/knowledge-agents/development-view/api/graph/postGraph",title:"Upload a Graph (Asset)",description:"\x3c!--",source:"@site/docs-kits/kits/knowledge-agents/development-view/api/graph/post.mdx",sourceDirName:"kits/knowledge-agents/development-view/api/graph",slug:"/kits/knowledge-agents/development-view/api/graph/graph-post",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/knowledge-agents/development-view/api/graph/graph-post",draft:!1,tags:[],version:"current",frontMatter:{id:"postGraph",title:"Upload a Graph (Asset)",slug:"graph-post"},sidebar:"kits",previous:{title:"Returns a Skill",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/knowledge-agents/development-view/api/agent/skill/skill-get"},next:{title:"Deletes a Graph (Asset)",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/knowledge-agents/development-view/api/graph/graph-delete"}},s={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Request Body",id:"request-body",level:2},{value:"Code Snippets",id:"code-snippets",level:2},{value:"Responses",id:"responses",level:2},{value:"200",id:"200",level:3},{value:"204",id:"204",level:3},{value:"400",id:"400",level:3},{value:"500",id:"500",level:3}],d={toc:o};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /graph\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Upload a Graph (Asset): ")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"in"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"required"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asset"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"The Asset Id of the Graph")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"assetName"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The Asset Name of the Graph")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"assetDescription"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The Asset Description of the Graph")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"assetVersion"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The Asset Version of the Graph")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contract"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The contract under which the graph should be published")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isFederated"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the graph should be visible in the Federated Catalogue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ontology"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiple references to ontologies which are referenced in the graph")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowServicePattern"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"A regex indicating which external SERVICE Iris are allowed when traversing this graph.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"denyServicePattern"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"A regex indicating which external SERVICE Iris are forbidden  when traversing this graph.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"shape"),(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"The shape of the asset if it is known.")))),(0,r.kt)("h2",{id:"request-body"},"Request Body"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"text/turtle")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ttl",metastring:'title="Example graph in ttl syntax"',title:'"Example',graph:!0,in:!0,ttl:!0,'syntax"':!0},"#################################################################\n# Graph Asset in TTL/RDF/OWL FORMAT\n# See copyright notice in the top folder\n# See authors file in the top folder\n# See license file in the top folder\n#################################################################\n\n@prefix : <GraphAsset?consumer=Upload> .\n@prefix cx-core: <https://w3id.org/catenax/ontology/core#> .\n@prefix cx-common: <https://w3id.org/catenax/ontology/common#> .\n@prefix cx-supply: <https://w3id.org/catenax/ontology/supply-chain#> .\n@prefix cx-mat: <https://w3id.org/catenax/taxonomy/material#> .\n@prefix bpnl: <urn:bpn:legal:> .\n@prefix bpns: <urn:bpn:site:> .\n@prefix bpna: <urn:bpn:address:> .\n@prefix bpnl: <urn:bpn:legal:> .\n@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .\n@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .\n@prefix skos: <http://www.w3.org/2004/02/skos/core#> .\n@prefix dc: <http://purl.org/dc/elements/1.1/> .\n\n:Chain1 rdf:type cx-supply:SupplyRelationship;\n        cx-supply:material cx-mat:Rubber;\n        cx-supply:consumer bpna:BPNL00000003COJN;\n        cx-supply:supplier bpns:BPNL00000003CPIY.\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Headers"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content-type"),(0,r.kt)("td",{parentName:"tr",align:null},"text/csv")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="Example graph in csv syntax"',title:'"Example',graph:!0,in:!0,csv:!0,'syntax"':!0},"IRI,http://www.w3.org/1999/02/22-rdf-syntax-ns#type,https://w3id.org/catenax/ontology/supply-chain#material,https://w3id.org/catenax/ontology/supply-chain#consumer,https://w3id.org/catenax/ontology/supply-chain#supplier\n:Chain1,<https://w3id.org/catenax/ontology/supply-chain#SupplyRelationship>,<https://w3id.org/catenax/taxonomy/material#Rubber>,<urn:bpn:address:BPNL00000003COJN>,<urn:bpn:site:BPNL00000003CPIY>\n")),(0,r.kt)("h2",{id:"code-snippets"},"Code Snippets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Shell + Curl"',title:'"Shell',"+":!0,'Curl"':!0},"curl --request POST \\\n  --url 'https://knowledge.dev.demo.catena-x.net/consumer-matchmaking/api/graph?asset=GraphAsset%3Fprovider%3DTraceability&assetName=Sample%20Graph&assetVersion=3.0.2&assetDescription=Uploads%20some%20sample%20data.&contract=Contract%3Fprovider%3DGraph&isFederated=true&deniedServicePattern=https%3F%3A%2F%2F.*' \\\n  --header 'content-type: text/csv' \\\n  --data '        IRI,http://www.w3.org/1999/02/22-rdf-syntax-ns#type,https://w3id.org/catenax/ontology/supply-chain#material,https://w3id.org/catenax/ontology/supply-chain#consumer,https://w3id.org/catenax/ontology/supply-chain#supplier\n:Chain1,<https://w3id.org/catenax/ontology/supply-chain#SupplyRelationship>,<https://w3id.org/catenax/taxonomy/material#Rubber>,<urn:bpn:address:BPNL00000003COJN>,<urn:bpn:site:BPNL00000003CPIY>\n'\n")),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("h3",{id:"200"},"200"),(0,r.kt)("p",null,"Graph has been uploaded and published."),(0,r.kt)("h3",{id:"204"},"204"),(0,r.kt)("p",null,"Graph has been uploaded and description updated."),(0,r.kt)("h3",{id:"400"},"400"),(0,r.kt)("p",null,"Bad request or malformed TTL/CSV"),(0,r.kt)("h3",{id:"500"},"500"),(0,r.kt)("p",null,"Fatal error"),(0,r.kt)("sub",null,(0,r.kt)("sup",null,"(C) 2021,2024 Contributors to the Eclipse Foundation. SPDX-License-Identifier: CC-BY-4.0")))}u.isMDXComponent=!0}}]);