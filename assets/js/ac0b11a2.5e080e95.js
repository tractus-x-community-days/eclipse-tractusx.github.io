"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[98691],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(g,l(l({ref:t},p),{},{components:r})):a.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_class_name:"hidden"},l=void 0,o={unversionedId:"kits/Traceability Kit/Software Development View/part_bill-of-materials",id:"version-23.12/kits/Traceability Kit/Software Development View/part_bill-of-materials",title:"part_bill-of-materials",description:"\x3c!---",source:"@site/docs-kits_versioned_docs/version-23.12/kits/Traceability Kit/Software Development View/part_bill-of-materials.mdx",sourceDirName:"kits/Traceability Kit/Software Development View",slug:"/kits/Traceability Kit/Software Development View/part_bill-of-materials",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/Traceability Kit/Software Development View/part_bill-of-materials",draft:!1,tags:[],version:"23.12",frontMatter:{sidebar_class_name:"hidden"},sidebar:"kits",previous:{title:"part_aspect-models",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/Traceability Kit/Software Development View/part_aspect-models"},next:{title:"part_digital-twin",permalink:"/eclipse-tractusx.github.io/docs-kits/23.12/kits/Traceability Kit/Software Development View/part_digital-twin"}},s={},c=[{value:"Bill of Material (BoM)",id:"bill-of-material-bom",level:2},{value:"BoM Representations",id:"bom-representations",level:3},{value:"Single-Level BOM",id:"single-level-bom",level:4},{value:"Multi-Level BOM",id:"multi-level-bom",level:4},{value:"Flattened BOM",id:"flattened-bom",level:4},{value:"BoM Lifecycle Stages",id:"bom-lifecycle-stages",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"bill-of-material-bom"},"Bill of Material (BoM)"),(0,n.kt)("p",null,"A bill of material resembles the structure of an end product. It is a list of all raw materials, sub-assemblies and sub-components that are needed to manufacture the end procuct.\nAt Catena-X Traceability we consider more than one single BoM. The BoM changes during the lifecyle and therefore, we are talking about different BoMs in different lifecycles."),(0,n.kt)("h3",{id:"bom-representations"},"BoM Representations"),(0,n.kt)("h4",{id:"single-level-bom"},"Single-Level BOM"),(0,n.kt)("p",null,"A single-level BOM represents one level of an assembly and does not include any lower-level subassemblies."),(0,n.kt)("h4",{id:"multi-level-bom"},"Multi-Level BOM"),(0,n.kt)("p",null,"A Multi-Level Bill of Materials (BOM) is a ",(0,n.kt)("a",{parentName:"p",href:"https://www.bterrell.com/sage-accpac-erp/manufacturing/definition-multi-level-bom/definition-bom/"},"bill of materials (BOM)")," that lists the components, assemblies, and materials required to make a part. It provides a display of all components that are directly or indirectly used in a parent item. When an item is a subcomponent, blend, intermediate, etc., all of its components, including purchased parts and ",(0,n.kt)("a",{parentName:"p",href:"https://www.bterrell.com/sage-accpac-erp/manufacturing/definition-multi-level-bom/definition-bom/definition-raw-materials/"},"raw materials"),", are also exhibited. A multilevel structure can be illustrated by a tree with several levels. A multi-level BOM is created by connecting a series of individual single level BOMs together."),(0,n.kt)("h4",{id:"flattened-bom"},"Flattened BOM"),(0,n.kt)("p",null,"Flattening BOM means the intermediate levels in the BOM are removed and the lowest level is directly connected to the highest level."),(0,n.kt)("h3",{id:"bom-lifecycle-stages"},"BoM Lifecycle Stages"),(0,n.kt)("p",null,"BoM LifeCycleStage concept based on STEP AP242 with slight adoptions in layout & wording:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Each instance can be identified by unique (within the organization) serial number (SN)."),(0,n.kt)("li",{parentName:"ul"},"The \u2018multi-SN\u2019 (multi Serial number) describes product defined with a generic part or item"),(0,n.kt)("li",{parentName:"ul"},"The \u2018one per SN\u2019 (one per Serial number) describes product defined with an individual part or item")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Identifier Step"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Implemented CX"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Identifier CX"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Purpose"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Creating time of BoM"),(0,n.kt)("th",{parentName:"tr",align:"center"},"BoM Auspr\xe4gungen"),(0,n.kt)("th",{parentName:"tr",align:"center"},"one/more fix suppliers"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"AsDesigned (AsDeveloped)")),(0,n.kt)("td",{parentName:"tr",align:"center"},"multi-SN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Currently Not Implemented"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Part number* ",(0,n.kt)("br",null),"may not be the specific part number but a code that describes a part",(0,n.kt)("br",null),"(technische Produktbeschreibung)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BoM asDesigned is generated in the design phase of a new product including alternative parts."),(0,n.kt)("td",{parentName:"tr",align:"center"},"Build up the initial BoM in design phase of a new automotive product including alternative parts",(0,n.kt)("br",null),"Expected to have research & development part descriptions instead of specific part numbers"),(0,n.kt)("td",{parentName:"tr",align:"center"},"starting 2 years before SoP (for e.g. of a new vehicle project)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"150% incl. variants which will not be used later"),(0,n.kt)("td",{parentName:"tr",align:"center"},"partly known",(0,n.kt)("br",null),"can be open at this point of time")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"AsPlanned")),(0,n.kt)("td",{parentName:"tr",align:"center"},"multi-SN"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"Implemented")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Part number"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BoM AsPlanned is used to plan the manufacturing process including alternative parts."),(0,n.kt)("td",{parentName:"tr",align:"center"},"BoM AsPlanned is used to plan manufacturing including alternative parts.",(0,n.kt)("br",null),"Sourcing will most likely be based on this (besides key parts which start earlier)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"starting 1,5 years before building the first component"),(0,n.kt)("td",{parentName:"tr",align:"center"},"120% of all variants are covered, incl. possibly multiple suppliers for the same component"),(0,n.kt)("td",{parentName:"tr",align:"center"},"fixed suppliers, could be more than one supplier per part")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"AsOrdered")),(0,n.kt)("td",{parentName:"tr",align:"center"},"one per SN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Currently Not Implemented"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Part number"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BoM AsOrdered is used for manufacturing realization."),(0,n.kt)("td",{parentName:"tr",align:"center"},"BoM that is used for manufacturing realization.",(0,n.kt)("br",null)," This is the list of parts & components currently used for manufactoring after start of production (SOP) or shortly before."),(0,n.kt)("td",{parentName:"tr",align:"center"},"fixed order",(0,n.kt)("br",null),"(production order or custom order)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"100% exact order is known"),(0,n.kt)("td",{parentName:"tr",align:"center"},"fixed suppliers, could be more than one supplier per part")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"AsBuilt")),(0,n.kt)("td",{parentName:"tr",align:"center"},"one per SN"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"Implemented")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Serial number / batch number"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BoM AsBuilt describes a product as manufactured."),(0,n.kt)("td",{parentName:"tr",align:"center"},"BoM as a component is built or manufactured.",(0,n.kt)("br",null),"During manufactoring of for e.g. a vehicle the serial numbers & batch numbers are documented (German: Verbaudokumentation).",(0,n.kt)("br",null),"This leads to one BoM per built car"),(0,n.kt)("td",{parentName:"tr",align:"center"},"during building process or directly after finishing"),(0,n.kt)("td",{parentName:"tr",align:"center"},"100%"),(0,n.kt)("td",{parentName:"tr",align:"center"},"one specific supplier")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"AsSupported / AsFlying / AsMaintained / AsOperated")),(0,n.kt)("td",{parentName:"tr",align:"center"},"one per SN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Currently Not Implemented"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Serial number / batch number"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BoM AsMaintained describes the product after purchasing by a customer and updates by maintenance."),(0,n.kt)("td",{parentName:"tr",align:"center"},"BoM after for e.g. a vehicle was picked up by the customer. Changes to live cycle before may apply due to maintenance or repair work e.g. exchange of parts, liquids, ..."),(0,n.kt)("td",{parentName:"tr",align:"center"},"Starts when customer has picked up the product, updating if any change is done"),(0,n.kt)("td",{parentName:"tr",align:"center"},"100% inkl. replaced parts, incl. history of exchanged parts"),(0,n.kt)("td",{parentName:"tr",align:"center"},"one specific supplier")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"AsRecycled")),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Currently Not Implemented"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Serial number / batch number"),(0,n.kt)("td",{parentName:"tr",align:"center"},"BoM AsRecycled describes the BoM after the recycling of the product."),(0,n.kt)("td",{parentName:"tr",align:"center"},"Requirement for Batteries."),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"100%"),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("p",null,"Two of the considered BoMs are already implemented in the use case Traceability and will be described as follows."))}d.isMDXComponent=!0}}]);