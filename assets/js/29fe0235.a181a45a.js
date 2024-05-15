"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[91170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>x});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(r),y=n,x=s["".concat(l,".").concat(y)]||s[y]||u[y]||o;return r?a.createElement(x,i(i({ref:t},d),{},{components:r})):a.createElement(x,i({ref:t},d))}));function x(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},39613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i="DataPlane Proxy Provider API",p={unversionedId:"kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api/README",id:"version-23.12/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api/README",title:"DataPlane Proxy Provider API",description:"This extension provide additional dataplane extension for proxying requests to backends.",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api/README.md",sourceDirName:"kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api",slug:"/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api/",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-api/",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"DataPlane Proxy Consumer API",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-consumer-api/"},next:{title:"DataPlane Proxy Provider Core",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-core/"}},l={},c=[{value:"Configuration",id:"configuration",level:2}],d={toc:c};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dataplane-proxy-provider-api"},"DataPlane Proxy Provider API"),(0,n.kt)("p",null,"This extension provide additional dataplane extension for proxying requests to backends.\nThe configuration of the proxy can be found ",(0,n.kt)("a",{parentName:"p",href:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-extensions/dataplane-proxy/edc-dataplane-proxy-provider-core/"},"here")),(0,n.kt)("p",null,"The provider proxy is mounted into the EDC default context, and it's available in the path ",(0,n.kt)("inlineCode",{parentName:"p"},"<defaultContext>/gateway")),(0,n.kt)("p",null,"The proxy will look for subPath in the request and match the subpath with the configured ones and forward\nthe rest of the path and query parameters."),(0,n.kt)("p",null,"For example:"),(0,n.kt)("p",null,"with this URL ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:8181/api/gateway/aas/test")," it will look for the ",(0,n.kt)("inlineCode",{parentName:"p"},"aas")," alias in the configuration,\nand it will compose the final url to call based on that configuration appending to it the remaining part of the path and query\nparameters."),(0,n.kt)("p",null,"When the proxy receive a request, it must contain the EDR, which will be decoded with the ",(0,n.kt)("inlineCode",{parentName:"p"},"token")," validation endpoint."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"tx.dpf.provider.proxy.thread.pool"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"10")))))}s.isMDXComponent=!0}}]);