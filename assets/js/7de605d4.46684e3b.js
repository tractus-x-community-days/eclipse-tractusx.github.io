"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[18449],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(i),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return i?n.createElement(h,l(l({ref:t},p),{},{components:i})):n.createElement(h,l({ref:t},p))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},76377:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const r={},l="Coding Principles and Style Guide",o={unversionedId:"kits/tractusx-edc/docs/development/coding-principles",id:"version-23.12/kits/tractusx-edc/docs/development/coding-principles",title:"Coding Principles and Style Guide",description:"Fail-fast and Explicit Configuration",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/development/coding-principles.md",sourceDirName:"kits/tractusx-edc/docs/development",slug:"/kits/tractusx-edc/docs/development/coding-principles",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/development/coding-principles",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"Project Structure",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/page03_project_structure"},next:{title:"Etiquette for pull requests",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/tractusx-edc/pr_etiquette"}},s={},d=[{value:"Fail-fast and Explicit Configuration",id:"fail-fast-and-explicit-configuration",level:2},{value:"Errors",id:"errors",level:2},{value:"Simplicity",id:"simplicity",level:2},{value:"General Coding Style",id:"general-coding-style",level:2},{value:"Testing",id:"testing",level:2},{value:"Data Objects",id:"data-objects",level:2},{value:"Secrets",id:"secrets",level:2},{value:"Extensions and Libraries",id:"extensions-and-libraries",level:2},{value:"Build",id:"build",level:2},{value:"Handling Null Return Values",id:"handling-null-return-values",level:2},{value:"Objects Serialization/Deserialization",id:"objects-serializationdeserialization",level:2},{value:"Class Naming",id:"class-naming",level:2},{value:"Observability",id:"observability",level:2},{value:"Streams",id:"streams",level:2}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"coding-principles-and-style-guide"},"Coding Principles and Style Guide"),(0,a.kt)("h2",{id:"fail-fast-and-explicit-configuration"},"Fail-fast and Explicit Configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configuration should be loaded and validated at extension initialization so that issues are reported immediately. Do\nnot lazy-load configuration unless it is required to do so."),(0,a.kt)("li",{parentName:"ol"},"Settings can be pulled from the extension context and placed into configuration objects, which are passed to services\nvia their constructor."),(0,a.kt)("li",{parentName:"ol"},"Service configuration requirements should always be explicit; as a general rule, do not pass a single configuration\nobject with many values to multiple services."),(0,a.kt)("li",{parentName:"ol"},"Annotate configuration keys with ",(0,a.kt)("inlineCode",{parentName:"li"},"@Setting")," so that they may be tracked.")),(0,a.kt)("h2",{id:"errors"},"Errors"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Do not throw checked exceptions; always use unchecked exceptions. If an unchecked exception type needs to be defined,\ninherit from ",(0,a.kt)("inlineCode",{parentName:"li"},"org.eclipse.edc.spi.EdcException"),"."),(0,a.kt)("li",{parentName:"ol"},"Do not throw exceptions to signal a validation error; report the error (preferably collated) and return an error\nresponse."),(0,a.kt)("li",{parentName:"ol"},"Throw an unchecked exception if something unexpected happens (e.g. a backing store connection is down after a number\nof retries). Note that validation errors are expected."),(0,a.kt)("li",{parentName:"ol"},"Only throw an exception when there is no remediation possible, i.e. the exception is fatal. Do not throw an exception\nif an operation can be retried."),(0,a.kt)("li",{parentName:"ol"},"Generally, services should return a ",(0,a.kt)("inlineCode",{parentName:"li"},"org.eclipse.edc.spi.result.Result")," (or a suitable subclass).")),(0,a.kt)("h2",{id:"simplicity"},"Simplicity"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Avoid layers of indirection when they are not needed (e.g. "pass-through methods").'),(0,a.kt)("li",{parentName:"ol"},"Avoid needlessly wrapping objects, especially primitive datatypes.")),(0,a.kt)("h2",{id:"general-coding-style"},"General Coding Style"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"var")," instead of explicit types (helps with clarity)"),(0,a.kt)("li",{parentName:"ol"},"Avoid ",(0,a.kt)("inlineCode",{parentName:"li"},"final")," in method args and local variables"),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"final")," in field declarations"),(0,a.kt)("li",{parentName:"ol"},"Avoid ",(0,a.kt)("inlineCode",{parentName:"li"},"static")," fields except in constants or when absolutely necessary (you should be able to provide a reason)."),(0,a.kt)("li",{parentName:"ol"},"Use interfaces to define shared constants"),(0,a.kt)("li",{parentName:"ol"},'Use "minimally required types" (or "smallest possible API"), e.g. use ',(0,a.kt)("inlineCode",{parentName:"li"},"ObjectMapper")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"TypeManager"),", or use\na ",(0,a.kt)("inlineCode",{parentName:"li"},"String")," instead of a more complex object containing the String, etc."),(0,a.kt)("li",{parentName:"ol"},"Use either ",(0,a.kt)("inlineCode",{parentName:"li"},"public")," members, which are documented and tested, or ",(0,a.kt)("inlineCode",{parentName:"li"},"private")," members."),(0,a.kt)("li",{parentName:"ol"},"Avoid package-private members, especially if only needed for testing"),(0,a.kt)("li",{parentName:"ol"},"Avoid ",(0,a.kt)("inlineCode",{parentName:"li"},"protected")," members unless they're intended to be overridden."),(0,a.kt)("li",{parentName:"ol"},"Use package-private classes if they're not needed outside the package, e.g. implementation classes"),(0,a.kt)("li",{parentName:"ol"},"Avoid using ",(0,a.kt)("inlineCode",{parentName:"li"},"enum"),"s for anything other than named integer enumerations."),(0,a.kt)("li",{parentName:"ol"},"Avoid using static classes as much as possible. Exceptions to this are helper functions and test utils, etc. as well\nas static inner classes."),(0,a.kt)("li",{parentName:"ol"},"Use only camel case and no prefixes for naming."),(0,a.kt)("li",{parentName:"ol"},"Avoid unnecessary ",(0,a.kt)("inlineCode",{parentName:"li"},"this.")," except when it is necessary e.g. when there is a name overlap"),(0,a.kt)("li",{parentName:"ol"},"Use static imports, as long as code readability and comprehension is not impacted. For example,",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"assertThat(...)")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"Assertions.assertThat(...)")),(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},'format("...",arg1)')," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"String.format(...)"),", but"),(0,a.kt)("li",{parentName:"ul"},"avoid ",(0,a.kt)("inlineCode",{parentName:"li"},"of(item1, item2).map(it -> it.someOperation)...")," instead of ",(0,a.kt)("inlineCode",{parentName:"li"},"Stream.of(item1, item2)"),".\nAlso, avoid static imports if two static methods with the same name would be imported from different classes"))),(0,a.kt)("li",{parentName:"ol"},"Avoid ",(0,a.kt)("inlineCode",{parentName:"li"},"Optional")," as method return type or method argument, except when designing a fluent API. Use ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," in\nsignatures."),(0,a.kt)("li",{parentName:"ol"},"Avoid cryptic variable names, especially in long methods. Instead, try to write them out, at least to a reasonable\nextent.")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"All handlers and services should have dedicated unit tests with mocks used for dependencies."),(0,a.kt)("li",{parentName:"ol"},"Prefer unit tests over all other test types: unit > integration/component > e2e"),(0,a.kt)("li",{parentName:"ol"},"When appropriate, prefer composing services via the constructor so that dependencies can be mocked as opposed to\ninstantiating dependencies directly."),(0,a.kt)("li",{parentName:"ol"},"Use classes with static test functions to provide common helper methods, e.g. to instantiate an object."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"[METHOD]_when[CONDITION]_should[EXPECTATION]")," as naming template for test methods,\ne.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"verifyInput_whenNull_shouldThrowNpe()")," as opposed to ",(0,a.kt)("inlineCode",{parentName:"li"},"testInputNull()"))),(0,a.kt)("h2",{id:"data-objects"},"Data Objects"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"Builder")," pattern when:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"there are any number of optional constructor args"),(0,a.kt)("li",{parentName:"ul"},"there are more than 3 constructor args"),(0,a.kt)("li",{parentName:"ul"},"inheriting from an object that fulfills any of the above. In this case use derived builders as well."))),(0,a.kt)("li",{parentName:"ol"},"Although serializability is not the reason we use the builder pattern, it is a strong indication that a builder\nshould be used."),(0,a.kt)("li",{parentName:"ol"},"Builders should be named just ",(0,a.kt)("inlineCode",{parentName:"li"},"Builder")," and be static nested classes."),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"public static Builder newInstance(){...}")," method to instantiate the builder"),(0,a.kt)("li",{parentName:"ol"},"Builders have non-public constructors"),(0,a.kt)("li",{parentName:"ol"},"Use single-field builders: a ",(0,a.kt)("inlineCode",{parentName:"li"},"Builder")," instantiates the object it builds in its constructor, and sets the properties\nin its builder methods. The ",(0,a.kt)("inlineCode",{parentName:"li"},"build()")," method then only performs verification (optional) and returns the instance."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"private")," constructors for the objects that the builder builds."),(0,a.kt)("li",{parentName:"ol"},"If there is a builder for an object, use it to deserialize an object, i.e. put Jackson annotations such\nas ",(0,a.kt)("inlineCode",{parentName:"li"},"JsonCreator")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"@JsonBuilder")," on builders."),(0,a.kt)("li",{parentName:"ol"},"Note that the motivation behind use of builders is not for immutability (although that may be good in certain\ncircumstances). Rather, it is to make code less error-prone and\nsimpler given the lack of named arguments and optional parameters in Java.")),(0,a.kt)("h2",{id:"secrets"},"Secrets"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Only store secrets in the ",(0,a.kt)("inlineCode",{parentName:"li"},"Vault")," and do not hold them in objects that may be persisted to other stores."),(0,a.kt)("li",{parentName:"ol"},"Do not log secrets or sensitive information.")),(0,a.kt)("h2",{id:"extensions-and-libraries"},"Extensions and Libraries"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Extension modules contribute a feature to the runtime such as a service."),(0,a.kt)("li",{parentName:"ol"},"SPI modules define extensibility points in the runtime. There is a core SPI module that defines extensibility for\nessential runtime features. There are other SPI modules that\ndefine extensibility points for optional features such as IDS."),(0,a.kt)("li",{parentName:"ol"},"Libraries are utility modules that provide classes which may be used by other modules. They do not directly\ncontribute features to the runtime."),(0,a.kt)("li",{parentName:"ol"},"An SPI module may only reference other SPI modules and library modules."),(0,a.kt)("li",{parentName:"ol"},"An Extension module may only reference other SPI modules and library modules."),(0,a.kt)("li",{parentName:"ol"},"A library module may only reference other library modules.")),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"There should only be a root ",(0,a.kt)("inlineCode",{parentName:"li"},"gradle.properties")," that contains build variables. Do not create separate\n",(0,a.kt)("inlineCode",{parentName:"li"},"gradle.properties")," files in a module."),(0,a.kt)("li",{parentName:"ol"},"For external dependencies, do not reference the version directly. Instead, use\nthe version catalog feature.")),(0,a.kt)("h2",{id:"handling-null-return-values"},"Handling Null Return Values"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In certain situations, ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," may need to be returned from a method, passed as a parameter, or set on a field. Only\nuse ",(0,a.kt)("inlineCode",{parentName:"li"},"Optional")," if a method is part of a fluent API.\nSince the runtime will rarely require this, the project standard is to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"org.jetbrains.annotations.Nullable"),"\nand ",(0,a.kt)("inlineCode",{parentName:"li"},"org.jetbrains.annotations.NotNull")," annotations.")),(0,a.kt)("h2",{id:"objects-serializationdeserialization"},"Objects Serialization/Deserialization"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"TypeManager")," is the component responsible for json ser/des, you can also use the ",(0,a.kt)("inlineCode",{parentName:"li"},"ObjectMapper")," inside it, but there\nshould be no other ",(0,a.kt)("inlineCode",{parentName:"li"},"ObjectMapper")," instance.")),(0,a.kt)("h2",{id:"class-naming"},"Class Naming"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A single implementor of an interface should be named ",(0,a.kt)("inlineCode",{parentName:"li"},"<interface name>Impl"),"."),(0,a.kt)("li",{parentName:"ol"},"An implementor who is meant to be the default implementation for an interface but other are/can be defined used\ninstead.")),(0,a.kt)("h2",{id:"observability"},"Observability"),(0,a.kt)("p",null,"Services can implement one the following interfaces: ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadinessProvider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"LivenessProvider"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"StartupStatusProvider"),"\nand register with the ",(0,a.kt)("inlineCode",{parentName:"p"},"HealthCheckService"),", thus reporting the service's readiness status through the observability API."),(0,a.kt)("h2",{id:"streams"},"Streams"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Always close explicitly ",(0,a.kt)("inlineCode",{parentName:"li"},"Stream")," objects that are returned by a service/store, since they could carry a connection,\nwhich otherwise would leak.")))}c.isMDXComponent=!0}}]);