(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a(276)},117:function(e,t,a){},119:function(e,t,a){},276:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),i=a.n(l),c=(a(117),a(9)),s=a(10),o=a(13),m=a(11),d=a(14),u=(a(119),a(12)),g=a(111),h=a.n(g),p=a(3),E=a.n(p),b=a(27),y=a.n(b),f={title:{textAlign:"center",marginTop:"25vh"},divid:{marginTop:20}},v=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{id:"container",container:!0,direction:"column",alignItems:"stretch",justify:"space-between",style:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)"}},r.a.createElement(E.a,{id:"fw0",item:!0,xs:12,style:f.title},"Ahmed Aljasim",r.a.createElement(y.a,{className:"divid",style:f.divid})))}}]),t}(n.Component),x=a(20),w=a.n(x),S=a(25),C=a.n(S),j=a(6),O=a.n(j),k={title1:{textAlign:"center"},card1:{marginTop:24,textAlign:"center"},title:{fontSize:14}},A=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(E.a,{id:"container",container:!0,direction:"row",alignItems:"center",justify:"space-around",style:{marginTop:24}},r.a.createElement(E.a,{id:"fw1",item:!0,xl:3,lg:3,md:4,sm:11,xs:11,style:k.title1},"About me",r.a.createElement(y.a,null),r.a.createElement(w.a,{className:e.card1},r.a.createElement(C.a,null,r.a.createElement(O.a,{className:e.title,color:"textSecondary"},"Birthday"),r.a.createElement(O.a,{variant:"subtitle1",component:"h2",gutterBottom:!0},"1st January 1992 \u2022 Riyadh"),r.a.createElement(O.a,{className:e.title,color:"textSecondary"},"Marital Status"),r.a.createElement(O.a,{variant:"subtitle1",component:"h2",gutterBottom:!0},"Single"),r.a.createElement(O.a,{className:e.title,color:"textSecondary"},"Nationality"),r.a.createElement(O.a,{variant:"subtitle1",component:"h2",gutterBottom:!0},"Syria")))))}}]),t}(n.Component),T=Object(u.withStyles)(k)(A),N=a(26),B=a.n(N),z=a(51),I=a.n(z),R=a(30),L=a.n(R),M=a(42),P=a.n(M),H=a(41),J=a.n(H),D=a(52),G=a.n(D),U=a(54),V=a.n(U),W=a(53),F=a.n(W),K=a(31),q=a.n(K),X=[{label:"Graduation Certificate",imgPath:"./img/grad.png"},{label:"1st Class Honor Certificate",imgPath:"./img/honor.png"}],Y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={activeStep:0,open:!1},a.handleNext=function(){return a.setState({activeStep:1})},a.handleBack=function(){return a.setState({activeStep:0})},a.handleClickOpen=function(){return a.setState({open:!0})},a.handleClose=function(){return a.setState({open:!1})},a.handleChangeIndex=function(e){return a.setState({activeStep:e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.theme,n=this.state.activeStep;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{style:{padding:20,fontSize:25,cursor:"default"}},X[n].label),r.a.createElement(q.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:this.state.activeStep,onChangeIndex:this.handleChangeIndex,resistance:!0},r.a.createElement("img",{className:t.img,src:X[0].imgPath,alt:X[0].label,onClick:this.handleClickOpen}),r.a.createElement("img",{className:t.img,src:X[1].imgPath,alt:X[1].label,onClick:this.handleClickOpen})),r.a.createElement(I.a,{steps:2,position:"static",activeStep:n,className:t.mobileStepper,nextButton:r.a.createElement(L.a,{size:"small",onClick:this.handleNext,disabled:1===n},"Next",r.a.createElement(J.a,null)),backButton:r.a.createElement(L.a,{size:"small",onClick:this.handleBack,disabled:0===n},r.a.createElement(P.a,null),"Back")}),r.a.createElement(G.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(F.a,{style:{padding:8,paddingBottom:0}},r.a.createElement("img",{src:X[n].imgPath,alt:X[n].label,width:"100%"})),r.a.createElement(V.a,{style:{marginTop:4}},r.a.createElement(L.a,{onClick:this.handleClose,color:"primary"},"Close"))))}}]),t}(r.a.Component),$=Object(u.withStyles)(function(e){return{root:{flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:2*e.spacing.unit,backgroundColor:"white"},img:{height:"100%",overflow:"hidden",display:"block",width:"100%",cursor:"zoom-in"}}},{withTheme:!0})(Y),_=a(55),Q=a.n(_),Z=a(24),ee=a.n(Z);function te(e){var t=e.children,a=e.dir;return r.a.createElement(O.a,{component:"div",dir:a,style:{padding:24}},t)}var ae=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a.handleChangeIndex=function(e){a.setState({value:e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.theme;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{style:{padding:20,fontSize:25,cursor:"default"}},"Advanced Courses"),r.a.createElement(Q.a,{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",scrollable:!0,scrollButtons:"on"},r.a.createElement(ee.a,{label:"EE405",classes:{root:t.tabRoot}}),r.a.createElement(ee.a,{label:"EE450",classes:{root:t.tabRoot}}),r.a.createElement(ee.a,{label:"EE458",classes:{root:t.tabRoot}}),r.a.createElement(ee.a,{label:"EE480",classes:{root:t.tabRoot}})),r.a.createElement(q.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:this.state.value,onChangeIndex:this.handleChangeIndex,resistance:!0},r.a.createElement(te,{dir:a.direction},r.a.createElement("span",{style:{fontSize:17}},"VLSI Circuit Design"),r.a.createElement("br",null),r.a.createElement("br",null),"Back in the 1960s, it was not possible to put more than a few thousands of transistors in a single piece of silicon called an integrated circuit or IC. As technology advances and manufacturing process got pretty sophisticated, it became possible to put billions of transistors in the same piece of silicon."),r.a.createElement(te,{dir:a.direction},r.a.createElement("span",{style:{fontSize:17}},"Computer Architecture"),r.a.createElement("br",null),r.a.createElement("br",null),"Computers come in many different ways but regardless of that they almost all operate in the same way."),r.a.createElement(te,{dir:a.direction},r.a.createElement("span",{style:{fontSize:17}},"Advanced Logic Design"),r.a.createElement("br",null),r.a.createElement("br",null),"Circuit design could be done at different level of abstration. One of these abstration is the RTL or Register Transfer Level. Engineers use FPGAs or Field Programmable Gate Array to write any custom logic. FPGAs are great tools for prototyping due to their high flexiblity and computation capability."),r.a.createElement(te,{dir:a.direction},r.a.createElement("span",{style:{fontSize:17}},"Artificial Intelligence"),r.a.createElement("br",null),r.a.createElement("br",null),"Machines are stupid. They do whatever they are programmed to do. However, one could program them in a way such that they could learn and make decisions on their own. The topics covered in this course are neural network, fuzzy logic and genetic algorithms.")))}}]),t}(r.a.Component),ne=Object(u.withStyles)(function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"},tabRoot:{minWidth:40}}},{withTheme:!0})(ae),re={page:{},pageTitle:{textAlign:"center"},rightGrid:{marginTop:24},leftCard:{marginTop:24},zz:{marginTop:24}},le=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=r.a.createElement(E.a,{item:!0,xl:5,lg:5,md:5,sm:12,xs:12},r.a.createElement(w.a,null,r.a.createElement($,null)));return r.a.createElement(E.a,{id:"container",container:!0,direction:"row",alignItems:"center",justify:"space-around",className:e.page},r.a.createElement(B.a,{smDown:!0},r.a.createElement(E.a,{item:!0,xs:"auto"})),r.a.createElement(E.a,{id:"fw2",item:!0,xl:3,lg:3,md:4,sm:11,xs:11,className:e.pageTitle,style:re.zz},"Education",r.a.createElement(y.a,null),r.a.createElement(w.a,{className:e.leftCard},r.a.createElement(C.a,{style:{textAlign:"center"}},r.a.createElement("img",{src:"./img/ksu.jpg",alt:"KSU",width:"128",id:"imgEdu"}),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(O.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"King Saud University \u2022 Riyadh \u2022 2010 - 2015"),r.a.createElement(O.a,{variant:"subtitle1",component:"h2",gutterBottom:!0},"BSc in Electrical Engineering",r.a.createElement("br",null),"Automation and Intelligent Systems"))))),r.a.createElement(E.a,{item:!0,xl:6,lg:6,md:6,sm:11,xs:11,style:re.rightGrid},r.a.createElement(E.a,{container:!0,direction:"row",alignItems:"flex-end",justify:"flex-start",spacing:24},r.a.createElement(E.a,{item:!0,xl:6,lg:6,md:7,sm:12,xs:12},r.a.createElement(w.a,null,r.a.createElement(ne,null))),r.a.createElement(B.a,{smDown:!0},t),r.a.createElement(E.a,{item:!0,xl:11,lg:11,md:12,sm:12,xs:12},r.a.createElement(w.a,null,r.a.createElement(C.a,null,r.a.createElement("div",{style:{paddingBottom:10,fontSize:25,cursor:"default"}},"Graduation Project"),r.a.createElement(O.a,{variant:"subtitle1",component:"h2",gutterBottom:!0},"Design and Manufacturing of a Mobile Serving Robot"),r.a.createElement(O.a,{gutterBottom:!0},"A multidisciplinary project between EEs and MEs students. The final prototype was a robot that is able to serve coffee on two manipulator arms, uses sensors to avoid obstacles, greets customers using a recorded speech, and uses ",r.a.createElement("a",{style:{color:"black"},target:"_blank",href:"https://www.festo-didactic.com/int-en/services/robotino/"},"Robotino")," as a platform for controling the whole assembly and as a means of mobility.")))),r.a.createElement(B.a,{mdUp:!0},t))))}}]),t}(n.Component),ie=Object(u.withStyles)(re)(le),ce=[{label:"A Day at Work",imgPath:"./img/44.jpg"},{label:"Oops...",imgPath:"./img/2.jpg"},{label:"Certificate",imgPath:"./img/x.png"}],se=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={activeStep:0,open:!1},a.handleNext=function(){a.setState(function(e){return{activeStep:e.activeStep+1}})},a.handleBack=function(){a.setState(function(e){return{activeStep:e.activeStep-1}})},a.handleClickOpen=function(){return a.setState({open:!0})},a.handleClose=function(){return a.setState({open:!1})},a.handleChangeIndex=function(e){return a.setState({activeStep:e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.theme,n=this.state.activeStep,l=ce.length;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{style:{padding:20,fontSize:25,cursor:"default"}},ce[n].label),r.a.createElement(q.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:this.state.activeStep,onChangeIndex:this.handleChangeIndex,resistance:!0},r.a.createElement("img",{className:t.img,src:ce[0].imgPath,alt:ce[0].label,onClick:this.handleClickOpen}),r.a.createElement("img",{className:t.img,src:ce[1].imgPath,alt:ce[1].label,onClick:this.handleClickOpen}),r.a.createElement("img",{className:t.img,src:ce[2].imgPath,alt:ce[2].label,onClick:this.handleClickOpen})),r.a.createElement(I.a,{steps:l,position:"static",activeStep:n,className:t.mobileStepper,nextButton:r.a.createElement(L.a,{size:"small",onClick:this.handleNext,disabled:n===l-1},"Next","rtl"===a.direction?r.a.createElement(P.a,null):r.a.createElement(J.a,null)),backButton:r.a.createElement(L.a,{size:"small",onClick:this.handleBack,disabled:0===n},"rtl"===a.direction?r.a.createElement(J.a,null):r.a.createElement(P.a,null),"Back")}),r.a.createElement(G.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(F.a,{style:{padding:8,paddingBottom:0}},r.a.createElement("img",{src:ce[n].imgPath,alt:ce[n].label,width:"100%"})),r.a.createElement(V.a,{style:{marginTop:4}},r.a.createElement(L.a,{onClick:this.handleClose,color:"primary"},"Close"))))}}]),t}(r.a.Component),oe=Object(u.withStyles)(function(e){return{root:{flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:2*e.spacing.unit,backgroundColor:"white"},img:{maxHeight:300,overflow:"hidden",display:"block",width:"100%",cursor:"zoom-in"}}},{withTheme:!0})(se),me={page:{},pageTitle:{textAlign:"center"},rightGrid:{marginTop:24},leftCard:{marginTop:24},zz:{marginTop:128}},de=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=r.a.createElement(C.a,{style:{textAlign:"left"}},r.a.createElement("div",{style:{paddingBottom:10,fontSize:25,cursor:"default"}},"Job Duties"),r.a.createElement(O.a,{gutterBottom:!0},"1- Understanding business technical requirements, and searching for the best suitable supplier and solution.",r.a.createElement("br",null),"2- Effectively communicatng with hardware suppliers & manufacturers for telematics devices procurement.",r.a.createElement("br",null),"3- Working on designing and customizing the hardware and solutions closely with the suppliers, to fit customer requirements.",r.a.createElement("br",null),"4- Testng the new telematics devices and validatng the technical aspects of the solutions.",r.a.createElement("br",null),"5- Worked with the product team on developing a new telematics consumer product.",r.a.createElement("br",null),"6- Supportng R&D team with the debugging, testing and validating telematics products on the hardware, communicaton, and web platorm layers.")),a=r.a.createElement(E.a,{item:!0,xl:6,lg:6,md:6,sm:12,xs:12},r.a.createElement(w.a,null,r.a.createElement(oe,null)));return r.a.createElement(E.a,{id:"container",container:!0,direction:"row",alignItems:"center",justify:"space-around",className:e.page},r.a.createElement(E.a,{item:!0,xl:8,lg:8,md:8,sm:11,xs:11},r.a.createElement(E.a,{container:!0,direction:"row",alignItems:"flex-end",justify:"center",spacing:24},r.a.createElement(B.a,{smDown:!0},a),r.a.createElement(E.a,{id:"fw3",item:!0,xl:6,lg:6,md:6,sm:12,xs:12,className:e.pageTitle,style:me.zz},"Experience",r.a.createElement(y.a,null),r.a.createElement(w.a,{className:e.leftCard},r.a.createElement(C.a,{style:{textAlign:"center"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"./img/mt.png",alt:"MT",width:"128",id:"imgExp"})),r.a.createElement(O.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"MachinesTalk \u2022 Riyadh \u2022 2015 - 2017"),r.a.createElement(O.a,{variant:"subtitle1",component:"h2",gutterBottom:!0},"Product Manager")))),r.a.createElement(E.a,{item:!0,md:12,xs:12},r.a.createElement(w.a,null,t)),r.a.createElement(B.a,{mdUp:!0},a))))}}]),t}(n.Component),ue=Object(u.withStyles)(me)(de),ge=a(110),he=a.n(ge),pe=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.text,n=e.score;return r.a.createElement(E.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,xl:3,lg:3,md:4,sm:2,xs:5},r.a.createElement(O.a,{variant:"subtitle1",component:"h2",gutterBottom:!0,style:{textAlign:"right",marginRight:15}},a)),r.a.createElement(E.a,{item:!0,xl:6,lg:6,md:5,sm:5,xs:7},r.a.createElement(he.a,{classes:{container:t.slider},value:n,disabled:!0})))}}]),t}(n.Component),Ee=Object(u.withStyles)({slider:{padding:"8px 0px",cursor:"default"}})(pe);function be(e){var t=e.children,a=e.dir;return r.a.createElement(O.a,{component:"div",dir:a,style:{padding:24}},t)}var ye=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a.handleChangeIndex=function(e){a.setState({value:e})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.theme;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{style:{padding:20,fontSize:25,cursor:"default"}},"What is... ?"),r.a.createElement(Q.a,{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",scrollable:!0,scrollButtons:"on",style:{overflow:"hidden"}},r.a.createElement(ee.a,{label:"HTML",classes:{root:t.tabRoot}}),r.a.createElement(ee.a,{label:"CSS",classes:{root:t.tabRoot}}),r.a.createElement(ee.a,{label:"JavaScript",classes:{root:t.tabRoot}}),r.a.createElement(ee.a,{label:"Express",classes:{root:t.tabRoot}}),r.a.createElement(ee.a,{label:"React",classes:{root:t.tabRoot}}),r.a.createElement(ee.a,{label:"Git",classes:{root:t.tabRoot}}),r.a.createElement(ee.a,{label:"C++",classes:{root:t.tabRoot}}),r.a.createElement(ee.a,{label:"MATLAB",classes:{root:t.tabRoot}}),r.a.createElement(ee.a,{label:"VHDL",classes:{root:t.tabRoot}})),r.a.createElement(q.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:this.state.value,onChangeIndex:this.handleChangeIndex,resistance:!0},r.a.createElement(be,{dir:a.direction},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"./img/lang/html.png",alt:"HTML",width:"64"})),r.a.createElement("br",null),"HTML or Hyper Text Markup Language is the standard language used to write content and specify structure in web pages. The latest version is HTML5."),r.a.createElement(be,{dir:a.direction},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"./img/lang/css.png",alt:"CSS",width:"64"})),r.a.createElement("br",null),"CSS stands for Cascading Style Sheets. It is used to style web pages. CSS is also used to animate HTML elements. However, due to its basic animation capability, most developers use JavaScript (e.g. Jquery) to handle animation."),r.a.createElement(be,{dir:a.direction},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"./img/lang/js.png",alt:"JS",width:"64"})),r.a.createElement("br",null),"JavaScript is not Java. Everything in JavaScript is an object. It could be used in any type of programming. However, most people use it in web development. It is dynamically typed language which means data types are associated with values not variables and the same variable could hold multiple types. One of the biggest feature in JavaScript is the eco-system and the support built around it."),r.a.createElement(be,{dir:a.direction},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"./img/lang/express.png",alt:"Express",width:"64"})),r.a.createElement("br",null),"Express is an open source framework built on top of NodeJS. The latter is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is designed for building web applications and APIs."),r.a.createElement(be,{dir:a.direction},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"./img/lang/react.png",alt:"React",width:"64"})),r.a.createElement("br",null),"React is an open source library made by Facebook to create powerful Ui using JavaScript. React uses JSX to write HTML elements inside a JavaScript file. Everything in React is a component. Components have a state and could pass props to other components. React is usually used with a state manager (e.g. Redux) because things get pretty complexe in larger projects."),r.a.createElement(be,{dir:a.direction},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"./img/lang/git.png",alt:"Git",width:"64"})),r.a.createElement("br",null),"Git is an open source distributed version control system. This means you could track your progress and create multiple versions of your project. Also, Git allows you and your team to collaborate and work on the same project using different branches and merge them to the master branch if they are bug free."),r.a.createElement(be,{dir:a.direction},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"./img/lang/c++.png",alt:"C++",width:"64"})),r.a.createElement("br",null),"C++ is OOP or object orinted programming langauge. Unlike JavaScript, it is statically typed langauge."),r.a.createElement(be,{dir:a.direction},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"./img/lang/matlab.gif",alt:"MATLAB",width:"64"})),r.a.createElement("br",null),"MATLAB is a software or rather a platform that uses its own language and syntax. Engineers use it due to its high computational capability. Evereything in MATLAB is a matrix."),r.a.createElement(be,{dir:a.direction},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"./img/lang/vhdl.png",alt:"VHDL",width:"64"})),r.a.createElement("br",null),"VHDL stands for Very High Speed Integrated Circuit - Hardware Description Language. It is used to program electronic devices such as FPGAs. The code is executed in parallel (not concurrent) which means the whole code is executed all at once unless if you told it to run sequentially. VHDL allows you to specify timing specs regardless of the target hardware. These features are not supported in high level langauges such as C++.")))}}]),t}(r.a.Component),fe=Object(u.withStyles)(function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"},tabRoot:{minWidth:40}}},{withTheme:!0})(ye),ve={title1:{textAlign:"center",marginTop:128},card:{marginTop:24,textAlign:"left"},card1:{marginTop:24,textAlign:"left"}},xe=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(E.a,{id:"container",container:!0,direction:"row",alignItems:"center",justify:"space-around",style:{marginBottom:128}},r.a.createElement(B.a,{smDown:!0},r.a.createElement(E.a,{item:!0,xs:"auto"})),r.a.createElement(E.a,{id:"fw4",item:!0,xl:4,lg:4,md:4,sm:11,xs:11,style:ve.title1},"Programming Skills",r.a.createElement(y.a,null),r.a.createElement(w.a,{className:e.card1},r.a.createElement(C.a,null,r.a.createElement(Ee,{text:"HTML",score:90}),r.a.createElement(Ee,{text:"CSS",score:75}),r.a.createElement(Ee,{text:"JavaScript",score:95}),r.a.createElement(Ee,{text:"Express",score:90}),r.a.createElement(Ee,{text:"React",score:95}),r.a.createElement(Ee,{text:"Git",score:96}),r.a.createElement(Ee,{text:"C++",score:70}),r.a.createElement(Ee,{text:"MATLAB",score:80}),r.a.createElement(Ee,{text:"VHDL",score:85})))),r.a.createElement(E.a,{item:!0,xl:4,lg:4,md:4,sm:11,xs:11},r.a.createElement(E.a,{container:!0,direction:"column",justify:"center"},r.a.createElement(E.a,{item:!0,md:"auto",xs:12},r.a.createElement(w.a,{className:e.card},r.a.createElement(fe,null))))),r.a.createElement(B.a,{smDown:!0},r.a.createElement(E.a,{item:!0,xs:"auto"}))),r.a.createElement(O.a,{style:{textAlign:"center",marginBottom:8}},"Ahmed Aljasim \xa9 ",(new Date).getFullYear()))}}]),t}(n.Component),we=Object(u.withStyles)(ve)(xe),Se={page:{borderBottom:"1px solid rgba(0, 0, 0, 0.12)",marginTop:24},pageTitle:{textAlign:"center"},rightGrid:{},leftCard:{marginTop:24},zz:{}},Ce=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={w:window.innerWidth},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=r.a.createElement(E.a,{item:!0,xl:3,lg:3,md:3,sm:11,xs:11,className:e.pageTitle,style:Se.zz},r.a.createElement(w.a,{className:e.leftCard},r.a.createElement(C.a,{style:{textAlign:"center"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(O.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"King Saud University \u2022 Riyadh \u2022 2010 - 2015")))));return r.a.createElement(E.a,{id:"container",container:!0,direction:"row",alignItems:"center",justify:"space-around",className:e.page},r.a.createElement(B.a,{smDown:!0},t),r.a.createElement(E.a,{id:"fw5",item:!0,xl:4,lg:4,md:4,sm:11,xs:11,className:e.pageTitle,style:Se.zz},"Projects",r.a.createElement(y.a,null),r.a.createElement(w.a,{className:e.leftCard},r.a.createElement(C.a,{style:{textAlign:"center"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(O.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"King Saud University \u2022 Riyadh \u2022 2010 - 2015"))))),r.a.createElement(B.a,{mdUp:!0},t),r.a.createElement(E.a,{item:!0,xl:3,lg:3,md:3,sm:11,xs:11,className:e.pageTitle,style:Se.zz},r.a.createElement(w.a,{className:e.leftCard},r.a.createElement(C.a,{style:{textAlign:"center"}},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(O.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"King Saud University \u2022 Riyadh \u2022 2010 - 2015"))))))}}]),t}(n.Component),je=(Object(u.withStyles)(Se)(Ce),Object(u.createMuiTheme)({palette:{primary:{main:"#000000"},secondary:{main:"#66bb6a"}},typography:{useNextVariants:!0}})),Oe=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(u.MuiThemeProvider,{theme:je},r.a.createElement(h.a,null),r.a.createElement(v,null),r.a.createElement(T,null),r.a.createElement(ie,null),r.a.createElement(ue,null),r.a.createElement(we,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[112,2,1]]]);
//# sourceMappingURL=main.eeedf2c2.chunk.js.map