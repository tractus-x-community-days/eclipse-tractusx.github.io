"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[68613],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=d(n),s=r,k=c["".concat(o,".").concat(s)]||c[s]||m[s]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[c]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},52671:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={},i="EDC Control-Plane backed by In-Memory Stores",p={unversionedId:"kits/tractusx-edc/edc-controlplane/edc-runtime-memory/README",id:"version-23.12/kits/tractusx-edc/edc-controlplane/edc-runtime-memory/README",title:"EDC Control-Plane backed by In-Memory Stores",description:"Security",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/edc-controlplane/edc-runtime-memory/README.md",sourceDirName:"kits/tractusx-edc/edc-controlplane/edc-runtime-memory",slug:"/kits/tractusx-edc/edc-controlplane/edc-runtime-memory/",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-controlplane/edc-runtime-memory/",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"Notice for Docker image",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-controlplane/edc-controlplane-postgresql-hashicorp-vault-legacy/notice"},next:{title:"Notice for Docker image",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/edc-controlplane/edc-runtime-memory/notice"}},o={},d=[{value:"Security",id:"security",level:2},{value:"In-memory Vault implementation",id:"in-memory-vault-implementation",level:3},{value:"Building",id:"building",level:2},{value:"Configuration (configuration.properties)",id:"configuration-configurationproperties",level:2},{value:"Example configuration.properties",id:"example-configurationproperties",level:3},{value:"Example logging.properties",id:"example-loggingproperties",level:3},{value:"Running",id:"running",level:2}],u={toc:d};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"edc-control-plane-backed-by-in-memory-stores"},"EDC Control-Plane backed by In-Memory Stores"),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("h3",{id:"in-memory-vault-implementation"},"In-memory Vault implementation"),(0,r.kt)("p",null,"The goal of this extension is to provide an ephemeral, memory-based vault implementation that can be used in testing or\ndemo scenarios."),(0,r.kt)("p",null,"Please not that this vault does not encrypt the secrets, they are held in memory in plain text at runtime! In addition,\nits ephemeral nature makes it unsuitable for replicated/multi-instance scenarios, i.e. Kubernetes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is not a secure secret store, please do NOT use it in production workloads!")),(0,r.kt)("h2",{id:"building"},"Building"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew :edc-controlplane:edc-runtime-memory:dockerize\n")),(0,r.kt)("h2",{id:"configuration-configurationproperties"},"Configuration (configuration.properties)"),(0,r.kt)("p",null,"Listed below are configuration keys needed to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"edc-runtime-memory")," up and running.\nDetails regarding each configuration property can be found at\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector/tree/main/docs"},"documentary section of the EDC"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.api.auth.key"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"default value: random UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.default.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"8080"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.default.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"/api"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.data.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"8181"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.data.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"/data"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.validation.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"8182"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.validation.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"/validation"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.control.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"9999"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.control.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/controlplane/control"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.ids.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"8282"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.ids.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/ids"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.receiver.http.endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://backend-service"},"http://backend-service")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.title"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Eclipse Dataspace Connector"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.description"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Eclipse Dataspace Connector"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"urn:connector:edc"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.security.profile"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"base"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.endpoint"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost:8282/api/v1/ids"},"http://localhost:8282/api/v1/ids")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.maintainer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost"},"http://localhost")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.curator"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost"},"http://localhost")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.catalog.id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"urn:catalog:default"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ids.webhook.address"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost:8282/api/v1/ids"},"http://localhost:8282/api/v1/ids")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.hostname"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"localhost"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.oauth.token.url"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://daps.example.net"},"https://daps.example.net")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.oauth.public.key.alias"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"key-to-daps-certificate-in-keyvault"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.oauth.private.key.alias"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"key-to-private-key-in-keyvault"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.oauth.client.id"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"daps-oauth-client-id"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.transfer.proxy.endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.transfer.proxy.token.signer.privatekey.alias"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"example-configurationproperties"},"Example configuration.properties"),(0,r.kt)("p",null,"JDK properties-style configuration of the EDC Control-Plane is expected to be mounted to ",(0,r.kt)("inlineCode",{parentName:"p"},"/app/configuration.properties"),"\nwithin the container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create configuration.properties\nexport CONFIGURATION_PROPERTIES_FILE=$(mktemp /tmp/configuration.properties.XXXXXX)\ncat << 'EOF' > ${CONFIGURATION_PROPERTIES_FILE}\n\nweb.http.default.port=8080\nweb.http.default.path=/api\nweb.http.data.port=8181\nweb.http.data.path=/data\nweb.http.validation.port=8182\nweb.http.validation.path=/validation\nweb.http.control.port=9999\nweb.http.control.path=/api/controlplane/control\nweb.http.ids.port=8282\nweb.http.ids.path=/api/v1/ids\n\nedc.receiver.http.endpoint=http://backend-service\n\nedc.ids.title=Eclipse Dataspace Connector\nedc.ids.description=Eclipse Dataspace Connector\nedc.ids.id=urn:connector:edc\nedc.ids.security.profile=base\nedc.ids.endpoint=http://localhost:8282/api/v1/ids\nedc.ids.maintainer=http://localhost\nedc.ids.curator=http://localhost\nedc.ids.catalog.id=urn:catalog:default\nids.webhook.address=http://localhost:8282/api/v1/ids\n\nedc.hostname=localhost\n\nedc.api.auth.key=password\n\n# OAuth / DAPS related configuration\nedc.oauth.token.url=https://daps.example.net\nedc.oauth.public.key.alias=key-to-daps-certificate-in-keyvault\nedc.oauth.private.key.alias=key-to-private-key-in-keyvault\nedc.oauth.client.id=daps-oauth-client-id\n\n# Control- / Data- Plane configuration\nedc.transfer.proxy.endpoint=http://dataplane-public-endpoint/public\nedc.transfer.proxy.token.signer.privatekey.alias=azure-vault-token-signer-private-key\nEOF\n")),(0,r.kt)("h3",{id:"example-loggingproperties"},"Example logging.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create logging.properties\nexport LOGGING_PROPERTIES_FILE=$(mktemp /tmp/logging.properties.XXXXXX)\ncat << 'EOF' > ${LOGGING_PROPERTIES_FILE}\n.level=INFO\norg.eclipse.edc.level=ALL\nhandlers=java.util.logging.ConsoleHandler\njava.util.logging.ConsoleHandler.formatter=java.util.logging.SimpleFormatter\njava.util.logging.ConsoleHandler.level=ALL\njava.util.logging.SimpleFormatter.format=[%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS] [%4$-7s] %5$s%6$s%n\nEOF\n")),(0,r.kt)("h2",{id:"running"},"Running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'docker run \\\n    -e SECRETS="key1:secret1,key2:secret2" \\\n    -p 8080:8080 -p 8181:8181 -p 8182:8182 -p 8282:8282 -p 9090:9090 -p 9999:9999 \\\n    -v ${CONFIGURATION_PROPERTIES_FILE:-/dev/null}:/app/configuration.properties \\\n    -v ${LOGGING_PROPERTIES_FILE:-/dev/null}:/app/logging.properties \\\n    -i edc-runtime-memory:latest\n')))}c.isMDXComponent=!0}}]);