(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var o=n(2),r=n(6),a=(n(0),n(73)),i={id:"tutorial",sidebar_label:"Getting Started",title:"Pytorch For Information Extraction",slug:"/tutorial"},c={unversionedId:"tutorial",id:"tutorial",isDocsHomePage:!1,title:"Pytorch For Information Extraction",description:"Introduction",source:"@site/docs\\tutorial.md",slug:"/tutorial",permalink:"/pytorch-for-information-extraction/tutorial",editUrl:"https://github.com/MbassiJaphet/pytorch-for-information-extraction/edit/master/docs/tutorial.md",version:"current",sidebar_label:"Getting Started"},s=[{value:"<strong>Introduction</strong>",id:"introduction",children:[]},{value:"<strong>Target Audience</strong>",id:"target-audience",children:[]},{value:"<strong>Project Description</strong>",id:"project-description",children:[{value:"Project Challenges",id:"project-challenges",children:[]},{value:"Project Modules/Layout",id:"project-moduleslayout",children:[]}]},{value:"<strong>Project Dependencies</strong>",id:"project-dependencies",children:[]}],l={rightToc:s};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},Object(a.b)("strong",{parentName:"h2"},"Introduction")),Object(a.b)("p",null,"Welcome to this tutorial entitled ",Object(a.b)("strong",{parentName:"p"},"' Pytorch For Information Extraction '"),". As the title implies, this tutorial demonstrates how possible it is to automate information retrieval on document images using ",Object(a.b)("strong",{parentName:"p"},"Machine Learning")," with ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://pytorch.org"}),Object(a.b)("strong",{parentName:"a"},"Pytorch")),". This tutorial primarily focuses on ways to leverage Pytorch and its features to address the complex task of Information Extraction on structured document images. To better understand this tutorial it is all about, it is important to clarify definitions and meanings concerning a few things."),Object(a.b)("p",null,"Firstly, what is ",Object(a.b)("strong",{parentName:"p"},"Information Extraction"),'? According to Wikipedia, "Information Extraction is the task of automatically extracting structured information from unstructured and/or semi-structured machine-readable documents and other electronically represented sources".'),Object(a.b)("p",null,"Secondly, what are ",Object(a.b)("strong",{parentName:"p"},"structured document images"),"? This tutorial defines a structured document image as a digital image of a document like IDs, bills,  cheques, passport, driving license, etc on which every information (such as name, age, sex, expiry date, etc)  inscribed has a predefined position or field on the document."),Object(a.b)("p",null,"Therefore,  this tutorial is a walkthrough leveraging Pytorch with the most convenient features to perform information extraction on document images. In other words, at the end of the tutorial, we shall build a system that takes an image of a structured document (like a student id card) and extracts inscribed information (such as student\u2019s name,  department, date of birth, etc) as outputs."),Object(a.b)("h2",{id:"target-audience"},Object(a.b)("strong",{parentName:"h2"},"Target Audience")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"AI practitioners and enthusiasts with interest in either Computer Vision, Machine Learning, or Pytorch."),Object(a.b)("li",{parentName:"ul"},"Researchers and academicians exploring various paths and possibilities for developing information extraction systems."),Object(a.b)("li",{parentName:"ul"},"Developers exploring ways to leverage machine learning to develop information extraction systems."),Object(a.b)("li",{parentName:"ul"},"Developers willing to learn key or primordial features of Pytorch looking forward to implementing the later in developing solutions aimed at solving real-world problems."),Object(a.b)("li",{parentName:"ul"},"Finally anyone interested and willing to learn Pytorch. Particularly for building computer vision systems like the project this tutorial is built on top of.")),Object(a.b)("p",null,"This tutorial assumes the reader's friendliness with Python and maybe a small machine learning background. Prior knowledge of Pytorch is not an absolute prerequisite, though having some basic knowledge of the machine learning library will help the reader to rapidly catch-on to the Pytorch related content and move along faster. So, for our Pytorch beginners' audience, there is no need to worry about not being able to follow the tutorial since the project being used as a foundation for the Pytorch educative materials is built from scratch. So just be patient, take your time, and do not rush."),Object(a.b)("h2",{id:"project-description"},Object(a.b)("strong",{parentName:"h2"},"Project Description")),Object(a.b)("p",null,"The project which serves as the foundation for this tutorial aims at developing a pipeline that will take as input an image containing student-id(s) from the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/MbassiJaphet/pytorch-for-information-extraction/tree/master/code/datasets/detection"}),"Student-ID")," testing dataset and extract information of interest from student-id in that image. Below is a sample student-id:"),Object(a.b)("p",null,Object(a.b)("img",Object(o.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/MbassiJaphet/pytorch-for-information-extraction/master/code/images/student-ids/10151.jpg",alt:"img"}))),Object(a.b)("h3",{id:"project-challenges"},"Project Challenges"),Object(a.b)("p",null,"The main challenges of this project are well-known challenges from the long history of Information Extraction by Computer Vision systems. Thankfully, due to innovations brought by deep learning, most of those challenges can now be overcome and considered as part of a distant past. These challenges include but are not limited to:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Localization of documents (student-ids) in images."),Object(a.b)("li",{parentName:"ul"},"Negation of complex backgrounds rendering the detection of documents difficult."),Object(a.b)("li",{parentName:"ul"},"Tolerance to possible to documents' orientations."),Object(a.b)("li",{parentName:"ul"},"Definition of rules for extracting desired information in their correct forms.")),Object(a.b)("h3",{id:"project-moduleslayout"},"Project Modules/Layout"),Object(a.b)("p",null,"As an attempt to overcome the various challenges listed above, the project itself is subdivided into three modules within which Pytorch and Machine Learning play important roles:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/detection-module/"}),Object(a.b)("strong",{parentName:"a"},"Detection Module,"))," responsible for locating documents of interest in images and performing image alignment on them.\n",Object(a.b)("img",{alt:"img",src:n(89).default})),Object(a.b)("li",{parentName:"ol"},"An ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/orientation-module/"}),Object(a.b)("strong",{parentName:"a"},"Orientation Module,"))," next to the detection module inspects the orientation of documents and rectifies it when necessary by applying the proper transformation on images.\n",Object(a.b)("img",{alt:"img",src:n(90).default})),Object(a.b)("li",{parentName:"ol"},"An ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/extraction-module/"}),Object(a.b)("strong",{parentName:"a"},"Extraction Module,"))," last in the chain extracts information in fields of interest from document images.\n",Object(a.b)("img",{alt:"img",src:n(91).default}))),Object(a.b)("p",null,"This tutorial teaches the basics for training, testing, and validating object detection, segmentation, and classification models using Pytorch. This tutorial is more like a mini-course on leveraging Pytorch and its features for Information Extraction, than being a simple straight forward tutorial. So, feel free to pause and take a break anytime at the end of each section/module, as even the structure of the notebook allows you to resume your work from where you left."),Object(a.b)("h2",{id:"project-dependencies"},Object(a.b)("strong",{parentName:"h2"},"Project Dependencies")),Object(a.b)("p",null,"Looking forward to experimenting with this tutorial in your local ",Object(a.b)("strong",{parentName:"p"},"Python*")," environment, you may have to resolve the following dependencies:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"pytorch"),Object(a.b)("li",{parentName:"ul"},"opencv-python"),Object(a.b)("li",{parentName:"ul"},"cython"),Object(a.b)("li",{parentName:"ul"},"pycocotools")),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"For Windows users, get ",Object(a.b)("inlineCode",{parentName:"p"},"pycocotools")," from ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/philferriere/cocoapi"}),"philferriere")," by typing the command:"),Object(a.b)("p",{parentName:"div"},Object(a.b)("inlineCode",{parentName:"p"},'pip install "git+https://github.com/philferriere/cocoapi.git#egg=pycocotools&subdirectory=PythonAPI"')))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note")," that ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/MbassiJaphet/pytorch-for-information-extraction/tree/master/code/datasets"}),"datasets"),", ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/MbassiJaphet/pytorch-for-information-extraction/tree/master/code"}),"project")," source code, as well as this ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/MbassiJaphet/pytorch-for-information-extraction"}),"tutorial")," source code are publicly available on Github.")))}u.isMDXComponent=!0},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||a;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/detection-module-78cb3f5eb848541a18e3f5d629946c7e.svg"},90:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/orientation-module-364044a0100b9850819f753a1d6444d0.svg"},91:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/extraction-module-092ed1fc5bc7067716ddee5915232b5e.svg"}}]);