"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[33413],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={title:"TRG 5.08 - Product Helm Chart"},i=void 0,o={unversionedId:"release/trg-5/trg-5-08",id:"release/trg-5/trg-5-08",title:"TRG 5.08 - Product Helm Chart",description:"| Status | Created     | Post-History |",source:"@site/docs/release/trg-5/trg-5-08.md",sourceDirName:"release/trg-5",slug:"/release/trg-5/trg-5-08",permalink:"/eclipse-tractusx.github.io/docs/release/trg-5/trg-5-08",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-5/trg-5-08.md",tags:[],version:"current",frontMatter:{title:"TRG 5.08 - Product Helm Chart"},sidebar:"docs",previous:{title:"TRG 5.07 - Chart Dependencies",permalink:"/eclipse-tractusx.github.io/docs/release/trg-5/trg-5-07"},next:{title:"TRG 5.09 - Helm test",permalink:"/eclipse-tractusx.github.io/docs/release/trg-5/trg-5-09"}},s={},c=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"Product Helm Chart rules",id:"product-helm-chart-rules",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Created"),(0,n.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Active"),(0,n.kt)("td",{parentName:"tr",align:null},"07-Mar-2023"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Draft"),(0,n.kt)("td",{parentName:"tr",align:null},"10-Jan-2023"),(0,n.kt)("td",{parentName:"tr",align:null},"n/a")))),(0,n.kt)("h2",{id:"why"},"Why"),(0,n.kt)("p",null,"Having a single source for Helm chart makes it easier to test and deploy the product and reduces the complexity of installing backend/frontend/utility applications separately."),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,'A "Product Helm Chart" is a released helm chart that contains all the components of a product ',(0,n.kt)("strong",{parentName:"p"},"ready to deploy"),". This can either be achieved by ",(0,n.kt)("strong",{parentName:"p"},"creating a single Helm chart")," for the product or by ",(0,n.kt)("strong",{parentName:"p"},"combining the Helm charts")," of the different components into a single chart using dependencies."),(0,n.kt)("h2",{id:"product-helm-chart-rules"},"Product Helm Chart rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"name of the Chart ",(0,n.kt)("strong",{parentName:"li"},"should")," be just the ",(0,n.kt)("inlineCode",{parentName:"li"},"product-name")," without prefix or suffix (similar to the ",(0,n.kt)("a",{parentName:"li",href:"../trg-2/trg-2-4"},"leading product repository"),")"),(0,n.kt)("li",{parentName:"ul"},"values file ",(0,n.kt)("strong",{parentName:"li"},"should")," contain all available variables (even from subcharts) with default values and comments about what they do"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://helm.sh/docs/helm/helm_install/#helm-install"},"helm install")," command should successfully install the chart to any supported Kubernetes version cluster (without overwriting default values)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://helm.sh/docs/helm/helm_test/"},"helm test")," runs without errors (see ",(0,n.kt)("a",{parentName:"li",href:"/eclipse-tractusx.github.io/docs/release/trg-5/trg-5-09"},"TRG 5.09 - Helm test"),")"),(0,n.kt)("li",{parentName:"ul"},"create a single helm chart for the whole product or combine charts into a single one using ",(0,n.kt)("a",{parentName:"li",href:"https://helm.sh/docs/helm/helm_dependency/#helm-dependency"},"dependencies")," feature")))}p.isMDXComponent=!0}}]);