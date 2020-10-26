(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(73)),i={id:"conclusion",sidebar_label:"Conclusion",title:"Tutorial Conclusion",slug:"/conclusion/"},c={unversionedId:"conclusion",id:"conclusion",isDocsHomePage:!1,title:"Tutorial Conclusion",description:"Wow, we are almost the end of this tutorial !",source:"@site/docs/conclusion.md",slug:"/conclusion/",permalink:"/pytorch-for-information-extraction/conclusion/",editUrl:"https://github.com/MbassiJaphet/pytorch-for-information-extraction/edit/master/docs/conclusion.md",version:"current",sidebar_label:"Conclusion",sidebar:"tutorial",previous:{title:"Extraction Module",permalink:"/pytorch-for-information-extraction/extraction-module"}},l=[{value:"Final words",id:"final-words",children:[]},{value:"What comes next",id:"what-comes-next",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Wow, we are almost the end of this tutorial !"),Object(a.b)("h2",{id:"final-words"},"Final words"),Object(a.b)("p",null,"This tutorial introduced the basics of object detection, instance segmentation, and object classification using Pytorch. It even went as far as demonstrating how it is possible to use Pytorch features to perform information extraction. It presented a methodology for information extraction which we implemented using Pytorch. In the course of implementing the different modules of this methodology, we leveraged a lot of Pytorch features by doing more or less of the following:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create custom dataset classes inheriting ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://pytorch.org/docs/stable/data.html#torch.utils.data.Dataset"}),"torch.utils.data.Dataset"),"."),Object(a.b)("li",{parentName:"ul"},"Initialize datasets for training, validation, and testing."),Object(a.b)("li",{parentName:"ul"},"Explore and visualize datasets."),Object(a.b)("li",{parentName:"ul"},"Define data loaders for our datasets."),Object(a.b)("li",{parentName:"ul"},"Load and fine-tune pre-trained models i.e. Mask R-CNN showcased in this tutorial."),Object(a.b)("li",{parentName:"ul"},"Train Mask R-CNN to carry out object detection and instance segmentation."),Object(a.b)("li",{parentName:"ul"},"Interpret and visualize Mask R-CNN model predictions."),Object(a.b)("li",{parentName:"ul"},"Load datasets using Pytorch in-built ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://pytorch.org/docs/stable/torchvision/datasets.html#torchvision.datasets.ImageFolder"}),"torchvision.datasets.ImageFolder"),"."),Object(a.b)("li",{parentName:"ul"},"Build a simple image classifier."),Object(a.b)("li",{parentName:"ul"},"Define and apply transformations on training, validation, and testing datasets."),Object(a.b)("li",{parentName:"ul"},"Select criterion, define optimizer and training loop for image classifier."),Object(a.b)("li",{parentName:"ul"},"Compute prediction of image classifier on sample data."),Object(a.b)("li",{parentName:"ul"},"Save model and optimizer state dictionaries as checkpoints."),Object(a.b)("li",{parentName:"ul"},"Load model and optimizer from checkpoints."),Object(a.b)("li",{parentName:"ul"},"Resume training using checkpoints.")),Object(a.b)("h2",{id:"what-comes-next"},"What comes next"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Make the detection module more robust to truncated documents."),Object(a.b)("li",{parentName:"ul"},"Develop and train a custom ",Object(a.b)("strong",{parentName:"li"},"OCR engine")," using Pytorch.")))}u.isMDXComponent=!0},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);