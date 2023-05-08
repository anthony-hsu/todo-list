(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"body {\n    font-family: 'Courier New', Courier, monospace;\n}\n\na {\n    text-decoration: none;\n}\n\nul {\n    background-color: teal;\n    list-style-type: none;\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    float: left;\n}\n\n.dropdown:hover {\n    background-color: blue;\n    cursor: pointer;\n}\n\nli a, .dropbtn {\n    display: inline-block;\n    color: white;\n    padding: 14px 20px;\n    text-align: center;\n}\n\n#menu-home {\n    font-weight: bold;\n}\n\n.dropdown {\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: grey;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n\n.dropdown-content a {\n    display: block;\n    text-align: left;\n}\n\n.dropdown-content a:hover {\n    background-color: lightblue;\n    cursor: pointer;\n}\n\n#container {\n    padding: 5rem 3rem;\n    text-align: center;\n    align-content: center;\n}\n\n.todoItem {\n    box-shadow: 2px 2px 2px 0px grey;\n    border-width: 1px;\n    border-color: black;\n    border-style: solid;\n    background-color: beige;\n}\n\n.modal {\n    position: absolute;\n    background-color: white;\n    padding: 20px;\n    text-align: center;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    border-width: 1px;\n    border-color: black;\n    border-style: solid;\n    box-shadow: 2px 2px 2px 0 gray;\n}\n\n#overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    opacity: 70%;\n}\n\n.hidden {\n    display: none;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=class{constructor(n){this.title=n,this.todoItems=[]}addTodoItem=n=>{this.todoItems.push(n)}},v=class{constructor(n,e,t,o){this.title=n,this.description=e,this.dueDate=t,this.priority=o}},y=n=>{const e=document.getElementById("container");e.replaceChildren();const t=document.createElement("h1");t.innerHTML=n.title,e.appendChild(t),n.todoItems.forEach((n=>{const t=document.createElement("div"),o=document.createElement("h3"),r=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p");o.innerHTML=n.title,t.appendChild(o),r.innerHTML=`Description: ${n.description}`,t.appendChild(r),a.innerHTML=`Due Date: ${n.dueDate}`,t.appendChild(a),i.innerHTML=`Priority: ${n.priority}`,t.appendChild(i),t.classList.add("todoItem"),e.appendChild(t),e.appendChild(document.createElement("br"))}))},g=[],b=new h("Project 1"),x=new h("Project 2");g.push(b),g.push(x);const w=new v("Study","Do some leetcode","5/5/2023",3),E=new v("Eat","Eat some food","5/5/2023",2);b.addTodoItem(w),b.addTodoItem(E);const I=new v("Run","Run a mile","5/5/2023",1),T=new v("Sleep","Get some sleep","5/5/2023",5);x.addTodoItem(I),x.addTodoItem(T);const C=document.getElementById("dropdown-project-list");g.forEach((n=>{const e=document.createElement("a");e.href="#",e.innerHTML=n.title,e.addEventListener("click",(()=>{y(n)})),C.appendChild(e)})),document.getElementById("menu-new-project").addEventListener("click",(()=>{const n=document.getElementById("new-project-container"),e=document.getElementById("overlay");n.classList.toggle("hidden"),e.classList.toggle("hidden")})),y(b)})()})();