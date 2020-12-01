(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{332:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/sample-student-ids-06766da2ceaa02961921b9269f5ab250.svg"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),r=n(6),a=(n(0),n(73)),i=n(80),c={id:"introduction",sidebar_label:"Getting Started",title:"Getting Started",slug:"/introduction"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Getting Started",description:"Introduction",source:"@site/docs/introduction.md",slug:"/introduction",permalink:"/pytorch-for-information-extraction/introduction",editUrl:"https://github.com/MbassiJaphet/pytorch-for-information-extraction/edit/master/docs/introduction.md",version:"current",sidebar_label:"Getting Started",sidebar:"tutorial",next:{title:"Detection Module",permalink:"/pytorch-for-information-extraction/detection-module"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"What will we build?",id:"what-will-we-build",children:[]},{value:"Proposed Methodology",id:"proposed-methodology",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Project Structure",id:"project-structure",children:[]},{value:"Project Dependencies",id:"project-dependencies",children:[]}],u={rightToc:l};function p(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"Welcome to this tutorial entitled ",Object(a.b)("strong",{parentName:"p"},"' Pytorch for Information Extraction on Image Documents '"),". The main objective of this tutorial is to ",Object(a.b)("strong",{parentName:"p"},"teach")," Pytorch to its audience, and make them ",Object(a.b)("strong",{parentName:"p"},"understand")," its basic ",Object(a.b)("strong",{parentName:"p"},"features"),", while addressing the complex task of Information Extraction on ",Object(a.b)("strong",{parentName:"p"},"structured image documents")," at the same time."),Object(a.b)("p",null,"So, what are ",Object(a.b)("strong",{parentName:"p"},"structured image documents"),"? We define a ",Object(a.b)("em",{parentName:"p"},"structured image document")," as a digital image containing a structured document(s). Moreover, we define ",Object(a.b)("em",{parentName:"p"},"structured documents")," as documents like ",Object(a.b)("em",{parentName:"p"},"IDs, bills, cheques, passports, driving licenses,")," etc on which every piece of information inscribed on them has a predetermined position or field within the document."),Object(a.b)("h2",{id:"what-will-we-build"},"What will we build?"),Object(a.b)("p",null,"We shall build an information extraction system for student-id cards ",Object(a.b)("strong",{parentName:"p"},"from scratch"),". In other words, at the end of this tutorial, we shall build a system that takes as input an image containing a student-id(s), and extracts from it some relevant content (",Object(a.b)("em",{parentName:"p"},"i.e. first-name, birthdate, department, etc"),") as outputs."),Object(a.b)("p",null,"Throughout the development of the information extraction system mentioned above, we will go through the fundamentals for training/testing/validation of object detection, instance segmentation, classification models for our Student-ID ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/MbassiJaphet/pytorch-for-information-extraction/tree/master/code/datasets"}),"datasets")," as well as ",Object(a.b)("strong",{parentName:"p"},"transfer learning")," with Pytorch."),Object(a.b)("p",null,"Below are sample images of student-ids from our Student-ID ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/MbassiJaphet/pytorch-for-information-extraction/tree/master/code/datasets/detection"}),"detection dataset"),".\n",Object(a.b)("img",{alt:"img",src:n(332).default})),Object(a.b)("h2",{id:"proposed-methodology"},"Proposed Methodology"),Object(a.b)("p",null,"As an attempt to effectively build its information extraction system, this tutorial proposes a methodology lying on top of three modules within which Pytorch and machine learning play crucial roles:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/detection-module/"}),Object(a.b)("strong",{parentName:"a"},"Detection Module")),", responsible for detecting and locating student-ids within images while performing ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.learnopencv.com/image-alignment-feature-based-using-opencv-c-python/"}),Object(a.b)("strong",{parentName:"a"},"image alignment"))," on them.\n",Object(a.b)("img",{alt:"img",src:n(89).default})),Object(a.b)("li",{parentName:"ol"},"An ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/orientation-module/"}),Object(a.b)("strong",{parentName:"a"},"Orientation Module")),", next to the detection module determines the orientation of an ",Object(a.b)("strong",{parentName:"li"},"aligned student-id"),", while rectifying it when necessary by applying the proper transformations.\n",Object(a.b)("img",{alt:"img",src:n(90).default})),Object(a.b)("li",{parentName:"ol"},"An ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/extraction-module/"}),Object(a.b)("strong",{parentName:"a"},"Extraction Module")),", last in the pipeline/process, extracts relevant contents from information fields of ",Object(a.b)("strong",{parentName:"li"},"aligned student-ids in the correct orientation"),".\n",Object(a.b)("img",{alt:"img",src:n(91).default}))),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"This tutorial assumes the reader's friendliness with Python and maybe a small machine learning background. Prior knowledge of Pytorch is not an absolute prerequisite, though having some basic knowledge of the machine learning library will help the reader to rapidly catch-on to the Pytorch related content and move along faster. So, for our Pytorch beginners' audience, there is no need to worry about not being able to follow the tutorial since the project being used as a foundation for the Pytorch educative materials is built from scratch. So just be patient, take your time, and do not rush."),Object(a.b)("h2",{id:"project-structure"},"Project Structure"),Object(a.b)("p",null,"To get the best out of this tutorial, you are invited to clone the project from ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/MbassiJaphet/pytorch-for-information-extraction"}),"github")," and access the notebook version (",Object(a.b)("inlineCode",{parentName:"p"},"tutorial.ipynb"),") and run it on your local machine."),Object(a.b)(i.a,{style:"color: red",file:"project-structure",mdxType:"OutputBlock"}),Object(a.b)("p",null,"To whoever might not have the necessary computational resources to practice with the tutorial's notebook on his/her local machine, do not be discouraged because, if you wish, there is the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://colab.research.google.com/github/MbassiJaphet/pytorch-for-information-extraction/blob/master/code/tutorial.ipynb"}),"colab version")," version waiting for you."),Object(a.b)("h2",{id:"project-dependencies"},"Project Dependencies"),Object(a.b)("p",null,"Looking forward to experimenting with this tutorial in your local Python or ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://anaconda.org/"}),Object(a.b)("strong",{parentName:"a"},"Conda"))," environment, you may have to resolve the following dependencies:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://pytorch.org/"}),"pytorch")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://jupyter.org/install.html"}),"jupyter")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.opencv.org/master/"}),"opencv")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://cython.org/"}),"cython")),Object(a.b)("li",{parentName:"ul"},"pycocotools")),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"For Windows users, get ",Object(a.b)("inlineCode",{parentName:"p"},"pycocotools")," from ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/philferriere/cocoapi"}),"philferriere")," by typing the command:"),Object(a.b)("p",{parentName:"div"},Object(a.b)("inlineCode",{parentName:"p"},'pip install "git+https://github.com/philferriere/cocoapi.git#egg=pycocotools&subdirectory=PythonAPI"')))))}p.isMDXComponent=!0},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";var o=n(3),r=n(0),a=n.n(r),i=function(e){function t(t){var n;return(n=e.call(this,t)||this)._currentFile=null,n.state={outputString:""},n}Object(o.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.id!==t.prevFile?{outputString:"",prevFile:e.file}:null};var n=t.prototype;return n.componentDidMount=function(){this._loadAsyncData(this.props.file)},n.componentDidUpdate=function(e,t){this.state.outputString||this._loadAsyncData(this.props.file)},n.componentWillUnmount=function(){this._currentFile=null},n.render=function(){return a.a.createElement("pre",{className:"output-block"},a.a.createElement("code",null,this.state.outputString))},n._loadAsyncData=function(e){var t=this;this._currentFile=e,fetch("/pytorch-for-information-extraction/code-snippets/"+e+".txt").then((function(e){return e.text()})).then((function(n){e===t._currentFile&&t.setState({outputString:n})})).catch((function(e){console.log(e)}))},t}(a.a.Component);t.a=i},89:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/detection-module-78cb3f5eb848541a18e3f5d629946c7e.svg"},90:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/orientation-module-364044a0100b9850819f753a1d6444d0.svg"},91:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/extraction-module-092ed1fc5bc7067716ddee5915232b5e.svg"}}]);