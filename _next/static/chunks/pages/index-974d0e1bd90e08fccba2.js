_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"/EDR":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,r,t){"use strict";t.r(r);var a=t("nKUr"),n=t("q1tI"),i=t.n(n),c=t("xvhg"),l=t("3L07"),o=t("MAJE"),s=t("5KJR"),d=t("tofy"),b=t("v7Hm"),u=t("zlS4");var j=t("sKyC"),m=t("5+Am"),O=t("U6LL"),h=t("4jWa"),f=t("CRla"),g=t("epLR"),v=t("pr4h");function p(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}function x(){return(x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var y=Object(j.a)(((e,r)=>{var t=x({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},Object(m.d)().badge);return n.createElement(O.a.div,x({ref:r},e,{className:Object(g.b)("chakra-avatar__badge",e.className),__css:t}))}));function C(e){var[r,t]=e.split(" ");return r&&t?""+r.charAt(0)+t.charAt(0):r.charAt(0)}v.a&&(y.displayName="AvatarBadge");var k=e=>{var{name:r,getInitials:t}=e,a=p(e,["name","getInitials"]),i=Object(m.d)();return n.createElement(O.a.div,x({role:"img","aria-label":r},a,{__css:i.label}),r?null==t?void 0:t(r):null)},w=e=>n.createElement(O.a.svg,x({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),n.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),n.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})),R={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},E=Object(j.a)(((e,r)=>{var t=Object(h.a)("Avatar",e),a=Object(f.b)(e),{src:i,name:c,showBorder:l,borderRadius:o="full",onError:s,getInitials:d=C,icon:b=n.createElement(w,null),iconLabel:u=" avatar",loading:j,children:v,borderColor:y}=a,k=p(a,["src","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor"]),E=x({borderRadius:o,borderWidth:l?"2px":void 0},R,t.container);return y&&(E.borderColor=y),n.createElement(O.a.span,x({ref:r},k,{className:Object(g.b)("chakra-avatar",e.className),__css:E}),n.createElement(m.b,{value:t},n.createElement(I,{src:i,loading:j,onError:s,getInitials:d,name:c,borderRadius:o,icon:b,iconLabel:u}),v))}));v.a&&(E.displayName="Avatar");var I=e=>{var{src:r,onError:t,getInitials:a,name:i,borderRadius:c,loading:l,iconLabel:o,icon:s=n.createElement(w,null)}=e,d=function(e){var{src:r,srcSet:t,onLoad:a,onError:i,crossOrigin:c,sizes:l,ignoreFallback:o}=e,[s,d]=Object(n.useState)("pending");Object(n.useEffect)((()=>{d(r?"loading":"pending")}),[r]);var b=Object(n.useRef)(),j=Object(n.useCallback)((()=>{if(r){m();var e=new Image;e.src=r,c&&(e.crossOrigin=c),t&&(e.srcset=t),l&&(e.sizes=l),e.onload=e=>{m(),d("loaded"),null==a||a(e)},e.onerror=e=>{m(),d("failed"),null==i||i(e)},b.current=e}}),[r,c,t,l,a,i]),m=()=>{b.current&&(b.current.onload=null,b.current.onerror=null,b.current=null)};return Object(u.a)((()=>{if(!o)return"loading"===s&&j(),()=>{m()}}),[s,j,o]),o?"loaded":s}({src:r,onError:t});return!r||!("loaded"===d)?i?n.createElement(k,{className:"chakra-avatar__initials",getInitials:a,name:i}):n.cloneElement(s,{role:"img","aria-label":o}):n.createElement(O.a.img,{src:r,alt:i,className:"chakra-avatar__img",loading:l,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:c}})};v.a&&(I.displayName="AvatarImage");var _=t("wCIg"),N=t("uMdk"),z=t("RW2Z"),A=t("z7pX"),L=t("M/Vb"),D=t("0HfK"),F=(t("ypkU"),t("BXwj"));Object.freeze(["base","sm","md","lg","xl","2xl"]);function T(){return(T=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var q=Object(j.a)(((e,r)=>{var t,a,{ratio:i=4/3,children:c,className:l}=e,o=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["ratio","children","className"]),s=n.Children.only(c),d=Object(g.b)("chakra-aspect-ratio",l);return n.createElement(O.a.div,T({ref:r,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:(t=i,a=e=>1/e*100+"%",Object(v.c)(t)?t.map((e=>null===e?null:a(e))):Object(v.h)(t)?Object(F.e)(t).reduce(((e,r)=>(e[r]=a(t[r]),e)),{}):null!=t?a(t):null)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},o),s)}));v.a&&(q.displayName="AspectRatio");var B=t("7Ozu"),P=t.n(B),S={video:{facingMode:"environment",aspectRatio:{ideal:1}}};var W=t("T1Xd"),Q=t("uK0Q"),K=function(){var e=Object(W.d)(Q.g),r=Object(c.a)(e,2),t=r[0],n=r[1],l=Object(W.d)(Q.f),o=Object(c.a)(l,2),d=o[0],b=o[1],u=Object(W.d)(Q.j),j=Object(c.a)(u,2),m=j[0],O=j[1],h=Object(W.d)(Q.e),f=Object(c.a)(h,2)[1],g=document.createElement("video"),v=i.a.useRef(null),p=null,x=0,y=null;i.a.useEffect((function(){p=v.current.getContext("2d"),O(!0),navigator.mediaDevices.getUserMedia(S).then((function(e){g.srcObject=e,y=e,g.setAttribute("playsinline","true"),g.play(),b(!1),x=requestAnimationFrame(C)})).catch((function(){O(!1)}))}),[]);var C=function e(){var r=v.current;try{if(g.readyState===g.HAVE_ENOUGH_DATA&&p){r.height=270,r.width=270,p.drawImage(g,0,0,r.width,r.height);var t=p.getImageData(0,0,r.width,r.height),a=P()(t.data,t.width,t.height,{inversionAttempts:"dontInvert"});a&&(f(a.data),function(e,r,t,a,n){n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(r.x,r.y),n.lineTo(a.x,a.y),n.lineTo(t.x,t.y),n.closePath(),n.lineWidth=4,n.strokeStyle="rgba(245, 27, 60, 1)",n.stroke(),n.fillStyle="rgba(245, 27, 60, 0.5)",n.fill()}(a.location.topLeftCorner,a.location.topRightCorner,a.location.bottomLeftCorner,a.location.bottomRightCorner,p),setTimeout((function(){if(a.data&&""!==a.data)return n(!0),cancelAnimationFrame(x),void y.getTracks().forEach((function(e){return e.stop()}))}),500)),m||cancelAnimationFrame(x)}x=requestAnimationFrame(e)}catch(i){return cancelAnimationFrame(x),void y.getTracks().forEach((function(e){return e.stop()}))}};return Object(a.jsx)(s.a,{children:Object(a.jsx)("canvas",{ref:v,hidden:t||d})})},M=t("KP9Q"),H=t("Teo5"),J=t("5jRf"),U=function(e){var r=e.text;return Object(a.jsxs)(d.a,{children:[Object(a.jsx)(b.a,{display:"flex",justifyContent:"center",alignItems:"center",margin:"0 1rem 0 0",children:Object(a.jsx)(z.c,{size:"2rem",color:H.f})}),Object(a.jsx)(o.a,{fontWeight:"bold",fontSize:"1.3rem",color:H.g,children:r})]})},X=function(e,r,t){return e&&r?Object(a.jsx)(L.a,{thickness:"4px",size:"xl",color:H.f,position:"absolute",zIndex:"1"}):!r||t?Object(a.jsx)("button",{onClick:function(){location.reload()},children:t?Object(a.jsx)(z.e,{size:"3rem",color:H.f}):Object(a.jsx)(z.g,{size:"3rem",color:H.f})}):void 0},V=function(){var e=Object(D.a)(),r=Object(W.d)(Q.g),t=Object(c.a)(r,1)[0],n=Object(W.d)(Q.f),l=Object(c.a)(n,1)[0],s=Object(W.d)(Q.j),d=Object(c.a)(s,1)[0],u=Object(W.d)(Q.e),j=Object(c.a)(u,1)[0],m=Object(W.d)(Q.a),O=Object(c.a)(m,2),h=O[0],f=O[1],g=Object(W.d)(Q.d),v=Object(c.a)(g,2),p=v[0],x=v[1];return i.a.useEffect((function(){if(!t&&d||f(!1),t){var r=new J.a(j);if(r.validateQrData()){var n=Object(A.a)(p),i=r.parseQrData(),c={label:"",code:j,date:(new Date).toLocaleString("ja-JP"),type:M.b.normal,campus:r.getLogCampus()};n.push(c),x(n),e({title:"\u8aad\u307f\u53d6\u308a\u5b8c\u4e86",description:Object(a.jsxs)(o.a,{wordBreak:"break-all",children:[i.buildingNumber,"\u53f7\u9928\xa0",i.floorNumber,"\u968e\xa0",i.roomNumber,"\u6559\u5ba4"]}),status:"info",duration:4e3,isClosable:!0})}else e({title:"QR\u30b3\u30fc\u30c9\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093",description:Object(a.jsx)(o.a,{wordBreak:"break-all",children:j}),status:"error",duration:4e3,isClosable:!0})}}),[t,d]),Object(a.jsx)(q,{max:"100px",ratio:1,children:Object(a.jsxs)(b.a,{width:"100px",border:"solid 2px #fff",backgroundColor:"#fff",borderRadius:"2rem",position:"relative",zIndex:"1",children:[X(l,d,t),Object(a.jsx)(b.a,{position:"absolute",zIndex:"0",borderRadius:"2rem",width:"100%",children:h?Object(a.jsx)(K,{}):null})]})})},Z=function(){var e,r,t,n=Object(W.d)(Q.f),i=Object(c.a)(n,1)[0],l=Object(W.d)(Q.j),o=Object(c.a)(l,1)[0],s=Object(W.d)(Q.g),d=Object(c.a)(s,1)[0];return Object(a.jsx)(b.a,{color:H.h,children:(e=i,r=d,t=o,t?e?"\u30ab\u30e1\u30e9\u5f85\u6a5f\u4e2d":r?"\u8aad\u307f\u53d6\u308a\u5b8c\u4e86":"\u8aad\u307f\u53d6\u308a\u5f85\u6a5f\u4e2d":"\u30ab\u30e1\u30e9\u505c\u6b62\u4e2d")})},G=function(){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(s.a,{children:Object(a.jsxs)(b.a,{backgroundColor:H.e,margin:"2rem 0 0 0",padding:"1.5rem 1.5rem 0 1.5rem",borderRadius:"1.5rem",width:"20rem",children:[Object(a.jsx)(b.a,{color:"white",margin:"0 0 0 .2rem",children:Object(a.jsx)(U,{text:"QR\u30b3\u30fc\u30c9\u8aad\u307f\u53d6\u308a"})}),Object(a.jsx)(b.a,{margin:"1rem .2rem .2rem .2rem",children:Object(a.jsx)(V,{})}),Object(a.jsx)(s.a,{padding:".8rem 0 .8rem 0",children:Object(a.jsx)(Z,{})})]})}),Object(a.jsx)(s.a,{margin:"1rem 0 1rem 0",children:Object(a.jsx)(o.a,{fontWeight:"bold",fontSize:".9rem",color:H.g,children:"\u307e\u305f\u306f"})})]})},Y=t("YFqc"),$=t.n(Y),ee=t("VP/N"),re=t("ueHc"),te=t("kiPq"),ae=t("KwD7");function ne(){return(ne=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function ie(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}function ce(e){var r=function(e){var r,t,a,n=Object(te.b)(),{id:i,disabled:c,readOnly:l,required:o,isRequired:s,isInvalid:d,isReadOnly:b,isDisabled:u,onFocus:j,onBlur:m}=e,O=ie(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),h=[];null!=n&&n.hasFeedbackText&&null!=n&&n.isInvalid&&h.push(n.feedbackId);null!=n&&n.hasHelpText&&h.push(n.helpTextId);return ne({},O,{"aria-describedby":h.join(" ")||void 0,id:null!=i?i:null==n?void 0:n.id,isDisabled:null!=(r=null!=c?c:u)?r:null==n?void 0:n.isDisabled,isReadOnly:null!=(t=null!=l?l:b)?t:null==n?void 0:n.isReadOnly,isRequired:null!=(a=null!=o?o:s)?a:null==n?void 0:n.isRequired,isInvalid:null!=d?d:null==n?void 0:n.isInvalid,onFocus:Object(ae.a)(null==n?void 0:n.onFocus,j),onBlur:Object(ae.a)(null==n?void 0:n.onBlur,m)})}(e),{isDisabled:t,isInvalid:a,isReadOnly:n,isRequired:i}=r;return ne({},ie(r,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:t,readOnly:n,required:i,"aria-invalid":Object(g.a)(a),"aria-required":Object(g.a)(i),"aria-readonly":Object(g.a)(n)})}function le(){return(le=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var oe=Object(j.a)(((e,r)=>{var t=Object(h.a)("Input",e),a=ce(Object(f.b)(e)),i=Object(g.b)("chakra-input",e.className);return n.createElement(O.a.input,le({},a,{__css:t.field,ref:r,className:i}))}));v.a&&(oe.displayName="Input"),oe.id="Input";var se=function(){var e=Object(D.a)(),r=Object(ee.a)(),t=r.isOpen,n=r.onOpen,i=r.onClose,d=Object(W.d)(Q.b),b=Object(c.a)(d,2),u=b[0],j=b[1],m=Object(W.d)(Q.d),O=Object(c.a)(m,2),h=O[0],f=O[1],g=function(){i(),j("")};return Object(a.jsxs)(s.a,{children:[Object(a.jsx)(l.a,{backgroundColor:H.b,borderRadius:"1.5rem",padding:"2rem 3rem 2rem 3rem",width:"20rem",onClick:n,children:Object(a.jsx)(o.a,{fontWeight:"medium",fontSize:"1.2rem",color:H.g,children:"\u5ea7\u5e2d\u30b3\u30fc\u30c9\u3092\u76f4\u63a5\u5165\u529b\u3059\u308b"})}),Object(a.jsxs)(re.a,{isOpen:t,onClose:g,isCentered:!0,motionPreset:"slideInBottom",size:"sm",children:[Object(a.jsx)(re.g,{}),Object(a.jsxs)(re.d,{children:[Object(a.jsx)(re.f,{color:H.g,margin:"1rem 0 .5rem 0",children:"\u5ea7\u5e2d\u30b3\u30fc\u30c9\u3092\u76f4\u63a5\u5165\u529b\u3059\u308b"}),Object(a.jsx)(re.c,{size:"lg"}),Object(a.jsx)(re.b,{pb:6,children:Object(a.jsx)(te.a,{children:Object(a.jsx)(oe,{size:"lg",value:u,onChange:function(e){j(e.target.value)},placeholder:"\u5ea7\u5e2d\u30b3\u30fc\u30c9"})})}),Object(a.jsxs)(re.e,{children:[Object(a.jsx)(l.a,{backgroundColor:H.e,mr:3,onClick:function(){var r="jp.ac.dendai/".concat(u),t=new J.a(r);if(t.validateQrData()){var n=Object(A.a)(h),c=t.parseQrData(),l={label:"",code:r,date:(new Date).toLocaleString("ja-JP"),type:M.b.normal,campus:t.getLogCampus()};n.push(l),f(n),i(),j(""),e({title:"\u8ffd\u52a0\u5b8c\u4e86",description:Object(a.jsxs)(o.a,{wordBreak:"break-all",children:[c.buildingNumber,"\u53f7\u9928\xa0",c.floorNumber,"\u968e\xa0",c.roomNumber,"\u6559\u5ba4"]}),status:"info",duration:4e3,isClosable:!0})}else e({title:"\u5ea7\u5e2d\u30b3\u30fc\u30c9\u304c\u6b63\u3057\u304f\u3042\u308a\u307e\u305b\u3093",status:"error",duration:4e3,isClosable:!0})},children:"\u4fdd\u5b58"}),Object(a.jsx)(l.a,{backgroundColor:H.c,onClick:g,children:"\u30ad\u30e3\u30f3\u30bb\u30eb"})]})]})]})]})},de=function(e){var r=e.link;return Object(a.jsx)($.a,{href:r,children:Object(a.jsx)(l.a,{borderRadius:"2rem",leftIcon:Object(a.jsx)(z.f,{}),backgroundColor:H.c,color:H.a,width:"6.2rem",children:Object(a.jsx)(o.a,{color:H.g,children:"\u8a2d\u5b9a"})})})},be=function(e){var r=e.title,t=e.link,n=Object(W.d)(Q.j),i=Object(c.a)(n,2)[1],s=Object(W.d)(Q.g),d=Object(c.a)(s,2)[1];return Object(a.jsx)($.a,{href:t,children:Object(a.jsx)(l.a,{borderRadius:"1.5rem",width:"20rem",backgroundColor:H.c,padding:"1rem .5rem 1rem .5rem",onClick:function(){i(!1),d(!1)},children:Object(a.jsx)(o.a,{color:H.g,children:r})})})},ue=function(){return Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsx)(s.a,{children:Object(a.jsxs)(d.a,{width:"20rem",children:[Object(a.jsxs)(b.a,{display:"flex",justifyContent:"center",alignItems:"center",children:[Object(a.jsx)(E,{name:"app icon",src:"/static/icons/icon-512x512.png",size:"sm"}),Object(a.jsx)(o.a,{fontSize:"1.3rem",fontWeight:"bold",marginLeft:"1.2rem",color:H.g,children:"Logcation"})]}),Object(a.jsx)(_.a,{}),Object(a.jsx)(de,{link:""})]})}),Object(a.jsx)(G,{}),Object(a.jsx)(se,{}),Object(a.jsx)(s.a,{margin:"2rem 0 2rem 0",children:Object(a.jsx)(N.a,{colorScheme:H.d,borderWidth:"1px",width:"20rem"})}),Object(a.jsx)(s.a,{margin:"1rem 0 1rem 0",children:Object(a.jsx)(be,{title:"\u7740\u5e2d\u5c65\u6b74\u306e\u78ba\u8a8d",link:"/history"})})]})};r.default=function(){return Object(a.jsx)(b.a,{margin:"2.3rem 1.6rem 1rem 1.6rem",children:Object(a.jsx)(ue,{})})}}},[["/EDR",1,2,3,5,7,0,4,6]]]);