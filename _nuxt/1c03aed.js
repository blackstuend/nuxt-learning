(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4],{313:function(t,e,r){"use strict";r.d(e,"a",(function(){return G}));const o="3.6.0",n="function"==typeof atob,c="function"==typeof btoa,l="function"==typeof Buffer,d="function"==typeof TextDecoder?new TextDecoder:void 0,f="function"==typeof TextEncoder?new TextEncoder:void 0,h=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],m=(a=>{let t={};return a.forEach(((e,i)=>t[e]=i)),t})(h),v=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,_=String.fromCharCode.bind(String),C="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,e=(t=>t))=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),x=t=>t.replace(/[+\/]/g,(t=>"+"==t?"-":"_")).replace(/=+$/m,""),A=s=>s.replace(/[^A-Za-z0-9\+\/]/g,""),y=t=>{let e,r,o,n,c="";const l=t.length%3;for(let i=0;i<t.length;){if((r=t.charCodeAt(i++))>255||(o=t.charCodeAt(i++))>255||(n=t.charCodeAt(i++))>255)throw new TypeError("invalid character found");e=r<<16|o<<8|n,c+=h[e>>18&63]+h[e>>12&63]+h[e>>6&63]+h[63&e]}return l?c.slice(0,l-3)+"===".substring(l):c},B=c?t=>btoa(t):l?t=>Buffer.from(t,"binary").toString("base64"):y,w=l?t=>Buffer.from(t).toString("base64"):t=>{let e=[];for(let i=0,r=t.length;i<r;i+=4096)e.push(_.apply(null,t.subarray(i,i+4096)));return B(e.join(""))},F=(t,e=!1)=>e?x(w(t)):w(t),U=t=>{if(t.length<2)return(e=t.charCodeAt(0))<128?t:e<2048?_(192|e>>>6)+_(128|63&e):_(224|e>>>12&15)+_(128|e>>>6&63)+_(128|63&e);var e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return _(240|e>>>18&7)+_(128|e>>>12&63)+_(128|e>>>6&63)+_(128|63&e)},E=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,S=u=>u.replace(E,U),R=l?s=>Buffer.from(s,"utf8").toString("base64"):f?s=>w(f.encode(s)):s=>B(S(s)),D=(t,e=!1)=>e?x(R(t)):R(t),k=t=>D(t,!0),P=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,T=t=>{switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return _(55296+(e>>>10))+_(56320+(1023&e));case 3:return _((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return _((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},z=b=>b.replace(P,T),Z=t=>{if(t=t.replace(/\s+/g,""),!v.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));let e,r,o,n="";for(let i=0;i<t.length;)e=m[t.charAt(i++)]<<18|m[t.charAt(i++)]<<12|(r=m[t.charAt(i++)])<<6|(o=m[t.charAt(i++)]),n+=64===r?_(e>>16&255):64===o?_(e>>16&255,e>>8&255):_(e>>16&255,e>>8&255,255&e);return n},j=n?t=>atob(A(t)):l?t=>Buffer.from(t,"base64").toString("binary"):Z,I=l?a=>C(Buffer.from(a,"base64")):a=>C(j(a),(t=>t.charCodeAt(0))),L=a=>I($(a)),O=l?a=>Buffer.from(a,"base64").toString("utf8"):d?a=>d.decode(I(a)):a=>z(j(a)),$=a=>A(a.replace(/[-_]/g,(t=>"-"==t?"+":"/"))),N=t=>O($(t)),J=t=>({value:t,enumerable:!1,writable:!0,configurable:!0}),V=function(){const t=(t,body)=>Object.defineProperty(String.prototype,t,J(body));t("fromBase64",(function(){return N(this)})),t("toBase64",(function(t){return D(this,t)})),t("toBase64URI",(function(){return D(this,!0)})),t("toBase64URL",(function(){return D(this,!0)})),t("toUint8Array",(function(){return L(this)}))},H=function(){const t=(t,body)=>Object.defineProperty(Uint8Array.prototype,t,J(body));t("toBase64",(function(t){return F(this,t)})),t("toBase64URI",(function(){return F(this,!0)})),t("toBase64URL",(function(){return F(this,!0)}))},G={version:o,VERSION:"3.6.0",atob:j,atobPolyfill:Z,btoa:B,btoaPolyfill:y,fromBase64:N,toBase64:D,encode:D,encodeURI:k,encodeURL:k,utob:S,btou:z,decode:N,isValid:t=>{if("string"!=typeof t)return!1;const s=t.replace(/\s+/g,"").replace(/=+$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(s)||!/[^\s0-9a-zA-Z\-_]/.test(s)},fromUint8Array:F,toUint8Array:L,extendString:V,extendUint8Array:H,extendBuiltins:()=>{V(),H()}}},320:function(t,e,r){"use strict";r.r(e);r(18),r(35);var o=r(313),n={data:function(){return{encode_text:"",decode_text:"",encode_result:"",decode_result:"",img_src:""}},mounted:function(){},methods:{encode:function(){this.encode_result=o.a.encode(this.encode_text)},decode:function(){this.decode_result=o.a.decode(this.decode_text)},encode_file:function(){var t=new FileReader,e=this,r=(document.querySelector(".download_encode_file"),document.querySelector("#encodeFile").files[0]);"image"==r.type.split("/")[0]?(t.addEventListener("load",(function(){e.img_src=t.result}),!1),t.readAsDataURL(r)):alert("請上傳圖片格式")}}},c=r(69),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"form-group"},[r("label",{staticClass:"h3",attrs:{for:"encode"}},[t._v("Encode to Base64 format")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.encode_text,expression:"encode_text"}],staticClass:"form-control",attrs:{name:"",id:"encode",cols:"30",rows:"10"},domProps:{value:t.encode_text},on:{input:function(e){e.target.composing||(t.encode_text=e.target.value)}}}),t._v(" "),r("button",{staticClass:"btn btn-primary mt-4",on:{click:t.encode}},[t._v("encode")]),t._v(" "),r("div",{staticClass:"h3"},[t._v("Result : "+t._s(t.encode_result))])]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"h3",attrs:{for:"decode"}},[t._v("Decode to Base64 format")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.decode_text,expression:"decode_text"}],staticClass:"form-control",attrs:{name:"",id:"decode",cols:"30",rows:"10"},domProps:{value:t.decode_text},on:{input:function(e){e.target.composing||(t.decode_text=e.target.value)}}}),t._v(" "),r("button",{staticClass:"btn btn-danger mt-4",on:{click:t.decode}},[t._v("decode")]),t._v(" "),r("div",{staticClass:"h3"},[t._v("Result : "+t._s(t.decode_result))])]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"h2"},[t._v("Img to base64 and show")]),t._v(" "),r("div",{staticClass:"form-group"},[r("label",{staticClass:"h3",attrs:{for:"encodeFile"}},[t._v("Encode File Upload")]),t._v(" "),r("input",{staticClass:"form-control",attrs:{type:"file",id:"encodeFile"},on:{change:t.encode_file}}),t._v(" "),r("div",{staticClass:"mt-4"},[r("img",{staticClass:"img-thumbnail",attrs:{src:t.img_src,alt:""}})])])])}),[],!1,null,null,null);e.default=component.exports},396:function(t,e,r){"use strict";r.r(e);var o={components:{base64:r(320).default}},n=r(69),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[t._m(0),t._v(" "),r("base64")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[r("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[r("a",{staticClass:"nav-link active",attrs:{id:"home-tab","data-toggle":"tab",href:"#home",role:"tab","aria-controls":"home","aria-selected":"true"}},[t._v("Home")])]),t._v(" "),r("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[r("a",{staticClass:"nav-link",attrs:{id:"profile-tab","data-toggle":"tab",href:"#profile",role:"tab","aria-controls":"profile","aria-selected":"false"}},[t._v("Profile")])]),t._v(" "),r("li",{staticClass:"nav-item",attrs:{role:"presentation"}},[r("a",{staticClass:"nav-link",attrs:{id:"contact-tab","data-toggle":"tab",href:"#contact",role:"tab","aria-controls":"contact","aria-selected":"false"}},[t._v("Contact")])])])}],!1,null,null,null);e.default=component.exports}}]);