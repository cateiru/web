_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},"155x":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("epLR"),a=r("KwD7"),i=r("kiPq");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function l(e){var t=function(e){var t,r,n,l=Object(i.b)(),{id:s,disabled:d,readOnly:b,required:u,isRequired:j,isInvalid:f,isReadOnly:O,isDisabled:h,onFocus:m,onBlur:p}=e,x=o(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),y=[];null!=l&&l.hasFeedbackText&&null!=l&&l.isInvalid&&y.push(l.feedbackId);null!=l&&l.hasHelpText&&y.push(l.helpTextId);return c({},x,{"aria-describedby":y.join(" ")||void 0,id:null!=s?s:null==l?void 0:l.id,isDisabled:null!=(t=null!=d?d:h)?t:null==l?void 0:l.isDisabled,isReadOnly:null!=(r=null!=b?b:O)?r:null==l?void 0:l.isReadOnly,isRequired:null!=(n=null!=u?u:j)?n:null==l?void 0:l.isRequired,isInvalid:null!=f?f:null==l?void 0:l.isInvalid,onFocus:Object(a.a)(null==l?void 0:l.onFocus,m),onBlur:Object(a.a)(null==l?void 0:l.onBlur,p)})}(e),{isDisabled:r,isInvalid:l,isReadOnly:s,isRequired:d}=t;return c({},o(t,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:r,readOnly:s,required:d,"aria-invalid":Object(n.b)(l),"aria-required":Object(n.b)(d),"aria-readonly":Object(n.b)(s)})}},"23aj":function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),a=r("q1tI"),i=r.n(a),c=r("MAJE"),o=r("+p43"),l=r("5KJR"),s=r("tofy"),d=r("v7Hm"),b=r("uMdk"),u=r("RW2Z"),j=r("vJKn"),f=r.n(j),O=r("rg98"),h=r("xvhg"),m=r("M/Vb"),p=r("0HfK"),x=r("sKyC"),y=r("U6LL"),v=r("epLR"),C=(r("ypkU"),r("pr4h")),g=r("BXwj");Object.freeze(["base","sm","md","lg","xl","2xl"]);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var L=Object(x.a)(((e,t)=>{var r,n,{ratio:i=4/3,children:c,className:o}=e,l=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["ratio","children","className"]),s=a.Children.only(c),d=Object(v.c)("chakra-aspect-ratio",o);return a.createElement(y.a.div,k({ref:t,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:(r=i,n=e=>1/e*100+"%",Object(C.c)(r)?r.map((e=>null===e?null:n(e))):Object(C.i)(r)?Object(g.e)(r).reduce(((e,t)=>(e[t]=n(r[t]),e)),{}):null!=r?n(r):null)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},l),s)}));C.a&&(L.displayName="AspectRatio");var w=r("7Ozu"),E=r.n(w),R={video:{facingMode:"environment",aspectRatio:{ideal:1}}};var M=r("T1Xd"),P=r("uK0Q"),D=function(){var e=Object(M.d)(P.m),t=Object(h.a)(e,2),r=t[0],a=t[1],c=Object(M.d)(P.l),o=Object(h.a)(c,2),s=o[0],d=o[1],b=Object(M.d)(P.s),u=Object(h.a)(b,2),j=u[0],f=u[1],O=Object(M.d)(P.k),m=Object(h.a)(O,2)[1],p=document.createElement("video"),x=i.a.useRef(null),y=null,v=0,C=null;i.a.useEffect((function(){y=x.current.getContext("2d"),f(!0),navigator.mediaDevices.getUserMedia(R).then((function(e){p.srcObject=e,C=e,p.setAttribute("playsinline","true"),p.play(),d(!1),v=requestAnimationFrame(g)})).catch((function(){f(!1)}))}),[]);var g=function e(){var t=x.current;try{if(p.readyState===p.HAVE_ENOUGH_DATA&&y){t.height=270,t.width=270,y.drawImage(p,0,0,t.width,t.height);var r=y.getImageData(0,0,t.width,t.height),n=E()(r.data,r.width,r.height,{inversionAttempts:"dontInvert"});n&&(m(n.data),function(e,t,r,n,a){a.beginPath(),a.moveTo(e.x,e.y),a.lineTo(t.x,t.y),a.lineTo(n.x,n.y),a.lineTo(r.x,r.y),a.closePath(),a.lineWidth=4,a.strokeStyle="rgba(245, 27, 60, 1)",a.stroke(),a.fillStyle="rgba(245, 27, 60, 0.5)",a.fill()}(n.location.topLeftCorner,n.location.topRightCorner,n.location.bottomLeftCorner,n.location.bottomRightCorner,y),setTimeout((function(){if(n.data&&""!==n.data)return a(!0),cancelAnimationFrame(v),void C.getTracks().forEach((function(e){return e.stop()}))}),500)),j||cancelAnimationFrame(v)}v=requestAnimationFrame(e)}catch(i){return cancelAnimationFrame(v),C.getTracks().forEach((function(e){return e.stop()})),void f(!0)}};return Object(n.jsx)(l.a,{children:Object(n.jsx)("canvas",{ref:x,hidden:r||s})})},I=r("KP9Q"),Z=r("Teo5"),S=r("5jRf"),_=r("kbjH"),z=function(e){var t=e.text;return Object(n.jsxs)(s.a,{children:[Object(n.jsx)(d.a,{display:"flex",justifyContent:"center",alignItems:"center",margin:"0 1rem 0 0",children:Object(n.jsx)(u.d,{size:"2rem",color:Object(Z.a)("mainSecondly")})}),Object(n.jsx)(c.a,{fontWeight:"bold",fontSize:"1.3rem",color:Object(Z.a)("textPrimary"),children:t})]})},A=function(e,t,r){return e&&t?Object(n.jsx)(m.a,{thickness:"4px",size:"xl",color:Object(Z.a)("mainSecondly"),position:"absolute",zIndex:"1"}):!t||r?Object(n.jsx)("button",{onClick:function(){location.reload()},children:r?Object(n.jsx)(u.i,{size:"3rem",color:Object(Z.a)("mainSecondly")}):Object(n.jsx)(u.k,{size:"3rem",color:Object(Z.a)("mainSecondly")})}):void 0},F=function(){var e=Object(p.a)(),t=Object(M.d)(P.m),r=Object(h.a)(t,1)[0],a=Object(M.d)(P.l),o=Object(h.a)(a,1)[0],l=Object(M.d)(P.s),s=Object(h.a)(l,1)[0],b=Object(M.d)(P.k),u=Object(h.a)(b,1)[0],j=Object(M.d)(P.n),m=Object(h.a)(j,2)[1],x=Object(M.d)(P.a),y=Object(h.a)(x,2),v=y[0],C=y[1];return i.a.useEffect((function(){C(!0)}),[]),i.a.useEffect((function(){(function(){var t=Object(O.a)(f.a.mark((function t(){var a,i,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r&&s||C(!1),!r){t.next=14;break}return a=new S.a(u),i=new _.a("log"),t.next=6,i.openDB();case 6:if(!a.validateQrData()){t.next=13;break}return o={label:"",code:u,date:new Date,type:I.b.normal,campus:a.getLogCampus()},t.next=10,i.add(o);case 10:m(!0),t.next=14;break;case 13:e({title:"QR\u30b3\u30fc\u30c9\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093",description:Object(n.jsx)(c.a,{wordBreak:"break-all",children:u}),status:"error",duration:4e3,isClosable:!0});case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[r,s]),Object(n.jsx)(L,{max:"100px",ratio:1,children:Object(n.jsxs)(d.a,{width:"100px",border:"solid 2px",borderColor:Object(Z.a)("background"),backgroundColor:Object(Z.a)("background"),borderRadius:"2rem",position:"relative",zIndex:"1",children:[A(o,s,r),Object(n.jsx)(d.a,{position:"absolute",zIndex:"0",borderRadius:"2rem",width:"100%",children:v?Object(n.jsx)(D,{}):null})]})})},B=function(){var e,t,r,a=Object(M.d)(P.l),i=Object(h.a)(a,1)[0],c=Object(M.d)(P.s),o=Object(h.a)(c,1)[0],l=Object(M.d)(P.m),s=Object(h.a)(l,1)[0];return Object(n.jsx)(d.a,{color:Object(Z.a)("textSecondly"),children:(e=i,t=s,r=o,r?e?"\u30ab\u30e1\u30e9\u5f85\u6a5f\u4e2d":t?"\u8aad\u307f\u53d6\u308a\u5b8c\u4e86":"\u8aad\u307f\u53d6\u308a\u5f85\u6a5f\u4e2d":"\u30ab\u30e1\u30e9\u505c\u6b62\u4e2d")})},T=function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(l.a,{children:Object(n.jsxs)(d.a,{backgroundColor:Object(Z.a)("mainPrimary"),margin:"2rem 0 0 0",padding:"1.5rem 1.5rem 0 1.5rem",borderRadius:"1.5rem",width:"20rem",children:[Object(n.jsx)(d.a,{color:"white",margin:"0 0 0 .2rem",children:Object(n.jsx)(z,{text:"QR\u30b3\u30fc\u30c9\u8aad\u307f\u53d6\u308a"})}),Object(n.jsx)(d.a,{margin:"1rem .2rem .2rem .2rem",children:Object(n.jsx)(F,{})}),Object(n.jsx)(l.a,{padding:".8rem 0 .8rem 0",children:Object(n.jsx)(B,{})})]})}),Object(n.jsx)(l.a,{margin:"1rem 0 1rem 0",children:Object(n.jsx)(c.a,{fontWeight:"bold",fontSize:".9rem",color:Object(Z.a)("textPrimary"),children:"\u307e\u305f\u306f"})})]})},W=r("VP/N"),q=r("3L07"),N=r("ueHc"),U=r("kiPq"),H=r("155x"),K=r("4jWa"),Q=r("CRla");function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var J=Object(x.a)(((e,t)=>{var r=Object(K.a)("Input",e),n=Object(Q.b)(e),i=Object(H.a)(n),c=Object(v.c)("chakra-input",e.className);return a.createElement(y.a.input,X({},i,{__css:r.field,ref:t,className:c}))}));C.a&&(J.displayName="Input"),J.id="Input";var V=function(){var e=Object(p.a)(),t=Object(W.a)(),r=t.isOpen,a=t.onOpen,i=t.onClose,o=Object(M.d)(P.c),s=Object(h.a)(o,2),d=s[0],b=s[1],u=Object(M.d)(P.n),j=Object(h.a)(u,2)[1],m=function(){i(),b("")},x=function(){var t=Object(O.a)(f.a.mark((function t(){var r,n,a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="jp.ac.dendai/".concat(d),n=new S.a(r),a=new _.a("log"),t.next=5,a.openDB();case 5:if(!n.validateQrData()){t.next=14;break}return c={label:"",code:r,date:new Date,type:I.b.normal,campus:n.getLogCampus()},t.next=9,a.add(c);case 9:i(),b(""),j(!0),t.next=15;break;case 14:e({title:"\u5ea7\u5e2d\u30b3\u30fc\u30c9\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093",status:"error",duration:4e3,isClosable:!0});case 15:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)(l.a,{children:[Object(n.jsx)(q.a,{backgroundColor:Object(Z.a)("buttonPrimary"),borderRadius:"1.5rem",padding:"2rem 3rem 2rem 3rem",width:"20rem",onClick:a,children:Object(n.jsx)(c.a,{fontWeight:"medium",fontSize:"1.2rem",color:Object(Z.a)("textPrimary"),children:"\u5ea7\u5e2d\u30b3\u30fc\u30c9\u3092\u76f4\u63a5\u5165\u529b\u3059\u308b"})}),Object(n.jsxs)(N.a,{isOpen:r,onClose:m,isCentered:!0,motionPreset:"slideInBottom",size:"sm",children:[Object(n.jsx)(N.g,{}),Object(n.jsxs)(N.d,{children:[Object(n.jsx)(N.f,{color:Object(Z.a)("textPrimary"),margin:"1rem 0 .5rem 0",children:"\u5ea7\u5e2d\u30b3\u30fc\u30c9\u3092\u76f4\u63a5\u5165\u529b\u3059\u308b"}),Object(n.jsx)(N.c,{size:"lg"}),Object(n.jsx)(N.b,{pb:6,children:Object(n.jsx)(U.a,{children:Object(n.jsx)(J,{size:"lg",value:d,onChange:function(e){b(e.target.value)},placeholder:"\u5ea7\u5e2d\u30b3\u30fc\u30c9"})})}),Object(n.jsxs)(N.e,{children:[Object(n.jsx)(q.a,{backgroundColor:Object(Z.a)("mainPrimary"),mr:3,onClick:x,children:"\u4fdd\u5b58"}),Object(n.jsx)(q.a,{color:Object(Z.a)("textPrimary"),variant:"ghost",onClick:m,children:"\u30ad\u30e3\u30f3\u30bb\u30eb"})]})]})]})]})},G=r("LHjV"),$=r("zHD3"),Y=r("9wln"),ee=function(){var e=Object(W.a)(),t=e.isOpen,r=e.onOpen,a=e.onClose,c=Object(M.d)(P.n),o=Object(h.a)(c,2),l=o[0],s=o[1],d=Object(M.d)(P.b),b=Object(h.a)(d,2),u=b[0],j=b[1],m=Object(M.d)(P.q),p=Object(h.a)(m,2),x=p[0],y=p[1];return i.a.useEffect((function(){(function(){var e=Object(O.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new _.a("log"),e.next=3,t.openDB();case 3:if(!l){e.next=19;break}return e.next=6,t.getLatest();case 6:return n=e.sent,console.log(n),r(),s(!1),j(Object(Y.f)(n)),e.t0=y,e.t1=Y.g,e.t2=n,e.next=16,t.count();case 16:e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),(0,e.t0)(e.t4);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),Object(n.jsxs)(N.a,{isOpen:t,onClose:a,isCentered:!0,children:[Object(n.jsx)(N.g,{}),Object(n.jsxs)(N.d,{children:[Object(n.jsx)(N.f,{children:"\u30ed\u30b0\u3092\u4fdd\u5b58\u3057\u307e\u3057\u305f"}),Object(n.jsx)(N.c,{size:"lg"}),Object(n.jsx)(N.b,{children:u}),Object(n.jsxs)(N.e,{children:[Object(n.jsx)($.a,{href:x,children:Object(n.jsx)(q.a,{backgroundColor:Object(Z.a)("mainPrimary"),color:Object(Z.a)("textPrimary"),onClick:a,children:"\u30c4\u30a4\u30fc\u30c8"})}),Object(n.jsx)(q.a,{variant:"ghost",color:Object(Z.a)("textPrimary"),onClick:a,children:"\u9589\u3058\u308b"})]})]})]})},te=r("B65E"),re=r.n(te),ne=r("rAzD"),ae=r.n(ne),ie=function(e){var t=e.link;return Object(n.jsx)(G.b,{buttonProps:{borderRadius:"2rem",leftIcon:Object(n.jsx)(u.j,{}),backgroundColor:Object(Z.a)("buttonSecondly"),color:Object(Z.a)("buttonIconSecondly"),width:"6.2rem"},link:t,children:Object(n.jsx)(c.a,{color:Object(Z.a)("textPrimary"),children:"\u8a2d\u5b9a"})})},ce=function(e){var t=e.title,r=e.link;return Object(n.jsx)(G.b,{buttonProps:{borderRadius:"1.5rem",width:"20rem",backgroundColor:Object(Z.a)("buttonSecondly"),padding:"1rem .5rem 1rem .5rem"},link:r,children:Object(n.jsx)(c.a,{color:Object(Z.a)("textPrimary"),children:t})})},oe=function(){var e=Object(o.c)().colorMode;return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)(l.a,{children:Object(n.jsxs)(s.a,{width:"20rem",justifyContent:"center",alignItems:"center",children:[Object(n.jsx)(d.a,{children:"light"===e?Object(n.jsx)(re.a,{width:"70%",height:"70%",alt:"Logcation"}):Object(n.jsx)(ae.a,{width:"70%",height:"70%",alt:"Logcation"})}),Object(n.jsx)(d.a,{children:Object(n.jsx)(ie,{link:"/setting"})})]})}),Object(n.jsx)(T,{}),Object(n.jsx)(V,{}),Object(n.jsx)(l.a,{margin:"2rem 0 2rem 0",children:Object(n.jsx)(b.a,{colorScheme:Object(Z.a)("divider"),borderWidth:"1px",width:"20rem"})}),Object(n.jsx)(l.a,{margin:"1rem 0 1rem 0",children:Object(n.jsx)(ce,{title:"\u7740\u5e2d\u5c65\u6b74\u306e\u78ba\u8a8d",link:"/history"})}),Object(n.jsx)(ee,{})]})},le=r("zRbM"),se=r("z7pX");function de(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return be(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return be(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){o=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(o)throw i}}}}function be(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var ue=function(){var e=Object(M.d)(P.e),t=Object(h.a)(e,2),r=t[0],a=t[1],c=Object(M.d)(P.h),o=Object(h.a)(c,1)[0];return i.a.useEffect((function(){(function(){var e=Object(O.a)(f.a.mark((function e(){var t,n,i,c,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=32;break}if(!((t=Object(se.a)(o)).length>=1)){e.next=32;break}return n=new _.a("log"),e.next=6,n.openDB();case 6:return e.next=8,n.deleteDB();case 8:i=de(t),e.prev=9,i.s();case 11:if((c=i.n()).done){e.next=23;break}return l=c.value,e.prev=13,e.next=16,n.add({label:l.label,code:l.code,type:l.type,campus:l.campus,date:new Date(l.date)});case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(13);case 21:e.next=11;break;case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(9),i.e(e.t1);case 28:return e.prev=28,i.f(),e.finish(28);case 31:a(!0);case 32:case"end":return e.stop()}}),e,null,[[9,25,28,31],[13,18]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsx)(n.Fragment,{})};t.default=function(){return Object(n.jsx)(le.a,{children:Object(n.jsxs)(d.a,{margin:"2.3rem 1.6rem 1rem 1.6rem",children:[Object(n.jsx)(ue,{}),Object(n.jsx)(oe,{})]})})}},B65E:function(e,t,r){var n=r("q1tI");function a(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},[n.createElement("clipPath",{id:"clip0",key:0},n.createElement("rect",{x:"224",y:"257",width:"832",height:"206"})),n.createElement("linearGradient",{x1:"225",y1:"378",x2:"1055",y2:"378",gradientUnits:"userSpaceOnUse",spreadMethod:"reflect",id:"fill1",key:1},[n.createElement("stop",{offset:"0",stopColor:"#007DFE",key:0}),n.createElement("stop",{offset:"0.38",stopColor:"#007DFE",key:1}),n.createElement("stop",{offset:"0.38",stopColor:"#212224",key:2}),n.createElement("stop",{offset:"1",stopColor:"#212224",key:3})])]),n.createElement("g",{clipPath:"url(#clip0)",transform:"translate(-224 -257)",key:1},[n.createElement("path",{d:"M676.166 386.445 670.736 387.156C669.372 387.63 668.393 388.311 667.799 389.2L666.909 392.667 668.066 396.489C668.838 397.496 669.846 398.267 671.092 398.8 672.339 399.333 673.673 399.6 675.098 399.6 677.353 399.6 679.518 399.096 681.595 398.089 683.672 397.081 685.393 395.481 686.758 393.289 687.44 392.192 687.952 390.926 688.293 389.489 688.318 389.251 688.343 389.014 688.369 388.777L686.58 388.044C683.197 386.978 679.726 386.445 676.166 386.445ZM901.228 362.267C898.854 362.267 896.629 362.859 894.552 364.045 892.476 365.23 890.785 366.948 889.479 369.2L887.521 377.555 889.479 385.911C890.785 388.163 892.476 389.852 894.552 390.978 896.629 392.104 898.854 392.667 901.228 392.667 903.601 392.667 905.827 392.104 907.903 390.978 909.98 389.852 911.671 388.163 912.977 385.911L914.935 377.555 912.977 369.2C911.671 366.948 909.98 365.23 907.903 364.045 905.827 362.859 903.601 362.267 901.228 362.267ZM370.515 362.267C368.142 362.267 365.916 362.859 363.84 364.045 361.763 365.23 360.072 366.948 358.766 369.2L356.808 377.555 358.766 385.911C360.072 388.163 361.763 389.852 363.84 390.978 365.916 392.104 368.142 392.667 370.515 392.667 372.889 392.667 375.114 392.104 377.191 390.978 379.268 389.852 380.959 388.163 382.264 385.911L384.222 377.555 382.264 369.2C380.959 366.948 379.268 365.23 377.191 364.045 375.114 362.859 372.889 362.267 370.515 362.267ZM482.098 361.556C479.487 361.556 477.054 362.119 474.799 363.244 472.545 364.37 470.764 365.97 469.459 368.044L467.501 375.778 469.459 383.422C470.764 385.555 472.545 387.185 474.799 388.311 477.054 389.437 479.487 390 482.098 390 484.471 390 486.786 389.496 489.041 388.489 491.295 387.481 493.135 385.941 494.559 383.867L496.695 375.778 495.449 369.378C494.618 367.6 493.491 366.119 492.067 364.933 490.643 363.748 489.07 362.889 487.349 362.356 485.628 361.822 483.878 361.556 482.098 361.556ZM594.338 334.889C600.865 334.889 605.938 335.422 609.558 336.489 613.178 337.555 616.411 338.741 619.26 340.044L619.26 340.045 619.26 371.511 619.26 371.511C617.479 368.904 615.284 366.859 612.673 365.378 610.062 363.896 607.451 362.83 604.841 362.178 602.23 361.526 599.916 361.2 597.898 361.2 594.694 361.2 591.697 361.941 588.908 363.422 586.12 364.904 583.895 366.859 582.233 369.289L579.741 377.555 582.233 386.533C583.895 388.963 586.12 390.8 588.908 392.044 591.697 393.289 594.694 393.911 597.898 393.911 600.509 393.911 603.09 393.555 605.642 392.844 608.193 392.133 610.656 391.007 613.029 389.467 615.403 387.926 617.479 385.911 619.26 383.422L619.26 383.422 619.26 414.711 619.26 414.711C616.411 416.252 613.178 417.556 609.558 418.622 605.938 419.689 600.865 420.222 594.338 420.222 584.606 420.222 575.943 418.504 568.348 415.067 560.753 411.63 554.789 406.711 550.458 400.311 546.126 393.911 543.96 386.326 543.96 377.556L543.96 377.555 543.96 377.555C543.96 368.667 546.126 361.052 550.458 354.711 554.789 348.37 560.753 343.481 568.348 340.044 575.943 336.607 584.606 334.889 594.338 334.889ZM468.747 334.889C475.63 334.889 481.772 336.459 487.171 339.6 489.871 341.17 492.297 343.104 494.448 345.4L496.695 348.165 496.695 336.667 496.695 336.667 529.628 336.667 529.628 336.667 529.628 416.666 529.628 416.667C529.628 427.807 527.551 436.696 523.397 443.333 519.243 449.97 513.577 454.741 506.397 457.644 499.217 460.548 490.999 462 481.742 462 470.23 462 461.063 460.43 454.239 457.289 447.415 454.148 442.371 449.763 439.108 444.133 435.844 438.504 433.678 432.015 432.61 424.667L432.61 424.667 432.61 424.666 465.899 424.666C466.373 427.63 467.264 429.881 468.569 431.422 469.874 432.963 471.506 434 473.464 434.533 475.422 435.066 477.588 435.333 479.962 435.333 483.522 435.333 486.548 434.592 489.041 433.111 491.533 431.629 493.431 429.496 494.737 426.711 496.042 423.926 496.695 420.578 496.695 416.666L496.695 403.347 494.448 406.133C492.297 408.445 489.871 410.385 487.171 411.956 481.772 415.096 475.63 416.667 468.747 416.667 462.576 416.667 456.583 415.215 450.768 412.311 444.953 409.407 440.176 404.933 436.437 398.889 432.699 392.844 430.83 385.141 430.83 375.778L430.83 375.778 430.83 375.778C430.83 366.296 432.699 358.563 436.437 352.578 440.176 346.593 444.953 342.148 450.768 339.244 456.583 336.341 462.576 334.889 468.747 334.889ZM1025.09 334.711C1036.25 334.711 1044.02 337.348 1048.41 342.622 1052.8 347.896 1055 355.393 1055 365.111L1055 365.111 1055 418.444 1055 418.444 1018.51 418.444 1018.51 418.444 1018.51 368.667C1018.51 364.993 1017.97 362.119 1016.91 360.044 1015.84 357.97 1013.52 356.933 1009.96 356.933 1007.94 356.933 1006.16 357.348 1004.62 358.178 1003.08 359.007 1001.89 360.282 1001.06 362 1000.23 363.719 999.816 365.941 999.816 368.667L999.816 418.444 999.816 418.444 965.103 418.444 965.103 418.444 965.103 336.667 965.103 336.667 999.816 336.667 999.816 336.667 999.816 348.578C1002.07 344.43 1005.25 341.081 1009.34 338.533 1013.43 335.985 1018.69 334.711 1025.09 334.711ZM901.228 334.711C910.722 334.711 919.207 336.43 926.684 339.867 934.16 343.304 940.035 348.222 944.307 354.622 948.579 361.022 950.716 368.667 950.716 377.555L950.716 377.555 950.716 377.556C950.716 386.326 948.579 393.911 944.307 400.311 940.035 406.711 934.16 411.63 926.684 415.067 919.207 418.504 910.722 420.222 901.228 420.222 891.734 420.222 883.248 418.504 875.772 415.067 868.296 411.63 862.421 406.711 858.149 400.311 853.876 393.911 851.74 386.326 851.74 377.556L851.74 377.555 851.74 377.555C851.74 368.667 853.876 361.022 858.149 354.622 862.421 348.222 868.296 343.304 875.772 339.867 883.248 336.43 891.734 334.711 901.228 334.711ZM370.515 334.711C380.009 334.711 388.495 336.43 395.971 339.867 403.448 343.304 409.322 348.222 413.594 354.622 417.867 361.022 420.003 368.667 420.003 377.555L420.003 377.555 420.003 377.556C420.003 386.326 417.867 393.911 413.594 400.311 409.322 406.711 403.448 411.63 395.971 415.067 388.495 418.504 380.009 420.222 370.515 420.222 361.021 420.222 352.536 418.504 345.059 415.067 337.583 411.63 331.708 406.711 327.436 400.311 323.164 393.911 321.027 386.326 321.027 377.556L321.027 377.555 321.027 377.555C321.027 368.667 323.164 361.022 327.436 354.622 331.708 348.222 337.583 343.304 345.059 339.867 352.536 336.43 361.021 334.711 370.515 334.711ZM680.26 334C687.974 334 694.976 335.067 701.266 337.2 707.556 339.333 712.54 342.444 716.219 346.533 719.898 350.622 721.737 355.63 721.737 361.555L721.737 361.556 721.737 418.444 721.737 418.444 688.805 418.444 688.805 418.444 688.805 406.517 687.737 408.756C685.126 412.489 681.565 415.333 677.056 417.289 672.546 419.244 667.443 420.222 661.747 420.222 656.406 420.222 651.481 419.274 646.972 417.378 642.462 415.482 638.842 412.607 636.113 408.756 633.383 404.904 632.019 400.193 632.019 394.622L632.019 394.622 632.019 394.622C632.019 386.8 634.778 380.666 640.296 376.222 645.815 371.778 653.796 369.555 664.239 369.555 668.511 369.555 672.635 369.911 676.611 370.622 680.587 371.333 684.147 372.311 687.292 373.555L688.805 374.315 688.805 370.089C688.805 368.548 688.567 367.126 688.093 365.822 687.618 364.519 686.846 363.363 685.778 362.356 684.71 361.348 683.286 360.578 681.506 360.044 679.726 359.511 677.59 359.245 675.098 359.245 671.775 359.245 668.274 359.63 664.595 360.4 660.916 361.17 657.652 362.059 654.804 363.067 651.956 364.074 649.998 364.874 648.93 365.467L638.427 343.067 638.427 343.067 638.427 343.067C644.123 340.815 650.562 338.741 657.742 336.844 664.921 334.948 672.427 334 680.26 334ZM745.964 308.222 778.896 308.222 778.896 308.222 778.896 336.667 794.027 336.667 794.027 336.667 794.027 364.222 794.027 364.222 778.896 364.222 778.896 418.444 778.896 418.444 745.964 418.444 745.964 418.444 745.964 364.222 730.833 364.222 730.833 364.222 730.833 336.667 730.833 336.667 745.964 336.667 745.964 308.222 745.964 308.222ZM225 294 264.163 294 264.163 294 264.163 385.555 314.897 385.555 314.897 385.556 314.897 418.444 314.897 418.444 225 418.444 225 418.444 225 294 225 294Z",fill:"url(#fill1)",fillRule:"evenodd",key:0}),n.createElement("path",{d:"M820 288.719C809.396 288.719 800.801 297.315 800.801 307.918 800.801 318.522 809.396 327.118 820 327.118 830.604 327.118 839.199 318.522 839.199 307.918 839.199 297.315 830.604 288.719 820 288.719ZM819.919 258C837.149 258 852.341 266.73 861.312 280.009L862.461 282.125 870 258 870 258 862.461 282.125 865.914 288.488C868.44 294.46 869.837 301.026 869.837 307.918 869.837 325.149 861.107 340.341 847.828 349.311L840.165 353.471 820 418 799.868 353.577 792.009 349.311C778.73 340.341 770 325.149 770 307.918 770 301.026 771.397 294.46 773.923 288.488L777.48 281.935 777.48 281.935 778.525 280.009C787.496 266.73 802.688 258 819.919 258ZM770 258 770 258 777.48 281.935 777.48 281.935Z",fill:"#007DFE",fillRule:"evenodd",key:1})])])}a.defaultProps={width:"832",height:"206",viewBox:"0 0 832 206",overflow:"hidden"},e.exports=a,a.default=a},rAzD:function(e,t,r){var n=r("q1tI");function a(e){return n.createElement("svg",e,[n.createElement("defs",{key:0},[n.createElement("clipPath",{id:"clip0",key:0},n.createElement("rect",{x:"224",y:"257",width:"832",height:"206"})),n.createElement("linearGradient",{x1:"225",y1:"378",x2:"1055",y2:"378",gradientUnits:"userSpaceOnUse",spreadMethod:"reflect",id:"fill1",key:1},[n.createElement("stop",{offset:"0",stopColor:"#007DFE",key:0}),n.createElement("stop",{offset:"0.38",stopColor:"#007DFE",key:1}),n.createElement("stop",{offset:"0.38",stopColor:"#dedddb",key:2}),n.createElement("stop",{offset:"1",stopColor:"#dedddb",key:3})])]),n.createElement("g",{clipPath:"url(#clip0)",transform:"translate(-224 -257)",key:1},[n.createElement("path",{d:"M676.166 386.445 670.736 387.156C669.372 387.63 668.393 388.311 667.799 389.2L666.909 392.667 668.066 396.489C668.838 397.496 669.846 398.267 671.092 398.8 672.339 399.333 673.673 399.6 675.098 399.6 677.353 399.6 679.518 399.096 681.595 398.089 683.672 397.081 685.393 395.481 686.758 393.289 687.44 392.192 687.952 390.926 688.293 389.489 688.318 389.251 688.343 389.014 688.369 388.777L686.58 388.044C683.197 386.978 679.726 386.445 676.166 386.445ZM901.228 362.267C898.854 362.267 896.629 362.859 894.552 364.045 892.476 365.23 890.785 366.948 889.479 369.2L887.521 377.555 889.479 385.911C890.785 388.163 892.476 389.852 894.552 390.978 896.629 392.104 898.854 392.667 901.228 392.667 903.601 392.667 905.827 392.104 907.903 390.978 909.98 389.852 911.671 388.163 912.977 385.911L914.935 377.555 912.977 369.2C911.671 366.948 909.98 365.23 907.903 364.045 905.827 362.859 903.601 362.267 901.228 362.267ZM370.515 362.267C368.142 362.267 365.916 362.859 363.84 364.045 361.763 365.23 360.072 366.948 358.766 369.2L356.808 377.555 358.766 385.911C360.072 388.163 361.763 389.852 363.84 390.978 365.916 392.104 368.142 392.667 370.515 392.667 372.889 392.667 375.114 392.104 377.191 390.978 379.268 389.852 380.959 388.163 382.264 385.911L384.222 377.555 382.264 369.2C380.959 366.948 379.268 365.23 377.191 364.045 375.114 362.859 372.889 362.267 370.515 362.267ZM482.098 361.556C479.487 361.556 477.054 362.119 474.799 363.244 472.545 364.37 470.764 365.97 469.459 368.044L467.501 375.778 469.459 383.422C470.764 385.555 472.545 387.185 474.799 388.311 477.054 389.437 479.487 390 482.098 390 484.471 390 486.786 389.496 489.041 388.489 491.295 387.481 493.135 385.941 494.559 383.867L496.695 375.778 495.449 369.378C494.618 367.6 493.491 366.119 492.067 364.933 490.643 363.748 489.07 362.889 487.349 362.356 485.628 361.822 483.878 361.556 482.098 361.556ZM594.338 334.889C600.865 334.889 605.938 335.422 609.558 336.489 613.178 337.555 616.411 338.741 619.26 340.044L619.26 340.045 619.26 371.511 619.26 371.511C617.479 368.904 615.284 366.859 612.673 365.378 610.062 363.896 607.451 362.83 604.841 362.178 602.23 361.526 599.916 361.2 597.898 361.2 594.694 361.2 591.697 361.941 588.908 363.422 586.12 364.904 583.895 366.859 582.233 369.289L579.741 377.555 582.233 386.533C583.895 388.963 586.12 390.8 588.908 392.044 591.697 393.289 594.694 393.911 597.898 393.911 600.509 393.911 603.09 393.555 605.642 392.844 608.193 392.133 610.656 391.007 613.029 389.467 615.403 387.926 617.479 385.911 619.26 383.422L619.26 383.422 619.26 414.711 619.26 414.711C616.411 416.252 613.178 417.556 609.558 418.622 605.938 419.689 600.865 420.222 594.338 420.222 584.606 420.222 575.943 418.504 568.348 415.067 560.753 411.63 554.789 406.711 550.458 400.311 546.126 393.911 543.96 386.326 543.96 377.556L543.96 377.555 543.96 377.555C543.96 368.667 546.126 361.052 550.458 354.711 554.789 348.37 560.753 343.481 568.348 340.044 575.943 336.607 584.606 334.889 594.338 334.889ZM468.747 334.889C475.63 334.889 481.772 336.459 487.171 339.6 489.871 341.17 492.297 343.104 494.448 345.4L496.695 348.165 496.695 336.667 496.695 336.667 529.628 336.667 529.628 336.667 529.628 416.666 529.628 416.667C529.628 427.807 527.551 436.696 523.397 443.333 519.243 449.97 513.577 454.741 506.397 457.644 499.217 460.548 490.999 462 481.742 462 470.23 462 461.063 460.43 454.239 457.289 447.415 454.148 442.371 449.763 439.108 444.133 435.844 438.504 433.678 432.015 432.61 424.667L432.61 424.667 432.61 424.666 465.899 424.666C466.373 427.63 467.264 429.881 468.569 431.422 469.874 432.963 471.506 434 473.464 434.533 475.422 435.066 477.588 435.333 479.962 435.333 483.522 435.333 486.548 434.592 489.041 433.111 491.533 431.629 493.431 429.496 494.737 426.711 496.042 423.926 496.695 420.578 496.695 416.666L496.695 403.347 494.448 406.133C492.297 408.445 489.871 410.385 487.171 411.956 481.772 415.096 475.63 416.667 468.747 416.667 462.576 416.667 456.583 415.215 450.768 412.311 444.953 409.407 440.176 404.933 436.437 398.889 432.699 392.844 430.83 385.141 430.83 375.778L430.83 375.778 430.83 375.778C430.83 366.296 432.699 358.563 436.437 352.578 440.176 346.593 444.953 342.148 450.768 339.244 456.583 336.341 462.576 334.889 468.747 334.889ZM1025.09 334.711C1036.25 334.711 1044.02 337.348 1048.41 342.622 1052.8 347.896 1055 355.393 1055 365.111L1055 365.111 1055 418.444 1055 418.444 1018.51 418.444 1018.51 418.444 1018.51 368.667C1018.51 364.993 1017.97 362.119 1016.91 360.044 1015.84 357.97 1013.52 356.933 1009.96 356.933 1007.94 356.933 1006.16 357.348 1004.62 358.178 1003.08 359.007 1001.89 360.282 1001.06 362 1000.23 363.719 999.816 365.941 999.816 368.667L999.816 418.444 999.816 418.444 965.103 418.444 965.103 418.444 965.103 336.667 965.103 336.667 999.816 336.667 999.816 336.667 999.816 348.578C1002.07 344.43 1005.25 341.081 1009.34 338.533 1013.43 335.985 1018.69 334.711 1025.09 334.711ZM901.228 334.711C910.722 334.711 919.207 336.43 926.684 339.867 934.16 343.304 940.035 348.222 944.307 354.622 948.579 361.022 950.716 368.667 950.716 377.555L950.716 377.555 950.716 377.556C950.716 386.326 948.579 393.911 944.307 400.311 940.035 406.711 934.16 411.63 926.684 415.067 919.207 418.504 910.722 420.222 901.228 420.222 891.734 420.222 883.248 418.504 875.772 415.067 868.296 411.63 862.421 406.711 858.149 400.311 853.876 393.911 851.74 386.326 851.74 377.556L851.74 377.555 851.74 377.555C851.74 368.667 853.876 361.022 858.149 354.622 862.421 348.222 868.296 343.304 875.772 339.867 883.248 336.43 891.734 334.711 901.228 334.711ZM370.515 334.711C380.009 334.711 388.495 336.43 395.971 339.867 403.448 343.304 409.322 348.222 413.594 354.622 417.867 361.022 420.003 368.667 420.003 377.555L420.003 377.555 420.003 377.556C420.003 386.326 417.867 393.911 413.594 400.311 409.322 406.711 403.448 411.63 395.971 415.067 388.495 418.504 380.009 420.222 370.515 420.222 361.021 420.222 352.536 418.504 345.059 415.067 337.583 411.63 331.708 406.711 327.436 400.311 323.164 393.911 321.027 386.326 321.027 377.556L321.027 377.555 321.027 377.555C321.027 368.667 323.164 361.022 327.436 354.622 331.708 348.222 337.583 343.304 345.059 339.867 352.536 336.43 361.021 334.711 370.515 334.711ZM680.26 334C687.974 334 694.976 335.067 701.266 337.2 707.556 339.333 712.54 342.444 716.219 346.533 719.898 350.622 721.737 355.63 721.737 361.555L721.737 361.556 721.737 418.444 721.737 418.444 688.805 418.444 688.805 418.444 688.805 406.517 687.737 408.756C685.126 412.489 681.565 415.333 677.056 417.289 672.546 419.244 667.443 420.222 661.747 420.222 656.406 420.222 651.481 419.274 646.972 417.378 642.462 415.482 638.842 412.607 636.113 408.756 633.383 404.904 632.019 400.193 632.019 394.622L632.019 394.622 632.019 394.622C632.019 386.8 634.778 380.666 640.296 376.222 645.815 371.778 653.796 369.555 664.239 369.555 668.511 369.555 672.635 369.911 676.611 370.622 680.587 371.333 684.147 372.311 687.292 373.555L688.805 374.315 688.805 370.089C688.805 368.548 688.567 367.126 688.093 365.822 687.618 364.519 686.846 363.363 685.778 362.356 684.71 361.348 683.286 360.578 681.506 360.044 679.726 359.511 677.59 359.245 675.098 359.245 671.775 359.245 668.274 359.63 664.595 360.4 660.916 361.17 657.652 362.059 654.804 363.067 651.956 364.074 649.998 364.874 648.93 365.467L638.427 343.067 638.427 343.067 638.427 343.067C644.123 340.815 650.562 338.741 657.742 336.844 664.921 334.948 672.427 334 680.26 334ZM745.964 308.222 778.896 308.222 778.896 308.222 778.896 336.667 794.027 336.667 794.027 336.667 794.027 364.222 794.027 364.222 778.896 364.222 778.896 418.444 778.896 418.444 745.964 418.444 745.964 418.444 745.964 364.222 730.833 364.222 730.833 364.222 730.833 336.667 730.833 336.667 745.964 336.667 745.964 308.222 745.964 308.222ZM225 294 264.163 294 264.163 294 264.163 385.555 314.897 385.555 314.897 385.556 314.897 418.444 314.897 418.444 225 418.444 225 418.444 225 294 225 294Z",fill:"url(#fill1)",fillRule:"evenodd",key:0}),n.createElement("path",{d:"M820 288.719C809.396 288.719 800.801 297.315 800.801 307.918 800.801 318.522 809.396 327.118 820 327.118 830.604 327.118 839.199 318.522 839.199 307.918 839.199 297.315 830.604 288.719 820 288.719ZM819.919 258C837.149 258 852.341 266.73 861.312 280.009L862.461 282.125 870 258 870 258 862.461 282.125 865.914 288.488C868.44 294.46 869.837 301.026 869.837 307.918 869.837 325.149 861.107 340.341 847.828 349.311L840.165 353.471 820 418 799.868 353.577 792.009 349.311C778.73 340.341 770 325.149 770 307.918 770 301.026 771.397 294.46 773.923 288.488L777.48 281.935 777.48 281.935 778.525 280.009C787.496 266.73 802.688 258 819.919 258ZM770 258 770 258 777.48 281.935 777.48 281.935Z",fill:"#007DFE",fillRule:"evenodd",key:1})])])}a.defaultProps={width:"832",height:"206",viewBox:"0 0 832 206",overflow:"hidden"},e.exports=a,a.default=a},uMdk:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("sKyC"),a=r("4jWa"),i=r("CRla"),c=r("U6LL"),o=r("epLR"),l=r("pr4h"),s=r("q1tI");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var u=Object(n.a)(((e,t)=>{var r=Object(a.b)("Divider",e),{borderLeftWidth:n,borderBottomWidth:l,borderTopWidth:u,borderRightWidth:j,borderWidth:f,borderStyle:O,borderColor:h}=r,m=b(r,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),p=Object(i.b)(e),{className:x,orientation:y="horizontal",__css:v}=p,C=b(p,["className","orientation","__css"]),g={vertical:{borderLeftWidth:n||j||f||"1px",height:"100%"},horizontal:{borderBottomWidth:l||u||f||"1px",width:"100%"}};return s.createElement(c.a.hr,d({ref:t,"aria-orientation":y},C,{__css:d({},m,{border:"0",borderColor:h,borderStyle:O},g[y],v),className:Object(o.c)("chakra-divider",x)}))}));l.a&&(u.displayName="Divider")},z7pX:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("6FTQ");var a=r("8rE2");function i(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["/EDR",1,2,3,6,7,8,0,4,5]]]);