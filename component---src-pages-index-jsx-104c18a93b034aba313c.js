(self.webpackChunkadilsatievsite=self.webpackChunkadilsatievsite||[]).push([[230],{7757:function(t,e,r){t.exports=r(5666)},3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},9670:function(t,e,r){var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},1318:function(t,e,r){var n=r(5656),o=r(7466),a=r(1400),i=function(t){return function(e,r,i){var c,u=n(e),s=o(u.length),l=a(i,s);if(t&&r!=r){for(;s>l;)if((c=u[l++])!=c)return!0}else for(;s>l;l++)if((t||l in u)&&u[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},5417:function(t,e,r){var n=r(111),o=r(3157),a=r(5112)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[a])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:function(t,e,r){var n=r(6656),o=r(3887),a=r(1236),i=r(3070);t.exports=function(t,e){for(var r=o(e),c=i.f,u=a.f,s=0;s<r.length;s++){var l=r[s];n(t,l)||c(t,l,u(e,l))}}},8880:function(t,e,r){var n=r(9781),o=r(3070),a=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,a(1,r))}:function(t,e,r){return t[e]=r,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,r){var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,r){var n=r(7854),o=r(111),a=n.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},8113:function(t,e,r){var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:function(t,e,r){var n,o,a=r(7854),i=r(8113),c=a.process,u=c&&c.versions,s=u&&u.v8;s?o=(n=s.split("."))[0]<4?1:n[0]+n[1]:i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,r){var n=r(7854),o=r(1236).f,a=r(8880),i=r(1320),c=r(3505),u=r(9920),s=r(4705);t.exports=function(t,e){var r,l,f,p,m,h=t.target,v=t.global,d=t.stat;if(r=v?n:d?n[h]||c(h,{}):(n[h]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(m=o(r,l))&&m.value:r[l],!s(v?l:h+(d?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;u(p,f)}(t.sham||f&&f.sham)&&a(p,"sham",!0),i(r,l,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},6790:function(t,e,r){"use strict";var n=r(3157),o=r(7466),a=r(9974),i=function(t,e,r,c,u,s,l,f){for(var p,m=u,h=0,v=!!l&&a(l,f,3);h<c;){if(h in r){if(p=v?v(r[h],h,e):r[h],s>0&&n(p))m=i(t,e,p,o(p.length),m,s-1)-1;else{if(m>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[m]=p}m++}h++}return m};t.exports=i},9974:function(t,e,r){var n=r(3099);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},5005:function(t,e,r){var n=r(857),o=r(7854),a=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?a(n[t])||a(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},7854:function(t,e,r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:function(t,e,r){var n=r(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(n(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,r){var n=r(9781),o=r(7293),a=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,r){var n=r(7293),o=r(4326),a="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?a.call(t,""):Object(t)}:Object},2788:function(t,e,r){var n=r(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:function(t,e,r){var n,o,a,i=r(8536),c=r(7854),u=r(111),s=r(8880),l=r(6656),f=r(5465),p=r(6200),m=r(3501),h="Object already initialized",v=c.WeakMap;if(i||f.state){var d=f.state||(f.state=new v),y=d.get,g=d.has,w=d.set;n=function(t,e){if(g.call(d,t))throw new TypeError(h);return e.facade=t,w.call(d,t,e),e},o=function(t){return y.call(d,t)||{}},a=function(t){return g.call(d,t)}}else{var x=p("state");m[x]=!0,n=function(t,e){if(l(t,x))throw new TypeError(h);return e.facade=t,s(t,x,e),e},o=function(t){return l(t,x)?t[x]:{}},a=function(t){return l(t,x)}}t.exports={set:n,get:o,has:a,enforce:function(t){return a(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3157:function(t,e,r){var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:function(t,e,r){var n=r(7293),o=/#|\.prototype\./,a=function(t,e){var r=c[i(t)];return r==s||r!=u&&("function"==typeof e?n(e):!!e)},i=a.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},133:function(t,e,r){var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(t,e,r){var n=r(7854),o=r(2788),a=n.WeakMap;t.exports="function"==typeof a&&/native code/.test(o(a))},3070:function(t,e,r){var n=r(9781),o=r(4664),a=r(9670),i=r(7593),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(a(t),e=i(e,!0),a(r),o)try{return c(t,e,r)}catch(n){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:function(t,e,r){var n=r(9781),o=r(5296),a=r(9114),i=r(5656),c=r(7593),u=r(6656),s=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=i(t),e=c(e,!0),s)try{return l(t,e)}catch(r){}if(u(t,e))return a(!o.f.call(t,e),t[e])}},8006:function(t,e,r){var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,r){var n=r(6656),o=r(5656),a=r(1318).indexOf,i=r(3501);t.exports=function(t,e){var r,c=o(t),u=0,s=[];for(r in c)!n(i,r)&&n(c,r)&&s.push(r);for(;e.length>u;)n(c,r=e[u++])&&(~a(s,r)||s.push(r));return s}},5296:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},3887:function(t,e,r){var n=r(5005),o=r(8006),a=r(5181),i=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(i(t)),r=a.f;return r?e.concat(r(t)):e}},857:function(t,e,r){var n=r(7854);t.exports=n},1320:function(t,e,r){var n=r(7854),o=r(8880),a=r(6656),i=r(3505),c=r(2788),u=r(9909),s=u.get,l=u.enforce,f=String(String).split("String");(t.exports=function(t,e,r,c){var u,s=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||a(r,"name")||o(r,"name",e),(u=l(r)).source||(u.source=f.join("string"==typeof e?e:""))),t!==n?(s?!m&&t[e]&&(p=!0):delete t[e],p?t[e]=r:o(t,e,r)):p?t[e]=r:i(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,r){var n=r(7854),o=r(8880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},6200:function(t,e,r){var n=r(2309),o=r(9711),a=n("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},5465:function(t,e,r){var n=r(7854),o=r(3505),a="__core-js_shared__",i=n[a]||o(a,{});t.exports=i},2309:function(t,e,r){var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.15.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,r){var n=r(9958),o=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):a(r,e)}},5656:function(t,e,r){var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9958:function(t){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:function(t,e,r){var n=r(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:function(t,e,r){var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:function(t,e,r){var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:function(t){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:function(t,e,r){var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,r){var n=r(7854),o=r(2309),a=r(6656),i=r(9711),c=r(133),u=r(3307),s=o("wks"),l=n.Symbol,f=u?l:l&&l.withoutSetter||i;t.exports=function(t){return a(s,t)&&(c||"string"==typeof s[t])||(c&&a(l,t)?s[t]=l[t]:s[t]=f("Symbol."+t)),s[t]}},4944:function(t,e,r){"use strict";var n=r(2109),o=r(6790),a=r(7908),i=r(7466),c=r(9958),u=r(5417);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=a(this),r=i(e.length),n=u(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:c(t)),n}})},4346:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return $}});var n=r(7294),o=r(7351),a="works-module--wrapper--1hCt6",i="works-module--item--gPKQi",c="works-module--img--ZVJnc",u="works-module--title--3AEl3",s="works-module--link--3epFt",l="works-module--key--lPuhM",f="works-module--data--t625W",p="works-module--topic--3W-rC",m="works-module--text--24AYj",h=r(7812),v=r(3533),d=r(2979),y=r(5444),g=function(){return n.createElement("div",{className:"works-module--container--1GCAa"},n.createElement("h2",{className:"works-module--h2--2yA9p"},"Featured works"),n.createElement("ul",null,n.createElement("li",{className:i},n.createElement("div",null,n.createElement("img",{className:c,src:h.Z,alt:"Work"})),n.createElement("div",{className:a},n.createElement("h3",{className:u},n.createElement(y.rU,{className:s,to:"/"},"Designing Dashboards")),n.createElement("div",{className:l},n.createElement("span",{className:f},"2021 Mar"),n.createElement("span",{className:p},"Dashboard")),n.createElement("p",{className:m},"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam c onsequat sunt nostrud amet."))),n.createElement("li",{className:i},n.createElement("div",null,n.createElement("img",{className:c,src:v.Z,alt:"Work"})),n.createElement("div",{className:a},n.createElement("h3",{className:u},n.createElement(y.rU,{className:s,to:"/"},"Vibrant Portraits of 2020")),n.createElement("div",{className:l},n.createElement("span",{className:f},"2021 May"),n.createElement("span",{className:p},"Illustration")),n.createElement("p",{className:m},"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam c onsequat sunt nostrud amet."))),n.createElement("li",{className:i},n.createElement("div",null,n.createElement("img",{className:c,src:d.Z,alt:"Work"})),n.createElement("div",{className:a},n.createElement("h3",{className:u},n.createElement(y.rU,{className:s,to:"/"},"36 Days of Malayalam type")),n.createElement("div",{className:l},n.createElement("span",{className:f},"2021 Jan"),n.createElement("span",{className:p},"Typography")),n.createElement("p",{className:m},"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam c onsequat sunt nostrud amet.")))))},w="recent-module--link--7f2WG",x=function(){var t=(0,y.K2)("470012619");return n.createElement("div",{className:"recent-module--recent--3o85y"},n.createElement("div",{className:"recent-module--wrapper--13pEN"},n.createElement("h2",{className:"recent-module--h2--EksvK"},n.createElement(y.rU,{className:w,to:"/blog"},"Recent Posts")),n.createElement("ul",{className:"recent-module--list--29a6x"},t.allMarkdownRemark.edges.slice(0,2).map((function(t){return n.createElement("li",{className:"recent-module--post--3pQOh"},n.createElement("h3",{className:"recent-module--title--VThjo"},n.createElement(y.rU,{className:w,to:"/blog/"+t.node.fields.slug},t.node.frontmatter.title)),n.createElement("div",{className:"recent-module--key--3rYWA"},n.createElement("span",{className:"recent-module--data--1zool"},t.node.frontmatter.date),n.createElement("span",null,t.node.frontmatter.topic)),n.createElement("p",{className:"recent-module--description--QhTyl"},t.node.frontmatter.description))})))))},b=r(4924),E=r(5061);var k=r(6410),N=r(2961);function S(t){return function(t){if(Array.isArray(t))return t}(t)||(0,k.Z)(t)||(0,N.Z)(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function O(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){j(a,n,o,i,c,"next",t)}function c(t){j(a,n,o,i,c,"throw",t)}i(void 0)}))}}r(4944);var L=r(7757),C=r.n(L),A=C().mark(D),_=C().mark(R),P=C().mark(K);function T(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return I(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return I(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function M(t){return Z.apply(this,arguments)}function Z(){return(Z=O(C().mark((function t(e){var r,n,o,a,i,c,u=arguments;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(r=u.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=u[o];a=0,i=n;case 2:if(!(a<i.length)){t.next=21;break}c=i[a],t.t0=typeof c,t.next="string"===t.t0?7:"number"===t.t0?10:"function"===t.t0?13:16;break;case 7:return t.next=9,F(e,c);case 9:return t.abrupt("break",18);case 10:return t.next=12,W(c);case 12:return t.abrupt("break",18);case 13:return t.next=15,c.apply(void 0,[e].concat(n));case 15:return t.abrupt("break",18);case 16:return t.next=18,c;case 18:a++,t.next=2;break;case 21:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(t,e){return G.apply(this,arguments)}function G(){return(G=O(C().mark((function t(e,r){var n;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Y(e.textContent,r),t.next=3,U(e,[].concat((0,E.Z)(K(e.textContent,n)),(0,E.Z)(R(r,n))));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(t){return q.apply(this,arguments)}function q(){return(q=O(C().mark((function t(e){return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t){return setTimeout(t,e)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(t,e){return V.apply(this,arguments)}function V(){return(V=O(C().mark((function t(e,r){var n,o,a,i=arguments;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=i.length>2&&void 0!==i[2]?i[2]:60,o=T(D(r)),t.prev=2,o.s();case 4:if((a=o.n()).done){t.next=11;break}return(0,a.value)(e),t.next=9,W(n+n*(Math.random()-.5));case 9:t.next=4;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),o.e(t.t0);case 16:return t.prev=16,o.f(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[2,13,16,19]])})))).apply(this,arguments)}function D(t){var e,r,n;return C().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:e=T(t),o.prev=1,n=C().mark((function t(){var e;return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.value,t.next=3,function(t){return requestAnimationFrame((function(){return t.textContent=e}))};case 3:case"end":return t.stop()}}),t)})),e.s();case 4:if((r=e.n()).done){o.next=8;break}return o.delegateYield(n(),"t0",6);case 6:o.next=4;break;case 8:o.next=13;break;case 10:o.prev=10,o.t1=o.catch(1),e.e(o.t1);case 13:return o.prev=13,e.f(),o.finish(13);case 16:case"end":return o.stop()}}),A,null,[[1,10,13,16]])}function R(t){var e,r,n,o,a=arguments;return C().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:e=S(t),r=e.slice(0),n=a.length>1&&void 0!==a[1]?a[1]:0,o=a.length>2&&void 0!==a[2]?a[2]:r.length;case 3:if(!(n<o)){i.next=8;break}return i.next=6,r.slice(0,++n).join("");case 6:i.next=3;break;case 8:case"end":return i.stop()}}),_)}function K(t){var e,r,n,o,a=arguments;return C().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:e=S(t),r=e.slice(0),n=a.length>1&&void 0!==a[1]?a[1]:0,o=a.length>2&&void 0!==a[2]?a[2]:r.length;case 3:if(!(o>n)){i.next=8;break}return i.next=6,r.slice(0,--o).join("");case 6:i.next=3;break;case 8:case"end":return i.stop()}}),P)}function Y(t,e){var r=S(e).slice(0);return[].concat((0,E.Z)(t),[NaN]).findIndex((function(t,e){return r[e]!==t}))}var z="styles_typicalWrapper__1_Uvh";!function(t,e){void 0===e&&(e={});var r=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===r&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}('.styles_typicalWrapper__1_Uvh::after {\n  content: "|";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}');var Q=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)},B=(0,n.memo)((function(t){var e=t.steps,r=t.loop,o=t.className,a=t.wrapper,i=void 0===a?"p":a,c=(0,n.useRef)(null),u=i,s=[z];return o&&s.unshift(o),(0,n.useEffect)((function(){r===1/0?M.apply(void 0,[c.current].concat(Q(e),[M])):"number"==typeof r?M.apply(void 0,[c.current].concat(Q(Array(r).fill(e).flat()))):M.apply(void 0,[c.current].concat(Q(e)))})),n.createElement(u,{ref:c,className:s.join(" ")})})),H=r.p+"static/intro-photo-e8561274ca0ca3ae9d3009e805c69ae7.png";function J(){return n.createElement("div",{className:"intro-module--wrapper--1ZVUP"},n.createElement("div",{className:"intro-module--main--Tj4nm"},n.createElement("div",{className:"intro-module--box--3SM5H"},n.createElement("h1",{className:"intro-module--header--2mPUh"},"Hey! My name is Adil and I'm a ","",n.createElement(B,{loop:1/0,wrapper:"b",steps:["developer 😎",3e3,"student 😵",3e3,"designer 🤠",3e3,"... 🥴",3e3]})),n.createElement("p",{className:"intro-module--text--EtY6k"},"I'm Adil Satiev. From Kazan, Russia. I'm web developer. On this site you could read my blog or check my works. If you want to check my CV, so download button is below! Want to look over my social media accounts? Links at the bottom of the site."),n.createElement("button",{className:"intro-module--button--3kmJf"},"Download Resume")),n.createElement("div",null,n.createElement("img",{className:"intro-module--photo--11sEa",src:H,alt:"introPhoto"}))),n.createElement("svg",{className:"intro-module--wave--2aCS8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},n.createElement("path",{className:"intro-module--wave-path--sZ9ev",fill:"#0099ff","fill-opacity":"1",d:"M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,117.3C672,149,768,203,864,197.3C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})),n.createElement("svg",{className:"intro-module--topwave--sZQNa",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},n.createElement("path",{className:"intro-module--topwave-path--QxHuI",fill:"#0099ff","fill-opacity":"1",d:"M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,117.3C672,149,768,203,864,197.3C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})))}var $=function(){return n.createElement(o.Z,null,n.createElement(b.Z,{title:"Home"}),n.createElement(J,null),n.createElement(x,null),n.createElement(g,null))}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(_){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===m)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return A()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?h:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=s;var f="suspendedStart",p="suspendedYield",m="executing",h="completed",v={};function d(){}function y(){}function g(){}var w={};w[a]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(C([])));b&&b!==r&&n.call(b,a)&&(w=b);var E=g.prototype=d.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:A}}function A(){return{value:e,done:!0}}return y.prototype=E.constructor=g,g.constructor=y,y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},k(N.prototype),N.prototype[i]=function(){return this},t.AsyncIterator=N,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new N(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(E),u(E,c,"Generator"),E[a]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(r){Function("r","regeneratorRuntime = r")(e)}},7812:function(t,e,r){"use strict";e.Z=r.p+"static/work-img1-ba9250045d44741bebc03d1651dd0db4.png"},3533:function(t,e,r){"use strict";e.Z=r.p+"static/work-img2-1c988bf5f626517d4ff8d04412413948.png"},2979:function(t,e,r){"use strict";e.Z=r.p+"static/work-img3-585eefc506d5f3e8a09a49a16adbb05d.png"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-104c18a93b034aba313c.js.map