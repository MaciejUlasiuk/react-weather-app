(this["webpackJsonpreact-api-weatherapp"]=this["webpackJsonpreact-api-weatherapp"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(3),s=n.n(c),r=(n(12),n(4)),m=n(5),o=n(7),l=n(6),j=(n(13),n(0)),h=function(e){var t=e.state,n=t.date,a=t.temp,i=t.mintemp,c=t.maxtemp,s=t.wind,r=t.icon,m=t.feelstemp,o=t.flag,l=t.city,h=null;return o?h=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("h2",{className:"h2",children:[l," ",a," \xb0 C ",Object(j.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(r,".png"),alt:r})," "]}),Object(j.jsxs)("p",{children:["Data: ",Object(j.jsx)("strong",{children:n})]}),Object(j.jsxs)("p",{children:["Feels like: ",Object(j.jsxs)("strong",{children:[m,"\xb0 C "]})]}),Object(j.jsxs)("p",{children:["Minimum temp: ",Object(j.jsxs)("strong",{children:[i,"\xb0 C "]})]}),Object(j.jsxs)("p",{children:["Maximum temp: ",Object(j.jsxs)("strong",{children:[c,"\xb0 C "]})]}),Object(j.jsxs)("p",{children:["Wind speed: ",Object(j.jsxs)("strong",{children:[s," km/h "]})]})]}):o||l?!o&&l&&(h=Object(j.jsx)("h1",{children:"W naszej bazie nie ma takiego miasta"})):h=Object(j.jsx)("h1",{children:"Wyszukaj miasto!"}),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("main",{}),Object(j.jsxs)("div",{className:"diw",children:[Object(j.jsxs)("form",{onSubmit:e.handleFormSubmit,children:[Object(j.jsx)("input",{type:"text",value:e.value,onChange:e.inputValue})," ",Object(j.jsx)("button",{children:"Wyszukaj"})]}),h]})]})},p=n.p+"static/media/26383.1ce9d26f.jpg",d=n.p+"static/media/123.b7b214fc.jpg",u=n.p+"static/media/1233.a03ea056.jpg",b=n.p+"static/media/img123.b4cbcc1a.jpeg",g=n.p+"static/media/124.fab28aa5.jpg",f=function(e){var t=[p,d,u,b,g];return Object(j.jsx)("header",{children:Object(j.jsx)("img",{className:"topimg",src:t[e.randomImg],alt:t[e.randomImg]})})},x="c550b7f474f5d32909b78d75101019c3",O=[0,1,2,3,4],v=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={value:"",temp:"",wind:"",clouds:"",icon:"",flag:!1,mintemp:"",maxtemp:"",feelstemp:"",city:"",date:"",randomImg:0},e.handleInputChange=function(t){e.setState({value:t.target.value})},e.handleFormSubmit=function(t){t.preventDefault();var n="https://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.value,"&appid=").concat(x,"&units=metric");fetch(n).then((function(t){if(t.ok)return e.setState({flag:!0}),t;throw e.setState({flag:!1}),Error("W naszej bazie nie znalezlismy takiego miasta!")})).then((function(e){return e.json()})).then((function(t){return e.setState({temp:t.main.temp,wind:t.wind.speed,icon:t.weather[0].icon,mintemp:t.main.temp_min,maxtemp:t.main.temp_max,feelstemp:t.main.feels_like,city:t.name,date:(new Date).toLocaleString(),randomImg:Math.floor(Math.random()*O.length)})})).catch((function(e){return console.log(e)}))},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{randomImg:this.state.randomImg}),Object(j.jsx)(h,{inputValue:this.handleInputChange,value:this.state.value,state:this.state,handleFormSubmit:this.handleFormSubmit})]})}}]),n}(a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),w()}},[[15,1,2]]]);
//# sourceMappingURL=main.25e5f9cc.chunk.js.map