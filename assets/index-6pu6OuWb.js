(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();function _d(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function Rb(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var a=r.default;if(typeof a=="function"){var s=function l(){var o=!1;try{o=this instanceof l}catch{}return o?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};s.prototype=a.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(r).forEach(function(l){var o=Object.getOwnPropertyDescriptor(r,l);Object.defineProperty(s,l,o.get?o:{enumerable:!0,get:function(){return r[l]}})}),s}var zc={exports:{}},ns={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function Db(){if(Up)return ns;Up=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function s(l,o,c){var h=null;if(c!==void 0&&(h=""+c),o.key!==void 0&&(h=""+o.key),"key"in o){c={};for(var m in o)m!=="key"&&(c[m]=o[m])}else c=o;return o=c.ref,{$$typeof:r,type:l,key:h,ref:o!==void 0?o:null,props:c}}return ns.Fragment=a,ns.jsx=s,ns.jsxs=s,ns}var Np;function Mb(){return Np||(Np=1,zc.exports=Db()),zc.exports}var f=Mb(),Cc={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function Ub(){if(qp)return he;qp=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=b&&T[b]||T["@@iterator"],typeof T=="function"?T:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,k={};function z(T,Y,Z){this.props=T,this.context=Y,this.refs=k,this.updater=Z||_}z.prototype.isReactComponent={},z.prototype.setState=function(T,Y){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,Y,"setState")},z.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function B(){}B.prototype=z.prototype;function M(T,Y,Z){this.props=T,this.context=Y,this.refs=k,this.updater=Z||_}var N=M.prototype=new B;N.constructor=M,S(N,z.prototype),N.isPureReactComponent=!0;var G=Array.isArray,Q={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function J(T,Y,Z,X,F,ue){return Z=ue.ref,{$$typeof:r,type:T,key:Y,ref:Z!==void 0?Z:null,props:ue}}function re(T,Y){return J(T.type,Y,void 0,void 0,void 0,T.props)}function ge(T){return typeof T=="object"&&T!==null&&T.$$typeof===r}function Ge(T){var Y={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(Z){return Y[Z]})}var ee=/\/+/g;function I(T,Y){return typeof T=="object"&&T!==null&&T.key!=null?Ge(""+T.key):Y.toString(36)}function me(){}function ie(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(me,me):(T.status="pending",T.then(function(Y){T.status==="pending"&&(T.status="fulfilled",T.value=Y)},function(Y){T.status==="pending"&&(T.status="rejected",T.reason=Y)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function Se(T,Y,Z,X,F){var ue=typeof T;(ue==="undefined"||ue==="boolean")&&(T=null);var te=!1;if(T===null)te=!0;else switch(ue){case"bigint":case"string":case"number":te=!0;break;case"object":switch(T.$$typeof){case r:case a:te=!0;break;case v:return te=T._init,Se(te(T._payload),Y,Z,X,F)}}if(te)return F=F(T),te=X===""?"."+I(T,0):X,G(F)?(Z="",te!=null&&(Z=te.replace(ee,"$&/")+"/"),Se(F,Y,Z,"",function(ke){return ke})):F!=null&&(ge(F)&&(F=re(F,Z+(F.key==null||T&&T.key===F.key?"":(""+F.key).replace(ee,"$&/")+"/")+te)),Y.push(F)),1;te=0;var _e=X===""?".":X+":";if(G(T))for(var le=0;le<T.length;le++)X=T[le],ue=_e+I(X,le),te+=Se(X,Y,Z,ue,F);else if(le=x(T),typeof le=="function")for(T=le.call(T),le=0;!(X=T.next()).done;)X=X.value,ue=_e+I(X,le++),te+=Se(X,Y,Z,ue,F);else if(ue==="object"){if(typeof T.then=="function")return Se(ie(T),Y,Z,X,F);throw Y=String(T),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return te}function q(T,Y,Z){if(T==null)return T;var X=[],F=0;return Se(T,X,"","",function(ue){return Y.call(Z,ue,F++)}),X}function K(T){if(T._status===-1){var Y=T._result;Y=Y(),Y.then(function(Z){(T._status===0||T._status===-1)&&(T._status=1,T._result=Z)},function(Z){(T._status===0||T._status===-1)&&(T._status=2,T._result=Z)}),T._status===-1&&(T._status=0,T._result=Y)}if(T._status===1)return T._result.default;throw T._result}var ne=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function de(){}return he.Children={map:q,forEach:function(T,Y,Z){q(T,function(){Y.apply(this,arguments)},Z)},count:function(T){var Y=0;return q(T,function(){Y++}),Y},toArray:function(T){return q(T,function(Y){return Y})||[]},only:function(T){if(!ge(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},he.Component=z,he.Fragment=s,he.Profiler=o,he.PureComponent=M,he.StrictMode=l,he.Suspense=p,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,he.__COMPILER_RUNTIME={__proto__:null,c:function(T){return Q.H.useMemoCache(T)}},he.cache=function(T){return function(){return T.apply(null,arguments)}},he.cloneElement=function(T,Y,Z){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var X=S({},T.props),F=T.key,ue=void 0;if(Y!=null)for(te in Y.ref!==void 0&&(ue=void 0),Y.key!==void 0&&(F=""+Y.key),Y)!V.call(Y,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&Y.ref===void 0||(X[te]=Y[te]);var te=arguments.length-2;if(te===1)X.children=Z;else if(1<te){for(var _e=Array(te),le=0;le<te;le++)_e[le]=arguments[le+2];X.children=_e}return J(T.type,F,void 0,void 0,ue,X)},he.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:c,_context:T},T},he.createElement=function(T,Y,Z){var X,F={},ue=null;if(Y!=null)for(X in Y.key!==void 0&&(ue=""+Y.key),Y)V.call(Y,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(F[X]=Y[X]);var te=arguments.length-2;if(te===1)F.children=Z;else if(1<te){for(var _e=Array(te),le=0;le<te;le++)_e[le]=arguments[le+2];F.children=_e}if(T&&T.defaultProps)for(X in te=T.defaultProps,te)F[X]===void 0&&(F[X]=te[X]);return J(T,ue,void 0,void 0,null,F)},he.createRef=function(){return{current:null}},he.forwardRef=function(T){return{$$typeof:m,render:T}},he.isValidElement=ge,he.lazy=function(T){return{$$typeof:v,_payload:{_status:-1,_result:T},_init:K}},he.memo=function(T,Y){return{$$typeof:g,type:T,compare:Y===void 0?null:Y}},he.startTransition=function(T){var Y=Q.T,Z={};Q.T=Z;try{var X=T(),F=Q.S;F!==null&&F(Z,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(de,ne)}catch(ue){ne(ue)}finally{Q.T=Y}},he.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},he.use=function(T){return Q.H.use(T)},he.useActionState=function(T,Y,Z){return Q.H.useActionState(T,Y,Z)},he.useCallback=function(T,Y){return Q.H.useCallback(T,Y)},he.useContext=function(T){return Q.H.useContext(T)},he.useDebugValue=function(){},he.useDeferredValue=function(T,Y){return Q.H.useDeferredValue(T,Y)},he.useEffect=function(T,Y,Z){var X=Q.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(T,Y)},he.useId=function(){return Q.H.useId()},he.useImperativeHandle=function(T,Y,Z){return Q.H.useImperativeHandle(T,Y,Z)},he.useInsertionEffect=function(T,Y){return Q.H.useInsertionEffect(T,Y)},he.useLayoutEffect=function(T,Y){return Q.H.useLayoutEffect(T,Y)},he.useMemo=function(T,Y){return Q.H.useMemo(T,Y)},he.useOptimistic=function(T,Y){return Q.H.useOptimistic(T,Y)},he.useReducer=function(T,Y,Z){return Q.H.useReducer(T,Y,Z)},he.useRef=function(T){return Q.H.useRef(T)},he.useState=function(T){return Q.H.useState(T)},he.useSyncExternalStore=function(T,Y,Z){return Q.H.useSyncExternalStore(T,Y,Z)},he.useTransition=function(){return Q.H.useTransition()},he.version="19.1.1",he}var Lp;function Sd(){return Lp||(Lp=1,Cc.exports=Ub()),Cc.exports}var E=Sd();const Yt=_d(E);var Rc={exports:{}},as={},Dc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function Nb(){return Bp||(Bp=1,(function(r){function a(q,K){var ne=q.length;q.push(K);e:for(;0<ne;){var de=ne-1>>>1,T=q[de];if(0<o(T,K))q[de]=K,q[ne]=T,ne=de;else break e}}function s(q){return q.length===0?null:q[0]}function l(q){if(q.length===0)return null;var K=q[0],ne=q.pop();if(ne!==K){q[0]=ne;e:for(var de=0,T=q.length,Y=T>>>1;de<Y;){var Z=2*(de+1)-1,X=q[Z],F=Z+1,ue=q[F];if(0>o(X,ne))F<T&&0>o(ue,X)?(q[de]=ue,q[F]=ne,de=F):(q[de]=X,q[Z]=ne,de=Z);else if(F<T&&0>o(ue,ne))q[de]=ue,q[F]=ne,de=F;else break e}}return K}function o(q,K){var ne=q.sortIndex-K.sortIndex;return ne!==0?ne:q.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var p=[],g=[],v=1,b=null,x=3,_=!1,S=!1,k=!1,z=!1,B=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function G(q){for(var K=s(g);K!==null;){if(K.callback===null)l(g);else if(K.startTime<=q)l(g),K.sortIndex=K.expirationTime,a(p,K);else break;K=s(g)}}function Q(q){if(k=!1,G(q),!S)if(s(p)!==null)S=!0,V||(V=!0,I());else{var K=s(g);K!==null&&Se(Q,K.startTime-q)}}var V=!1,J=-1,re=5,ge=-1;function Ge(){return z?!0:!(r.unstable_now()-ge<re)}function ee(){if(z=!1,V){var q=r.unstable_now();ge=q;var K=!0;try{e:{S=!1,k&&(k=!1,M(J),J=-1),_=!0;var ne=x;try{t:{for(G(q),b=s(p);b!==null&&!(b.expirationTime>q&&Ge());){var de=b.callback;if(typeof de=="function"){b.callback=null,x=b.priorityLevel;var T=de(b.expirationTime<=q);if(q=r.unstable_now(),typeof T=="function"){b.callback=T,G(q),K=!0;break t}b===s(p)&&l(p),G(q)}else l(p);b=s(p)}if(b!==null)K=!0;else{var Y=s(g);Y!==null&&Se(Q,Y.startTime-q),K=!1}}break e}finally{b=null,x=ne,_=!1}K=void 0}}finally{K?I():V=!1}}}var I;if(typeof N=="function")I=function(){N(ee)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ie=me.port2;me.port1.onmessage=ee,I=function(){ie.postMessage(null)}}else I=function(){B(ee,0)};function Se(q,K){J=B(function(){q(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):re=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(q){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var ne=x;x=K;try{return q()}finally{x=ne}},r.unstable_requestPaint=function(){z=!0},r.unstable_runWithPriority=function(q,K){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ne=x;x=q;try{return K()}finally{x=ne}},r.unstable_scheduleCallback=function(q,K,ne){var de=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?de+ne:de):ne=de,q){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=ne+T,q={id:v++,callback:K,priorityLevel:q,startTime:ne,expirationTime:T,sortIndex:-1},ne>de?(q.sortIndex=ne,a(g,q),s(p)===null&&q===s(g)&&(k?(M(J),J=-1):k=!0,Se(Q,ne-de))):(q.sortIndex=T,a(p,q),S||_||(S=!0,V||(V=!0,I()))),q},r.unstable_shouldYield=Ge,r.unstable_wrapCallback=function(q){var K=x;return function(){var ne=x;x=K;try{return q.apply(this,arguments)}finally{x=ne}}}})(Mc)),Mc}var $p;function qb(){return $p||($p=1,Dc.exports=Nb()),Dc.exports}var Uc={exports:{}},St={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function Lb(){if(Hp)return St;Hp=1;var r=Sd();function a(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var l={d:{f:s,r:function(){throw Error(a(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,g,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:p,containerInfo:g,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,St.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return c(p,g,null,v)},St.flushSync=function(p){var g=h.T,v=l.p;try{if(h.T=null,l.p=2,p)return p()}finally{h.T=g,l.p=v,l.d.f()}},St.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(p,g))},St.prefetchDNS=function(p){typeof p=="string"&&l.d.D(p)},St.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,b=m(v,g.crossOrigin),x=typeof g.integrity=="string"?g.integrity:void 0,_=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?l.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:_}):v==="script"&&l.d.X(p,{crossOrigin:b,integrity:x,fetchPriority:_,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},St.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=m(g.as,g.crossOrigin);l.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(p)},St.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,b=m(v,g.crossOrigin);l.d.L(p,v,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},St.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=m(g.as,g.crossOrigin);l.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(p)},St.requestFormReset=function(p){l.d.r(p)},St.unstable_batchedUpdates=function(p,g){return p(g)},St.useFormState=function(p,g,v){return h.H.useFormState(p,g,v)},St.useFormStatus=function(){return h.H.useHostTransitionStatus()},St.version="19.1.1",St}var Gp;function Bb(){if(Gp)return Uc.exports;Gp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),Uc.exports=Lb(),Uc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function $b(){if(Yp)return as;Yp=1;var r=qb(),a=Sd(),s=Bb();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(l(188))}function p(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,i=t;;){var u=n.return;if(u===null)break;var d=u.alternate;if(d===null){if(i=u.return,i!==null){n=i;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===n)return m(u),e;if(d===i)return m(u),t;d=d.sibling}throw Error(l(188))}if(n.return!==i.return)n=u,i=d;else{for(var y=!1,w=u.child;w;){if(w===n){y=!0,n=u,i=d;break}if(w===i){y=!0,i=u,n=d;break}w=w.sibling}if(!y){for(w=d.child;w;){if(w===n){y=!0,n=d,i=u;break}if(w===i){y=!0,i=d,n=u;break}w=w.sibling}if(!y)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),N=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),Ge=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var me=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case z:return"Profiler";case k:return"StrictMode";case Q:return"Suspense";case V:return"SuspenseList";case ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case _:return"Portal";case N:return(e.displayName||"Context")+".Provider";case M:return(e._context.displayName||"Context")+".Consumer";case G:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case re:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var Se=Array.isArray,q=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},de=[],T=-1;function Y(e){return{current:e}}function Z(e){0>T||(e.current=de[T],de[T]=null,T--)}function X(e,t){T++,de[T]=e.current,e.current=t}var F=Y(null),ue=Y(null),te=Y(null),_e=Y(null);function le(e,t){switch(X(te,t),X(ue,e),X(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=cp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(F),X(F,e)}function ke(){Z(F),Z(ue),Z(te)}function bt(e){e.memoizedState!==null&&X(_e,e);var t=F.current,n=cp(t,e.type);t!==n&&(X(ue,e),X(F,n))}function lt(e){ue.current===e&&(Z(F),Z(ue)),_e.current===e&&(Z(_e),Ji._currentValue=ne)}var Ve=Object.prototype.hasOwnProperty,Ne=r.unstable_scheduleCallback,Ee=r.unstable_cancelCallback,wt=r.unstable_shouldYield,un=r.unstable_requestPaint,Rt=r.unstable_now,f0=r.unstable_getCurrentPriorityLevel,Gd=r.unstable_ImmediatePriority,Yd=r.unstable_UserBlockingPriority,xs=r.unstable_NormalPriority,h0=r.unstable_LowPriority,Pd=r.unstable_IdlePriority,m0=r.log,p0=r.unstable_setDisableYieldValue,ii=null,Dt=null;function $n(e){if(typeof m0=="function"&&p0(e),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(ii,e)}catch{}}var Mt=Math.clz32?Math.clz32:y0,g0=Math.log,v0=Math.LN2;function y0(e){return e>>>=0,e===0?32:31-(g0(e)/v0|0)|0}var _s=256,Ss=4194304;function va(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function js(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var u=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var w=i&134217727;return w!==0?(i=w&~d,i!==0?u=va(i):(y&=w,y!==0?u=va(y):n||(n=w&~e,n!==0&&(u=va(n))))):(w=i&~d,w!==0?u=va(w):y!==0?u=va(y):n||(n=i&~e,n!==0&&(u=va(n)))),u===0?0:t!==0&&t!==u&&(t&d)===0&&(d=u&-u,n=t&-t,d>=n||d===32&&(n&4194048)!==0)?t:u}function si(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function b0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(){var e=_s;return _s<<=1,(_s&4194048)===0&&(_s=256),e}function Vd(){var e=Ss;return Ss<<=1,(Ss&62914560)===0&&(Ss=4194304),e}function bo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function li(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function w0(e,t,n,i,u,d){var y=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var w=e.entanglements,j=e.expirationTimes,R=e.hiddenUpdates;for(n=y&~n;0<n;){var L=31-Mt(n),P=1<<L;w[L]=0,j[L]=-1;var D=R[L];if(D!==null)for(R[L]=null,L=0;L<D.length;L++){var U=D[L];U!==null&&(U.lane&=-536870913)}n&=~P}i!==0&&Xd(e,i,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~t))}function Xd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Mt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function Kd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Mt(n),u=1<<i;u&t|e[i]&t&&(e[i]|=t),n&=~u}}function wo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Id(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Op(e.type))}function x0(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var Hn=Math.random().toString(36).slice(2),xt="__reactFiber$"+Hn,At="__reactProps$"+Hn,Qa="__reactContainer$"+Hn,_o="__reactEvents$"+Hn,_0="__reactListeners$"+Hn,S0="__reactHandles$"+Hn,Zd="__reactResources$"+Hn,oi="__reactMarker$"+Hn;function So(e){delete e[xt],delete e[At],delete e[_o],delete e[_0],delete e[S0]}function Va(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qa]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mp(e);e!==null;){if(n=e[xt])return n;e=mp(e)}return t}e=n,n=e.parentNode}return null}function Xa(e){if(e=e[xt]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ui(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Ka(e){var t=e[Zd];return t||(t=e[Zd]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ot(e){e[oi]=!0}var Jd=new Set,Fd={};function ya(e,t){Ia(e,t),Ia(e+"Capture",t)}function Ia(e,t){for(Fd[e]=t,e=0;e<t.length;e++)Jd.add(t[e])}var j0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wd={},ef={};function E0(e){return Ve.call(ef,e)?!0:Ve.call(Wd,e)?!1:j0.test(e)?ef[e]=!0:(Wd[e]=!0,!1)}function Es(e,t,n){if(E0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ts(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var jo,tf;function Za(e){if(jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jo=t&&t[1]||"",tf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jo+e+tf}var Eo=!1;function To(e,t){if(!e||Eo)return"";Eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(U){var D=U}Reflect.construct(e,[],P)}else{try{P.call()}catch(U){D=U}e.call(P.prototype)}}else{try{throw Error()}catch(U){D=U}(P=e())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(U){if(U&&D&&typeof U.stack=="string")return[U.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=i.DetermineComponentFrameRoot(),y=d[0],w=d[1];if(y&&w){var j=y.split(`
`),R=w.split(`
`);for(u=i=0;i<j.length&&!j[i].includes("DetermineComponentFrameRoot");)i++;for(;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;if(i===j.length||u===R.length)for(i=j.length-1,u=R.length-1;1<=i&&0<=u&&j[i]!==R[u];)u--;for(;1<=i&&0<=u;i--,u--)if(j[i]!==R[u]){if(i!==1||u!==1)do if(i--,u--,0>u||j[i]!==R[u]){var L=`
`+j[i].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=i&&0<=u);break}}}finally{Eo=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Za(n):""}function T0(e){switch(e.tag){case 26:case 27:case 5:return Za(e.type);case 16:return Za("Lazy");case 13:return Za("Suspense");case 19:return Za("SuspenseList");case 0:case 15:return To(e.type,!1);case 11:return To(e.type.render,!1);case 1:return To(e.type,!0);case 31:return Za("Activity");default:return""}}function nf(e){try{var t="";do t+=T0(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function af(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function A0(e){var t=af(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var u=n.get,d=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(y){i=""+y,d.call(this,y)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(y){i=""+y},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function As(e){e._valueTracker||(e._valueTracker=A0(e))}function rf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=af(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ks(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var k0=/[\n"\\]/g;function Qt(e){return e.replace(k0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ao(e,t,n,i,u,d,y,w){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),t!=null?y==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Pt(t)):e.value!==""+Pt(t)&&(e.value=""+Pt(t)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),t!=null?ko(e,y,Pt(t)):n!=null?ko(e,y,Pt(n)):i!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Pt(w):e.removeAttribute("name")}function sf(e,t,n,i,u,d,y,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||t!=null))return;n=n!=null?""+Pt(n):"",t=t!=null?""+Pt(t):n,w||t===e.value||(e.value=t),e.defaultValue=t}i=i??u,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=w?e.checked:!!i,e.defaultChecked=!!i,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y)}function ko(e,t,n){t==="number"&&ks(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ja(e,t,n,i){if(e=e.options,t){t={};for(var u=0;u<n.length;u++)t["$"+n[u]]=!0;for(n=0;n<e.length;n++)u=t.hasOwnProperty("$"+e[n].value),e[n].selected!==u&&(e[n].selected=u),u&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Pt(n),t=null,u=0;u<e.length;u++){if(e[u].value===n){e[u].selected=!0,i&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function lf(e,t,n){if(t!=null&&(t=""+Pt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Pt(n):""}function of(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(l(92));if(Se(i)){if(1<i.length)throw Error(l(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Pt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function Fa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var O0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uf(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||O0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function cf(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var u in t)i=t[u],t.hasOwnProperty(u)&&n[u]!==i&&uf(e,u,i)}else for(var d in t)t.hasOwnProperty(d)&&uf(e,d,t[d])}function Oo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),C0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Os(e){return C0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var zo=null;function Co(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,er=null;function df(e){var t=Xa(e);if(t&&(e=t.stateNode)){var n=e[At]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ao(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Qt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var u=i[At]||null;if(!u)throw Error(l(90));Ao(i,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&rf(i)}break e;case"textarea":lf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ja(e,!!n.multiple,t,!1)}}}var Ro=!1;function ff(e,t,n){if(Ro)return e(t,n);Ro=!0;try{var i=e(t);return i}finally{if(Ro=!1,(Wa!==null||er!==null)&&(ml(),Wa&&(t=Wa,e=er,er=Wa=null,df(t),e)))for(t=0;t<e.length;t++)df(e[t])}}function ci(e,t){var n=e.stateNode;if(n===null)return null;var i=n[At]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Do=!1;if(xn)try{var di={};Object.defineProperty(di,"passive",{get:function(){Do=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{Do=!1}var Gn=null,Mo=null,zs=null;function hf(){if(zs)return zs;var e,t=Mo,n=t.length,i,u="value"in Gn?Gn.value:Gn.textContent,d=u.length;for(e=0;e<n&&t[e]===u[e];e++);var y=n-e;for(i=1;i<=y&&t[n-i]===u[d-i];i++);return zs=u.slice(e,1<i?1-i:void 0)}function Cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rs(){return!0}function mf(){return!1}function kt(e){function t(n,i,u,d,y){this._reactName=n,this._targetInst=u,this.type=i,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(n=e[w],this[w]=n?n(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Rs:mf,this.isPropagationStopped=mf,this}return v(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rs)},persist:function(){},isPersistent:Rs}),t}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ds=kt(ba),fi=v({},ba,{view:0,detail:0}),R0=kt(fi),Uo,No,hi,Ms=v({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hi&&(hi&&e.type==="mousemove"?(Uo=e.screenX-hi.screenX,No=e.screenY-hi.screenY):No=Uo=0,hi=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:No}}),pf=kt(Ms),D0=v({},Ms,{dataTransfer:0}),M0=kt(D0),U0=v({},fi,{relatedTarget:0}),qo=kt(U0),N0=v({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),q0=kt(N0),L0=v({},ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),B0=kt(L0),$0=v({},ba,{data:0}),gf=kt($0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Y0[e])?!!t[e]:!1}function Lo(){return P0}var Q0=v({},fi,{key:function(e){if(e.key){var t=H0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lo,charCode:function(e){return e.type==="keypress"?Cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),V0=kt(Q0),X0=v({},Ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=kt(X0),K0=v({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lo}),I0=kt(K0),Z0=v({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),J0=kt(Z0),F0=v({},Ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W0=kt(F0),ey=v({},ba,{newState:0,oldState:0}),ty=kt(ey),ny=[9,13,27,32],Bo=xn&&"CompositionEvent"in window,mi=null;xn&&"documentMode"in document&&(mi=document.documentMode);var ay=xn&&"TextEvent"in window&&!mi,yf=xn&&(!Bo||mi&&8<mi&&11>=mi),bf=" ",wf=!1;function xf(e,t){switch(e){case"keyup":return ny.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _f(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function ry(e,t){switch(e){case"compositionend":return _f(t);case"keypress":return t.which!==32?null:(wf=!0,bf);case"textInput":return e=t.data,e===bf&&wf?null:e;default:return null}}function iy(e,t){if(tr)return e==="compositionend"||!Bo&&xf(e,t)?(e=hf(),zs=Mo=Gn=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yf&&t.locale!=="ko"?null:t.data;default:return null}}var sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sy[e.type]:t==="textarea"}function jf(e,t,n,i){Wa?er?er.push(i):er=[i]:Wa=i,t=wl(t,"onChange"),0<t.length&&(n=new Ds("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var pi=null,gi=null;function ly(e){rp(e,0)}function Us(e){var t=ui(e);if(rf(t))return e}function Ef(e,t){if(e==="change")return t}var Tf=!1;if(xn){var $o;if(xn){var Ho="oninput"in document;if(!Ho){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),Ho=typeof Af.oninput=="function"}$o=Ho}else $o=!1;Tf=$o&&(!document.documentMode||9<document.documentMode)}function kf(){pi&&(pi.detachEvent("onpropertychange",Of),gi=pi=null)}function Of(e){if(e.propertyName==="value"&&Us(gi)){var t=[];jf(t,gi,e,Co(e)),ff(ly,t)}}function oy(e,t,n){e==="focusin"?(kf(),pi=t,gi=n,pi.attachEvent("onpropertychange",Of)):e==="focusout"&&kf()}function uy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Us(gi)}function cy(e,t){if(e==="click")return Us(t)}function dy(e,t){if(e==="input"||e==="change")return Us(t)}function fy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:fy;function vi(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var u=n[i];if(!Ve.call(t,u)||!Ut(e[u],t[u]))return!1}return!0}function zf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cf(e,t){var n=zf(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zf(n)}}function Rf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Df(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ks(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ks(e.document)}return t}function Go(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var hy=xn&&"documentMode"in document&&11>=document.documentMode,nr=null,Yo=null,yi=null,Po=!1;function Mf(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Po||nr==null||nr!==ks(i)||(i=nr,"selectionStart"in i&&Go(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),yi&&vi(yi,i)||(yi=i,i=wl(Yo,"onSelect"),0<i.length&&(t=new Ds("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=nr)))}function wa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ar={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionrun:wa("Transition","TransitionRun"),transitionstart:wa("Transition","TransitionStart"),transitioncancel:wa("Transition","TransitionCancel"),transitionend:wa("Transition","TransitionEnd")},Qo={},Uf={};xn&&(Uf=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function xa(e){if(Qo[e])return Qo[e];if(!ar[e])return e;var t=ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uf)return Qo[e]=t[n];return e}var Nf=xa("animationend"),qf=xa("animationiteration"),Lf=xa("animationstart"),my=xa("transitionrun"),py=xa("transitionstart"),gy=xa("transitioncancel"),Bf=xa("transitionend"),$f=new Map,Vo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vo.push("scrollEnd");function en(e,t){$f.set(e,t),ya(t,[e])}var Hf=new WeakMap;function Vt(e,t){if(typeof e=="object"&&e!==null){var n=Hf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:nf(t)},Hf.set(e,t),t)}return{value:e,source:t,stack:nf(t)}}var Xt=[],rr=0,Xo=0;function Ns(){for(var e=rr,t=Xo=rr=0;t<e;){var n=Xt[t];Xt[t++]=null;var i=Xt[t];Xt[t++]=null;var u=Xt[t];Xt[t++]=null;var d=Xt[t];if(Xt[t++]=null,i!==null&&u!==null){var y=i.pending;y===null?u.next=u:(u.next=y.next,y.next=u),i.pending=u}d!==0&&Gf(n,u,d)}}function qs(e,t,n,i){Xt[rr++]=e,Xt[rr++]=t,Xt[rr++]=n,Xt[rr++]=i,Xo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ko(e,t,n,i){return qs(e,t,n,i),Ls(e)}function ir(e,t){return qs(e,null,null,t),Ls(e)}function Gf(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var u=!1,d=e.return;d!==null;)d.childLanes|=n,i=d.alternate,i!==null&&(i.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&t!==null&&(u=31-Mt(n),e=d.hiddenUpdates,i=e[u],i===null?e[u]=[t]:i.push(t),t.lane=n|536870912),d):null}function Ls(e){if(50<Yi)throw Yi=0,ec=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sr={};function vy(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,t,n,i){return new vy(e,t,n,i)}function Io(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _n(e,t){var n=e.alternate;return n===null?(n=Nt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Yf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bs(e,t,n,i,u,d){var y=0;if(i=e,typeof e=="function")Io(e)&&(y=1);else if(typeof e=="string")y=bb(e,n,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ge:return e=Nt(31,n,t,u),e.elementType=ge,e.lanes=d,e;case S:return _a(n.children,u,d,t);case k:y=8,u|=24;break;case z:return e=Nt(12,n,t,u|2),e.elementType=z,e.lanes=d,e;case Q:return e=Nt(13,n,t,u),e.elementType=Q,e.lanes=d,e;case V:return e=Nt(19,n,t,u),e.elementType=V,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:case N:y=10;break e;case M:y=9;break e;case G:y=11;break e;case J:y=14;break e;case re:y=16,i=null;break e}y=29,n=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=Nt(y,n,t,u),t.elementType=e,t.type=i,t.lanes=d,t}function _a(e,t,n,i){return e=Nt(7,e,i,t),e.lanes=n,e}function Zo(e,t,n){return e=Nt(6,e,null,t),e.lanes=n,e}function Jo(e,t,n){return t=Nt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var lr=[],or=0,$s=null,Hs=0,Kt=[],It=0,Sa=null,Sn=1,jn="";function ja(e,t){lr[or++]=Hs,lr[or++]=$s,$s=e,Hs=t}function Pf(e,t,n){Kt[It++]=Sn,Kt[It++]=jn,Kt[It++]=Sa,Sa=e;var i=Sn;e=jn;var u=32-Mt(i)-1;i&=~(1<<u),n+=1;var d=32-Mt(t)+u;if(30<d){var y=u-u%5;d=(i&(1<<y)-1).toString(32),i>>=y,u-=y,Sn=1<<32-Mt(t)+u|n<<u|i,jn=d+e}else Sn=1<<d|n<<u|i,jn=e}function Fo(e){e.return!==null&&(ja(e,1),Pf(e,1,0))}function Wo(e){for(;e===$s;)$s=lr[--or],lr[or]=null,Hs=lr[--or],lr[or]=null;for(;e===Sa;)Sa=Kt[--It],Kt[It]=null,jn=Kt[--It],Kt[It]=null,Sn=Kt[--It],Kt[It]=null}var Et=null,Xe=null,Ae=!1,Ea=null,cn=!1,eu=Error(l(519));function Ta(e){var t=Error(l(418,""));throw xi(Vt(t,e)),eu}function Qf(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[xt]=e,t[At]=i,n){case"dialog":we("cancel",t),we("close",t);break;case"iframe":case"object":case"embed":we("load",t);break;case"video":case"audio":for(n=0;n<Qi.length;n++)we(Qi[n],t);break;case"source":we("error",t);break;case"img":case"image":case"link":we("error",t),we("load",t);break;case"details":we("toggle",t);break;case"input":we("invalid",t),sf(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),As(t);break;case"select":we("invalid",t);break;case"textarea":we("invalid",t),of(t,i.value,i.defaultValue,i.children),As(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||op(t.textContent,n)?(i.popover!=null&&(we("beforetoggle",t),we("toggle",t)),i.onScroll!=null&&we("scroll",t),i.onScrollEnd!=null&&we("scrollend",t),i.onClick!=null&&(t.onclick=xl),t=!0):t=!1,t||Ta(e)}function Vf(e){for(Et=e.return;Et;)switch(Et.tag){case 5:case 13:cn=!1;return;case 27:case 3:cn=!0;return;default:Et=Et.return}}function bi(e){if(e!==Et)return!1;if(!Ae)return Vf(e),Ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||gc(e.type,e.memoizedProps)),n=!n),n&&Xe&&Ta(e),Vf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Xe=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Xe=null}}else t===27?(t=Xe,ra(e.type)?(e=wc,wc=null,Xe=e):Xe=t):Xe=Et?nn(e.stateNode.nextSibling):null;return!0}function wi(){Xe=Et=null,Ae=!1}function Xf(){var e=Ea;return e!==null&&(Ct===null?Ct=e:Ct.push.apply(Ct,e),Ea=null),e}function xi(e){Ea===null?Ea=[e]:Ea.push(e)}var tu=Y(null),Aa=null,En=null;function Yn(e,t,n){X(tu,t._currentValue),t._currentValue=n}function Tn(e){e._currentValue=tu.current,Z(tu)}function nu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function au(e,t,n,i){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var j=0;j<t.length;j++)if(w.context===t[j]){d.lanes|=n,w=d.alternate,w!==null&&(w.lanes|=n),nu(d.return,n,e),i||(y=null);break e}d=w.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(l(341));y.lanes|=n,d=y.alternate,d!==null&&(d.lanes|=n),nu(y,n,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function _i(e,t,n,i){e=null;for(var u=t,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(l(387));if(y=y.memoizedProps,y!==null){var w=u.type;Ut(u.pendingProps.value,y.value)||(e!==null?e.push(w):e=[w])}}else if(u===_e.current){if(y=u.alternate,y===null)throw Error(l(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ji):e=[Ji])}u=u.return}e!==null&&au(t,e,n,i),t.flags|=262144}function Gs(e){for(e=e.firstContext;e!==null;){if(!Ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ka(e){Aa=e,En=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _t(e){return Kf(Aa,e)}function Ys(e,t){return Aa===null&&ka(e),Kf(e,t)}function Kf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},En===null){if(e===null)throw Error(l(308));En=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else En=En.next=t;return n}var yy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},by=r.unstable_scheduleCallback,wy=r.unstable_NormalPriority,tt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ru(){return{controller:new yy,data:new Map,refCount:0}}function Si(e){e.refCount--,e.refCount===0&&by(wy,function(){e.controller.abort()})}var ji=null,iu=0,ur=0,cr=null;function xy(e,t){if(ji===null){var n=ji=[];iu=0,ur=lc(),cr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return iu++,t.then(If,If),t}function If(){if(--iu===0&&ji!==null){cr!==null&&(cr.status="fulfilled");var e=ji;ji=null,ur=0,cr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _y(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(u){n.push(u)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var u=0;u<n.length;u++)(0,n[u])(t)},function(u){for(i.status="rejected",i.reason=u,u=0;u<n.length;u++)(0,n[u])(void 0)}),i}var Zf=q.S;q.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&xy(e,t),Zf!==null&&Zf(e,t)};var Oa=Y(null);function su(){var e=Oa.current;return e!==null?e:Le.pooledCache}function Ps(e,t){t===null?X(Oa,Oa.current):X(Oa,t.pool)}function Jf(){var e=su();return e===null?null:{parent:tt._currentValue,pool:e}}var Ei=Error(l(460)),Ff=Error(l(474)),Qs=Error(l(542)),lu={then:function(){}};function Wf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vs(){}function eh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Vs,Vs),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nh(e),e;default:if(typeof t.status=="string")t.then(Vs,Vs);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=i}},function(i){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nh(e),e}throw Ti=t,Ei}}var Ti=null;function th(){if(Ti===null)throw Error(l(459));var e=Ti;return Ti=null,e}function nh(e){if(e===Ei||e===Qs)throw Error(l(483))}var Pn=!1;function ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ze&2)!==0){var u=i.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),i.pending=t,t=Ls(e),Gf(e,null,n),t}return qs(e,i,t,n),Ls(e)}function Ai(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Kd(e,n)}}function cu(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var u=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var y={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,n=n.next}while(n!==null);d===null?u=d=t:d=d.next=t}else u=d=t;n={baseState:i.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var du=!1;function ki(){if(du){var e=cr;if(e!==null)throw e}}function Oi(e,t,n,i){du=!1;var u=e.updateQueue;Pn=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var j=w,R=j.next;j.next=null,y===null?d=R:y.next=R,y=j;var L=e.alternate;L!==null&&(L=L.updateQueue,w=L.lastBaseUpdate,w!==y&&(w===null?L.firstBaseUpdate=R:w.next=R,L.lastBaseUpdate=j))}if(d!==null){var P=u.baseState;y=0,L=R=j=null,w=d;do{var D=w.lane&-536870913,U=D!==w.lane;if(U?(je&D)===D:(i&D)===D){D!==0&&D===ur&&(du=!0),L!==null&&(L=L.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ce=e,se=w;D=t;var Me=n;switch(se.tag){case 1:if(ce=se.payload,typeof ce=="function"){P=ce.call(Me,P,D);break e}P=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=se.payload,D=typeof ce=="function"?ce.call(Me,P,D):ce,D==null)break e;P=v({},P,D);break e;case 2:Pn=!0}}D=w.callback,D!==null&&(e.flags|=64,U&&(e.flags|=8192),U=u.callbacks,U===null?u.callbacks=[D]:U.push(D))}else U={lane:D,tag:w.tag,payload:w.payload,callback:w.callback,next:null},L===null?(R=L=U,j=P):L=L.next=U,y|=D;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;U=w,w=U.next,U.next=null,u.lastBaseUpdate=U,u.shared.pending=null}}while(!0);L===null&&(j=P),u.baseState=j,u.firstBaseUpdate=R,u.lastBaseUpdate=L,d===null&&(u.shared.lanes=0),ea|=y,e.lanes=y,e.memoizedState=P}}function ah(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function rh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ah(n[e],t)}var dr=Y(null),Xs=Y(0);function ih(e,t){e=Dn,X(Xs,e),X(dr,t),Dn=e|t.baseLanes}function fu(){X(Xs,Dn),X(dr,dr.current)}function hu(){Dn=Xs.current,Z(dr),Z(Xs)}var Xn=0,ve=null,Re=null,Fe=null,Ks=!1,fr=!1,za=!1,Is=0,zi=0,hr=null,Sy=0;function Ze(){throw Error(l(321))}function mu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function pu(e,t,n,i,u,d){return Xn=d,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,q.H=e===null||e.memoizedState===null?Gh:Yh,za=!1,d=n(i,u),za=!1,fr&&(d=lh(t,n,i,u)),sh(e),d}function sh(e){q.H=tl;var t=Re!==null&&Re.next!==null;if(Xn=0,Fe=Re=ve=null,Ks=!1,zi=0,hr=null,t)throw Error(l(300));e===null||ut||(e=e.dependencies,e!==null&&Gs(e)&&(ut=!0))}function lh(e,t,n,i){ve=e;var u=0;do{if(fr&&(hr=null),zi=0,fr=!1,25<=u)throw Error(l(301));if(u+=1,Fe=Re=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}q.H=zy,d=t(n,i)}while(fr);return d}function jy(){var e=q.H,t=e.useState()[0];return t=typeof t.then=="function"?Ci(t):t,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(ve.flags|=1024),t}function gu(){var e=Is!==0;return Is=0,e}function vu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function yu(e){if(Ks){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ks=!1}Xn=0,Fe=Re=ve=null,fr=!1,zi=Is=0,hr=null}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?ve.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function We(){if(Re===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var t=Fe===null?ve.memoizedState:Fe.next;if(t!==null)Fe=t,Re=e;else{if(e===null)throw ve.alternate===null?Error(l(467)):Error(l(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Fe===null?ve.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ci(e){var t=zi;return zi+=1,hr===null&&(hr=[]),e=eh(hr,e,t),t=ve,(Fe===null?t.memoizedState:Fe.next)===null&&(t=t.alternate,q.H=t===null||t.memoizedState===null?Gh:Yh),e}function Zs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ci(e);if(e.$$typeof===N)return _t(e)}throw Error(l(438,String(e)))}function wu(e){var t=null,n=ve.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ve.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=bu(),ve.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Ge;return t.index++,n}function An(e,t){return typeof t=="function"?t(e):t}function Js(e){var t=We();return xu(t,Re,e)}function xu(e,t,n){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=n;var u=e.baseQueue,d=i.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}t.baseQueue=u=d,i.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{t=u.next;var w=y=null,j=null,R=t,L=!1;do{var P=R.lane&-536870913;if(P!==R.lane?(je&P)===P:(Xn&P)===P){var D=R.revertLane;if(D===0)j!==null&&(j=j.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),P===ur&&(L=!0);else if((Xn&D)===D){R=R.next,D===ur&&(L=!0);continue}else P={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},j===null?(w=j=P,y=d):j=j.next=P,ve.lanes|=D,ea|=D;P=R.action,za&&n(d,P),d=R.hasEagerState?R.eagerState:n(d,P)}else D={lane:P,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},j===null?(w=j=D,y=d):j=j.next=D,ve.lanes|=P,ea|=P;R=R.next}while(R!==null&&R!==t);if(j===null?y=d:j.next=w,!Ut(d,e.memoizedState)&&(ut=!0,L&&(n=cr,n!==null)))throw n;e.memoizedState=d,e.baseState=y,e.baseQueue=j,i.lastRenderedState=d}return u===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function _u(e){var t=We(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,u=n.pending,d=t.memoizedState;if(u!==null){n.pending=null;var y=u=u.next;do d=e(d,y.action),y=y.next;while(y!==u);Ut(d,t.memoizedState)||(ut=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,i]}function oh(e,t,n){var i=ve,u=We(),d=Ae;if(d){if(n===void 0)throw Error(l(407));n=n()}else n=t();var y=!Ut((Re||u).memoizedState,n);y&&(u.memoizedState=n,ut=!0),u=u.queue;var w=dh.bind(null,i,u,e);if(Ri(2048,8,w,[e]),u.getSnapshot!==t||y||Fe!==null&&Fe.memoizedState.tag&1){if(i.flags|=2048,mr(9,Fs(),ch.bind(null,i,u,n,t),null),Le===null)throw Error(l(349));d||(Xn&124)!==0||uh(i,t,n)}return n}function uh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t=bu(),ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ch(e,t,n,i){t.value=n,t.getSnapshot=i,fh(t)&&hh(e)}function dh(e,t,n){return n(function(){fh(t)&&hh(e)})}function fh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function hh(e){var t=ir(e,2);t!==null&&Ht(t,e,2)}function Su(e){var t=Ot();if(typeof e=="function"){var n=e;if(e=n(),za){$n(!0);try{n()}finally{$n(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function mh(e,t,n,i){return e.baseState=n,xu(e,Re,typeof i=="function"?i:An)}function Ey(e,t,n,i,u){if(el(e))throw Error(l(485));if(e=t.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};q.T!==null?n(!0):d.isTransition=!1,i(d),n=t.pending,n===null?(d.next=t.pending=d,ph(t,d)):(d.next=n.next,t.pending=n.next=d)}}function ph(e,t){var n=t.action,i=t.payload,u=e.state;if(t.isTransition){var d=q.T,y={};q.T=y;try{var w=n(u,i),j=q.S;j!==null&&j(y,w),gh(e,t,w)}catch(R){ju(e,t,R)}finally{q.T=d}}else try{d=n(u,i),gh(e,t,d)}catch(R){ju(e,t,R)}}function gh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){vh(e,t,i)},function(i){return ju(e,t,i)}):vh(e,t,n)}function vh(e,t,n){t.status="fulfilled",t.value=n,yh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ph(e,n)))}function ju(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,yh(t),t=t.next;while(t!==i)}e.action=null}function yh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function bh(e,t){return t}function wh(e,t){if(Ae){var n=Le.formState;if(n!==null){e:{var i=ve;if(Ae){if(Xe){t:{for(var u=Xe,d=cn;u.nodeType!==8;){if(!d){u=null;break t}if(u=nn(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Xe=nn(u.nextSibling),i=u.data==="F!";break e}}Ta(i)}i=!1}i&&(t=n[0])}}return n=Ot(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bh,lastRenderedState:t},n.queue=i,n=Bh.bind(null,ve,i),i.dispatch=n,i=Su(!1),d=Ou.bind(null,ve,!1,i.queue),i=Ot(),u={state:t,dispatch:null,action:e,pending:null},i.queue=u,n=Ey.bind(null,ve,u,d,n),u.dispatch=n,i.memoizedState=e,[t,n,!1]}function xh(e){var t=We();return _h(t,Re,e)}function _h(e,t,n){if(t=xu(e,t,bh)[0],e=Js(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Ci(t)}catch(y){throw y===Ei?Qs:y}else i=t;t=We();var u=t.queue,d=u.dispatch;return n!==t.memoizedState&&(ve.flags|=2048,mr(9,Fs(),Ty.bind(null,u,n),null)),[i,d,e]}function Ty(e,t){e.action=t}function Sh(e){var t=We(),n=Re;if(n!==null)return _h(t,n,e);We(),t=t.memoizedState,n=We();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function mr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ve.updateQueue,t===null&&(t=bu(),ve.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Fs(){return{destroy:void 0,resource:void 0}}function jh(){return We().memoizedState}function Ws(e,t,n,i){var u=Ot();i=i===void 0?null:i,ve.flags|=e,u.memoizedState=mr(1|t,Fs(),n,i)}function Ri(e,t,n,i){var u=We();i=i===void 0?null:i;var d=u.memoizedState.inst;Re!==null&&i!==null&&mu(i,Re.memoizedState.deps)?u.memoizedState=mr(t,d,n,i):(ve.flags|=e,u.memoizedState=mr(1|t,d,n,i))}function Eh(e,t){Ws(8390656,8,e,t)}function Th(e,t){Ri(2048,8,e,t)}function Ah(e,t){return Ri(4,2,e,t)}function kh(e,t){return Ri(4,4,e,t)}function Oh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zh(e,t,n){n=n!=null?n.concat([e]):null,Ri(4,4,Oh.bind(null,t,e),n)}function Eu(){}function Ch(e,t){var n=We();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&mu(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Rh(e,t){var n=We();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&mu(t,i[1]))return i[0];if(i=e(),za){$n(!0);try{e()}finally{$n(!1)}}return n.memoizedState=[i,t],i}function Tu(e,t,n){return n===void 0||(Xn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Um(),ve.lanes|=e,ea|=e,n)}function Dh(e,t,n,i){return Ut(n,t)?n:dr.current!==null?(e=Tu(e,n,i),Ut(e,t)||(ut=!0),e):(Xn&42)===0?(ut=!0,e.memoizedState=n):(e=Um(),ve.lanes|=e,ea|=e,t)}function Mh(e,t,n,i,u){var d=K.p;K.p=d!==0&&8>d?d:8;var y=q.T,w={};q.T=w,Ou(e,!1,t,n);try{var j=u(),R=q.S;if(R!==null&&R(w,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var L=_y(j,i);Di(e,t,L,$t(e))}else Di(e,t,i,$t(e))}catch(P){Di(e,t,{then:function(){},status:"rejected",reason:P},$t())}finally{K.p=d,q.T=y}}function Ay(){}function Au(e,t,n,i){if(e.tag!==5)throw Error(l(476));var u=Uh(e).queue;Mh(e,u,t,ne,n===null?Ay:function(){return Nh(e),n(i)})}function Uh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nh(e){var t=Uh(e).next.queue;Di(e,t,{},$t())}function ku(){return _t(Ji)}function qh(){return We().memoizedState}function Lh(){return We().memoizedState}function ky(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=$t();e=Qn(n);var i=Vn(t,e,n);i!==null&&(Ht(i,t,n),Ai(i,t,n)),t={cache:ru()},e.payload=t;return}t=t.return}}function Oy(e,t,n){var i=$t();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},el(e)?$h(t,n):(n=Ko(e,t,n,i),n!==null&&(Ht(n,e,i),Hh(n,t,i)))}function Bh(e,t,n){var i=$t();Di(e,t,n,i)}function Di(e,t,n,i){var u={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(el(e))$h(t,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var y=t.lastRenderedState,w=d(y,n);if(u.hasEagerState=!0,u.eagerState=w,Ut(w,y))return qs(e,t,u,0),Le===null&&Ns(),!1}catch{}finally{}if(n=Ko(e,t,u,i),n!==null)return Ht(n,e,i),Hh(n,t,i),!0}return!1}function Ou(e,t,n,i){if(i={lane:2,revertLane:lc(),action:i,hasEagerState:!1,eagerState:null,next:null},el(e)){if(t)throw Error(l(479))}else t=Ko(e,n,i,2),t!==null&&Ht(t,e,2)}function el(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function $h(e,t){fr=Ks=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hh(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Kd(e,n)}}var tl={readContext:_t,use:Zs,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze},Gh={readContext:_t,use:Zs,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:Eh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ws(4194308,4,Oh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ws(4194308,4,e,t)},useInsertionEffect:function(e,t){Ws(4,2,e,t)},useMemo:function(e,t){var n=Ot();t=t===void 0?null:t;var i=e();if(za){$n(!0);try{e()}finally{$n(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Ot();if(n!==void 0){var u=n(t);if(za){$n(!0);try{n(t)}finally{$n(!1)}}}else u=t;return i.memoizedState=i.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},i.queue=e,e=e.dispatch=Oy.bind(null,ve,e),[i.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:function(e){e=Su(e);var t=e.queue,n=Bh.bind(null,ve,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Eu,useDeferredValue:function(e,t){var n=Ot();return Tu(n,e,t)},useTransition:function(){var e=Su(!1);return e=Mh.bind(null,ve,e.queue,!0,!1),Ot().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ve,u=Ot();if(Ae){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Le===null)throw Error(l(349));(je&124)!==0||uh(i,t,n)}u.memoizedState=n;var d={value:n,getSnapshot:t};return u.queue=d,Eh(dh.bind(null,i,d,e),[e]),i.flags|=2048,mr(9,Fs(),ch.bind(null,i,d,n,t),null),n},useId:function(){var e=Ot(),t=Le.identifierPrefix;if(Ae){var n=jn,i=Sn;n=(i&~(1<<32-Mt(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=Is++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Sy++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:ku,useFormState:wh,useActionState:wh,useOptimistic:function(e){var t=Ot();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ou.bind(null,ve,!0,n),n.dispatch=t,[e,t]},useMemoCache:wu,useCacheRefresh:function(){return Ot().memoizedState=ky.bind(null,ve)}},Yh={readContext:_t,use:Zs,useCallback:Ch,useContext:_t,useEffect:Th,useImperativeHandle:zh,useInsertionEffect:Ah,useLayoutEffect:kh,useMemo:Rh,useReducer:Js,useRef:jh,useState:function(){return Js(An)},useDebugValue:Eu,useDeferredValue:function(e,t){var n=We();return Dh(n,Re.memoizedState,e,t)},useTransition:function(){var e=Js(An)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Ci(e),t]},useSyncExternalStore:oh,useId:qh,useHostTransitionStatus:ku,useFormState:xh,useActionState:xh,useOptimistic:function(e,t){var n=We();return mh(n,Re,e,t)},useMemoCache:wu,useCacheRefresh:Lh},zy={readContext:_t,use:Zs,useCallback:Ch,useContext:_t,useEffect:Th,useImperativeHandle:zh,useInsertionEffect:Ah,useLayoutEffect:kh,useMemo:Rh,useReducer:_u,useRef:jh,useState:function(){return _u(An)},useDebugValue:Eu,useDeferredValue:function(e,t){var n=We();return Re===null?Tu(n,e,t):Dh(n,Re.memoizedState,e,t)},useTransition:function(){var e=_u(An)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Ci(e),t]},useSyncExternalStore:oh,useId:qh,useHostTransitionStatus:ku,useFormState:Sh,useActionState:Sh,useOptimistic:function(e,t){var n=We();return Re!==null?mh(n,Re,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:wu,useCacheRefresh:Lh},pr=null,Mi=0;function nl(e){var t=Mi;return Mi+=1,pr===null&&(pr=[]),eh(pr,e,t)}function Ui(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function al(e,t){throw t.$$typeof===b?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ph(e){var t=e._init;return t(e._payload)}function Qh(e){function t(O,A){if(e){var C=O.deletions;C===null?(O.deletions=[A],O.flags|=16):C.push(A)}}function n(O,A){if(!e)return null;for(;A!==null;)t(O,A),A=A.sibling;return null}function i(O){for(var A=new Map;O!==null;)O.key!==null?A.set(O.key,O):A.set(O.index,O),O=O.sibling;return A}function u(O,A){return O=_n(O,A),O.index=0,O.sibling=null,O}function d(O,A,C){return O.index=C,e?(C=O.alternate,C!==null?(C=C.index,C<A?(O.flags|=67108866,A):C):(O.flags|=67108866,A)):(O.flags|=1048576,A)}function y(O){return e&&O.alternate===null&&(O.flags|=67108866),O}function w(O,A,C,$){return A===null||A.tag!==6?(A=Zo(C,O.mode,$),A.return=O,A):(A=u(A,C),A.return=O,A)}function j(O,A,C,$){var W=C.type;return W===S?L(O,A,C.props.children,$,C.key):A!==null&&(A.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===re&&Ph(W)===A.type)?(A=u(A,C.props),Ui(A,C),A.return=O,A):(A=Bs(C.type,C.key,C.props,null,O.mode,$),Ui(A,C),A.return=O,A)}function R(O,A,C,$){return A===null||A.tag!==4||A.stateNode.containerInfo!==C.containerInfo||A.stateNode.implementation!==C.implementation?(A=Jo(C,O.mode,$),A.return=O,A):(A=u(A,C.children||[]),A.return=O,A)}function L(O,A,C,$,W){return A===null||A.tag!==7?(A=_a(C,O.mode,$,W),A.return=O,A):(A=u(A,C),A.return=O,A)}function P(O,A,C){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Zo(""+A,O.mode,C),A.return=O,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case x:return C=Bs(A.type,A.key,A.props,null,O.mode,C),Ui(C,A),C.return=O,C;case _:return A=Jo(A,O.mode,C),A.return=O,A;case re:var $=A._init;return A=$(A._payload),P(O,A,C)}if(Se(A)||I(A))return A=_a(A,O.mode,C,null),A.return=O,A;if(typeof A.then=="function")return P(O,nl(A),C);if(A.$$typeof===N)return P(O,Ys(O,A),C);al(O,A)}return null}function D(O,A,C,$){var W=A!==null?A.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return W!==null?null:w(O,A,""+C,$);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case x:return C.key===W?j(O,A,C,$):null;case _:return C.key===W?R(O,A,C,$):null;case re:return W=C._init,C=W(C._payload),D(O,A,C,$)}if(Se(C)||I(C))return W!==null?null:L(O,A,C,$,null);if(typeof C.then=="function")return D(O,A,nl(C),$);if(C.$$typeof===N)return D(O,A,Ys(O,C),$);al(O,C)}return null}function U(O,A,C,$,W){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return O=O.get(C)||null,w(A,O,""+$,W);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return O=O.get($.key===null?C:$.key)||null,j(A,O,$,W);case _:return O=O.get($.key===null?C:$.key)||null,R(A,O,$,W);case re:var ye=$._init;return $=ye($._payload),U(O,A,C,$,W)}if(Se($)||I($))return O=O.get(C)||null,L(A,O,$,W,null);if(typeof $.then=="function")return U(O,A,C,nl($),W);if($.$$typeof===N)return U(O,A,C,Ys(A,$),W);al(A,$)}return null}function ce(O,A,C,$){for(var W=null,ye=null,ae=A,oe=A=0,dt=null;ae!==null&&oe<C.length;oe++){ae.index>oe?(dt=ae,ae=null):dt=ae.sibling;var Te=D(O,ae,C[oe],$);if(Te===null){ae===null&&(ae=dt);break}e&&ae&&Te.alternate===null&&t(O,ae),A=d(Te,A,oe),ye===null?W=Te:ye.sibling=Te,ye=Te,ae=dt}if(oe===C.length)return n(O,ae),Ae&&ja(O,oe),W;if(ae===null){for(;oe<C.length;oe++)ae=P(O,C[oe],$),ae!==null&&(A=d(ae,A,oe),ye===null?W=ae:ye.sibling=ae,ye=ae);return Ae&&ja(O,oe),W}for(ae=i(ae);oe<C.length;oe++)dt=U(ae,O,oe,C[oe],$),dt!==null&&(e&&dt.alternate!==null&&ae.delete(dt.key===null?oe:dt.key),A=d(dt,A,oe),ye===null?W=dt:ye.sibling=dt,ye=dt);return e&&ae.forEach(function(ua){return t(O,ua)}),Ae&&ja(O,oe),W}function se(O,A,C,$){if(C==null)throw Error(l(151));for(var W=null,ye=null,ae=A,oe=A=0,dt=null,Te=C.next();ae!==null&&!Te.done;oe++,Te=C.next()){ae.index>oe?(dt=ae,ae=null):dt=ae.sibling;var ua=D(O,ae,Te.value,$);if(ua===null){ae===null&&(ae=dt);break}e&&ae&&ua.alternate===null&&t(O,ae),A=d(ua,A,oe),ye===null?W=ua:ye.sibling=ua,ye=ua,ae=dt}if(Te.done)return n(O,ae),Ae&&ja(O,oe),W;if(ae===null){for(;!Te.done;oe++,Te=C.next())Te=P(O,Te.value,$),Te!==null&&(A=d(Te,A,oe),ye===null?W=Te:ye.sibling=Te,ye=Te);return Ae&&ja(O,oe),W}for(ae=i(ae);!Te.done;oe++,Te=C.next())Te=U(ae,O,oe,Te.value,$),Te!==null&&(e&&Te.alternate!==null&&ae.delete(Te.key===null?oe:Te.key),A=d(Te,A,oe),ye===null?W=Te:ye.sibling=Te,ye=Te);return e&&ae.forEach(function(Cb){return t(O,Cb)}),Ae&&ja(O,oe),W}function Me(O,A,C,$){if(typeof C=="object"&&C!==null&&C.type===S&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case x:e:{for(var W=C.key;A!==null;){if(A.key===W){if(W=C.type,W===S){if(A.tag===7){n(O,A.sibling),$=u(A,C.props.children),$.return=O,O=$;break e}}else if(A.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===re&&Ph(W)===A.type){n(O,A.sibling),$=u(A,C.props),Ui($,C),$.return=O,O=$;break e}n(O,A);break}else t(O,A);A=A.sibling}C.type===S?($=_a(C.props.children,O.mode,$,C.key),$.return=O,O=$):($=Bs(C.type,C.key,C.props,null,O.mode,$),Ui($,C),$.return=O,O=$)}return y(O);case _:e:{for(W=C.key;A!==null;){if(A.key===W)if(A.tag===4&&A.stateNode.containerInfo===C.containerInfo&&A.stateNode.implementation===C.implementation){n(O,A.sibling),$=u(A,C.children||[]),$.return=O,O=$;break e}else{n(O,A);break}else t(O,A);A=A.sibling}$=Jo(C,O.mode,$),$.return=O,O=$}return y(O);case re:return W=C._init,C=W(C._payload),Me(O,A,C,$)}if(Se(C))return ce(O,A,C,$);if(I(C)){if(W=I(C),typeof W!="function")throw Error(l(150));return C=W.call(C),se(O,A,C,$)}if(typeof C.then=="function")return Me(O,A,nl(C),$);if(C.$$typeof===N)return Me(O,A,Ys(O,C),$);al(O,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,A!==null&&A.tag===6?(n(O,A.sibling),$=u(A,C),$.return=O,O=$):(n(O,A),$=Zo(C,O.mode,$),$.return=O,O=$),y(O)):n(O,A)}return function(O,A,C,$){try{Mi=0;var W=Me(O,A,C,$);return pr=null,W}catch(ae){if(ae===Ei||ae===Qs)throw ae;var ye=Nt(29,ae,null,O.mode);return ye.lanes=$,ye.return=O,ye}finally{}}}var gr=Qh(!0),Vh=Qh(!1),Zt=Y(null),dn=null;function Kn(e){var t=e.alternate;X(nt,nt.current&1),X(Zt,e),dn===null&&(t===null||dr.current!==null||t.memoizedState!==null)&&(dn=e)}function Xh(e){if(e.tag===22){if(X(nt,nt.current),X(Zt,e),dn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(dn=e)}}else In()}function In(){X(nt,nt.current),X(Zt,Zt.current)}function kn(e){Z(Zt),dn===e&&(dn=null),Z(nt)}var nt=Y(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||bc(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function zu(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:v({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cu={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=$t(),u=Qn(i);u.payload=t,n!=null&&(u.callback=n),t=Vn(e,u,i),t!==null&&(Ht(t,e,i),Ai(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=$t(),u=Qn(i);u.tag=1,u.payload=t,n!=null&&(u.callback=n),t=Vn(e,u,i),t!==null&&(Ht(t,e,i),Ai(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$t(),i=Qn(n);i.tag=2,t!=null&&(i.callback=t),t=Vn(e,i,n),t!==null&&(Ht(t,e,n),Ai(t,e,n))}};function Kh(e,t,n,i,u,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,d,y):t.prototype&&t.prototype.isPureReactComponent?!vi(n,i)||!vi(u,d):!0}function Ih(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Cu.enqueueReplaceState(t,t.state,null)}function Ca(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=v({},n));for(var u in e)n[u]===void 0&&(n[u]=e[u])}return n}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zh(e){il(e)}function Jh(e){console.error(e)}function Fh(e){il(e)}function sl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Wh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ru(e,t,n){return n=Qn(n),n.tag=3,n.payload={element:null},n.callback=function(){sl(e,t)},n}function em(e){return e=Qn(e),e.tag=3,e}function tm(e,t,n,i){var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;e.payload=function(){return u(d)},e.callback=function(){Wh(t,n,i)}}var y=n.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Wh(t,n,i),typeof u!="function"&&(ta===null?ta=new Set([this]):ta.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})})}function Cy(e,t,n,i,u){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&_i(t,n,u,!0),n=Zt.current,n!==null){switch(n.tag){case 13:return dn===null?nc():n.alternate===null&&Ke===0&&(Ke=3),n.flags&=-257,n.flags|=65536,n.lanes=u,i===lu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),rc(e,i,u)),!1;case 22:return n.flags|=65536,i===lu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),rc(e,i,u)),!1}throw Error(l(435,n.tag))}return rc(e,i,u),nc(),!1}if(Ae)return t=Zt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,i!==eu&&(e=Error(l(422),{cause:i}),xi(Vt(e,n)))):(i!==eu&&(t=Error(l(423),{cause:i}),xi(Vt(t,n))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,i=Vt(i,n),u=Ru(e.stateNode,i,u),cu(e,u),Ke!==4&&(Ke=2)),!1;var d=Error(l(520),{cause:i});if(d=Vt(d,n),Gi===null?Gi=[d]:Gi.push(d),Ke!==4&&(Ke=2),t===null)return!0;i=Vt(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=u&-u,n.lanes|=e,e=Ru(n.stateNode,i,e),cu(n,e),!1;case 1:if(t=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ta===null||!ta.has(d))))return n.flags|=65536,u&=-u,n.lanes|=u,u=em(u),tm(u,e,n,i),cu(n,u),!1}n=n.return}while(n!==null);return!1}var nm=Error(l(461)),ut=!1;function gt(e,t,n,i){t.child=e===null?Vh(t,null,n,i):gr(t,e.child,n,i)}function am(e,t,n,i,u){n=n.render;var d=t.ref;if("ref"in i){var y={};for(var w in i)w!=="ref"&&(y[w]=i[w])}else y=i;return ka(t),i=pu(e,t,n,y,d,u),w=gu(),e!==null&&!ut?(vu(e,t,u),On(e,t,u)):(Ae&&w&&Fo(t),t.flags|=1,gt(e,t,i,u),t.child)}function rm(e,t,n,i,u){if(e===null){var d=n.type;return typeof d=="function"&&!Io(d)&&d.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=d,im(e,t,d,i,u)):(e=Bs(n.type,null,i,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!$u(e,u)){var y=d.memoizedProps;if(n=n.compare,n=n!==null?n:vi,n(y,i)&&e.ref===t.ref)return On(e,t,u)}return t.flags|=1,e=_n(d,i),e.ref=t.ref,e.return=t,t.child=e}function im(e,t,n,i,u){if(e!==null){var d=e.memoizedProps;if(vi(d,i)&&e.ref===t.ref)if(ut=!1,t.pendingProps=i=d,$u(e,u))(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,On(e,t,u)}return Du(e,t,n,i,u)}function sm(e,t,n){var i=t.pendingProps,u=i.children,d=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=d!==null?d.baseLanes|n:n,e!==null){for(u=t.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;t.childLanes=d&~i}else t.childLanes=0,t.child=null;return lm(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ps(t,d!==null?d.cachePool:null),d!==null?ih(t,d):fu(),Xh(t);else return t.lanes=t.childLanes=536870912,lm(e,t,d!==null?d.baseLanes|n:n,n)}else d!==null?(Ps(t,d.cachePool),ih(t,d),In(),t.memoizedState=null):(e!==null&&Ps(t,null),fu(),In());return gt(e,t,u,n),t.child}function lm(e,t,n,i){var u=su();return u=u===null?null:{parent:tt._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&Ps(t,null),fu(),Xh(t),e!==null&&_i(e,t,i,!0),null}function ll(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Du(e,t,n,i,u){return ka(t),n=pu(e,t,n,i,void 0,u),i=gu(),e!==null&&!ut?(vu(e,t,u),On(e,t,u)):(Ae&&i&&Fo(t),t.flags|=1,gt(e,t,n,u),t.child)}function om(e,t,n,i,u,d){return ka(t),t.updateQueue=null,n=lh(t,i,n,u),sh(e),i=gu(),e!==null&&!ut?(vu(e,t,d),On(e,t,d)):(Ae&&i&&Fo(t),t.flags|=1,gt(e,t,n,d),t.child)}function um(e,t,n,i,u){if(ka(t),t.stateNode===null){var d=sr,y=n.contextType;typeof y=="object"&&y!==null&&(d=_t(y)),d=new n(i,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Cu,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=i,d.state=t.memoizedState,d.refs={},ou(t),y=n.contextType,d.context=typeof y=="object"&&y!==null?_t(y):sr,d.state=t.memoizedState,y=n.getDerivedStateFromProps,typeof y=="function"&&(zu(t,n,y,i),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&Cu.enqueueReplaceState(d,d.state,null),Oi(t,i,d,u),ki(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){d=t.stateNode;var w=t.memoizedProps,j=Ca(n,w);d.props=j;var R=d.context,L=n.contextType;y=sr,typeof L=="object"&&L!==null&&(y=_t(L));var P=n.getDerivedStateFromProps;L=typeof P=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,L||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||R!==y)&&Ih(t,d,i,y),Pn=!1;var D=t.memoizedState;d.state=D,Oi(t,i,d,u),ki(),R=t.memoizedState,w||D!==R||Pn?(typeof P=="function"&&(zu(t,n,P,i),R=t.memoizedState),(j=Pn||Kh(t,n,j,i,D,R,y))?(L||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=R),d.props=i,d.state=R,d.context=y,i=j):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{d=t.stateNode,uu(e,t),y=t.memoizedProps,L=Ca(n,y),d.props=L,P=t.pendingProps,D=d.context,R=n.contextType,j=sr,typeof R=="object"&&R!==null&&(j=_t(R)),w=n.getDerivedStateFromProps,(R=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==P||D!==j)&&Ih(t,d,i,j),Pn=!1,D=t.memoizedState,d.state=D,Oi(t,i,d,u),ki();var U=t.memoizedState;y!==P||D!==U||Pn||e!==null&&e.dependencies!==null&&Gs(e.dependencies)?(typeof w=="function"&&(zu(t,n,w,i),U=t.memoizedState),(L=Pn||Kh(t,n,L,i,D,U,j)||e!==null&&e.dependencies!==null&&Gs(e.dependencies))?(R||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,U,j),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,U,j)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=U),d.props=i,d.state=U,d.context=j,i=L):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return d=i,ll(e,t),i=(t.flags&128)!==0,d||i?(d=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&i?(t.child=gr(t,e.child,null,u),t.child=gr(t,null,n,u)):gt(e,t,n,u),t.memoizedState=d.state,e=t.child):e=On(e,t,u),e}function cm(e,t,n,i){return wi(),t.flags|=256,gt(e,t,n,i),t.child}var Mu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uu(e){return{baseLanes:e,cachePool:Jf()}}function Nu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Jt),e}function dm(e,t,n){var i=t.pendingProps,u=!1,d=(t.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(nt.current&2)!==0),y&&(u=!0,t.flags&=-129),y=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ae){if(u?Kn(t):In(),Ae){var w=Xe,j;if(j=w){e:{for(j=w,w=cn;j.nodeType!==8;){if(!w){w=null;break e}if(j=nn(j.nextSibling),j===null){w=null;break e}}w=j}w!==null?(t.memoizedState={dehydrated:w,treeContext:Sa!==null?{id:Sn,overflow:jn}:null,retryLane:536870912,hydrationErrors:null},j=Nt(18,null,null,0),j.stateNode=w,j.return=t,t.child=j,Et=t,Xe=null,j=!0):j=!1}j||Ta(t)}if(w=t.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return bc(w)?t.lanes=32:t.lanes=536870912,null;kn(t)}return w=i.children,i=i.fallback,u?(In(),u=t.mode,w=ol({mode:"hidden",children:w},u),i=_a(i,u,n,null),w.return=t,i.return=t,w.sibling=i,t.child=w,u=t.child,u.memoizedState=Uu(n),u.childLanes=Nu(e,y,n),t.memoizedState=Mu,i):(Kn(t),qu(t,w))}if(j=e.memoizedState,j!==null&&(w=j.dehydrated,w!==null)){if(d)t.flags&256?(Kn(t),t.flags&=-257,t=Lu(e,t,n)):t.memoizedState!==null?(In(),t.child=e.child,t.flags|=128,t=null):(In(),u=i.fallback,w=t.mode,i=ol({mode:"visible",children:i.children},w),u=_a(u,w,n,null),u.flags|=2,i.return=t,u.return=t,i.sibling=u,t.child=i,gr(t,e.child,null,n),i=t.child,i.memoizedState=Uu(n),i.childLanes=Nu(e,y,n),t.memoizedState=Mu,t=u);else if(Kn(t),bc(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var R=y.dgst;y=R,i=Error(l(419)),i.stack="",i.digest=y,xi({value:i,source:null,stack:null}),t=Lu(e,t,n)}else if(ut||_i(e,t,n,!1),y=(n&e.childLanes)!==0,ut||y){if(y=Le,y!==null&&(i=n&-n,i=(i&42)!==0?1:wo(i),i=(i&(y.suspendedLanes|n))!==0?0:i,i!==0&&i!==j.retryLane))throw j.retryLane=i,ir(e,i),Ht(y,e,i),nm;w.data==="$?"||nc(),t=Lu(e,t,n)}else w.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=j.treeContext,Xe=nn(w.nextSibling),Et=t,Ae=!0,Ea=null,cn=!1,e!==null&&(Kt[It++]=Sn,Kt[It++]=jn,Kt[It++]=Sa,Sn=e.id,jn=e.overflow,Sa=t),t=qu(t,i.children),t.flags|=4096);return t}return u?(In(),u=i.fallback,w=t.mode,j=e.child,R=j.sibling,i=_n(j,{mode:"hidden",children:i.children}),i.subtreeFlags=j.subtreeFlags&65011712,R!==null?u=_n(R,u):(u=_a(u,w,n,null),u.flags|=2),u.return=t,i.return=t,i.sibling=u,t.child=i,i=u,u=t.child,w=e.child.memoizedState,w===null?w=Uu(n):(j=w.cachePool,j!==null?(R=tt._currentValue,j=j.parent!==R?{parent:R,pool:R}:j):j=Jf(),w={baseLanes:w.baseLanes|n,cachePool:j}),u.memoizedState=w,u.childLanes=Nu(e,y,n),t.memoizedState=Mu,i):(Kn(t),n=e.child,e=n.sibling,n=_n(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(y=t.deletions,y===null?(t.deletions=[e],t.flags|=16):y.push(e)),t.child=n,t.memoizedState=null,n)}function qu(e,t){return t=ol({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ol(e,t){return e=Nt(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Lu(e,t,n){return gr(t,e.child,null,n),e=qu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fm(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),nu(e.return,t,n)}function Bu(e,t,n,i,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=n,d.tailMode=u)}function hm(e,t,n){var i=t.pendingProps,u=i.revealOrder,d=i.tail;if(gt(e,t,i.children,n),i=nt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fm(e,n,t);else if(e.tag===19)fm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(X(nt,i),u){case"forwards":for(n=t.child,u=null;n!==null;)e=n.alternate,e!==null&&rl(e)===null&&(u=n),n=n.sibling;n=u,n===null?(u=t.child,t.child=null):(u=n.sibling,n.sibling=null),Bu(t,!1,u,n,d);break;case"backwards":for(n=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&rl(e)===null){t.child=u;break}e=u.sibling,u.sibling=n,n=u,u=e}Bu(t,!0,n,null,d);break;case"together":Bu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function On(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(_i(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $u(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Gs(e)))}function Ry(e,t,n){switch(t.tag){case 3:le(t,t.stateNode.containerInfo),Yn(t,tt,e.memoizedState.cache),wi();break;case 27:case 5:bt(t);break;case 4:le(t,t.stateNode.containerInfo);break;case 10:Yn(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Kn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?dm(e,t,n):(Kn(t),e=On(e,t,n),e!==null?e.sibling:null);Kn(t);break;case 19:var u=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(_i(e,t,n,!1),i=(n&t.childLanes)!==0),u){if(i)return hm(e,t,n);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),X(nt,nt.current),i)break;return null;case 22:case 23:return t.lanes=0,sm(e,t,n);case 24:Yn(t,tt,e.memoizedState.cache)}return On(e,t,n)}function mm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ut=!0;else{if(!$u(e,n)&&(t.flags&128)===0)return ut=!1,Ry(e,t,n);ut=(e.flags&131072)!==0}else ut=!1,Ae&&(t.flags&1048576)!==0&&Pf(t,Hs,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,u=i._init;if(i=u(i._payload),t.type=i,typeof i=="function")Io(i)?(e=Ca(i,e),t.tag=1,t=um(null,t,i,e,n)):(t.tag=0,t=Du(null,t,i,e,n));else{if(i!=null){if(u=i.$$typeof,u===G){t.tag=11,t=am(null,t,i,e,n);break e}else if(u===J){t.tag=14,t=rm(null,t,i,e,n);break e}}throw t=ie(i)||i,Error(l(306,t,""))}}return t;case 0:return Du(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,u=Ca(i,t.pendingProps),um(e,t,i,u,n);case 3:e:{if(le(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var d=t.memoizedState;u=d.element,uu(e,t),Oi(t,i,null,n);var y=t.memoizedState;if(i=y.cache,Yn(t,tt,i),i!==d.cache&&au(t,[tt],n,!0),ki(),i=y.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:y.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=cm(e,t,i,n);break e}else if(i!==u){u=Vt(Error(l(424)),t),xi(u),t=cm(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xe=nn(e.firstChild),Et=t,Ae=!0,Ea=null,cn=!0,n=Vh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(wi(),i===u){t=On(e,t,n);break e}gt(e,t,i,n)}t=t.child}return t;case 26:return ll(e,t),e===null?(n=yp(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ae||(n=t.type,e=t.pendingProps,i=_l(te.current).createElement(n),i[xt]=t,i[At]=e,yt(i,n,e),ot(i),t.stateNode=i):t.memoizedState=yp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return bt(t),e===null&&Ae&&(i=t.stateNode=pp(t.type,t.pendingProps,te.current),Et=t,cn=!0,u=Xe,ra(t.type)?(wc=u,Xe=nn(i.firstChild)):Xe=u),gt(e,t,t.pendingProps.children,n),ll(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ae&&((u=i=Xe)&&(i=sb(i,t.type,t.pendingProps,cn),i!==null?(t.stateNode=i,Et=t,Xe=nn(i.firstChild),cn=!1,u=!0):u=!1),u||Ta(t)),bt(t),u=t.type,d=t.pendingProps,y=e!==null?e.memoizedProps:null,i=d.children,gc(u,d)?i=null:y!==null&&gc(u,y)&&(t.flags|=32),t.memoizedState!==null&&(u=pu(e,t,jy,null,null,n),Ji._currentValue=u),ll(e,t),gt(e,t,i,n),t.child;case 6:return e===null&&Ae&&((e=n=Xe)&&(n=lb(n,t.pendingProps,cn),n!==null?(t.stateNode=n,Et=t,Xe=null,e=!0):e=!1),e||Ta(t)),null;case 13:return dm(e,t,n);case 4:return le(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=gr(t,null,i,n):gt(e,t,i,n),t.child;case 11:return am(e,t,t.type,t.pendingProps,n);case 7:return gt(e,t,t.pendingProps,n),t.child;case 8:return gt(e,t,t.pendingProps.children,n),t.child;case 12:return gt(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Yn(t,t.type,i.value),gt(e,t,i.children,n),t.child;case 9:return u=t.type._context,i=t.pendingProps.children,ka(t),u=_t(u),i=i(u),t.flags|=1,gt(e,t,i,n),t.child;case 14:return rm(e,t,t.type,t.pendingProps,n);case 15:return im(e,t,t.type,t.pendingProps,n);case 19:return hm(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=ol(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=_n(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return sm(e,t,n);case 24:return ka(t),i=_t(tt),e===null?(u=su(),u===null&&(u=Le,d=ru(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=n),u=d),t.memoizedState={parent:i,cache:u},ou(t),Yn(t,tt,u)):((e.lanes&n)!==0&&(uu(e,t),Oi(t,null,null,n),ki()),u=e.memoizedState,d=t.memoizedState,u.parent!==i?(u={parent:i,cache:i},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),Yn(t,tt,i)):(i=d.cache,Yn(t,tt,i),i!==u.cache&&au(t,[tt],n,!0))),gt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function zn(e){e.flags|=4}function pm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Sp(t)){if(t=Zt.current,t!==null&&((je&4194048)===je?dn!==null:(je&62914560)!==je&&(je&536870912)===0||t!==dn))throw Ti=lu,Ff;e.flags|=8192}}function ul(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vd():536870912,e.lanes|=t,wr|=t)}function Ni(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var u=e.child;u!==null;)n|=u.lanes|u.childLanes,i|=u.subtreeFlags&65011712,i|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)n|=u.lanes|u.childLanes,i|=u.subtreeFlags,i|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function Dy(e,t,n){var i=t.pendingProps;switch(Wo(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(t),null;case 1:return Pe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Tn(tt),ke(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(bi(t)?zn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xf())),Pe(t),null;case 26:return n=t.memoizedState,e===null?(zn(t),n!==null?(Pe(t),pm(t,n)):(Pe(t),t.flags&=-16777217)):n?n!==e.memoizedState?(zn(t),Pe(t),pm(t,n)):(Pe(t),t.flags&=-16777217):(e.memoizedProps!==i&&zn(t),Pe(t),t.flags&=-16777217),null;case 27:lt(t),n=te.current;var u=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&zn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Pe(t),null}e=F.current,bi(t)?Qf(t):(e=pp(u,i,n),t.stateNode=e,zn(t))}return Pe(t),null;case 5:if(lt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&zn(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Pe(t),null}if(e=F.current,bi(t))Qf(t);else{switch(u=_l(te.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?u.createElement("select",{is:i.is}):u.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?u.createElement(n,{is:i.is}):u.createElement(n)}}e[xt]=t,e[At]=i;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=e;e:switch(yt(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&zn(t)}}return Pe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&zn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=te.current,bi(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,u=Et,u!==null)switch(u.tag){case 27:case 5:i=u.memoizedProps}e[xt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||op(e.nodeValue,n)),e||Ta(t)}else e=_l(e).createTextNode(i),e[xt]=t,t.stateNode=e}return Pe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=bi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!u)throw Error(l(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(l(317));u[xt]=t}else wi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pe(t),u=!1}else u=Xf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(kn(t),t):(kn(t),null)}if(kn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,u=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(u=i.alternate.memoizedState.cachePool.pool);var d=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(d=i.memoizedState.cachePool.pool),d!==u&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ul(t,t.updateQueue),Pe(t),null;case 4:return ke(),e===null&&dc(t.stateNode.containerInfo),Pe(t),null;case 10:return Tn(t.type),Pe(t),null;case 19:if(Z(nt),u=t.memoizedState,u===null)return Pe(t),null;if(i=(t.flags&128)!==0,d=u.rendering,d===null)if(i)Ni(u,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=rl(e),d!==null){for(t.flags|=128,Ni(u,!1),e=d.updateQueue,t.updateQueue=e,ul(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Yf(n,e),n=n.sibling;return X(nt,nt.current&1|2),t.child}e=e.sibling}u.tail!==null&&Rt()>fl&&(t.flags|=128,i=!0,Ni(u,!1),t.lanes=4194304)}else{if(!i)if(e=rl(d),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ul(t,e),Ni(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Ae)return Pe(t),null}else 2*Rt()-u.renderingStartTime>fl&&n!==536870912&&(t.flags|=128,i=!0,Ni(u,!1),t.lanes=4194304);u.isBackwards?(d.sibling=t.child,t.child=d):(e=u.last,e!==null?e.sibling=d:t.child=d,u.last=d)}return u.tail!==null?(t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=Rt(),t.sibling=null,e=nt.current,X(nt,i?e&1|2:e&1),t):(Pe(t),null);case 22:case 23:return kn(t),hu(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Pe(t),t.subtreeFlags&6&&(t.flags|=8192)):Pe(t),n=t.updateQueue,n!==null&&ul(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&Z(Oa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Tn(tt),Pe(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function My(e,t){switch(Wo(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(tt),ke(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return lt(t),null;case 13:if(kn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));wi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(nt),null;case 4:return ke(),null;case 10:return Tn(t.type),null;case 22:case 23:return kn(t),hu(),e!==null&&Z(Oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Tn(tt),null;case 25:return null;default:return null}}function gm(e,t){switch(Wo(t),t.tag){case 3:Tn(tt),ke();break;case 26:case 27:case 5:lt(t);break;case 4:ke();break;case 13:kn(t);break;case 19:Z(nt);break;case 10:Tn(t.type);break;case 22:case 23:kn(t),hu(),e!==null&&Z(Oa);break;case 24:Tn(tt)}}function qi(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var u=i.next;n=u;do{if((n.tag&e)===e){i=void 0;var d=n.create,y=n.inst;i=d(),y.destroy=i}n=n.next}while(n!==u)}}catch(w){qe(t,t.return,w)}}function Zn(e,t,n){try{var i=t.updateQueue,u=i!==null?i.lastEffect:null;if(u!==null){var d=u.next;i=d;do{if((i.tag&e)===e){var y=i.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,u=t;var j=n,R=w;try{R()}catch(L){qe(u,j,L)}}}i=i.next}while(i!==d)}}catch(L){qe(t,t.return,L)}}function vm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{rh(t,n)}catch(i){qe(e,e.return,i)}}}function ym(e,t,n){n.props=Ca(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){qe(e,t,i)}}function Li(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(u){qe(e,t,u)}}function fn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(u){qe(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(u){qe(e,t,u)}else n.current=null}function bm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(u){qe(e,e.return,u)}}function Hu(e,t,n){try{var i=e.stateNode;tb(i,e.type,n,t),i[At]=t}catch(u){qe(e,e.return,u)}}function wm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ra(e.type)||e.tag===4}function Gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xl));else if(i!==4&&(i===27&&ra(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Yu(e,t,n),e=e.sibling;e!==null;)Yu(e,t,n),e=e.sibling}function cl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ra(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(cl(e,t,n),e=e.sibling;e!==null;)cl(e,t,n),e=e.sibling}function xm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);yt(t,i,n),t[xt]=e,t[At]=n}catch(d){qe(e,e.return,d)}}var Cn=!1,Je=!1,Pu=!1,_m=typeof WeakSet=="function"?WeakSet:Set,ct=null;function Uy(e,t){if(e=e.containerInfo,mc=kl,e=Df(e),Go(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var u=i.anchorOffset,d=i.focusNode;i=i.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var y=0,w=-1,j=-1,R=0,L=0,P=e,D=null;t:for(;;){for(var U;P!==n||u!==0&&P.nodeType!==3||(w=y+u),P!==d||i!==0&&P.nodeType!==3||(j=y+i),P.nodeType===3&&(y+=P.nodeValue.length),(U=P.firstChild)!==null;)D=P,P=U;for(;;){if(P===e)break t;if(D===n&&++R===u&&(w=y),D===d&&++L===i&&(j=y),(U=P.nextSibling)!==null)break;P=D,D=P.parentNode}P=U}n=w===-1||j===-1?null:{start:w,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(pc={focusedElem:e,selectionRange:n},kl=!1,ct=t;ct!==null;)if(t=ct,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ct=e;else for(;ct!==null;){switch(t=ct,d=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,n=t,u=d.memoizedProps,d=d.memoizedState,i=n.stateNode;try{var ce=Ca(n.type,u,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(ce,d),i.__reactInternalSnapshotBeforeUpdate=e}catch(se){qe(n,n.return,se)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)yc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,ct=e;break}ct=t.return}}function Sm(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Jn(e,n),i&4&&qi(5,n);break;case 1:if(Jn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(y){qe(n,n.return,y)}else{var u=Ca(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(y){qe(n,n.return,y)}}i&64&&vm(n),i&512&&Li(n,n.return);break;case 3:if(Jn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{rh(e,t)}catch(y){qe(n,n.return,y)}}break;case 27:t===null&&i&4&&xm(n);case 26:case 5:Jn(e,n),t===null&&i&4&&bm(n),i&512&&Li(n,n.return);break;case 12:Jn(e,n);break;case 13:Jn(e,n),i&4&&Tm(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Py.bind(null,n),ob(e,n))));break;case 22:if(i=n.memoizedState!==null||Cn,!i){t=t!==null&&t.memoizedState!==null||Je,u=Cn;var d=Je;Cn=i,(Je=t)&&!d?Fn(e,n,(n.subtreeFlags&8772)!==0):Jn(e,n),Cn=u,Je=d}break;case 30:break;default:Jn(e,n)}}function jm(e){var t=e.alternate;t!==null&&(e.alternate=null,jm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&So(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,zt=!1;function Rn(e,t,n){for(n=n.child;n!==null;)Em(e,t,n),n=n.sibling}function Em(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(ii,n)}catch{}switch(n.tag){case 26:Je||fn(n,t),Rn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Je||fn(n,t);var i=Ye,u=zt;ra(n.type)&&(Ye=n.stateNode,zt=!1),Rn(e,t,n),Xi(n.stateNode),Ye=i,zt=u;break;case 5:Je||fn(n,t);case 6:if(i=Ye,u=zt,Ye=null,Rn(e,t,n),Ye=i,zt=u,Ye!==null)if(zt)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(n.stateNode)}catch(d){qe(n,t,d)}else try{Ye.removeChild(n.stateNode)}catch(d){qe(n,t,d)}break;case 18:Ye!==null&&(zt?(e=Ye,hp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ts(e)):hp(Ye,n.stateNode));break;case 4:i=Ye,u=zt,Ye=n.stateNode.containerInfo,zt=!0,Rn(e,t,n),Ye=i,zt=u;break;case 0:case 11:case 14:case 15:Je||Zn(2,n,t),Je||Zn(4,n,t),Rn(e,t,n);break;case 1:Je||(fn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&ym(n,t,i)),Rn(e,t,n);break;case 21:Rn(e,t,n);break;case 22:Je=(i=Je)||n.memoizedState!==null,Rn(e,t,n),Je=i;break;default:Rn(e,t,n)}}function Tm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ts(e)}catch(n){qe(t,t.return,n)}}function Ny(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _m),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _m),t;default:throw Error(l(435,e.tag))}}function Qu(e,t){var n=Ny(e);t.forEach(function(i){var u=Qy.bind(null,e,i);n.has(i)||(n.add(i),i.then(u,u))})}function qt(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var u=n[i],d=e,y=t,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(ra(w.type)){Ye=w.stateNode,zt=!1;break e}break;case 5:Ye=w.stateNode,zt=!1;break e;case 3:case 4:Ye=w.stateNode.containerInfo,zt=!0;break e}w=w.return}if(Ye===null)throw Error(l(160));Em(d,y,u),Ye=null,zt=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Am(t,e),t=t.sibling}var tn=null;function Am(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qt(t,e),Lt(e),i&4&&(Zn(3,e,e.return),qi(3,e),Zn(5,e,e.return));break;case 1:qt(t,e),Lt(e),i&512&&(Je||n===null||fn(n,n.return)),i&64&&Cn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var u=tn;if(qt(t,e),Lt(e),i&512&&(Je||n===null||fn(n,n.return)),i&4){var d=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,u=u.ownerDocument||u;t:switch(i){case"title":d=u.getElementsByTagName("title")[0],(!d||d[oi]||d[xt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(i),u.head.insertBefore(d,u.querySelector("head > title"))),yt(d,i,n),d[xt]=e,ot(d),i=d;break e;case"link":var y=xp("link","href",u).get(i+(n.href||""));if(y){for(var w=0;w<y.length;w++)if(d=y[w],d.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&d.getAttribute("rel")===(n.rel==null?null:n.rel)&&d.getAttribute("title")===(n.title==null?null:n.title)&&d.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){y.splice(w,1);break t}}d=u.createElement(i),yt(d,i,n),u.head.appendChild(d);break;case"meta":if(y=xp("meta","content",u).get(i+(n.content||""))){for(w=0;w<y.length;w++)if(d=y[w],d.getAttribute("content")===(n.content==null?null:""+n.content)&&d.getAttribute("name")===(n.name==null?null:n.name)&&d.getAttribute("property")===(n.property==null?null:n.property)&&d.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&d.getAttribute("charset")===(n.charSet==null?null:n.charSet)){y.splice(w,1);break t}}d=u.createElement(i),yt(d,i,n),u.head.appendChild(d);break;default:throw Error(l(468,i))}d[xt]=e,ot(d),i=d}e.stateNode=i}else _p(u,e.type,e.stateNode);else e.stateNode=wp(u,i,e.memoizedProps);else d!==i?(d===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):d.count--,i===null?_p(u,e.type,e.stateNode):wp(u,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Hu(e,e.memoizedProps,n.memoizedProps)}break;case 27:qt(t,e),Lt(e),i&512&&(Je||n===null||fn(n,n.return)),n!==null&&i&4&&Hu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(qt(t,e),Lt(e),i&512&&(Je||n===null||fn(n,n.return)),e.flags&32){u=e.stateNode;try{Fa(u,"")}catch(U){qe(e,e.return,U)}}i&4&&e.stateNode!=null&&(u=e.memoizedProps,Hu(e,u,n!==null?n.memoizedProps:u)),i&1024&&(Pu=!0);break;case 6:if(qt(t,e),Lt(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(U){qe(e,e.return,U)}}break;case 3:if(El=null,u=tn,tn=Sl(t.containerInfo),qt(t,e),tn=u,Lt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ts(t.containerInfo)}catch(U){qe(e,e.return,U)}Pu&&(Pu=!1,km(e));break;case 4:i=tn,tn=Sl(e.stateNode.containerInfo),qt(t,e),Lt(e),tn=i;break;case 12:qt(t,e),Lt(e);break;case 13:qt(t,e),Lt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ju=Rt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Qu(e,i)));break;case 22:u=e.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,R=Cn,L=Je;if(Cn=R||u,Je=L||j,qt(t,e),Je=L,Cn=R,Lt(e),i&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(n===null||j||Cn||Je||Ra(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){j=n=t;try{if(d=j.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=j.stateNode;var P=j.memoizedProps.style,D=P!=null&&P.hasOwnProperty("display")?P.display:null;w.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(U){qe(j,j.return,U)}}}else if(t.tag===6){if(n===null){j=t;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(U){qe(j,j.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Qu(e,n))));break;case 19:qt(t,e),Lt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Qu(e,i)));break;case 30:break;case 21:break;default:qt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(wm(i)){n=i;break}i=i.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var u=n.stateNode,d=Gu(e);cl(e,d,u);break;case 5:var y=n.stateNode;n.flags&32&&(Fa(y,""),n.flags&=-33);var w=Gu(e);cl(e,w,y);break;case 3:case 4:var j=n.stateNode.containerInfo,R=Gu(e);Yu(e,R,j);break;default:throw Error(l(161))}}catch(L){qe(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function km(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;km(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Jn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Sm(e,t.alternate,t),t=t.sibling}function Ra(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zn(4,t,t.return),Ra(t);break;case 1:fn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ym(t,t.return,n),Ra(t);break;case 27:Xi(t.stateNode);case 26:case 5:fn(t,t.return),Ra(t);break;case 22:t.memoizedState===null&&Ra(t);break;case 30:Ra(t);break;default:Ra(t)}e=e.sibling}}function Fn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,u=e,d=t,y=d.flags;switch(d.tag){case 0:case 11:case 15:Fn(u,d,n),qi(4,d);break;case 1:if(Fn(u,d,n),i=d,u=i.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(R){qe(i,i.return,R)}if(i=d,u=i.updateQueue,u!==null){var w=i.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)ah(j[u],w)}catch(R){qe(i,i.return,R)}}n&&y&64&&vm(d),Li(d,d.return);break;case 27:xm(d);case 26:case 5:Fn(u,d,n),n&&i===null&&y&4&&bm(d),Li(d,d.return);break;case 12:Fn(u,d,n);break;case 13:Fn(u,d,n),n&&y&4&&Tm(u,d);break;case 22:d.memoizedState===null&&Fn(u,d,n),Li(d,d.return);break;case 30:break;default:Fn(u,d,n)}t=t.sibling}}function Vu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Si(n))}function Xu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Si(e))}function hn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Om(e,t,n,i),t=t.sibling}function Om(e,t,n,i){var u=t.flags;switch(t.tag){case 0:case 11:case 15:hn(e,t,n,i),u&2048&&qi(9,t);break;case 1:hn(e,t,n,i);break;case 3:hn(e,t,n,i),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Si(e)));break;case 12:if(u&2048){hn(e,t,n,i),e=t.stateNode;try{var d=t.memoizedProps,y=d.id,w=d.onPostCommit;typeof w=="function"&&w(y,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(j){qe(t,t.return,j)}}else hn(e,t,n,i);break;case 13:hn(e,t,n,i);break;case 23:break;case 22:d=t.stateNode,y=t.alternate,t.memoizedState!==null?d._visibility&2?hn(e,t,n,i):Bi(e,t):d._visibility&2?hn(e,t,n,i):(d._visibility|=2,vr(e,t,n,i,(t.subtreeFlags&10256)!==0)),u&2048&&Vu(y,t);break;case 24:hn(e,t,n,i),u&2048&&Xu(t.alternate,t);break;default:hn(e,t,n,i)}}function vr(e,t,n,i,u){for(u=u&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var d=e,y=t,w=n,j=i,R=y.flags;switch(y.tag){case 0:case 11:case 15:vr(d,y,w,j,u),qi(8,y);break;case 23:break;case 22:var L=y.stateNode;y.memoizedState!==null?L._visibility&2?vr(d,y,w,j,u):Bi(d,y):(L._visibility|=2,vr(d,y,w,j,u)),u&&R&2048&&Vu(y.alternate,y);break;case 24:vr(d,y,w,j,u),u&&R&2048&&Xu(y.alternate,y);break;default:vr(d,y,w,j,u)}t=t.sibling}}function Bi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,u=i.flags;switch(i.tag){case 22:Bi(n,i),u&2048&&Vu(i.alternate,i);break;case 24:Bi(n,i),u&2048&&Xu(i.alternate,i);break;default:Bi(n,i)}t=t.sibling}}var $i=8192;function yr(e){if(e.subtreeFlags&$i)for(e=e.child;e!==null;)zm(e),e=e.sibling}function zm(e){switch(e.tag){case 26:yr(e),e.flags&$i&&e.memoizedState!==null&&xb(tn,e.memoizedState,e.memoizedProps);break;case 5:yr(e);break;case 3:case 4:var t=tn;tn=Sl(e.stateNode.containerInfo),yr(e),tn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=$i,$i=16777216,yr(e),$i=t):yr(e));break;default:yr(e)}}function Cm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ct=i,Dm(i,e)}Cm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rm(e),e=e.sibling}function Rm(e){switch(e.tag){case 0:case 11:case 15:Hi(e),e.flags&2048&&Zn(9,e,e.return);break;case 3:Hi(e);break;case 12:Hi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,dl(e)):Hi(e);break;default:Hi(e)}}function dl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ct=i,Dm(i,e)}Cm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zn(8,t,t.return),dl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,dl(t));break;default:dl(t)}e=e.sibling}}function Dm(e,t){for(;ct!==null;){var n=ct;switch(n.tag){case 0:case 11:case 15:Zn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Si(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ct=i;else e:for(n=e;ct!==null;){i=ct;var u=i.sibling,d=i.return;if(jm(i),i===n){ct=null;break e}if(u!==null){u.return=d,ct=u;break e}ct=d}}}var qy={getCacheForType:function(e){var t=_t(tt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Ly=typeof WeakMap=="function"?WeakMap:Map,ze=0,Le=null,be=null,je=0,Ce=0,Bt=null,Wn=!1,br=!1,Ku=!1,Dn=0,Ke=0,ea=0,Da=0,Iu=0,Jt=0,wr=0,Gi=null,Ct=null,Zu=!1,Ju=0,fl=1/0,hl=null,ta=null,vt=0,na=null,xr=null,_r=0,Fu=0,Wu=null,Mm=null,Yi=0,ec=null;function $t(){if((ze&2)!==0&&je!==0)return je&-je;if(q.T!==null){var e=ur;return e!==0?e:lc()}return Id()}function Um(){Jt===0&&(Jt=(je&536870912)===0||Ae?Qd():536870912);var e=Zt.current;return e!==null&&(e.flags|=32),Jt}function Ht(e,t,n){(e===Le&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(Sr(e,0),aa(e,je,Jt,!1)),li(e,n),((ze&2)===0||e!==Le)&&(e===Le&&((ze&2)===0&&(Da|=n),Ke===4&&aa(e,je,Jt,!1)),mn(e))}function Nm(e,t,n){if((ze&6)!==0)throw Error(l(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||si(e,t),u=i?Hy(e,t):ac(e,t,!0),d=i;do{if(u===0){br&&!i&&aa(e,t,0,!1);break}else{if(n=e.current.alternate,d&&!By(n)){u=ac(e,t,!1),d=!1;continue}if(u===2){if(d=t,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){t=y;e:{var w=e;u=Gi;var j=w.current.memoizedState.isDehydrated;if(j&&(Sr(w,y).flags|=256),y=ac(w,y,!1),y!==2){if(Ku&&!j){w.errorRecoveryDisabledLanes|=d,Da|=d,u=4;break e}d=Ct,Ct=u,d!==null&&(Ct===null?Ct=d:Ct.push.apply(Ct,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){Sr(e,0),aa(e,t,0,!0);break}e:{switch(i=e,d=u,d){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:aa(i,t,Jt,!Wn);break e;case 2:Ct=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(u=Ju+300-Rt(),10<u)){if(aa(i,t,Jt,!Wn),js(i,0,!0)!==0)break e;i.timeoutHandle=dp(qm.bind(null,i,n,Ct,hl,Zu,t,Jt,Da,wr,Wn,d,2,-0,0),u);break e}qm(i,n,Ct,hl,Zu,t,Jt,Da,wr,Wn,d,0,-0,0)}}break}while(!0);mn(e)}function qm(e,t,n,i,u,d,y,w,j,R,L,P,D,U){if(e.timeoutHandle=-1,P=t.subtreeFlags,(P&8192||(P&16785408)===16785408)&&(Zi={stylesheets:null,count:0,unsuspend:wb},zm(t),P=_b(),P!==null)){e.cancelPendingCommit=P(Pm.bind(null,e,t,d,n,i,u,y,w,j,L,1,D,U)),aa(e,d,y,!R);return}Pm(e,t,d,n,i,u,y,w,j)}function By(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var u=n[i],d=u.getSnapshot;u=u.value;try{if(!Ut(d(),u))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function aa(e,t,n,i){t&=~Iu,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var u=t;0<u;){var d=31-Mt(u),y=1<<d;i[d]=-1,u&=~y}n!==0&&Xd(e,n,t)}function ml(){return(ze&6)===0?(Pi(0),!1):!0}function tc(){if(be!==null){if(Ce===0)var e=be.return;else e=be,En=Aa=null,yu(e),pr=null,Mi=0,e=be;for(;e!==null;)gm(e.alternate,e),e=e.return;be=null}}function Sr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,ab(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),tc(),Le=e,be=n=_n(e.current,null),je=t,Ce=0,Bt=null,Wn=!1,br=si(e,t),Ku=!1,wr=Jt=Iu=Da=ea=Ke=0,Ct=Gi=null,Zu=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var u=31-Mt(i),d=1<<u;t|=e[u],i&=~d}return Dn=t,Ns(),n}function Lm(e,t){ve=null,q.H=tl,t===Ei||t===Qs?(t=th(),Ce=3):t===Ff?(t=th(),Ce=4):Ce=t===nm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bt=t,be===null&&(Ke=1,sl(e,Vt(t,e.current)))}function Bm(){var e=q.H;return q.H=tl,e===null?tl:e}function $m(){var e=q.A;return q.A=qy,e}function nc(){Ke=4,Wn||(je&4194048)!==je&&Zt.current!==null||(br=!0),(ea&134217727)===0&&(Da&134217727)===0||Le===null||aa(Le,je,Jt,!1)}function ac(e,t,n){var i=ze;ze|=2;var u=Bm(),d=$m();(Le!==e||je!==t)&&(hl=null,Sr(e,t)),t=!1;var y=Ke;e:do try{if(Ce!==0&&be!==null){var w=be,j=Bt;switch(Ce){case 8:tc(),y=6;break e;case 3:case 2:case 9:case 6:Zt.current===null&&(t=!0);var R=Ce;if(Ce=0,Bt=null,jr(e,w,j,R),n&&br){y=0;break e}break;default:R=Ce,Ce=0,Bt=null,jr(e,w,j,R)}}$y(),y=Ke;break}catch(L){Lm(e,L)}while(!0);return t&&e.shellSuspendCounter++,En=Aa=null,ze=i,q.H=u,q.A=d,be===null&&(Le=null,je=0,Ns()),y}function $y(){for(;be!==null;)Hm(be)}function Hy(e,t){var n=ze;ze|=2;var i=Bm(),u=$m();Le!==e||je!==t?(hl=null,fl=Rt()+500,Sr(e,t)):br=si(e,t);e:do try{if(Ce!==0&&be!==null){t=be;var d=Bt;t:switch(Ce){case 1:Ce=0,Bt=null,jr(e,t,d,1);break;case 2:case 9:if(Wf(d)){Ce=0,Bt=null,Gm(t);break}t=function(){Ce!==2&&Ce!==9||Le!==e||(Ce=7),mn(e)},d.then(t,t);break e;case 3:Ce=7;break e;case 4:Ce=5;break e;case 7:Wf(d)?(Ce=0,Bt=null,Gm(t)):(Ce=0,Bt=null,jr(e,t,d,7));break;case 5:var y=null;switch(be.tag){case 26:y=be.memoizedState;case 5:case 27:var w=be;if(!y||Sp(y)){Ce=0,Bt=null;var j=w.sibling;if(j!==null)be=j;else{var R=w.return;R!==null?(be=R,pl(R)):be=null}break t}}Ce=0,Bt=null,jr(e,t,d,5);break;case 6:Ce=0,Bt=null,jr(e,t,d,6);break;case 8:tc(),Ke=6;break e;default:throw Error(l(462))}}Gy();break}catch(L){Lm(e,L)}while(!0);return En=Aa=null,q.H=i,q.A=u,ze=n,be!==null?0:(Le=null,je=0,Ns(),Ke)}function Gy(){for(;be!==null&&!wt();)Hm(be)}function Hm(e){var t=mm(e.alternate,e,Dn);e.memoizedProps=e.pendingProps,t===null?pl(e):be=t}function Gm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=om(n,t,t.pendingProps,t.type,void 0,je);break;case 11:t=om(n,t,t.pendingProps,t.type.render,t.ref,je);break;case 5:yu(t);default:gm(n,t),t=be=Yf(t,Dn),t=mm(n,t,Dn)}e.memoizedProps=e.pendingProps,t===null?pl(e):be=t}function jr(e,t,n,i){En=Aa=null,yu(t),pr=null,Mi=0;var u=t.return;try{if(Cy(e,u,t,n,je)){Ke=1,sl(e,Vt(n,e.current)),be=null;return}}catch(d){if(u!==null)throw be=u,d;Ke=1,sl(e,Vt(n,e.current)),be=null;return}t.flags&32768?(Ae||i===1?e=!0:br||(je&536870912)!==0?e=!1:(Wn=e=!0,(i===2||i===9||i===3||i===6)&&(i=Zt.current,i!==null&&i.tag===13&&(i.flags|=16384))),Ym(t,e)):pl(t)}function pl(e){var t=e;do{if((t.flags&32768)!==0){Ym(t,Wn);return}e=t.return;var n=Dy(t.alternate,t,Dn);if(n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ke===0&&(Ke=5)}function Ym(e,t){do{var n=My(e.alternate,e);if(n!==null){n.flags&=32767,be=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){be=e;return}be=e=n}while(e!==null);Ke=6,be=null}function Pm(e,t,n,i,u,d,y,w,j){e.cancelPendingCommit=null;do gl();while(vt!==0);if((ze&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(d=t.lanes|t.childLanes,d|=Xo,w0(e,n,d,y,w,j),e===Le&&(be=Le=null,je=0),xr=t,na=e,_r=n,Fu=d,Wu=u,Mm=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vy(xs,function(){return Im(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=q.T,q.T=null,u=K.p,K.p=2,y=ze,ze|=4;try{Uy(e,t,n)}finally{ze=y,K.p=u,q.T=i}}vt=1,Qm(),Vm(),Xm()}}function Qm(){if(vt===1){vt=0;var e=na,t=xr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=q.T,q.T=null;var i=K.p;K.p=2;var u=ze;ze|=4;try{Am(t,e);var d=pc,y=Df(e.containerInfo),w=d.focusedElem,j=d.selectionRange;if(y!==w&&w&&w.ownerDocument&&Rf(w.ownerDocument.documentElement,w)){if(j!==null&&Go(w)){var R=j.start,L=j.end;if(L===void 0&&(L=R),"selectionStart"in w)w.selectionStart=R,w.selectionEnd=Math.min(L,w.value.length);else{var P=w.ownerDocument||document,D=P&&P.defaultView||window;if(D.getSelection){var U=D.getSelection(),ce=w.textContent.length,se=Math.min(j.start,ce),Me=j.end===void 0?se:Math.min(j.end,ce);!U.extend&&se>Me&&(y=Me,Me=se,se=y);var O=Cf(w,se),A=Cf(w,Me);if(O&&A&&(U.rangeCount!==1||U.anchorNode!==O.node||U.anchorOffset!==O.offset||U.focusNode!==A.node||U.focusOffset!==A.offset)){var C=P.createRange();C.setStart(O.node,O.offset),U.removeAllRanges(),se>Me?(U.addRange(C),U.extend(A.node,A.offset)):(C.setEnd(A.node,A.offset),U.addRange(C))}}}}for(P=[],U=w;U=U.parentNode;)U.nodeType===1&&P.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<P.length;w++){var $=P[w];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}kl=!!mc,pc=mc=null}finally{ze=u,K.p=i,q.T=n}}e.current=t,vt=2}}function Vm(){if(vt===2){vt=0;var e=na,t=xr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=q.T,q.T=null;var i=K.p;K.p=2;var u=ze;ze|=4;try{Sm(e,t.alternate,t)}finally{ze=u,K.p=i,q.T=n}}vt=3}}function Xm(){if(vt===4||vt===3){vt=0,un();var e=na,t=xr,n=_r,i=Mm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?vt=5:(vt=0,xr=na=null,Km(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ta=null),xo(n),t=t.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(ii,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=q.T,u=K.p,K.p=2,q.T=null;try{for(var d=e.onRecoverableError,y=0;y<i.length;y++){var w=i[y];d(w.value,{componentStack:w.stack})}}finally{q.T=t,K.p=u}}(_r&3)!==0&&gl(),mn(e),u=e.pendingLanes,(n&4194090)!==0&&(u&42)!==0?e===ec?Yi++:(Yi=0,ec=e):Yi=0,Pi(0)}}function Km(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Si(t)))}function gl(e){return Qm(),Vm(),Xm(),Im()}function Im(){if(vt!==5)return!1;var e=na,t=Fu;Fu=0;var n=xo(_r),i=q.T,u=K.p;try{K.p=32>n?32:n,q.T=null,n=Wu,Wu=null;var d=na,y=_r;if(vt=0,xr=na=null,_r=0,(ze&6)!==0)throw Error(l(331));var w=ze;if(ze|=4,Rm(d.current),Om(d,d.current,y,n),ze=w,Pi(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(ii,d)}catch{}return!0}finally{K.p=u,q.T=i,Km(e,t)}}function Zm(e,t,n){t=Vt(n,t),t=Ru(e.stateNode,t,2),e=Vn(e,t,2),e!==null&&(li(e,2),mn(e))}function qe(e,t,n){if(e.tag===3)Zm(e,e,n);else for(;t!==null;){if(t.tag===3){Zm(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ta===null||!ta.has(i))){e=Vt(n,e),n=em(2),i=Vn(t,n,2),i!==null&&(tm(n,i,t,e),li(i,2),mn(i));break}}t=t.return}}function rc(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Ly;var u=new Set;i.set(t,u)}else u=i.get(t),u===void 0&&(u=new Set,i.set(t,u));u.has(n)||(Ku=!0,u.add(n),e=Yy.bind(null,e,t,n),t.then(e,e))}function Yy(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Le===e&&(je&n)===n&&(Ke===4||Ke===3&&(je&62914560)===je&&300>Rt()-Ju?(ze&2)===0&&Sr(e,0):Iu|=n,wr===je&&(wr=0)),mn(e)}function Jm(e,t){t===0&&(t=Vd()),e=ir(e,t),e!==null&&(li(e,t),mn(e))}function Py(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jm(e,n)}function Qy(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,u=e.memoizedState;u!==null&&(n=u.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),Jm(e,n)}function Vy(e,t){return Ne(e,t)}var vl=null,Er=null,ic=!1,yl=!1,sc=!1,Ma=0;function mn(e){e!==Er&&e.next===null&&(Er===null?vl=Er=e:Er=Er.next=e),yl=!0,ic||(ic=!0,Ky())}function Pi(e,t){if(!sc&&yl){sc=!0;do for(var n=!1,i=vl;i!==null;){if(e!==0){var u=i.pendingLanes;if(u===0)var d=0;else{var y=i.suspendedLanes,w=i.pingedLanes;d=(1<<31-Mt(42|e)+1)-1,d&=u&~(y&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(n=!0,tp(i,d))}else d=je,d=js(i,i===Le?d:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(d&3)===0||si(i,d)||(n=!0,tp(i,d));i=i.next}while(n);sc=!1}}function Xy(){Fm()}function Fm(){yl=ic=!1;var e=0;Ma!==0&&(nb()&&(e=Ma),Ma=0);for(var t=Rt(),n=null,i=vl;i!==null;){var u=i.next,d=Wm(i,t);d===0?(i.next=null,n===null?vl=u:n.next=u,u===null&&(Er=n)):(n=i,(e!==0||(d&3)!==0)&&(yl=!0)),i=u}Pi(e)}function Wm(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-Mt(d),w=1<<y,j=u[y];j===-1?((w&n)===0||(w&i)!==0)&&(u[y]=b0(w,t)):j<=t&&(e.expiredLanes|=w),d&=~w}if(t=Le,n=je,n=js(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ee(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||si(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Ee(i),xo(n)){case 2:case 8:n=Yd;break;case 32:n=xs;break;case 268435456:n=Pd;break;default:n=xs}return i=ep.bind(null,e),n=Ne(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Ee(i),e.callbackPriority=2,e.callbackNode=null,2}function ep(e,t){if(vt!==0&&vt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(gl()&&e.callbackNode!==n)return null;var i=je;return i=js(e,e===Le?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Nm(e,i,t),Wm(e,Rt()),e.callbackNode!=null&&e.callbackNode===n?ep.bind(null,e):null)}function tp(e,t){if(gl())return null;Nm(e,t,!0)}function Ky(){rb(function(){(ze&6)!==0?Ne(Gd,Xy):Fm()})}function lc(){return Ma===0&&(Ma=Qd()),Ma}function np(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Os(""+e)}function ap(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Iy(e,t,n,i,u){if(t==="submit"&&n&&n.stateNode===u){var d=np((u[At]||null).action),y=i.submitter;y&&(t=(t=y[At]||null)?np(t.formAction):y.getAttribute("formAction"),t!==null&&(d=t,y=null));var w=new Ds("action","action",null,i,u);e.push({event:w,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ma!==0){var j=y?ap(u,y):new FormData(u);Au(n,{pending:!0,data:j,method:u.method,action:d},null,j)}}else typeof d=="function"&&(w.preventDefault(),j=y?ap(u,y):new FormData(u),Au(n,{pending:!0,data:j,method:u.method,action:d},d,j))},currentTarget:u}]})}}for(var oc=0;oc<Vo.length;oc++){var uc=Vo[oc],Zy=uc.toLowerCase(),Jy=uc[0].toUpperCase()+uc.slice(1);en(Zy,"on"+Jy)}en(Nf,"onAnimationEnd"),en(qf,"onAnimationIteration"),en(Lf,"onAnimationStart"),en("dblclick","onDoubleClick"),en("focusin","onFocus"),en("focusout","onBlur"),en(my,"onTransitionRun"),en(py,"onTransitionStart"),en(gy,"onTransitionCancel"),en(Bf,"onTransitionEnd"),Ia("onMouseEnter",["mouseout","mouseover"]),Ia("onMouseLeave",["mouseout","mouseover"]),Ia("onPointerEnter",["pointerout","pointerover"]),Ia("onPointerLeave",["pointerout","pointerover"]),ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qi));function rp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],u=i.event;i=i.listeners;e:{var d=void 0;if(t)for(var y=i.length-1;0<=y;y--){var w=i[y],j=w.instance,R=w.currentTarget;if(w=w.listener,j!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=R;try{d(u)}catch(L){il(L)}u.currentTarget=null,d=j}else for(y=0;y<i.length;y++){if(w=i[y],j=w.instance,R=w.currentTarget,w=w.listener,j!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=R;try{d(u)}catch(L){il(L)}u.currentTarget=null,d=j}}}}function we(e,t){var n=t[_o];n===void 0&&(n=t[_o]=new Set);var i=e+"__bubble";n.has(i)||(ip(t,e,2,!1),n.add(i))}function cc(e,t,n){var i=0;t&&(i|=4),ip(n,e,i,t)}var bl="_reactListening"+Math.random().toString(36).slice(2);function dc(e){if(!e[bl]){e[bl]=!0,Jd.forEach(function(n){n!=="selectionchange"&&(Fy.has(n)||cc(n,!1,e),cc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bl]||(t[bl]=!0,cc("selectionchange",!1,t))}}function ip(e,t,n,i){switch(Op(t)){case 2:var u=Eb;break;case 8:u=Tb;break;default:u=Ec}n=u.bind(null,t,n,e),u=void 0,!Do||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),i?u!==void 0?e.addEventListener(t,n,{capture:!0,passive:u}):e.addEventListener(t,n,!0):u!==void 0?e.addEventListener(t,n,{passive:u}):e.addEventListener(t,n,!1)}function fc(e,t,n,i,u){var d=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var y=i.tag;if(y===3||y===4){var w=i.stateNode.containerInfo;if(w===u)break;if(y===4)for(y=i.return;y!==null;){var j=y.tag;if((j===3||j===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;w!==null;){if(y=Va(w),y===null)return;if(j=y.tag,j===5||j===6||j===26||j===27){i=d=y;continue e}w=w.parentNode}}i=i.return}ff(function(){var R=d,L=Co(n),P=[];e:{var D=$f.get(e);if(D!==void 0){var U=Ds,ce=e;switch(e){case"keypress":if(Cs(n)===0)break e;case"keydown":case"keyup":U=V0;break;case"focusin":ce="focus",U=qo;break;case"focusout":ce="blur",U=qo;break;case"beforeblur":case"afterblur":U=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=I0;break;case Nf:case qf:case Lf:U=q0;break;case Bf:U=J0;break;case"scroll":case"scrollend":U=R0;break;case"wheel":U=W0;break;case"copy":case"cut":case"paste":U=B0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=vf;break;case"toggle":case"beforetoggle":U=ty}var se=(t&4)!==0,Me=!se&&(e==="scroll"||e==="scrollend"),O=se?D!==null?D+"Capture":null:D;se=[];for(var A=R,C;A!==null;){var $=A;if(C=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||C===null||O===null||($=ci(A,O),$!=null&&se.push(Vi(A,$,C))),Me)break;A=A.return}0<se.length&&(D=new U(D,ce,null,n,L),P.push({event:D,listeners:se}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",D&&n!==zo&&(ce=n.relatedTarget||n.fromElement)&&(Va(ce)||ce[Qa]))break e;if((U||D)&&(D=L.window===L?L:(D=L.ownerDocument)?D.defaultView||D.parentWindow:window,U?(ce=n.relatedTarget||n.toElement,U=R,ce=ce?Va(ce):null,ce!==null&&(Me=c(ce),se=ce.tag,ce!==Me||se!==5&&se!==27&&se!==6)&&(ce=null)):(U=null,ce=R),U!==ce)){if(se=pf,$="onMouseLeave",O="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(se=vf,$="onPointerLeave",O="onPointerEnter",A="pointer"),Me=U==null?D:ui(U),C=ce==null?D:ui(ce),D=new se($,A+"leave",U,n,L),D.target=Me,D.relatedTarget=C,$=null,Va(L)===R&&(se=new se(O,A+"enter",ce,n,L),se.target=C,se.relatedTarget=Me,$=se),Me=$,U&&ce)t:{for(se=U,O=ce,A=0,C=se;C;C=Tr(C))A++;for(C=0,$=O;$;$=Tr($))C++;for(;0<A-C;)se=Tr(se),A--;for(;0<C-A;)O=Tr(O),C--;for(;A--;){if(se===O||O!==null&&se===O.alternate)break t;se=Tr(se),O=Tr(O)}se=null}else se=null;U!==null&&sp(P,D,U,se,!1),ce!==null&&Me!==null&&sp(P,Me,ce,se,!0)}}e:{if(D=R?ui(R):window,U=D.nodeName&&D.nodeName.toLowerCase(),U==="select"||U==="input"&&D.type==="file")var W=Ef;else if(Sf(D))if(Tf)W=dy;else{W=uy;var ye=oy}else U=D.nodeName,!U||U.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?R&&Oo(R.elementType)&&(W=Ef):W=cy;if(W&&(W=W(e,R))){jf(P,W,n,L);break e}ye&&ye(e,D,R),e==="focusout"&&R&&D.type==="number"&&R.memoizedProps.value!=null&&ko(D,"number",D.value)}switch(ye=R?ui(R):window,e){case"focusin":(Sf(ye)||ye.contentEditable==="true")&&(nr=ye,Yo=R,yi=null);break;case"focusout":yi=Yo=nr=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,Mf(P,n,L);break;case"selectionchange":if(hy)break;case"keydown":case"keyup":Mf(P,n,L)}var ae;if(Bo)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else tr?xf(e,n)&&(oe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(oe="onCompositionStart");oe&&(yf&&n.locale!=="ko"&&(tr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&tr&&(ae=hf()):(Gn=L,Mo="value"in Gn?Gn.value:Gn.textContent,tr=!0)),ye=wl(R,oe),0<ye.length&&(oe=new gf(oe,e,null,n,L),P.push({event:oe,listeners:ye}),ae?oe.data=ae:(ae=_f(n),ae!==null&&(oe.data=ae)))),(ae=ay?ry(e,n):iy(e,n))&&(oe=wl(R,"onBeforeInput"),0<oe.length&&(ye=new gf("onBeforeInput","beforeinput",null,n,L),P.push({event:ye,listeners:oe}),ye.data=ae)),Iy(P,e,R,n,L)}rp(P,t)})}function Vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wl(e,t){for(var n=t+"Capture",i=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ci(e,n),u!=null&&i.unshift(Vi(e,u,d)),u=ci(e,t),u!=null&&i.push(Vi(e,u,d))),e.tag===3)return i;e=e.return}return[]}function Tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sp(e,t,n,i,u){for(var d=t._reactName,y=[];n!==null&&n!==i;){var w=n,j=w.alternate,R=w.stateNode;if(w=w.tag,j!==null&&j===i)break;w!==5&&w!==26&&w!==27||R===null||(j=R,u?(R=ci(n,d),R!=null&&y.unshift(Vi(n,R,j))):u||(R=ci(n,d),R!=null&&y.push(Vi(n,R,j)))),n=n.return}y.length!==0&&e.push({event:t,listeners:y})}var Wy=/\r\n?/g,eb=/\u0000|\uFFFD/g;function lp(e){return(typeof e=="string"?e:""+e).replace(Wy,`
`).replace(eb,"")}function op(e,t){return t=lp(t),lp(e)===t}function xl(){}function De(e,t,n,i,u,d){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Fa(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Fa(e,""+i);break;case"className":Ts(e,"class",i);break;case"tabIndex":Ts(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ts(e,n,i);break;case"style":cf(e,i,d);break;case"data":if(t!=="object"){Ts(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Os(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(t!=="input"&&De(e,t,"name",u.name,u,null),De(e,t,"formEncType",u.formEncType,u,null),De(e,t,"formMethod",u.formMethod,u,null),De(e,t,"formTarget",u.formTarget,u,null)):(De(e,t,"encType",u.encType,u,null),De(e,t,"method",u.method,u,null),De(e,t,"target",u.target,u,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Os(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=xl);break;case"onScroll":i!=null&&we("scroll",e);break;case"onScrollEnd":i!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Os(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":we("beforetoggle",e),we("toggle",e),Es(e,"popover",i);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Es(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=z0.get(n)||n,Es(e,n,i))}}function hc(e,t,n,i,u,d){switch(n){case"style":cf(e,i,d);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(u.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Fa(e,i):(typeof i=="number"||typeof i=="bigint")&&Fa(e,""+i);break;case"onScroll":i!=null&&we("scroll",e);break;case"onScrollEnd":i!=null&&we("scrollend",e);break;case"onClick":i!=null&&(e.onclick=xl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(u=n.endsWith("Capture"),t=n.slice(2,u?n.length-7:void 0),d=e[At]||null,d=d!=null?d[n]:null,typeof d=="function"&&e.removeEventListener(t,d,u),typeof i=="function")){typeof d!="function"&&d!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,u);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Es(e,n,i)}}}function yt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var i=!1,u=!1,d;for(d in n)if(n.hasOwnProperty(d)){var y=n[d];if(y!=null)switch(d){case"src":i=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:De(e,t,d,y,n,null)}}u&&De(e,t,"srcSet",n.srcSet,n,null),i&&De(e,t,"src",n.src,n,null);return;case"input":we("invalid",e);var w=d=y=u=null,j=null,R=null;for(i in n)if(n.hasOwnProperty(i)){var L=n[i];if(L!=null)switch(i){case"name":u=L;break;case"type":y=L;break;case"checked":j=L;break;case"defaultChecked":R=L;break;case"value":d=L;break;case"defaultValue":w=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(l(137,t));break;default:De(e,t,i,L,n,null)}}sf(e,d,w,j,R,y,u,!1),As(e);return;case"select":we("invalid",e),i=y=d=null;for(u in n)if(n.hasOwnProperty(u)&&(w=n[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":y=w;break;case"multiple":i=w;default:De(e,t,u,w,n,null)}t=d,n=y,e.multiple=!!i,t!=null?Ja(e,!!i,t,!1):n!=null&&Ja(e,!!i,n,!0);return;case"textarea":we("invalid",e),d=u=i=null;for(y in n)if(n.hasOwnProperty(y)&&(w=n[y],w!=null))switch(y){case"value":i=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(l(91));break;default:De(e,t,y,w,n,null)}of(e,i,u,d),As(e);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(i=n[j],i!=null))switch(j){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:De(e,t,j,i,n,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(i=0;i<Qi.length;i++)we(Qi[i],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(i=n[R],i!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:De(e,t,R,i,n,null)}return;default:if(Oo(t)){for(L in n)n.hasOwnProperty(L)&&(i=n[L],i!==void 0&&hc(e,t,L,i,n,void 0));return}}for(w in n)n.hasOwnProperty(w)&&(i=n[w],i!=null&&De(e,t,w,i,n,null))}function tb(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,w=null,j=null,R=null,L=null;for(U in n){var P=n[U];if(n.hasOwnProperty(U)&&P!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":j=P;default:i.hasOwnProperty(U)||De(e,t,U,null,i,P)}}for(var D in i){var U=i[D];if(P=n[D],i.hasOwnProperty(D)&&(U!=null||P!=null))switch(D){case"type":d=U;break;case"name":u=U;break;case"checked":R=U;break;case"defaultChecked":L=U;break;case"value":y=U;break;case"defaultValue":w=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(l(137,t));break;default:U!==P&&De(e,t,D,U,i,P)}}Ao(e,y,w,j,R,L,d,u);return;case"select":U=y=w=D=null;for(d in n)if(j=n[d],n.hasOwnProperty(d)&&j!=null)switch(d){case"value":break;case"multiple":U=j;default:i.hasOwnProperty(d)||De(e,t,d,null,i,j)}for(u in i)if(d=i[u],j=n[u],i.hasOwnProperty(u)&&(d!=null||j!=null))switch(u){case"value":D=d;break;case"defaultValue":w=d;break;case"multiple":y=d;default:d!==j&&De(e,t,u,d,i,j)}t=w,n=y,i=U,D!=null?Ja(e,!!n,D,!1):!!i!=!!n&&(t!=null?Ja(e,!!n,t,!0):Ja(e,!!n,n?[]:"",!1));return;case"textarea":U=D=null;for(w in n)if(u=n[w],n.hasOwnProperty(w)&&u!=null&&!i.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:De(e,t,w,null,i,u)}for(y in i)if(u=i[y],d=n[y],i.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":D=u;break;case"defaultValue":U=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(l(91));break;default:u!==d&&De(e,t,y,u,i,d)}lf(e,D,U);return;case"option":for(var ce in n)if(D=n[ce],n.hasOwnProperty(ce)&&D!=null&&!i.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:De(e,t,ce,null,i,D)}for(j in i)if(D=i[j],U=n[j],i.hasOwnProperty(j)&&D!==U&&(D!=null||U!=null))switch(j){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:De(e,t,j,D,i,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in n)D=n[se],n.hasOwnProperty(se)&&D!=null&&!i.hasOwnProperty(se)&&De(e,t,se,null,i,D);for(R in i)if(D=i[R],U=n[R],i.hasOwnProperty(R)&&D!==U&&(D!=null||U!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(l(137,t));break;default:De(e,t,R,D,i,U)}return;default:if(Oo(t)){for(var Me in n)D=n[Me],n.hasOwnProperty(Me)&&D!==void 0&&!i.hasOwnProperty(Me)&&hc(e,t,Me,void 0,i,D);for(L in i)D=i[L],U=n[L],!i.hasOwnProperty(L)||D===U||D===void 0&&U===void 0||hc(e,t,L,D,i,U);return}}for(var O in n)D=n[O],n.hasOwnProperty(O)&&D!=null&&!i.hasOwnProperty(O)&&De(e,t,O,null,i,D);for(P in i)D=i[P],U=n[P],!i.hasOwnProperty(P)||D===U||D==null&&U==null||De(e,t,P,D,i,U)}var mc=null,pc=null;function _l(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vc=null;function nb(){var e=window.event;return e&&e.type==="popstate"?e===vc?!1:(vc=e,!0):(vc=null,!1)}var dp=typeof setTimeout=="function"?setTimeout:void 0,ab=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,rb=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(e){return fp.resolve(null).then(e).catch(ib)}:dp;function ib(e){setTimeout(function(){throw e})}function ra(e){return e==="head"}function hp(e,t){var n=t,i=0,u=0;do{var d=n.nextSibling;if(e.removeChild(n),d&&d.nodeType===8)if(n=d.data,n==="/$"){if(0<i&&8>i){n=i;var y=e.ownerDocument;if(n&1&&Xi(y.documentElement),n&2&&Xi(y.body),n&4)for(n=y.head,Xi(n),y=n.firstChild;y;){var w=y.nextSibling,j=y.nodeName;y[oi]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&y.rel.toLowerCase()==="stylesheet"||n.removeChild(y),y=w}}if(u===0){e.removeChild(d),ts(t);return}u--}else n==="$"||n==="$?"||n==="$!"?u++:i=n.charCodeAt(0)-48;else i=0;n=d}while(n);ts(t)}function yc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":yc(n),So(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function sb(e,t,n,i){for(;e.nodeType===1;){var u=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[oi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=nn(e.nextSibling),e===null)break}return null}function lb(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=nn(e.nextSibling),e===null))return null;return e}function bc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function ob(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var wc=null;function mp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function pp(e,t,n){switch(t=_l(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Xi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);So(e)}var Ft=new Map,gp=new Set;function Sl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Mn=K.d;K.d={f:ub,r:cb,D:db,C:fb,L:hb,m:mb,X:gb,S:pb,M:vb};function ub(){var e=Mn.f(),t=ml();return e||t}function cb(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?Nh(t):Mn.r(e)}var Ar=typeof document>"u"?null:document;function vp(e,t,n){var i=Ar;if(i&&typeof t=="string"&&t){var u=Qt(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof n=="string"&&(u+='[crossorigin="'+n+'"]'),gp.has(u)||(gp.add(u),e={rel:e,crossOrigin:n,href:t},i.querySelector(u)===null&&(t=i.createElement("link"),yt(t,"link",e),ot(t),i.head.appendChild(t)))}}function db(e){Mn.D(e),vp("dns-prefetch",e,null)}function fb(e,t){Mn.C(e,t),vp("preconnect",e,t)}function hb(e,t,n){Mn.L(e,t,n);var i=Ar;if(i&&e&&t){var u='link[rel="preload"][as="'+Qt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(u+='[imagesrcset="'+Qt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(u+='[imagesizes="'+Qt(n.imageSizes)+'"]')):u+='[href="'+Qt(e)+'"]';var d=u;switch(t){case"style":d=kr(e);break;case"script":d=Or(e)}Ft.has(d)||(e=v({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ft.set(d,e),i.querySelector(u)!==null||t==="style"&&i.querySelector(Ki(d))||t==="script"&&i.querySelector(Ii(d))||(t=i.createElement("link"),yt(t,"link",e),ot(t),i.head.appendChild(t)))}}function mb(e,t){Mn.m(e,t);var n=Ar;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+Qt(i)+'"][href="'+Qt(e)+'"]',d=u;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Or(e)}if(!Ft.has(d)&&(e=v({rel:"modulepreload",href:e},t),Ft.set(d,e),n.querySelector(u)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ii(d)))return}i=n.createElement("link"),yt(i,"link",e),ot(i),n.head.appendChild(i)}}}function pb(e,t,n){Mn.S(e,t,n);var i=Ar;if(i&&e){var u=Ka(i).hoistableStyles,d=kr(e);t=t||"default";var y=u.get(d);if(!y){var w={loading:0,preload:null};if(y=i.querySelector(Ki(d)))w.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ft.get(d))&&xc(e,n);var j=y=i.createElement("link");ot(j),yt(j,"link",e),j._p=new Promise(function(R,L){j.onload=R,j.onerror=L}),j.addEventListener("load",function(){w.loading|=1}),j.addEventListener("error",function(){w.loading|=2}),w.loading|=4,jl(y,t,i)}y={type:"stylesheet",instance:y,count:1,state:w},u.set(d,y)}}}function gb(e,t){Mn.X(e,t);var n=Ar;if(n&&e){var i=Ka(n).hoistableScripts,u=Or(e),d=i.get(u);d||(d=n.querySelector(Ii(u)),d||(e=v({src:e,async:!0},t),(t=Ft.get(u))&&_c(e,t),d=n.createElement("script"),ot(d),yt(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(u,d))}}function vb(e,t){Mn.M(e,t);var n=Ar;if(n&&e){var i=Ka(n).hoistableScripts,u=Or(e),d=i.get(u);d||(d=n.querySelector(Ii(u)),d||(e=v({src:e,async:!0,type:"module"},t),(t=Ft.get(u))&&_c(e,t),d=n.createElement("script"),ot(d),yt(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(u,d))}}function yp(e,t,n,i){var u=(u=te.current)?Sl(u):null;if(!u)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=kr(n.href),n=Ka(u).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=kr(n.href);var d=Ka(u).hoistableStyles,y=d.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=u.querySelector(Ki(e)))&&!d._p&&(y.instance=d,y.state.loading=5),Ft.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ft.set(e,n),d||yb(u,e,n,y.state))),t&&i===null)throw Error(l(528,""));return y}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Or(n),n=Ka(u).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function kr(e){return'href="'+Qt(e)+'"'}function Ki(e){return'link[rel="stylesheet"]['+e+"]"}function bp(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function yb(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),yt(t,"link",n),ot(t),e.head.appendChild(t))}function Or(e){return'[src="'+Qt(e)+'"]'}function Ii(e){return"script[async]"+e}function wp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Qt(n.href)+'"]');if(i)return t.instance=i,ot(i),i;var u=v({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ot(i),yt(i,"style",u),jl(i,n.precedence,e),t.instance=i;case"stylesheet":u=kr(n.href);var d=e.querySelector(Ki(u));if(d)return t.state.loading|=4,t.instance=d,ot(d),d;i=bp(n),(u=Ft.get(u))&&xc(i,u),d=(e.ownerDocument||e).createElement("link"),ot(d);var y=d;return y._p=new Promise(function(w,j){y.onload=w,y.onerror=j}),yt(d,"link",i),t.state.loading|=4,jl(d,n.precedence,e),t.instance=d;case"script":return d=Or(n.src),(u=e.querySelector(Ii(d)))?(t.instance=u,ot(u),u):(i=n,(u=Ft.get(d))&&(i=v({},n),_c(i,u)),e=e.ownerDocument||e,u=e.createElement("script"),ot(u),yt(u,"link",i),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,jl(i,n.precedence,e));return t.instance}function jl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=i.length?i[i.length-1]:null,d=u,y=0;y<i.length;y++){var w=i[y];if(w.dataset.precedence===t)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function xc(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function _c(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var El=null;function xp(e,t,n){if(El===null){var i=new Map,u=El=new Map;u.set(n,i)}else u=El,i=u.get(n),i||(i=new Map,u.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),u=0;u<n.length;u++){var d=n[u];if(!(d[oi]||d[xt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(t)||"";y=e+y;var w=i.get(y);w?w.push(d):i.set(y,[d])}}return i}function _p(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function bb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Sp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Zi=null;function wb(){}function xb(e,t,n){if(Zi===null)throw Error(l(475));var i=Zi;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var u=kr(n.href),d=e.querySelector(Ki(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Tl.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=d,ot(d);return}d=e.ownerDocument||e,n=bp(n),(u=Ft.get(u))&&xc(n,u),d=d.createElement("link"),ot(d);var y=d;y._p=new Promise(function(w,j){y.onload=w,y.onerror=j}),yt(d,"link",n),t.instance=d}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Tl.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function _b(){if(Zi===null)throw Error(l(475));var e=Zi;return e.stylesheets&&e.count===0&&Sc(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Sc(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Tl(){if(this.count--,this.count===0){if(this.stylesheets)Sc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Al=null;function Sc(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Al=new Map,t.forEach(Sb,e),Al=null,Tl.call(e))}function Sb(e,t){if(!(t.state.loading&4)){var n=Al.get(e);if(n)var i=n.get(null);else{n=new Map,Al.set(e,n);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(n.set(y.dataset.precedence,y),i=y)}i&&n.set(null,i)}u=t.instance,y=u.getAttribute("data-precedence"),d=n.get(y)||i,d===i&&n.set(null,u),n.set(y,u),this.count++,i=Tl.bind(this),u.addEventListener("load",i),u.addEventListener("error",i),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var Ji={$$typeof:N,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function jb(e,t,n,i,u,d,y,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.hiddenUpdates=bo(null),this.identifierPrefix=i,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function jp(e,t,n,i,u,d,y,w,j,R,L,P){return e=new jb(e,t,n,y,w,j,R,P),t=1,d===!0&&(t|=24),d=Nt(3,null,null,t),e.current=d,d.stateNode=e,t=ru(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:i,isDehydrated:n,cache:t},ou(d),e}function Ep(e){return e?(e=sr,e):sr}function Tp(e,t,n,i,u,d){u=Ep(u),i.context===null?i.context=u:i.pendingContext=u,i=Qn(t),i.payload={element:n},d=d===void 0?null:d,d!==null&&(i.callback=d),n=Vn(e,i,t),n!==null&&(Ht(n,e,t),Ai(n,e,t))}function Ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jc(e,t){Ap(e,t),(e=e.alternate)&&Ap(e,t)}function kp(e){if(e.tag===13){var t=ir(e,67108864);t!==null&&Ht(t,e,67108864),jc(e,67108864)}}var kl=!0;function Eb(e,t,n,i){var u=q.T;q.T=null;var d=K.p;try{K.p=2,Ec(e,t,n,i)}finally{K.p=d,q.T=u}}function Tb(e,t,n,i){var u=q.T;q.T=null;var d=K.p;try{K.p=8,Ec(e,t,n,i)}finally{K.p=d,q.T=u}}function Ec(e,t,n,i){if(kl){var u=Tc(i);if(u===null)fc(e,t,i,Ol,n),zp(e,i);else if(kb(u,e,t,n,i))i.stopPropagation();else if(zp(e,i),t&4&&-1<Ab.indexOf(e)){for(;u!==null;){var d=Xa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=va(d.pendingLanes);if(y!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var j=1<<31-Mt(y);w.entanglements[1]|=j,y&=~j}mn(d),(ze&6)===0&&(fl=Rt()+500,Pi(0))}}break;case 13:w=ir(d,2),w!==null&&Ht(w,d,2),ml(),jc(d,2)}if(d=Tc(i),d===null&&fc(e,t,i,Ol,n),d===u)break;u=d}u!==null&&i.stopPropagation()}else fc(e,t,i,null,n)}}function Tc(e){return e=Co(e),Ac(e)}var Ol=null;function Ac(e){if(Ol=null,e=Va(e),e!==null){var t=c(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ol=e,null}function Op(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(f0()){case Gd:return 2;case Yd:return 8;case xs:case h0:return 32;case Pd:return 268435456;default:return 32}default:return 32}}var kc=!1,ia=null,sa=null,la=null,Fi=new Map,Wi=new Map,oa=[],Ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zp(e,t){switch(e){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":sa=null;break;case"mouseover":case"mouseout":la=null;break;case"pointerover":case"pointerout":Fi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(t.pointerId)}}function es(e,t,n,i,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:d,targetContainers:[u]},t!==null&&(t=Xa(t),t!==null&&kp(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function kb(e,t,n,i,u){switch(t){case"focusin":return ia=es(ia,e,t,n,i,u),!0;case"dragenter":return sa=es(sa,e,t,n,i,u),!0;case"mouseover":return la=es(la,e,t,n,i,u),!0;case"pointerover":var d=u.pointerId;return Fi.set(d,es(Fi.get(d)||null,e,t,n,i,u)),!0;case"gotpointercapture":return d=u.pointerId,Wi.set(d,es(Wi.get(d)||null,e,t,n,i,u)),!0}return!1}function Cp(e){var t=Va(e.target);if(t!==null){var n=c(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,x0(e.priority,function(){if(n.tag===13){var i=$t();i=wo(i);var u=ir(n,i);u!==null&&Ht(u,n,i),jc(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);zo=i,n.target.dispatchEvent(i),zo=null}else return t=Xa(n),t!==null&&kp(t),e.blockedOn=n,!1;t.shift()}return!0}function Rp(e,t,n){zl(e)&&n.delete(t)}function Ob(){kc=!1,ia!==null&&zl(ia)&&(ia=null),sa!==null&&zl(sa)&&(sa=null),la!==null&&zl(la)&&(la=null),Fi.forEach(Rp),Wi.forEach(Rp)}function Cl(e,t){e.blockedOn===t&&(e.blockedOn=null,kc||(kc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ob)))}var Rl=null;function Dp(e){Rl!==e&&(Rl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Rl===e&&(Rl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],u=e[t+2];if(typeof i!="function"){if(Ac(i||n)===null)continue;break}var d=Xa(n);d!==null&&(e.splice(t,3),t-=3,Au(d,{pending:!0,data:u,method:n.method,action:i},i,u))}}))}function ts(e){function t(j){return Cl(j,e)}ia!==null&&Cl(ia,e),sa!==null&&Cl(sa,e),la!==null&&Cl(la,e),Fi.forEach(t),Wi.forEach(t);for(var n=0;n<oa.length;n++){var i=oa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<oa.length&&(n=oa[0],n.blockedOn===null);)Cp(n),n.blockedOn===null&&oa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var u=n[i],d=n[i+1],y=u[At]||null;if(typeof d=="function")y||Dp(n);else if(y){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[At]||null)w=y.formAction;else if(Ac(u)!==null)continue}else w=y.action;typeof w=="function"?n[i+1]=w:(n.splice(i,3),i-=3),Dp(n)}}}function Oc(e){this._internalRoot=e}Dl.prototype.render=Oc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,i=$t();Tp(n,i,e,t,null,null)},Dl.prototype.unmount=Oc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tp(e.current,2,null,e,null,null),ml(),t[Qa]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Id();e={blockedOn:null,target:e,priority:t};for(var n=0;n<oa.length&&t!==0&&t<oa[n].priority;n++);oa.splice(n,0,e),n===0&&Cp(e)}};var Mp=a.version;if(Mp!=="19.1.1")throw Error(l(527,Mp,"19.1.1"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=p(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var zb={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{ii=Ml.inject(zb),Dt=Ml}catch{}}return as.createRoot=function(e,t){if(!o(e))throw Error(l(299));var n=!1,i="",u=Zh,d=Jh,y=Fh,w=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(y=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(w=t.unstable_transitionCallbacks)),t=jp(e,1,!1,null,null,n,i,u,d,y,w,null),e[Qa]=t.current,dc(e),new Oc(t)},as.hydrateRoot=function(e,t,n){if(!o(e))throw Error(l(299));var i=!1,u="",d=Zh,y=Jh,w=Fh,j=null,R=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(u=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(y=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(j=n.unstable_transitionCallbacks),n.formState!==void 0&&(R=n.formState)),t=jp(e,1,!0,t,n??null,i,u,d,y,w,j,R),t.context=Ep(null),n=t.current,i=$t(),i=wo(i),u=Qn(i),u.callback=null,Vn(n,u,i),n=i,t.current.lanes=n,li(t,n),mn(t),e[Qa]=t.current,dc(e),new Dl(t)},as.version="19.1.1",as}var Pp;function Hb(){if(Pp)return Rc.exports;Pp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),Rc.exports=$b(),Rc.exports}var Gb=Hb();/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Qp="popstate";function Yb(r={}){function a(l,o){let{pathname:c,search:h,hash:m}=l.location;return Wc("",{pathname:c,search:h,hash:m},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function s(l,o){return typeof o=="string"?o:ds(o)}return Qb(a,s,null,r)}function Qe(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function vn(r,a){if(!r){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function Pb(){return Math.random().toString(36).substring(2,10)}function Vp(r,a){return{usr:r.state,key:r.key,idx:a}}function Wc(r,a,s=null,l){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof a=="string"?Fr(a):a,state:s,key:a&&a.key||l||Pb()}}function ds({pathname:r="/",search:a="",hash:s=""}){return a&&a!=="?"&&(r+=a.charAt(0)==="?"?a:"?"+a),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function Fr(r){let a={};if(r){let s=r.indexOf("#");s>=0&&(a.hash=r.substring(s),r=r.substring(0,s));let l=r.indexOf("?");l>=0&&(a.search=r.substring(l),r=r.substring(0,l)),r&&(a.pathname=r)}return a}function Qb(r,a,s,l={}){let{window:o=document.defaultView,v5Compat:c=!1}=l,h=o.history,m="POP",p=null,g=v();g==null&&(g=0,h.replaceState({...h.state,idx:g},""));function v(){return(h.state||{idx:null}).idx}function b(){m="POP";let z=v(),B=z==null?null:z-g;g=z,p&&p({action:m,location:k.location,delta:B})}function x(z,B){m="PUSH";let M=Wc(k.location,z,B);g=v()+1;let N=Vp(M,g),G=k.createHref(M);try{h.pushState(N,"",G)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;o.location.assign(G)}c&&p&&p({action:m,location:k.location,delta:1})}function _(z,B){m="REPLACE";let M=Wc(k.location,z,B);g=v();let N=Vp(M,g),G=k.createHref(M);h.replaceState(N,"",G),c&&p&&p({action:m,location:k.location,delta:0})}function S(z){return Vb(z)}let k={get action(){return m},get location(){return r(o,h)},listen(z){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Qp,b),p=z,()=>{o.removeEventListener(Qp,b),p=null}},createHref(z){return a(o,z)},createURL:S,encodeLocation(z){let B=S(z);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:x,replace:_,go(z){return h.go(z)}};return k}function Vb(r,a=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(s,"No window.location.(origin|href) available to create URL");let l=typeof r=="string"?r:ds(r);return l=l.replace(/ $/,"%20"),!a&&l.startsWith("//")&&(l=s+l),new URL(l,s)}function ev(r,a,s="/"){return Xb(r,a,s,!1)}function Xb(r,a,s,l){let o=typeof a=="string"?Fr(a):a,c=Bn(o.pathname||"/",s);if(c==null)return null;let h=tv(r);Kb(h);let m=null;for(let p=0;m==null&&p<h.length;++p){let g=i1(c);m=a1(h[p],g,l)}return m}function tv(r,a=[],s=[],l="",o=!1){let c=(h,m,p=o,g)=>{let v={relativePath:g===void 0?h.path||"":g,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(l)&&p)return;Qe(v.relativePath.startsWith(l),`Absolute route path "${v.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(l.length)}let b=Ln([l,v.relativePath]),x=s.concat(v);h.children&&h.children.length>0&&(Qe(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),tv(h.children,a,x,b,p)),!(h.path==null&&!h.index)&&a.push({path:b,score:t1(b,h.index),routesMeta:x})};return r.forEach((h,m)=>{if(h.path===""||!h.path?.includes("?"))c(h,m);else for(let p of nv(h.path))c(h,m,!0,p)}),a}function nv(r){let a=r.split("/");if(a.length===0)return[];let[s,...l]=a,o=s.endsWith("?"),c=s.replace(/\?$/,"");if(l.length===0)return o?[c,""]:[c];let h=nv(l.join("/")),m=[];return m.push(...h.map(p=>p===""?c:[c,p].join("/"))),o&&m.push(...h),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function Kb(r){r.sort((a,s)=>a.score!==s.score?s.score-a.score:n1(a.routesMeta.map(l=>l.childrenIndex),s.routesMeta.map(l=>l.childrenIndex)))}var Ib=/^:[\w-]+$/,Zb=3,Jb=2,Fb=1,Wb=10,e1=-2,Xp=r=>r==="*";function t1(r,a){let s=r.split("/"),l=s.length;return s.some(Xp)&&(l+=e1),a&&(l+=Jb),s.filter(o=>!Xp(o)).reduce((o,c)=>o+(Ib.test(c)?Zb:c===""?Fb:Wb),l)}function n1(r,a){return r.length===a.length&&r.slice(0,-1).every((l,o)=>l===a[o])?r[r.length-1]-a[a.length-1]:0}function a1(r,a,s=!1){let{routesMeta:l}=r,o={},c="/",h=[];for(let m=0;m<l.length;++m){let p=l[m],g=m===l.length-1,v=c==="/"?a:a.slice(c.length)||"/",b=to({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},v),x=p.route;if(!b&&g&&s&&!l[l.length-1].route.index&&(b=to({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!b)return null;Object.assign(o,b.params),h.push({params:o,pathname:Ln([c,b.pathname]),pathnameBase:u1(Ln([c,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(c=Ln([c,b.pathnameBase]))}return h}function to(r,a){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[s,l]=r1(r.path,r.caseSensitive,r.end),o=a.match(s);if(!o)return null;let c=o[0],h=c.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:l.reduce((g,{paramName:v,isOptional:b},x)=>{if(v==="*"){let S=m[x]||"";h=c.slice(0,c.length-S.length).replace(/(.)\/+$/,"$1")}const _=m[x];return b&&!_?g[v]=void 0:g[v]=(_||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:h,pattern:r}}function r1(r,a=!1,s=!0){vn(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let l=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,m,p)=>(l.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(l.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,a?void 0:"i"),l]}function i1(r){try{return r.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return vn(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),r}}function Bn(r,a){if(a==="/")return r;if(!r.toLowerCase().startsWith(a.toLowerCase()))return null;let s=a.endsWith("/")?a.length-1:a.length,l=r.charAt(s);return l&&l!=="/"?null:r.slice(s)||"/"}function s1(r,a="/"){let{pathname:s,search:l="",hash:o=""}=typeof r=="string"?Fr(r):r;return{pathname:s?s.startsWith("/")?s:l1(s,a):a,search:c1(l),hash:d1(o)}}function l1(r,a){let s=a.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?s.length>1&&s.pop():o!=="."&&s.push(o)}),s.length>1?s.join("/"):"/"}function Nc(r,a,s,l){return`Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function o1(r){return r.filter((a,s)=>s===0||a.route.path&&a.route.path.length>0)}function av(r){let a=o1(r);return a.map((s,l)=>l===a.length-1?s.pathname:s.pathnameBase)}function rv(r,a,s,l=!1){let o;typeof r=="string"?o=Fr(r):(o={...r},Qe(!o.pathname||!o.pathname.includes("?"),Nc("?","pathname","search",o)),Qe(!o.pathname||!o.pathname.includes("#"),Nc("#","pathname","hash",o)),Qe(!o.search||!o.search.includes("#"),Nc("#","search","hash",o)));let c=r===""||o.pathname==="",h=c?"/":o.pathname,m;if(h==null)m=s;else{let b=a.length-1;if(!l&&h.startsWith("..")){let x=h.split("/");for(;x[0]==="..";)x.shift(),b-=1;o.pathname=x.join("/")}m=b>=0?a[b]:"/"}let p=s1(o,m),g=h&&h!=="/"&&h.endsWith("/"),v=(c||h===".")&&s.endsWith("/");return!p.pathname.endsWith("/")&&(g||v)&&(p.pathname+="/"),p}var Ln=r=>r.join("/").replace(/\/\/+/g,"/"),u1=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),c1=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,d1=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function f1(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var iv=["POST","PUT","PATCH","DELETE"];new Set(iv);var h1=["GET",...iv];new Set(h1);var Wr=E.createContext(null);Wr.displayName="DataRouter";var uo=E.createContext(null);uo.displayName="DataRouterState";E.createContext(!1);var sv=E.createContext({isTransitioning:!1});sv.displayName="ViewTransition";var m1=E.createContext(new Map);m1.displayName="Fetchers";var p1=E.createContext(null);p1.displayName="Await";var yn=E.createContext(null);yn.displayName="Navigation";var ps=E.createContext(null);ps.displayName="Location";var on=E.createContext({outlet:null,matches:[],isDataRoute:!1});on.displayName="Route";var jd=E.createContext(null);jd.displayName="RouteError";function g1(r,{relative:a}={}){Qe(gs(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:l}=E.useContext(yn),{hash:o,pathname:c,search:h}=vs(r,{relative:a}),m=c;return s!=="/"&&(m=c==="/"?s:Ln([s,c])),l.createHref({pathname:m,search:h,hash:o})}function gs(){return E.useContext(ps)!=null}function bn(){return Qe(gs(),"useLocation() may be used only in the context of a <Router> component."),E.useContext(ps).location}var lv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ov(r){E.useContext(yn).static||E.useLayoutEffect(r)}function pa(){let{isDataRoute:r}=E.useContext(on);return r?C1():v1()}function v1(){Qe(gs(),"useNavigate() may be used only in the context of a <Router> component.");let r=E.useContext(Wr),{basename:a,navigator:s}=E.useContext(yn),{matches:l}=E.useContext(on),{pathname:o}=bn(),c=JSON.stringify(av(l)),h=E.useRef(!1);return ov(()=>{h.current=!0}),E.useCallback((p,g={})=>{if(vn(h.current,lv),!h.current)return;if(typeof p=="number"){s.go(p);return}let v=rv(p,JSON.parse(c),o,g.relative==="path");r==null&&a!=="/"&&(v.pathname=v.pathname==="/"?a:Ln([a,v.pathname])),(g.replace?s.replace:s.push)(v,g.state,g)},[a,s,c,o,r])}var y1=E.createContext(null);function b1(r){let a=E.useContext(on).outlet;return a&&E.createElement(y1.Provider,{value:r},a)}function ei(){let{matches:r}=E.useContext(on),a=r[r.length-1];return a?a.params:{}}function vs(r,{relative:a}={}){let{matches:s}=E.useContext(on),{pathname:l}=bn(),o=JSON.stringify(av(s));return E.useMemo(()=>rv(r,JSON.parse(o),l,a==="path"),[r,o,l,a])}function w1(r,a){return uv(r,a)}function uv(r,a,s,l,o){Qe(gs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=E.useContext(yn),{matches:h}=E.useContext(on),m=h[h.length-1],p=m?m.params:{},g=m?m.pathname:"/",v=m?m.pathnameBase:"/",b=m&&m.route;{let M=b&&b.path||"";cv(g,!b||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let x=bn(),_;if(a){let M=typeof a=="string"?Fr(a):a;Qe(v==="/"||M.pathname?.startsWith(v),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${M.pathname}" was given in the \`location\` prop.`),_=M}else _=x;let S=_.pathname||"/",k=S;if(v!=="/"){let M=v.replace(/^\//,"").split("/");k="/"+S.replace(/^\//,"").split("/").slice(M.length).join("/")}let z=ev(r,{pathname:k});vn(b||z!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),vn(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=E1(z&&z.map(M=>Object.assign({},M,{params:Object.assign({},p,M.params),pathname:Ln([v,c.encodeLocation?c.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?v:Ln([v,c.encodeLocation?c.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),h,s,l,o);return a&&B?E.createElement(ps.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},B):B}function x1(){let r=z1(),a=f1(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),s=r instanceof Error?r.stack:null,l="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:l},c={padding:"2px 4px",backgroundColor:l},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=E.createElement(E.Fragment,null,E.createElement("p",null,"💿 Hey developer 👋"),E.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",E.createElement("code",{style:c},"ErrorBoundary")," or"," ",E.createElement("code",{style:c},"errorElement")," prop on your route.")),E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},a),s?E.createElement("pre",{style:o},s):null,h)}var _1=E.createElement(x1,null),S1=class extends E.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,a){return a.location!==r.location||a.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:a.error,location:a.location,revalidation:r.revalidation||a.revalidation}}componentDidCatch(r,a){this.props.unstable_onError?this.props.unstable_onError(r,a):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?E.createElement(on.Provider,{value:this.props.routeContext},E.createElement(jd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function j1({routeContext:r,match:a,children:s}){let l=E.useContext(Wr);return l&&l.static&&l.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=a.route.id),E.createElement(on.Provider,{value:r},s)}function E1(r,a=[],s=null,l=null,o=null){if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(a.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let c=r,h=s?.errors;if(h!=null){let g=c.findIndex(v=>v.route.id&&h?.[v.route.id]!==void 0);Qe(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let m=!1,p=-1;if(s)for(let g=0;g<c.length;g++){let v=c[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(p=g),v.route.id){let{loaderData:b,errors:x}=s,_=v.route.loader&&!b.hasOwnProperty(v.route.id)&&(!x||x[v.route.id]===void 0);if(v.route.lazy||_){m=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((g,v,b)=>{let x,_=!1,S=null,k=null;s&&(x=h&&v.route.id?h[v.route.id]:void 0,S=v.route.errorElement||_1,m&&(p<0&&b===0?(cv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,k=null):p===b&&(_=!0,k=v.route.hydrateFallbackElement||null)));let z=a.concat(c.slice(0,b+1)),B=()=>{let M;return x?M=S:_?M=k:v.route.Component?M=E.createElement(v.route.Component,null):v.route.element?M=v.route.element:M=g,E.createElement(j1,{match:v,routeContext:{outlet:g,matches:z,isDataRoute:s!=null},children:M})};return s&&(v.route.ErrorBoundary||v.route.errorElement||b===0)?E.createElement(S1,{location:s.location,revalidation:s.revalidation,component:S,error:x,children:B(),routeContext:{outlet:null,matches:z,isDataRoute:!0},unstable_onError:l}):B()},null)}function Ed(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function T1(r){let a=E.useContext(Wr);return Qe(a,Ed(r)),a}function A1(r){let a=E.useContext(uo);return Qe(a,Ed(r)),a}function k1(r){let a=E.useContext(on);return Qe(a,Ed(r)),a}function Td(r){let a=k1(r),s=a.matches[a.matches.length-1];return Qe(s.route.id,`${r} can only be used on routes that contain a unique "id"`),s.route.id}function O1(){return Td("useRouteId")}function z1(){let r=E.useContext(jd),a=A1("useRouteError"),s=Td("useRouteError");return r!==void 0?r:a.errors?.[s]}function C1(){let{router:r}=T1("useNavigate"),a=Td("useNavigate"),s=E.useRef(!1);return ov(()=>{s.current=!0}),E.useCallback(async(o,c={})=>{vn(s.current,lv),s.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:a,...c}))},[r,a])}var Kp={};function cv(r,a,s){!a&&!Kp[r]&&(Kp[r]=!0,vn(!1,s))}E.memo(R1);function R1({routes:r,future:a,state:s,unstable_onError:l}){return uv(r,void 0,s,l,a)}function dv(r){return b1(r.context)}function Be(r){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function D1({basename:r="/",children:a=null,location:s,navigationType:l="POP",navigator:o,static:c=!1}){Qe(!gs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),m=E.useMemo(()=>({basename:h,navigator:o,static:c,future:{}}),[h,o,c]);typeof s=="string"&&(s=Fr(s));let{pathname:p="/",search:g="",hash:v="",state:b=null,key:x="default"}=s,_=E.useMemo(()=>{let S=Bn(p,h);return S==null?null:{location:{pathname:S,search:g,hash:v,state:b,key:x},navigationType:l}},[h,p,g,v,b,x,l]);return vn(_!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:E.createElement(yn.Provider,{value:m},E.createElement(ps.Provider,{children:a,value:_}))}function M1({children:r,location:a}){return w1(ed(r),a)}function ed(r,a=[]){let s=[];return E.Children.forEach(r,(l,o)=>{if(!E.isValidElement(l))return;let c=[...a,o];if(l.type===E.Fragment){s.push.apply(s,ed(l.props.children,c));return}Qe(l.type===Be,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!l.props.index||!l.props.children,"An index route cannot have child routes.");let h={id:l.props.id||c.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(h.children=ed(l.props.children,c)),s.push(h)}),s}var Xl="get",Kl="application/x-www-form-urlencoded";function co(r){return r!=null&&typeof r.tagName=="string"}function U1(r){return co(r)&&r.tagName.toLowerCase()==="button"}function N1(r){return co(r)&&r.tagName.toLowerCase()==="form"}function q1(r){return co(r)&&r.tagName.toLowerCase()==="input"}function L1(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function B1(r,a){return r.button===0&&(!a||a==="_self")&&!L1(r)}var Ul=null;function $1(){if(Ul===null)try{new FormData(document.createElement("form"),0),Ul=!1}catch{Ul=!0}return Ul}var H1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qc(r){return r!=null&&!H1.has(r)?(vn(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kl}"`),null):r}function G1(r,a){let s,l,o,c,h;if(N1(r)){let m=r.getAttribute("action");l=m?Bn(m,a):null,s=r.getAttribute("method")||Xl,o=qc(r.getAttribute("enctype"))||Kl,c=new FormData(r)}else if(U1(r)||q1(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(l=p?Bn(p,a):null,s=r.getAttribute("formmethod")||m.getAttribute("method")||Xl,o=qc(r.getAttribute("formenctype"))||qc(m.getAttribute("enctype"))||Kl,c=new FormData(m,r),!$1()){let{name:g,type:v,value:b}=r;if(v==="image"){let x=g?`${g}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else g&&c.append(g,b)}}else{if(co(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Xl,l=null,o=Kl,h=r}return c&&o==="text/plain"&&(h=c,c=void 0),{action:l,method:s.toLowerCase(),encType:o,formData:c,body:h}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ad(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function Y1(r,a,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return l.pathname==="/"?l.pathname=`_root.${s}`:a&&Bn(l.pathname,a)==="/"?l.pathname=`${a.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function P1(r,a){if(r.id in a)return a[r.id];try{let s=await import(r.module);return a[r.id]=s,s}catch(s){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Q1(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function V1(r,a,s){let l=await Promise.all(r.map(async o=>{let c=a.routes[o.route.id];if(c){let h=await P1(c,s);return h.links?h.links():[]}return[]}));return Z1(l.flat(1).filter(Q1).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ip(r,a,s,l,o,c){let h=(p,g)=>s[g]?p.route.id!==s[g].route.id:!0,m=(p,g)=>s[g].pathname!==p.pathname||s[g].route.path?.endsWith("*")&&s[g].params["*"]!==p.params["*"];return c==="assets"?a.filter((p,g)=>h(p,g)||m(p,g)):c==="data"?a.filter((p,g)=>{let v=l.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(h(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:s[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function X1(r,a,{includeHydrateFallback:s}={}){return K1(r.map(l=>{let o=a.routes[l.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),s&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function K1(r){return[...new Set(r)]}function I1(r){let a={},s=Object.keys(r).sort();for(let l of s)a[l]=r[l];return a}function Z1(r,a){let s=new Set;return new Set(a),r.reduce((l,o)=>{let c=JSON.stringify(I1(o));return s.has(c)||(s.add(c),l.push({key:c,link:o})),l},[])}function fv(){let r=E.useContext(Wr);return Ad(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function J1(){let r=E.useContext(uo);return Ad(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var kd=E.createContext(void 0);kd.displayName="FrameworkContext";function hv(){let r=E.useContext(kd);return Ad(r,"You must render this element inside a <HydratedRouter> element"),r}function F1(r,a){let s=E.useContext(kd),[l,o]=E.useState(!1),[c,h]=E.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:v,onTouchStart:b}=a,x=E.useRef(null);E.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let k=B=>{B.forEach(M=>{h(M.isIntersecting)})},z=new IntersectionObserver(k,{threshold:.5});return x.current&&z.observe(x.current),()=>{z.disconnect()}}},[r]),E.useEffect(()=>{if(l){let k=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(k)}}},[l]);let _=()=>{o(!0)},S=()=>{o(!1),h(!1)};return s?r!=="intent"?[c,x,{}]:[c,x,{onFocus:rs(m,_),onBlur:rs(p,S),onMouseEnter:rs(g,_),onMouseLeave:rs(v,S),onTouchStart:rs(b,_)}]:[!1,x,{}]}function rs(r,a){return s=>{r&&r(s),s.defaultPrevented||a(s)}}function W1({page:r,...a}){let{router:s}=fv(),l=E.useMemo(()=>ev(s.routes,r,s.basename),[s.routes,r,s.basename]);return l?E.createElement(tw,{page:r,matches:l,...a}):null}function ew(r){let{manifest:a,routeModules:s}=hv(),[l,o]=E.useState([]);return E.useEffect(()=>{let c=!1;return V1(r,a,s).then(h=>{c||o(h)}),()=>{c=!0}},[r,a,s]),l}function tw({page:r,matches:a,...s}){let l=bn(),{manifest:o,routeModules:c}=hv(),{basename:h}=fv(),{loaderData:m,matches:p}=J1(),g=E.useMemo(()=>Ip(r,a,p,o,l,"data"),[r,a,p,o,l]),v=E.useMemo(()=>Ip(r,a,p,o,l,"assets"),[r,a,p,o,l]),b=E.useMemo(()=>{if(r===l.pathname+l.search+l.hash)return[];let S=new Set,k=!1;if(a.forEach(B=>{let M=o.routes[B.route.id];!M||!M.hasLoader||(!g.some(N=>N.route.id===B.route.id)&&B.route.id in m&&c[B.route.id]?.shouldRevalidate||M.hasClientLoader?k=!0:S.add(B.route.id))}),S.size===0)return[];let z=Y1(r,h,"data");return k&&S.size>0&&z.searchParams.set("_routes",a.filter(B=>S.has(B.route.id)).map(B=>B.route.id).join(",")),[z.pathname+z.search]},[h,m,l,o,g,a,r,c]),x=E.useMemo(()=>X1(v,o),[v,o]),_=ew(v);return E.createElement(E.Fragment,null,b.map(S=>E.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...s})),x.map(S=>E.createElement("link",{key:S,rel:"modulepreload",href:S,...s})),_.map(({key:S,link:k})=>E.createElement("link",{key:S,nonce:s.nonce,...k})))}function nw(...r){return a=>{r.forEach(s=>{typeof s=="function"?s(a):s!=null&&(s.current=a)})}}var mv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mv&&(window.__reactRouterVersion="7.8.2")}catch{}function aw({basename:r,children:a,window:s}){let l=E.useRef();l.current==null&&(l.current=Yb({window:s,v5Compat:!0}));let o=l.current,[c,h]=E.useState({action:o.action,location:o.location}),m=E.useCallback(p=>{E.startTransition(()=>h(p))},[h]);return E.useLayoutEffect(()=>o.listen(m),[o,m]),E.createElement(D1,{basename:r,children:a,location:c.location,navigationType:c.action,navigator:o})}var pv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ie=E.forwardRef(function({onClick:a,discover:s="render",prefetch:l="none",relative:o,reloadDocument:c,replace:h,state:m,target:p,to:g,preventScrollReset:v,viewTransition:b,...x},_){let{basename:S}=E.useContext(yn),k=typeof g=="string"&&pv.test(g),z,B=!1;if(typeof g=="string"&&k&&(z=g,mv))try{let ge=new URL(window.location.href),Ge=g.startsWith("//")?new URL(ge.protocol+g):new URL(g),ee=Bn(Ge.pathname,S);Ge.origin===ge.origin&&ee!=null?g=ee+Ge.search+Ge.hash:B=!0}catch{vn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=g1(g,{relative:o}),[N,G,Q]=F1(l,x),V=lw(g,{replace:h,state:m,target:p,preventScrollReset:v,relative:o,viewTransition:b});function J(ge){a&&a(ge),ge.defaultPrevented||V(ge)}let re=E.createElement("a",{...x,...Q,href:z||M,onClick:B||c?a:J,ref:nw(_,G),target:p,"data-discover":!k&&s==="render"?"true":void 0});return N&&!k?E.createElement(E.Fragment,null,re,E.createElement(W1,{page:M})):re});Ie.displayName="Link";var rw=E.forwardRef(function({"aria-current":a="page",caseSensitive:s=!1,className:l="",end:o=!1,style:c,to:h,viewTransition:m,children:p,...g},v){let b=vs(h,{relative:g.relative}),x=bn(),_=E.useContext(uo),{navigator:S,basename:k}=E.useContext(yn),z=_!=null&&fw(b)&&m===!0,B=S.encodeLocation?S.encodeLocation(b).pathname:b.pathname,M=x.pathname,N=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;s||(M=M.toLowerCase(),N=N?N.toLowerCase():null,B=B.toLowerCase()),N&&k&&(N=Bn(N,k)||N);const G=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let Q=M===B||!o&&M.startsWith(B)&&M.charAt(G)==="/",V=N!=null&&(N===B||!o&&N.startsWith(B)&&N.charAt(B.length)==="/"),J={isActive:Q,isPending:V,isTransitioning:z},re=Q?a:void 0,ge;typeof l=="function"?ge=l(J):ge=[l,Q?"active":null,V?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let Ge=typeof c=="function"?c(J):c;return E.createElement(Ie,{...g,"aria-current":re,className:ge,ref:v,style:Ge,to:h,viewTransition:m},typeof p=="function"?p(J):p)});rw.displayName="NavLink";var iw=E.forwardRef(({discover:r="render",fetcherKey:a,navigate:s,reloadDocument:l,replace:o,state:c,method:h=Xl,action:m,onSubmit:p,relative:g,preventScrollReset:v,viewTransition:b,...x},_)=>{let S=cw(),k=dw(m,{relative:g}),z=h.toLowerCase()==="get"?"get":"post",B=typeof m=="string"&&pv.test(m),M=N=>{if(p&&p(N),N.defaultPrevented)return;N.preventDefault();let G=N.nativeEvent.submitter,Q=G?.getAttribute("formmethod")||h;S(G||N.currentTarget,{fetcherKey:a,method:Q,navigate:s,replace:o,state:c,relative:g,preventScrollReset:v,viewTransition:b})};return E.createElement("form",{ref:_,method:z,action:k,onSubmit:l?p:M,...x,"data-discover":!B&&r==="render"?"true":void 0})});iw.displayName="Form";function sw(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gv(r){let a=E.useContext(Wr);return Qe(a,sw(r)),a}function lw(r,{target:a,replace:s,state:l,preventScrollReset:o,relative:c,viewTransition:h}={}){let m=pa(),p=bn(),g=vs(r,{relative:c});return E.useCallback(v=>{if(B1(v,a)){v.preventDefault();let b=s!==void 0?s:ds(p)===ds(g);m(r,{replace:b,state:l,preventScrollReset:o,relative:c,viewTransition:h})}},[p,m,g,s,l,a,r,o,c,h])}var ow=0,uw=()=>`__${String(++ow)}__`;function cw(){let{router:r}=gv("useSubmit"),{basename:a}=E.useContext(yn),s=O1();return E.useCallback(async(l,o={})=>{let{action:c,method:h,encType:m,formData:p,body:g}=G1(l,a);if(o.navigate===!1){let v=o.fetcherKey||uw();await r.fetch(v,s,o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||h,formEncType:o.encType||m,flushSync:o.flushSync})}else await r.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:p,body:g,formMethod:o.method||h,formEncType:o.encType||m,replace:o.replace,state:o.state,fromRouteId:s,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,a,s])}function dw(r,{relative:a}={}){let{basename:s}=E.useContext(yn),l=E.useContext(on);Qe(l,"useFormAction must be used inside a RouteContext");let[o]=l.matches.slice(-1),c={...vs(r||".",{relative:a})},h=bn();if(r==null){c.search=h.search;let m=new URLSearchParams(c.search),p=m.getAll("index");if(p.some(v=>v==="")){m.delete("index"),p.filter(b=>b).forEach(b=>m.append("index",b));let v=m.toString();c.search=v?`?${v}`:""}}return(!r||r===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(c.pathname=c.pathname==="/"?s:Ln([s,c.pathname])),ds(c)}function fw(r,{relative:a}={}){let s=E.useContext(sv);Qe(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=gv("useViewTransitionState"),o=vs(r,{relative:a});if(!s.isTransitioning)return!1;let c=Bn(s.currentLocation.pathname,l)||s.currentLocation.pathname,h=Bn(s.nextLocation.pathname,l)||s.nextLocation.pathname;return to(o.pathname,h)!=null||to(o.pathname,c)!=null}var jt=function(){return jt=Object.assign||function(a){for(var s,l=1,o=arguments.length;l<o;l++){s=arguments[l];for(var c in s)Object.prototype.hasOwnProperty.call(s,c)&&(a[c]=s[c])}return a},jt.apply(this,arguments)};function fs(r,a,s){if(s||arguments.length===2)for(var l=0,o=a.length,c;l<o;l++)(c||!(l in a))&&(c||(c=Array.prototype.slice.call(a,0,l)),c[l]=a[l]);return r.concat(c||Array.prototype.slice.call(a))}var He="-ms-",ls="-moz-",Oe="-webkit-",vv="comm",fo="rule",Od="decl",hw="@import",yv="@keyframes",mw="@layer",bv=Math.abs,zd=String.fromCharCode,td=Object.assign;function pw(r,a){return ht(r,0)^45?(((a<<2^ht(r,0))<<2^ht(r,1))<<2^ht(r,2))<<2^ht(r,3):0}function wv(r){return r.trim()}function Nn(r,a){return(r=a.exec(r))?r[0]:r}function pe(r,a,s){return r.replace(a,s)}function Il(r,a,s){return r.indexOf(a,s)}function ht(r,a){return r.charCodeAt(a)|0}function Vr(r,a,s){return r.slice(a,s)}function gn(r){return r.length}function xv(r){return r.length}function is(r,a){return a.push(r),r}function gw(r,a){return r.map(a).join("")}function Zp(r,a){return r.filter(function(s){return!Nn(s,a)})}var ho=1,Xr=1,_v=0,Wt=0,et=0,ti="";function mo(r,a,s,l,o,c,h,m){return{value:r,root:a,parent:s,type:l,props:o,children:c,line:ho,column:Xr,length:h,return:"",siblings:m}}function da(r,a){return td(mo("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},a)}function zr(r){for(;r.root;)r=da(r.root,{children:[r]});is(r,r.siblings)}function vw(){return et}function yw(){return et=Wt>0?ht(ti,--Wt):0,Xr--,et===10&&(Xr=1,ho--),et}function ln(){return et=Wt<_v?ht(ti,Wt++):0,Xr++,et===10&&(Xr=1,ho++),et}function $a(){return ht(ti,Wt)}function Zl(){return Wt}function po(r,a){return Vr(ti,r,a)}function nd(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bw(r){return ho=Xr=1,_v=gn(ti=r),Wt=0,[]}function ww(r){return ti="",r}function Lc(r){return wv(po(Wt-1,ad(r===91?r+2:r===40?r+1:r)))}function xw(r){for(;(et=$a())&&et<33;)ln();return nd(r)>2||nd(et)>3?"":" "}function _w(r,a){for(;--a&&ln()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return po(r,Zl()+(a<6&&$a()==32&&ln()==32))}function ad(r){for(;ln();)switch(et){case r:return Wt;case 34:case 39:r!==34&&r!==39&&ad(et);break;case 40:r===41&&ad(r);break;case 92:ln();break}return Wt}function Sw(r,a){for(;ln()&&r+et!==57;)if(r+et===84&&$a()===47)break;return"/*"+po(a,Wt-1)+"*"+zd(r===47?r:ln())}function jw(r){for(;!nd($a());)ln();return po(r,Wt)}function Ew(r){return ww(Jl("",null,null,null,[""],r=bw(r),0,[0],r))}function Jl(r,a,s,l,o,c,h,m,p){for(var g=0,v=0,b=h,x=0,_=0,S=0,k=1,z=1,B=1,M=0,N="",G=o,Q=c,V=l,J=N;z;)switch(S=M,M=ln()){case 40:if(S!=108&&ht(J,b-1)==58){Il(J+=pe(Lc(M),"&","&\f"),"&\f",bv(g?m[g-1]:0))!=-1&&(B=-1);break}case 34:case 39:case 91:J+=Lc(M);break;case 9:case 10:case 13:case 32:J+=xw(S);break;case 92:J+=_w(Zl()-1,7);continue;case 47:switch($a()){case 42:case 47:is(Tw(Sw(ln(),Zl()),a,s,p),p);break;default:J+="/"}break;case 123*k:m[g++]=gn(J)*B;case 125*k:case 59:case 0:switch(M){case 0:case 125:z=0;case 59+v:B==-1&&(J=pe(J,/\f/g,"")),_>0&&gn(J)-b&&is(_>32?Fp(J+";",l,s,b-1,p):Fp(pe(J," ","")+";",l,s,b-2,p),p);break;case 59:J+=";";default:if(is(V=Jp(J,a,s,g,v,o,m,N,G=[],Q=[],b,c),c),M===123)if(v===0)Jl(J,a,V,V,G,c,b,m,Q);else switch(x===99&&ht(J,3)===110?100:x){case 100:case 108:case 109:case 115:Jl(r,V,V,l&&is(Jp(r,V,V,0,0,o,m,N,o,G=[],b,Q),Q),o,Q,b,m,l?G:Q);break;default:Jl(J,V,V,V,[""],Q,0,m,Q)}}g=v=_=0,k=B=1,N=J="",b=h;break;case 58:b=1+gn(J),_=S;default:if(k<1){if(M==123)--k;else if(M==125&&k++==0&&yw()==125)continue}switch(J+=zd(M),M*k){case 38:B=v>0?1:(J+="\f",-1);break;case 44:m[g++]=(gn(J)-1)*B,B=1;break;case 64:$a()===45&&(J+=Lc(ln())),x=$a(),v=b=gn(N=J+=jw(Zl())),M++;break;case 45:S===45&&gn(J)==2&&(k=0)}}return c}function Jp(r,a,s,l,o,c,h,m,p,g,v,b){for(var x=o-1,_=o===0?c:[""],S=xv(_),k=0,z=0,B=0;k<l;++k)for(var M=0,N=Vr(r,x+1,x=bv(z=h[k])),G=r;M<S;++M)(G=wv(z>0?_[M]+" "+N:pe(N,/&\f/g,_[M])))&&(p[B++]=G);return mo(r,a,s,o===0?fo:m,p,g,v,b)}function Tw(r,a,s,l){return mo(r,a,s,vv,zd(vw()),Vr(r,2,-2),0,l)}function Fp(r,a,s,l,o){return mo(r,a,s,Od,Vr(r,0,l),Vr(r,l+1,-1),l,o)}function Sv(r,a,s){switch(pw(r,a)){case 5103:return Oe+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Oe+r+r;case 4789:return ls+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Oe+r+ls+r+He+r+r;case 5936:switch(ht(r,a+11)){case 114:return Oe+r+He+pe(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Oe+r+He+pe(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Oe+r+He+pe(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Oe+r+He+r+r;case 6165:return Oe+r+He+"flex-"+r+r;case 5187:return Oe+r+pe(r,/(\w+).+(:[^]+)/,Oe+"box-$1$2"+He+"flex-$1$2")+r;case 5443:return Oe+r+He+"flex-item-"+pe(r,/flex-|-self/g,"")+(Nn(r,/flex-|baseline/)?"":He+"grid-row-"+pe(r,/flex-|-self/g,""))+r;case 4675:return Oe+r+He+"flex-line-pack"+pe(r,/align-content|flex-|-self/g,"")+r;case 5548:return Oe+r+He+pe(r,"shrink","negative")+r;case 5292:return Oe+r+He+pe(r,"basis","preferred-size")+r;case 6060:return Oe+"box-"+pe(r,"-grow","")+Oe+r+He+pe(r,"grow","positive")+r;case 4554:return Oe+pe(r,/([^-])(transform)/g,"$1"+Oe+"$2")+r;case 6187:return pe(pe(pe(r,/(zoom-|grab)/,Oe+"$1"),/(image-set)/,Oe+"$1"),r,"")+r;case 5495:case 3959:return pe(r,/(image-set\([^]*)/,Oe+"$1$`$1");case 4968:return pe(pe(r,/(.+:)(flex-)?(.*)/,Oe+"box-pack:$3"+He+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Oe+r+r;case 4200:if(!Nn(r,/flex-|baseline/))return He+"grid-column-align"+Vr(r,a)+r;break;case 2592:case 3360:return He+pe(r,"template-","")+r;case 4384:case 3616:return s&&s.some(function(l,o){return a=o,Nn(l.props,/grid-\w+-end/)})?~Il(r+(s=s[a].value),"span",0)?r:He+pe(r,"-start","")+r+He+"grid-row-span:"+(~Il(s,"span",0)?Nn(s,/\d+/):+Nn(s,/\d+/)-+Nn(r,/\d+/))+";":He+pe(r,"-start","")+r;case 4896:case 4128:return s&&s.some(function(l){return Nn(l.props,/grid-\w+-start/)})?r:He+pe(pe(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return pe(r,/(.+)-inline(.+)/,Oe+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gn(r)-1-a>6)switch(ht(r,a+1)){case 109:if(ht(r,a+4)!==45)break;case 102:return pe(r,/(.+:)(.+)-([^]+)/,"$1"+Oe+"$2-$3$1"+ls+(ht(r,a+3)==108?"$3":"$2-$3"))+r;case 115:return~Il(r,"stretch",0)?Sv(pe(r,"stretch","fill-available"),a,s)+r:r}break;case 5152:case 5920:return pe(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,o,c,h,m,p,g){return He+o+":"+c+g+(h?He+o+"-span:"+(m?p:+p-+c)+g:"")+r});case 4949:if(ht(r,a+6)===121)return pe(r,":",":"+Oe)+r;break;case 6444:switch(ht(r,ht(r,14)===45?18:11)){case 120:return pe(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Oe+(ht(r,14)===45?"inline-":"")+"box$3$1"+Oe+"$2$3$1"+He+"$2box$3")+r;case 100:return pe(r,":",":"+He)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(r,"scroll-","scroll-snap-")+r}return r}function no(r,a){for(var s="",l=0;l<r.length;l++)s+=a(r[l],l,r,a)||"";return s}function Aw(r,a,s,l){switch(r.type){case mw:if(r.children.length)break;case hw:case Od:return r.return=r.return||r.value;case vv:return"";case yv:return r.return=r.value+"{"+no(r.children,l)+"}";case fo:if(!gn(r.value=r.props.join(",")))return""}return gn(s=no(r.children,l))?r.return=r.value+"{"+s+"}":""}function kw(r){var a=xv(r);return function(s,l,o,c){for(var h="",m=0;m<a;m++)h+=r[m](s,l,o,c)||"";return h}}function Ow(r){return function(a){a.root||(a=a.return)&&r(a)}}function zw(r,a,s,l){if(r.length>-1&&!r.return)switch(r.type){case Od:r.return=Sv(r.value,r.length,s);return;case yv:return no([da(r,{value:pe(r.value,"@","@"+Oe)})],l);case fo:if(r.length)return gw(s=r.props,function(o){switch(Nn(o,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":zr(da(r,{props:[pe(o,/:(read-\w+)/,":"+ls+"$1")]})),zr(da(r,{props:[o]})),td(r,{props:Zp(s,l)});break;case"::placeholder":zr(da(r,{props:[pe(o,/:(plac\w+)/,":"+Oe+"input-$1")]})),zr(da(r,{props:[pe(o,/:(plac\w+)/,":"+ls+"$1")]})),zr(da(r,{props:[pe(o,/:(plac\w+)/,He+"input-$1")]})),zr(da(r,{props:[o]})),td(r,{props:Zp(s,l)});break}return""})}}var Cw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gt={},Kr=typeof process<"u"&&Gt!==void 0&&(Gt.REACT_APP_SC_ATTR||Gt.SC_ATTR)||"data-styled",jv="active",Ev="data-styled-version",go="6.1.19",Cd=`/*!sc*/
`,ao=typeof window<"u"&&typeof document<"u",Rw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==""?Gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.SC_DISABLE_SPEEDY!==void 0&&Gt.SC_DISABLE_SPEEDY!==""&&Gt.SC_DISABLE_SPEEDY!=="false"&&Gt.SC_DISABLE_SPEEDY),Dw={},vo=Object.freeze([]),Ir=Object.freeze({});function Tv(r,a,s){return s===void 0&&(s=Ir),r.theme!==s.theme&&r.theme||a||s.theme}var Av=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Uw=/(^-|-$)/g;function Wp(r){return r.replace(Mw,"-").replace(Uw,"")}var Nw=/(a)(d)/gi,Nl=52,eg=function(r){return String.fromCharCode(r+(r>25?39:97))};function rd(r){var a,s="";for(a=Math.abs(r);a>Nl;a=a/Nl|0)s=eg(a%Nl)+s;return(eg(a%Nl)+s).replace(Nw,"$1-$2")}var Bc,kv=5381,Qr=function(r,a){for(var s=a.length;s;)r=33*r^a.charCodeAt(--s);return r},Ov=function(r){return Qr(kv,r)};function zv(r){return rd(Ov(r)>>>0)}function qw(r){return r.displayName||r.name||"Component"}function $c(r){return typeof r=="string"&&!0}var Cv=typeof Symbol=="function"&&Symbol.for,Rv=Cv?Symbol.for("react.memo"):60115,Lw=Cv?Symbol.for("react.forward_ref"):60112,Bw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$w={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hw=((Bc={})[Lw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bc[Rv]=Dv,Bc);function tg(r){return("type"in(a=r)&&a.type.$$typeof)===Rv?Dv:"$$typeof"in r?Hw[r.$$typeof]:Bw;var a}var Gw=Object.defineProperty,Yw=Object.getOwnPropertyNames,ng=Object.getOwnPropertySymbols,Pw=Object.getOwnPropertyDescriptor,Qw=Object.getPrototypeOf,ag=Object.prototype;function Mv(r,a,s){if(typeof a!="string"){if(ag){var l=Qw(a);l&&l!==ag&&Mv(r,l,s)}var o=Yw(a);ng&&(o=o.concat(ng(a)));for(var c=tg(r),h=tg(a),m=0;m<o.length;++m){var p=o[m];if(!(p in $w||s&&s[p]||h&&p in h||c&&p in c)){var g=Pw(a,p);try{Gw(r,p,g)}catch{}}}}return r}function Zr(r){return typeof r=="function"}function Rd(r){return typeof r=="object"&&"styledComponentId"in r}function Ba(r,a){return r&&a?"".concat(r," ").concat(a):r||a||""}function id(r,a){if(r.length===0)return"";for(var s=r[0],l=1;l<r.length;l++)s+=r[l];return s}function hs(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function sd(r,a,s){if(s===void 0&&(s=!1),!s&&!hs(r)&&!Array.isArray(r))return a;if(Array.isArray(a))for(var l=0;l<a.length;l++)r[l]=sd(r[l],a[l]);else if(hs(a))for(var l in a)r[l]=sd(r[l],a[l]);return r}function Dd(r,a){Object.defineProperty(r,"toString",{value:a})}function ys(r){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(a.length>0?" Args: ".concat(a.join(", ")):""))}var Vw=(function(){function r(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}return r.prototype.indexOfGroup=function(a){for(var s=0,l=0;l<a;l++)s+=this.groupSizes[l];return s},r.prototype.insertRules=function(a,s){if(a>=this.groupSizes.length){for(var l=this.groupSizes,o=l.length,c=o;a>=c;)if((c<<=1)<0)throw ys(16,"".concat(a));this.groupSizes=new Uint32Array(c),this.groupSizes.set(l),this.length=c;for(var h=o;h<c;h++)this.groupSizes[h]=0}for(var m=this.indexOfGroup(a+1),p=(h=0,s.length);h<p;h++)this.tag.insertRule(m,s[h])&&(this.groupSizes[a]++,m++)},r.prototype.clearGroup=function(a){if(a<this.length){var s=this.groupSizes[a],l=this.indexOfGroup(a),o=l+s;this.groupSizes[a]=0;for(var c=l;c<o;c++)this.tag.deleteRule(l)}},r.prototype.getGroup=function(a){var s="";if(a>=this.length||this.groupSizes[a]===0)return s;for(var l=this.groupSizes[a],o=this.indexOfGroup(a),c=o+l,h=o;h<c;h++)s+="".concat(this.tag.getRule(h)).concat(Cd);return s},r})(),Fl=new Map,ro=new Map,Wl=1,ql=function(r){if(Fl.has(r))return Fl.get(r);for(;ro.has(Wl);)Wl++;var a=Wl++;return Fl.set(r,a),ro.set(a,r),a},Xw=function(r,a){Wl=a+1,Fl.set(r,a),ro.set(a,r)},Kw="style[".concat(Kr,"][").concat(Ev,'="').concat(go,'"]'),Iw=new RegExp("^".concat(Kr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zw=function(r,a,s){for(var l,o=s.split(","),c=0,h=o.length;c<h;c++)(l=o[c])&&r.registerName(a,l)},Jw=function(r,a){for(var s,l=((s=a.textContent)!==null&&s!==void 0?s:"").split(Cd),o=[],c=0,h=l.length;c<h;c++){var m=l[c].trim();if(m){var p=m.match(Iw);if(p){var g=0|parseInt(p[1],10),v=p[2];g!==0&&(Xw(v,g),Zw(r,v,p[3]),r.getTag().insertRules(g,o)),o.length=0}else o.push(m)}}},rg=function(r){for(var a=document.querySelectorAll(Kw),s=0,l=a.length;s<l;s++){var o=a[s];o&&o.getAttribute(Kr)!==jv&&(Jw(r,o),o.parentNode&&o.parentNode.removeChild(o))}};function Fw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Uv=function(r){var a=document.head,s=r||a,l=document.createElement("style"),o=(function(m){var p=Array.from(m.querySelectorAll("style[".concat(Kr,"]")));return p[p.length-1]})(s),c=o!==void 0?o.nextSibling:null;l.setAttribute(Kr,jv),l.setAttribute(Ev,go);var h=Fw();return h&&l.setAttribute("nonce",h),s.insertBefore(l,c),l},Ww=(function(){function r(a){this.element=Uv(a),this.element.appendChild(document.createTextNode("")),this.sheet=(function(s){if(s.sheet)return s.sheet;for(var l=document.styleSheets,o=0,c=l.length;o<c;o++){var h=l[o];if(h.ownerNode===s)return h}throw ys(17)})(this.element),this.length=0}return r.prototype.insertRule=function(a,s){try{return this.sheet.insertRule(s,a),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},r.prototype.getRule=function(a){var s=this.sheet.cssRules[a];return s&&s.cssText?s.cssText:""},r})(),ex=(function(){function r(a){this.element=Uv(a),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(a,s){if(a<=this.length&&a>=0){var l=document.createTextNode(s);return this.element.insertBefore(l,this.nodes[a]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},r.prototype.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},r})(),tx=(function(){function r(a){this.rules=[],this.length=0}return r.prototype.insertRule=function(a,s){return a<=this.length&&(this.rules.splice(a,0,s),this.length++,!0)},r.prototype.deleteRule=function(a){this.rules.splice(a,1),this.length--},r.prototype.getRule=function(a){return a<this.length?this.rules[a]:""},r})(),ig=ao,nx={isServer:!ao,useCSSOMInjection:!Rw},io=(function(){function r(a,s,l){a===void 0&&(a=Ir),s===void 0&&(s={});var o=this;this.options=jt(jt({},nx),a),this.gs=s,this.names=new Map(l),this.server=!!a.isServer,!this.server&&ao&&ig&&(ig=!1,rg(this)),Dd(this,function(){return(function(c){for(var h=c.getTag(),m=h.length,p="",g=function(b){var x=(function(B){return ro.get(B)})(b);if(x===void 0)return"continue";var _=c.names.get(x),S=h.getGroup(b);if(_===void 0||!_.size||S.length===0)return"continue";var k="".concat(Kr,".g").concat(b,'[id="').concat(x,'"]'),z="";_!==void 0&&_.forEach(function(B){B.length>0&&(z+="".concat(B,","))}),p+="".concat(S).concat(k,'{content:"').concat(z,'"}').concat(Cd)},v=0;v<m;v++)g(v);return p})(o)})}return r.registerId=function(a){return ql(a)},r.prototype.rehydrate=function(){!this.server&&ao&&rg(this)},r.prototype.reconstructWithOptions=function(a,s){return s===void 0&&(s=!0),new r(jt(jt({},this.options),a),this.gs,s&&this.names||void 0)},r.prototype.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(a=(function(s){var l=s.useCSSOMInjection,o=s.target;return s.isServer?new tx(o):l?new Ww(o):new ex(o)})(this.options),new Vw(a)));var a},r.prototype.hasNameForId=function(a,s){return this.names.has(a)&&this.names.get(a).has(s)},r.prototype.registerName=function(a,s){if(ql(a),this.names.has(a))this.names.get(a).add(s);else{var l=new Set;l.add(s),this.names.set(a,l)}},r.prototype.insertRules=function(a,s,l){this.registerName(a,s),this.getTag().insertRules(ql(a),l)},r.prototype.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},r.prototype.clearRules=function(a){this.getTag().clearGroup(ql(a)),this.clearNames(a)},r.prototype.clearTag=function(){this.tag=void 0},r})(),ax=/&/g,rx=/^\s*\/\/.*$/gm;function Nv(r,a){return r.map(function(s){return s.type==="rule"&&(s.value="".concat(a," ").concat(s.value),s.value=s.value.replaceAll(",",",".concat(a," ")),s.props=s.props.map(function(l){return"".concat(a," ").concat(l)})),Array.isArray(s.children)&&s.type!=="@keyframes"&&(s.children=Nv(s.children,a)),s})}function ix(r){var a,s,l,o=Ir,c=o.options,h=c===void 0?Ir:c,m=o.plugins,p=m===void 0?vo:m,g=function(x,_,S){return S.startsWith(s)&&S.endsWith(s)&&S.replaceAll(s,"").length>0?".".concat(a):x},v=p.slice();v.push(function(x){x.type===fo&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(ax,s).replace(l,g))}),h.prefix&&v.push(zw),v.push(Aw);var b=function(x,_,S,k){_===void 0&&(_=""),S===void 0&&(S=""),k===void 0&&(k="&"),a=k,s=_,l=new RegExp("\\".concat(s,"\\b"),"g");var z=x.replace(rx,""),B=Ew(S||_?"".concat(S," ").concat(_," { ").concat(z," }"):z);h.namespace&&(B=Nv(B,h.namespace));var M=[];return no(B,kw(v.concat(Ow(function(N){return M.push(N)})))),M};return b.hash=p.length?p.reduce(function(x,_){return _.name||ys(15),Qr(x,_.name)},kv).toString():"",b}var sx=new io,ld=ix(),qv=Yt.createContext({shouldForwardProp:void 0,styleSheet:sx,stylis:ld});qv.Consumer;Yt.createContext(void 0);function od(){return E.useContext(qv)}var lx=(function(){function r(a,s){var l=this;this.inject=function(o,c){c===void 0&&(c=ld);var h=l.name+c.hash;o.hasNameForId(l.id,h)||o.insertRules(l.id,h,c(l.rules,h,"@keyframes"))},this.name=a,this.id="sc-keyframes-".concat(a),this.rules=s,Dd(this,function(){throw ys(12,String(l.name))})}return r.prototype.getName=function(a){return a===void 0&&(a=ld),this.name+a.hash},r})(),ox=function(r){return r>="A"&&r<="Z"};function sg(r){for(var a="",s=0;s<r.length;s++){var l=r[s];if(s===1&&l==="-"&&r[0]==="-")return r;ox(l)?a+="-"+l.toLowerCase():a+=l}return a.startsWith("ms-")?"-"+a:a}var Lv=function(r){return r==null||r===!1||r===""},Bv=function(r){var a,s,l=[];for(var o in r){var c=r[o];r.hasOwnProperty(o)&&!Lv(c)&&(Array.isArray(c)&&c.isCss||Zr(c)?l.push("".concat(sg(o),":"),c,";"):hs(c)?l.push.apply(l,fs(fs(["".concat(o," {")],Bv(c),!1),["}"],!1)):l.push("".concat(sg(o),": ").concat((a=o,(s=c)==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||a in Cw||a.startsWith("--")?String(s).trim():"".concat(s,"px")),";")))}return l};function ma(r,a,s,l){if(Lv(r))return[];if(Rd(r))return[".".concat(r.styledComponentId)];if(Zr(r)){if(!Zr(c=r)||c.prototype&&c.prototype.isReactComponent||!a)return[r];var o=r(a);return ma(o,a,s,l)}var c;return r instanceof lx?s?(r.inject(s,l),[r.getName(l)]):[r]:hs(r)?Bv(r):Array.isArray(r)?Array.prototype.concat.apply(vo,r.map(function(h){return ma(h,a,s,l)})):[r.toString()]}function $v(r){for(var a=0;a<r.length;a+=1){var s=r[a];if(Zr(s)&&!Rd(s))return!1}return!0}var ux=Ov(go),cx=(function(){function r(a,s,l){this.rules=a,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&$v(a),this.componentId=s,this.baseHash=Qr(ux,s),this.baseStyle=l,io.registerId(s)}return r.prototype.generateAndInjectStyles=function(a,s,l){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,s,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&s.hasNameForId(this.componentId,this.staticRulesId))o=Ba(o,this.staticRulesId);else{var c=id(ma(this.rules,a,s,l)),h=rd(Qr(this.baseHash,c)>>>0);if(!s.hasNameForId(this.componentId,h)){var m=l(c,".".concat(h),void 0,this.componentId);s.insertRules(this.componentId,h,m)}o=Ba(o,h),this.staticRulesId=h}else{for(var p=Qr(this.baseHash,l.hash),g="",v=0;v<this.rules.length;v++){var b=this.rules[v];if(typeof b=="string")g+=b;else if(b){var x=id(ma(b,a,s,l));p=Qr(p,x+v),g+=x}}if(g){var _=rd(p>>>0);s.hasNameForId(this.componentId,_)||s.insertRules(this.componentId,_,l(g,".".concat(_),void 0,this.componentId)),o=Ba(o,_)}}return o},r})(),Md=Yt.createContext(void 0);Md.Consumer;var Hc={};function dx(r,a,s){var l=Rd(r),o=r,c=!$c(r),h=a.attrs,m=h===void 0?vo:h,p=a.componentId,g=p===void 0?(function(G,Q){var V=typeof G!="string"?"sc":Wp(G);Hc[V]=(Hc[V]||0)+1;var J="".concat(V,"-").concat(zv(go+V+Hc[V]));return Q?"".concat(Q,"-").concat(J):J})(a.displayName,a.parentComponentId):p,v=a.displayName,b=v===void 0?(function(G){return $c(G)?"styled.".concat(G):"Styled(".concat(qw(G),")")})(r):v,x=a.displayName&&a.componentId?"".concat(Wp(a.displayName),"-").concat(a.componentId):a.componentId||g,_=l&&o.attrs?o.attrs.concat(m).filter(Boolean):m,S=a.shouldForwardProp;if(l&&o.shouldForwardProp){var k=o.shouldForwardProp;if(a.shouldForwardProp){var z=a.shouldForwardProp;S=function(G,Q){return k(G,Q)&&z(G,Q)}}else S=k}var B=new cx(s,x,l?o.componentStyle:void 0);function M(G,Q){return(function(V,J,re){var ge=V.attrs,Ge=V.componentStyle,ee=V.defaultProps,I=V.foldedComponentIds,me=V.styledComponentId,ie=V.target,Se=Yt.useContext(Md),q=od(),K=V.shouldForwardProp||q.shouldForwardProp,ne=Tv(J,Se,ee)||Ir,de=(function(ue,te,_e){for(var le,ke=jt(jt({},te),{className:void 0,theme:_e}),bt=0;bt<ue.length;bt+=1){var lt=Zr(le=ue[bt])?le(ke):le;for(var Ve in lt)ke[Ve]=Ve==="className"?Ba(ke[Ve],lt[Ve]):Ve==="style"?jt(jt({},ke[Ve]),lt[Ve]):lt[Ve]}return te.className&&(ke.className=Ba(ke.className,te.className)),ke})(ge,J,ne),T=de.as||ie,Y={};for(var Z in de)de[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&de.theme===ne||(Z==="forwardedAs"?Y.as=de.forwardedAs:K&&!K(Z,T)||(Y[Z]=de[Z]));var X=(function(ue,te){var _e=od(),le=ue.generateAndInjectStyles(te,_e.styleSheet,_e.stylis);return le})(Ge,de),F=Ba(I,me);return X&&(F+=" "+X),de.className&&(F+=" "+de.className),Y[$c(T)&&!Av.has(T)?"class":"className"]=F,re&&(Y.ref=re),E.createElement(T,Y)})(N,G,Q)}M.displayName=b;var N=Yt.forwardRef(M);return N.attrs=_,N.componentStyle=B,N.displayName=b,N.shouldForwardProp=S,N.foldedComponentIds=l?Ba(o.foldedComponentIds,o.styledComponentId):"",N.styledComponentId=x,N.target=l?o.target:r,Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(G){this._foldedDefaultProps=l?(function(Q){for(var V=[],J=1;J<arguments.length;J++)V[J-1]=arguments[J];for(var re=0,ge=V;re<ge.length;re++)sd(Q,ge[re],!0);return Q})({},o.defaultProps,G):G}}),Dd(N,function(){return".".concat(N.styledComponentId)}),c&&Mv(N,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),N}function lg(r,a){for(var s=[r[0]],l=0,o=a.length;l<o;l+=1)s.push(a[l],r[l+1]);return s}var og=function(r){return Object.assign(r,{isCss:!0})};function Hv(r){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];if(Zr(r)||hs(r))return og(ma(lg(vo,fs([r],a,!0))));var l=r;return a.length===0&&l.length===1&&typeof l[0]=="string"?ma(l):og(ma(lg(l,a)))}function ud(r,a,s){if(s===void 0&&(s=Ir),!a)throw ys(1,a);var l=function(o){for(var c=[],h=1;h<arguments.length;h++)c[h-1]=arguments[h];return r(a,s,Hv.apply(void 0,fs([o],c,!1)))};return l.attrs=function(o){return ud(r,a,jt(jt({},s),{attrs:Array.prototype.concat(s.attrs,o).filter(Boolean)}))},l.withConfig=function(o){return ud(r,a,jt(jt({},s),o))},l}var Gv=function(r){return ud(dx,r)},H=Gv;Av.forEach(function(r){H[r]=Gv(r)});var fx=(function(){function r(a,s){this.rules=a,this.componentId=s,this.isStatic=$v(a),io.registerId(this.componentId+1)}return r.prototype.createStyles=function(a,s,l,o){var c=o(id(ma(this.rules,s,l,o)),""),h=this.componentId+a;l.insertRules(h,h,c)},r.prototype.removeStyles=function(a,s){s.clearRules(this.componentId+a)},r.prototype.renderStyles=function(a,s,l,o){a>2&&io.registerId(this.componentId+a),this.removeStyles(a,l),this.createStyles(a,s,l,o)},r})();function hx(r){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];var l=Hv.apply(void 0,fs([r],a,!1)),o="sc-global-".concat(zv(JSON.stringify(l))),c=new fx(l,o),h=function(p){var g=od(),v=Yt.useContext(Md),b=Yt.useRef(g.styleSheet.allocateGSInstance(o)).current;return g.styleSheet.server&&m(b,p,g.styleSheet,v,g.stylis),Yt.useLayoutEffect(function(){if(!g.styleSheet.server)return m(b,p,g.styleSheet,v,g.stylis),function(){return c.removeStyles(b,g.styleSheet)}},[b,p,g.styleSheet,v,g.stylis]),null};function m(p,g,v,b,x){if(c.isStatic)c.renderStyles(p,Dw,v,x);else{var _=jt(jt({},g),{theme:Tv(g,b,h.defaultProps)});c.renderStyles(p,_,v,x)}}return Yt.memo(h)}const mx=hx`
  :root {
    --bg-color: #D1D5DC;
    --text-color: #0F172B;
    --boxBg-color: #45556C;
    --stroke-color: #99A1AF;
    --error-color: #FB2C36;
    --errorBg-color: #FFE2E2;
    --black-color: #000000;
    --white-color: #ffffff;
    --font-rw: 400;
    --font-mw: 500;
    --font-bw: 700;
    --font-sz: 1.2rem;
    --font-smz: 1.4rem;
    --font-mz: 1.6rem;
    --font-mlz: 1.8rem;
    --font-lz: 2rem;
    --font-xlz: 2.2rem;
    --font-2xlz: 2.4rem;
    --font-3xlz: 2.6rem;
    --font-4xlz: 2.8rem;
  }

  html {
    font-family: "Noto Sans KR";
    font-size: 10px;
    background-color: var(--bg-color);
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: var(--font-rw);
    color: var(--text-color);
    letter-spacing: -0.3px;
  }

  ul, ol {
    list-style: none;
  }

  button {
    background-color: transparent;
    border: none;
  }

  a, button {
    display: block;
    text-decoration: none;
    cursor: pointer;
  }

  &:where(input, textarea, a, button):focus {
    outline: none;
  }


  
  .a11y-hidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    margin: -1px;
  }

  main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0 1.6rem;
    /* padding-inline: 1.6rem; */
    padding-block: 8rem;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    main {
      grid-template-columns: repeat(8, 1fr);
      gap: 0 2rem;
      /* padding-inline: 2rem; */
    }
  }
  
  @media screen and (min-width: 769px) {
    main {
      grid-template-columns: repeat(12, 1fr);
      gap: 0 2.4rem;
      /* padding-inline: 2.4rem; */
    }
  }
`;/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gx=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,s,l)=>l?l.toUpperCase():s.toLowerCase()),ug=r=>{const a=gx(r);return a.charAt(0).toUpperCase()+a.slice(1)},Yv=(...r)=>r.filter((a,s,l)=>!!a&&a.trim()!==""&&l.indexOf(a)===s).join(" ").trim(),vx=r=>{for(const a in r)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=E.forwardRef(({color:r="currentColor",size:a=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:o="",children:c,iconNode:h,...m},p)=>E.createElement("svg",{ref:p,...yx,width:a,height:a,stroke:r,strokeWidth:l?Number(s)*24/Number(a):s,className:Yv("lucide",o),...!c&&!vx(m)&&{"aria-hidden":"true"},...m},[...h.map(([g,v])=>E.createElement(g,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=(r,a)=>{const s=E.forwardRef(({className:l,...o},c)=>E.createElement(bx,{ref:c,iconNode:a,className:Yv(`lucide-${px(ug(r))}`,`lucide-${r}`,l),...o}));return s.displayName=ug(r),s};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]],cg=it("chart-no-axes-combined",wx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Pv=it("circle-question-mark",xx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"m15 18-.722-3.25",key:"1j64jw"}],["path",{d:"M2 8a10.645 10.645 0 0 0 20 0",key:"1e7gxb"}],["path",{d:"m20 15-1.726-2.05",key:"1cnuld"}],["path",{d:"m4 15 1.726-2.05",key:"1dsqqd"}],["path",{d:"m9 18 .722-3.25",key:"ypw2yx"}]],Sx=it("eye-closed",_x);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ex=it("eye",jx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Ax=it("house",Tx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],Qv=it("image-plus",kx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],zx=it("lock-keyhole",Ox);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]],Gc=it("mail-question-mark",Cx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Dx=it("mail",Rx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],Ux=it("menu",Mx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",key:"1n2ejm"}],["path",{d:"M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1",key:"1qfcsi"}]],qx=it("messages-square",Nx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]],Bx=it("move-left",Lx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],so=it("package",$x);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]],Vv=it("party-popper",Hx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],sn=it("sparkles",Gx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]],Ha=it("store",Yx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]],cd=it("telescope",Px);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Vx=it("triangle-alert",Qx);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ud=it("x",Xx),Kx="modulepreload",Ix=function(r){return"/starscope/"+r},dg={},bs=function(a,s,l){let o=Promise.resolve();if(s&&s.length>0){let g=function(v){return Promise.all(v.map(b=>Promise.resolve(b).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};var h=g;document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),p=m?.nonce||m?.getAttribute("nonce");o=g(s.map(v=>{if(v=Ix(v),v in dg)return;dg[v]=!0;const b=v.endsWith(".css"),x=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${x}`))return;const _=document.createElement("link");if(_.rel=b?"stylesheet":Kx,b||(_.as="script"),_.crossOrigin="",_.href=v,p&&_.setAttribute("nonce",p),document.head.appendChild(_),b)return new Promise((S,k)=>{_.addEventListener("load",S),_.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${v}`)))})}))}function c(m){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=m,window.dispatchEvent(p),!p.defaultPrevented)throw m}return o.then(m=>{for(const p of m||[])p.status==="rejected"&&c(p.reason);return a().catch(c)})},Zx=r=>{let a;return r?a=r:typeof fetch>"u"?a=(...s)=>bs(async()=>{const{default:l}=await Promise.resolve().then(()=>ni);return{default:l}},[]).then(({default:l})=>l(...s)):a=fetch,(...s)=>a(...s)};class Nd extends Error{constructor(a,s="FunctionsError",l){super(a),this.name=s,this.context=l}}class Jx extends Nd{constructor(a){super("Failed to send a request to the Edge Function","FunctionsFetchError",a)}}class fg extends Nd{constructor(a){super("Relay Error invoking the Edge Function","FunctionsRelayError",a)}}class hg extends Nd{constructor(a){super("Edge Function returned a non-2xx status code","FunctionsHttpError",a)}}var dd;(function(r){r.Any="any",r.ApNortheast1="ap-northeast-1",r.ApNortheast2="ap-northeast-2",r.ApSouth1="ap-south-1",r.ApSoutheast1="ap-southeast-1",r.ApSoutheast2="ap-southeast-2",r.CaCentral1="ca-central-1",r.EuCentral1="eu-central-1",r.EuWest1="eu-west-1",r.EuWest2="eu-west-2",r.EuWest3="eu-west-3",r.SaEast1="sa-east-1",r.UsEast1="us-east-1",r.UsWest1="us-west-1",r.UsWest2="us-west-2"})(dd||(dd={}));var Fx=function(r,a,s,l){function o(c){return c instanceof s?c:new s(function(h){h(c)})}return new(s||(s=Promise))(function(c,h){function m(v){try{g(l.next(v))}catch(b){h(b)}}function p(v){try{g(l.throw(v))}catch(b){h(b)}}function g(v){v.done?c(v.value):o(v.value).then(m,p)}g((l=l.apply(r,a||[])).next())})};class Wx{constructor(a,{headers:s={},customFetch:l,region:o=dd.Any}={}){this.url=a,this.headers=s,this.region=o,this.fetch=Zx(l)}setAuth(a){this.headers.Authorization=`Bearer ${a}`}invoke(a,s={}){var l;return Fx(this,void 0,void 0,function*(){try{const{headers:o,method:c,body:h}=s;let m={},{region:p}=s;p||(p=this.region);const g=new URL(`${this.url}/${a}`);p&&p!=="any"&&(m["x-region"]=p,g.searchParams.set("forceFunctionRegion",p));let v;h&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)&&(typeof Blob<"u"&&h instanceof Blob||h instanceof ArrayBuffer?(m["Content-Type"]="application/octet-stream",v=h):typeof h=="string"?(m["Content-Type"]="text/plain",v=h):typeof FormData<"u"&&h instanceof FormData?v=h:(m["Content-Type"]="application/json",v=JSON.stringify(h)));const b=yield this.fetch(g.toString(),{method:c||"POST",headers:Object.assign(Object.assign(Object.assign({},m),this.headers),o),body:v}).catch(k=>{throw new Jx(k)}),x=b.headers.get("x-relay-error");if(x&&x==="true")throw new fg(b);if(!b.ok)throw new hg(b);let _=((l=b.headers.get("Content-Type"))!==null&&l!==void 0?l:"text/plain").split(";")[0].trim(),S;return _==="application/json"?S=yield b.json():_==="application/octet-stream"?S=yield b.blob():_==="text/event-stream"?S=b:_==="multipart/form-data"?S=yield b.formData():S=yield b.text(),{data:S,error:null,response:b}}catch(o){return{data:null,error:o,response:o instanceof hg||o instanceof fg?o.context:void 0}}})}}var ft={},Cr={},Rr={},Dr={},Mr={},Ur={},e_=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},Jr=e_();const t_=Jr.fetch,Xv=Jr.fetch.bind(Jr),Kv=Jr.Headers,n_=Jr.Request,a_=Jr.Response,ni=Object.freeze(Object.defineProperty({__proto__:null,Headers:Kv,Request:n_,Response:a_,default:Xv,fetch:t_},Symbol.toStringTag,{value:"Module"})),r_=Rb(ni);var Ll={},mg;function Iv(){if(mg)return Ll;mg=1,Object.defineProperty(Ll,"__esModule",{value:!0});class r extends Error{constructor(s){super(s.message),this.name="PostgrestError",this.details=s.details,this.hint=s.hint,this.code=s.code}}return Ll.default=r,Ll}var pg;function Zv(){if(pg)return Ur;pg=1;var r=Ur&&Ur.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(Ur,"__esModule",{value:!0});const a=r(r_),s=r(Iv());class l{constructor(c){var h,m;this.shouldThrowOnError=!1,this.method=c.method,this.url=c.url,this.headers=new Headers(c.headers),this.schema=c.schema,this.body=c.body,this.shouldThrowOnError=(h=c.shouldThrowOnError)!==null&&h!==void 0?h:!1,this.signal=c.signal,this.isMaybeSingle=(m=c.isMaybeSingle)!==null&&m!==void 0?m:!1,c.fetch?this.fetch=c.fetch:typeof fetch>"u"?this.fetch=a.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(c,h){return this.headers=new Headers(this.headers),this.headers.set(c,h),this}then(c,h){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const m=this.fetch;let p=m(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async g=>{var v,b,x,_;let S=null,k=null,z=null,B=g.status,M=g.statusText;if(g.ok){if(this.method!=="HEAD"){const V=await g.text();V===""||(this.headers.get("Accept")==="text/csv"||this.headers.get("Accept")&&(!((v=this.headers.get("Accept"))===null||v===void 0)&&v.includes("application/vnd.pgrst.plan+text"))?k=V:k=JSON.parse(V))}const G=(b=this.headers.get("Prefer"))===null||b===void 0?void 0:b.match(/count=(exact|planned|estimated)/),Q=(x=g.headers.get("content-range"))===null||x===void 0?void 0:x.split("/");G&&Q&&Q.length>1&&(z=parseInt(Q[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(k)&&(k.length>1?(S={code:"PGRST116",details:`Results contain ${k.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},k=null,z=null,B=406,M="Not Acceptable"):k.length===1?k=k[0]:k=null)}else{const G=await g.text();try{S=JSON.parse(G),Array.isArray(S)&&g.status===404&&(k=[],S=null,B=200,M="OK")}catch{g.status===404&&G===""?(B=204,M="No Content"):S={message:G}}if(S&&this.isMaybeSingle&&(!((_=S?.details)===null||_===void 0)&&_.includes("0 rows"))&&(S=null,B=200,M="OK"),S&&this.shouldThrowOnError)throw new s.default(S)}return{error:S,data:k,count:z,status:B,statusText:M}});return this.shouldThrowOnError||(p=p.catch(g=>{var v,b,x;return{error:{message:`${(v=g?.name)!==null&&v!==void 0?v:"FetchError"}: ${g?.message}`,details:`${(b=g?.stack)!==null&&b!==void 0?b:""}`,hint:"",code:`${(x=g?.code)!==null&&x!==void 0?x:""}`},data:null,count:null,status:0,statusText:""}})),p.then(c,h)}returns(){return this}overrideTypes(){return this}}return Ur.default=l,Ur}var gg;function Jv(){if(gg)return Mr;gg=1;var r=Mr&&Mr.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(Mr,"__esModule",{value:!0});const a=r(Zv());class s extends a.default{select(o){let c=!1;const h=(o??"*").split("").map(m=>/\s/.test(m)&&!c?"":(m==='"'&&(c=!c),m)).join("");return this.url.searchParams.set("select",h),this.headers.append("Prefer","return=representation"),this}order(o,{ascending:c=!0,nullsFirst:h,foreignTable:m,referencedTable:p=m}={}){const g=p?`${p}.order`:"order",v=this.url.searchParams.get(g);return this.url.searchParams.set(g,`${v?`${v},`:""}${o}.${c?"asc":"desc"}${h===void 0?"":h?".nullsfirst":".nullslast"}`),this}limit(o,{foreignTable:c,referencedTable:h=c}={}){const m=typeof h>"u"?"limit":`${h}.limit`;return this.url.searchParams.set(m,`${o}`),this}range(o,c,{foreignTable:h,referencedTable:m=h}={}){const p=typeof m>"u"?"offset":`${m}.offset`,g=typeof m>"u"?"limit":`${m}.limit`;return this.url.searchParams.set(p,`${o}`),this.url.searchParams.set(g,`${c-o+1}`),this}abortSignal(o){return this.signal=o,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:o=!1,verbose:c=!1,settings:h=!1,buffers:m=!1,wal:p=!1,format:g="text"}={}){var v;const b=[o?"analyze":null,c?"verbose":null,h?"settings":null,m?"buffers":null,p?"wal":null].filter(Boolean).join("|"),x=(v=this.headers.get("Accept"))!==null&&v!==void 0?v:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${g}; for="${x}"; options=${b};`),g==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(o){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${o}`),this}}return Mr.default=s,Mr}var vg;function qd(){if(vg)return Dr;vg=1;var r=Dr&&Dr.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(Dr,"__esModule",{value:!0});const a=r(Jv());class s extends a.default{eq(o,c){return this.url.searchParams.append(o,`eq.${c}`),this}neq(o,c){return this.url.searchParams.append(o,`neq.${c}`),this}gt(o,c){return this.url.searchParams.append(o,`gt.${c}`),this}gte(o,c){return this.url.searchParams.append(o,`gte.${c}`),this}lt(o,c){return this.url.searchParams.append(o,`lt.${c}`),this}lte(o,c){return this.url.searchParams.append(o,`lte.${c}`),this}like(o,c){return this.url.searchParams.append(o,`like.${c}`),this}likeAllOf(o,c){return this.url.searchParams.append(o,`like(all).{${c.join(",")}}`),this}likeAnyOf(o,c){return this.url.searchParams.append(o,`like(any).{${c.join(",")}}`),this}ilike(o,c){return this.url.searchParams.append(o,`ilike.${c}`),this}ilikeAllOf(o,c){return this.url.searchParams.append(o,`ilike(all).{${c.join(",")}}`),this}ilikeAnyOf(o,c){return this.url.searchParams.append(o,`ilike(any).{${c.join(",")}}`),this}is(o,c){return this.url.searchParams.append(o,`is.${c}`),this}in(o,c){const h=Array.from(new Set(c)).map(m=>typeof m=="string"&&new RegExp("[,()]").test(m)?`"${m}"`:`${m}`).join(",");return this.url.searchParams.append(o,`in.(${h})`),this}contains(o,c){return typeof c=="string"?this.url.searchParams.append(o,`cs.${c}`):Array.isArray(c)?this.url.searchParams.append(o,`cs.{${c.join(",")}}`):this.url.searchParams.append(o,`cs.${JSON.stringify(c)}`),this}containedBy(o,c){return typeof c=="string"?this.url.searchParams.append(o,`cd.${c}`):Array.isArray(c)?this.url.searchParams.append(o,`cd.{${c.join(",")}}`):this.url.searchParams.append(o,`cd.${JSON.stringify(c)}`),this}rangeGt(o,c){return this.url.searchParams.append(o,`sr.${c}`),this}rangeGte(o,c){return this.url.searchParams.append(o,`nxl.${c}`),this}rangeLt(o,c){return this.url.searchParams.append(o,`sl.${c}`),this}rangeLte(o,c){return this.url.searchParams.append(o,`nxr.${c}`),this}rangeAdjacent(o,c){return this.url.searchParams.append(o,`adj.${c}`),this}overlaps(o,c){return typeof c=="string"?this.url.searchParams.append(o,`ov.${c}`):this.url.searchParams.append(o,`ov.{${c.join(",")}}`),this}textSearch(o,c,{config:h,type:m}={}){let p="";m==="plain"?p="pl":m==="phrase"?p="ph":m==="websearch"&&(p="w");const g=h===void 0?"":`(${h})`;return this.url.searchParams.append(o,`${p}fts${g}.${c}`),this}match(o){return Object.entries(o).forEach(([c,h])=>{this.url.searchParams.append(c,`eq.${h}`)}),this}not(o,c,h){return this.url.searchParams.append(o,`not.${c}.${h}`),this}or(o,{foreignTable:c,referencedTable:h=c}={}){const m=h?`${h}.or`:"or";return this.url.searchParams.append(m,`(${o})`),this}filter(o,c,h){return this.url.searchParams.append(o,`${c}.${h}`),this}}return Dr.default=s,Dr}var yg;function Fv(){if(yg)return Rr;yg=1;var r=Rr&&Rr.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(Rr,"__esModule",{value:!0});const a=r(qd());class s{constructor(o,{headers:c={},schema:h,fetch:m}){this.url=o,this.headers=new Headers(c),this.schema=h,this.fetch=m}select(o,{head:c=!1,count:h}={}){const m=c?"HEAD":"GET";let p=!1;const g=(o??"*").split("").map(v=>/\s/.test(v)&&!p?"":(v==='"'&&(p=!p),v)).join("");return this.url.searchParams.set("select",g),h&&this.headers.append("Prefer",`count=${h}`),new a.default({method:m,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(o,{count:c,defaultToNull:h=!0}={}){var m;const p="POST";if(c&&this.headers.append("Prefer",`count=${c}`),h||this.headers.append("Prefer","missing=default"),Array.isArray(o)){const g=o.reduce((v,b)=>v.concat(Object.keys(b)),[]);if(g.length>0){const v=[...new Set(g)].map(b=>`"${b}"`);this.url.searchParams.set("columns",v.join(","))}}return new a.default({method:p,url:this.url,headers:this.headers,schema:this.schema,body:o,fetch:(m=this.fetch)!==null&&m!==void 0?m:fetch})}upsert(o,{onConflict:c,ignoreDuplicates:h=!1,count:m,defaultToNull:p=!0}={}){var g;const v="POST";if(this.headers.append("Prefer",`resolution=${h?"ignore":"merge"}-duplicates`),c!==void 0&&this.url.searchParams.set("on_conflict",c),m&&this.headers.append("Prefer",`count=${m}`),p||this.headers.append("Prefer","missing=default"),Array.isArray(o)){const b=o.reduce((x,_)=>x.concat(Object.keys(_)),[]);if(b.length>0){const x=[...new Set(b)].map(_=>`"${_}"`);this.url.searchParams.set("columns",x.join(","))}}return new a.default({method:v,url:this.url,headers:this.headers,schema:this.schema,body:o,fetch:(g=this.fetch)!==null&&g!==void 0?g:fetch})}update(o,{count:c}={}){var h;const m="PATCH";return c&&this.headers.append("Prefer",`count=${c}`),new a.default({method:m,url:this.url,headers:this.headers,schema:this.schema,body:o,fetch:(h=this.fetch)!==null&&h!==void 0?h:fetch})}delete({count:o}={}){var c;const h="DELETE";return o&&this.headers.append("Prefer",`count=${o}`),new a.default({method:h,url:this.url,headers:this.headers,schema:this.schema,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch})}}return Rr.default=s,Rr}var bg;function i_(){if(bg)return Cr;bg=1;var r=Cr&&Cr.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(Cr,"__esModule",{value:!0});const a=r(Fv()),s=r(qd());class l{constructor(c,{headers:h={},schema:m,fetch:p}={}){this.url=c,this.headers=new Headers(h),this.schemaName=m,this.fetch=p}from(c){const h=new URL(`${this.url}/${c}`);return new a.default(h,{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(c){return new l(this.url,{headers:this.headers,schema:c,fetch:this.fetch})}rpc(c,h={},{head:m=!1,get:p=!1,count:g}={}){var v;let b;const x=new URL(`${this.url}/rpc/${c}`);let _;m||p?(b=m?"HEAD":"GET",Object.entries(h).filter(([k,z])=>z!==void 0).map(([k,z])=>[k,Array.isArray(z)?`{${z.join(",")}}`:`${z}`]).forEach(([k,z])=>{x.searchParams.append(k,z)})):(b="POST",_=h);const S=new Headers(this.headers);return g&&S.set("Prefer",`count=${g}`),new s.default({method:b,url:x,headers:S,schema:this.schemaName,body:_,fetch:(v=this.fetch)!==null&&v!==void 0?v:fetch})}}return Cr.default=l,Cr}var wg;function s_(){if(wg)return ft;wg=1;var r=ft&&ft.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(ft,"__esModule",{value:!0}),ft.PostgrestError=ft.PostgrestBuilder=ft.PostgrestTransformBuilder=ft.PostgrestFilterBuilder=ft.PostgrestQueryBuilder=ft.PostgrestClient=void 0;const a=r(i_());ft.PostgrestClient=a.default;const s=r(Fv());ft.PostgrestQueryBuilder=s.default;const l=r(qd());ft.PostgrestFilterBuilder=l.default;const o=r(Jv());ft.PostgrestTransformBuilder=o.default;const c=r(Zv());ft.PostgrestBuilder=c.default;const h=r(Iv());return ft.PostgrestError=h.default,ft.default={PostgrestClient:a.default,PostgrestQueryBuilder:s.default,PostgrestFilterBuilder:l.default,PostgrestTransformBuilder:o.default,PostgrestBuilder:c.default,PostgrestError:h.default},ft}var l_=s_();const o_=_d(l_),{PostgrestClient:u_,PostgrestQueryBuilder:AE,PostgrestFilterBuilder:kE,PostgrestTransformBuilder:OE,PostgrestBuilder:zE,PostgrestError:CE}=o_;class c_{static detectEnvironment(){var a;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((a=navigator.userAgent)===null||a===void 0)&&a.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"&&process.versions&&process.versions.node){const s=parseInt(process.versions.node.split(".")[0]);return s>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${s} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${s} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const a=this.detectEnvironment();if(a.constructor)return a.constructor;let s=a.error||"WebSocket not supported in this environment.";throw a.workaround&&(s+=`

Suggested solution: ${a.workaround}`),new Error(s)}static createWebSocket(a,s){const l=this.getWebSocketConstructor();return new l(a,s)}static isWebSocketSupported(){try{const a=this.detectEnvironment();return a.type==="native"||a.type==="ws"}catch{return!1}}}const d_="2.15.4",f_=`realtime-js/${d_}`,h_="1.0.0",fd=1e4,m_=1e3,p_=100;var os;(function(r){r[r.connecting=0]="connecting",r[r.open=1]="open",r[r.closing=2]="closing",r[r.closed=3]="closed"})(os||(os={}));var at;(function(r){r.closed="closed",r.errored="errored",r.joined="joined",r.joining="joining",r.leaving="leaving"})(at||(at={}));var rn;(function(r){r.close="phx_close",r.error="phx_error",r.join="phx_join",r.reply="phx_reply",r.leave="phx_leave",r.access_token="access_token"})(rn||(rn={}));var hd;(function(r){r.websocket="websocket"})(hd||(hd={}));var La;(function(r){r.Connecting="connecting",r.Open="open",r.Closing="closing",r.Closed="closed"})(La||(La={}));class g_{constructor(){this.HEADER_LENGTH=1}decode(a,s){return a.constructor===ArrayBuffer?s(this._binaryDecode(a)):s(typeof a=="string"?JSON.parse(a):{})}_binaryDecode(a){const s=new DataView(a),l=new TextDecoder;return this._decodeBroadcast(a,s,l)}_decodeBroadcast(a,s,l){const o=s.getUint8(1),c=s.getUint8(2);let h=this.HEADER_LENGTH+2;const m=l.decode(a.slice(h,h+o));h=h+o;const p=l.decode(a.slice(h,h+c));h=h+c;const g=JSON.parse(l.decode(a.slice(h,a.byteLength)));return{ref:null,topic:m,event:p,payload:g}}}class Wv{constructor(a,s){this.callback=a,this.timerCalc=s,this.timer=void 0,this.tries=0,this.callback=a,this.timerCalc=s}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var $e;(function(r){r.abstime="abstime",r.bool="bool",r.date="date",r.daterange="daterange",r.float4="float4",r.float8="float8",r.int2="int2",r.int4="int4",r.int4range="int4range",r.int8="int8",r.int8range="int8range",r.json="json",r.jsonb="jsonb",r.money="money",r.numeric="numeric",r.oid="oid",r.reltime="reltime",r.text="text",r.time="time",r.timestamp="timestamp",r.timestamptz="timestamptz",r.timetz="timetz",r.tsrange="tsrange",r.tstzrange="tstzrange"})($e||($e={}));const xg=(r,a,s={})=>{var l;const o=(l=s.skipTypes)!==null&&l!==void 0?l:[];return Object.keys(a).reduce((c,h)=>(c[h]=v_(h,r,a,o),c),{})},v_=(r,a,s,l)=>{const o=a.find(m=>m.name===r),c=o?.type,h=s[r];return c&&!l.includes(c)?e0(c,h):md(h)},e0=(r,a)=>{if(r.charAt(0)==="_"){const s=r.slice(1,r.length);return x_(a,s)}switch(r){case $e.bool:return y_(a);case $e.float4:case $e.float8:case $e.int2:case $e.int4:case $e.int8:case $e.numeric:case $e.oid:return b_(a);case $e.json:case $e.jsonb:return w_(a);case $e.timestamp:return __(a);case $e.abstime:case $e.date:case $e.daterange:case $e.int4range:case $e.int8range:case $e.money:case $e.reltime:case $e.text:case $e.time:case $e.timestamptz:case $e.timetz:case $e.tsrange:case $e.tstzrange:return md(a);default:return md(a)}},md=r=>r,y_=r=>{switch(r){case"t":return!0;case"f":return!1;default:return r}},b_=r=>{if(typeof r=="string"){const a=parseFloat(r);if(!Number.isNaN(a))return a}return r},w_=r=>{if(typeof r=="string")try{return JSON.parse(r)}catch(a){return console.log(`JSON parse error: ${a}`),r}return r},x_=(r,a)=>{if(typeof r!="string")return r;const s=r.length-1,l=r[s];if(r[0]==="{"&&l==="}"){let c;const h=r.slice(1,s);try{c=JSON.parse("["+h+"]")}catch{c=h?h.split(","):[]}return c.map(m=>e0(a,m))}return r},__=r=>typeof r=="string"?r.replace(" ","T"):r,t0=r=>{let a=r;return a=a.replace(/^ws/i,"http"),a=a.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),a.replace(/\/+$/,"")+"/api/broadcast"};class Yc{constructor(a,s,l={},o=fd){this.channel=a,this.event=s,this.payload=l,this.timeout=o,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(a){this.timeout=a,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(a){this.payload=Object.assign(Object.assign({},this.payload),a)}receive(a,s){var l;return this._hasReceived(a)&&s((l=this.receivedResp)===null||l===void 0?void 0:l.response),this.recHooks.push({status:a,callback:s}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const a=s=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=s,this._matchReceive(s)};this.channel._on(this.refEvent,{},a),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(a,s){this.refEvent&&this.channel._trigger(this.refEvent,{status:a,response:s})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:a,response:s}){this.recHooks.filter(l=>l.status===a).forEach(l=>l.callback(s))}_hasReceived(a){return this.receivedResp&&this.receivedResp.status===a}}var _g;(function(r){r.SYNC="sync",r.JOIN="join",r.LEAVE="leave"})(_g||(_g={}));class us{constructor(a,s){this.channel=a,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const l=s?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(l.state,{},o=>{const{onJoin:c,onLeave:h,onSync:m}=this.caller;this.joinRef=this.channel._joinRef(),this.state=us.syncState(this.state,o,c,h),this.pendingDiffs.forEach(p=>{this.state=us.syncDiff(this.state,p,c,h)}),this.pendingDiffs=[],m()}),this.channel._on(l.diff,{},o=>{const{onJoin:c,onLeave:h,onSync:m}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=us.syncDiff(this.state,o,c,h),m())}),this.onJoin((o,c,h)=>{this.channel._trigger("presence",{event:"join",key:o,currentPresences:c,newPresences:h})}),this.onLeave((o,c,h)=>{this.channel._trigger("presence",{event:"leave",key:o,currentPresences:c,leftPresences:h})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(a,s,l,o){const c=this.cloneDeep(a),h=this.transformState(s),m={},p={};return this.map(c,(g,v)=>{h[g]||(p[g]=v)}),this.map(h,(g,v)=>{const b=c[g];if(b){const x=v.map(z=>z.presence_ref),_=b.map(z=>z.presence_ref),S=v.filter(z=>_.indexOf(z.presence_ref)<0),k=b.filter(z=>x.indexOf(z.presence_ref)<0);S.length>0&&(m[g]=S),k.length>0&&(p[g]=k)}else m[g]=v}),this.syncDiff(c,{joins:m,leaves:p},l,o)}static syncDiff(a,s,l,o){const{joins:c,leaves:h}={joins:this.transformState(s.joins),leaves:this.transformState(s.leaves)};return l||(l=()=>{}),o||(o=()=>{}),this.map(c,(m,p)=>{var g;const v=(g=a[m])!==null&&g!==void 0?g:[];if(a[m]=this.cloneDeep(p),v.length>0){const b=a[m].map(_=>_.presence_ref),x=v.filter(_=>b.indexOf(_.presence_ref)<0);a[m].unshift(...x)}l(m,v,p)}),this.map(h,(m,p)=>{let g=a[m];if(!g)return;const v=p.map(b=>b.presence_ref);g=g.filter(b=>v.indexOf(b.presence_ref)<0),a[m]=g,o(m,g,p),g.length===0&&delete a[m]}),a}static map(a,s){return Object.getOwnPropertyNames(a).map(l=>s(l,a[l]))}static transformState(a){return a=this.cloneDeep(a),Object.getOwnPropertyNames(a).reduce((s,l)=>{const o=a[l];return"metas"in o?s[l]=o.metas.map(c=>(c.presence_ref=c.phx_ref,delete c.phx_ref,delete c.phx_ref_prev,c)):s[l]=o,s},{})}static cloneDeep(a){return JSON.parse(JSON.stringify(a))}onJoin(a){this.caller.onJoin=a}onLeave(a){this.caller.onLeave=a}onSync(a){this.caller.onSync=a}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Sg;(function(r){r.ALL="*",r.INSERT="INSERT",r.UPDATE="UPDATE",r.DELETE="DELETE"})(Sg||(Sg={}));var cs;(function(r){r.BROADCAST="broadcast",r.PRESENCE="presence",r.POSTGRES_CHANGES="postgres_changes",r.SYSTEM="system"})(cs||(cs={}));var qn;(function(r){r.SUBSCRIBED="SUBSCRIBED",r.TIMED_OUT="TIMED_OUT",r.CLOSED="CLOSED",r.CHANNEL_ERROR="CHANNEL_ERROR"})(qn||(qn={}));class Ld{constructor(a,s={config:{}},l){this.topic=a,this.params=s,this.socket=l,this.bindings={},this.state=at.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=a.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},s.config),this.timeout=this.socket.timeout,this.joinPush=new Yc(this,rn.join,this.params,this.timeout),this.rejoinTimer=new Wv(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=at.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=at.closed,this.socket._remove(this)}),this._onError(o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=at.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=at.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=at.errored,this.rejoinTimer.scheduleTimeout())}),this._on(rn.reply,{},(o,c)=>{this._trigger(this._replyEventName(c),o)}),this.presence=new us(this),this.broadcastEndpointURL=t0(this.socket.endPoint),this.private=this.params.config.private||!1}subscribe(a,s=this.timeout){var l,o,c;if(this.socket.isConnected()||this.socket.connect(),this.state==at.closed){const{config:{broadcast:h,presence:m,private:p}}=this.params,g=(o=(l=this.bindings.postgres_changes)===null||l===void 0?void 0:l.map(_=>_.filter))!==null&&o!==void 0?o:[],v=!!this.bindings[cs.PRESENCE]&&this.bindings[cs.PRESENCE].length>0||((c=this.params.config.presence)===null||c===void 0?void 0:c.enabled)===!0,b={},x={broadcast:h,presence:Object.assign(Object.assign({},m),{enabled:v}),postgres_changes:g,private:p};this.socket.accessTokenValue&&(b.access_token=this.socket.accessTokenValue),this._onError(_=>a?.(qn.CHANNEL_ERROR,_)),this._onClose(()=>a?.(qn.CLOSED)),this.updateJoinPayload(Object.assign({config:x},b)),this.joinedOnce=!0,this._rejoin(s),this.joinPush.receive("ok",async({postgres_changes:_})=>{var S;if(this.socket.setAuth(),_===void 0){a?.(qn.SUBSCRIBED);return}else{const k=this.bindings.postgres_changes,z=(S=k?.length)!==null&&S!==void 0?S:0,B=[];for(let M=0;M<z;M++){const N=k[M],{filter:{event:G,schema:Q,table:V,filter:J}}=N,re=_&&_[M];if(re&&re.event===G&&re.schema===Q&&re.table===V&&re.filter===J)B.push(Object.assign(Object.assign({},N),{id:re.id}));else{this.unsubscribe(),this.state=at.errored,a?.(qn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=B,a&&a(qn.SUBSCRIBED);return}}).receive("error",_=>{this.state=at.errored,a?.(qn.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(_).join(", ")||"error")))}).receive("timeout",()=>{a?.(qn.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(a,s={}){return await this.send({type:"presence",event:"track",payload:a},s.timeout||this.timeout)}async untrack(a={}){return await this.send({type:"presence",event:"untrack"},a)}on(a,s,l){return this.state===at.joined&&a===cs.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(a,s,l)}async send(a,s={}){var l,o;if(!this._canPush()&&a.type==="broadcast"){const{event:c,payload:h}=a,p={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:c,payload:h,private:this.private}]})};try{const g=await this._fetchWithTimeout(this.broadcastEndpointURL,p,(l=s.timeout)!==null&&l!==void 0?l:this.timeout);return await((o=g.body)===null||o===void 0?void 0:o.cancel()),g.ok?"ok":"error"}catch(g){return g.name==="AbortError"?"timed out":"error"}}else return new Promise(c=>{var h,m,p;const g=this._push(a.type,a,s.timeout||this.timeout);a.type==="broadcast"&&!(!((p=(m=(h=this.params)===null||h===void 0?void 0:h.config)===null||m===void 0?void 0:m.broadcast)===null||p===void 0)&&p.ack)&&c("ok"),g.receive("ok",()=>c("ok")),g.receive("error",()=>c("error")),g.receive("timeout",()=>c("timed out"))})}updateJoinPayload(a){this.joinPush.updatePayload(a)}unsubscribe(a=this.timeout){this.state=at.leaving;const s=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(rn.close,"leave",this._joinRef())};this.joinPush.destroy();let l=null;return new Promise(o=>{l=new Yc(this,rn.leave,{},a),l.receive("ok",()=>{s(),o("ok")}).receive("timeout",()=>{s(),o("timed out")}).receive("error",()=>{o("error")}),l.send(),this._canPush()||l.trigger("ok",{})}).finally(()=>{l?.destroy()})}teardown(){this.pushBuffer.forEach(a=>a.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=at.closed,this.bindings={}}async _fetchWithTimeout(a,s,l){const o=new AbortController,c=setTimeout(()=>o.abort(),l),h=await this.socket.fetch(a,Object.assign(Object.assign({},s),{signal:o.signal}));return clearTimeout(c),h}_push(a,s,l=this.timeout){if(!this.joinedOnce)throw`tried to push '${a}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let o=new Yc(this,a,s,l);return this._canPush()?o.send():this._addToPushBuffer(o),o}_addToPushBuffer(a){if(a.startTimeout(),this.pushBuffer.push(a),this.pushBuffer.length>p_){const s=this.pushBuffer.shift();s&&(s.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${s.event}`,s.payload))}}_onMessage(a,s,l){return s}_isMember(a){return this.topic===a}_joinRef(){return this.joinPush.ref}_trigger(a,s,l){var o,c;const h=a.toLocaleLowerCase(),{close:m,error:p,leave:g,join:v}=rn;if(l&&[m,p,g,v].indexOf(h)>=0&&l!==this._joinRef())return;let x=this._onMessage(h,s,l);if(s&&!x)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(h)?(o=this.bindings.postgres_changes)===null||o===void 0||o.filter(_=>{var S,k,z;return((S=_.filter)===null||S===void 0?void 0:S.event)==="*"||((z=(k=_.filter)===null||k===void 0?void 0:k.event)===null||z===void 0?void 0:z.toLocaleLowerCase())===h}).map(_=>_.callback(x,l)):(c=this.bindings[h])===null||c===void 0||c.filter(_=>{var S,k,z,B,M,N;if(["broadcast","presence","postgres_changes"].includes(h))if("id"in _){const G=_.id,Q=(S=_.filter)===null||S===void 0?void 0:S.event;return G&&((k=s.ids)===null||k===void 0?void 0:k.includes(G))&&(Q==="*"||Q?.toLocaleLowerCase()===((z=s.data)===null||z===void 0?void 0:z.type.toLocaleLowerCase()))}else{const G=(M=(B=_?.filter)===null||B===void 0?void 0:B.event)===null||M===void 0?void 0:M.toLocaleLowerCase();return G==="*"||G===((N=s?.event)===null||N===void 0?void 0:N.toLocaleLowerCase())}else return _.type.toLocaleLowerCase()===h}).map(_=>{if(typeof x=="object"&&"ids"in x){const S=x.data,{schema:k,table:z,commit_timestamp:B,type:M,errors:N}=S;x=Object.assign(Object.assign({},{schema:k,table:z,commit_timestamp:B,eventType:M,new:{},old:{},errors:N}),this._getPayloadRecords(S))}_.callback(x,l)})}_isClosed(){return this.state===at.closed}_isJoined(){return this.state===at.joined}_isJoining(){return this.state===at.joining}_isLeaving(){return this.state===at.leaving}_replyEventName(a){return`chan_reply_${a}`}_on(a,s,l){const o=a.toLocaleLowerCase(),c={type:o,filter:s,callback:l};return this.bindings[o]?this.bindings[o].push(c):this.bindings[o]=[c],this}_off(a,s){const l=a.toLocaleLowerCase();return this.bindings[l]&&(this.bindings[l]=this.bindings[l].filter(o=>{var c;return!(((c=o.type)===null||c===void 0?void 0:c.toLocaleLowerCase())===l&&Ld.isEqual(o.filter,s))})),this}static isEqual(a,s){if(Object.keys(a).length!==Object.keys(s).length)return!1;for(const l in a)if(a[l]!==s[l])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(a){this._on(rn.close,{},a)}_onError(a){this._on(rn.error,{},s=>a(s))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(a=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=at.joining,this.joinPush.resend(a))}_getPayloadRecords(a){const s={new:{},old:{}};return(a.type==="INSERT"||a.type==="UPDATE")&&(s.new=xg(a.columns,a.record)),(a.type==="UPDATE"||a.type==="DELETE")&&(s.old=xg(a.columns,a.old_record)),s}}const Pc=()=>{},Bl={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},S_=[1e3,2e3,5e3,1e4],j_=1e4,E_=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class T_{constructor(a,s){var l;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=fd,this.transport=null,this.heartbeatIntervalMs=Bl.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=Pc,this.ref=0,this.reconnectTimer=null,this.logger=Pc,this.conn=null,this.sendBuffer=[],this.serializer=new g_,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=o=>{let c;return o?c=o:typeof fetch>"u"?c=(...h)=>bs(async()=>{const{default:m}=await Promise.resolve().then(()=>ni);return{default:m}},void 0).then(({default:m})=>m(...h)).catch(m=>{throw new Error(`Failed to load @supabase/node-fetch: ${m.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):c=fetch,(...h)=>c(...h)},!(!((l=s?.params)===null||l===void 0)&&l.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=s.params.apikey,this.endPoint=`${a}/${hd.websocket}`,this.httpEndpoint=t0(a),this._initializeOptions(s),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(s?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=c_.createWebSocket(this.endpointURL())}catch(a){this._setConnectionState("disconnected");const s=a.message;throw s.includes("Node.js")?new Error(`${s}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${s}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:h_}))}disconnect(a,s){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const l=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(l),this._setConnectionState("disconnected")},a?this.conn.close(a,s??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(a){const s=await a.unsubscribe();return this.channels.length===0&&this.disconnect(),s}async removeAllChannels(){const a=await Promise.all(this.channels.map(s=>s.unsubscribe()));return this.channels=[],this.disconnect(),a}log(a,s,l){this.logger(a,s,l)}connectionState(){switch(this.conn&&this.conn.readyState){case os.connecting:return La.Connecting;case os.open:return La.Open;case os.closing:return La.Closing;default:return La.Closed}}isConnected(){return this.connectionState()===La.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(a,s={config:{}}){const l=`realtime:${a}`,o=this.getChannels().find(c=>c.topic===l);if(o)return o;{const c=new Ld(`realtime:${a}`,s,this);return this.channels.push(c),c}}push(a){const{topic:s,event:l,payload:o,ref:c}=a,h=()=>{this.encode(a,m=>{var p;(p=this.conn)===null||p===void 0||p.send(m)})};this.log("push",`${s} ${l} (${c})`,o),this.isConnected()?h():this.sendBuffer.push(h)}async setAuth(a=null){this._authPromise=this._performAuth(a);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var a;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(s){this.log("error","error in heartbeat callback",s)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(s){this.log("error","error in heartbeat callback",s)}this._wasManualDisconnect=!1,(a=this.conn)===null||a===void 0||a.close(m_,"heartbeat timeout"),setTimeout(()=>{var s;this.isConnected()||(s=this.reconnectTimer)===null||s===void 0||s.scheduleTimeout()},Bl.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(s){this.log("error","error in heartbeat callback",s)}this._setAuthSafely("heartbeat")}onHeartbeat(a){this.heartbeatCallback=a}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(a=>a()),this.sendBuffer=[])}_makeRef(){let a=this.ref+1;return a===this.ref?this.ref=0:this.ref=a,this.ref.toString()}_leaveOpenTopic(a){let s=this.channels.find(l=>l.topic===a&&(l._isJoined()||l._isJoining()));s&&(this.log("transport",`leaving duplicate topic "${a}"`),s.unsubscribe())}_remove(a){this.channels=this.channels.filter(s=>s.topic!==a.topic)}_onConnMessage(a){this.decode(a.data,s=>{if(s.topic==="phoenix"&&s.event==="phx_reply")try{this.heartbeatCallback(s.payload.status==="ok"?"ok":"error")}catch(g){this.log("error","error in heartbeat callback",g)}s.ref&&s.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:l,event:o,payload:c,ref:h}=s,m=h?`(${h})`:"",p=c.status||"";this.log("receive",`${p} ${l} ${o} ${m}`.trim(),c),this.channels.filter(g=>g._isMember(l)).forEach(g=>g._trigger(o,c,h)),this._triggerStateCallbacks("message",s)})}_clearTimer(a){var s;a==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):a==="reconnect"&&((s=this.reconnectTimer)===null||s===void 0||s.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=a=>this._onConnError(a),this.conn.onmessage=a=>this._onConnMessage(a),this.conn.onclose=a=>this._onConnClose(a))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(a=>a.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const a=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(a),this.workerRef.onerror=s=>{this.log("worker","worker error",s.message),this.workerRef.terminate()},this.workerRef.onmessage=s=>{s.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(a){var s;this._setConnectionState("disconnected"),this.log("transport","close",a),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(s=this.reconnectTimer)===null||s===void 0||s.scheduleTimeout(),this._triggerStateCallbacks("close",a)}_onConnError(a){this._setConnectionState("disconnected"),this.log("transport",`${a}`),this._triggerChanError(),this._triggerStateCallbacks("error",a)}_triggerChanError(){this.channels.forEach(a=>a._trigger(rn.error))}_appendParams(a,s){if(Object.keys(s).length===0)return a;const l=a.match(/\?/)?"&":"?",o=new URLSearchParams(s);return`${a}${l}${o}`}_workerObjectUrl(a){let s;if(a)s=a;else{const l=new Blob([E_],{type:"application/javascript"});s=URL.createObjectURL(l)}return s}_setConnectionState(a,s=!1){this._connectionState=a,a==="connecting"?this._wasManualDisconnect=!1:a==="disconnecting"&&(this._wasManualDisconnect=s)}async _performAuth(a=null){let s;a?s=a:this.accessToken?s=await this.accessToken():s=this.accessTokenValue,this.accessTokenValue!=s&&(this.accessTokenValue=s,this.channels.forEach(l=>{const o={access_token:s,version:f_};s&&l.updateJoinPayload(o),l.joinedOnce&&l._isJoined()&&l._push(rn.access_token,{access_token:s})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(a="general"){this.setAuth().catch(s=>{this.log("error",`error setting auth in ${a}`,s)})}_triggerStateCallbacks(a,s){try{this.stateChangeCallbacks[a].forEach(l=>{try{l(s)}catch(o){this.log("error",`error in ${a} callback`,o)}})}catch(l){this.log("error",`error triggering ${a} callbacks`,l)}}_setupReconnectionTimer(){this.reconnectTimer=new Wv(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},Bl.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(a){var s,l,o,c,h,m,p,g,v;if(this.transport=(s=a?.transport)!==null&&s!==void 0?s:null,this.timeout=(l=a?.timeout)!==null&&l!==void 0?l:fd,this.heartbeatIntervalMs=(o=a?.heartbeatIntervalMs)!==null&&o!==void 0?o:Bl.HEARTBEAT_INTERVAL,this.worker=(c=a?.worker)!==null&&c!==void 0?c:!1,this.accessToken=(h=a?.accessToken)!==null&&h!==void 0?h:null,this.heartbeatCallback=(m=a?.heartbeatCallback)!==null&&m!==void 0?m:Pc,a?.params&&(this.params=a.params),a?.logger&&(this.logger=a.logger),(a?.logLevel||a?.log_level)&&(this.logLevel=a.logLevel||a.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(p=a?.reconnectAfterMs)!==null&&p!==void 0?p:(b=>S_[b-1]||j_),this.encode=(g=a?.encode)!==null&&g!==void 0?g:((b,x)=>x(JSON.stringify(b))),this.decode=(v=a?.decode)!==null&&v!==void 0?v:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=a?.workerUrl}}}class Bd extends Error{constructor(a){super(a),this.__isStorageError=!0,this.name="StorageError"}}function rt(r){return typeof r=="object"&&r!==null&&"__isStorageError"in r}class A_ extends Bd{constructor(a,s,l){super(a),this.name="StorageApiError",this.status=s,this.statusCode=l}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class pd extends Bd{constructor(a,s){super(a),this.name="StorageUnknownError",this.originalError=s}}var k_=function(r,a,s,l){function o(c){return c instanceof s?c:new s(function(h){h(c)})}return new(s||(s=Promise))(function(c,h){function m(v){try{g(l.next(v))}catch(b){h(b)}}function p(v){try{g(l.throw(v))}catch(b){h(b)}}function g(v){v.done?c(v.value):o(v.value).then(m,p)}g((l=l.apply(r,a||[])).next())})};const n0=r=>{let a;return r?a=r:typeof fetch>"u"?a=(...s)=>bs(async()=>{const{default:l}=await Promise.resolve().then(()=>ni);return{default:l}},void 0).then(({default:l})=>l(...s)):a=fetch,(...s)=>a(...s)},O_=()=>k_(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield bs(()=>Promise.resolve().then(()=>ni),void 0)).Response:Response}),gd=r=>{if(Array.isArray(r))return r.map(s=>gd(s));if(typeof r=="function"||r!==Object(r))return r;const a={};return Object.entries(r).forEach(([s,l])=>{const o=s.replace(/([-_][a-z])/gi,c=>c.toUpperCase().replace(/[-_]/g,""));a[o]=gd(l)}),a},z_=r=>{if(typeof r!="object"||r===null)return!1;const a=Object.getPrototypeOf(r);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)};var Ga=function(r,a,s,l){function o(c){return c instanceof s?c:new s(function(h){h(c)})}return new(s||(s=Promise))(function(c,h){function m(v){try{g(l.next(v))}catch(b){h(b)}}function p(v){try{g(l.throw(v))}catch(b){h(b)}}function g(v){v.done?c(v.value):o(v.value).then(m,p)}g((l=l.apply(r,a||[])).next())})};const Qc=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),C_=(r,a,s)=>Ga(void 0,void 0,void 0,function*(){const l=yield O_();r instanceof l&&!s?.noResolveJson?r.json().then(o=>{const c=r.status||500,h=o?.statusCode||c+"";a(new A_(Qc(o),c,h))}).catch(o=>{a(new pd(Qc(o),o))}):a(new pd(Qc(r),r))}),R_=(r,a,s,l)=>{const o={method:r,headers:a?.headers||{}};return r==="GET"||!l?o:(z_(l)?(o.headers=Object.assign({"Content-Type":"application/json"},a?.headers),o.body=JSON.stringify(l)):o.body=l,a?.duplex&&(o.duplex=a.duplex),Object.assign(Object.assign({},o),s))};function ws(r,a,s,l,o,c){return Ga(this,void 0,void 0,function*(){return new Promise((h,m)=>{r(s,R_(a,l,o,c)).then(p=>{if(!p.ok)throw p;return l?.noResolveJson?p:p.json()}).then(p=>h(p)).catch(p=>C_(p,m,l))})})}function lo(r,a,s,l){return Ga(this,void 0,void 0,function*(){return ws(r,"GET",a,s,l)})}function pn(r,a,s,l,o){return Ga(this,void 0,void 0,function*(){return ws(r,"POST",a,l,o,s)})}function vd(r,a,s,l,o){return Ga(this,void 0,void 0,function*(){return ws(r,"PUT",a,l,o,s)})}function D_(r,a,s,l){return Ga(this,void 0,void 0,function*(){return ws(r,"HEAD",a,Object.assign(Object.assign({},s),{noResolveJson:!0}),l)})}function a0(r,a,s,l,o){return Ga(this,void 0,void 0,function*(){return ws(r,"DELETE",a,l,o,s)})}var Tt=function(r,a,s,l){function o(c){return c instanceof s?c:new s(function(h){h(c)})}return new(s||(s=Promise))(function(c,h){function m(v){try{g(l.next(v))}catch(b){h(b)}}function p(v){try{g(l.throw(v))}catch(b){h(b)}}function g(v){v.done?c(v.value):o(v.value).then(m,p)}g((l=l.apply(r,a||[])).next())})};const M_={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},jg={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class U_{constructor(a,s={},l,o){this.url=a,this.headers=s,this.bucketId=l,this.fetch=n0(o)}uploadOrUpdate(a,s,l,o){return Tt(this,void 0,void 0,function*(){try{let c;const h=Object.assign(Object.assign({},jg),o);let m=Object.assign(Object.assign({},this.headers),a==="POST"&&{"x-upsert":String(h.upsert)});const p=h.metadata;typeof Blob<"u"&&l instanceof Blob?(c=new FormData,c.append("cacheControl",h.cacheControl),p&&c.append("metadata",this.encodeMetadata(p)),c.append("",l)):typeof FormData<"u"&&l instanceof FormData?(c=l,c.append("cacheControl",h.cacheControl),p&&c.append("metadata",this.encodeMetadata(p))):(c=l,m["cache-control"]=`max-age=${h.cacheControl}`,m["content-type"]=h.contentType,p&&(m["x-metadata"]=this.toBase64(this.encodeMetadata(p)))),o?.headers&&(m=Object.assign(Object.assign({},m),o.headers));const g=this._removeEmptyFolders(s),v=this._getFinalPath(g),b=yield(a=="PUT"?vd:pn)(this.fetch,`${this.url}/object/${v}`,c,Object.assign({headers:m},h?.duplex?{duplex:h.duplex}:{}));return{data:{path:g,id:b.Id,fullPath:b.Key},error:null}}catch(c){if(rt(c))return{data:null,error:c};throw c}})}upload(a,s,l){return Tt(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",a,s,l)})}uploadToSignedUrl(a,s,l,o){return Tt(this,void 0,void 0,function*(){const c=this._removeEmptyFolders(a),h=this._getFinalPath(c),m=new URL(this.url+`/object/upload/sign/${h}`);m.searchParams.set("token",s);try{let p;const g=Object.assign({upsert:jg.upsert},o),v=Object.assign(Object.assign({},this.headers),{"x-upsert":String(g.upsert)});typeof Blob<"u"&&l instanceof Blob?(p=new FormData,p.append("cacheControl",g.cacheControl),p.append("",l)):typeof FormData<"u"&&l instanceof FormData?(p=l,p.append("cacheControl",g.cacheControl)):(p=l,v["cache-control"]=`max-age=${g.cacheControl}`,v["content-type"]=g.contentType);const b=yield vd(this.fetch,m.toString(),p,{headers:v});return{data:{path:c,fullPath:b.Key},error:null}}catch(p){if(rt(p))return{data:null,error:p};throw p}})}createSignedUploadUrl(a,s){return Tt(this,void 0,void 0,function*(){try{let l=this._getFinalPath(a);const o=Object.assign({},this.headers);s?.upsert&&(o["x-upsert"]="true");const c=yield pn(this.fetch,`${this.url}/object/upload/sign/${l}`,{},{headers:o}),h=new URL(this.url+c.url),m=h.searchParams.get("token");if(!m)throw new Bd("No token returned by API");return{data:{signedUrl:h.toString(),path:a,token:m},error:null}}catch(l){if(rt(l))return{data:null,error:l};throw l}})}update(a,s,l){return Tt(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",a,s,l)})}move(a,s,l){return Tt(this,void 0,void 0,function*(){try{return{data:yield pn(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:a,destinationKey:s,destinationBucket:l?.destinationBucket},{headers:this.headers}),error:null}}catch(o){if(rt(o))return{data:null,error:o};throw o}})}copy(a,s,l){return Tt(this,void 0,void 0,function*(){try{return{data:{path:(yield pn(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:a,destinationKey:s,destinationBucket:l?.destinationBucket},{headers:this.headers})).Key},error:null}}catch(o){if(rt(o))return{data:null,error:o};throw o}})}createSignedUrl(a,s,l){return Tt(this,void 0,void 0,function*(){try{let o=this._getFinalPath(a),c=yield pn(this.fetch,`${this.url}/object/sign/${o}`,Object.assign({expiresIn:s},l?.transform?{transform:l.transform}:{}),{headers:this.headers});const h=l?.download?`&download=${l.download===!0?"":l.download}`:"";return c={signedUrl:encodeURI(`${this.url}${c.signedURL}${h}`)},{data:c,error:null}}catch(o){if(rt(o))return{data:null,error:o};throw o}})}createSignedUrls(a,s,l){return Tt(this,void 0,void 0,function*(){try{const o=yield pn(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:s,paths:a},{headers:this.headers}),c=l?.download?`&download=${l.download===!0?"":l.download}`:"";return{data:o.map(h=>Object.assign(Object.assign({},h),{signedUrl:h.signedURL?encodeURI(`${this.url}${h.signedURL}${c}`):null})),error:null}}catch(o){if(rt(o))return{data:null,error:o};throw o}})}download(a,s){return Tt(this,void 0,void 0,function*(){const o=typeof s?.transform<"u"?"render/image/authenticated":"object",c=this.transformOptsToQueryString(s?.transform||{}),h=c?`?${c}`:"";try{const m=this._getFinalPath(a);return{data:yield(yield lo(this.fetch,`${this.url}/${o}/${m}${h}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(m){if(rt(m))return{data:null,error:m};throw m}})}info(a){return Tt(this,void 0,void 0,function*(){const s=this._getFinalPath(a);try{const l=yield lo(this.fetch,`${this.url}/object/info/${s}`,{headers:this.headers});return{data:gd(l),error:null}}catch(l){if(rt(l))return{data:null,error:l};throw l}})}exists(a){return Tt(this,void 0,void 0,function*(){const s=this._getFinalPath(a);try{return yield D_(this.fetch,`${this.url}/object/${s}`,{headers:this.headers}),{data:!0,error:null}}catch(l){if(rt(l)&&l instanceof pd){const o=l.originalError;if([400,404].includes(o?.status))return{data:!1,error:l}}throw l}})}getPublicUrl(a,s){const l=this._getFinalPath(a),o=[],c=s?.download?`download=${s.download===!0?"":s.download}`:"";c!==""&&o.push(c);const m=typeof s?.transform<"u"?"render/image":"object",p=this.transformOptsToQueryString(s?.transform||{});p!==""&&o.push(p);let g=o.join("&");return g!==""&&(g=`?${g}`),{data:{publicUrl:encodeURI(`${this.url}/${m}/public/${l}${g}`)}}}remove(a){return Tt(this,void 0,void 0,function*(){try{return{data:yield a0(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:a},{headers:this.headers}),error:null}}catch(s){if(rt(s))return{data:null,error:s};throw s}})}list(a,s,l){return Tt(this,void 0,void 0,function*(){try{const o=Object.assign(Object.assign(Object.assign({},M_),s),{prefix:a||""});return{data:yield pn(this.fetch,`${this.url}/object/list/${this.bucketId}`,o,{headers:this.headers},l),error:null}}catch(o){if(rt(o))return{data:null,error:o};throw o}})}listV2(a,s){return Tt(this,void 0,void 0,function*(){try{const l=Object.assign({},a);return{data:yield pn(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,l,{headers:this.headers},s),error:null}}catch(l){if(rt(l))return{data:null,error:l};throw l}})}encodeMetadata(a){return JSON.stringify(a)}toBase64(a){return typeof Buffer<"u"?Buffer.from(a).toString("base64"):btoa(a)}_getFinalPath(a){return`${this.bucketId}/${a.replace(/^\/+/,"")}`}_removeEmptyFolders(a){return a.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(a){const s=[];return a.width&&s.push(`width=${a.width}`),a.height&&s.push(`height=${a.height}`),a.resize&&s.push(`resize=${a.resize}`),a.format&&s.push(`format=${a.format}`),a.quality&&s.push(`quality=${a.quality}`),s.join("&")}}const N_="2.11.0",q_={"X-Client-Info":`storage-js/${N_}`};var Nr=function(r,a,s,l){function o(c){return c instanceof s?c:new s(function(h){h(c)})}return new(s||(s=Promise))(function(c,h){function m(v){try{g(l.next(v))}catch(b){h(b)}}function p(v){try{g(l.throw(v))}catch(b){h(b)}}function g(v){v.done?c(v.value):o(v.value).then(m,p)}g((l=l.apply(r,a||[])).next())})};class L_{constructor(a,s={},l,o){const c=new URL(a);o?.useNewHostname&&/supabase\.(co|in|red)$/.test(c.hostname)&&!c.hostname.includes("storage.supabase.")&&(c.hostname=c.hostname.replace("supabase.","storage.supabase.")),this.url=c.href,this.headers=Object.assign(Object.assign({},q_),s),this.fetch=n0(l)}listBuckets(){return Nr(this,void 0,void 0,function*(){try{return{data:yield lo(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(a){if(rt(a))return{data:null,error:a};throw a}})}getBucket(a){return Nr(this,void 0,void 0,function*(){try{return{data:yield lo(this.fetch,`${this.url}/bucket/${a}`,{headers:this.headers}),error:null}}catch(s){if(rt(s))return{data:null,error:s};throw s}})}createBucket(a,s={public:!1}){return Nr(this,void 0,void 0,function*(){try{return{data:yield pn(this.fetch,`${this.url}/bucket`,{id:a,name:a,type:s.type,public:s.public,file_size_limit:s.fileSizeLimit,allowed_mime_types:s.allowedMimeTypes},{headers:this.headers}),error:null}}catch(l){if(rt(l))return{data:null,error:l};throw l}})}updateBucket(a,s){return Nr(this,void 0,void 0,function*(){try{return{data:yield vd(this.fetch,`${this.url}/bucket/${a}`,{id:a,name:a,public:s.public,file_size_limit:s.fileSizeLimit,allowed_mime_types:s.allowedMimeTypes},{headers:this.headers}),error:null}}catch(l){if(rt(l))return{data:null,error:l};throw l}})}emptyBucket(a){return Nr(this,void 0,void 0,function*(){try{return{data:yield pn(this.fetch,`${this.url}/bucket/${a}/empty`,{},{headers:this.headers}),error:null}}catch(s){if(rt(s))return{data:null,error:s};throw s}})}deleteBucket(a){return Nr(this,void 0,void 0,function*(){try{return{data:yield a0(this.fetch,`${this.url}/bucket/${a}`,{},{headers:this.headers}),error:null}}catch(s){if(rt(s))return{data:null,error:s};throw s}})}}class B_ extends L_{constructor(a,s={},l,o){super(a,s,l,o)}from(a){return new U_(this.url,this.headers,a,this.fetch)}}const $_="2.57.0";let ss="";typeof Deno<"u"?ss="deno":typeof document<"u"?ss="web":typeof navigator<"u"&&navigator.product==="ReactNative"?ss="react-native":ss="node";const H_={"X-Client-Info":`supabase-js-${ss}/${$_}`},G_={headers:H_},Y_={schema:"public"},P_={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Q_={};var V_=function(r,a,s,l){function o(c){return c instanceof s?c:new s(function(h){h(c)})}return new(s||(s=Promise))(function(c,h){function m(v){try{g(l.next(v))}catch(b){h(b)}}function p(v){try{g(l.throw(v))}catch(b){h(b)}}function g(v){v.done?c(v.value):o(v.value).then(m,p)}g((l=l.apply(r,a||[])).next())})};const X_=r=>{let a;return r?a=r:typeof fetch>"u"?a=Xv:a=fetch,(...s)=>a(...s)},K_=()=>typeof Headers>"u"?Kv:Headers,I_=(r,a,s)=>{const l=X_(s),o=K_();return(c,h)=>V_(void 0,void 0,void 0,function*(){var m;const p=(m=yield a())!==null&&m!==void 0?m:r;let g=new o(h?.headers);return g.has("apikey")||g.set("apikey",r),g.has("Authorization")||g.set("Authorization",`Bearer ${p}`),l(c,Object.assign(Object.assign({},h),{headers:g}))})};var Z_=function(r,a,s,l){function o(c){return c instanceof s?c:new s(function(h){h(c)})}return new(s||(s=Promise))(function(c,h){function m(v){try{g(l.next(v))}catch(b){h(b)}}function p(v){try{g(l.throw(v))}catch(b){h(b)}}function g(v){v.done?c(v.value):o(v.value).then(m,p)}g((l=l.apply(r,a||[])).next())})};function J_(r){return r.endsWith("/")?r:r+"/"}function F_(r,a){var s,l;const{db:o,auth:c,realtime:h,global:m}=r,{db:p,auth:g,realtime:v,global:b}=a,x={db:Object.assign(Object.assign({},p),o),auth:Object.assign(Object.assign({},g),c),realtime:Object.assign(Object.assign({},v),h),storage:{},global:Object.assign(Object.assign(Object.assign({},b),m),{headers:Object.assign(Object.assign({},(s=b?.headers)!==null&&s!==void 0?s:{}),(l=m?.headers)!==null&&l!==void 0?l:{})}),accessToken:()=>Z_(this,void 0,void 0,function*(){return""})};return r.accessToken?x.accessToken=r.accessToken:delete x.accessToken,x}const r0="2.71.1",Yr=30*1e3,yd=3,Vc=yd*Yr,W_="http://localhost:9999",eS="supabase.auth.token",tS={"X-Client-Info":`gotrue-js/${r0}`},bd="X-Supabase-Api-Version",i0={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},nS=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,aS=600*1e3;class $d extends Error{constructor(a,s,l){super(a),this.__isAuthError=!0,this.name="AuthError",this.status=s,this.code=l}}function fe(r){return typeof r=="object"&&r!==null&&"__isAuthError"in r}class rS extends $d{constructor(a,s,l){super(a,s,l),this.name="AuthApiError",this.status=s,this.code=l}}function iS(r){return fe(r)&&r.name==="AuthApiError"}class s0 extends $d{constructor(a,s){super(a),this.name="AuthUnknownError",this.originalError=s}}class ga extends $d{constructor(a,s,l,o){super(a,l,o),this.name=s,this.status=l}}class fa extends ga{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function sS(r){return fe(r)&&r.name==="AuthSessionMissingError"}class $l extends ga{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Hl extends ga{constructor(a){super(a,"AuthInvalidCredentialsError",400,void 0)}}class Gl extends ga{constructor(a,s=null){super(a,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=s}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function lS(r){return fe(r)&&r.name==="AuthImplicitGrantRedirectError"}class Eg extends ga{constructor(a,s=null){super(a,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=s}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class wd extends ga{constructor(a,s){super(a,"AuthRetryableFetchError",s,void 0)}}function Xc(r){return fe(r)&&r.name==="AuthRetryableFetchError"}class Tg extends ga{constructor(a,s,l){super(a,"AuthWeakPasswordError",s,"weak_password"),this.reasons=l}}class xd extends ga{constructor(a){super(a,"AuthInvalidJwtError",400,"invalid_jwt")}}const oo="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Ag=` 	
\r=`.split(""),oS=(()=>{const r=new Array(128);for(let a=0;a<r.length;a+=1)r[a]=-1;for(let a=0;a<Ag.length;a+=1)r[Ag[a].charCodeAt(0)]=-2;for(let a=0;a<oo.length;a+=1)r[oo[a].charCodeAt(0)]=a;return r})();function kg(r,a,s){if(r!==null)for(a.queue=a.queue<<8|r,a.queuedBits+=8;a.queuedBits>=6;){const l=a.queue>>a.queuedBits-6&63;s(oo[l]),a.queuedBits-=6}else if(a.queuedBits>0)for(a.queue=a.queue<<6-a.queuedBits,a.queuedBits=6;a.queuedBits>=6;){const l=a.queue>>a.queuedBits-6&63;s(oo[l]),a.queuedBits-=6}}function l0(r,a,s){const l=oS[r];if(l>-1)for(a.queue=a.queue<<6|l,a.queuedBits+=6;a.queuedBits>=8;)s(a.queue>>a.queuedBits-8&255),a.queuedBits-=8;else{if(l===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`)}}function Og(r){const a=[],s=h=>{a.push(String.fromCodePoint(h))},l={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},c=h=>{dS(h,l,s)};for(let h=0;h<r.length;h+=1)l0(r.charCodeAt(h),o,c);return a.join("")}function uS(r,a){if(r<=127){a(r);return}else if(r<=2047){a(192|r>>6),a(128|r&63);return}else if(r<=65535){a(224|r>>12),a(128|r>>6&63),a(128|r&63);return}else if(r<=1114111){a(240|r>>18),a(128|r>>12&63),a(128|r>>6&63),a(128|r&63);return}throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`)}function cS(r,a){for(let s=0;s<r.length;s+=1){let l=r.charCodeAt(s);if(l>55295&&l<=56319){const o=(l-55296)*1024&65535;l=(r.charCodeAt(s+1)-56320&65535|o)+65536,s+=1}uS(l,a)}}function dS(r,a,s){if(a.utf8seq===0){if(r<=127){s(r);return}for(let l=1;l<6;l+=1)if((r>>7-l&1)===0){a.utf8seq=l;break}if(a.utf8seq===2)a.codepoint=r&31;else if(a.utf8seq===3)a.codepoint=r&15;else if(a.utf8seq===4)a.codepoint=r&7;else throw new Error("Invalid UTF-8 sequence");a.utf8seq-=1}else if(a.utf8seq>0){if(r<=127)throw new Error("Invalid UTF-8 sequence");a.codepoint=a.codepoint<<6|r&63,a.utf8seq-=1,a.utf8seq===0&&s(a.codepoint)}}function fS(r){const a=[],s={queue:0,queuedBits:0},l=o=>{a.push(o)};for(let o=0;o<r.length;o+=1)l0(r.charCodeAt(o),s,l);return new Uint8Array(a)}function hS(r){const a=[];return cS(r,s=>a.push(s)),new Uint8Array(a)}function mS(r){const a=[],s={queue:0,queuedBits:0},l=o=>{a.push(o)};return r.forEach(o=>kg(o,s,l)),kg(null,s,l),a.join("")}function pS(r){return Math.round(Date.now()/1e3)+r}function gS(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){const a=Math.random()*16|0;return(r=="x"?a:a&3|8).toString(16)})}const an=()=>typeof window<"u"&&typeof document<"u",Ua={tested:!1,writable:!1},o0=()=>{if(!an())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Ua.tested)return Ua.writable;const r=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(r,r),globalThis.localStorage.removeItem(r),Ua.tested=!0,Ua.writable=!0}catch{Ua.tested=!0,Ua.writable=!1}return Ua.writable};function vS(r){const a={},s=new URL(r);if(s.hash&&s.hash[0]==="#")try{new URLSearchParams(s.hash.substring(1)).forEach((o,c)=>{a[c]=o})}catch{}return s.searchParams.forEach((l,o)=>{a[o]=l}),a}const u0=r=>{let a;return r?a=r:typeof fetch>"u"?a=(...s)=>bs(async()=>{const{default:l}=await Promise.resolve().then(()=>ni);return{default:l}},void 0).then(({default:l})=>l(...s)):a=fetch,(...s)=>a(...s)},yS=r=>typeof r=="object"&&r!==null&&"status"in r&&"ok"in r&&"json"in r&&typeof r.json=="function",Pr=async(r,a,s)=>{await r.setItem(a,JSON.stringify(s))},Na=async(r,a)=>{const s=await r.getItem(a);if(!s)return null;try{return JSON.parse(s)}catch{return s}},ca=async(r,a)=>{await r.removeItem(a)};class yo{constructor(){this.promise=new yo.promiseConstructor((a,s)=>{this.resolve=a,this.reject=s})}}yo.promiseConstructor=Promise;function Kc(r){const a=r.split(".");if(a.length!==3)throw new xd("Invalid JWT structure");for(let l=0;l<a.length;l++)if(!nS.test(a[l]))throw new xd("JWT not in base64url format");return{header:JSON.parse(Og(a[0])),payload:JSON.parse(Og(a[1])),signature:fS(a[2]),raw:{header:a[0],payload:a[1]}}}async function bS(r){return await new Promise(a=>{setTimeout(()=>a(null),r)})}function wS(r,a){return new Promise((l,o)=>{(async()=>{for(let c=0;c<1/0;c++)try{const h=await r(c);if(!a(c,null,h)){l(h);return}}catch(h){if(!a(c,h)){o(h);return}}})()})}function xS(r){return("0"+r.toString(16)).substr(-2)}function _S(){const a=new Uint32Array(56);if(typeof crypto>"u"){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",l=s.length;let o="";for(let c=0;c<56;c++)o+=s.charAt(Math.floor(Math.random()*l));return o}return crypto.getRandomValues(a),Array.from(a,xS).join("")}async function SS(r){const s=new TextEncoder().encode(r),l=await crypto.subtle.digest("SHA-256",s),o=new Uint8Array(l);return Array.from(o).map(c=>String.fromCharCode(c)).join("")}async function jS(r){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),r;const s=await SS(r);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function qr(r,a,s=!1){const l=_S();let o=l;s&&(o+="/PASSWORD_RECOVERY"),await Pr(r,`${a}-code-verifier`,o);const c=await jS(l);return[c,l===c?"plain":"s256"]}const ES=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function TS(r){const a=r.headers.get(bd);if(!a||!a.match(ES))return null;try{return new Date(`${a}T00:00:00.0Z`)}catch{return null}}function AS(r){if(!r)throw new Error("Missing exp claim");const a=Math.floor(Date.now()/1e3);if(r<=a)throw new Error("JWT has expired")}function kS(r){switch(r){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const OS=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Lr(r){if(!OS.test(r))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Ic(){const r={};return new Proxy(r,{get:(a,s)=>{if(s==="__isUserNotAvailableProxy")return!0;if(typeof s=="symbol"){const l=s.toString();if(l==="Symbol(Symbol.toPrimitive)"||l==="Symbol(Symbol.toStringTag)"||l==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`)},set:(a,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(a,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function zg(r){return JSON.parse(JSON.stringify(r))}var zS=function(r,a){var s={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&a.indexOf(l)<0&&(s[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(r);o<l.length;o++)a.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(r,l[o])&&(s[l[o]]=r[l[o]]);return s};const qa=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),CS=[502,503,504];async function Cg(r){var a;if(!yS(r))throw new wd(qa(r),0);if(CS.includes(r.status))throw new wd(qa(r),r.status);let s;try{s=await r.json()}catch(c){throw new s0(qa(c),c)}let l;const o=TS(r);if(o&&o.getTime()>=i0["2024-01-01"].timestamp&&typeof s=="object"&&s&&typeof s.code=="string"?l=s.code:typeof s=="object"&&s&&typeof s.error_code=="string"&&(l=s.error_code),l){if(l==="weak_password")throw new Tg(qa(s),r.status,((a=s.weak_password)===null||a===void 0?void 0:a.reasons)||[]);if(l==="session_not_found")throw new fa}else if(typeof s=="object"&&s&&typeof s.weak_password=="object"&&s.weak_password&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.reasons.reduce((c,h)=>c&&typeof h=="string",!0))throw new Tg(qa(s),r.status,s.weak_password.reasons);throw new rS(qa(s),r.status||500,l)}const RS=(r,a,s,l)=>{const o={method:r,headers:a?.headers||{}};return r==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},a?.headers),o.body=JSON.stringify(l),Object.assign(Object.assign({},o),s))};async function xe(r,a,s,l){var o;const c=Object.assign({},l?.headers);c[bd]||(c[bd]=i0["2024-01-01"].name),l?.jwt&&(c.Authorization=`Bearer ${l.jwt}`);const h=(o=l?.query)!==null&&o!==void 0?o:{};l?.redirectTo&&(h.redirect_to=l.redirectTo);const m=Object.keys(h).length?"?"+new URLSearchParams(h).toString():"",p=await DS(r,a,s+m,{headers:c,noResolveJson:l?.noResolveJson},{},l?.body);return l?.xform?l?.xform(p):{data:Object.assign({},p),error:null}}async function DS(r,a,s,l,o,c){const h=RS(a,l,o,c);let m;try{m=await r(s,Object.assign({},h))}catch(p){throw console.error(p),new wd(qa(p),0)}if(m.ok||await Cg(m),l?.noResolveJson)return m;try{return await m.json()}catch(p){await Cg(p)}}function Un(r){var a;let s=null;qS(r)&&(s=Object.assign({},r),r.expires_at||(s.expires_at=pS(r.expires_in)));const l=(a=r.user)!==null&&a!==void 0?a:r;return{data:{session:s,user:l},error:null}}function Rg(r){const a=Un(r);return!a.error&&r.weak_password&&typeof r.weak_password=="object"&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.message&&typeof r.weak_password.message=="string"&&r.weak_password.reasons.reduce((s,l)=>s&&typeof l=="string",!0)&&(a.data.weak_password=r.weak_password),a}function ha(r){var a;return{data:{user:(a=r.user)!==null&&a!==void 0?a:r},error:null}}function MS(r){return{data:r,error:null}}function US(r){const{action_link:a,email_otp:s,hashed_token:l,redirect_to:o,verification_type:c}=r,h=zS(r,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),m={action_link:a,email_otp:s,hashed_token:l,redirect_to:o,verification_type:c},p=Object.assign({},h);return{data:{properties:m,user:p},error:null}}function NS(r){return r}function qS(r){return r.access_token&&r.refresh_token&&r.expires_in}const Zc=["global","local","others"];var LS=function(r,a){var s={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&a.indexOf(l)<0&&(s[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(r);o<l.length;o++)a.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(r,l[o])&&(s[l[o]]=r[l[o]]);return s};class BS{constructor({url:a="",headers:s={},fetch:l}){this.url=a,this.headers=s,this.fetch=u0(l),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(a,s=Zc[0]){if(Zc.indexOf(s)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Zc.join(", ")}`);try{return await xe(this.fetch,"POST",`${this.url}/logout?scope=${s}`,{headers:this.headers,jwt:a,noResolveJson:!0}),{data:null,error:null}}catch(l){if(fe(l))return{data:null,error:l};throw l}}async inviteUserByEmail(a,s={}){try{return await xe(this.fetch,"POST",`${this.url}/invite`,{body:{email:a,data:s.data},headers:this.headers,redirectTo:s.redirectTo,xform:ha})}catch(l){if(fe(l))return{data:{user:null},error:l};throw l}}async generateLink(a){try{const{options:s}=a,l=LS(a,["options"]),o=Object.assign(Object.assign({},l),s);return"newEmail"in l&&(o.new_email=l?.newEmail,delete o.newEmail),await xe(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:US,redirectTo:s?.redirectTo})}catch(s){if(fe(s))return{data:{properties:null,user:null},error:s};throw s}}async createUser(a){try{return await xe(this.fetch,"POST",`${this.url}/admin/users`,{body:a,headers:this.headers,xform:ha})}catch(s){if(fe(s))return{data:{user:null},error:s};throw s}}async listUsers(a){var s,l,o,c,h,m,p;try{const g={nextPage:null,lastPage:0,total:0},v=await xe(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(s=a?.page)===null||s===void 0?void 0:s.toString())!==null&&l!==void 0?l:"",per_page:(c=(o=a?.perPage)===null||o===void 0?void 0:o.toString())!==null&&c!==void 0?c:""},xform:NS});if(v.error)throw v.error;const b=await v.json(),x=(h=v.headers.get("x-total-count"))!==null&&h!==void 0?h:0,_=(p=(m=v.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&p!==void 0?p:[];return _.length>0&&(_.forEach(S=>{const k=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),z=JSON.parse(S.split(";")[1].split("=")[1]);g[`${z}Page`]=k}),g.total=parseInt(x)),{data:Object.assign(Object.assign({},b),g),error:null}}catch(g){if(fe(g))return{data:{users:[]},error:g};throw g}}async getUserById(a){Lr(a);try{return await xe(this.fetch,"GET",`${this.url}/admin/users/${a}`,{headers:this.headers,xform:ha})}catch(s){if(fe(s))return{data:{user:null},error:s};throw s}}async updateUserById(a,s){Lr(a);try{return await xe(this.fetch,"PUT",`${this.url}/admin/users/${a}`,{body:s,headers:this.headers,xform:ha})}catch(l){if(fe(l))return{data:{user:null},error:l};throw l}}async deleteUser(a,s=!1){Lr(a);try{return await xe(this.fetch,"DELETE",`${this.url}/admin/users/${a}`,{headers:this.headers,body:{should_soft_delete:s},xform:ha})}catch(l){if(fe(l))return{data:{user:null},error:l};throw l}}async _listFactors(a){Lr(a.userId);try{const{data:s,error:l}=await xe(this.fetch,"GET",`${this.url}/admin/users/${a.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:s,error:l}}catch(s){if(fe(s))return{data:null,error:s};throw s}}async _deleteFactor(a){Lr(a.userId),Lr(a.id);try{return{data:await xe(this.fetch,"DELETE",`${this.url}/admin/users/${a.userId}/factors/${a.id}`,{headers:this.headers}),error:null}}catch(s){if(fe(s))return{data:null,error:s};throw s}}}function Dg(r={}){return{getItem:a=>r[a]||null,setItem:(a,s)=>{r[a]=s},removeItem:a=>{delete r[a]}}}function $S(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Br={debug:!!(globalThis&&o0()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class c0 extends Error{constructor(a){super(a),this.isAcquireTimeout=!0}}class HS extends c0{}async function GS(r,a,s){Br.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",r,a);const l=new globalThis.AbortController;return a>0&&setTimeout(()=>{l.abort(),Br.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",r)},a),await Promise.resolve().then(()=>globalThis.navigator.locks.request(r,a===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:l.signal},async o=>{if(o){Br.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",r,o.name);try{return await s()}finally{Br.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",r,o.name)}}else{if(a===0)throw Br.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",r),new HS(`Acquiring an exclusive Navigator LockManager lock "${r}" immediately failed`);if(Br.debug)try{const c=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(c,null,"  "))}catch(c){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",c)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await s()}}))}$S();const YS={url:W_,storageKey:eS,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:tS,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function Mg(r,a,s){return await s()}const $r={};class ms{constructor(a){var s,l;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=ms.nextInstanceID,ms.nextInstanceID+=1,this.instanceID>0&&an()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const o=Object.assign(Object.assign({},YS),a);if(this.logDebugMessages=!!o.debug,typeof o.debug=="function"&&(this.logger=o.debug),this.persistSession=o.persistSession,this.storageKey=o.storageKey,this.autoRefreshToken=o.autoRefreshToken,this.admin=new BS({url:o.url,headers:o.headers,fetch:o.fetch}),this.url=o.url,this.headers=o.headers,this.fetch=u0(o.fetch),this.lock=o.lock||Mg,this.detectSessionInUrl=o.detectSessionInUrl,this.flowType=o.flowType,this.hasCustomAuthorizationHeader=o.hasCustomAuthorizationHeader,o.lock?this.lock=o.lock:an()&&(!((s=globalThis?.navigator)===null||s===void 0)&&s.locks)?this.lock=GS:this.lock=Mg,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(o.storage?this.storage=o.storage:o0()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Dg(this.memoryStorage)),o.userStorage&&(this.userStorage=o.userStorage)):(this.memoryStorage={},this.storage=Dg(this.memoryStorage)),an()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(c){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",c)}(l=this.broadcastChannel)===null||l===void 0||l.addEventListener("message",async c=>{this._debug("received broadcast notification from other tab or client",c),await this._notifyAllSubscribers(c.data.event,c.data.session,!1)})}this.initialize()}get jwks(){var a,s;return(s=(a=$r[this.storageKey])===null||a===void 0?void 0:a.jwks)!==null&&s!==void 0?s:{keys:[]}}set jwks(a){$r[this.storageKey]=Object.assign(Object.assign({},$r[this.storageKey]),{jwks:a})}get jwks_cached_at(){var a,s;return(s=(a=$r[this.storageKey])===null||a===void 0?void 0:a.cachedAt)!==null&&s!==void 0?s:Number.MIN_SAFE_INTEGER}set jwks_cached_at(a){$r[this.storageKey]=Object.assign(Object.assign({},$r[this.storageKey]),{cachedAt:a})}_debug(...a){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${r0}) ${new Date().toISOString()}`,...a),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var a;try{const s=vS(window.location.href);let l="none";if(this._isImplicitGrantCallback(s)?l="implicit":await this._isPKCECallback(s)&&(l="pkce"),an()&&this.detectSessionInUrl&&l!=="none"){const{data:o,error:c}=await this._getSessionFromURL(s,l);if(c){if(this._debug("#_initialize()","error detecting session from URL",c),lS(c)){const p=(a=c.details)===null||a===void 0?void 0:a.code;if(p==="identity_already_exists"||p==="identity_not_found"||p==="single_identity_not_deletable")return{error:c}}return await this._removeSession(),{error:c}}const{session:h,redirectType:m}=o;return this._debug("#_initialize()","detected session in URL",h,"redirect type",m),await this._saveSession(h),setTimeout(async()=>{m==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",h):await this._notifyAllSubscribers("SIGNED_IN",h)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(s){return fe(s)?{error:s}:{error:new s0("Unexpected error during initialization",s)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(a){var s,l,o;try{const c=await xe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(l=(s=a?.options)===null||s===void 0?void 0:s.data)!==null&&l!==void 0?l:{},gotrue_meta_security:{captcha_token:(o=a?.options)===null||o===void 0?void 0:o.captchaToken}},xform:Un}),{data:h,error:m}=c;if(m||!h)return{data:{user:null,session:null},error:m};const p=h.session,g=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",p)),{data:{user:g,session:p},error:null}}catch(c){if(fe(c))return{data:{user:null,session:null},error:c};throw c}}async signUp(a){var s,l,o;try{let c;if("email"in a){const{email:v,password:b,options:x}=a;let _=null,S=null;this.flowType==="pkce"&&([_,S]=await qr(this.storage,this.storageKey)),c=await xe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:x?.emailRedirectTo,body:{email:v,password:b,data:(s=x?.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:x?.captchaToken},code_challenge:_,code_challenge_method:S},xform:Un})}else if("phone"in a){const{phone:v,password:b,options:x}=a;c=await xe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:v,password:b,data:(l=x?.data)!==null&&l!==void 0?l:{},channel:(o=x?.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:x?.captchaToken}},xform:Un})}else throw new Hl("You must provide either an email or phone number and a password");const{data:h,error:m}=c;if(m||!h)return{data:{user:null,session:null},error:m};const p=h.session,g=h.user;return h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",p)),{data:{user:g,session:p},error:null}}catch(c){if(fe(c))return{data:{user:null,session:null},error:c};throw c}}async signInWithPassword(a){try{let s;if("email"in a){const{email:c,password:h,options:m}=a;s=await xe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:c,password:h,gotrue_meta_security:{captcha_token:m?.captchaToken}},xform:Rg})}else if("phone"in a){const{phone:c,password:h,options:m}=a;s=await xe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:c,password:h,gotrue_meta_security:{captcha_token:m?.captchaToken}},xform:Rg})}else throw new Hl("You must provide either an email or phone number and a password");const{data:l,error:o}=s;return o?{data:{user:null,session:null},error:o}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new $l}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:Object.assign({user:l.user,session:l.session},l.weak_password?{weakPassword:l.weak_password}:null),error:o})}catch(s){if(fe(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithOAuth(a){var s,l,o,c;return await this._handleProviderSignIn(a.provider,{redirectTo:(s=a.options)===null||s===void 0?void 0:s.redirectTo,scopes:(l=a.options)===null||l===void 0?void 0:l.scopes,queryParams:(o=a.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(c=a.options)===null||c===void 0?void 0:c.skipBrowserRedirect})}async exchangeCodeForSession(a){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(a))}async signInWithWeb3(a){const{chain:s}=a;if(s==="solana")return await this.signInWithSolana(a);throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`)}async signInWithSolana(a){var s,l,o,c,h,m,p,g,v,b,x,_;let S,k;if("message"in a)S=a.message,k=a.signature;else{const{chain:z,wallet:B,statement:M,options:N}=a;let G;if(an())if(typeof B=="object")G=B;else{const V=window;if("solana"in V&&typeof V.solana=="object"&&("signIn"in V.solana&&typeof V.solana.signIn=="function"||"signMessage"in V.solana&&typeof V.solana.signMessage=="function"))G=V.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof B!="object"||!N?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");G=B}const Q=new URL((s=N?.url)!==null&&s!==void 0?s:window.location.href);if("signIn"in G&&G.signIn){const V=await G.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},N?.signInWithSolana),{version:"1",domain:Q.host,uri:Q.href}),M?{statement:M}:null));let J;if(Array.isArray(V)&&V[0]&&typeof V[0]=="object")J=V[0];else if(V&&typeof V=="object"&&"signedMessage"in V&&"signature"in V)J=V;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in J&&"signature"in J&&(typeof J.signedMessage=="string"||J.signedMessage instanceof Uint8Array)&&J.signature instanceof Uint8Array)S=typeof J.signedMessage=="string"?J.signedMessage:new TextDecoder().decode(J.signedMessage),k=J.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in G)||typeof G.signMessage!="function"||!("publicKey"in G)||typeof G!="object"||!G.publicKey||!("toBase58"in G.publicKey)||typeof G.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");S=[`${Q.host} wants you to sign in with your Solana account:`,G.publicKey.toBase58(),...M?["",M,""]:[""],"Version: 1",`URI: ${Q.href}`,`Issued At: ${(o=(l=N?.signInWithSolana)===null||l===void 0?void 0:l.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((c=N?.signInWithSolana)===null||c===void 0)&&c.notBefore?[`Not Before: ${N.signInWithSolana.notBefore}`]:[],...!((h=N?.signInWithSolana)===null||h===void 0)&&h.expirationTime?[`Expiration Time: ${N.signInWithSolana.expirationTime}`]:[],...!((m=N?.signInWithSolana)===null||m===void 0)&&m.chainId?[`Chain ID: ${N.signInWithSolana.chainId}`]:[],...!((p=N?.signInWithSolana)===null||p===void 0)&&p.nonce?[`Nonce: ${N.signInWithSolana.nonce}`]:[],...!((g=N?.signInWithSolana)===null||g===void 0)&&g.requestId?[`Request ID: ${N.signInWithSolana.requestId}`]:[],...!((b=(v=N?.signInWithSolana)===null||v===void 0?void 0:v.resources)===null||b===void 0)&&b.length?["Resources",...N.signInWithSolana.resources.map(J=>`- ${J}`)]:[]].join(`
`);const V=await G.signMessage(new TextEncoder().encode(S),"utf8");if(!V||!(V instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");k=V}}try{const{data:z,error:B}=await xe(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:S,signature:mS(k)},!((x=a.options)===null||x===void 0)&&x.captchaToken?{gotrue_meta_security:{captcha_token:(_=a.options)===null||_===void 0?void 0:_.captchaToken}}:null),xform:Un});if(B)throw B;return!z||!z.session||!z.user?{data:{user:null,session:null},error:new $l}:(z.session&&(await this._saveSession(z.session),await this._notifyAllSubscribers("SIGNED_IN",z.session)),{data:Object.assign({},z),error:B})}catch(z){if(fe(z))return{data:{user:null,session:null},error:z};throw z}}async _exchangeCodeForSession(a){const s=await Na(this.storage,`${this.storageKey}-code-verifier`),[l,o]=(s??"").split("/");try{const{data:c,error:h}=await xe(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:a,code_verifier:l},xform:Un});if(await ca(this.storage,`${this.storageKey}-code-verifier`),h)throw h;return!c||!c.session||!c.user?{data:{user:null,session:null,redirectType:null},error:new $l}:(c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",c.session)),{data:Object.assign(Object.assign({},c),{redirectType:o??null}),error:h})}catch(c){if(fe(c))return{data:{user:null,session:null,redirectType:null},error:c};throw c}}async signInWithIdToken(a){try{const{options:s,provider:l,token:o,access_token:c,nonce:h}=a,m=await xe(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:l,id_token:o,access_token:c,nonce:h,gotrue_meta_security:{captcha_token:s?.captchaToken}},xform:Un}),{data:p,error:g}=m;return g?{data:{user:null,session:null},error:g}:!p||!p.session||!p.user?{data:{user:null,session:null},error:new $l}:(p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),{data:p,error:g})}catch(s){if(fe(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithOtp(a){var s,l,o,c,h;try{if("email"in a){const{email:m,options:p}=a;let g=null,v=null;this.flowType==="pkce"&&([g,v]=await qr(this.storage,this.storageKey));const{error:b}=await xe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:m,data:(s=p?.data)!==null&&s!==void 0?s:{},create_user:(l=p?.shouldCreateUser)!==null&&l!==void 0?l:!0,gotrue_meta_security:{captcha_token:p?.captchaToken},code_challenge:g,code_challenge_method:v},redirectTo:p?.emailRedirectTo});return{data:{user:null,session:null},error:b}}if("phone"in a){const{phone:m,options:p}=a,{data:g,error:v}=await xe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:m,data:(o=p?.data)!==null&&o!==void 0?o:{},create_user:(c=p?.shouldCreateUser)!==null&&c!==void 0?c:!0,gotrue_meta_security:{captcha_token:p?.captchaToken},channel:(h=p?.channel)!==null&&h!==void 0?h:"sms"}});return{data:{user:null,session:null,messageId:g?.message_id},error:v}}throw new Hl("You must provide either an email or phone number.")}catch(m){if(fe(m))return{data:{user:null,session:null},error:m};throw m}}async verifyOtp(a){var s,l;try{let o,c;"options"in a&&(o=(s=a.options)===null||s===void 0?void 0:s.redirectTo,c=(l=a.options)===null||l===void 0?void 0:l.captchaToken);const{data:h,error:m}=await xe(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},a),{gotrue_meta_security:{captcha_token:c}}),redirectTo:o,xform:Un});if(m)throw m;if(!h)throw new Error("An error occurred on token verification.");const p=h.session,g=h.user;return p?.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers(a.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",p)),{data:{user:g,session:p},error:null}}catch(o){if(fe(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithSSO(a){var s,l,o;try{let c=null,h=null;return this.flowType==="pkce"&&([c,h]=await qr(this.storage,this.storageKey)),await xe(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in a?{provider_id:a.providerId}:null),"domain"in a?{domain:a.domain}:null),{redirect_to:(l=(s=a.options)===null||s===void 0?void 0:s.redirectTo)!==null&&l!==void 0?l:void 0}),!((o=a?.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:a.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:c,code_challenge_method:h}),headers:this.headers,xform:MS})}catch(c){if(fe(c))return{data:null,error:c};throw c}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async a=>{const{data:{session:s},error:l}=a;if(l)throw l;if(!s)throw new fa;const{error:o}=await xe(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:s.access_token});return{data:{user:null,session:null},error:o}})}catch(a){if(fe(a))return{data:{user:null,session:null},error:a};throw a}}async resend(a){try{const s=`${this.url}/resend`;if("email"in a){const{email:l,type:o,options:c}=a,{error:h}=await xe(this.fetch,"POST",s,{headers:this.headers,body:{email:l,type:o,gotrue_meta_security:{captcha_token:c?.captchaToken}},redirectTo:c?.emailRedirectTo});return{data:{user:null,session:null},error:h}}else if("phone"in a){const{phone:l,type:o,options:c}=a,{data:h,error:m}=await xe(this.fetch,"POST",s,{headers:this.headers,body:{phone:l,type:o,gotrue_meta_security:{captcha_token:c?.captchaToken}}});return{data:{user:null,session:null,messageId:h?.message_id},error:m}}throw new Hl("You must provide either an email or phone number and a type")}catch(s){if(fe(s))return{data:{user:null,session:null},error:s};throw s}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async s=>s))}async _acquireLock(a,s){this._debug("#_acquireLock","begin",a);try{if(this.lockAcquired){const l=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await l,await s()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,a,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const l=s();for(this.pendingInLock.push((async()=>{try{await l}catch{}})()),await l;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await l}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(a){this._debug("#_useSession","begin");try{const s=await this.__loadSession();return await a(s)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let a=null;const s=await Na(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",s),s!==null&&(this._isValidSession(s)?a=s:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!a)return{data:{session:null},error:null};const l=a.expires_at?a.expires_at*1e3-Date.now()<Vc:!1;if(this._debug("#__loadSession()",`session has${l?"":" not"} expired`,"expires_at",a.expires_at),!l){if(this.userStorage){const h=await Na(this.userStorage,this.storageKey+"-user");h?.user?a.user=h.user:a.user=Ic()}if(this.storage.isServer&&a.user){let h=this.suppressGetSessionWarning;a=new Proxy(a,{get:(p,g,v)=>(!h&&g==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),h=!0,this.suppressGetSessionWarning=!0),Reflect.get(p,g,v))})}return{data:{session:a},error:null}}const{session:o,error:c}=await this._callRefreshToken(a.refresh_token);return c?{data:{session:null},error:c}:{data:{session:o},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(a){return a?await this._getUser(a):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(a){try{return a?await xe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:a,xform:ha}):await this._useSession(async s=>{var l,o,c;const{data:h,error:m}=s;if(m)throw m;return!(!((l=h.session)===null||l===void 0)&&l.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new fa}:await xe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(c=(o=h.session)===null||o===void 0?void 0:o.access_token)!==null&&c!==void 0?c:void 0,xform:ha})})}catch(s){if(fe(s))return sS(s)&&(await this._removeSession(),await ca(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:s};throw s}}async updateUser(a,s={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(a,s))}async _updateUser(a,s={}){try{return await this._useSession(async l=>{const{data:o,error:c}=l;if(c)throw c;if(!o.session)throw new fa;const h=o.session;let m=null,p=null;this.flowType==="pkce"&&a.email!=null&&([m,p]=await qr(this.storage,this.storageKey));const{data:g,error:v}=await xe(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:s?.emailRedirectTo,body:Object.assign(Object.assign({},a),{code_challenge:m,code_challenge_method:p}),jwt:h.access_token,xform:ha});if(v)throw v;return h.user=g.user,await this._saveSession(h),await this._notifyAllSubscribers("USER_UPDATED",h),{data:{user:h.user},error:null}})}catch(l){if(fe(l))return{data:{user:null},error:l};throw l}}async setSession(a){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(a))}async _setSession(a){try{if(!a.access_token||!a.refresh_token)throw new fa;const s=Date.now()/1e3;let l=s,o=!0,c=null;const{payload:h}=Kc(a.access_token);if(h.exp&&(l=h.exp,o=l<=s),o){const{session:m,error:p}=await this._callRefreshToken(a.refresh_token);if(p)return{data:{user:null,session:null},error:p};if(!m)return{data:{user:null,session:null},error:null};c=m}else{const{data:m,error:p}=await this._getUser(a.access_token);if(p)throw p;c={access_token:a.access_token,refresh_token:a.refresh_token,user:m.user,token_type:"bearer",expires_in:l-s,expires_at:l},await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)}return{data:{user:c.user,session:c},error:null}}catch(s){if(fe(s))return{data:{session:null,user:null},error:s};throw s}}async refreshSession(a){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(a))}async _refreshSession(a){try{return await this._useSession(async s=>{var l;if(!a){const{data:h,error:m}=s;if(m)throw m;a=(l=h.session)!==null&&l!==void 0?l:void 0}if(!a?.refresh_token)throw new fa;const{session:o,error:c}=await this._callRefreshToken(a.refresh_token);return c?{data:{user:null,session:null},error:c}:o?{data:{user:o.user,session:o},error:null}:{data:{user:null,session:null},error:null}})}catch(s){if(fe(s))return{data:{user:null,session:null},error:s};throw s}}async _getSessionFromURL(a,s){try{if(!an())throw new Gl("No browser detected.");if(a.error||a.error_description||a.error_code)throw new Gl(a.error_description||"Error in URL with unspecified error_description",{error:a.error||"unspecified_error",code:a.error_code||"unspecified_code"});switch(s){case"implicit":if(this.flowType==="pkce")throw new Eg("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Gl("Not a valid implicit grant flow url.");break;default:}if(s==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!a.code)throw new Eg("No code detected.");const{data:M,error:N}=await this._exchangeCodeForSession(a.code);if(N)throw N;const G=new URL(window.location.href);return G.searchParams.delete("code"),window.history.replaceState(window.history.state,"",G.toString()),{data:{session:M.session,redirectType:null},error:null}}const{provider_token:l,provider_refresh_token:o,access_token:c,refresh_token:h,expires_in:m,expires_at:p,token_type:g}=a;if(!c||!m||!h||!g)throw new Gl("No session defined in URL");const v=Math.round(Date.now()/1e3),b=parseInt(m);let x=v+b;p&&(x=parseInt(p));const _=x-v;_*1e3<=Yr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${_}s, should have been closer to ${b}s`);const S=x-b;v-S>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",S,x,v):v-S<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",S,x,v);const{data:k,error:z}=await this._getUser(c);if(z)throw z;const B={provider_token:l,provider_refresh_token:o,access_token:c,expires_in:b,expires_at:x,refresh_token:h,token_type:g,user:k.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:B,redirectType:a.type},error:null}}catch(l){if(fe(l))return{data:{session:null,redirectType:null},error:l};throw l}}_isImplicitGrantCallback(a){return!!(a.access_token||a.error_description)}async _isPKCECallback(a){const s=await Na(this.storage,`${this.storageKey}-code-verifier`);return!!(a.code&&s)}async signOut(a={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(a))}async _signOut({scope:a}={scope:"global"}){return await this._useSession(async s=>{var l;const{data:o,error:c}=s;if(c)return{error:c};const h=(l=o.session)===null||l===void 0?void 0:l.access_token;if(h){const{error:m}=await this.admin.signOut(h,a);if(m&&!(iS(m)&&(m.status===404||m.status===401||m.status===403)))return{error:m}}return a!=="others"&&(await this._removeSession(),await ca(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(a){const s=gS(),l={id:s,callback:a,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",s),this.stateChangeEmitters.delete(s)}};return this._debug("#onAuthStateChange()","registered callback with id",s),this.stateChangeEmitters.set(s,l),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(s)})))(),{data:{subscription:l}}}async _emitInitialSession(a){return await this._useSession(async s=>{var l,o;try{const{data:{session:c},error:h}=s;if(h)throw h;await((l=this.stateChangeEmitters.get(a))===null||l===void 0?void 0:l.callback("INITIAL_SESSION",c)),this._debug("INITIAL_SESSION","callback id",a,"session",c)}catch(c){await((o=this.stateChangeEmitters.get(a))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",a,"error",c),console.error(c)}})}async resetPasswordForEmail(a,s={}){let l=null,o=null;this.flowType==="pkce"&&([l,o]=await qr(this.storage,this.storageKey,!0));try{return await xe(this.fetch,"POST",`${this.url}/recover`,{body:{email:a,code_challenge:l,code_challenge_method:o,gotrue_meta_security:{captcha_token:s.captchaToken}},headers:this.headers,redirectTo:s.redirectTo})}catch(c){if(fe(c))return{data:null,error:c};throw c}}async getUserIdentities(){var a;try{const{data:s,error:l}=await this.getUser();if(l)throw l;return{data:{identities:(a=s.user.identities)!==null&&a!==void 0?a:[]},error:null}}catch(s){if(fe(s))return{data:null,error:s};throw s}}async linkIdentity(a){var s;try{const{data:l,error:o}=await this._useSession(async c=>{var h,m,p,g,v;const{data:b,error:x}=c;if(x)throw x;const _=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,a.provider,{redirectTo:(h=a.options)===null||h===void 0?void 0:h.redirectTo,scopes:(m=a.options)===null||m===void 0?void 0:m.scopes,queryParams:(p=a.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await xe(this.fetch,"GET",_,{headers:this.headers,jwt:(v=(g=b.session)===null||g===void 0?void 0:g.access_token)!==null&&v!==void 0?v:void 0})});if(o)throw o;return an()&&!(!((s=a.options)===null||s===void 0)&&s.skipBrowserRedirect)&&window.location.assign(l?.url),{data:{provider:a.provider,url:l?.url},error:null}}catch(l){if(fe(l))return{data:{provider:a.provider,url:null},error:l};throw l}}async unlinkIdentity(a){try{return await this._useSession(async s=>{var l,o;const{data:c,error:h}=s;if(h)throw h;return await xe(this.fetch,"DELETE",`${this.url}/user/identities/${a.identity_id}`,{headers:this.headers,jwt:(o=(l=c.session)===null||l===void 0?void 0:l.access_token)!==null&&o!==void 0?o:void 0})})}catch(s){if(fe(s))return{data:null,error:s};throw s}}async _refreshAccessToken(a){const s=`#_refreshAccessToken(${a.substring(0,5)}...)`;this._debug(s,"begin");try{const l=Date.now();return await wS(async o=>(o>0&&await bS(200*Math.pow(2,o-1)),this._debug(s,"refreshing attempt",o),await xe(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:a},headers:this.headers,xform:Un})),(o,c)=>{const h=200*Math.pow(2,o);return c&&Xc(c)&&Date.now()+h-l<Yr})}catch(l){if(this._debug(s,"error",l),fe(l))return{data:{session:null,user:null},error:l};throw l}finally{this._debug(s,"end")}}_isValidSession(a){return typeof a=="object"&&a!==null&&"access_token"in a&&"refresh_token"in a&&"expires_at"in a}async _handleProviderSignIn(a,s){const l=await this._getUrlForProvider(`${this.url}/authorize`,a,{redirectTo:s.redirectTo,scopes:s.scopes,queryParams:s.queryParams});return this._debug("#_handleProviderSignIn()","provider",a,"options",s,"url",l),an()&&!s.skipBrowserRedirect&&window.location.assign(l),{data:{provider:a,url:l},error:null}}async _recoverAndRefresh(){var a,s;const l="#_recoverAndRefresh()";this._debug(l,"begin");try{const o=await Na(this.storage,this.storageKey);if(o&&this.userStorage){let h=await Na(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!h&&(h={user:o.user},await Pr(this.userStorage,this.storageKey+"-user",h)),o.user=(a=h?.user)!==null&&a!==void 0?a:Ic()}else if(o&&!o.user&&!o.user){const h=await Na(this.storage,this.storageKey+"-user");h&&h?.user?(o.user=h.user,await ca(this.storage,this.storageKey+"-user"),await Pr(this.storage,this.storageKey,o)):o.user=Ic()}if(this._debug(l,"session from storage",o),!this._isValidSession(o)){this._debug(l,"session is not valid"),o!==null&&await this._removeSession();return}const c=((s=o.expires_at)!==null&&s!==void 0?s:1/0)*1e3-Date.now()<Vc;if(this._debug(l,`session has${c?"":" not"} expired with margin of ${Vc}s`),c){if(this.autoRefreshToken&&o.refresh_token){const{error:h}=await this._callRefreshToken(o.refresh_token);h&&(console.error(h),Xc(h)||(this._debug(l,"refresh failed with a non-retryable error, removing the session",h),await this._removeSession()))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:h,error:m}=await this._getUser(o.access_token);!m&&h?.user?(o.user=h.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(l,"could not get user data, skipping SIGNED_IN notification")}catch(h){console.error("Error getting user data:",h),this._debug(l,"error getting user data, skipping SIGNED_IN notification",h)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(l,"error",o),console.error(o);return}finally{this._debug(l,"end")}}async _callRefreshToken(a){var s,l;if(!a)throw new fa;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const o=`#_callRefreshToken(${a.substring(0,5)}...)`;this._debug(o,"begin");try{this.refreshingDeferred=new yo;const{data:c,error:h}=await this._refreshAccessToken(a);if(h)throw h;if(!c.session)throw new fa;await this._saveSession(c.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",c.session);const m={session:c.session,error:null};return this.refreshingDeferred.resolve(m),m}catch(c){if(this._debug(o,"error",c),fe(c)){const h={session:null,error:c};return Xc(c)||await this._removeSession(),(s=this.refreshingDeferred)===null||s===void 0||s.resolve(h),h}throw(l=this.refreshingDeferred)===null||l===void 0||l.reject(c),c}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(a,s,l=!0){const o=`#_notifyAllSubscribers(${a})`;this._debug(o,"begin",s,`broadcast = ${l}`);try{this.broadcastChannel&&l&&this.broadcastChannel.postMessage({event:a,session:s});const c=[],h=Array.from(this.stateChangeEmitters.values()).map(async m=>{try{await m.callback(a,s)}catch(p){c.push(p)}});if(await Promise.all(h),c.length>0){for(let m=0;m<c.length;m+=1)console.error(c[m]);throw c[0]}}finally{this._debug(o,"end")}}async _saveSession(a){this._debug("#_saveSession()",a),this.suppressGetSessionWarning=!0;const s=Object.assign({},a),l=s.user&&s.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!l&&s.user&&await Pr(this.userStorage,this.storageKey+"-user",{user:s.user});const o=Object.assign({},s);delete o.user;const c=zg(o);await Pr(this.storage,this.storageKey,c)}else{const o=zg(s);await Pr(this.storage,this.storageKey,o)}}async _removeSession(){this._debug("#_removeSession()"),await ca(this.storage,this.storageKey),await ca(this.storage,this.storageKey+"-code-verifier"),await ca(this.storage,this.storageKey+"-user"),this.userStorage&&await ca(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const a=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{a&&an()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",a)}catch(s){console.error("removing visibilitychange callback failed",s)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const a=setInterval(()=>this._autoRefreshTokenTick(),Yr);this.autoRefreshTicker=a,a&&typeof a=="object"&&typeof a.unref=="function"?a.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(a),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const a=this.autoRefreshTicker;this.autoRefreshTicker=null,a&&clearInterval(a)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const a=Date.now();try{return await this._useSession(async s=>{const{data:{session:l}}=s;if(!l||!l.refresh_token||!l.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((l.expires_at*1e3-a)/Yr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${Yr}ms, refresh threshold is ${yd} ticks`),o<=yd&&await this._callRefreshToken(l.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(a){if(a.isAcquireTimeout||a instanceof c0)this._debug("auto refresh token tick lock not available");else throw a}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!an()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(a){console.error("_handleVisibilityChange",a)}}async _onVisibilityChanged(a){const s=`#_onVisibilityChanged(${a})`;this._debug(s,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),a||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(s,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(a,s,l){const o=[`provider=${encodeURIComponent(s)}`];if(l?.redirectTo&&o.push(`redirect_to=${encodeURIComponent(l.redirectTo)}`),l?.scopes&&o.push(`scopes=${encodeURIComponent(l.scopes)}`),this.flowType==="pkce"){const[c,h]=await qr(this.storage,this.storageKey),m=new URLSearchParams({code_challenge:`${encodeURIComponent(c)}`,code_challenge_method:`${encodeURIComponent(h)}`});o.push(m.toString())}if(l?.queryParams){const c=new URLSearchParams(l.queryParams);o.push(c.toString())}return l?.skipBrowserRedirect&&o.push(`skip_http_redirect=${l.skipBrowserRedirect}`),`${a}?${o.join("&")}`}async _unenroll(a){try{return await this._useSession(async s=>{var l;const{data:o,error:c}=s;return c?{data:null,error:c}:await xe(this.fetch,"DELETE",`${this.url}/factors/${a.factorId}`,{headers:this.headers,jwt:(l=o?.session)===null||l===void 0?void 0:l.access_token})})}catch(s){if(fe(s))return{data:null,error:s};throw s}}async _enroll(a){try{return await this._useSession(async s=>{var l,o;const{data:c,error:h}=s;if(h)return{data:null,error:h};const m=Object.assign({friendly_name:a.friendlyName,factor_type:a.factorType},a.factorType==="phone"?{phone:a.phone}:{issuer:a.issuer}),{data:p,error:g}=await xe(this.fetch,"POST",`${this.url}/factors`,{body:m,headers:this.headers,jwt:(l=c?.session)===null||l===void 0?void 0:l.access_token});return g?{data:null,error:g}:(a.factorType==="totp"&&(!((o=p?.totp)===null||o===void 0)&&o.qr_code)&&(p.totp.qr_code=`data:image/svg+xml;utf-8,${p.totp.qr_code}`),{data:p,error:null})})}catch(s){if(fe(s))return{data:null,error:s};throw s}}async _verify(a){return this._acquireLock(-1,async()=>{try{return await this._useSession(async s=>{var l;const{data:o,error:c}=s;if(c)return{data:null,error:c};const{data:h,error:m}=await xe(this.fetch,"POST",`${this.url}/factors/${a.factorId}/verify`,{body:{code:a.code,challenge_id:a.challengeId},headers:this.headers,jwt:(l=o?.session)===null||l===void 0?void 0:l.access_token});return m?{data:null,error:m}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+h.expires_in},h)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",h),{data:h,error:m})})}catch(s){if(fe(s))return{data:null,error:s};throw s}})}async _challenge(a){return this._acquireLock(-1,async()=>{try{return await this._useSession(async s=>{var l;const{data:o,error:c}=s;return c?{data:null,error:c}:await xe(this.fetch,"POST",`${this.url}/factors/${a.factorId}/challenge`,{body:{channel:a.channel},headers:this.headers,jwt:(l=o?.session)===null||l===void 0?void 0:l.access_token})})}catch(s){if(fe(s))return{data:null,error:s};throw s}})}async _challengeAndVerify(a){const{data:s,error:l}=await this._challenge({factorId:a.factorId});return l?{data:null,error:l}:await this._verify({factorId:a.factorId,challengeId:s.id,code:a.code})}async _listFactors(){const{data:{user:a},error:s}=await this.getUser();if(s)return{data:null,error:s};const l=a?.factors||[],o=l.filter(h=>h.factor_type==="totp"&&h.status==="verified"),c=l.filter(h=>h.factor_type==="phone"&&h.status==="verified");return{data:{all:l,totp:o,phone:c},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async a=>{var s,l;const{data:{session:o},error:c}=a;if(c)return{data:null,error:c};if(!o)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:h}=Kc(o.access_token);let m=null;h.aal&&(m=h.aal);let p=m;((l=(s=o.user.factors)===null||s===void 0?void 0:s.filter(b=>b.status==="verified"))!==null&&l!==void 0?l:[]).length>0&&(p="aal2");const v=h.amr||[];return{data:{currentLevel:m,nextLevel:p,currentAuthenticationMethods:v},error:null}}))}async fetchJwk(a,s={keys:[]}){let l=s.keys.find(m=>m.kid===a);if(l)return l;const o=Date.now();if(l=this.jwks.keys.find(m=>m.kid===a),l&&this.jwks_cached_at+aS>o)return l;const{data:c,error:h}=await xe(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(h)throw h;return!c.keys||c.keys.length===0||(this.jwks=c,this.jwks_cached_at=o,l=c.keys.find(m=>m.kid===a),!l)?null:l}async getClaims(a,s={}){try{let l=a;if(!l){const{data:_,error:S}=await this.getSession();if(S||!_.session)return{data:null,error:S};l=_.session.access_token}const{header:o,payload:c,signature:h,raw:{header:m,payload:p}}=Kc(l);s?.allowExpired||AS(c.exp);const g=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,s?.keys?{keys:s.keys}:s?.jwks);if(!g){const{error:_}=await this.getUser(l);if(_)throw _;return{data:{claims:c,header:o,signature:h},error:null}}const v=kS(o.alg),b=await crypto.subtle.importKey("jwk",g,v,!0,["verify"]);if(!await crypto.subtle.verify(v,b,h,hS(`${m}.${p}`)))throw new xd("Invalid JWT signature");return{data:{claims:c,header:o,signature:h},error:null}}catch(l){if(fe(l))return{data:null,error:l};throw l}}}ms.nextInstanceID=0;const PS=ms;class QS extends PS{constructor(a){super(a)}}var VS=function(r,a,s,l){function o(c){return c instanceof s?c:new s(function(h){h(c)})}return new(s||(s=Promise))(function(c,h){function m(v){try{g(l.next(v))}catch(b){h(b)}}function p(v){try{g(l.throw(v))}catch(b){h(b)}}function g(v){v.done?c(v.value):o(v.value).then(m,p)}g((l=l.apply(r,a||[])).next())})};class XS{constructor(a,s,l){var o,c,h;if(this.supabaseUrl=a,this.supabaseKey=s,!a)throw new Error("supabaseUrl is required.");if(!s)throw new Error("supabaseKey is required.");const m=J_(a),p=new URL(m);this.realtimeUrl=new URL("realtime/v1",p),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",p),this.storageUrl=new URL("storage/v1",p),this.functionsUrl=new URL("functions/v1",p);const g=`sb-${p.hostname.split(".")[0]}-auth-token`,v={db:Y_,realtime:Q_,auth:Object.assign(Object.assign({},P_),{storageKey:g}),global:G_},b=F_(l??{},v);this.storageKey=(o=b.auth.storageKey)!==null&&o!==void 0?o:"",this.headers=(c=b.global.headers)!==null&&c!==void 0?c:{},b.accessToken?(this.accessToken=b.accessToken,this.auth=new Proxy({},{get:(x,_)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(_)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((h=b.auth)!==null&&h!==void 0?h:{},this.headers,b.global.fetch),this.fetch=I_(s,this._getAccessToken.bind(this),b.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},b.realtime)),this.rest=new u_(new URL("rest/v1",p).href,{headers:this.headers,schema:b.db.schema,fetch:this.fetch}),this.storage=new B_(this.storageUrl.href,this.headers,this.fetch,l?.storage),b.accessToken||this._listenForAuthEvents()}get functions(){return new Wx(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(a){return this.rest.from(a)}schema(a){return this.rest.schema(a)}rpc(a,s={},l={}){return this.rest.rpc(a,s,l)}channel(a,s={config:{}}){return this.realtime.channel(a,s)}getChannels(){return this.realtime.getChannels()}removeChannel(a){return this.realtime.removeChannel(a)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var a,s;return VS(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:l}=yield this.auth.getSession();return(s=(a=l.session)===null||a===void 0?void 0:a.access_token)!==null&&s!==void 0?s:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:a,persistSession:s,detectSessionInUrl:l,storage:o,userStorage:c,storageKey:h,flowType:m,lock:p,debug:g},v,b){const x={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new QS({url:this.authUrl.href,headers:Object.assign(Object.assign({},x),v),storageKey:h,autoRefreshToken:a,persistSession:s,detectSessionInUrl:l,storage:o,userStorage:c,flowType:m,lock:p,debug:g,fetch:b,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(a){return new T_(this.realtimeUrl.href,Object.assign(Object.assign({},a),{params:Object.assign({apikey:this.supabaseKey},a?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((s,l)=>{this._handleTokenChanged(s,"CLIENT",l?.access_token)})}_handleTokenChanged(a,s,l){(a==="TOKEN_REFRESHED"||a==="SIGNED_IN")&&this.changedAccessToken!==l?this.changedAccessToken=l:a==="SIGNED_OUT"&&(this.realtime.setAuth(),s=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const KS=(r,a,s)=>new XS(r,a,s);function IS(){if(typeof window<"u"||typeof process>"u")return!1;const r=process.version;if(r==null)return!1;const a=r.match(/^v(\d+)\./);return a?parseInt(a[1],10)<=18:!1}IS()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const ZS="https://gbsjttwoeqeidstgcgcv.supabase.co",JS="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdic2p0dHdvZXFlaWRzdGdjZ2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MjQ2ODksImV4cCI6MjA2OTAwMDY4OX0.cHVO8VCWZIPrR8UbrCHV0UEbtkNxoyxDVhzpqHitEPo",Ya=KS(ZS,JS);async function FS({email:r,password:a}){const{error:s}=await Ya.auth.signInWithPassword({email:r,password:a});return{error:s}}async function WS(){const{error:r}=await Ya.auth.signOut();return{error:r}}function Pa({children:r}){return f.jsxs(ej,{children:[f.jsx(Vx,{}),f.jsx("strong",{children:r})]})}const ej=H.div`
  padding: 1.2rem;
  border: 1px solid var(--error-color);
  background-color: var(--errorBg-color);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & > svg {
    width: 1.4rem;
    stroke: var(--error-color);
  }

  & > strong {
    font-size: 1.4rem;
    color: var(--error-color);
  }
`;function Ue({...r}){return f.jsx(tj,{...r})}const tj=H.input`
  background-color: var(--white-color);
  border: none;
  font-size: var(--font-smz);
  &::placeholder {
    color: var(--bg-color);
  }
`;function mt({children:r,...a}){return f.jsx(nj,{...a,children:r})}const nj=H.button`
  background-color: var(--boxBg-color);
  color: var(--white-color);
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: none;
  font-weight: var(--font-mw);
  font-size: var(--font-smz);
`;function aj(){const r=pa(),[a,s]=E.useState(!1),[l,o]=E.useState(""),[c,h]=E.useState(""),[m,p]=E.useState(""),g=async v=>{p(""),v.preventDefault();try{if(l.trim()===""||c.trim()===""){p("이메일과 비밀번호를 모두 입력해주세요.");return}if(c.trim().length<6){p("비밀번호는 최소 6자 이상이어야 합니다.");return}const{error:b}=await FS({email:l,password:c});if(b)throw b;r("/admin/home")}catch(b){console.error(b),p("이메일과 비밀번호가 맞지 않습니다.")}};return f.jsx(rj,{children:f.jsxs(ij,{children:[f.jsx("h1",{children:"Welcome to StarScope"}),m&&f.jsx(Pa,{children:m}),f.jsxs("form",{onSubmit:g,children:[f.jsxs(Ug,{children:[f.jsx("label",{htmlFor:"email",children:"Email Address"}),f.jsxs("div",{children:[f.jsx(Dx,{}),f.jsx(Ue,{type:"email",name:"email",id:"email",value:l,onChange:v=>o(v.target.value),autoComplete:"off",placeholder:"이메일을 입력해주세요."})]})]}),f.jsxs(Ug,{children:[f.jsx("label",{htmlFor:"password",children:"Password"}),f.jsxs("div",{children:[f.jsx(zx,{}),f.jsx(Ue,{type:a?"text":"password",name:"password",id:"password",value:c,onChange:v=>h(v.target.value),autoComplete:"off",placeholder:"비밀번호를 입력해주세요."}),f.jsx("button",{type:"button",onClick:()=>s(!a),children:a?f.jsx(Ex,{}):f.jsx(Sx,{})})]})]}),f.jsx(mt,{type:"submit",children:"Log In"})]})]})})}const rj=H.article`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,ij=H.div`
  width: clamp(448px, 100%, 480px);
  border-radius: 1rem;
  padding: 4rem;
  background-color: var(--white-color);
  box-shadow: 0 5px 15px var(--stroke-color);

  & > h1 {
    text-align: center;
    font-size: var(--font-mz);
    font-weight: var(--font-bw);
    margin-bottom: 4rem;
  }

  & > div {
    width: 30rem;
    margin: 0 auto;
  }

  & > form {
    width: 30rem;
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`,Ug=H.div`
  & > label {
    color: var(--text-color);
    font-size: var(--font-smz);
    margin-bottom: 0.4rem;
  }
  & > div {
    width: 30rem;
    padding: 1.2rem;
    border: 1px solid var(--stroke-color);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  & > div svg {
    width: 1.4rem;
    stroke: var(--stroke-color);
  }
  & > div > input {
    width: 100%;
    font-size: var(--font-smz);
  }
  & > div > button {
    display: flex;
    align-items: center;
  }
  & + button {
    margin-left: auto;
  }
`;function sj({handleNav:r}){return f.jsx(lj,{children:f.jsx("button",{onClick:r,children:f.jsx(Ux,{})})})}const lj=H.header`
  width: 100%;
  height: 6rem;
  padding-inline: 1.6rem;
  display: flex;
  align-items: center;
  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding-inline: 2rem;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`,Ng=r=>{let a;const s=new Set,l=(g,v)=>{const b=typeof g=="function"?g(a):g;if(!Object.is(b,a)){const x=a;a=v??(typeof b!="object"||b===null)?b:Object.assign({},a,b),s.forEach(_=>_(a,x))}},o=()=>a,m={setState:l,getState:o,getInitialState:()=>p,subscribe:g=>(s.add(g),()=>s.delete(g))},p=a=r(l,o,m);return m},oj=(r=>r?Ng(r):Ng),uj=r=>r;function cj(r,a=uj){const s=Yt.useSyncExternalStore(r.subscribe,Yt.useCallback(()=>a(r.getState()),[r,a]),Yt.useCallback(()=>a(r.getInitialState()),[r,a]));return Yt.useDebugValue(s),s}const qg=r=>{const a=oj(r),s=l=>cj(a,l);return Object.assign(s,a),s},d0=(r=>r?qg(r):qg);async function dj(){try{const{data:r,error:a}=await Ya.from("adminMenu").select("*");if(a)throw new Error("메뉴 조회 불가");return r}catch(r){return r}}const fj=d0(r=>({menus:[],getMenu:async()=>{const a=await dj();return r({menus:a})}}));function hj({handleCloseNav:r}){const a=pa(),{menus:s,getMenu:l}=fj(),o=JSON.parse(localStorage.getItem("sb-gbsjttwoeqeidstgcgcv-auth-token"));E.useEffect(()=>{s.length>0||l()},[l,s.length]);const c=m=>{switch(m){case"Home":return f.jsx(Ax,{});case"Product":return f.jsx(so,{});case"Store":return f.jsx(Ha,{});case"Commu":return f.jsx(qx,{});default:return null}},h=async()=>{const{error:m}=await WS();console.error(m),a("/auth/login")};return f.jsxs(mj,{children:[f.jsxs("div",{children:[f.jsx(pj,{children:s?.map(m=>f.jsxs("li",{children:[f.jsxs("div",{children:[c(m.title),m.url?f.jsx(Ie,{to:m.url,children:m.title}):f.jsx("span",{children:m.title})]}),m.subMenu?f.jsx(gj,{children:m.subMenu.map(p=>f.jsx("li",{children:f.jsx(Ie,{to:p.url,children:p.title})},p.id))}):null]},m.id))}),f.jsxs(vj,{children:[f.jsx("p",{children:o.user.email}),f.jsx(mt,{onClick:h,children:"LogOut"})]})]}),f.jsx("button",{onClick:r,children:f.jsx(Ud,{})})]})}const mj=H.nav`
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--white-color);
  padding-block: 4rem;
  z-index: 999;
  & > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & > button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  @media screen and (min-width: 769px) {
    & > button {
      display: none;
    }
  }
`,pj=H.ul`
  & > li {
    background-color: var(--boxBg-color);
  }
  & > li > div {
    display: flex;
    align-items: center;
    padding-inline: 1.2rem;
  }
  & svg {
    stroke: var(--white-color);
  }
  & a,
  span {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.4rem;
    color: var(--white-color);
    font-weight: var(--font-mw);
  }
  & span {
    display: block;
  }
`,gj=H.ul`
  display: flex;
  flex-direction: column;
  & li {
    background-color: var(--white-color);
    border-bottom: 1px solid var(--stroke-color);
  }
  & a {
    font-size: 1.2rem;
    font-weight: var(--font-rw);
    padding-inline: 4rem;
    color: var(--text-color);
  }
`,vj=H.div`
  margin-inline: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--stroke-color);
  padding: 2rem;
  height: 10rem;
  position: relative;
  & p {
    font-size: var(--font-sz);
  }
  & button {
    font-size: var(--font-sz);
    font-weight: var(--font-rw);
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
`;function yj(){const[r,a]=E.useState(!1),[s,l]=E.useState(!1),[o,c]=E.useState(!1),[h,m]=E.useState(!1),p=bn(),g=()=>{l(b=>!b)},v=()=>{l(b=>!b)};return E.useEffect(()=>{const b=()=>{a(window.innerWidth<768)};return b(),window.addEventListener("resize",b),window.innerWidth>768?l(!0):l(!1),()=>window.removeEventListener("resize",b)},[r]),E.useEffect(()=>{p.pathname==="/admin/home"?c(!0):c(!1),p.pathname.includes("create")||p.pathname.includes("update")?m(!0):m(!1)},[p.pathname]),f.jsxs(f.Fragment,{children:[r&&f.jsx(sj,{handleNav:v}),f.jsxs("main",{children:[s&&f.jsx(hj,{handleCloseNav:g}),f.jsx(bj,{$isHome:o,$isCreate:h,children:f.jsx("div",{children:f.jsx(dv,{})})})]})]})}const bj=H.section`
  grid-column: 1 / -1;
  padding-inline: 1.6rem;

  @media screen and (min-width: 468px) and (max-width: 768px) {
    padding-inline: 2rem;
  }
  
  @media screen and (min-width: 769px) {
    margin-left: 24rem;
    padding-inline: 2.4rem;
  }


  & > div {
    background-color: ${({$isHome:r})=>r?"transparent":"var(--white-color)"};
    border-radius: ${({$isHome:r})=>r?"none":"1rem"};
    padding: ${({$isHome:r})=>r?"none":"2rem"};
    box-shadow: ${({$isHome:r})=>r?"none":"0 5px 15px var(--stroke-color)"};
    min-height: ${({$isCreate:r})=>r?"calc(100vh - 18rem)":"none"};
    height: ${({$isCreate:r})=>r?"none":"calc(100vh - 18rem)"};
    @media screen and (min-width: 769px) {
      min-height: ${({$isCreate:r})=>r?"calc(100vh - 16rem)":"none"};
      height: ${({$isCreate:r})=>r?"none":"calc(100vh - 16rem)"};
    }
  }
`;async function wj({data:r,tableName:a}){try{const{data:s,error:l}=await Ya.from(a).insert([r]).select();if(l)throw new Error("글 작성에 실패하였습니다.");return s[0]}catch(s){throw{error:s}}}async function xj(r){try{const{data:a,error:s}=await Ya.from(r).select("*");if(s)throw new Error("글 조회에 실패하였습니다.");return a}catch(a){throw{error:a}}}async function _j({id:r,data:a,tableName:s}){try{const{data:l,error:o}=await Ya.from(s).update(a).eq("id",r).select();if(o)throw new Error("글 수정에 실패하였습니다.");return l}catch(l){throw{error:l}}}async function Sj({id:r,tableName:a}){try{const{error:s}=await Ya.from(a).delete().eq("id",r);if(s)throw new Error("글 삭제에 실패하였습니다.")}catch(s){throw{error:s}}}const st=d0((r,a)=>({product_product:[],store_store:[],store_business:[],commu_event:[],commu_faq:[],commu_qna:[],createPost:async(s,l)=>{const o=Date.now(),c={id:o,...s};r(h=>{switch(l){case"product_product":return{product_product:[c,...h.product_product]};case"commu_faq":return{commu_faq:[c,...h.commu_faq]};case"commu_event":return{commu_event:[c,...h.commu_event]};case"commu_qna":return{commu_qna:[c,...h.commu_qna]};case"store_store":return{store_store:[c,...h.store_store]};case"store_business":return{store_business:[c,...h.store_business]};default:return h}});try{const h=await wj({data:s,tableName:l});r(m=>{switch(l){case"product_product":return{product_product:m.product_product.map(p=>p.id===o?h:p)};case"commu_faq":return{commu_faq:m.commu_faq.map(p=>p.id===o?h:p)};case"commu_event":return{commu_event:m.commu_event.map(p=>p.id===o?h:p)};case"commu_qna":return{commu_qna:m.commu_qna.map(p=>p.id===o?h:p)};case"store_store":return{store_store:m.store_store.map(p=>p.id===o?h:p)};case"store_business":return{store_business:m.store_business.map(p=>p.id===o?h:p)};default:return m}})}catch(h){r(m=>{switch(l){case"product_product":return{product_product:m.product_product.filter(p=>p.id!==o)};case"commu_faq":return{commu_faq:m.commu_faq.filter(p=>p.id!==o)};case"commu_event":return{commu_event:m.commu_event.filter(p=>p.id!==o)};case"commu_qna":return{commu_qna:m.commu_qna.filter(p=>p.id!==o)};case"store_store":return{store_store:m.store_store.filter(p=>p.id!==o)};case"store_business":return{store_business:m.store_business.filter(p=>p.id!==o)};default:return m}}),console.error("생성 실패:",h)}},updatePost:async(s,l,o)=>{const c=a()[o];r(h=>{switch(o){case"product_product":return{product_product:h.product_product.map(m=>m.id===s?{...m,...l}:m)};case"commu_faq":return{commu_faq:h.commu_faq.map(m=>m.id===s?{...m,...l}:m)};case"commu_event":return{commu_event:h.commu_event.map(m=>m.id===s?{...m,...l}:m)};case"commu_qna":return{commu_qna:h.commu_qna.map(m=>m.id===s?{...m,...l}:m)};case"store_store":return{store_store:h.store_store.map(m=>m.id===s?{...m,...l}:m)};case"store_business":return{store_business:h.store_business.map(m=>m.id===s?{...m,...l}:m)};default:return h}});try{await _j({id:s,data:l,tableName:o})}catch(h){r({[o]:c}),console.error("업데이트 실패:",h)}},deletePost:async(s,l)=>{const o=a()[l];r(c=>{switch(l){case"product_product":return{product_product:c.product_product.filter(h=>h.id!==s)};case"commu_faq":return{commu_faq:c.commu_faq.filter(h=>h.id!==s)};case"commu_event":return{commu_event:c.commu_event.filter(h=>h.id!==s)};case"commu_qna":return{commu_qna:c.commu_qna.filter(h=>h.id!==s)};case"store_store":return{store_store:c.store_store.filter(h=>h.id!==s)};case"store_business":return{store_business:c.store_business.filter(h=>h.id!==s)};default:return c}});try{await Sj({id:s,tableName:l})}catch(c){r({[l]:o}),console.error("삭제 실패:",c)}},readPost:async s=>{try{const l=await xj(s);r({[s]:l})}catch(l){console.error("조회 실패:",l)}}})),ai=H.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  padding: 2rem;
  z-index: 10;
  border-radius: 1rem;
  border: 2px solid var(--stroke-color);
  background-color: var(--white-color);
`;function jj(){const{commu_event:r,readPost:a,deletePost:s}=st(),[l,o]=E.useState(!1),[c,h]=E.useState(!1),[m,p]=E.useState(""),[g,v]=E.useState(r);E.useEffect(()=>{(async()=>{l||(await a("commu_event"),o(!0)),v([...r].sort((k,z)=>new Date(z.created_at)-new Date(k.created_at)))})()},[r,l,a]);const b=S=>{h(!0),p(S)},x=()=>{h(!1)},_=async()=>{try{await s(m,"commu_event"),h(!1)}catch(S){console.error(S)}};return f.jsxs(f.Fragment,{children:[f.jsxs(Ej,{children:[f.jsxs("div",{children:[f.jsx(Vv,{}),f.jsx("h1",{children:"전체 이벤트 목록"})]}),f.jsx(Ie,{to:"create",children:"신규 이벤트 등록"})]}),f.jsx(Tj,{children:f.jsxs(Aj,{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"제목"}),f.jsx("th",{children:"내용"}),f.jsx("th",{children:"Edit"}),f.jsx("th",{children:"Delete"})]})}),f.jsx("tbody",{children:g?.map(S=>f.jsxs("tr",{children:[f.jsx("td",{children:S.title}),f.jsx("td",{children:S.content}),f.jsx("td",{children:f.jsx(Ie,{to:`update/${S.id}`,children:"Edit"})}),f.jsx("td",{children:f.jsx("button",{onClick:()=>b(S.id),children:"Delete"})})]},S.id))})]})}),c&&f.jsxs(kj,{children:[f.jsx("h2",{children:"정말 삭제하시겠습니까?"}),f.jsxs("div",{children:[f.jsx(mt,{onClick:x,children:"취소"}),f.jsx(mt,{onClick:_,children:"삭제"})]})]})]})}const Ej=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  & h1,
  span {
    font-size: 1.6rem;
    font-weight: var(--font-mw);
  }
  & span {
    color: var(--bg-color);
  }
  & svg {
    width: 1.6rem;
  }
  & a {
    background-color: var(--boxBg-color);
    color: var(--white-color);
    border-radius: 1rem;
    padding: 1rem 2rem;
    font-size: var(--font-sz);
  }
`,Tj=H.div`
  overflow-y: auto;
  margin-top: 6rem;
  overflow-y: auto;
`,Aj=H.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  padding-right: 1rem;

  & tbody > tr {
    border-top: 1px solid var(--stroke-color);
  }

  & th,
  td {
    width: calc(100% / 4);
    padding: 1.2rem;
  }
  & th {
    font-size: var(--font-smz);
    font-weight: var(--font-mw);
  }
  & td {
    font-size: var(--font-sz);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  & button,
  a {
    font-size: var(--font-sz);
    width: 100%;
  }
  & button {
    color: var(--error-color);
  }
`,kj=H(ai)`
  border-color: var(--error-color);
  & > h2 {
    text-align: center;
    color: var(--error-color);
    font-size: var(--font-mz);
    font-weight: var(--font-mw);
  }
  & > div {
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
  }
  & button {
    width: 100%;
    background-color: var(--error-color);
  }
  & button:first-child {
    background-color: var(--white-color);
    color: var(--text-color);
    border: 1px solid var(--stroke-color);
  }
`;function Lg(){const[r,a]=E.useState({title:"",imgurl:"",content:""}),[s,l]=E.useState(!1),[o,c]=E.useState(""),[h,m]=E.useState(""),{commu_event:p,readPost:g,createPost:v,updatePost:b}=st(),x=pa(),_=ei(),S=!!_.id;E.useEffect(()=>{(async()=>{S&&!s&&await g("commu_event"),l(!0)})()},[S,s,g]),E.useEffect(()=>{if(S&&p.length>0){const M=p.find(N=>N?.id===_.id);M&&(a({title:M.title,imgurl:M.imgurl,content:M.content}),M.imgurl&&c(M.imgurl))}},[p,S,_.id]);const k=async M=>{M.preventDefault();let N=r.imgurl;try{if(o){const Q=new FormData;Q.append("file",o),Q.append("upload_preset","starScope");const V=await fetch("https://api.cloudinary.com/v1_1/dx71aeltq/image/upload",{method:"POST",body:Q});if(!V.ok)throw new Error("이미지 오류");N=(await V.json()).url}}catch(Q){console.error(Q)}const G={...r,imgurl:N};if(G.title.trim()===""){m("제목을 입력해주세요.");return}if(G.content.trim()===""){m("내용을 입력해주세요.");return}if(G.imgurl.trim()===""){m("이미지를 등록하세요.");return}try{S?await b(_.id,G,"commu_event"):await v(G,"commu_event"),x("/admin/event")}catch(Q){console.error(Q)}},z=M=>{const{name:N,value:G}=M.target;a(Q=>({...Q,[N]:G}))},B=M=>{const N=M.target.files?.[0];if(!N)return;const G=new FileReader;G.readAsDataURL(N),G.onload=()=>{c(G.result)}};return f.jsxs(f.Fragment,{children:[f.jsxs(Oj,{children:[f.jsx(Vv,{}),f.jsx("h1",{children:S?"기존 이벤트 수정":"신규 이벤트 등록"})]}),h&&f.jsx(Pa,{children:h}),f.jsxs(zj,{onSubmit:k,children:[f.jsxs(Bg,{children:[f.jsx("label",{htmlFor:"title",children:"제목"}),f.jsx(Ue,{type:"text",id:"title",name:"title",autoComplete:"off",value:r.title,onChange:z,placeholder:"제목을 입력해주세요"})]}),f.jsxs(Cj,{children:[f.jsx("label",{htmlFor:"imgurl",children:"이벤트 사진"}),o?f.jsxs($g,{$previewImg:o,children:[f.jsx("img",{src:o,alt:"Preview"}),f.jsx("button",{type:"button",onClick:()=>c(""),children:f.jsx(Ud,{})})]}):f.jsxs($g,{$previewImg:o,children:[f.jsx("input",{type:"file",id:"imgurl",accept:"image/*",className:"a11y-hidden",onChange:B}),f.jsxs("label",{htmlFor:"imgurl",children:[f.jsx(Qv,{}),f.jsx("span",{children:"이미지 등록"})]})]})]}),f.jsxs(Bg,{children:[f.jsx("label",{htmlFor:"content",children:"이벤트 설명"}),f.jsx("textarea",{id:"content",name:"content",autoComplete:"off",value:r.content,onChange:z,placeholder:"이벤트 설명을 입력해주세요"})]}),f.jsx(mt,{type:"submit",children:S?"이벤트 수정 완료":"신규 이벤트 등록"})]})]})}const Oj=H.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
  & h1 {
    font-size: 1.6rem;
    font-weight: var(--font-mw);
  }
  & svg {
    width: 1.6rem;
  }
`,zj=H.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & label {
    font-size: var(--font-mz);
  }
  & textarea {
    min-height: 14rem;
  }
  & textarea,
  input {
    resize: none;
    padding: 1.2rem;
    border: 1px solid var(--stroke-color);
    border-radius: 1rem;
    font-size: var(--font-mz);
  }
  & textarea::placeholder,
  input::placeholder {
    color: var(--bg-color);
    font-size: var(--font-mz);
  }
  & > button {
    width: fit-content;
    margin: 0 auto;
    margin-top: 4rem;
  }
`,Bg=H.div`
  display: flex;
  flex-direction: column;
`,Cj=H.div`
  display: flex;
  flex-direction: column;
`,$g=H.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 0.5;
  background-color: ${({$previewImg:r})=>r?"var(--white-color)":"var(--bg-color)"};
  box-shadow: ${({$previewImg:r})=>r?"0 5px 15px var(--stroke-color)":"none"};
  border-radius: 1rem;
  display: flex;
  justify-content: center;

  & > label {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  & > img {
    width: 100%;
    aspect-ratio: 1 / 0.5;
    object-fit: cover;
    vertical-align: top;
    border-radius: 1rem;
  }

  & > button {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;function Rj(){const{commu_faq:r,readPost:a,deletePost:s}=st(),[l,o]=E.useState(!1),[c,h]=E.useState(!1),[m,p]=E.useState(""),[g,v]=E.useState(r);E.useEffect(()=>{(async()=>{l||(await a("commu_faq"),o(!0)),v([...r].sort((k,z)=>new Date(z.created_at)-new Date(k.created_at)))})()},[r,l,a]);const b=S=>{h(!0),p(S)},x=()=>{h(!1)},_=async()=>{try{await s(m,"commu_faq"),h(!1)}catch(S){console.error(S)}};return f.jsxs(f.Fragment,{children:[f.jsxs(Dj,{children:[f.jsxs("div",{children:[f.jsx(Pv,{}),f.jsx("h1",{children:"FAQ 목록"})]}),f.jsx(Ie,{to:"create",children:"신규 FAQ 등록"})]}),f.jsx(Mj,{children:f.jsxs(Uj,{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"Title"}),f.jsx("th",{children:"Content"}),f.jsx("th",{children:"Edit"}),f.jsx("th",{children:"Delete"})]})}),f.jsx("tbody",{children:g?.map(S=>f.jsxs("tr",{children:[f.jsx("td",{children:S.title}),f.jsx("td",{children:S.content}),f.jsx("td",{children:f.jsx(Ie,{to:`update/${S.id}`,children:"Edit"})}),f.jsx("td",{children:f.jsx("button",{onClick:()=>b(S.id),children:"Delete"})})]},S.id))})]})}),c&&f.jsxs(Nj,{children:[f.jsx("h2",{children:"정말 삭제하시겠습니까?"}),f.jsxs("div",{children:[f.jsx(mt,{onClick:x,children:"취소"}),f.jsx(mt,{onClick:_,children:"삭제"})]})]})]})}const Dj=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  & h1 {
    font-size: 1.6rem;
    font-weight: var(--font-mw);
  }
  & svg {
    width: 1.6rem;
  }
  & a {
    background-color: var(--boxBg-color);
    color: var(--white-color);
    border-radius: 1rem;
    padding: 1rem 2rem;
    font-size: var(--font-sz);
  }
`,Mj=H.div`
  overflow-y: auto;
  margin-top: 6rem;
  overflow-y: auto;
`,Uj=H.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  padding-right: 1rem;

  & tbody > tr {
    border-top: 1px solid var(--stroke-color);
  }

  & th,
  td {
    width: calc(100% / 4);
    padding: 1.2rem;
  }
  & th {
    font-size: var(--font-smz);
    font-weight: var(--font-mw);
  }
  & td {
    font-size: var(--font-sz);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  & button,
  a {
    font-size: var(--font-sz);
    width: 100%;
  }
  & button {
    color: var(--error-color);
  }
`,Nj=H(ai)`
  border-color: var(--error-color);
  & > h2 {
    text-align: center;
    color: var(--error-color);
    font-size: var(--font-mz);
    font-weight: var(--font-mw);
  }
  & > div {
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
  }
  & button {
    width: 100%;
    background-color: var(--error-color);
  }
  & button:first-child {
    background-color: var(--white-color);
    color: var(--text-color);
    border: 1px solid var(--stroke-color);
  }
`;function Hg(){const[r,a]=E.useState({title:"",content:""}),[s,l]=E.useState(!1),[o,c]=E.useState(""),{commu_faq:h,readPost:m,createPost:p,updatePost:g}=st(),v=pa(),b=ei(),x=!!b.id;E.useEffect(()=>{(async()=>{s||await m("commu_faq"),l(!0)})()},[s,m]),E.useEffect(()=>{if(x&&h.length>0){const k=h.find(z=>z?.id===b.id);k&&a({title:k.title,content:k.content})}},[h,x,b.id]);const _=async k=>{if(k.preventDefault(),r.title.trim()===""){c("제목을 입력해주세요.");return}if(r.content.trim()===""){c("답변을 입력해주세요.");return}try{x?await g(b.id,r,"commu_faq"):await p(r,"commu_faq"),v("/admin/faq")}catch(z){console.error(z)}},S=k=>{const{name:z,value:B}=k.target;a(M=>({...M,[z]:B}))};return f.jsxs(f.Fragment,{children:[f.jsx(qj,{children:f.jsxs("div",{children:[f.jsx(Pv,{}),f.jsx("h1",{children:x?"기존 FAQ 수정":"신규 FAQ 등록"})]})}),o&&f.jsx(Pa,{children:o}),f.jsxs(Lj,{onSubmit:_,children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"title",children:"제목"}),f.jsx(Ue,{type:"text",id:"title",name:"title",autoComplete:"off",value:r.title,onChange:S,placeholder:"제목을 입력해주세요"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"content",children:"답변"}),f.jsx("textarea",{id:"content",name:"content",autoComplete:"off",value:r.content,onChange:S,placeholder:"답변을 입력해주세요"})]}),f.jsx(mt,{type:"submit",children:x?"FAQ 수정 완료":"신규 FAQ 등록"})]})]})}const qj=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  & > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  & h1 {
    font-size: 1.6rem;
    font-weight: var(--font-mw);
  }
  & svg {
    width: 1.6rem;
  }
`,Lj=H.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > div {
    display: flex;
    flex-direction: column;
  }
  & label {
    font-size: var(--font-mz);
  }
  & textarea {
    min-height: 40rem;
  }
  & textarea,
  input {
    resize: none;
    padding: 1.2rem;
    border: 1px solid var(--stroke-color);
    border-radius: 1rem;
    font-size: var(--font-mz);
  }
  & textarea::placeholder,
  input::placeholder {
    color: var(--bg-color);
    font-size: var(--font-mz);
  }
  & button {
    width: fit-content;
    margin: 0 auto;
    margin-top: 4rem;
  }
`;function Bj(){const{store_store:r,readPost:a,deletePost:s}=st(),[l,o]=E.useState(!1),[c,h]=E.useState(!1),[m,p]=E.useState(""),[g,v]=E.useState(r);E.useEffect(()=>{(async()=>{l||(await a("store_store"),o(!0)),v([...r].sort((k,z)=>new Date(z.created_at)-new Date(k.created_at)))})()},[r,l,a]);const b=S=>{h(!0),p(S)},x=()=>{h(!1)},_=async()=>{try{await s(m,"store_store"),h(!1)}catch(S){console.error(S)}};return f.jsxs(f.Fragment,{children:[f.jsxs($j,{children:[f.jsxs("div",{children:[f.jsx(Ha,{}),f.jsxs("h1",{children:["전체 매장 목록 ",f.jsxs("span",{children:["/ 총: ",g.length," 매장"]})]})]}),f.jsx(Ie,{to:"create",children:"신규 매장 등록"})]}),f.jsx(Hj,{children:g.length>0?f.jsxs(Yj,{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"매장명"}),f.jsx("th",{children:"실적도"}),f.jsx("th",{children:"오픈 시간"}),f.jsx("th",{children:"마감 시간"}),f.jsx("th",{children:"Edit"}),f.jsx("th",{children:"Delete"})]})}),f.jsx("tbody",{children:g?.map(S=>f.jsxs("tr",{children:[f.jsx("td",{children:S.title}),f.jsx("td",{children:S.performance}),f.jsx("td",{children:S.open}),f.jsx("td",{children:S.close}),f.jsx("td",{children:f.jsx(Ie,{to:`update/${S.id}`,children:"Edit"})}),f.jsx("td",{children:f.jsx("button",{onClick:()=>b(S.id),children:"Delete"})})]},S.id))})]}):f.jsxs(Gj,{children:[f.jsx(Ha,{}),f.jsx("strong",{children:"등록된 상품이 없습니다."})]})}),c&&f.jsxs(Pj,{children:[f.jsx("h2",{children:"정말 삭제하시겠습니까?"}),f.jsxs("div",{children:[f.jsx(mt,{onClick:x,children:"취소"}),f.jsx(mt,{onClick:_,children:"삭제"})]})]})]})}const $j=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  & h1,
  span {
    font-size: 1.6rem;
    font-weight: var(--font-mw);
  }
  & span {
    color: var(--bg-color);
  }
  & svg {
    width: 1.6rem;
  }
  & a {
    background-color: var(--boxBg-color);
    color: var(--white-color);
    border-radius: 1rem;
    padding: 1rem 2rem;
    font-size: var(--font-sz);
  }
`,Hj=H.div`
  overflow-y: auto;
  margin-top: 6rem;
  height: calc(100% - 9.7rem);
`,Gj=H.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  & > strong {
    font-size: var(--font-smz);
    font-weight: var(--font-bw);
  }
`,Yj=H.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  padding-right: 1rem;

  & tbody > tr {
    border-top: 1px solid var(--stroke-color);
  }

  & th,
  td {
    width: calc(100% / 4);
    padding: 1.2rem;
  }
  & th {
    font-size: var(--font-smz);
    font-weight: var(--font-mw);
  }
  & td {
    font-size: var(--font-sz);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  & button,
  a {
    font-size: var(--font-sz);
    width: 100%;
  }
  & button {
    color: var(--error-color);
  }
`,Pj=H(ai)`
  border-color: var(--error-color);
  & > h2 {
    text-align: center;
    color: var(--error-color);
    font-size: var(--font-mz);
    font-weight: var(--font-mw);
  }
  & > div {
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
  }
  & button {
    width: 100%;
    background-color: var(--error-color);
  }
  & button:first-child {
    background-color: var(--white-color);
    color: var(--text-color);
    border: 1px solid var(--stroke-color);
  }
`;function Gg(){const[r,a]=E.useState({title:"",location:"",open:"",close:""}),[s,l]=E.useState(!1),[o,c]=E.useState(""),{store_store:h,readPost:m,createPost:p,updatePost:g}=st(),v=pa(),b=ei(),x=!!b.id;E.useEffect(()=>{(async()=>{x&&!s&&await m("store_store"),l(!0)})()},[x,s,m]),E.useEffect(()=>{if(x&&h.length>0){const k=h.find(z=>z?.id===b.id);k&&a({title:k.title,location:k.location,open:k.open,close:k.close})}},[h,x,b.id]);const _=async k=>{if(k.preventDefault(),r.title.trim()===""){c("제목을 입력해주세요.");return}if(r.location.trim()===""){c("위치를 입력해주세요.");return}if(r.open.trim()===""){c("오픈 시간을 입력해주세요.");return}if(r.close.trim()===""){c("마감 시간을 입력해주세요.");return}try{x?await g(b.id,r,"store_store"):await p(r,"store_store"),v("/admin/store")}catch(z){console.error(z)}},S=k=>{const{name:z,value:B}=k.target;a(M=>({...M,[z]:B}))};return f.jsxs(f.Fragment,{children:[f.jsxs(Qj,{children:[f.jsx(Ha,{}),f.jsx("h1",{children:x?"기존 매장 수정":"신규 매장 등록"})]}),o&&f.jsx(Pa,{children:o}),f.jsxs(Vj,{onSubmit:_,children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"title",children:"매장명"}),f.jsx(Ue,{type:"text",id:"title",name:"title",autoComplete:"off",value:r.title,onChange:S,placeholder:"제목을 입력해주세요"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"location",children:"위치"}),f.jsx(Ue,{type:"text",id:"location",name:"location",autoComplete:"off",value:r.location,onChange:S,placeholder:"위치를 입력해주세요."})]}),f.jsxs(Xj,{children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"open",children:"오픈 시간"}),f.jsx(Ue,{type:"time",id:"open",name:"open",value:r.open,onChange:S})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"close",children:"마감 시간"}),f.jsx(Ue,{type:"time",id:"close",name:"close",value:r.close,onChange:S})]})]}),f.jsx(mt,{type:"submit",children:x?"매장 수정 완료":"신규 매장 등록"})]})]})}const Qj=H.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
  & h1 {
    font-size: 1.6rem;
    font-weight: var(--font-mw);
  }
  & svg {
    width: 1.6rem;
  }
`,Vj=H.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > div {
    display: flex;
    flex-direction: column;
  }
  & > div:nth-child(3) {
    flex-direction: row;
  }
  & label {
    font-size: var(--font-mz);
  }
  & textarea {
    min-height: 40rem;
  }
  & textarea,
  input {
    resize: none;
    padding: 1.2rem;
    border: 1px solid var(--stroke-color);
    border-radius: 1rem;
    font-size: var(--font-mz);
  }
  & textarea::placeholder,
  input::placeholder {
    color: var(--bg-color);
    font-size: var(--font-mz);
  }
  & button {
    width: fit-content;
    margin: 0 auto;
    margin-top: 4rem;
  }
`,Xj=H.div`
  gap: 2rem;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;function Kj(){const{product_product:r,readPost:a,deletePost:s}=st(),[l,o]=E.useState(!1),[c,h]=E.useState(!1),[m,p]=E.useState(""),[g,v]=E.useState(r);E.useEffect(()=>{(async()=>{l||(await a("product_product"),o(!0)),v([...r].sort((z,B)=>new Date(B.created_at)-new Date(z.created_at)))})()},[r,l,a]);const b=k=>{h(!0),p(k)},x=()=>{h(!1)},_=async()=>{try{await s(m,"product_product"),h(!1)}catch(k){console.error(k)}},S=k=>{switch(k){case"A":return"굴절망원경";case"B":return"반사망원경";case"C":return"돕소니안";default:return"굴절망원경"}};return f.jsxs(f.Fragment,{children:[f.jsx("title",{children:"StarScope 상품"}),f.jsxs(Ij,{children:[f.jsxs("div",{children:[f.jsx(so,{}),f.jsxs("h1",{children:["전체 상품 목록 ",f.jsxs("span",{children:["/ 총: ",g.length," 개"]})]})]}),f.jsx(Ie,{to:"create",children:"신규 상품 등록"})]}),f.jsx(Zj,{children:g.length>0?f.jsxs(Fj,{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"상품명"}),f.jsx("th",{children:"인기도"}),f.jsx("th",{children:"종류"}),f.jsx("th",{children:"Edit"}),f.jsx("th",{children:"Delete"})]})}),f.jsx("tbody",{children:g?.map(k=>f.jsxs("tr",{children:[f.jsx("td",{children:k.title}),f.jsx("td",{children:k.popular}),f.jsx("td",{children:S(k.type)}),f.jsx("td",{children:f.jsx(Ie,{to:`update/${k.id}`,children:"Edit"})}),f.jsx("td",{children:f.jsx("button",{onClick:()=>b(k.id),children:"Delete"})})]},k.id))})]}):f.jsxs(Jj,{children:[f.jsx(so,{}),f.jsx("strong",{children:"등록된 상품이 없습니다."})]})}),c&&f.jsxs(Wj,{children:[f.jsx("h2",{children:"정말 삭제하시겠습니까?"}),f.jsxs("div",{children:[f.jsx(mt,{onClick:x,children:"취소"}),f.jsx(mt,{onClick:_,children:"삭제"})]})]})]})}const Ij=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  & h1,
  span {
    font-size: 1.6rem;
    font-weight: var(--font-mw);
  }
  & span {
    color: var(--bg-color);
  }
  & svg {
    width: 1.6rem;
  }
  & a {
    background-color: var(--boxBg-color);
    color: var(--white-color);
    border-radius: 1rem;
    padding: 1rem 2rem;
    font-size: var(--font-sz);
  }
`,Zj=H.div`
  overflow-y: auto;
  margin-top: 6rem;
  height: calc(100% - 9.7rem);
`,Jj=H.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  & > strong {
    font-size: var(--font-smz);
    font-weight: var(--font-bw);
  }
`,Fj=H.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  padding-right: 1rem;

  & tbody > tr {
    border-top: 1px solid var(--stroke-color);
  }

  & th,
  td {
    width: calc(100% / 4);
    padding: 1.2rem;
  }
  & th {
    font-size: var(--font-smz);
    font-weight: var(--font-mw);
  }
  & td {
    font-size: var(--font-sz);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  & button,
  a {
    font-size: var(--font-sz);
    width: 100%;
  }
  & button {
    color: var(--error-color);
  }
`,Wj=H(ai)`
  border-color: var(--error-color);
  & > h2 {
    text-align: center;
    color: var(--error-color);
    font-size: var(--font-mz);
    font-weight: var(--font-mw);
  }
  & > div {
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
  }
  & button {
    width: 100%;
    background-color: var(--error-color);
  }
  & button:first-child {
    background-color: var(--white-color);
    color: var(--text-color);
    border: 1px solid var(--stroke-color);
  }
`;function Yg(){const[r,a]=E.useState({title:"",imgurl:"",type:"",aperture:"",focallength:"",apertureratio:"",content:""}),[s,l]=E.useState(!1),[o,c]=E.useState(""),[h,m]=E.useState(""),{product_product:p,readPost:g,createPost:v,updatePost:b}=st(),x=pa(),_=ei(),S=!!_.id;E.useEffect(()=>{(async()=>{S&&!s&&await g("product_product"),l(!0)})()},[S,s,g]),E.useEffect(()=>{if(S&&p.length>0){const M=p.find(N=>N?.id===_.id);M&&(a({title:M.title,imgurl:M.imgurl,type:M.type,aperture:M.aperture,focallength:M.focallength,apertureratio:M.apertureratio,content:M.content}),M.imgurl&&c(M.imgurl))}},[p,S,_.id]);const k=async M=>{M.preventDefault();let N=r.imgurl;try{if(o){const Q=new FormData;Q.append("file",o),Q.append("upload_preset","starScope");const V=await fetch("https://api.cloudinary.com/v1_1/dx71aeltq/image/upload",{method:"POST",body:Q});if(!V.ok)throw new Error("이미지 오류");N=(await V.json()).url}}catch(Q){console.error(Q)}const G={...r,imgurl:N};if(G.title.trim()===""){m("상품명을 입력해주세요.");return}if(G.type.trim()===""){m("제품종류를 선택해주세요.");return}if(G.aperture.trim()===""){m("구경을 입력해주세요.");return}if(G.focallength.trim()===""){m("초점거리를 입력해주세요.");return}if(G.apertureratio.trim()===""){m("초점비를 입력해주세요.");return}if(G.content.trim()===""){m("제품설명을 입력해주세요.");return}if(G.imgurl.trim()===""){m("이미지를 등록하세요.");return}try{S?await b(_.id,G,"product_product"):await v(G,"product_product"),x("/admin/product")}catch(Q){console.error(Q)}},z=M=>{const{name:N,value:G}=M.target;a(Q=>({...Q,[N]:G}))},B=M=>{const N=M.target.files?.[0];if(!N)return;const G=new FileReader;G.readAsDataURL(N),G.onload=()=>{c(G.result)}};return f.jsxs(f.Fragment,{children:[f.jsxs(e2,{children:[f.jsx(so,{}),f.jsx("h1",{children:S?"기존 상품 수정":"신규 상품 등록"})]}),h&&f.jsx(Pa,{children:h}),f.jsxs(t2,{onSubmit:k,children:[f.jsxs(Hr,{children:[f.jsx("label",{htmlFor:"title",children:"상품명"}),f.jsx(Ue,{type:"text",id:"title",name:"title",autoComplete:"off",value:r.title,onChange:z,placeholder:"상품명을 입력해주세요"})]}),f.jsxs(a2,{children:[f.jsx("label",{htmlFor:"imgurl",children:"제품 사진"}),o?f.jsxs(Pg,{$previewImg:o,children:[f.jsx("img",{src:o,alt:"Preview"}),f.jsx("button",{type:"button",onClick:()=>c(""),children:f.jsx(Ud,{})})]}):f.jsxs(Pg,{$previewImg:o,children:[f.jsx("input",{type:"file",id:"imgurl",accept:"image/*",className:"a11y-hidden",onChange:B}),f.jsxs("label",{htmlFor:"imgurl",children:[f.jsx(Qv,{}),f.jsx("span",{children:"이미지 등록"})]})]})]}),f.jsxs(n2,{children:[f.jsxs(Hr,{children:[f.jsx("label",{htmlFor:"title",children:"종류"}),f.jsxs("select",{name:"type",id:"type",value:r.type,onChange:z,children:[f.jsx("option",{value:"",children:"망원경 종류를 선택해주세요."}),f.jsx("option",{value:"A",children:"굴절 망원경"}),f.jsx("option",{value:"B",children:"반사 망원경"}),f.jsx("option",{value:"C",children:"돕소니안 망원경"})]})]}),f.jsxs(Hr,{children:[f.jsx("label",{htmlFor:"aperture",children:"구경 (mm)"}),f.jsx(Ue,{type:"number",id:"aperture",name:"aperture",autoComplete:"off",min:0,value:r.aperture,onChange:z,placeholder:"구경을 입력해주세요."})]}),f.jsxs(Hr,{children:[f.jsx("label",{htmlFor:"focallength",children:"초점거리 (mm)"}),f.jsx(Ue,{type:"number",id:"focallength",name:"focallength",autoComplete:"off",min:0,value:r.focallength,onChange:z,placeholder:"초점거리를 입력해주세요."})]}),f.jsxs(Hr,{children:[f.jsx("label",{htmlFor:"apertureratio",children:"초점비 (f/)"}),f.jsx(Ue,{type:"number",id:"apertureratio",name:"apertureratio",autoComplete:"off",min:0,step:"0.01",value:r.apertureratio,onChange:z,placeholder:"초점비를 입력해주세요."})]})]}),f.jsxs(Hr,{children:[f.jsx("label",{htmlFor:"content",children:"제품 설명"}),f.jsx("textarea",{id:"content",name:"content",autoComplete:"off",value:r.content,onChange:z,placeholder:"제품 설명을 입력해주세요"})]}),f.jsx(mt,{type:"submit",children:S?"상품 수정 완료":"신규 상품 등록"})]})]})}const e2=H.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
  & h1 {
    font-size: 1.6rem;
    font-weight: var(--font-mw);
  }
  & svg {
    width: 1.6rem;
  }
`,t2=H.form`
  margin-top: 2rem;
  min-height: calc(100% - 4.4rem);
  & > button {
    width: fit-content;
    margin: 0 auto;
    margin-top: 4rem;
  }
  & label {
    font-size: var(--font-mz);
  }
`,Hr=H.div`
  display: flex;
  flex-direction: column;
  & textarea {
    min-height: 14rem;
  }
  & select:focus {
    outline: none;
  }
  & textarea,
  input,
  select {
    resize: none;
    padding: 1.2rem;
    border: 1px solid var(--stroke-color);
    border-radius: 1rem;
    font-size: var(--font-mz);
  }

  & textarea::placeholder,
  input::placeholder {
    color: var(--bg-color);
    font-size: var(--font-mz);
  }
  & input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,n2=H.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-block: 2rem;
  & > div {
    width: 100%;
  }
`,a2=H.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`,Pg=H.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 0.5;
  background-color: ${({$previewImg:r})=>r?"var(--white-color)":"var(--bg-color)"};
  box-shadow: ${({$previewImg:r})=>r?"0 5px 15px var(--stroke-color)":"none"};
  border-radius: 1rem;
  display: flex;
  justify-content: center;

  & > label {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  & > img {
    width: 100%;
    aspect-ratio: 1 / 0.5;
    object-fit: contain;
    vertical-align: top;
    border-radius: 1rem;
  }

  & > button {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;function r2(){const{product_product:r,store_store:a,store_business:s,commu_qna:l,readPost:o}=st(),[c,h]=E.useState(r),[m,p]=E.useState(a);return E.useEffect(()=>{o("product_product"),o("store_store"),o("store_business"),o("commu_qna")},[]),E.useEffect(()=>{if(r?.length>0){const g=[...r].sort((v,b)=>b.popular-v.popular);h(g)}if(a?.length>0){const g=[...a].sort((v,b)=>b.performance-v.performance);p(g)}},[r,a]),f.jsxs(f.Fragment,{children:[f.jsx("title",{children:"StarScope 데시보드"}),f.jsx("h1",{className:"a11y-hidden",children:"StarScope DashBoard"}),f.jsxs(i2,{children:[f.jsxs("li",{children:[f.jsx("h2",{children:"상품 수"}),f.jsx("strong",{children:c?.length})]}),f.jsxs("li",{children:[f.jsx("h2",{children:"매장 수"}),f.jsx("strong",{children:m?.length})]}),f.jsxs("li",{children:[f.jsx("h2",{children:"일반 문의 수"}),f.jsx("strong",{children:l?.length})]}),f.jsxs("li",{children:[f.jsx("h2",{children:"창업 문의 수"}),f.jsx("strong",{children:s?.length})]})]}),f.jsxs(s2,{children:[f.jsxs("div",{children:[f.jsxs(Qg,{children:[f.jsx(cg,{}),f.jsx("h3",{children:"상품 순위"})]}),f.jsx(Vg,{children:c?.map(g=>f.jsxs("li",{children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"",children:g.title}),f.jsxs("strong",{children:[f.jsx("span",{children:g.popular})," / 999"]})]}),f.jsx("progress",{max:999,value:g.popular})]},g.id))})]}),f.jsxs("div",{children:[f.jsxs(Qg,{children:[f.jsx(cg,{}),f.jsx("h3",{children:"매장 순위"})]}),f.jsx(Vg,{children:m?.map(g=>f.jsxs("li",{children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"",children:g.title}),f.jsxs("strong",{children:[f.jsx("span",{children:g.performance})," / 999"]})]}),f.jsx("progress",{max:999,value:g.performance})]},g.id))})]})]})]})}const i2=H.ul`
  display: flex;
  gap: 2rem;
  & > li {
    width: 100%;
    height: 10rem;
    padding: 1rem;
    position: relative;
    background-color: var(--white-color);
    border-radius: 1rem;
    box-shadow: 0 5px 15px var(--stroke-color);
  }
  li > h2 {
    font-size: var(--font-sz);
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
  li > strong {
    font-size: 3rem;
    font-weight: var(--font-bw);
  }
`,s2=H.div`
  margin-top: 6rem;
  height: calc(100% - 16rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > div {
    width: 100%;
    height: calc(50% - 1rem);
    background-color: var(--white-color);
    border-radius: 1rem;
    box-shadow: 0 5px 15px var(--stroke-color);
    padding: 2rem;
  }
  @media screen and (min-width: 769px) {
    flex-direction: row;
    & > div {
      height: 100%;
    }
  }
`,Qg=H.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  & > svg {
    width: 1.6rem;
  }
  & > h3 {
    font-size: var(--font-smz);
    font-weight: var(--font-bw);
  }
`,Vg=H.ul`
  margin-top: 2rem;
  height: calc(100% - 4.4rem);
  overflow-y: auto;
  padding-right: 1rem;
  & > li {
    display: flex;
    flex-direction: column;
  }
  li:not(:first-child) {
    margin-top: 1rem;
  }
  li > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.4rem;
  }
  li > div label {
    font-size: var(--font-smz);
  }
  li > div span {
    font-size: var(--font-sz);
    font-weight: var(--font-bw);
  }
  li > progress {
    width: 100%;
    height: 1rem;
    border: 1px solid var(--stroke-color);
    border-radius: 1rem;
    overflow: hidden;
  }
  li > progress::-webkit-progress-bar {
    background-color: var(--white-color);
  }
  li > progress::-webkit-progress-value {
    height: 1rem;
    background-color: var(--boxBg-color);
  }
`;function l2(){const r=bn(),[a,s]=E.useState(""),[l,o]=E.useState(0),c=[{base:"/starscope//heroImg/heroImg1-768.webp",srcset:`
      /starscope/heroImg/heroImg1-480.webp 480w,
      /starscope/heroImg/heroImg1-768.webp 768w,
      /starscope/heroImg/heroImg1-1024.webp 1024w,
      /starscope/heroImg/heroImg1-1440.webp 1440w,
      /starscope/heroImg/heroImg1-1920.webp 1920w
    `},{base:"/starscope//heroImg/heroImg2-768.webp",srcset:`
      /starscope/heroImg/heroImg2-480.webp 480w,
      /starscope/heroImg/heroImg2-768.webp 768w,
      /starscope/heroImg/heroImg2-1024.webp 1024w,
      /starscope/heroImg/heroImg2-1440.webp 1440w,
      /starscope/heroImg/heroImg2-1920.webp 1920w
    `},{base:"/starscope//heroImg/heroImg3-768.webp",srcset:`
      /starscope/heroImg/heroImg3-480.webp 480w,
      /starscope/heroImg/heroImg3-768.webp 768w,
      /starscope/heroImg/heroImg3-1024.webp 1024w,
      /starscope/heroImg/heroImg3-1440.webp 1440w,
      /starscope/heroImg/heroImg3-1920.webp 1920w
    `}];return E.useEffect(()=>{const h=r.pathname;h.includes("/brand")?s("Brand"):h.includes("/product")?s("Product"):h.includes("/store")?s("Store"):h.includes("/commu")?s("Commu"):s("")},[r.pathname]),E.useEffect(()=>{const h=setInterval(()=>{o(m=>(m+1)%c.length)},5e3);return()=>clearInterval(h)},[]),f.jsxs(o2,{children:[f.jsx(u2,{children:c.map((h,m)=>f.jsx(c2,{src:h.base,srcSet:h.srcset,sizes:"100vw",alt:`hero_${m}`,$isActive:l===m},m))}),f.jsxs(d2,{children:[f.jsx(f2,{children:f.jsx("h1",{children:f.jsx(Ie,{to:"/",children:"StarScope"})})}),f.jsx(h2,{children:f.jsxs("ul",{children:[f.jsx(Yl,{$isActive:a==="Brand",children:f.jsx(Ie,{to:"/brand",children:"Brand"})}),f.jsx(Yl,{$isActive:a==="Product",children:f.jsx(Ie,{to:"/product",children:"Product"})}),f.jsx(Yl,{$isActive:a==="Store",children:f.jsx(Ie,{to:"/store",children:"Store"})}),f.jsx(Yl,{$isActive:a==="Commu",children:f.jsx(Ie,{to:"/commu",children:"Commu"})})]})})]})]})}const o2=H.header`
  position: relative;
`,u2=H.div`
  width: 100%;
  height: 60vh;
`,c2=H.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({$isActive:r})=>r?1:0};
  transition: opacity 1s ease-in-out;
  border-radius: 0 0 1rem 1rem;
`,d2=H.nav`
  min-width: 30rem;
  max-width: 40rem;
  height: 4rem;
  border-radius: 1rem;
  background-color: var(--boxBg-color);
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.8rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({$activeSearch:r})=>r?"3rem":"0"};
  z-index: 999;

  & a {
    color: var(--white-color);
  }

  & > div {
    height: 100%;
  }
`,f2=H.div`
  & > h1 {
    height: 100%;
    display: flex;
    align-items: center;
  }
  & a {
    font-size: var(--font-smz);
    font-weight: var(--font-bw);
  }
`,h2=H.div`
  width: 20rem;
  background-color: transparent;
  margin: 0 auto;
  & > ul {
    height: 100%;
    display: flex;
  }
`,Yl=H.li`
  width: 100%;
  & > a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-sz);
    font-weight: ${({$isActive:r})=>r?"var(--font-bw)":"var(--font-rw)"};
    text-decoration: ${({$isActive:r})=>r?"underline":"none"};
  }
`;function m2(){return f.jsxs(p2,{children:[f.jsx("h4",{children:"StarScope"}),f.jsxs(g2,{children:[f.jsxs("span",{children:[f.jsx("strong",{children:"주식회사"}),"StarScope"]}),f.jsxs("span",{children:[f.jsx("strong",{children:"대표자"}),"StarScope"]}),f.jsxs("span",{children:[f.jsx("strong",{children:"사업자번호"}),"214-86-39201"]}),f.jsx("br",{}),f.jsxs("span",{children:[f.jsx("strong",{children:"주소"}),"서울시 강남구 12-45"]}),f.jsxs("span",{children:[f.jsx("strong",{children:"대표번호"}),"02-3456-7788"]}),f.jsxs("span",{children:[f.jsx("strong",{children:"문의"}),"cs@starscope.co.kr"]})]}),f.jsx("p",{children:"Copyright ⓒ starScope. all Rights Reserved."}),f.jsx("p",{children:"DESIGNED BY 5647kr"})]})}const p2=H.footer`
  width: 100%;
  height: 30rem;
  background-color: var(--text-color);
  padding: 4rem;

  & h4 {
    font-size: var(--font-lz);
    font-weight: var(--font-bw);
    color: var(--white-color);
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--white-color);
  }

  & > p {
    color: var(--white-color);
    font-size: var(--font-sz);
  }
  & > p:last-child {
    margin-top: 1rem;
  }
`,g2=H.div`
  margin: 4rem 0 2rem;

  & span,
  strong {
    font-size: var(--font-sz);
    color: var(--white-color);
    margin-right: 1rem;
  }
  & strong {
    font-weight: var(--font-mw);
  }
`;function v2(){const{pathname:r}=bn();return E.useEffect(()=>{window.scrollTo({top:0})},[r]),f.jsxs(f.Fragment,{children:[f.jsx(l2,{}),f.jsx("main",{children:f.jsx(dv,{})}),f.jsx(m2,{})]})}const ri=H.section`
  grid-column: 1 / -1;
`,pt=H.section`
  grid-column: 1 / -1;
  padding-inline: 1.6rem;
  
  @media screen and (min-width: 481px) and (max-width: 768px) {
    grid-column: 2 / -2;
    padding-inline: 0rem;
  }
  
  @media screen and (min-width: 769px) {
    grid-column: 3 / -3;
    padding-inline: 0rem;
  }
`;function y2(){const[r,a]=E.useState(localStorage.getItem("product")||"A"),{product_product:s,readPost:l}=st(),[o,c]=E.useState([]);E.useEffect(()=>{s.length===0&&l("product_product")},[s,l]),E.useEffect(()=>{s.length>0&&m(r)},[s,r]);const h=p=>{localStorage.setItem("product",p),a(p)},m=p=>{const g=s.filter(v=>v.type===p);c(g)};return E.useEffect(()=>{if(s.length>0){const p=document.querySelectorAll(".product-items");p.forEach(g=>{g.classList.remove("show"),g.style.transitionDelay="0s"}),p.forEach((g,v)=>{g.style.transitionDelay=`${v*.2}s`,setTimeout(()=>{g.classList.add("show")},50)})}},[s,o]),f.jsxs(f.Fragment,{children:[f.jsx("title",{children:"StarScope 제품"}),f.jsx("h1",{className:"a11y-hidden",children:"StarScope 망원경 제품"}),f.jsx(b2,{children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx(Jc,{value:"A",$isActive:r==="A",onClick:p=>{h(p.target.value)},children:"굴절 망원경"})}),f.jsx("li",{children:f.jsx(Jc,{value:"B",$isActive:r==="B",onClick:p=>{h(p.target.value)},children:"반사 망원경"})}),f.jsx("li",{children:f.jsx(Jc,{value:"C",$isActive:r==="C",onClick:p=>{h(p.target.value)},children:"돕소니안"})})]})}),f.jsx(w2,{children:f.jsx("ul",{children:o?.map(p=>f.jsx("li",{className:"product-items",children:f.jsxs(Ie,{to:`/product/${p.id}`,children:[f.jsx("img",{src:p.imgurl,alt:p.title,loading:"lazy"}),f.jsx("h2",{children:p.title})]})},p.id))})})]})}const b2=H(ri)`
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--bg-color);
  z-index: 20;
  & > ul {
    display: flex;
    justify-content: center;
  }
  & li {
    width: 8rem;
  }
`,Jc=H.button`
  width: 100%;
  height: 4rem;
  font-size: var(--font-sz);
  color: ${({$isActive:r})=>r?"var(--text-color)":"var(--stroke-color)"};
  font-weight: ${({$isActive:r})=>r?"var(--font-bw)":"var(--font-rw)"};
`,w2=H(pt)`
  margin-top: 4rem;
  & ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.6rem;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    & > ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    & > ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.4rem;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    & > ul {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.4rem;
    }
  }

  @media screen and (min-width: 1441px) {
    & > ul {
      grid-template-columns: repeat(4, 1fr);
      gap: 2.4rem;
    }
  }

  & li {
    box-shadow: 0 5px 15px var(--stroke-color);
    border-radius: 1rem;
    padding: 1rem;
    background-color: var(--white-color);
    transition: background-color 1s ease;
  }

  & .product-items {
    opacity: 0;
    transform: translateY(-30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  & .product-items.show {
    opacity: 1;
    transform: translateY(0);
  }

  & img {
    width: 100%;
    vertical-align: top;
    scale: 1;
    transition: scale 0.5s ease;
  }
  & li:hover img {
    scale: 1.1;
  }
  & h2 {
    font-size: var(--font-smz);
    font-weight: var(--font-rw);
    text-align: center;
    margin-top: 1rem;
  }

  &li:hover h2 {
    color: var(--white-color);
  }
`;var eo={exports:{}},x2=eo.exports,Xg;function _2(){return Xg||(Xg=1,(function(r,a){(function(s,l){r.exports=l()})(x2,function(){return(function(s){function l(c){if(o[c])return o[c].exports;var h=o[c]={exports:{},id:c,loaded:!1};return s[c].call(h.exports,h,h.exports,l),h.loaded=!0,h.exports}var o={};return l.m=s,l.c=o,l.p="dist/",l(0)})([function(s,l,o){function c(ie){return ie&&ie.__esModule?ie:{default:ie}}var h=Object.assign||function(ie){for(var Se=1;Se<arguments.length;Se++){var q=arguments[Se];for(var K in q)Object.prototype.hasOwnProperty.call(q,K)&&(ie[K]=q[K])}return ie},m=o(1),p=(c(m),o(6)),g=c(p),v=o(7),b=c(v),x=o(8),_=c(x),S=o(9),k=c(S),z=o(10),B=c(z),M=o(11),N=c(M),G=o(14),Q=c(G),V=[],J=!1,re={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},ge=function(){var ie=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(ie&&(J=!0),J)return V=(0,N.default)(V,re),(0,B.default)(V,re.once),V},Ge=function(){V=(0,Q.default)(),ge()},ee=function(){V.forEach(function(ie,Se){ie.node.removeAttribute("data-aos"),ie.node.removeAttribute("data-aos-easing"),ie.node.removeAttribute("data-aos-duration"),ie.node.removeAttribute("data-aos-delay")})},I=function(ie){return ie===!0||ie==="mobile"&&k.default.mobile()||ie==="phone"&&k.default.phone()||ie==="tablet"&&k.default.tablet()||typeof ie=="function"&&ie()===!0},me=function(ie){re=h(re,ie),V=(0,Q.default)();var Se=document.all&&!window.atob;return I(re.disable)||Se?ee():(re.disableMutationObserver||_.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),re.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",re.easing),document.querySelector("body").setAttribute("data-aos-duration",re.duration),document.querySelector("body").setAttribute("data-aos-delay",re.delay),re.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?ge(!0):re.startEvent==="load"?window.addEventListener(re.startEvent,function(){ge(!0)}):document.addEventListener(re.startEvent,function(){ge(!0)}),window.addEventListener("resize",(0,b.default)(ge,re.debounceDelay,!0)),window.addEventListener("orientationchange",(0,b.default)(ge,re.debounceDelay,!0)),window.addEventListener("scroll",(0,g.default)(function(){(0,B.default)(V,re.once)},re.throttleDelay)),re.disableMutationObserver||_.default.ready("[data-aos]",Ge),V)};s.exports={init:me,refresh:ge,refreshHard:Ge}},function(s,l){},,,,,function(s,l){(function(o){function c(I,me,ie){function Se(Ee){var wt=F,un=ue;return F=ue=void 0,bt=Ee,_e=I.apply(un,wt)}function q(Ee){return bt=Ee,le=setTimeout(de,me),lt?Se(Ee):_e}function K(Ee){var wt=Ee-ke,un=Ee-bt,Rt=me-wt;return Ve?Ge(Rt,te-un):Rt}function ne(Ee){var wt=Ee-ke,un=Ee-bt;return ke===void 0||wt>=me||wt<0||Ve&&un>=te}function de(){var Ee=ee();return ne(Ee)?T(Ee):void(le=setTimeout(de,K(Ee)))}function T(Ee){return le=void 0,Ne&&F?Se(Ee):(F=ue=void 0,_e)}function Y(){le!==void 0&&clearTimeout(le),bt=0,F=ke=ue=le=void 0}function Z(){return le===void 0?_e:T(ee())}function X(){var Ee=ee(),wt=ne(Ee);if(F=arguments,ue=this,ke=Ee,wt){if(le===void 0)return q(ke);if(Ve)return le=setTimeout(de,me),Se(ke)}return le===void 0&&(le=setTimeout(de,me)),_e}var F,ue,te,_e,le,ke,bt=0,lt=!1,Ve=!1,Ne=!0;if(typeof I!="function")throw new TypeError(x);return me=v(me)||0,m(ie)&&(lt=!!ie.leading,Ve="maxWait"in ie,te=Ve?ge(v(ie.maxWait)||0,me):te,Ne="trailing"in ie?!!ie.trailing:Ne),X.cancel=Y,X.flush=Z,X}function h(I,me,ie){var Se=!0,q=!0;if(typeof I!="function")throw new TypeError(x);return m(ie)&&(Se="leading"in ie?!!ie.leading:Se,q="trailing"in ie?!!ie.trailing:q),c(I,me,{leading:Se,maxWait:me,trailing:q})}function m(I){var me=typeof I>"u"?"undefined":b(I);return!!I&&(me=="object"||me=="function")}function p(I){return!!I&&(typeof I>"u"?"undefined":b(I))=="object"}function g(I){return(typeof I>"u"?"undefined":b(I))=="symbol"||p(I)&&re.call(I)==S}function v(I){if(typeof I=="number")return I;if(g(I))return _;if(m(I)){var me=typeof I.valueOf=="function"?I.valueOf():I;I=m(me)?me+"":me}if(typeof I!="string")return I===0?I:+I;I=I.replace(k,"");var ie=B.test(I);return ie||M.test(I)?N(I.slice(2),ie?2:8):z.test(I)?_:+I}var b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(I){return typeof I}:function(I){return I&&typeof Symbol=="function"&&I.constructor===Symbol&&I!==Symbol.prototype?"symbol":typeof I},x="Expected a function",_=NaN,S="[object Symbol]",k=/^\s+|\s+$/g,z=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,M=/^0o[0-7]+$/i,N=parseInt,G=(typeof o>"u"?"undefined":b(o))=="object"&&o&&o.Object===Object&&o,Q=(typeof self>"u"?"undefined":b(self))=="object"&&self&&self.Object===Object&&self,V=G||Q||Function("return this")(),J=Object.prototype,re=J.toString,ge=Math.max,Ge=Math.min,ee=function(){return V.Date.now()};s.exports=h}).call(l,(function(){return this})())},function(s,l){(function(o){function c(ee,I,me){function ie(Ne){var Ee=X,wt=F;return X=F=void 0,ke=Ne,te=ee.apply(wt,Ee)}function Se(Ne){return ke=Ne,_e=setTimeout(ne,I),bt?ie(Ne):te}function q(Ne){var Ee=Ne-le,wt=Ne-ke,un=I-Ee;return lt?ge(un,ue-wt):un}function K(Ne){var Ee=Ne-le,wt=Ne-ke;return le===void 0||Ee>=I||Ee<0||lt&&wt>=ue}function ne(){var Ne=Ge();return K(Ne)?de(Ne):void(_e=setTimeout(ne,q(Ne)))}function de(Ne){return _e=void 0,Ve&&X?ie(Ne):(X=F=void 0,te)}function T(){_e!==void 0&&clearTimeout(_e),ke=0,X=le=F=_e=void 0}function Y(){return _e===void 0?te:de(Ge())}function Z(){var Ne=Ge(),Ee=K(Ne);if(X=arguments,F=this,le=Ne,Ee){if(_e===void 0)return Se(le);if(lt)return _e=setTimeout(ne,I),ie(le)}return _e===void 0&&(_e=setTimeout(ne,I)),te}var X,F,ue,te,_e,le,ke=0,bt=!1,lt=!1,Ve=!0;if(typeof ee!="function")throw new TypeError(b);return I=g(I)||0,h(me)&&(bt=!!me.leading,lt="maxWait"in me,ue=lt?re(g(me.maxWait)||0,I):ue,Ve="trailing"in me?!!me.trailing:Ve),Z.cancel=T,Z.flush=Y,Z}function h(ee){var I=typeof ee>"u"?"undefined":v(ee);return!!ee&&(I=="object"||I=="function")}function m(ee){return!!ee&&(typeof ee>"u"?"undefined":v(ee))=="object"}function p(ee){return(typeof ee>"u"?"undefined":v(ee))=="symbol"||m(ee)&&J.call(ee)==_}function g(ee){if(typeof ee=="number")return ee;if(p(ee))return x;if(h(ee)){var I=typeof ee.valueOf=="function"?ee.valueOf():ee;ee=h(I)?I+"":I}if(typeof ee!="string")return ee===0?ee:+ee;ee=ee.replace(S,"");var me=z.test(ee);return me||B.test(ee)?M(ee.slice(2),me?2:8):k.test(ee)?x:+ee}var v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(ee){return typeof ee}:function(ee){return ee&&typeof Symbol=="function"&&ee.constructor===Symbol&&ee!==Symbol.prototype?"symbol":typeof ee},b="Expected a function",x=NaN,_="[object Symbol]",S=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,B=/^0o[0-7]+$/i,M=parseInt,N=(typeof o>"u"?"undefined":v(o))=="object"&&o&&o.Object===Object&&o,G=(typeof self>"u"?"undefined":v(self))=="object"&&self&&self.Object===Object&&self,Q=N||G||Function("return this")(),V=Object.prototype,J=V.toString,re=Math.max,ge=Math.min,Ge=function(){return Q.Date.now()};s.exports=c}).call(l,(function(){return this})())},function(s,l){function o(v){var b=void 0,x=void 0;for(b=0;b<v.length;b+=1)if(x=v[b],x.dataset&&x.dataset.aos||x.children&&o(x.children))return!0;return!1}function c(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function h(){return!!c()}function m(v,b){var x=window.document,_=c(),S=new _(p);g=b,S.observe(x.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(v){v&&v.forEach(function(b){var x=Array.prototype.slice.call(b.addedNodes),_=Array.prototype.slice.call(b.removedNodes),S=x.concat(_);if(o(S))return g()})}Object.defineProperty(l,"__esModule",{value:!0});var g=function(){};l.default={isSupported:h,ready:m}},function(s,l){function o(x,_){if(!(x instanceof _))throw new TypeError("Cannot call a class as a function")}function c(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(l,"__esModule",{value:!0});var h=(function(){function x(_,S){for(var k=0;k<S.length;k++){var z=S[k];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(_,z.key,z)}}return function(_,S,k){return S&&x(_.prototype,S),k&&x(_,k),_}})(),m=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,g=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,v=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,b=(function(){function x(){o(this,x)}return h(x,[{key:"phone",value:function(){var _=c();return!(!m.test(_)&&!p.test(_.substr(0,4)))}},{key:"mobile",value:function(){var _=c();return!(!g.test(_)&&!v.test(_.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),x})();l.default=new b},function(s,l){Object.defineProperty(l,"__esModule",{value:!0});var o=function(h,m,p){var g=h.node.getAttribute("data-aos-once");m>h.position?h.node.classList.add("aos-animate"):typeof g<"u"&&(g==="false"||!p&&g!=="true")&&h.node.classList.remove("aos-animate")},c=function(h,m){var p=window.pageYOffset,g=window.innerHeight;h.forEach(function(v,b){o(v,g+p,m)})};l.default=c},function(s,l,o){function c(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(l,"__esModule",{value:!0});var h=o(12),m=c(h),p=function(g,v){return g.forEach(function(b,x){b.node.classList.add("aos-init"),b.position=(0,m.default)(b.node,v.offset)}),g};l.default=p},function(s,l,o){function c(g){return g&&g.__esModule?g:{default:g}}Object.defineProperty(l,"__esModule",{value:!0});var h=o(13),m=c(h),p=function(g,v){var b=0,x=0,_=window.innerHeight,S={offset:g.getAttribute("data-aos-offset"),anchor:g.getAttribute("data-aos-anchor"),anchorPlacement:g.getAttribute("data-aos-anchor-placement")};switch(S.offset&&!isNaN(S.offset)&&(x=parseInt(S.offset)),S.anchor&&document.querySelectorAll(S.anchor)&&(g=document.querySelectorAll(S.anchor)[0]),b=(0,m.default)(g).top,S.anchorPlacement){case"top-bottom":break;case"center-bottom":b+=g.offsetHeight/2;break;case"bottom-bottom":b+=g.offsetHeight;break;case"top-center":b+=_/2;break;case"bottom-center":b+=_/2+g.offsetHeight;break;case"center-center":b+=_/2+g.offsetHeight/2;break;case"top-top":b+=_;break;case"bottom-top":b+=g.offsetHeight+_;break;case"center-top":b+=g.offsetHeight/2+_}return S.anchorPlacement||S.offset||isNaN(v)||(x=v),b+x};l.default=p},function(s,l){Object.defineProperty(l,"__esModule",{value:!0});var o=function(c){for(var h=0,m=0;c&&!isNaN(c.offsetLeft)&&!isNaN(c.offsetTop);)h+=c.offsetLeft-(c.tagName!="BODY"?c.scrollLeft:0),m+=c.offsetTop-(c.tagName!="BODY"?c.scrollTop:0),c=c.offsetParent;return{top:m,left:h}};l.default=o},function(s,l){Object.defineProperty(l,"__esModule",{value:!0});var o=function(c){return c=c||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(c,function(h){return{node:h}})};l.default=o}])})})(eo)),eo.exports}var S2=_2();const Hd=_d(S2);function j2(){const r=ei(),[a,s]=E.useState(null),{product_product:l,readPost:o}=st(),[c,h]=E.useState(null);E.useEffect(()=>{o("product_product"),Hd.init()},[]),E.useEffect(()=>{l.length>0&&(m(r.id),p())},[l,r.id]);const m=v=>{const b=l.find(x=>x.id===v);s(b)},p=()=>{const v=l.filter(b=>b.type===a?.type).sort((b,x)=>x.popular-b.popular).slice(0,3);h(v)},g=v=>{switch(v){case"A":return"굴절 망원경";case"B":return"반사 망원경";case"C":return"돕소니안";default:return"굴절 망원경"}};return f.jsxs(f.Fragment,{children:[f.jsxs(E2,{children:[f.jsx(T2,{"data-aos":"fade-right","data-aos-delay":"200","data-aos-duration":"800",children:f.jsx("img",{src:a?.imgurl,alt:a?.title,loading:"lazy"})}),f.jsxs(A2,{"data-aos":"fade-left","data-aos-delay":"200","data-aos-duration":"800",children:[f.jsx("strong",{children:g(a?.type)}),f.jsx("h1",{children:a?.title}),f.jsx("p",{children:a?.content})]})]}),f.jsxs(k2,{children:[f.jsxs(Kg,{children:[f.jsx(cd,{}),f.jsx("h2",{children:"제품 사양"})]}),f.jsxs(O2,{children:[f.jsxs("li",{"data-aos":"fade-down","data-aos-delay":"200","data-aos-duration":"800",children:[f.jsx("h3",{children:"구경"}),f.jsxs("p",{children:[a?.aperture,"mm"]})]}),f.jsxs("li",{"data-aos":"fade-down","data-aos-delay":"300","data-aos-duration":"800",children:[f.jsx("h3",{children:"초점거리"}),f.jsxs("p",{children:[a?.focallength,"mm"]})]}),f.jsxs("li",{"data-aos":"fade-down","data-aos-delay":"400","data-aos-duration":"800",children:[f.jsx("h3",{children:"초점비"}),f.jsxs("p",{children:["f/",a?.apertureratio]})]})]})]}),f.jsxs(z2,{children:[f.jsxs(Kg,{children:[f.jsx(cd,{}),f.jsx("h2",{children:"인기 제품"})]}),f.jsx(C2,{children:c?.map((v,b)=>f.jsx("li",{"data-aos":"fade-down","data-aos-delay":400*b,"data-aos-duration":"800",children:f.jsxs(Ie,{to:`/product/${v.id}`,children:[f.jsx("img",{src:v?.imgurl,alt:v?.title,loading:"lazy"}),f.jsx("h4",{children:v?.title})]})},v?.id))})]})]})}const E2=H(pt)`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 100%;
  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`,T2=H.div`
  width: 100%;
  & > img {
    width: 100%;
    vertical-align: top;
    aspect-ratio: 1 / 1;
    scale: 1;
    transition: scale 0.5s ease;
  }
  & > img:hover {
    scale: 1.2;
  }
`,A2=H.div`
  width: 100%;
  padding-block: 0;
  @media screen and (min-width: 769px) {
    padding-block: 6rem;
  }
  & > strong {
    background-color: var(--boxBg-color);
    color: var(--white-color);
    padding: 0.6rem 1.2rem;
    border-radius: 1rem;
    font-size: var(--font-sz);
    width: fit-content;
  }
  & > h1 {
    font-size: var(--font-4xlz);
    font-weight: var(--font-bw);
    margin-block: 2rem;
  }
  & > p {
    word-break: keep-all;
    font-size: var(--font-mz);
    font-weight: var(--font-mw);
  }
`,k2=H(pt)`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
`,Kg=H.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  & > svg {
    width: 3rem;
    height: 3rem;
  }
  & > h2 {
    font-size: var(--font-2xlz);
    font-weight: var(--font-bw);
  }
`,O2=H.ul`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  & > li {
    width: 10rem;
    border: 1px solid var(--stroke-color);
    padding: 0.6rem 1.2rem;
    border-radius: 1rem;
  }
  & h3 {
    font-size: var(--font-smz);
    font-weight: var(--font-bw);
  }
  & p {
    font-size: var(--font-sz);
    text-align: right;
    margin-top: 0.6rem;
  }
`,z2=H(pt)`
  margin-top: 8rem;
`,C2=H.ul`
  display: flex;
  gap: 6rem;
  margin-top: 2rem;
  padding-inline: 6rem;
  & li {
    box-shadow: 0 5px 15px var(--stroke-color);
    border-radius: 1rem;
    padding: 1rem;
    background-color: var(--white-color);
  }

  & img {
    width: 100%;
    vertical-align: top;
    scale: 1;
    transition: scale 0.5s ease;
  }
  & li:hover img {
    scale: 1.1;
  }
  & h4 {
    font-size: var(--font-mz);
    font-weight: var(--font-rw);
    text-align: center;
    margin-top: 1rem;
  }
`;function R2(){const{store_store:r,readPost:a,createPost:s}=st(),[l,o]=E.useState("store"),[c,h]=E.useState(""),[m,p]=E.useState(!1),g=E.useRef(null);E.useEffect(()=>{r.length===0&&a("store_store")},[r,a]);const v=_=>{o(_)},b=async _=>{_.preventDefault();const S=new FormData(_.currentTarget),k=Object.fromEntries(S.entries()),z=_.currentTarget.querySelector("#agree").checked;if(!k.name.trim()){h("이름을 입력해주세요.");return}if(!k.email.trim()){h("이메일을 입력해주세요.");return}if(!k.contact.trim()){h("연락처을 입력해주세요.");return}if(!k.storename.trim()){h("지점명을 입력해주세요.");return}if(!k.storelocation.trim()){h("희망창업지역을 입력해주세요.");return}if(!k.content.trim()){h("문의내용을 입력해주세요.");return}if(!z){h("개인정보 수집에 동의해주세요.");return}try{await s(k,"store_business"),p(!0),h("")}catch(B){console.error(B)}},x=()=>{p(!1),g.current&&g.current.reset()};return E.useEffect(()=>{let _;l==="store"?_=document.querySelectorAll(".store-items"):_=document.querySelectorAll(".business-items"),_.forEach(S=>{S.classList.remove("show"),S.style.transitionDelay="0s"}),_.forEach((S,k)=>{S.style.transitionDelay=`${k*.2}s`,setTimeout(()=>{S.classList.add("show")},50)})},[l,r]),f.jsxs(f.Fragment,{children:[f.jsx("title",{children:`StarScope ${l==="store"?"오프라인 매장":"창업문의"}`}),f.jsx("h1",{className:"a11y-hidden",children:"오프라인 매장"}),f.jsx(D2,{children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx(Ig,{value:"store",$isActive:l==="store",onClick:_=>{v(_.target.value)},children:"매장 목록"})}),f.jsx("li",{children:f.jsx(Ig,{value:"business",$isActive:l==="business",onClick:_=>{v(_.target.value)},children:"창업 문의"})})]})}),l==="store"?f.jsx(M2,{children:f.jsx("ul",{children:r?.map(_=>f.jsxs("li",{className:"store-items",children:[f.jsx("h2",{children:_?.title}),f.jsx("p",{children:_?.location}),f.jsxs("p",{children:["영업시간: ",_?.open," ~ ",_?.close]})]},_?.id))})}):f.jsxs(f.Fragment,{children:[c&&f.jsx(U2,{children:f.jsx(Pa,{children:c})}),f.jsx(N2,{children:f.jsxs(q2,{ref:g,onSubmit:b,children:[f.jsxs("div",{className:"business-items",children:[f.jsxs(Gr,{children:[f.jsx(sn,{}),f.jsx("label",{htmlFor:"name",children:"고객명"})]}),f.jsx(Ue,{type:"text",id:"name",name:"name",autoComplete:"off",placeholder:"이름을 입력해주세요."})]}),f.jsxs("div",{className:"business-items",children:[f.jsxs(Gr,{children:[f.jsx(sn,{}),f.jsx("label",{htmlFor:"contact",children:"연락처"})]}),f.jsx(Ue,{type:"text",id:"contact",name:"contact",autoComplete:"off",placeholder:"연락처를 입력해주세요."})]}),f.jsxs("div",{className:"business-items",children:[f.jsxs(Gr,{children:[f.jsx(sn,{}),f.jsx("label",{htmlFor:"email",children:"이메일"})]}),f.jsx(Ue,{type:"email",id:"email",name:"email",autoComplete:"off",placeholder:"이메일을 입력해주세요."})]}),f.jsxs("div",{className:"business-items",children:[f.jsxs(Gr,{children:[f.jsx(sn,{}),f.jsx("label",{htmlFor:"storename",children:"지점명"})]}),f.jsx(Ue,{type:"text",id:"storename",name:"storename",autoComplete:"off",placeholder:"지점명을 입력해주세요."})]}),f.jsxs("div",{className:"business-items",children:[f.jsxs(Gr,{children:[f.jsx(sn,{}),f.jsx("label",{htmlFor:"storelocation",children:"창업희망지역"})]}),f.jsx(Ue,{type:"text",id:"storelocation",name:"storelocation",autoComplete:"off",placeholder:"창업희망지역을 입력해주세요."})]}),f.jsxs("div",{className:"business-items",children:[f.jsxs(Gr,{children:[f.jsx(sn,{}),f.jsx("label",{htmlFor:"content",children:"문의 내용"})]}),f.jsx("textarea",{id:"content",name:"content",placeholder:"문의 내용을 입력해주세요."})]}),f.jsxs("span",{children:[f.jsx(Ue,{type:"checkbox",id:"agree"}),f.jsx("label",{htmlFor:"agree",children:"개인정보수집 및 동의"})]}),f.jsx(mt,{type:"submit",children:"신청하기"})]})}),m&&f.jsxs(L2,{children:[f.jsx("h3",{children:"신청이 완료되었습니다."}),f.jsx(mt,{type:"button",onClick:x,children:"닫기"})]})]})]})}const D2=H(ri)`
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--bg-color);
  z-index: 20;
  & > ul {
    display: flex;
    justify-content: center;
  }
  & li {
    width: 8rem;
  }
`,Ig=H.button`
  width: 100%;
  height: 4rem;
  font-size: var(--font-sz);
  color: ${({$isActive:r})=>r?"var(--text-color)":"var(--stroke-color)"};
  font-weight: ${({$isActive:r})=>r?"var(--font-bw)":"var(--font-rw)"};
`,M2=H(pt)`
  margin-top: 4rem;
  & li {
    box-shadow: 0 5px 15px var(--stroke-color);
    border-radius: 1rem;
    padding: 2rem;
    background-color: var(--white-color);
  }

  & .store-items {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  & .store-items.show {
    opacity: 1;
    transform: translateX(0);
  }
  & li ~ li {
    margin-top: 2rem;
  }
  & h2 {
    font-size: var(--font-smz);
    font-weight: var(--font-mw);
  }
  & p {
    font-size: var(--font-sz);
    color: var(--stroke-color);
    font-weight: var(--font-mw);
    margin-top: 1rem;
  }
`,U2=H(pt)`
  margin-top: 4rem;
`,N2=H(pt)`
  margin-top: 4rem;
`,q2=H.form`
  & > div {
    padding: 2rem;
    border: 1px solid var(--stroke-color);
    border-radius: 1rem;
    display: flex;
    background-color: var(--white-color);
  }

  & .business-items {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  & .business-items.show {
    opacity: 1;
    transform: translateX(0);
  }

  & div ~ div {
    margin-top: 2rem;
  }

  & > div input,
  textarea {
    width: 100%;
    font-size: var(--font-smz);
    margin-left: 2rem;
    background-color: transparent;
  }

  & > div textarea {
    border: none;
    resize: none;
    height: 10rem;
  }

  & > div textarea::placeholder {
    color: var(--bg-color);
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    margin-block: 6rem;
  }

  & > span input {
    width: 1.4rem;
    height: 1.4rem;
    accent-color: var(--boxBg-color);
    border: 1px solid var(--stroke-color);
    background-color: transparent;
  }

  & > span label {
    font-size: var(--font-smz);
  }

  & > button {
    margin: 0 auto;
  }
`,Gr=H.div`
  width: 20rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-right: 1px solid var(--stroke-color);

  & > svg {
    width: 1.6rem;
    height: 1.6rem;
  }
  & > label {
    font-size: var(--font-smz);
    font-weight: var(--font-bw);
  }
`,L2=H(ai)`
  & > h3 {
    font-size: var(--font-2xlz);
    font-weight: var(--font-bw);
    text-align: center;
    margin: 2rem 0 6rem;
  }
  & > button {
    margin: 0 auto;
  }
`;function B2(){const{commu_event:r,readPost:a}=st();return E.useEffect(()=>{r.length>0&&document.querySelectorAll(".event-items").forEach((l,o)=>{l.style.transitionDelay=`${o*.2}s`,setTimeout(()=>{l.classList.add("show")},50)})},[r]),E.useEffect(()=>{r.length===0&&a("commu_event")},[r,a]),f.jsxs(f.Fragment,{children:[f.jsx("title",{children:"StarScope 이벤트"}),f.jsx("h1",{className:"a11y-hidden",children:"StarScope 이벤트"}),f.jsx($2,{children:f.jsx("ul",{children:r?.map(s=>f.jsx("li",{className:"event-items",children:f.jsxs(Ie,{to:`/commu/event/${s?.id}`,children:[f.jsx("img",{src:s?.imgurl,alt:s?.title,loading:"lazy"}),f.jsx("div",{children:f.jsx("h2",{children:s.title})})]})},s?.id))})})]})}const $2=H(pt)`
  margin-top: 4rem;
  & ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.6rem;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    & ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    & ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.4rem;
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    & ul {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.4rem;
    }
  }
  @media screen and (min-width: 1441px) {
    & ul {
      grid-template-columns: repeat(4, 1fr);
      gap: 2.4rem;
    }
  }
  & li {
    box-shadow: 0 5px 15px var(--stroke-color);
    border-radius: 1rem;
    background-color: var(--white-color);
    overflow: hidden;
  }

  & .event-items {
    opacity: 0;
    transform: translateY(-30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  & .event-items.show {
    opacity: 1;
    transform: translateY(0);
  }

  & img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    vertical-align: top;
  }
  & li div {
    padding: 1rem;
    min-height: 5rem;
  }
  & h2 {
    font-size: var(--font-smz);
    font-weight: var(--font-rw);
  }
`;function H2(){const{commu_faq:r,readPost:a}=st();return E.useEffect(()=>{r.length===0&&a("commu_faq")},[r,a]),E.useEffect(()=>{r.length>0&&document.querySelectorAll(".faq-items").forEach((l,o)=>{l.style.transitionDelay=`${o*.2}s`,setTimeout(()=>{l.classList.add("show")},50)})},[r]),f.jsxs(f.Fragment,{children:[f.jsx("title",{children:"StarScope FAQ"}),f.jsx("h1",{className:"a11y-hidden",children:"StarScope FAQ"}),f.jsx(G2,{children:f.jsx("ul",{children:r?.map(s=>f.jsxs("li",{className:"faq-items",children:[f.jsxs("div",{children:[f.jsx(sn,{}),f.jsx("h2",{children:s?.title})]}),f.jsx("p",{children:s?.content})]},s?.id))})})]})}const G2=H(pt)`
  margin-top: 4rem;
  & li {
    box-shadow: 0 5px 15px var(--stroke-color);
    border-radius: 1rem;
    background-color: var(--white-color);
    padding: 2rem;
  }

  & .faq-items {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  & .faq-items.show {
    opacity: 1;
    transform: translateX(0);
  }
  & li ~ li {
    margin-top: 2rem;
  }
  & li > div {
    display: flex;
    gap: 1.2rem;
    align-items: center;
  }
  & svg {
    width: 1.4rem;
  }
  & h2 {
    font-size: var(--font-smz);
    font-weight: var(--font-mw);
  }
  & p {
    font-size: var(--font-sz);
    margin-top: 2rem;
  }
`;function Y2(){const{createPost:r}=st(),[a,s]=E.useState(""),[l,o]=E.useState(!1),c=E.useRef(null),h=async p=>{p.preventDefault();const g=new FormData(p.currentTarget),v=Object.fromEntries(g.entries()),b=p.currentTarget.querySelector("#agree").checked;if(!v.name.trim()){s("이름을 입력해주세요.");return}if(!v.email.trim()){s("이메일을 입력해주세요.");return}if(!v.contact.trim()){s("연락처을 입력해주세요.");return}if(!v.content.trim()){s("문의내용을 입력해주세요.");return}if(!b){s("개인정보 수집에 동의해주세요.");return}try{await r(v,"commu_qna"),o(!0),s("")}catch(x){console.error(x)}},m=()=>{o(!1),c.current&&c.current.reset()};return E.useEffect(()=>{document.querySelectorAll(".qna-items").forEach((g,v)=>{g.style.transitionDelay=`${v*.2}s`,setTimeout(()=>{g.classList.add("show")},50)})},[]),f.jsxs(f.Fragment,{children:[f.jsx("title",{children:"StarScope 문의"}),f.jsx("h1",{className:"a11y-hidden",children:"StarScope 문의"}),a&&f.jsx(P2,{children:f.jsx(Pa,{children:a})}),f.jsx(Q2,{children:f.jsxs(V2,{ref:c,onSubmit:h,children:[f.jsxs("div",{className:"qna-items",children:[f.jsxs(Pl,{children:[f.jsx(sn,{}),f.jsx("label",{htmlFor:"name",children:"고객명"})]}),f.jsx(Ue,{type:"text",id:"name",name:"name",autoComplete:"off",placeholder:"이름을 입력해주세요."})]}),f.jsxs("div",{className:"qna-items",children:[f.jsxs(Pl,{children:[f.jsx(sn,{}),f.jsx("label",{htmlFor:"contact",children:"연락처"})]}),f.jsx(Ue,{type:"text",id:"contact",name:"contact",autoComplete:"off",placeholder:"연락처를 입력해주세요."})]}),f.jsxs("div",{className:"qna-items",children:[f.jsxs(Pl,{children:[f.jsx(sn,{}),f.jsx("label",{htmlFor:"email",children:"이메일"})]}),f.jsx(Ue,{type:"email",id:"email",name:"email",autoComplete:"off",placeholder:"이메일을 입력해주세요."})]}),f.jsxs("div",{className:"qna-items",children:[f.jsxs(Pl,{children:[f.jsx(sn,{}),f.jsx("label",{htmlFor:"content",children:"문의 내용"})]}),f.jsx("textarea",{id:"content",name:"content",placeholder:"문의 내용을 입력해주세요."})]}),f.jsxs("span",{children:[f.jsx(Ue,{type:"checkbox",id:"agree"}),f.jsx("label",{htmlFor:"agree",children:"개인정보수집 및 동의"})]}),f.jsx(mt,{type:"submit",children:"신청하기"})]})}),l&&f.jsxs(X2,{children:[f.jsx("h3",{children:"신청이 완료되었습니다."}),f.jsx(mt,{type:"button",onClick:m,children:"닫기"})]})]})}const P2=H(pt)`
  margin-top: 4rem;
`,Q2=H(pt)`
  margin-top: 4rem;
`,V2=H.form`
  & > div {
    padding: 2rem;
    border: 1px solid var(--stroke-color);
    border-radius: 1rem;
    display: flex;
    background-color: var(--white-color);
  }

  & .qna-items {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  & .qna-items.show {
    opacity: 1;
    transform: translateX(0);
  }

  & div ~ div {
    margin-top: 2rem;
  }

  & > div input,
  textarea {
    width: 100%;
    font-size: var(--font-smz);
    margin-left: 2rem;
    background-color: transparent;
  }

  & > div textarea {
    border: none;
    resize: none;
    height: 10rem;
  }

  & > div textarea::placeholder {
    color: var(--bg-color);
  }

  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    margin-block: 6rem;
  }

  & > span input {
    width: 1.4rem;
    height: 1.4rem;
    accent-color: var(--boxBg-color);
    border: 1px solid var(--stroke-color);
    background-color: transparent;
  }

  & > span label {
    font-size: var(--font-smz);
  }

  & > button {
    margin: 0 auto;
  }
`,Pl=H.div`
  width: 20rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-right: 1px solid var(--stroke-color);

  & > svg {
    width: 1.6rem;
    height: 1.6rem;
  }
  & > label {
    font-size: var(--font-smz);
    font-weight: var(--font-bw);
  }
`,X2=H(ai)`
  & > h3 {
    font-size: var(--font-2xlz);
    font-weight: var(--font-bw);
    text-align: center;
    margin: 2rem 0 6rem;
  }
  & > button {
    margin: 0 auto;
  }
`;function K2(){const[r,a]=E.useState("event"),s=l=>{a(l)};return f.jsxs(f.Fragment,{children:[f.jsx("title",{children:"StarScope 이벤트"}),f.jsx("h1",{className:"a11y-hidden",children:"StarScope 이벤트"}),f.jsx(I2,{children:f.jsxs("ul",{children:[f.jsx("li",{children:f.jsx(Fc,{value:"event",$isActive:r==="event",onClick:l=>{s(l.target.value)},children:"이벤트"})}),f.jsx("li",{children:f.jsx(Fc,{value:"faq",$isActive:r==="faq",onClick:l=>{s(l.target.value)},children:"FAQ"})}),f.jsx("li",{children:f.jsx(Fc,{value:"qna",$isActive:r==="qna",onClick:l=>{s(l.target.value)},children:"문의"})})]})}),r==="event"&&f.jsx(B2,{activeMenu:r}),r==="faq"&&f.jsx(H2,{}),r==="qna"&&f.jsx(Y2,{})]})}const I2=H(ri)`
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--bg-color);
  z-index: 20;
  & > ul {
    display: flex;
    justify-content: center;
  }
  & li {
    width: 8rem;
  }
`,Fc=H.button`
  width: 100%;
  height: 4rem;
  font-size: var(--font-sz);
  color: ${({$isActive:r})=>r?"var(--text-color)":"var(--stroke-color)"};
  font-weight: ${({$isActive:r})=>r?"var(--font-bw)":"var(--font-rw)"};
`;function Z2(){const r=ei(),[a,s]=E.useState(null),{commu_event:l,readPost:o}=st(),c=pa();E.useEffect(()=>{o("commu_event")},[]),E.useEffect(()=>{l.length>0&&h(r.id)},[l,r.id]);const h=g=>{const v=l.find(b=>b.id===g);s(v)},m=g=>{if(!g)return"";const v=new Date(g),b=v.getFullYear(),x=v.getMonth()+1,_=v.getDate();return`${b}년 ${x}월 ${_}일`},p=()=>{c(-1)};return f.jsxs(f.Fragment,{children:[f.jsx("title",{children:"StarScope 이벤트"}),f.jsx("h1",{className:"a11y-hidden",children:"StarScope 이벤트"}),f.jsxs(J2,{children:[f.jsxs("div",{children:[f.jsx("button",{onClick:p,children:f.jsx(Bx,{})}),f.jsx("h1",{children:a?.title})]}),f.jsx("p",{children:m(a?.created_at)})]}),f.jsxs(F2,{children:[f.jsx("img",{src:a?.imgurl,alt:a?.title,loading:"lazy"}),f.jsx("p",{children:a?.content})]})]})}const J2=H(pt)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--stroke-color);
  & > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  & h1 {
    font-weight: var(--font-bw);
  }
`,F2=H(pt)`
  margin-top: 6rem;

  & > img {
    width: 100%;
  }

  & > p {
    margin-top: 2rem;
    font-size: var(--font-mz);
    font-weight: var(--font-mw);
  }
`,W2="/starscope/assets/homeImgContent1-bfoblXet.jpg",eE="/starscope/assets/homeImgContent2-DsCD3Jsa.jpg",tE="/starscope/assets/homeImgContent3-WO8XIfNt.jpg",nE="/starscope/assets/homeImgContent4-BnoyCIre.jpg",aE="/starscope/assets/homeNoticeContent-BiSNf7HQ.jpg",rE="/starscope/assets/homeNoticeProduct-BZuFkOT8.png";function iE(){const{product_product:r,readPost:a}=st(),[s,l]=E.useState(null),[o,c]=E.useState([]);E.useEffect(()=>{a("product_product"),Hd.init()},[]),E.useEffect(()=>{r.length>0&&h()},[r]);const h=()=>{const m=[...r].sort((g,v)=>v.popular-g.popular).slice(0,4),p=[...r].sort((g,v)=>g.popular-v.popular).slice(0,4);l(m),c(p)};return f.jsxs(f.Fragment,{children:[f.jsx("title",{children:"starScope 홈페이지"}),f.jsx("h1",{className:"a11y-hidden",children:"starScope 홈페이지"}),f.jsxs(sE,{"data-aos":"fade-down","data-aos-delay":"200","data-aos-duration":"400",children:[f.jsxs("h2",{children:["눈앞의 별을, 손끝에서 만나다. ",f.jsx("br",{}),"별과 우주의 모든 순간을 포착하는 망원경, ",f.jsx("br",{}),"StarScope"]}),f.jsxs("p",{children:["관측의 경계를 넘어서, 당신의 시선을 우주로 확장합니다. ",f.jsx("br",{}),"별빛이 닿는 모든 곳에 StarScope가 함께합니다."]})]}),f.jsxs(Zg,{children:[f.jsx(Vl,{"data-aos":"fade-down","data-aos-delay":"200","data-aos-duration":"800",children:f.jsx("img",{src:eE,alt:"망원경으로 하늘을 바라보는 남자",loading:"lazy"})}),f.jsxs(Ql,{className:"right","data-aos":"fade-down","data-aos-delay":"200","data-aos-duration":"800",children:[f.jsx("img",{src:o[0]?.imgurl,alt:o[0]?.title,loading:"lazy"}),f.jsxs("div",{children:[f.jsx("h2",{children:o[0]?.title}),f.jsxs("p",{children:[f.jsxs("span",{children:[o[0]?.aperture,"mm"]}),f.jsxs("span",{children:[" / ",o[0]?.focallength,"mm"]}),f.jsxs("span",{children:[" / f(",o[0]?.apertureratio,")"]})]})]})]}),f.jsxs(Ql,{className:"left","data-aos":"fade-down","data-aos-delay":"400","data-aos-duration":"800",children:[f.jsx("img",{src:o[1]?.imgurl,alt:o[1]?.title,loading:"lazy"}),f.jsxs("div",{children:[f.jsx("h2",{children:o[1]?.title}),f.jsxs("p",{children:[f.jsxs("span",{children:[o[1]?.aperture,"mm"]}),f.jsxs("span",{children:[" / ",o[1]?.focallength,"mm"]}),f.jsxs("span",{children:[" / f(",o[1]?.apertureratio,")"]})]})]})]}),f.jsx(Vl,{"data-aos":"fade-down","data-aos-delay":"400","data-aos-duration":"800",children:f.jsx("img",{src:nE,alt:"망원경 렌즈",loading:"lazy"})})]}),f.jsxs(lE,{children:[f.jsxs(oE,{children:[f.jsxs("div",{children:[f.jsx(cd,{}),f.jsx("h2",{children:"Best Product"})]}),f.jsxs(Ie,{to:"/product",children:["Show all(",r?r.length:0,")"]})]}),f.jsx(uE,{children:s?.map((m,p)=>f.jsx("li",{"data-aos":"fade-down","data-aos-delay":p*200,"data-aos-duration":"800",children:f.jsx(Ie,{to:`/product/${m?.id}`,children:f.jsxs("div",{children:[f.jsx("img",{src:m?.imgurl,alt:m?.title,loading:"lazy"}),f.jsx("h3",{children:m?.title})]})})},m.id))})]}),f.jsxs(Zg,{children:[f.jsxs(Ql,{className:"left","data-aos":"fade-down","data-aos-delay":"200","data-aos-duration":"800",children:[f.jsx("img",{src:o[2]?.imgurl,alt:o[2]?.title,loading:"lazy"}),f.jsxs("div",{children:[f.jsx("h2",{children:o[2]?.title}),f.jsxs("p",{children:[f.jsxs("span",{children:[o[2]?.aperture,"mm"]}),f.jsxs("span",{children:[" / ",o[2]?.focallength,"mm"]}),f.jsxs("span",{children:[" / f(",o[2]?.apertureratio,")"]})]})]})]}),f.jsx(Vl,{"data-aos":"fade-down","data-aos-delay":"200","data-aos-duration":"800",children:f.jsx("img",{src:W2,alt:"은하를 담은 사진",loading:"lazy"})}),f.jsx(Vl,{"data-aos":"fade-down","data-aos-delay":"400","data-aos-duration":"800",children:f.jsx("img",{src:tE,alt:"망원경과 호환되는 카메라 렌즈",loading:"lazy"})}),f.jsxs(Ql,{className:"right","data-aos":"fade-down","data-aos-delay":"400","data-aos-duration":"800",children:[f.jsx("img",{src:o[3]?.imgurl,alt:o[3]?.title,loading:"lazy"}),f.jsxs("div",{children:[f.jsx("h2",{children:o[3]?.title}),f.jsxs("p",{children:[f.jsxs("span",{children:[o[3]?.aperture,"mm"]}),f.jsxs("span",{children:[" / ",o[3]?.focallength,"mm"]}),f.jsxs("span",{children:[" / f(",o[3]?.apertureratio,")"]})]})]})]})]}),f.jsxs(cE,{children:[f.jsx("img",{src:aE,alt:"은하를 담은 사진"}),f.jsxs("div",{children:[f.jsx("img",{src:rE,alt:"새 출시 제품","data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"800"}),f.jsxs(dE,{"data-aos":"fade-down","data-aos-delay":"400","data-aos-duration":"800",children:[f.jsx("h3",{children:"Skyliner N 254/1200 Classic 출시"}),f.jsx("p",{children:"254mm / 1200mm / f/4.7"})]})]})]})]})}const sE=H(pt)`
  & > h2 {
    text-align: center;
    font-weight: var(--font-bw);
    font-size: var(--font-lz);
  }

  & > p {
    text-align: center;
    font-size: var(--font-smz);
    margin-top: 2rem;
  }
`,Zg=H(pt)`
  margin-top: 8rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;

  & > div {
    aspect-ratio: 1 / 0.5;
    border-radius: 1rem;
    box-shadow: 0 5px 15px var(--stroke-color);
  }
  @media screen and (max-width: 768px) {
    & > div {
      aspect-ratio: 1 / 0.8;
    }
  }
`,Ql=H.div`
  background-color: var(--white-color);
  display: flex;
  justify-content: space-between;
  align-content: flex-end;
  padding: 1rem;
  & > img {
    width: 50%;
    vertical-align: top;
    z-index: 1;
  }
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  &.right {
    flex-direction: row-reverse;
  }
  &.right > img {
    transform: scaleX(-1);
  }
  &.left h2 {
    text-align: right;
  }
  &.left p {
    text-align: right;
  }

  & h2 {
    font-size: var(--font-smz);
    font-weight: var(--font-mw);
  }
  & span {
    color: var(--stroke-color);
    font-size: var(--font-sz);
  }

  @media screen and (max-width: 768px) {
    & > img {
      aspect-ratio: 1 / 0.8;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 1025px) {
    & h2 {
      font-size: var(--font-lz);
    }
  }
`,Vl=H.div`
  overflow: hidden;
  & > img {
    width: 100%;
    aspect-ratio: 1 / 0.5;
    vertical-align: top;
  }
  @media screen and (max-width: 768px) {
    & > img {
      aspect-ratio: 1 / 0.8;
      object-fit: cover;
    }
  }
`,lE=H(pt)`
  margin-top: 8rem;
`,oE=H.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  & h2 {
    font-size: var(--font-mz);
    font-weight: var(--font-bw);
  }
`,uE=H.ul`
  margin-top: 4rem;
  display: flex;
  gap: 1.6rem;

  & > li {
    width: 100%;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 5px 15px var(--stroke-color);
    background-color: var(--white-color);
  }

  & img {
    width: 100%;
  }

  & h3 {
    text-align: center;
  }
`,cE=H(ri)`
  margin-top: 8rem;
  position: relative;
  box-shadow: 0 5px 15px var(--stroke-color);
  & > img {
    width: 100%;
    vertical-align: top;
    aspect-ratio: 1 / 0.5;
    object-fit: cover;
  }

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1 / 0.5;
    background-color: rgba(0, 0, 0, 0.4);
  }

  & > div > img {
    position: absolute;
    width: 40%;
    right: 0;
    bottom: 0;
  }
`,dE=H.div`
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  & h3,
  p {
    color: var(--white-color);
  }

  & h3 {
    font-size: var(--font-mz);
    font-weight: var(--font-bw);
  }

  & p {
    font-size: var(--font-mz);
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    & h3 {
      font-size: var(--font-mlz);
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    & h3 {
      font-size: var(--font-lz);
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    & h3 {
      font-size: var(--font-xlz);
    }
  }
  @media screen and (min-width: 1441px) {
    & h3 {
      font-size: var(--font-2xlz);
    }
  }
`;function fE(){return E.useEffect(()=>{Hd.init()},[]),f.jsxs(f.Fragment,{children:[f.jsx("title",{children:"StarScope 브랜드"}),f.jsx("h1",{className:"a11y-hidden",children:"StarScope 브랜드 소개"}),f.jsx(hE,{"data-aos":"fade-down","data-aos-delay":"200","data-aos-duration":"800",children:f.jsx("h2",{children:"별을 관찰하는 일은 기술이 아닌 경험의 확장"})}),f.jsxs(mE,{children:[f.jsx("img",{src:"/starscope/heroImg/brandIntro-480.webp",srcSet:`
    /starscope/heroImg/brandIntro-480.webp 480w,
    /starscope/heroImg/brandIntro-768.webp 768w,
    /starscope/heroImg/brandIntro-1024.webp 1024w,
    /starscope/heroImg/brandIntro-1440.webp 1440w,
    /starscope/heroImg/brandIntro-1920.webp 1920w
  `,sizes:"100vw",alt:"렌즈가 보이는 사진",loading:"lazy"}),f.jsxs("div",{children:[f.jsx("h3",{"data-aos":"fade-down","data-aos-delay":"200","data-aos-duration":"400",children:"별을 더 잘 보는 도구"}),f.jsx("strong",{"data-aos":"fade-down","data-aos-delay":"200","data-aos-duration":"400",children:"보다"}),f.jsx("h3",{"data-aos":"fade-down","data-aos-delay":"200","data-aos-duration":"400",children:"세상을 더 넓게 바라보는 시선"})]})]}),f.jsxs(Jg,{children:[f.jsx("h2",{"data-aos":"fade-right","data-aos-delay":"200","data-aos-duration":"800",children:"동아리에서 브랜드가 되기 까지"}),f.jsxs("p",{"data-aos":"fade-right","data-aos-delay":"300","data-aos-duration":"800",children:["Starscope의 시작은 한 작은 천문 동아리에서 비롯되었습니다. “누구나 별을 쉽게 관찰할 수 있다면 얼마나 멋질까?” 이 단순한 물음에서 출발해,",f.jsx("br",{}),"광학 기술과 디자인을 결합한 사용자 친화적인 망원경을 만들어왔습니다."]}),f.jsx("p",{"data-aos":"fade-right","data-aos-delay":"400","data-aos-duration":"800",children:"지금도 StarScope는 전문가용 천체망원경부터 입문자, 휴대용 관찰기기까지 모든 이가 우주와 연결될 수 있는 관문을 만들어가고 있습니다."})]}),f.jsxs(pE,{children:[f.jsx("img",{src:"/starscope/heroImg/brandTech-480.webp",srcSet:`
    /starscope/heroImg/brandTech-480.webp 480w,
    /starscope/heroImg/brandTech-768.webp 768w,
    /starscope/heroImg/brandTech-1024.webp 1024w,
    /starscope/heroImg/brandTech-1440.webp 1440w,
    /starscope/heroImg/brandTech-1920.webp 1920w
  `,sizes:"100vw",alt:"렌즈가 보이는 사진",loading:"lazy"}),f.jsxs("div",{children:[f.jsx("h3",{"data-aos":"fade-up","data-aos-delay":"300","data-aos-duration":"800",children:"기술과 철학의 결합"}),f.jsx("h3",{"data-aos":"fade-up","data-aos-delay":"200","data-aos-duration":"800",children:"별을 보는 일은, 사람의 시야를 넓히는 일"})]})]}),f.jsxs(Jg,{children:[f.jsx("h2",{"data-aos":"fade-right","data-aos-delay":"200","data-aos-duration":"800",children:"당신의 망원경이 곧, 당신의 우주가 됩니다."}),f.jsx("p",{"data-aos":"fade-right","data-aos-delay":"300","data-aos-duration":"800",children:"정밀 광학 기술에 인간 중심의 사용성을 더했습니다. Starscope의 모든 제품은 기술과 감성이 공존하는 도구입니다."}),f.jsxs("p",{"data-aos":"fade-right","data-aos-delay":"400","data-aos-duration":"800",children:["StarScope는 단순히 별을 보는 도구를 넘어 하늘을 이해하고, ",f.jsx("br",{}),"꿈꾸는 문화를 만드는 브랜드로 성장하고 있습니다."]})]})]})}const hE=H(pt)`
  & h2 {
    font-size: var(--font-mz);
    font-weight: var(--font-bw);
    text-align: center;
    margin-bottom: 4rem;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    & h2 {
      font-size: var(--font-mlz);
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    & h2 {
      font-size: var(--font-lz);
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    & h2 {
      font-size: var(--font-xlz);
    }
  }
  @media screen and (min-width: 1441px) {
    & h2 {
      font-size: var(--font-2xlz);
    }
  }
`,mE=H(ri)`
  position: relative;
  & > img {
    width: 100%;
    aspect-ratio: 1 / 0.3;
    object-fit: cover;
    vertical-align: top;
  }

  & > div {
    position: absolute;
    width: 100%;
    aspect-ratio: 1 / 0.3;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
  }

  & h3,
  strong {
    color: var(--white-color);
  }

  & h3:first-child {
    font-size: var(--font-smz);
    font-weight: var(--font-mw);
  }

  & strong {
    font-size: var(--font-mz);
  }

  & h3:last-child {
    font-size: var(--font-mlz);
    font-weight: var(--font-bw);
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    & h3:first-child {
      font-size: var(--font-mz);
    }

    & strong {
      font-size: var(--font-mlz);
    }

    & h3:last-child {
      font-size: var(--font-lz);
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    & h3:first-child {
      font-size: var(--font-mlz);
    }

    & strong {
      font-size: var(--font-lz);
    }

    & h3:last-child {
      font-size: var(--font-xlz);
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    & h3:first-child {
      font-size: var(--font-lz);
    }

    & strong {
      font-size: var(--font-xlz);
    }

    & h3:last-child {
      font-size: var(--font-2xlz);
    }
  }
  @media screen and (min-width: 1441px) {
    & h3:first-child {
      font-size: var(--font-xlz);
    }

    & strong {
      font-size: var(--font-2xlz);
    }

    & h3:last-child {
      font-size: var(--font-3xlz);
    }
  }
`,Jg=H(pt)`
  margin-top: 10rem;
  & > h2 {
    font-size: var(--font-mz);
    font-weight: var(--font-bw);
  }

  & > p {
    font-size: var(--font-smz);
    margin: 1rem 0;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    & > h2 {
      font-size: var(--font-mlz);
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    & > h2 {
      font-size: var(--font-lz);
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    & > h2 {
      font-size: var(--font-xlz);
    }
  }
  @media screen and (min-width: 1441px) {
    & > h2 {
      font-size: var(--font-2xlz);
    }
  }
`,pE=H(ri)`
  margin-top: 10rem;
  position: relative;

  & > img {
    width: 100%;
    aspect-ratio: 1 / 0.3;
    object-fit: cover;
  }

  & > div {
    position: absolute;
    width: 100%;
    aspect-ratio: 1 / 0.3;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
  }

  & h3 {
    color: var(--white-color);
    font-size: var(--font-mz);
    font-weight: var(--font-bw);
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    & h3 {
      font-size: var(--font-mlz);
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    & h3 {
      font-size: var(--font-lz);
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    & h3 {
      font-size: var(--font-xlz);
    }
  }
  @media screen and (min-width: 1441px) {
    & h3 {
      font-size: var(--font-2xlz);
    }
  }
`;function gE(){const{readPost:r,updatePost:a,store_business:s}=st(),[l,o]=E.useState("all"),c=b=>{o(b.target.value)};E.useEffect(()=>{s.length===0&&r("store_business")},[]);const h=async b=>{const{id:x,value:_}=b.target;await a(x,{recall:_==="true"},"store_business")},m=s.filter(b=>l==="true"?b.recall===!0:l==="false"?b.recall===!1:!0),p=s.some(b=>b.recall===!0),g=s.some(b=>b.recall===!1);let v="";return l==="true"&&!p&&(v="답변완료한 창업문의가 없습니다."),l==="false"&&!g&&(v="모든 창업문의의 답변을 완료하였습니다."),f.jsxs(f.Fragment,{children:[f.jsxs(vE,{children:[f.jsxs("div",{children:[f.jsx(Ha,{}),f.jsx("h1",{children:"창업 문의"})]}),f.jsxs(yE,{children:[f.jsx("label",{htmlFor:"all",children:"전체"}),f.jsx(Ue,{type:"radio",id:"all",name:"sortQna",value:"all",onChange:c,checked:l==="all"}),f.jsx("label",{htmlFor:"true",children:"답변완료"}),f.jsx(Ue,{type:"radio",id:"true",name:"sortQna",value:"true",onChange:c,checked:l==="true"}),f.jsx("label",{htmlFor:"false",children:"미완료"}),f.jsx(Ue,{type:"radio",id:"false",name:"sortQna",value:"false",onChange:c,checked:l==="false"})]})]}),f.jsx(bE,{children:s.length>0?m.length>0?f.jsxs(wE,{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"id"}),f.jsx("th",{children:"성함"}),f.jsx("th",{children:"연락처"}),f.jsx("th",{children:"문의 내용"}),f.jsx("th",{children:"답변 여부"})]})}),f.jsx("tbody",{children:m.map(b=>f.jsxs("tr",{children:[f.jsx("td",{children:b.id}),f.jsx("td",{children:b.name}),f.jsx("td",{children:b.contact}),f.jsx("td",{children:b.content}),f.jsx("td",{children:f.jsxs("select",{id:b.id,name:"recall",onChange:h,value:b.recall?"true":"false",children:[f.jsx("option",{value:"true",children:"답변완료"}),f.jsx("option",{value:"false",children:"미완료"})]})})]},b.id))})]}):f.jsxs(Fg,{children:[f.jsx(Ha,{}),f.jsx("strong",{children:v||"해당 조건의 창업문의가 없습니다."})]}):f.jsxs(Fg,{children:[f.jsx(Ha,{}),f.jsx("strong",{children:"등록된 창업문의가 없습니다."})]})})]})}const vE=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  & h1 {
    font-size: 1.6rem;
    font-weight: var(--font-mw);
  }
  & svg {
    width: 1.6rem;
  }
`,yE=H.div`
  display: flex;
  gap: 1rem;
`,bE=H.div`
  overflow-y: auto;
  margin-top: 6rem;
  height: calc(100% - 9.7rem);
`,Fg=H.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  text-align: center;
  flex-direction: column;
  & > strong {
    font-size: var(--font-smz);
    font-weight: var(--font-bw);
    line-height: 1.4;
  }
`,wE=H.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  padding-right: 1rem;

  & tbody > tr {
    border-top: 1px solid var(--stroke-color);
  }

  & th,
  td {
    width: calc(100% / 4);
    padding: 1.2rem;
  }
  & th {
    font-size: var(--font-smz);
    font-weight: var(--font-mw);
  }
  & td {
    font-size: var(--font-sz);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
`;function xE(){const{readPost:r,updatePost:a,commu_qna:s}=st(),[l,o]=E.useState("all"),c=b=>{o(b.target.value)};E.useEffect(()=>{s.length===0&&r("commu_qna")},[]);const h=async b=>{const{id:x,value:_}=b.target;await a(x,{recall:_==="true"},"commu_qna")},m=s.filter(b=>l==="true"?b.recall===!0:l==="false"?b.recall===!1:!0),p=s.some(b=>b.recall===!0),g=s.some(b=>b.recall===!1);let v="";return l==="true"&&!p&&(v="답변완료한 문의가 없습니다."),l==="false"&&!g&&(v="모든 문의의 답변을 완료하였습니다."),f.jsxs(f.Fragment,{children:[f.jsxs(_E,{children:[f.jsxs("div",{children:[f.jsx(Gc,{}),f.jsx("h1",{children:"문의 내역"})]}),f.jsxs(SE,{children:[f.jsx("label",{htmlFor:"all",children:"전체"}),f.jsx(Ue,{type:"radio",id:"all",name:"sortQna",value:"all",onChange:c,checked:l==="all"}),f.jsx("label",{htmlFor:"true",children:"답변완료"}),f.jsx(Ue,{type:"radio",id:"true",name:"sortQna",value:"true",onChange:c,checked:l==="true"}),f.jsx("label",{htmlFor:"false",children:"미완료"}),f.jsx(Ue,{type:"radio",id:"false",name:"sortQna",value:"false",onChange:c,checked:l==="false"})]})]}),f.jsx(jE,{children:s.length>0?m.length>0?f.jsxs(EE,{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"id"}),f.jsx("th",{children:"성함"}),f.jsx("th",{children:"연락처"}),f.jsx("th",{children:"문의 내용"}),f.jsx("th",{children:"답변 여부"})]})}),f.jsx("tbody",{children:m.map(b=>f.jsxs("tr",{children:[f.jsx("td",{children:b.id}),f.jsx("td",{children:b.name}),f.jsx("td",{children:b.contact}),f.jsx("td",{children:b.content}),f.jsx("td",{children:f.jsxs("select",{id:b.id,name:"recall",onChange:h,value:b.recall?"true":"false",children:[f.jsx("option",{value:"true",children:"답변완료"}),f.jsx("option",{value:"false",children:"미완료"})]})})]},b.id))})]}):f.jsxs(Wg,{children:[f.jsx(Gc,{}),f.jsx("strong",{children:v||"해당 조건의 문의가 없습니다."})]}):f.jsxs(Wg,{children:[f.jsx(Gc,{}),f.jsx("strong",{children:"등록된 문의가 없습니다."})]})})]})}const _E=H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  & h1 {
    font-size: 1.6rem;
    font-weight: var(--font-mw);
  }
  & svg {
    width: 1.6rem;
  }
`,SE=H.div`
  display: flex;
  gap: 1rem;
`,jE=H.div`
  overflow-y: auto;
  margin-top: 6rem;
  height: calc(100% - 9.7rem);
`,Wg=H.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  text-align: center;
  flex-direction: column;
  & > strong {
    font-size: var(--font-smz);
    font-weight: var(--font-bw);
    line-height: 1.4;
  }
`,EE=H.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  padding-right: 1rem;

  & tbody > tr {
    border-top: 1px solid var(--stroke-color);
  }

  & th,
  td {
    width: calc(100% / 4);
    padding: 1.2rem;
  }
  & th {
    font-size: var(--font-smz);
    font-weight: var(--font-mw);
  }
  & td {
    font-size: var(--font-sz);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
`;function TE(){return f.jsxs(f.Fragment,{children:[f.jsx(mx,{}),f.jsxs(M1,{children:[f.jsxs(Be,{path:"/",element:f.jsx(v2,{}),children:[f.jsx(Be,{path:"",element:f.jsx(iE,{})}),f.jsx(Be,{path:"brand",element:f.jsx(fE,{})}),f.jsx(Be,{path:"product",element:f.jsx(y2,{})}),f.jsx(Be,{path:"product/:id",element:f.jsx(j2,{})}),f.jsx(Be,{path:"store",element:f.jsx(R2,{})}),f.jsx(Be,{path:"commu",element:f.jsx(K2,{})}),f.jsx(Be,{path:"commu/event/:id",element:f.jsx(Z2,{})})]}),f.jsx(Be,{path:"/auth/login",element:f.jsx(aj,{})}),f.jsxs(Be,{path:"/admin",element:f.jsx(yj,{}),children:[f.jsx(Be,{path:"home",element:f.jsx(r2,{})}),f.jsx(Be,{path:"product",element:f.jsx(Kj,{})}),f.jsx(Be,{path:"product/create",element:f.jsx(Yg,{})}),f.jsx(Be,{path:"product/update/:id",element:f.jsx(Yg,{})}),f.jsx(Be,{path:"store",element:f.jsx(Bj,{})}),f.jsx(Be,{path:"store/create",element:f.jsx(Gg,{})}),f.jsx(Be,{path:"store/update/:id",element:f.jsx(Gg,{})}),f.jsx(Be,{path:"business",element:f.jsx(gE,{})}),f.jsx(Be,{path:"event",element:f.jsx(jj,{})}),f.jsx(Be,{path:"event/create",element:f.jsx(Lg,{})}),f.jsx(Be,{path:"event/update/:id",element:f.jsx(Lg,{})}),f.jsx(Be,{path:"faq",element:f.jsx(Rj,{})}),f.jsx(Be,{path:"faq/create",element:f.jsx(Hg,{})}),f.jsx(Be,{path:"faq/update/:id",element:f.jsx(Hg,{})}),f.jsx(Be,{path:"qna",element:f.jsx(xE,{})})]})]})]})}Gb.createRoot(document.getElementById("root")).render(f.jsx(E.StrictMode,{children:f.jsx(aw,{basename:"/starscope",children:f.jsx(TE,{})})}));
