(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"06e6":function(e,n,t){"use strict";t.r(n);var i=t("243c"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},"1d04":function(e,n,t){},"1f4d":function(e,n,t){"use strict";(function(e){t("d8d2");i(t("66fd"));var n=i(t("28dd"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"243c":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,u){try{var s=e[a](u),o=s.value}catch(l){return void t(l)}s.done?n(o):Promise.resolve(o).then(i,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var u=e.apply(n,t);function s(e){a(u,i,r,s,o,"next",e)}function o(e){a(u,i,r,s,o,"throw",e)}s(void 0)}))}}var s={data:function(){return{xueshengxingbieOptions:[],xueshengxingbieIndex:0,jiaoshixingbieOptions:[],jiaoshixingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var n=this;return u(i.default.mark((function t(){var r;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],r=e.getStorageSync("loginTable"),n.tableName=r,"xuesheng"==n.tableName&&(n.xueshengxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.xueshengxingbieOptions[0]),"jiaoshi"==n.tableName&&(n.jiaoshixingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.jiaoshixingbieOptions[0]),n.styleChange();case 6:case"end":return t.stop()}}),t)})))()},methods:{xueshengxingbieChange:function(e){this.xueshengxingbieIndex=e.target.value,this.ruleForm.xingbie=this.xueshengxingbieOptions[this.xueshengxingbieIndex]},jiaoshixingbieChange:function(e){this.jiaoshixingbieIndex=e.target.value,this.ruleForm.xingbie=this.jiaoshixingbieOptions[this.jiaoshixingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.xuehao||"xuesheng"!=e.tableName){n.next=3;break}return e.$utils.msg("学号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"xuesheng"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if("xuesheng"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=9;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 9:if(e.ruleForm.gonghao||"jiaoshi"!=e.tableName){n.next=12;break}return e.$utils.msg("工号不能为空"),n.abrupt("return");case 12:if(e.ruleForm.mima||"jiaoshi"!=e.tableName){n.next=15;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 15:if("jiaoshi"!=e.tableName||!e.ruleForm.dianhua||e.$validate.isMobile(e.ruleForm.dianhua)){n.next=18;break}return e.$utils.msg("电话应输入手机格式"),n.abrupt("return");case 18:if("jiaoshi"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=21;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 21:return n.next=23,e.$api.register("".concat(e.tableName),e.ruleForm);case 23:e.$utils.msgBack("注册成功");case 25:case"end":return n.stop()}}),n)})))()}}};n.default=s}).call(this,t("543d")["default"])},"28dd":function(e,n,t){"use strict";t.r(n);var i=t("dd64"),r=t("06e6");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("f9c0");var u,s=t("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"f9c395e4",null,!1,i["a"],u);n["default"]=o.exports},dd64:function(e,n,t){"use strict";var i;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}));var r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},f9c0:function(e,n,t){"use strict";var i=t("1d04"),r=t.n(i);r.a}},[["1f4d","common/runtime","common/vendor"]]]);