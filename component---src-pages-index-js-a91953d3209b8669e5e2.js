(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{213:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),o=e(29),u=(e(19),e(144),e(59),e(77),e(214),e(32),e(58),e(47),e(8),e(216),e(20),e(104),e(143),e(217),e(60),e(218),e(40),e(25),e(48),e(31),e(12),function(){return(u=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}).apply(this,arguments)});function a(n){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var c={strings:[],speed:100,cursor:!0,cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,lifeLike:!0,breakLines:!0,startDelay:250,startDelete:!1,nextStringDelay:750,loop:!1,loopDelay:750,html:!0,waitUntilVisible:!1,beforeString:function(){},afterString:function(){},beforeStep:function(){},afterStep:function(){},afterComplete:function(){}},f=function(n){return n.map((function(n){return void 0===n[1]&&n.push(null),void 0===n[2]&&n.push({}),n}))},l=function(n,t){return Object.assign({},n,t)},s=function(n){return Array.isArray(n)},d=function(n,t){return n[2]=l(n[2],t)||t,n},p=function(n,t){return s(n[0])?n.map((function(n){return d(n,t)})):d(n,t)},h=function(n,t,e,r){r=r||!1,e=e||{};var i=!s(n),o=n.length;return(n=i?new Array(n).fill(0):n).map((function(n,u){if(i)return t;var a=[t,n,e];return r&&(0===u&&(a=p(a,{isFirst:!0})),u+1===o&&(a=p(a,{isLast:!0}))),a}))};function v(n){this.insert=function(n,e){t.splice(n,0,e)},this.add=function(n,r,i){return n=s(n)?n:[n,null],i=i||!1,r=r||1,s(n[0])||(n=h(r,n)),n=f(n).map((function(n){return n[2]=l(n[2],{id:e}),e++,n})),t=i?n.concat(t):t.concat(n),this},this.delete=function(n){return t.splice(n,1),this},this.reset=function(){return t=t.map((function(n){return n[2].executed=!1,n})),this},this.getItems=function(){return(t=f(t)).filter((function(n){return!n[2].executed}))},this.setMeta=function(n,e){var r=t.findIndex((function(t){return t[2].id===n}));t[r][2]=l(t[r][2],e)};var t=[],e=0;this.add(n)}var m=function(n){return Array.from(n)},y=function(n){var t=[];return t.concat.apply(t,n)},g=function(n){var t=document.implementation.createHTMLDocument("");return t.body.innerHTML=n,t.body},b=function n(t,e,r){e=e||null,r=void 0!==r&&r;var i=m(t.childNodes).map((function(t){return 3===(e=t).nodeType||"BR"===e.tagName?t:n(t);var e}));return i=y(i),e&&(i=i.filter((function(n){return!e.contains(n)}))),r?i.reverse():i},S=function(n){return"BODY"===n.tagName},T=function(n,t){t=t||null;var e=n instanceof HTMLElement;return{node:t,isTopLevelText:(!t||S(t.parentNode))&&!e,isHTMLElement:e,content:n}};function w(n){var t,e=g(n);return t=b(e).map((function(n){return n.nodeValue?m(n.nodeValue).map((function(t){return T(t,n)})):T(n)})),y(t)}function x(n,t){return(t=void 0===t||t)?w(n):m(n).map((function(n){return T(n)}))}var M=function(n){return document.createElement(n)},N=function(n,t){var e=M("style");e.id=t||"",e.appendChild(document.createTextNode(n)),document.head.appendChild(e)},O=function(n){return s(n)||(n=[n/2,n/2]),{before:n[0],after:n[1],total:n[0]+n[1]}},E=function(n,t){return Math.abs(Math.random()*(n+t-(n-t))+(n-t))},L=function(n){return["textarea","input"].indexOf(n.tagName.toLowerCase())>-1},I=function(n,t){var e=t.querySelectorAll("*");return[t].concat(m(e).reverse()).find((function(t){return t.cloneNode().outerHTML===n.outerHTML}))},P=function(n,t,e,r){e=e||null;var i=t.isHTMLElement,o=i?t.content:document.createTextNode(t.content);if(L(n))n.value="".concat(n.value).concat(t.content);else{if(!t.isTopLevelText&&!i){var u=t.node.parentNode,a=I(u.cloneNode(),n);if(function(n,t){if(!n)return!1;var e=n.nextSibling;return!e||e.isEqualNode(t)}(a,e))n=a;else if((o=u.cloneNode()).innerText=t.content,!S(u.parentNode)){for(var c=u.parentNode,f=c.cloneNode(),l=I(f,n);!l&&!S(c);)f.innerHTML=o.outerHTML,o=f,f=c.parentNode.cloneNode(),c=c.parentNode,l=I(f,n);n=l||n}}var s=b(n,e,!0)[r-1],d=s?s.parentNode:n;d.insertBefore(o,d.contains(e)?e:null)}},A=function(n){var t;return null==n||null===(t=n.parentNode)||void 0===t?void 0:t.removeChild(n)},H=function(n,t,e){var r,i="string"==typeof n,o=!1,u=-1*n;return i&&(u=(r="END"===n.toUpperCase())?-1:1,o=r?t+u>0:t+u<e.length),{isString:i,numberOfSteps:u,canKeepMoving:o}};function j(n,t,e){return e?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function C(n){return function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(n.apply(this,t))}catch(n){return Promise.reject(n)}}}function D(){}function k(n,t){if(!t)return n&&n.then?n.then(D):Promise.resolve()}function B(n,t){var e=n();return e&&e.then?e.then(t):t(e)}function R(n,t,e){if(!n.s){if(e instanceof z){if(!e.s)return void(e.o=R.bind(null,n,t));1&t&&(t=e.s),e=e.v}if(e&&e.then)return void e.then(R.bind(null,n,t),R.bind(null,n,2));n.s=t,n.v=e;var r=n.o;r&&r(n)}}var z=function(){function n(){}return n.prototype.then=function(t,e){var r=new n,i=this.s;if(i){var o=1&i?t:e;if(o){try{R(r,1,o(this.v))}catch(n){R(r,2,n)}return r}return this}return this.o=function(n){try{var i=n.v;1&n.s?R(r,1,t?t(i):i):e?R(r,1,e(i)):R(r,2,i)}catch(n){R(r,2,n)}},r},n}();function q(n,t){return n&&n.then?n.then(t):t(n)}function F(n,t){var e=this,r=this;t=t||{};var i=function(n,t,r){return n=s(n[0])?n:[n],an.add(n,t),function(n){var t=(n=n||{}).delay;t&&an.add([F,t])}(r),e},o=function(n){return[[U,n="object"==a(n)?n:{},{force:!0}],[U,tn,{force:!0}]]},u=function(){return G?m(Y.value):b(Y,cn,!0)},f=function(n,t){t=t||1;var e=tn.nextStringDelay;an.insert(n,[F,e.before]),an.insert(n+t+1,[F,e.after])},d=C((function(){if(cn){var n="[data-typeit-id='".concat(un,"'] .ti-cursor");N("@keyframes blink-".concat(un," { 0% {opacity: 0} 49% {opacity: 0} 50% {opacity: 1} } ").concat(n," { animation: blink-").concat(un," ").concat(tn.cursorSpeed/1e3,"s infinite; } ").concat(n,".with-delay { animation-delay: 500ms; } ").concat(n,".disabled { animation: none; }"),un),Y.appendChild(cn);var t="loaded"===document.fonts.status;return j(t||document.fonts.ready,(function(n){var t=cn.getBoundingClientRect().width/2;cn.style.margin="0 -".concat(t+2,"px 0 -").concat(t-2,"px")}),t)}})),p=function(n){cn&&(cn.classList.toggle("disabled",n),cn.classList.toggle("with-delay",!n))},y=C((function(n,t){return X.push(setTimeout(n,t)),j()})),S=C((function(n){return B((function(){if(Z)return k(V(Z))}),(function(){an.reset().delete(0).add([F,n.before],1,!0),u().forEach((function(n){an.add([K,null,{isPhantom:!0}],1,!0)}))}))})),I=C((function(){nn.started=!0;var n,t=an.getItems();return q(function(n,t){try{var e=n()}catch(n){return t(n)}return e&&e.then?e.then(void 0,t):e}((function(){return q(function(n,t,e){var r,i,o=-1;return function e(u){try{for(;++o<n.length;)if((u=t(o))&&u.then){if(!((a=u)instanceof z&&1&a.s))return void u.then(e,i||(i=R.bind(null,r=new z,2)));u=u.v}r?R(r,1,u):r=u}catch(n){R(r||(r=new z),2,n)}var a}(),r}(t,(function(e){if(nn.frozen||nn.destroyed)throw"";var i,o,u,a,c=t[e],f=c[2];return n=[c,r],f.freezeCursor&&p(!0),i=tn.speed,o=tn.deleteSpeed,u=tn.lifeLike,a=(o=null!==o?o:i/3)/2,W=u?[E(i,i/2),E(o,a)]:[i,o],B((function(){var t;if(null==f?void 0:f.isFirst)return k((t=tn).beforeString.apply(t,n))}),(function(){var t;return j((t=tn).beforeStep.apply(t,n),(function(){return j(c[0].call(r,c[1],f),(function(){return B((function(){if(!f||!f.isPhantom)return B((function(){var t,e;if(null===(t=c[2])||void 0===t?void 0:t.isLast)return k((e=tn).afterString.apply(e,n))}),(function(){var t;return j((t=tn).afterStep.apply(t,n),(function(){an.setMeta(f.id,{executed:!0})}))}))}),(function(){p(!1)}))}))}))}))})),(function(t){var e;return nn.completed=!0,j((e=tn).afterComplete.apply(e,n),(function(){if(tn.loop){var n=tn.loopDelay;y((function(){return j(S(n),(function(){I()}))}),n.after)}}))}))}),D),(function(n){return r}))})),F=function(n){return new Promise((function(t){y((function(){return t()}),n||0)}))},V=function n(t){var e=u(),r=H(t,Z,e);return Z+=r.numberOfSteps,new Promise((function(t){y(C((function(){return function(n,t,e,r){if(e){var i=r,o=t[(i=i>t.length?t.length:i)-1];(n=o?o.parentNode:n).insertBefore(e,o||null)}}(Y,u(),cn,Z),B((function(){if(r.isString&&r.canKeepMoving)return k(n(r.numberOfSteps>0?"START":"END"))}),(function(){return t()}))})),W[0])}))},_=function(n){return new Promise((function(t){y((function(){return P(Y,n,cn,Z),t()}),W[0])}))},U=C((function(n){tn=l(tn,n)})),J=C((function(){G?Y.value="":u().forEach((function(n){A(n)}))})),K=function n(t){return t=!0===t,new Promise((function(e){y(C((function(){var r=!1,i=u();return i.length&&(G?Y.value=Y.value.slice(0,-1):A(i[Z])),m(Y.querySelectorAll("*")).forEach((function(n){if(!n.innerHTML&&"BR"!==n.tagName){for(var t=n;1===t.parentNode.childNodes.length&&t.parentNode.childNodes[0].isEqualNode(t);)t=t.parentNode;A(t)}})),B((function(){if(t&&i.length-1>0)return j(n(!0),(function(){return r=!0,e()}))}),(function(n){return r?n:e()}))})),W[1])}))};this.break=function(n){return i([_,T(M("BR"))],1,n)},this.delete=function(n,t){var e=o(t);return i([e[0]].concat([].concat(Array(Math.abs(n)||1)).fill().map((function(){return[K,!n,$]})),[e[1]]),1,t)},this.empty=function(){return i(J,1,arguments)},this.exec=function(n,t){var e=o(t);return i([e[0],[n,null],e[1]],1,t)},this.move=function(n,t){var e=H(n,Z,u()),r=o(t),a=e.isString?n:Math.sign(n);return i([r[0]].concat([].concat(Array(Math.abs(n)||1)).fill().map((function(){return[V,a,$]})),[r[1]]),1,t)},this.options=function(n){return i([U,n],1,n)},this.pause=function(n,t){return i([F,n],1,t)},this.type=function(n,t){var e=o(t),r=x(n,tn.html),u=[e[0]].concat(h(r,_,$,!0),[e[1]]);return i(u,1,t)},this.is=function(n){return nn[n]},this.destroy=function(n){n=void 0===n||n,X.forEach((function(n){clearTimeout(n)})),X=[],n&&A(cn),nn.destroyed=!0},this.freeze=function(){nn.frozen=!0},this.unfreeze=function(){nn.frozen=!1,I()},this.reset=function(){for(var n in!this.is("destroyed")&&this.destroy(),an.reset(),Z=0,nn)nn[n]=!1;return G?Y.value="":Y.innerHTML="",this},this.go=function(){return nn.started?this:(d(),tn.waitUntilVisible?(function(n,t){new IntersectionObserver((function(e,r){e.forEach((function(e){e.isIntersecting&&(t(),r.unobserve(n))}))}),{threshold:1}).observe(n)}(Y,I.bind(this)),this):(I(),this))},this.getQueue=function(){return an},this.getOptions=function(){return tn},this.getElement=function(){return Y};var Q,Y="string"==typeof(Q=n)?document.querySelector(Q):Q,G=L(Y),W=[],X=[],Z=0,$={freezeCursor:!0},nn={started:!1,completed:!1,frozen:!1,destroyed:!1},tn=l(c,t);tn=l(tn,{html:!G&&tn.html,nextStringDelay:O(tn.nextStringDelay),loopDelay:O(tn.loopDelay)});var en,rn,on,un=Math.random().toString().substring(2,9),an=new v([F,tn.startDelay]);Y.setAttribute("data-typeit-id",un),N("[data-typeit-id]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}[data-typeit-id]"),tn.strings=(on=tn.strings,en=s(on)?on:[on],(rn=function(n){return n.innerHTML.replace(/<\!--.*?-->/g,"").trim()}(Y))?(Y.innerHTML="",tn.startDelete?(w(rn).forEach((function(n){P(Y,n,cn,Z)})),an.add([K,!0]),f(1),en):[rn.trim()].concat(en)):en);var cn=function(){if(G||!tn.cursor)return null;var n=M("span");return n.innerHTML=g(tn.cursorChar).innerHTML,n.className="ti-cursor",n.style.cssText="display:inline;".concat(function(n){var t,e=["font","lineHeight","color"],r=M("SPAN"),i=(t=n,window.getComputedStyle(t,null));for(var o in i)e.indexOf(o)>-1&&i[o]&&(r.style[o]=i[o]);return r.style.cssText}(Y)),n}();tn.strings.length&&function(){var n=tn.strings.filter((function(n){return!!n}));n.forEach((function(t,e){var r=x(t,tn.html);an.add(h(r,_,$,!0));var i=an.getItems().length;if(e+1!==n.length){if(tn.breakLines){var o=T(M("BR"));return an.add([_,o,$]),void f(i)}an.add(h(r,K,$)),f(i,t.length)}}))}()}var V=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],_=r.useRef,U=r.useEffect,J=r.useState,K=r.useMemo,Q=function(n){var t=J(!0),e=t[0],i=t[1],o=_(null),a=n.options,c=n.element,f=n.children,l=n.getBeforeInit,s=n.getAfterInit,d=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]])}return e}(n,["options","element","children","getBeforeInit","getAfterInit"]),p=c,h=K((function(){return n=p,V.indexOf(n.toLowerCase())>-1;var n}),[p]);return U((function(){f&&(a.strings=o.current.innerHTML),i(!1)}),[]),U((function(){if(!e){var n=new F(o.current,u({},a));return(n=l(n)).go(),n=s(n),function(){n.destroy()}}}),[e]),Object(r.createElement)("div",{style:{opacity:e?0:1}},h?Object(r.createElement)(p,u({ref:o},d)):Object(r.createElement)(p,u({ref:o},d),e&&f))};Q.defaultProps={element:"span",options:{},getBeforeInit:function(n){return n},getAfterInit:function(n){return n}};var Y=Q,G=e(206),W=e(205);e.d(t,"query",(function(){return X}));var X="323221317";t.default=function(n){var t=n.data,e=Object(r.useContext)(o.c),u=Object(r.useContext)(o.b),a=Object(r.useState)(null),c=a[0],f=a[1],l=Object(r.useState)(),s=l[0],d=l[1];return Object(r.useEffect)((function(){d(function(n,t){return n.allMarkdownRemark.edges.filter((function(n){return"home"===n.node.frontmatter.type&&n.node.frontmatter.language===t}))[0].node}(t,e.language))}),[e.language]),Object(r.useEffect)((function(){if(null!==c){var n=setInterval((function(){c.is("completed")&&(setTimeout((function(){c.destroy(),u({type:"toggle-isIndexPageTitleDoneTyping",payload:!0}),f(null)}),2700),clearInterval(n))}),1e3),t=s.frontmatter.title;c.reset(),c.type(t),c.go()}}),[s,c]),i.a.createElement(G.a,null,i.a.createElement(W.a,{title:"Home"}),i.a.createElement("article",{className:"gospel"},t.allMarkdownRemark.edges.filter((function(n){return"home"===n.node.frontmatter.type&&n.node.frontmatter.language===e.language})).map((function(n){return i.a.createElement(i.a.Fragment,null,!1===e.isIndexPageTitleDoneTyping?i.a.createElement(Y,{element:"h2",options:{cursorChar:" &#9608;"},getAfterInit:function(n){return f(n),n}}):i.a.createElement("h2",{dangerouslySetInnerHTML:{__html:n.node.frontmatter.title+'<span style="visibility: hidden;">&#9608</span>'}}),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.node.html}}))}))))}},214:function(n,t,e){var r=e(1);r(r.S,"Math",{sign:e(215)})},215:function(n,t){n.exports=Math.sign||function(n){return 0==(n=+n)||n!=n?n:n<0?-1:1}},216:function(n,t,e){"use strict";var r=e(1),i=e(39)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(n){return i(this,n,arguments.length>1?arguments[1]:void 0)}}),e(103)("find")},217:function(n,t,e){"use strict";var r=e(1),i=e(39)(6),o="findIndex",u=!0;o in[]&&Array(1)[o]((function(){u=!1})),r(r.P+r.F*u,"Array",{findIndex:function(n){return i(this,n,arguments.length>1?arguments[1]:void 0)}}),e(103)(o)},218:function(n,t,e){var r=e(1);r(r.P,"Array",{fill:e(219)}),e(103)("fill")},219:function(n,t,e){"use strict";var r=e(22),i=e(142),o=e(21);n.exports=function(n){for(var t=r(this),e=o(t.length),u=arguments.length,a=i(u>1?arguments[1]:void 0,e),c=u>2?arguments[2]:void 0,f=void 0===c?e:i(c,e);f>a;)t[a++]=n;return t}}}]);
//# sourceMappingURL=component---src-pages-index-js-a91953d3209b8669e5e2.js.map