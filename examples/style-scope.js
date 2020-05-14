/*
 * https://github.com/samthor/scoped
 *
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

/**
 * @fileoverview Polyfill for `<style scoped>`.
 */
 window.scopedCSS = {applyToClass: true};
 var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(h){return h.raw=h};$jscomp.createTemplateTagFirstArgWithRaw=function(h,p){h.raw=p;return h};
 (function(){function h(a,c){var b=a.search(A);if(-1===b)return{selector:c+" "+a,rest:""};if(","===a[b])return{selector:c+" "+a.substr(0,b),rest:a.substr(b+1)};var d=!0,g=!1;b=a.search(/\S/);var f=0;a:for(;b<a.length;++b){var e=a[b];switch(e){case "[":e=B.exec(a.substr(b));b+=(e?e[0].length:1)-1;continue;case "(":++f;continue;case ":":if(!d)continue;else if(!C.test(a.substr(b)))continue;else if(f)return null;a=a.substring(0,b)+c+a.substr(b+6);b+=c.length;g=!0;--b;continue;case ")":f&&--f;continue}if(!f)switch(e){case ",":break a;
 case " ":case ">":case "~":case "+":d&&(d=!1)}}return{selector:(g?"":c+" ")+a.substr(0,b),rest:a.substr(b+1)}}function p(a,c,b,d){if(a instanceof CSSMediaRule)for(b=a.cssRules.length,d=0;d<b;++d)p(a.cssRules[d],c,a,d);else if(a instanceof CSSStyleRule){a:{for(var g=a.selectorText,f=[];g;){g=h(g,c);if(null===g){c=":not(*)";break a}f.push(g.selector);g=g.rest}c=f.join(", ")}D?a.selectorText=c:(a=a.style.cssText,b.deleteRule(d),b.insertRule(c+" {"+a+"}",d))}}function u(a,c){var b=a.parentStyleSheet,
 d;for(d=0;d<b.rules.length&&b.rules[d]!==a;++d);b.removeRule(d);b.insertRule(c,d);return b.rules[d]}function v(a){try{var c=a.cssRules}catch(b){if(b instanceof DOMException)return b;throw b;}return c?null:new DOMException}function w(a,c,b){b?a.setAttribute(c,""):a.removeAttribute(c)}function E(a,c,b){b?a.classList.add(c):a.classList.remove(c)}function x(a){var c=a.scoped&&document.body.contains(a)?a.parentNode:null,b=t.get(a);if(b){if(c)a.sheet&&y(a.sheet,b.prefix);else{t["delete"](a);var d=a.textContent;
 a.textContent="";a.textContent=d}b.parent!==c&&(b.parent&&l(b.parent,b.attrName,!1),c&&l(c,b.attrName,!0),b.parent=c);return!1}c&&(b=""+q.prefix+ ++F,d=l===w?"["+b+"]":"."+b,t.set(a,{attrName:b,prefix:d,parent:a.parentNode}),y(a.sheet,d),l(c,b,!0))}function z(){var a=window.scopedCSS;if("object"===typeof a){for(var c in q)c in a&&(q[c]=a[c]);q.applyToClass&&(l=E)}G.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["scoped"]});a=document.body.getElementsByTagName("style");
 for(c=0;c<a.length;++c)x(a[c])}var k=document.createElement("style");if(!("scoped"in k)){var q={applyToClass:!1,prefix:"__scoped_"};k.textContent=".x{color:red;}";document.head.appendChild(k);k.sheet.cssRules[0].selectorText=".change";var D=".change"===k.sheet.cssRules[0].selectorText;document.head.removeChild(k);Object.defineProperty(HTMLStyleElement.prototype,"scoped",{enumerable:!0,get:function(){return this.hasAttribute("scoped")},set:function(a){a?this.setAttribute("scoped",this.getAttribute("scoped")||
 ""):this.removeAttribute("scoped")}});var t=new Map,B=/^\[.*?(?:(["'])(?:.|\\\1)*\1.*)*\]/,A=/([([,]|:scope\b)/,C=/^:scope\b/,y=function(){function a(f,e){if(c.get(f)!==e){var m=v(f);if(m)switch(m.code){case DOMException.SECURITY_ERR:var n=new XMLHttpRequest;n.responseType="blob";n.open("GET",f.href);var H=u(f.ownerRule,":not(*) {}");n.onload=function(){var a=URL.createObjectURL(n.response);a=u(H,"@import '"+a+"'");b.set(a,e);g()};n.send();return;case DOMException.INVALID_ACCESS_ERR:d.set(f,e);g();
 return;default:throw m;}c.set(f,e);m=f.cssRules.length;for(var r=0;r<m;++r){var h=f.cssRules[r];h instanceof CSSImportRule?h.styleSheet?a(h.styleSheet,e):(b.set(h,e),g()):p(h,e,f,r)}return!0}}var c=new WeakMap,b=new Map,d=new Map,g=function(){function c(){var f=!1;e=0;b.forEach(function(c,d){if(d.styleSheet)a(d.styleSheet,c);else{var e;a:{for(e=d.parentStyleSheet;e;){if(e.ownerNode){e=e.ownerNode;break a}e=e.parentStyleSheet}e=null}if(e){f=!0;return}}b["delete"](d)});d.forEach(function(b,c){v(c)?
 f=!0:(a(c,b),d["delete"](c))});f&&(e=window.requestAnimationFrame(c))}var e=0;return function(){e=e||window.requestAnimationFrame(c)}}();return a}(),l=w,F=0,G=new MutationObserver(function(a){var c=new Set,b=function(a){for(var b=a?a.length:0;b;){var d=a[--b];if(d instanceof HTMLElement)if(d instanceof HTMLStyleElement)c.add(d);else{d=d.getElementsByTagName("style");for(var e=d.length;e;)c.add(d[--e])}}};a.forEach(function(a){a.target instanceof HTMLStyleElement?c.add(a.target):(b(a.addedNodes),b(a.removedNodes))});
 c.forEach(x)});"loading"===document.readyState?window.addEventListener("DOMContentLoaded",z):z()}})();