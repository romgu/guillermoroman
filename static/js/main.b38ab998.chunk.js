(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(23)},16:function(e,t,a){},2:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(9),i=a.n(r),o=(a(16),a(3)),s=a(4),c=a(6),m=a(5),d=a(7),u=(a(2),function(){return n.a.createElement("nav",{style:{zIndex:"10",top:"0",paddingTop:"1rem",width:"100%",display:"flex",justifyContent:"space-between",fontSize:"2vh"},className:"fixed bg-white pv2"},n.a.createElement("a",{style:{fontFamily:"GilroyExtraBold"},href:"www.google.com",className:"ml4 dib no-underline black b"},"ROMAN"),n.a.createElement("span",{className:"mr4",style:{fontFamily:"Libre Baskerville"}},n.a.createElement("a",{className:".dib no-underline black ph1",href:"www.google.com"},"en."),n.a.createElement("a",{className:".dib no-underline black ph1",href:"www.google.com"},"spa.")))}),h=a(1),E=a.n(h),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).handleScroll=function(t){window.scrollY>=15?e.setState({redBox:"expandRedBox",hello:"helloFinal",show:!1,show2:!1,show3:!1,show4:!0,grayBox:"finalGrayBox"}):window.scrollY<=15&&e.setState({redBox:"initialRedBox",hello:"helloInitial",show:!0,show2:!0,show3:!0,show4:!1,grayBox:"initialGrayBox"})},e.state={show:!1,show2:!1,show3:!1,show4:!1,redBox:"initialRedBox",hello:"helloInitial",grayBox:"initialGrayBox"},e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({show:!0})},200),setTimeout(function(){e.setState({show2:!0})},500),setTimeout(function(){e.setState({show3:!0})},1e3),window.addEventListener("scroll",this.handleScroll,{pasive:!0})}},{key:"render",value:function(){return n.a.createElement("div",{style:{backgroundColor:"#f4f4f4"}},n.a.createElement("div",{className:this.state.hello},n.a.createElement("h1",null,n.a.createElement(E.a,{show:this.state.show},"HE"),n.a.createElement(E.a,{style:{display:"inline"},show:this.state.show2},"LLO"),n.a.createElement(E.a,{style:{display:"inline"},className:"light-red",show:this.state.show3},"."))),n.a.createElement("div",{id:"gray",className:this.state.grayBox},n.a.createElement("div",{id:"skills",style:{margin:"0 auto",width:"80%",height:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",placeItems:"space-between space-between",gridTemplateRows:"1fr 1fr",gridColumnGap:"20px",gridRowGap:"20px"}},n.a.createElement("div",{id:"skills1"},n.a.createElement("h3",null,"Front-End"),n.a.createElement("p",null,"HTML5 & CSS3",n.a.createElement("br",null),"JavaScript",n.a.createElement("br",null),"React",n.a.createElement("br",null),"UI & UX",n.a.createElement("br",null))),n.a.createElement("div",{id:"skills2"},n.a.createElement("h3",null,"Back-End"),n.a.createElement("p",null,"Node.js",n.a.createElement("br",null),"Express.js",n.a.createElement("br",null),"MongoDB",n.a.createElement("br",null),"Postman",n.a.createElement("br",null))),n.a.createElement("div",{id:"skills3"},n.a.createElement("h3",null,"Design"),n.a.createElement("p",null,"Adobe Photoshop",n.a.createElement("br",null),"Adobe Illustrator",n.a.createElement("br",null),"Traditional Mediums",n.a.createElement("br",null),"Digital Photography",n.a.createElement("br",null))),n.a.createElement("div",{id:"skills4"},n.a.createElement("h3",null,"Others"),n.a.createElement("p",null,"Git",n.a.createElement("br",null),"Unit Testing",n.a.createElement("br",null),"Agile Methodologies",n.a.createElement("br",null),"Responsive Design",n.a.createElement("br",null))))),n.a.createElement("div",{className:"welcomeMessage"},n.a.createElement(E.a,{show:this.state.show4},"I'm a"),n.a.createElement(E.a,{className:"near-white",show:this.state.show4},"Web Developer")),n.a.createElement("div",{id:"red",className:this.state.redBox}))}}]),t}(l.Component),p=function(){return n.a.createElement("div",{id:"parallaxAbout",style:{width:"100%",marginTop:"-10px"}},n.a.createElement("div",{className:"boxAbout"},n.a.createElement("h2",{style:{padding:"0 0rem 0 3rem"},className:"light-red"},"Hi, I\u2019m Guillermo Roman.",n.a.createElement("br",null),"A web developer based ",n.a.createElement("br",null)," in Buenos Aires, Argentina."),n.a.createElement("p",{style:{marginRight:"30%",padding:"0 0rem 0 3rem"},className:"aboutParagraph"},"Interested in working",n.a.createElement("br",null)," together? Let\u2019s have a talk."),n.a.createElement("div",{style:{padding:"0 0rem 2rem 3rem"},className:"aboutParagraph"},n.a.createElement("dt",{style:{float:"left",width:"5%"}},"e"),n.a.createElement("dd",null,n.a.createElement("a",{href:"mailto:gmarca20@gmail.com",className:"no-underline light-red"},"gmarca20@gmail.com")),n.a.createElement("dt",{style:{float:"left",width:"5%"}},"p"),n.a.createElement("dd",null,"0054 911 3257 9584")),n.a.createElement("div",{style:{padding:"0 0rem 2rem 3rem"},className:"aboutParagraph"},"Ciudad Aut\xf3noma de Buenos Aires",n.a.createElement("br",null),"Constituci\xf3n 2243")))},g=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(u,null),n.a.createElement("div",{style:{maxWidth:"90%",marginLeft:"auto",marginRight:"auto"}},n.a.createElement(w,null),n.a.createElement(p,null)))}}]),t}(l.Component);a(22),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.b38ab998.chunk.js.map