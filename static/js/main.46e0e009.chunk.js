(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),l=t.n(c),m=t(1);function o(e){var a=e.onSearchChange,t=e.value,n=e.onKeyPress;return r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",placeholder:"Enter a city",className:"search-bar",value:t,onChange:a,onKeyPress:n}))}var u=function(e){return"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]," ").concat(e.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]," ").concat(e.getFullYear())};function i(e){var a=e.weather;return r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},a.name," ",a.sys.country),r.a.createElement("div",{className:"date"},u(new Date))))}function s(e){var a=e.weather;return r.a.createElement("div",null,r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"},Math.round(a.main.temp),"\xb0C"),r.a.createElement("div",{className:"weather"},a.weather[0].main),r.a.createElement("div",{className:"more-info"},"Humidity: ",a.main.humidity,r.a.createElement("br",null),"Pressure: ",a.main.pressure)))}function d(e){var a=e.weather;return r.a.createElement(r.a.Fragment,null,"undefined"!=typeof a.main?r.a.createElement("div",null,r.a.createElement(i,{weather:a}),r.a.createElement(s,{weather:a})):r.a.createElement("div",{className:"wrong"},"Wrong name"))}var h=function(){var e="https://api.openweathermap.org/data/2.5/",a="b081d845d97c203d7c96e5cfd9b8fe23",t=Object(n.useState)(""),c=Object(m.a)(t,2),l=c[0],u=c[1],i=Object(n.useState)({}),s=Object(m.a)(i,2),h=s[0],v=s[1];return r.a.createElement("div",{className:"undefined"!=typeof h.main&&h.main.temp>16?"app warm":"app"},r.a.createElement("main",null,r.a.createElement(o,{onSearchChange:function(e){return u(e.target.value)},value:l,onKeyPress:function(t){"Enter"===t.key&&fetch("".concat(e,"weather?q=").concat(l,"&units=metric&APPID=").concat(a)).then((function(e){return e.json()})).then((function(e){v(e),u(""),console.log(e)}))}}),r.a.createElement(d,{weather:h})))};t(9);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.46e0e009.chunk.js.map