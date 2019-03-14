!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=3)}([function(t,e){t.exports='<svg version=1.1 xmlns=http://www.w3.org/2000/svg width=500 height=500 viewBox="-250 -250 500 500"> <defs> <clipPath id=pitchClip> <path d="M-100 400 -100 -100 C -50 -160, 50 -160, 100 -100 L 100 400z" transform="translate(0, -40)"/> </clipPath> <clipPath id=headingClip> <rect x=-150 y=-15 width=266 height=38 fill=black /> </clipPath> </defs> <g id=horizont> <defs> <linearGradient id=backHorizon x1=0 y1=0 x2=0 y2=100%> <stop offset=0.5 stop-color=#558EBB /> <stop offset=0.5 stop-color=#503723 /> </linearGradient> </defs> <rect x=-1000 y=-1000 width=2000 height=2000 fill=url(#backHorizon) /> <line x1=-1000 y1=0 x2=1000 y2=0 stroke=white stroke-width=2 /> </g> <g id=rotor clip-path=url(#pitchClip)> <g id=pitch> <line id=small-pitch x1=-14 y1=0 x2=14 y2=0 stroke=white stroke-width=2 /> <line id=medium-pitch x1=-29 y1=0 x2=29 y2=0 stroke=white stroke-width=2 /> <line id=large-pitch x1=-41 y1=0 x2=41 y2=0 stroke=white stroke-width=3 /> </g> </g> <g transform=translate(0,-235) clip-path=url(#headingClip)> <defs> <line x1=0 y1=0 x2=0 y2=-2 stroke=#fff stroke-width=1.5 id=heading_scale_marker /> <line x1=0 y1=0 x2=0 y2=-5 stroke=#fff stroke-width=1.5 id=heading_scale_large_marker /> </defs> <g id=heading_scale transform=translate(0,5)></g> <g transform=translate(0,17)> <polyline points="0,0 10,-10 20,-10 20,-30 -20,-30 -20,-10, -10,-10 0,0" fill=#000 stroke=#fff stroke-width=1 /> <text fill=#fff style=font-size:18px;font-weight:700 text-anchor=middle dy=-14 id=heading_current_value>360</text> </g> </g> <defs> <g id=triangles> <line x1=-129 y1=0 x2=-88 y2=0 stroke=yellow stroke-width=2 /> <polyline points="0,0 -79,42 -54,42 0,0" fill=yellow stroke=black stroke-width=1 /> <polyline points="0,0 -54,42 -33,42 0,0" fill=none stroke=black stroke-width=1 /> </g> <g id=altitude> <polyline points="0,0 10,-10 10,-21 68,-21 68,-38 110,-38 110,38 68,38 68,21 10,21 10,10 0,0" fill=black stroke=white stroke-width=1 /> <text dx=16 dy=10 fill=white class=altitude-value id=altitude_value>95336</text> </g> <g id=airspeed> <polyline points="0,-24 55,-24, 55,-48, 80,-48 80,-10 90,0 80,10 80,48, 55,48, 55,24 0,24 0,-24" fill=black stroke=white stroke-width=1 /> <text dx=6 dy=13 fill=white class=airspeed-value id=airspeed_value>999</text> </g> </defs> <g transform="translate(-250, -250)"> <rect id=airspeed_background x=0 y=0 width=100 height=500 fill=black stroke=white stroke-width=1 opacity=0.1 /> <rect id=heading_background x=100 y=0 width=266 height=38 fill=black stroke=white stroke-width=2 opacity=0.1 /> <rect id=altitude_background x=366 y=32 width=134 height=468 fill=black stroke=white stroke-width=1 opacity=0.1 /> <rect id=barometric_setting x=366 y=468 width=132 height=30 fill=black stroke=blue stroke-width=2 opacity=0.1 /> <use x=250 y=250 xlink:href=#triangles /> <use x=250 y=250 xlink:href=#triangles transform="scale(-1,1) translate(-500,0)"/> <g transform="translate(250, 250)"> <defs> <clipPath id=cut-off-bottom> <rect x=-200 y=-250 width=400 height=150 /> </clipPath> </defs> <circle cx=0 cy=0 r=200 fill=none stroke=white clip-path=url(#cut-off-bottom) /> <line x1=0 y1=-200 x2=0 y2=-190 stroke=white stroke-width=1.5 id=degree /> <use xlink:href=#degree transform=rotate(-60) /> <use xlink:href=#degree transform=rotate(-50) /> <use xlink:href=#degree transform=rotate(-40) /> <use xlink:href=#degree transform=rotate(-30) /> <use xlink:href=#degree transform=rotate(-20) /> <use xlink:href=#degree transform=rotate(-10) /> <use xlink:href=#degree transform=rotate(10) /> <use xlink:href=#degree transform=rotate(20) /> <use xlink:href=#degree transform=rotate(30) /> <use xlink:href=#degree transform=rotate(40) /> <use xlink:href=#degree transform=rotate(50) /> <use xlink:href=#degree transform=rotate(60) /> <polygon points="0,-200 -7.5,-215 7.5,-215" fill=white /> <polygon points="0,-200 -7.5,-185 7.5,-185" fill=white id=roll_triangle /> </g> <use x=380 y=250 xlink:href=#altitude /> <use x=12 y=250 xlink:href=#airspeed /> </g> <g transform=translate(116,-250)> <rect id=selected_altitude x=0 y=0 width=134 height=32 fill=black stroke=white stroke-width=1 /> <text dx=129 dy=26 id=selected_altitude_value>0</text> </g> <g transform=translate(-250,218)> <rect id=ground_speed x=0 y=0 width=100 height=32 fill=black stroke=white stroke-width=1 /> <text dx=95 dy=26 id=ground_speed_value>0</text> </g> </svg> '},function(t,e,r){"use strict";function n(t){var e,r,n,i,o,s,a,l,c;for((n=document.createElementNS("http://www.w3.org/2000/svg","use")).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#large-pitch"),(i=document.createElementNS("http://www.w3.org/2000/svg","use")).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#medium-pitch"),(s=document.createElementNS("http://www.w3.org/2000/svg","use")).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#small-pitch"),(a=document.createElementNS("http://www.w3.org/2000/svg","text")).style.fill="white",a.style.fontWeight="bold",a.setAttribute("dy",5),l=a.cloneNode(),a.setAttribute("text-anchor","end"),a.setAttribute("x",-45),l.setAttribute("x",45),r=-220,o=[],e=function(e){var n=Math.abs(r);e.textContent=n>180?360-n:n,e.setAttribute("y",8*-r),t.appendChild(e)};r<=220;)0===r?r+=2.5:(r%10==0?(c=n.cloneNode(),[a.cloneNode(),l.cloneNode()].forEach(e)):r%5==0?c=i.cloneNode():r%2.5==0&&(c=s.cloneNode()),c.setAttribute("y",8*r),t.appendChild(c),o.push(r+=2.5));return o}r.d(e,"a",function(){return n})},function(t,e,r){"use strict";function n(t){var e,r,n,i,o,s,a;for((o=document.createElementNS("http://www.w3.org/2000/svg","use")).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#heading_scale_marker"),(i=document.createElementNS("http://www.w3.org/2000/svg","use")).setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#heading_scale_large_marker"),(a=document.createElementNS("http://www.w3.org/2000/svg","text")).style.fill="#fff",a.style.fontSize="16px",a.style.fontWeight="bold",a.setAttribute("text-anchor","middle"),a.setAttribute("y",-10),n=-200,s=[];n<=200;)n%10==0?(e=i.cloneNode(),(r=a.cloneNode()).setAttribute("x",10*n),r.textContent=n<=0?360+n:n,t.appendChild(r)):n%5==0?(e=i.cloneNode(),r=a.cloneNode()):e=o.cloneNode(),e.setAttribute("x",10*n),t.appendChild(e),s.push(n+=1);return s}r.d(e,"a",function(){return n})},function(t,e,r){"use strict";r.r(e),function(t){var e=r(0),n=r.n(e),i=(r(5),r(1)),o=r(2);function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.elem=e,e.innerHTML=n.a,this.airspeedElem=e.querySelector("#airspeed_value"),this.altitudeElem=e.querySelector("#altitude_value"),this.rotor=e.querySelector("#rotor"),this.horizont=e.querySelector("#horizont"),this.pitchElem=e.querySelector("#pitch"),this.roll_triangle=e.querySelector("#roll_triangle"),this.heading_scale=e.querySelector("#heading_scale"),this.heading_current_value=e.querySelector("#heading_current_value"),this.ground_speed_value=e.querySelector("#ground_speed_value"),this.selected_altitude_value=e.querySelector("#selected_altitude_value"),Object(i.a)(this.pitchElem),Object(o.a)(e.querySelector("#heading_scale")),this._rollValue=0,this._pitchValue=0,this._airspeed=0,this._altitube=0,this._currentHeading=360}var e,r,a;return e=t,(r=[{key:"horizontTransform",value:function(){this.pitch>90?this.horizont.setAttribute("transform","rotate(".concat(this.roll,") scale(1,-1) translate(0 ").concat(parseFloat(720-4*this.pitch),")")):this.pitch<-90?this.horizont.setAttribute("transform","rotate(".concat(this.roll,") scale(1,-1) translate(0 ").concat(parseFloat(-720-4*this.pitch),")")):this.horizont.setAttribute("transform","rotate(".concat(this.roll,") translate(0 ").concat(parseFloat(4*this.pitch),")"))}},{key:"_pad",value:function(t,e){var r=Math.round(t).toString().split("");return new Array(e-r.length).fill("0").concat(r).join("")}},{key:"airspeed",set:function(t){this._airspeed=t,this.airspeedElem.textContent=this._pad(t,3)}},{key:"altitude",set:function(t){this._altitude=t,this.altitudeElem.textContent=this._pad(t,5)}},{key:"roll",set:function(t){this._rollValue=parseFloat(t),this.horizontTransform(),this.rotor.setAttribute("transform","rotate(".concat(this._rollValue,")")),this.pitchElem.setAttribute("transform","translate(0 ".concat(8*this._pitchValue,")")),this.roll_triangle.setAttribute("transform","rotate(".concat(this._rollValue,")"))},get:function(){return this._rollValue}},{key:"pitch",set:function(t){this._pitchValue=parseFloat(t),this.horizontTransform(),this.rotor.setAttribute("transform","rotate(".concat(this._rollValue,")")),this.pitchElem.setAttribute("transform","translate(0 ".concat(8*this._pitchValue,")"))},get:function(){return this._pitchValue}},{key:"currentHeading",set:function(t){var e;this._currentHeading=0==t?360:t,this.heading_current_value.textContent=this._pad(this._currentHeading,3),e=this._currentHeading>180?10*(360-this._currentHeading):10*-this._currentHeading,this.heading_scale.setAttribute("transform","translate(".concat(e,",22.5)"))}},{key:"groundSpeed",set:function(t){this.ground_speed_value.textContent=Math.round(t)}},{key:"selectedAltitude",set:function(t){this.selected_altitude_value.textContent=Math.round(t)}}])&&s(e.prototype,r),a&&s(e,a),t}();t.Avionics=a}.call(this,r(4))},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(6);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(8)(n,i);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(7)(!1)).push([t.i,"html, body, svg {\n  width: 100%; height: 100%;\n}\nsvg {\n  display: block;\n}\nbody {\n  margin: 0;\n}\n.airspeed-value {\n  font-size: 40px;\n  letter-spacing: 5px;\n}\n.altitude-value {\n  font-size:30px;\n  letter-spacing: 3px;\n}\n\n#ground_speed_value {\n  font-size: 30px;\n  font-weight: bold;\n  fill: #c748a2;\n  text-anchor: end;\n}\n\n#selected_altitude_value {\n  font-size: 30px;\n  font-weight: bold;\n  fill: #47cfe0;\n  text-anchor: end;\n}\n",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var i=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(o).concat([i]).join("\n")}var s;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(n[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];null!=s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),e.push(s))}},e}},function(t,e,r){var n,i,o={},s=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=n.apply(this,arguments)),i}),a=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,c=0,u=[],d=r(9);function f(t,e){for(var r=0;r<t.length;r++){var n=t[r],i=o[n.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](n.parts[s]);for(;s<n.parts.length;s++)i.parts.push(m(n.parts[s],e))}else{var a=[];for(s=0;s<n.parts.length;s++)a.push(m(n.parts[s],e));o[n.id]={id:n.id,refs:1,parts:a}}}}function h(t,e){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}function p(t,e){var r=a(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),u.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(t.insertAt.before,r);r.insertBefore(e,i)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function y(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return w(e,t.attrs),p(t,e),e}function w(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function m(t,e){var r,n,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var s=c++;r=l||(l=y(e)),n=b.bind(null,r,s,!1),i=b.bind(null,r,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",w(e,t.attrs),p(t,e),e}(e),n=function(t,e,r){var n=r.css,i=r.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(n=d(n));i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,r,e),i=function(){g(r),r.href&&URL.revokeObjectURL(r.href)}):(r=y(e),n=function(t,e){var r=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),i=function(){g(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=s()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=h(t,e);return f(r,e),function(t){for(var n=[],i=0;i<r.length;i++){var s=r[i];(a=o[s.id]).refs--,n.push(a)}t&&f(h(t,e),e);for(i=0;i<n.length;i++){var a;if(0===(a=n[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete o[a.id]}}}};var x,v=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function b(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=v(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}]);