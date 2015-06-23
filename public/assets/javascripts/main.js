/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
;/*!
 * jQuery Browser Plugin 0.0.7
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 19-05-2015
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],function(b){a(b)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=a(require("jquery")):a(window.jQuery)}(function(a){"use strict";function b(a){void 0===a&&(a=window.navigator.userAgent),a=a.toLowerCase();var b=/(edge)\/([\w.]+)/.exec(a)||/(opr)[\/]([\w.]+)/.exec(a)||/(chrome)[ \/]([\w.]+)/.exec(a)||/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[],c=/(ipad)/.exec(a)||/(ipod)/.exec(a)||/(iphone)/.exec(a)||/(kindle)/.exec(a)||/(silk)/.exec(a)||/(android)/.exec(a)||/(windows phone)/.exec(a)||/(win)/.exec(a)||/(mac)/.exec(a)||/(linux)/.exec(a)||/(cros)/.exec(a)||/(playbook)/.exec(a)||/(bb)/.exec(a)||/(blackberry)/.exec(a)||[],d={},e={browser:b[5]||b[3]||b[1]||"",version:b[2]||b[4]||"0",versionNumber:b[4]||b[2]||"0",platform:c[0]||""};if(e.browser&&(d[e.browser]=!0,d.version=e.version,d.versionNumber=parseInt(e.versionNumber,10)),e.platform&&(d[e.platform]=!0),(d.android||d.bb||d.blackberry||d.ipad||d.iphone||d.ipod||d.kindle||d.playbook||d.silk||d["windows phone"])&&(d.mobile=!0),(d.cros||d.mac||d.linux||d.win)&&(d.desktop=!0),(d.chrome||d.opr||d.safari)&&(d.webkit=!0),d.rv||d.edge){var f="msie";e.browser=f,d[f]=!0}if(d.safari&&d.blackberry){var g="blackberry";e.browser=g,d[g]=!0}if(d.safari&&d.playbook){var h="playbook";e.browser=h,d[h]=!0}if(d.bb){var i="blackberry";e.browser=i,d[i]=!0}if(d.opr){var j="opera";e.browser=j,d[j]=!0}if(d.safari&&d.android){var k="android";e.browser=k,d[k]=!0}if(d.safari&&d.kindle){var l="kindle";e.browser=l,d[l]=!0}if(d.safari&&d.silk){var m="silk";e.browser=m,d[m]=!0}return d.name=e.browser,d.platform=e.platform,d}return window.jQBrowser=b(window.navigator.userAgent),window.jQBrowser.uaMatch=b,a&&(a.browser=window.jQBrowser),window.jQBrowser});
;/*
 * SIP version 0.6.4
 * Copyright (c) 2014-2014 Junction Networks, Inc <http://www.onsip.com>
 * Homepage: http://sipjs.com
 * License: http://sipjs.com/license/
 *
 *
 * ~~~SIP.js contains substantial portions of JsSIP under the following license~~~
 * Homepage: http://jssip.net
 * Copyright (c) 2012-2013 José Luis Millán - Versatica <http://www.versatica.com> 
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * ~~~ end JsSIP license ~~~
 */


!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.SIP=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports={
  "name": "sip.js",
  "title": "SIP.js",
  "description": "A simple, intuitive, and powerful JavaScript signaling library",
  "version": "0.6.4",
  "main": "src/SIP.js",
  "homepage": "http://sipjs.com",
  "author": "Will Mitchell <will@onsip.com>",
  "contributors": [
    {
      "url": "http://sipjs.com/authors/"
    }
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/onsip/SIP.js.git"
  },
  "keywords": [
    "sip",
    "websocket",
    "webrtc",
    "library",
    "javascript"
  ],
  "devDependencies": {
    "grunt": "~0.4.0",
    "grunt-cli": "~0.1.6",
    "grunt-contrib-jasmine": "~0.6.0",
    "grunt-contrib-jshint": ">0.5.0",
    "grunt-contrib-uglify": "~0.2.0",
    "grunt-peg": "~1.3.1",
    "grunt-trimtrailingspaces": "^0.4.0",
    "node-minify": "~0.7.2",
    "pegjs": "0.8.0",
    "sdp-transform": "~0.4.0",
    "grunt-contrib-copy": "^0.5.0",
    "browserify": "^4.1.8",
    "grunt-browserify": "^2.1.0"
  },
  "engines": {
    "node": ">=0.8"
  },
  "license": "MIT",
  "scripts": {
    "test": "grunt travis --verbose"
  }
}

},{}],2:[function(_dereq_,module,exports){
module.exports = function (SIP) {
var ClientContext;

ClientContext = function (ua, method, target, options) {
  var params, extraHeaders,
      originalTarget = target,
      events = [
        'progress',
        'accepted',
        'rejected',
        'failed',
        'cancel'
      ];

  if (target === undefined) {
    throw new TypeError('Not enough arguments');
  }

  // Check target validity
  target = ua.normalizeTarget(target);
  if (!target) {
    throw new TypeError('Invalid target: ' + originalTarget);
  }

  this.ua = ua;
  this.logger = ua.getLogger('sip.clientcontext');
  this.method = method;

  params = options && options.params;
  extraHeaders = (options && options.extraHeaders || []).slice();

  if (options && options.body) {
    this.body = options.body;
  }
  if (options && options.contentType) {
    this.contentType = options.contentType;
    extraHeaders.push('Content-Type: ' + this.contentType);
  }

  this.request = new SIP.OutgoingRequest(this.method, target, this.ua, params, extraHeaders);

  this.localIdentity = this.request.from;
  this.remoteIdentity = this.request.to;

  if (this.body) {
    this.request.body = this.body;
  }

  this.data = {};

  this.initEvents(events);
};
ClientContext.prototype = new SIP.EventEmitter();

ClientContext.prototype.send = function () {
  (new SIP.RequestSender(this, this.ua)).send();
  return this;
};

ClientContext.prototype.cancel = function (options) {
  options = options || {};

  var
  status_code = options.status_code,
  reason_phrase = options.reason_phrase,
  cancel_reason;

  if (status_code && status_code < 200 || status_code > 699) {
    throw new TypeError('Invalid status_code: ' + status_code);
  } else if (status_code) {
    reason_phrase = reason_phrase || SIP.C.REASON_PHRASE[status_code] || '';
    cancel_reason = 'SIP ;cause=' + status_code + ' ;text="' + reason_phrase + '"';
  }
  this.request.cancel(cancel_reason);

  this.emit('cancel');
};

ClientContext.prototype.receiveResponse = function (response) {
  var cause = SIP.C.REASON_PHRASE[response.status_code] || '';

  switch(true) {
    case /^1[0-9]{2}$/.test(response.status_code):
      this.emit('progress', response, cause);
      break;

    case /^2[0-9]{2}$/.test(response.status_code):
      if(this.ua.applicants[this]) {
        delete this.ua.applicants[this];
      }
      this.emit('accepted', response, cause);
      break;

    default:
      if(this.ua.applicants[this]) {
        delete this.ua.applicants[this];
      }
      this.emit('rejected', response, cause);
      this.emit('failed', response, cause);
      break;
  }

};

ClientContext.prototype.onRequestTimeout = function () {
  this.emit('failed', null, SIP.C.causes.REQUEST_TIMEOUT);
};

ClientContext.prototype.onTransportError = function () {
  this.emit('failed', null, SIP.C.causes.CONNECTION_ERROR);
};

SIP.ClientContext = ClientContext;
};

},{}],3:[function(_dereq_,module,exports){
/**
 * @fileoverview SIP Constants
 */

/**
 * SIP Constants.
 * @augments SIP
 */

module.exports = function (name, version) {
return {
  USER_AGENT: name +'/'+ version,

  // SIP scheme
  SIP:  'sip',
  SIPS: 'sips',

  // End and Failure causes
  causes: {
    // Generic error causes
    CONNECTION_ERROR:         'Connection Error',
    REQUEST_TIMEOUT:          'Request Timeout',
    SIP_FAILURE_CODE:         'SIP Failure Code',
    INTERNAL_ERROR:           'Internal Error',

    // SIP error causes
    BUSY:                     'Busy',
    REJECTED:                 'Rejected',
    REDIRECTED:               'Redirected',
    UNAVAILABLE:              'Unavailable',
    NOT_FOUND:                'Not Found',
    ADDRESS_INCOMPLETE:       'Address Incomplete',
    INCOMPATIBLE_SDP:         'Incompatible SDP',
    AUTHENTICATION_ERROR:     'Authentication Error',
    DIALOG_ERROR:             'Dialog Error',

    // Session error causes
    WEBRTC_NOT_SUPPORTED:     'WebRTC Not Supported',
    WEBRTC_ERROR:             'WebRTC Error',
    CANCELED:                 'Canceled',
    NO_ANSWER:                'No Answer',
    EXPIRES:                  'Expires',
    NO_ACK:                   'No ACK',
    NO_PRACK:                 'No PRACK',
    USER_DENIED_MEDIA_ACCESS: 'User Denied Media Access',
    BAD_MEDIA_DESCRIPTION:    'Bad Media Description',
    RTP_TIMEOUT:              'RTP Timeout'
  },

  supported: {
    UNSUPPORTED:        'none',
    SUPPORTED:          'supported',
    REQUIRED:           'required'
  },

  SIP_ERROR_CAUSES: {
    REDIRECTED: [300,301,302,305,380],
    BUSY: [486,600],
    REJECTED: [403,603],
    NOT_FOUND: [404,604],
    UNAVAILABLE: [480,410,408,430],
    ADDRESS_INCOMPLETE: [484],
    INCOMPATIBLE_SDP: [488,606],
    AUTHENTICATION_ERROR:[401,407]
  },

  // SIP Methods
  ACK:        'ACK',
  BYE:        'BYE',
  CANCEL:     'CANCEL',
  INFO:       'INFO',
  INVITE:     'INVITE',
  MESSAGE:    'MESSAGE',
  NOTIFY:     'NOTIFY',
  OPTIONS:    'OPTIONS',
  REGISTER:   'REGISTER',
  UPDATE:     'UPDATE',
  SUBSCRIBE:  'SUBSCRIBE',
  REFER:      'REFER',
  PRACK:      'PRACK',

  /* SIP Response Reasons
   * DOC: http://www.iana.org/assignments/sip-parameters
   * Copied from https://github.com/versatica/OverSIP/blob/master/lib/oversip/sip/constants.rb#L7
   */
  REASON_PHRASE: {
    100: 'Trying',
    180: 'Ringing',
    181: 'Call Is Being Forwarded',
    182: 'Queued',
    183: 'Session Progress',
    199: 'Early Dialog Terminated',  // draft-ietf-sipcore-199
    200: 'OK',
    202: 'Accepted',  // RFC 3265
    204: 'No Notification',  //RFC 5839
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Moved Temporarily',
    305: 'Use Proxy',
    380: 'Alternative Service',
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    410: 'Gone',
    412: 'Conditional Request Failed',  // RFC 3903
    413: 'Request Entity Too Large',
    414: 'Request-URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Unsupported URI Scheme',
    417: 'Unknown Resource-Priority',  // RFC 4412
    420: 'Bad Extension',
    421: 'Extension Required',
    422: 'Session Interval Too Small',  // RFC 4028
    423: 'Interval Too Brief',
    428: 'Use Identity Header',  // RFC 4474
    429: 'Provide Referrer Identity',  // RFC 3892
    430: 'Flow Failed',  // RFC 5626
    433: 'Anonymity Disallowed',  // RFC 5079
    436: 'Bad Identity-Info',  // RFC 4474
    437: 'Unsupported Certificate',  // RFC 4744
    438: 'Invalid Identity Header',  // RFC 4744
    439: 'First Hop Lacks Outbound Support',  // RFC 5626
    440: 'Max-Breadth Exceeded',  // RFC 5393
    469: 'Bad Info Package',  // draft-ietf-sipcore-info-events
    470: 'Consent Needed',  // RFC 5360
    478: 'Unresolvable Destination',  // Custom code copied from Kamailio.
    480: 'Temporarily Unavailable',
    481: 'Call/Transaction Does Not Exist',
    482: 'Loop Detected',
    483: 'Too Many Hops',
    484: 'Address Incomplete',
    485: 'Ambiguous',
    486: 'Busy Here',
    487: 'Request Terminated',
    488: 'Not Acceptable Here',
    489: 'Bad Event',  // RFC 3265
    491: 'Request Pending',
    493: 'Undecipherable',
    494: 'Security Agreement Required',  // RFC 3329
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Server Time-out',
    505: 'Version Not Supported',
    513: 'Message Too Large',
    580: 'Precondition Failure',  // RFC 3312
    600: 'Busy Everywhere',
    603: 'Decline',
    604: 'Does Not Exist Anywhere',
    606: 'Not Acceptable'
  }
};
};

},{}],4:[function(_dereq_,module,exports){

/**
 * @fileoverview In-Dialog Request Sender
 */

/**
 * @augments SIP.Dialog
 * @class Class creating an In-dialog request sender.
 * @param {SIP.Dialog} dialog
 * @param {Object} applicant
 * @param {SIP.OutgoingRequest} request
 */
/**
 * @fileoverview in-Dialog Request Sender
 */

module.exports = function (SIP) {
var RequestSender;

RequestSender = function(dialog, applicant, request) {

  this.dialog = dialog;
  this.applicant = applicant;
  this.request = request;

  // RFC3261 14.1 Modifying an Existing Session. UAC Behavior.
  this.reattempt = false;
  this.reattemptTimer = null;
};

RequestSender.prototype = {
  send: function() {
    var self = this,
      request_sender = new SIP.RequestSender(this, this.dialog.owner.ua);

      request_sender.send();

    // RFC3261 14.2 Modifying an Existing Session -UAC BEHAVIOR-
    if (this.request.method === SIP.C.INVITE && request_sender.clientTransaction.state !== SIP.Transactions.C.STATUS_TERMINATED) {
      this.dialog.uac_pending_reply = true;
      request_sender.clientTransaction.on('stateChanged', function stateChanged(){
        if (this.state === SIP.Transactions.C.STATUS_ACCEPTED ||
            this.state === SIP.Transactions.C.STATUS_COMPLETED ||
            this.state === SIP.Transactions.C.STATUS_TERMINATED) {

          this.off('stateChanged', stateChanged);
          self.dialog.uac_pending_reply = false;

          if (self.dialog.uas_pending_reply === false) {
            self.dialog.owner.onReadyToReinvite();
          }
        }
      });
    }
  },

  onRequestTimeout: function() {
    this.applicant.onRequestTimeout();
  },

  onTransportError: function() {
    this.applicant.onTransportError();
  },

  receiveResponse: function(response) {
    var self = this;

    // RFC3261 12.2.1.2 408 or 481 is received for a request within a dialog.
    if (response.status_code === 408 || response.status_code === 481) {
      this.applicant.onDialogError(response);
    } else if (response.method === SIP.C.INVITE && response.status_code === 491) {
      if (this.reattempt) {
        this.applicant.receiveResponse(response);
      } else {
        this.request.cseq.value = this.dialog.local_seqnum += 1;
        this.reattemptTimer = SIP.Timers.setTimeout(
          function() {
            if (self.applicant.owner.status !== SIP.Session.C.STATUS_TERMINATED) {
              self.reattempt = true;
              self.request_sender.send();
            }
          },
          this.getReattemptTimeout()
        );
      }
    } else {
      this.applicant.receiveResponse(response);
    }
  }
};

return RequestSender;
};

},{}],5:[function(_dereq_,module,exports){
/**
 * @fileoverview SIP Dialog
 */

/**
 * @augments SIP
 * @class Class creating a SIP dialog.
 * @param {SIP.RTCSession} owner
 * @param {SIP.IncomingRequest|SIP.IncomingResponse} message
 * @param {Enum} type UAC / UAS
 * @param {Enum} state SIP.Dialog.C.STATUS_EARLY / SIP.Dialog.C.STATUS_CONFIRMED
 */
module.exports = function (SIP, RequestSender) {

var Dialog,
  C = {
    // Dialog states
    STATUS_EARLY:       1,
    STATUS_CONFIRMED:   2
  };

// RFC 3261 12.1
Dialog = function(owner, message, type, state) {
  var contact;

  this.uac_pending_reply = false;
  this.uas_pending_reply = false;

  if(!message.hasHeader('contact')) {
    return {
      error: 'unable to create a Dialog without Contact header field'
    };
  }

  if(message instanceof SIP.IncomingResponse) {
    state = (message.status_code < 200) ? C.STATUS_EARLY : C.STATUS_CONFIRMED;
  } else {
    // Create confirmed dialog if state is not defined
    state = state || C.STATUS_CONFIRMED;
  }

  contact = message.parseHeader('contact');

  // RFC 3261 12.1.1
  if(type === 'UAS') {
    this.id = {
      call_id: message.call_id,
      local_tag: message.to_tag,
      remote_tag: message.from_tag,
      toString: function() {
        return this.call_id + this.local_tag + this.remote_tag;
      }
    };
    this.state = state;
    this.remote_seqnum = message.cseq;
    this.local_uri = message.parseHeader('to').uri;
    this.remote_uri = message.parseHeader('from').uri;
    this.remote_target = contact.uri;
    this.route_set = message.getHeaders('record-route');
    this.invite_seqnum = message.cseq;
    this.local_seqnum = message.cseq;
  }
  // RFC 3261 12.1.2
  else if(type === 'UAC') {
    this.id = {
      call_id: message.call_id,
      local_tag: message.from_tag,
      remote_tag: message.to_tag,
      toString: function() {
        return this.call_id + this.local_tag + this.remote_tag;
      }
    };
    this.state = state;
    this.invite_seqnum = message.cseq;
    this.local_seqnum = message.cseq;
    this.local_uri = message.parseHeader('from').uri;
    this.pracked = [];
    this.remote_uri = message.parseHeader('to').uri;
    this.remote_target = contact.uri;
    this.route_set = message.getHeaders('record-route').reverse();

    //RENDERBODY
    if (this.state === C.STATUS_EARLY && (!owner.hasOffer)) {
      this.mediaHandler = owner.mediaHandlerFactory(owner);
    }
  }

  this.logger = owner.ua.getLogger('sip.dialog', this.id.toString());
  this.owner = owner;
  owner.ua.dialogs[this.id.toString()] = this;
  this.logger.log('new ' + type + ' dialog created with status ' + (this.state === C.STATUS_EARLY ? 'EARLY': 'CONFIRMED'));
};

Dialog.prototype = {
  /**
   * @param {SIP.IncomingMessage} message
   * @param {Enum} UAC/UAS
   */
  update: function(message, type) {
    this.state = C.STATUS_CONFIRMED;

    this.logger.log('dialog '+ this.id.toString() +'  changed to CONFIRMED state');

    if(type === 'UAC') {
      // RFC 3261 13.2.2.4
      this.route_set = message.getHeaders('record-route').reverse();
    }
  },

  terminate: function() {
    this.logger.log('dialog ' + this.id.toString() + ' deleted');
    if (this.mediaHandler && this.state !== C.STATUS_CONFIRMED) {
      this.mediaHandler.peerConnection.close();
    }
    delete this.owner.ua.dialogs[this.id.toString()];
  },

  /**
  * @param {String} method request method
  * @param {Object} extraHeaders extra headers
  * @returns {SIP.OutgoingRequest}
  */

  // RFC 3261 12.2.1.1
  createRequest: function(method, extraHeaders, body) {
    var cseq, request;
    extraHeaders = (extraHeaders || []).slice();

    if(!this.local_seqnum) { this.local_seqnum = Math.floor(Math.random() * 10000); }

    cseq = (method === SIP.C.CANCEL || method === SIP.C.ACK) ? this.invite_seqnum : this.local_seqnum += 1;

    request = new SIP.OutgoingRequest(
      method,
      this.remote_target,
      this.owner.ua, {
        'cseq': cseq,
        'call_id': this.id.call_id,
        'from_uri': this.local_uri,
        'from_tag': this.id.local_tag,
        'to_uri': this.remote_uri,
        'to_tag': this.id.remote_tag,
        'route_set': this.route_set
      }, extraHeaders, body);

    request.dialog = this;

    return request;
  },

  /**
  * @param {SIP.IncomingRequest} request
  * @returns {Boolean}
  */

  // RFC 3261 12.2.2
  checkInDialogRequest: function(request) {
    var self = this;

    if(!this.remote_seqnum) {
      this.remote_seqnum = request.cseq;
    } else if(request.cseq < this.remote_seqnum) {
        //Do not try to reply to an ACK request.
        if (request.method !== SIP.C.ACK) {
          request.reply(500);
        }
        if (request.cseq === this.invite_seqnum) {
          return true;
        }
        return false;
    } else if(request.cseq > this.remote_seqnum) {
      this.remote_seqnum = request.cseq;
    }

    switch(request.method) {
      // RFC3261 14.2 Modifying an Existing Session -UAS BEHAVIOR-
      case SIP.C.INVITE:
        if (this.uac_pending_reply === true) {
          request.reply(491);
        } else if (this.uas_pending_reply === true) {
          var retryAfter = (Math.random() * 10 | 0) + 1;
          request.reply(500, null, ['Retry-After:' + retryAfter]);
          return false;
        } else {
          this.uas_pending_reply = true;
          request.server_transaction.on('stateChanged', function stateChanged(){
            if (this.state === SIP.Transactions.C.STATUS_ACCEPTED ||
                this.state === SIP.Transactions.C.STATUS_COMPLETED ||
                this.state === SIP.Transactions.C.STATUS_TERMINATED) {

              this.off('stateChanged', stateChanged);
              self.uas_pending_reply = false;

              if (self.uac_pending_reply === false) {
                self.owner.onReadyToReinvite();
              }
            }
          });
        }

        // RFC3261 12.2.2 Replace the dialog`s remote target URI if the request is accepted
        if(request.hasHeader('contact')) {
          request.server_transaction.on('stateChanged', function(){
            if (this.state === SIP.Transactions.C.STATUS_ACCEPTED) {
              self.remote_target = request.parseHeader('contact').uri;
            }
          });
        }
        break;
      case SIP.C.NOTIFY:
        // RFC6665 3.2 Replace the dialog`s remote target URI if the request is accepted
        if(request.hasHeader('contact')) {
          request.server_transaction.on('stateChanged', function(){
            if (this.state === SIP.Transactions.C.STATUS_COMPLETED) {
              self.remote_target = request.parseHeader('contact').uri;
            }
          });
        }
        break;
    }

    return true;
  },

  sendRequest: function(applicant, method, options) {
    options = options || {};

    var
      extraHeaders = (options.extraHeaders || []).slice(),
      body = options.body || null,
      request = this.createRequest(method, extraHeaders, body),
      request_sender = new RequestSender(this, applicant, request);

    request_sender.send();

    return request;
  },

  /**
  * @param {SIP.IncomingRequest} request
  */
  receiveRequest: function(request) {
    //Check in-dialog request
    if(!this.checkInDialogRequest(request)) {
      return;
    }

    this.owner.receiveRequest(request);
  }
};

Dialog.C = C;
SIP.Dialog = Dialog;
};

},{}],6:[function(_dereq_,module,exports){

/**
 * @fileoverview SIP Digest Authentication
 */

/**
 * SIP Digest Authentication.
 * @augments SIP.
 * @function Digest Authentication
 * @param {SIP.UA} ua
 */
module.exports = function (Utils) {
var DigestAuthentication;

DigestAuthentication = function(ua) {
  this.logger = ua.getLogger('sipjs.digestauthentication');
  this.username = ua.configuration.authorizationUser;
  this.password = ua.configuration.password;
  this.cnonce = null;
  this.nc = 0;
  this.ncHex = '00000000';
  this.response = null;
};


/**
* Performs Digest authentication given a SIP request and the challenge
* received in a response to that request.
* Returns true if credentials were successfully generated, false otherwise.
*
* @param {SIP.OutgoingRequest} request
* @param {Object} challenge
*/
DigestAuthentication.prototype.authenticate = function(request, challenge) {
  // Inspect and validate the challenge.

  this.algorithm = challenge.algorithm;
  this.realm = challenge.realm;
  this.nonce = challenge.nonce;
  this.opaque = challenge.opaque;
  this.stale = challenge.stale;

  if (this.algorithm) {
    if (this.algorithm !== 'MD5') {
      this.logger.warn('challenge with Digest algorithm different than "MD5", authentication aborted');
      return false;
    }
  } else {
    this.algorithm = 'MD5';
  }

  if (! this.realm) {
    this.logger.warn('challenge without Digest realm, authentication aborted');
    return false;
  }

  if (! this.nonce) {
    this.logger.warn('challenge without Digest nonce, authentication aborted');
    return false;
  }

  // 'qop' can contain a list of values (Array). Let's choose just one.
  if (challenge.qop) {
    if (challenge.qop.indexOf('auth') > -1) {
      this.qop = 'auth';
    } else if (challenge.qop.indexOf('auth-int') > -1) {
      this.qop = 'auth-int';
    } else {
      // Otherwise 'qop' is present but does not contain 'auth' or 'auth-int', so abort here.
      this.logger.warn('challenge without Digest qop different than "auth" or "auth-int", authentication aborted');
      return false;
    }
  } else {
    this.qop = null;
  }

  // Fill other attributes.

  this.method = request.method;
  this.uri = request.ruri;
  this.cnonce = Utils.createRandomToken(12);
  this.nc += 1;
  this.updateNcHex();

  // nc-value = 8LHEX. Max value = 'FFFFFFFF'.
  if (this.nc === 4294967296) {
    this.nc = 1;
    this.ncHex = '00000001';
  }

  // Calculate the Digest "response" value.
  this.calculateResponse();

  return true;
};


/**
* Generate Digest 'response' value.
* @private
*/
DigestAuthentication.prototype.calculateResponse = function() {
  var ha1, ha2;

  // HA1 = MD5(A1) = MD5(username:realm:password)
  ha1 = Utils.calculateMD5(this.username + ":" + this.realm + ":" + this.password);

  if (this.qop === 'auth') {
    // HA2 = MD5(A2) = MD5(method:digestURI)
    ha2 = Utils.calculateMD5(this.method + ":" + this.uri);
    // response = MD5(HA1:nonce:nonceCount:credentialsNonce:qop:HA2)
    this.response = Utils.calculateMD5(ha1 + ":" + this.nonce + ":" + this.ncHex + ":" + this.cnonce + ":auth:" + ha2);

  } else if (this.qop === 'auth-int') {
    // HA2 = MD5(A2) = MD5(method:digestURI:MD5(entityBody))
    ha2 = Utils.calculateMD5(this.method + ":" + this.uri + ":" + Utils.calculateMD5(this.body ? this.body : ""));
    // response = MD5(HA1:nonce:nonceCount:credentialsNonce:qop:HA2)
    this.response = Utils.calculateMD5(ha1 + ":" + this.nonce + ":" + this.ncHex + ":" + this.cnonce + ":auth-int:" + ha2);

  } else if (this.qop === null) {
    // HA2 = MD5(A2) = MD5(method:digestURI)
    ha2 = Utils.calculateMD5(this.method + ":" + this.uri);
    // response = MD5(HA1:nonce:HA2)
    this.response = Utils.calculateMD5(ha1 + ":" + this.nonce + ":" + ha2);
  }
};


/**
* Return the Proxy-Authorization or WWW-Authorization header value.
*/
DigestAuthentication.prototype.toString = function() {
  var auth_params = [];

  if (! this.response) {
    throw new Error('response field does not exist, cannot generate Authorization header');
  }

  auth_params.push('algorithm=' + this.algorithm);
  auth_params.push('username="' + this.username + '"');
  auth_params.push('realm="' + this.realm + '"');
  auth_params.push('nonce="' + this.nonce + '"');
  auth_params.push('uri="' + this.uri + '"');
  auth_params.push('response="' + this.response + '"');
  if (this.opaque) {
    auth_params.push('opaque="' + this.opaque + '"');
  }
  if (this.qop) {
    auth_params.push('qop=' + this.qop);
    auth_params.push('cnonce="' + this.cnonce + '"');
    auth_params.push('nc=' + this.ncHex);
  }

  return 'Digest ' + auth_params.join(', ');
};


/**
* Generate the 'nc' value as required by Digest in this.ncHex by reading this.nc.
* @private
*/
DigestAuthentication.prototype.updateNcHex = function() {
  var hex = Number(this.nc).toString(16);
  this.ncHex = '00000000'.substr(0, 8-hex.length) + hex;
};

return DigestAuthentication;
};

},{}],7:[function(_dereq_,module,exports){
/**
 * @fileoverview EventEmitter
 */

/**
 * @augments SIP
 * @class Class creating an event emitter.
 */
module.exports = function (SIP) {
var
  EventEmitter,
  Event,
  logger = new SIP.LoggerFactory().getLogger('sip.eventemitter'),
  C = {
    MAX_LISTENERS: 10
  };

EventEmitter = function(){};
EventEmitter.prototype = {
  /**
   * Initialize events dictionaries.
   * @param {Array} events
   */
  initEvents: function(events) {
    this.events = {};

    return this.initMoreEvents(events);
  },

  initMoreEvents: function(events) {
    var idx;

    if (!this.logger) {
      this.logger = logger;
    }

    this.maxListeners = C.MAX_LISTENERS;

    for (idx = 0; idx < events.length; idx++) {
      if (!this.events[events[idx]]) {
        this.logger.log('adding event '+ events[idx]);
        this.events[events[idx]] = [];
      } else {
        this.logger.log('skipping event '+ events[idx]+ ' - Event exists');
      }
    }

    return this;
  },

  /**
  * Check whether an event exists or not.
  * @param {String} event
  * @returns {Boolean}
  */
  checkEvent: function(event) {
    return !!(this.events && this.events[event]);
  },

  /**
  * Check whether an event exists and has at least one listener or not.
  * @param {String} event
  * @returns {Boolean}
  */
  checkListener: function(event) {
    return this.checkEvent(event) && this.events[event].length > 0;
  },

  /**
  * Add a listener to the end of the listeners array for the specified event.
  * @param {String} event
  * @param {Function} listener
  */
  on: function(event, listener, bindTarget) {
    if (listener === undefined) {
      return this;
    } else if (typeof listener !== 'function') {
      this.logger.error('listener must be a function');
      return this;
    } else if (!this.checkEvent(event)) {
      this.logger.error('unable to add a listener to a nonexistent event '+ event);
      throw new TypeError('Invalid or uninitialized event: ' + event);
    }

    var listenerObj = { listener: listener };
    if (bindTarget) {
      listenerObj.bindTarget = bindTarget;
    }

    if (this.events[event].length >= this.maxListeners) {
      this.logger.warn('max listeners exceeded for event '+ event);
      return this;
    }

    this.events[event].push(listenerObj);
    this.logger.log('new listener added to event '+ event);
    return this;
  },

  /**
  * Add a one time listener for the specified event.
  * The listener is invoked only the next time the event is fired, then it is removed.
  * @param {String} event
  * @param {Function} listener
  */
  once: function(event, listener, bindTarget) {
    var self = this;
    function listenOnce () {
      listener.apply(this, arguments);
      self.off(event, listenOnce, bindTarget);
    }

    return this.on(event, listenOnce, bindTarget);
  },

  /**
  * Remove a listener from the listener array for the specified event.
  * Note that the order of the array elements will change after removing the listener
  * @param {String} event
  * @param {Function} listener
  */
  off: function(event, listener, bindTarget) {
    var events, length,
      idx = 0;

    if (listener && typeof listener !== 'function') {
      this.logger.error('listener must be a function');
      return this;
    } else if (!event) {
      for (idx in this.events) {
        this.events[idx] = [];
      }
      return this;
    } else if (!this.checkEvent(event)) {
      this.logger.error('unable to remove a listener from a nonexistent event '+ event);
      throw new TypeError('Invalid or uninitialized event: ' + event);
    }

    events = this.events[event];
    length = events.length;

    while (idx < length) {
      if (events[idx] &&
          (!listener || events[idx].listener === listener) &&
          (!bindTarget || events[idx].bindTarget === bindTarget)) {
        events.splice(idx,1);
      } else {
        idx ++;
      }
    }

    return this;
  },

  /**
  * By default EventEmitter will print a warning
  * if more than C.MAX_LISTENERS listeners are added for a particular event.
  * This function allows that limit to be modified.
  * @param {Number} listeners
  */
  setMaxListeners: function(listeners) {
    if (typeof listeners !== 'number' || listeners < 0) {
      this.logger.error('listeners must be a positive number');
      return this;
    }

    this.maxListeners = listeners;
    return this;
  },

  /**
  * Execute each of the listeners in order with the supplied arguments.
  * @param {String} events
  * @param {Array} args
  */
  emit: function(event) {
    if (!this.checkEvent(event)) {
      this.logger.error('unable to emit a nonexistent event '+ event);
      throw new TypeError('Invalid or uninitialized event: ' + event);
    }

    this.logger.log('emitting event '+ event);

    // Fire event listeners
    var args = Array.prototype.slice.call(arguments, 1);
    this.events[event].slice().forEach(function (listener) {
      try {
        listener.listener.apply(listener.bindTarget || this, args);
      } catch(err) {
        this.logger.error(err.stack);
      }
    }, this);

    return this;
  }
};

Event = function(type, sender, data) {
  this.type = type;
  this.sender= sender;
  this.data = data;
};

EventEmitter.C = C;

SIP.EventEmitter = EventEmitter;
SIP.Event = Event;
};

},{}],8:[function(_dereq_,module,exports){
/**
 * @fileoverview Exceptions
 */

/**
 * SIP Exceptions.
 * @augments SIP
 */
module.exports = {
  ConfigurationError: (function(){
    var exception = function(parameter, value) {
      this.code = 1;
      this.name = 'CONFIGURATION_ERROR';
      this.parameter = parameter;
      this.value = value;
      this.message = (!this.value)? 'Missing parameter: '+ this.parameter : 'Invalid value '+ JSON.stringify(this.value) +' for parameter "'+ this.parameter +'"';
    };
    exception.prototype = new Error();
    return exception;
  }()),

  InvalidStateError: (function(){
    var exception = function(status) {
      this.code = 2;
      this.name = 'INVALID_STATE_ERROR';
      this.status = status;
      this.message = 'Invalid status: ' + status;
    };
    exception.prototype = new Error();
    return exception;
  }()),

  NotSupportedError: (function(){
    var exception = function(message) {
      this.code = 3;
      this.name = 'NOT_SUPPORTED_ERROR';
      this.message = message;
    };
    exception.prototype = new Error();
    return exception;
  }()),

  NotReadyError: (function(){
    var exception = function(message) {
      this.code = 4;
      this.name = 'NOT_READY_ERROR';
      this.message = message;
    };
    exception.prototype = new Error();
    return exception;
  }())
};

},{}],9:[function(_dereq_,module,exports){
/* jshint ignore:start */
module.exports = function(SIP) {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleIndices = { Contact: 118, Name_Addr_Header: 155, Record_Route: 175, Request_Response: 81, SIP_URI: 45, Subscription_State: 182, Via: 190, absoluteURI: 84, Call_ID: 117, Content_Disposition: 129, Content_Length: 134, Content_Type: 135, CSeq: 145, displayName: 121, Event: 148, From: 150, host: 52, Max_Forwards: 153, Proxy_Authenticate: 156, quoted_string: 40, Refer_To: 177, stun_URI: 209, To: 188, turn_URI: 216, uuid: 219, WWW_Authenticate: 205, challenge: 157 },
        peg$startRuleIndex   = 118,

        peg$consts = [
          "\r\n",
          { type: "literal", value: "\r\n", description: "\"\\r\\n\"" },
          /^[0-9]/,
          { type: "class", value: "[0-9]", description: "[0-9]" },
          /^[a-zA-Z]/,
          { type: "class", value: "[a-zA-Z]", description: "[a-zA-Z]" },
          /^[0-9a-fA-F]/,
          { type: "class", value: "[0-9a-fA-F]", description: "[0-9a-fA-F]" },
          /^[\0-\xFF]/,
          { type: "class", value: "[\\0-\\xFF]", description: "[\\0-\\xFF]" },
          /^["]/,
          { type: "class", value: "[\"]", description: "[\"]" },
          " ",
          { type: "literal", value: " ", description: "\" \"" },
          "\t",
          { type: "literal", value: "\t", description: "\"\\t\"" },
          /^[a-zA-Z0-9]/,
          { type: "class", value: "[a-zA-Z0-9]", description: "[a-zA-Z0-9]" },
          ";",
          { type: "literal", value: ";", description: "\";\"" },
          "/",
          { type: "literal", value: "/", description: "\"/\"" },
          "?",
          { type: "literal", value: "?", description: "\"?\"" },
          ":",
          { type: "literal", value: ":", description: "\":\"" },
          "@",
          { type: "literal", value: "@", description: "\"@\"" },
          "&",
          { type: "literal", value: "&", description: "\"&\"" },
          "=",
          { type: "literal", value: "=", description: "\"=\"" },
          "+",
          { type: "literal", value: "+", description: "\"+\"" },
          "$",
          { type: "literal", value: "$", description: "\"$\"" },
          ",",
          { type: "literal", value: ",", description: "\",\"" },
          "-",
          { type: "literal", value: "-", description: "\"-\"" },
          "_",
          { type: "literal", value: "_", description: "\"_\"" },
          ".",
          { type: "literal", value: ".", description: "\".\"" },
          "!",
          { type: "literal", value: "!", description: "\"!\"" },
          "~",
          { type: "literal", value: "~", description: "\"~\"" },
          "*",
          { type: "literal", value: "*", description: "\"*\"" },
          "'",
          { type: "literal", value: "'", description: "\"'\"" },
          "(",
          { type: "literal", value: "(", description: "\"(\"" },
          ")",
          { type: "literal", value: ")", description: "\")\"" },
          peg$FAILED,
          "%",
          { type: "literal", value: "%", description: "\"%\"" },
          function(escaped) {return escaped.join(''); },
          null,
          [],
          function() {return " "; },
          function() {return ':'; },
          function() {
                              return text(); },
          /^[!-~]/,
          { type: "class", value: "[!-~]", description: "[!-~]" },
          /^[\x80-\uFFFF]/,
          { type: "class", value: "[\\x80-\\uFFFF]", description: "[\\x80-\\uFFFF]" },
          /^[\x80-\xBF]/,
          { type: "class", value: "[\\x80-\\xBF]", description: "[\\x80-\\xBF]" },
          /^[a-f]/,
          { type: "class", value: "[a-f]", description: "[a-f]" },
          "`",
          { type: "literal", value: "`", description: "\"`\"" },
          function() {
                            return text(); },
          "<",
          { type: "literal", value: "<", description: "\"<\"" },
          ">",
          { type: "literal", value: ">", description: "\">\"" },
          "\\",
          { type: "literal", value: "\\", description: "\"\\\\\"" },
          "[",
          { type: "literal", value: "[", description: "\"[\"" },
          "]",
          { type: "literal", value: "]", description: "\"]\"" },
          "{",
          { type: "literal", value: "{", description: "\"{\"" },
          "}",
          { type: "literal", value: "}", description: "\"}\"" },
          function() {return "*"; },
          function() {return "/"; },
          function() {return "="; },
          function() {return "("; },
          function() {return ")"; },
          function() {return ">"; },
          function() {return "<"; },
          function() {return ","; },
          function() {return ";"; },
          function() {return ":"; },
          function() {return "\""; },
          /^[!-']/,
          { type: "class", value: "[!-']", description: "[!-']" },
          /^[*-[]/,
          { type: "class", value: "[*-[]", description: "[*-[]" },
          /^[\]-~]/,
          { type: "class", value: "[\\]-~]", description: "[\\]-~]" },
          function(contents) {
                                  return contents; },
          /^[#-[]/,
          { type: "class", value: "[#-[]", description: "[#-[]" },
          /^[\0-\t]/,
          { type: "class", value: "[\\0-\\t]", description: "[\\0-\\t]" },
          /^[\x0B-\f]/,
          { type: "class", value: "[\\x0B-\\f]", description: "[\\x0B-\\f]" },
          /^[\x0E-]/,
          { type: "class", value: "[\\x0E-]", description: "[\\x0E-]" },
          function() {
                                  data.uri = new SIP.URI(data.scheme, data.user, data.host, data.port);
                                  delete data.scheme;
                                  delete data.user;
                                  delete data.host;
                                  delete data.host_type;
                                  delete data.port;
                                },
          function() {
                                  data.uri = new SIP.URI(data.scheme, data.user, data.host, data.port, data.uri_params, data.uri_headers);
                                  delete data.scheme;
                                  delete data.user;
                                  delete data.host;
                                  delete data.host_type;
                                  delete data.port;
                                  delete data.uri_params;

                                  if (options.startRule === 'SIP_URI') { data = data.uri;}
                                },
          "sips",
          { type: "literal", value: "sips", description: "\"sips\"" },
          "sip",
          { type: "literal", value: "sip", description: "\"sip\"" },
          function(uri_scheme) {
                              data.scheme = uri_scheme.toLowerCase(); },
          function() {
                              data.user = decodeURIComponent(text().slice(0, -1));},
          function() {
                              data.password = text(); },
          function() {
                              data.host = text().toLowerCase();
                              return data.host; },
          function() {
                            data.host_type = 'domain';
                            return text(); },
          /^[a-zA-Z0-9_\-]/,
          { type: "class", value: "[a-zA-Z0-9_\\-]", description: "[a-zA-Z0-9_\\-]" },
          /^[a-zA-Z0-9\-]/,
          { type: "class", value: "[a-zA-Z0-9\\-]", description: "[a-zA-Z0-9\\-]" },
          function() {
                              data.host_type = 'IPv6';
                              return text(); },
          "::",
          { type: "literal", value: "::", description: "\"::\"" },
          function() {
                            data.host_type = 'IPv6';
                            return text(); },
          function() {
                              data.host_type = 'IPv4';
                              return text(); },
          "25",
          { type: "literal", value: "25", description: "\"25\"" },
          /^[0-5]/,
          { type: "class", value: "[0-5]", description: "[0-5]" },
          "2",
          { type: "literal", value: "2", description: "\"2\"" },
          /^[0-4]/,
          { type: "class", value: "[0-4]", description: "[0-4]" },
          "1",
          { type: "literal", value: "1", description: "\"1\"" },
          /^[1-9]/,
          { type: "class", value: "[1-9]", description: "[1-9]" },
          function(port) {
                              port = parseInt(port.join(''));
                              data.port = port;
                              return port; },
          "transport=",
          { type: "literal", value: "transport=", description: "\"transport=\"" },
          "udp",
          { type: "literal", value: "udp", description: "\"udp\"" },
          "tcp",
          { type: "literal", value: "tcp", description: "\"tcp\"" },
          "sctp",
          { type: "literal", value: "sctp", description: "\"sctp\"" },
          "tls",
          { type: "literal", value: "tls", description: "\"tls\"" },
          function(transport) {
                                if(!data.uri_params) data.uri_params={};
                                data.uri_params['transport'] = transport.toLowerCase(); },
          "user=",
          { type: "literal", value: "user=", description: "\"user=\"" },
          "phone",
          { type: "literal", value: "phone", description: "\"phone\"" },
          "ip",
          { type: "literal", value: "ip", description: "\"ip\"" },
          function(user) {
                                if(!data.uri_params) data.uri_params={};
                                data.uri_params['user'] = user.toLowerCase(); },
          "method=",
          { type: "literal", value: "method=", description: "\"method=\"" },
          function(method) {
                                if(!data.uri_params) data.uri_params={};
                                data.uri_params['method'] = method; },
          "ttl=",
          { type: "literal", value: "ttl=", description: "\"ttl=\"" },
          function(ttl) {
                                if(!data.params) data.params={};
                                data.params['ttl'] = ttl; },
          "maddr=",
          { type: "literal", value: "maddr=", description: "\"maddr=\"" },
          function(maddr) {
                                if(!data.uri_params) data.uri_params={};
                                data.uri_params['maddr'] = maddr; },
          "lr",
          { type: "literal", value: "lr", description: "\"lr\"" },
          function() {
                                if(!data.uri_params) data.uri_params={};
                                data.uri_params['lr'] = undefined; },
          function(param, value) {
                                if(!data.uri_params) data.uri_params = {};
                                if (value === null){
                                  value = undefined;
                                }
                                else {
                                  value = value[1];
                                }
                                data.uri_params[param.toLowerCase()] = value && value.toLowerCase();},
          function(pname) {return pname.join(''); },
          function(pvalue) {return pvalue.join(''); },
          function(hname, hvalue) {
                                hname = hname.join('').toLowerCase();
                                hvalue = hvalue.join('');
                                if(!data.uri_headers) data.uri_headers = {};
                                if (!data.uri_headers[hname]) {
                                  data.uri_headers[hname] = [hvalue];
                                } else {
                                  data.uri_headers[hname].push(hvalue);
                                }},
          function() {
                                // lots of tests fail if this isn't guarded...
                                if (options.startRule === 'Refer_To') {
                                  data.uri = new SIP.URI(data.scheme, data.user, data.host, data.port, data.uri_params, data.uri_headers);
                                  delete data.scheme;
                                  delete data.user;
                                  delete data.host;
                                  delete data.host_type;
                                  delete data.port;
                                  delete data.uri_params;
                                }
                              },
          "//",
          { type: "literal", value: "//", description: "\"//\"" },
          function() {
                              data.scheme= text(); },
          { type: "literal", value: "SIP", description: "\"SIP\"" },
          function() {
                              data.sip_version = text(); },
          "INVITE",
          { type: "literal", value: "INVITE", description: "\"INVITE\"" },
          "ACK",
          { type: "literal", value: "ACK", description: "\"ACK\"" },
          "VXACH",
          { type: "literal", value: "VXACH", description: "\"VXACH\"" },
          "OPTIONS",
          { type: "literal", value: "OPTIONS", description: "\"OPTIONS\"" },
          "BYE",
          { type: "literal", value: "BYE", description: "\"BYE\"" },
          "CANCEL",
          { type: "literal", value: "CANCEL", description: "\"CANCEL\"" },
          "REGISTER",
          { type: "literal", value: "REGISTER", description: "\"REGISTER\"" },
          "SUBSCRIBE",
          { type: "literal", value: "SUBSCRIBE", description: "\"SUBSCRIBE\"" },
          "NOTIFY",
          { type: "literal", value: "NOTIFY", description: "\"NOTIFY\"" },
          "REFER",
          { type: "literal", value: "REFER", description: "\"REFER\"" },
          function() {

                              data.method = text();
                              return data.method; },
          function(status_code) {
                            data.status_code = parseInt(status_code.join('')); },
          function() {
                            data.reason_phrase = text(); },
          function() {
                        data = text(); },
          function() {
                                  var idx, length;
                                  length = data.multi_header.length;
                                  for (idx = 0; idx < length; idx++) {
                                    if (data.multi_header[idx].parsed === null) {
                                      data = null;
                                      break;
                                    }
                                  }
                                  if (data !== null) {
                                    data = data.multi_header;
                                  } else {
                                    data = -1;
                                  }},
          function() {
                                  var header;
                                  if(!data.multi_header) data.multi_header = [];
                                  try {
                                    header = new SIP.NameAddrHeader(data.uri, data.displayName, data.params);
                                    delete data.uri;
                                    delete data.displayName;
                                    delete data.params;
                                  } catch(e) {
                                    header = null;
                                  }
                                  data.multi_header.push( { 'position': peg$currPos,
                                                            'offset': offset(),
                                                            'parsed': header
                                                          });},
          function(displayName) {
                                  displayName = text().trim();
                                  if (displayName[0] === '\"') {
                                    displayName = displayName.substring(1, displayName.length-1);
                                  }
                                  data.displayName = displayName; },
          "q",
          { type: "literal", value: "q", description: "\"q\"" },
          function(q) {
                                  if(!data.params) data.params = {};
                                  data.params['q'] = q; },
          "expires",
          { type: "literal", value: "expires", description: "\"expires\"" },
          function(expires) {
                                  if(!data.params) data.params = {};
                                  data.params['expires'] = expires; },
          function(delta_seconds) {
                                  return parseInt(delta_seconds.join('')); },
          "0",
          { type: "literal", value: "0", description: "\"0\"" },
          function() {
                                  return parseFloat(text()); },
          function(param, value) {
                                  if(!data.params) data.params = {};
                                  if (value === null){
                                    value = undefined;
                                  }
                                  else {
                                    value = value[1];
                                  }
                                  data.params[param.toLowerCase()] = value;},
          "render",
          { type: "literal", value: "render", description: "\"render\"" },
          "session",
          { type: "literal", value: "session", description: "\"session\"" },
          "icon",
          { type: "literal", value: "icon", description: "\"icon\"" },
          "alert",
          { type: "literal", value: "alert", description: "\"alert\"" },
          function() {
                                      if (options.startRule === 'Content_Disposition') {
                                        data.type = text().toLowerCase();
                                      }
                                    },
          "handling",
          { type: "literal", value: "handling", description: "\"handling\"" },
          "optional",
          { type: "literal", value: "optional", description: "\"optional\"" },
          "required",
          { type: "literal", value: "required", description: "\"required\"" },
          function(length) {
                                  data = parseInt(length.join('')); },
          function() {
                                  data = text(); },
          "text",
          { type: "literal", value: "text", description: "\"text\"" },
          "image",
          { type: "literal", value: "image", description: "\"image\"" },
          "audio",
          { type: "literal", value: "audio", description: "\"audio\"" },
          "video",
          { type: "literal", value: "video", description: "\"video\"" },
          "application",
          { type: "literal", value: "application", description: "\"application\"" },
          "message",
          { type: "literal", value: "message", description: "\"message\"" },
          "multipart",
          { type: "literal", value: "multipart", description: "\"multipart\"" },
          "x-",
          { type: "literal", value: "x-", description: "\"x-\"" },
          function(cseq_value) {
                            data.value=parseInt(cseq_value.join('')); },
          function(expires) {data = expires; },
          function(event_type) {
                                 data.event = event_type.toLowerCase(); },
          function() {
                          var tag = data.tag;
                            data = new SIP.NameAddrHeader(data.uri, data.displayName, data.params);
                            if (tag) {data.setParam('tag',tag)}
                          },
          "tag",
          { type: "literal", value: "tag", description: "\"tag\"" },
          function(tag) {data.tag = tag; },
          function(forwards) {
                            data = parseInt(forwards.join('')); },
          function(min_expires) {data = min_expires; },
          function() {
                                  data = new SIP.NameAddrHeader(data.uri, data.displayName, data.params);
                                },
          "digest",
          { type: "literal", value: "Digest", description: "\"Digest\"" },
          "realm",
          { type: "literal", value: "realm", description: "\"realm\"" },
          function(realm) { data.realm = realm; },
          "domain",
          { type: "literal", value: "domain", description: "\"domain\"" },
          "nonce",
          { type: "literal", value: "nonce", description: "\"nonce\"" },
          function(nonce) { data.nonce=nonce; },
          "opaque",
          { type: "literal", value: "opaque", description: "\"opaque\"" },
          function(opaque) { data.opaque=opaque; },
          "stale",
          { type: "literal", value: "stale", description: "\"stale\"" },
          "true",
          { type: "literal", value: "true", description: "\"true\"" },
          function() { data.stale=true; },
          "false",
          { type: "literal", value: "false", description: "\"false\"" },
          function() { data.stale=false; },
          "algorithm",
          { type: "literal", value: "algorithm", description: "\"algorithm\"" },
          "md5",
          { type: "literal", value: "MD5", description: "\"MD5\"" },
          "md5-sess",
          { type: "literal", value: "MD5-sess", description: "\"MD5-sess\"" },
          function(algorithm) {
                                data.algorithm=algorithm.toUpperCase(); },
          "qop",
          { type: "literal", value: "qop", description: "\"qop\"" },
          "auth-int",
          { type: "literal", value: "auth-int", description: "\"auth-int\"" },
          "auth",
          { type: "literal", value: "auth", description: "\"auth\"" },
          function(qop_value) {
                                  data.qop || (data.qop=[]);
                                  data.qop.push(qop_value.toLowerCase()); },
          function(rack_value) {
                            data.value=parseInt(rack_value.join('')); },
          function() {
                            var idx, length;
                            length = data.multi_header.length;
                            for (idx = 0; idx < length; idx++) {
                              if (data.multi_header[idx].parsed === null) {
                                data = null;
                                break;
                              }
                            }
                            if (data !== null) {
                              data = data.multi_header;
                            } else {
                              data = -1;
                            }},
          function() {
                            var header;
                            if(!data.multi_header) data.multi_header = [];
                            try {
                              header = new SIP.NameAddrHeader(data.uri, data.displayName, data.params);
                              delete data.uri;
                              delete data.displayName;
                              delete data.params;
                            } catch(e) {
                              header = null;
                            }
                            data.multi_header.push( { 'position': peg$currPos,
                                                      'offset': offset(),
                                                      'parsed': header
                                                    });},
          function() {
                        data = new SIP.NameAddrHeader(data.uri, data.displayName, data.params);
                      },
          function(rseq_value) {
                            data.value=parseInt(rseq_value.join('')); },
          "active",
          { type: "literal", value: "active", description: "\"active\"" },
          "pending",
          { type: "literal", value: "pending", description: "\"pending\"" },
          "terminated",
          { type: "literal", value: "terminated", description: "\"terminated\"" },
          function() {
                                  data.state = text(); },
          "reason",
          { type: "literal", value: "reason", description: "\"reason\"" },
          function(reason) {
                                  if (typeof reason !== 'undefined') data.reason = reason; },
          function(expires) {
                                  if (typeof expires !== 'undefined') data.expires = expires; },
          "retry_after",
          { type: "literal", value: "retry_after", description: "\"retry_after\"" },
          function(retry_after) {
                                  if (typeof retry_after !== 'undefined') data.retry_after = retry_after; },
          "deactivated",
          { type: "literal", value: "deactivated", description: "\"deactivated\"" },
          "probation",
          { type: "literal", value: "probation", description: "\"probation\"" },
          "rejected",
          { type: "literal", value: "rejected", description: "\"rejected\"" },
          "timeout",
          { type: "literal", value: "timeout", description: "\"timeout\"" },
          "giveup",
          { type: "literal", value: "giveup", description: "\"giveup\"" },
          "noresource",
          { type: "literal", value: "noresource", description: "\"noresource\"" },
          "invariant",
          { type: "literal", value: "invariant", description: "\"invariant\"" },
          function() {
                        var tag = data.tag;
                          data = new SIP.NameAddrHeader(data.uri, data.displayName, data.params);
                          if (tag) {data.setParam('tag',tag)}
                        },
          "ttl",
          { type: "literal", value: "ttl", description: "\"ttl\"" },
          function(via_ttl_value) {
                                data.ttl = via_ttl_value; },
          "maddr",
          { type: "literal", value: "maddr", description: "\"maddr\"" },
          function(via_maddr) {
                                data.maddr = via_maddr; },
          "received",
          { type: "literal", value: "received", description: "\"received\"" },
          function(via_received) {
                                data.received = via_received; },
          "branch",
          { type: "literal", value: "branch", description: "\"branch\"" },
          function(via_branch) {
                                data.branch = via_branch; },
          "rport",
          { type: "literal", value: "rport", description: "\"rport\"" },
          function() {
                                if(typeof response_port !== 'undefined')
                                  data.rport = response_port.join(''); },
          function(via_protocol) {
                                data.protocol = via_protocol; },
          { type: "literal", value: "UDP", description: "\"UDP\"" },
          { type: "literal", value: "TCP", description: "\"TCP\"" },
          { type: "literal", value: "TLS", description: "\"TLS\"" },
          { type: "literal", value: "SCTP", description: "\"SCTP\"" },
          function(via_transport) {
                                data.transport = via_transport; },
          function() {
                                data.host = text(); },
          function(via_sent_by_port) {
                                data.port = parseInt(via_sent_by_port.join('')); },
          function(ttl) {
                                return parseInt(ttl.join('')); },
          "stuns",
          { type: "literal", value: "stuns", description: "\"stuns\"" },
          "stun",
          { type: "literal", value: "stun", description: "\"stun\"" },
          function(scheme) {
                                data.scheme = scheme; },
          function(host) {
                                data.host = host; },
          function() {
                                return text(); },
          "?transport=",
          { type: "literal", value: "?transport=", description: "\"?transport=\"" },
          "turns",
          { type: "literal", value: "turns", description: "\"turns\"" },
          "turn",
          { type: "literal", value: "turn", description: "\"turn\"" },
          function() {
                                data.transport = transport; },
          function() {
                            data = text(); }
        ],

        peg$bytecode = [
          peg$decode(". \"\"2 3!"),
          peg$decode("0\"\"\"1!3#"),
          peg$decode("0$\"\"1!3%"),
          peg$decode("0&\"\"1!3'"),
          peg$decode("7'*# \"7("),
          peg$decode("0(\"\"1!3)"),
          peg$decode("0*\"\"1!3+"),
          peg$decode(".,\"\"2,3-"),
          peg$decode("..\"\"2.3/"),
          peg$decode("00\"\"1!31"),
          peg$decode(".2\"\"2233*\x89 \".4\"\"2435*} \".6\"\"2637*q \".8\"\"2839*e \".:\"\"2:3;*Y \".<\"\"2<3=*M \".>\"\"2>3?*A \".@\"\"2@3A*5 \".B\"\"2B3C*) \".D\"\"2D3E"),
          peg$decode("7)*# \"7,"),
          peg$decode(".F\"\"2F3G*} \".H\"\"2H3I*q \".J\"\"2J3K*e \".L\"\"2L3M*Y \".N\"\"2N3O*M \".P\"\"2P3Q*A \".R\"\"2R3S*5 \".T\"\"2T3U*) \".V\"\"2V3W"),
          peg$decode("!!.Y\"\"2Y3Z+7$7#+-%7#+#%'#%$## X$\"# X\"# X+' 4!6[!! %"),
          peg$decode("!! ]7$,#&7$\"+-$7 +#%'\"%$\"# X\"# X*# \" \\+@$ ]7$+&$,#&7$\"\"\" X+'%4\"6^\" %$\"# X\"# X"),
          peg$decode("7.*# \" \\"),
          peg$decode("! ]7'*# \"7(,)&7'*# \"7(\"+A$.8\"\"2839+1%7/+'%4#6_# %$## X$\"# X\"# X"),
          peg$decode("! ]72+&$,#&72\"\"\" X+s$ ]! ]7.,#&7.\"+-$72+#%'\"%$\"# X\"# X,@&! ]7.,#&7.\"+-$72+#%'\"%$\"# X\"# X\"+'%4\"6`\" %$\"# X\"# X"),
          peg$decode("0a\"\"1!3b*# \"73"),
          peg$decode("0c\"\"1!3d"),
          peg$decode("0e\"\"1!3f"),
          peg$decode("7!*) \"0g\"\"1!3h"),
          peg$decode("! ]7)*\x95 \".F\"\"2F3G*\x89 \".J\"\"2J3K*} \".L\"\"2L3M*q \".Y\"\"2Y3Z*e \".P\"\"2P3Q*Y \".H\"\"2H3I*M \".@\"\"2@3A*A \".i\"\"2i3j*5 \".R\"\"2R3S*) \".N\"\"2N3O+\x9E$,\x9B&7)*\x95 \".F\"\"2F3G*\x89 \".J\"\"2J3K*} \".L\"\"2L3M*q \".Y\"\"2Y3Z*e \".P\"\"2P3Q*Y \".H\"\"2H3I*M \".@\"\"2@3A*A \".i\"\"2i3j*5 \".R\"\"2R3S*) \".N\"\"2N3O\"\"\" X+& 4!6k! %"),
          peg$decode("! ]7)*\x89 \".F\"\"2F3G*} \".L\"\"2L3M*q \".Y\"\"2Y3Z*e \".P\"\"2P3Q*Y \".H\"\"2H3I*M \".@\"\"2@3A*A \".i\"\"2i3j*5 \".R\"\"2R3S*) \".N\"\"2N3O+\x92$,\x8F&7)*\x89 \".F\"\"2F3G*} \".L\"\"2L3M*q \".Y\"\"2Y3Z*e \".P\"\"2P3Q*Y \".H\"\"2H3I*M \".@\"\"2@3A*A \".i\"\"2i3j*5 \".R\"\"2R3S*) \".N\"\"2N3O\"\"\" X+& 4!6k! %"),
          peg$decode(".T\"\"2T3U*\xE3 \".V\"\"2V3W*\xD7 \".l\"\"2l3m*\xCB \".n\"\"2n3o*\xBF \".:\"\"2:3;*\xB3 \".D\"\"2D3E*\xA7 \".2\"\"2233*\x9B \".8\"\"2839*\x8F \".p\"\"2p3q*\x83 \"7&*} \".4\"\"2435*q \".r\"\"2r3s*e \".t\"\"2t3u*Y \".6\"\"2637*M \".>\"\"2>3?*A \".v\"\"2v3w*5 \".x\"\"2x3y*) \"7'*# \"7("),
          peg$decode("! ]7)*\u012B \".F\"\"2F3G*\u011F \".J\"\"2J3K*\u0113 \".L\"\"2L3M*\u0107 \".Y\"\"2Y3Z*\xFB \".P\"\"2P3Q*\xEF \".H\"\"2H3I*\xE3 \".@\"\"2@3A*\xD7 \".i\"\"2i3j*\xCB \".R\"\"2R3S*\xBF \".N\"\"2N3O*\xB3 \".T\"\"2T3U*\xA7 \".V\"\"2V3W*\x9B \".l\"\"2l3m*\x8F \".n\"\"2n3o*\x83 \".8\"\"2839*w \".p\"\"2p3q*k \"7&*e \".4\"\"2435*Y \".r\"\"2r3s*M \".t\"\"2t3u*A \".6\"\"2637*5 \".v\"\"2v3w*) \".x\"\"2x3y+\u0134$,\u0131&7)*\u012B \".F\"\"2F3G*\u011F \".J\"\"2J3K*\u0113 \".L\"\"2L3M*\u0107 \".Y\"\"2Y3Z*\xFB \".P\"\"2P3Q*\xEF \".H\"\"2H3I*\xE3 \".@\"\"2@3A*\xD7 \".i\"\"2i3j*\xCB \".R\"\"2R3S*\xBF \".N\"\"2N3O*\xB3 \".T\"\"2T3U*\xA7 \".V\"\"2V3W*\x9B \".l\"\"2l3m*\x8F \".n\"\"2n3o*\x83 \".8\"\"2839*w \".p\"\"2p3q*k \"7&*e \".4\"\"2435*Y \".r\"\"2r3s*M \".t\"\"2t3u*A \".6\"\"2637*5 \".v\"\"2v3w*) \".x\"\"2x3y\"\"\" X+& 4!6k! %"),
          peg$decode("!7/+A$.P\"\"2P3Q+1%7/+'%4#6z# %$## X$\"# X\"# X"),
          peg$decode("!7/+A$.4\"\"2435+1%7/+'%4#6{# %$## X$\"# X\"# X"),
          peg$decode("!7/+A$.>\"\"2>3?+1%7/+'%4#6|# %$## X$\"# X\"# X"),
          peg$decode("!7/+A$.T\"\"2T3U+1%7/+'%4#6}# %$## X$\"# X\"# X"),
          peg$decode("!7/+A$.V\"\"2V3W+1%7/+'%4#6~# %$## X$\"# X\"# X"),
          peg$decode("!.n\"\"2n3o+1$7/+'%4\"6\" %$\"# X\"# X"),
          peg$decode("!7/+7$.l\"\"2l3m+'%4\"6\x80\" %$\"# X\"# X"),
          peg$decode("!7/+A$.D\"\"2D3E+1%7/+'%4#6\x81# %$## X$\"# X\"# X"),
          peg$decode("!7/+A$.2\"\"2233+1%7/+'%4#6\x82# %$## X$\"# X\"# X"),
          peg$decode("!7/+A$.8\"\"2839+1%7/+'%4#6\x83# %$## X$\"# X\"# X"),
          peg$decode("!7/+1$7&+'%4\"6\x84\" %$\"# X\"# X"),
          peg$decode("!7&+1$7/+'%4\"6\x84\" %$\"# X\"# X"),
          peg$decode("!7=+W$ ]7G*) \"7K*# \"7F,/&7G*) \"7K*# \"7F\"+-%7>+#%'#%$## X$\"# X\"# X"),
          peg$decode("0\x85\"\"1!3\x86*A \"0\x87\"\"1!3\x88*5 \"0\x89\"\"1!3\x8A*) \"73*# \"7."),
          peg$decode("!7/+Y$7&+O% ]7J*# \"7K,)&7J*# \"7K\"+1%7&+'%4$6k$ %$$# X$## X$\"# X\"# X"),
          peg$decode("!7/+`$7&+V%! ]7J*# \"7K,)&7J*# \"7K\"+! (%+2%7&+(%4$6\x8B$!!%$$# X$## X$\"# X\"# X"),
          peg$decode("7.*G \".L\"\"2L3M*; \"0\x8C\"\"1!3\x8D*/ \"0\x89\"\"1!3\x8A*# \"73"),
          peg$decode("!.p\"\"2p3q+K$0\x8E\"\"1!3\x8F*5 \"0\x90\"\"1!3\x91*) \"0\x92\"\"1!3\x93+#%'\"%$\"# X\"# X"),
          peg$decode("!7N+Q$.8\"\"2839+A%7O*# \" \\+1%7S+'%4$6\x94$ %$$# X$## X$\"# X\"# X"),
          peg$decode("!7N+k$.8\"\"2839+[%7O*# \" \\+K%7S+A%7_+7%7l*# \" \\+'%4&6\x95& %$&# X$%# X$$# X$## X$\"# X\"# X"),
          peg$decode("!/\x96\"\"1$3\x97*) \"/\x98\"\"1#3\x99+' 4!6\x9A!! %"),
          peg$decode("!7P+b$!.8\"\"2839+-$7R+#%'\"%$\"# X\"# X*# \" \\+7%.:\"\"2:3;+'%4#6\x9B# %$## X$\"# X\"# X"),
          peg$decode(" ]7+*) \"7-*# \"7Q+2$,/&7+*) \"7-*# \"7Q\"\"\" X"),
          peg$decode(".<\"\"2<3=*q \".>\"\"2>3?*e \".@\"\"2@3A*Y \".B\"\"2B3C*M \".D\"\"2D3E*A \".2\"\"2233*5 \".6\"\"2637*) \".4\"\"2435"),
          peg$decode("! ]7+*_ \"7-*Y \".<\"\"2<3=*M \".>\"\"2>3?*A \".@\"\"2@3A*5 \".B\"\"2B3C*) \".D\"\"2D3E,e&7+*_ \"7-*Y \".<\"\"2<3=*M \".>\"\"2>3?*A \".@\"\"2@3A*5 \".B\"\"2B3C*) \".D\"\"2D3E\"+& 4!6\x9C! %"),
          peg$decode("!7T+N$!.8\"\"2839+-$7^+#%'\"%$\"# X\"# X*# \" \\+#%'\"%$\"# X\"# X"),
          peg$decode("!7U*) \"7\\*# \"7X+& 4!6\x9D! %"),
          peg$decode("! ]!7V+3$.J\"\"2J3K+#%'\"%$\"# X\"# X,>&!7V+3$.J\"\"2J3K+#%'\"%$\"# X\"# X\"+G$7W+=%.J\"\"2J3K*# \" \\+'%4#6\x9E# %$## X$\"# X\"# X"),
          peg$decode(" ]0\x9F\"\"1!3\xA0+,$,)&0\x9F\"\"1!3\xA0\"\"\" X"),
          peg$decode("!0$\"\"1!3%+A$ ]0\xA1\"\"1!3\xA2,)&0\xA1\"\"1!3\xA2\"+#%'\"%$\"# X\"# X"),
          peg$decode("!.r\"\"2r3s+A$7Y+7%.t\"\"2t3u+'%4#6\xA3# %$## X$\"# X\"# X"),
          peg$decode("!!7Z+\xBF$.8\"\"2839+\xAF%7Z+\xA5%.8\"\"2839+\x95%7Z+\x8B%.8\"\"2839+{%7Z+q%.8\"\"2839+a%7Z+W%.8\"\"2839+G%7Z+=%.8\"\"2839+-%7[+#%'-%$-# X$,# X$+# X$*# X$)# X$(# X$'# X$&# X$%# X$$# X$## X$\"# X\"# X*\u0838 \"!.\xA4\"\"2\xA43\xA5+\xAF$7Z+\xA5%.8\"\"2839+\x95%7Z+\x8B%.8\"\"2839+{%7Z+q%.8\"\"2839+a%7Z+W%.8\"\"2839+G%7Z+=%.8\"\"2839+-%7[+#%',%$,# X$+# X$*# X$)# X$(# X$'# X$&# X$%# X$$# X$## X$\"# X\"# X*\u0795 \"!.\xA4\"\"2\xA43\xA5+\x95$7Z+\x8B%.8\"\"2839+{%7Z+q%.8\"\"2839+a%7Z+W%.8\"\"2839+G%7Z+=%.8\"\"2839+-%7[+#%'*%$*# X$)# X$(# X$'# X$&# X$%# X$$# X$## X$\"# X\"# X*\u070C \"!.\xA4\"\"2\xA43\xA5+{$7Z+q%.8\"\"2839+a%7Z+W%.8\"\"2839+G%7Z+=%.8\"\"2839+-%7[+#%'(%$(# X$'# X$&# X$%# X$$# X$## X$\"# X\"# X*\u069D \"!.\xA4\"\"2\xA43\xA5+a$7Z+W%.8\"\"2839+G%7Z+=%.8\"\"2839+-%7[+#%'&%$&# X$%# X$$# X$## X$\"# X\"# X*\u0648 \"!.\xA4\"\"2\xA43\xA5+G$7Z+=%.8\"\"2839+-%7[+#%'$%$$# X$## X$\"# X\"# X*\u060D \"!.\xA4\"\"2\xA43\xA5+-$7[+#%'\"%$\"# X\"# X*\u05EC \"!.\xA4\"\"2\xA43\xA5+-$7Z+#%'\"%$\"# X\"# X*\u05CB \"!7Z+\xA5$.\xA4\"\"2\xA43\xA5+\x95%7Z+\x8B%.8\"\"2839+{%7Z+q%.8\"\"2839+a%7Z+W%.8\"\"2839+G%7Z+=%.8\"\"2839+-%7[+#%'+%$+# X$*# X$)# X$(# X$'# X$&# X$%# X$$# X$## X$\"# X\"# X*\u0538 \"!7Z+\xB6$!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\x8B%.\xA4\"\"2\xA43\xA5+{%7Z+q%.8\"\"2839+a%7Z+W%.8\"\"2839+G%7Z+=%.8\"\"2839+-%7[+#%'*%$*# X$)# X$(# X$'# X$&# X$%# X$$# X$## X$\"# X\"# X*\u0494 \"!7Z+\xC7$!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\x9C%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+q%.\xA4\"\"2\xA43\xA5+a%7Z+W%.8\"\"2839+G%7Z+=%.8\"\"2839+-%7[+#%')%$)# X$(# X$'# X$&# X$%# X$$# X$## X$\"# X\"# X*\u03DF \"!7Z+\xD8$!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\xAD%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\x82%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+W%.\xA4\"\"2\xA43\xA5+G%7Z+=%.8\"\"2839+-%7[+#%'(%$(# X$'# X$&# X$%# X$$# X$## X$\"# X\"# X*\u0319 \"!7Z+\xE9$!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\xBE%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\x93%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+h%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+=%.\xA4\"\"2\xA43\xA5+-%7[+#%''%$'# X$&# X$%# X$$# X$## X$\"# X\"# X*\u0242 \"!7Z+\u0114$!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\xE9%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\xBE%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\x93%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+h%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+=%.\xA4\"\"2\xA43\xA5+-%7Z+#%'(%$(# X$'# X$&# X$%# X$$# X$## X$\"# X\"# X*\u0140 \"!7Z+\u0135$!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\u010A%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\xDF%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\xB4%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+\x89%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+^%!.8\"\"2839+-$7Z+#%'\"%$\"# X\"# X*# \" \\+3%.\xA4\"\"2\xA43\xA5+#%'(%$(# X$'# X$&# X$%# X$$# X$## X$\"# X\"# X+& 4!6\xA6! %"),
          peg$decode("!7#+S$7#*# \" \\+C%7#*# \" \\+3%7#*# \" \\+#%'$%$$# X$## X$\"# X\"# X"),
          peg$decode("!7Z+=$.8\"\"2839+-%7Z+#%'#%$## X$\"# X\"# X*# \"7\\"),
          peg$decode("!7]+u$.J\"\"2J3K+e%7]+[%.J\"\"2J3K+K%7]+A%.J\"\"2J3K+1%7]+'%4'6\xA7' %$'# X$&# X$%# X$$# X$## X$\"# X\"# X"),
          peg$decode("!.\xA8\"\"2\xA83\xA9+3$0\xAA\"\"1!3\xAB+#%'\"%$\"# X\"# X*\xA0 \"!.\xAC\"\"2\xAC3\xAD+=$0\xAE\"\"1!3\xAF+-%7!+#%'#%$## X$\"# X\"# X*o \"!.\xB0\"\"2\xB03\xB1+7$7!+-%7!+#%'#%$## X$\"# X\"# X*D \"!0\xB2\"\"1!3\xB3+-$7!+#%'\"%$\"# X\"# X*# \"7!"),
          peg$decode("!!7!*# \" \\+c$7!*# \" \\+S%7!*# \" \\+C%7!*# \" \\+3%7!*# \" \\+#%'%%$%# X$$# X$## X$\"# X\"# X+' 4!6\xB4!! %"),
          peg$decode(" ]!.2\"\"2233+-$7`+#%'\"%$\"# X\"# X,>&!.2\"\"2233+-$7`+#%'\"%$\"# X\"# X\""),
          peg$decode("7a*A \"7b*; \"7c*5 \"7d*/ \"7e*) \"7f*# \"7g"),
          peg$decode("!/\xB5\"\"1*3\xB6+b$/\xB7\"\"1#3\xB8*G \"/\xB9\"\"1#3\xBA*; \"/\xBB\"\"1$3\xBC*/ \"/\xBD\"\"1#3\xBE*# \"76+(%4\"6\xBF\"! %$\"# X\"# X"),
          peg$decode("!/\xC0\"\"1%3\xC1+J$/\xC2\"\"1%3\xC3*/ \"/\xC4\"\"1\"3\xC5*# \"76+(%4\"6\xC6\"! %$\"# X\"# X"),
          peg$decode("!/\xC7\"\"1'3\xC8+2$7\x8F+(%4\"6\xC9\"! %$\"# X\"# X"),
          peg$decode("!/\xCA\"\"1$3\xCB+2$7\xEC+(%4\"6\xCC\"! %$\"# X\"# X"),
          peg$decode("!/\xCD\"\"1&3\xCE+2$7T+(%4\"6\xCF\"! %$\"# X\"# X"),
          peg$decode("!/\xD0\"\"1\"3\xD1+R$!.>\"\"2>3?+-$76+#%'\"%$\"# X\"# X*# \" \\+'%4\"6\xD2\" %$\"# X\"# X"),
          peg$decode("!7h+T$!.>\"\"2>3?+-$7i+#%'\"%$\"# X\"# X*# \" \\+)%4\"6\xD3\"\"! %$\"# X\"# X"),
          peg$decode("! ]7j+&$,#&7j\"\"\" X+' 4!6\xD4!! %"),
          peg$decode("! ]7j+&$,#&7j\"\"\" X+' 4!6\xD5!! %"),
          peg$decode("7k*) \"7+*# \"7-"),
          peg$decode(".r\"\"2r3s*e \".t\"\"2t3u*Y \".4\"\"2435*M \".8\"\"2839*A \".<\"\"2<3=*5 \".@\"\"2@3A*) \".B\"\"2B3C"),
          peg$decode("!.6\"\"2637+u$7m+k% ]!.<\"\"2<3=+-$7m+#%'\"%$\"# X\"# X,>&!.<\"\"2<3=+-$7m+#%'\"%$\"# X\"# X\"+#%'#%$## X$\"# X\"# X"),
          peg$decode("!7n+C$.>\"\"2>3?+3%7o+)%4#6\xD6#\"\" %$## X$\"# X\"# X"),
          peg$decode(" ]7p*) \"7+*# \"7-+2$,/&7p*) \"7+*# \"7-\"\"\" X"),
          peg$decode(" ]7p*) \"7+*# \"7-,/&7p*) \"7+*# \"7-\""),
          peg$decode(".r\"\"2r3s*e \".t\"\"2t3u*Y \".4\"\"2435*M \".6\"\"2637*A \".8\"\"2839*5 \".@\"\"2@3A*) \".B\"\"2B3C"),
          peg$decode("7\x90*# \"7r"),
          peg$decode("!7\x8F+K$7'+A%7s+7%7'+-%7\x84+#%'%%$%# X$$# X$## X$\"# X\"# X"),
          peg$decode("7M*# \"7t"),
          peg$decode("!7+G$.8\"\"2839+7%7u*# \"7x+'%4#6\xD7# %$## X$\"# X\"# X"),
          peg$decode("!7v*# \"7w+N$!.6\"\"2637+-$7\x83+#%'\"%$\"# X\"# X*# \" \\+#%'\"%$\"# X\"# X"),
          peg$decode("!.\xD8\"\"2\xD83\xD9+=$7\x80+3%7w*# \" \\+#%'#%$## X$\"# X\"# X"),
          peg$decode("!.4\"\"2435+-$7{+#%'\"%$\"# X\"# X"),
          peg$decode("!7z+5$ ]7y,#&7y\"+#%'\"%$\"# X\"# X"),
          peg$decode("7**) \"7+*# \"7-"),
          peg$decode("7+*\x8F \"7-*\x89 \".2\"\"2233*} \".6\"\"2637*q \".8\"\"2839*e \".:\"\"2:3;*Y \".<\"\"2<3=*M \".>\"\"2>3?*A \".@\"\"2@3A*5 \".B\"\"2B3C*) \".D\"\"2D3E"),
          peg$decode("!7|+k$ ]!.4\"\"2435+-$7|+#%'\"%$\"# X\"# X,>&!.4\"\"2435+-$7|+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X"),
          peg$decode("! ]7~,#&7~\"+k$ ]!.2\"\"2233+-$7}+#%'\"%$\"# X\"# X,>&!.2\"\"2233+-$7}+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X"),
          peg$decode(" ]7~,#&7~\""),
          peg$decode("7+*w \"7-*q \".8\"\"2839*e \".:\"\"2:3;*Y \".<\"\"2<3=*M \".>\"\"2>3?*A \".@\"\"2@3A*5 \".B\"\"2B3C*) \".D\"\"2D3E"),
          peg$decode("!7\"+\x8D$ ]7\"*G \"7!*A \".@\"\"2@3A*5 \".F\"\"2F3G*) \".J\"\"2J3K,M&7\"*G \"7!*A \".@\"\"2@3A*5 \".F\"\"2F3G*) \".J\"\"2J3K\"+'%4\"6\xDA\" %$\"# X\"# X"),
          peg$decode("7\x81*# \"7\x82"),
          peg$decode("!!7O+3$.:\"\"2:3;+#%'\"%$\"# X\"# X*# \" \\+-$7S+#%'\"%$\"# X\"# X*# \" \\"),
          peg$decode(" ]7+*\x83 \"7-*} \".B\"\"2B3C*q \".D\"\"2D3E*e \".2\"\"2233*Y \".8\"\"2839*M \".:\"\"2:3;*A \".<\"\"2<3=*5 \".>\"\"2>3?*) \".@\"\"2@3A+\x8C$,\x89&7+*\x83 \"7-*} \".B\"\"2B3C*q \".D\"\"2D3E*e \".2\"\"2233*Y \".8\"\"2839*M \".:\"\"2:3;*A \".<\"\"2<3=*5 \".>\"\"2>3?*) \".@\"\"2@3A\"\"\" X"),
          peg$decode(" ]7y,#&7y\""),
          peg$decode("!/\x98\"\"1#3\xDB+y$.4\"\"2435+i% ]7!+&$,#&7!\"\"\" X+P%.J\"\"2J3K+@% ]7!+&$,#&7!\"\"\" X+'%4%6\xDC% %$%# X$$# X$## X$\"# X\"# X"),
          peg$decode(".\xDD\"\"2\xDD3\xDE"),
          peg$decode(".\xDF\"\"2\xDF3\xE0"),
          peg$decode(".\xE1\"\"2\xE13\xE2"),
          peg$decode(".\xE3\"\"2\xE33\xE4"),
          peg$decode(".\xE5\"\"2\xE53\xE6"),
          peg$decode(".\xE7\"\"2\xE73\xE8"),
          peg$decode(".\xE9\"\"2\xE93\xEA"),
          peg$decode(".\xEB\"\"2\xEB3\xEC"),
          peg$decode(".\xED\"\"2\xED3\xEE"),
          peg$decode(".\xEF\"\"2\xEF3\xF0"),
          peg$decode("!7\x85*S \"7\x86*M \"7\x88*G \"7\x89*A \"7\x8A*; \"7\x8B*5 \"7\x8C*/ \"7\x8D*) \"7\x8E*# \"76+& 4!6\xF1! %"),
          peg$decode("!7\x84+K$7'+A%7\x91+7%7'+-%7\x93+#%'%%$%# X$$# X$## X$\"# X\"# X"),
          peg$decode("!7\x92+' 4!6\xF2!! %"),
          peg$decode("!7!+7$7!+-%7!+#%'#%$## X$\"# X\"# X"),
          peg$decode("! ]7**A \"7+*; \"7-*5 \"73*/ \"74*) \"7'*# \"7(,G&7**A \"7+*; \"7-*5 \"73*/ \"74*) \"7'*# \"7(\"+& 4!6\xF3! %"),
          peg$decode("!7\xB5+_$ ]!7A+-$7\xB5+#%'\"%$\"# X\"# X,8&!7A+-$7\xB5+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X"),
          peg$decode("!79+R$!.:\"\"2:3;+-$79+#%'\"%$\"# X\"# X*# \" \\+'%4\"6\xF4\" %$\"# X\"# X"),
          peg$decode("!7:*j \"!7\x97+_$ ]!7A+-$7\x97+#%'\"%$\"# X\"# X,8&!7A+-$7\x97+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X+& 4!6\xF5! %"),
          peg$decode("!7L*# \"7\x98+c$ ]!7B+-$7\x9A+#%'\"%$\"# X\"# X,8&!7B+-$7\x9A+#%'\"%$\"# X\"# X\"+'%4\"6\xF6\" %$\"# X\"# X"),
          peg$decode("!7\x99*# \" \\+A$7@+7%7M+-%7?+#%'$%$$# X$## X$\"# X\"# X"),
          peg$decode("!!76+_$ ]!7.+-$76+#%'\"%$\"# X\"# X,8&!7.+-$76+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X*# \"7H+' 4!6\xF7!! %"),
          peg$decode("7\x9B*) \"7\x9C*# \"7\x9F"),
          peg$decode("!/\xF8\"\"1!3\xF9+<$7<+2%7\x9E+(%4#6\xFA#! %$## X$\"# X\"# X"),
          peg$decode("!/\xFB\"\"1'3\xFC+<$7<+2%7\x9D+(%4#6\xFD#! %$## X$\"# X\"# X"),
          peg$decode("! ]7!+&$,#&7!\"\"\" X+' 4!6\xFE!! %"),
          peg$decode("!.\xFF\"\"2\xFF3\u0100+x$!.J\"\"2J3K+S$7!*# \" \\+C%7!*# \" \\+3%7!*# \" \\+#%'$%$$# X$## X$\"# X\"# X*# \" \\+'%4\"6\u0101\" %$\"# X\"# X"),
          peg$decode("!76+N$!7<+-$7\xA0+#%'\"%$\"# X\"# X*# \" \\+)%4\"6\u0102\"\"! %$\"# X\"# X"),
          peg$decode("76*) \"7T*# \"7H"),
          peg$decode("!7\xA2+_$ ]!7B+-$7\xA3+#%'\"%$\"# X\"# X,8&!7B+-$7\xA3+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X"),
          peg$decode("!/\u0103\"\"1&3\u0104*G \"/\u0105\"\"1'3\u0106*; \"/\u0107\"\"1$3\u0108*/ \"/\u0109\"\"1%3\u010A*# \"76+& 4!6\u010B! %"),
          peg$decode("7\xA4*# \"7\x9F"),
          peg$decode("!/\u010C\"\"1(3\u010D+O$7<+E%/\u010E\"\"1(3\u010F*/ \"/\u0110\"\"1(3\u0111*# \"76+#%'#%$## X$\"# X\"# X"),
          peg$decode("!76+_$ ]!7A+-$76+#%'\"%$\"# X\"# X,8&!7A+-$76+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X"),
          peg$decode("! ]7!+&$,#&7!\"\"\" X+' 4!6\u0112!! %"),
          peg$decode("!7\xA8+& 4!6\u0113! %"),
          peg$decode("!7\xA9+s$7;+i%7\xAE+_% ]!7B+-$7\xAF+#%'\"%$\"# X\"# X,8&!7B+-$7\xAF+#%'\"%$\"# X\"# X\"+#%'$%$$# X$## X$\"# X\"# X"),
          peg$decode("7\xAA*# \"7\xAB"),
          peg$decode("/\u0114\"\"1$3\u0115*S \"/\u0116\"\"1%3\u0117*G \"/\u0118\"\"1%3\u0119*; \"/\u011A\"\"1%3\u011B*/ \"/\u011C\"\"1+3\u011D*# \"7\xAC"),
          peg$decode("/\u011E\"\"1'3\u011F*/ \"/\u0120\"\"1)3\u0121*# \"7\xAC"),
          peg$decode("76*# \"7\xAD"),
          peg$decode("!/\u0122\"\"1\"3\u0123+-$76+#%'\"%$\"# X\"# X"),
          peg$decode("7\xAC*# \"76"),
          peg$decode("!76+7$7<+-%7\xB0+#%'#%$## X$\"# X\"# X"),
          peg$decode("76*# \"7H"),
          peg$decode("!7\xB2+7$7.+-%7\x8F+#%'#%$## X$\"# X\"# X"),
          peg$decode("! ]7!+&$,#&7!\"\"\" X+' 4!6\u0124!! %"),
          peg$decode("!7\x9D+' 4!6\u0125!! %"),
          peg$decode("!7\xB5+d$ ]!7B+-$7\x9F+#%'\"%$\"# X\"# X,8&!7B+-$7\x9F+#%'\"%$\"# X\"# X\"+(%4\"6\u0126\"!!%$\"# X\"# X"),
          peg$decode("!!77+k$ ]!.J\"\"2J3K+-$77+#%'\"%$\"# X\"# X,>&!.J\"\"2J3K+-$77+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X+! (%"),
          peg$decode("!7L*# \"7\x98+c$ ]!7B+-$7\xB7+#%'\"%$\"# X\"# X,8&!7B+-$7\xB7+#%'\"%$\"# X\"# X\"+'%4\"6\u0127\" %$\"# X\"# X"),
          peg$decode("7\xB8*# \"7\x9F"),
          peg$decode("!/\u0128\"\"1#3\u0129+<$7<+2%76+(%4#6\u012A#! %$## X$\"# X\"# X"),
          peg$decode("! ]7!+&$,#&7!\"\"\" X+' 4!6\u012B!! %"),
          peg$decode("!7\x9D+' 4!6\u012C!! %"),
          peg$decode("! ]7\x99,#&7\x99\"+\x81$7@+w%7M+m%7?+c% ]!7B+-$7\x9F+#%'\"%$\"# X\"# X,8&!7B+-$7\x9F+#%'\"%$\"# X\"# X\"+'%4%6\u012D% %$%# X$$# X$## X$\"# X\"# X"),
          peg$decode("7\xBD"),
          peg$decode("!/\u012E\"\"1&3\u012F+s$7.+i%7\xC0+_% ]!7A+-$7\xC0+#%'\"%$\"# X\"# X,8&!7A+-$7\xC0+#%'\"%$\"# X\"# X\"+#%'$%$$# X$## X$\"# X\"# X*# \"7\xBE"),
          peg$decode("!76+s$7.+i%7\xBF+_% ]!7A+-$7\xBF+#%'\"%$\"# X\"# X,8&!7A+-$7\xBF+#%'\"%$\"# X\"# X\"+#%'$%$$# X$## X$\"# X\"# X"),
          peg$decode("!76+=$7<+3%76*# \"7H+#%'#%$## X$\"# X\"# X"),
          peg$decode("7\xC1*G \"7\xC3*A \"7\xC5*; \"7\xC7*5 \"7\xC8*/ \"7\xC9*) \"7\xCA*# \"7\xBF"),
          peg$decode("!/\u0130\"\"1%3\u0131+7$7<+-%7\xC2+#%'#%$## X$\"# X\"# X"),
          peg$decode("!7I+' 4!6\u0132!! %"),
          peg$decode("!/\u0133\"\"1&3\u0134+\xA5$7<+\x9B%7D+\x91%7\xC4+\x87% ]! ]7'+&$,#&7'\"\"\" X+-$7\xC4+#%'\"%$\"# X\"# X,G&! ]7'+&$,#&7'\"\"\" X+-$7\xC4+#%'\"%$\"# X\"# X\"+-%7E+#%'&%$&# X$%# X$$# X$## X$\"# X\"# X"),
          peg$decode("7t*# \"7w"),
          peg$decode("!/\u0135\"\"1%3\u0136+7$7<+-%7\xC6+#%'#%$## X$\"# X\"# X"),
          peg$decode("!7I+' 4!6\u0137!! %"),
          peg$decode("!/\u0138\"\"1&3\u0139+<$7<+2%7I+(%4#6\u013A#! %$## X$\"# X\"# X"),
          peg$decode("!/\u013B\"\"1%3\u013C+_$7<+U%!/\u013D\"\"1$3\u013E+& 4!6\u013F! %*4 \"!/\u0140\"\"1%3\u0141+& 4!6\u0142! %+#%'#%$## X$\"# X\"# X"),
          peg$decode("!/\u0143\"\"1)3\u0144+T$7<+J%/\u0145\"\"1#3\u0146*/ \"/\u0147\"\"1(3\u0148*# \"76+(%4#6\u0149#! %$## X$\"# X\"# X"),
          peg$decode("!/\u014A\"\"1#3\u014B+\x9E$7<+\x94%7D+\x8A%!7\xCB+k$ ]!.D\"\"2D3E+-$7\xCB+#%'\"%$\"# X\"# X,>&!.D\"\"2D3E+-$7\xCB+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X+-%7E+#%'%%$%# X$$# X$## X$\"# X\"# X"),
          peg$decode("!/\u014C\"\"1(3\u014D*/ \"/\u014E\"\"1$3\u014F*# \"76+' 4!6\u0150!! %"),
          peg$decode("!76+_$ ]!7A+-$76+#%'\"%$\"# X\"# X,8&!7A+-$76+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X"),
          peg$decode("!7\xCE+K$7.+A%7\xCE+7%7.+-%7\x8F+#%'%%$%# X$$# X$## X$\"# X\"# X"),
          peg$decode("! ]7!+&$,#&7!\"\"\" X+' 4!6\u0151!! %"),
          peg$decode("!7\xD0+c$ ]!7A+-$7\xD0+#%'\"%$\"# X\"# X,8&!7A+-$7\xD0+#%'\"%$\"# X\"# X\"+'%4\"6\u0152\" %$\"# X\"# X"),
          peg$decode("!7\x98+c$ ]!7B+-$7\x9F+#%'\"%$\"# X\"# X,8&!7B+-$7\x9F+#%'\"%$\"# X\"# X\"+'%4\"6\u0153\" %$\"# X\"# X"),
          peg$decode("!7L*) \"7\x98*# \"7t+c$ ]!7B+-$7\x9F+#%'\"%$\"# X\"# X,8&!7B+-$7\x9F+#%'\"%$\"# X\"# X\"+'%4\"6\u0154\" %$\"# X\"# X"),
          peg$decode("!76+_$ ]!7A+-$76+#%'\"%$\"# X\"# X,8&!7A+-$76+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X"),
          peg$decode("!7\xD4+_$ ]!7A+-$7\xD4+#%'\"%$\"# X\"# X,8&!7A+-$7\xD4+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X"),
          peg$decode("!7\x98+_$ ]!7B+-$7\x9F+#%'\"%$\"# X\"# X,8&!7B+-$7\x9F+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X"),
          peg$decode("! ]7!+&$,#&7!\"\"\" X+' 4!6\u0155!! %"),
          peg$decode("!7\xD7+_$ ]!7B+-$7\xD8+#%'\"%$\"# X\"# X,8&!7B+-$7\xD8+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X"),
          peg$decode("!/\u0156\"\"1&3\u0157*; \"/\u0158\"\"1'3\u0159*/ \"/\u015A\"\"1*3\u015B*# \"76+& 4!6\u015C! %"),
          peg$decode("!/\u015D\"\"1&3\u015E+<$7<+2%7\xD9+(%4#6\u015F#! %$## X$\"# X\"# X*\x83 \"!/\xFB\"\"1'3\xFC+<$7<+2%7\x9D+(%4#6\u0160#! %$## X$\"# X\"# X*S \"!/\u0161\"\"1+3\u0162+<$7<+2%7\x9D+(%4#6\u0163#! %$## X$\"# X\"# X*# \"7\x9F"),
          peg$decode("/\u0164\"\"1+3\u0165*k \"/\u0166\"\"1)3\u0167*_ \"/\u0168\"\"1(3\u0169*S \"/\u016A\"\"1'3\u016B*G \"/\u016C\"\"1&3\u016D*; \"/\u016E\"\"1*3\u016F*/ \"/\u0170\"\"1)3\u0171*# \"76"),
          peg$decode("71*# \" \\"),
          peg$decode("!76+_$ ]!7A+-$76+#%'\"%$\"# X\"# X,8&!7A+-$76+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X*# \" \\"),
          peg$decode("!7L*# \"7\x98+c$ ]!7B+-$7\xDD+#%'\"%$\"# X\"# X,8&!7B+-$7\xDD+#%'\"%$\"# X\"# X\"+'%4\"6\u0172\" %$\"# X\"# X"),
          peg$decode("7\xB8*# \"7\x9F"),
          peg$decode("!7\xDF+_$ ]!7A+-$7\xDF+#%'\"%$\"# X\"# X,8&!7A+-$7\xDF+#%'\"%$\"# X\"# X\"+#%'\"%$\"# X\"# X"),
          peg$decode("!7\xE6+s$7.+i%7\xE9+_% ]!7B+-$7\xE0+#%'\"%$\"# X\"# X,8&!7B+-$7\xE0+#%'\"%$\"# X\"# X\"+#%'$%$$# X$## X$\"# X\"# X"),
          peg$decode("7\xE1*; \"7\xE2*5 \"7\xE3*/ \"7\xE4*) \"7\xE5*# \"7\x9F"),
          peg$decode("!/\u0173\"\"1#3\u0174+<$7<+2%7\xEC+(%4#6\u0175#! %$## X$\"# X\"# X"),
          peg$decode("!/\u0176\"\"1%3\u0177+<$7<+2%7T+(%4#6\u0178#! %$## X$\"# X\"# X"),
          peg$decode("!/\u0179\"\"1(3\u017A+B$7<+8%7\\*# \"7Y+(%4#6\u017B#! %$## X$\"# X\"# X"),
          peg$decode("!/\u017C\"\"1&3\u017D+<$7<+2%76+(%4#6\u017E#! %$## X$\"# X\"# X"),
          peg$decode("!/\u017F\"\"1%3\u0180+T$!7<+5$ ]7!,#&7!\"+#%'\"%$\"# X\"# X*# \" \\+'%4\"6\u0181\" %$\"# X\"# X"),
          peg$decode("!7\xE7+K$7;+A%76+7%7;+-%7\xE8+#%'%%$%# X$$# X$## X$\"# X\"# X"),
          peg$decode("!/\x98\"\"1#3\xDB*# \"76+' 4!6\u0182!! %"),
          peg$decode("!/\xB7\"\"1#3\u0183*G \"/\xB9\"\"1#3\u0184*; \"/\xBD\"\"1#3\u0185*/ \"/\xBB\"\"1$3\u0186*# \"76+' 4!6\u0187!! %"),
          peg$decode("!7\xEA+H$!7C+-$7\xEB+#%'\"%$\"# X\"# X*# \" \\+#%'\"%$\"# X\"# X"),
          peg$decode("!7U*) \"7\\*# \"7X+& 4!6\u0188! %"),
          peg$decode("!!7!*# \" \\+c$7!*# \" \\+S%7!*# \" \\+C%7!*# \" \\+3%7!*# \" \\+#%'%%$%# X$$# X$## X$\"# X\"# X+' 4!6\u0189!! %"),
          peg$decode("!!7!+C$7!*# \" \\+3%7!*# \" \\+#%'#%$## X$\"# X\"# X+' 4!6\u018A!! %"),
          peg$decode("7\xBD"),
          peg$decode("!76+7$70+-%7\xEF+#%'#%$## X$\"# X\"# X"),
          peg$decode(" ]72*) \"74*# \"7.,/&72*) \"74*# \"7.\""),
          peg$decode(" ]7%,#&7%\""),
          peg$decode("!7\xF2+=$.8\"\"2839+-%7\xF3+#%'#%$## X$\"# X\"# X"),
          peg$decode("!/\u018B\"\"1%3\u018C*) \"/\u018D\"\"1$3\u018E+' 4!6\u018F!! %"),
          peg$decode("!7\xF4+N$!.8\"\"2839+-$7^+#%'\"%$\"# X\"# X*# \" \\+#%'\"%$\"# X\"# X"),
          peg$decode("!7\\*) \"7X*# \"7\x82+' 4!6\u0190!! %"),
          peg$decode("! ]7\xF6*) \"7-*# \"7\xF7,/&7\xF6*) \"7-*# \"7\xF7\"+& 4!6\u0191! %"),
          peg$decode("7\"*S \"7!*M \".F\"\"2F3G*A \".J\"\"2J3K*5 \".H\"\"2H3I*) \".N\"\"2N3O"),
          peg$decode(".L\"\"2L3M*\x95 \".B\"\"2B3C*\x89 \".<\"\"2<3=*} \".R\"\"2R3S*q \".T\"\"2T3U*e \".V\"\"2V3W*Y \".P\"\"2P3Q*M \".@\"\"2@3A*A \".D\"\"2D3E*5 \".2\"\"2233*) \".>\"\"2>3?"),
          peg$decode("!7\xF9+h$.8\"\"2839+X%7\xF3+N%!.\u0192\"\"2\u01923\u0193+-$7\xE8+#%'\"%$\"# X\"# X*# \" \\+#%'$%$$# X$## X$\"# X\"# X"),
          peg$decode("!/\u0194\"\"1%3\u0195*) \"/\u0196\"\"1$3\u0197+' 4!6\u018F!! %"),
          peg$decode("!7\xE8+Q$/\xB7\"\"1#3\xB8*7 \"/\xB9\"\"1#3\xBA*+ \" ]7+,#&7+\"+'%4\"6\u0198\" %$\"# X\"# X"),
          peg$decode("!7\xFD+\x8F$.F\"\"2F3G+%7\xFC+u%.F\"\"2F3G+e%7\xFC+[%.F\"\"2F3G+K%7\xFC+A%.F\"\"2F3G+1%7\xFE+'%4)6\u0199) %$)# X$(# X$'# X$&# X$%# X$$# X$## X$\"# X\"# X"),
          peg$decode("!7#+A$7#+7%7#+-%7#+#%'$%$$# X$## X$\"# X\"# X"),
          peg$decode("!7\xFC+-$7\xFC+#%'\"%$\"# X\"# X"),
          peg$decode("!7\xFC+7$7\xFC+-%7\xFC+#%'#%$## X$\"# X\"# X")
        ],

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleIndices)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleIndex = peg$startRuleIndices[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$decode(s) {
      var bc = new Array(s.length), i;

      for (i = 0; i < s.length; i++) {
        bc[i] = s.charCodeAt(i) - 32;
      }

      return bc;
    }

    function peg$parseRule(index) {
      var bc    = peg$bytecode[index],
          ip    = 0,
          ips   = [],
          end   = bc.length,
          ends  = [],
          stack = [],
          params, i;

      function protect(object) {
        return Object.prototype.toString.apply(object) === "[object Array]" ? [] : object;
      }

      while (true) {
        while (ip < end) {
          switch (bc[ip]) {
            case 0:
              stack.push(protect(peg$consts[bc[ip + 1]]));
              ip += 2;
              break;

            case 1:
              stack.push(peg$currPos);
              ip++;
              break;

            case 2:
              stack.pop();
              ip++;
              break;

            case 3:
              peg$currPos = stack.pop();
              ip++;
              break;

            case 4:
              stack.length -= bc[ip + 1];
              ip += 2;
              break;

            case 5:
              stack.splice(-2, 1);
              ip++;
              break;

            case 6:
              stack[stack.length - 2].push(stack.pop());
              ip++;
              break;

            case 7:
              stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
              ip += 2;
              break;

            case 8:
              stack.pop();
              stack.push(input.substring(stack[stack.length - 1], peg$currPos));
              ip++;
              break;

            case 9:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1]) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 10:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] === peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 11:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] !== peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 12:
              if (stack[stack.length - 1] !== peg$FAILED) {
                ends.push(end);
                ips.push(ip);

                end = ip + 2 + bc[ip + 1];
                ip += 2;
              } else {
                ip += 2 + bc[ip + 1];
              }

              break;

            case 13:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (input.length > peg$currPos) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 14:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 15:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 16:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 17:
              stack.push(input.substr(peg$currPos, bc[ip + 1]));
              peg$currPos += bc[ip + 1];
              ip += 2;
              break;

            case 18:
              stack.push(peg$consts[bc[ip + 1]]);
              peg$currPos += peg$consts[bc[ip + 1]].length;
              ip += 2;
              break;

            case 19:
              stack.push(peg$FAILED);
              if (peg$silentFails === 0) {
                peg$fail(peg$consts[bc[ip + 1]]);
              }
              ip += 2;
              break;

            case 20:
              peg$reportedPos = stack[stack.length - 1 - bc[ip + 1]];
              ip += 2;
              break;

            case 21:
              peg$reportedPos = peg$currPos;
              ip++;
              break;

            case 22:
              params = bc.slice(ip + 4, ip + 4 + bc[ip + 3]);
              for (i = 0; i < bc[ip + 3]; i++) {
                params[i] = stack[stack.length - 1 - params[i]];
              }

              stack.splice(
                stack.length - bc[ip + 2],
                bc[ip + 2],
                peg$consts[bc[ip + 1]].apply(null, params)
              );

              ip += 4 + bc[ip + 3];
              break;

            case 23:
              stack.push(peg$parseRule(bc[ip + 1]));
              ip += 2;
              break;

            case 24:
              peg$silentFails++;
              ip++;
              break;

            case 25:
              peg$silentFails--;
              ip++;
              break;

            default:
              throw new Error("Invalid opcode: " + bc[ip] + ".");
          }
        }

        if (ends.length > 0) {
          end = ends.pop();
          ip = ips.pop();
        } else {
          break;
        }
      }

      return stack[0];
    }

    var data = {};

    peg$result = peg$parseRule(peg$startRuleIndex);

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return data;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      return -1;
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       function (input, startRule) {return parse(input, {startRule: startRule});}
  };
};
/* jshint ignore:end */

},{}],10:[function(_dereq_,module,exports){
/**
 * @fileoverview Hacks - This file contains all of the things we
 * wish we didn't have to do, just for interop.  It is similar to
 * Utils, which provides actually useful and relevant functions for
 * a SIP library. Methods in this file are grouped by vendor, so
 * as to most easily track when particular hacks may not be necessary anymore.
 */

module.exports = function (SIP) {
var Hacks = {
  AllBrowsers: {
    maskDtls: function (message) {
      if (message.body) {
        message.body = message.body.replace(/ UDP\/TLS\/RTP\/SAVP/gmi, " RTP/SAVP");
      }
    },
    unmaskDtls: function (sdp) {
      /**
       * Chrome does not handle DTLS correctly (Canaray does, but not production)
       * keeping Chrome as SDES until DTLS is fixed (comment out 'is_opera' condition)
       *
       * UPDATE: May 21, 2014
       * Chrome 35 now properly defaults to DTLS.  Only Opera remains using SDES
       *
       * UPDATE: 2014-09-24
       * Opera now supports DTLS by default as well.
       *
       **/
      return sdp.replace(/ RTP\/SAVP/gmi, " UDP/TLS/RTP/SAVP");
    }
  },
  Firefox: {
    /* Condition to detect if hacks are applicable */
    isFirefox: function () {
      return window.mozRTCPeerConnection !== undefined;
    },

    cannotHandleExtraWhitespace: function (message) {
      if (this.isFirefox() && message.body) {
        message.body = message.body.replace(/ \r\n/g, "\r\n");
      }
    },

    hasMissingCLineInSDP: function (sdp) {
      /*
       * This is a Firefox hack to insert valid sdp when getDescription is
       * called with the constraint offerToReceiveVideo = false.
       * We search for either a c-line at the top of the sdp above all
       * m-lines. If that does not exist then we search for a c-line
       * beneath each m-line. If it is missing a c-line, we insert
       * a fake c-line with the ip address 0.0.0.0. This is then valid
       * sdp and no media will be sent for that m-line.
       *
       * Valid SDP is:
       * m=
       * i=
       * c=
       */
      var insertAt, mlines;
      if (sdp.indexOf('c=') > sdp.indexOf('m=')) {

        // Find all m= lines
        mlines = sdp.match(/m=.*\r\n.*/g);
        for (var i=0; i<mlines.length; i++) {

          // If it has an i= line, check if the next line is the c= line
          if (mlines[i].toString().search(/i=.*/) >= 0) {
            insertAt = sdp.indexOf(mlines[i].toString())+mlines[i].toString().length;
            if (sdp.substr(insertAt,2)!=='c=') {
              sdp = sdp.substr(0,insertAt) + '\r\nc=IN IP4 0.0.0.0' + sdp.substr(insertAt);
            }

          // else add the C line if it's missing
          } else if (mlines[i].toString().search(/c=.*/) < 0) {
            insertAt = sdp.indexOf(mlines[i].toString().match(/.*/))+mlines[i].toString().match(/.*/).toString().length;
            sdp = sdp.substr(0,insertAt) + '\r\nc=IN IP4 0.0.0.0' + sdp.substr(insertAt);
          }
        }
      }
      return sdp;
    },

    hasIncompatibleCLineWithSomeSIPEndpoints: function(sdp) {
      /*
       * Firefox appears to be following https://tools.ietf.org/html/rfc5245#section-9.1.1.1
       * and using a c line IP address of 0.0.0.0. This is completely valid, however it is
       * causing some endpoints (such as FreeSWITCH) to interpret the SDP as being on hold
       * https://freeswitch.org/jira/browse/FS-6955. To get around this issue we pull the
       * replace the c line with 1.1.1.1 which SIP clients do not interpret as hold.
       * This makes the other endpoint believe that the call is not on hold and audio flows
       * because ICE determines the media pathway (not the c line).
       */
      return sdp.replace(/(0\.0\.0\.0)/gmi, SIP.Utils.getRandomTestNetIP());
    }
  },

  Chrome: {
    needsExplicitlyInactiveSDP: function (sdp) {
      var sub, index;

      if (Hacks.Firefox.isFirefox()) { // Fix this in Firefox before sending
        index = sdp.indexOf('m=video 0');
        if (index !== -1) {
          sub = sdp.substr(index);
          sub = sub.replace(/\r\nc=IN IP4.*\r\n$/,
                            '\r\nc=IN IP4 0.0.0.0\r\na=inactive\r\n');
          return sdp.substr(0, index) + sub;
        }
      }
      return sdp;
    },

    getsConfusedAboutGUM: function (session) {
      if (session.mediaHandler) {
        session.mediaHandler.close();
      }
    }
  }
};

return Hacks;
};


},{}],11:[function(_dereq_,module,exports){

module.exports = (function() {

var Logger = function(logger, category, label) {
  this.logger = logger;
  this.category = category;
  this.label = label;
};


Logger.prototype.debug = function(content) {
  this.logger.debug(this.category, this.label, content);
};

Logger.prototype.log = function(content) {
  this.logger.log(this.category, this.label, content);
};

Logger.prototype.warn = function(content) {
  this.logger.warn(this.category, this.label, content);
};

Logger.prototype.error = function(content) {
  this.logger.error(this.category, this.label, content);
};

return Logger;
})();

},{}],12:[function(_dereq_,module,exports){

module.exports = function (window, Logger) {

// Console is not defined in ECMAScript, so just in case...
var console = window.console || {
  debug: function () {},
  log: function () {},
  warn: function () {},
  error: function () {}
};

var LoggerFactory = function() {
  var logger,
    levels = {
    'error': 0,
    'warn': 1,
    'log': 2,
    'debug': 3
    },

    level = 2,
    builtinEnabled = true,
    connector = null;

    this.loggers = {};

    logger = this.getLogger('sip.loggerfactory');


  Object.defineProperties(this, {
    builtinEnabled: {
      get: function(){ return builtinEnabled; },
      set: function(value){
        if (typeof value === 'boolean') {
          builtinEnabled = value;
        } else {
          logger.error('invalid "builtinEnabled" parameter value: '+ JSON.stringify(value));
        }
      }
    },

    level: {
      get: function() {return level; },
      set: function(value) {
        if (value >= 0 && value <=3) {
          level = value;
        } else if (value > 3) {
          level = 3;
        } else if (levels.hasOwnProperty(value)) {
          level = levels[value];
        } else {
          logger.error('invalid "level" parameter value: '+ JSON.stringify(value));
        }
      }
    },

    connector: {
      get: function() {return connector; },
      set: function(value){
        if(value === null || value === "" || value === undefined) {
          connector = null;
        } else if (typeof value === 'function') {
          connector = value;
        } else {
          logger.error('invalid "connector" parameter value: '+ JSON.stringify(value));
        }
      }
    }
  });
};

LoggerFactory.prototype.print = function(target, category, label, content) {
  var prefix = [];

  prefix.push(new Date());

  prefix.push(category);

  if (label) {
    prefix.push(label);
  }

  prefix.push('');

  if (typeof content === 'string') {
    target.call(console, prefix.join(' | ') + content);
  } else {
    target.call(console, content);
  }
};

LoggerFactory.prototype.debug = function(category, label, content) {
  if (this.level === 3) {
    if (this.builtinEnabled) {
      this.print(console.debug, category, label, content);
    }

    if (this.connector) {
      this.connector('debug', category, label, content);
    }
  }
};

LoggerFactory.prototype.log = function(category, label, content) {
  if (this.level >= 2) {
    if (this.builtinEnabled) {
      this.print(console.log, category, label, content);
    }

    if (this.connector) {
      this.connector('log', category, label, content);
    }
  }
};

LoggerFactory.prototype.warn = function(category, label, content) {
  if (this.level >= 1) {
    if (this.builtinEnabled) {
      this.print(console.warn, category, label, content);
    }

    if (this.connector) {
      this.connector('warn', category, label, content);
    }
  }
};

LoggerFactory.prototype.error = function(category, label, content) {
  if (this.builtinEnabled) {
    this.print(console.error,category, label, content);
  }

  if (this.connector) {
    this.connector('error', category, label, content);
  }
};

LoggerFactory.prototype.getLogger = function(category, label) {
  var logger;

  if (label && this.level === 3) {
    return new Logger(this, category, label);
  } else if (this.loggers[category]) {
    return this.loggers[category];
  } else {
    logger = new Logger(this, category);
    this.loggers[category] = logger;
    return logger;
  }
};

return LoggerFactory;
};

},{}],13:[function(_dereq_,module,exports){
/**
 * @fileoverview MediaHandler
 */

/* MediaHandler
 * @class PeerConnection helper Class.
 * @param {SIP.Session} session
 * @param {Object} [options]
 */
module.exports = function (EventEmitter) {
var MediaHandler = function(session, options) {
  // keep jshint happy
  session = session;
  options = options;
};

MediaHandler.prototype = Object.create(EventEmitter.prototype, {
  isReady: {value: function isReady () {}},

  close: {value: function close () {}},

  /**
   * @param {Function} onSuccess called with the obtained local media description
   * @param {Function} onFailure
   * @param {Object} [mediaHint] A custom object describing the media to be used during this session.
   */
  getDescription: {value: function getDescription (onSuccess, onFailure, mediaHint) {
    // keep jshint happy
    onSuccess = onSuccess;
    onFailure = onFailure;
    mediaHint = mediaHint;
  }},

  /**
  * Message reception.
  * @param {String} type
  * @param {String} description
  * @param {Function} onSuccess
  * @param {Function} onFailure
  */
  setDescription: {value: function setDescription (description, onSuccess, onFailure) {
    // keep jshint happy
    description = description;
    onSuccess = onSuccess;
    onFailure = onFailure;
  }}
});

return MediaHandler;
};

},{}],14:[function(_dereq_,module,exports){
/**
 * @fileoverview SIP NameAddrHeader
 */

/**
 * @augments SIP
 * @class Class creating a Name Address SIP header.
 *
 * @param {SIP.URI} uri
 * @param {String} [displayName]
 * @param {Object} [parameters]
 *
 */
module.exports = function (SIP) {
var NameAddrHeader;

NameAddrHeader = function(uri, displayName, parameters) {
  var param;

  // Checks
  if(!uri || !(uri instanceof SIP.URI)) {
    throw new TypeError('missing or invalid "uri" parameter');
  }

  // Initialize parameters
  this.uri = uri;
  this.parameters = {};

  for (param in parameters) {
    this.setParam(param, parameters[param]);
  }

  Object.defineProperties(this, {
    displayName: {
      get: function() { return displayName; },
      set: function(value) {
        displayName = (value === 0) ? '0' : value;
      }
    }
  });
};
NameAddrHeader.prototype = {
  setParam: function (key, value) {
    if(key) {
      this.parameters[key.toLowerCase()] = (typeof value === 'undefined' || value === null) ? null : value.toString();
    }
  },
  getParam: SIP.URI.prototype.getParam,
  hasParam: SIP.URI.prototype.hasParam,
  deleteParam: SIP.URI.prototype.deleteParam,
  clearParams: SIP.URI.prototype.clearParams,

  clone: function() {
    return new NameAddrHeader(
      this.uri.clone(),
      this.displayName,
      JSON.parse(JSON.stringify(this.parameters)));
  },

  toString: function() {
    var body, parameter;

    body  = (this.displayName || this.displayName === 0) ? '"' + this.displayName + '" ' : '';
    body += '<' + this.uri.toString() + '>';

    for (parameter in this.parameters) {
      body += ';' + parameter;

      if (this.parameters[parameter] !== null) {
        body += '='+ this.parameters[parameter];
      }
    }

    return body;
  }
};


/**
  * Parse the given string and returns a SIP.NameAddrHeader instance or undefined if
  * it is an invalid NameAddrHeader.
  * @public
  * @param {String} name_addr_header
  */
NameAddrHeader.parse = function(name_addr_header) {
  name_addr_header = SIP.Grammar.parse(name_addr_header,'Name_Addr_Header');

  if (name_addr_header !== -1) {
    return name_addr_header;
  } else {
    return undefined;
  }
};

SIP.NameAddrHeader = NameAddrHeader;
};

},{}],15:[function(_dereq_,module,exports){
/**
 * @fileoverview SIP Message Parser
 */

/**
 * Extract and parse every header of a SIP message.
 * @augments SIP
 * @namespace
 */
module.exports = function (SIP) {
var Parser;

function getHeader(data, headerStart) {
  var
    // 'start' position of the header.
    start = headerStart,
    // 'end' position of the header.
    end = 0,
    // 'partial end' position of the header.
    partialEnd = 0;

  //End of message.
  if (data.substring(start, start + 2).match(/(^\r\n)/)) {
    return -2;
  }

  while(end === 0) {
    // Partial End of Header.
    partialEnd = data.indexOf('\r\n', start);

    // 'indexOf' returns -1 if the value to be found never occurs.
    if (partialEnd === -1) {
      return partialEnd;
    }

    if(!data.substring(partialEnd + 2, partialEnd + 4).match(/(^\r\n)/) && data.charAt(partialEnd + 2).match(/(^\s+)/)) {
      // Not the end of the message. Continue from the next position.
      start = partialEnd + 2;
    } else {
      end = partialEnd;
    }
  }

  return end;
}

function parseHeader(message, data, headerStart, headerEnd) {
  var header, idx, length, parsed,
    hcolonIndex = data.indexOf(':', headerStart),
    headerName = data.substring(headerStart, hcolonIndex).trim(),
    headerValue = data.substring(hcolonIndex + 1, headerEnd).trim();

  // If header-field is well-known, parse it.
  switch(headerName.toLowerCase()) {
    case 'via':
    case 'v':
      message.addHeader('via', headerValue);
      if(message.getHeaders('via').length === 1) {
        parsed = message.parseHeader('Via');
        if(parsed) {
          message.via = parsed;
          message.via_branch = parsed.branch;
        }
      } else {
        parsed = 0;
      }
      break;
    case 'from':
    case 'f':
      message.setHeader('from', headerValue);
      parsed = message.parseHeader('from');
      if(parsed) {
        message.from = parsed;
        message.from_tag = parsed.getParam('tag');
      }
      break;
    case 'to':
    case 't':
      message.setHeader('to', headerValue);
      parsed = message.parseHeader('to');
      if(parsed) {
        message.to = parsed;
        message.to_tag = parsed.getParam('tag');
      }
      break;
    case 'record-route':
      parsed = SIP.Grammar.parse(headerValue, 'Record_Route');

      if (parsed === -1) {
        parsed = undefined;
        break;
      }

      length = parsed.length;
      for (idx = 0; idx < length; idx++) {
        header = parsed[idx];
        message.addHeader('record-route', headerValue.substring(header.position, header.offset));
        message.headers['Record-Route'][message.getHeaders('record-route').length - 1].parsed = header.parsed;
      }
      break;
    case 'call-id':
    case 'i':
      message.setHeader('call-id', headerValue);
      parsed = message.parseHeader('call-id');
      if(parsed) {
        message.call_id = headerValue;
      }
      break;
    case 'contact':
    case 'm':
      parsed = SIP.Grammar.parse(headerValue, 'Contact');

      if (parsed === -1) {
        parsed = undefined;
        break;
      }

      length = parsed.length;
      for (idx = 0; idx < length; idx++) {
        header = parsed[idx];
        message.addHeader('contact', headerValue.substring(header.position, header.offset));
        message.headers['Contact'][message.getHeaders('contact').length - 1].parsed = header.parsed;
      }
      break;
    case 'content-length':
    case 'l':
      message.setHeader('content-length', headerValue);
      parsed = message.parseHeader('content-length');
      break;
    case 'content-type':
    case 'c':
      message.setHeader('content-type', headerValue);
      parsed = message.parseHeader('content-type');
      break;
    case 'cseq':
      message.setHeader('cseq', headerValue);
      parsed = message.parseHeader('cseq');
      if(parsed) {
        message.cseq = parsed.value;
      }
      if(message instanceof SIP.IncomingResponse) {
        message.method = parsed.method;
      }
      break;
    case 'max-forwards':
      message.setHeader('max-forwards', headerValue);
      parsed = message.parseHeader('max-forwards');
      break;
    case 'www-authenticate':
      message.setHeader('www-authenticate', headerValue);
      parsed = message.parseHeader('www-authenticate');
      break;
    case 'proxy-authenticate':
      message.setHeader('proxy-authenticate', headerValue);
      parsed = message.parseHeader('proxy-authenticate');
      break;
    case 'refer-to':
    case 'r':
      message.setHeader('refer-to', headerValue);
      parsed = message.parseHeader('refer-to');
      if (parsed) {
        message.refer_to = parsed;
      }
      break;
    default:
      // Do not parse this header.
      message.setHeader(headerName, headerValue);
      parsed = 0;
  }

  if (parsed === undefined) {
    return {
      error: 'error parsing header "'+ headerName +'"'
    };
  } else {
    return true;
  }
}

/** Parse SIP Message
 * @function
 * @param {String} message SIP message.
 * @param {Object} logger object.
 * @returns {SIP.IncomingRequest|SIP.IncomingResponse|undefined}
 */
Parser = {};
Parser.parseMessage = function(data, ua) {
  var message, firstLine, contentLength, bodyStart, parsed,
    headerStart = 0,
    headerEnd = data.indexOf('\r\n'),
    logger = ua.getLogger('sip.parser');

  if(headerEnd === -1) {
    logger.warn('no CRLF found, not a SIP message, discarded');
    return;
  }

  // Parse first line. Check if it is a Request or a Reply.
  firstLine = data.substring(0, headerEnd);
  parsed = SIP.Grammar.parse(firstLine, 'Request_Response');

  if(parsed === -1) {
    logger.warn('error parsing first line of SIP message: "' + firstLine + '"');
    return;
  } else if(!parsed.status_code) {
    message = new SIP.IncomingRequest(ua);
    message.method = parsed.method;
    message.ruri = parsed.uri;
  } else {
    message = new SIP.IncomingResponse(ua);
    message.status_code = parsed.status_code;
    message.reason_phrase = parsed.reason_phrase;
  }

  message.data = data;
  headerStart = headerEnd + 2;

  /* Loop over every line in data. Detect the end of each header and parse
  * it or simply add to the headers collection.
  */
  while(true) {
    headerEnd = getHeader(data, headerStart);

    // The SIP message has normally finished.
    if(headerEnd === -2) {
      bodyStart = headerStart + 2;
      break;
    }
    // data.indexOf returned -1 due to a malformed message.
    else if(headerEnd === -1) {
      logger.error('malformed message');
      return;
    }

    parsed = parseHeader(message, data, headerStart, headerEnd);

    if(parsed !== true) {
      logger.error(parsed.error);
      return;
    }

    headerStart = headerEnd + 2;
  }

  /* RFC3261 18.3.
   * If there are additional bytes in the transport packet
   * beyond the end of the body, they MUST be discarded.
   */
  if(message.hasHeader('content-length')) {
    contentLength = message.getHeader('content-length');
    message.body = data.substr(bodyStart, contentLength);
  } else {
    message.body = data.substring(bodyStart);
  }

  return message;
};

SIP.Parser = Parser;
};

},{}],16:[function(_dereq_,module,exports){
module.exports = function (SIP) {

var RegisterContext;

RegisterContext = function (ua) {
  var params = {},
      regId = 1,
      events = [
        'registered',
        'unregistered'
      ];

  this.registrar = ua.configuration.registrarServer;
  this.expires = ua.configuration.registerExpires;


  // Contact header
  this.contact = ua.contact.toString();

  if(regId) {
    this.contact += ';reg-id='+ regId;
    this.contact += ';+sip.instance="<urn:uuid:'+ ua.configuration.instanceId+'>"';
  }

  // Call-ID and CSeq values RFC3261 10.2
  this.call_id = SIP.Utils.createRandomToken(22);
  this.cseq = 80;

  this.to_uri = ua.configuration.uri;

  params.to_uri = this.to_uri;
  params.call_id = this.call_id;
  params.cseq = this.cseq;

  // Extends ClientContext
  SIP.Utils.augment(this, SIP.ClientContext, [ua, 'REGISTER', this.registrar, {params: params}]);

  this.registrationTimer = null;
  this.registrationExpiredTimer = null;

  // Set status
  this.registered = false;

  this.logger = ua.getLogger('sip.registercontext');
  this.initMoreEvents(events);
};

RegisterContext.prototype = {
  register: function (options) {
    var self = this, extraHeaders;

    // Handle Options
    options = options || {};
    extraHeaders = (options.extraHeaders || []).slice();
    extraHeaders.push('Contact: ' + this.contact + ';expires=' + this.expires);
    extraHeaders.push('Allow: ' + SIP.Utils.getAllowedMethods(this.ua));

    this.receiveResponse = function(response) {
      var contact, expires,
        contacts = response.getHeaders('contact').length,
        cause;

      // Discard responses to older REGISTER/un-REGISTER requests.
      if(response.cseq !== this.cseq) {
        return;
      }

      // Clear registration timer
      if (this.registrationTimer !== null) {
        SIP.Timers.clearTimeout(this.registrationTimer);
        this.registrationTimer = null;
      }

      switch(true) {
        case /^1[0-9]{2}$/.test(response.status_code):
          this.emit('progress', response);
          break;
        case /^2[0-9]{2}$/.test(response.status_code):
          this.emit('accepted', response);

          if(response.hasHeader('expires')) {
            expires = response.getHeader('expires');
          }

          if (this.registrationExpiredTimer !== null) {
            SIP.Timers.clearTimeout(this.registrationExpiredTimer);
            this.registrationExpiredTimer = null;
          }

          // Search the Contact pointing to us and update the expires value accordingly.
          if (!contacts) {
            this.logger.warn('no Contact header in response to REGISTER, response ignored');
            break;
          }

          while(contacts--) {
            contact = response.parseHeader('contact', contacts);
            if(contact.uri.user === this.ua.contact.uri.user) {
              expires = contact.getParam('expires');
              break;
            } else {
              contact = null;
            }
          }

          if (!contact) {
            this.logger.warn('no Contact header pointing to us, response ignored');
            break;
          }

          if(!expires) {
            expires = this.expires;
          }

          // Re-Register before the expiration interval has elapsed.
          // For that, decrease the expires value. ie: 3 seconds
          this.registrationTimer = SIP.Timers.setTimeout(function() {
            self.registrationTimer = null;
            self.register(options);
          }, (expires * 1000) - 3000);
          this.registrationExpiredTimer = SIP.Timers.setTimeout(function () {
            self.logger.warn('registration expired');
            if (self.registered) {
              self.unregistered(null, SIP.C.causes.EXPIRES);
            }
          }, expires * 1000);

          //Save gruu values
          if (contact.hasParam('temp-gruu')) {
            this.ua.contact.temp_gruu = SIP.URI.parse(contact.getParam('temp-gruu').replace(/"/g,''));
          }
          if (contact.hasParam('pub-gruu')) {
            this.ua.contact.pub_gruu = SIP.URI.parse(contact.getParam('pub-gruu').replace(/"/g,''));
          }

          this.registered = true;
          this.emit('registered', response || null);
          break;
        // Interval too brief RFC3261 10.2.8
        case /^423$/.test(response.status_code):
          if(response.hasHeader('min-expires')) {
            // Increase our registration interval to the suggested minimum
            this.expires = response.getHeader('min-expires');
            // Attempt the registration again immediately
            this.register(options);
          } else { //This response MUST contain a Min-Expires header field
            this.logger.warn('423 response received for REGISTER without Min-Expires');
            this.registrationFailure(response, SIP.C.causes.SIP_FAILURE_CODE);
          }
          break;
        default:
          cause = SIP.Utils.sipErrorCause(response.status_code);
          this.registrationFailure(response, cause);
      }
    };

    this.onRequestTimeout = function() {
      this.registrationFailure(null, SIP.C.causes.REQUEST_TIMEOUT);
    };

    this.onTransportError = function() {
      this.registrationFailure(null, SIP.C.causes.CONNECTION_ERROR);
    };

    this.cseq++;
    this.request.cseq = this.cseq;
    this.request.setHeader('cseq', this.cseq + ' REGISTER');
    this.request.extraHeaders = extraHeaders;
    this.send();
  },

  registrationFailure: function (response, cause) {
    this.emit('failed', response || null, cause || null);
  },

  onTransportClosed: function() {
    this.registered_before = this.registered;
    if (this.registrationTimer !== null) {
      SIP.Timers.clearTimeout(this.registrationTimer);
      this.registrationTimer = null;
    }

    if (this.registrationExpiredTimer !== null) {
      SIP.Timers.clearTimeout(this.registrationExpiredTimer);
      this.registrationExpiredTimer = null;
    }

    if(this.registered) {
      this.unregistered(null, SIP.C.causes.CONNECTION_ERROR);
    }
  },

  onTransportConnected: function() {
    this.register();
  },

  close: function() {
    this.registered_before = this.registered;
    this.unregister();
  },

  unregister: function(options) {
    var extraHeaders;

    if(!this.registered) {
      this.logger.warn('already unregistered');
      return;
    }

    options = options || {};
    extraHeaders = (options.extraHeaders || []).slice();

    this.registered = false;

    // Clear the registration timer.
    if (this.registrationTimer !== null) {
      SIP.Timers.clearTimeout(this.registrationTimer);
      this.registrationTimer = null;
    }

    if(options.all) {
      extraHeaders.push('Contact: *');
      extraHeaders.push('Expires: 0');
    } else {
      extraHeaders.push('Contact: '+ this.contact + ';expires=0');
    }


    this.receiveResponse = function(response) {
      var cause;

      switch(true) {
        case /^1[0-9]{2}$/.test(response.status_code):
          this.emit('progress', response);
          break;
        case /^2[0-9]{2}$/.test(response.status_code):
          this.emit('accepted', response);
          if (this.registrationExpiredTimer !== null) {
            SIP.Timers.clearTimeout(this.registrationExpiredTimer);
            this.registrationExpiredTimer = null;
          }
          this.unregistered(response);
          break;
        default:
          cause = SIP.Utils.sipErrorCause(response.status_code);
          this.unregistered(response,cause);
      }
    };

    this.onRequestTimeout = function() {
      // Not actually unregistered...
      //this.unregistered(null, SIP.C.causes.REQUEST_TIMEOUT);
    };

    this.onTransportError = function() {
      // Not actually unregistered...
      //this.unregistered(null, SIP.C.causes.CONNECTION_ERROR);
    };

    this.cseq++;
    this.request.cseq = this.cseq;
    this.request.setHeader('cseq', this.cseq + ' REGISTER');
    this.request.extraHeaders = extraHeaders;

    this.send();
  },

  unregistered: function(response, cause) {
    this.registered = false;
    this.emit('unregistered', response || null, cause || null);
  }

};


SIP.RegisterContext = RegisterContext;
};

},{}],17:[function(_dereq_,module,exports){

/**
 * @fileoverview Request Sender
 */

/**
 * @augments SIP
 * @class Class creating a request sender.
 * @param {Object} applicant
 * @param {SIP.UA} ua
 */
module.exports = function (SIP) {
var RequestSender;

RequestSender = function(applicant, ua) {
  this.logger = ua.getLogger('sip.requestsender');
  this.ua = ua;
  this.applicant = applicant;
  this.method = applicant.request.method;
  this.request = applicant.request;
  this.credentials = null;
  this.challenged = false;
  this.staled = false;

  // If ua is in closing process or even closed just allow sending Bye and ACK
  if (ua.status === SIP.UA.C.STATUS_USER_CLOSED && (this.method !== SIP.C.BYE || this.method !== SIP.C.ACK)) {
    this.onTransportError();
  }
};

/**
* Create the client transaction and send the message.
*/
RequestSender.prototype = {
  send: function() {
    switch(this.method) {
      case "INVITE":
        this.clientTransaction = new SIP.Transactions.InviteClientTransaction(this, this.request, this.ua.transport);
        break;
      case "ACK":
        this.clientTransaction = new SIP.Transactions.AckClientTransaction(this, this.request, this.ua.transport);
        break;
      default:
        this.clientTransaction = new SIP.Transactions.NonInviteClientTransaction(this, this.request, this.ua.transport);
    }
    this.clientTransaction.send();

    return this.clientTransaction;
  },

  /**
  * Callback fired when receiving a request timeout error from the client transaction.
  * To be re-defined by the applicant.
  * @event
  */
  onRequestTimeout: function() {
    this.applicant.onRequestTimeout();
  },

  /**
  * Callback fired when receiving a transport error from the client transaction.
  * To be re-defined by the applicant.
  * @event
  */
  onTransportError: function() {
    this.applicant.onTransportError();
  },

  /**
  * Called from client transaction when receiving a correct response to the request.
  * Authenticate request if needed or pass the response back to the applicant.
  * @param {SIP.IncomingResponse} response
  */
  receiveResponse: function(response) {
    var cseq, challenge, authorization_header_name,
      status_code = response.status_code;

    /*
    * Authentication
    * Authenticate once. _challenged_ flag used to avoid infinite authentications.
    */
    if ((status_code === 401 || status_code === 407) && this.ua.configuration.password !== null) {

      // Get and parse the appropriate WWW-Authenticate or Proxy-Authenticate header.
      if (response.status_code === 401) {
        challenge = response.parseHeader('www-authenticate');
        authorization_header_name = 'authorization';
      } else {
        challenge = response.parseHeader('proxy-authenticate');
        authorization_header_name = 'proxy-authorization';
      }

      // Verify it seems a valid challenge.
      if (! challenge) {
        this.logger.warn(response.status_code + ' with wrong or missing challenge, cannot authenticate');
        this.applicant.receiveResponse(response);
        return;
      }

      if (!this.challenged || (!this.staled && challenge.stale === true)) {
        if (!this.credentials) {
          this.credentials = new SIP.DigestAuthentication(this.ua);
        }

        // Verify that the challenge is really valid.
        if (!this.credentials.authenticate(this.request, challenge)) {
          this.applicant.receiveResponse(response);
          return;
        }
        this.challenged = true;

        if (challenge.stale) {
          this.staled = true;
        }

        if (response.method === SIP.C.REGISTER) {
          cseq = this.applicant.cseq += 1;
        } else if (this.request.dialog){
          cseq = this.request.dialog.local_seqnum += 1;
        } else {
          cseq = this.request.cseq + 1;
          this.request.cseq = cseq;
        }
        this.request.setHeader('cseq', cseq +' '+ this.method);

        this.request.setHeader(authorization_header_name, this.credentials.toString());
        this.send();
      } else {
        this.applicant.receiveResponse(response);
      }
    } else {
      this.applicant.receiveResponse(response);
    }
  }
};

SIP.RequestSender = RequestSender;
};

},{}],18:[function(_dereq_,module,exports){
(function (global){
/**
 * @name SIP
 * @namespace
 */
module.exports = (function(window) {
  "use strict";

  var SIP = {};

  var pkg = _dereq_('../package.json');

  Object.defineProperties(SIP, {
    version: {
      get: function(){ return pkg.version; }
    },
    name: {
      get: function(){ return pkg.title; }
    }
  });

  _dereq_('./Utils.js')(SIP);
  var Logger = _dereq_('./Logger.js');
  SIP.LoggerFactory = _dereq_('./LoggerFactory.js')(window, Logger);
  _dereq_('./EventEmitter.js')(SIP);
  SIP.C = _dereq_('./Constants.js')(SIP.name, SIP.version);
  SIP.Exceptions = _dereq_('./Exceptions.js');
  SIP.Timers = _dereq_('./Timers.js')(window);
  _dereq_('./Transport.js')(SIP, window);
  _dereq_('./Parser.js')(SIP);
  _dereq_('./SIPMessage.js')(SIP);
  _dereq_('./URI.js')(SIP);
  _dereq_('./NameAddrHeader.js')(SIP);
  _dereq_('./Transactions.js')(SIP, window);
  var DialogRequestSender = _dereq_('./Dialog/RequestSender.js')(SIP, window);
  _dereq_('./Dialogs.js')(SIP, DialogRequestSender);
  _dereq_('./RequestSender.js')(SIP);
  _dereq_('./RegisterContext.js')(SIP, window);
  SIP.MediaHandler = _dereq_('./MediaHandler.js')(SIP.EventEmitter);
  _dereq_('./ClientContext.js')(SIP);
  _dereq_('./ServerContext.js')(SIP);
  var SessionDTMF = _dereq_('./Session/DTMF.js')(SIP);
  _dereq_('./Session.js')(SIP, window, SessionDTMF);
  _dereq_('./Subscription.js')(SIP, window);
  var WebRTCMediaHandler = _dereq_('./WebRTC/MediaHandler.js')(SIP);
  var WebRTCMediaStreamManager = _dereq_('./WebRTC/MediaStreamManager.js')(SIP);
  SIP.WebRTC = _dereq_('./WebRTC.js')(SIP.Utils, window, WebRTCMediaHandler, WebRTCMediaStreamManager);
  _dereq_('./UA.js')(SIP, window);
  SIP.Hacks = _dereq_('./Hacks.js')(SIP);
  _dereq_('./SanityCheck.js')(SIP);
  SIP.DigestAuthentication = _dereq_('./DigestAuthentication.js')(SIP.Utils);
  SIP.Grammar = _dereq_('./Grammar/dist/Grammar')(SIP);

  return SIP;
})((typeof window !== 'undefined') ? window : global);

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../package.json":1,"./ClientContext.js":2,"./Constants.js":3,"./Dialog/RequestSender.js":4,"./Dialogs.js":5,"./DigestAuthentication.js":6,"./EventEmitter.js":7,"./Exceptions.js":8,"./Grammar/dist/Grammar":9,"./Hacks.js":10,"./Logger.js":11,"./LoggerFactory.js":12,"./MediaHandler.js":13,"./NameAddrHeader.js":14,"./Parser.js":15,"./RegisterContext.js":16,"./RequestSender.js":17,"./SIPMessage.js":19,"./SanityCheck.js":20,"./ServerContext.js":21,"./Session.js":22,"./Session/DTMF.js":23,"./Subscription.js":24,"./Timers.js":25,"./Transactions.js":26,"./Transport.js":27,"./UA.js":28,"./URI.js":29,"./Utils.js":30,"./WebRTC.js":31,"./WebRTC/MediaHandler.js":32,"./WebRTC/MediaStreamManager.js":33}],19:[function(_dereq_,module,exports){
/**
 * @fileoverview SIP Message
 */

module.exports = function (SIP) {
var
  OutgoingRequest,
  IncomingMessage,
  IncomingRequest,
  IncomingResponse;

/**
 * @augments SIP
 * @class Class for outgoing SIP request.
 * @param {String} method request method
 * @param {String} ruri request uri
 * @param {SIP.UA} ua
 * @param {Object} params parameters that will have priority over ua.configuration parameters:
 * <br>
 *  - cseq, call_id, from_tag, from_uri, from_displayName, to_uri, to_tag, route_set
 * @param {Object} [headers] extra headers
 * @param {String} [body]
 */
OutgoingRequest = function(method, ruri, ua, params, extraHeaders, body) {
  var
    to,
    from,
    call_id,
    cseq;

  params = params || {};

  // Mandatory parameters check
  if(!method || !ruri || !ua) {
    return null;
  }

  this.logger = ua.getLogger('sip.sipmessage');
  this.ua = ua;
  this.headers = {};
  this.method = method;
  this.ruri = ruri;
  this.body = body;
  this.extraHeaders = (extraHeaders || []).slice();
  this.statusCode = params.status_code;
  this.reasonPhrase = params.reason_phrase;

  // Fill the Common SIP Request Headers

  // Route
  if (params.route_set) {
    this.setHeader('route', params.route_set);
  } else if (ua.configuration.usePreloadedRoute){
    this.setHeader('route', ua.transport.server.sip_uri);
  }

  // Via
  // Empty Via header. Will be filled by the client transaction.
  this.setHeader('via', '');

  // Max-Forwards
  this.setHeader('max-forwards', SIP.UA.C.MAX_FORWARDS);

  // To
  to = (params.to_displayName || params.to_displayName === 0) ? '"' + params.to_displayName + '" ' : '';
  to += '<' + (params.to_uri || ruri) + '>';
  to += params.to_tag ? ';tag=' + params.to_tag : '';
  this.to = new SIP.NameAddrHeader.parse(to);
  this.setHeader('to', to);

  // From
  if (params.from_displayName || params.from_displayName === 0) {
    from = '"' + params.from_displayName + '" ';
  } else if (ua.configuration.displayName) {
    from = '"' + ua.configuration.displayName + '" ';
  } else {
    from = '';
  }
  from += '<' + (params.from_uri || ua.configuration.uri) + '>;tag=';
  from += params.from_tag || SIP.Utils.newTag();
  this.from = new SIP.NameAddrHeader.parse(from);
  this.setHeader('from', from);

  // Call-ID
  call_id = params.call_id || (ua.configuration.sipjsId + SIP.Utils.createRandomToken(15));
  this.call_id = call_id;
  this.setHeader('call-id', call_id);

  // CSeq
  cseq = params.cseq || Math.floor(Math.random() * 10000);
  this.cseq = cseq;
  this.setHeader('cseq', cseq + ' ' + method);
};

OutgoingRequest.prototype = {
  /**
   * Replace the the given header by the given value.
   * @param {String} name header name
   * @param {String | Array} value header value
   */
  setHeader: function(name, value) {
    this.headers[SIP.Utils.headerize(name)] = (value instanceof Array) ? value : [value];
  },

  /**
   * Get the value of the given header name at the given position.
   * @param {String} name header name
   * @returns {String|undefined} Returns the specified header, undefined if header doesn't exist.
   */
  getHeader: function(name) {
    var regexp, idx,
      length = this.extraHeaders.length,
      header = this.headers[SIP.Utils.headerize(name)];

    if(header) {
      if(header[0]) {
        return header[0];
      }
    } else {
      regexp = new RegExp('^\\s*' + name + '\\s*:','i');
      for (idx = 0; idx < length; idx++) {
        header = this.extraHeaders[idx];
        if (regexp.test(header)) {
          return header.substring(header.indexOf(':')+1).trim();
        }
      }
    }

    return;
  },

  /**
   * Get the header/s of the given name.
   * @param {String} name header name
   * @returns {Array} Array with all the headers of the specified name.
   */
  getHeaders: function(name) {
    var idx, length, regexp,
      header = this.headers[SIP.Utils.headerize(name)],
      result = [];

    if(header) {
      length = header.length;
      for (idx = 0; idx < length; idx++) {
        result.push(header[idx]);
      }
      return result;
    } else {
      length = this.extraHeaders.length;
      regexp = new RegExp('^\\s*' + name + '\\s*:','i');
      for (idx = 0; idx < length; idx++) {
        header = this.extraHeaders[idx];
        if (regexp.test(header)) {
          result.push(header.substring(header.indexOf(':')+1).trim());
        }
      }
      return result;
    }
  },

  /**
   * Verify the existence of the given header.
   * @param {String} name header name
   * @returns {boolean} true if header with given name exists, false otherwise
   */
  hasHeader: function(name) {
    var regexp, idx,
      length = this.extraHeaders.length;

    if (this.headers[SIP.Utils.headerize(name)]) {
      return true;
    } else {
      regexp = new RegExp('^\\s*' + name + '\\s*:','i');
      for (idx = 0; idx < length; idx++) {
        if (regexp.test(this.extraHeaders[idx])) {
          return true;
        }
      }
    }

    return false;
  },

  toString: function() {
    var msg = '', header, length, idx, supported = [];

    msg += this.method + ' ' + this.ruri + ' SIP/2.0\r\n';

    for (header in this.headers) {
      length = this.headers[header].length;
      for (idx = 0; idx < length; idx++) {
        msg += header + ': ' + this.headers[header][idx] + '\r\n';
      }
    }

    length = this.extraHeaders.length;
    for (idx = 0; idx < length; idx++) {
      msg += this.extraHeaders[idx].trim() +'\r\n';
    }

    //Supported
    if (this.method === SIP.C.REGISTER) {
      supported.push('path', 'gruu');
    } else if (this.method === SIP.C.INVITE &&
               (this.ua.contact.pub_gruu || this.ua.contact.temp_gruu)) {
      supported.push('gruu');
    }

    if (this.ua.configuration.rel100 === SIP.C.supported.SUPPORTED) {
      supported.push('100rel');
    }

    supported.push('outbound');

    msg += 'Supported: ' +  supported +'\r\n';
    msg += 'User-Agent: ' + this.ua.configuration.userAgentString +'\r\n';

    if(this.body) {
      length = SIP.Utils.str_utf8_length(this.body);
      msg += 'Content-Length: ' + length + '\r\n\r\n';
      msg += this.body;
    } else {
      msg += 'Content-Length: 0\r\n\r\n';
    }

    return msg;
  }
};

/**
 * @augments SIP
 * @class Class for incoming SIP message.
 */
IncomingMessage = function(){
  this.data = null;
  this.headers = null;
  this.method =  null;
  this.via = null;
  this.via_branch = null;
  this.call_id = null;
  this.cseq = null;
  this.from = null;
  this.from_tag = null;
  this.to = null;
  this.to_tag = null;
  this.body = null;
};

IncomingMessage.prototype = {
  /**
  * Insert a header of the given name and value into the last position of the
  * header array.
  * @param {String} name header name
  * @param {String} value header value
  */
  addHeader: function(name, value) {
    var header = { raw: value };

    name = SIP.Utils.headerize(name);

    if(this.headers[name]) {
      this.headers[name].push(header);
    } else {
      this.headers[name] = [header];
    }
  },

  /**
   * Get the value of the given header name at the given position.
   * @param {String} name header name
   * @returns {String|undefined} Returns the specified header, null if header doesn't exist.
   */
  getHeader: function(name) {
    var header = this.headers[SIP.Utils.headerize(name)];

    if(header) {
      if(header[0]) {
        return header[0].raw;
      }
    } else {
      return;
    }
  },

  /**
   * Get the header/s of the given name.
   * @param {String} name header name
   * @returns {Array} Array with all the headers of the specified name.
   */
  getHeaders: function(name) {
    var idx, length,
      header = this.headers[SIP.Utils.headerize(name)],
      result = [];

    if(!header) {
      return [];
    }

    length = header.length;
    for (idx = 0; idx < length; idx++) {
      result.push(header[idx].raw);
    }

    return result;
  },

  /**
   * Verify the existence of the given header.
   * @param {String} name header name
   * @returns {boolean} true if header with given name exists, false otherwise
   */
  hasHeader: function(name) {
    return(this.headers[SIP.Utils.headerize(name)]) ? true : false;
  },

  /**
  * Parse the given header on the given index.
  * @param {String} name header name
  * @param {Number} [idx=0] header index
  * @returns {Object|undefined} Parsed header object, undefined if the header is not present or in case of a parsing error.
  */
  parseHeader: function(name, idx) {
    var header, value, parsed;

    name = SIP.Utils.headerize(name);

    idx = idx || 0;

    if(!this.headers[name]) {
      this.logger.log('header "' + name + '" not present');
      return;
    } else if(idx >= this.headers[name].length) {
      this.logger.log('not so many "' + name + '" headers present');
      return;
    }

    header = this.headers[name][idx];
    value = header.raw;

    if(header.parsed) {
      return header.parsed;
    }

    //substitute '-' by '_' for grammar rule matching.
    parsed = SIP.Grammar.parse(value, name.replace(/-/g, '_'));

    if(parsed === -1) {
      this.headers[name].splice(idx, 1); //delete from headers
      this.logger.warn('error parsing "' + name + '" header field with value "' + value + '"');
      return;
    } else {
      header.parsed = parsed;
      return parsed;
    }
  },

  /**
   * Message Header attribute selector. Alias of parseHeader.
   * @param {String} name header name
   * @param {Number} [idx=0] header index
   * @returns {Object|undefined} Parsed header object, undefined if the header is not present or in case of a parsing error.
   *
   * @example
   * message.s('via',3).port
   */
  s: function(name, idx) {
    return this.parseHeader(name, idx);
  },

  /**
  * Replace the value of the given header by the value.
  * @param {String} name header name
  * @param {String} value header value
  */
  setHeader: function(name, value) {
    var header = { raw: value };
    this.headers[SIP.Utils.headerize(name)] = [header];
  },

  toString: function() {
    return this.data;
  }
};

/**
 * @augments IncomingMessage
 * @class Class for incoming SIP request.
 */
IncomingRequest = function(ua) {
  this.logger = ua.getLogger('sip.sipmessage');
  this.ua = ua;
  this.headers = {};
  this.ruri = null;
  this.transport = null;
  this.server_transaction = null;
};
IncomingRequest.prototype = new IncomingMessage();

/**
* Stateful reply.
* @param {Number} code status code
* @param {String} reason reason phrase
* @param {Object} headers extra headers
* @param {String} body body
* @param {Function} [onSuccess] onSuccess callback
* @param {Function} [onFailure] onFailure callback
*/
IncomingRequest.prototype.reply = function(code, reason, extraHeaders, body, onSuccess, onFailure) {
  var rr, vias, length, idx, response,
  supported = [],
    to = this.getHeader('To'),
    r = 0,
    v = 0;

  code = code || null;
  reason = reason || null;

  // Validate code and reason values
  if (!code || (code < 100 || code > 699)) {
    throw new TypeError('Invalid status_code: '+ code);
  } else if (reason && typeof reason !== 'string' && !(reason instanceof String)) {
    throw new TypeError('Invalid reason_phrase: '+ reason);
  }

  reason = reason || SIP.C.REASON_PHRASE[code] || '';
  extraHeaders = (extraHeaders || []).slice();

  response = 'SIP/2.0 ' + code + ' ' + reason + '\r\n';

  if(this.method === SIP.C.INVITE && code > 100 && code <= 200) {
    rr = this.getHeaders('record-route');
    length = rr.length;

    for(r; r < length; r++) {
      response += 'Record-Route: ' + rr[r] + '\r\n';
    }
  }

  vias = this.getHeaders('via');
  length = vias.length;

  for(v; v < length; v++) {
    response += 'Via: ' + vias[v] + '\r\n';
  }

  if(!this.to_tag && code > 100) {
    to += ';tag=' + SIP.Utils.newTag();
  } else if(this.to_tag && !this.s('to').hasParam('tag')) {
    to += ';tag=' + this.to_tag;
  }

  response += 'To: ' + to + '\r\n';
  response += 'From: ' + this.getHeader('From') + '\r\n';
  response += 'Call-ID: ' + this.call_id + '\r\n';
  response += 'CSeq: ' + this.cseq + ' ' + this.method + '\r\n';

  length = extraHeaders.length;
  for (idx = 0; idx < length; idx++) {
    response += extraHeaders[idx].trim() +'\r\n';
  }

  //Supported
  if (this.method === SIP.C.INVITE &&
               (this.ua.contact.pub_gruu || this.ua.contact.temp_gruu)) {
    supported.push('gruu');
  }

  if (this.ua.configuration.rel100 === SIP.C.supported.SUPPORTED) {
    supported.push('100rel');
  }

  supported.push('outbound');

  response += 'Supported: ' + supported + '\r\n';

  if(body) {
    length = SIP.Utils.str_utf8_length(body);
    response += 'Content-Type: application/sdp\r\n';
    response += 'Content-Length: ' + length + '\r\n\r\n';
    response += body;
  } else {
    response += 'Content-Length: ' + 0 + '\r\n\r\n';
  }

  this.server_transaction.receiveResponse(code, response, onSuccess, onFailure);

  return response;
};

/**
* Stateless reply.
* @param {Number} code status code
* @param {String} reason reason phrase
*/
IncomingRequest.prototype.reply_sl = function(code, reason) {
  var to, response,
    v = 0,
    vias = this.getHeaders('via'),
    length = vias.length;

  code = code || null;
  reason = reason || null;

  // Validate code and reason values
  if (!code || (code < 100 || code > 699)) {
    throw new TypeError('Invalid status_code: '+ code);
  } else if (reason && typeof reason !== 'string' && !(reason instanceof String)) {
    throw new TypeError('Invalid reason_phrase: '+ reason);
  }

  reason = reason || SIP.C.REASON_PHRASE[code] || '';

  response = 'SIP/2.0 ' + code + ' ' + reason + '\r\n';

  for(v; v < length; v++) {
    response += 'Via: ' + vias[v] + '\r\n';
  }

  to = this.getHeader('To');

  if(!this.to_tag && code > 100) {
    to += ';tag=' + SIP.Utils.newTag();
  } else if(this.to_tag && !this.s('to').hasParam('tag')) {
    to += ';tag=' + this.to_tag;
  }

  response += 'To: ' + to + '\r\n';
  response += 'From: ' + this.getHeader('From') + '\r\n';
  response += 'Call-ID: ' + this.call_id + '\r\n';
  response += 'CSeq: ' + this.cseq + ' ' + this.method + '\r\n';
  response += 'Content-Length: ' + 0 + '\r\n\r\n';

  this.transport.send(response);
};


/**
 * @augments IncomingMessage
 * @class Class for incoming SIP response.
 */
IncomingResponse = function(ua) {
  this.logger = ua.getLogger('sip.sipmessage');
  this.headers = {};
  this.status_code = null;
  this.reason_phrase = null;
};
IncomingResponse.prototype = new IncomingMessage();

SIP.OutgoingRequest = OutgoingRequest;
SIP.IncomingRequest = IncomingRequest;
SIP.IncomingResponse = IncomingResponse;
};

},{}],20:[function(_dereq_,module,exports){
/**
 * @fileoverview Incoming SIP Message Sanity Check
 */

/**
 * SIP message sanity check.
 * @augments SIP
 * @function
 * @param {SIP.IncomingMessage} message
 * @param {SIP.UA} ua
 * @param {SIP.Transport} transport
 * @returns {Boolean}
 */
module.exports = function (SIP) {
var sanityCheck,
 logger,
 message, ua, transport,
 requests = [],
 responses = [],
 all = [];

/*
 * Sanity Check for incoming Messages
 *
 * Requests:
 *  - _rfc3261_8_2_2_1_ Receive a Request with a non supported URI scheme
 *  - _rfc3261_16_3_4_ Receive a Request already sent by us
 *   Does not look at via sent-by but at sipjsId, which is inserted as
 *   a prefix in all initial requests generated by the ua
 *  - _rfc3261_18_3_request_ Body Content-Length
 *  - _rfc3261_8_2_2_2_ Merged Requests
 *
 * Responses:
 *  - _rfc3261_8_1_3_3_ Multiple Via headers
 *  - _rfc3261_18_1_2_ sent-by mismatch
 *  - _rfc3261_18_3_response_ Body Content-Length
 *
 * All:
 *  - Minimum headers in a SIP message
 */

// Sanity Check functions for requests
function rfc3261_8_2_2_1() {
  if(!message.ruri || message.ruri.scheme !== 'sip') {
    reply(416);
    return false;
  }
}

function rfc3261_16_3_4() {
  if(!message.to_tag) {
    if(message.call_id.substr(0, 5) === ua.configuration.sipjsId) {
      reply(482);
      return false;
    }
  }
}

function rfc3261_18_3_request() {
  var len = SIP.Utils.str_utf8_length(message.body),
  contentLength = message.getHeader('content-length');

  if(len < contentLength) {
    reply(400);
    return false;
  }
}

function rfc3261_8_2_2_2() {
  var tr, idx,
    fromTag = message.from_tag,
    call_id = message.call_id,
    cseq = message.cseq;

  if(!message.to_tag) {
    if(message.method === SIP.C.INVITE) {
      tr = ua.transactions.ist[message.via_branch];
      if(tr) {
        return;
      } else {
        for(idx in ua.transactions.ist) {
          tr = ua.transactions.ist[idx];
          if(tr.request.from_tag === fromTag && tr.request.call_id === call_id && tr.request.cseq === cseq) {
            reply(482);
            return false;
          }
        }
      }
    } else {
      tr = ua.transactions.nist[message.via_branch];
      if(tr) {
        return;
      } else {
        for(idx in ua.transactions.nist) {
          tr = ua.transactions.nist[idx];
          if(tr.request.from_tag === fromTag && tr.request.call_id === call_id && tr.request.cseq === cseq) {
            reply(482);
            return false;
          }
        }
      }
    }
  }
}

// Sanity Check functions for responses
function rfc3261_8_1_3_3() {
  if(message.getHeaders('via').length > 1) {
    logger.warn('More than one Via header field present in the response. Dropping the response');
    return false;
  }
}

function rfc3261_18_1_2() {
  var viaHost = ua.configuration.viaHost;
  if(message.via.host !== viaHost || message.via.port !== undefined) {
    logger.warn('Via sent-by in the response does not match UA Via host value. Dropping the response');
    return false;
  }
}

function rfc3261_18_3_response() {
  var
    len = SIP.Utils.str_utf8_length(message.body),
    contentLength = message.getHeader('content-length');

    if(len < contentLength) {
      logger.warn('Message body length is lower than the value in Content-Length header field. Dropping the response');
      return false;
    }
}

// Sanity Check functions for requests and responses
function minimumHeaders() {
  var
    mandatoryHeaders = ['from', 'to', 'call_id', 'cseq', 'via'],
    idx = mandatoryHeaders.length;

  while(idx--) {
    if(!message.hasHeader(mandatoryHeaders[idx])) {
      logger.warn('Missing mandatory header field : '+ mandatoryHeaders[idx] +'. Dropping the response');
      return false;
    }
  }
}

// Reply
function reply(status_code) {
  var to,
    response = "SIP/2.0 " + status_code + " " + SIP.C.REASON_PHRASE[status_code] + "\r\n",
    vias = message.getHeaders('via'),
    length = vias.length,
    idx = 0;

  for(idx; idx < length; idx++) {
    response += "Via: " + vias[idx] + "\r\n";
  }

  to = message.getHeader('To');

  if(!message.to_tag) {
    to += ';tag=' + SIP.Utils.newTag();
  }

  response += "To: " + to + "\r\n";
  response += "From: " + message.getHeader('From') + "\r\n";
  response += "Call-ID: " + message.call_id + "\r\n";
  response += "CSeq: " + message.cseq + " " + message.method + "\r\n";
  response += "\r\n";

  transport.send(response);
}

requests.push(rfc3261_8_2_2_1);
requests.push(rfc3261_16_3_4);
requests.push(rfc3261_18_3_request);
requests.push(rfc3261_8_2_2_2);

responses.push(rfc3261_8_1_3_3);
responses.push(rfc3261_18_1_2);
responses.push(rfc3261_18_3_response);

all.push(minimumHeaders);

sanityCheck = function(m, u, t) {
  var len, pass;

  message = m;
  ua = u;
  transport = t;

  logger = ua.getLogger('sip.sanitycheck');

  len = all.length;
  while(len--) {
    pass = all[len](message);
    if(pass === false) {
      return false;
    }
  }

  if(message instanceof SIP.IncomingRequest) {
    len = requests.length;
    while(len--) {
      pass = requests[len](message);
      if(pass === false) {
        return false;
      }
    }
  }

  else if(message instanceof SIP.IncomingResponse) {
    len = responses.length;
    while(len--) {
      pass = responses[len](message);
      if(pass === false) {
        return false;
      }
    }
  }

  //Everything is OK
  return true;
};

SIP.sanityCheck = sanityCheck;
};

},{}],21:[function(_dereq_,module,exports){
module.exports = function (SIP) {
var ServerContext;

ServerContext = function (ua, request) {
  var events = [
      'progress',
      'accepted',
      'rejected',
      'failed'
    ];
  this.ua = ua;
  this.logger = ua.getLogger('sip.servercontext');
  this.request = request;
  if (request.method === SIP.C.INVITE) {
    this.transaction = new SIP.Transactions.InviteServerTransaction(request, ua);
  } else {
    this.transaction = new SIP.Transactions.NonInviteServerTransaction(request, ua);
  }

  if (request.body) {
    this.body = request.body;
  }
  if (request.hasHeader('Content-Type')) {
    this.contentType = request.getHeader('Content-Type');
  }
  this.method = request.method;

  this.data = {};

  this.localIdentity = request.to;
  this.remoteIdentity = request.from;

  this.initEvents(events);
};

ServerContext.prototype = new SIP.EventEmitter();

ServerContext.prototype.progress = function (options) {
  options = options || {};
  var
    statusCode = options.statusCode || 180,
    reasonPhrase = options.reasonPhrase || SIP.C.REASON_PHRASE[statusCode],
    extraHeaders = (options.extraHeaders || []).slice(),
    body = options.body,
    response;

  if (statusCode < 100 || statusCode > 199) {
    throw new TypeError('Invalid statusCode: ' + statusCode);
  }
  response = this.request.reply(statusCode, reasonPhrase, extraHeaders, body);
  this.emit('progress', response, reasonPhrase);

  return this;
};

ServerContext.prototype.accept = function (options) {
  options = options || {};
  var
    statusCode = options.statusCode || 200,
    reasonPhrase = options.reasonPhrase || SIP.C.REASON_PHRASE[statusCode],
    extraHeaders = (options.extraHeaders || []).slice(),
    body = options.body,
    response;

  if (statusCode < 200 || statusCode > 299) {
    throw new TypeError('Invalid statusCode: ' + statusCode);
  }
  response = this.request.reply(statusCode, reasonPhrase, extraHeaders, body);
  this.emit('accepted', response, reasonPhrase);

  return this;
};

ServerContext.prototype.reject = function (options) {
  options = options || {};
  var
    statusCode = options.statusCode || 480,
    reasonPhrase = options.reasonPhrase || SIP.C.REASON_PHRASE[statusCode],
    extraHeaders = (options.extraHeaders || []).slice(),
    body = options.body,
    response;

  if (statusCode < 300 || statusCode > 699) {
    throw new TypeError('Invalid statusCode: ' + statusCode);
  }
  response = this.request.reply(statusCode, reasonPhrase, extraHeaders, body);
  this.emit('rejected', response, reasonPhrase);
  this.emit('failed', response, reasonPhrase);

  return this;
};

ServerContext.prototype.reply = function (options) {
  options = options || {};
  var
    statusCode = options.statusCode,
    reasonPhrase = options.reasonPhrase,
    extraHeaders = (options.extraHeaders || []).slice(),
    body = options.body;

  this.request.reply(statusCode, reasonPhrase, extraHeaders, body);

  return this;
};

ServerContext.prototype.onRequestTimeout = function () {
  this.emit('failed', null, SIP.C.causes.REQUEST_TIMEOUT);
};

ServerContext.prototype.onTransportError = function () {
  this.emit('failed', null, SIP.C.causes.CONNECTION_ERROR);
};

SIP.ServerContext = ServerContext;
};

},{}],22:[function(_dereq_,module,exports){
module.exports = function (SIP, window, DTMF) {

var Session, InviteServerContext, InviteClientContext,
 C = {
    //Session states
    STATUS_NULL:                        0,
    STATUS_INVITE_SENT:                 1,
    STATUS_1XX_RECEIVED:                2,
    STATUS_INVITE_RECEIVED:             3,
    STATUS_WAITING_FOR_ANSWER:          4,
    STATUS_ANSWERED:                    5,
    STATUS_WAITING_FOR_PRACK:           6,
    STATUS_WAITING_FOR_ACK:             7,
    STATUS_CANCELED:                    8,
    STATUS_TERMINATED:                  9,
    STATUS_ANSWERED_WAITING_FOR_PRACK: 10,
    STATUS_EARLY_MEDIA:                11,
    STATUS_CONFIRMED:                  12
  };

/*
 * @param {function returning SIP.MediaHandler} [mediaHandlerFactory]
 *        (See the documentation for the mediaHandlerFactory argument of the UA constructor.)
 */
Session = function (mediaHandlerFactory) {
  var events = [
  'connecting',
  'terminated',
  'dtmf',
  'invite',
  'cancel',
  'refer',
  'bye',
  'hold',
  'unhold',
  'muted',
  'unmuted'
  ];

  this.status = C.STATUS_NULL;
  this.dialog = null;
  this.earlyDialogs = {};
  this.mediaHandlerFactory = mediaHandlerFactory || SIP.WebRTC.MediaHandler.defaultFactory;
  // this.mediaHandler gets set by ICC/ISC constructors
  this.hasOffer = false;
  this.hasAnswer = false;

  // Session Timers
  this.timers = {
    ackTimer: null,
    expiresTimer: null,
    invite2xxTimer: null,
    userNoAnswerTimer: null,
    rel1xxTimer: null,
    prackTimer: null
  };

  // Session info
  this.startTime = null;
  this.endTime = null;
  this.tones = null;

  // Mute/Hold state
  this.local_hold = false;
  this.remote_hold = false;

  this.pending_actions = {
    actions: [],

    length: function() {
      return this.actions.length;
    },

    isPending: function(name){
      var
      idx = 0,
      length = this.actions.length;

      for (idx; idx<length; idx++) {
        if (this.actions[idx].name === name) {
          return true;
        }
      }
      return false;
    },

    shift: function() {
      return this.actions.shift();
    },

    push: function(name) {
      this.actions.push({
        name: name
      });
    },

    pop: function(name) {
      var
      idx = 0,
      length = this.actions.length;

      for (idx; idx<length; idx++) {
        if (this.actions[idx].name === name) {
          this.actions.splice(idx,1);
          length --;
          idx--;
        }
      }
    }
   };

  this.early_sdp = null;
  this.rel100 = SIP.C.supported.UNSUPPORTED;

  this.initMoreEvents(events);
};

Session.prototype = {
  dtmf: function(tones, options) {
    var tone, dtmfs = [],
        self = this;

    options = options || {};

    if (tones === undefined) {
      throw new TypeError('Not enough arguments');
    }

    // Check Session Status
    if (this.status !== C.STATUS_CONFIRMED && this.status !== C.STATUS_WAITING_FOR_ACK) {
      throw new SIP.Exceptions.InvalidStateError(this.status);
    }

    // Check tones
    if (!tones || (typeof tones !== 'string' && typeof tones !== 'number') || !tones.toString().match(/^[0-9A-D#*,]+$/i)) {
      throw new TypeError('Invalid tones: '+ tones);
    }

    tones = tones.toString().split('');

    while (tones.length > 0) { dtmfs.push(new DTMF(this, tones.shift(), options)); }

    if (this.tones) {
      // Tones are already queued, just add to the queue
      this.tones =  this.tones.concat(dtmfs);
      return this;
    }

    var sendDTMF = function () {
      var dtmf, timeout;

      if (self.status === C.STATUS_TERMINATED || !self.tones || self.tones.length === 0) {
        // Stop sending DTMF
        self.tones = null;
        return this;
      }

      dtmf = self.tones.shift();

      if (tone === ',') {
        timeout = 2000;
      } else {
        dtmf.on('failed', function(){self.tones = null;});
        dtmf.send(options);
        timeout = dtmf.duration + dtmf.interToneGap;
      }

      // Set timeout for the next tone
      SIP.Timers.setTimeout(sendDTMF, timeout);
    };

    this.tones = dtmfs;
    sendDTMF();
    return this;
  },

  bye: function(options) {
    options = options || {};
    var statusCode = options.statusCode;

    // Check Session Status
    if (this.status === C.STATUS_TERMINATED) {
      this.logger.error('Error: Attempted to send BYE in a terminated session.');
      return this;
    }

    this.logger.log('terminating Session');

    if (statusCode && (statusCode < 200 || statusCode >= 700)) {
      throw new TypeError('Invalid statusCode: '+ statusCode);
    }

    options.receiveResponse = function () {};

    return this.
      sendRequest(SIP.C.BYE, options).
      terminated();
  },

  refer: function(target, options) {
    options = options || {};
    var extraHeaders = (options.extraHeaders || []).slice(),
        originalTarget = target;

    if (target === undefined) {
      throw new TypeError('Not enough arguments');
    } else if (target instanceof SIP.InviteServerContext || target instanceof SIP.InviteClientContext) {
      //Attended Transfer
      // B.transfer(C)
      extraHeaders.push('Contact: '+ this.contact);
      extraHeaders.push('Allow: '+ SIP.Utils.getAllowedMethods(this.ua));
      extraHeaders.push('Refer-To: <' + target.dialog.remote_target.toString() + '?Replaces=' + target.dialog.id.call_id + '%3Bto-tag%3D' + target.dialog.id.remote_tag + '%3Bfrom-tag%3D' + target.dialog.id.local_tag + '>');
    } else {
      //Blind Transfer

      // Check Session Status
      if (this.status !== C.STATUS_CONFIRMED) {
        throw new SIP.Exceptions.InvalidStateError(this.status);
      }

      // normalizeTarget allows instances of SIP.URI to pass through unaltered,
      // so try to make one ahead of time
      try {
        target = SIP.Grammar.parse(target, 'Refer_To').uri || target;
      } catch (e) {
        this.logger.debug(".refer() cannot parse Refer_To from", target);
        this.logger.debug("...falling through to normalizeTarget()");
      }

      // Check target validity
      target = this.ua.normalizeTarget(target);
      if (!target) {
        throw new TypeError('Invalid target: ' + originalTarget);
      }

      extraHeaders.push('Contact: '+ this.contact);
      extraHeaders.push('Allow: '+ SIP.Utils.getAllowedMethods(this.ua));
      extraHeaders.push('Refer-To: '+ target);
    }

    // Send the request
    this.sendRequest(SIP.C.REFER, {
      extraHeaders: extraHeaders,
      body: options.body,
      receiveResponse: function() {}
    });
    // hang up only if we transferred to a SIP address
    if (target.scheme.match("^sips?$")) {
      this.terminate();
    }
    return this;
  },

  followRefer: function followRefer (callback) {
    return function referListener (callback, request) {
      // window.open non-SIP URIs if possible and keep session open
      var target = request.parseHeader('refer-to').uri;
      if (!target.scheme.match("^sips?$")) {
        var targetString = target.toString();
        if (typeof window !== "undefined" && typeof window.open === "function") {
          window.open(targetString);
        } else {
          this.logger.warn("referred to non-SIP URI but window.open isn't a function: " + targetString);
        }
        return;
      }

      SIP.Hacks.Chrome.getsConfusedAboutGUM(this);

      /*
        Harmless race condition.  Both sides of REFER
        may send a BYE, but in the end the dialogs are destroyed.
      */
      var referSession = this.ua.invite(request.parseHeader('refer-to').uri, {
        media: this.mediaHint
      });

      callback.call(this, request, referSession);

      this.terminate();
    }.bind(this, callback);
  },

  sendRequest: function(method,options) {
    options = options || {};
    var self = this;

    var request = new SIP.OutgoingRequest(
      method,
      this.dialog.remote_target,
      this.ua,
      {
        cseq: options.cseq || (this.dialog.local_seqnum += 1),
        call_id: this.dialog.id.call_id,
        from_uri: this.dialog.local_uri,
        from_tag: this.dialog.id.local_tag,
        to_uri: this.dialog.remote_uri,
        to_tag: this.dialog.id.remote_tag,
        route_set: this.dialog.route_set,
        statusCode: options.statusCode,
        reasonPhrase: options.reasonPhrase
      },
      options.extraHeaders || [],
      options.body
    );

    new SIP.RequestSender({
      request: request,
      onRequestTimeout: function() {
        self.onRequestTimeout();
      },
      onTransportError: function() {
        self.onTransportError();
      },
      receiveResponse: options.receiveResponse || function(response) {
        self.receiveNonInviteResponse(response);
      }
    }, this.ua).send();

    // Emit the request event
    if (this.checkEvent(method.toLowerCase())) {
      this.emit(method.toLowerCase(), request);
    }

    return this;
  },

  close: function() {
    var idx;

    if(this.status === C.STATUS_TERMINATED) {
      return this;
    }

    this.logger.log('closing INVITE session ' + this.id);

    // 1st Step. Terminate media.
    if (this.mediaHandler){
      this.mediaHandler.close();
    }

    // 2nd Step. Terminate signaling.

    // Clear session timers
    for(idx in this.timers) {
      SIP.Timers.clearTimeout(this.timers[idx]);
    }

    // Terminate dialogs

    // Terminate confirmed dialog
    if(this.dialog) {
      this.dialog.terminate();
      delete this.dialog;
    }

    // Terminate early dialogs
    for(idx in this.earlyDialogs) {
      this.earlyDialogs[idx].terminate();
      delete this.earlyDialogs[idx];
    }

    this.status = C.STATUS_TERMINATED;

    delete this.ua.sessions[this.id];
    return this;
  },

  createDialog: function(message, type, early) {
    var dialog, early_dialog,
      local_tag = message[(type === 'UAS') ? 'to_tag' : 'from_tag'],
      remote_tag = message[(type === 'UAS') ? 'from_tag' : 'to_tag'],
      id = message.call_id + local_tag + remote_tag;

    early_dialog = this.earlyDialogs[id];

    // Early Dialog
    if (early) {
      if (early_dialog) {
        return true;
      } else {
        early_dialog = new SIP.Dialog(this, message, type, SIP.Dialog.C.STATUS_EARLY);

        // Dialog has been successfully created.
        if(early_dialog.error) {
          this.logger.error(early_dialog.error);
          this.failed(message, SIP.C.causes.INTERNAL_ERROR);
          return false;
        } else {
          this.earlyDialogs[id] = early_dialog;
          return true;
        }
      }
    }
    // Confirmed Dialog
    else {
      // In case the dialog is in _early_ state, update it
      if (early_dialog) {
        early_dialog.update(message, type);
        this.dialog = early_dialog;
        delete this.earlyDialogs[id];
        for (var dia in this.earlyDialogs) {
          this.earlyDialogs[dia].terminate();
          delete this.earlyDialogs[dia];
        }
        return true;
      }

      // Otherwise, create a _confirmed_ dialog
      dialog = new SIP.Dialog(this, message, type);

      if(dialog.error) {
        this.logger.error(dialog.error);
        this.failed(message, SIP.C.causes.INTERNAL_ERROR);
        return false;
      } else {
        this.to_tag = message.to_tag;
        this.dialog = dialog;
        return true;
      }
    }
  },

  /**
  * Check if Session is ready for a re-INVITE
  *
  * @returns {Boolean}
  */
  isReadyToReinvite: function() {
    return this.mediaHandler.isReady() &&
      !this.dialog.uac_pending_reply &&
      !this.dialog.uas_pending_reply;
  },

  /**
   * Mute
   */
  mute: function(options) {
    var ret = this.mediaHandler.mute(options);
    if (ret) {
      this.onmute(ret);
    }
  },

  /**
   * Unmute
   */
  unmute: function(options) {
    var ret = this.mediaHandler.unmute(options);
    if (ret) {
      this.onunmute(ret);
    }
  },

  /**
   * Hold
   */
  hold: function() {

    if (this.status !== C.STATUS_WAITING_FOR_ACK && this.status !== C.STATUS_CONFIRMED) {
      throw new SIP.Exceptions.InvalidStateError(this.status);
    }

    this.mediaHandler.hold();

    // Check if RTCSession is ready to send a reINVITE
    if (!this.isReadyToReinvite()) {
      /* If there is a pending 'unhold' action, cancel it and don't queue this one
       * Else, if there isn't any 'hold' action, add this one to the queue
       * Else, if there is already a 'hold' action, skip
       */
      if (this.pending_actions.isPending('unhold')) {
        this.pending_actions.pop('unhold');
      } else if (!this.pending_actions.isPending('hold')) {
        this.pending_actions.push('hold');
      }
      return;
    } else if (this.local_hold === true) {
        return;
    }

    this.onhold('local');

    this.sendReinvite({
      mangle: function(body){

        // Don't receive media
        // TODO - This will break for media streams with different directions.
        if (!(/a=(sendrecv|sendonly|recvonly|inactive)/).test(body)) {
          body = body.replace(/(m=[^\r]*\r\n)/g, '$1a=sendonly\r\n');
        } else {
          body = body.replace(/a=sendrecv\r\n/g, 'a=sendonly\r\n');
          body = body.replace(/a=recvonly\r\n/g, 'a=inactive\r\n');
        }

        return body;
      }
    });
  },

  /**
   * Unhold
   */
  unhold: function() {

    if (this.status !== C.STATUS_WAITING_FOR_ACK && this.status !== C.STATUS_CONFIRMED) {
      throw new SIP.Exceptions.InvalidStateError(this.status);
    }

    this.mediaHandler.unhold();

    if (!this.isReadyToReinvite()) {
      /* If there is a pending 'hold' action, cancel it and don't queue this one
       * Else, if there isn't any 'unhold' action, add this one to the queue
       * Else, if there is already a 'unhold' action, skip
       */
      if (this.pending_actions.isPending('hold')) {
        this.pending_actions.pop('hold');
      } else if (!this.pending_actions.isPending('unhold')) {
        this.pending_actions.push('unhold');
      }
      return;
    } else if (this.local_hold === false) {
      return;
    }

    this.onunhold('local');

    this.sendReinvite();
  },

  /**
   * isOnHold
   */
  isOnHold: function() {
    return {
      local: this.local_hold,
      remote: this.remote_hold
    };
  },

  /**
   * In dialog INVITE Reception
   * @private
   */
  receiveReinvite: function(request) {
    var self = this,
        contentType = request.getHeader('Content-Type'),
        hold = true;

    if (request.body) {
      if (contentType !== 'application/sdp') {
        this.logger.warn('invalid Content-Type');
        request.reply(415);
        return;
      }

      // Are we holding?
      hold = (/a=(sendonly|inactive)/).test(request.body);

      this.mediaHandler.setDescription(
        request.body,
        /*
         * onSuccess
         * SDP Offer is valid
         */
        function() {
          self.mediaHandler.getDescription(
            function(body) {
              request.reply(200, null, ['Contact: ' + self.contact], body,
                function() {
                  self.status = C.STATUS_WAITING_FOR_ACK;
                  self.setInvite2xxTimer(request, body);
                  self.setACKTimer();

                  if (self.remote_hold && !hold) {
                    self.onunhold('remote');
                  } else if (!self.remote_hold && hold) {
                    self.onhold('remote');
                  }
                });
            },
            function() {
              request.reply(500);
            },
            self.mediaHint
          );
        },
        /*
         * onFailure
         * Bad media description
         */
        function(e) {
          self.logger.error(e);
          request.reply(488);
        }
      );
    }
  },

  sendReinvite: function(options) {
    options = options || {};

    var
      self = this,
       extraHeaders = (options.extraHeaders || []).slice(),
       eventHandlers = options.eventHandlers || {},
       mangle = options.mangle || null;

    if (eventHandlers.succeeded) {
      this.reinviteSucceeded = eventHandlers.succeeded;
    } else {
      this.reinviteSucceeded = function(){
        SIP.Timers.clearTimeout(self.timers.ackTimer);
        SIP.Timers.clearTimeout(self.timers.invite2xxTimer);
        self.status = C.STATUS_CONFIRMED;
      };
    }
    if (eventHandlers.failed) {
      this.reinviteFailed = eventHandlers.failed;
    } else {
      this.reinviteFailed = function(){};
    }

    extraHeaders.push('Contact: ' + this.contact);
    extraHeaders.push('Allow: '+ SIP.Utils.getAllowedMethods(this.ua));
    extraHeaders.push('Content-Type: application/sdp');

    this.receiveResponse = this.receiveReinviteResponse;
    //REVISIT
    this.mediaHandler.getDescription(
      function(body){
        if (mangle) {
          body = mangle(body);
        }

        self.dialog.sendRequest(self, SIP.C.INVITE, {
          extraHeaders: extraHeaders,
          body: body
        });
      },
      function() {
        if (self.isReadyToReinvite()) {
          self.onReadyToReinvite();
        }
        self.reinviteFailed();
      },
      self.mediaHint
    );
  },

  receiveRequest: function (request) {
    switch (request.method) {
      case SIP.C.BYE:
        request.reply(200);
        if(this.status === C.STATUS_CONFIRMED) {
          this.emit('bye', request);
          this.terminated(request, SIP.C.causes.BYE);
        }
        break;
      case SIP.C.INVITE:
        if(this.status === C.STATUS_CONFIRMED) {
          this.logger.log('re-INVITE received');
          // Switch these two lines to try re-INVITEs:
          //this.receiveReinvite(request);
          request.reply(488, null, ['Warning: 399 sipjs "Cannot update media description"']);
        }
        break;
      case SIP.C.INFO:
        if(this.status === C.STATUS_CONFIRMED || this.status === C.STATUS_WAITING_FOR_ACK) {
          var body, tone, duration,
              contentType = request.getHeader('content-type'),
              reg_tone = /^(Signal\s*?=\s*?)([0-9A-D#*]{1})(\s)?.*/,
              reg_duration = /^(Duration\s?=\s?)([0-9]{1,4})(\s)?.*/;

          if (contentType) {
            if (contentType.match(/^application\/dtmf-relay/i)) {
              if (request.body) {
                body = request.body.split('\r\n', 2);
                if (body.length === 2) {
                  if (reg_tone.test(body[0])) {
                    tone = body[0].replace(reg_tone,"$2");
                  }
                  if (reg_duration.test(body[1])) {
                    duration = parseInt(body[1].replace(reg_duration,"$2"), 10);
                  }
                }
              }

              new DTMF(this, tone, {duration: duration}).init_incoming(request);
            } else {
              request.reply(415, null, ["Accept: application/dtmf-relay"]);
            }
          }
        }
        break;
      case SIP.C.REFER:
        if(this.status ===  C.STATUS_CONFIRMED) {
          this.logger.log('REFER received');
          request.reply(202, 'Accepted');
          var
            hasReferListener = this.checkListener('refer'),
            notifyBody = hasReferListener ?
              'SIP/2.0 100 Trying' :
              // RFC 3515.2.4.2: 'the UA MAY decline the request.'
              'SIP/2.0 603 Declined'
          ;

          this.sendRequest(SIP.C.NOTIFY, {
            extraHeaders:[
              'Event: refer',
              'Subscription-State: terminated',
              'Content-Type: message/sipfrag'
            ],
            body: notifyBody,
            receiveResponse: function() {}
          });

          if (hasReferListener) {
            this.emit('refer', request);
          }
        }
        break;
    }
  },

  /**
   * Reception of Response for in-dialog INVITE
   * @private
   */
  receiveReinviteResponse: function(response) {
    var self = this,
        contentType = response.getHeader('Content-Type');

    if (this.status === C.STATUS_TERMINATED) {
      return;
    }

    switch(true) {
      case /^1[0-9]{2}$/.test(response.status_code):
        break;
      case /^2[0-9]{2}$/.test(response.status_code):
        this.status = C.STATUS_CONFIRMED;

        this.sendRequest(SIP.C.ACK,{cseq:response.cseq});

        if(!response.body) {
          this.reinviteFailed();
          break;
        } else if (contentType !== 'application/sdp') {
          this.reinviteFailed();
          break;
        }

        //REVISIT
        this.mediaHandler.setDescription(
          response.body,
          /*
           * onSuccess
           * SDP Answer fits with Offer.
           */
          function() {
            self.reinviteSucceeded();
          },
          /*
           * onFailure
           * SDP Answer does not fit the Offer.
           */
          function() {
            self.reinviteFailed();
          }
        );
        break;
      default:
        this.reinviteFailed();
    }
  },

  acceptAndTerminate: function(response, status_code, reason_phrase) {
    var extraHeaders = [];

    if (status_code) {
      reason_phrase = reason_phrase || SIP.C.REASON_PHRASE[status_code] || '';
      extraHeaders.push('Reason: SIP ;cause=' + status_code + '; text="' + reason_phrase + '"');
    }

    // An error on dialog creation will fire 'failed' event
    if (this.dialog || this.createDialog(response, 'UAC')) {
      this.sendRequest(SIP.C.ACK,{cseq: response.cseq});
      this.sendRequest(SIP.C.BYE, {
        extraHeaders: extraHeaders
      });
    }

    return this;
  },

  /**
   * RFC3261 13.3.1.4
   * Response retransmissions cannot be accomplished by transaction layer
   *  since it is destroyed when receiving the first 2xx answer
   */
  setInvite2xxTimer: function(request, body) {
    var self = this,
        timeout = SIP.Timers.T1;

    this.timers.invite2xxTimer = SIP.Timers.setTimeout(function invite2xxRetransmission() {
      if (self.status !== C.STATUS_WAITING_FOR_ACK) {
        return;
      }

      self.logger.log('no ACK received, attempting to retransmit OK');

      request.reply(200, null, ['Contact: ' + self.contact], body);

      timeout = Math.min(timeout * 2, SIP.Timers.T2);

      self.timers.invite2xxTimer = SIP.Timers.setTimeout(invite2xxRetransmission, timeout);
    }, timeout);
  },

  /**
   * RFC3261 14.2
   * If a UAS generates a 2xx response and never receives an ACK,
   *  it SHOULD generate a BYE to terminate the dialog.
   */
  setACKTimer: function() {
    var self = this;

    this.timers.ackTimer = SIP.Timers.setTimeout(function() {
      if(self.status === C.STATUS_WAITING_FOR_ACK) {
        self.logger.log('no ACK received for an extended period of time, terminating the call');
        SIP.Timers.clearTimeout(self.timers.invite2xxTimer);
        self.sendRequest(SIP.C.BYE);
        self.terminated(null, SIP.C.causes.NO_ACK);
      }
    }, SIP.Timers.TIMER_H);
  },

  /*
   * @private
   */
  onReadyToReinvite: function() {
    var action = this.pending_actions.shift();

    if (!action || !this[action.name]) {
      return;
    }

    this[action.name]();
  },

  onTransportError: function() {
    if (this.status === C.STATUS_CONFIRMED) {
      this.terminated(null, SIP.C.causes.CONNECTION_ERROR);
    } else if (this.status !== C.STATUS_TERMINATED) {
      this.failed(null, SIP.C.causes.CONNECTION_ERROR);
    }
  },

  onRequestTimeout: function() {
    if (this.status === C.STATUS_CONFIRMED) {
      this.terminated(null, SIP.C.causes.REQUEST_TIMEOUT);
    } else if (this.status !== C.STATUS_TERMINATED) {
      this.failed(null, SIP.C.causes.REQUEST_TIMEOUT);
    }
  },

  onDialogError: function(response) {
    if (this.status === C.STATUS_CONFIRMED) {
      this.terminated(response, SIP.C.causes.DIALOG_ERROR);
    } else if (this.status !== C.STATUS_TERMINATED) {
      this.failed(response, SIP.C.causes.DIALOG_ERROR);
    }
  },

  /**
   * @private
   */
  onhold: function(originator) {
    this[originator === 'local' ? 'local_hold' : 'remote_hold'] = true;
    this.emit('hold', { originator: originator });
  },

  /**
   * @private
   */
  onunhold: function(originator) {
    this[originator === 'local' ? 'local_hold' : 'remote_hold'] = false;
    this.emit('unhold', { originator: originator });
  },

  /*
   * @private
   */
  onmute: function(options) {
    this.emit('muted', {
      audio: options.audio,
      video: options.video
    });
  },

  /*
   * @private
   */
  onunmute: function(options) {
    this.emit('unmuted', {
      audio: options.audio,
      video: options.video
    });
  },

  failed: function(response, cause) {
    this.close();
    return this.emit('failed', response, cause);
  },

  rejected: function(response, cause) {
    this.close();
    return this.emit('rejected',
      response || null,
      cause
    );
  },

  canceled: function() {
    this.close();
    return this.emit('cancel');
  },

  accepted: function(response, cause) {
    cause = cause || (response && SIP.C.REASON_PHRASE[response.status_code]) || '';

    this.startTime = new Date();

    return this.emit('accepted', response, cause);
  },

  terminated: function(message, cause) {
    this.endTime = new Date();

    this.close();
    return this.emit('terminated', {
      message: message || null,
      cause: cause || null
    });
  },

  connecting: function(request) {
    return this.emit('connecting', { request: request });
  }
};

Session.C = C;
SIP.Session = Session;


InviteServerContext = function(ua, request) {
  var expires,
    self = this,
    contentType = request.getHeader('Content-Type'),
    contentDisp = request.parseHeader('Content-Disposition');

  // Check body and content type
  if ((!contentDisp && contentType !== 'application/sdp') || (contentDisp && contentDisp.type === 'render')) {
    this.renderbody = request.body;
    this.rendertype = contentType;
  } else if (contentType !== 'application/sdp' && (contentDisp && contentDisp.type === 'session')) {
    request.reply(415);
    //TODO: instead of 415, pass off to the media handler, who can then decide if we can use it
    return;
  }

  //TODO: move this into media handler
  SIP.Hacks.Firefox.cannotHandleExtraWhitespace(request);
  SIP.Hacks.AllBrowsers.maskDtls(request);

  SIP.Utils.augment(this, SIP.ServerContext, [ua, request]);
  SIP.Utils.augment(this, SIP.Session, [ua.configuration.mediaHandlerFactory]);

  this.status = C.STATUS_INVITE_RECEIVED;
  this.from_tag = request.from_tag;
  this.id = request.call_id + this.from_tag;
  this.request = request;
  this.contact = this.ua.contact.toString();

  this.receiveNonInviteResponse = function () {}; // intentional no-op

  this.logger = ua.getLogger('sip.inviteservercontext', this.id);

  //Save the session into the ua sessions collection.
  this.ua.sessions[this.id] = this;

  //Get the Expires header value if exists
  if(request.hasHeader('expires')) {
    expires = request.getHeader('expires') * 1000;
  }

  //Set 100rel if necessary
  function set100rel(h,c) {
    if (request.hasHeader(h) && request.getHeader(h).toLowerCase().indexOf('100rel') >= 0) {
      self.rel100 = c;
    }
  }
  set100rel('require', SIP.C.supported.REQUIRED);
  set100rel('supported', SIP.C.supported.SUPPORTED);

  /* Set the to_tag before
   * replying a response code that will create a dialog.
   */
  request.to_tag = SIP.Utils.newTag();

  // An error on dialog creation will fire 'failed' event
  if(!this.createDialog(request, 'UAS', true)) {
    request.reply(500, 'Missing Contact header field');
    return;
  }


  // add supporting to render no SDP INVITE by rgalvao
  if (!this.renderbody) {

     //Initialize Media Session
      this.mediaHandler = this.mediaHandlerFactory(this, {
         RTCConstraints: {"optional": [{'DtlsSrtpKeyAgreement': 'true'}]}
      });

      if (this.mediaHandler && this.mediaHandler.getRemoteStreams) {
          this.getRemoteStreams = this.mediaHandler.getRemoteStreams.bind(this.mediaHandler);
          this.getLocalStreams = this.mediaHandler.getLocalStreams.bind(this.mediaHandler);
      }
  }

  function fireNewSession() {
    var options = {extraHeaders: ['Contact: ' + self.contact]};

    if (self.rel100 !== SIP.C.supported.REQUIRED) {
      self.progress(options);
    }
    // add supporting to render no SDP INVITE by rgalvao
    if (self.renderbody)
    {
      self.status = C.STATUS_ANSWERED;
      self.hasAnswer = true;
      self.createDialog(request, 'UAS');
    }
    else
    {
       self.status = C.STATUS_WAITING_FOR_ANSWER;

       // Set userNoAnswerTimer
       self.timers.userNoAnswerTimer = SIP.Timers.setTimeout(function() {
            request.reply(408);
            self.failed(request, SIP.C.causes.NO_ANSWER);
            }, self.ua.configuration.noAnswerTimeout);
    }

    /* Set expiresTimer
     * RFC3261 13.3.1
     */
    if (expires) {
      self.timers.expiresTimer = SIP.Timers.setTimeout(function() {
        if(self.status === C.STATUS_WAITING_FOR_ANSWER) {
          request.reply(487);
          self.failed(request, SIP.C.causes.EXPIRES);
        }
      }, expires);
    }

    self.emit('invite',request);
  }

  if (!request.body || this.renderbody) {
    SIP.Timers.setTimeout(fireNewSession, 0);
  } else {
    this.hasOffer = true;
    this.mediaHandler.setDescription(
      request.body,
      /*
       * onSuccess
       * SDP Offer is valid. Fire UA newRTCSession
       */
      fireNewSession,
      /*
       * onFailure
       * Bad media description
       */
      function(e) {
        self.logger.warn('invalid SDP');
        self.logger.warn(e);
        request.reply(488);
      }
    );
  }
};

InviteServerContext.prototype = {
  reject: function(options) {
    // Check Session Status
    if (this.status === C.STATUS_TERMINATED) {
      throw new SIP.Exceptions.InvalidStateError(this.status);
    }

    this.logger.log('rejecting RTCSession');

    SIP.ServerContext.prototype.reject.apply(this, [options]);
    return this.terminated();
  },

  terminate: function(options) {
    options = options || {};

    var
    extraHeaders = (options.extraHeaders || []).slice(),
    body = options.body,
    dialog,
    self = this;

    if (this.status === C.STATUS_WAITING_FOR_ACK &&
       this.request.server_transaction.state !== SIP.Transactions.C.STATUS_TERMINATED) {
      dialog = this.dialog;

      this.receiveRequest = function(request) {
        if (request.method === SIP.C.ACK) {
          this.request(SIP.C.BYE, {
            extraHeaders: extraHeaders,
            body: body
          });
          dialog.terminate();
        }
      };

      this.request.server_transaction.on('stateChanged', function(){
        if (this.state === SIP.Transactions.C.STATUS_TERMINATED) {
          this.request = new SIP.OutgoingRequest(
            SIP.C.BYE,
            this.dialog.remote_target,
            this.ua,
            {
              'cseq': this.dialog.local_seqnum+=1,
              'call_id': this.dialog.id.call_id,
              'from_uri': this.dialog.local_uri,
              'from_tag': this.dialog.id.local_tag,
              'to_uri': this.dialog.remote_uri,
              'to_tag': this.dialog.id.remote_tag,
              'route_set': this.dialog.route_set
            },
            extraHeaders,
            body
          );

          new SIP.RequestSender(
            {
              request: this.request,
              onRequestTimeout: function() {
                self.onRequestTimeout();
              },
              onTransportError: function() {
                self.onTransportError();
              },
              receiveResponse: function() {
                return;
              }
            },
            this.ua
          ).send();
          dialog.terminate();
        }
      });

      this.emit('bye', this.request);
      this.terminated();

      // Restore the dialog into 'this' in order to be able to send the in-dialog BYE :-)
      this.dialog = dialog;

      // Restore the dialog into 'ua' so the ACK can reach 'this' session
      this.ua.dialogs[dialog.id.toString()] = dialog;

    } else if (this.status === C.STATUS_CONFIRMED) {
      this.bye(options);
    } else {
      this.reject(options);
    }

    return this;
  },

  /*
   * @param {Object} [options.media] gets passed to SIP.MediaHandler.getDescription as mediaHint
   */
  progress: function (options) {
    options = options || {};
    var
      statusCode = options.statusCode || 180,
      reasonPhrase = options.reasonPhrase,
      extraHeaders = (options.extraHeaders || []).slice(),
      body = options.body,
      response;

    if (statusCode < 100 || statusCode > 199) {
      throw new TypeError('Invalid statusCode: ' + statusCode);
    }

    if (this.isCanceled || this.status === C.STATUS_TERMINATED) {
      return this;
    }

    function do100rel() {
      statusCode = options.statusCode || 183;

      // Set status and add extra headers
      this.status = C.STATUS_WAITING_FOR_PRACK;
      extraHeaders.push('Contact: '+ this.contact);
      extraHeaders.push('Require: 100rel');
      extraHeaders.push('RSeq: ' + Math.floor(Math.random() * 10000));

      // Save media hint for later (referred sessions)
      this.mediaHint = options.media;

      // Get the session description to add to preaccept with
      this.mediaHandler.getDescription(
        // Success
        function succ(body) {
          if (this.isCanceled || this.status === C.STATUS_TERMINATED) {
            return;
          }

          this.early_sdp = body;
          this[this.hasOffer ? 'hasAnswer' : 'hasOffer'] = true;

          // Retransmit until we get a response or we time out (see prackTimer below)
          var timeout = SIP.Timers.T1;
          this.timers.rel1xxTimer = SIP.Timers.setTimeout(function rel1xxRetransmission() {
            this.request.reply(statusCode, null, extraHeaders, body);
            timeout *= 2;
            this.timers.rel1xxTimer = SIP.Timers.setTimeout(rel1xxRetransmission.bind(this), timeout);
          }.bind(this), timeout);

          // Timeout and reject INVITE if no response
          this.timers.prackTimer = SIP.Timers.setTimeout(function () {
            if (this.status !== C.STATUS_WAITING_FOR_PRACK) {
              return;
            }

            this.logger.log('no PRACK received, rejecting the call');
            SIP.Timers.clearTimeout(this.timers.rel1xxTimer);
            this.request.reply(504);
            this.terminated(null, SIP.C.causes.NO_PRACK);
          }.bind(this), SIP.Timers.T1 * 64);

          // Send the initial response
          response = this.request.reply(statusCode, reasonPhrase, extraHeaders, body);
          this.emit('progress', response, reasonPhrase);
        }.bind(this),

        // Failure
        function fail() {
          this.failed(null, SIP.C.causes.WEBRTC_ERROR);
        }.bind(this),

        // Media hint:
        options.media);
    } // end do100rel

    function normalReply() {
      response = this.request.reply(statusCode, reasonPhrase, extraHeaders, body);
      this.emit('progress', response, reasonPhrase);
    }

    if (options.statusCode !== 100 &&
        (this.rel100 === SIP.C.supported.REQUIRED ||
         (this.rel100 === SIP.C.supported.SUPPORTED && options.rel100) ||
         (this.rel100 === SIP.C.supported.SUPPORTED && (this.ua.configuration.rel100 === SIP.C.supported.REQUIRED)))) {
      do100rel.apply(this);
    } else {
      normalReply.apply(this);
    }
    return this;
  },

  /*
   * @param {Object} [options.media] gets passed to SIP.MediaHandler.getDescription as mediaHint
   */
  accept: function(options) {
    options = options || {};
    options = SIP.Utils.desugarSessionOptions(options);
    SIP.Utils.optionsOverride(options, 'media', 'mediaConstraints', true, this.logger, this.ua.configuration.media);
    this.mediaHint = options.media;

    // commented out now-unused hold-related variables for jshint. See below. JMF 2014-1-21
    var
      //idx, length, hasAudio, hasVideo,
      self = this,
      request = this.request,
      extraHeaders = (options.extraHeaders || []).slice(),
    //mediaStream = options.mediaStream || null,
      sdpCreationSucceeded = function(body) {
        var
          response,
          // run for reply success callback
          replySucceeded = function() {
            self.status = C.STATUS_WAITING_FOR_ACK;

            self.setInvite2xxTimer(request, body);
            self.setACKTimer();
          },

          // run for reply failure callback
          replyFailed = function() {
            self.failed(null, SIP.C.causes.CONNECTION_ERROR);
          };

        // Chrome might call onaddstream before accept() is called, which means
        // mediaHandler.render() was called without a renderHint, so we need to
        // re-render now that mediaHint.render has been set.
        //
        // Chrome seems to be in the right regarding this, see
        // http://dev.w3.org/2011/webrtc/editor/webrtc.html#widl-RTCPeerConnection-onaddstream
        self.mediaHandler.render();

        extraHeaders.push('Contact: ' + self.contact);

        if(!self.hasOffer) {
          self.hasOffer = true;
        } else {
          self.hasAnswer = true;
        }
        response = request.reply(200, null, extraHeaders,
                      body,
                      replySucceeded,
                      replyFailed
                     );
        if (self.status !== C.STATUS_TERMINATED) { // Didn't fail
          self.accepted(response, SIP.C.REASON_PHRASE[200]);
        }
      },

      sdpCreationFailed = function() {
        if (self.status === C.STATUS_TERMINATED) {
          return;
        }
        // TODO - fail out on error
        //response = request.reply(480);
        //self.failed(response, SIP.C.causes.USER_DENIED_MEDIA_ACCESS);
        self.failed(null, SIP.C.causes.WEBRTC_ERROR);
      };

    // Check Session Status
    if (this.status === C.STATUS_WAITING_FOR_PRACK) {
      this.status = C.STATUS_ANSWERED_WAITING_FOR_PRACK;
      return this;
    } else if (this.status === C.STATUS_WAITING_FOR_ANSWER) {
      this.status = C.STATUS_ANSWERED;
    } else if (this.status !== C.STATUS_EARLY_MEDIA) {
      throw new SIP.Exceptions.InvalidStateError(this.status);
    }

    // An error on dialog creation will fire 'failed' event
    if(!this.createDialog(request, 'UAS')) {
      request.reply(500, 'Missing Contact header field');
      return this;
    }

    SIP.Timers.clearTimeout(this.timers.userNoAnswerTimer);

    // this hold-related code breaks FF accepting new calls - JMF 2014-1-21
    /*
    length = this.getRemoteStreams().length;

    for (idx = 0; idx < length; idx++) {
      if (this.mediaHandler.getRemoteStreams()[idx].getVideoTracks().length > 0) {
        hasVideo = true;
      }
      if (this.mediaHandler.getRemoteStreams()[idx].getAudioTracks().length > 0) {
        hasAudio = true;
      }
    }

    if (!hasAudio && this.mediaConstraints.audio === true) {
      this.mediaConstraints.audio = false;
      if (mediaStream) {
        length = mediaStream.getAudioTracks().length;
        for (idx = 0; idx < length; idx++) {
          mediaStream.removeTrack(mediaStream.getAudioTracks()[idx]);
        }
      }
    }

    if (!hasVideo && this.mediaConstraints.video === true) {
      this.mediaConstraints.video = false;
      if (mediaStream) {
        length = mediaStream.getVideoTracks().length;
        for (idx = 0; idx < length; idx++) {
          mediaStream.removeTrack(mediaStream.getVideoTracks()[idx]);
        }
      }
    }
    */

    if (this.status === C.STATUS_EARLY_MEDIA) {
      sdpCreationSucceeded();
    } else {
      this.mediaHandler.getDescription(
        sdpCreationSucceeded,
        sdpCreationFailed,
        self.mediaHint
      );
    }

    return this;
  },

  receiveRequest: function(request) {

    // ISC RECEIVE REQUEST

    function confirmSession() {
      var contentType;

      SIP.Timers.clearTimeout(this.timers.ackTimer);
      SIP.Timers.clearTimeout(this.timers.invite2xxTimer);
      this.status = C.STATUS_CONFIRMED;
      this.unmute();

      // TODO - this logic assumes Content-Disposition defaults
      contentType = request.getHeader('Content-Type');
      if (contentType !== 'application/sdp') {
        this.renderbody = request.body;
        this.rendertype = contentType;
      }
    }

    switch(request.method) {
    case SIP.C.CANCEL:
      /* RFC3261 15 States that a UAS may have accepted an invitation while a CANCEL
       * was in progress and that the UAC MAY continue with the session established by
       * any 2xx response, or MAY terminate with BYE. SIP does continue with the
       * established session. So the CANCEL is processed only if the session is not yet
       * established.
       */

      /*
       * Terminate the whole session in case the user didn't accept (or yet to send the answer) nor reject the
       *request opening the session.
       */
      if(this.status === C.STATUS_WAITING_FOR_ANSWER ||
         this.status === C.STATUS_WAITING_FOR_PRACK ||
         this.status === C.STATUS_ANSWERED_WAITING_FOR_PRACK ||
         this.status === C.STATUS_EARLY_MEDIA ||
         this.status === C.STATUS_ANSWERED) {

        this.status = C.STATUS_CANCELED;
        this.request.reply(487);
        this.canceled(request);
        this.rejected(request, SIP.C.causes.CANCELED);
        this.failed(request, SIP.C.causes.CANCELED);
      }
      break;
    case SIP.C.ACK:
      if(this.status === C.STATUS_WAITING_FOR_ACK) {
        if (!this.hasAnswer) {
          if(request.body && request.getHeader('content-type') === 'application/sdp') {
            // ACK contains answer to an INVITE w/o SDP negotiation
            SIP.Hacks.Firefox.cannotHandleExtraWhitespace(request);
            SIP.Hacks.AllBrowsers.maskDtls(request);

            this.hasAnswer = true;
            this.mediaHandler.setDescription(
              request.body,
              /*
               * onSuccess
               * SDP Answer fits with Offer. Media will start
               */
              confirmSession.bind(this),
              /*
               * onFailure
               * SDP Answer does not fit the Offer.  Terminate the call.
               */
              function (e) {
                this.logger.warn(e);
                this.terminate({
                  statusCode: '488',
                  reasonPhrase: 'Bad Media Description'
                });
                this.failed(request, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
              }.bind(this)
            );
          } else if (this.early_sdp) {
            confirmSession.apply(this);
          } else {
            //TODO: Pass to mediahandler
            this.failed(request, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
          }
        } else {
          confirmSession.apply(this);
        }
      }
      break;
    case SIP.C.PRACK:
      if (this.status === C.STATUS_WAITING_FOR_PRACK || this.status === C.STATUS_ANSWERED_WAITING_FOR_PRACK) {
        //localMedia = session.mediaHandler.localMedia;
        if(!this.hasAnswer) {
          if(request.body && request.getHeader('content-type') === 'application/sdp') {
            this.hasAnswer = true;
            this.mediaHandler.setDescription(
              request.body,
              /*
               * onSuccess
               * SDP Answer fits with Offer. Media will start
               */
              function() {
                SIP.Timers.clearTimeout(this.timers.rel1xxTimer);
                SIP.Timers.clearTimeout(this.timers.prackTimer);
                request.reply(200);
                if (this.status === C.STATUS_ANSWERED_WAITING_FOR_PRACK) {
                  this.status = C.STATUS_EARLY_MEDIA;
                  this.accept();
                }
                this.status = C.STATUS_EARLY_MEDIA;
                //REVISIT
                this.mute();
              }.bind(this),
              function (e) {
                //TODO: Send to media handler
                this.logger.warn(e);
                this.terminate({
                  statusCode: '488',
                  reasonPhrase: 'Bad Media Description'
                });
                this.failed(request, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
              }.bind(this)
            );
          } else {
            this.terminate({
              statusCode: '488',
              reasonPhrase: 'Bad Media Description'
            });
            this.failed(request, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
          }
        } else {
          SIP.Timers.clearTimeout(this.timers.rel1xxTimer);
          SIP.Timers.clearTimeout(this.timers.prackTimer);
          request.reply(200);

          if (this.status === C.STATUS_ANSWERED_WAITING_FOR_PRACK) {
            this.status = C.STATUS_EARLY_MEDIA;
            this.accept();
          }
          this.status = C.STATUS_EARLY_MEDIA;
          //REVISIT
          this.mute();
        }
      } else if(this.status === C.STATUS_EARLY_MEDIA) {
        request.reply(200);
      }
      break;
    default:
      Session.prototype.receiveRequest.apply(this, [request]);
      break;
    }
  }
};

SIP.InviteServerContext = InviteServerContext;

InviteClientContext = function(ua, target, options) {
  options = options || {};
  var requestParams, iceServers,
    extraHeaders = (options.extraHeaders || []).slice(),
    stunServers = options.stunServers || null,
    turnServers = options.turnServers || null,
    isMediaSupported = ua.configuration.mediaHandlerFactory.isSupported;

  // Check WebRTC support
  if (isMediaSupported && !isMediaSupported()) {
    throw new SIP.Exceptions.NotSupportedError('Media not supported');
  }

  this.RTCConstraints = options.RTCConstraints || {};
  this.inviteWithoutSdp = options.inviteWithoutSdp || false;

  // Set anonymous property
  this.anonymous = options.anonymous || false;

  // Custom data to be sent either in INVITE or in ACK
  this.renderbody = options.renderbody || null;
  this.rendertype = options.rendertype || 'text/plain';

  requestParams = {from_tag: this.from_tag};

  /* Do not add ;ob in initial forming dialog requests if the registration over
   *  the current connection got a GRUU URI.
   */
  this.contact = ua.contact.toString({
    anonymous: this.anonymous,
    outbound: this.anonymous ? !ua.contact.temp_gruu : !ua.contact.pub_gruu
  });

  if (this.anonymous) {
    requestParams.from_displayName = 'Anonymous';
    requestParams.from_uri = 'sip:anonymous@anonymous.invalid';

    extraHeaders.push('P-Preferred-Identity: '+ ua.configuration.uri.toString());
    extraHeaders.push('Privacy: id');
  }
  extraHeaders.push('Contact: '+ this.contact);
  extraHeaders.push('Allow: '+ SIP.Utils.getAllowedMethods(ua));
  if (!this.inviteWithoutSdp) {
    extraHeaders.push('Content-Type: application/sdp');
  } else if (this.renderbody) {
    extraHeaders.push('Content-Type: ' + this.rendertype);
    extraHeaders.push('Content-Disposition: render;handling=optional');
  }

  if (ua.configuration.rel100 === SIP.C.supported.REQUIRED) {
    extraHeaders.push('Require: 100rel');
  }

  options.extraHeaders = extraHeaders;
  options.params = requestParams;

  SIP.Utils.augment(this, SIP.ClientContext, [ua, SIP.C.INVITE, target, options]);
  SIP.Utils.augment(this, SIP.Session, [ua.configuration.mediaHandlerFactory]);

  // Check Session Status
  if (this.status !== C.STATUS_NULL) {
    throw new SIP.Exceptions.InvalidStateError(this.status);
  }

  // Session parameter initialization
  this.from_tag = SIP.Utils.newTag();

  // OutgoingSession specific parameters
  this.isCanceled = false;
  this.received_100 = false;

  this.method = SIP.C.INVITE;

  this.receiveNonInviteResponse = this.receiveResponse;
  this.receiveResponse = this.receiveInviteResponse;

  this.logger = ua.getLogger('sip.inviteclientcontext');

  if (stunServers) {
    iceServers = SIP.UA.configuration_check.optional['stunServers'](stunServers);
    if (!iceServers) {
      throw new TypeError('Invalid stunServers: '+ stunServers);
    } else {
      this.stunServers = iceServers;
    }
  }

  if (turnServers) {
    iceServers = SIP.UA.configuration_check.optional['turnServers'](turnServers);
    if (!iceServers) {
      throw new TypeError('Invalid turnServers: '+ turnServers);
    } else {
      this.turnServers = iceServers;
    }
  }

  ua.applicants[this] = this;

  this.id = this.request.call_id + this.from_tag;

  //Initialize Media Session
  this.mediaHandler = this.mediaHandlerFactory(this, {
    RTCConstraints: this.RTCConstraints,
    stunServers: this.stunServers,
    turnServers: this.turnServers
  });

  if (this.mediaHandler && this.mediaHandler.getRemoteStreams) {
    this.getRemoteStreams = this.mediaHandler.getRemoteStreams.bind(this.mediaHandler);
    this.getLocalStreams = this.mediaHandler.getLocalStreams.bind(this.mediaHandler);
  }
};

InviteClientContext.prototype = {
  /*
   * @param {Object} [options.media] gets passed to SIP.MediaHandler.getDescription as mediaHint
   */
  invite: function (options) {
    var self = this;
    options = options || {};

    SIP.Utils.optionsOverride(options, 'media', 'mediaConstraints', true, this.logger, this.ua.configuration.media);
    this.mediaHint = options.media;

    //Save the session into the ua sessions collection.
    //Note: placing in constructor breaks call to request.cancel on close... User does not need this anyway
    this.ua.sessions[this.id] = this;

    //Note: due to the way Firefox handles gUM calls, it is recommended to make the gUM call at the app level
    // and hand sip.js a stream as the mediaHint
    if (this.inviteWithoutSdp) {
      //just send an invite with no sdp...
      this.request.body = self.renderbody;
      this.status = C.STATUS_INVITE_SENT;
      this.send();
    } else {
      this.mediaHandler.getDescription(
        function onSuccess(offer) {
          if (self.isCanceled || self.status === C.STATUS_TERMINATED) {
            return;
          }
          self.hasOffer = true;
          self.request.body = offer;
          self.status = C.STATUS_INVITE_SENT;
          self.send();
        },
        function onFailure() {
          if (self.status === C.STATUS_TERMINATED) {
            return;
          }
          // TODO...fail out
          //self.failed(null, SIP.C.causes.USER_DENIED_MEDIA_ACCESS);
          //self.failed(null, SIP.C.causes.WEBRTC_ERROR);
          self.failed(null, SIP.C.causes.WEBRTC_ERROR);
        },
        self.mediaHint
      );
    }

    return this;
  },

  receiveInviteResponse: function(response) {
    var cause, //localMedia,
      session = this,
      id = response.call_id + response.from_tag + response.to_tag,
      extraHeaders = [],
      options = {};

    if (this.status === C.STATUS_TERMINATED || response.method !== SIP.C.INVITE) {
      return;
    }

    if (this.dialog && (response.status_code >= 200 && response.status_code <= 299)) {
      if (id !== this.dialog.id.toString() ) {
        if (!this.createDialog(response, 'UAC', true)) {
          return;
        }
        this.earlyDialogs[id].sendRequest(this, SIP.C.ACK,
                                          {
                                            body: SIP.Utils.generateFakeSDP(response.body)
                                          });
        this.earlyDialogs[id].sendRequest(this, SIP.C.BYE);

        /* NOTE: This fails because the forking proxy does not recognize that an unanswerable
         * leg (due to peerConnection limitations) has been answered first. If your forking
         * proxy does not hang up all unanswered branches on the first branch answered, remove this.
         */
        if(this.status !== C.STATUS_CONFIRMED) {
          this.failed(response, SIP.C.causes.WEBRTC_ERROR);
        }
        return;
      } else if (this.status === C.STATUS_CONFIRMED) {
        this.sendRequest(SIP.C.ACK,{cseq: response.cseq});
        return;
      } else if (!this.hasAnswer) {
        // invite w/o sdp is waiting for callback
        //an invite with sdp must go on, and hasAnswer is true
        return;
      }
    }

    if (this.dialog && response.status_code < 200) {
      /*
        Early media has been set up with at least one other different branch,
        but a final 2xx response hasn't been received
      */
      if (!this.earlyDialogs[id] && !this.createDialog(response, 'UAC', true)) {
        return;
      }

      extraHeaders.push('RAck: ' + response.getHeader('rseq') + ' ' + response.getHeader('cseq'));
      this.earlyDialogs[id].pracked.push(response.getHeader('rseq'));

      this.earlyDialogs[id].sendRequest(this, SIP.C.PRACK, {
        extraHeaders: extraHeaders,
        body: SIP.Utils.generateFakeSDP(response.body)
      });
      return;
    }

    // Proceed to cancellation if the user requested.
    if(this.isCanceled) {
      if(response.status_code >= 100 && response.status_code < 200) {
        this.request.cancel(this.cancelReason);
        this.canceled(null);
      } else if(response.status_code >= 200 && response.status_code < 299) {
        this.acceptAndTerminate(response);
        this.emit('bye', this.request);
      }
      return;
    }

    switch(true) {
      case /^100$/.test(response.status_code):
        this.received_100 = true;
        break;
      case (/^1[0-9]{2}$/.test(response.status_code)):
        // Do nothing with 1xx responses without To tag.
        if(!response.to_tag) {
          this.logger.warn('1xx response received without to tag');
          break;
        }

        // Create Early Dialog if 1XX comes with contact
        if(response.hasHeader('contact')) {
          // An error on dialog creation will fire 'failed' event
          if (!this.createDialog(response, 'UAC', true)) {
            break;
          }
        }

        this.status = C.STATUS_1XX_RECEIVED;

        if(response.hasHeader('require') &&
           response.getHeader('require').indexOf('100rel') !== -1) {

          // Do nothing if this.dialog is already confirmed
          if (this.dialog || !this.earlyDialogs[id]) {
            break;
          }

          if (this.earlyDialogs[id].pracked.indexOf(response.getHeader('rseq')) !== -1 ||
              (this.earlyDialogs[id].pracked[this.earlyDialogs[id].pracked.length-1] >= response.getHeader('rseq') && this.earlyDialogs[id].pracked.length > 0)) {
            return;
          }

          SIP.Hacks.Firefox.cannotHandleExtraWhitespace(response);
          SIP.Hacks.AllBrowsers.maskDtls(response);

          if (!response.body) {
            extraHeaders.push('RAck: ' + response.getHeader('rseq') + ' ' + response.getHeader('cseq'));
            this.earlyDialogs[id].pracked.push(response.getHeader('rseq'));
            this.earlyDialogs[id].sendRequest(this, SIP.C.PRACK, {
              extraHeaders: extraHeaders
            });
            this.emit('progress', response);

          } else if (this.hasOffer) {
            if (!this.createDialog(response, 'UAC')) {
              break;
            }
            this.hasAnswer = true;
            this.mediaHandler.setDescription(
              response.body,
              /*
               * onSuccess
               * SDP Answer fits with Offer. Media will start
               */
              function () {
                extraHeaders.push('RAck: ' + response.getHeader('rseq') + ' ' + response.getHeader('cseq'));
                session.dialog.pracked.push(response.getHeader('rseq'));

                session.sendRequest(SIP.C.PRACK, {
                  extraHeaders: extraHeaders,
                  receiveResponse: function() {}
                });
                session.status = C.STATUS_EARLY_MEDIA;
                session.mute();
                session.emit('progress', response);
                /*
                if (session.status === C.STATUS_EARLY_MEDIA) {
                  localMedia = session.mediaHandler.localMedia;
                  if (localMedia.getAudioTracks().length > 0) {
                    localMedia.getAudioTracks()[0].enabled = false;
                  }
                  if (localMedia.getVideoTracks().length > 0) {
                    localMedia.getVideoTracks()[0].enabled = false;
                  }
                }*/
              },
              /*
               * onFailure
               * SDP Answer does not fit the Offer. Accept the call and Terminate.
               */
              function(e) {
                session.logger.warn(e);
                session.acceptAndTerminate(response, 488, 'Not Acceptable Here');
                session.failed(response, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
              }
            );
          } else {
            this.earlyDialogs[id].pracked.push(response.getHeader('rseq'));
            this.earlyDialogs[id].mediaHandler.setDescription(
              response.body,
              function onSuccess() {
                session.earlyDialogs[id].mediaHandler.getDescription(
                  function onSuccess(sdp) {
                    extraHeaders.push('Content-Type: application/sdp');
                    extraHeaders.push('RAck: ' + response.getHeader('rseq') + ' ' + response.getHeader('cseq'));
                    session.earlyDialogs[id].sendRequest(session, SIP.C.PRACK, {
                      extraHeaders: extraHeaders,
                      body: sdp
                    });
                    session.status = C.STATUS_EARLY_MEDIA;
                    session.emit('progress', response);
                  },
                  function onFailure() {
                    session.earlyDialogs[id].pracked.push(response.getHeader('rseq'));
                    if (session.status === C.STATUS_TERMINATED) {
                      return;
                    }
                    // TODO - fail out on error
                    // session.failed(gum error);
                    session.failed(null, SIP.C.causes.WEBRTC_ERROR);
                  },
                  session.mediaHint
                );
              },
              function onFailure(e) {
                session.earlyDialogs[id].pracked.splice(session.earlyDialogs[id].pracked.indexOf(response.getHeader('rseq')), 1);
                // Could not set remote description
                session.logger.warn('invalid SDP');
                session.logger.warn(e);
              }
            );
          }
        } else {
          this.emit('progress', response);
        }
        break;
      case /^2[0-9]{2}$/.test(response.status_code):
        var cseq = this.request.cseq + ' ' + this.request.method;
        if (cseq !== response.getHeader('cseq')) {
          break;
        }

        if (this.status === C.STATUS_EARLY_MEDIA && this.dialog) {
          this.status = C.STATUS_CONFIRMED;
          this.unmute();
          /*localMedia = this.mediaHandler.localMedia;
          if (localMedia.getAudioTracks().length > 0) {
            localMedia.getAudioTracks()[0].enabled = true;
          }
          if (localMedia.getVideoTracks().length > 0) {
            localMedia.getVideoTracks()[0].enabled = true;
          }*/
          options = {};
          if (this.renderbody) {
            extraHeaders.push('Content-Type: ' + this.rendertype);
            options.extraHeaders = extraHeaders;
            options.body = this.renderbody;
          }
          options.cseq = response.cseq;
          this.sendRequest(SIP.C.ACK, options);
          this.accepted(response);
          break;
        }
        // Do nothing if this.dialog is already confirmed
        if (this.dialog) {
          break;
        }

        SIP.Hacks.Firefox.cannotHandleExtraWhitespace(response);
        SIP.Hacks.AllBrowsers.maskDtls(response);

        // This is an invite without sdp
        if (!this.hasOffer) {
          if (this.earlyDialogs[id] && this.earlyDialogs[id].mediaHandler.localMedia) {
            //REVISIT
            this.hasOffer = true;
            this.hasAnswer = true;
            this.mediaHandler = this.earlyDialogs[id].mediaHandler;
            if (!this.createDialog(response, 'UAC')) {
              break;
            }
            this.status = C.STATUS_CONFIRMED;
            this.sendRequest(SIP.C.ACK, {cseq:response.cseq});

            this.unmute();
            /*
            localMedia = session.mediaHandler.localMedia;
            if (localMedia.getAudioTracks().length > 0) {
              localMedia.getAudioTracks()[0].enabled = true;
            }
            if (localMedia.getVideoTracks().length > 0) {
              localMedia.getVideoTracks()[0].enabled = true;
            }*/
            this.accepted(response);
          } else {
            if(!response.body) {
              this.acceptAndTerminate(response, 400, 'Missing session description');
              this.failed(response, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
              break;
            }
            if (!this.createDialog(response, 'UAC')) {
              break;
            }
            this.hasOffer = true;
            this.mediaHandler.setDescription(
              response.body,
              function onSuccess() {
                session.mediaHandler.getDescription(
                  function onSuccess(sdp) {
                    //var localMedia;
                    if(session.isCanceled || session.status === C.STATUS_TERMINATED) {
                      return;
                    }

                    sdp = SIP.Hacks.Firefox.hasMissingCLineInSDP(sdp);

                    session.status = C.STATUS_CONFIRMED;
                    session.hasAnswer = true;

                    session.unmute();
                    /*localMedia = session.mediaHandler.localMedia;
                    if (localMedia.getAudioTracks().length > 0) {
                      localMedia.getAudioTracks()[0].enabled = true;
                    }
                    if (localMedia.getVideoTracks().length > 0) {
                      localMedia.getVideoTracks()[0].enabled = true;
                    }*/
                    session.sendRequest(SIP.C.ACK,{
                      body: sdp,
                      extraHeaders:['Content-Type: application/sdp'],
                      cseq:response.cseq
                    });
                    session.accepted(response);
                  },
                  function onFailure() {
                    // TODO do something here
                    session.logger.warn("there was a problem");
                  },
                  session.mediaHint
                );
              },
              function onFailure(e) {
                session.logger.warn('invalid SDP');
                session.logger.warn(e);
                response.reply(488);
              }
            );
          }
        } else if (this.hasAnswer){
          if (this.renderbody) {
            extraHeaders.push('Content-Type: ' + session.rendertype);
            options.extraHeaders = extraHeaders;
            options.body = this.renderbody;
          }
          this.sendRequest(SIP.C.ACK, options);
        } else {
          if(!response.body) {
            this.acceptAndTerminate(response, 400, 'Missing session description');
            this.failed(response, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
            break;
          }
          if (!this.createDialog(response, 'UAC')) {
            break;
          }
          this.hasAnswer = true;
          this.mediaHandler.setDescription(
            response.body,
            /*
             * onSuccess
             * SDP Answer fits with Offer. Media will start
             */
            function() {
              var options = {};//,localMedia;
              session.status = C.STATUS_CONFIRMED;
              session.unmute();
              /*localMedia = session.mediaHandler.localMedia;
              if (localMedia.getAudioTracks().length > 0) {
                localMedia.getAudioTracks()[0].enabled = true;
              }
              if (localMedia.getVideoTracks().length > 0) {
                localMedia.getVideoTracks()[0].enabled = true;
              }*/
              if (session.renderbody) {
                extraHeaders.push('Content-Type: ' + session.rendertype);
                options.extraHeaders = extraHeaders;
                options.body = session.renderbody;
              }
              options.cseq = response.cseq;
              session.sendRequest(SIP.C.ACK, options);
              session.accepted(response);
            },
            /*
             * onFailure
             * SDP Answer does not fit the Offer. Accept the call and Terminate.
             */
            function(e) {
              session.logger.warn(e);
              session.acceptAndTerminate(response, 488, 'Not Acceptable Here');
              session.failed(response, SIP.C.causes.BAD_MEDIA_DESCRIPTION);
            }
          );
        }
        break;
      default:
        cause = SIP.Utils.sipErrorCause(response.status_code);
        this.failed(response, cause);
        this.rejected(response, cause);
    }
  },

  cancel: function(options) {
    options = options || {};

    var
    statusCode = options.status_code,
    reasonPhrase = options.reasonPhrase,
    cancel_reason;

    // Check Session Status
    if (this.status === C.STATUS_TERMINATED) {
      throw new SIP.Exceptions.InvalidStateError(this.status);
    }

    this.logger.log('canceling RTCSession');

    if (statusCode && (statusCode < 200 || statusCode >= 700)) {
      throw new TypeError('Invalid status_code: '+ statusCode);
    } else if (statusCode) {
      reasonPhrase = reasonPhrase || SIP.C.REASON_PHRASE[statusCode] || '';
      cancel_reason = 'SIP ;cause=' + statusCode + ' ;text="' + reasonPhrase + '"';
    }

    // Check Session Status
    if (this.status === C.STATUS_NULL ||
        (this.status === C.STATUS_INVITE_SENT && !this.received_100)) {
      this.isCanceled = true;
      this.cancelReason = cancel_reason;
    } else if (this.status === C.STATUS_INVITE_SENT ||
               this.status === C.STATUS_1XX_RECEIVED ||
               this.status === C.STATUS_EARLY_MEDIA) {
      this.request.cancel(cancel_reason);
    }

    return this.canceled();
  },

  terminate: function(options) {
    if (this.status === C.STATUS_TERMINATED) {
      return this;
    }

    if (this.status === C.STATUS_WAITING_FOR_ACK || this.status === C.STATUS_CONFIRMED) {
      this.bye(options);
    } else {
      this.cancel(options);
    }

    return this.terminated();
  },

  receiveRequest: function(request) {
    // ICC RECEIVE REQUEST

    // Reject CANCELs
    if (request.method === SIP.C.CANCEL) {
      // TODO; make this a switch when it gets added
    }

    if (request.method === SIP.C.ACK && this.status === C.STATUS_WAITING_FOR_ACK) {
      SIP.Timers.clearTimeout(this.timers.ackTimer);
      SIP.Timers.clearTimeout(this.timers.invite2xxTimer);
      this.status = C.STATUS_CONFIRMED;
      this.unmute();

      this.accepted();
    }

    return Session.prototype.receiveRequest.apply(this, [request]);
  }
};

SIP.InviteClientContext = InviteClientContext;

};

},{}],23:[function(_dereq_,module,exports){
/**
 * @fileoverview DTMF
 */

/**
 * @class DTMF
 * @param {SIP.Session} session
 */
module.exports = function (SIP) {

var DTMF,
  C = {
    MIN_DURATION:            70,
    MAX_DURATION:            6000,
    DEFAULT_DURATION:        100,
    MIN_INTER_TONE_GAP:      50,
    DEFAULT_INTER_TONE_GAP:  500
  };

DTMF = function(session, tone, options) {
  var events = [
  'succeeded',
  'failed'
  ], duration, interToneGap;

  if (tone === undefined) {
    throw new TypeError('Not enough arguments');
  }

  this.logger = session.ua.getLogger('sip.invitecontext.dtmf', session.id);
  this.owner = session;
  this.direction = null;

  options = options || {};
  duration = options.duration || null;
  interToneGap = options.interToneGap || null;

  // Check tone type
  if (typeof tone === 'string' ) {
    tone = tone.toUpperCase();
  } else if (typeof tone === 'number') {
    tone = tone.toString();
  } else {
    throw new TypeError('Invalid tone: '+ tone);
  }

  // Check tone value
  if (!tone.match(/^[0-9A-D#*]$/)) {
    throw new TypeError('Invalid tone: '+ tone);
  } else {
    this.tone = tone;
  }

  // Check duration
  if (duration && !SIP.Utils.isDecimal(duration)) {
    throw new TypeError('Invalid tone duration: '+ duration);
  } else if (!duration) {
    duration = DTMF.C.DEFAULT_DURATION;
  } else if (duration < DTMF.C.MIN_DURATION) {
    this.logger.warn('"duration" value is lower than the minimum allowed, setting it to '+ DTMF.C.MIN_DURATION+ ' milliseconds');
    duration = DTMF.C.MIN_DURATION;
  } else if (duration > DTMF.C.MAX_DURATION) {
    this.logger.warn('"duration" value is greater than the maximum allowed, setting it to '+ DTMF.C.MAX_DURATION +' milliseconds');
    duration = DTMF.C.MAX_DURATION;
  } else {
    duration = Math.abs(duration);
  }
  this.duration = duration;

  // Check interToneGap
  if (interToneGap && !SIP.Utils.isDecimal(interToneGap)) {
    throw new TypeError('Invalid interToneGap: '+ interToneGap);
  } else if (!interToneGap) {
    interToneGap = DTMF.C.DEFAULT_INTER_TONE_GAP;
  } else if (interToneGap < DTMF.C.MIN_INTER_TONE_GAP) {
    this.logger.warn('"interToneGap" value is lower than the minimum allowed, setting it to '+ DTMF.C.MIN_INTER_TONE_GAP +' milliseconds');
    interToneGap = DTMF.C.MIN_INTER_TONE_GAP;
  } else {
    interToneGap = Math.abs(interToneGap);
  }
  this.interToneGap = interToneGap;

  this.initEvents(events);
};
DTMF.prototype = new SIP.EventEmitter();


DTMF.prototype.send = function(options) {
  var extraHeaders, body;

  this.direction = 'outgoing';

  // Check RTCSession Status
  if (this.owner.status !== SIP.Session.C.STATUS_CONFIRMED &&
    this.owner.status !== SIP.Session.C.STATUS_WAITING_FOR_ACK) {
    throw new SIP.Exceptions.InvalidStateError(this.owner.status);
  }

  // Get DTMF options
  options = options || {};
  extraHeaders = options.extraHeaders ? options.extraHeaders.slice() : [];

  extraHeaders.push('Content-Type: application/dtmf-relay');

  body = "Signal= " + this.tone + "\r\n";
  body += "Duration= " + this.duration;

  this.request = this.owner.dialog.sendRequest(this, SIP.C.INFO, {
    extraHeaders: extraHeaders,
    body: body
  });

  this.owner.emit('dtmf', this.request, this);
};

/**
 * @private
 */
DTMF.prototype.receiveResponse = function(response) {
  var cause;

  switch(true) {
    case /^1[0-9]{2}$/.test(response.status_code):
      // Ignore provisional responses.
      break;

    case /^2[0-9]{2}$/.test(response.status_code):
      this.emit('succeeded', {
        originator: 'remote',
        response: response
      });
      break;

    default:
      cause = SIP.Utils.sipErrorCause(response.status_code);
      this.emit('failed', response, cause);
      break;
  }
};

/**
 * @private
 */
DTMF.prototype.onRequestTimeout = function() {
  this.emit('failed', null, SIP.C.causes.REQUEST_TIMEOUT);
  this.owner.onRequestTimeout();
};

/**
 * @private
 */
DTMF.prototype.onTransportError = function() {
  this.emit('failed', null, SIP.C.causes.CONNECTION_ERROR);
  this.owner.onTransportError();
};

/**
 * @private
 */
DTMF.prototype.onDialogError = function(response) {
  this.emit('failed', response, SIP.C.causes.DIALOG_ERROR);
  this.owner.onDialogError(response);
};

/**
 * @private
 */
DTMF.prototype.init_incoming = function(request) {
  this.direction = 'incoming';
  this.request = request;

  request.reply(200);

  if (!this.tone || !this.duration) {
    this.logger.warn('invalid INFO DTMF received, discarded');
  } else {
    this.owner.emit('dtmf', request, this);
  }
};

DTMF.C = C;
return DTMF;
};

},{}],24:[function(_dereq_,module,exports){

/**
 * @fileoverview SIP Subscriber (SIP-Specific Event Notifications RFC6665)
 */

/**
 * @augments SIP
 * @class Class creating a SIP Subscription.
 */
module.exports = function (SIP) {
SIP.Subscription = function (ua, target, event, options) {
  var events;

  options = options || {};
  options.extraHeaders = (options.extraHeaders || []).slice();

  events = ['notify'];
  this.id = null;
  this.state = 'init';

  if (!event) {
    throw new TypeError('Event necessary to create a subscription.');
  } else {
    //TODO: check for valid events here probably make a list in SIP.C; or leave it up to app to check?
    //The check may need to/should probably occur on the other side,
    this.event = event;
  }

  if(typeof options.expires !== 'number'){
    ua.logger.warn('expires must be a number. Using default of 3600.');
    this.expires = 3600;
  } else {
    this.expires = options.expires;
  }

  options.extraHeaders.push('Event: ' + this.event);
  options.extraHeaders.push('Expires: ' + this.expires);

  if (options.body) {
    this.body = options.body;
  }

  this.contact = ua.contact.toString();

  options.extraHeaders.push('Contact: '+ this.contact);
  options.extraHeaders.push('Allow: '+ SIP.Utils.getAllowedMethods(ua));

  SIP.Utils.augment(this, SIP.ClientContext, [ua, SIP.C.SUBSCRIBE, target, options]);

  this.logger = ua.getLogger('sip.subscription');

  this.dialog = null;
  this.timers = {N: null, sub_duration: null};
  this.errorCodes  = [404,405,410,416,480,481,482,483,484,485,489,501,604];

  this.initMoreEvents(events);
};

SIP.Subscription.prototype = {
  subscribe: function() {
    var sub = this;

    SIP.Timers.clearTimeout(this.timers.sub_duration);
    SIP.Timers.clearTimeout(this.timers.N);
    this.timers.N = SIP.Timers.setTimeout(sub.timer_fire.bind(sub), SIP.Timers.TIMER_N);

    this.send();

    this.state = 'notify_wait';

    return this;
  },

  receiveResponse: function(response) {
    var expires, sub = this,
        cause = SIP.C.REASON_PHRASE[response.status_code] || '';

    if (this.errorCodes.indexOf(response.status_code) !== -1) {
      this.failed(response, null);
    } else if (/^2[0-9]{2}$/.test(response.status_code)){
      expires = response.getHeader('Expires');
      SIP.Timers.clearTimeout(this.timers.N);

      if (this.createConfirmedDialog(response,'UAC')) {
        this.id = this.dialog.id.toString();
        this.ua.subscriptions[this.id] = this;
        this.emit('accepted', response, cause);
        // UPDATE ROUTE SET TO BE BACKWARDS COMPATIBLE?
      }

      if (expires && expires <= this.expires) {
        this.timers.sub_duration = SIP.Timers.setTimeout(sub.subscribe.bind(sub), expires * 1000);
      } else {
        if (!expires) {
          this.logger.warn('Expires header missing in a 200-class response to SUBSCRIBE');
          this.failed(response, SIP.C.EXPIRES_HEADER_MISSING);
        } else {
          this.logger.warn('Expires header in a 200-class response to SUBSCRIBE with a higher value than the one in the request');
          this.failed(response, SIP.C.INVALID_EXPIRES_HEADER);
        }
      }
    } //Used to just ignore provisional responses; now ignores everything except errorCodes and 2xx
  },

  unsubscribe: function() {
    var extraHeaders = [], sub = this;

    this.state = 'terminated';

    extraHeaders.push('Event: ' + this.event);
    extraHeaders.push('Expires: 0');

    extraHeaders.push('Contact: '+ this.contact);
    extraHeaders.push('Allow: '+ SIP.Utils.getAllowedMethods(this.ua));

    this.request = new SIP.OutgoingRequest(this.method, this.request.to.uri.toString(), this.ua, null, extraHeaders);

    //MAYBE, may want to see state
    this.receiveResponse = function(){};

    SIP.Timers.clearTimeout(this.timers.sub_duration);
    SIP.Timers.clearTimeout(this.timers.N);
    this.timers.N = SIP.Timers.setTimeout(sub.timer_fire.bind(sub), SIP.Timers.TIMER_N);

    this.send();
  },

  /**
  * @private
  */
  timer_fire: function(){
    if (this.state === 'terminated') {
      this.close();
    } else if (this.state === 'pending' || this.state === 'notify_wait') {
      this.state = 'terminated';
      this.close();
    } else {
      this.subscribe();
    }
  },

  /**
  * @private
  */
  close: function() {
    if(this.state !== 'terminated') {
      this.unsubscribe();
    }

    this.terminateDialog();
    SIP.Timers.clearTimeout(this.timers.N);
    SIP.Timers.clearTimeout(this.timers.sub_duration);

    delete this.ua.subscriptions[this.id];
  },

  /**
  * @private
  */
  createConfirmedDialog: function(message, type) {
    var dialog;

    this.terminateDialog();
    dialog = new SIP.Dialog(this, message, type);

    if(!dialog.error) {
      this.dialog = dialog;
      return true;
    }
    // Dialog not created due to an error
    else {
      return false;
    }
  },

  /**
  * @private
  */
  terminateDialog: function() {
    if(this.dialog) {
      delete this.ua.subscriptions[this.id];
      this.dialog.terminate();
      delete this.dialog;
    }
  },

  /**
  * @private
  */
  receiveRequest: function(request) {
    var sub_state, sub = this;

    function setExpiresTimeout() {
      if (sub_state.expires) {
        sub_state.expires = Math.min(sub.expires,
                                     Math.max(sub_state.expires, 0));
        sub.timers.sub_duration = SIP.Timers.setTimeout(sub.subscribe.bind(sub),
                                                    sub_state.expires * 1000);
      }
    }

    if (!this.matchEvent(request)) { //checks event and subscription_state headers
      request.reply(489);
      return;
    }

    sub_state = request.parseHeader('Subscription-State');

    request.reply(200, SIP.C.REASON_200);

    SIP.Timers.clearTimeout(this.timers.N);
    SIP.Timers.clearTimeout(this.timers.sub_duration);

    this.emit('notify', {request: request});

    switch (sub_state.state) {
      case 'active':
        this.state = 'active';
        setExpiresTimeout();
        break;
      case 'pending':
        if (this.state === 'notify_wait') {
          setExpiresTimeout();
        }
        this.state = 'pending';
        break;
      case 'terminated':
        if (sub_state.reason) {
          this.logger.log('terminating subscription with reason '+ sub_state.reason);
          switch (sub_state.reason) {
            case 'deactivated':
            case 'timeout':
              this.subscribe();
              return;
            case 'probation':
            case 'giveup':
              if(sub_state.params && sub_state.params['retry-after']) {
                this.timers.sub_duration = SIP.Timers.setTimeout(sub.subscribe.bind(sub), sub_state.params['retry-after']);
              } else {
                this.subscribe();
              }
              return;
            case 'rejected':
            case 'noresource':
            case 'invariant':
              break;
          }
        }
        this.close();
        break;
    }
  },

  failed: function(response, cause) {
    this.close();
    return this.emit('failed', response, cause);
  },

  /**
  * @private
  */
  matchEvent: function(request) {
    var event;

    // Check mandatory header Event
    if (!request.hasHeader('Event')) {
      this.logger.warn('missing Event header');
      return false;
    }
    // Check mandatory header Subscription-State
    if (!request.hasHeader('Subscription-State')) {
      this.logger.warn('missing Subscription-State header');
      return false;
    }

    // Check whether the event in NOTIFY matches the event in SUBSCRIBE
    event = request.parseHeader('event').event;

    if (this.event !== event) {
      this.logger.warn('event match failed');
      request.reply(481, 'Event Match Failed');
      return false;
    } else {
      return true;
    }
  }
};
};

},{}],25:[function(_dereq_,module,exports){
/**
 * @fileoverview SIP TIMERS
 */

/**
 * @augments SIP
 */
var
  T1 = 500,
  T2 = 4000,
  T4 = 5000;
module.exports = function (timers) {
  var exports = {
    T1: T1,
    T2: T2,
    T4: T4,
    TIMER_B: 64 * T1,
    TIMER_D: 0  * T1,
    TIMER_F: 64 * T1,
    TIMER_H: 64 * T1,
    TIMER_I: 0  * T1,
    TIMER_J: 0  * T1,
    TIMER_K: 0  * T4,
    TIMER_L: 64 * T1,
    TIMER_M: 64 * T1,
    TIMER_N: 64 * T1,
    PROVISIONAL_RESPONSE_INTERVAL: 60000  // See RFC 3261 Section 13.3.1.1
  };

  ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval']
  .forEach(function (name) {
    // can't just use timers[name].bind(timers) since it bypasses jasmine's
    // clock-mocking
    exports[name] = function () {
      return timers[name].apply(timers, arguments);
    };
  });

  return exports;
};

},{}],26:[function(_dereq_,module,exports){
/**
 * @fileoverview SIP Transactions
 */

/**
 * SIP Transactions module.
 * @augments SIP
 */
module.exports = function (SIP) {
var
  C = {
    // Transaction states
    STATUS_TRYING:     1,
    STATUS_PROCEEDING: 2,
    STATUS_CALLING:    3,
    STATUS_ACCEPTED:   4,
    STATUS_COMPLETED:  5,
    STATUS_TERMINATED: 6,
    STATUS_CONFIRMED:  7,

    // Transaction types
    NON_INVITE_CLIENT: 'nict',
    NON_INVITE_SERVER: 'nist',
    INVITE_CLIENT: 'ict',
    INVITE_SERVER: 'ist'
  };

/**
* @augments SIP.Transactions
* @class Non Invite Client Transaction
* @param {SIP.RequestSender} request_sender
* @param {SIP.OutgoingRequest} request
* @param {SIP.Transport} transport
*/
var NonInviteClientTransaction = function(request_sender, request, transport) {
  var via,
    events = ['stateChanged'];

  this.type = C.NON_INVITE_CLIENT;
  this.transport = transport;
  this.id = 'z9hG4bK' + Math.floor(Math.random() * 10000000);
  this.request_sender = request_sender;
  this.request = request;

  this.logger = request_sender.ua.getLogger('sip.transaction.nict', this.id);

  via = 'SIP/2.0/' + (request_sender.ua.configuration.hackViaTcp ? 'TCP' : transport.server.scheme);
  via += ' ' + request_sender.ua.configuration.viaHost + ';branch=' + this.id;

  this.request.setHeader('via', via);

  this.request_sender.ua.newTransaction(this);

  this.initEvents(events);
};
NonInviteClientTransaction.prototype = new SIP.EventEmitter();

NonInviteClientTransaction.prototype.stateChanged = function(state) {
  this.state = state;
  this.emit('stateChanged');
};

NonInviteClientTransaction.prototype.send = function() {
  var tr = this;

  this.stateChanged(C.STATUS_TRYING);
  this.F = SIP.Timers.setTimeout(tr.timer_F.bind(tr), SIP.Timers.TIMER_F);

  if(!this.transport.send(this.request)) {
    this.onTransportError();
  }
};

NonInviteClientTransaction.prototype.onTransportError = function() {
  this.logger.log('transport error occurred, deleting non-INVITE client transaction ' + this.id);
  SIP.Timers.clearTimeout(this.F);
  SIP.Timers.clearTimeout(this.K);
  this.stateChanged(C.STATUS_TERMINATED);
  this.request_sender.ua.destroyTransaction(this);
  this.request_sender.onTransportError();
};

NonInviteClientTransaction.prototype.timer_F = function() {
  this.logger.log('Timer F expired for non-INVITE client transaction ' + this.id);
  this.stateChanged(C.STATUS_TERMINATED);
  this.request_sender.ua.destroyTransaction(this);
  this.request_sender.onRequestTimeout();
};

NonInviteClientTransaction.prototype.timer_K = function() {
  this.stateChanged(C.STATUS_TERMINATED);
  this.request_sender.ua.destroyTransaction(this);
};

NonInviteClientTransaction.prototype.receiveResponse = function(response) {
  var
    tr = this,
    status_code = response.status_code;

  if(status_code < 200) {
    switch(this.state) {
      case C.STATUS_TRYING:
      case C.STATUS_PROCEEDING:
        this.stateChanged(C.STATUS_PROCEEDING);
        this.request_sender.receiveResponse(response);
        break;
    }
  } else {
    switch(this.state) {
      case C.STATUS_TRYING:
      case C.STATUS_PROCEEDING:
        this.stateChanged(C.STATUS_COMPLETED);
        SIP.Timers.clearTimeout(this.F);

        if(status_code === 408) {
          this.request_sender.onRequestTimeout();
        } else {
          this.request_sender.receiveResponse(response);
        }

        this.K = SIP.Timers.setTimeout(tr.timer_K.bind(tr), SIP.Timers.TIMER_K);
        break;
      case C.STATUS_COMPLETED:
        break;
    }
  }
};



/**
* @augments SIP.Transactions
* @class Invite Client Transaction
* @param {SIP.RequestSender} request_sender
* @param {SIP.OutgoingRequest} request
* @param {SIP.Transport} transport
*/
var InviteClientTransaction = function(request_sender, request, transport) {
  var via,
    tr = this,
    events = ['stateChanged'];

  this.type = C.INVITE_CLIENT;
  this.transport = transport;
  this.id = 'z9hG4bK' + Math.floor(Math.random() * 10000000);
  this.request_sender = request_sender;
  this.request = request;

  this.logger = request_sender.ua.getLogger('sip.transaction.ict', this.id);

  via = 'SIP/2.0/' + (request_sender.ua.configuration.hackViaTcp ? 'TCP' : transport.server.scheme);
  via += ' ' + request_sender.ua.configuration.viaHost + ';branch=' + this.id;

  this.request.setHeader('via', via);

  this.request_sender.ua.newTransaction(this);

  // Add the cancel property to the request.
  //Will be called from the request instance, not the transaction itself.
  this.request.cancel = function(reason) {
    tr.cancel_request(tr, reason);
  };

  this.initEvents(events);
};
InviteClientTransaction.prototype = new SIP.EventEmitter();

InviteClientTransaction.prototype.stateChanged = function(state) {
  this.state = state;
  this.emit('stateChanged');
};

InviteClientTransaction.prototype.send = function() {
  var tr = this;
  this.stateChanged(C.STATUS_CALLING);
  this.B = SIP.Timers.setTimeout(tr.timer_B.bind(tr), SIP.Timers.TIMER_B);

  if(!this.transport.send(this.request)) {
    this.onTransportError();
  }
};

InviteClientTransaction.prototype.onTransportError = function() {
  this.logger.log('transport error occurred, deleting INVITE client transaction ' + this.id);
  SIP.Timers.clearTimeout(this.B);
  SIP.Timers.clearTimeout(this.D);
  SIP.Timers.clearTimeout(this.M);
  this.stateChanged(C.STATUS_TERMINATED);
  this.request_sender.ua.destroyTransaction(this);

  if (this.state !== C.STATUS_ACCEPTED) {
    this.request_sender.onTransportError();
  }
};

// RFC 6026 7.2
InviteClientTransaction.prototype.timer_M = function() {
  this.logger.log('Timer M expired for INVITE client transaction ' + this.id);

  if(this.state === C.STATUS_ACCEPTED) {
    SIP.Timers.clearTimeout(this.B);
    this.stateChanged(C.STATUS_TERMINATED);
    this.request_sender.ua.destroyTransaction(this);
  }
};

// RFC 3261 17.1.1
InviteClientTransaction.prototype.timer_B = function() {
  this.logger.log('Timer B expired for INVITE client transaction ' + this.id);
  if(this.state === C.STATUS_CALLING) {
    this.stateChanged(C.STATUS_TERMINATED);
    this.request_sender.ua.destroyTransaction(this);
    this.request_sender.onRequestTimeout();
  }
};

InviteClientTransaction.prototype.timer_D = function() {
  this.logger.log('Timer D expired for INVITE client transaction ' + this.id);
  SIP.Timers.clearTimeout(this.B);
  this.stateChanged(C.STATUS_TERMINATED);
  this.request_sender.ua.destroyTransaction(this);
};

InviteClientTransaction.prototype.sendACK = function(response) {
  var tr = this;

  this.ack = 'ACK ' + this.request.ruri + ' SIP/2.0\r\n';
  this.ack += 'Via: ' + this.request.headers['Via'].toString() + '\r\n';

  if(this.request.headers['Route']) {
    this.ack += 'Route: ' + this.request.headers['Route'].toString() + '\r\n';
  }

  this.ack += 'To: ' + response.getHeader('to') + '\r\n';
  this.ack += 'From: ' + this.request.headers['From'].toString() + '\r\n';
  this.ack += 'Call-ID: ' + this.request.headers['Call-ID'].toString() + '\r\n';
  this.ack += 'CSeq: ' + this.request.headers['CSeq'].toString().split(' ')[0];
  this.ack += ' ACK\r\n\r\n';

  this.D = SIP.Timers.setTimeout(tr.timer_D.bind(tr), SIP.Timers.TIMER_D);

  this.transport.send(this.ack);
};

InviteClientTransaction.prototype.cancel_request = function(tr, reason) {
  var request = tr.request;

  this.cancel = SIP.C.CANCEL + ' ' + request.ruri + ' SIP/2.0\r\n';
  this.cancel += 'Via: ' + request.headers['Via'].toString() + '\r\n';

  if(this.request.headers['Route']) {
    this.cancel += 'Route: ' + request.headers['Route'].toString() + '\r\n';
  }

  this.cancel += 'To: ' + request.headers['To'].toString() + '\r\n';
  this.cancel += 'From: ' + request.headers['From'].toString() + '\r\n';
  this.cancel += 'Call-ID: ' + request.headers['Call-ID'].toString() + '\r\n';
  this.cancel += 'CSeq: ' + request.headers['CSeq'].toString().split(' ')[0] +
  ' CANCEL\r\n';

  if(reason) {
    this.cancel += 'Reason: ' + reason + '\r\n';
  }

  this.cancel += 'Content-Length: 0\r\n\r\n';

  // Send only if a provisional response (>100) has been received.
  if(this.state === C.STATUS_PROCEEDING) {
    this.transport.send(this.cancel);
  }
};

InviteClientTransaction.prototype.receiveResponse = function(response) {
  var
  tr = this,
  status_code = response.status_code;

  if(status_code >= 100 && status_code <= 199) {
    switch(this.state) {
      case C.STATUS_CALLING:
        this.stateChanged(C.STATUS_PROCEEDING);
        this.request_sender.receiveResponse(response);
        if(this.cancel) {
          this.transport.send(this.cancel);
        }
        break;
      case C.STATUS_PROCEEDING:
        this.request_sender.receiveResponse(response);
        break;
    }
  } else if(status_code >= 200 && status_code <= 299) {
    switch(this.state) {
      case C.STATUS_CALLING:
      case C.STATUS_PROCEEDING:
        this.stateChanged(C.STATUS_ACCEPTED);
        this.M = SIP.Timers.setTimeout(tr.timer_M.bind(tr), SIP.Timers.TIMER_M);
        this.request_sender.receiveResponse(response);
        break;
      case C.STATUS_ACCEPTED:
        this.request_sender.receiveResponse(response);
        break;
    }
  } else if(status_code >= 300 && status_code <= 699) {
    switch(this.state) {
      case C.STATUS_CALLING:
      case C.STATUS_PROCEEDING:
        this.stateChanged(C.STATUS_COMPLETED);
        this.sendACK(response);
        this.request_sender.receiveResponse(response);
        break;
      case C.STATUS_COMPLETED:
        this.sendACK(response);
        break;
    }
  }
};


/**
 * @augments SIP.Transactions
 * @class ACK Client Transaction
 * @param {SIP.RequestSender} request_sender
 * @param {SIP.OutgoingRequest} request
 * @param {SIP.Transport} transport
 */
var AckClientTransaction = function(request_sender, request, transport) {
  var via;

  this.transport = transport;
  this.id = 'z9hG4bK' + Math.floor(Math.random() * 10000000);
  this.request_sender = request_sender;
  this.request = request;

  this.logger = request_sender.ua.getLogger('sip.transaction.nict', this.id);

  via = 'SIP/2.0/' + (request_sender.ua.configuration.hackViaTcp ? 'TCP' : transport.server.scheme);
  via += ' ' + request_sender.ua.configuration.viaHost + ';branch=' + this.id;

  this.request.setHeader('via', via);
};
AckClientTransaction.prototype = new SIP.EventEmitter();

AckClientTransaction.prototype.send = function() {
  if(!this.transport.send(this.request)) {
    this.onTransportError();
  }
};

AckClientTransaction.prototype.onTransportError = function() {
  this.logger.log('transport error occurred, for an ACK client transaction ' + this.id);
  this.request_sender.onTransportError();
};


/**
* @augments SIP.Transactions
* @class Non Invite Server Transaction
* @param {SIP.IncomingRequest} request
* @param {SIP.UA} ua
*/
var NonInviteServerTransaction = function(request, ua) {
  var events = ['stateChanged'];

  this.type = C.NON_INVITE_SERVER;
  this.id = request.via_branch;
  this.request = request;
  this.transport = request.transport;
  this.ua = ua;
  this.last_response = '';
  request.server_transaction = this;

  this.logger = ua.getLogger('sip.transaction.nist', this.id);

  this.state = C.STATUS_TRYING;

  ua.newTransaction(this);

  this.initEvents(events);
};
NonInviteServerTransaction.prototype = new SIP.EventEmitter();

NonInviteServerTransaction.prototype.stateChanged = function(state) {
  this.state = state;
  this.emit('stateChanged');
};

NonInviteServerTransaction.prototype.timer_J = function() {
  this.logger.log('Timer J expired for non-INVITE server transaction ' + this.id);
  this.stateChanged(C.STATUS_TERMINATED);
  this.ua.destroyTransaction(this);
};

NonInviteServerTransaction.prototype.onTransportError = function() {
  if (!this.transportError) {
    this.transportError = true;

    this.logger.log('transport error occurred, deleting non-INVITE server transaction ' + this.id);

    SIP.Timers.clearTimeout(this.J);
    this.stateChanged(C.STATUS_TERMINATED);
    this.ua.destroyTransaction(this);
  }
};

NonInviteServerTransaction.prototype.receiveResponse = function(status_code, response, onSuccess, onFailure) {
  var tr = this;

  if(status_code === 100) {
    /* RFC 4320 4.1
     * 'A SIP element MUST NOT
     * send any provisional response with a
     * Status-Code other than 100 to a non-INVITE request.'
     */
    switch(this.state) {
      case C.STATUS_TRYING:
        this.stateChanged(C.STATUS_PROCEEDING);
        if(!this.transport.send(response))  {
          this.onTransportError();
        }
        break;
      case C.STATUS_PROCEEDING:
        this.last_response = response;
        if(!this.transport.send(response)) {
          this.onTransportError();
          if (onFailure) {
            onFailure();
          }
        } else if (onSuccess) {
          onSuccess();
        }
        break;
    }
  } else if(status_code >= 200 && status_code <= 699) {
    switch(this.state) {
      case C.STATUS_TRYING:
      case C.STATUS_PROCEEDING:
        this.stateChanged(C.STATUS_COMPLETED);
        this.last_response = response;
        this.J = SIP.Timers.setTimeout(tr.timer_J.bind(tr), SIP.Timers.TIMER_J);
        if(!this.transport.send(response)) {
          this.onTransportError();
          if (onFailure) {
            onFailure();
          }
        } else if (onSuccess) {
          onSuccess();
        }
        break;
      case C.STATUS_COMPLETED:
        break;
    }
  }
};

/**
* @augments SIP.Transactions
* @class Invite Server Transaction
* @param {SIP.IncomingRequest} request
* @param {SIP.UA} ua
*/
var InviteServerTransaction = function(request, ua) {
  var events = ['stateChanged'];

  this.type = C.INVITE_SERVER;
  this.id = request.via_branch;
  this.request = request;
  this.transport = request.transport;
  this.ua = ua;
  this.last_response = '';
  request.server_transaction = this;

  this.logger = ua.getLogger('sip.transaction.ist', this.id);

  this.state = C.STATUS_PROCEEDING;

  ua.newTransaction(this);

  this.resendProvisionalTimer = null;

  request.reply(100);

  this.initEvents(events);
};
InviteServerTransaction.prototype = new SIP.EventEmitter();

InviteServerTransaction.prototype.stateChanged = function(state) {
  this.state = state;
  this.emit('stateChanged');
};

InviteServerTransaction.prototype.timer_H = function() {
  this.logger.log('Timer H expired for INVITE server transaction ' + this.id);

  if(this.state === C.STATUS_COMPLETED) {
    this.logger.warn('transactions', 'ACK for INVITE server transaction was never received, call will be terminated');
  }

  this.stateChanged(C.STATUS_TERMINATED);
  this.ua.destroyTransaction(this);
};

InviteServerTransaction.prototype.timer_I = function() {
  this.stateChanged(C.STATUS_TERMINATED);
  this.ua.destroyTransaction(this);
};

// RFC 6026 7.1
InviteServerTransaction.prototype.timer_L = function() {
  this.logger.log('Timer L expired for INVITE server transaction ' + this.id);

  if(this.state === C.STATUS_ACCEPTED) {
    this.stateChanged(C.STATUS_TERMINATED);
    this.ua.destroyTransaction(this);
  }
};

InviteServerTransaction.prototype.onTransportError = function() {
  if (!this.transportError) {
    this.transportError = true;

    this.logger.log('transport error occurred, deleting INVITE server transaction ' + this.id);

    if (this.resendProvisionalTimer !== null) {
      SIP.Timers.clearInterval(this.resendProvisionalTimer);
      this.resendProvisionalTimer = null;
    }

    SIP.Timers.clearTimeout(this.L);
    SIP.Timers.clearTimeout(this.H);
    SIP.Timers.clearTimeout(this.I);

    this.stateChanged(C.STATUS_TERMINATED);
    this.ua.destroyTransaction(this);
  }
};

InviteServerTransaction.prototype.resend_provisional = function() {
  if(!this.transport.send(this.last_response)) {
    this.onTransportError();
  }
};

// INVITE Server Transaction RFC 3261 17.2.1
InviteServerTransaction.prototype.receiveResponse = function(status_code, response, onSuccess, onFailure) {
  var tr = this;

  if(status_code >= 100 && status_code <= 199) {
    switch(this.state) {
      case C.STATUS_PROCEEDING:
        if(!this.transport.send(response)) {
          this.onTransportError();
        }
        this.last_response = response;
        break;
    }
  }

  if(status_code > 100 && status_code <= 199 && this.state === C.STATUS_PROCEEDING) {
    // Trigger the resendProvisionalTimer only for the first non 100 provisional response.
    if(this.resendProvisionalTimer === null) {
      this.resendProvisionalTimer = SIP.Timers.setInterval(tr.resend_provisional.bind(tr),
        SIP.Timers.PROVISIONAL_RESPONSE_INTERVAL);
    }
  } else if(status_code >= 200 && status_code <= 299) {
    switch(this.state) {
      case C.STATUS_PROCEEDING:
        this.stateChanged(C.STATUS_ACCEPTED);
        this.last_response = response;
        this.L = SIP.Timers.setTimeout(tr.timer_L.bind(tr), SIP.Timers.TIMER_L);

        if (this.resendProvisionalTimer !== null) {
          SIP.Timers.clearInterval(this.resendProvisionalTimer);
          this.resendProvisionalTimer = null;
        }
        /* falls through */
        case C.STATUS_ACCEPTED:
          // Note that this point will be reached for proceeding tr.state also.
          if(!this.transport.send(response)) {
            this.onTransportError();
            if (onFailure) {
              onFailure();
            }
          } else if (onSuccess) {
            onSuccess();
          }
          break;
    }
  } else if(status_code >= 300 && status_code <= 699) {
    switch(this.state) {
      case C.STATUS_PROCEEDING:
        if (this.resendProvisionalTimer !== null) {
          SIP.Timers.clearInterval(this.resendProvisionalTimer);
          this.resendProvisionalTimer = null;
        }

        if(!this.transport.send(response)) {
          this.onTransportError();
          if (onFailure) {
            onFailure();
          }
        } else {
          this.stateChanged(C.STATUS_COMPLETED);
          this.H = SIP.Timers.setTimeout(tr.timer_H.bind(tr), SIP.Timers.TIMER_H);
          if (onSuccess) {
            onSuccess();
          }
        }
        break;
    }
  }
};

/**
 * @function
 * @param {SIP.UA} ua
 * @param {SIP.IncomingRequest} request
 *
 * @return {boolean}
 * INVITE:
 *  _true_ if retransmission
 *  _false_ new request
 *
 * ACK:
 *  _true_  ACK to non2xx response
 *  _false_ ACK must be passed to TU (accepted state)
 *          ACK to 2xx response
 *
 * CANCEL:
 *  _true_  no matching invite transaction
 *  _false_ matching invite transaction and no final response sent
 *
 * OTHER:
 *  _true_  retransmission
 *  _false_ new request
 */
var checkTransaction = function(ua, request) {
  var tr;

  switch(request.method) {
    case SIP.C.INVITE:
      tr = ua.transactions.ist[request.via_branch];
      if(tr) {
        switch(tr.state) {
          case C.STATUS_PROCEEDING:
            tr.transport.send(tr.last_response);
            break;

            // RFC 6026 7.1 Invite retransmission
            //received while in C.STATUS_ACCEPTED state. Absorb it.
          case C.STATUS_ACCEPTED:
            break;
        }
        return true;
      }
      break;
    case SIP.C.ACK:
      tr = ua.transactions.ist[request.via_branch];

      // RFC 6026 7.1
      if(tr) {
        if(tr.state === C.STATUS_ACCEPTED) {
          return false;
        } else if(tr.state === C.STATUS_COMPLETED) {
          tr.state = C.STATUS_CONFIRMED;
          tr.I = SIP.Timers.setTimeout(tr.timer_I.bind(tr), SIP.Timers.TIMER_I);
          return true;
        }
      }

      // ACK to 2XX Response.
      else {
        return false;
      }
      break;
    case SIP.C.CANCEL:
      tr = ua.transactions.ist[request.via_branch];
      if(tr) {
        request.reply_sl(200);
        if(tr.state === C.STATUS_PROCEEDING) {
          return false;
        } else {
          return true;
        }
      } else {
        request.reply_sl(481);
        return true;
      }
      break;
    default:

      // Non-INVITE Server Transaction RFC 3261 17.2.2
      tr = ua.transactions.nist[request.via_branch];
      if(tr) {
        switch(tr.state) {
          case C.STATUS_TRYING:
            break;
          case C.STATUS_PROCEEDING:
          case C.STATUS_COMPLETED:
            tr.transport.send(tr.last_response);
            break;
        }
        return true;
      }
      break;
  }
};

SIP.Transactions = {
  C: C,
  checkTransaction: checkTransaction,
  NonInviteClientTransaction: NonInviteClientTransaction,
  InviteClientTransaction: InviteClientTransaction,
  AckClientTransaction: AckClientTransaction,
  NonInviteServerTransaction: NonInviteServerTransaction,
  InviteServerTransaction: InviteServerTransaction
};

};

},{}],27:[function(_dereq_,module,exports){
/**
 * @fileoverview Transport
 */

/**
 * @augments SIP
 * @class Transport
 * @param {SIP.UA} ua
 * @param {Object} server ws_server Object
 */
module.exports = function (SIP, window) {
var Transport,
  C = {
    // Transport status codes
    STATUS_READY:        0,
    STATUS_DISCONNECTED: 1,
    STATUS_ERROR:        2
  };

Transport = function(ua, server) {

  this.logger = ua.getLogger('sip.transport');
  this.ua = ua;
  this.ws = null;
  this.server = server;
  this.reconnection_attempts = 0;
  this.closed = false;
  this.connected = false;
  this.reconnectTimer = null;
  this.lastTransportError = {};

  this.ua.transport = this;

  // Connect
  this.connect();
};

Transport.prototype = {
  /**
   * Send a message.
   * @param {SIP.OutgoingRequest|String} msg
   * @returns {Boolean}
   */
  send: function(msg) {
    var message = msg.toString();

    if(this.ws && this.ws.readyState === window.WebSocket.OPEN) {
      if (this.ua.configuration.traceSip === true) {
        this.logger.log('sending WebSocket message:\n\n' + message + '\n');
      }
      this.ws.send(message);
      return true;
    } else {
      this.logger.warn('unable to send message, WebSocket is not open');
      return false;
    }
  },

  /**
  * Disconnect socket.
  */
  disconnect: function() {
    if(this.ws) {
      // Clear reconnectTimer
      SIP.Timers.clearTimeout(this.reconnectTimer);

      this.closed = true;
      this.logger.log('closing WebSocket ' + this.server.ws_uri);
      this.ws.close();
    }

    if (this.reconnectTimer !== null) {
      SIP.Timers.clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
      this.ua.emit('disconnected', {
        transport: this,
        code: this.lastTransportError.code,
        reason: this.lastTransportError.reason
      });
    }
  },

  /**
  * Connect socket.
  */
  connect: function() {
    var transport = this;

    if(this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
      this.logger.log('WebSocket ' + this.server.ws_uri + ' is already connected');
      return false;
    }

    if(this.ws) {
      this.ws.close();
    }

    this.logger.log('connecting to WebSocket ' + this.server.ws_uri);
    this.ua.onTransportConnecting(this,
      (this.reconnection_attempts === 0)?1:this.reconnection_attempts);

    try {
      this.ws = new window.WebSocket(this.server.ws_uri, 'sip');
    } catch(e) {
      this.logger.warn('error connecting to WebSocket ' + this.server.ws_uri + ': ' + e);
    }

    this.ws.binaryType = 'arraybuffer';

    this.ws.onopen = function() {
      transport.onOpen();
    };

    this.ws.onclose = function(e) {
      transport.onClose(e);
    };

    this.ws.onmessage = function(e) {
      transport.onMessage(e);
    };

    this.ws.onerror = function(e) {
      transport.onError(e);
    };
  },

  // Transport Event Handlers

  /**
  * @event
  * @param {event} e
  */
  onOpen: function() {
    this.connected = true;

    this.logger.log('WebSocket ' + this.server.ws_uri + ' connected');
    // Clear reconnectTimer since we are not disconnected
    if (this.reconnectTimer !== null) {
      SIP.Timers.clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    // Reset reconnection_attempts
    this.reconnection_attempts = 0;
    // Disable closed
    this.closed = false;
    // Trigger onTransportConnected callback
    this.ua.onTransportConnected(this);
  },

  /**
  * @event
  * @param {event} e
  */
  onClose: function(e) {
    var connected_before = this.connected;

    this.connected = false;
    this.lastTransportError.code = e.code;
    this.lastTransportError.reason = e.reason;
    this.logger.log('WebSocket disconnected (code: ' + e.code + (e.reason? '| reason: ' + e.reason : '') +')');

    if(e.wasClean === false) {
      this.logger.warn('WebSocket abrupt disconnection');
    }
    // Transport was connected
    if(connected_before === true) {
      this.ua.onTransportClosed(this);
      // Check whether the user requested to close.
      if(!this.closed) {
        this.reConnect();
      } else {
        this.ua.emit('disconnected', {
          transport: this,
          code: this.lastTransportError.code,
          reason: this.lastTransportError.reason
        });
      }
    } else {
      // This is the first connection attempt
      //Network error
      this.ua.onTransportError(this);
    }
  },

  /**
  * @event
  * @param {event} e
  */
  onMessage: function(e) {
    var message, transaction,
      data = e.data;

    // CRLF Keep Alive response from server. Ignore it.
    if(data === '\r\n') {
      if (this.ua.configuration.traceSip === true) {
        this.logger.log('received WebSocket message with CRLF Keep Alive response');
      }
      return;
    }

    // WebSocket binary message.
    else if (typeof data !== 'string') {
      try {
        data = String.fromCharCode.apply(null, new Uint8Array(data));
      } catch(evt) {
        this.logger.warn('received WebSocket binary message failed to be converted into string, message discarded');
        return;
      }

      if (this.ua.configuration.traceSip === true) {
        this.logger.log('received WebSocket binary message:\n\n' + data + '\n');
      }
    }

    // WebSocket text message.
    else {
      if (this.ua.configuration.traceSip === true) {
        this.logger.log('received WebSocket text message:\n\n' + data + '\n');
      }
    }

    message = SIP.Parser.parseMessage(data, this.ua);

    if (!message) {
      return;
    }

    if(this.ua.status === SIP.UA.C.STATUS_USER_CLOSED && message instanceof SIP.IncomingRequest) {
      return;
    }

    // Do some sanity check
    if(SIP.sanityCheck(message, this.ua, this)) {
      if(message instanceof SIP.IncomingRequest) {
        message.transport = this;
        this.ua.receiveRequest(message);
      } else if(message instanceof SIP.IncomingResponse) {
        /* Unike stated in 18.1.2, if a response does not match
        * any transaction, it is discarded here and no passed to the core
        * in order to be discarded there.
        */
        switch(message.method) {
          case SIP.C.INVITE:
            transaction = this.ua.transactions.ict[message.via_branch];
            if(transaction) {
              transaction.receiveResponse(message);
            }
            break;
          case SIP.C.ACK:
            // Just in case ;-)
            break;
          default:
            transaction = this.ua.transactions.nict[message.via_branch];
            if(transaction) {
              transaction.receiveResponse(message);
            }
            break;
        }
      }
    }
  },

  /**
  * @event
  * @param {event} e
  */
  onError: function(e) {
    this.logger.warn('WebSocket connection error: ' + e);
  },

  /**
  * Reconnection attempt logic.
  * @private
  */
  reConnect: function() {
    var transport = this;

    this.reconnection_attempts += 1;

    if(this.reconnection_attempts > this.ua.configuration.wsServerMaxReconnection) {
      this.logger.warn('maximum reconnection attempts for WebSocket ' + this.server.ws_uri);
      this.ua.onTransportError(this);
    } else {
      this.logger.log('trying to reconnect to WebSocket ' + this.server.ws_uri + ' (reconnection attempt ' + this.reconnection_attempts + ')');

      this.reconnectTimer = SIP.Timers.setTimeout(function() {
        transport.connect();
        transport.reconnectTimer = null;
      }, this.ua.configuration.wsServerReconnectionTimeout * 1000);
    }
  }
};

Transport.C = C;
SIP.Transport = Transport;
};

},{}],28:[function(_dereq_,module,exports){
(function (global){
/**
 * @augments SIP
 * @class Class creating a SIP User Agent.
 * @param {function returning SIP.MediaHandler} [configuration.mediaHandlerFactory]
 *        A function will be invoked by each of the UA's Sessions to build the MediaHandler for that Session.
 *        If no (or a falsy) value is provided, each Session will use a default (WebRTC) MediaHandler.
 *
 * @param {Object} [configuration.media] gets passed to SIP.MediaHandler.getDescription as mediaHint
 */
module.exports = function (SIP) {
var UA,
  C = {
    // UA status codes
    STATUS_INIT :                0,
    STATUS_READY:                1,
    STATUS_USER_CLOSED:          2,
    STATUS_NOT_READY:            3,

    // UA error codes
    CONFIGURATION_ERROR:  1,
    NETWORK_ERROR:        2,

    /* UA events and corresponding SIP Methods.
     * Dynamically added to 'Allow' header field if the
     * corresponding event handler is set.
     */
    EVENT_METHODS: {
      'invite': 'INVITE',
      'message': 'MESSAGE'
    },

    ALLOWED_METHODS: [
      'ACK',
      'CANCEL',
      'BYE',
      'OPTIONS',
      'INFO',
      'NOTIFY'
    ],

    ACCEPTED_BODY_TYPES: [
      'application/sdp',
      'application/dtmf-relay'
    ],

    MAX_FORWARDS: 70,
    TAG_LENGTH: 10
  };

UA = function(configuration) {
  var self = this,
  events = [
    'connecting',
    'connected',
    'disconnected',
    'newTransaction',
    'transactionDestroyed',
    'registered',
    'unregistered',
    'registrationFailed',
    'invite',
    'newSession',
    'message'
  ], i, len;

  // Helper function for forwarding events
  function selfEmit(type) {
    //registrationFailed handler is invoked with two arguments. Allow event handlers to be invoked with a variable no. of arguments
    return self.emit.bind(self, type);
  }

  for (i = 0, len = C.ALLOWED_METHODS.length; i < len; i++) {
    events.push(C.ALLOWED_METHODS[i].toLowerCase());
  }

  // Set Accepted Body Types
  C.ACCEPTED_BODY_TYPES = C.ACCEPTED_BODY_TYPES.toString();

  this.log = new SIP.LoggerFactory();
  this.logger = this.getLogger('sip.ua');

  this.cache = {
    credentials: {}
  };

  this.configuration = {};
  this.dialogs = {};

  //User actions outside any session/dialog (MESSAGE)
  this.applicants = {};

  this.data = {};
  this.sessions = {};
  this.subscriptions = {};
  this.transport = null;
  this.contact = null;
  this.status = C.STATUS_INIT;
  this.error = null;
  this.transactions = {
    nist: {},
    nict: {},
    ist: {},
    ict: {}
  };

  this.transportRecoverAttempts = 0;
  this.transportRecoveryTimer = null;

  Object.defineProperties(this, {
    transactionsCount: {
      get: function() {
        var type,
          transactions = ['nist','nict','ist','ict'],
          count = 0;

        for (type in transactions) {
          count += Object.keys(this.transactions[transactions[type]]).length;
        }

        return count;
      }
    },

    nictTransactionsCount: {
      get: function() {
        return Object.keys(this.transactions['nict']).length;
      }
    },

    nistTransactionsCount: {
      get: function() {
        return Object.keys(this.transactions['nist']).length;
      }
    },

    ictTransactionsCount: {
      get: function() {
        return Object.keys(this.transactions['ict']).length;
      }
    },

    istTransactionsCount: {
      get: function() {
        return Object.keys(this.transactions['ist']).length;
      }
    }
  });

  /**
   * Load configuration
   *
   * @throws {SIP.Exceptions.ConfigurationError}
   * @throws {TypeError}
   */

  if(configuration === undefined) {
    configuration = {};
  } else if (typeof configuration === 'string' || configuration instanceof String) {
    configuration = {
      uri: configuration
    };
  }

  // Apply log configuration if present
  if (configuration.log) {
    if (configuration.log.hasOwnProperty('builtinEnabled')) {
      this.log.builtinEnabled = configuration.log.builtinEnabled;
    }

    if (configuration.log.hasOwnProperty('level')) {
      this.log.level = configuration.log.level;
    }

    if (configuration.log.hasOwnProperty('connector')) {
      this.log.connector = configuration.log.connector;
    }
  }

  try {
    this.loadConfig(configuration);
    this.initEvents(events);
  } catch(e) {
    this.status = C.STATUS_NOT_READY;
    this.error = C.CONFIGURATION_ERROR;
    throw e;
  }

  // Initialize registerContext
  this.registerContext = new SIP.RegisterContext(this);
  this.registerContext.on('failed', selfEmit('registrationFailed'));
  this.registerContext.on('registered', selfEmit('registered'));
  this.registerContext.on('unregistered', selfEmit('unregistered'));

  if(this.configuration.autostart) {
    this.start();
  }

  if (typeof global.addEventListener === 'function') {
    global.addEventListener('unload', this.stop.bind(this));
  }
};
UA.prototype = new SIP.EventEmitter();

//=================
//  High Level API
//=================

UA.prototype.register = function(options) {
  this.configuration.register = true;
  this.registerContext.register(options);

  return this;
};

/**
 * Unregister.
 *
 * @param {Boolean} [all] unregister all user bindings.
 *
 */
UA.prototype.unregister = function(options) {
  this.configuration.register = false;
  this.registerContext.unregister(options);

  return this;
};

UA.prototype.isRegistered = function() {
  return this.registerContext.registered;
};

/**
 * Connection state.
 * @param {Boolean}
 */
UA.prototype.isConnected = function() {
  return this.transport ? this.transport.connected : false;
};

/**
 * Make an outgoing call.
 *
 * @param {String} target
 * @param {Object} views
 * @param {Object} [options.media] gets passed to SIP.MediaHandler.getDescription as mediaHint
 *
 * @throws {TypeError}
 *
 */
UA.prototype.invite = function(target, options) {
  options = options || {};
  options = SIP.Utils.desugarSessionOptions(options);
  SIP.Utils.optionsOverride(options, 'media', 'mediaConstraints', true, this.logger);

  var context = new SIP.InviteClientContext(this, target, options);

  if (this.isConnected()) {
    context.invite({media: options.media});
  } else {
    this.once('connected', function() {
      context.invite({media: options.media});
    });
  }
  return context;
};

UA.prototype.subscribe = function(target, event, options) {
  var sub = new SIP.Subscription(this, target, event, options);

  if (this.isConnected()) {
    sub.subscribe();
  } else {
    this.once('connected', function() {
      sub.subscribe();
    });
  }
  return sub;
};

/**
 * Send a message.
 *
 * @param {String} target
 * @param {String} body
 * @param {Object} [options]
 *
 * @throws {TypeError}
 *
 */
UA.prototype.message = function(target, body, options) {
  if (body === undefined) {
    throw new TypeError('Not enough arguments');
  }

  options = options || {};
  options.contentType = options.contentType || 'text/plain';
  options.body = body;

  var mes = new SIP.ClientContext(this, SIP.C.MESSAGE, target, options);

  if (this.isConnected()) {
    mes.send();
  } else {
    this.once('connected', function() {
      mes.send();
    });
  }

  return mes;
};

UA.prototype.request = function (method, target, options) {
  var req = new SIP.ClientContext(this, method, target, options);

  if (this.isConnected()) {
    req.send();
  } else {
    this.once('connected', function() {
      req.send();
    });
  }

  return req;
};

/**
 * Gracefully close.
 *
 */
UA.prototype.stop = function() {
  var session, subscription, applicant,
    ua = this;

  function transactionsListener() {
    if (ua.nistTransactionsCount === 0 && ua.nictTransactionsCount === 0) {
        ua.off('transactionDestroyed', transactionsListener);
        ua.transport.disconnect();
    }
  }

  this.logger.log('user requested closure...');

  if(this.status === C.STATUS_USER_CLOSED) {
    this.logger.warn('UA already closed');
    return this;
  }

  // Clear transportRecoveryTimer
  SIP.Timers.clearTimeout(this.transportRecoveryTimer);

  // Close registerContext
  this.logger.log('closing registerContext');
  this.registerContext.close();

  // Run  _terminate_ on every Session
  for(session in this.sessions) {
    this.logger.log('closing session ' + session);
    this.sessions[session].terminate();
  }

  //Run _close_ on every Subscription
  for(subscription in this.subscriptions) {
    this.logger.log('unsubscribing from subscription ' + subscription);
    this.subscriptions[subscription].close();
  }

  // Run  _close_ on every applicant
  for(applicant in this.applicants) {
    this.applicants[applicant].close();
  }

  this.status = C.STATUS_USER_CLOSED;

  /*
   * If the remaining transactions are all INVITE transactions, there is no need to
   * wait anymore because every session has already been closed by this method.
   * - locally originated sessions where terminated (CANCEL or BYE)
   * - remotely originated sessions where rejected (4XX) or terminated (BYE)
   * Remaining INVITE transactions belong tho sessions that where answered. This are in
   * 'accepted' state due to timers 'L' and 'M' defined in [RFC 6026]
   */
  if (this.nistTransactionsCount === 0 && this.nictTransactionsCount === 0) {
    this.transport.disconnect();
  } else {
    this.on('transactionDestroyed', transactionsListener);
  }

  return this;
};

/**
 * Connect to the WS server if status = STATUS_INIT.
 * Resume UA after being closed.
 *
 */
UA.prototype.start = function() {
  var server;

  this.logger.log('user requested startup...');
  if (this.status === C.STATUS_INIT) {
    server = this.getNextWsServer();
    new SIP.Transport(this, server);
  } else if(this.status === C.STATUS_USER_CLOSED) {
    this.logger.log('resuming');
    this.status = C.STATUS_READY;
    this.transport.connect();
  } else if (this.status === C.STATUS_READY) {
    this.logger.log('UA is in READY status, not resuming');
  } else {
    this.logger.error('Connection is down. Auto-Recovery system is trying to connect');
  }

  return this;
};

/**
 * Normalize a string into a valid SIP request URI
 *
 * @param {String} target
 *
 * @returns {SIP.URI|undefined}
 */
UA.prototype.normalizeTarget = function(target) {
  return SIP.Utils.normalizeTarget(target, this.configuration.hostportParams);
};


//===============================
//  Private (For internal use)
//===============================

UA.prototype.saveCredentials = function(credentials) {
  this.cache.credentials[credentials.realm] = this.cache.credentials[credentials.realm] || {};
  this.cache.credentials[credentials.realm][credentials.uri] = credentials;

  return this;
};

UA.prototype.getCredentials = function(request) {
  var realm, credentials;

  realm = request.ruri.host;

  if (this.cache.credentials[realm] && this.cache.credentials[realm][request.ruri]) {
    credentials = this.cache.credentials[realm][request.ruri];
    credentials.method = request.method;
  }

  return credentials;
};

UA.prototype.getLogger = function(category, label) {
  return this.log.getLogger(category, label);
};


//==============================
// Event Handlers
//==============================

/**
 * Transport Close event
 * @private
 * @event
 * @param {SIP.Transport} transport.
 */
UA.prototype.onTransportClosed = function(transport) {
  // Run _onTransportError_ callback on every client transaction using _transport_
  var type, idx, length,
    client_transactions = ['nict', 'ict', 'nist', 'ist'];

  transport.server.status = SIP.Transport.C.STATUS_DISCONNECTED;
  this.logger.log('connection state set to '+ SIP.Transport.C.STATUS_DISCONNECTED);

  length = client_transactions.length;
  for (type = 0; type < length; type++) {
    for(idx in this.transactions[client_transactions[type]]) {
      this.transactions[client_transactions[type]][idx].onTransportError();
    }
  }

  // Close sessions if GRUU is not being used
  if (!this.contact.pub_gruu) {
    this.closeSessionsOnTransportError();
  }

};

/**
 * Unrecoverable transport event.
 * Connection reattempt logic has been done and didn't success.
 * @private
 * @event
 * @param {SIP.Transport} transport.
 */
UA.prototype.onTransportError = function(transport) {
  var server;

  this.logger.log('transport ' + transport.server.ws_uri + ' failed | connection state set to '+ SIP.Transport.C.STATUS_ERROR);

  // Close sessions.
  //Mark this transport as 'down'
  transport.server.status = SIP.Transport.C.STATUS_ERROR;

  this.emit('disconnected', {
    transport: transport
  });

  // try the next transport if the UA isn't closed
  if(this.status === C.STATUS_USER_CLOSED) {
    return;
  }

  server = this.getNextWsServer();

  if(server) {
    new SIP.Transport(this, server);
  }else {
    this.closeSessionsOnTransportError();
    if (!this.error || this.error !== C.NETWORK_ERROR) {
      this.status = C.STATUS_NOT_READY;
      this.error = C.NETWORK_ERROR;
    }
    // Transport Recovery process
    this.recoverTransport();
  }
};

/**
 * Transport connection event.
 * @private
 * @event
 * @param {SIP.Transport} transport.
 */
UA.prototype.onTransportConnected = function(transport) {
  this.transport = transport;

  // Reset transport recovery counter
  this.transportRecoverAttempts = 0;

  transport.server.status = SIP.Transport.C.STATUS_READY;
  this.logger.log('connection state set to '+ SIP.Transport.C.STATUS_READY);

  if(this.status === C.STATUS_USER_CLOSED) {
    return;
  }

  this.status = C.STATUS_READY;
  this.error = null;

  if(this.configuration.register) {
    this.registerContext.onTransportConnected();
  }

  this.emit('connected', {
    transport: transport
  });
};


/**
 * Transport connecting event
 * @private
 * @param {SIP.Transport} transport.
 * #param {Integer} attempts.
 */
  UA.prototype.onTransportConnecting = function(transport, attempts) {
    this.emit('connecting', {
      transport: transport,
      attempts: attempts
    });
  };


/**
 * new Transaction
 * @private
 * @param {SIP.Transaction} transaction.
 */
UA.prototype.newTransaction = function(transaction) {
  this.transactions[transaction.type][transaction.id] = transaction;
  this.emit('newTransaction', {transaction: transaction});
};


/**
 * destroy Transaction
 * @private
 * @param {SIP.Transaction} transaction.
 */
UA.prototype.destroyTransaction = function(transaction) {
  delete this.transactions[transaction.type][transaction.id];
  this.emit('transactionDestroyed', {
    transaction: transaction
  });
};


//=========================
// receiveRequest
//=========================

/**
 * Request reception
 * @private
 * @param {SIP.IncomingRequest} request.
 */
UA.prototype.receiveRequest = function(request) {
  var dialog, session, message,
    method = request.method,
    transaction,
    methodLower = request.method.toLowerCase(),
    self = this;

  function ruriMatches (uri) {
    return uri && uri.user === request.ruri.user;
  }

  // Check that request URI points to us
  if(!(ruriMatches(this.configuration.uri) ||
       ruriMatches(this.contact.uri) ||
       ruriMatches(this.contact.pub_gruu) ||
       ruriMatches(this.contact.temp_gruu))) {
    this.logger.warn('Request-URI does not point to us');
    if (request.method !== SIP.C.ACK) {
      request.reply_sl(404);
    }
    return;
  }

  // Check request URI scheme
  if(request.ruri.scheme === SIP.C.SIPS) {
    request.reply_sl(416);
    return;
  }

  // Check transaction
  if(SIP.Transactions.checkTransaction(this, request)) {
    return;
  }

  /* RFC3261 12.2.2
   * Requests that do not change in any way the state of a dialog may be
   * received within a dialog (for example, an OPTIONS request).
   * They are processed as if they had been received outside the dialog.
   */
  if(method === SIP.C.OPTIONS) {
    new SIP.Transactions.NonInviteServerTransaction(request, this);
    request.reply(200, null, [
      'Allow: '+ SIP.Utils.getAllowedMethods(this),
      'Accept: '+ C.ACCEPTED_BODY_TYPES
    ]);
  } else if (method === SIP.C.MESSAGE) {
    if (!this.checkListener(methodLower)) {
      // UA is not listening for this.  Reject immediately.
      new SIP.Transactions.NonInviteServerTransaction(request, this);
      request.reply(405, null, ['Allow: '+ SIP.Utils.getAllowedMethods(this)]);
      return;
    }
    message = new SIP.ServerContext(this, request);
    message.body = request.body;
    message.content_type = request.getHeader('Content-Type') || 'text/plain';

    request.reply(200, null);
    this.emit('message', message);
  } else if (method !== SIP.C.INVITE &&
             method !== SIP.C.ACK) {
    // Let those methods pass through to normal processing for now.
    transaction = new SIP.ServerContext(this, request);
  }

  // Initial Request
  if(!request.to_tag) {
    switch(method) {
      case SIP.C.INVITE:
        var isMediaSupported = this.configuration.mediaHandlerFactory.isSupported;
        if(!isMediaSupported || isMediaSupported()) {
          session = new SIP.InviteServerContext(this, request)
            .on('invite', function() {
              self.emit('invite', this);
            });
        } else {
          this.logger.warn('INVITE received but WebRTC is not supported');
          request.reply(488);
        }
        break;
      case SIP.C.BYE:
        // Out of dialog BYE received
        request.reply(481);
        break;
      case SIP.C.CANCEL:
        session = this.findSession(request);
        if(session) {
          session.receiveRequest(request);
        } else {
          this.logger.warn('received CANCEL request for a non existent session');
        }
        break;
      case SIP.C.ACK:
        /* Absorb it.
         * ACK request without a corresponding Invite Transaction
         * and without To tag.
         */
        break;
      default:
        request.reply(405);
        break;
    }
  }
  // In-dialog request
  else {
    dialog = this.findDialog(request);

    if(dialog) {
      if (method === SIP.C.INVITE) {
        new SIP.Transactions.InviteServerTransaction(request, this);
      }
      dialog.receiveRequest(request);
    } else if (method === SIP.C.NOTIFY) {
      session = this.findSession(request);
      if(session) {
        session.receiveRequest(request);
      } else {
        this.logger.warn('received NOTIFY request for a non existent session');
        request.reply(481, 'Subscription does not exist');
      }
    }
    /* RFC3261 12.2.2
     * Request with to tag, but no matching dialog found.
     * Exception: ACK for an Invite request for which a dialog has not
     * been created.
     */
    else {
      if(method !== SIP.C.ACK) {
        request.reply(481);
      }
    }
  }
};

//=================
// Utils
//=================

/**
 * Get the session to which the request belongs to, if any.
 * @private
 * @param {SIP.IncomingRequest} request.
 * @returns {SIP.OutgoingSession|SIP.IncomingSession|null}
 */
UA.prototype.findSession = function(request) {
  return this.sessions[request.call_id + request.from_tag] ||
          this.sessions[request.call_id + request.to_tag] ||
          null;
};

/**
 * Get the dialog to which the request belongs to, if any.
 * @private
 * @param {SIP.IncomingRequest}
 * @returns {SIP.Dialog|null}
 */
UA.prototype.findDialog = function(request) {
  return this.dialogs[request.call_id + request.from_tag + request.to_tag] ||
          this.dialogs[request.call_id + request.to_tag + request.from_tag] ||
          null;
};

/**
 * Retrieve the next server to which connect.
 * @private
 * @returns {Object} ws_server
 */
UA.prototype.getNextWsServer = function() {
  // Order servers by weight
  var idx, length, ws_server,
    candidates = [];

  length = this.configuration.wsServers.length;
  for (idx = 0; idx < length; idx++) {
    ws_server = this.configuration.wsServers[idx];

    if (ws_server.status === SIP.Transport.C.STATUS_ERROR) {
      continue;
    } else if (candidates.length === 0) {
      candidates.push(ws_server);
    } else if (ws_server.weight > candidates[0].weight) {
      candidates = [ws_server];
    } else if (ws_server.weight === candidates[0].weight) {
      candidates.push(ws_server);
    }
  }

  idx = Math.floor(Math.random() * candidates.length);

  return candidates[idx];
};

/**
 * Close all sessions on transport error.
 * @private
 */
UA.prototype.closeSessionsOnTransportError = function() {
  var idx;

  // Run _transportError_ for every Session
  for(idx in this.sessions) {
    this.sessions[idx].onTransportError();
  }
  // Call registerContext _onTransportClosed_
  this.registerContext.onTransportClosed();
};

UA.prototype.recoverTransport = function(ua) {
  var idx, length, k, nextRetry, count, server;

  ua = ua || this;
  count = ua.transportRecoverAttempts;

  length = ua.configuration.wsServers.length;
  for (idx = 0; idx < length; idx++) {
    ua.configuration.wsServers[idx].status = 0;
  }

  server = ua.getNextWsServer();

  k = Math.floor((Math.random() * Math.pow(2,count)) +1);
  nextRetry = k * ua.configuration.connectionRecoveryMinInterval;

  if (nextRetry > ua.configuration.connectionRecoveryMaxInterval) {
    this.logger.log('time for next connection attempt exceeds connectionRecoveryMaxInterval, resetting counter');
    nextRetry = ua.configuration.connectionRecoveryMinInterval;
    count = 0;
  }

  this.logger.log('next connection attempt in '+ nextRetry +' seconds');

  this.transportRecoveryTimer = SIP.Timers.setTimeout(
    function(){
      ua.transportRecoverAttempts = count + 1;
      new SIP.Transport(ua, server);
    }, nextRetry * 1000);
};

/**
 * Configuration load.
 * @private
 * returns {Boolean}
 */
UA.prototype.loadConfig = function(configuration) {
  // Settings and default values
  var parameter, value, checked_value, hostportParams, registrarServer,
    settings = {
      /* Host address
      * Value to be set in Via sent_by and host part of Contact FQDN
      */
      viaHost: SIP.Utils.createRandomToken(12) + '.invalid',

      uri: new SIP.URI('sip', 'anonymous.' + SIP.Utils.createRandomToken(6), 'anonymous.invalid', null, null),
      wsServers: [{
        scheme: 'WSS',
        sip_uri: '<sip:edge.sip.onsip.com;transport=ws;lr>',
        status: 0,
        weight: 0,
        ws_uri: 'wss://edge.sip.onsip.com'
      }],

      // Password
      password: null,

      // Registration parameters
      registerExpires: 600,
      register: true,
      registrarServer: null,

      // Transport related parameters
      wsServerMaxReconnection: 3,
      wsServerReconnectionTimeout: 4,

      connectionRecoveryMinInterval: 2,
      connectionRecoveryMaxInterval: 30,

      usePreloadedRoute: false,

      //string to be inserted into User-Agent request header
      userAgentString: SIP.C.USER_AGENT,

      // Session parameters
      noAnswerTimeout: 60,
      stunServers: [],
      turnServers: [{
  		urls:"turn:54.94.185.3:3478?transport=udp",
  		username:"turnuser",
  		password:"turnpass"
      }],

      // Logging parameters
      traceSip: false,

      // Hacks
      hackViaTcp: false,
      hackIpInContact: false,
      hackWssInTransport: false,

      //autostarting
      autostart: true,

      //Reliable Provisional Responses
      rel100: SIP.C.supported.UNSUPPORTED,

      mediaHandlerFactory: SIP.WebRTC.MediaHandler.defaultFactory
    };

  // Pre-Configuration
  function aliasUnderscored (parameter, logger) {
    var underscored = parameter.replace(/([a-z][A-Z])/g, function (m) {
      return m[0] + '_' + m[1].toLowerCase();
    });

    if (parameter === underscored) {
      return;
    }

    var hasParameter = configuration.hasOwnProperty(parameter);
    if (configuration.hasOwnProperty(underscored)) {
      logger.warn(underscored + ' is deprecated, please use ' + parameter);
      if (hasParameter) {
        logger.warn(parameter + ' overriding ' + underscored);
      }
    }

    configuration[parameter] = hasParameter ? configuration[parameter] : configuration[underscored];
  }

  // Check Mandatory parameters
  for(parameter in UA.configuration_check.mandatory) {
    aliasUnderscored(parameter, this.logger);
    if(!configuration.hasOwnProperty(parameter)) {
      throw new SIP.Exceptions.ConfigurationError(parameter);
    } else {
      value = configuration[parameter];
      checked_value = UA.configuration_check.mandatory[parameter](value);
      if (checked_value !== undefined) {
        settings[parameter] = checked_value;
      } else {
        throw new SIP.Exceptions.ConfigurationError(parameter, value);
      }
    }
  }

  SIP.Utils.optionsOverride(configuration, 'rel100', 'reliable', true, this.logger, SIP.C.supported.UNSUPPORTED);

  var emptyArraysAllowed = ['stunServers', 'turnServers'];

  // Check Optional parameters
  for(parameter in UA.configuration_check.optional) {
    aliasUnderscored(parameter, this.logger);
    if(configuration.hasOwnProperty(parameter)) {
      value = configuration[parameter];

      // If the parameter value is an empty array, but shouldn't be, apply its default value.
      if (value instanceof Array && value.length === 0 && emptyArraysAllowed.indexOf(parameter) < 0) { continue; }

      // If the parameter value is null, empty string, or undefined then apply its default value.
      if(value === null || value === "" || value === undefined) { continue; }
      // If it's a number with NaN value then also apply its default value.
      // NOTE: JS does not allow "value === NaN", the following does the work:
      else if(typeof(value) === 'number' && isNaN(value)) { continue; }

      checked_value = UA.configuration_check.optional[parameter](value);
      if (checked_value !== undefined) {
        settings[parameter] = checked_value;
      } else {
        throw new SIP.Exceptions.ConfigurationError(parameter, value);
      }
    }
  }

  // Sanity Checks

  // Connection recovery intervals
  if(settings.connectionRecoveryMaxInterval < settings.connectionRecoveryMinInterval) {
    throw new SIP.Exceptions.ConfigurationError('connectionRecoveryMaxInterval', settings.connectionRecoveryMaxInterval);
  }

  // Post Configuration Process

  // Allow passing 0 number as displayName.
  if (settings.displayName === 0) {
    settings.displayName = '0';
  }

  // Instance-id for GRUU
  if (!settings.instanceId) {
    settings.instanceId = SIP.Utils.newUUID();
  }

  // sipjsId instance parameter. Static random tag of length 5
  settings.sipjsId = SIP.Utils.createRandomToken(5);

  // String containing settings.uri without scheme and user.
  hostportParams = settings.uri.clone();
  hostportParams.user = null;
  settings.hostportParams = hostportParams.toString().replace(/^sip:/i, '');

  /* Check whether authorizationUser is explicitly defined.
   * Take 'settings.uri.user' value if not.
   */
  if (!settings.authorizationUser) {
    settings.authorizationUser = settings.uri.user;
  }

  /* If no 'registrarServer' is set use the 'uri' value without user portion. */
  if (!settings.registrarServer) {
    registrarServer = settings.uri.clone();
    registrarServer.user = null;
    settings.registrarServer = registrarServer;
  }

  // User noAnswerTimeout
  settings.noAnswerTimeout = settings.noAnswerTimeout * 1000;

  // Via Host
  if (settings.hackIpInContact) {
    settings.viaHost = SIP.Utils.getRandomTestNetIP();
  }

  this.contact = {
    pub_gruu: null,
    temp_gruu: null,
    uri: new SIP.URI('sip', SIP.Utils.createRandomToken(8), settings.viaHost, null, {transport: ((settings.hackWssInTransport)?'wss':'ws')}),
    toString: function(options){
      options = options || {};

      var
        anonymous = options.anonymous || null,
        outbound = options.outbound || null,
        contact = '<';

      if (anonymous) {
        contact += (this.temp_gruu || ('sip:anonymous@anonymous.invalid;transport='+(settings.hackWssInTransport)?'wss':'ws')).toString();
      } else {
        contact += (this.pub_gruu || this.uri).toString();
      }

      if (outbound) {
        contact += ';ob';
      }

      contact += '>';

      return contact;
    }
  };

  // media overrides mediaConstraints
  SIP.Utils.optionsOverride(settings, 'media', 'mediaConstraints', true, this.logger);

  // Fill the value of the configuration_skeleton
  for(parameter in settings) {
    UA.configuration_skeleton[parameter].value = settings[parameter];
  }

  Object.defineProperties(this.configuration, UA.configuration_skeleton);

  // Clean UA.configuration_skeleton
  for(parameter in settings) {
    UA.configuration_skeleton[parameter].value = '';
  }

  this.logger.log('configuration parameters after validation:');
  for(parameter in settings) {
    switch(parameter) {
      case 'uri':
      case 'registrarServer':
      case 'mediaHandlerFactory':
        this.logger.log('· ' + parameter + ': ' + settings[parameter]);
        break;
      case 'password':
        this.logger.log('· ' + parameter + ': ' + 'NOT SHOWN');
        break;
      default:
        this.logger.log('· ' + parameter + ': ' + JSON.stringify(settings[parameter]));
    }
  }

  return;
};

/**
 * Configuration Object skeleton.
 * @private
 */
UA.configuration_skeleton = (function() {
  var idx,  parameter,
    skeleton = {},
    parameters = [
      // Internal parameters
      "sipjsId",
      "hostportParams",

      // Optional user configurable parameters
      "uri",
      "wsServers",
      "authorizationUser",
      "connectionRecoveryMaxInterval",
      "connectionRecoveryMinInterval",
      "displayName",
      "hackViaTcp", // false.
      "hackIpInContact", //false
      "hackWssInTransport", //false
      "instanceId",
      "noAnswerTimeout", // 30 seconds.
      "password",
      "registerExpires", // 600 seconds.
      "registrarServer",
      "reliable",
      "rel100",
      "userAgentString", //SIP.C.USER_AGENT
      "autostart",
      "stunServers",
      "traceSip",
      "turnServers",
      "usePreloadedRoute",
      "wsServerMaxReconnection",
      "wsServerReconnectionTimeout",
      "mediaHandlerFactory",
      "media",
      "mediaConstraints",

      // Post-configuration generated parameters
      "via_core_value",
      "viaHost"
    ];

  for(idx in parameters) {
    parameter = parameters[idx];
    skeleton[parameter] = {
      value: '',
      writable: false,
      configurable: false
    };
  }

  skeleton['register'] = {
    value: '',
    writable: true,
    configurable: false
  };

  return skeleton;
}());

/**
 * Configuration checker.
 * @private
 * @return {Boolean}
 */
UA.configuration_check = {
  mandatory: {
  },

  optional: {

    uri: function(uri) {
      var parsed;

      if (!(/^sip:/i).test(uri)) {
        uri = SIP.C.SIP + ':' + uri;
      }
      parsed = SIP.URI.parse(uri);

      if(!parsed) {
        return;
      } else if(!parsed.user) {
        return;
      } else {
        return parsed;
      }
    },

    //Note: this function used to call 'this.logger.error' but calling 'this' with anything here is invalid
    wsServers: function(wsServers) {
      var idx, length, url;

      /* Allow defining wsServers parameter as:
       *  String: "host"
       *  Array of Strings: ["host1", "host2"]
       *  Array of Objects: [{ws_uri:"host1", weight:1}, {ws_uri:"host2", weight:0}]
       *  Array of Objects and Strings: [{ws_uri:"host1"}, "host2"]
       */
      if (typeof wsServers === 'string') {
        wsServers = [{ws_uri: wsServers}];
      } else if (wsServers instanceof Array) {
        length = wsServers.length;
        for (idx = 0; idx < length; idx++) {
          if (typeof wsServers[idx] === 'string'){
            wsServers[idx] = {ws_uri: wsServers[idx]};
          }
        }
      } else {
        return;
      }

      if (wsServers.length === 0) {
        return false;
      }

      length = wsServers.length;
      for (idx = 0; idx < length; idx++) {
        if (!wsServers[idx].ws_uri) {
          return;
        }
        if (wsServers[idx].weight && !Number(wsServers[idx].weight)) {
          return;
        }

        url = SIP.Grammar.parse(wsServers[idx].ws_uri, 'absoluteURI');

        if(url === -1) {
          return;
        } else if(url.scheme !== 'wss' && url.scheme !== 'ws') {
          return;
        } else {
          wsServers[idx].sip_uri = '<sip:' + url.host + (url.port ? ':' + url.port : '') + ';transport=ws;lr>';

          if (!wsServers[idx].weight) {
            wsServers[idx].weight = 0;
          }

          wsServers[idx].status = 0;
          wsServers[idx].scheme = url.scheme.toUpperCase();
        }
      }
      return wsServers;
    },

    authorizationUser: function(authorizationUser) {
      if(SIP.Grammar.parse('"'+ authorizationUser +'"', 'quoted_string') === -1) {
        return;
      } else {
        return authorizationUser;
      }
    },

    connectionRecoveryMaxInterval: function(connectionRecoveryMaxInterval) {
      var value;
      if(SIP.Utils.isDecimal(connectionRecoveryMaxInterval)) {
        value = Number(connectionRecoveryMaxInterval);
        if(value > 0) {
          return value;
        }
      }
    },

    connectionRecoveryMinInterval: function(connectionRecoveryMinInterval) {
      var value;
      if(SIP.Utils.isDecimal(connectionRecoveryMinInterval)) {
        value = Number(connectionRecoveryMinInterval);
        if(value > 0) {
          return value;
        }
      }
    },

    displayName: function(displayName) {
      if(SIP.Grammar.parse('"' + displayName + '"', 'displayName') === -1) {
        return;
      } else {
        return displayName;
      }
    },

    hackViaTcp: function(hackViaTcp) {
      if (typeof hackViaTcp === 'boolean') {
        return hackViaTcp;
      }
    },

    hackIpInContact: function(hackIpInContact) {
      if (typeof hackIpInContact === 'boolean') {
        return hackIpInContact;
      }
    },

    hackWssInTransport: function(hackWssInTransport) {
      if (typeof hackWssInTransport === 'boolean') {
        return hackWssInTransport;
      }
    },

    instanceId: function(instanceId) {
      if(typeof instanceId !== 'string') {
        return;
      }

      if ((/^uuid:/i.test(instanceId))) {
        instanceId = instanceId.substr(5);
      }

      if(SIP.Grammar.parse(instanceId, 'uuid') === -1) {
        return;
      } else {
        return instanceId;
      }
    },

    noAnswerTimeout: function(noAnswerTimeout) {
      var value;
      if (SIP.Utils.isDecimal(noAnswerTimeout)) {
        value = Number(noAnswerTimeout);
        if (value > 0) {
          return value;
        }
      }
    },

    password: function(password) {
      return String(password);
    },

    rel100: function(rel100) {
      if(rel100 === SIP.C.supported.REQUIRED) {
        return SIP.C.supported.REQUIRED;
      } else if (rel100 === SIP.C.supported.SUPPORTED) {
        return SIP.C.supported.SUPPORTED;
      } else  {
        return SIP.C.supported.UNSUPPORTED;
      }
    },

    register: function(register) {
      if (typeof register === 'boolean') {
        return register;
      }
    },

    registerExpires: function(registerExpires) {
      var value;
      if (SIP.Utils.isDecimal(registerExpires)) {
        value = Number(registerExpires);
        if (value > 0) {
          return value;
        }
      }
    },

    registrarServer: function(registrarServer) {
      var parsed;

      if(typeof registrarServer !== 'string') {
        return;
      }

      if (!/^sip:/i.test(registrarServer)) {
        registrarServer = SIP.C.SIP + ':' + registrarServer;
      }
      parsed = SIP.URI.parse(registrarServer);

      if(!parsed) {
        return;
      } else if(parsed.user) {
        return;
      } else {
        return parsed;
      }
    },

    stunServers: function(stunServers) {
      var idx, length, stun_server;

      if (typeof stunServers === 'string') {
        stunServers = [stunServers];
      } else if (!(stunServers instanceof Array)) {
        return;
      }

      length = stunServers.length;
      for (idx = 0; idx < length; idx++) {
        stun_server = stunServers[idx];
        if (!(/^stuns?:/.test(stun_server))) {
          stun_server = 'stun:' + stun_server;
        }

        if(SIP.Grammar.parse(stun_server, 'stun_URI') === -1) {
          return;
        } else {
          stunServers[idx] = stun_server;
        }
      }
      return stunServers;
    },

    traceSip: function(traceSip) {
      if (typeof traceSip === 'boolean') {
        return traceSip;
      }
    },

    turnServers: function(turnServers) {
      var idx, length, turn_server, url;

      if (turnServers instanceof Array) {
        // Do nothing
      } else {
        turnServers = [turnServers];
      }

      length = turnServers.length;
      for (idx = 0; idx < length; idx++) {
        turn_server = turnServers[idx];
        //Backwards compatibility: Allow defining the turn_server url with the 'server' property.
        if (turn_server.server) {
          turn_server.urls = [turn_server.server];
        }

        if (!turn_server.urls || !turn_server.username || !turn_server.password) {
          return;
        }

        if (!(turn_server.urls instanceof Array)) {
          turn_server.urls = [turn_server.urls];
        }

        length = turn_server.urls.length;
        for (idx = 0; idx < length; idx++) {
          url = turn_server.urls[idx];

          if (!(/^turns?:/.test(url))) {
            url = 'turn:' + url;
          }

          if(SIP.Grammar.parse(url, 'turn_URI') === -1) {
            return;
          }
        }
      }
      return turnServers;
    },

    userAgentString: function(userAgentString) {
      if (typeof userAgentString === 'string') {
        return userAgentString;
      }
    },

    usePreloadedRoute: function(usePreloadedRoute) {
      if (typeof usePreloadedRoute === 'boolean') {
        return usePreloadedRoute;
      }
    },

    wsServerMaxReconnection: function(wsServerMaxReconnection) {
      var value;
      if (SIP.Utils.isDecimal(wsServerMaxReconnection)) {
        value = Number(wsServerMaxReconnection);
        if (value > 0) {
          return value;
        }
      }
    },

    wsServerReconnectionTimeout: function(wsServerReconnectionTimeout) {
      var value;
      if (SIP.Utils.isDecimal(wsServerReconnectionTimeout)) {
        value = Number(wsServerReconnectionTimeout);
        if (value > 0) {
          return value;
        }
      }
    },

    autostart: function(autostart) {
      if (typeof autostart === 'boolean') {
        return autostart;
      }
    },

    mediaHandlerFactory: function(mediaHandlerFactory) {
      if (mediaHandlerFactory instanceof Function) {
        return mediaHandlerFactory;
      }
    }
  }
};

UA.C = C;
SIP.UA = UA;
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],29:[function(_dereq_,module,exports){
/**
 * @fileoverview SIP URI
 */

/**
 * @augments SIP
 * @class Class creating a SIP URI.
 *
 * @param {String} [scheme]
 * @param {String} [user]
 * @param {String} host
 * @param {String} [port]
 * @param {Object} [parameters]
 * @param {Object} [headers]
 *
 */
module.exports = function (SIP) {
var URI;

URI = function(scheme, user, host, port, parameters, headers) {
  var param, header;

  // Checks
  if(!host) {
    throw new TypeError('missing or invalid "host" parameter');
  }

  // Initialize parameters
  scheme = scheme || SIP.C.SIP;
  this.parameters = {};
  this.headers = {};

  for (param in parameters) {
    this.setParam(param, parameters[param]);
  }

  for (header in headers) {
    this.setHeader(header, headers[header]);
  }

  Object.defineProperties(this, {
    scheme: {
      get: function(){ return scheme; },
      set: function(value){
        scheme = value.toLowerCase();
      }
    },

    user: {
      get: function(){ return user; },
      set: function(value){
        user = value;
      }
    },

    host: {
      get: function(){ return host; },
      set: function(value){
        host = value.toLowerCase();
      }
    },

    port: {
      get: function(){ return port; },
      set: function(value){
        port = value === 0 ? value : (parseInt(value,10) || null);
      }
    }
  });
};
URI.prototype = {
  setParam: function(key, value) {
    if(key) {
      this.parameters[key.toLowerCase()] = (typeof value === 'undefined' || value === null) ? null : value.toString().toLowerCase();
    }
  },

  getParam: function(key) {
    if(key) {
      return this.parameters[key.toLowerCase()];
    }
  },

  hasParam: function(key) {
    if(key) {
      return (this.parameters.hasOwnProperty(key.toLowerCase()) && true) || false;
    }
  },

  deleteParam: function(parameter) {
    var value;
    parameter = parameter.toLowerCase();
    if (this.parameters.hasOwnProperty(parameter)) {
      value = this.parameters[parameter];
      delete this.parameters[parameter];
      return value;
    }
  },

  clearParams: function() {
    this.parameters = {};
  },

  setHeader: function(name, value) {
    this.headers[SIP.Utils.headerize(name)] = (value instanceof Array) ? value : [value];
  },

  getHeader: function(name) {
    if(name) {
      return this.headers[SIP.Utils.headerize(name)];
    }
  },

  hasHeader: function(name) {
    if(name) {
      return (this.headers.hasOwnProperty(SIP.Utils.headerize(name)) && true) || false;
    }
  },

  deleteHeader: function(header) {
    var value;
    header = SIP.Utils.headerize(header);
    if(this.headers.hasOwnProperty(header)) {
      value = this.headers[header];
      delete this.headers[header];
      return value;
    }
  },

  clearHeaders: function() {
    this.headers = {};
  },

  clone: function() {
    return new URI(
      this.scheme,
      this.user,
      this.host,
      this.port,
      JSON.parse(JSON.stringify(this.parameters)),
      JSON.parse(JSON.stringify(this.headers)));
  },

  toString: function(){
    var header, parameter, idx, uri,
      headers = [];

    uri  = this.scheme + ':';
    // add slashes if it's not a sip(s) URI
    if (!this.scheme.match("^sips?$")) {
      uri += "//";
    }
    if (this.user) {
      uri += SIP.Utils.escapeUser(this.user) + '@';
    }
    uri += this.host;
    if (this.port || this.port === 0) {
      uri += ':' + this.port;
    }

    for (parameter in this.parameters) {
      uri += ';' + parameter;

      if (this.parameters[parameter] !== null) {
        uri += '='+ this.parameters[parameter];
      }
    }

    for(header in this.headers) {
      for(idx in this.headers[header]) {
        headers.push(header + '=' + this.headers[header][idx]);
      }
    }

    if (headers.length > 0) {
      uri += '?' + headers.join('&');
    }

    return uri;
  }
};


/**
  * Parse the given string and returns a SIP.URI instance or undefined if
  * it is an invalid URI.
  * @public
  * @param {String} uri
  */
URI.parse = function(uri) {
  uri = SIP.Grammar.parse(uri,'SIP_URI');

  if (uri !== -1) {
    return uri;
  } else {
    return undefined;
  }
};

SIP.URI = URI;
};

},{}],30:[function(_dereq_,module,exports){
(function (global){
/**
 * @fileoverview Utils
 */

module.exports = function (SIP) {
var Utils;

Utils= {

  augment: function (object, constructor, args, override) {
    var idx, proto;

    // Add public properties from constructor's prototype onto object
    proto = constructor.prototype;
    for (idx in proto) {
      if (override || object[idx] === undefined) {
        object[idx] = proto[idx];
      }
    }

    // Construct the object as though it were just created by constructor
    constructor.apply(object, args);
  },

  optionsOverride: function (options, winner, loser, isDeprecated, logger, defaultValue) {
    if (isDeprecated && options[loser]) {
      logger.warn(loser + ' is deprecated, please use ' + winner + ' instead');
    }

    if (options[winner] && options[loser]) {
      logger.warn(winner + ' overriding ' + loser);
    }

    options[winner] = options[winner] || options[loser] || defaultValue;
  },

  desugarSessionOptions: function desugarSessionOptions (options) {
    if (global.HTMLMediaElement && options instanceof global.HTMLMediaElement) {
      options = {
        media: {
          constraints: {
            audio: true,
            video: options.tagName === 'VIDEO'
          },
          render: {
            remote: {
              video: options
            }
          }
        }
      };
    }
    return options;
  },

  str_utf8_length: function(string) {
    return encodeURIComponent(string).replace(/%[A-F\d]{2}/g, 'U').length;
  },

  getPrefixedProperty: function (object, name) {
    if (object == null) {
      return;
    }
    var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    var prefixedNames = [name, 'webkit' + capitalizedName, 'moz' + capitalizedName];
    for (var i in prefixedNames) {
      var property = object[prefixedNames[i]];
      if (property) {
        return property;
      }
    }
  },

  generateFakeSDP: function(body) {
    if (!body) {
      return;
    }

    var start = body.indexOf('o=');
    var end = body.indexOf('\r\n', start);

    return 'v=0\r\n' + body.slice(start, end) + '\r\ns=-\r\nt=0 0\r\nc=IN IP4 0.0.0.0';
  },

  isFunction: function(fn) {
    if (fn !== undefined) {
      return Object.prototype.toString.call(fn) === '[object Function]';
    } else {
      return false;
    }
  },

  isDecimal: function (num) {
    return !isNaN(num) && (parseFloat(num) === parseInt(num,10));
  },

  createRandomToken: function(size, base) {
    var i, r,
      token = '';

    base = base || 32;

    for( i=0; i < size; i++ ) {
      r = Math.random() * base|0;
      token += r.toString(base);
    }

    return token;
  },

  newTag: function() {
    return SIP.Utils.createRandomToken(SIP.UA.C.TAG_LENGTH);
  },

  // http://stackoverflow.com/users/109538/broofa
  newUUID: function() {
    var UUID =  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });

    return UUID;
  },

  hostType: function(host) {
    if (!host) {
      return;
    } else {
      host = SIP.Grammar.parse(host,'host');
      if (host !== -1) {
        return host.host_type;
      }
    }
  },

  /**
  * Normalize SIP URI.
  * NOTE: It does not allow a SIP URI without username.
  * Accepts 'sip', 'sips' and 'tel' URIs and convert them into 'sip'.
  * Detects the domain part (if given) and properly hex-escapes the user portion.
  * If the user portion has only 'tel' number symbols the user portion is clean of 'tel' visual separators.
  * @private
  * @param {String} target
  * @param {String} [domain]
  */
  normalizeTarget: function(target, domain) {
    var uri, target_array, target_user, target_domain;

    // If no target is given then raise an error.
    if (!target) {
      return;
    // If a SIP.URI instance is given then return it.
    } else if (target instanceof SIP.URI) {
      return target;

    // If a string is given split it by '@':
    // - Last fragment is the desired domain.
    // - Otherwise append the given domain argument.
    } else if (typeof target === 'string') {
      target_array = target.split('@');

      switch(target_array.length) {
        case 1:
          if (!domain) {
            return;
          }
          target_user = target;
          target_domain = domain;
          break;
        case 2:
          target_user = target_array[0];
          target_domain = target_array[1];
          break;
        default:
          target_user = target_array.slice(0, target_array.length-1).join('@');
          target_domain = target_array[target_array.length-1];
      }

      // Remove the URI scheme (if present).
      target_user = target_user.replace(/^(sips?|tel):/i, '');

      // Remove 'tel' visual separators if the user portion just contains 'tel' number symbols.
      if (/^[\-\.\(\)]*\+?[0-9\-\.\(\)]+$/.test(target_user)) {
        target_user = target_user.replace(/[\-\.\(\)]/g, '');
      }

      // Build the complete SIP URI.
      target = SIP.C.SIP + ':' + SIP.Utils.escapeUser(target_user) + '@' + target_domain;

      // Finally parse the resulting URI.
      if (uri = SIP.URI.parse(target)) {
        return uri;
      } else {
        return;
      }
    } else {
      return;
    }
  },

  /**
  * Hex-escape a SIP URI user.
  * @private
  * @param {String} user
  */
  escapeUser: function(user) {
    // Don't hex-escape ':' (%3A), '+' (%2B), '?' (%3F"), '/' (%2F).
    return encodeURIComponent(decodeURIComponent(user)).replace(/%3A/ig, ':').replace(/%2B/ig, '+').replace(/%3F/ig, '?').replace(/%2F/ig, '/');
  },

  headerize: function(string) {
    var exceptions = {
      'Call-Id': 'Call-ID',
      'Cseq': 'CSeq',
      'Rack': 'RAck',
      'Rseq': 'RSeq',
      'Www-Authenticate': 'WWW-Authenticate'
      },
      name = string.toLowerCase().replace(/_/g,'-').split('-'),
      hname = '',
      parts = name.length, part;

    for (part = 0; part < parts; part++) {
      if (part !== 0) {
        hname +='-';
      }
      hname += name[part].charAt(0).toUpperCase()+name[part].substring(1);
    }
    if (exceptions[hname]) {
      hname = exceptions[hname];
    }
    return hname;
  },

  sipErrorCause: function(status_code) {
    var cause;

    for (cause in SIP.C.SIP_ERROR_CAUSES) {
      if (SIP.C.SIP_ERROR_CAUSES[cause].indexOf(status_code) !== -1) {
        return SIP.C.causes[cause];
      }
    }

    return SIP.C.causes.SIP_FAILURE_CODE;
  },

  /**
  * Generate a random Test-Net IP (http://tools.ietf.org/html/rfc5735)
  * @private
  */
  getRandomTestNetIP: function() {
    function getOctet(from,to) {
      return Math.floor(Math.random()*(to-from+1)+from);
    }
    return '192.0.2.' + getOctet(1, 254);
  },

  getAllowedMethods: function(ua) {
    var event,
      allowed = SIP.UA.C.ALLOWED_METHODS.toString();

    for (event in SIP.UA.C.EVENT_METHODS) {
      if (ua.checkListener(event)) {
        allowed += ','+ SIP.UA.C.EVENT_METHODS[event];
      }
    }

    return allowed;
  },

  // MD5 (Message-Digest Algorithm) http://www.webtoolkit.info
  calculateMD5: function(string) {
    function RotateLeft(lValue, iShiftBits) {
      return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
    }

    function AddUnsigned(lX,lY) {
      var lX4,lY4,lX8,lY8,lResult;
      lX8 = (lX & 0x80000000);
      lY8 = (lY & 0x80000000);
      lX4 = (lX & 0x40000000);
      lY4 = (lY & 0x40000000);
      lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
      if (lX4 & lY4) {
        return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
      }
      if (lX4 | lY4) {
        if (lResult & 0x40000000) {
          return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
        } else {
          return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
        }
      } else {
        return (lResult ^ lX8 ^ lY8);
      }
    }

    function F(x,y,z) {
      return (x & y) | ((~x) & z);
    }

    function G(x,y,z) {
      return (x & z) | (y & (~z));
    }

    function H(x,y,z) {
      return (x ^ y ^ z);
    }

    function I(x,y,z) {
      return (y ^ (x | (~z)));
    }

    function FF(a,b,c,d,x,s,ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
      return AddUnsigned(RotateLeft(a, s), b);
    }

    function GG(a,b,c,d,x,s,ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
      return AddUnsigned(RotateLeft(a, s), b);
    }

    function HH(a,b,c,d,x,s,ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
      return AddUnsigned(RotateLeft(a, s), b);
    }

    function II(a,b,c,d,x,s,ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
      return AddUnsigned(RotateLeft(a, s), b);
    }

    function ConvertToWordArray(string) {
      var lWordCount;
      var lMessageLength = string.length;
      var lNumberOfWords_temp1=lMessageLength + 8;
      var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
      var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
      var lWordArray=Array(lNumberOfWords-1);
      var lBytePosition = 0;
      var lByteCount = 0;
      while ( lByteCount < lMessageLength ) {
        lWordCount = (lByteCount-(lByteCount % 4))/4;
        lBytePosition = (lByteCount % 4)*8;
        lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
        lByteCount++;
      }
      lWordCount = (lByteCount-(lByteCount % 4))/4;
      lBytePosition = (lByteCount % 4)*8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
      lWordArray[lNumberOfWords-2] = lMessageLength<<3;
      lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
      return lWordArray;
    }

    function WordToHex(lValue) {
      var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
      for (lCount = 0;lCount<=3;lCount++) {
        lByte = (lValue>>>(lCount*8)) & 255;
        WordToHexValue_temp = "0" + lByte.toString(16);
        WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
      }
      return WordToHexValue;
    }

    function Utf8Encode(string) {
      string = string.replace(/\r\n/g,"\n");
      var utftext = "";

      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }
      }
      return utftext;
    }

    var x=[];
    var k,AA,BB,CC,DD,a,b,c,d;
    var S11=7, S12=12, S13=17, S14=22;
    var S21=5, S22=9 , S23=14, S24=20;
    var S31=4, S32=11, S33=16, S34=23;
    var S41=6, S42=10, S43=15, S44=21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

    for (k=0;k<x.length;k+=16) {
      AA=a; BB=b; CC=c; DD=d;
      a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
      d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
      c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
      b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
      a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
      d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
      c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
      b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
      a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
      d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
      c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
      b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
      a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
      d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
      c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
      b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
      a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
      d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
      c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
      b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
      a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
      d=GG(d,a,b,c,x[k+10],S22,0x2441453);
      c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
      b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
      a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
      d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
      c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
      b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
      a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
      d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
      c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
      b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
      a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
      d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
      c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
      b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
      a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
      d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
      c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
      b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
      a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
      d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
      c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
      b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
      a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
      d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
      c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
      b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
      a=II(a,b,c,d,x[k+0], S41,0xF4292244);
      d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
      c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
      b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
      a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
      d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
      c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
      b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
      a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
      d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
      c=II(c,d,a,b,x[k+6], S43,0xA3014314);
      b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
      a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
      d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
      c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
      b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
      a=AddUnsigned(a,AA);
      b=AddUnsigned(b,BB);
      c=AddUnsigned(c,CC);
      d=AddUnsigned(d,DD);
    }

    var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

    return temp.toLowerCase();
  }
};

SIP.Utils = Utils;
};

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],31:[function(_dereq_,module,exports){
/**
 * @fileoverview WebRTC
 */

module.exports = function (Utils, window, MediaHandler, MediaStreamManager) {
var WebRTC;

WebRTC = {};

WebRTC.MediaHandler = MediaHandler;
WebRTC.MediaStreamManager = MediaStreamManager;

var _isSupported;

WebRTC.isSupported = function () {
  if (_isSupported !== undefined) {
    return _isSupported;
  }

  WebRTC.MediaStream = Utils.getPrefixedProperty(window, 'MediaStream');
  WebRTC.getUserMedia = Utils.getPrefixedProperty(window.navigator, 'getUserMedia');
  WebRTC.RTCPeerConnection = Utils.getPrefixedProperty(window, 'RTCPeerConnection');
  WebRTC.RTCSessionDescription = Utils.getPrefixedProperty(window, 'RTCSessionDescription');

  if (WebRTC.getUserMedia && WebRTC.RTCPeerConnection && WebRTC.RTCSessionDescription) {
    WebRTC.getUserMedia = WebRTC.getUserMedia.bind(window.navigator);
    _isSupported = true;
  }
  else {
    _isSupported = false;
  }
  return _isSupported;
};

return WebRTC;
};

},{}],32:[function(_dereq_,module,exports){
/**
 * @fileoverview MediaHandler
 */

/* MediaHandler
 * @class PeerConnection helper Class.
 * @param {SIP.Session} session
 * @param {Object} [options]
 * @param {SIP.WebRTC.MediaStreamManager} [options.mediaStreamManager]
 *        The MediaStreamManager to acquire/release streams from/to.
 *        If not provided, a default MediaStreamManager will be used.
 */
module.exports = function (SIP) {

var MediaHandler = function(session, options) {
  var events = [
    'userMediaRequest',
    'userMedia',
    'userMediaFailed',
    'iceGathering',
    'iceCandidate',
    'iceComplete',
    'iceFailed',
    'getDescription',
    'setDescription',
    'dataChannel',
    'addStream'
  ];
  options = options || {};

  this.logger = session.ua.getLogger('sip.invitecontext.mediahandler', session.id);
  this.session = session;
  this.localMedia = null;
  this.ready = true;
  this.mediaStreamManager = options.mediaStreamManager || new SIP.WebRTC.MediaStreamManager(this.logger);
  this.audioMuted = false;
  this.videoMuted = false;

  // old init() from here on
  var idx, length, server,
    self = this,
    servers = [],
    stunServers = options.stunServers || null,
    turnServers = options.turnServers || null,
    config = this.session.ua.configuration;
  this.RTCConstraints = options.RTCConstraints || {};

  if (!stunServers) {
    stunServers = config.stunServers;
  }

  if(!turnServers) {
    turnServers = config.turnServers;
  }

  /* Change 'url' to 'urls' whenever this issue is solved:
   * https://code.google.com/p/webrtc/issues/detail?id=2096
   */
  [].concat(stunServers).forEach(function (server) {
    servers.push({'url': server});
  });

  length = turnServers.length;
  for (idx = 0; idx < length; idx++) {
    server = turnServers[idx];
    servers.push({
      'url': server.urls,
      'username': server.username,
      'credential': server.password
    });
  }

  this.peerConnection = new SIP.WebRTC.RTCPeerConnection({'iceServers': servers}, this.RTCConstraints);

  this.peerConnection.onaddstream = function(e) {
    self.logger.log('stream added: '+ e.stream.id);
    self.render();
    self.emit('addStream', e);
  };

  this.peerConnection.onremovestream = function(e) {
    self.logger.log('stream removed: '+ e.stream.id);
  };

  this.peerConnection.onicecandidate = function(e) {
    self.emit('iceCandidate', e);
    if (e.candidate) {
      self.logger.log('ICE candidate received: '+ (e.candidate.candidate === null ? null : e.candidate.candidate.trim()));
    } else if (self.onIceCompleted !== undefined) {
      self.onIceCompleted(this);
    } else {
      self.callOnIceCompleted = true;
    }
  };

  this.peerConnection.onicegatheringstatechange = function () {
    self.logger.log('RTCIceGatheringState changed: ' + this.iceGatheringState);
    if (this.iceGatheringState === 'gathering') {
      self.emit('iceGathering', this);
    }
    if (this.iceGatheringState === 'complete') {
      if (self.onIceCompleted !== undefined) {
        self.onIceCompleted(this);
      } else {
        self.callOnIceCompleted = true;
      }
    }
  };

  this.peerConnection.oniceconnectionstatechange = function() {  //need e for commented out case
    self.logger.log('ICE connection state changed to "'+ this.iceConnectionState +'"');

    if (this.iceConnectionState === 'failed') {
      self.emit('iceFailed', this);
    }

    //Bria state changes are always connected -> disconnected -> connected on accept, so session gets terminated
    //normal calls switch from failed to connected in some cases, so checking for failed and terminated
    /*if (this.iceConnectionState === 'failed') {
      self.session.terminate({
        cause: SIP.C.causes.RTP_TIMEOUT,
        status_code: 200,
        reason_phrase: SIP.C.causes.RTP_TIMEOUT
      });
    } else if (e.currentTarget.iceGatheringState === 'complete' && this.iceConnectionState !== 'closed') {
      self.onIceCompleted(this);
    }*/
  };

  this.peerConnection.onstatechange = function() {
    self.logger.log('PeerConnection state changed to "'+ this.readyState +'"');
  };

  this.initEvents(events);

  function selfEmit(mh, event) {
    if (mh.mediaStreamManager.on &&
        mh.mediaStreamManager.checkEvent &&
        mh.mediaStreamManager.checkEvent(event)) {
      mh.mediaStreamManager.on(event, function () {
        mh.emit.apply(mh, [event].concat(Array.prototype.slice.call(arguments)));
      });
    }
  }

  selfEmit(this, 'userMediaRequest');
  selfEmit(this, 'userMedia');
  selfEmit(this, 'userMediaFailed');
};

MediaHandler.defaultFactory = function defaultFactory (session, options) {
  return new MediaHandler(session, options);
};
MediaHandler.defaultFactory.isSupported = function () {
  return SIP.WebRTC.isSupported();
};

MediaHandler.prototype = Object.create(SIP.MediaHandler.prototype, {
// Functions the session can use
  isReady: {writable: true, value: function isReady () {
    return this.ready;
  }},

  close: {writable: true, value: function close () {
    this.logger.log('closing PeerConnection');
    // have to check signalingState since this.close() gets called multiple times
    // TODO figure out why that happens
    if(this.peerConnection && this.peerConnection.signalingState !== 'closed') {
      this.peerConnection.close();

      if(this.localMedia) {
        this.mediaStreamManager.release(this.localMedia);
      }
    }
  }},

  /**
   * @param {Function} onSuccess
   * @param {Function} onFailure
   * @param {SIP.WebRTC.MediaStream | (getUserMedia constraints)} [mediaHint]
   *        the MediaStream (or the constraints describing it) to be used for the session
   */
  getDescription: {writable: true, value: function getDescription (onSuccess, onFailure, mediaHint) {
    var self = this;
    mediaHint = mediaHint || {};
    if (mediaHint.dataChannel === true) {
      mediaHint.dataChannel = {};
    }
    this.mediaHint = mediaHint;

    /*
     * 1. acquire stream (skip if MediaStream passed in)
     * 2. addStream
     * 3. createOffer/createAnswer
     * 4. call onSuccess()
     */

    /* Last functions first, to quiet JSLint */
    function streamAdditionSucceeded() {
      if (self.hasOffer('remote')) {
        self.peerConnection.ondatachannel = function (evt) {
          self.dataChannel = evt.channel;
          self.emit('dataChannel', self.dataChannel);
        };
      } else if (mediaHint.dataChannel &&
                 self.peerConnection.createDataChannel) {
        self.dataChannel = self.peerConnection.createDataChannel(
          'sipjs',
          mediaHint.dataChannel
        );
        self.emit('dataChannel', self.dataChannel);
      }

      self.render();
      self.createOfferOrAnswer(onSuccess, onFailure, self.RTCConstraints);
    }

    function acquireSucceeded(stream) {
      self.logger.log('acquired local media stream');
      self.localMedia = stream;
      self.session.connecting();
      self.addStream(
        stream,
        streamAdditionSucceeded,
        onFailure
      );
    }

    if (self.localMedia) {
      self.logger.log('already have local media');
      streamAdditionSucceeded();
      return;
    }

    self.logger.log('acquiring local media');
    self.mediaStreamManager.acquire(
      acquireSucceeded,
      function acquireFailed(err) {
        self.logger.error('unable to acquire stream');
        self.logger.error(err);
        self.session.connecting();
        onFailure(err);
      },
      mediaHint
    );
  }},

  /**
  * Message reception.
  * @param {String} type
  * @param {String} sdp
  * @param {Function} onSuccess
  * @param {Function} onFailure
  */
  setDescription: {writable: true, value: function setDescription (sdp, onSuccess, onFailure) {
    var rawDescription = {
      type: this.hasOffer('local') ? 'answer' : 'offer',
      sdp: sdp
    };

    this.emit('setDescription', rawDescription);

    var description = new SIP.WebRTC.RTCSessionDescription(rawDescription);
    this.peerConnection.setRemoteDescription(description, onSuccess, onFailure);
  }},

// Functions the session can use, but only because it's convenient for the application
  isMuted: {writable: true, value: function isMuted () {
    return {
      audio: this.audioMuted,
      video: this.videoMuted
    };
  }},

  mute: {writable: true, value: function mute (options) {
    if (this.getLocalStreams().length === 0) {
      return;
    }

    options = options || {
      audio: this.getLocalStreams()[0].getAudioTracks().length > 0,
      video: this.getLocalStreams()[0].getVideoTracks().length > 0
    };

    var audioMuted = false,
        videoMuted = false;

    if (options.audio && !this.audioMuted) {
      audioMuted = true;
      this.audioMuted = true;
      this.toggleMuteAudio(true);
    }

    if (options.video && !this.videoMuted) {
      videoMuted = true;
      this.videoMuted = true;
      this.toggleMuteVideo(true);
    }

    //REVISIT
    if (audioMuted || videoMuted) {
      return {
        audio: audioMuted,
        video: videoMuted
      };
      /*this.session.onmute({
        audio: audioMuted,
        video: videoMuted
      });*/
    }
  }},

  unmute: {writable: true, value: function unmute (options) {
    if (this.getLocalStreams().length === 0) {
      return;
    }

    options = options || {
      audio: this.getLocalStreams()[0].getAudioTracks().length > 0,
      video: this.getLocalStreams()[0].getVideoTracks().length > 0
    };

    var audioUnMuted = false,
        videoUnMuted = false;

    if (options.audio && this.audioMuted) {
      audioUnMuted = true;
      this.audioMuted = false;
      this.toggleMuteAudio(false);
    }

    if (options.video && this.videoMuted) {
      videoUnMuted = true;
      this.videoMuted = false;
      this.toggleMuteVideo(false);
    }

    //REVISIT
    if (audioUnMuted || videoUnMuted) {
      return {
        audio: audioUnMuted,
        video: videoUnMuted
      };
      /*this.session.onunmute({
        audio: audioUnMuted,
        video: videoUnMuted
      });*/
    }
  }},

  hold: {writable: true, value: function hold () {
    this.toggleMuteAudio(true);
    this.toggleMuteVideo(true);
  }},

  unhold: {writable: true, value: function unhold () {
    if (!this.audioMuted) {
      this.toggleMuteAudio(false);
    }

    if (!this.videoMuted) {
      this.toggleMuteVideo(false);
    }
  }},

// Functions the application can use, but not the session
  getLocalStreams: {writable: true, value: function getLocalStreams () {
    var pc = this.peerConnection;
    if (pc && pc.signalingState === 'closed') {
      this.logger.warn('peerConnection is closed, getLocalStreams returning []');
      return [];
    }
    return (pc.getLocalStreams && pc.getLocalStreams()) ||
      pc.localStreams || [];
  }},

  getRemoteStreams: {writable: true, value: function getRemoteStreams () {
    var pc = this.peerConnection;
    if (pc && pc.signalingState === 'closed') {
      this.logger.warn('peerConnection is closed, getRemoteStreams returning []');
      return [];
    }
    return(pc.getRemoteStreams && pc.getRemoteStreams()) ||
      pc.remoteStreams || [];
  }},

  render: {writable: true, value: function render (renderHint) {
    renderHint = renderHint || (this.mediaHint && this.mediaHint.render);
    if (!renderHint) {
      return false;
    }
    var streamGetters = {
      local: 'getLocalStreams',
      remote: 'getRemoteStreams'
    };
    Object.keys(streamGetters).forEach(function (loc) {
      var streamGetter = streamGetters[loc];
      var streams = this[streamGetter]();
      if (streams.length) {
        SIP.WebRTC.MediaStreamManager.render(streams[0], renderHint[loc]);
      }
    }.bind(this));
  }},

// Internal functions
  hasOffer: {writable: true, value: function hasOffer (where) {
    var offerState = 'have-' + where + '-offer';
    return this.peerConnection.signalingState === offerState;
    // TODO consider signalingStates with 'pranswer'?
  }},

  createOfferOrAnswer: {writable: true, value: function createOfferOrAnswer (onSuccess, onFailure, constraints) {
    var self = this;
    var methodName;

    function readySuccess () {
      var sdp = self.peerConnection.localDescription.sdp;

      sdp = SIP.Hacks.Chrome.needsExplicitlyInactiveSDP(sdp);
      sdp = SIP.Hacks.AllBrowsers.unmaskDtls(sdp);
      sdp = SIP.Hacks.Firefox.hasIncompatibleCLineWithSomeSIPEndpoints(sdp);

      var sdpWrapper = {
        type: methodName === 'createOffer' ? 'offer' : 'answer',
        sdp: sdp
      };

      self.emit('getDescription', sdpWrapper);

      self.ready = true;
      onSuccess(sdpWrapper.sdp);
    }

    function onSetLocalDescriptionSuccess() {
      if (self.peerConnection.iceGatheringState === 'complete' && (self.peerConnection.iceConnectionState === 'connected' || self.peerConnection.iceConnectionState === 'completed')) {
        readySuccess();
      } else {
        self.onIceCompleted = function(pc) {
          self.logger.log('ICE Gathering Completed');
          self.onIceCompleted = undefined;
          self.emit('iceComplete', pc);
          readySuccess();
        };
        if (self.callOnIceCompleted) {
          self.onIceCompleted();
        }
      }
    }

    function methodFailed (methodName, e) {
      self.logger.error('peerConnection.' + methodName + ' failed');
      self.logger.error(e);
      self.ready = true;
      onFailure(e);
    }

    self.ready = false;

    methodName = self.hasOffer('remote') ? 'createAnswer' : 'createOffer';

    self.peerConnection[methodName](
      function(sessionDescription){
        self.peerConnection.setLocalDescription(
          sessionDescription,
          onSetLocalDescriptionSuccess,
          methodFailed.bind(null, 'setLocalDescription')
        );
      },
      methodFailed.bind(null, methodName),
      constraints
    );
  }},

  addStream: {writable: true, value: function addStream (stream, onSuccess, onFailure) {
    try {
      this.peerConnection.addStream(stream);
    } catch(e) {
      this.logger.error('error adding stream');
      this.logger.error(e);
      onFailure(e);
      return;
    }

    onSuccess();
  }},

  toggleMuteHelper: {writable: true, value: function toggleMuteHelper (trackGetter, mute) {
    this.getLocalStreams().forEach(function (stream) {
      stream[trackGetter]().forEach(function (track) {
        track.enabled = !mute;
      });
    });
  }},

  toggleMuteAudio: {writable: true, value: function toggleMuteAudio (mute) {
    this.toggleMuteHelper('getAudioTracks', mute);
  }},

  toggleMuteVideo: {writable: true, value: function toggleMuteVideo (mute) {
    this.toggleMuteHelper('getVideoTracks', mute);
  }}
});

// Return since it will be assigned to a variable.
return MediaHandler;
};

},{}],33:[function(_dereq_,module,exports){
/**
 * @fileoverview MediaStreamManager
 */

/* MediaStreamManager
 * @class Manages the acquisition and release of MediaStreams.
 * @param {mediaHint} [defaultMediaHint] The mediaHint to use if none is provided to acquire()
 */
module.exports = function (SIP) {

// Default MediaStreamManager provides single-use streams created with getUserMedia
var MediaStreamManager = function MediaStreamManager (logger, defaultMediaHint) {
  if (!SIP.WebRTC.isSupported()) {
    throw new SIP.Exceptions.NotSupportedError('Media not supported');
  }

  var events = [
    'userMediaRequest',
    'userMedia',
    'userMediaFailed'
  ];
  this.mediaHint = defaultMediaHint || {
    constraints: {audio: true, video: true}
  };

  this.logger = logger;
  this.initEvents(events);

  // map of streams to acquisition manner:
  // true -> passed in as mediaHint.stream
  // false -> getUserMedia
  this.acquisitions = {};
};
MediaStreamManager.streamId = function (stream) {
  return stream.getAudioTracks().concat(stream.getVideoTracks())
    .map(function trackId (track) {
      return track.id;
    })
    .join('');
};

MediaStreamManager.render = function render (stream, elements) {
  if (!elements) {
    return false;
  }

  function attachAndPlay (element, stream) {
    (window.attachMediaStream || attachMediaStream)(element, stream);
    ensureMediaPlaying(element);
  }

  function attachMediaStream(element, stream) {
    if (typeof element.src !== 'undefined') {
      URL.revokeObjectURL(element.src);
      element.src = URL.createObjectURL(stream);
    } else if (typeof (element.srcObject || element.mozSrcObject) !== 'undefined') {
      element.srcObject = element.mozSrcObject = stream;
    } else {
      return false;
    }

    return true;
  }

  function ensureMediaPlaying (mediaElement) {
    var interval = 100;
    mediaElement.ensurePlayingIntervalId = SIP.Timers.setInterval(function () {
      if (mediaElement.paused) {
        mediaElement.play();
      }
      else {
        SIP.Timers.clearInterval(mediaElement.ensurePlayingIntervalId);
      }
    }, interval);
  }

  if (elements.video) {
//    if (elements.audio) {
      elements.video.volume = 0;
//    }
    attachAndPlay(elements.video, stream);
  }
  if (elements.audio) {
    attachAndPlay(elements.audio, stream);
  }
};

MediaStreamManager.prototype = Object.create(SIP.EventEmitter.prototype, {
  'acquire': {value: function acquire (onSuccess, onFailure, mediaHint) {
    mediaHint = Object.keys(mediaHint || {}).length ? mediaHint : this.mediaHint;

    var saveSuccess = function (onSuccess, stream, isHintStream) {
      var streamId = MediaStreamManager.streamId(stream);
      this.acquisitions[streamId] = !!isHintStream;
      onSuccess(stream);
    }.bind(this, onSuccess);

    if (mediaHint.stream) {
      saveSuccess(mediaHint.stream, true);
    } else {
      // Fallback to audio/video enabled if no mediaHint can be found.
      var constraints = mediaHint.constraints ||
        (this.mediaHint && this.mediaHint.constraints) ||
        {audio: true, video: true};

      /*
       * Make the call asynchronous, so that ICCs have a chance
       * to define callbacks to `userMediaRequest`
       */
      SIP.Timers.setTimeout(function () {
        this.emit('userMediaRequest', constraints);

        var emitThenCall = function (eventName, callback) {
          var callbackArgs = Array.prototype.slice.call(arguments, 2);
          // Emit with all of the arguments from the real callback.
          var newArgs = [eventName].concat(callbackArgs);

          this.emit.apply(this, newArgs);

          callback.apply(null, callbackArgs);
        }.bind(this);

        SIP.WebRTC.getUserMedia(
          constraints,
          emitThenCall.bind(this, 'userMedia', saveSuccess),
          emitThenCall.bind(this, 'userMediaFailed', onFailure)
        );
      }.bind(this), 0);
    }
  }},

  'release': {value: function release (stream) {
    var streamId = MediaStreamManager.streamId(stream);
    if (this.acquisitions[streamId] === false) {
      stream.stop();
    }
    delete this.acquisitions[streamId];
  }},
});

// Return since it will be assigned to a variable.
return MediaStreamManager;
};

},{}]},{},[18])
(18)
});

/**
 * @license almond 0.3.0 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that "directory" and not name of the baseName's
                //module. For instance, baseName of "one/two/three", maps to
                //"one/two/three.js", but we want the directory, "one/two" for
                //this normalization.
                baseParts = baseParts.slice(0, baseParts.length - 1);
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                name = baseParts.concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

var OmzSIP,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

OmzSIP = (function() {
  function OmzSIP(preferences) {
    this.withAgentProfile = __bind(this.withAgentProfile, this);
    this.withClientProfile = __bind(this.withClientProfile, this);
    this.userAgent = new SIP.UA({
      uri: preferences.username,
      wsServers: ["" + preferences.host],
      password: preferences.password,
      register: false,
      traceSip: true,
      log: {
        level: preferences.logLevel || 0
      }
    });
    if (preferences.registerHandlers) {
      this.addRegisterHandlers(preferences.registerHandlers);
    }
    return this;
  }

  OmzSIP.prototype.withClientProfile = function(preferences) {
    this.profile = new OmzSIP.prototype.Client(this.userAgent, preferences);
    return this;
  };

  OmzSIP.prototype.withAgentProfile = function(preferences) {
    this.profile = new OmzSIP.prototype.Agent(this.userAgent, preferences);
    return this;
  };

  OmzSIP.prototype.noop = function() {};

  return OmzSIP;

})();

OmzSIP.prototype.Interaction = (function() {
  function Interaction(hash) {
    this.hash = hash;
    if (this.hash === void 0) {
      this.hash = '000001111122222333333';
    }
  }

  return Interaction;

})();

OmzSIP.prototype.addRegisterHandlers = function(handlers) {
  this.userAgentRegistered = false;
  this.userAgent.on('registered', (function(_this) {
    return function() {
      if ((handlers.success != null) && !_this.userAgentRegistered) {
        handlers.success();
      }
      return _this.userAgentRegistered = true;
    };
  })(this));
  this.userAgent.on('registrationFailed', function(cause) {
    if (handlers.fail != null) {
      return handlers.fail(cause);
    }
  });
  this.userAgent.on('unregistered', function(cause) {
    if (handlers.fail != null) {
      return handlers.fail(cause);
    }
  });
  return this.userAgent.on('disconnected', function() {
    if (handlers.error != null) {
      return handlers.error();
    }
  });
};

OmzSIP.prototype.unregister = function() {
  return this.userAgent.unregister();
};

OmzSIP.prototype.register = function() {
  return this.userAgent.register();
};

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

OmzSIP.prototype.TextSession = (function() {
  function TextSession(target, clientInfo, profile, existentSession) {
    var invite;
    this.target = target;
    this.clientInfo = clientInfo;
    this.profile = profile;
    if (existentSession == null) {
      existentSession = null;
    }
    this._setSessionProperties = __bind(this._setSessionProperties, this);
    this._sendAck = __bind(this._sendAck, this);
    this._cancelText = __bind(this._cancelText, this);
    this.receiveByeOn = __bind(this.receiveByeOn, this);
    this.preferences = this.profile.preferences;
    this._buildContactWithOb();
    if (!existentSession) {
      invite = this.profile.userAgent.request('INVITE', this.target, this._buildInviteOptions());
      invite.on('failed', (function(_this) {
        return function(resp) {
          if (resp.status_code === 603) {
            return _this._setSessionPropertiesOn603Fail(resp, _this._buildInviteOptions());
          } else {
            return _this.profile.unavailable(resp);
          }
        };
      })(this));
    } else {
      this.invSession = existentSession;
      this.interaction = new OmzSIP.prototype.Interaction(existentSession.request.getHeader('X-Omnz-Interaction-Hash'));
      this._setSessionProperties(existentSession.request, true);
      this.invSession.on('cancel', this._cancelText);
    }
  }

  TextSession.prototype.sendMessage = function(message) {
    var msgSession;
    msgSession = this._buildMessageSession();
    msgSession.send();
    msgSession.on('accepted', (function(_this) {
      return function() {
        return _this.preferences.callHandlers.newTextMessage(_this._getTime(), message, false, _this.callId);
      };
    })(this));
    msgSession.on('failed', (function(_this) {
      return function(response) {
        return _this.profile.unavailable(response, _this.notComplete);
      };
    })(this));
    return this.preferences.textMessagesComposer.value = '';
  };

  TextSession.prototype.receiveMessage = function(message) {
    return this.preferences.callHandlers.newTextMessage(this._getTime(), message.body, true, this.callId);
  };

  TextSession.prototype.receiveByeOn = function(call_id) {
    return this.preferences.callHandlers.finishTextSession(call_id);
  };

  TextSession.prototype.getHash = function() {
    return this.interaction.hash;
  };

  TextSession.prototype.getClientInfo = function() {
    return this.clientInfo;
  };

  TextSession.prototype.finishSession = function() {
    var byeMessageSession, options, requestParams;
    if (this.invSession) {
      return this.invSession.bye(this._getOptionsToBye());
    } else {
      if (this.notComplete) {
        return this.invRequest.cancel();
      }
      options = [];
      if (this.routes != null) {
        options = this.routes.slice(0);
      }
      options.push("X-Omnz-Interaction-Hash: " + this.interaction.hash);
      this.cseq = this.cseq + 1;
      requestParams = {
        call_id: this.callId,
        to_uri: "sip:" + this.target,
        to_tag: this.toTag,
        from_tag: this.fromTag,
        cseq: this.cseq,
        via_branch: this.branch
      };
      byeMessageSession = new SIP.ClientContext(this.profile.userAgent, "BYE", this.contact);
      byeMessageSession.request = new SIP.OutgoingRequest("BYE", this.contact, this.profile.userAgent, requestParams, options);
      byeMessageSession.send();
      byeMessageSession.on('accepted', this.preferences.callHandlers.callEnded);
      return byeMessageSession.on('failed', this.preferences.callHandlers.callEnded);
    }
  };

  TextSession.prototype.accept = function() {
    return this.request.reply(200, null, ["Contact: " + (this.profile.userAgent.contact.toString())], "");
  };

  TextSession.prototype._cancelText = function() {
    delete this.profile.textSessions[this.callId];
    if (this.preferences.callHandlers.cancelTextSession != null) {
      return this.preferences.callHandlers.cancelTextSession(this.callId);
    }
  };

  TextSession.prototype._sendAck = function(request) {
    var ackSession, options, requestParams;
    this._setSessionProperties(request);
    options = this.routes.slice(0);
    options.push("X-Omnz-Interaction-Hash: " + this.interaction.hash);
    requestParams = {
      call_id: this.callId,
      to_uri: "sip:" + this.target,
      to_tag: this.toTag,
      from_tag: this.fromTag,
      cseq: this.cseq
    };
    ackSession = new SIP.ClientContext(this.profile.userAgent, 'ACK', this.contact);
    ackSession.request = new SIP.OutgoingRequest('ACK', this.contact, this.profile.userAgent, requestParams, options);
    ackSession.send();
    return this.notComplete = false;
  };

  TextSession.prototype._buildInviteOptions = function() {
    return {
      extraHeaders: ["Contact: " + this.contact_ob + ";ob>", "X-Omnz-Media: text", "Content-Type: application/text", "Content-Disposition: render"],
      body: "m=text 0 SIP 10\r\na=rtpmap:10 utf-8\r\n"
    };
  };

  TextSession.prototype._buildContactWithOb = function() {
    this.contact_ob = this.profile.userAgent.contact.toString();
    return this.contact_ob = this.contact_ob.substr(0, this.contact_ob.lastIndexOf(">"));
  };

  TextSession.prototype._setSessionPropertiesOn603Fail = function(response, options) {
    var inviteSession;
    this.notComplete = true;
    this.interaction = new OmzSIP.prototype.Interaction(response.getHeader('X-Omnz-Interaction-Hash'));
    options.extraHeaders.push("X-Omnz-Interaction-Hash: " + this.interaction.hash);
    options.extraHeaders.push("X-Omnz-Text-Ready: TEXT_OK");
    if (this.clientInfo != null) {
      options.extraHeaders.push("X-Omnz-ClientInfo: " + this.clientInfo);
    }
    inviteSession = this.profile.userAgent.request('INVITE', this.target, options);
    this.invRequest = inviteSession.request;
    this.contact = "sip:" + this.target;
    inviteSession.on('accepted', this._sendAck);
    inviteSession.on('accepted', (function(_this) {
      return function() {
        return _this.profile.userAgent.dialogs[_this.callId + _this.fromTag + _this.toTag] = {
          receiveRequest: function(request) {
            if (request.method === 'BYE') {
              request.reply(200);
              return _this.preferences.callHandlers.callEnded();
            }
          }
        };
      };
    })(this));
    inviteSession.on('failed', (function(_this) {
      return function(response) {
        return _this.profile.unavailable(response, _this.notComplete);
      };
    })(this));
    if (this.preferences.callHandlers.textSessionAccepted != null) {
      return inviteSession.on('accepted', this.preferences.callHandlers.textSessionAccepted);
    }
  };

  TextSession.prototype._setSessionProperties = function(request, agent) {
    var route, _i, _j, _len, _len1, _ref, _ref1;
    if (agent == null) {
      agent = false;
    }
    this.request = request;
    this.callId = request.call_id;
    this.cseq = request.cseq;
    this.routes = [];
    if (agent) {
      _ref = request.headers['Record-Route'];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        route = _ref[_i];
        this.routes.push("Route: " + route.raw);
      }
    } else {
      _ref1 = request.headers['Record-Route'];
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        route = _ref1[_j];
        this.routes.unshift("Route: " + route.raw);
      }
    }
    this.contact = request.headers['Contact'][0].raw.slice(1, -1);
    if (agent) {
      this.toTag = request.from_tag;
      this.fromTag = request.to_tag;
      return this.msgSource = 'AGENT';
    } else {
      this.toTag = request.to_tag;
      this.fromTag = request.from_tag;
      return this.msgSource = 'CLIENT';
    }
  };

  TextSession.prototype._buildMessageSession = function() {
    var message, msgSession, options, requestParams;
    message = this.preferences.textMessagesComposer.value;
    if (message.trim() === '') {
      return;
    }
    msgSession = new SIP.ClientContext(this.profile.userAgent, 'MESSAGE', this.target);
    this.cseq = this.cseq + 1;
    options = this.routes.slice(0);
    options.push("X-Omnz-Interaction-Hash: " + this.interaction.hash);
    options.push("X-Omnz-Message-Source: " + this.msgSource);
    options.push("Content-Type: application/text");
    requestParams = {
      call_id: this.callId,
      to_uri: "sip:" + this.target,
      to_tag: this.toTag,
      from_tag: this.fromTag,
      cseq: this.cseq
    };
    msgSession.request = new SIP.OutgoingRequest('MESSAGE', this.contact, this.profile.userAgent, requestParams, options, message);
    return msgSession;
  };

  TextSession.prototype._getTime = function() {
    var min, now;
    now = new Date();
    min = now.getMinutes() < 10 ? "0" + (now.getMinutes()) : now.getMinutes();
    return "" + (now.getHours()) + ":" + min;
  };

  TextSession.prototype._getOptionsToBye = function() {
    return {
      extraHeaders: ["X-Omnz-Interaction-Hash: " + this.interaction.hash],
      cseq: this.cseq + 1
    };
  };

  return TextSession;

})();

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

OmzSIP.prototype.Profile = (function() {
  function Profile(userAgent) {
    this.userAgent = userAgent;
    this._getOptionsToBye = __bind(this._getOptionsToBye, this);
    this._getOptionsToCallOf = __bind(this._getOptionsToCallOf, this);
    this._addSessionHandler = __bind(this._addSessionHandler, this);
    this.muteCall = __bind(this.muteCall, this);
    this.finishCall = __bind(this.finishCall, this);
    this.userAgent.register();
  }

  Profile.prototype.finishCall = function() {
    if (this.session) {
      return this.session.terminate(this._getOptionsToBye());
    }
  };

  Profile.prototype.muteCall = function() {
    if (this.session.mediaHandler.audioMuted) {
      this.session.unmute();
      return this.session.dtmf('1');
    } else {
      this.session.mute();
      return this.session.dtmf('0');
    }
  };

  Profile.prototype.getHash = function() {
    if (this.session) {
      return this.session.request.getHeader("X-Omnz-Interaction-Hash");
    }
  };

  Profile.prototype._addSessionHandler = function(event, handler) {
    if (this._sessionHasEvent(event)) {
      return this.session.on(event, handler || this.noop);
    }
  };

  Profile.prototype._sessionHasEvent = function(event) {
    return this.session.events.hasOwnProperty(event);
  };

  Profile.prototype._getOptionsToCallOf = function(media) {
    return {
      media: {
        constraints: {
          audio: true,
          video: media === 'video' ? true : false
        },
        render: this._buildRenderObject(media)
      },
      extraHeaders: (function() {
        switch (media) {
          case 'audio':
            return ["X-Omnz-Audio-Ready: AUDIO_OK"];
          case 'video':
            return ["X-Omnz-Video-Ready: VIDEO_OK"];
        }
      })()
    };
  };

  Profile.prototype._getOptionsToBye = function() {
    return {
      extraHeaders: ["X-Omnz-Interaction-Hash: " + (this.session.request.getHeader("X-Omnz-Interaction-Hash"))]
    };
  };

  Profile.prototype._buildRenderObject = function(media) {
    var renderObj;
    renderObj = {
      remote: {
        audio: this.preferences.remoteAudioStreamContainer
      },
      local: {}
    };
    if (media === 'video') {
      renderObj.remote.video = this.preferences.remoteVideoStreamContainer;
      renderObj.local.video = this.preferences.localVideoStreamContainer;
    }
    return renderObj;
  };

  Profile.prototype._currentTime = function() {
    var min, now;
    now = new Date();
    min = now.getMinutes() < 10 ? "0" + (now.getMinutes()) : now.getMinutes();
    return "" + (now.getHours()) + ":" + min;
  };

  return Profile;

})();

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

OmzSIP.prototype.Agent = (function(_super) {
  __extends(Agent, _super);

  function Agent(userAgent, preferences) {
    this.userAgent = userAgent;
    this.preferences = preferences;
    this._receiveMessage = __bind(this._receiveMessage, this);
    this._cancel = __bind(this._cancel, this);
    this._muteHandler = __bind(this._muteHandler, this);
    this._newCallAvailability = __bind(this._newCallAvailability, this);
    this._transactionDestroyedDispatcher = __bind(this._transactionDestroyedDispatcher, this);
    this.acceptCall = __bind(this.acceptCall, this);
    this.initCall = __bind(this.initCall, this);
    this.finishSession = __bind(this.finishSession, this);
    this.finishText = __bind(this.finishText, this);
    this.acceptText = __bind(this.acceptText, this);
    this.sendMessage = __bind(this.sendMessage, this);
    this.textSessions = {};
    this.textSessionsCounter = 0;
    this._setupCommunicationHandlers();
    Agent.__super__.constructor.apply(this, arguments);
  }

  Agent.prototype.sendMessage = function(sessionId) {
    var message;
    message = this.preferences.textMessagesComposer.value;
    if (message.trim() === '') {
      return;
    }
    return this.textSessions[sessionId].sendMessage(message);
  };

  Agent.prototype.acceptText = function(sessionId) {
    return this.textSessions[sessionId].accept();
  };

  Agent.prototype.finishText = function(sessionId) {
    return this.textSessions[sessionId].finishSession();
  };

  Agent.prototype.finishSession = function(sessionId) {
    if (sessionId == null) {
      sessionId = null;
    }
    if (sessionId) {
      this.textSessionsCounter--;
      return delete this.textSessions[sessionId];
    } else {
      this.inCall = false;
      return delete this.session;
    }
  };

  Agent.prototype.initCall = function(session) {
    this.session = session;
    this.mediaType = this.session.request.getHeader('X-Omnz-Media');
    this.clientInfo = session.request.getHeader('X-Omnz-ClientInfo');
    this.inCall = true;
    this._setSessionCallbacks();
    return this.session.on('dtmf', this._muteHandler);
  };

  Agent.prototype.acceptCall = function() {
    return this.session.accept(this._getOptionsToCallOf(this.mediaType));
  };

  Agent.prototype.getHashText = function(sessionId) {
    return this.textSessions[sessionId].getHash();
  };

  Agent.prototype.getClientInfo = function(sessionId) {
    if (sessionId == null) {
      sessionId = null;
    }
    if (sessionId) {
      return this.textSessions[sessionId].getClientInfo();
    } else {
      return this.clientInfo;
    }
  };

  Agent.prototype._setupCommunicationHandlers = function() {
    this.userAgent.on('invite', this._newCallAvailability);
    this.userAgent.on('message', this._receiveMessage);
    return this.userAgent.on('transactionDestroyed', this._transactionDestroyedDispatcher);
  };

  Agent.prototype._transactionDestroyedDispatcher = function(destroyed) {
    var request;
    request = destroyed.transaction.request;
    if (request.method === 'BYE' && this.textSessions.hasOwnProperty(request.call_id)) {
      return this.textSessions[request.call_id].receiveByeOn(request.call_id);
    }
  };

  Agent.prototype._newCallAvailability = function(session) {
    var clientInfo, from;
    if (this.inCall || this._checkInText(session)) {
      session.reject({
        extraHeaders: ['X-Omz-Cause-Description: Occupied']
      });
      return;
    }
    if (this._isATextSessionInvite(session.request)) {
      from = session.request.from.uri.toString();
      from = from.slice(4, from.length);
      clientInfo = session.request.getHeader('X-Omnz-ClientInfo');
      this.textSessions[session.request.getHeader('Call-ID')] = new OmzSIP.prototype.TextSession(from, clientInfo, this, session);
      this.preferences.callHandlers.receiveTextSession(session.request.getHeader('Call-ID'));
      return this.textSessionsCounter++;
    } else {
      return this.initCall(session);
    }
  };

  Agent.prototype._checkInText = function(session) {
    if (this.textSessionsCounter === 0) {
      return false;
    }
    if (!this._isATextSessionInvite(session.request)) {
      return true;
    }
    return !(this.textSessionsCounter < 4);
  };

  Agent.prototype._isATextSessionInvite = function(sessionRequest) {
    return sessionRequest.getHeader('X-Omnz-Media') === 'text';
  };

  Agent.prototype._muteHandler = function(_request, dtmf) {
    switch (dtmf.tone) {
      case '0':
        if (this.preferences.callHandlers.callMuted != null) {
          return this.preferences.callHandlers.callMuted();
        }
        break;
      case '1':
        if (this.preferences.callHandlers.callUnmuted != null) {
          return this.preferences.callHandlers.callUnmuted();
        }
    }
  };

  Agent.prototype._cancel = function() {
    switch (this.mediaType) {
      case 'video':
        return this.preferences.callHandlers.cancelVideoCall();
      case 'audio':
        return this.preferences.callHandlers.cancelAudioCall();
    }
  };

  Agent.prototype._setSessionCallbacks = function() {
    this._addSessionHandler('cancel', this._cancel);
    switch (this.mediaType) {
      case 'video':
        this._addSessionHandler('accepted', this.preferences.callHandlers.receiveVideoCall);
        this._addSessionHandler('bye', this.preferences.callHandlers.finishVideoCall);
        return this.preferences.callHandlers.initVideoCall();
      case 'audio':
        this._addSessionHandler('accepted', this.preferences.callHandlers.receiveAudioCall);
        this._addSessionHandler('bye', this.preferences.callHandlers.finishAudioCall);
        return this.preferences.callHandlers.initAudioCall();
    }
  };

  Agent.prototype._receiveMessage = function(message) {
    return this.textSessions[message.request.call_id].receiveMessage(message);
  };

  return Agent;

})(OmzSIP.prototype.Profile);

var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

OmzSIP.prototype.Client = (function(_super) {
  __extends(Client, _super);

  function Client(userAgent, preferences) {
    this.userAgent = userAgent;
    this.preferences = preferences;
    this._setSessionCallbacks = __bind(this._setSessionCallbacks, this);
    this._initCall = __bind(this._initCall, this);
    this._receiveMessage = __bind(this._receiveMessage, this);
    this.sendMessage = __bind(this.sendMessage, this);
    this.finishTextSession = __bind(this.finishTextSession, this);
    this.initAudioCall = __bind(this.initAudioCall, this);
    this.userAgent.on('message', this._receiveMessage);
    Client.__super__.constructor.apply(this, arguments);
  }

  Client.prototype.initAudioCall = function(target, clientInfo) {
    if (clientInfo == null) {
      clientInfo = null;
    }
    this.target = target;
    this.mediaType = 'audio';
    if (clientInfo != null) {
      this.clientInfo = JSON.stringify(clientInfo);
    }
    return this._initCall();
  };

  Client.prototype.initVideoCall = function(target, clientInfo) {
    if (clientInfo == null) {
      clientInfo = null;
    }
    this.target = target;
    this.mediaType = 'video';
    if (clientInfo != null) {
      this.clientInfo = JSON.stringify(clientInfo);
    }
    return this._initCall();
  };

  Client.prototype.finish = function() {
    switch (this.mediaType) {
      case 'video':
        return this.finishCall();
      case 'audio':
        return this.finishCall();
      case 'text':
        return this.finishTextSession();
    }
  };

  Client.prototype.initTextSession = function(target, clientInfo) {
    if (clientInfo == null) {
      clientInfo = null;
    }
    this.mediaType = 'text';
    if (clientInfo != null) {
      this.clientInfo = JSON.stringify(clientInfo);
    }
    return this.textSession = new OmzSIP.prototype.TextSession(target, this.clientInfo, this);
  };

  Client.prototype.getHashText = function() {
    return this.textSession.getHash();
  };

  Client.prototype.finishTextSession = function() {
    return this.textSession.finishSession();
  };

  Client.prototype.sendMessage = function() {
    var message;
    message = this.preferences.textMessagesComposer.value;
    if (message.trim() === '') {
      return;
    }
    return this.textSession.sendMessage(message);
  };

  Client.prototype.mediaChecked = function(featureIsDetected) {
    if (featureIsDetected) {
      return this._initCall("X-Omnz-Interaction-Hash: " + this.interaction.hash);
    }
  };

  Client.prototype.unavailable = function(response, notComplete) {
    if (notComplete == null) {
      notComplete = false;
    }
    if (!response) {
      if (this.preferences.callHandlers.unavailable != null) {
        return this.preferences.callHandlers.unavailable();
      }
    } else {
      if (response.status_code === 487 && notComplete) {
        if (this.preferences.callHandlers.cancelCall != null) {
          return this.preferences.callHandlers.cancelCall();
        }
      } else {
        if (this.preferences.callHandlers.unavailable != null) {
          return this.preferences.callHandlers.unavailable();
        }
      }
    }
  };

  Client.prototype._receiveMessage = function(message) {
    return this.textSession.receiveMessage(message);
  };

  Client.prototype._initCall = function(extraHeaders) {
    var client_info, inviteExtraHeader, media_header, options;
    media_header = "X-Omnz-Media: " + this.mediaType;
    if (this.clientInfo != null) {
      client_info = "X-Omnz-ClientInfo: " + this.clientInfo;
    }
    this.notComplete = false;
    if (extraHeaders) {
      options = this._getOptionsToCallOf(this.mediaType);
      options.extraHeaders.push(extraHeaders);
      options.extraHeaders.push(media_header);
      options.extraHeaders.push(client_info);
      this.session = this.userAgent.invite(this.target, options);
    } else {
      inviteExtraHeader = {
        extraHeaders: ["Contact: " + (this.userAgent.contact.toString()), media_header]
      };
      this.session = this.userAgent.request('INVITE', this.target, inviteExtraHeader);
    }
    if (extraHeaders) {
      this._setSessionCallbacks();
    }
    return this.session.on('failed', (function(_this) {
      return function(response) {
        return _this._failHandler(response);
      };
    })(this));
  };

  Client.prototype._setSessionCallbacks = function() {
    this._addSessionHandler('connecting', this.preferences.callHandlers.initCall);
    this._addSessionHandler('cancel', this.preferences.callHandlers.cancelCall);
    this._addSessionHandler('accepted', this.preferences.callHandlers.callAccepted);
    this._addSessionHandler('bye', this.preferences.callHandlers.callEnded);
    this._addSessionHandler('muted', this.preferences.callHandlers.callMuted);
    this._addSessionHandler('unmuted', this.preferences.callHandlers.callUnmuted);
    switch (this.mediaType) {
      case 'video':
        return this._addSessionHandler('accepted', this.preferences.callHandlers.videoCallAccepted);
      case 'audio':
        return this._addSessionHandler('accepted', this.preferences.callHandlers.audioCallAccepted);
      case 'text':
        return this._addSessionHandler('accepted', this.preferences.callHandlers.textSessionAccepted);
    }
  };

  Client.prototype._failHandler = function(response) {
    if (response.getHeader('X-Omz-Cause-Description') === 'Occupied') {
      this._occupiedAgent();
    }
    switch (response.status_code) {
      case 603:
        return this._validateMedia(response);
      default:
        return this.unavailable(response);
    }
  };

  Client.prototype._occupiedAgent = function() {
    if (this.preferences.callHandlers.stopCall != null) {
      this.preferences.callHandlers.stopCall();
    }
    if (this.preferences.callHandlers.agentOccupied != null) {
      return this.preferences.callHandlers.agentOccupied();
    }
  };

  Client.prototype._validateMedia = function(response) {
    var interactionHash, mediaPath;
    switch (this.mediaType) {
      case 'video':
        mediaPath = response.getHeader('X-Omnz-Welcome-Video');
        break;
      case 'audio':
        mediaPath = response.getHeader('X-Omnz-Welcome-Audio');
    }
    mediaPath = this.mediaType;
    interactionHash = response.getHeader('X-Omnz-Interaction-Hash');
    this.interaction = new OmzSIP.prototype.Interaction(interactionHash);
    return this.preferences.callHandlers.checkMedia(mediaPath);
  };

  return Client;

})(OmzSIP.prototype.Profile);
;jQuery.noConflict();

(function($) {
    "use strict";

              $('.detect').append($("<p></p>").text($.browser.name + " " + $.browser.version));
              $('.detect').append($("<p></p>").text($.browser.platform));

    //window.wOmz = wOmz; //debug
    // wOmz.init({id: '1'});

    // $.wOmz = wOmz.INFO;

})( jQuery );
