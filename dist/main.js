(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),r=t.n(o),d=t(645),i=t.n(d)()(r());i.push([e.id,"body {\n    font-family: 'Courier New', Courier, monospace;\n}\n\na {\n    text-decoration: none;\n}\n\nul {\n    background-color: teal;\n    list-style-type: none;\n    overflow: hidden;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    float: left;\n}\n\n.dropdown:hover {\n    background-color: blue;\n    cursor: pointer;\n}\n\nli a, .dropbtn {\n    display: inline-block;\n    color: white;\n    padding: 14px 20px;\n    text-align: center;\n}\n\n#menu-home {\n    font-weight: bold;\n}\n\n.dropdown {\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: grey;\n}\n\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n\n.dropdown-content a {\n    display: block;\n    text-align: left;\n}\n\n.dropdown-content a:hover {\n    background-color: lightblue;\n    cursor: pointer;\n}\n\n#container {\n    padding: 5rem 3rem;\n}\n\n#container-body {\n    text-align: center;\n    align-content: center;\n}\n\n.todoItem {\n    box-shadow: 2px 2px 2px 0px grey;\n    border-width: 1px;\n    border-color: black;\n    border-style: solid;\n    background-color: beige;\n}\n\n.modal {\n    position: absolute;\n    background-color: white;\n    padding: 30px;\n    text-align: center;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    border-width: 1px;\n    border-color: black;\n    border-style: solid;\n    border-radius: 10px;\n}\n\n#overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    background-color: black;\n    opacity: 70%;\n}\n\n.hidden {\n    display: none;\n}\n\n.invalid {\n    background-color: rgb(244, 150, 150);\n}",""]);const a=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,d){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&i[s[0]]||(void 0!==d&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=d),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var d={},i=[],a=0;a<e.length;a++){var c=e[a],l=o.base?c[0]+o.base:c[0],s=d[l]||0,u="".concat(l," ").concat(s);d[l]=s+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=r(m,o);o.byIndex=a,n.splice(a,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var d=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<d.length;i++){var a=t(d[i]);n[a].references--}for(var c=o(e,r),l=0;l<d.length;l++){var s=t(d[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}d=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var d=n[o]={id:o,exports:{}};return e[o](d,d.exports,t),d.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),d=t(569),i=t.n(d),a=t(565),c=t.n(a),l=t(216),s=t.n(l),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=s(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=class{constructor(e){this.title=e,this.todoItems=[]}addTodoItem=e=>{this.todoItems.push(e)}},g=class{constructor(e,n,t,o){this.title=e,this.description=n,this.dueDate=t,this.priority=o}},v=e=>{const n=document.getElementById("container-header"),t=document.getElementById("container-body");n.replaceChildren(),t.replaceChildren();const o=document.createElement("h1");o.innerHTML=e.title,n.appendChild(o),e.todoItems.forEach((e=>{const n=document.createElement("div"),o=document.createElement("h3"),r=document.createElement("p"),d=document.createElement("p"),i=document.createElement("p");o.innerHTML=e.title,n.appendChild(o),r.innerHTML=`Description: ${e.description}`,n.appendChild(r),d.innerHTML=`Due Date: ${e.dueDate}`,n.appendChild(d),i.innerHTML=`Priority: ${e.priority}`,n.appendChild(i),n.classList.add("todoItem"),t.appendChild(n),t.appendChild(document.createElement("br"))}))},y=[],b=new f("Project 1"),w=new f("Project 2");y.push(b),y.push(w);const E=new g("Study","Do some leetcode","5/5/2023",3),I=new g("Eat","Eat some food","5/5/2023",2);b.addTodoItem(E),b.addTodoItem(I);const x=new g("Run","Run a mile","5/5/2023",1),L=new g("Sleep","Get some sleep","5/5/2023",5);w.addTodoItem(x),w.addTodoItem(L);var k=y[0];const C=document.getElementById("overlay"),T=document.getElementById("new-project-container");document.getElementById("menu-new-project").addEventListener("click",(()=>{T.classList.toggle("hidden"),C.classList.toggle("hidden"),M.focus()}));const B=document.getElementById("btn-new-project"),M=document.getElementById("input-new-project");B.addEventListener("click",(()=>{T.classList.toggle("hidden"),C.classList.toggle("hidden"),y.push(new f(M.value)),M.value="",Z(),O()}));const j=document.getElementById("menu-new-todo-item"),H=document.getElementById("input-new-todo-title"),S=document.getElementById("input-new-todo-description"),D=document.getElementById("input-new-todo-due-date"),P=document.getElementById("input-new-todo-priority"),A=document.getElementById("select-new-todo-project"),N=document.getElementById("new-todo-item-container");j.addEventListener("click",(()=>{N.classList.toggle("hidden"),C.classList.toggle("hidden"),H.focus()})),document.getElementById("btn-new-todo").addEventListener("click",(()=>{console.log(H.value),console.log(S.value),console.log(D.value),console.log(P.value);const e=new g(H.value,S.value,D.value,P.value);y[A.value].addTodoItem(e),v(k)})),document.onkeydown=e=>{"Escape"==e.key&&(C.classList.contains("hidden")||C.classList.toggle("hidden"),T.classList.contains("hidden")||T.classList.toggle("hidden"),N.classList.contains("hidden")||N.classList.toggle("hidden"))};const Z=()=>{const e=document.getElementById("dropdown-project-list");e.replaceChildren(),y.forEach((n=>{const t=document.createElement("a");t.href="#",t.innerHTML=n.title,t.addEventListener("click",(()=>{v(n),k=n})),e.appendChild(t)}))},O=()=>{A.replaceChildren();for(let e=0;e<y.length;e++){const n=document.createElement("option");n.innerHTML=y[e].title,n.value=e,A.appendChild(n)}};Z(),v(b),O()})()})();