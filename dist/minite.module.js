function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function t(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return r(t,void 0);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,void 0):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var o=0;return function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=t[Symbol.iterator]()).next.bind(e)}function n(r){var t=new RegExp("^"+r+"$","i");return["path","svg","use","g"].some(function(r){return t.test(r)})}function e(r){return Object.keys(r).map(function(t){return t.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()+": "+r[t]}).join(";")}var o,u,i=function(r){var t,n=[],e=function(e){t=r(t,e),n.forEach(function(r){return r()})};return e({}),{getState:function(){return t},dispatch:e,subscribe:function(r){return n.push(r),function(){n=n.filter(function(t){return t!==r})}}}},a=function(r,o){var u=[].slice.call(arguments,2);if(Array.isArray(o)?u=o:"string"==typeof o&&u.push(o),"function"==typeof r)return r(o,u);if("x"===r)return u;if("object"==typeof o)for(var i in o){var a=i.toLocaleLowerCase().replace("class","className");o[a]=o[i]}var c=Object.assign(document.createElement(r),"object"==typeof o?o:{});if(n(r))for(var f in c=document.createElementNS("http://www.w3.org/2000/svg",r),o)o.hasOwnProperty(f)&&c.setAttribute(f,o[f]);o&&o.hasOwnProperty("style")&&(c.style=e(o.style));for(var v,s=t(u);!(v=s()).done;){var l,y=v.value;Array.isArray(y)?(l=c).append.apply(l,y):c.append(y)}return c},c={},f=0,v=function(r,t){o=r,u=t,s(r,t())},s=function(r,t){f=0;for(var n=(document.activeElement||{id:""}).id,e=Array.prototype.map.call(document.querySelectorAll("[id]"),function(r){return{id:r.id,selectionStart:r.selectionStart,selectionEnd:r.selectionEnd,selectionDirection:r.selectionDirection,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}});r.firstChild;)r.removeChild(r.firstChild);r.append.apply(r,Array.isArray(t)?t:[t]),e.forEach(function(r){var t=document.getElementById(r.id);t&&(r.id===n&&t.focus(),Object.assign(t,r))})},l=function(r){return function(r,t){var n=r.cursor,e=r.state,o=r.render,u=r.root,i=r.view,a=n;n++;var c={};return c[a]=e[a]||t,[c[a],function(r){e[a]="function"==typeof r?r(c[a]):r,c[a]=e[a],o(u,i())}]}({state:c,cursor:f,render:s,root:o,view:u},r)};export{a as m,v as render,i as useReducer,l as useState};
//# sourceMappingURL=minite.module.js.map
