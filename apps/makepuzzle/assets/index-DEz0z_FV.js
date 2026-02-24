(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();function oc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ka={exports:{}},el={},Ga={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xt=Symbol.for("react.element"),ac=Symbol.for("react.portal"),uc=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),dc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),pc=Symbol.for("react.forward_ref"),mc=Symbol.for("react.suspense"),hc=Symbol.for("react.memo"),gc=Symbol.for("react.lazy"),$o=Symbol.iterator;function vc(e){return e===null||typeof e!="object"?null:(e=$o&&e[$o]||e["@@iterator"],typeof e=="function"?e:null)}var Xa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ya=Object.assign,qa={};function it(e,n,t){this.props=e,this.context=n,this.refs=qa,this.updater=t||Xa}it.prototype.isReactComponent={};it.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};it.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Za(){}Za.prototype=it.prototype;function Hi(e,n,t){this.props=e,this.context=n,this.refs=qa,this.updater=t||Xa}var Bi=Hi.prototype=new Za;Bi.constructor=Hi;Ya(Bi,it.prototype);Bi.isPureReactComponent=!0;var jo=Array.isArray,ba=Object.prototype.hasOwnProperty,Ui={current:null},Ja={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,n,t){var r,l={},i=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(i=""+n.key),n)ba.call(n,r)&&!Ja.hasOwnProperty(r)&&(l[r]=n[r]);var a=arguments.length-2;if(a===1)l.children=t;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:Xt,type:e,key:i,ref:o,props:l,_owner:Ui.current}}function yc(e,n){return{$$typeof:Xt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Wi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xt}function xc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Do=/\/+/g;function kl(e,n){return typeof e=="object"&&e!==null&&e.key!=null?xc(""+e.key):n.toString(36)}function yr(e,n,t,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Xt:case ac:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+kl(o,0):r,jo(l)?(t="",e!=null&&(t=e.replace(Do,"$&/")+"/"),yr(l,n,t,"",function(c){return c})):l!=null&&(Wi(l)&&(l=yc(l,t+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Do,"$&/")+"/")+e)),n.push(l)),1;if(o=0,r=r===""?".":r+":",jo(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+kl(i,a);o+=yr(i,n,t,u,l)}else if(u=vc(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+kl(i,a++),o+=yr(i,n,t,u,l);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function nr(e,n,t){if(e==null)return e;var r=[],l=0;return yr(e,r,"","",function(i){return n.call(t,i,l++)}),r}function wc(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},xr={transition:null},kc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Ui};function nu(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:nr,forEach:function(e,n,t){nr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return nr(e,function(){n++}),n},toArray:function(e){return nr(e,function(n){return n})||[]},only:function(e){if(!Wi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=it;z.Fragment=uc;z.Profiler=cc;z.PureComponent=Hi;z.StrictMode=sc;z.Suspense=mc;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kc;z.act=nu;z.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ya({},e.props),l=e.key,i=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,o=Ui.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)ba.call(n,u)&&!Ja.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&a!==void 0?a[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xt,type:e.type,key:l,ref:i,props:r,_owner:o}};z.createContext=function(e){return e={$$typeof:fc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dc,_context:e},e.Consumer=e};z.createElement=eu;z.createFactory=function(e){var n=eu.bind(null,e);return n.type=e,n};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:pc,render:e}};z.isValidElement=Wi;z.lazy=function(e){return{$$typeof:gc,_payload:{_status:-1,_result:e},_init:wc}};z.memo=function(e,n){return{$$typeof:hc,type:e,compare:n===void 0?null:n}};z.startTransition=function(e){var n=xr.transition;xr.transition={};try{e()}finally{xr.transition=n}};z.unstable_act=nu;z.useCallback=function(e,n){return ae.current.useCallback(e,n)};z.useContext=function(e){return ae.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};z.useEffect=function(e,n){return ae.current.useEffect(e,n)};z.useId=function(){return ae.current.useId()};z.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};z.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};z.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};z.useMemo=function(e,n){return ae.current.useMemo(e,n)};z.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};z.useRef=function(e){return ae.current.useRef(e)};z.useState=function(e){return ae.current.useState(e)};z.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};z.useTransition=function(){return ae.current.useTransition()};z.version="18.3.1";Ga.exports=z;var tn=Ga.exports;const Sc=oc(tn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=tn,Cc=Symbol.for("react.element"),Pc=Symbol.for("react.fragment"),_c=Object.prototype.hasOwnProperty,Mc=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nc={key:!0,ref:!0,__self:!0,__source:!0};function tu(e,n,t){var r,l={},i=null,o=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)_c.call(n,r)&&!Nc.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:Cc,type:e,key:i,ref:o,props:l,_owner:Mc.current}}el.Fragment=Pc;el.jsx=tu;el.jsxs=tu;Ka.exports=el;var I=Ka.exports,ru={exports:{}},ye={},lu={exports:{}},iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(E,M){var N=E.length;E.push(M);e:for(;0<N;){var V=N-1>>>1,Y=E[V];if(0<l(Y,M))E[V]=M,E[N]=Y,N=V;else break e}}function t(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var M=E[0],N=E.pop();if(N!==M){E[0]=N;e:for(var V=0,Y=E.length,Jt=Y>>>1;V<Jt;){var vn=2*(V+1)-1,wl=E[vn],yn=vn+1,er=E[yn];if(0>l(wl,N))yn<Y&&0>l(er,wl)?(E[V]=er,E[yn]=N,V=yn):(E[V]=wl,E[vn]=N,V=vn);else if(yn<Y&&0>l(er,N))E[V]=er,E[yn]=N,V=yn;else break e}}return M}function l(E,M){var N=E.sortIndex-M.sortIndex;return N!==0?N:E.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,m=null,p=3,y=!1,x=!1,w=!1,j=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(E){for(var M=t(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=E)r(c),M.sortIndex=M.expirationTime,n(u,M);else break;M=t(c)}}function g(E){if(w=!1,f(E),!x)if(t(u)!==null)x=!0,yl(S);else{var M=t(c);M!==null&&xl(g,M.startTime-E)}}function S(E,M){x=!1,w&&(w=!1,d(_),_=-1),y=!0;var N=p;try{for(f(M),m=t(u);m!==null&&(!(m.expirationTime>M)||E&&!_e());){var V=m.callback;if(typeof V=="function"){m.callback=null,p=m.priorityLevel;var Y=V(m.expirationTime<=M);M=e.unstable_now(),typeof Y=="function"?m.callback=Y:m===t(u)&&r(u),f(M)}else r(u);m=t(u)}if(m!==null)var Jt=!0;else{var vn=t(c);vn!==null&&xl(g,vn.startTime-M),Jt=!1}return Jt}finally{m=null,p=N,y=!1}}var C=!1,P=null,_=-1,W=5,R=-1;function _e(){return!(e.unstable_now()-R<W)}function ut(){if(P!==null){var E=e.unstable_now();R=E;var M=!0;try{M=P(!0,E)}finally{M?st():(C=!1,P=null)}}else C=!1}var st;if(typeof s=="function")st=function(){s(ut)};else if(typeof MessageChannel<"u"){var Ao=new MessageChannel,ic=Ao.port2;Ao.port1.onmessage=ut,st=function(){ic.postMessage(null)}}else st=function(){j(ut,0)};function yl(E){P=E,C||(C=!0,st())}function xl(E,M){_=j(function(){E(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,yl(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(E){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var N=p;p=M;try{return E()}finally{p=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,M){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var N=p;p=E;try{return M()}finally{p=N}},e.unstable_scheduleCallback=function(E,M,N){var V=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?V+N:V):N=V,E){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=N+Y,E={id:h++,callback:M,priorityLevel:E,startTime:N,expirationTime:Y,sortIndex:-1},N>V?(E.sortIndex=N,n(c,E),t(u)===null&&E===t(c)&&(w?(d(_),_=-1):w=!0,xl(g,N-V))):(E.sortIndex=Y,n(u,E),x||y||(x=!0,yl(S))),E},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(E){var M=p;return function(){var N=p;p=M;try{return E.apply(this,arguments)}finally{p=N}}}})(iu);lu.exports=iu;var zc=lu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=tn,ve=zc;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ou=new Set,Lt={};function Ln(e,n){bn(e,n),bn(e+"Capture",n)}function bn(e,n){for(Lt[e]=n,e=0;e<n.length;e++)ou.add(n[e])}var Ve=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,Lc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fo={},Ho={};function Ic(e){return Gl.call(Ho,e)?!0:Gl.call(Fo,e)?!1:Lc.test(e)?Ho[e]=!0:(Fo[e]=!0,!1)}function Tc(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Oc(e,n,t,r){if(n===null||typeof n>"u"||Tc(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ue(e,n,t,r,l,i,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=o}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vi=/[\-:]([a-z])/g;function Qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Vi,Qi);ee[n]=new ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Vi,Qi);ee[n]=new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Vi,Qi);ee[n]=new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ki(e,n,t,r){var l=ee.hasOwnProperty(n)?ee[n]:null;(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Oc(n,t,l,r)&&(t=null),r||l===null?Ic(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Xe=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tr=Symbol.for("react.element"),On=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),Gi=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),au=Symbol.for("react.provider"),uu=Symbol.for("react.context"),Xi=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),su=Symbol.for("react.offscreen"),Bo=Symbol.iterator;function ct(e){return e===null||typeof e!="object"?null:(e=Bo&&e[Bo]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Sl;function yt(e){if(Sl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Sl=n&&n[1]||""}return`
`+Sl+e}var El=!1;function Cl(e,n){if(!e||El)return"";El=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,a=i.length-1;1<=o&&0<=a&&l[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(l[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||l[o]!==i[a]){var u=`
`+l[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=o&&0<=a);break}}}finally{El=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?yt(e):""}function Ac(e){switch(e.tag){case 5:return yt(e.type);case 16:return yt("Lazy");case 13:return yt("Suspense");case 19:return yt("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case On:return"Portal";case Xl:return"Profiler";case Gi:return"StrictMode";case Yl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uu:return(e.displayName||"Context")+".Consumer";case au:return(e._context.displayName||"Context")+".Provider";case Xi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yi:return n=e.displayName||null,n!==null?n:Zl(e.type)||"Memo";case qe:n=e._payload,e=e._init;try{return Zl(e(n))}catch{}}return null}function $c(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(n);case 8:return n===Gi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function fn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jc(e){var n=cu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function rr(e){e._valueTracker||(e._valueTracker=jc(e))}function du(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=cu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Uo(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=fn(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function fu(e,n){n=n.checked,n!=null&&Ki(e,"checked",n,!1)}function Jl(e,n){fu(e,n);var t=fn(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ei(e,n.type,t):n.hasOwnProperty("defaultValue")&&ei(e,n.type,fn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wo(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ei(e,n,t){(n!=="number"||Rr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var xt=Array.isArray;function Kn(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{for(t=""+fn(t),n=null,l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function ni(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(xt(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:fn(t)}}function pu(e,n){var t=fn(n.value),r=fn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Qo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function mu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ti(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?mu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,hu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function It(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var St={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dc=["Webkit","ms","Moz","O"];Object.keys(St).forEach(function(e){Dc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),St[n]=St[e]})});function gu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||St.hasOwnProperty(e)&&St[e]?(""+n).trim():n+"px"}function vu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=gu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}var Fc=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,n){if(n){if(Fc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function li(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ii=null;function qi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,Gn=null,Xn=null;function Ko(e){if(e=Zt(e)){if(typeof oi!="function")throw Error(v(280));var n=e.stateNode;n&&(n=il(n),oi(e.stateNode,e.type,n))}}function yu(e){Gn?Xn?Xn.push(e):Xn=[e]:Gn=e}function xu(){if(Gn){var e=Gn,n=Xn;if(Xn=Gn=null,Ko(e),n)for(e=0;e<n.length;e++)Ko(n[e])}}function wu(e,n){return e(n)}function ku(){}var Pl=!1;function Su(e,n,t){if(Pl)return e(n,t);Pl=!0;try{return wu(e,n,t)}finally{Pl=!1,(Gn!==null||Xn!==null)&&(ku(),xu())}}function Tt(e,n){var t=e.stateNode;if(t===null)return null;var r=il(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var ai=!1;if(Ve)try{var dt={};Object.defineProperty(dt,"passive",{get:function(){ai=!0}}),window.addEventListener("test",dt,dt),window.removeEventListener("test",dt,dt)}catch{ai=!1}function Hc(e,n,t,r,l,i,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var Et=!1,Lr=null,Ir=!1,ui=null,Bc={onError:function(e){Et=!0,Lr=e}};function Uc(e,n,t,r,l,i,o,a,u){Et=!1,Lr=null,Hc.apply(Bc,arguments)}function Wc(e,n,t,r,l,i,o,a,u){if(Uc.apply(this,arguments),Et){if(Et){var c=Lr;Et=!1,Lr=null}else throw Error(v(198));Ir||(Ir=!0,ui=c)}}function In(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Eu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Go(e){if(In(e)!==e)throw Error(v(188))}function Vc(e){var n=e.alternate;if(!n){if(n=In(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===t)return Go(l),e;if(i===r)return Go(l),n;i=i.sibling}throw Error(v(188))}if(t.return!==r.return)t=l,r=i;else{for(var o=!1,a=l.child;a;){if(a===t){o=!0,t=l,r=i;break}if(a===r){o=!0,r=l,t=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===t){o=!0,t=i,r=l;break}if(a===r){o=!0,r=i,t=l;break}a=a.sibling}if(!o)throw Error(v(189))}}if(t.alternate!==r)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function Cu(e){return e=Vc(e),e!==null?Pu(e):null}function Pu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Pu(e);if(n!==null)return n;e=e.sibling}return null}var _u=ve.unstable_scheduleCallback,Xo=ve.unstable_cancelCallback,Qc=ve.unstable_shouldYield,Kc=ve.unstable_requestPaint,Q=ve.unstable_now,Gc=ve.unstable_getCurrentPriorityLevel,Zi=ve.unstable_ImmediatePriority,Mu=ve.unstable_UserBlockingPriority,Tr=ve.unstable_NormalPriority,Xc=ve.unstable_LowPriority,Nu=ve.unstable_IdlePriority,nl=null,je=null;function Yc(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:bc,qc=Math.log,Zc=Math.LN2;function bc(e){return e>>>=0,e===0?32:31-(qc(e)/Zc|0)|0}var ir=64,or=4194304;function wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Or(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=t&268435455;if(o!==0){var a=o&~l;a!==0?r=wt(a):(i&=o,i!==0&&(r=wt(i)))}else o=t&~l,o!==0?r=wt(o):i!==0&&(r=wt(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&l)&&(l=r&-r,i=n&-n,l>=i||l===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Le(n),l=1<<t,r|=e[t],n&=~l;return r}function Jc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ed(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Le(i),a=1<<o,u=l[o];u===-1?(!(a&t)||a&r)&&(l[o]=Jc(a,n)):u<=n&&(e.expiredLanes|=a),i&=~a}}function si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zu(){var e=ir;return ir<<=1,!(ir&4194240)&&(ir=64),e}function _l(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Yt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Le(n),e[n]=t}function nd(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Le(t),i=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~i}}function bi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Le(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}var T=0;function Ru(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Lu,Ji,Iu,Tu,Ou,ci=!1,ar=[],rn=null,ln=null,on=null,Ot=new Map,At=new Map,be=[],td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yo(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Ot.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(n.pointerId)}}function ft(e,n,t,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},n!==null&&(n=Zt(n),n!==null&&Ji(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e)}function rd(e,n,t,r,l){switch(n){case"focusin":return rn=ft(rn,e,n,t,r,l),!0;case"dragenter":return ln=ft(ln,e,n,t,r,l),!0;case"mouseover":return on=ft(on,e,n,t,r,l),!0;case"pointerover":var i=l.pointerId;return Ot.set(i,ft(Ot.get(i)||null,e,n,t,r,l)),!0;case"gotpointercapture":return i=l.pointerId,At.set(i,ft(At.get(i)||null,e,n,t,r,l)),!0}return!1}function Au(e){var n=kn(e.target);if(n!==null){var t=In(n);if(t!==null){if(n=t.tag,n===13){if(n=Eu(t),n!==null){e.blockedOn=n,Ou(e.priority,function(){Iu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=di(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ii=r,t.target.dispatchEvent(r),ii=null}else return n=Zt(t),n!==null&&Ji(n),e.blockedOn=t,!1;n.shift()}return!0}function qo(e,n,t){wr(e)&&t.delete(n)}function ld(){ci=!1,rn!==null&&wr(rn)&&(rn=null),ln!==null&&wr(ln)&&(ln=null),on!==null&&wr(on)&&(on=null),Ot.forEach(qo),At.forEach(qo)}function pt(e,n){e.blockedOn===n&&(e.blockedOn=null,ci||(ci=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,ld)))}function $t(e){function n(l){return pt(l,e)}if(0<ar.length){pt(ar[0],e);for(var t=1;t<ar.length;t++){var r=ar[t];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&pt(rn,e),ln!==null&&pt(ln,e),on!==null&&pt(on,e),Ot.forEach(n),At.forEach(n),t=0;t<be.length;t++)r=be[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<be.length&&(t=be[0],t.blockedOn===null);)Au(t),t.blockedOn===null&&be.shift()}var Yn=Xe.ReactCurrentBatchConfig,Ar=!0;function id(e,n,t,r){var l=T,i=Yn.transition;Yn.transition=null;try{T=1,eo(e,n,t,r)}finally{T=l,Yn.transition=i}}function od(e,n,t,r){var l=T,i=Yn.transition;Yn.transition=null;try{T=4,eo(e,n,t,r)}finally{T=l,Yn.transition=i}}function eo(e,n,t,r){if(Ar){var l=di(e,n,t,r);if(l===null)$l(e,n,r,$r,t),Yo(e,r);else if(rd(l,e,n,t,r))r.stopPropagation();else if(Yo(e,r),n&4&&-1<td.indexOf(e)){for(;l!==null;){var i=Zt(l);if(i!==null&&Lu(i),i=di(e,n,t,r),i===null&&$l(e,n,r,$r,t),i===l)break;l=i}l!==null&&r.stopPropagation()}else $l(e,n,r,null,t)}}var $r=null;function di(e,n,t,r){if($r=null,e=qi(r),e=kn(e),e!==null)if(n=In(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Eu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $r=e,null}function $u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gc()){case Zi:return 1;case Mu:return 4;case Tr:case Xc:return 16;case Nu:return 536870912;default:return 16}default:return 16}}var en=null,no=null,kr=null;function ju(){if(kr)return kr;var e,n=no,t=n.length,r,l="value"in en?en.value:en.textContent,i=l.length;for(e=0;e<t&&n[e]===l[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===l[i-r];r++);return kr=l.slice(e,1<r?1-r:void 0)}function Sr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function Zo(){return!1}function xe(e){function n(t,r,l,i,o){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ur:Zo,this.isPropagationStopped=Zo,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),n}var ot={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=xe(ot),qt=B({},ot,{view:0,detail:0}),ad=xe(qt),Ml,Nl,mt,tl=B({},qt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mt&&(mt&&e.type==="mousemove"?(Ml=e.screenX-mt.screenX,Nl=e.screenY-mt.screenY):Nl=Ml=0,mt=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Nl}}),bo=xe(tl),ud=B({},tl,{dataTransfer:0}),sd=xe(ud),cd=B({},qt,{relatedTarget:0}),zl=xe(cd),dd=B({},ot,{animationName:0,elapsedTime:0,pseudoElement:0}),fd=xe(dd),pd=B({},ot,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),md=xe(pd),hd=B({},ot,{data:0}),Jo=xe(hd),gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=yd[e])?!!n[e]:!1}function ro(){return xd}var wd=B({},qt,{key:function(e){if(e.key){var n=gd[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Sr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(e){return e.type==="keypress"?Sr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kd=xe(wd),Sd=B({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ea=xe(Sd),Ed=B({},qt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),Cd=xe(Ed),Pd=B({},ot,{propertyName:0,elapsedTime:0,pseudoElement:0}),_d=xe(Pd),Md=B({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nd=xe(Md),zd=[9,13,27,32],lo=Ve&&"CompositionEvent"in window,Ct=null;Ve&&"documentMode"in document&&(Ct=document.documentMode);var Rd=Ve&&"TextEvent"in window&&!Ct,Du=Ve&&(!lo||Ct&&8<Ct&&11>=Ct),na=" ",ta=!1;function Fu(e,n){switch(e){case"keyup":return zd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Ld(e,n){switch(e){case"compositionend":return Hu(n);case"keypress":return n.which!==32?null:(ta=!0,na);case"textInput":return e=n.data,e===na&&ta?null:e;default:return null}}function Id(e,n){if($n)return e==="compositionend"||!lo&&Fu(e,n)?(e=ju(),kr=no=en=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Du&&n.locale!=="ko"?null:n.data;default:return null}}var Td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ra(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Td[e.type]:n==="textarea"}function Bu(e,n,t,r){yu(r),n=jr(n,"onChange"),0<n.length&&(t=new to("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Pt=null,jt=null;function Od(e){bu(e,0)}function rl(e){var n=Fn(e);if(du(n))return e}function Ad(e,n){if(e==="change")return n}var Uu=!1;if(Ve){var Rl;if(Ve){var Ll="oninput"in document;if(!Ll){var la=document.createElement("div");la.setAttribute("oninput","return;"),Ll=typeof la.oninput=="function"}Rl=Ll}else Rl=!1;Uu=Rl&&(!document.documentMode||9<document.documentMode)}function ia(){Pt&&(Pt.detachEvent("onpropertychange",Wu),jt=Pt=null)}function Wu(e){if(e.propertyName==="value"&&rl(jt)){var n=[];Bu(n,jt,e,qi(e)),Su(Od,n)}}function $d(e,n,t){e==="focusin"?(ia(),Pt=n,jt=t,Pt.attachEvent("onpropertychange",Wu)):e==="focusout"&&ia()}function jd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(jt)}function Dd(e,n){if(e==="click")return rl(n)}function Fd(e,n){if(e==="input"||e==="change")return rl(n)}function Hd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Te=typeof Object.is=="function"?Object.is:Hd;function Dt(e,n){if(Te(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Gl.call(n,l)||!Te(e[l],n[l]))return!1}return!0}function oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function aa(e,n){var t=oa(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=oa(t)}}function Vu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Vu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qu(){for(var e=window,n=Rr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Rr(e.document)}return n}function io(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Bd(e){var n=Qu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Vu(t.ownerDocument.documentElement,t)){if(r!==null&&io(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=aa(t,i);var o=aa(t,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=Ve&&"documentMode"in document&&11>=document.documentMode,jn=null,fi=null,_t=null,pi=!1;function ua(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;pi||jn==null||jn!==Rr(r)||(r=jn,"selectionStart"in r&&io(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_t&&Dt(_t,r)||(_t=r,r=jr(fi,"onSelect"),0<r.length&&(n=new to("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=jn)))}function sr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Dn={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionend:sr("Transition","TransitionEnd")},Il={},Ku={};Ve&&(Ku=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function ll(e){if(Il[e])return Il[e];if(!Dn[e])return e;var n=Dn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ku)return Il[e]=n[t];return e}var Gu=ll("animationend"),Xu=ll("animationiteration"),Yu=ll("animationstart"),qu=ll("transitionend"),Zu=new Map,sa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mn(e,n){Zu.set(e,n),Ln(n,[e])}for(var Tl=0;Tl<sa.length;Tl++){var Ol=sa[Tl],Wd=Ol.toLowerCase(),Vd=Ol[0].toUpperCase()+Ol.slice(1);mn(Wd,"on"+Vd)}mn(Gu,"onAnimationEnd");mn(Xu,"onAnimationIteration");mn(Yu,"onAnimationStart");mn("dblclick","onDoubleClick");mn("focusin","onFocus");mn("focusout","onBlur");mn(qu,"onTransitionEnd");bn("onMouseEnter",["mouseout","mouseover"]);bn("onMouseLeave",["mouseout","mouseover"]);bn("onPointerEnter",["pointerout","pointerover"]);bn("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(kt));function ca(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Wc(r,n,void 0,e),e.currentTarget=null}function bu(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&l.isPropagationStopped())break e;ca(l,a,c),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&l.isPropagationStopped())break e;ca(l,a,c),i=u}}}if(Ir)throw e=ui,Ir=!1,ui=null,e}function A(e,n){var t=n[yi];t===void 0&&(t=n[yi]=new Set);var r=e+"__bubble";t.has(r)||(Ju(n,e,2,!1),t.add(r))}function Al(e,n,t){var r=0;n&&(r|=4),Ju(t,e,r,n)}var cr="_reactListening"+Math.random().toString(36).slice(2);function Ft(e){if(!e[cr]){e[cr]=!0,ou.forEach(function(t){t!=="selectionchange"&&(Qd.has(t)||Al(t,!1,e),Al(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cr]||(n[cr]=!0,Al("selectionchange",!1,n))}}function Ju(e,n,t,r){switch($u(n)){case 1:var l=id;break;case 4:l=od;break;default:l=eo}t=l.bind(null,n,t,e),l=void 0,!ai||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function $l(e,n,t,r,l){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;o=o.return}for(;a!==null;){if(o=kn(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Su(function(){var c=i,h=qi(t),m=[];e:{var p=Zu.get(e);if(p!==void 0){var y=to,x=e;switch(e){case"keypress":if(Sr(t)===0)break e;case"keydown":case"keyup":y=kd;break;case"focusin":x="focus",y=zl;break;case"focusout":x="blur",y=zl;break;case"beforeblur":case"afterblur":y=zl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=sd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Cd;break;case Gu:case Xu:case Yu:y=fd;break;case qu:y=_d;break;case"scroll":y=ad;break;case"wheel":y=Nd;break;case"copy":case"cut":case"paste":y=md;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ea}var w=(n&4)!==0,j=!w&&e==="scroll",d=w?p!==null?p+"Capture":null:p;w=[];for(var s=c,f;s!==null;){f=s;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=Tt(s,d),g!=null&&w.push(Ht(s,g,f)))),j)break;s=s.return}0<w.length&&(p=new y(p,x,null,t,h),m.push({event:p,listeners:w}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&t!==ii&&(x=t.relatedTarget||t.fromElement)&&(kn(x)||x[Qe]))break e;if((y||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,y?(x=t.relatedTarget||t.toElement,y=c,x=x?kn(x):null,x!==null&&(j=In(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(w=bo,g="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(w=ea,g="onPointerLeave",d="onPointerEnter",s="pointer"),j=y==null?p:Fn(y),f=x==null?p:Fn(x),p=new w(g,s+"leave",y,t,h),p.target=j,p.relatedTarget=f,g=null,kn(h)===c&&(w=new w(d,s+"enter",x,t,h),w.target=f,w.relatedTarget=j,g=w),j=g,y&&x)n:{for(w=y,d=x,s=0,f=w;f;f=Tn(f))s++;for(f=0,g=d;g;g=Tn(g))f++;for(;0<s-f;)w=Tn(w),s--;for(;0<f-s;)d=Tn(d),f--;for(;s--;){if(w===d||d!==null&&w===d.alternate)break n;w=Tn(w),d=Tn(d)}w=null}else w=null;y!==null&&da(m,p,y,w,!1),x!==null&&j!==null&&da(m,j,x,w,!0)}}e:{if(p=c?Fn(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var S=Ad;else if(ra(p))if(Uu)S=Fd;else{S=jd;var C=$d}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(S=Dd);if(S&&(S=S(e,c))){Bu(m,S,t,h);break e}C&&C(e,p,c),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&ei(p,"number",p.value)}switch(C=c?Fn(c):window,e){case"focusin":(ra(C)||C.contentEditable==="true")&&(jn=C,fi=c,_t=null);break;case"focusout":_t=fi=jn=null;break;case"mousedown":pi=!0;break;case"contextmenu":case"mouseup":case"dragend":pi=!1,ua(m,t,h);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":ua(m,t,h)}var P;if(lo)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else $n?Fu(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(Du&&t.locale!=="ko"&&($n||_!=="onCompositionStart"?_==="onCompositionEnd"&&$n&&(P=ju()):(en=h,no="value"in en?en.value:en.textContent,$n=!0)),C=jr(c,_),0<C.length&&(_=new Jo(_,e,null,t,h),m.push({event:_,listeners:C}),P?_.data=P:(P=Hu(t),P!==null&&(_.data=P)))),(P=Rd?Ld(e,t):Id(e,t))&&(c=jr(c,"onBeforeInput"),0<c.length&&(h=new Jo("onBeforeInput","beforeinput",null,t,h),m.push({event:h,listeners:c}),h.data=P))}bu(m,n)})}function Ht(e,n,t){return{instance:e,listener:n,currentTarget:t}}function jr(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Tt(e,t),i!=null&&r.unshift(Ht(e,i,l)),i=Tt(e,n),i!=null&&r.push(Ht(e,i,l))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function da(e,n,t,r,l){for(var i=n._reactName,o=[];t!==null&&t!==r;){var a=t,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,l?(u=Tt(t,i),u!=null&&o.unshift(Ht(t,u,a))):l||(u=Tt(t,i),u!=null&&o.push(Ht(t,u,a)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Kd=/\r\n?/g,Gd=/\u0000|\uFFFD/g;function fa(e){return(typeof e=="string"?e:""+e).replace(Kd,`
`).replace(Gd,"")}function dr(e,n,t){if(n=fa(n),fa(e)!==n&&t)throw Error(v(425))}function Dr(){}var mi=null,hi=null;function gi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,Xd=typeof clearTimeout=="function"?clearTimeout:void 0,pa=typeof Promise=="function"?Promise:void 0,Yd=typeof queueMicrotask=="function"?queueMicrotask:typeof pa<"u"?function(e){return pa.resolve(null).then(e).catch(qd)}:vi;function qd(e){setTimeout(function(){throw e})}function jl(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),$t(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);$t(n)}function an(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ma(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var at=Math.random().toString(36).slice(2),$e="__reactFiber$"+at,Bt="__reactProps$"+at,Qe="__reactContainer$"+at,yi="__reactEvents$"+at,Zd="__reactListeners$"+at,bd="__reactHandles$"+at;function kn(e){var n=e[$e];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Qe]||t[$e]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ma(e);e!==null;){if(t=e[$e])return t;e=ma(e)}return n}e=t,t=e.parentNode}return null}function Zt(e){return e=e[$e]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function il(e){return e[Bt]||null}var xi=[],Hn=-1;function hn(e){return{current:e}}function $(e){0>Hn||(e.current=xi[Hn],xi[Hn]=null,Hn--)}function O(e,n){Hn++,xi[Hn]=e.current,e.current=n}var pn={},le=hn(pn),de=hn(!1),_n=pn;function Jn(e,n){var t=e.type.contextTypes;if(!t)return pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in t)l[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function fe(e){return e=e.childContextTypes,e!=null}function Fr(){$(de),$(le)}function ha(e,n,t){if(le.current!==pn)throw Error(v(168));O(le,n),O(de,t)}function es(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(v(108,$c(e)||"Unknown",l));return B({},t,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pn,_n=le.current,O(le,e),O(de,de.current),!0}function ga(e,n,t){var r=e.stateNode;if(!r)throw Error(v(169));t?(e=es(e,n,_n),r.__reactInternalMemoizedMergedChildContext=e,$(de),$(le),O(le,e)):$(de),O(de,t)}var He=null,ol=!1,Dl=!1;function ns(e){He===null?He=[e]:He.push(e)}function Jd(e){ol=!0,ns(e)}function gn(){if(!Dl&&He!==null){Dl=!0;var e=0,n=T;try{var t=He;for(T=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}He=null,ol=!1}catch(l){throw He!==null&&(He=He.slice(e+1)),_u(Zi,gn),l}finally{T=n,Dl=!1}}return null}var Bn=[],Un=0,Br=null,Ur=0,we=[],ke=0,Mn=null,Be=1,Ue="";function xn(e,n){Bn[Un++]=Ur,Bn[Un++]=Br,Br=e,Ur=n}function ts(e,n,t){we[ke++]=Be,we[ke++]=Ue,we[ke++]=Mn,Mn=e;var r=Be;e=Ue;var l=32-Le(r)-1;r&=~(1<<l),t+=1;var i=32-Le(n)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Be=1<<32-Le(n)+l|t<<l|r,Ue=i+e}else Be=1<<i|t<<l|r,Ue=e}function oo(e){e.return!==null&&(xn(e,1),ts(e,1,0))}function ao(e){for(;e===Br;)Br=Bn[--Un],Bn[Un]=null,Ur=Bn[--Un],Bn[Un]=null;for(;e===Mn;)Mn=we[--ke],we[ke]=null,Ue=we[--ke],we[ke]=null,Be=we[--ke],we[ke]=null}var ge=null,he=null,D=!1,Re=null;function rs(e,n){var t=Se(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function va(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ge=e,he=an(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ge=e,he=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Mn!==null?{id:Be,overflow:Ue}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Se(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ge=e,he=null,!0):!1;default:return!1}}function wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ki(e){if(D){var n=he;if(n){var t=n;if(!va(e,n)){if(wi(e))throw Error(v(418));n=an(t.nextSibling);var r=ge;n&&va(e,n)?rs(r,t):(e.flags=e.flags&-4097|2,D=!1,ge=e)}}else{if(wi(e))throw Error(v(418));e.flags=e.flags&-4097|2,D=!1,ge=e}}}function ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function fr(e){if(e!==ge)return!1;if(!D)return ya(e),D=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gi(e.type,e.memoizedProps)),n&&(n=he)){if(wi(e))throw ls(),Error(v(418));for(;n;)rs(e,n),n=an(n.nextSibling)}if(ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){he=an(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}he=null}}else he=ge?an(e.stateNode.nextSibling):null;return!0}function ls(){for(var e=he;e;)e=an(e.nextSibling)}function et(){he=ge=null,D=!1}function uo(e){Re===null?Re=[e]:Re.push(e)}var ef=Xe.ReactCurrentBatchConfig;function ht(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var r=t.stateNode}if(!r)throw Error(v(147,e));var l=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(o){var a=l.refs;o===null?delete a[i]:a[i]=o},n._stringRef=i,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function pr(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function xa(e){var n=e._init;return n(e._payload)}function is(e){function n(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function t(d,s){if(!e)return null;for(;s!==null;)n(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function l(d,s){return d=dn(d,s),d.index=0,d.sibling=null,d}function i(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=2,s)):(d.flags|=1048576,s)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,s,f,g){return s===null||s.tag!==6?(s=Ql(f,d.mode,g),s.return=d,s):(s=l(s,f),s.return=d,s)}function u(d,s,f,g){var S=f.type;return S===An?h(d,s,f.props.children,g,f.key):s!==null&&(s.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&xa(S)===s.type)?(g=l(s,f.props),g.ref=ht(d,s,f),g.return=d,g):(g=zr(f.type,f.key,f.props,null,d.mode,g),g.ref=ht(d,s,f),g.return=d,g)}function c(d,s,f,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=Kl(f,d.mode,g),s.return=d,s):(s=l(s,f.children||[]),s.return=d,s)}function h(d,s,f,g,S){return s===null||s.tag!==7?(s=Pn(f,d.mode,g,S),s.return=d,s):(s=l(s,f),s.return=d,s)}function m(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Ql(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case tr:return f=zr(s.type,s.key,s.props,null,d.mode,f),f.ref=ht(d,null,s),f.return=d,f;case On:return s=Kl(s,d.mode,f),s.return=d,s;case qe:var g=s._init;return m(d,g(s._payload),f)}if(xt(s)||ct(s))return s=Pn(s,d.mode,f,null),s.return=d,s;pr(d,s)}return null}function p(d,s,f,g){var S=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(d,s,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:return f.key===S?u(d,s,f,g):null;case On:return f.key===S?c(d,s,f,g):null;case qe:return S=f._init,p(d,s,S(f._payload),g)}if(xt(f)||ct(f))return S!==null?null:h(d,s,f,g,null);pr(d,f)}return null}function y(d,s,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(s,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case tr:return d=d.get(g.key===null?f:g.key)||null,u(s,d,g,S);case On:return d=d.get(g.key===null?f:g.key)||null,c(s,d,g,S);case qe:var C=g._init;return y(d,s,f,C(g._payload),S)}if(xt(g)||ct(g))return d=d.get(f)||null,h(s,d,g,S,null);pr(s,g)}return null}function x(d,s,f,g){for(var S=null,C=null,P=s,_=s=0,W=null;P!==null&&_<f.length;_++){P.index>_?(W=P,P=null):W=P.sibling;var R=p(d,P,f[_],g);if(R===null){P===null&&(P=W);break}e&&P&&R.alternate===null&&n(d,P),s=i(R,s,_),C===null?S=R:C.sibling=R,C=R,P=W}if(_===f.length)return t(d,P),D&&xn(d,_),S;if(P===null){for(;_<f.length;_++)P=m(d,f[_],g),P!==null&&(s=i(P,s,_),C===null?S=P:C.sibling=P,C=P);return D&&xn(d,_),S}for(P=r(d,P);_<f.length;_++)W=y(P,d,_,f[_],g),W!==null&&(e&&W.alternate!==null&&P.delete(W.key===null?_:W.key),s=i(W,s,_),C===null?S=W:C.sibling=W,C=W);return e&&P.forEach(function(_e){return n(d,_e)}),D&&xn(d,_),S}function w(d,s,f,g){var S=ct(f);if(typeof S!="function")throw Error(v(150));if(f=S.call(f),f==null)throw Error(v(151));for(var C=S=null,P=s,_=s=0,W=null,R=f.next();P!==null&&!R.done;_++,R=f.next()){P.index>_?(W=P,P=null):W=P.sibling;var _e=p(d,P,R.value,g);if(_e===null){P===null&&(P=W);break}e&&P&&_e.alternate===null&&n(d,P),s=i(_e,s,_),C===null?S=_e:C.sibling=_e,C=_e,P=W}if(R.done)return t(d,P),D&&xn(d,_),S;if(P===null){for(;!R.done;_++,R=f.next())R=m(d,R.value,g),R!==null&&(s=i(R,s,_),C===null?S=R:C.sibling=R,C=R);return D&&xn(d,_),S}for(P=r(d,P);!R.done;_++,R=f.next())R=y(P,d,_,R.value,g),R!==null&&(e&&R.alternate!==null&&P.delete(R.key===null?_:R.key),s=i(R,s,_),C===null?S=R:C.sibling=R,C=R);return e&&P.forEach(function(ut){return n(d,ut)}),D&&xn(d,_),S}function j(d,s,f,g){if(typeof f=="object"&&f!==null&&f.type===An&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case tr:e:{for(var S=f.key,C=s;C!==null;){if(C.key===S){if(S=f.type,S===An){if(C.tag===7){t(d,C.sibling),s=l(C,f.props.children),s.return=d,d=s;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&xa(S)===C.type){t(d,C.sibling),s=l(C,f.props),s.ref=ht(d,C,f),s.return=d,d=s;break e}t(d,C);break}else n(d,C);C=C.sibling}f.type===An?(s=Pn(f.props.children,d.mode,g,f.key),s.return=d,d=s):(g=zr(f.type,f.key,f.props,null,d.mode,g),g.ref=ht(d,s,f),g.return=d,d=g)}return o(d);case On:e:{for(C=f.key;s!==null;){if(s.key===C)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){t(d,s.sibling),s=l(s,f.children||[]),s.return=d,d=s;break e}else{t(d,s);break}else n(d,s);s=s.sibling}s=Kl(f,d.mode,g),s.return=d,d=s}return o(d);case qe:return C=f._init,j(d,s,C(f._payload),g)}if(xt(f))return x(d,s,f,g);if(ct(f))return w(d,s,f,g);pr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(t(d,s.sibling),s=l(s,f),s.return=d,d=s):(t(d,s),s=Ql(f,d.mode,g),s.return=d,d=s),o(d)):t(d,s)}return j}var nt=is(!0),os=is(!1),Wr=hn(null),Vr=null,Wn=null,so=null;function co(){so=Wn=Vr=null}function fo(e){var n=Wr.current;$(Wr),e._currentValue=n}function Si(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function qn(e,n){Vr=e,so=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(ce=!0),e.firstContext=null)}function Ce(e){var n=e._currentValue;if(so!==e)if(e={context:e,memoizedValue:n,next:null},Wn===null){if(Vr===null)throw Error(v(308));Wn=e,Vr.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return n}var Sn=null;function po(e){Sn===null?Sn=[e]:Sn.push(e)}function as(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,po(n)):(t.next=l.next,l.next=t),n.interleaved=t,Ke(e,r)}function Ke(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ze=!1;function mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function us(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function un(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,Ke(e,t)}return l=r.interleaved,l===null?(n.next=n,po(r)):(n.next=l.next,l.next=n),r.interleaved=n,Ke(e,t)}function Er(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,bi(e,t)}}function wa(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?l=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?l=i=n:i=i.next=n}else l=i=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Qr(e,n,t,r){var l=e.updateQueue;Ze=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(i!==null){var m=l.baseState;o=0,h=c=u=null,a=i;do{var p=a.lane,y=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(p=n,y=t,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(y,m,p);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,p=typeof x=="function"?x.call(y,m,p):x,p==null)break e;m=B({},m,p);break e;case 2:Ze=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,u=m):h=h.next=y,o|=p;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;p=a,a=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(!0);if(h===null&&(u=m),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=h,n=l.shared.interleaved,n!==null){l=n;do o|=l.lane,l=l.next;while(l!==n)}else i===null&&(l.shared.lanes=0);zn|=o,e.lanes=o,e.memoizedState=m}}function ka(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var bt={},De=hn(bt),Ut=hn(bt),Wt=hn(bt);function En(e){if(e===bt)throw Error(v(174));return e}function ho(e,n){switch(O(Wt,n),O(Ut,e),O(De,bt),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ti(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ti(n,e)}$(De),O(De,n)}function tt(){$(De),$(Ut),$(Wt)}function ss(e){En(Wt.current);var n=En(De.current),t=ti(n,e.type);n!==t&&(O(Ut,e),O(De,t))}function go(e){Ut.current===e&&($(De),$(Ut))}var F=hn(0);function Kr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fl=[];function vo(){for(var e=0;e<Fl.length;e++)Fl[e]._workInProgressVersionPrimary=null;Fl.length=0}var Cr=Xe.ReactCurrentDispatcher,Hl=Xe.ReactCurrentBatchConfig,Nn=0,H=null,G=null,q=null,Gr=!1,Mt=!1,Vt=0,nf=0;function ne(){throw Error(v(321))}function yo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Te(e[t],n[t]))return!1;return!0}function xo(e,n,t,r,l,i){if(Nn=i,H=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Cr.current=e===null||e.memoizedState===null?of:af,e=t(r,l),Mt){i=0;do{if(Mt=!1,Vt=0,25<=i)throw Error(v(301));i+=1,q=G=null,n.updateQueue=null,Cr.current=uf,e=t(r,l)}while(Mt)}if(Cr.current=Xr,n=G!==null&&G.next!==null,Nn=0,q=G=H=null,Gr=!1,n)throw Error(v(300));return e}function wo(){var e=Vt!==0;return Vt=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?H.memoizedState=q=e:q=q.next=e,q}function Pe(){if(G===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var n=q===null?H.memoizedState:q.next;if(n!==null)q=n,G=e;else{if(e===null)throw Error(v(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},q===null?H.memoizedState=q=e:q=q.next=e}return q}function Qt(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=G,l=r.baseQueue,i=t.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,t.pending=null}if(l!==null){i=l.next,r=r.baseState;var a=o=null,u=null,c=i;do{var h=c.lane;if((Nn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,o=r):u=u.next=m,H.lanes|=h,zn|=h}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=a,Te(r,n.memoizedState)||(ce=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do i=l.lane,H.lanes|=i,zn|=i,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ul(e){var n=Pe(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var r=t.dispatch,l=t.pending,i=n.memoizedState;if(l!==null){t.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Te(i,n.memoizedState)||(ce=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function cs(){}function ds(e,n){var t=H,r=Pe(),l=n(),i=!Te(r.memoizedState,l);if(i&&(r.memoizedState=l,ce=!0),r=r.queue,ko(ms.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||q!==null&&q.memoizedState.tag&1){if(t.flags|=2048,Kt(9,ps.bind(null,t,r,l,n),void 0,null),Z===null)throw Error(v(349));Nn&30||fs(t,n,l)}return l}function fs(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function ps(e,n,t,r){n.value=t,n.getSnapshot=r,hs(n)&&gs(e)}function ms(e,n,t){return t(function(){hs(n)&&gs(e)})}function hs(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Te(e,t)}catch{return!0}}function gs(e){var n=Ke(e,1);n!==null&&Ie(n,e,1,-1)}function Sa(e){var n=Ae();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},n.queue=e,e=e.dispatch=lf.bind(null,H,e),[n.memoizedState,e]}function Kt(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=H.updateQueue,n===null?(n={lastEffect:null,stores:null},H.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function vs(){return Pe().memoizedState}function Pr(e,n,t,r){var l=Ae();H.flags|=e,l.memoizedState=Kt(1|n,t,void 0,r===void 0?null:r)}function al(e,n,t,r){var l=Pe();r=r===void 0?null:r;var i=void 0;if(G!==null){var o=G.memoizedState;if(i=o.destroy,r!==null&&yo(r,o.deps)){l.memoizedState=Kt(n,t,i,r);return}}H.flags|=e,l.memoizedState=Kt(1|n,t,i,r)}function Ea(e,n){return Pr(8390656,8,e,n)}function ko(e,n){return al(2048,8,e,n)}function ys(e,n){return al(4,2,e,n)}function xs(e,n){return al(4,4,e,n)}function ws(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ks(e,n,t){return t=t!=null?t.concat([e]):null,al(4,4,ws.bind(null,n,e),t)}function So(){}function Ss(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yo(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Es(e,n){var t=Pe();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&yo(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Cs(e,n,t){return Nn&21?(Te(t,n)||(t=zu(),H.lanes|=t,zn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=t)}function tf(e,n){var t=T;T=t!==0&&4>t?t:4,e(!0);var r=Hl.transition;Hl.transition={};try{e(!1),n()}finally{T=t,Hl.transition=r}}function Ps(){return Pe().memoizedState}function rf(e,n,t){var r=cn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},_s(e))Ms(n,t);else if(t=as(e,n,t,r),t!==null){var l=oe();Ie(t,e,r,l),Ns(t,n,r)}}function lf(e,n,t){var r=cn(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(_s(e))Ms(n,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,a=i(o,t);if(l.hasEagerState=!0,l.eagerState=a,Te(a,o)){var u=n.interleaved;u===null?(l.next=l,po(n)):(l.next=u.next,u.next=l),n.interleaved=l;return}}catch{}finally{}t=as(e,n,l,r),t!==null&&(l=oe(),Ie(t,e,r,l),Ns(t,n,r))}}function _s(e){var n=e.alternate;return e===H||n!==null&&n===H}function Ms(e,n){Mt=Gr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Ns(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,bi(e,t)}}var Xr={readContext:Ce,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},of={readContext:Ce,useCallback:function(e,n){return Ae().memoizedState=[e,n===void 0?null:n],e},useContext:Ce,useEffect:Ea,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Pr(4194308,4,ws.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Pr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Pr(4,2,e,n)},useMemo:function(e,n){var t=Ae();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Ae();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=rf.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var n=Ae();return e={current:e},n.memoizedState=e},useState:Sa,useDebugValue:So,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=Sa(!1),n=e[0];return e=tf.bind(null,e[1]),Ae().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=H,l=Ae();if(D){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),Z===null)throw Error(v(349));Nn&30||fs(r,n,t)}l.memoizedState=t;var i={value:t,getSnapshot:n};return l.queue=i,Ea(ms.bind(null,r,i,e),[e]),r.flags|=2048,Kt(9,ps.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Ae(),n=Z.identifierPrefix;if(D){var t=Ue,r=Be;t=(r&~(1<<32-Le(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Vt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=nf++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},af={readContext:Ce,useCallback:Ss,useContext:Ce,useEffect:ko,useImperativeHandle:ks,useInsertionEffect:ys,useLayoutEffect:xs,useMemo:Es,useReducer:Bl,useRef:vs,useState:function(){return Bl(Qt)},useDebugValue:So,useDeferredValue:function(e){var n=Pe();return Cs(n,G.memoizedState,e)},useTransition:function(){var e=Bl(Qt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:cs,useSyncExternalStore:ds,useId:Ps,unstable_isNewReconciler:!1},uf={readContext:Ce,useCallback:Ss,useContext:Ce,useEffect:ko,useImperativeHandle:ks,useInsertionEffect:ys,useLayoutEffect:xs,useMemo:Es,useReducer:Ul,useRef:vs,useState:function(){return Ul(Qt)},useDebugValue:So,useDeferredValue:function(e){var n=Pe();return G===null?n.memoizedState=e:Cs(n,G.memoizedState,e)},useTransition:function(){var e=Ul(Qt)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:cs,useSyncExternalStore:ds,useId:Ps,unstable_isNewReconciler:!1};function Ne(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ei(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ul={isMounted:function(e){return(e=e._reactInternals)?In(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=oe(),l=cn(e),i=We(r,l);i.payload=n,t!=null&&(i.callback=t),n=un(e,i,l),n!==null&&(Ie(n,e,l,r),Er(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=oe(),l=cn(e),i=We(r,l);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=un(e,i,l),n!==null&&(Ie(n,e,l,r),Er(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=oe(),r=cn(e),l=We(t,r);l.tag=2,n!=null&&(l.callback=n),n=un(e,l,r),n!==null&&(Ie(n,e,r,t),Er(n,e,r))}};function Ca(e,n,t,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!Dt(t,r)||!Dt(l,i):!0}function zs(e,n,t){var r=!1,l=pn,i=n.contextType;return typeof i=="object"&&i!==null?i=Ce(i):(l=fe(n)?_n:le.current,r=n.contextTypes,i=(r=r!=null)?Jn(e,l):pn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ul,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),n}function Pa(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ul.enqueueReplaceState(n,n.state,null)}function Ci(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},mo(e);var i=n.contextType;typeof i=="object"&&i!==null?l.context=Ce(i):(i=fe(n)?_n:le.current,l.context=Jn(e,i)),l.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ei(e,n,i,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(n=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&ul.enqueueReplaceState(l,l.state,null),Qr(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function rt(e,n){try{var t="",r=n;do t+=Ac(r),r=r.return;while(r);var l=t}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:l,digest:null}}function Wl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Pi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var sf=typeof WeakMap=="function"?WeakMap:Map;function Rs(e,n,t){t=We(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){qr||(qr=!0,Ai=r),Pi(e,n)},t}function Ls(e,n,t){t=We(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){Pi(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Pi(e,n),typeof r!="function"&&(sn===null?sn=new Set([this]):sn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function _a(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new sf;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Ef.bind(null,e,n,t),n.then(e,e))}function Ma(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Na(e,n,t,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=We(-1,1),n.tag=2,un(t,n,1))),t.lanes|=1),e)}var cf=Xe.ReactCurrentOwner,ce=!1;function ie(e,n,t,r){n.child=e===null?os(n,null,t,r):nt(n,e.child,t,r)}function za(e,n,t,r,l){t=t.render;var i=n.ref;return qn(n,l),r=xo(e,n,t,r,i,l),t=wo(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ge(e,n,l)):(D&&t&&oo(n),n.flags|=1,ie(e,n,r,l),n.child)}function Ra(e,n,t,r,l){if(e===null){var i=t.type;return typeof i=="function"&&!Ro(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Is(e,n,i,r,l)):(e=zr(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:Dt,t(o,r)&&e.ref===n.ref)return Ge(e,n,l)}return n.flags|=1,e=dn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Is(e,n,t,r,l){if(e!==null){var i=e.memoizedProps;if(Dt(i,r)&&e.ref===n.ref)if(ce=!1,n.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(ce=!0);else return n.lanes=e.lanes,Ge(e,n,l)}return _i(e,n,t,r,l)}function Ts(e,n,t){var r=n.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Qn,me),me|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,O(Qn,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,O(Qn,me),me|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,O(Qn,me),me|=r;return ie(e,n,l,t),n.child}function Os(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function _i(e,n,t,r,l){var i=fe(t)?_n:le.current;return i=Jn(n,i),qn(n,l),t=xo(e,n,t,r,i,l),r=wo(),e!==null&&!ce?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,Ge(e,n,l)):(D&&r&&oo(n),n.flags|=1,ie(e,n,t,l),n.child)}function La(e,n,t,r,l){if(fe(t)){var i=!0;Hr(n)}else i=!1;if(qn(n,l),n.stateNode===null)_r(e,n),zs(n,t,r),Ci(n,t,r,l),r=!0;else if(e===null){var o=n.stateNode,a=n.memoizedProps;o.props=a;var u=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ce(c):(c=fe(t)?_n:le.current,c=Jn(n,c));var h=t.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Pa(n,o,r,c),Ze=!1;var p=n.memoizedState;o.state=p,Qr(n,r,o,l),u=n.memoizedState,a!==r||p!==u||de.current||Ze?(typeof h=="function"&&(Ei(n,t,h,r),u=n.memoizedState),(a=Ze||Ca(n,t,a,r,p,u,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,us(e,n),a=n.memoizedProps,c=n.type===n.elementType?a:Ne(n.type,a),o.props=c,m=n.pendingProps,p=o.context,u=t.contextType,typeof u=="object"&&u!==null?u=Ce(u):(u=fe(t)?_n:le.current,u=Jn(n,u));var y=t.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==m||p!==u)&&Pa(n,o,r,u),Ze=!1,p=n.memoizedState,o.state=p,Qr(n,r,o,l);var x=n.memoizedState;a!==m||p!==x||de.current||Ze?(typeof y=="function"&&(Ei(n,t,y,r),x=n.memoizedState),(c=Ze||Ca(n,t,c,r,p,x,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),o.props=r,o.state=x,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),r=!1)}return Mi(e,n,t,r,i,l)}function Mi(e,n,t,r,l,i){Os(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return l&&ga(n,t,!1),Ge(e,n,i);r=n.stateNode,cf.current=n;var a=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=nt(n,e.child,null,i),n.child=nt(n,null,a,i)):ie(e,n,a,i),n.memoizedState=r.state,l&&ga(n,t,!0),n.child}function As(e){var n=e.stateNode;n.pendingContext?ha(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ha(e,n.context,!1),ho(e,n.containerInfo)}function Ia(e,n,t,r,l){return et(),uo(l),n.flags|=256,ie(e,n,t,r),n.child}var Ni={dehydrated:null,treeContext:null,retryLane:0};function zi(e){return{baseLanes:e,cachePool:null,transitions:null}}function $s(e,n,t){var r=n.pendingProps,l=F.current,i=!1,o=(n.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),O(F,l&1),e===null)return ki(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,i?(r=n.mode,i=n.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=dl(o,r,0,null),e=Pn(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=zi(t),n.memoizedState=Ni,e):Eo(n,o));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return df(e,n,o,r,a,l,t);if(i){i=r.fallback,o=n.mode,l=e.child,a=l.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=dn(l,u),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?i=dn(a,i):(i=Pn(i,o,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,o=e.child.memoizedState,o=o===null?zi(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~t,n.memoizedState=Ni,r}return i=e.child,e=i.sibling,r=dn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Eo(e,n){return n=dl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function mr(e,n,t,r){return r!==null&&uo(r),nt(n,e.child,null,t),e=Eo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function df(e,n,t,r,l,i,o){if(t)return n.flags&256?(n.flags&=-257,r=Wl(Error(v(422))),mr(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,l=n.mode,r=dl({mode:"visible",children:r.children},l,0,null),i=Pn(i,l,o,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&nt(n,e.child,null,o),n.child.memoizedState=zi(o),n.memoizedState=Ni,i);if(!(n.mode&1))return mr(e,n,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(v(419)),r=Wl(i,r,void 0),mr(e,n,o,r)}if(a=(o&e.childLanes)!==0,ce||a){if(r=Z,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ke(e,l),Ie(r,e,l,-1))}return zo(),r=Wl(Error(v(421))),mr(e,n,o,r)}return l.data==="$?"?(n.flags|=128,n.child=e.child,n=Cf.bind(null,e),l._reactRetry=n,null):(e=i.treeContext,he=an(l.nextSibling),ge=n,D=!0,Re=null,e!==null&&(we[ke++]=Be,we[ke++]=Ue,we[ke++]=Mn,Be=e.id,Ue=e.overflow,Mn=n),n=Eo(n,r.children),n.flags|=4096,n)}function Ta(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Si(e.return,n,t)}function Vl(e,n,t,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=l)}function js(e,n,t){var r=n.pendingProps,l=r.revealOrder,i=r.tail;if(ie(e,n,r.children,t),r=F.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ta(e,t,n);else if(e.tag===19)Ta(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(F,r),!(n.mode&1))n.memoizedState=null;else switch(l){case"forwards":for(t=n.child,l=null;t!==null;)e=t.alternate,e!==null&&Kr(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Vl(n,!1,l,t,i);break;case"backwards":for(t=null,l=n.child,n.child=null;l!==null;){if(e=l.alternate,e!==null&&Kr(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Vl(n,!0,t,null,i);break;case"together":Vl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _r(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ge(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),zn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=dn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function ff(e,n,t){switch(n.tag){case 3:As(n),et();break;case 5:ss(n);break;case 1:fe(n.type)&&Hr(n);break;case 4:ho(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;O(Wr,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(O(F,F.current&1),n.flags|=128,null):t&n.child.childLanes?$s(e,n,t):(O(F,F.current&1),e=Ge(e,n,t),e!==null?e.sibling:null);O(F,F.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return js(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),O(F,F.current),r)break;return null;case 22:case 23:return n.lanes=0,Ts(e,n,t)}return Ge(e,n,t)}var Ds,Ri,Fs,Hs;Ds=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ri=function(){};Fs=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,En(De.current);var i=null;switch(t){case"input":l=bl(e,l),r=bl(e,r),i=[];break;case"select":l=B({},l,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":l=ni(e,l),r=ni(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Dr)}ri(t,r);var o;t=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lt.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(t||(t={}),t[o]=u[o])}else t||(i||(i=[]),i.push(c,t)),t=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lt.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&A("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};Hs=function(e,n,t,r){t!==r&&(n.flags|=4)};function gt(e,n){if(!D)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function pf(e,n,t){var r=n.pendingProps;switch(ao(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return fe(n.type)&&Fr(),te(n),null;case 3:return r=n.stateNode,tt(),$(de),$(le),vo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Re!==null&&(Di(Re),Re=null))),Ri(e,n),te(n),null;case 5:go(n);var l=En(Wt.current);if(t=n.type,e!==null&&n.stateNode!=null)Fs(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(v(166));return te(n),null}if(e=En(De.current),fr(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[$e]=n,r[Bt]=i,e=(n.mode&1)!==0,t){case"dialog":A("cancel",r),A("close",r);break;case"iframe":case"object":case"embed":A("load",r);break;case"video":case"audio":for(l=0;l<kt.length;l++)A(kt[l],r);break;case"source":A("error",r);break;case"img":case"image":case"link":A("error",r),A("load",r);break;case"details":A("toggle",r);break;case"input":Uo(r,i),A("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},A("invalid",r);break;case"textarea":Vo(r,i),A("invalid",r)}ri(t,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&dr(r.textContent,a,e),l=["children",""+a]):Lt.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&A("scroll",r)}switch(t){case"input":rr(r),Wo(r,i,!0);break;case"textarea":rr(r),Qo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Dr)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[$e]=n,e[Bt]=r,Ds(e,n,!1,!1),n.stateNode=e;e:{switch(o=li(t,r),t){case"dialog":A("cancel",e),A("close",e),l=r;break;case"iframe":case"object":case"embed":A("load",e),l=r;break;case"video":case"audio":for(l=0;l<kt.length;l++)A(kt[l],e);l=r;break;case"source":A("error",e),l=r;break;case"img":case"image":case"link":A("error",e),A("load",e),l=r;break;case"details":A("toggle",e),l=r;break;case"input":Uo(e,r),l=bl(e,r),A("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=B({},r,{value:void 0}),A("invalid",e);break;case"textarea":Vo(e,r),l=ni(e,r),A("invalid",e);break;default:l=r}ri(t,l),a=l;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?vu(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&hu(e,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&It(e,u):typeof u=="number"&&It(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Lt.hasOwnProperty(i)?u!=null&&i==="onScroll"&&A("scroll",e):u!=null&&Ki(e,i,u,o))}switch(t){case"input":rr(e),Wo(e,r,!1);break;case"textarea":rr(e),Qo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+fn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Kn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Dr)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)Hs(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(v(166));if(t=En(Wt.current),En(De.current),fr(n)){if(r=n.stateNode,t=n.memoizedProps,r[$e]=n,(i=r.nodeValue!==t)&&(e=ge,e!==null))switch(e.tag){case 3:dr(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&dr(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[$e]=n,n.stateNode=r}return te(n),null;case 13:if($(F),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&he!==null&&n.mode&1&&!(n.flags&128))ls(),et(),n.flags|=98560,i=!1;else if(i=fr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[$e]=n}else et(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),i=!1}else Re!==null&&(Di(Re),Re=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||F.current&1?X===0&&(X=3):zo())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return tt(),Ri(e,n),e===null&&Ft(n.stateNode.containerInfo),te(n),null;case 10:return fo(n.type._context),te(n),null;case 17:return fe(n.type)&&Fr(),te(n),null;case 19:if($(F),i=n.memoizedState,i===null)return te(n),null;if(r=(n.flags&128)!==0,o=i.rendering,o===null)if(r)gt(i,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=Kr(e),o!==null){for(n.flags|=128,gt(i,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return O(F,F.current&1|2),n.child}e=e.sibling}i.tail!==null&&Q()>lt&&(n.flags|=128,r=!0,gt(i,!1),n.lanes=4194304)}else{if(!r)if(e=Kr(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),gt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!D)return te(n),null}else 2*Q()-i.renderingStartTime>lt&&t!==1073741824&&(n.flags|=128,r=!0,gt(i,!1),n.lanes=4194304);i.isBackwards?(o.sibling=n.child,n.child=o):(t=i.last,t!==null?t.sibling=o:n.child=o,i.last=o)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Q(),n.sibling=null,t=F.current,O(F,r?t&1|2:t&1),n):(te(n),null);case 22:case 23:return No(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?me&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function mf(e,n){switch(ao(n),n.tag){case 1:return fe(n.type)&&Fr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(),$(de),$(le),vo(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return go(n),null;case 13:if($(F),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));et()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return $(F),null;case 4:return tt(),null;case 10:return fo(n.type._context),null;case 22:case 23:return No(),null;case 24:return null;default:return null}}var hr=!1,re=!1,hf=typeof WeakSet=="function"?WeakSet:Set,k=null;function Vn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){U(e,n,r)}else t.current=null}function Li(e,n,t){try{t()}catch(r){U(e,n,r)}}var Oa=!1;function gf(e,n){if(mi=Ar,e=Qu(),io(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,a=-1,u=-1,c=0,h=0,m=e,p=null;n:for(;;){for(var y;m!==t||l!==0&&m.nodeType!==3||(a=o+l),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(y=m.firstChild)!==null;)p=m,m=y;for(;;){if(m===e)break n;if(p===t&&++c===l&&(a=o),p===i&&++h===r&&(u=o),(y=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=y}t=a===-1||u===-1?null:{start:a,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(hi={focusedElem:e,selectionRange:t},Ar=!1,k=n;k!==null;)if(n=k,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,k=e;else for(;k!==null;){n=k;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,j=x.memoizedState,d=n.stateNode,s=d.getSnapshotBeforeUpdate(n.elementType===n.type?w:Ne(n.type,w),j);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=n.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(g){U(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,k=e;break}k=n.return}return x=Oa,Oa=!1,x}function Nt(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Li(n,t,i)}l=l.next}while(l!==r)}}function sl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ii(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Bs(e){var n=e.alternate;n!==null&&(e.alternate=null,Bs(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[$e],delete n[Bt],delete n[yi],delete n[Zd],delete n[bd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Us(e){return e.tag===5||e.tag===3||e.tag===4}function Aa(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Us(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ti(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Dr));else if(r!==4&&(e=e.child,e!==null))for(Ti(e,n,t),e=e.sibling;e!==null;)Ti(e,n,t),e=e.sibling}function Oi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oi(e,n,t),e=e.sibling;e!==null;)Oi(e,n,t),e=e.sibling}var b=null,ze=!1;function Ye(e,n,t){for(t=t.child;t!==null;)Ws(e,n,t),t=t.sibling}function Ws(e,n,t){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(nl,t)}catch{}switch(t.tag){case 5:re||Vn(t,n);case 6:var r=b,l=ze;b=null,Ye(e,n,t),b=r,ze=l,b!==null&&(ze?(e=b,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):b.removeChild(t.stateNode));break;case 18:b!==null&&(ze?(e=b,t=t.stateNode,e.nodeType===8?jl(e.parentNode,t):e.nodeType===1&&jl(e,t),$t(e)):jl(b,t.stateNode));break;case 4:r=b,l=ze,b=t.stateNode.containerInfo,ze=!0,Ye(e,n,t),b=r,ze=l;break;case 0:case 11:case 14:case 15:if(!re&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Li(t,n,o),l=l.next}while(l!==r)}Ye(e,n,t);break;case 1:if(!re&&(Vn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(a){U(t,n,a)}Ye(e,n,t);break;case 21:Ye(e,n,t);break;case 22:t.mode&1?(re=(r=re)||t.memoizedState!==null,Ye(e,n,t),re=r):Ye(e,n,t);break;default:Ye(e,n,t)}}function $a(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new hf),n.forEach(function(r){var l=Pf.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Me(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var i=e,o=n,a=o;e:for(;a!==null;){switch(a.tag){case 5:b=a.stateNode,ze=!1;break e;case 3:b=a.stateNode.containerInfo,ze=!0;break e;case 4:b=a.stateNode.containerInfo,ze=!0;break e}a=a.return}if(b===null)throw Error(v(160));Ws(i,o,l),b=null,ze=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){U(l,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Vs(n,e),n=n.sibling}function Vs(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(n,e),Oe(e),r&4){try{Nt(3,e,e.return),sl(3,e)}catch(w){U(e,e.return,w)}try{Nt(5,e,e.return)}catch(w){U(e,e.return,w)}}break;case 1:Me(n,e),Oe(e),r&512&&t!==null&&Vn(t,t.return);break;case 5:if(Me(n,e),Oe(e),r&512&&t!==null&&Vn(t,t.return),e.flags&32){var l=e.stateNode;try{It(l,"")}catch(w){U(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=t!==null?t.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&fu(l,i),li(a,o);var c=li(a,i);for(o=0;o<u.length;o+=2){var h=u[o],m=u[o+1];h==="style"?vu(l,m):h==="dangerouslySetInnerHTML"?hu(l,m):h==="children"?It(l,m):Ki(l,h,m,c)}switch(a){case"input":Jl(l,i);break;case"textarea":pu(l,i);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Kn(l,!!i.multiple,y,!1):p!==!!i.multiple&&(i.defaultValue!=null?Kn(l,!!i.multiple,i.defaultValue,!0):Kn(l,!!i.multiple,i.multiple?[]:"",!1))}l[Bt]=i}catch(w){U(e,e.return,w)}}break;case 6:if(Me(n,e),Oe(e),r&4){if(e.stateNode===null)throw Error(v(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){U(e,e.return,w)}}break;case 3:if(Me(n,e),Oe(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{$t(n.containerInfo)}catch(w){U(e,e.return,w)}break;case 4:Me(n,e),Oe(e);break;case 13:Me(n,e),Oe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(_o=Q())),r&4&&$a(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(re=(c=re)||h,Me(n,e),re=c):Me(n,e),Oe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(k=e,h=e.child;h!==null;){for(m=k=h;k!==null;){switch(p=k,y=p.child,p.tag){case 0:case 11:case 14:case 15:Nt(4,p,p.return);break;case 1:Vn(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,t=p.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(w){U(r,t,w)}}break;case 5:Vn(p,p.return);break;case 22:if(p.memoizedState!==null){Da(m);continue}}y!==null?(y.return=p,k=y):Da(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=gu("display",o))}catch(w){U(e,e.return,w)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(w){U(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Me(n,e),Oe(e),r&4&&$a(e);break;case 21:break;default:Me(n,e),Oe(e)}}function Oe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Us(t)){var r=t;break e}t=t.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(It(l,""),r.flags&=-33);var i=Aa(e);Oi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Aa(e);Ti(e,a,o);break;default:throw Error(v(161))}}catch(u){U(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vf(e,n,t){k=e,Qs(e)}function Qs(e,n,t){for(var r=(e.mode&1)!==0;k!==null;){var l=k,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||hr;if(!o){var a=l.alternate,u=a!==null&&a.memoizedState!==null||re;a=hr;var c=re;if(hr=o,(re=u)&&!c)for(k=l;k!==null;)o=k,u=o.child,o.tag===22&&o.memoizedState!==null?Fa(l):u!==null?(u.return=o,k=u):Fa(l);for(;i!==null;)k=i,Qs(i),i=i.sibling;k=l,hr=a,re=c}ja(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,k=i):ja(e)}}function ja(e){for(;k!==null;){var n=k;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||sl(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!re)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Ne(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&ka(n,i,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ka(n,o,t)}break;case 5:var a=n.stateNode;if(t===null&&n.flags&4){t=a;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&$t(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||n.flags&512&&Ii(n)}catch(p){U(n,n.return,p)}}if(n===e){k=null;break}if(t=n.sibling,t!==null){t.return=n.return,k=t;break}k=n.return}}function Da(e){for(;k!==null;){var n=k;if(n===e){k=null;break}var t=n.sibling;if(t!==null){t.return=n.return,k=t;break}k=n.return}}function Fa(e){for(;k!==null;){var n=k;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{sl(4,n)}catch(u){U(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var l=n.return;try{r.componentDidMount()}catch(u){U(n,l,u)}}var i=n.return;try{Ii(n)}catch(u){U(n,i,u)}break;case 5:var o=n.return;try{Ii(n)}catch(u){U(n,o,u)}}}catch(u){U(n,n.return,u)}if(n===e){k=null;break}var a=n.sibling;if(a!==null){a.return=n.return,k=a;break}k=n.return}}var yf=Math.ceil,Yr=Xe.ReactCurrentDispatcher,Co=Xe.ReactCurrentOwner,Ee=Xe.ReactCurrentBatchConfig,L=0,Z=null,K=null,J=0,me=0,Qn=hn(0),X=0,Gt=null,zn=0,cl=0,Po=0,zt=null,se=null,_o=0,lt=1/0,Fe=null,qr=!1,Ai=null,sn=null,gr=!1,nn=null,Zr=0,Rt=0,$i=null,Mr=-1,Nr=0;function oe(){return L&6?Q():Mr!==-1?Mr:Mr=Q()}function cn(e){return e.mode&1?L&2&&J!==0?J&-J:ef.transition!==null?(Nr===0&&(Nr=zu()),Nr):(e=T,e!==0||(e=window.event,e=e===void 0?16:$u(e.type)),e):1}function Ie(e,n,t,r){if(50<Rt)throw Rt=0,$i=null,Error(v(185));Yt(e,t,r),(!(L&2)||e!==Z)&&(e===Z&&(!(L&2)&&(cl|=t),X===4&&Je(e,J)),pe(e,r),t===1&&L===0&&!(n.mode&1)&&(lt=Q()+500,ol&&gn()))}function pe(e,n){var t=e.callbackNode;ed(e,n);var r=Or(e,e===Z?J:0);if(r===0)t!==null&&Xo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Xo(t),n===1)e.tag===0?Jd(Ha.bind(null,e)):ns(Ha.bind(null,e)),Yd(function(){!(L&6)&&gn()}),t=null;else{switch(Ru(r)){case 1:t=Zi;break;case 4:t=Mu;break;case 16:t=Tr;break;case 536870912:t=Nu;break;default:t=Tr}t=Js(t,Ks.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Ks(e,n){if(Mr=-1,Nr=0,L&6)throw Error(v(327));var t=e.callbackNode;if(Zn()&&e.callbackNode!==t)return null;var r=Or(e,e===Z?J:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=br(e,r);else{n=r;var l=L;L|=2;var i=Xs();(Z!==e||J!==n)&&(Fe=null,lt=Q()+500,Cn(e,n));do try{kf();break}catch(a){Gs(e,a)}while(!0);co(),Yr.current=i,L=l,K!==null?n=0:(Z=null,J=0,n=X)}if(n!==0){if(n===2&&(l=si(e),l!==0&&(r=l,n=ji(e,l))),n===1)throw t=Gt,Cn(e,0),Je(e,r),pe(e,Q()),t;if(n===6)Je(e,r);else{if(l=e.current.alternate,!(r&30)&&!xf(l)&&(n=br(e,r),n===2&&(i=si(e),i!==0&&(r=i,n=ji(e,i))),n===1))throw t=Gt,Cn(e,0),Je(e,r),pe(e,Q()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(v(345));case 2:wn(e,se,Fe);break;case 3:if(Je(e,r),(r&130023424)===r&&(n=_o+500-Q(),10<n)){if(Or(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){oe(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=vi(wn.bind(null,e,se,Fe),n);break}wn(e,se,Fe);break;case 4:if(Je(e,r),(r&4194240)===r)break;for(n=e.eventTimes,l=-1;0<r;){var o=31-Le(r);i=1<<o,o=n[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yf(r/1960))-r,10<r){e.timeoutHandle=vi(wn.bind(null,e,se,Fe),r);break}wn(e,se,Fe);break;case 5:wn(e,se,Fe);break;default:throw Error(v(329))}}}return pe(e,Q()),e.callbackNode===t?Ks.bind(null,e):null}function ji(e,n){var t=zt;return e.current.memoizedState.isDehydrated&&(Cn(e,n).flags|=256),e=br(e,n),e!==2&&(n=se,se=t,n!==null&&Di(n)),e}function Di(e){se===null?se=e:se.push.apply(se,e)}function xf(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],i=l.getSnapshot;l=l.value;try{if(!Te(i(),l))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Je(e,n){for(n&=~Po,n&=~cl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Le(n),r=1<<t;e[t]=-1,n&=~r}}function Ha(e){if(L&6)throw Error(v(327));Zn();var n=Or(e,0);if(!(n&1))return pe(e,Q()),null;var t=br(e,n);if(e.tag!==0&&t===2){var r=si(e);r!==0&&(n=r,t=ji(e,r))}if(t===1)throw t=Gt,Cn(e,0),Je(e,n),pe(e,Q()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,wn(e,se,Fe),pe(e,Q()),null}function Mo(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(lt=Q()+500,ol&&gn())}}function Rn(e){nn!==null&&nn.tag===0&&!(L&6)&&Zn();var n=L;L|=1;var t=Ee.transition,r=T;try{if(Ee.transition=null,T=1,e)return e()}finally{T=r,Ee.transition=t,L=n,!(L&6)&&gn()}}function No(){me=Qn.current,$(Qn)}function Cn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Xd(t)),K!==null)for(t=K.return;t!==null;){var r=t;switch(ao(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fr();break;case 3:tt(),$(de),$(le),vo();break;case 5:go(r);break;case 4:tt();break;case 13:$(F);break;case 19:$(F);break;case 10:fo(r.type._context);break;case 22:case 23:No()}t=t.return}if(Z=e,K=e=dn(e.current,null),J=me=n,X=0,Gt=null,Po=cl=zn=0,se=zt=null,Sn!==null){for(n=0;n<Sn.length;n++)if(t=Sn[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,i=t.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}t.pending=r}Sn=null}return e}function Gs(e,n){do{var t=K;try{if(co(),Cr.current=Xr,Gr){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Gr=!1}if(Nn=0,q=G=H=null,Mt=!1,Vt=0,Co.current=null,t===null||t.return===null){X=1,Gt=n,K=null;break}e:{var i=e,o=t.return,a=t,u=n;if(n=J,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Ma(o);if(y!==null){y.flags&=-257,Na(y,o,a,i,n),y.mode&1&&_a(i,c,n),n=y,u=c;var x=n.updateQueue;if(x===null){var w=new Set;w.add(u),n.updateQueue=w}else x.add(u);break e}else{if(!(n&1)){_a(i,c,n),zo();break e}u=Error(v(426))}}else if(D&&a.mode&1){var j=Ma(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Na(j,o,a,i,n),uo(rt(u,a));break e}}i=u=rt(u,a),X!==4&&(X=2),zt===null?zt=[i]:zt.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=Rs(i,u,n);wa(i,d);break e;case 1:a=u;var s=i.type,f=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(sn===null||!sn.has(f)))){i.flags|=65536,n&=-n,i.lanes|=n;var g=Ls(i,a,n);wa(i,g);break e}}i=i.return}while(i!==null)}qs(t)}catch(S){n=S,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Xs(){var e=Yr.current;return Yr.current=Xr,e===null?Xr:e}function zo(){(X===0||X===3||X===2)&&(X=4),Z===null||!(zn&268435455)&&!(cl&268435455)||Je(Z,J)}function br(e,n){var t=L;L|=2;var r=Xs();(Z!==e||J!==n)&&(Fe=null,Cn(e,n));do try{wf();break}catch(l){Gs(e,l)}while(!0);if(co(),L=t,Yr.current=r,K!==null)throw Error(v(261));return Z=null,J=0,X}function wf(){for(;K!==null;)Ys(K)}function kf(){for(;K!==null&&!Qc();)Ys(K)}function Ys(e){var n=bs(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?qs(e):K=n,Co.current=null}function qs(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=mf(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(t=pf(t,n,me),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);X===0&&(X=5)}function wn(e,n,t){var r=T,l=Ee.transition;try{Ee.transition=null,T=1,Sf(e,n,t,r)}finally{Ee.transition=l,T=r}return null}function Sf(e,n,t,r){do Zn();while(nn!==null);if(L&6)throw Error(v(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(nd(e,i),e===Z&&(K=Z=null,J=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||gr||(gr=!0,Js(Tr,function(){return Zn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Ee.transition,Ee.transition=null;var o=T;T=1;var a=L;L|=4,Co.current=null,gf(e,t),Vs(t,e),Bd(hi),Ar=!!mi,hi=mi=null,e.current=t,vf(t),Kc(),L=a,T=o,Ee.transition=i}else e.current=t;if(gr&&(gr=!1,nn=e,Zr=l),i=e.pendingLanes,i===0&&(sn=null),Yc(t.stateNode),pe(e,Q()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(qr)throw qr=!1,e=Ai,Ai=null,e;return Zr&1&&e.tag!==0&&Zn(),i=e.pendingLanes,i&1?e===$i?Rt++:(Rt=0,$i=e):Rt=0,gn(),null}function Zn(){if(nn!==null){var e=Ru(Zr),n=Ee.transition,t=T;try{if(Ee.transition=null,T=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Zr=0,L&6)throw Error(v(331));var l=L;for(L|=4,k=e.current;k!==null;){var i=k,o=i.child;if(k.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(k=c;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:Nt(8,h,i)}var m=h.child;if(m!==null)m.return=h,k=m;else for(;k!==null;){h=k;var p=h.sibling,y=h.return;if(Bs(h),h===c){k=null;break}if(p!==null){p.return=y,k=p;break}k=y}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var j=w.sibling;w.sibling=null,w=j}while(w!==null)}}k=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,k=o;else e:for(;k!==null;){if(i=k,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Nt(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,k=d;break e}k=i.return}}var s=e.current;for(k=s;k!==null;){o=k;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,k=f;else e:for(o=s;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(S){U(a,a.return,S)}if(a===o){k=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,k=g;break e}k=a.return}}if(L=l,gn(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(nl,e)}catch{}r=!0}return r}finally{T=t,Ee.transition=n}}return!1}function Ba(e,n,t){n=rt(t,n),n=Rs(e,n,1),e=un(e,n,1),n=oe(),e!==null&&(Yt(e,1,n),pe(e,n))}function U(e,n,t){if(e.tag===3)Ba(e,e,t);else for(;n!==null;){if(n.tag===3){Ba(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sn===null||!sn.has(r))){e=rt(t,e),e=Ls(n,e,1),n=un(n,e,1),e=oe(),n!==null&&(Yt(n,1,e),pe(n,e));break}}n=n.return}}function Ef(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=oe(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(J&t)===t&&(X===4||X===3&&(J&130023424)===J&&500>Q()-_o?Cn(e,0):Po|=t),pe(e,n)}function Zs(e,n){n===0&&(e.mode&1?(n=or,or<<=1,!(or&130023424)&&(or=4194304)):n=1);var t=oe();e=Ke(e,n),e!==null&&(Yt(e,n,t),pe(e,t))}function Cf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Zs(e,t)}function Pf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(n),Zs(e,t)}var bs;bs=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||de.current)ce=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return ce=!1,ff(e,n,t);ce=!!(e.flags&131072)}else ce=!1,D&&n.flags&1048576&&ts(n,Ur,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;_r(e,n),e=n.pendingProps;var l=Jn(n,le.current);qn(n,t),l=xo(null,n,r,e,l,t);var i=wo();return n.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(r)?(i=!0,Hr(n)):i=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,mo(n),l.updater=ul,n.stateNode=l,l._reactInternals=n,Ci(n,r,e,t),n=Mi(null,n,r,!0,i,t)):(n.tag=0,D&&i&&oo(n),ie(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(_r(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Mf(r),e=Ne(r,e),l){case 0:n=_i(null,n,r,e,t);break e;case 1:n=La(null,n,r,e,t);break e;case 11:n=za(null,n,r,e,t);break e;case 14:n=Ra(null,n,r,Ne(r.type,e),t);break e}throw Error(v(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ne(r,l),_i(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ne(r,l),La(e,n,r,l,t);case 3:e:{if(As(n),e===null)throw Error(v(387));r=n.pendingProps,i=n.memoizedState,l=i.element,us(e,n),Qr(n,r,null,t);var o=n.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){l=rt(Error(v(423)),n),n=Ia(e,n,r,t,l);break e}else if(r!==l){l=rt(Error(v(424)),n),n=Ia(e,n,r,t,l);break e}else for(he=an(n.stateNode.containerInfo.firstChild),ge=n,D=!0,Re=null,t=os(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),r===l){n=Ge(e,n,t);break e}ie(e,n,r,t)}n=n.child}return n;case 5:return ss(n),e===null&&ki(n),r=n.type,l=n.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,gi(r,l)?o=null:i!==null&&gi(r,i)&&(n.flags|=32),Os(e,n),ie(e,n,o,t),n.child;case 6:return e===null&&ki(n),null;case 13:return $s(e,n,t);case 4:return ho(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=nt(n,null,r,t):ie(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ne(r,l),za(e,n,r,l,t);case 7:return ie(e,n,n.pendingProps,t),n.child;case 8:return ie(e,n,n.pendingProps.children,t),n.child;case 12:return ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,i=n.memoizedProps,o=l.value,O(Wr,r._currentValue),r._currentValue=o,i!==null)if(Te(i.value,o)){if(i.children===l.children&&!de.current){n=Ge(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=We(-1,t&-t),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Si(i.return,t,n),a.lanes|=t;break}u=u.next}}else if(i.tag===10)o=i.type===n.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(v(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Si(o,t,n),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===n){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ie(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,qn(n,t),l=Ce(l),r=r(l),n.flags|=1,ie(e,n,r,t),n.child;case 14:return r=n.type,l=Ne(r,n.pendingProps),l=Ne(r.type,l),Ra(e,n,r,l,t);case 15:return Is(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Ne(r,l),_r(e,n),n.tag=1,fe(r)?(e=!0,Hr(n)):e=!1,qn(n,t),zs(n,r,l),Ci(n,r,l,t),Mi(null,n,r,!0,e,t);case 19:return js(e,n,t);case 22:return Ts(e,n,t)}throw Error(v(156,n.tag))};function Js(e,n){return _u(e,n)}function _f(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Se(e,n,t,r){return new _f(e,n,t,r)}function Ro(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mf(e){if(typeof e=="function")return Ro(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xi)return 11;if(e===Yi)return 14}return 2}function dn(e,n){var t=e.alternate;return t===null?(t=Se(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function zr(e,n,t,r,l,i){var o=2;if(r=e,typeof e=="function")Ro(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case An:return Pn(t.children,l,i,n);case Gi:o=8,l|=8;break;case Xl:return e=Se(12,t,n,l|2),e.elementType=Xl,e.lanes=i,e;case Yl:return e=Se(13,t,n,l),e.elementType=Yl,e.lanes=i,e;case ql:return e=Se(19,t,n,l),e.elementType=ql,e.lanes=i,e;case su:return dl(t,l,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case au:o=10;break e;case uu:o=9;break e;case Xi:o=11;break e;case Yi:o=14;break e;case qe:o=16,r=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=Se(o,t,n,l),n.elementType=e,n.type=r,n.lanes=i,n}function Pn(e,n,t,r){return e=Se(7,e,r,n),e.lanes=t,e}function dl(e,n,t,r){return e=Se(22,e,r,n),e.elementType=su,e.lanes=t,e.stateNode={isHidden:!1},e}function Ql(e,n,t){return e=Se(6,e,null,n),e.lanes=t,e}function Kl(e,n,t){return n=Se(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Nf(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Lo(e,n,t,r,l,i,o,a,u){return e=new Nf(e,n,t,a,u),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Se(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},mo(i),e}function zf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:On,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ec(e){if(!e)return pn;e=e._reactInternals;e:{if(In(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(fe(t))return es(e,t,n)}return n}function nc(e,n,t,r,l,i,o,a,u){return e=Lo(t,r,!0,e,l,i,o,a,u),e.context=ec(null),t=e.current,r=oe(),l=cn(t),i=We(r,l),i.callback=n??null,un(t,i,l),e.current.lanes=l,Yt(e,l,r),pe(e,r),e}function fl(e,n,t,r){var l=n.current,i=oe(),o=cn(l);return t=ec(t),n.context===null?n.context=t:n.pendingContext=t,n=We(i,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=un(l,n,o),e!==null&&(Ie(e,l,o,i),Er(e,l,o)),o}function Jr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ua(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Io(e,n){Ua(e,n),(e=e.alternate)&&Ua(e,n)}function Rf(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function To(e){this._internalRoot=e}pl.prototype.render=To.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));fl(e,n,null,null)};pl.prototype.unmount=To.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Rn(function(){fl(null,e,null,null)}),n[Qe]=null}};function pl(e){this._internalRoot=e}pl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Tu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<be.length&&n!==0&&n<be[t].priority;t++);be.splice(t,0,e),t===0&&Au(e)}};function Oo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ml(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wa(){}function Lf(e,n,t,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Jr(o);i.call(c)}}var o=nc(n,r,e,0,null,!1,!1,"",Wa);return e._reactRootContainer=o,e[Qe]=o.current,Ft(e.nodeType===8?e.parentNode:e),Rn(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=Jr(u);a.call(c)}}var u=Lo(e,0,!1,null,null,!1,!1,"",Wa);return e._reactRootContainer=u,e[Qe]=u.current,Ft(e.nodeType===8?e.parentNode:e),Rn(function(){fl(n,u,t,r)}),u}function hl(e,n,t,r,l){var i=t._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var a=l;l=function(){var u=Jr(o);a.call(u)}}fl(n,o,e,l)}else o=Lf(t,n,e,l,r);return Jr(o)}Lu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=wt(n.pendingLanes);t!==0&&(bi(n,t|1),pe(n,Q()),!(L&6)&&(lt=Q()+500,gn()))}break;case 13:Rn(function(){var r=Ke(e,1);if(r!==null){var l=oe();Ie(r,e,1,l)}}),Io(e,1)}};Ji=function(e){if(e.tag===13){var n=Ke(e,134217728);if(n!==null){var t=oe();Ie(n,e,134217728,t)}Io(e,134217728)}};Iu=function(e){if(e.tag===13){var n=cn(e),t=Ke(e,n);if(t!==null){var r=oe();Ie(t,e,n,r)}Io(e,n)}};Tu=function(){return T};Ou=function(e,n){var t=T;try{return T=e,n()}finally{T=t}};oi=function(e,n,t){switch(n){case"input":if(Jl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=il(r);if(!l)throw Error(v(90));du(r),Jl(r,l)}}}break;case"textarea":pu(e,t);break;case"select":n=t.value,n!=null&&Kn(e,!!t.multiple,n,!1)}};wu=Mo;ku=Rn;var If={usingClientEntryPoint:!1,Events:[Zt,Fn,il,yu,xu,Mo]},vt={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tf={bundleType:vt.bundleType,version:vt.version,rendererPackageName:vt.rendererPackageName,rendererConfig:vt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cu(e),e===null?null:e.stateNode},findFiberByHostInstance:vt.findFiberByHostInstance||Rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vr.isDisabled&&vr.supportsFiber)try{nl=vr.inject(Tf),je=vr}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=If;ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oo(n))throw Error(v(200));return zf(e,n,null,t)};ye.createRoot=function(e,n){if(!Oo(e))throw Error(v(299));var t=!1,r="",l=tc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=Lo(e,1,!1,null,null,t,!1,r,l),e[Qe]=n.current,Ft(e.nodeType===8?e.parentNode:e),new To(n)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=Cu(n),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return Rn(e)};ye.hydrate=function(e,n,t){if(!ml(n))throw Error(v(200));return hl(null,e,n,!0,t)};ye.hydrateRoot=function(e,n,t){if(!Oo(e))throw Error(v(405));var r=t!=null&&t.hydratedSources||null,l=!1,i="",o=tc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=nc(n,null,e,1,t??null,l,!1,i,o),e[Qe]=n.current,Ft(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new pl(n)};ye.render=function(e,n,t){if(!ml(n))throw Error(v(200));return hl(null,e,n,!1,t)};ye.unmountComponentAtNode=function(e){if(!ml(e))throw Error(v(40));return e._reactRootContainer?(Rn(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};ye.unstable_batchedUpdates=Mo;ye.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ml(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return hl(e,n,t,!1,r)};ye.version="18.3.1-next-f1338f8080-20240426";function rc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc)}catch(e){console.error(e)}}rc(),ru.exports=ye;var Of=ru.exports,lc,Va=Of;lc=Va.createRoot,Va.hydrateRoot;function Af({pages:e,activePageId:n,onSelectPage:t}){return I.jsxs("aside",{className:"sidebar",children:[I.jsx("h1",{children:"퍼즐 메뉴"}),I.jsx("nav",{children:e.map(r=>I.jsx("button",{type:"button",className:n===r.id?"menu-btn active":"menu-btn",onClick:()=>t(r.id),children:r.label},r.id))})]})}function gl({title:e,children:n}){return I.jsxs("section",{className:"viewer",children:[I.jsx("header",{className:"viewer-header",children:I.jsx("h2",{children:e})}),I.jsx("div",{className:"viewer-body",children:n})]})}function $f(e){const t=new DOMParser().parseFromString(e,"text/html"),r=Array.from(t.querySelectorAll("style")).map(o=>o.textContent||"").filter(Boolean),l=Array.from(t.body.querySelectorAll("script")),i=l.map(o=>({type:o.type||"text/javascript",src:o.getAttribute("src"),content:o.textContent||""}));return l.forEach(o=>o.remove()),{styles:r.join(`
`),bodyMarkup:t.body.innerHTML,scripts:i}}function vl({html:e}){const n=tn.useRef(null);return tn.useEffect(()=>{const t=n.current;if(!t)return;const r=$f(e);if(t.innerHTML="",r.styles){const i=document.createElement("style");i.textContent=r.styles,t.appendChild(i)}const l=document.createElement("div");return l.className="legacy-body",l.innerHTML=r.bodyMarkup,t.appendChild(l),r.scripts.forEach(i=>{const o=document.createElement("script");o.type=i.type,i.src?o.src=i.src:o.text=i.content,t.appendChild(o)}),()=>{t.innerHTML=""}},[e]),I.jsx("div",{ref:n,className:"viewer-dom-host"})}const jf=`<!doctype html>\r
<html lang="ko">\r
\r
<head>\r
    <meta charset="utf-8" />\r
    <meta name="viewport" content="width=device-width,initial-scale=1" />\r
    <title>사칙연산 숫자 크로스 퍼즐 (A5)</title>\r
    <style>\r
        :root {
            --ink: #1f1a14;
            --paper: #fffaf2;
            --line: #6b4f2a;
            --muted: #6f6558;
            --panel: #fffdf7;
            --ui-gap: 10px;
            --a5w-mm: 148;
            --a5h-mm: 210;
            --px-per-mm: 10;
            /* 다운로드 해상도(픽셀/밀리미터). 10 => 약 254dpi */
        }\r
\r
        html,\r
        body {
            height: 100%;
            margin: 0;
            background:
                radial-gradient(circle at 10% 10%, #fff7e7 0%, transparent 40%),
                radial-gradient(circle at 90% 0%, #f3dfc5 0%, transparent 35%),
                #f4efe6;
            color: var(--ink);
            font-family: "Trebuchet MS", "Noto Sans KR", Segoe UI, Arial, sans-serif;
        }
\r
        .wrap {
            max-width: 980px;
            margin: 0 auto;
            padding: 16px;
        }

        .wrap>h1 {
            background: var(--paper);
            border: 2px solid var(--line);
            border-radius: 12px;
            padding: 10px 12px;
            box-shadow: 0 8px 20px rgba(58, 38, 14, 0.12);
        }
\r
        h1 {\r
            margin: 0 0 10px;\r
            font-size: 18px;\r
            font-weight: 700;\r
        }\r
\r
        .panel {
            display: flex;
            flex-wrap: wrap;
            gap: var(--ui-gap);
            align-items: flex-end;
            border: 2px solid var(--line);
            border-radius: 12px;
            padding: 12px;
            background: var(--panel);
            box-shadow: 0 8px 20px rgba(58, 38, 14, 0.12);
        }
\r
        .field {\r
            display: flex;\r
            flex-direction: column;\r
            gap: 6px;\r
            min-width: 140px;\r
        }\r
\r
        label {
            font-size: 12px;
            color: var(--muted);
        }

        input[type="number"] {
            border: 2px solid var(--line);
            padding: 8px 10px;
            background: #fffdf7;
            color: var(--ink);
            font-size: 14px;
            width: 140px;
            border-radius: 10px;
        }

        button {
            border: 2px solid var(--line);
            background: #fff7e8;
            color: var(--ink);
            padding: 10px 12px;
            font-size: 14px;
            cursor: pointer;
            border-radius: 10px;
        }

        button:hover {
            filter: brightness(0.97);
        }

        button:active {
            transform: translateY(1px);
        }

        .note {
            font-size: 12px;
            color: var(--muted);
            margin-top: 8px;
        }
\r
        /* A5 미리보기 프레임 */\r
        .sheet {
            margin-top: 14px;
            border: 2px solid var(--line);
            border-radius: 12px;
            width: calc(var(--a5w-mm) * 1mm);
            height: calc(var(--a5h-mm) * 1mm);
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            box-shadow: 0 8px 20px rgba(58, 38, 14, 0.12);
        }
\r
        /* 화면에서는 캔버스를 A5 크기에 맞게 축소/확대 */\r
        #preview {\r
            width: 100%;\r
            height: 100%;\r
            display: block;\r
        }\r
\r
        @page {\r
            size: A5 portrait;\r
            margin: 8mm;\r
        }\r
\r
        @media print {\r
            .wrap {\r
                padding: 0;\r
                max-width: none;\r
            }\r
\r
            .panel,\r
            h1,\r
            .note {\r
                display: none !important;\r
            }\r
\r
            .sheet {\r
                border: none;\r
                width: calc(var(--a5w-mm) * 1mm);\r
                height: calc(var(--a5h-mm) * 1mm);\r
                margin: 0;\r
            }\r
        }\r
    </style>\r
</head>\r
\r
<body>\r
    <div class="wrap">\r
        <h1>사칙연산 숫자 크로스 퍼즐 생성기 (흰 바탕 + 검은 선)</h1>\r
\r
        <div class="panel">\r
            <div class="field">\r
                <label>가로 칸 수 (5~25)</label>\r
                <input id="cols" type="number" min="5" max="25" value="15" />\r
            </div>\r
            <div class="field">\r
                <label>세로 칸 수 (5~25)</label>\r
                <input id="rows" type="number" min="5" max="25" value="15" />\r
            </div>\r
            <div class="field">\r
                <label>퀴즈 개수 (5~20)</label>\r
                <input id="count" type="number" min="5" max="20" value="10" />\r
            </div>\r
            <div class="field">\r
                <label>숫자 빈칸 비율 % (0~80)</label>\r
                <input id="blankPct" type="number" min="0" max="80" value="35" />\r
            </div>\r
            <div class="field">\r
                <label>숫자 빈칸 개수 (0=자동)</label>\r
                <input id="blankCount" type="number" min="0" max="999" value="0" />\r
            </div>\r
\r
            <button id="btnGen">퍼즐 생성</button>\r
            <button id="btnDownload">이미지 다운로드 (PNG)</button>\r
            <button id="btnPrint" title="브라우저 인쇄 대화상자를 엽니다">A5 인쇄</button>\r
            <button id="btnAnswer">답안 출력</button>\r
\r
            <div class="note">\r
                • 각 퀴즈는 <b>a ± b = c</b> 또는 <b>a × b = c</b> 또는 <b>a ÷ b = c</b> 형태로 배치됩니다.<br />\r
                • 교차(크로스)는 숫자/기호가 같은 위치에서만 일어납니다. 숫자 일부는 빈칸으로 숨겨집니다.\r
            </div>\r
        </div>\r
\r
        <div class="sheet" aria-label="A5 퍼즐 미리보기">\r
            <canvas id="preview"></canvas>\r
        </div>\r
    </div>\r
\r
    <script>\r
        (() => {\r
            // ====== 유틸 ======\r
            const randInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);\r
            const choice = (arr) => arr[Math.floor(Math.random() * arr.length)];\r
            const clamp = (v, a, b) => Math.max(a, Math.min(b, v));\r
\r
            // ====== 퍼즐 생성: 수식 문자열들을 크로스워드처럼 배치 ======\r
            // 셀에는 한 글자(숫자/연산기호/=)만 들어감.\r
            // 예: "12+3=15" 길이 7\r
\r
            function makeEquation() {\r
                // 난이도: 두 자리/한 자리 혼합. 결과는 양수, 정수.\r
                const ops = ['+', '-', '×', '÷'];\r
                const op = choice(ops);\r
\r
                let a, b, c;\r
                if (op === '+') {\r
                    a = randInt(3, 99);\r
                    b = randInt(2, 99);\r
                    c = a + b;\r
                } else if (op === '-') {\r
                    a = randInt(10, 99);\r
                    b = randInt(2, 99);\r
                    if (b > a) [a, b] = [b, a];\r
                    c = a - b;\r
                    if (c === 0) c = 1; // 0 방지\r
                } else if (op === '×') {\r
                    a = randInt(2, 20);\r
                    b = randInt(2, 20);\r
                    c = a * b;\r
                } else { // ÷\r
                    b = randInt(2, 20);\r
                    c = randInt(2, 20);\r
                    a = b * c; // 나눗셈 결과가 정수 되도록\r
                }\r
\r
                return \`\${a}\${op}\${b}=\${c}\`;\r
            }\r
\r
            function generateEquations(n) {\r
                const set = new Set();\r
                const out = [];\r
                let guard = 0;\r
                while (out.length < n && guard++ < 5000) {\r
                    const eq = makeEquation();\r
                    // 너무 긴 식은 제외(그리드에 비해)\r
                    if (!set.has(eq)) {\r
                        set.add(eq);\r
                        out.push(eq);\r
                    }\r
                }\r
                return out;\r
            }\r
\r
            function emptyGrid(rows, cols) {\r
                return Array.from({ length: rows }, () => Array.from({ length: cols }, () => null));\r
            }\r
\r
            // 배치된 글자 인덱스를 빠르게 찾기 위한 맵\r
            function buildCharIndex(grid) {\r
                const map = new Map();\r
                for (let r = 0; r < grid.length; r++) {\r
                    for (let c = 0; c < grid[0].length; c++) {\r
                        const ch = grid[r][c];\r
                        if (!ch) continue;\r
                        if (!map.has(ch)) map.set(ch, []);\r
                        map.get(ch).push({ r, c });\r
                    }\r
                }\r
                return map;\r
            }\r
\r
            function canPlace(grid, word, r0, c0, dir) {\r
                const rows = grid.length;\r
                const cols = grid[0].length;\r
\r
                const dr = dir === 'V' ? 1 : 0;\r
                const dc = dir === 'H' ? 1 : 0;\r
\r
                // 경계\r
                const rEnd = r0 + dr * (word.length - 1);\r
                const cEnd = c0 + dc * (word.length - 1);\r
                if (r0 < 0 || c0 < 0 || rEnd >= rows || cEnd >= cols) return false;\r
\r
                // 단어 앞/뒤가 기존 글자와 붙어있으면 금지(단어 경계 확보)\r
                const rBefore = r0 - dr;\r
                const cBefore = c0 - dc;\r
                if (rBefore >= 0 && cBefore >= 0 && rBefore < rows && cBefore < cols) {\r
                    if (grid[rBefore][cBefore]) return false;\r
                }\r
                const rAfter = rEnd + dr;\r
                const cAfter = cEnd + dc;\r
                if (rAfter >= 0 && cAfter >= 0 && rAfter < rows && cAfter < cols) {\r
                    if (grid[rAfter][cAfter]) return false;\r
                }\r
\r
                // 본문 충돌 검사 + 옆면 밀착 방지(같은 방향이 아닐 때 옆으로 붙는 것 금지)\r
                for (let i = 0; i < word.length; i++) {\r
                    const r = r0 + dr * i;\r
                    const c = c0 + dc * i;\r
                    const ch = word[i];\r
                    const cell = grid[r][c];\r
                    if (cell && cell !== ch) return false;\r
\r
                    // 옆면 체크: 가로로 두면 위/아래, 세로로 두면 좌/우에 글자가 있으면 안됨\r
                    if (!cell) {\r
                        if (dir === 'H') {\r
                            if ((r - 1 >= 0 && grid[r - 1][c]) || (r + 1 < rows && grid[r + 1][c])) return false;\r
                        } else {\r
                            if ((c - 1 >= 0 && grid[r][c - 1]) || (c + 1 < cols && grid[r][c + 1])) return false;\r
                        }\r
                    }\r
                }\r
\r
                // 적어도 1개는 교차해야 함(첫 단어 제외)\r
                let crosses = 0;\r
                for (let i = 0; i < word.length; i++) {\r
                    const r = r0 + dr * i;\r
                    const c = c0 + dc * i;\r
                    if (grid[r][c] === word[i]) crosses++;\r
                }\r
                return crosses;\r
            }\r
\r
            function placeWord(grid, word, r0, c0, dir) {\r
                const dr = dir === 'V' ? 1 : 0;\r
                const dc = dir === 'H' ? 1 : 0;\r
                for (let i = 0; i < word.length; i++) {\r
                    const r = r0 + dr * i;\r
                    const c = c0 + dc * i;\r
                    grid[r][c] = word[i];\r
                }\r
            }\r
\r
            function tryLayout(rows, cols, eqs, attempts = 200) {\r
                const grid = emptyGrid(rows, cols);\r
\r
                // 첫 단어: 중앙 가로\r
                const first = eqs[0];\r
                const r0 = Math.floor(rows / 2);\r
                const c0 = Math.floor((cols - first.length) / 2);\r
                if (c0 < 0) return null;\r
                placeWord(grid, first, r0, c0, 'H');\r
\r
                let placed = 1;\r
                let guard = 0;\r
\r
                while (placed < eqs.length && guard++ < attempts) {\r
                    const word = eqs[placed];\r
                    const index = buildCharIndex(grid);\r
\r
                    // 후보 교차 글자 모으기(단어 내 각 글자)\r
                    const candidates = [];\r
                    for (let i = 0; i < word.length; i++) {\r
                        const ch = word[i];\r
                        if (!index.has(ch)) continue;\r
                        for (const pos of index.get(ch)) {\r
                            candidates.push({ i, ch, r: pos.r, c: pos.c });\r
                        }\r
                    }\r
                    // 교차 후보가 없으면 다음 단어는 어렵다\r
                    if (candidates.length === 0) {\r
                        // 단어를 뒤로 보내고 다음 시도\r
                        eqs.push(eqs.splice(placed, 1)[0]);\r
                        continue;\r
                    }\r
\r
                    // 랜덤하게 후보를 섞어서 시도\r
                    for (let k = candidates.length - 1; k > 0; k--) {\r
                        const j = randInt(0, k);\r
                        [candidates[k], candidates[j]] = [candidates[j], candidates[k]];\r
                    }\r
\r
                    let ok = false;\r
                    for (const cand of candidates) {\r
                        const dirs = Math.random() < 0.5 ? ['H', 'V'] : ['V', 'H'];\r
                        for (const dir of dirs) {\r
                            const dr = dir === 'V' ? 1 : 0;\r
                            const dc = dir === 'H' ? 1 : 0;\r
                            const rr = cand.r - dr * cand.i;\r
                            const cc = cand.c - dc * cand.i;\r
\r
                            const crosses = canPlace(grid, word, rr, cc, dir);\r
                            if (crosses > 0) {\r
                                placeWord(grid, word, rr, cc, dir);\r
                                ok = true;\r
                                break;\r
                            }\r
                        }\r
                        if (ok) break;\r
                    }\r
\r
                    if (ok) {\r
                        placed++;\r
                    } else {\r
                        // 배치 실패하면 뒤로 보내고 재시도\r
                        eqs.push(eqs.splice(placed, 1)[0]);\r
                    }\r
                }\r
\r
                // 최종 검증: 모두 배치되었는지\r
                if (placed !== eqs.length) return null;\r
\r
                // 퍼즐 영역 바운딩 박스 계산(불필요 여백 줄이기)\r
                let minR = rows, minC = cols, maxR = -1, maxC = -1;\r
                for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {\r
                    if (grid[r][c]) {\r
                        minR = Math.min(minR, r);\r
                        minC = Math.min(minC, c);\r
                        maxR = Math.max(maxR, r);\r
                        maxC = Math.max(maxC, c);\r
                    }\r
                }\r
                if (maxR < 0) return null;\r
\r
                return { grid, bbox: { minR, minC, maxR, maxC }, eqs };\r
            }\r
\r
            function makePuzzle(rows, cols, count) {\r
                rows = clamp(rows, 5, 25);\r
                cols = clamp(cols, 5, 25);\r
                count = clamp(count, 5, 20);\r
\r
                let best = null;\r
                let bestArea = Infinity;\r
\r
                // 여러 번 시도해서 가장 조밀한 레이아웃 선택\r
                for (let t = 0; t < 80; t++) {\r
                    const eqs = generateEquations(count);\r
                    // 너무 긴 식이 그리드보다 길면 재생성\r
                    if (eqs.some(w => w.length > cols && w.length > rows)) continue;\r
\r
                    const layout = tryLayout(rows, cols, eqs.slice(), 260);\r
                    if (!layout) continue;\r
\r
                    const { minR, minC, maxR, maxC } = layout.bbox;\r
                    const area = (maxR - minR + 1) * (maxC - minC + 1);\r
                    if (area < bestArea) {\r
                        bestArea = area;\r
                        best = layout;\r
                    }\r
                }\r
\r
                return best;\r
            }\r
\r
            // 숫자 셀 중 일부를 빈칸(마스킹) 처리\r
            function buildMask(layout, blankPct, blankCount) {\r
                const g = layout.grid;\r
                const { minR, minC, maxR, maxC } = layout.bbox;\r
\r
                const digits = [];\r
                for (let r = minR; r <= maxR; r++) {\r
                    for (let c = minC; c <= maxC; c++) {\r
                        const ch = g[r][c];\r
                        if (/^[0-9]$/.test(ch)) digits.push(\`\${r},\${c}\`);\r
                    }\r
                }\r
\r
                const total = digits.length;\r
                if (total === 0) return new Set();\r
\r
                let k;\r
                if (blankCount && blankCount > 0) {\r
                    k = clamp(blankCount, 0, total);\r
                } else {\r
                    k = Math.round(total * (clamp(blankPct, 0, 80) / 100));\r
                    k = clamp(k, 0, total);\r
                }\r
\r
                // 섞기\r
                for (let i = digits.length - 1; i > 0; i--) {\r
                    const j = randInt(0, i);\r
                    [digits[i], digits[j]] = [digits[j], digits[i]];\r
                }\r
\r
                return new Set(digits.slice(0, k));\r
            }\r
\r
            // 퍼즐에서 실제 "연산식"으로 보이는 연속 구간(가로/세로)을 찾아 굵은 테두리로 표시\r
            function findExpressionRuns(layout) {\r
                const g = layout.grid;\r
                const { minR, minC, maxR, maxC } = layout.bbox;\r
                const ops = new Set(['+', '-', '×', '÷']);\r
\r
                const isExpr = (chars) => {\r
                    if (!chars.includes('=')) return false;\r
                    let hasOp = false;\r
                    let digitCount = 0;\r
                    for (const ch of chars) {\r
                        if (ops.has(ch)) hasOp = true;\r
                        if (/^[0-9]$/.test(ch)) digitCount++;\r
                    }\r
                    return hasOp && digitCount >= 3;\r
                };\r
\r
                const out = [];\r
                const seen = new Set();\r
\r
                // 가로 스캔\r
                for (let r = minR; r <= maxR; r++) {\r
                    let c = minC;\r
                    while (c <= maxC) {\r
                        while (c <= maxC && !g[r][c]) c++;\r
                        if (c > maxC) break;\r
                        const cStart = c;\r
                        const chars = [];\r
                        while (c <= maxC && g[r][c]) {\r
                            chars.push(g[r][c]);\r
                            c++;\r
                        }\r
                        const cEnd = c - 1;\r
                        if ((cEnd - cStart + 1) >= 5 && isExpr(chars)) {\r
                            const key = \`H:\${r},\${cStart}-\${r},\${cEnd}\`;\r
                            if (!seen.has(key)) {\r
                                seen.add(key);\r
                                out.push({ dir: 'H', r1: r, c1: cStart, r2: r, c2: cEnd });\r
                            }\r
                        }\r
                    }\r
                }\r
\r
                // 세로 스캔\r
                for (let c = minC; c <= maxC; c++) {\r
                    let r = minR;\r
                    while (r <= maxR) {\r
                        while (r <= maxR && !g[r][c]) r++;\r
                        if (r > maxR) break;\r
                        const rStart = r;\r
                        const chars = [];\r
                        while (r <= maxR && g[r][c]) {\r
                            chars.push(g[r][c]);\r
                            r++;\r
                        }\r
                        const rEnd = r - 1;\r
                        if ((rEnd - rStart + 1) >= 5 && isExpr(chars)) {\r
                            const key = \`V:\${rStart},\${c}-\${rEnd},\${c}\`;\r
                            if (!seen.has(key)) {\r
                                seen.add(key);\r
                                out.push({ dir: 'V', r1: rStart, c1: c, r2: rEnd, c2: c });\r
                            }\r
                        }\r
                    }\r
                }\r
\r
                return out;\r
            }\r
\r
            // ====== 렌더링 (A5 캔버스) ======\r
            const preview = document.getElementById('preview');\r
            const ctx = preview.getContext('2d');\r
\r
            const PX_PER_MM = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--px-per-mm')) || 10;\r
            const A5W = Math.round(148 * PX_PER_MM);\r
            const A5H = Math.round(210 * PX_PER_MM);\r
\r
            preview.width = A5W;\r
            preview.height = A5H;\r
\r
            function drawA5(layout, meta) {\r
                const showAnswer = meta.showAnswer === true;\r
                // 배경\r
                ctx.setTransform(1, 0, 0, 1, 0, 0);\r
                ctx.clearRect(0, 0, A5W, A5H);\r
                ctx.fillStyle = '#fff';\r
                ctx.fillRect(0, 0, A5W, A5H);\r
\r
                const margin = Math.round(10 * PX_PER_MM);\r
                const headerH = Math.round(16 * PX_PER_MM);\r
                const footerH = Math.round(12 * PX_PER_MM);\r
\r
                // 제목\r
                ctx.fillStyle = '#000';\r
                ctx.font = \`\${Math.round(4.2 * PX_PER_MM)}px system-ui, sans-serif\`;\r
                ctx.textBaseline = 'top';\r
                ctx.fillText('사칙연산 숫자 크로스 퍼즐', margin, margin);\r
\r
                // 서브\r
                ctx.font = \`\${Math.round(2.8 * PX_PER_MM)}px system-ui, sans-serif\`;\r
                ctx.fillText(\`그리드 \${meta.rows}×\${meta.cols} · 퀴즈 \${meta.count}개 · 빈칸 \${meta.blankK}개\`, margin, margin + Math.round(6.5 * PX_PER_MM));\r
\r
                const gridTop = margin + headerH;\r
                const gridLeft = margin;\r
                const gridW = A5W - margin * 2;\r
                const gridH = A5H - margin - gridTop - footerH;\r
\r
                const g = layout.grid;\r
                const { minR, minC, maxR, maxC } = layout.bbox;\r
                const useRows = (maxR - minR + 1);\r
                const useCols = (maxC - minC + 1);\r
\r
                const cell = Math.floor(Math.min(gridW / useCols, gridH / useRows));\r
                const drawW = cell * useCols;\r
                const drawH = cell * useRows;\r
                const ox = gridLeft + Math.floor((gridW - drawW) / 2);\r
                const oy = gridTop + Math.floor((gridH - drawH) / 2);\r
\r
                // === 셀 배경 처리 ===\r
                for (let r = minR; r <= maxR; r++) {\r
                    for (let c = minC; c <= maxC; c++) {\r
                        const ch = g[r][c];\r
                        if (!ch) continue;\r
\r
                        const rr = r - minR;\r
                        const cc = c - minC;\r
                        const x = ox + cc * cell;\r
                        const y = oy + rr * cell;\r
\r
                        if (/^[0-9]$/.test(ch)) {\r
                            const key = \`\${r},\${c}\`;\r
                            if (!showAnswer && meta.mask && meta.mask.has(key)) {\r
                                ctx.fillStyle = '#fff59d';\r
                            } else {\r
                                ctx.fillStyle = '#fff';\r
                            }\r
                        } else {\r
                            // 연산기호 및 '=' 등 문제 영역 → 회색\r
                            ctx.fillStyle = '#e0e0e0';\r
                        }\r
\r
                        ctx.fillRect(x, y, cell, cell);\r
                    }\r
                }\r
\r
                // 외곽\r
                ctx.strokeStyle = '#000';\r
                ctx.lineWidth = Math.max(1, Math.round(0.25 * PX_PER_MM));\r
                ctx.strokeRect(ox, oy, drawW, drawH);\r
\r
                // 격자선\r
                ctx.beginPath();\r
                for (let r = 1; r < useRows; r++) {\r
                    const y = oy + r * cell;\r
                    ctx.moveTo(ox, y);\r
                    ctx.lineTo(ox + drawW, y);\r
                }\r
                for (let c = 1; c < useCols; c++) {\r
                    const x = ox + c * cell;\r
                    ctx.moveTo(x, oy);\r
                    ctx.lineTo(x, oy + drawH);\r
                }\r
                ctx.stroke();\r
\r
                // === 연산식 구간 굵은 테두리(식별 강화) ===\r
                if (meta.runs && meta.runs.length) {\r
                    ctx.strokeStyle = '#000';\r
                    ctx.lineWidth = Math.max(2, Math.round(0.7 * PX_PER_MM));\r
                    for (const run of meta.runs) {\r
                        const x = ox + (run.c1 - minC) * cell;\r
                        const y = oy + (run.r1 - minR) * cell;\r
                        const w = (run.c2 - run.c1 + 1) * cell;\r
                        const h = (run.r2 - run.r1 + 1) * cell;\r
                        ctx.strokeRect(x, y, w, h);\r
                    }\r
                    // 굵은 테두리 후 외곽선 얇게 재강조\r
                    ctx.strokeStyle = '#000';\r
                    ctx.lineWidth = Math.max(1, Math.round(0.25 * PX_PER_MM));\r
                    ctx.strokeRect(ox, oy, drawW, drawH);\r
                }\r
\r
                // 글자\r
                const fontSize = Math.floor(cell * 0.58);\r
                ctx.font = \`\${fontSize}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace\`;\r
                ctx.textBaseline = 'middle';\r
                ctx.textAlign = 'center';\r
\r
                for (let r = minR; r <= maxR; r++) {\r
                    for (let c = minC; c <= maxC; c++) {\r
                        const ch = g[r][c];\r
                        if (!ch) continue;\r
\r
                        // 빈칸(마스킹) 숫자는 문제 모드에서만 숨김\r
                        if (!showAnswer && /^[0-9]$/.test(ch)) {\r
                            const key = \`\${r},\${c}\`;\r
                            if (meta.mask && meta.mask.has(key)) continue;\r
                        }\r
\r
                        const rr = r - minR;\r
                        const cc = c - minC;\r
                        const x = ox + cc * cell + cell / 2;\r
                        const y = oy + rr * cell + cell / 2;\r
                        ctx.fillStyle = '#000';\r
                        ctx.fillText(ch, x, y);\r
                    }\r
                }\r
\r
                // 하단 안내\r
                ctx.textAlign = 'left';\r
                ctx.textBaseline = 'alphabetic';\r
                ctx.font = \`\${Math.round(2.7 * PX_PER_MM)}px system-ui, sans-serif\`;\r
                if (!showAnswer) {\r
                    ctx.fillText('규칙: 노란 칸(빈칸)에 숫자를 채워 모든 가로/세로 식이 성립하도록 하시오.', margin, A5H - margin);\r
                } else {\r
                    ctx.fillText('답안: 모든 숫자가 채워진 정답 상태입니다.', margin, A5H - margin);\r
                }\r
\r
                // 퍼즐(격자) 영역(픽셀) 반환: 다운로드에서 퍼즐만 잘라내기\r
                return { ox, oy, w: drawW, h: drawH };\r
            }\r
\r
            // ====== 다운로드 ======\r
            function makeFilename(prefix = 'puzzle') {\r
                const now = new Date();\r
                const y = now.getFullYear();\r
                const m = String(now.getMonth() + 1).padStart(2, '0');\r
                const d = String(now.getDate()).padStart(2, '0');\r
                const hh = String(now.getHours()).padStart(2, '0');\r
                const mm = String(now.getMinutes()).padStart(2, '0');\r
                return \`\${prefix}-\${y}\${m}\${d}-\${hh}\${mm}.png\`;\r
            }\r
\r
            // 퍼즐(격자)만 잘라서 저장\r
            function downloadPuzzleOnlyPNG(box, prefix = 'puzzle') {\r
                const pad = Math.max(2, Math.round(0.2 * PX_PER_MM));\r
                const sx = Math.max(0, box.ox - pad);\r
                const sy = Math.max(0, box.oy - pad);\r
                const sw = Math.min(preview.width - sx, box.w + pad * 2);\r
                const sh = Math.min(preview.height - sy, box.h + pad * 2);\r
\r
                const out = document.createElement('canvas');\r
                out.width = sw;\r
                out.height = sh;\r
                const octx = out.getContext('2d');\r
\r
                // ✅ 현재 preview에 그려진 상태를 그대로 crop\r
                octx.drawImage(preview, sx, sy, sw, sh, 0, 0, sw, sh);\r
\r
                const a = document.createElement('a');\r
                a.href = out.toDataURL('image/png');\r
                a.download = makeFilename(prefix);\r
                a.click();\r
            }\r
\r
            // ====== UI ======\r
            const $rows = document.getElementById('rows');\r
            const $cols = document.getElementById('cols');\r
            const $count = document.getElementById('count');\r
            const $blankPct = document.getElementById('blankPct');\r
            const $blankCount = document.getElementById('blankCount');\r
            const $btnGen = document.getElementById('btnGen');\r
            const $btnDownload = document.getElementById('btnDownload');\r
            const $btnPrint = document.getElementById('btnPrint');\r
            const $btnAnswer = document.getElementById('btnAnswer');\r
\r
            let lastLayout = null; // { layout, mask:Set, meta }\r
\r
            function genAndRender() {\r
                const rows = clamp(parseInt($rows.value, 10) || 15, 5, 25);\r
                const cols = clamp(parseInt($cols.value, 10) || 15, 5, 25);\r
                const count = clamp(parseInt($count.value, 10) || 10, 5, 20);\r
                const blankPct = clamp(parseInt($blankPct.value, 10) || 0, 0, 80);\r
                const blankCount = clamp(parseInt($blankCount.value, 10) || 0, 0, 999);\r
\r
                // 너무 작은 그리드에 너무 많은 퀴즈는 실패율이 높음. 그래도 최대한 시도.\r
                let layout = null;\r
                for (let i = 0; i < 12; i++) {\r
                    layout = makePuzzle(rows, cols, count);\r
                    if (layout) break;\r
                }\r
\r
                if (!layout) {\r
                    // 실패 시 안내용 텍스트만\r
                    ctx.setTransform(1, 0, 0, 1, 0, 0);\r
                    ctx.clearRect(0, 0, A5W, A5H);\r
                    ctx.fillStyle = '#fff';\r
                    ctx.fillRect(0, 0, A5W, A5H);\r
                    ctx.fillStyle = '#000';\r
                    ctx.font = \`\${Math.round(4 * PX_PER_MM)}px system-ui, sans-serif\`;\r
                    ctx.fillText('생성 실패: 그리드 크기를 늘리거나 퀴즈 개수를 줄여주세요.', Math.round(10 * PX_PER_MM), Math.round(20 * PX_PER_MM));\r
                    lastLayout = null;\r
                    return;\r
                }\r
\r
                // 마스킹(빈칸) 결정\r
                const mask = buildMask(layout, blankPct, blankCount);\r
                // 연산식 구간(가로/세로) 검출: 굵은 테두리 표시용\r
                const runs = findExpressionRuns(layout);\r
\r
                lastLayout = { layout, mask, meta: { rows, cols, count, blankPct, blankCount, blankK: mask.size, runs } };\r
                const box = drawA5(layout, { rows, cols, count, mask, blankK: mask.size, runs, showAnswer: false });\r
                lastLayout.meta.renderBox = box;\r
                lastLayout.meta.lastMode = 'problem';\r
            }\r
\r
            $btnGen.addEventListener('click', genAndRender);\r
            $btnDownload.addEventListener('click', () => {\r
                if (!lastLayout) genAndRender();\r
                if (!lastLayout) return;\r
\r
                // ✅ 화면을 바꾸지 않고, 현재 화면 상태(문제/답안)를 그대로 저장\r
                const { meta } = lastLayout;\r
                if (!meta.renderBox) return;\r
\r
                const prefix = (meta.lastMode === 'answer') ? 'answer' : 'puzzle';\r
                downloadPuzzleOnlyPNG(meta.renderBox, prefix);\r
            });\r
            $btnPrint.addEventListener('click', () => window.print());\r
\r
            $btnAnswer.addEventListener('click', () => {\r
                if (!lastLayout) return;\r
                const { layout, mask, meta } = lastLayout;\r
                meta.renderBox = drawA5(layout, { ...meta, mask, blankK: mask.size, runs: meta.runs, showAnswer: true });\r
                meta.lastMode = 'answer';\r
            });\r
\r
            // 초기 생성\r
            genAndRender();\r
        })();\r
    <\/script>\r
</body>\r
\r
</html>
`;function Df(){return I.jsx(vl,{html:jf})}function Ff(){return I.jsx(gl,{title:"사칙연산 퍼즐",children:I.jsx(Df,{})})}const Hf=`<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>숫자 순서 찾기 퍼즐</title>
  <style>
    :root{
      --bg:#f4efe6;
      --fg:#1f1a14;
      --line:#6b4f2a;
      --ok:#dff7df;
      --bad:#ffe0e0;
      --pick:#fff5c7;
      --card:#fffaf2;
      --muted:#6f6558;
      --panel:#fffdf7;
    }
    *{box-sizing:border-box;}
    body{
      margin:0;
      background:
        radial-gradient(circle at 10% 10%, #fff7e7 0%, transparent 40%),
        radial-gradient(circle at 90% 0%, #f3dfc5 0%, transparent 35%),
        var(--bg);
      color:var(--fg);
      font-family: "Trebuchet MS", "Noto Sans KR", Segoe UI, Arial, sans-serif;
    }
    .wrap{
      max-width:980px;
      margin:20px auto;
      padding:16px;
    }
    .card{
      background:var(--card);
      border:2px solid var(--line);
      padding:14px;
      border-radius:12px;
      box-shadow: 0 8px 20px rgba(58, 38, 14, 0.12);
    }
    h1{
      margin:0 0 10px;
      font-size:22px;
      font-weight:700;
    }
    .sub{
      margin:0 0 12px;
      color:var(--muted);
      font-size:14px;
      line-height:1.45;
    }
    .row{
      display:flex;
      gap:8px;
      align-items:center;
      flex-wrap:wrap;
      margin-bottom:10px;
    }
    label{font-size:14px; color:var(--muted);}
    input[type="text"]{
      border:2px solid var(--line);
      padding:8px 10px;
      font-size:16px;
      width:160px;
      border-radius:10px;
      background:#fffdf7;
      color:var(--fg);
    }
    button{
      border:2px solid var(--line);
      background:#fff7e8;
      color:var(--fg);
      padding:8px 12px;
      font-weight:700;
      cursor:pointer;
      border-radius:10px;
    }
    button:hover{ filter: brightness(0.97); }
    .target{
      border:2px dashed var(--line);
      padding:10px;
      margin:10px 0;
      font-size:18px;
      font-weight:700;
      background:#fffdf7;
      border-radius:10px;
    }
    .grid{
      display:grid;
      grid-template-columns:repeat(8, 1fr);
      border:2px solid var(--line);
      background:#fff;
      border-radius:10px;
      overflow:hidden;
    }
    .cell{
      border:1px solid var(--line);
      min-height:52px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:20px;
      font-weight:800;
      cursor:pointer;
      user-select:none;
      background:#fff;
    }
    .cell:hover{ background:var(--pick); }
    .cell.ok{ background:var(--ok); }
    .cell.bad{ background:var(--bad); }
    .status{
      margin-top:10px;
      min-height:24px;
      font-weight:700;
    }
    .hint{
      margin-top:8px;
      color:var(--muted);
      font-size:13px;
    }
    @media (max-width:700px){
      .cell{font-size:16px; min-height:44px;}
    }
  </style>
</head>
<body>
  <div class="wrap">
    <section class="card">
      <h1>숫자 순서 찾기 퍼즐</h1>
      <p class="sub">
        2~4자리 숫자를 입력하면 8x8 모든 칸이 기준 숫자로 채워집니다.
        단 1칸만 자리 순서가 뒤바뀐 숫자입니다.
      </p>

      <div class="row">
        <label for="inputNumber">기준 숫자</label>
        <input id="inputNumber" type="text" inputmode="numeric" maxlength="4" placeholder="예: 1234" />
        <button id="btnStart">퍼즐 생성</button>
        <button id="btnReveal">정답 보기</button>
        <button id="btnDownload">이미지 다운로드(PNG)</button>
      </div>

      <div class="target">찾을 기준 숫자: <span id="targetBase">-</span></div>

      <div id="grid" class="grid" aria-label="8x8 puzzle grid"></div>

      <div id="status" class="status"></div>
      <div class="hint">규칙: 기준 숫자는 전체 칸에 동일하게 표시되고, 단 1칸만 랜덤한 특정 자리 기준으로 뒤바뀐 숫자입니다.</div>
    </section>
  </div>

  <script>
  (function(){
    'use strict';

    var SIZE = 8;
    var state = {
      base: '',
      answer: '',
      answerIndex: -1,
      values: []
    };

    var $input = document.getElementById('inputNumber');
    var $btnStart = document.getElementById('btnStart');
    var $btnReveal = document.getElementById('btnReveal');
    var $btnDownload = document.getElementById('btnDownload');
    var $grid = document.getElementById('grid');
    var $status = document.getElementById('status');
    var $targetBase = document.getElementById('targetBase');

    function isValidBase(v){
      return /^\\d{2,4}$/.test(v);
    }

    function makeDifferentOrder(v){
      var chars = v.split('');
      var len = chars.length;
      var sourceCandidates = [];

      for (var s=0; s<len; s++){
        for (var t=0; t<len; t++){
          if (s !== t && chars[s] !== chars[t]){
            sourceCandidates.push(s);
            break;
          }
        }
      }

      if (!sourceCandidates.length) return null;

      var sourceIndex = sourceCandidates[Math.floor(Math.random() * sourceCandidates.length)];
      var targetCandidates = [];
      for (var i=0; i<len; i++){
        if (i !== sourceIndex && chars[i] !== chars[sourceIndex]){
          targetCandidates.push(i);
        }
      }

      if (!targetCandidates.length) return null;
      var targetIndex = targetCandidates[Math.floor(Math.random() * targetCandidates.length)];

      var tmp = chars[sourceIndex];
      chars[sourceIndex] = chars[targetIndex];
      chars[targetIndex] = tmp;
      return chars.join('');
    }

    function buildPuzzle(base){
      var answer = makeDifferentOrder(base);
      if (!answer){
        throw new Error('모든 자릿수가 같으면 순서가 다른 숫자를 만들 수 없습니다. 다른 숫자를 입력하세요.');
      }

      var total = SIZE * SIZE;
      var values = [];
      for (var i=0; i<total; i++){
        values.push(base);
      }

      var answerIndex = Math.floor(Math.random() * total);
      values[answerIndex] = answer;

      return {
        base: base,
        answer: answer,
        answerIndex: answerIndex,
        values: values
      };
    }

    function renderGrid(){
      $grid.innerHTML = '';
      for (var i=0; i<state.values.length; i++){
        var cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'cell';
        cell.textContent = state.values[i];
        cell.setAttribute('data-index', String(i));
        cell.addEventListener('click', onCellClick);
        $grid.appendChild(cell);
      }
    }

    function clearCellState(){
      var cells = $grid.querySelectorAll('.cell');
      for (var i=0; i<cells.length; i++){
        cells[i].classList.remove('ok');
        cells[i].classList.remove('bad');
      }
    }

    function onCellClick(e){
      var idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
      clearCellState();

      if (idx === state.answerIndex){
        e.currentTarget.classList.add('ok');
        $status.textContent = '정답입니다. (' + state.answer + ')';
        return;
      }

      e.currentTarget.classList.add('bad');
      $status.textContent = '오답입니다. 다시 찾아보세요.';
    }

    function revealAnswer(){
      var el = $grid.querySelector('[data-index="' + state.answerIndex + '"]');
      if (!el) return;
      clearCellState();
      el.classList.add('ok');
      $status.textContent = '정답 위치를 표시했습니다. (' + state.answer + ')';
    }

    function downloadPuzzlePNG(){
      var card = document.querySelector('.card');
      if (!card) return;

      var rect = card.getBoundingClientRect();
      var cssW = Math.max(1, Math.round(rect.width));
      var cssH = Math.max(1, Math.round(rect.height));
      var dpr = window.devicePixelRatio || 1;
      var styles = '';
      var styleNodes = document.querySelectorAll('style');
      for (var s=0; s<styleNodes.length; s++) styles += styleNodes[s].textContent || '';

      var cardHTML = card.outerHTML;
      var svg =
        '<svg xmlns="http://www.w3.org/2000/svg" width="' + cssW + '" height="' + cssH + '">' +
          '<foreignObject width="100%" height="100%">' +
            '<div xmlns="http://www.w3.org/1999/xhtml">' +
              '<style>' + styles + '</style>' +
              cardHTML +
            '</div>' +
          '</foreignObject>' +
        '</svg>';

      var blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var img = new Image();

      img.onload = function(){
        var canvas = document.createElement('canvas');
        canvas.width = Math.round(cssW * dpr);
        canvas.height = Math.round(cssH * dpr);
        var ctx = canvas.getContext('2d');
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.drawImage(img, 0, 0, cssW, cssH);

        var a = document.createElement('a');
        a.download = 'findnumber_puzzle.png';
        a.href = canvas.toDataURL('image/png');
        a.click();
        URL.revokeObjectURL(url);
      };

      img.onerror = function(){
        URL.revokeObjectURL(url);
        $status.textContent = '이미지 저장에 실패했습니다. 다시 시도해 주세요.';
      };

      img.src = url;
    }

    function startPuzzle(){
      var base = String($input.value || '').trim();
      if (!isValidBase(base)){
        $status.textContent = '2~4자리 숫자만 입력하세요.';
        return;
      }

      try {
        state = buildPuzzle(base);
      } catch (err){
        $status.textContent = err.message || String(err);
        return;
      }

      $targetBase.textContent = state.base;
      $status.textContent = '퍼즐이 생성되었습니다. 하나만 다른 숫자를 찾으세요.';
      renderGrid();
    }

    $btnStart.addEventListener('click', startPuzzle);
    $btnReveal.addEventListener('click', revealAnswer);
    $btnDownload.addEventListener('click', downloadPuzzlePNG);
    $input.addEventListener('keydown', function(e){
      if (e.key === 'Enter') startPuzzle();
    });

    $input.value = '1234';
    startPuzzle();
  })();
  <\/script>
</body>
</html>\r
`;function Bf(){return I.jsx(vl,{html:Hf})}function Uf(){return I.jsx(gl,{title:"숫자 찾기 퍼즐",children:I.jsx(Bf,{})})}const Wf=`<!doctype html>\r
<html lang="ko">\r
<head>\r
  <meta charset="utf-8" />\r
  <meta name="viewport" content="width=device-width,initial-scale=1" />\r
  <title>A5 Square Maze Generator</title>\r
  <style>
    html,body{height:100%;}
    :root{
      --bg:#f4efe6;
      --fg:#1f1a14;
      --line:#6b4f2a;
      --muted:#6f6558;
      --card:#fffaf2;
      --panel:#fffdf7;
    }
    body{
      margin:0;
      font-family:"Trebuchet MS","Noto Sans KR",Segoe UI,Arial,sans-serif;
      background:
        radial-gradient(circle at 10% 10%, #fff7e7 0%, transparent 40%),
        radial-gradient(circle at 90% 0%, #f3dfc5 0%, transparent 35%),
        var(--bg);
      color:var(--fg);
    }
    .wrap{max-width:1100px;margin:0 auto;padding:18px;}
    .grid{display:grid;grid-template-columns:360px 1fr;gap:14px;align-items:start;}
    .card{
      background:var(--card);
      border:2px solid var(--line);
      border-radius:16px;
      overflow:hidden;
      box-shadow:0 8px 20px rgba(58,38,14,.12);
    }
    .card h1{
      font-size:18px;
      margin:0;
      padding:14px 16px;
      border-bottom:2px solid var(--line);
    }
    .card .content{padding:14px 16px;}
    label{display:block;font-size:12px;color:var(--muted);margin:10px 0 6px;}
    input[type=range],input[type=number]{width:100%;}
    .row{display:grid;grid-template-columns:1fr 120px;gap:10px;}
    .btns{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;}
    input[type=number]{
      border:2px solid var(--line);
      background:#fffdf7;
      color:var(--fg);
      border-radius:10px;
      padding:8px 10px;
      font-size:14px;
    }
    input[type=range]{accent-color:var(--line);}
    button{
      border:2px solid var(--line);
      background:#fff7e8;
      color:var(--fg);
      border-radius:10px;
      padding:10px 12px;
      font-weight:600;
      cursor:pointer;
    }
    button:hover{filter:brightness(.97);}

    .canvasWrap{background:var(--panel);border-radius:14px;padding:10px;display:flex;justify-content:center;}
    canvas{max-width:100%;height:auto;background:#fff;border-radius:10px;}
\r
    @media print{\r
      body{background:#fff;color:#000;}\r
      .wrap{max-width:none;padding:0;}\r
      .grid{grid-template-columns:1fr;}\r
      .card:first-child{display:none;}\r
      @page{size:A5 portrait;margin:0;}\r
      canvas{width:148mm;height:210mm;border-radius:0;}\r
    }\r
\r
    @media (max-width:980px){\r
      .grid{grid-template-columns:1fr;}\r
    }\r
  </style>\r
</head>\r
<body>\r
<div class="wrap">\r
  <div class="grid">\r
    <section class="card">\r
      <h1>사각형 미로 설정</h1>\r
      <div class="content">\r
        <div class="row">\r
          <div>\r
            <label>난이도(셀 밀도)</label>\r
            <input id="difficulty" type="range" min="6" max="40" value="18" />\r
          </div>\r
          <div>\r
            <label>값</label>\r
            <input id="difficultyNum" type="number" min="6" max="40" value="18" />\r
          </div>\r
        </div>\r
\r
        <label>여백(mm)</label>\r
        <input id="marginMm" type="range" min="0" max="12" value="6" />\r
\r
        <div class="btns">\r
          <button id="regen">미로 생성</button>\r
          <button id="solve">해답 보기</button>\r
          <button id="download">이미지 다운로드</button>\r
          <button id="print">인쇄(A5)</button>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <section class="card">\r
      <div class="canvasWrap">\r
        <canvas id="c" width="1748" height="2480"></canvas>\r
      </div>\r
    </section>\r
  </div>\r
</div>\r
\r
<script>\r
(() => {\r
'use strict';\r
\r
const CANVAS_W = 1748;\r
const CANVAS_H = 2480;\r
const DPI = 300;\r
const MM_PER_IN = 25.4;\r
\r
const el = {\r
  difficulty: document.getElementById('difficulty'),\r
  difficultyNum: document.getElementById('difficultyNum'),\r
  marginMm: document.getElementById('marginMm'),\r
  regen: document.getElementById('regen'),\r
  solve: document.getElementById('solve'),\r
  download: document.getElementById('download'),\r
  print: document.getElementById('print'),\r
  c: document.getElementById('c')\r
};\r
\r
const ctx = el.c.getContext('2d');\r
\r
let mazeData = null;\r
let startCell = null;\r
let exitCell = null;\r
let showSolution = false;\r
\r
function mmToPx(mm){ return Math.round((mm / MM_PER_IN) * DPI); }\r
function randInt(n){ return (Math.random() * n) | 0; }\r
function key(x,y){ return x+','+y; }\r
\r
function carveMaze(cols, rows){\r
  const visited = new Set();\r
  const edgesOpen = new Set();\r
  const stack = [];\r
  const start = key(0,0);\r
  stack.push(start);\r
  visited.add(start);\r
\r
  function neighbors(k){\r
    const [x,y] = k.split(',').map(Number);\r
    const n=[];\r
    if(x>0) n.push(key(x-1,y));\r
    if(x<cols-1) n.push(key(x+1,y));\r
    if(y>0) n.push(key(x,y-1));\r
    if(y<rows-1) n.push(key(x,y+1));\r
    return n;\r
  }\r
\r
  while(stack.length){\r
    const cur = stack[stack.length-1];\r
    const nbs = neighbors(cur).filter(n=>!visited.has(n));\r
    if(!nbs.length){ stack.pop(); continue; }\r
    const nxt = nbs[randInt(nbs.length)];\r
    const e = cur<nxt?cur+'|'+nxt:nxt+'|'+cur;\r
    edgesOpen.add(e);\r
    visited.add(nxt);\r
    stack.push(nxt);\r
  }\r
  return edgesOpen;\r
}\r
\r
function isOpen(edges,a,b){\r
  const e = a<b?a+'|'+b:b+'|'+a;\r
  return edges.has(e);\r
}\r
\r
function solveMaze(cols,rows,edges,start,goal){\r
  const queue=[start];\r
  const parent={};\r
  parent[start]=null;\r
\r
  while(queue.length){\r
    const cur=queue.shift();\r
    if(cur===goal) break;\r
    const [x,y]=cur.split(',').map(Number);\r
    const nbs=[];\r
    if(x>0) nbs.push(key(x-1,y));\r
    if(x<cols-1) nbs.push(key(x+1,y));\r
    if(y>0) nbs.push(key(x,y-1));\r
    if(y<rows-1) nbs.push(key(x,y+1));\r
    for(const nb of nbs){\r
      if(!parent.hasOwnProperty(nb) && isOpen(edges,cur,nb)){\r
        parent[nb]=cur;\r
        queue.push(nb);\r
      }\r
    }\r
  }\r
\r
  const path=[];\r
  let cur=goal;\r
  while(cur){ path.push(cur); cur=parent[cur]; }\r
  return path.reverse();\r
}\r
\r
function render(){\r
  const density=Math.max(6,Math.min(40,+el.difficulty.value));\r
  const marginPx=mmToPx(+el.marginMm.value);\r
  const cols=density;\r
  const rows=Math.max(6, Math.round(cols*(CANVAS_H/CANVAS_W)));\r
\r
  const innerW=CANVAS_W-marginPx*2;\r
  const innerH=CANVAS_H-marginPx*2;\r
  const cell=Math.min(innerW/cols,innerH/rows);\r
  const w=cell*cols;\r
  const h=cell*rows;\r
  const ox=(CANVAS_W-w)/2;\r
  const oy=(CANVAS_H-h)/2;\r
\r
  // ✅ Start/Exit는 반드시 "바깥 테두리"(사면)에서 열려야 함.\r
  // ✅ Start/Exit는 절대 같은 위치가 되면 안 됨.\r
  // ✅ 난이도 강화: Start→Exit 해답 경로에 분기점(3-way 이상)이 최소 3개 이상 나오도록 재생성.\r
\r
  function pickBoundaryEdge(exclude){\r
    const sides=['top','bottom','left','right'];\r
    for(let tries=0; tries<2000; tries++){\r
      const side=sides[randInt(4)];\r
      let x=0,y=0;\r
      const avoidCorners = (cols>2 && rows>2);\r
      if(side==='top'){\r
        y=0;\r
        x= avoidCorners ? (1+randInt(cols-2)) : randInt(cols);\r
      } else if(side==='bottom'){\r
        y=rows-1;\r
        x= avoidCorners ? (1+randInt(cols-2)) : randInt(cols);\r
      } else if(side==='left'){\r
        x=0;\r
        y= avoidCorners ? (1+randInt(rows-2)) : randInt(rows);\r
      } else {\r
        x=cols-1;\r
        y= avoidCorners ? (1+randInt(rows-2)) : randInt(rows);\r
      }\r
      const cellKey = key(x,y);\r
      const edgeKey = side+'@'+cellKey;\r
      if(exclude && exclude.has(edgeKey)) continue;\r
      return {side,x,y,cellKey,edgeKey};\r
    }\r
    return {side:'top',x:0,y:0,cellKey:key(0,0),edgeKey:'top@'+key(0,0)};\r
  }\r
\r
  function computeDegreeMap(edges){\r
    const deg = Object.create(null);\r
    for(let y=0;y<rows;y++) for(let x=0;x<cols;x++) deg[key(x,y)] = 0;\r
    edges.forEach(e=>{\r
      const parts=e.split('|');\r
      const a=parts[0], b=parts[1];\r
      deg[a]++; deg[b]++;\r
    });\r
    return deg;\r
  }\r
\r
  // 시도형 재생성(조건 만족할 때까지)\r
  const maxAttempts = 300;\r
  const minPathLen = Math.max(Math.round((cols+rows)*2.2), 20);\r
  let chosen = null;\r
\r
  for(let attempt=0; attempt<maxAttempts; attempt++){\r
    const edges=carveMaze(cols,rows);\r
\r
    const used = new Set();\r
    const startEdge = pickBoundaryEdge(null);\r
    used.add(startEdge.edgeKey);\r
    const exitEdge = pickBoundaryEdge(used);\r
\r
    const s = startEdge.cellKey;\r
    const g = exitEdge.cellKey;\r
\r
    const path = solveMaze(cols,rows,edges,s,g);\r
    if(!path || path.length<2) continue;\r
\r
    // 경로 길이 조건\r
    if(path.length < minPathLen) continue;\r
\r
    // 분기점(3-way 이상) 조건: 해답 경로 중간에 최소 3개\r
    const deg = computeDegreeMap(edges);\r
    let junctions = 0;\r
    for(let i=1;i<path.length-1;i++){\r
      if(deg[path[i]] >= 3) junctions++;\r
    }\r
    if(junctions < 3) continue;\r
\r
    chosen = {edges,startEdge,exitEdge};\r
    break;\r
  }\r
\r
  // fallback: 조건이 빡세면 그냥 마지막으로라도 생성\r
  if(!chosen){\r
    const edges=carveMaze(cols,rows);\r
    const used = new Set();\r
    const startEdge = pickBoundaryEdge(null);\r
    used.add(startEdge.edgeKey);\r
    const exitEdge = pickBoundaryEdge(used);\r
    chosen = {edges,startEdge,exitEdge};\r
  }\r
\r
  startCell = chosen.startEdge.cellKey;\r
  exitCell  = chosen.exitEdge.cellKey;\r
\r
  mazeData={cols,rows,cell,ox,oy,edges:chosen.edges,startEdge:chosen.startEdge,exitEdge:chosen.exitEdge};\r
  draw();\r
}\r
\r
function draw(){\r
  const {cols,rows,cell,ox,oy,edges,startEdge,exitEdge}=mazeData;\r
\r
  ctx.clearRect(0,0,CANVAS_W,CANVAS_H);\r
  ctx.fillStyle='#fff';\r
  ctx.fillRect(0,0,CANVAS_W,CANVAS_H);\r
\r
  ctx.strokeStyle='#000';\r
  ctx.lineWidth=Math.max(2,cell*0.06);\r
  ctx.lineCap='butt';\r
\r
  const gapW = cell*0.65; // 입구/출구 폭(약간 넓게)\r
\r
  function drawHWithGap(x0,y,cellW,hasGap){\r
    if(!hasGap){\r
      ctx.moveTo(x0,y); ctx.lineTo(x0+cellW,y);\r
      return;\r
    }\r
    const mid = x0 + cellW/2;\r
    const a = mid - gapW/2;\r
    const b = mid + gapW/2;\r
    ctx.moveTo(x0,y); ctx.lineTo(a,y);\r
    ctx.moveTo(b,y);  ctx.lineTo(x0+cellW,y);\r
  }\r
  function drawVWithGap(x,y0,cellH,hasGap){\r
    if(!hasGap){\r
      ctx.moveTo(x,y0); ctx.lineTo(x,y0+cellH);\r
      return;\r
    }\r
    const mid = y0 + cellH/2;\r
    const a = mid - gapW/2;\r
    const b = mid + gapW/2;\r
    ctx.moveTo(x,y0); ctx.lineTo(x,a);\r
    ctx.moveTo(x,b);  ctx.lineTo(x,y0+cellH);\r
  }\r
\r
  ctx.beginPath();\r
\r
  for(let y=0;y<rows;y++){\r
    for(let x=0;x<cols;x++){\r
      const me=key(x,y);\r
      const x0=ox+x*cell;\r
      const y0=oy+y*cell;\r
\r
      // TOP border (y===0)\r
      if(y===0){\r
        const gap = ( (startEdge.side==='top' && startEdge.x===x) || (exitEdge.side==='top' && exitEdge.x===x) );\r
        drawHWithGap(x0, y0, cell, gap);\r
      }\r
\r
      // LEFT border (x===0)\r
      if(x===0){\r
        const gap = ( (startEdge.side==='left' && startEdge.y===y) || (exitEdge.side==='left' && exitEdge.y===y) );\r
        drawVWithGap(x0, y0, cell, gap);\r
      }\r
\r
      // RIGHT border (x===cols-1)\r
      if(x===cols-1){\r
        const gap = ( (startEdge.side==='right' && startEdge.y===y) || (exitEdge.side==='right' && exitEdge.y===y) );\r
        drawVWithGap(x0+cell, y0, cell, gap);\r
      } else {\r
        const nb=key(x+1,y);\r
        if(!isOpen(edges,me,nb)){\r
          ctx.moveTo(x0+cell,y0);\r
          ctx.lineTo(x0+cell,y0+cell);\r
        }\r
      }\r
\r
      // BOTTOM border (y===rows-1)\r
      if(y===rows-1){\r
        const gap = ( (startEdge.side==='bottom' && startEdge.x===x) || (exitEdge.side==='bottom' && exitEdge.x===x) );\r
        drawHWithGap(x0, y0+cell, cell, gap);\r
      } else {\r
        const nb=key(x,y+1);\r
        if(!isOpen(edges,me,nb)){\r
          ctx.moveTo(x0,y0+cell);\r
          ctx.lineTo(x0+cell,y0+cell);\r
        }\r
      }\r
    }\r
  }\r
\r
  ctx.stroke();\r
\r
  // START / EXIT 텍스트(사면 바깥에 붙여 표시)\r
  ctx.fillStyle='#000';\r
  ctx.font = \`bold \${Math.max(22,cell*0.55)}px Arial\`;\r
  ctx.textBaseline='middle';\r
\r
  function drawLabel(edge, text){\r
    const x0 = ox + edge.x*cell;\r
    const y0 = oy + edge.y*cell;\r
    const cx = x0 + cell/2;\r
    const cy = y0 + cell/2;\r
\r
    if(edge.side==='top'){\r
      ctx.textAlign='center';\r
      ctx.fillText(text, cx, y0 - cell*0.35);\r
    } else if(edge.side==='bottom'){\r
      ctx.textAlign='center';\r
      ctx.fillText(text, cx, y0 + cell*1.35);\r
    } else if(edge.side==='left'){\r
      ctx.textAlign='right';\r
      ctx.fillText(text, x0 - cell*0.25, cy);\r
    } else {\r
      ctx.textAlign='left';\r
      ctx.fillText(text, x0 + cell + cell*0.25, cy);\r
    }\r
  }\r
\r
  drawLabel(startEdge,'S');\r
  drawLabel(exitEdge,'E');\r
\r
  if(showSolution){\r
    const path=solveMaze(cols,rows,edges,startCell,exitCell);\r
    ctx.strokeStyle='#000';\r
    ctx.setLineDash([10,10]);\r
    ctx.lineWidth=Math.max(2,cell*0.12);\r
    ctx.beginPath();\r
    path.forEach((p,i)=>{\r
      const [x,y]=p.split(',').map(Number);\r
      const cx=ox+x*cell+cell/2;\r
      const cy=oy+y*cell+cell/2;\r
      if(i===0) ctx.moveTo(cx,cy);\r
      else ctx.lineTo(cx,cy);\r
    });\r
    ctx.stroke();\r
    ctx.setLineDash([]);\r
  }\r
}\r
\r
function downloadPNG(){\r
  const a=document.createElement('a');\r
  a.download='maze_A5_square.png';\r
  a.href=el.c.toDataURL('image/png');\r
  a.click();\r
}\r
\r
function syncDifficulty(from){\r
  const v=Math.max(6,Math.min(40,+from.value||18));\r
  el.difficulty.value=v;\r
  el.difficultyNum.value=v;\r
  showSolution=false;\r
  render();\r
}\r
\r
el.difficulty.addEventListener('input',()=>syncDifficulty(el.difficulty));\r
el.difficultyNum.addEventListener('input',()=>syncDifficulty(el.difficultyNum));\r
el.marginMm.addEventListener('input',()=>{showSolution=false;render();});\r
el.regen.addEventListener('click',()=>{showSolution=false;render();});\r
el.solve.addEventListener('click',()=>{showSolution=true;draw();});\r
el.download.addEventListener('click',downloadPNG);\r
el.print.addEventListener('click',()=>window.print());\r
\r
el.c.width=CANVAS_W;\r
el.c.height=CANVAS_H;\r
render();\r
})();\r
<\/script>\r
</body>\r
</html>\r
`;function Vf(){return I.jsx(vl,{html:Wf})}function Qf(){return I.jsx(gl,{title:"미로 퍼즐",children:I.jsx(Vf,{})})}const Kf=`<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>같은 숫자 짝 찾기 퍼즐</title>
  <style>
    :root{
      --bg:#f4efe6;
      --fg:#1f1a14;
      --line:#6b4f2a;
      --muted:#6f6558;
      --ok:#d9f0df;
      --pick:#ffe7b8;
      --bad:#ffd9d2;
      --ans:#e8ddcf;
      --card:#fffaf2;
    }
    *{box-sizing:border-box;}
    body{
      margin:0;
      background:
        radial-gradient(circle at 10% 10%, #fff7e7 0%, transparent 40%),
        radial-gradient(circle at 90% 0%, #f3dfc5 0%, transparent 35%),
        var(--bg);
      color:var(--fg);
      font-family: "Trebuchet MS", "Noto Sans KR", Segoe UI, Arial, sans-serif;
    }
    .wrap{
      max-width: 980px;
      margin: 20px auto;
      padding: 16px;
      display:grid;
      grid-template-columns: 1fr;
      gap: 14px;
    }
    .card{
      border:2px solid var(--line);
      padding: 12px;
      background:var(--card);
      border-radius:12px;
      box-shadow: 0 8px 20px rgba(58, 38, 14, 0.12);
    }
    .title{ font-weight: 800; font-size: 18px; margin: 0 0 10px; letter-spacing: -0.2px; }
    .sub{ margin: 8px 0 10px; color: var(--muted); font-size: 13px; line-height: 1.35; }

    .grid{
      display:grid;
      gap: 0;
      border: 2px solid var(--line);
      width: 100%;
      background:#fffef9;
      user-select:none;
      border-radius:10px;
      overflow:hidden;
    }
    .cell{
      border: 1px solid var(--line);
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight: 800;
      font-size: 26px;
      padding: 10px;
      cursor:pointer;
      transition: background 120ms ease;
      aspect-ratio: 1 / 1;
      min-height: 56px;
      background:#fffef9;
    }
    .cell[data-ans="1"]{ background: var(--ans); }
    .cell[data-state="picked"]{ background: var(--pick); }
    .cell[data-state="matched"]{ background: var(--ok); cursor:default; }
    .cell[data-state="bad"]{ background: var(--bad); }

    .row{display:flex; gap:10px; flex-wrap:wrap; align-items:center;}
    label{font-size:13px; color:var(--muted);}
    input[type="number"], input[readonly]{width:120px; padding:8px; border:2px solid var(--line);}
    button{
      border: 2px solid var(--line);
      background:#fff7e8;
      color:var(--fg);
      padding: 9px 12px;
      font-weight: 800;
      cursor:pointer;
      border-radius:10px;
    }
    button:hover{filter:brightness(0.97);}
    button:active{transform: translateY(1px);}

    input[type="number"], input[readonly]{
      background:#fffdf7;
      border-radius:10px;
    }

    .stats{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 10px;
    }
    .kpi{
      border:2px solid var(--line);
      padding: 10px;
      border-radius:10px;
      background:#fffdf8;
    }
    .kpi .k{font-size:12px; color:var(--muted);}
    .kpi .v{font-size:18px; font-weight:900; margin-top:6px;}

    .divider{height:1px; background:var(--line); margin: 12px 0;}
    .hint{ font-size: 13px; line-height: 1.45; color: var(--muted); margin: 8px 0 0; }
    .answer{
      margin-top: 10px;
      padding: 10px;
      border: 2px dashed var(--line);
      display:none;
      font-size: 14px;
      line-height: 1.5;
      white-space: pre-wrap;
      border-radius:10px;
      background:#fffdf8;
    }
    .mono{font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;}
  </style>
</head>
<body>
  <div class="wrap">
    <section class="card">
      <h1 class="title">같은 숫자 짝 찾기 퍼즐</h1>
      <p class="sub">
        규칙: 같은 숫자 <b>2개를 클릭</b>하면 한 쌍으로 처리됩니다. 목표는 <b>존재하는 전체 짝(=모든 숫자의 ⌊개수/2⌋ 합)</b>을 찾는 것입니다.
      </p>

      <div id="grid" class="grid" aria-label="number grid"></div>

      <div class="stats">
        <div class="kpi">
          <div class="k">찾은 짝</div>
          <div class="v"><span id="foundPairs">0</span></div>
        </div>
        <div class="kpi">
          <div class="k">전체 짝(정답)</div>
          <div class="v"><span id="totalPairs">?</span></div>
        </div>
        <div class="kpi">
          <div class="k">현재 선택</div>
          <div class="v mono" id="pickedInfo">-</div>
        </div>
        <div class="kpi">
          <div class="k">남은 셀</div>
          <div class="v"><span id="remainingCells">0</span></div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="row">
        <button id="btnNew">랜덤 생성</button>
        <button id="btnReset">매칭 리셋</button>
        <button id="btnReveal">정답 보기</button>
        <button id="btnDownload">이미지 다운로드(PNG)</button>
        <label>행×열</label><input type="text" value="8 x 6 (고정)" readonly />
        <label>정답 짝수(0~5)</label><input id="targetPairs" type="number" min="0" max="5" value="3" />
      </div>

      <p class="hint">
        • <b>행/열</b>: 8x6 고정입니다.<br/>
        • <b>숫자 범위</b>: 두 자리 수(10~99)만 사용합니다.<br/>
        • <b>정답 짝수</b>: 랜덤 생성 시, 퍼즐의 전체 짝 수를 0~5로 맞춥니다.<br/>
        • <b>정답 보기</b>: 짝이 존재하는 숫자(등장 횟수 ≥ 2)를 회색으로 표시합니다.
      </p>

      <div id="answer" class="answer"></div>
      <div class="divider"></div>
      <p class="sub" style="margin-top:0;">콘솔에서 <span class="mono">[SelfTest]</span> 로그가 보이면 기본 테스트가 통과한 것입니다.</p>
    </section>
  </div>

<script>
(function(){
  'use strict';

  var FIXED_ROWS = 8;
  var FIXED_COLS = 6;
  var MIN_NUM = 10;
  var MAX_NUM = 99;

  function clampInt(v, min, max){
    v = parseInt(v, 10);
    if (!isFinite(v)) v = min;
    if (v < min) v = min;
    if (v > max) v = max;
    return v;
  }

  function shuffle(arr){
    for (var i=arr.length-1; i>0; i--){
      var j = Math.floor(Math.random()*(i+1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function randInt(min, max){ return Math.floor(Math.random()*(max-min+1)) + min; }

  function pickUniqueNumbers(min, max, n){
    var range = max - min + 1;
    if (n > range) throw new Error('범위에 비해 필요한 고유 숫자가 너무 많습니다.');

    var used = Object.create(null);
    var out = [];
    while (out.length < n){
      var v = randInt(min, max);
      var k = String(v);
      if (used[k]) continue;
      used[k] = true;
      out.push(v);
    }
    return out;
  }

  function flattenGrid(g){
    var out = [];
    for (var r=0; r<g.length; r++) for (var c=0; c<g[r].length; c++) out.push(g[r][c]);
    return out;
  }

  function countPairs(values){
    var map = Object.create(null);
    for (var i=0; i<values.length; i++){
      var v = String(values[i]);
      map[v] = (map[v] || 0) + 1;
    }

    var total = 0;
    var distinct = 0;
    for (var k in map){
      if (map[k] >= 2) distinct++;
      total += Math.floor(map[k] / 2);
    }
    return { totalPairs: total, distinctPairValues: distinct, freq: map };
  }

  function buildAnswerValueSet(freq){
    var set = Object.create(null);
    for (var k in freq) if (freq[k] >= 2) set[k] = true;
    return set;
  }

  function generateGridExactPairs(rows, cols, minN, maxN, targetPairs){
    var size = rows * cols;
    if (targetPairs < 0) throw new Error('정답 짝수는 0 이상이어야 합니다.');
    if (targetPairs > Math.floor(size / 2)) throw new Error('정답 짝수가 너무 큽니다.');

    var singles = size - (targetPairs * 2);
    var uniqueNeeded = targetPairs + singles;
    var range = maxN - minN + 1;

    if (uniqueNeeded > range){
      throw new Error('숫자 범위가 좁아 퍼즐 생성이 불가능합니다.');
    }

    var uniques = pickUniqueNumbers(minN, maxN, uniqueNeeded);
    var values = [];

    for (var i=0; i<targetPairs; i++){
      values.push(uniques[i]);
      values.push(uniques[i]);
    }
    for (var j=0; j<singles; j++) values.push(uniques[targetPairs + j]);

    shuffle(values);

    var g = [];
    var idx = 0;
    for (var rr=0; rr<rows; rr++){
      var row = [];
      for (var cc=0; cc<cols; cc++) row.push(values[idx++]);
      g.push(row);
    }

    return g;
  }

  function boot(){
    var $grid = document.getElementById('grid');
    var $answer = document.getElementById('answer');
    var $foundPairs = document.getElementById('foundPairs');
    var $totalPairs = document.getElementById('totalPairs');
    var $pickedInfo = document.getElementById('pickedInfo');
    var $remainingCells = document.getElementById('remainingCells');
    var $targetPairs = document.getElementById('targetPairs');
    var $btnReset = document.getElementById('btnReset');
    var $btnReveal = document.getElementById('btnReveal');
    var $btnNew = document.getElementById('btnNew');
    var $btnDownload = document.getElementById('btnDownload');

    if (!$grid || !$answer || !$foundPairs || !$totalPairs || !$pickedInfo || !$remainingCells || !$targetPairs || !$btnReset || !$btnReveal || !$btnNew || !$btnDownload){
      return;
    }

    var state = {
      rows: FIXED_ROWS,
      cols: FIXED_COLS,
      grid: [],
      picked: [],
      matched: {},
      foundPairs: 0,
      totalPairs: 0,
      distinctPairValues: 0,
      revealOn: false,
      answerValueSet: Object.create(null)
    };

    function syncTargetPairsRange(){
      $targetPairs.min = '0';
      $targetPairs.max = '5';
      $targetPairs.value = String(clampInt($targetPairs.value, 0, 5));
    }

    function refreshUI(){
      $foundPairs.textContent = String(state.foundPairs);
      $totalPairs.textContent = String(state.totalPairs);
      if (state.picked.length === 0) $pickedInfo.textContent = '-';
      if (state.picked.length === 1) $pickedInfo.textContent = String(state.picked[0].val);
      if (state.picked.length === 2) $pickedInfo.textContent = String(state.picked[0].val) + ' / ' + String(state.picked[1].val);
      $remainingCells.textContent = String(state.rows * state.cols - Object.keys(state.matched).length);
    }

    function keyOf(r, c){ return r + ',' + c; }

    function loadGrid(g){
      state.grid = g;
      state.rows = g.length;
      state.cols = g[0].length;
      syncTargetPairsRange();

      var info = countPairs(flattenGrid(g));
      state.totalPairs = info.totalPairs;
      state.distinctPairValues = info.distinctPairValues;

      state.picked = [];
      state.matched = {};
      state.foundPairs = 0;
      state.revealOn = false;
      state.answerValueSet = Object.create(null);

      $answer.style.display = 'none';
      $answer.textContent = '';

      $grid.style.gridTemplateColumns = 'repeat(' + state.cols + ', 1fr)';
      $grid.innerHTML = '';

      for (var r=0; r<state.rows; r++){
        for (var c=0; c<state.cols; c++){
          var el = document.createElement('div');
          el.className = 'cell';
          el.textContent = g[r][c];
          el.setAttribute('data-r', String(r));
          el.setAttribute('data-c', String(c));
          el.setAttribute('data-state', '');
          el.setAttribute('data-ans', '0');
          el.addEventListener('click', onCellClick);
          $grid.appendChild(el);
        }
      }

      refreshUI();
    }

    function resolvePick(){
      var a = state.picked[0];
      var b = state.picked[1];

      if (a.val === b.val){
        a.el.setAttribute('data-state', 'matched');
        b.el.setAttribute('data-state', 'matched');
        state.matched[keyOf(a.r, a.c)] = true;
        state.matched[keyOf(b.r, b.c)] = true;
        state.foundPairs++;
        state.picked = [];
        refreshUI();

        if (state.foundPairs === state.totalPairs){
          $answer.style.display = 'block';
          $answer.textContent = '완료!\\n존재하는 전체 짝 수 = ' + state.totalPairs + '\\n짝이 되는 숫자 종류 수 = ' + state.distinctPairValues;
        }
        return;
      }

      a.el.setAttribute('data-state', 'bad');
      b.el.setAttribute('data-state', 'bad');
      setTimeout(function(){
        a.el.setAttribute('data-state', '');
        b.el.setAttribute('data-state', '');
        state.picked = [];
        refreshUI();
      }, 260);
    }

    function onCellClick(e){
      var el = e.currentTarget;
      var r = parseInt(el.getAttribute('data-r'), 10);
      var c = parseInt(el.getAttribute('data-c'), 10);
      var k = keyOf(r, c);

      if (state.matched[k]) return;
      if (state.picked.length === 2) return;

      for (var i=0; i<state.picked.length; i++){
        if (state.picked[i].r === r && state.picked[i].c === c) return;
      }

      var val = state.grid[r][c];
      state.picked.push({ r:r, c:c, el:el, val:val });
      el.setAttribute('data-state', 'picked');
      refreshUI();

      if (state.picked.length === 2) resolvePick();
    }

    function resetMatchingOnly(){
      state.picked = [];
      state.matched = {};
      state.foundPairs = 0;

      var cells = $grid.querySelectorAll('.cell');
      for (var i=0; i<cells.length; i++) cells[i].setAttribute('data-state', '');

      $answer.style.display = 'none';
      $answer.textContent = '';
      refreshUI();
    }

    function applyRevealHighlight(){
      var info = countPairs(flattenGrid(state.grid));
      state.answerValueSet = buildAnswerValueSet(info.freq);
      var cells = $grid.querySelectorAll('.cell');
      for (var i=0; i<cells.length; i++){
        var v = String(cells[i].textContent);
        cells[i].setAttribute('data-ans', state.answerValueSet[v] ? '1' : '0');
      }
    }

    function clearRevealHighlight(){
      var cells = $grid.querySelectorAll('.cell');
      for (var i=0; i<cells.length; i++) cells[i].setAttribute('data-ans', '0');
      state.answerValueSet = Object.create(null);
    }

    function toggleRevealAnswer(){
      if (!state.revealOn){
        state.revealOn = true;
        applyRevealHighlight();
        var info = countPairs(flattenGrid(state.grid));
        $answer.style.display = 'block';
        $answer.textContent = '정답(전체 짝 수) = ' + info.totalPairs + '\\n' +
          '짝이 되는 숫자 종류 수 = ' + info.distinctPairValues + '\\n' +
          '(정의: Σ floor(각 숫자 개수/2))';
        return;
      }

      state.revealOn = false;
      clearRevealHighlight();
      $answer.style.display = 'none';
      $answer.textContent = '';
    }

    function downloadGridPNG(){
      var rect = $grid.getBoundingClientRect();
      var cssW = Math.max(1, Math.round(rect.width));
      var cssH = Math.max(1, Math.round(rect.height));
      var dpr = window.devicePixelRatio || 1;

      var canvas = document.createElement('canvas');
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);

      var ctx = canvas.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var COLOR_BG = '#ffffff';
      var COLOR_LINE = '#111111';
      var COLOR_OK = '#e6ffe6';
      var COLOR_PICK = '#fff7cc';
      var COLOR_BAD = '#ffe6e6';
      var COLOR_ANS = '#d9d9d9';

      ctx.fillStyle = COLOR_BG;
      ctx.fillRect(0, 0, cssW, cssH);

      var rows = state.rows;
      var cols = state.cols;
      var cellW = cssW / cols;
      var cellH = cssH / rows;

      var cells = $grid.querySelectorAll('.cell');
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '800 26px system-ui, -apple-system, Segoe UI, Roboto, "Noto Sans KR", Arial, sans-serif';

      for (var i=0; i<cells.length; i++){
        var el = cells[i];
        var r = parseInt(el.getAttribute('data-r'), 10);
        var c = parseInt(el.getAttribute('data-c'), 10);
        var x = c * cellW;
        var y = r * cellH;

        var st = el.getAttribute('data-state') || '';
        var ans = el.getAttribute('data-ans') || '0';
        var fill = COLOR_BG;
        if (st === 'matched') fill = COLOR_OK;
        else if (st === 'picked') fill = COLOR_PICK;
        else if (st === 'bad') fill = COLOR_BAD;
        else if (ans === '1') fill = COLOR_ANS;

        ctx.fillStyle = fill;
        ctx.fillRect(x, y, cellW, cellH);
        ctx.fillStyle = '#111111';
        ctx.fillText(String(el.textContent), x + cellW/2, y + cellH/2);
      }

      ctx.strokeStyle = COLOR_LINE;
      ctx.lineWidth = 1;
      for (var rr=1; rr<rows; rr++){
        var yy = rr * cellH;
        ctx.beginPath();
        ctx.moveTo(0, yy);
        ctx.lineTo(cssW, yy);
        ctx.stroke();
      }
      for (var cc=1; cc<cols; cc++){
        var xx = cc * cellW;
        ctx.beginPath();
        ctx.moveTo(xx, 0);
        ctx.lineTo(xx, cssH);
        ctx.stroke();
      }
      ctx.lineWidth = 2;
      ctx.strokeRect(0, 0, cssW, cssH);

      var a = document.createElement('a');
      a.download = 'number-pairs-grid.png';
      a.href = canvas.toDataURL('image/png');
      a.click();
    }

    function regenerateFromControls(){
      syncTargetPairsRange();
      var targetPairs = clampInt($targetPairs.value, 0, 5);
      var g = generateGridExactPairs(FIXED_ROWS, FIXED_COLS, MIN_NUM, MAX_NUM, targetPairs);
      loadGrid(g);
    }

    $btnReset.addEventListener('click', resetMatchingOnly);
    $btnReveal.addEventListener('click', toggleRevealAnswer);
    $btnNew.addEventListener('click', regenerateFromControls);
    $btnDownload.addEventListener('click', downloadGridPNG);
    $targetPairs.addEventListener('change', regenerateFromControls);
    $targetPairs.addEventListener('input', regenerateFromControls);

    try {
      syncTargetPairsRange();
      regenerateFromControls();
    } catch (err) {
      $answer.style.display = 'block';
      $answer.textContent = '초기화 오류: ' + (err && err.message ? err.message : String(err));
      console.error(err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
<\/script>
</body>
</html>\r
\r
`;function Gf(){return I.jsx(vl,{html:Kf})}function Xf(){return I.jsx(gl,{title:"같은 숫자 퍼즐",children:I.jsx(Gf,{})})}function Yf({pageId:e}){switch(e){case"calculate":return I.jsx(Ff,{});case"find-number":return I.jsx(Uf,{});case"maze":return I.jsx(Qf,{});case"same-number":default:return I.jsx(Xf,{})}}const Fi=[{id:"same-number",label:"같은 숫자 퍼즐"},{id:"calculate",label:"사칙연산 퍼즐"},{id:"find-number",label:"숫자 찾기 퍼즐"},{id:"maze",label:"미로 퍼즐"}];function qf(e){return Fi.find(n=>n.id===e)||Fi[0]}function Qa(){const e=window.location.hash.replace("#","");return qf(e).id}function Zf(){const[e,n]=tn.useState(Qa);return tn.useEffect(()=>{window.location.hash=e},[e]),tn.useEffect(()=>{function t(){n(Qa())}return window.addEventListener("hashchange",t),()=>window.removeEventListener("hashchange",t)},[]),I.jsxs("div",{className:"app-layout",children:[I.jsx(Af,{pages:Fi,activePageId:e,onSelectPage:n}),I.jsx("main",{className:"content",children:I.jsx(Yf,{pageId:e})})]})}lc(document.getElementById("root")).render(I.jsx(Sc.StrictMode,{children:I.jsx(Zf,{})}));
