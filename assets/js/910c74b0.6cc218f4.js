"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[51839],{3905:(M,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>s});var N=t(67294);function i(M,e,t){return e in M?Object.defineProperty(M,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):M[e]=t,M}function I(M,e){var t=Object.keys(M);if(Object.getOwnPropertySymbols){var N=Object.getOwnPropertySymbols(M);e&&(N=N.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),t.push.apply(t,N)}return t}function D(M){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?I(Object(t),!0).forEach((function(e){i(M,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(t,e))}))}return M}function a(M,e){if(null==M)return{};var t,N,i=function(M,e){if(null==M)return{};var t,N,i={},I=Object.keys(M);for(N=0;N<I.length;N++)t=I[N],e.indexOf(t)>=0||(i[t]=M[t]);return i}(M,e);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(M);for(N=0;N<I.length;N++)t=I[N],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(M,t)&&(i[t]=M[t])}return i}var g=N.createContext({}),j=function(M){var e=N.useContext(g),t=e;return M&&(t="function"==typeof M?M(e):D(D({},e),M)),t},l=function(M){var e=j(M.components);return N.createElement(g.Provider,{value:e},M.children)},u="mdxType",n={inlineCode:"code",wrapper:function(M){var e=M.children;return N.createElement(N.Fragment,{},e)}},z=N.forwardRef((function(M,e){var t=M.components,i=M.mdxType,I=M.originalType,g=M.parentName,l=a(M,["components","mdxType","originalType","parentName"]),u=j(t),z=i,s=u["".concat(g,".").concat(z)]||u[z]||n[z]||I;return t?N.createElement(s,D(D({ref:e},l),{},{components:t})):N.createElement(s,D({ref:e},l))}));function s(M,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof M||i){var I=t.length,D=new Array(I);D[0]=z;var a={};for(var g in e)hasOwnProperty.call(e,g)&&(a[g]=e[g]);a.originalType=M,a[u]="string"==typeof M?M:i,D[1]=a;for(var j=2;j<I;j++)D[j]=t[j];return N.createElement.apply(null,D)}return N.createElement.apply(null,t)}z.displayName="MDXCreateElement"},27267:(M,e,t)=>{t.r(e),t.d(e,{assets:()=>g,contentTitle:()=>D,default:()=>u,frontMatter:()=>I,metadata:()=>a,toc:()=>j});var N=t(87462),i=(t(67294),t(3905));const I={id:"Operation View",title:"Operation View",description:"Data Chain Kit",sidebar_position:2},D=void 0,a={unversionedId:"kits/Data Chain Kit/Operation View",id:"kits/Data Chain Kit/Operation View",title:"Operation View",description:"Data Chain Kit",source:"@site/docs-kits/kits/Data Chain Kit/page_software-operation-view.md",sourceDirName:"kits/Data Chain Kit",slug:"/kits/Data Chain Kit/Operation View",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Data Chain Kit/Operation View",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Operation View",title:"Operation View",description:"Data Chain Kit",sidebar_position:2},sidebar:"kits",previous:{title:"Adoption View",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Data Chain Kit/Adoption View Data Chain Kit"},next:{title:"Specification",permalink:"/eclipse-tractusx.github.io/docs-kits/next/kits/Data Chain Kit/Software Development View/Specification"}},g={},j=[{value:"Data Chain KIT",id:"data-chain-kit",level:3},{value:"Local deployment of IRS with minimum dependencies setup",id:"local-deployment-of-irs-with-minimum-dependencies-setup",level:2},{value:"Step 1: Prerequisites",id:"step-1-prerequisites",level:3},{value:"Step 2: Update and build the irs-helm chart",id:"step-2-update-and-build-the-irs-helm-chart",level:3},{value:"Step 3: Installing the IRS",id:"step-3-installing-the-irs",level:3},{value:"1. Start the cluster",id:"1-start-the-cluster",level:4},{value:"1.1 Get the Status of the deployment",id:"11-get-the-status-of-the-deployment",level:5},{value:"2. Forward Ports",id:"2-forward-ports",level:4},{value:"Testing the Item Relationship Service",id:"testing-the-item-relationship-service",level:2},{value:"Valid Global Asset Ids for testing",id:"valid-global-asset-ids-for-testing",level:3},{value:"Valid test requests for testing",id:"valid-test-requests-for-testing",level:3}],l={toc:j};function u(M){let{components:e,...I}=M;return(0,i.kt)("wrapper",(0,N.Z)({},l,I,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Datachain kit banner",src:t(7598).Z,width:"286",height:"245"})),(0,i.kt)("h3",{id:"data-chain-kit"},"Data Chain KIT"),(0,i.kt)("h2",{id:"local-deployment-of-irs-with-minimum-dependencies-setup"},"Local deployment of IRS with minimum dependencies setup"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Please note that this demo is currently based on IRS version 4.5.0"))),(0,i.kt)("h3",{id:"step-1-prerequisites"},"Step 1: Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," is installed and the Docker deamon is running with at least 8GB of memory"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," is installed"),(0,i.kt)("li",{parentName:"ol"},"Any Kubernetes cluster is installed and running, eg. ",(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," is installed")),(0,i.kt)("h3",{id:"step-2-update-and-build-the-irs-helm-chart"},"Step 2: Update and build the irs-helm chart"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},">$ helm dependency build\n")),(0,i.kt)("p",null,"You should see console output with messages like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Hang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "irs" chart repository\n...Successfully got an update from the "tractusx-dev" chart repository\n...Successfully got an update from the "prometheus-community" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\nSaving 1 charts\nDownloading irs-helm from repo https://eclipse-tractusx.github.io/item-relationship-service\nDeleting outdated charts\n')),(0,i.kt)("p",null,"Please note that irs repository has to be added to helm repo list"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},">$ helm repo add irs https://eclipse-tractusx.github.io/item-relationship-service\n>$ helm repo list\nNAME                    URL\nirs                     https://eclipse-tractusx.github.io/item-relationship-service\n")),(0,i.kt)("h3",{id:"step-3-installing-the-irs"},"Step 3: Installing the IRS"),(0,i.kt)("h4",{id:"1-start-the-cluster"},"1. Start the cluster"),(0,i.kt)("p",null,"To deploy IRS on kubernetes with helm run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},">$ helm install irs-local .\n")),(0,i.kt)("h5",{id:"11-get-the-status-of-the-deployment"},"1.1 Get the Status of the deployment"),(0,i.kt)("p",null,"Helm can give you feedback on the release status:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},">$ helm list\nNAME            NAMESPACE       REVISION        UPDATED                                 STATUS          CHART                   APP VERSION\nirs-local       default         1               2024-02-26 11:36:46.399546 +0100 CET    deployed        irs-helm-local-6.14.0   4.5.0\n")),(0,i.kt)("p",null,"Kubectl can give you feedback on how the status of the deployment currently is, there should be two pods deployed - IRS and Minio:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},">$ kubectl get pods\nNAME                                 READY   STATUS    RESTARTS      AGE\nirs-local-minio-7cc78d8985-qggrx     1/1     Running   0             10m\nirs-local-irs-helm-c84f98ffb-zg59z   1/1     Running   0             10m\n\n")),(0,i.kt)("h4",{id:"2-forward-ports"},"2. Forward Ports"),(0,i.kt)("p",null,"When the deployment has been finished please use the command to forward the port:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},">$  kubectl port-forward svc/irs-local-irs-helm 8080:8080\n")),(0,i.kt)("p",null,"After that you can access the Swagger UI page:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IRS Swagger:")," ",(0,i.kt)("a",{parentName:"li",href:"http://localhost:8080/api/swagger-ui/index.html"},"http://localhost:8080/api/swagger-ui/index.html"))),(0,i.kt)("h2",{id:"testing-the-item-relationship-service"},"Testing the Item Relationship Service"),(0,i.kt)("p",null,"You can use any approach to access exposed by IRS API endpoints, for example mentioned above Swagger UI page. There is also prepared Insomnia collection with example calls to IRS, see ",(0,i.kt)("a",{parentName:"p",href:"../../testing/IRS_Request_Collection.json"},"IRS_Request_Collection.json")),(0,i.kt)("h3",{id:"valid-global-asset-ids-for-testing"},"Valid Global Asset Ids for testing"),(0,i.kt)("p",null,"IRS is loading with mocked data from Testdata file, see ",(0,i.kt)("a",{parentName:"p",href:"../../../irs-models/src/main/resources/test_data/CX_Testdata.json"},"CX_Testdata.json")),(0,i.kt)("h3",{id:"valid-test-requests-for-testing"},"Valid test requests for testing"),(0,i.kt)("p",null,"You can use these snippets for testing purposes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bomLifecycle": "asBuilt",\n  "lookupBPNs": true,\n  "direction": "downward",\n  "depth": 10,\n  "auditContractNegotiation": false,\n  "key": {\n    "globalAssetId": "urn:uuid:951f1ebf-ebcf-427c-8a4d-7fe1f67c8d58",\n    "bpn": "BPNL00000003B0Q0"\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "aspects": [\n    "SerialPart"\n  ],\n  "depth": 1,\n  "key": {\n    "globalAssetId": "urn:uuid:951f1ebf-ebcf-427c-8a4d-7fe1f67c8d58",\n    "bpn": "BPNL00000003B0Q0"\n  }\n}\n')))}u.isMDXComponent=!0},7598:(M,e,t)=>{t.d(e,{Z:()=>N});const N="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg2IiBoZWlnaHQ9IjI0NSIgdmlld0JveD0iMCAwIDI4NiAyNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzMzKSI+CjxwYXRoIGQ9Ik0xMjMuNDE3IDkxLjYxNDFDMTM0LjA3NSA4NS40NjE2IDE1MS4zNTQgODUuNDYxNiAxNjIuMDExIDkxLjYxNDFMMjU0LjcxNCAxNDUuMTMxQzI2NS4zNzEgMTUxLjI4NCAyNjUuMzcxIDE2MS4yNTkgMjU0LjcxNCAxNjcuNDEyTDE2Mi4wMTEgMjIwLjkyOUMxNTEuMzU0IDIyNy4wODIgMTM0LjA3NSAyMjcuMDgyIDEyMy40MTcgMjIwLjkyOUwzMC43MTQ3IDE2Ny40MTJDMjAuMDU3MiAxNjEuMjU5IDIwLjA1NzIgMTUxLjI4NCAzMC43MTQ2IDE0NS4xMzFMMTIzLjQxNyA5MS42MTQxWiIgZmlsbD0iIzJBQzVGNSIgZmlsbC1vcGFjaXR5PSIwLjkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTMuNzQ5IDE1Ny44ODhMMTYxLjA0NyAxMDQuMzdDMTUwLjkyMiA5OC41MjU0IDEzNC41MDcgOTguNTI1NCAxMjQuMzgyIDEwNC4zN0wzMS42Nzk2IDE1Ny44ODhDMjEuNTU1IDE2My43MzIgMjEuNTU1IDE3My4yMDkgMzEuNjc5NiAxNzkuMDU0TDEyNC4zODIgMjMyLjU3MUMxMzQuNTA3IDIzOC40MTYgMTUwLjkyMiAyMzguNDE2IDE2MS4wNDcgMjMyLjU3MUwyNTMuNzQ5IDE3OS4wNTRDMjYzLjg3NCAxNzMuMjA5IDI2My44NzQgMTYzLjczMiAyNTMuNzQ5IDE1Ny44ODhaTTE2Mi4wMTEgMTAzLjgxM0MxNTEuMzU0IDk3LjY2MDggMTM0LjA3NSA5Ny42NjA4IDEyMy40MTcgMTAzLjgxM0wzMC43MTQ3IDE1Ny4zMzFDMjAuMDU3MyAxNjMuNDgzIDIwLjA1NzMgMTczLjQ1OCAzMC43MTQ3IDE3OS42MTFMMTIzLjQxNyAyMzMuMTI4QzEzNC4wNzUgMjM5LjI4MSAxNTEuMzU0IDIzOS4yODEgMTYyLjAxMSAyMzMuMTI4TDI1NC43MTQgMTc5LjYxMUMyNjUuMzcyIDE3My40NTggMjY1LjM3MiAxNjMuNDgzIDI1NC43MTQgMTU3LjMzMUwxNjIuMDExIDEwMy44MTNaIiBmaWxsPSIjMkFDNUY1Ii8+CjxwYXRoIGQ9Ik0xMjQuMDM0IDY0LjQ3NDRDMTM0LjY5MSA1OC4zMjE4IDE1MS45NyA1OC4zMjE4IDE2Mi42MjggNjQuNDc0NEwyNTUuMzMxIDExNy45OTJDMjY1Ljk4OCAxMjQuMTQ0IDI2NS45ODggMTM0LjExOSAyNTUuMzMxIDE0MC4yNzJMMTYyLjYyOCAxOTMuNzg5QzE1MS45NyAxOTkuOTQyIDEzNC42OTEgMTk5Ljk0MiAxMjQuMDM0IDE5My43ODlMMzEuMzMxMiAxNDAuMjcyQzIwLjY3MzggMTM0LjExOSAyMC42NzM3IDEyNC4xNDQgMzEuMzMxMiAxMTcuOTkyTDEyNC4wMzQgNjQuNDc0NFoiIGZpbGw9IiMxRkE3RTEiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RkZGRkXzFfMzMpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTQuMzY2IDEzMC43NDhMMTYxLjY2MyA3Ny4yMzA3QzE1MS41MzggNzEuMzg1OCAxMzUuMTIzIDcxLjM4NTggMTI0Ljk5OSA3Ny4yMzA3TDMyLjI5NiAxMzAuNzQ4QzIyLjE3MTUgMTM2LjU5MyAyMi4xNzE1IDE0Ni4wNjkgMzIuMjk2MSAxNTEuOTE0TDEyNC45OTkgMjA1LjQzMkMxMzUuMTIzIDIxMS4yNzYgMTUxLjUzOCAyMTEuMjc2IDE2MS42NjMgMjA1LjQzMkwyNTQuMzY2IDE1MS45MTRDMjY0LjQ5IDE0Ni4wNjkgMjY0LjQ5IDEzNi41OTMgMjU0LjM2NiAxMzAuNzQ4Wk0xNjIuNjI4IDc2LjY3MzdDMTUxLjk3IDcwLjUyMTIgMTM0LjY5MSA3MC41MjEyIDEyNC4wMzQgNzYuNjczN0wzMS4zMzEyIDEzMC4xOTFDMjAuNjczNyAxMzYuMzQ0IDIwLjY3MzggMTQ2LjMxOSAzMS4zMzEyIDE1Mi40NzFMMTI0LjAzNCAyMDUuOTg5QzEzNC42OTEgMjEyLjE0MSAxNTEuOTcgMjEyLjE0MSAxNjIuNjI4IDIwNS45ODlMMjU1LjMzMSAxNTIuNDcxQzI2NS45ODggMTQ2LjMxOSAyNjUuOTg4IDEzNi4zNDQgMjU1LjMzMSAxMzAuMTkxTDE2Mi42MjggNzYuNjczN1oiIGZpbGw9IiMxRkE3RTEiLz4KPC9nPgo8cGF0aCBkPSJNMTI0LjAzNCAzOC41NjY3QzEzNC42OTEgMzIuNDE0MiAxNTEuOTcgMzIuNDE0MiAxNjIuNjI4IDM4LjU2NjdMMjU1LjMzMSA5Mi4wODRDMjY1Ljk4OCA5OC4yMzY1IDI2NS45ODggMTA4LjIxMiAyNTUuMzMxIDExNC4zNjRMMTYyLjYyOCAxNjcuODgyQzE1MS45NyAxNzQuMDM0IDEzNC42OTEgMTc0LjAzNCAxMjQuMDM0IDE2Ny44ODJMMzEuMzMxMiAxMTQuMzY0QzIwLjY3MzggMTA4LjIxMiAyMC42NzM3IDk4LjIzNjUgMzEuMzMxMiA5Mi4wODRMMTI0LjAzNCAzOC41NjY3WiIgZmlsbD0iIzFGOTBFMSIgZmlsbC1vcGFjaXR5PSIwLjkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNTQuMzY2IDEwNC44NEwxNjEuNjYzIDUxLjMyMjlDMTUxLjUzOSA0NS40NzggMTM1LjEyMyA0NS40NzggMTI0Ljk5OSA1MS4zMjI5TDMyLjI5NjEgMTA0Ljg0QzIyLjE3MTUgMTEwLjY4NSAyMi4xNzE1IDEyMC4xNjIgMzIuMjk2MSAxMjYuMDA2TDEyNC45OTkgMTc5LjUyNEMxMzUuMTIzIDE4NS4zNjkgMTUxLjUzOSAxODUuMzY5IDE2MS42NjMgMTc5LjUyNEwyNTQuMzY2IDEyNi4wMDZDMjY0LjQ5IDEyMC4xNjIgMjY0LjQ5IDExMC42ODUgMjU0LjM2NiAxMDQuODRaTTE2Mi42MjggNTAuNzY1OUMxNTEuOTcgNDQuNjEzMyAxMzQuNjkxIDQ0LjYxMzMgMTI0LjAzNCA1MC43NjU5TDMxLjMzMTIgMTA0LjI4M0MyMC42NzM4IDExMC40MzYgMjAuNjczOCAxMjAuNDExIDMxLjMzMTIgMTI2LjU2M0wxMjQuMDM0IDE4MC4wODFDMTM0LjY5MSAxODYuMjMzIDE1MS45NyAxODYuMjMzIDE2Mi42MjggMTgwLjA4MUwyNTUuMzMxIDEyNi41NjNDMjY1Ljk4OCAxMjAuNDExIDI2NS45ODggMTEwLjQzNiAyNTUuMzMxIDEwNC4yODNMMTYyLjYyOCA1MC43NjU5WiIgZmlsbD0iIzFGOTBFMSIvPgo8cGF0aCBkPSJNMTI0LjAzNCAxMS40MjYxQzEzNC42OTIgNS4yNzM1MiAxNTEuOTcxIDUuMjczNTEgMTYyLjYyOCAxMS40MjYxTDI1NS4zMzEgNjQuOTQzM0MyNjUuOTg4IDcxLjA5NTggMjY1Ljk4OCA4MS4wNzExIDI1NS4zMzEgODcuMjIzNkwxNjIuNjI4IDE0MC43NDFDMTUxLjk3MSAxNDYuODkzIDEzNC42OTIgMTQ2Ljg5MyAxMjQuMDM0IDE0MC43NDFMMzEuMzMxNCA4Ny4yMjM2QzIwLjY3NCA4MS4wNzExIDIwLjY3NCA3MS4wOTU5IDMxLjMzMTQgNjQuOTQzM0wxMjQuMDM0IDExLjQyNjFaIiBmaWxsPSIjMUY3NEUxIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjU0LjM2NiA3Ny42OTk3TDE2MS42NjMgMjQuMTgyNEMxNTEuNTM5IDE4LjMzNzUgMTM1LjEyMyAxOC4zMzc1IDEyNC45OTkgMjQuMTgyNEwzMi4yOTYzIDc3LjY5OTdDMjIuMTcxNyA4My41NDQ2IDIyLjE3MTcgOTMuMDIxMSAzMi4yOTYzIDk4Ljg2NkwxMjQuOTk5IDE1Mi4zODNDMTM1LjEyMyAxNTguMjI4IDE1MS41MzkgMTU4LjIyOCAxNjEuNjYzIDE1Mi4zODNMMjU0LjM2NiA5OC44NjZDMjY0LjQ5IDkzLjAyMTEgMjY0LjQ5IDgzLjU0NDYgMjU0LjM2NiA3Ny42OTk3Wk0xNjIuNjI4IDIzLjYyNTRDMTUxLjk3MSAxNy40NzI5IDEzNC42OTIgMTcuNDcyOSAxMjQuMDM0IDIzLjYyNTRMMzEuMzMxNCA3Ny4xNDI3QzIwLjY3NCA4My4yOTUyIDIwLjY3NCA5My4yNzA1IDMxLjMzMTQgOTkuNDIzTDEyNC4wMzQgMTUyLjk0QzEzNC42OTIgMTU5LjA5MyAxNTEuOTcxIDE1OS4wOTMgMTYyLjYyOCAxNTIuOTRMMjU1LjMzMSA5OS40MjNDMjY1Ljk4OCA5My4yNzA1IDI2NS45ODggODMuMjk1MiAyNTUuMzMxIDc3LjE0MjdMMTYyLjYyOCAyMy42MjU0WiIgZmlsbD0iIzFGNzRFMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0NC44MTEgNTkuOTg1OEwxNjEuMDgxIDY5LjM3ODNDMTYzLjMyNCA3MC42NzMzIDE2Ni45NzIgNzAuNjczMyAxNjkuMjE2IDY5LjM3ODNMMTg1LjQ4NSA1OS45ODU4QzE4Ny43MjggNTguNjkwOCAxODcuNzI4IDU2LjU4NDYgMTg1LjQ4NSA1NS4yODk2TDE2OS4yMTYgNDUuODk3MUMxNjYuOTcyIDQ0LjYwMjEgMTYzLjMyNCA0NC42MDIxIDE2MS4wODEgNDUuODk3MUwxNDQuODExIDU1LjI4OTZDMTQyLjU2OCA1Ni41ODQ2IDE0Mi41NjggNTguNjkwOCAxNDQuODExIDU5Ljk4NThaTTE2My43OTIgNDcuNDYyNUMxNjQuNTQgNDcuMDMxIDE2NS43NTYgNDcuMDMxIDE2Ni41MDQgNDcuNDYyNUwxODIuNzc0IDU2Ljg1NUMxODMuNTIxIDU3LjI4NjUgMTgzLjUyMSA1Ny45ODg4IDE4Mi43NzQgNTguNDIwNEwxNjYuNTA0IDY3LjgxMjlDMTY1Ljc1NiA2OC4yNDQ0IDE2NC41NCA2OC4yNDQ0IDE2My43OTIgNjcuODEyOUwxNDcuNTIzIDU4LjQyMDRDMTQ2Ljc3NSA1Ny45ODg4IDE0Ni43NzUgNTcuMjg2NSAxNDcuNTIzIDU2Ljg1NUwxNjMuNzkyIDQ3LjQ2MjVaTTEwMS4yNzcgODQuOTQ2NEwxMTcuNTQ3IDk0LjMzODlDMTE5Ljc5IDk1LjYzMzkgMTIzLjQzOSA5NS42MzM5IDEyNS42ODIgOTQuMzM4OUwxNDEuOTUxIDg0Ljk0NjRDMTQ0LjE5NSA4My42NTE0IDE0NC4xOTUgODEuNTQ1MSAxNDEuOTUxIDgwLjI1MDFMMTI1LjY4MiA3MC44NTc3QzEyMy40MzkgNjkuNTYyNyAxMTkuNzkgNjkuNTYyNyAxMTcuNTQ3IDcwLjg1NzdMMTAxLjI3NyA4MC4yNTAxQzk5LjAzNDEgODEuNTQ1MSA5OS4wMzQxIDgzLjY1MTQgMTAxLjI3NyA4NC45NDY0Wk0xMjAuMjU5IDcyLjQyMzFDMTIxLjAwNiA3MS45OTE1IDEyMi4yMjMgNzEuOTkxNSAxMjIuOTcgNzIuNDIzMUwxMzkuMjQgODEuODE1NkMxMzkuOTg3IDgyLjI0NzEgMTM5Ljk4NyA4Mi45NDk0IDEzOS4yNCA4My4zODFMMTIyLjk3IDkyLjc3MzRDMTIyLjIyMyA5My4yMDUgMTIxLjAwNiA5My4yMDUgMTIwLjI1OSA5Mi43NzM0TDEwMy45ODkgODMuMzgxQzEwMy4yNDEgODIuOTQ5NCAxMDMuMjQxIDgyLjI0NzEgMTAzLjk4OSA4MS44MTU2TDEyMC4yNTkgNzIuNDIzMVpNMTA3Ljg0MyA2NC4xMDg5TDEwNy44NCA2NC4xMDcxTDEzNi42NzUgNDcuNDYwN0MxMzkuNDAxIDQ1Ljg4NjkgMTQyLjc0NyA0NS4zNzUgMTQ2LjA5NCA0Ni4wMTkzQzE0OC40ODggNDYuNDc5OSAxNTAuMDYyIDQ3LjM2MTkgMTUwLjIzMyA0Ny40NjA3TDE0Ny41MjkgNDkuMDMwM0MxNDcuNTE4IDQ5LjAyNCAxNDYuMzgzIDQ4LjM5MDIgMTQ0Ljc3NyA0OC4xMDAyQzE0Mi44MzcgNDcuNzQ5IDE0MS4wNzQgNDguMDUxOSAxMzkuMzg3IDQ5LjAyNjFMMTM5LjAxOCA0OS4yMzg5TDEzOS4wMjEgNDkuMjQwN0wxMDYuOTU0IDY3Ljc1MjlDMTA1LjI2NyA2OC43MjcxIDEwNC43NDIgNjkuNzQ1IDEwNS4zNSA3MC44NjQ5QzEwNS44NTMgNzEuNzkxNSAxMDYuOTUxIDcyLjQ0NzEgMTA2Ljk1NCA3Mi40NDkxTDEwNC4yNDMgNzQuMDE0NkMxMDQuMDcyIDczLjkxNTcgMTAyLjU0NCA3My4wMDcyIDEwMS43NDYgNzEuNjI0OUMxMDAuNjMgNjkuNjkyNiAxMDEuNTE3IDY3Ljc2MTMgMTA0LjI0MyA2Ni4xODc1TDEwNy44NDMgNjQuMTA4OVpNMTc5LjAyNSA3Ni4wNjc1TDE3OS4wMjMgNzYuMDY2NUwxODIuNjI0IDczLjk4ODFDMTg1LjM1IDcyLjQxNDMgMTg2LjIzNiA3MC40ODMxIDE4NS4xMiA2OC41NTA4QzE4NC4zMjMgNjcuMTY4NSAxODIuNzk1IDY2LjI1OTkgMTgyLjYyNCA2Ni4xNjExTDE3OS45MTIgNjcuNzI2NUMxNzkuOTE2IDY3LjcyODYgMTgxLjAxNCA2OC4zODQxIDE4MS41MTYgNjkuMzEwOEMxODIuMTI0IDcwLjQzMDcgMTgxLjU5OSA3MS40NDg2IDE3OS45MTIgNzIuNDIyN0wxNDcuODQ2IDkwLjkzNDdMMTQ3Ljg0NyA5MC45MzU4TDE0Ny40OCA5MS4xNDgxQzE0NS43OTIgOTIuMTIyMiAxNDQuMDI5IDkyLjQyNTIgMTQyLjA4OSA5Mi4wNzRDMTQwLjQ4NCA5MS43ODQgMTM5LjM0OCA5MS4xNTAxIDEzOS4zMzggOTEuMTQzOEwxMzYuNjMzIDkyLjcxMzVDMTM2LjgwNCA5Mi44MTIzIDEzOC4zNzggOTMuNjk0MyAxNDAuNzczIDk0LjE1NDhDMTQ0LjEyIDk0Ljc5OTIgMTQ3LjQ2NSA5NC4yODczIDE1MC4xOTEgOTIuNzEzNUwxNzkuMDI1IDc2LjA2NzVaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RkZGRkXzFfMzMiIHg9Ii00MS42NjE5IiB5PSI1OC4wNTkzIiB3aWR0aD0iMzkxLjk4NiIgaGVpZ2h0PSI0MTguNTQ0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3dfMV8zMyIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR4PSIxIiBkeT0iMTIiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMTMiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfMV8zMyIgcmVzdWx0PSJlZmZlY3QyX2Ryb3BTaGFkb3dfMV8zMyIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR4PSIzIiBkeT0iNDciLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMjQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDkgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iZWZmZWN0Ml9kcm9wU2hhZG93XzFfMzMiIHJlc3VsdD0iZWZmZWN0M19kcm9wU2hhZG93XzFfMzMiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iNiIgZHk9IjEwNyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzMiIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3QzX2Ryb3BTaGFkb3dfMV8zMyIgcmVzdWx0PSJlZmZlY3Q0X2Ryb3BTaGFkb3dfMV8zMyIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0IGR4PSIxMSIgZHk9IjE5MCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzOCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3Q0X2Ryb3BTaGFkb3dfMV8zMyIgcmVzdWx0PSJlZmZlY3Q1X2Ryb3BTaGFkb3dfMV8zMyIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDVfZHJvcFNoYWRvd18xXzMzIiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzFfMzMiPgo8cmVjdCB3aWR0aD0iMjg0LjM0MiIgaGVpZ2h0PSIyNDMuOTgzIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC44NTE2ODUgMC4yODYxMzMpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);