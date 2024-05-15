"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[46803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={},a="Software Operation View",c={unversionedId:"kits/tractusx-edc/docs/kit/operation-view/page00_operation_view",id:"version-23.12/kits/tractusx-edc/docs/kit/operation-view/page00_operation_view",title:"Software Operation View",description:"Connector kit banner",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/operation-view/page00_operation_view.md",sourceDirName:"kits/tractusx-edc/docs/kit/operation-view",slug:"/kits/tractusx-edc/docs/kit/operation-view/page00_operation_view",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/kit/operation-view/page00_operation_view",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"Release",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/development/Release"},next:{title:"Technical Prerequisites",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/kit/operation-view/page02_technical_prerequisites"}},s={},l=[{value:"Connector KIT",id:"connector-kit",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Connector Components",id:"connector-components",level:2}],p={toc:l};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"software-operation-view"},"Software Operation View"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connector kit banner",src:n(63080).Z,width:"286",height:"244"})),(0,r.kt)("h2",{id:"connector-kit"},"Connector KIT"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The following documentation will guide you through the Tractus-X EDC deployment.\nYou will be setting up multiple controllers and enabling communication between them."),(0,r.kt)("admonition",{title:"Tractus-X EDC or Core EDC?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following guide assumes the use of the Tractus-X EDC.\nIt includes the Core EDC with all of its functionality.\nHowever, this core is supplemented by extensions that allow for the use of additional backends and connection types.\nFurthermore, the provided Helm charts, build configuration and tests allow for a smoother deployment.")),(0,r.kt)("h2",{id:"connector-components"},"Connector Components"),(0,r.kt)("p",null,"In a usual EDC environment, each participant would operate at least one connector.\nEach of these connectors consists of a control plane and a data plane.\nThe control plane functions as administration layer and is responsible for resource management, contract negotiation and administering data transfer.\nThe data plane does the heavy lifting of transferring and receiving data streams."),(0,r.kt)("p",null,"Each of these planes comes in several variants, allowing for example secrets to be stored in Azure Vault or a Hashicorp Vault.\nThe setup on the following pages assumes the use of Hashicorp Vault for secrets and PostgreSQL for data storage."))}u.isMDXComponent=!0},63080:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ConnectorKitIcon-44f7fb56f8da1b27337f8c23f28067d2.png"}}]);