parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=t(n))){var e=0,r=function(){};return{s:r,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,a=!0,c=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var n=o.next();return a=n.done,n},e:function(n){c=!0,i=n},f:function(){try{a||null==o.return||o.return()}finally{if(c)throw i}}}}function t(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}var r="https://mate-academy.github.io/phone-catalogue-static/api/",o=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("".concat(r,"phones").concat(n,".json")).then(function(n){if(n.ok)return n.json()})},i=function(){return o().then(function(n){return Promise.race(n.map(function(n){return new Promise(function(t){return t(o("/".concat(n.id)))})}))})},a=function(){return o().then(function(n){return Promise.allSettled(n.map(function(n){return new Promise(function(t){return t(o("/".concat(n.id)))})}))}).then(function(n){return n.filter(function(n){return"fulfilled"===n.status})}).then(function(n){return n.map(function(n){return n.value})})};i().then(function(n){var t=document.createElement("div");t.classList.add("first-received"),t.insertAdjacentHTML("afterbegin","\n      <h3>First Received</h3>\n      <ul>\n        <li>".concat(JSON.stringify(n),"</li>\n      </ul>\n    ")),document.body.append(t)}),a().then(function(t){var e=document.createElement("div");e.classList.add("all-successful"),e.insertAdjacentHTML("afterbegin","\n      <h3>All Successful</h3>\n    ");var r,o=document.createElement("ul"),i=n(t);try{for(i.s();!(r=i.n()).done;){var a=r.value;o.insertAdjacentHTML("afterbegin","\n          <li>\n            <h4>".concat(a.id.toUpperCase(),"</h4>\n            <p>").concat(JSON.stringify(a),"</p>\n          </li>\n     "))}}catch(c){i.e(c)}finally{i.f()}e.append(o),document.body.append(e)});var c=function(){return Promise.all([i(),i(),i()])};c().then(function(n){var t=document.createElement("div");t.insertAdjacentHTML("afterbegin","\n      <h3>Three were received</h3>\n    "),document.body.append(t)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.2785705e.js.map