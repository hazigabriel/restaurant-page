!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){let e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h4"),o=document.createElement("ul"),r=document.createElement("div");e.setAttribute("class","nav"),t.setAttribute("class","nav-logo"),n.textContent="Logo",o.setAttribute("class","nav-links"),r.setAttribute("class","mobile-menu"),l.appendChild(e),e.appendChild(t),t.appendChild(n),e.appendChild(o),e.appendChild(r);for(let e=0;e<4;e++){let t=document.createElement("li"),n=document.createElement("a");0==e?(o.appendChild(t),n.textContent="Home",n.href="#",t.appendChild(n)):1==e?(o.appendChild(t),n.textContent="About",n.href="#",t.appendChild(n)):2==e?(o.appendChild(t),n.textContent="Menu",n.href="#",t.appendChild(n)):(o.appendChild(t),n.textContent="Contact",n.href="#",t.appendChild(n))}for(let e=1;e<4;e++){let t=document.createElement("div");t.setAttribute("class","line"+e),r.appendChild(t)}(()=>{const e=document.querySelector(".mobile-menu"),t=document.querySelector(".nav-links"),n=document.querySelectorAll(".nav-links li");e.addEventListener("click",()=>{t.classList.toggle("nav-active"),n.forEach((e,t)=>{e.style.animation="navLinkFade 0.5s ease forwards"}),e.classList.toggle("toggle")})})()};let l=document.querySelector("#content");var r=function(){let e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h2"),o=document.createElement("div"),l=document.createElement("p");e.setAttribute("class","home-page"),t.setAttribute("class","home-page-img"),o.setAttribute("class","home-page-content"),n.textContent="La Gelateria",l.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",i.appendChild(e),e.appendChild(t),t.appendChild(n),e.appendChild(o),o.appendChild(l)};let i=document.querySelector("#content");o(),r()}]);