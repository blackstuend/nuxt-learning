(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{313:function(e,t,o){"use strict";o.d(t,"a",(function(){return H}));const r="3.6.0",n="function"==typeof atob,c="function"==typeof btoa,d="function"==typeof Buffer,l="function"==typeof TextDecoder?new TextDecoder:void 0,f="function"==typeof TextEncoder?new TextEncoder:void 0,h=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="],m=(a=>{let e={};return a.forEach(((t,i)=>e[t]=i)),e})(h),_=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,v=String.fromCharCode.bind(String),x="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(e,t=(e=>e))=>new Uint8Array(Array.prototype.slice.call(e,0).map(t)),A=e=>e.replace(/[+\/]/g,(e=>"+"==e?"-":"_")).replace(/=+$/m,""),C=s=>s.replace(/[^A-Za-z0-9\+\/]/g,""),y=e=>{let t,o,r,n,c="";const d=e.length%3;for(let i=0;i<e.length;){if((o=e.charCodeAt(i++))>255||(r=e.charCodeAt(i++))>255||(n=e.charCodeAt(i++))>255)throw new TypeError("invalid character found");t=o<<16|r<<8|n,c+=h[t>>18&63]+h[t>>12&63]+h[t>>6&63]+h[63&t]}return d?c.slice(0,d-3)+"===".substring(d):c},B=c?e=>btoa(e):d?e=>Buffer.from(e,"binary").toString("base64"):y,w=d?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let i=0,o=e.length;i<o;i+=4096)t.push(v.apply(null,e.subarray(i,i+4096)));return B(t.join(""))},F=(e,t=!1)=>t?A(w(e)):w(e),U=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?v(192|t>>>6)+v(128|63&t):v(224|t>>>12&15)+v(128|t>>>6&63)+v(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return v(240|t>>>18&7)+v(128|t>>>12&63)+v(128|t>>>6&63)+v(128|63&t)},E=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,S=u=>u.replace(E,U),R=d?s=>Buffer.from(s,"utf8").toString("base64"):f?s=>w(f.encode(s)):s=>B(S(s)),D=(e,t=!1)=>t?A(R(e)):R(e),z=e=>D(e,!0),P=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,T=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return v(55296+(t>>>10))+v(56320+(1023&t));case 3:return v((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return v((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},Z=b=>b.replace(P,T),I=e=>{if(e=e.replace(/\s+/g,""),!_.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,o,r,n="";for(let i=0;i<e.length;)t=m[e.charAt(i++)]<<18|m[e.charAt(i++)]<<12|(o=m[e.charAt(i++)])<<6|(r=m[e.charAt(i++)]),n+=64===o?v(t>>16&255):64===r?v(t>>16&255,t>>8&255):v(t>>16&255,t>>8&255,255&t);return n},L=n?e=>atob(C(e)):d?e=>Buffer.from(e,"base64").toString("binary"):I,j=d?a=>x(Buffer.from(a,"base64")):a=>x(L(a),(e=>e.charCodeAt(0))),k=a=>j(N(a)),O=d?a=>Buffer.from(a,"base64").toString("utf8"):l?a=>l.decode(j(a)):a=>Z(L(a)),N=a=>C(a.replace(/[-_]/g,(e=>"-"==e?"+":"/"))),$=e=>O(N(e)),J=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),V=function(){const e=(e,body)=>Object.defineProperty(String.prototype,e,J(body));e("fromBase64",(function(){return $(this)})),e("toBase64",(function(e){return D(this,e)})),e("toBase64URI",(function(){return D(this,!0)})),e("toBase64URL",(function(){return D(this,!0)})),e("toUint8Array",(function(){return k(this)}))},G=function(){const e=(e,body)=>Object.defineProperty(Uint8Array.prototype,e,J(body));e("toBase64",(function(e){return F(this,e)})),e("toBase64URI",(function(){return F(this,!0)})),e("toBase64URL",(function(){return F(this,!0)}))},H={version:r,VERSION:"3.6.0",atob:L,atobPolyfill:I,btoa:B,btoaPolyfill:y,fromBase64:$,toBase64:D,encode:D,encodeURI:z,encodeURL:z,utob:S,btou:Z,decode:$,isValid:e=>{if("string"!=typeof e)return!1;const s=e.replace(/\s+/g,"").replace(/=+$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(s)||!/[^\s0-9a-zA-Z\-_]/.test(s)},fromUint8Array:F,toUint8Array:k,extendString:V,extendUint8Array:G,extendBuiltins:()=>{V(),G()}}},320:function(e,t,o){"use strict";o.r(t);o(18),o(35);var r=o(313),n={data:function(){return{encode_text:"",decode_text:"",encode_result:"",decode_result:"",img_src:""}},mounted:function(){},methods:{encode:function(){this.encode_result=r.a.encode(this.encode_text)},decode:function(){this.decode_result=r.a.decode(this.decode_text)},encode_file:function(){var e=new FileReader,t=this,o=(document.querySelector(".download_encode_file"),document.querySelector("#encodeFile").files[0]);"image"==o.type.split("/")[0]?(e.addEventListener("load",(function(){t.img_src=e.result}),!1),e.readAsDataURL(o)):alert("請上傳圖片格式")}}},c=o(69),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"form-group"},[o("label",{staticClass:"h3",attrs:{for:"encode"}},[e._v("Encode to Base64 format")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.encode_text,expression:"encode_text"}],staticClass:"form-control",attrs:{name:"",id:"encode",cols:"30",rows:"10"},domProps:{value:e.encode_text},on:{input:function(t){t.target.composing||(e.encode_text=t.target.value)}}}),e._v(" "),o("button",{staticClass:"btn btn-primary mt-4",on:{click:e.encode}},[e._v("encode")]),e._v(" "),o("div",{staticClass:"h3"},[e._v("Result : "+e._s(e.encode_result))])]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"h3",attrs:{for:"decode"}},[e._v("Decode to Base64 format")]),e._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.decode_text,expression:"decode_text"}],staticClass:"form-control",attrs:{name:"",id:"decode",cols:"30",rows:"10"},domProps:{value:e.decode_text},on:{input:function(t){t.target.composing||(e.decode_text=t.target.value)}}}),e._v(" "),o("button",{staticClass:"btn btn-danger mt-4",on:{click:e.decode}},[e._v("decode")]),e._v(" "),o("div",{staticClass:"h3"},[e._v("Result : "+e._s(e.decode_result))])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"h2"},[e._v("Img to base64 and show")]),e._v(" "),o("div",{staticClass:"form-group"},[o("label",{staticClass:"h3",attrs:{for:"encodeFile"}},[e._v("Encode File Upload")]),e._v(" "),o("input",{staticClass:"form-control",attrs:{type:"file",id:"encodeFile"},on:{change:e.encode_file}}),e._v(" "),o("div",{staticClass:"mt-4"},[o("img",{staticClass:"img-thumbnail",attrs:{src:e.img_src,alt:""}})])])])}),[],!1,null,null,null);t.default=component.exports}}]);