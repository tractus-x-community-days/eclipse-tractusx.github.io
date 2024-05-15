"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[42801],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=d(a),u=i,h=c["".concat(o,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(h,l(l({ref:e},p),{},{components:a})):n.createElement(h,l({ref:e},p))}));function h(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:i,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},32685:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={id:"Specification Quality Kit",title:"Specification",description:"Quality Kit",sidebar_position:4},l=void 0,s={unversionedId:"kits/Quality-Kit/Software Development View/Specification Quality Kit",id:"version-24.03/kits/Quality-Kit/Software Development View/Specification Quality Kit",title:"Specification",description:"Quality Kit",source:"@site/docs-kits_versioned_docs/version-24.03/kits/Quality-Kit/Software Development View/page_software-development-view.md",sourceDirName:"kits/Quality-Kit/Software Development View",slug:"/kits/Quality-Kit/Software Development View/Specification Quality Kit",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Quality-Kit/Software Development View/Specification Quality Kit",draft:!1,tags:[],version:"24.03",sidebarPosition:4,frontMatter:{id:"Specification Quality Kit",title:"Specification",description:"Quality Kit",sidebar_position:4},sidebar:"kits",previous:{title:"Operation View",permalink:"/eclipse-tractusx.github.io/docs-kits/kits/Quality-Kit/Operation View Quality Kit"},next:{title:"Remaining Useful Life (RuL) KIT",permalink:"/eclipse-tractusx.github.io/docs-kits/category/remaining-useful-life-rul-kit"}},o={},d=[{value:"Quality KIT",id:"quality-kit",level:3},{value:"Quality Data Offers at EDC",id:"quality-data-offers-at-edc",level:2},{value:"S3 Data Address",id:"s3-data-address",level:3},{value:"Properties",id:"properties",level:3},{value:"<strong>Asset File type</strong>",id:"asset-file-type",level:3},{value:"<strong>Asset Transfers via EDC</strong>",id:"asset-transfers-via-edc",level:3},{value:"<strong>Asset consumption</strong>",id:"asset-consumption",level:3},{value:"Sample Data",id:"sample-data",level:2},{value:"Quality Task Sample Data",id:"quality-task-sample-data",level:3},{value:"Quality Task Attachment Sample Data",id:"quality-task-attachment-sample-data",level:3},{value:"Fleet Vehicles Sample Data",id:"fleet-vehicles-sample-data",level:3},{value:"Fleet Diagnostic Sample Data",id:"fleet-diagnostic-sample-data",level:3},{value:"Fleet Claim Sample Data",id:"fleet-claim-sample-data",level:3},{value:"Manufactured Parts Quality Information Sample Data",id:"manufactured-parts-quality-information-sample-data",level:3},{value:"Parts Analyses Sample Data",id:"parts-analyses-sample-data",level:3}],p={toc:d};function c(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Quality kit banner",src:a(20570).Z,width:"286",height:"244"})),(0,i.kt)("h3",{id:"quality-kit"},"Quality KIT"),(0,i.kt)("h2",{id:"quality-data-offers-at-edc"},"Quality Data Offers at EDC"),(0,i.kt)("p",null,"When a Data Consumer calls the Catalog of a Data Provider, the Data Provider must signal in each Data Offer what exactly\na Consumer could negotiate for. Data Offers in the Catalog are sorted by dcat:Datasets which are registered in the EDC-\nManagement API as edc:Asset. Each Asset has private and public properties. The public properties are shown in the\ncatalog and give hints to the Data Consumer what API and data they may expect. There are some properties that are\nmandatory for the entire Catena-X network and some that are mandatory only in specific Business Scenarios (like\nQuality)."),(0,i.kt)("p",null,"The dataAddress object's structure is determined by the dataplane implementation as it configures the details of the\ndata transfer. They are not visible via the catalog."),(0,i.kt)("p",null,"The following suggestion is a non-standardized draft how Assets (and thus by proxy, dcat:Datasets) should be registered\nin the Quality Use-Case."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "cx-taxo": "https://w3id.org/catenax/taxonomy#",\n    "cx-common": "https://w3id.org/catenax/ontology/common#",\n    "dct": "https://purl.org/dc/terms/",\n    "dcat": "http://www.w3.org/ns/dcat#",\n    "edc": "https://w3id.org/edc/v0.0.1/ns/"\n  },\n  "@id": "someId",\n  "@type": "edc:Asset",\n  "edc:properties": {\n    "dct:type": {\n      "@id": "cx-taxo:QualityAsset"\n    },\n    "cx-common:version": "1.0",\n    "dct:language": {\n      "@id": "https://w3id.org/idsa/code/EN"\n    },\n    "dcat:qualifiedRelation": {\n      "dct:isPartOf": {\n        "@id": "f7574ad6-95ee-46e2-8a45-6fa1782ba426"\n      }\n    },\n    "dct:conformsTo": {\n      "@id": "urn:samm:io.catenax.vehicle.product_description:3.0.0#ProductDescription"\n    },\n    "dct:description": "TBD",\n    "dct:format": "application/octet-stream;type=parquet-snappy",\n    "edc:type": "AmazonS3"\n  },\n  "edc:dataAddress": {\n    "@type": "edc:DataAddress",\n    "edc:type": "AmazonS3",\n    "edc:region": "eu-west-1",\n    "edc:bucketName": "int-xcod-quality-aspect-models-eu-west-1",\n    "edc:keyName": "myCompany/myTag/QualityTask.parquet",\n    "edc:accessKeyId": "\u2026",\n    "edc:secretAccessKey": "\u2026"\n  }\n}\n\n')),(0,i.kt)("h3",{id:"s3-data-address"},"S3 Data Address"),(0,i.kt)("p",null,"This section is not use-case specific but since the EDC's AmazonS3 dataplane is basically undocumented, here is an\nexplanation:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"edc:type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"AmazonS3"')),(0,i.kt)("td",{parentName:"tr",align:null},"This shows which data source the Data Plane will query. It also determines what other content the ",(0,i.kt)("inlineCode",{parentName:"td"},"dataAddress")," object must hold.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"edc:region")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"eu-west-1"')),(0,i.kt)("td",{parentName:"tr",align:null},"This property represents the AWS-region where the source bucket is located.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"edc:bucketName")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"provider-quality-bucket"')),(0,i.kt)("td",{parentName:"tr",align:null},"This is the name of the source bucket that the data to-be-transferred resides in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"edc:keyName")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"path/through/provider/s3"')),(0,i.kt)("td",{parentName:"tr",align:null},"This is the path of the file that shall be offered to the dataspace.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"edc:accessKeyId")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"<keyId>"')),(0,i.kt)("td",{parentName:"tr",align:null},"Amazon S3 uses this property similarly to how oauth2 client credentials use the ",(0,i.kt)("inlineCode",{parentName:"td"},"clientId"),". Note that this can also be set during deployment-time for the whole S3-dataplane. If it's set here, it will override the default config.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"edc:secretAccessKey")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"<secretAccessKey>"')),(0,i.kt)("td",{parentName:"tr",align:null},"This secret is used similarly to a ",(0,i.kt)("inlineCode",{parentName:"td"},"clientSecret")," in oauth2 client credentials.")))),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Optional"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://purl.org/dc/terms/type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{"@id": "cx-taxo:QualityAsset"}')),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"CX-0018 mandates the usage of the dct:type property to signal what kind of Asset a consumer can expect behind a dcat:Dataset. In the Quality Use-Case, this is identified as ",(0,i.kt)("inlineCode",{parentName:"td"},"https://w3id.org/catenax/taxonomy#QualityAsset"),". The expected payload this API serves is determined by the ",(0,i.kt)("inlineCode",{parentName:"td"},"dcat:conformsTo")," property.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://purl.org/dc/terms/language")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{"@id": "https://w3id.org/idsa/code/EN"}')),(0,i.kt)("td",{parentName:"tr",align:null},"x"),(0,i.kt)("td",{parentName:"tr",align:null},"This property is QM-specific. As it points to an IRI, it must be embedded in a json-object with the ",(0,i.kt)("inlineCode",{parentName:"td"},"@id")," key. The use of this is unclear.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://purl.org/dc/terms/format")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"application/octet-stream;type=parquet-snappy"')),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"This property is QM-specific. dct:format usually points to the correct IANA Media Type. As currently only parquet files are used, the type application/octet-stream with the added property type=parquet-snappy must be used. The syntax is expained ",(0,i.kt)("a",{parentName:"td",href:"https://www.iana.org/assignments/media-types-parameters/media-types-parameters.xhtml"},"here"),". If in the future csv shall be supported, the value could also be ",(0,i.kt)("inlineCode",{parentName:"td"},"text/csv"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://purl.org/dc/terms/description")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<whatever>")),(0,i.kt)("td",{parentName:"tr",align:null},"x"),(0,i.kt)("td",{parentName:"tr",align:null},"This property is QM-specific. For human-readable content, rdfs:comment is the usual property but would introduce another namespace so the dct-native property is chosen here.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://purl.org/dc/terms/conformsTo")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{"@id":"<urnOfTheCorrespondingAspectModel>"}')),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"This property is QM-specific. It holds the exact aspect-model-URN that defines the schema of the presented dataset including its version. The version in here refers to the data model's version while the EDC-property ",(0,i.kt)("inlineCode",{parentName:"td"},"cx-common:version")," defines the version of the underlying API serving the data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http://www.w3.org/ns/dcat#qualifiedRelation")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'{"dct:isPartOf": {"@id": "<idOfTheCorrespondingQualityTask>"}}')),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"This property is QM-specific. All Asset types defined in this Kit must include this property as it links the data behind an asset with the correct QualityTask. Note that the id of the QualityTask must be used, not the id of the EDC-Asset shielding said QualityTask.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://w3id.org/edc/v0.0.1/ns/type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"AmazonS3")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"This property signifies the EDC dataplane that the QM data will be transferred over. The expectation that this would be signaled via the dcat:DataSet-dcat:distribution property of the catalog currently isn't implemented in the EDC. Thus the data must be replicated here and is presented via the same property that the consumer-side ",(0,i.kt)("inlineCode",{parentName:"td"},"transferprocesses")," API uses for this same signal.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://w3id.org/catenax/ontology/common#version")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"1.0"')),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"CX-0018 recommends to use cx-common:version to signal the API's version. Here, the API's version is equivalent to the version of the CX-standard for the Quality domain. Creation is currently in progress as CX-0123 v1.0.0. In this EDC-property, only major and minor increments should be added.")))),(0,i.kt)("p",null,"For the process described in the KIT Quality, data exchange between the participating partner companies is necessarily\nto be done for large vehicle and product populations. The data exchange therefore should be done as a file download via\nEDC according to the following specifications."),(0,i.kt)("h3",{id:"asset-file-type"},(0,i.kt)("strong",{parentName:"h3"},"Asset File type")),(0,i.kt)("p",null,"It is recommended to create and transfer the files in the type parquet. Only attachments for the Quality task (Quality\nTask Attachment) should be created in ZIP format."),(0,i.kt)("h3",{id:"asset-transfers-via-edc"},(0,i.kt)("strong",{parentName:"h3"},"Asset Transfers via EDC")),(0,i.kt)("p",null,"File transfer is recommended to be done via EDC S3 plane, The transfer via EDC http data plane is not recommended due to\nthe big data size."),(0,i.kt)("h3",{id:"asset-consumption"},(0,i.kt)("strong",{parentName:"h3"},"Asset consumption")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"File")," flattening ",(0,i.kt)("strong",{parentName:"p"},"rules"),": The data provided in the asset is build from 4 to 6 structures. To assure a secure and\nsmooth exchange flatting rules for the file (csv / xls / Parquet / json) must be applied. This includes checks for\nformat and possible values for each column and will be part of next version regulations. If the rules are not applied\ncorrectly the mapping of content will not be possible without manual handling effort."),(0,i.kt)("h2",{id:"sample-data"},"Sample Data"),(0,i.kt)("p",null,"Standard version from: 09.2023"),(0,i.kt)("p",null,"In the following, example data for the standardized data models are provided as download in zip format. The sample data\nis generated according the current standards. It contains a virtual fleet of 50.000 vehicles where two quality issues\nare implemented."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Production failure of product "zehn" at Tier 1'),(0,i.kt)("li",{parentName:"ul"},"Specification failure")),(0,i.kt)("h3",{id:"quality-task-sample-data"},"Quality Task Sample Data"),(0,i.kt)("p",null,"Github Link to semantic data\nmodel: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.quality_task"},"CX-00036 Quality Task")),(0,i.kt)("p",null,"Filedownload: ",(0,i.kt)("a",{target:"_blank",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io.largefiles/raw/main/quality-kit/20230704-io.catenax.quality_task.zip",download:!0},"\n20230704-io.catenax.quality_task.zip")),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"JSON file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC REST data plane"),":\nCX_release32_qualitytask_100_testdata_100_json"),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"PARQUET file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC S3 data plane"),":\nCX_release32_qualitytask_100_testdata_100_parquet"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"quality-task-attachment-sample-data"},"Quality Task Attachment Sample Data"),(0,i.kt)("p",null,"Github Link to semantic data\nmodel: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.quality_task_attachment"},"CX-00092 Quality Task Attachment")),(0,i.kt)("p",null,"Filedownload: ",(0,i.kt)("a",{target:"_blank",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io.largefiles/raw/main/quality-kit/20230718-io.catenax.quality_task_attachment.zip",download:!0},"\n20230718-io.catenax.quality_task_attachment.zip")),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"PARQUET file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC S3 data plane"),":\nCX_release32_qualitytaskattachment_100_testdata_100_zip"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fleet-vehicles-sample-data"},"Fleet Vehicles Sample Data"),(0,i.kt)("p",null,"Github Link to semantic data models:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.vehicle.product_description"},"CX-00037 Vehicle Product Description")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.vehicles"},"CX-00091 Fleet Vehicles")),(0,i.kt)("p",null,"Filedownload: ",(0,i.kt)("a",{target:"_blank",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io.largefiles/raw/main/quality-kit/20230707-io.catenax.fleet.vehicles.zip",download:!0},"\n20230707-io.catenax.fleet.vehicles.zip")),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"JSON file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC REST data plane"),":\nCX_release32_fleetvehicles_100_testdata_100_json"),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"PARQUET file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC S3 data plane"),":\nCX_release32_fleetvehicles_100_testdata_100_parquet"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fleet-diagnostic-sample-data"},"Fleet Diagnostic Sample Data"),(0,i.kt)("p",null,"Github Link to semantic data\nmodel: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.diagnostic_data"},"CX-00038 Fleet Diagnostic Data")),(0,i.kt)("p",null,"Filedownload: ",(0,i.kt)("a",{target:"_blank",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io.largefiles/raw/main/quality-kit/20230707-io.catenax.fleet.diagnostic_data.zip",download:!0},"\n20230707-io.catenax.fleet.diagnostic_data.zip")),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"JSON file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC REST data plane"),":\nCX_release32_fleetdiagnostic_100_testdata_100_json"),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"PARQUET file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC S3 data plane"),":\nCX_release32_fleetdiagnostic_100_testdata_100_parquet"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fleet-claim-sample-data"},"Fleet Claim Sample Data"),(0,i.kt)("p",null,"Github Link to semantic data\nmodel: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.fleet.claim_data"},"CX-00039 Fleet Claim Data")),(0,i.kt)("p",null,"Filedownload: ",(0,i.kt)("a",{target:"_blank",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io.largefiles/raw/main/quality-kit/20230707-io.catenax.fleet.claim_data.zip",download:!0},"\n20230707-io.catenax.fleet.claim_data.zip")),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"JSON file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC REST data plane"),":\nCX_release32_fleetclaim_100_testdata_100_json"),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"PARQUET file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC S3 data plane"),":\nCX_release32_fleetclaim_100_testdata_100_parquet"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"manufactured-parts-quality-information-sample-data"},"Manufactured Parts Quality Information Sample Data"),(0,i.kt)("p",null,"Github Link to semantic data\nmodel: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.manufactured_parts_quality_information"},"CX-00041 Manufactured Parts Quality Information")),(0,i.kt)("p",null,"Filedownload: ",(0,i.kt)("a",{target:"_blank",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io.largefiles/raw/main/quality-kit/20230707-io.catenax.manufactured_parts_quality_information.zip",download:!0},"\n20230707-io.catenax.manufactured_parts_quality_information.zip")),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"JSON file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC REST data plane"),":\nCX_release32_manufacturingqualityinformation_100_testdata_100_json"),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"PARQUET file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC S3 data plane"),":\nCX_release32_manufacturingqualityinformation_100_testdata_100_parquet"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"parts-analyses-sample-data"},"Parts Analyses Sample Data"),(0,i.kt)("p",null,"Github Link to semantic data\nmodel: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/sldt-semantic-models/tree/main/io.catenax.parts_analyses"},"CX-00040 Parts Analyses")),(0,i.kt)("p",null,"Filedownload: ",(0,i.kt)("a",{target:"_blank",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io.largefiles/raw/main/quality-kit/20230704-io.catenax.parts_analyses.zip",download:!0},"\n20230704-io.catenax.parts_analyses.zip")),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"JSON file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC REST data plane"),":\nCX_release32_partsanalyses_200_testdata_100_json"),(0,i.kt)("p",null,"As ",(0,i.kt)("strong",{parentName:"p"},"data provider")," please add the ",(0,i.kt)("strong",{parentName:"p"},"PARQUET file")," from folder tesdata_CX32\nas EDC asset id to ",(0,i.kt)("strong",{parentName:"p"},"EDC S3 data plane"),":\nCX_release32_partsanalyses_200_testdata_100_parquet"))}c.isMDXComponent=!0},20570:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/QualityKitIcon-b0a34d61ca5cc6147b382b4081cc269b.png"}}]);