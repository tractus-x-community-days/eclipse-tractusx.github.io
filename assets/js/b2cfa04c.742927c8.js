"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[19165],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?i.createElement(h,o(o({ref:t},p),{},{components:r})):i.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40651:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const a={title:"TRG 4.06 - Notice for docker images"},o=void 0,l={unversionedId:"release/trg-4/trg-4-06",id:"release/trg-4/trg-4-06",title:"TRG 4.06 - Notice for docker images",description:"| Status | Created     | Post-History     |",source:"@site/docs/release/trg-4/trg-4-06.md",sourceDirName:"release/trg-4",slug:"/release/trg-4/trg-4-06",permalink:"/eclipse-tractusx.github.io/docs/release/trg-4/trg-4-06",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-4/trg-4-06.md",tags:[],version:"current",frontMatter:{title:"TRG 4.06 - Notice for docker images"},sidebar:"docs",previous:{title:"TRG 4.05 - Container registries",permalink:"/eclipse-tractusx.github.io/docs/release/trg-4/trg-4-05"},next:{title:"TRG 5.01 - Helm Chart requirements",permalink:"/eclipse-tractusx.github.io/docs/release/trg-5/trg-5-01"}},s={},c=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"Best practice and examples",id:"best-practice-and-examples",level:2},{value:"GitHub workflow step",id:"github-workflow-step",level:3},{value:"Examples",id:"examples",level:3},{value:"Already collected base image information",id:"already-collected-base-image-information",level:2},{value:"Eclipse Temurin (JRE)",id:"eclipse-temurin-jre",level:3},{value:"Nginx-unprivileged (serve static HTML and JS bundles)",id:"nginx-unprivileged-serve-static-html-and-js-bundles",level:3},{value:".NET runtime",id:"net-runtime",level:3},{value:"ASP.NET core runtime",id:"aspnet-core-runtime",level:3},{value:"Linux",id:"linux",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Created"),(0,n.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Draft"),(0,n.kt)("td",{parentName:"tr",align:null},"04-May-2023"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial release")))),(0,n.kt)("h2",{id:"why"},"Why"),(0,n.kt)("p",null,"Due to legal constrains we need to annotate the released container images to make it clear that we do our best to provide good images for demo purposes,\nbut we do not provide any legal guarantee.\nThis has to be defined in a dedicated 'Notice for docker image' section in our repositories and on the respective image page on ",(0,n.kt)("inlineCode",{parentName:"p"},"DockerHub"),"."),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"There are a few properties and links, that ",(0,n.kt)("strong",{parentName:"p"},"must")," be present on each notice, but they do vary for each image and product.\nThe minimum set of information is:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Link to the source of your base image (Container registry and GitHub if available)"),(0,n.kt)("li",{parentName:"ul"},"Link to your product image on ",(0,n.kt)("inlineCode",{parentName:"li"},"DockerHub")),(0,n.kt)("li",{parentName:"ul"},"Link to your repository on GitHub"),(0,n.kt)("li",{parentName:"ul"},"Direct link to the Dockerfile used to build your image"),(0,n.kt)("li",{parentName:"ul"},"Link to ",(0,n.kt)("inlineCode",{parentName:"li"},"LICENCE")," file in your repo as 'Project License' (make clear, that this is the PROJECT licence, not an image license)")),(0,n.kt)("p",null,"The above information ",(0,n.kt)("strong",{parentName:"p"},"must")," be provided as dedicated Markdown file in your repository.\nIt ",(0,n.kt)("strong",{parentName:"p"},"should")," be located next to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", that is used to build the image you are annotating.\nProvide a dedicated notice file for every image, that is published.\nIt ",(0,n.kt)("strong",{parentName:"p"},"must")," be linked in your top-level ",(0,n.kt)("inlineCode",{parentName:"p"},"README.md"),". Link all notice files, in case you publish multiple images."),(0,n.kt)("p",null,"The notice ",(0,n.kt)("strong",{parentName:"p"},"must")," follow a specific structure, starting with a specific headline, a reference to your image on ",(0,n.kt)("inlineCode",{parentName:"p"},"DockerHub")," and information about your product.\nYou can use the following example as a starting point. Remember to update the placeholders indicated by ",(0,n.kt)("inlineCode",{parentName:"p"},"<>")," brackets."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown"},"## Notice for Docker image\n\nDockerHub: [https://hub.docker.com/r/tractusx/<your-image>](https://hub.docker.com/r/tractusx/<your-image>)\n\nEclipse Tractus-X product(s) installed within the image:\n\n__<your product name>__\n\n- GitHub: https://github.com/eclipse-tractusx/<your-product-repo>\n- Project home: https://projects.eclipse.org/projects/automotive.tractusx\n- Dockerfile: https://github.com/eclipse-tractusx/<your-product-repo>/blob/main/<path-to-Dockerfile>\n- Project license: [Apache License, Version 2.0](https://github.com/eclipse-tractusx/<your-product-repo>/blob/main/LICENSE)\n")),(0,n.kt)("p",null,"The last bits of information you ",(0,n.kt)("strong",{parentName:"p"},"must")," provide is related to your used base image.\nAs previously described, the following information should be provided, if available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DockerHub links"),(0,n.kt)("li",{parentName:"ul"},"GitHub repo"),(0,n.kt)("li",{parentName:"ul"},"direct links to Dockerfile")),(0,n.kt)("p",null,"The following example is taken from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/item-relationship-service#notice-for-docker-image"},"IRS product"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown"},"**Used base image**\n\n- [eclipse-temurin:20-jre-alpine](https://github.com/adoptium/containers)\n- Official Eclipse Temurin DockerHub page: https://hub.docker.com/_/eclipse-temurin\n- Eclipse Temurin Project: https://projects.eclipse.org/projects/adoptium.temurin\n- Additional information about the Eclipse Temurin images: https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin\n")),(0,n.kt)("p",null,"Closing the notice, we provide a general statement about potentially contained other tools and the demo/experimental purpose\nof our images. We use the following text:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown"},"As with all Docker images, these likely also contain other software which may be under other licenses \n(such as Bash, etc. from the base distribution, along with any direct or indirect dependencies of the primary software being contained).\n\nAs for any pre-built image usage, it is the image user's responsibility to ensure that any use of this image complies with any relevant licenses for all software contained within.\n")),(0,n.kt)("h2",{id:"best-practice-and-examples"},"Best practice and examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Use "Container images" as headline to link to the container image notice files from the repositories README.md file'),(0,n.kt)("li",{parentName:"ul"},'Name the notice file "notice.md"'),(0,n.kt)("li",{parentName:"ul"},"Provide important information about your image with your notice. Examples:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Available volumes"),(0,n.kt)("li",{parentName:"ul"},"Default port the service is listening on")))),(0,n.kt)("h3",{id:"github-workflow-step"},"GitHub workflow step"),(0,n.kt)("p",null,"Keeping the DockerHub description up-to-date with the latest notice content is crucial.\nThe following workflow step can be used as part of the DockerHub publishing workflow to ensure that:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"# DockerHub publishing worklflow\n\n...\n\n# https://github.com/peter-evans/dockerhub-description\n- name: Update Docker Hub description\n  # Ensure the DockerHub description is updated with contents from a PR (usually images are not published on PR)\n  if: github.event_name != 'pull_request'\n  uses: peter-evans/dockerhub-description@v3\n  with:\n    username: ${{ secrets.DOCKER_HUB_USER }}\n    password: ${{ secrets.DOCKER_HUB_TOKEN }}\n    repository: ${{ env.IMAGE_NAMESPACE }}/${{ env.IMAGE_NAME }}\n    # IMPORTANT: Adjust this to the actual path of your container image notice\n    readme-filepath: <path/to/your/notice.md>\n")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The following examples are shown as reference, to see already existing and complete versions of a 'Notice for docker images'.\nThey ",(0,n.kt)("strong",{parentName:"p"},"can not")," be used for your product without modifications."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/edc-controlplane/edc-controlplane-memory-hashicorp-vault/notice.md"},"edc-controlplane-memory-hashicorp-vault")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/vas-country-risk/blob/main/DOCKER_NOTICE.md"},"Country Risk"))),(0,n.kt)("h2",{id:"already-collected-base-image-information"},"Already collected base image information"),(0,n.kt)("p",null,"The following sections contain information, that already has been collected on base images, that are used in Eclipse Tractus-X.\nYou can use that information for your own notice. ",(0,n.kt)("strong",{parentName:"p"},"Be careful"),", when it comes to version, like JRE versions for example.\nYou have to adapt some of the provided links to match your used version."),(0,n.kt)("h3",{id:"eclipse-temurin-jre"},"Eclipse Temurin (JRE)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Base image reference (example) ",(0,n.kt)("inlineCode",{parentName:"li"},"eclipse-temurin:20-jre-alpine")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/adoptium/containers"},"GitHub repo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/eclipse-temurin"},"Official Eclipse Temurin DockerHub page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://projects.eclipse.org/projects/adoptium.temurin"},"Eclipse Temurin Project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/docker-library/repo-info/tree/master/repos/eclipse-temurin"},"Additional information about the Eclipse Temurin images"))),(0,n.kt)("h3",{id:"nginx-unprivileged-serve-static-html-and-js-bundles"},"Nginx-unprivileged (serve static HTML and JS bundles)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Base image reference (example) ",(0,n.kt)("inlineCode",{parentName:"li"},"nginxinc/nginx-unprivileged:alpine")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nginxinc/docker-nginx-unprivileged/blob/main/Dockerfile-alpine.template"},"Dockerfile (alpine)")),(0,n.kt)("li",{parentName:"ul"},"GitHub project: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/nginxinc/docker-nginx-unprivileged"},"https://github.com/nginxinc/docker-nginx-unprivileged")),(0,n.kt)("li",{parentName:"ul"},"DockerHub: ",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/nginxinc/nginx-unprivileged"},"https://hub.docker.com/r/nginxinc/nginx-unprivileged"))),(0,n.kt)("h3",{id:"net-runtime"},".NET runtime"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Base image reference (example): ",(0,n.kt)("inlineCode",{parentName:"li"},"mcr.microsoft.com/dotnet/runtime:6.0-alpine")),(0,n.kt)("li",{parentName:"ul"},"Dockerfile (:6-alpine): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dotnet/dotnet-docker/blob/e1984aaea51a796b68f6672749d280525c30e063/src/runtime/6.0/alpine3.17/amd64/Dockerfile"},"mcr.microsoft.com/dotnet/runtime:6.0-alpine")),(0,n.kt)("li",{parentName:"ul"},"GitHub project: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dotnet/dotnet-docker"},"https://github.com/dotnet/dotnet-docker")),(0,n.kt)("li",{parentName:"ul"},"DockerHub: ",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/microsoft-dotnet-runtime"},"https://hub.docker.com/_/microsoft-dotnet-runtime"))),(0,n.kt)("h3",{id:"aspnet-core-runtime"},"ASP.NET core runtime"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Base image reference (example): ",(0,n.kt)("inlineCode",{parentName:"li"},"mcr.microsoft.com/dotnet/aspnet:6.0-alpine")),(0,n.kt)("li",{parentName:"ul"},"Dockerfile (:6-alpine): ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dotnet/dotnet-docker/blob/e1984aaea51a796b68f6672749d280525c30e063/src/aspnet/6.0/alpine3.17/amd64/Dockerfile"},"mcr.microsoft.com/dotnet/aspnet:6.0-alpine")),(0,n.kt)("li",{parentName:"ul"},"GitHub project: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dotnet/dotnet-docker"},"https://github.com/dotnet/dotnet-docker")),(0,n.kt)("li",{parentName:"ul"},"DockerHub: ",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/microsoft-dotnet-aspnet"},"https://hub.docker.com/_/microsoft-dotnet-aspnet"))),(0,n.kt)("h3",{id:"linux"},"Linux"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Base image reference (example): ",(0,n.kt)("inlineCode",{parentName:"li"},"alpine:3.17")),(0,n.kt)("li",{parentName:"ul"},"Dockerfile: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/alpinelinux/docker-alpine/blob/681b8c677aaed66e48a5ce721509647bd4dcd017/x86_64/Dockerfile"},"alpinelinux/docker-alpine:3.17")),(0,n.kt)("li",{parentName:"ul"},"GitHub project: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/alpinelinux/docker-alpine"},"https://github.com/alpinelinux/docker-alpine")),(0,n.kt)("li",{parentName:"ul"},"DockerHub: ",(0,n.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/alpine"},"https://hub.docker.com/_/alpine"))))}u.isMDXComponent=!0}}]);