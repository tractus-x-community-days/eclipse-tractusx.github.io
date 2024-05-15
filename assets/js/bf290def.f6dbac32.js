"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[28764],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,k=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},28207:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={},o="Tractus-X EDC",s={unversionedId:"kits/tractusx-edc/docs/README",id:"version-23.12/kits/tractusx-edc/docs/README",title:"Tractus-X EDC",description:"The Tractus-X EDC repository creates runnable applications out of EDC extensions from",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/README.md",sourceDirName:"kits/tractusx-edc/docs",slug:"/kits/tractusx-edc/docs/",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"EDC Extensions",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/kit/operation-view/page10_extensions"},next:{title:"Management API Overview",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/management-api-overview"}},c={},l=[{value:"Connector Setup",id:"connector-setup",level:2},{value:"Recommended Documentation",id:"recommended-documentation",level:2},{value:"This Repository",id:"this-repository",level:3},{value:"Eclipse Dataspace Connector",id:"eclipse-dataspace-connector",level:3}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tractus-x-edc"},"Tractus-X EDC"),(0,r.kt)("p",null,"The Tractus-X EDC repository creates runnable applications out of EDC extensions from\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector"},"Eclipse DataSpace Connector")," repository."),(0,r.kt)("p",null,"When running a EDC connector from the Tractus-X EDC repository there are three setups to choose from. They only vary by\nusing different extensions for"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Resolving of Connector-Identities"),(0,r.kt)("li",{parentName:"ul"},"Persistence of the Control-Plane-State"),(0,r.kt)("li",{parentName:"ul"},"Persistence of Secrets (Vault)")),(0,r.kt)("h2",{id:"connector-setup"},"Connector Setup"),(0,r.kt)("p",null,"The three supported setups are."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setup 1: Pure in Memory ",(0,r.kt)("strong",{parentName:"li"},"Not intended for production use!"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-controlplane/edc-runtime-memory/"},"Control Plane"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/tree/main/extensions/common/iam/oauth2/daps"},"IDS DAPS Extensions")),(0,r.kt)("li",{parentName:"ul"},"In Memory Persistence done by using no extension"),(0,r.kt)("li",{parentName:"ul"},"In Memory Keyvault with seedable secrets."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/"},"Data Plane"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/tree/main/extensions/common/vault/azure-vault"},"Azure Key Vault Extension")))))),(0,r.kt)("li",{parentName:"ul"},"Setup 2: PostgreSQL & Azure Vault",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql-azure-vault/"},"Control Plane"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/tree/main/extensions/common/iam/oauth2/daps"},"IDS DAPS Extensions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/tree/main/extensions/control-plane/store/sql"},"PostgreSQL Persistence Extensions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/tree/main/extensions/common/vault/azure-vault"},"Azure Key Vault Extension")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/"},"Data Plane"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/tree/main/extensions/common/vault/azure-vault"},"Azure Key Vault Extension")))))),(0,r.kt)("li",{parentName:"ul"},"Setup 3: PostgreSQL & HashiCorp Vault",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql-hashicorp-vault/"},"Control Plane"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/tree/main/extensions/common/iam/oauth2/daps"},"IDS DAPS Extensions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/tree/main/extensions/control-plane/store/sql"},"PostgreSQL Persistence Extensions")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-dataplane/edc-dataplane-hashicorp-vault/"},"Data Plane"))))),(0,r.kt)("h2",{id:"recommended-documentation"},"Recommended Documentation"),(0,r.kt)("h3",{id:"this-repository"},"This Repository"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/migration/Version_0.0.x_0.1.x"},"Update EDC Version from 0.0.x - 0.1.x")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../edc-controlplane"},"Application: Control Plane")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../edc-dataplane"},"Application: Data Plane")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-extensions/business-partner-validation/"},"Extension: Business Partner Numbers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/samples/example-dataspace/"},"Example: Local TXDC Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/samples/Transfer%20Data"},"Example: Data Transfer"))),(0,r.kt)("h3",{id:"eclipse-dataspace-connector"},"Eclipse Dataspace Connector"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/blob/main/docs/developer/architecture/domain-model.md"},"EDC Domain Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/blob/main/resources/openapi/openapi.yaml"},"EDC Open API Spec")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/eclipse-edc/Connector/tree/main/extensions/control-plane/http-receiver"},"HTTP Receiver Extension"))))}u.isMDXComponent=!0}}]);