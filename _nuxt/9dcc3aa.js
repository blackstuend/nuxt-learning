(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{285:function(t,e,n){"use strict";var r=n(286),o=n(287);t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},286:function(t,e,n){"use strict";var r=n(5),o=n(13),c=n(81),l=n(34),d=n(200),v=n(199),f=n(102),h=n(22),_=n(8),m=n(141),x=n(56),w=n(142);t.exports=function(t,e,n){var y=-1!==t.indexOf("Map"),k=-1!==t.indexOf("Weak"),E=y?"set":"add",C=o[t],S=C&&C.prototype,z=C,N={},R=function(t){var e=S[t];l(S,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(k&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return k&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(k&&!h(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof C||!(k||S.forEach&&!_((function(){(new C).entries().next()})))))z=n.getConstructor(e,t,y,E),d.REQUIRED=!0;else if(c(t,!0)){var D=new z,L=D[E](k?{}:-0,1)!=D,O=_((function(){D.has(1)})),I=m((function(t){new C(t)})),A=!k&&_((function(){for(var t=new C,e=5;e--;)t[E](e,e);return!t.has(-0)}));I||((z=e((function(e,n){f(e,z,t);var r=w(new C,e,z);return null!=n&&v(n,r[E],{that:r,AS_ENTRIES:y}),r}))).prototype=S,S.constructor=z),(O||A)&&(R("delete"),R("has"),y&&R("get")),(A||L)&&R(E),k&&S.clear&&delete S.clear}return N[t]=z,r({global:!0,forced:z!=C},N),x(z,t),k||n.setStrong(z,t,y),z}},287:function(t,e,n){"use strict";var r=n(31).f,o=n(64),c=n(139),l=n(63),d=n(102),v=n(199),f=n(138),h=n(140),_=n(27),m=n(200).fastKey,x=n(47),w=x.set,y=x.getterFor;t.exports={getConstructor:function(t,e,n,f){var h=t((function(t,r){d(t,h,e),w(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),_||(t.size=0),null!=r&&v(r,t[f],{that:t,AS_ENTRIES:n})})),x=y(e),k=function(t,e,n){var r,o,c=x(t),l=E(t,e);return l?l.value=n:(c.last=l={index:o=m(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),_?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},E=function(t,e){var n,r=x(t),o=m(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(h.prototype,{clear:function(){for(var t=x(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,_?t.size=0:this.size=0},delete:function(t){var e=x(this),n=E(this,t);if(n){var r=n.next,o=n.previous;delete e.index[n.index],n.removed=!0,o&&(o.next=r),r&&(r.previous=o),e.first==n&&(e.first=r),e.last==n&&(e.last=o),_?e.size--:this.size--}return!!n},forEach:function(t){for(var e,n=x(this),r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!E(this,t)}}),c(h.prototype,n?{get:function(t){var e=E(this,t);return e&&e.value},set:function(t,e){return k(this,0===t?0:t,e)}}:{add:function(t){return k(this,t=0===t?0:t,t)}}),_&&r(h.prototype,"size",{get:function(){return x(this).size}}),h},setStrong:function(t,e,n){var r=e+" Iterator",o=y(e),c=y(r);f(t,e,(function(t,e){w(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),h(e)}}},333:function(t,e,n){"use strict";n.r(e);n(9),n(17),n(285),n(51),n(10),n(65),n(62);var r=n(23),o={head:function(){},data:function(){return{data:[],select:"all",isLoading:!1}},methods:{getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t).isLoading=!0,"https://datacenter.taichung.gov.tw/Swagger/OpenData/44ff471a-8bda-429d-b5ba-29eace7b05ed",e.next=5,t.$axios.get("https://datacenter.taichung.gov.tw/Swagger/OpenData/44ff471a-8bda-429d-b5ba-29eace7b05ed");case 5:data=e.sent,n.isLoading=!1,data.data.forEach((function(element){n.data.push(element)}));case 8:case"end":return e.stop()}}),e)})))()},infinite_get:function(){window.innerHeight-document.querySelector("table").getBoundingClientRect().bottom>=10&&this.getData()}},mounted:function(){this.getData(),window.addEventListener("scroll",this.infinite_get)},computed:{categories:function(){var t=new Set;return this.data.forEach((function(element){t.add(element.ComplexName)})),t}},destroyed:function(){console.log("destoryed"),window.removeEventListener("scroll",this.infinite_get)}},c=n(46),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),n("label",{staticClass:"mt-3",attrs:{for:"select_cateogries"}},[t._v("篩選類別")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.select,expression:"select"}],attrs:{name:"",id:"select_cateogries"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.select=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"all",selected:""}},[t._v("全部")]),t._v(" "),t._l(t.categories,(function(e,r){return n("option",{key:r},[t._v(t._s(e))])}))],2),t._v(" "),n("table",{staticClass:"table"},[t._m(0),t._v(" "),n("tbody",t._l(t.data,(function(e,r){return n("tr",{directives:[{name:"show",rawName:"v-show",value:e.ComplexName==t.select||"all"==t.select,expression:"item.ComplexName == select || select == 'all'"}],key:r},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.PlaceName))]),t._v(" "),n("td",[t._v(t._s(e.ComplexName))]),t._v(" "),n("td",[t._v(t._s(e.CreateTime))]),t._v(" "),n("td",[t._v(t._s(e.RptDeptNo))])])})),0)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col"}},[this._v("位置")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("類別")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("時間")]),this._v(" "),e("th",{attrs:{scope:"col"}},[this._v("單號")])])])}],!1,null,null,null);e.default=component.exports}}]);