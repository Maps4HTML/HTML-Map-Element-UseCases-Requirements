/*
 * v0.2.1.
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
 (function(){function C(a,c){var b=a.search(D);if(-1===b)return{b:c+" "+a,a:""};if(","===a[b])return{b:c+" "+a.substr(0,b),a:a.substr(b+1)};var d=!0,h=!1;b=a.search(/\S/);var e=0;a:for(;b<a.length;++b){var f=a[b];switch(f){case "[":f=E.exec(a.substr(b));b+=(f?f[0].length:1)-1;continue;case "(":++e;continue;case ":":if(!d)continue;else if(!F.test(a.substr(b)))continue;else if(e)return null;a=a.substring(0,b)+c+a.substr(b+6);b+=c.length;h=!0;--b;continue;case ")":e&&--e;continue}if(!e)switch(f){case ",":break a;
case " ":case ">":case "~":case "+":d&&(d=!1)}}return{b:(h?"":c+" ")+a.substr(0,b),a:a.substr(b+1)}}function u(a,c,b,d){if(a instanceof CSSMediaRule)for(b=a.cssRules.length,d=0;d<b;++d)u(a.cssRules[d],c,a,d);else if(a instanceof CSSStyleRule){a:{for(var h=a.selectorText,e=[];h;){h=C(h,c);if(null===h){c=":not(*)";break a}e.push(h.b);h=h.a}c=e.join(", ")}G?a.selectorText=c:(a=a.style.cssText,b.deleteRule(d),b.insertRule(c+" {"+a+"}",d))}}function v(a,c){var b=a.parentStyleSheet,d;for(d=0;d<b.rules.length&&
b.rules[d]!==a;++d);b.removeRule(d);b.insertRule(c,d);return b.rules[d]}function w(a){var c=null;try{c=a.cssRules}catch(b){if(b instanceof DOMException)return b;throw b;}return c?null:{code:DOMException.SECURITY_ERR}}function x(a,c,b){b?a.setAttribute(c,""):a.removeAttribute(c)}function H(a,c,b){b?a.classList.add(c):a.classList.remove(c)}function y(a){var c=a.scoped&&document.body.contains(a)?a.parentNode:null,b=t.get(a);if(b){if(c)a.sheet&&z(a.sheet,b.prefix);else{t.delete(a);var d=a.textContent;
a.textContent="";a.textContent=d}b.parent!==c&&(b.parent&&n(b.parent,b.attrName,!1),c&&n(c,b.attrName,!0),b.parent=c);return!1}c&&(b=""+q.prefix+ ++I,d=n===x?"["+b+"]":"."+b,t.set(a,{attrName:b,prefix:d,parent:a.parentNode}),z(a.sheet,d),n(c,b,!0))}function A(){var a=window.scopedCSS;if("object"===typeof a){for(var c in q)c in a&&(q[c]=a[c]);q.applyToClass&&(n=H)}J.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["scoped"]});a=document.body.getElementsByTagName("style");
for(c=0;c<a.length;++c)y(a[c])}var m=document.createElement("style");if(!("scoped"in m)){var q={applyToClass:!1,prefix:"__scoped_"};m.textContent=".x{color:red;}";document.head.appendChild(m);m.sheet.cssRules[0].selectorText=".change";var G=".change"===m.sheet.cssRules[0].selectorText;document.head.removeChild(m);Object.defineProperty(HTMLStyleElement.prototype,"scoped",{enumerable:!0,get:function(){return this.hasAttribute("scoped")},set:function(a){a?this.setAttribute("scoped",this.getAttribute("scoped")||
""):this.removeAttribute("scoped")}});var t=new Map,E=/^\[.*?(?:(["'])(?:.|\\\1)*\1.*)*\]/,D=/([([,]|:scope\b)/,F=/^:scope\b/,z=function(){function a(e,f){if(c.get(e)!==f){var l=w(e);if(l)switch(l.code){case DOMException.SECURITY_ERR:var g=new XMLHttpRequest;g.responseType="blob";g.open("GET",e.href);var k=v(e.ownerRule,"@import url('data:text/css;base64,')");g.onload=function(){var B=URL.createObjectURL(g.response),K=v(k,"@import '"+B+"'");b.set(K,f);h();URL.revokeObjectURL(B)};g.send();return;case DOMException.INVALID_ACCESS_ERR:d.set(e,
f);h();return;default:throw l;}c.set(e,f);l=e.cssRules.length;for(var r=0;r<l;++r){var p=e.cssRules[r];p instanceof CSSImportRule?p.styleSheet?a(p.styleSheet,f):(b.set(p,f),h()):u(p,f,e,r)}return!0}}var c=new WeakMap,b=new Map,d=new Map,h=function(){function e(){var l=!1;f=0;b.forEach(function(g,k){if(k.styleSheet)a(k.styleSheet,g);else{a:{for(g=k.parentStyleSheet;g;){if(g.ownerNode){g=g.ownerNode;break a}g=g.parentStyleSheet}g=null}if(g){l=!0;return}}b.delete(k)});d.forEach(function(g,k){w(k)?l=
!0:(a(k,g),d.delete(k))});l&&(f=window.requestAnimationFrame(e))}var f=0;return function(){f=f||window.requestAnimationFrame(e)}}();return a}(),n=x,I=0,J=new MutationObserver(function(a){function c(d){for(var h=d?d.length:0;h;){var e=d[--h];if(e instanceof HTMLElement)if(e instanceof HTMLStyleElement)b.add(e);else{e=e.getElementsByTagName("style");for(var f=e.length;f;)b.add(e[--f])}}}var b=new Set;a.forEach(function(d){d.target instanceof HTMLStyleElement?b.add(d.target):(c(d.addedNodes),c(d.removedNodes))});
b.forEach(y)});"loading"===document.readyState?window.addEventListener("DOMContentLoaded",A):A()}})();