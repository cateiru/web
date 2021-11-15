(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{5222:function(e,t,n){"use strict";n.d(t,{X:function(){return _}});var a=n(1440),r=n(63),i=n(4915),l=n(5284),o=n(658),s=n(4461),c=n(3808),u=n(7294),d=n(8500);n(762),n(1034),n(7277);var[f,p]=(0,d.k)({name:"CheckboxGroupContext",strict:!1});c.Ts;var v=n(2934),m=n(4332);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var y="custom"in v.E?v.E.custom(a.m$.svg):(0,v.E)(a.m$.svg),b=e=>u.createElement(y,h({width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},e),u.createElement("polyline",{points:"1.5 6 4.5 9 10.5 1"})),k=e=>u.createElement(y,h({width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4}},e),u.createElement("line",{x1:"21",x2:"3",y1:"12",y2:"12"})),g=e=>{var{open:t,children:n}=e;return u.createElement(m.M,{initial:!1},t&&u.createElement(v.E.div,{variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},n))},C=e=>{var{isIndeterminate:t,isChecked:n}=e,a=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["isIndeterminate","isChecked"]),r=t?k:b;return u.createElement(g,{open:n||t},u.createElement(r,a))},x=n(2522);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var w=(0,a.m$)("span",{baseStyle:{display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0}}),E=(0,a.m$)("label",{baseStyle:{cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative",_disabled:{cursor:"not-allowed"}}}),_=(0,r.G)(((e,t)=>{var n=p(),r=O({},n,e),c=(0,i.j)("Checkbox",r),d=(0,l.Lr)(e),{spacing:f="0.5rem",className:v,children:m,iconColor:h,iconSize:y,icon:b=u.createElement(C,null),isChecked:k,isDisabled:g=(null==n?void 0:n.isDisabled),onChange:_}=d,I=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(d,["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange"]),P=k;null!=n&&n.value&&d.value&&(P=n.value.includes(d.value));var D=_;null!=n&&n.onChange&&d.value&&(D=(0,o.PP)(n.onChange,_));var{state:N,getInputProps:R,getCheckboxProps:j,getLabelProps:T,getRootProps:S}=(0,x.O)(O({},I,{isDisabled:g,isChecked:P,onChange:D})),B=u.useMemo((()=>O({opacity:N.isChecked||N.isIndeterminate?1:0,transform:N.isChecked||N.isIndeterminate?"scale(1)":"scale(0.95)",fontSize:y,color:h},c.icon)),[h,y,N.isChecked,N.isIndeterminate,c.icon]),L=u.cloneElement(b,{__css:B,isIndeterminate:N.isIndeterminate,isChecked:N.isChecked});return u.createElement(E,O({__css:c.container,className:(0,s.cx)("chakra-checkbox",v)},S()),u.createElement("input",O({className:"chakra-checkbox__input"},R({},t))),u.createElement(w,O({__css:c.control,className:"chakra-checkbox__control"},j()),L),m&&u.createElement(a.m$.span,O({className:"chakra-checkbox__label"},T(),{__css:O({marginStart:f},c.label)}),m))}));c.Ts&&(_.displayName="Checkbox")},2522:function(e,t,n){"use strict";n.d(t,{O:function(){return v}});var a=n(762),r=n(639),i=n(1034),l=n(8327),o=n(2947),s=n(658),c=n(4461),u=n(7248),d=n(5415),f=n(7294);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function v(e){void 0===e&&(e={});var{defaultIsChecked:t,defaultChecked:n=t,isChecked:v,isFocusable:h,isDisabled:y,isReadOnly:b,isRequired:k,onChange:g,isIndeterminate:C,isInvalid:x,name:O,value:w,id:E,onBlur:_,onFocus:I,tabIndex:P,"aria-label":D,"aria-labelledby":N,"aria-invalid":R,"aria-describedby":j}=e,T=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["defaultIsChecked","defaultChecked","isChecked","isFocusable","isDisabled","isReadOnly","isRequired","onChange","isIndeterminate","isInvalid","name","value","id","onBlur","onFocus","tabIndex","aria-label","aria-labelledby","aria-invalid","aria-describedby"]),S=(0,a.W)(g),B=(0,a.W)(_),L=(0,a.W)(I),[q,M]=(0,r.k)(),[F,$]=(0,r.k)(),[A,G]=(0,r.k)(),U=(0,f.useRef)(null),[K,H]=(0,f.useState)(!0),[z,W]=(0,f.useState)(!!n),[X,J]=(0,i.p)(v,z);(0,s.ZK)({condition:!!t,message:'The "defaultIsChecked" prop has been deprecated and will be removed in a future version. Please use the "defaultChecked" prop instead, which mirrors default React checkbox behavior.'});var Q=(0,f.useCallback)((e=>{b||y?e.preventDefault():(X||W(J?e.target.checked:!!C||e.target.checked),null==S||S(e))}),[b,y,J,X,C,S]);(0,l.G)((()=>{U.current&&(U.current.indeterminate=Boolean(C))}),[C]);var Y=y&&!h,V=(0,f.useCallback)((e=>{" "===e.key&&G.on()}),[G]),Z=(0,f.useCallback)((e=>{" "===e.key&&G.off()}),[G]);(0,l.G)((()=>{U.current&&(U.current.checked!==J&&W(U.current.checked))}),[U.current]);var ee=(0,f.useCallback)((function(e,t){void 0===e&&(e={}),void 0===t&&(t=null);return p({},e,{ref:t,"data-active":(0,c.PB)(A),"data-hover":(0,c.PB)(F),"data-checked":(0,c.PB)(J),"data-focus":(0,c.PB)(q),"data-indeterminate":(0,c.PB)(C),"data-disabled":(0,c.PB)(y),"data-invalid":(0,c.PB)(x),"data-readonly":(0,c.PB)(b),"aria-hidden":!0,onMouseDown:(0,s.v0)(e.onMouseDown,(e=>{e.preventDefault(),G.on()})),onMouseUp:(0,s.v0)(e.onMouseUp,G.off),onMouseEnter:(0,s.v0)(e.onMouseEnter,$.on),onMouseLeave:(0,s.v0)(e.onMouseLeave,$.off)})}),[A,J,y,q,F,C,x,b,G,$.off,$.on]),te=(0,f.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),p({},T,e,{ref:(0,o.l)(t,(e=>{e&&H("LABEL"===e.tagName)})),onClick:(0,s.v0)(e.onClick,(()=>{var e;K||(null==(e=U.current)||e.click(),(0,u.T)(U.current,{nextTick:!0}))})),"data-disabled":(0,c.PB)(y),"data-checked":(0,c.PB)(J),"data-invalid":(0,c.PB)(x)})}),[T,y,J,x,K]),ne=(0,f.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),p({},e,{ref:(0,o.l)(U,t),type:"checkbox",name:O,value:w,id:E,tabIndex:P,onChange:(0,s.v0)(e.onChange,Q),onBlur:(0,s.v0)(e.onBlur,B,M.off),onFocus:(0,s.v0)(e.onFocus,L,M.on),onKeyDown:(0,s.v0)(e.onKeyDown,V),onKeyUp:(0,s.v0)(e.onKeyUp,Z),required:k,checked:J,disabled:Y,readOnly:b,"aria-label":D,"aria-labelledby":N,"aria-invalid":R?Boolean(R):x,"aria-describedby":j,"aria-disabled":y,style:d.NL})}),[O,w,E,Q,M.off,M.on,B,L,V,Z,k,J,Y,b,D,N,R,x,j,y,P]),ae=(0,f.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),p({},e,{ref:t,onMouseDown:(0,s.v0)(e.onMouseDown,m),onTouchStart:(0,s.v0)(e.onTouchStart,m),"data-disabled":(0,c.PB)(y),"data-checked":(0,c.PB)(J),"data-invalid":(0,c.PB)(x)})}),[J,y,x]);return{state:{isInvalid:x,isFocused:q,isChecked:J,isActive:A,isHovered:F,isIndeterminate:C,isDisabled:y,isReadOnly:b,isRequired:k},getRootProps:te,getCheckboxProps:ee,getInputProps:ne,getLabelProps:ae,htmlProps:T}}function m(e){e.preventDefault(),e.stopPropagation()}},6618:function(e,t,n){"use strict";n.d(t,{l:function(){return p}});var a=n(63),r=n(4915),i=n(5284),l=n(1440),o=n(9676),s=n(4461),c=n(3808),u=n(7294),d=n(6729);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=(0,a.G)(((e,t)=>{var n,a=(0,r.m)("FormLabel",e),o=(0,i.Lr)(e),{children:c,requiredIndicator:p=u.createElement(v,null)}=o,m=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(o,["className","children","requiredIndicator"]),h=(0,d.NJ)(),y=null!=(n=null==h?void 0:h.getLabelProps(m,t))?n:f({ref:t},m);return u.createElement(l.m$.label,f({},y,{className:(0,s.cx)("chakra-form__label",o.className),__css:f({display:"block",textAlign:"start"},a)}),c,null!=h&&h.isRequired?p:null)}));c.Ts&&(p.displayName="FormLabel");var v=(0,a.G)(((e,t)=>{var n=(0,d.NJ)(),a=(0,o.yK)();if(null==n||!n.isRequired)return null;var r=(0,s.cx)("chakra-form__required-indicator",e.className);return u.createElement(l.m$.span,f({},null==n?void 0:n.getRequiredIndicatorProps(e,t),{__css:a.requiredIndicator,className:r}))}));c.Ts&&(v.displayName="RequiredIndicator")},2202:function(e,t,n){"use strict";n.d(t,{Y:function(){return s}});var a=n(4461),r=n(658),i=n(6729);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function s(e){var t=function(e){var t,n,a,s=(0,i.NJ)(),{id:c,disabled:u,readOnly:d,required:f,isRequired:p,isInvalid:v,isReadOnly:m,isDisabled:h,onFocus:y,onBlur:b}=e,k=o(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),g=e["aria-describedby"]?[e["aria-describedby"]]:[];null!=s&&s.hasFeedbackText&&null!=s&&s.isInvalid&&g.push(s.feedbackId);null!=s&&s.hasHelpText&&g.push(s.helpTextId);return l({},k,{"aria-describedby":g.join(" ")||void 0,id:null!=c?c:null==s?void 0:s.id,isDisabled:null!=(t=null!=u?u:h)?t:null==s?void 0:s.isDisabled,isReadOnly:null!=(n=null!=d?d:m)?n:null==s?void 0:s.isReadOnly,isRequired:null!=(a=null!=f?f:p)?a:null==s?void 0:s.isRequired,isInvalid:null!=v?v:null==s?void 0:s.isInvalid,onFocus:(0,r.v0)(null==s?void 0:s.onFocus,y),onBlur:(0,r.v0)(null==s?void 0:s.onBlur,b)})}(e),{isDisabled:n,isInvalid:s,isReadOnly:c,isRequired:u}=t;return l({},o(t,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:n,readOnly:c,required:u,"aria-invalid":(0,a.Qm)(s),"aria-required":(0,a.Qm)(u),"aria-readonly":(0,a.Qm)(c)})}},2873:function(e,t,n){"use strict";n.d(t,{V:function(){return l}});var a=n(7294),r=n(640),i=n.n(r);function l(e,t){void 0===t&&(t={});var[n,r]=(0,a.useState)(!1),l="number"===typeof t?{timeout:t}:t,{timeout:o=1500}=l,s=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(l,["timeout"]),c=(0,a.useCallback)((()=>{var t=i()(e,s);r(t)}),[e,s]);return(0,a.useEffect)((()=>{var e=null;return n&&(e=window.setTimeout((()=>{r(!1)}),o)),()=>{e&&window.clearTimeout(e)}}),[o,n]),{value:e,onCopy:c,hasCopied:n}}},1962:function(e,t,n){"use strict";n.d(t,{I:function(){return f}});var a=n(2202),r=n(63),i=n(4915),l=n(5284),o=n(1440),s=n(4461),c=n(3808),u=n(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=(0,r.G)(((e,t)=>{var n=(0,i.j)("Input",e),r=(0,l.Lr)(e),c=(0,a.Y)(r),f=(0,s.cx)("chakra-input",e.className);return u.createElement(o.m$.input,d({},c,{__css:n.field,ref:t,className:f}))}));c.Ts&&(f.displayName="Input"),f.id="Input"},6081:function(e,t,n){"use strict";n.d(t,{DE:function(){return y},HC:function(){return h},QI:function(){return m}});var a=n(58),r=n(63),i=n(4915),l=n(5284),o=n(9676),s=n(1440),c=n(3808),u=n(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var p=(0,r.G)(((e,t)=>{var n=(0,i.j)("List",e),a=(0,l.Lr)(e),{children:r,styleType:c="none",stylePosition:p,spacing:v}=a,m=f(a,["children","styleType","stylePosition","spacing"]),h=function(e){return u.Children.toArray(e).filter((e=>u.isValidElement(e)))}(r),y=v?{"& > *:not(style) ~ *:not(style)":{mt:v}}:{};return u.createElement(o.Fo,{value:n},u.createElement(s.m$.ul,d({ref:t,listStyleType:c,listStylePosition:p,role:"list",__css:d({},n.container,y)},m),h))}));c.Ts&&(p.displayName="List");var v=(0,r.G)(((e,t)=>{var n=f(e,["as"]);return u.createElement(p,d({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},n))}));c.Ts&&(v.displayName="OrderedList");var m=(0,r.G)(((e,t)=>{var n=f(e,["as"]);return u.createElement(p,d({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},n))}));c.Ts&&(m.displayName="UnorderedList");var h=(0,r.G)(((e,t)=>{var n=(0,o.yK)();return u.createElement(s.m$.li,d({ref:t},e,{__css:n.item}))}));c.Ts&&(h.displayName="ListItem");var y=(0,r.G)(((e,t)=>{var n=(0,o.yK)();return u.createElement(a.J,d({ref:t,role:"presentation"},e,{__css:n.icon}))}));c.Ts&&(y.displayName="ListIcon")},5665:function(e,t,n){"use strict";n.d(t,{r:function(){return f}});var a=n(2522),r=n(63),i=n(4915),l=n(5284),o=n(1440),s=n(4461),c=n(3808),u=n(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f=(0,r.G)(((e,t)=>{var n=(0,i.j)("Switch",e),r=(0,l.Lr)(e),{spacing:c="0.5rem",children:f}=r,p=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(r,["spacing","children"]),{state:v,getInputProps:m,getCheckboxProps:h,getRootProps:y,getLabelProps:b}=(0,a.O)(p),k=u.useMemo((()=>d({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:"normal"},n.container)),[n.container]),g=u.useMemo((()=>d({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer"},n.track)),[n.track]),C=u.useMemo((()=>d({userSelect:"none",marginStart:c},n.label)),[c,n.label]);return u.createElement(o.m$.label,d({},y(),{className:(0,s.cx)("chakra-switch",e.className),__css:k}),u.createElement("input",d({className:"chakra-switch__input"},m({},t))),u.createElement(o.m$.span,d({},h(),{className:"chakra-switch__track",__css:g}),u.createElement(o.m$.span,{__css:n.thumb,className:"chakra-switch__thumb","data-checked":(0,s.PB)(v.isChecked),"data-hover":(0,s.PB)(v.isHovered)})),f&&u.createElement(o.m$.span,d({className:"chakra-switch__label"},b(),{__css:C}),f))}));c.Ts&&(f.displayName="Switch")},17:function(e,t,n){"use strict";n.d(t,{g:function(){return p}});var a=n(2202),r=n(63),i=n(4915),l=n(5284),o=n(1440),s=n(4651),c=n(4461),u=n(3808),d=n(7294);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var p=(0,r.G)(((e,t)=>{var n=(0,i.m)("Textarea",e),r=(0,l.Lr)(e),{className:u,rows:p}=r,v=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(r,["className","rows"]),m=(0,a.Y)(v),h=p?(0,s.CE)(n,["h","minH","height","minHeight"]):n;return d.createElement(o.m$.textarea,f({ref:t,rows:p},m,{className:(0,c.cx)("chakra-textarea",u),__css:h}))}));u.Ts&&(p.displayName="Textarea")},640:function(e,t,n){"use strict";var a=n(1742),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,l,o,s,c,u=!1;t||(t={}),n=t.debug||!1;try{if(l=a(),o=document.createRange(),s=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),"undefined"===typeof a.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(c),o.selectNodeContents(c),s.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(o):s.removeAllRanges()),c&&document.body.removeChild(c),l()}return u}},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);