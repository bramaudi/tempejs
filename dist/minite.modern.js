const t=function(t,n,...o){if(Array.isArray(n)?o=n:"string"==typeof n&&o.push(n),"function"==typeof t)return t(n,o);if("x"===t)return o;if("object"==typeof n)for(const t in n)n[t.toLocaleLowerCase()]=n[t];var e,c=Object.assign(document.createElement(t),"object"==typeof n?n:{});if(function(t){const n=new RegExp("^"+t+"$","i");return["path","svg","use","g"].some(t=>n.test(t))}(t)){c=document.createElementNS("http://www.w3.org/2000/svg",t);for(const t in n)n.hasOwnProperty(t)&&c.setAttribute(t,n[t])}n&&n.hasOwnProperty("style")&&(c.style=(e=n.style,Object.keys(e).map(t=>`${t}: ${e[t]}`).join(";")));for(const t of o)Array.isArray(t)?c.append(...t):c.append(t);return c},n={all:o=o||new Map,on:function(t,n){var e=o.get(t);e&&e.push(n)||o.set(t,[n])},off:function(t,n){var e=o.get(t);e&&e.splice(e.indexOf(n)>>>0,1)},emit:function(t,n){(o.get(t)||[]).slice().map(function(t){t(n)}),(o.get("*")||[]).slice().map(function(o){o(t,n)})}};var o;const e=(t,o,e=[])=>{let c=e;n.all.clear();const r=t=>({id:t.id,selectionStart:t.selectionStart,selectionEnd:t.selectionEnd,selectionDirection:t.selectionDirection,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),i=n=>{const o=(document.activeElement||{id:""}).id,e=Array.prototype.map.call(document.querySelectorAll("[id]"),r);for(;t.firstChild;)t.removeChild(t.firstChild);t.append(...Array.isArray(n)?n:[n]),e.forEach(t=>{const n=document.getElementById(t.id);n&&(t.id===o&&n.focus(),Object.assign(n,t))})};n.on("*",(t,e)=>{c[t]=e,i(o(c,n.emit))}),i(o(c,n.emit))};export{t as m,e as render};
//# sourceMappingURL=minite.modern.js.map