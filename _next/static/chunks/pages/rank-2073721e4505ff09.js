(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[361],{3346:function(e,r,n){"use strict";n.d(r,{iA:function(){return h},hr:function(){return m},p3:function(){return v},Th:function(){return j},Tr:function(){return y},Td:function(){return p}});var t=n(63),i=n(4915),c=n(5284),a=n(9676),s=n(1440),l=n(4461),u=n(3808),o=n(7294);function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function d(e,r){if(null==e)return{};var n,t,i={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var h=(0,t.G)(((e,r)=>{var n=(0,i.j)("Table",e),t=(0,c.Lr)(e),{className:u}=t,h=d(t,["className"]);return o.createElement(a.Fo,{value:n},o.createElement(s.m$.table,f({role:"table",ref:r,__css:n.table,className:(0,l.cx)("chakra-table",u)},h)))}));u.Ts&&(h.displayName="Table");var x=(0,t.G)(((e,r)=>{var{placement:n="bottom"}=e,t=d(e,["placement"]),i=(0,a.yK)();return o.createElement(s.m$.caption,f({},t,{ref:r,__css:f({},i.caption,{captionSide:n})}))}));u.Ts&&(x.displayName="TableCaption");var m=(0,t.G)(((e,r)=>{var n=(0,a.yK)();return o.createElement(s.m$.thead,f({},e,{ref:r,__css:n.thead}))})),v=(0,t.G)(((e,r)=>{var n=(0,a.yK)();return o.createElement(s.m$.tbody,f({},e,{ref:r,__css:n.tbody}))})),j=(0,t.G)(((e,r)=>{var{isNumeric:n}=e,t=d(e,["isNumeric"]),i=(0,a.yK)();return o.createElement(s.m$.th,f({},t,{ref:r,__css:i.th,"data-is-numeric":n}))})),y=(0,t.G)(((e,r)=>{var n=(0,a.yK)();return o.createElement(s.m$.tr,f({role:"row"},e,{ref:r,__css:n.tr}))})),p=(0,t.G)(((e,r)=>{var{isNumeric:n}=e,t=d(e,["isNumeric"]),i=(0,a.yK)();return o.createElement(s.m$.td,f({role:"gridcell"},t,{ref:r,__css:i.td,"data-is-numeric":n}))}))},4903:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rank",function(){return n(5958)}])},5958:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return _}});var t=n(5893),i=n(7294),c=n(8448),a=n(8017),s=n(4115),l=n(7799),u=n(6064),o=n(2804),f=n(5063),d=n(3346),h=n(1529),x=n(980);function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,i=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done)&&(n.push(a.value),!r||n.length!==r);t=!0);}catch(l){i=!0,c=l}finally{try{t||null==s.return||s.return()}finally{if(i)throw c}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(){var e=(0,x.useToast)(),r=m(i.useState([]),2),n=r[0],t=r[1],c=(0,o.Zl)(u.jd);return[n,function(){c(!0),(new h.Z).rank().then((function(e){t(e),c(!1)})).catch((function(r){c(!1),e({title:"\u30e9\u30f3\u30ad\u30f3\u30b0\u3092\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",description:r.message,status:"error",isClosable:!0})}))}]};function j(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,i=!1,c=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done)&&(n.push(a.value),!r||n.length!==r);t=!0);}catch(l){i=!0,c=l}finally{try{t||null==s.return||s.return()}finally{if(i)throw c}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var y=function(){var e=j(v(),2),r=e[0],n=e[1];return i.useEffect((function(){n()}),[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(d.iA,{variant:"striped",size:"md",children:[(0,t.jsx)(d.hr,{children:(0,t.jsxs)(d.Tr,{children:[(0,t.jsx)(d.Th,{children:(0,t.jsx)(s.x,{textAlign:"center",fontSize:"1rem",children:"\u9806\u4f4d"})}),(0,t.jsx)(d.Th,{children:(0,t.jsx)(s.x,{textAlign:"center",fontSize:"1rem",children:"\u30e6\u30fc\u30b6"})}),(0,t.jsx)(d.Th,{children:(0,t.jsx)(s.x,{textAlign:"center",fontSize:"1rem",children:"\u30ed\u30b0\u6570"})})]})}),(0,t.jsx)(d.p3,{children:r.map((function(e,r){return(0,t.jsxs)(d.Tr,{children:[(0,t.jsx)(d.Td,{children:(0,t.jsx)(s.x,{textAlign:"center",children:r+1})}),(0,t.jsx)(d.Td,{children:(0,t.jsx)(s.x,{textAlign:"center",children:e.name})}),(0,t.jsx)(d.Td,{children:(0,t.jsx)(s.x,{textAlign:"center",children:e.number_of_logs})})]},r)}))})]})})},p=function(){var e=(0,o.sJ)(u.K5);return(0,t.jsx)(l.h,{title:"\u30e9\u30f3\u30ad\u30f3\u30b0",children:e?(0,t.jsx)(y,{}):(0,t.jsx)(c.M,{children:(0,t.jsxs)(a.xu,{textAlign:"center",children:[(0,t.jsx)(s.x,{fontWeight:"bold",fontSize:"1.1rem",children:"\u30af\u30e9\u30a6\u30c9\u4fdd\u5b58\u3092\u6709\u52b9\u306b\u3057\u3066\u304f\u3060\u3055\u3044"}),(0,t.jsxs)(s.x,{marginY:"1rem",children:["\u30e9\u30f3\u30ad\u30f3\u30b0\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30af\u30e9\u30a6\u30c9\u4fdd\u5b58\u3092\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,t.jsx)("br",{}),(0,t.jsx)(s.x,{as:"span",_hover:{textDecoration:"underline"},fontWeight:"bold",children:(0,t.jsx)(f.default,{href:"/setting",children:"\u8a2d\u5b9a"})}),"\u3067\u6709\u52b9\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})})})},_=function(){return(0,t.jsx)(a.xu,{margin:"2.3rem 1.6rem 1rem 1.6rem",children:(0,t.jsx)(p,{})})}}},function(e){e.O(0,[260,949,666,585,774,888,179],(function(){return r=4903,e(e.s=r);var r}));var r=e.O();_N_E=r}]);