(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"* {\n  box-sizing: border-box;\n  font-size: 15px;\n}\n\n#wrapper {\n  margin: 10%;\n  padding: 10px;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-template-rows: 50px 400px;\n}\n\n.box {\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  text-align: center;\n}\n\n#header {\n  padding: 10px;\n  background-color: #bebaac;\n  text-align: center;\n  grid-column: 1 / 4;\n  grid-row: 1;\n  font-size: 20px;\n}\n\n#sidebar {\n  background-color: #bebaac;\n  grid-column: 1;\n  grid-row: 2 / 3;\n  display: flex;\n  flex-direction: column;\n}\n\n#main {\n  background-color: #bebaac;\n  grid-row: 2;\n  grid-column: 2;\n  display: flex;\n  flex-direction: column;\n}\n\n.projects {\n  order: 2;\n  margin: 2%;\n  border: 1px solid rgb(0, 0, 0);\n  background-color: #eceae1;\n  height: 50px\n}\n\n.projects:hover {\n  background-color: #d8d4c2;\n}\n\n#projectBtn {\n  order: 1;\n  align-self: center;\n  width: 30%;\n  height: 15%;\n  margin: 2%;\n  background-color: #d46157;\n  border-radius: 50%;\n  border: 1px solid rgb(8, 6, 6);\n  box-shadow: 0cm;\n  color: #eceae1;\n}\n\n#projectBtn:hover {\n  background-color: #af372c;\n}\n\n#inputPopup{\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  text-align: center;\n  order: 0;\n}",""]);const i=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],d=n.base?c[0]+n.base:c[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var u=a(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:s,updater:b(p,n),references:1}),r.push(s)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function b(e,n){var t,r,o;if(n.singleton){var i=m++;t=f||(f=d(n)),r=u.bind(null,t,i,!1),o=u.bind(null,t,i,!0)}else t=d(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var d=c(e,n),l=0;l<t.length;l++){var s=a(t[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}t=d}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(426);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=(e,n,t)=>{let r=document.createElement("div");return r.id=n,r.className=e,r.innerText=t,r};(function(){const e=document.getElementById("content"),n=o("wrapper","wrapper",""),t=o("box","header","To-do-app"),r=o("box","sidebar",""),i=o("box","main","");e.appendChild(n),n.appendChild(t),n.appendChild(r),n.appendChild(i);const a=((e,n,t)=>{const r=document.createElement("button");return r.className="project",r.id="projectBtn",r.innerText="New Project",r})();r.appendChild(a)})(),((e,n)=>{const t=document.getElementById("sidebar"),r=document.createElement("button");r.className="projects",r.id=e,r.innerText=n,t.appendChild(r)})("sample","Sample Project"),document.getElementById("projectBtn").addEventListener("click",(()=>(()=>{document.createElement("div").id="inputDiv";const e=document.createElement("input");e.setAttribute("type","text"),e.id="inputPopup",e.placeholder="Enter new project name";let n=document.createElement("button");n.setAttribute("type","button"),n.innerText="Submit",n.setAttribute("id","submitButton"),sidebar.appendChild(e),sidebar.appendChild(n)})()))})()})();