(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"101c":function(n,t,e){"use strict";(function(n){e("d8d2");o(e("66fd"));var t=o(e("bfdb"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},1108:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("a34a")),i=a(e("9f55"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,o,i,a,r){try{var u=n[a](r),s=u.value}catch(c){return void e(c)}u.done?t(s):Promise.resolve(s).then(o,i)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(o,i){var a=n.apply(t,e);function u(n){r(a,o,i,u,s,"next",n)}function s(n){r(a,o,i,u,s,"throw",n)}u(void 0)}))}}var s={data:function(){return{username:"",password:"",options:["请选择登录用户类型"],optionsValues:["","xuesheng"],index:0}},onLoad:function(){var n=["请选择登录用户类型"],t=i.default.list();this.menuList=t;for(var e=0;e<this.menuList.length;e++)"是"==this.menuList[e].hasFrontLogin&&n.push(this.menuList[e].roleName);this.options=n,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(t){n.setStorageSync("loginTable",t),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var t=this;return u(o.default.mark((function e(){var i;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.optionsValues[t.index]){e.next=3;break}return t.$utils.msg("请选择登陆用户类型"),e.abrupt("return");case 3:return e.next=5,t.$api.login("".concat(t.optionsValues[t.index]),{username:t.username,password:t.password});case 5:return i=e.sent,n.setStorageSync("token",i.token),n.setStorageSync("nickname",t.username),n.setStorageSync("nowTable","".concat(t.optionsValues[t.index])),e.next=11,t.$api.session("".concat(t.optionsValues[t.index]));case 11:i=e.sent,n.setStorageSync("userid",i.data.id),n.setStorageSync("role","".concat(t.options[t.index])),t.$utils.tab("../index/index");case 15:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value}}};t.default=s}).call(this,e("543d")["default"])},"14a0":function(n,t,e){"use strict";var o=e("5c18"),i=e.n(o);i.a},"5c18":function(n,t,e){},b703:function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var i=function(){var n=this,t=n.$createElement;n._self._c},a=[]},bfdb:function(n,t,e){"use strict";e.r(t);var o=e("b703"),i=e("ff03");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("14a0");var r,u=e("f0c5"),s=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,"7110e055",null,!1,o["a"],r);t["default"]=s.exports},ff03:function(n,t,e){"use strict";e.r(t);var o=e("1108"),i=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=i.a}},[["101c","common/runtime","common/vendor"]]]);