/*global define*/
define([],function(){"use strict";return{createElement:function(e,n,t){var i=document.createElement(e);return n&&(i.className=n),void 0!==t&&(i.innerHTML=t),i},setChild:function(e,n){0===e.childNodes.length?e.appendChild(n):e.replaceChild(n,e.childNodes[0])},setPointerEvents:function(e,n){e.style.pointerEvents=n?"auto":"none"}}});