(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,a,t){e.exports=t(11)},11:function(e,a,t){"use strict";t.r(a);var r=t(2),c=t.n(r),n=t(4),s=t(5),l=t(6),i=t(1),m=t(9),o=t(8),h=t(0),d=t.n(h),u=t(7),w=t.n(u),v=(t(17),function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]+" "+e.getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+e.getFullYear()});function E(e){return d.a.createElement("div",{className:"left"},d.a.createElement("div",{className:"location-box"},d.a.createElement("div",{className:"location"},e.weather[1].location),d.a.createElement("div",{className:"date"},v(new Date))),d.a.createElement("div",{className:"weather-box"},d.a.createElement("div",{className:"temp"},e.weather[1].temperature,"\xb0C"),d.a.createElement("div",{className:"weather"},e.weather[1].description)))}function p(e){return d.a.createElement("div",{className:"right"},d.a.createElement("div",{className:"location-box"},d.a.createElement("div",{className:"location"},e.weather[2].location),d.a.createElement("div",{className:"date"},v(new Date))),d.a.createElement("div",{className:"weather-box"},d.a.createElement("div",{className:"temp"},e.weather[2].temperature,"\xb0C"),d.a.createElement("div",{className:"weather"},e.weather[2].description)))}function N(e){return 1===e.weather.length?d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"column middle"},d.a.createElement("div",{className:"location-box"},d.a.createElement("div",{className:"location"},e.weather[0].location),d.a.createElement("div",{className:"date"},v(new Date))),d.a.createElement("div",{className:"weather-box"},d.a.createElement("div",{className:"temp"},e.weather[0].temperature,"\xb0C"),d.a.createElement("div",{className:"weather"},e.weather[0].description)))):2===e.weather.length?d.a.createElement("div",{className:"row"},d.a.createElement(E,{weather:e.weather}),d.a.createElement("div",{className:"column middle"},d.a.createElement("div",{className:"location-box"},d.a.createElement("div",{className:"location"},e.weather[0].location),d.a.createElement("div",{className:"date"},v(new Date))),d.a.createElement("div",{className:"weather-box"},d.a.createElement("div",{className:"temp"},e.weather[0].temperature,"\xb0C"),d.a.createElement("div",{className:"weather"},e.weather[0].description)))):3===e.weather.length?d.a.createElement("div",{className:"row"},d.a.createElement(E,{weather:e.weather}),d.a.createElement("div",{className:"column middle"},d.a.createElement("div",{className:"location-box"},d.a.createElement("div",{className:"location"},e.weather[0].location),d.a.createElement("div",{className:"date"},v(new Date))),d.a.createElement("div",{className:"weather-box"},d.a.createElement("div",{className:"temp"},e.weather[0].temperature,"\xb0C"),d.a.createElement("div",{className:"weather"},e.weather[0].description))),d.a.createElement(p,{weather:e.weather})):void 0}var b=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={input:"",weather:[],showResults:!1},e.handleChange=e.handleChange.bind(Object(i.a)(e)),e.searchCity=e.searchCity.bind(Object(i.a)(e)),e}return Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"searchCity",value:function(){var e=Object(n.a)(c.a.mark((function e(){var a,t,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=this.state.input)){e.next=12;break}return e.next=4,fetch("http://localhost:4000/weather?city=".concat(a));case 4:return t=e.sent,e.next=7,t.json();case 7:r=e.sent,(n=this.state.weather).length<=2?(n.push(r),this.setState({weather:n,showResults:!0})):(n.shift(),n.push(r),this.setState({weather:n,showResults:!0})),e.next=13;break;case 12:alert("Search field empty! Please provide a valid city name.");case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return d.a.createElement("div",{className:"app"},d.a.createElement("main",null,d.a.createElement("div",{className:"Greet"},"Welcome to the coolest weather application!"),d.a.createElement("label",{className:"search-label"},"Check the current weather conditions on a city of your choice!"),d.a.createElement("div",{className:"search-box"},d.a.createElement("input",{type:"text",className:"search-bar",value:this.state.input,onChange:this.handleChange,placeholder:"Search by city name, if you wish..."}),d.a.createElement("button",{className:"search-button",onClick:this.searchCity},d.a.createElement("i",{class:"fa fa-search"}))),d.a.createElement("div",{className:"weathercomp"},this.state.showResults?d.a.createElement(N,{weather:this.state.weather}):null)))}}]),t}(d.a.Component);w.a.render(d.a.createElement(b,null),document.getElementById("root"))},17:function(e,a,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.2840ac37.chunk.js.map