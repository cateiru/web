"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[324],{3892:function(e,t,n){var r,a,o,u;n.d(t,{h:function(){return r},V:function(){return o}}),(a=r||(r={}))[a.normal=0]="normal",(u=o||(o={})).senju="\u5343\u4f4f",u.hatoyama="\u9ce9\u5c71"},3327:function(e,t,n){n.d(t,{h:function(){return p},X:function(){return x}});var r=n(5893),a=n(7294),o=n(8448),u=n(4096),i=n(8017),c=n(4115),s=n(7341),l=n(7389),f=n(2083),d=n(155),m=n(5063),h=n(2804),b=n(6064);function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(e){return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(o.M,{marginBottom:"2rem",children:(0,r.jsxs)(u.k,{width:"20rem",children:[(0,r.jsx)(i.xu,{display:"flex",justifyContent:"center",alignItems:"center",children:(0,r.jsx)(c.x,{fontSize:"1.3rem",fontWeight:"bold",marginLeft:"1.2rem",color:(0,f.O)("textPrimary"),children:e.title})}),(0,r.jsx)(s.L,{}),(0,r.jsx)(m.default,{href:"/",children:(0,r.jsx)(l.z,{borderRadius:"2rem",leftIcon:(0,r.jsx)(d.KkC,{}),backgroundColor:(0,f.O)("buttonSecondly"),color:(0,f.O)("buttonIconSecondly"),width:"9rem",children:(0,r.jsx)(c.x,{color:(0,f.O)("textPrimary"),children:"\u30db\u30fc\u30e0\u3078\u623b\u308b"})})})]})}),e.children]})},x=function(e){var t=v((0,h.FV)(b.Jk),2)[1],n=v((0,h.FV)(b.vx),2)[1];return(0,r.jsx)(m.default,{href:e.link,children:(0,r.jsx)(l.z,g({onClick:function(){t(!1),n(!1)}},e.buttonProps,{children:e.children}))})}},124:function(e,t,n){n.d(t,{T:function(){return h}});var r=n(5893),a=n(7294),o=n(8017),u=n(8448),i=n(4096),c=n(9444),s=n(7341),l=n(4115),f=n(2083),d=n(116),m=function(){return(0,r.jsx)(o.xu,{margin:"1rem 0 1rem 0",children:(0,r.jsx)(u.M,{children:(0,r.jsxs)(i.k,{width:"20rem",justifyContent:"center",alignItems:"center",children:[(0,r.jsx)(o.xu,{children:(0,r.jsx)(c.r,{href:"https://github.com/tdu-logcation/web",isExternal:!0,children:(0,r.jsx)(o.xu,{color:(0,f.O)("textSecondly"),fontSize:".7rem",children:d.v})})}),(0,r.jsx)(s.L,{}),(0,r.jsx)(o.xu,{children:(0,r.jsx)(l.x,{color:(0,f.O)("textSecondly"),fontSize:".7rem",children:"Copyright (C) 2021 Logcation"})})]})})})},h=function(e){return(0,r.jsxs)(a.Fragment,{children:[e.children,(0,r.jsx)(m,{})]})}},3589:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(3892);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.senju_regular_expression=/^jp.ac.dendai\/(?<buildingNumber>[1-5])(?<floorNumber>1?[0-9])(?<roomNumber>[0-2][0-9][AB]?)-(?<seatNumber>[^-]+)$/,this.hatoyama_regular_expression=/^jp.ac.dendai\/2(?<buildingNumber>[01][0-9])(?<floorNumber>[01][0-9])(?<roomNumber>[0-9][0-9])-(?<seatNumber>[^-]+)$/,this.qrData=t}var t,n,o;return t=e,(n=[{key:"validateQrData",value:function(){return this.senju_regular_expression.test(this.qrData)||this.hatoyama_regular_expression.test(this.qrData)}},{key:"parseQrData",value:function(){var e=this.qrData.match(this.getLogCampus()===r.V.senju?this.senju_regular_expression:this.hatoyama_regular_expression).groups;return{buildingNumber:String(Number(e.buildingNumber)),floorNumber:String(Number(e.floorNumber)),roomNumber:(Number(e.buildingNumber)<10?String(Number(e.buildingNumber)):"")+String(Number(e.floorNumber))+e.roomNumber,seatNumber:e.seatNumber}}},{key:"getLogCampus",value:function(){return this.senju_regular_expression.test(this.qrData)?r.V.senju:this.hatoyama_regular_expression.test(this.qrData)?r.V.hatoyama:void 0}}])&&a(t.prototype,n),o&&a(t,o),e}()},2083:function(e,t,n){n.d(t,{O:function(){return u}});var r=n(980),a={background:"gray.800",mainPrimary:"#345470",mainSecondly:"#bdd7ee",textPrimary:"#d6d6d6",textSecondly:"#b5b5b5",textTertiary:"#050505",buttonPrimary:"#bf6d72",buttonSecondly:"#333945",buttonIconSecondly:"#b5b5b5",divider:"#0f0f0f"},o={background:"#fff",mainPrimary:"#bdd7ee",mainSecondly:"#406b94",textPrimary:"#2b2b2b",textSecondly:"#4a4a4a",textTertiary:"#fafafa",buttonPrimary:"#eebdc0",buttonSecondly:"#f2f2f2",buttonIconSecondly:"#4a4a4a",divider:"#f2f2f2"},u=function(e){return(0,r.useColorModeValue)(o[e],a[e])}},813:function(e,t,n){n.d(t,{DB:function(){return f}});var r=n(5666),a=n.n(r),o=n(8957),u=n(6040);function i(e){var t;if("function"===typeof Symbol){if(Symbol.asyncIterator&&null!=(t=e[Symbol.asyncIterator]))return t.call(e);if(Symbol.iterator&&null!=(t=e[Symbol.iterator]))return t.call(e)}throw new TypeError("Object is not async iterable")}function c(e,t,n,r,a,o,u){try{var i=e[o](u),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function u(e){c(o,r,a,u,i,"next",e)}function i(e){c(o,r,a,u,i,"throw",e)}u(void 0)}))}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n){var r=void 0===n?1:n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.version=r}var t,n,r;return t=e,(n=[{key:"openDB",value:function(){return s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.X3)(this.name,this.version,{upgrade:function(e){e.createObjectStore("log",{keyPath:"date"})}});case 2:this.db=e.sent;case 3:case"end":return e.stop()}}),e,this)})).bind(this))()}},{key:"add",value:function(e){return s(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.db.add("log",e);case 2:case"end":return t.stop()}}),t,this)})).bind(this))()}},{key:"addMulti",value:function(e){return s(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.db.transaction("log","readwrite"),t.next=3,Promise.all(e.map((function(e){n.store.add(e).catch((function(e){console.log(e)}))})));case 3:return t.next=5,n.done;case 5:case"end":return t.stop()}}),t,this)})).bind(this))()}},{key:"get",value:function(e){return s(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.db.get("log",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})).bind(this))()}},{key:"getAll",value:function(){return s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.getAll("log");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})).bind(this))()}},{key:"getPeriod",value:function(e){return s(a().mark((function t(){var n,r,o,c,s,l,f,d,m,h;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.db.getAllKeys("log");case 2:n=t.sent.reverse(),r=new Date,o=[],c=!1,s=!1,t.prev=6,f=i(n);case 8:return t.next=10,f.next();case 10:if(!(c=!(d=t.sent).done)){t.next=25;break}if(m=d.value,h=m,!(e===u.zk||e>=Math.abs(r.valueOf()-h.valueOf())/864e5)){t.next=21;break}return t.t0=o,t.next=17,this.get(h);case 17:t.t1=t.sent,t.t0.push.call(t.t0,t.t1),t.next=22;break;case 21:return t.abrupt("break",25);case 22:c=!1,t.next=8;break;case 25:t.next=31;break;case 27:t.prev=27,t.t2=t.catch(6),s=!0,l=t.t2;case 31:if(t.prev=31,t.prev=32,!c||null==f.return){t.next=36;break}return t.next=36,l.return();case 36:if(t.prev=36,!s){t.next=39;break}throw l;case 39:return t.finish(36);case 40:return t.finish(31);case 41:return t.abrupt("return",o.reverse());case 42:case"end":return t.stop()}}),t,this,[[6,27,31,41],[32,,36,40]])})).bind(this))()}},{key:"getLatest",value:function(){return s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getPeriod(1);case 2:return e.abrupt("return",e.sent.reverse()[0]);case 3:case"end":return e.stop()}}),e,this)})).bind(this))()}},{key:"deleteDB",value:function(){return s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.clear("log");case 2:case"end":return e.stop()}}),e,this)})).bind(this))()}},{key:"count",value:function(){return s(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.db.count("log");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})).bind(this))()}}])&&l(t.prototype,n),r&&l(t,r),e}()},3692:function(e,t,n){n.d(t,{p6:function(){return i},qr:function(){return c},JT:function(){return s},WV:function(){return f},Wl:function(){return d},ft:function(){return m},PN:function(){return h}});var r=n(6040),a=n(3892),o=n(3589),u=n(8862);function i(e,t){var n=e.getFullYear(),r=e.getMonth()+1,a=["\u65e5","\u6708","\u706b","\u6c34","\u6728","\u91d1","\u571f"][e.getDay()],o=e.getDate(),u=e.getHours(),i=e.getMinutes();return t?"".concat(o,"\u65e5 ").concat(u,":").concat(("00"+i).slice(-2)):"".concat(n,"\u5e74").concat(r,"\u6708").concat(o,"\u65e5").concat(a,"\u66dc\u65e5 ").concat(u,":").concat(("00"+i).slice(-2))}function c(e){var t=[];return e.forEach((function(e,n){e||t.push(r.h4[n].id)})),t}function s(e){return 0===e.length?"\u30ed\u30b0\u30c7\u30fc\u30bf\u306f\u3042\u308a\u307e\u305b\u3093\u3002":e.map((function(e){return'"'.concat(e.label,'",').concat(e.date.getFullYear(),"/").concat(l(e.date.getMonth()+1),"/").concat(l(e.date.getDate()),",").concat(l(e.date.getHours()),":").concat(l(e.date.getMinutes()),":").concat(l(e.date.getSeconds()),',"').concat(e.code,'"')})).join("\n")}var l=function(e){return("00"+e).slice(-2)};function f(e){var t=/^"(?<label>[^"]*)",\s?(?<date>.+),\s?(?<time>.+),\s?"(?<code>jp.ac.dendai\/[^"]+)"$/;if(t.test(e)){var n=e.match(t).groups,r=new o.Z(n.code);if(r.parseQrData){var u=n.date.match(/^(?<year>[0-9]{4})\/(?<month>[0-1][0-9])\/(?<date>[0-3][0-9])$/).groups,i=n.time.match(/^(?<hour>[0-2][0-9]):(?<minute>[0-5][0-9]):(?<sec>[0-5][0-9])$/).groups;return{label:n.label,code:n.code,date:new Date(Number(u.year),Number(u.month)-1,Number(u.date),Number(i.hour),Number(i.minute),Number(i.sec)),type:a.h.normal,campus:r.getLogCampus()}}}return null}function d(e){var t=new u.E(e);return t.isUseLog()?t.successText():"Error: \u30ed\u30b0\u3092\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3067\u3057\u305f"}function m(e,t){var n=new u.E(e);if(n.isUseLog()){var r=window.location.href,a=n.tweetText(t);return"https://twitter.com/intent/tweet?text=".concat(a,"&url=").concat(r,"&hashtags=").concat("Logcation")}}function h(e){return e===r.zk?"\u5168\u671f\u9593":"\u904e\u53bb".concat(Math.floor(e),"\u65e5")}},8862:function(e,t,n){n.d(t,{E:function(){return i}});var r=n(3589),a={1201:"\u4e39\u7fbd\u30db\u30fc\u30eb",2305:"\u5b66\u751f\u539a\u751f",201:"\u30d7\u30ec\u30bc\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u30db\u30fc\u30eb",203:"\u7b2c1\u30e1\u30c7\u30a3\u30a2\u30eb\u30fc\u30e0",204:"\u7b2c2\u30e1\u30c7\u30a3\u30a2\u30eb\u30fc\u30e0"},o=n(3692);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.code=t.code,this.date=t.date,this.campus=t.campus,this.label=t.label,this.logUtil=new r.Z(this.code),this.isUseLog()){var n=this.logUtil.parseQrData();this.buildingNumber=n.buildingNumber,this.floorNumber=n.floorNumber,this.roomNumber=n.roomNumber,this.seatNumber=n.seatNumber}}var t,n,i;return t=e,(n=[{key:"isUseLog",value:function(){return this.logUtil.validateQrData()}},{key:"roomName",value:function(){return this.roomNumber in a?a[this.roomNumber]:"".concat(this.roomNumber,"\u6559\u5ba4")}},{key:"tweetText",value:function(e){return"I'm at ".concat(this.roomName(),"%0d%0d\u5408\u8a08\u30ed\u30b0\u6570: ").concat(e,"%0d").concat(this.additionalText(e),"%0d")}},{key:"successText",value:function(){return"".concat(this.buildingNumber,"\u53f7\u9928 ").concat(this.floorNumber,"\u968e ").concat(this.roomName())}},{key:"historyTableText",value:function(e,t){return{date:(0,o.p6)(this.date,e),building:parseInt(this.buildingNumber),floor:parseInt(this.floorNumber),room:t?this.roomName():"".concat(this.roomNumber,"\u6559\u5ba4"),seat:this.seatNumber,campus:this.campus}}},{key:"additionalText",value:function(e){return 42===e?"\u751f\u547d\u3001\u5b87\u5b99\u3001\u305d\u3057\u3066\u4e07\u7269\u306b\u3064\u3044\u3066\u306e\u7a76\u6975\u306e\u7591\u554f\u306e\u7b54\u3048\uff01":334===e?"\u306a\u3093\u3067\u3084\uff01\u962a\u795e\u95a2\u4fc2\u306a\u3044\u3084\u308d\uff01":0===(e&e-1)||e%10===0?"\u30ad\u30ea\u756a\uff01\uff01\uff01":1===e?"\u306f\u3058\u3081\u3066\u306e\u30ed\u30b0\uff01":e<5?"\u9811\u5f35\u3063\u3066\u3044\u308b\uff01":e<10?"\u51c4\u3044\uff01\uff01\uff01":e<20?"\u3081\u3063\u3061\u3083\u51c4\u3044\uff01\uff01\uff01":"\u958b\u767a\u8005\u3082\u3073\u3063\u304f\u308a\uff01"}}])&&u(t.prototype,n),i&&u(t,i),e}()},6064:function(e,t,n){n.d(t,{vx:function(){return u},bH:function(){return i},Jk:function(){return c},Qb:function(){return s},aW:function(){return l},gT:function(){return f},Bh:function(){return d},FJ:function(){return m},ZT:function(){return h},AZ:function(){return b},iX:function(){return y},mW:function(){return g},Pj:function(){return v},Wm:function(){return p},hK:function(){return x},he:function(){return k},Ob:function(){return w},ZW:function(){return N},s$:function(){return j},gB:function(){return S},i8:function(){return O}});var r=n(2804),a=n(6040);var o=function(e){return function(t){var n=t.setSelf,a=t.onSet,o=localStorage.getItem(e);null!==o&&n(JSON.parse(o)),a((function(t){var n,a;n=t,(null!=(a=r.nY)&&"undefined"!==typeof Symbol&&a[Symbol.hasInstance]?a[Symbol.hasInstance](n):n instanceof a)?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}))}},u=(0,r.cn)({key:"qrReadSuccess",default:!1}),i=(0,r.cn)({key:"qrLoad",default:!0}),c=(0,r.cn)({key:"useCamera",default:!0}),s=(0,r.cn)({key:"cameraComponent",default:!0}),l=(0,r.cn)({key:"qrData",default:null}),f=(0,r.cn)({key:"log",default:[],effects_UNSTABLE:[o("log")]}),d=(0,r.cn)({key:"directText",default:""}),m=(0,r.cn)({key:"tableShow",default:a.CA}),h=(0,r.cn)({key:"tableDateShort",default:!1}),b=(0,r.cn)({key:"isCopy",default:!1}),y=(0,r.cn)({key:"otherLog",default:""}),g=(0,r.cn)({key:"savedLog",default:!1}),v=(0,r.cn)({key:"confirmationText",default:""}),p=(0,r.cn)({key:"tweetLink",default:"https://twitter.com/intent/tweet"}),x=(0,r.cn)({key:"uniqueRoomName",default:!0}),k=(0,r.cn)({key:"_isMoveIndexDB",default:!1,effects_UNSTABLE:[o("_isMoveIndexedDB")]}),w=(0,r.cn)({key:"logTable",default:[]}),N=(0,r.cn)({key:"logCount",default:0}),j=(0,r.cn)({key:"logLen",default:a.zk}),S=(0,r.cn)({key:"logLenFast",default:a.zk}),O=(0,r.cn)({key:"version",default:"",effects_UNSTABLE:[o("version")]})},6040:function(e,t,n){var r,a;n.d(t,{zk:function(){return u},CA:function(){return o},h4:function(){return i}}),(a=r||(r={})).date="date",a.building="building",a.floor="floor",a.room="room",a.seat="seat",a.campus="campus";var o=[!0,!0,!0,!0,!0,!0],u=31,i=[{name:"\u65e5\u6642",id:r.date},{name:"\u30ad\u30e3\u30f3\u30d1\u30b9",id:r.campus},{name:"\u53f7\u9928",id:r.building},{name:"\u968e\u6570",id:r.floor},{name:"\u6559\u5ba4\u540d",id:r.room},{name:"\u5ea7\u5e2d\u4f4d\u7f6e",id:r.seat}]},116:function(e,t,n){n.d(t,{v:function(){return r},r:function(){return a}});var r="develop",a=!1}}]);