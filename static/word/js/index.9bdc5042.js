(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={index:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1aa2":function(e,t,r){},"2b03":function(e,t,r){"use strict";r("1aa2")},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4de4"),r("d3b7");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],s={name:"App"},i=s,c=r("2877"),l=Object(c["a"])(i,a,o,!1,null,null,null),u=l.exports,d=r("5c96"),f=r.n(d),p=(r("0fae"),r("91aa"),r("c842"),r("c1df")),m=r.n(p),h=r("8c4f"),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.divLoading,expression:"divLoading"}]},[r("div",[r("el-form",{ref:"searchData",staticClass:"demo-form-inline",staticStyle:{"margin-left":"10px"},attrs:{"label-position":e.labelPosition,"label-width":"80px",rules:e.rulesSearch,model:e.searchData,inline:!0}},[r("el-form-item",{attrs:{label:"关键词",prop:"keyword"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",rows:2,placeholder:"请输入搜索关键字"},on:{input:e.inputChange},model:{value:e.searchData.keyword,callback:function(t){e.$set(e.searchData,"keyword",t)},expression:"searchData.keyword"}})],1),r("el-form-item",{staticStyle:{"margin-left":"5px"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){return e.searchLib("searchData")}}},[e._v("关键字查询")])],1),r("el-form-item",{staticStyle:{"margin-left":"5px"}},[r("el-button",{staticStyle:{"background-color":"#f96868","border-color":"#f96868"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.showAddDrawe}},[e._v("话术入库")])],1),r("el-form-item",[r("el-button",{staticStyle:{"background-color":"#33cabb","border-color":"#33cabb"},attrs:{type:"primary",icon:"el-icon-upload2"},on:{click:e.commitUpload}},[e._v("导入文件")]),r("el-upload",{ref:"fileRefs",staticClass:"upload-demo",attrs:{action:e.uploadUrl,data:{password:e.inputPassWord},"before-upload":e.uploadBefore,"on-success":e.uploadSuccess,"on-error":e.uploadError,"show-file-list":!1}})],1),r("el-form-item",{staticStyle:{"margin-left":"5px"}},[r("el-button",{staticStyle:{"background-color":"#926dde","border-color":"#926dde"},attrs:{type:"primary",icon:"el-icon-download"},on:{click:e.exportFile}},[e._v("导出文件")])],1),r("el-form-item",{staticStyle:{"margin-left":"5px"}},[r("el-button",{staticStyle:{"background-color":"#8d6658","border-color":"#8d6658"},attrs:{type:"primary",icon:"el-icon-mouse"},on:{click:e.addCommon}},[e._v("查看常用话术")])],1),r("el-form-item",{staticStyle:{"margin-left":"5px"}},[r("el-dropdown",[r("el-button",{staticStyle:{"border-color":"#faa64b","background-color":"#faa64b"},attrs:{type:"primary"}},[e._v(" 当前语言("+e._s(e.localHanStr)+")"),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{nativeOn:{click:function(t){return e.langClick("zy")}}},[e._v("中英")]),r("el-dropdown-item",{nativeOn:{click:function(t){return e.langClick("zyy")}}},[e._v("中英印")])],1)],1)],1),e.phrase_username_show?r("el-form-item",[r("el-input",{attrs:{placeholder:"请输入名字"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1):e._e(),e.phrase_username_show?r("el-form-item",[r("el-button",{staticStyle:{"background-color":"#f96197","border-color":"#f96197"},attrs:{type:"primary",icon:"el-icon-setting"},on:{click:e.setUserName}},[e._v("设置名字")])],1):e._e()],1)],1),e.normalShow?r("div",{staticStyle:{display:"flex","flex-direction":"column"}},[r("div",{staticStyle:{"margin-left":"20px",color:"blue","font-size":"24px","font-weight":"bold"}},[e._v(" 话术详情-操作员【"+e._s(e.currUserName)+"】 ")]),e._l(e.listData,(function(t,n){return r("div",{key:n,staticStyle:{"padding-bottom":"2px","padding-left":"20px","padding-right":"20px","padding-top":"2px"}},[r("el-row",[r("el-col",{attrs:{span:2},nativeOn:{click:function(t){return e.ArticleDetail(n)}}},[e._v("中文：")]),r("el-col",{staticStyle:{"white-space":"pre-wrap"},attrs:{span:10},nativeOn:{click:function(t){return e.ArticleDetail(n)}}},[e._v(e._s(t.Chinese))]),r("el-col",{attrs:{span:2}},[r("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.Chinese,expression:"item.Chinese",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticStyle:{"background-color":"#926dde","border-color":"#926dde",color:"#ffffff"},attrs:{icon:"el-icon-document-copy",size:"mini",circle:""}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini",circle:""},on:{click:function(r){return e.delWordLib(t.ID)}}}),0===t.CollectionStatus?r("el-button",{attrs:{icon:"el-icon-star-off",size:"mini",circle:""},on:{click:function(r){return e.collWordLib(t.ID)}}}):e._e(),1===t.CollectionStatus?r("el-button",{attrs:{type:"warning",icon:"el-icon-star-on",size:"mini",circle:""},on:{click:e.collNot}}):e._e()],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.activeIndex===n,expression:"activeIndex === index"}]},[r("el-row",[r("el-col",{attrs:{span:2}},[e._v("英文：")]),r("el-col",{staticStyle:{"white-space":"pre-wrap"},attrs:{span:10}},[e._v(e._s(t.English))]),r("el-col",{attrs:{span:2}},[r("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.English,expression:"item.English",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticStyle:{"background-color":"#FF7941","border-color":"#FF7941",color:"#ffffff"},attrs:{icon:"el-icon-document-copy",size:"mini"}},[e._v("复制英语")])],1)],1),"zyy"===e.currLocalLangStr?r("el-row",[r("el-col",{attrs:{span:2}},[e._v("印度文：")]),r("el-col",{attrs:{span:2}},[r("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.India,expression:"item.India",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticStyle:{"background-color":"#33ABA0","border-color":"#33ABA0",color:"#ffffff"},attrs:{icon:"el-icon-document-copy",size:"mini"}},[e._v("复制印地语")])],1),r("el-col",{staticStyle:{"white-space":"pre-wrap"},attrs:{span:10}},[e._v(e._s(t.India))])],1):e._e()],1),r("div",{staticStyle:{"border-bottom":"1px dashed #000000"}})],1)}))],2):e._e(),e.normalShow?e._e():r("div",{staticStyle:{display:"flex","flex-direction":"column"}},[r("div",{staticStyle:{"margin-left":"20px",color:"blue","font-size":"24px","font-weight":"bold"}},[e._v(" 常用话术详情-操作员【"+e._s(e.currUserName)+"】 ")]),e._l(e.parse_listData,(function(t,n){return r("div",{key:n,staticStyle:{"padding-bottom":"2px","padding-left":"20px","padding-right":"20px","padding-top":"2px"}},[r("el-row",[r("el-col",{attrs:{span:2},nativeOn:{click:function(t){return e.ArticleDetail(n)}}},[e._v("中文：")]),r("el-col",{staticStyle:{"white-space":"pre-wrap"},attrs:{span:10},nativeOn:{click:function(t){return e.ArticleDetail(n)}}},[e._v(e._s(t.Chinese))]),r("el-col",{attrs:{span:2}},[r("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.Chinese,expression:"item.Chinese",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticStyle:{"background-color":"#926dde","border-color":"#926dde",color:"#ffffff"},attrs:{icon:"el-icon-document-copy",size:"mini",circle:""}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini",circle:""},on:{click:function(r){return e.delWordLib(t.ID)}}})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.activeIndex===n,expression:"activeIndex === index"}]},[r("el-row",[r("el-col",{attrs:{span:2}},[e._v("英文：")]),r("el-col",{staticStyle:{"white-space":"pre-wrap"},attrs:{span:10}},[e._v(e._s(t.English))]),r("el-col",{attrs:{span:2}},[r("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.English,expression:"item.English",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticStyle:{"background-color":"#FF7941","border-color":"#FF7941",color:"#ffffff"},attrs:{size:"mini"}},[e._v("复制英语")])],1)],1),"zyy"===e.currLocalLangStr?r("el-row",[r("el-col",{attrs:{span:2}},[e._v("印度文：")]),r("el-col",{attrs:{span:2}},[r("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.India,expression:"item.India",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],staticStyle:{"background-color":"#33ABA0","border-color":"#33ABA0",color:"#ffffff"},attrs:{size:"mini"}},[e._v("复制印地语")])],1),r("el-col",{staticStyle:{"white-space":"pre-wrap"},attrs:{span:10}},[e._v(e._s(t.India))])],1):e._e()],1),r("div",{staticStyle:{"border-bottom":"1px dashed #000000"}})],1)}))],2),r("el-drawer",{attrs:{title:"话术表单",visible:e.drawer,direction:e.direction,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer=t}}},[r("el-card",{staticClass:"box-card",staticStyle:{"margin-right":"10px"}},[r("div",[r("el-form",{ref:"formData",staticClass:"demo-form-inline",staticStyle:{"margin-left":"10px"},attrs:{"label-position":e.labelPosition,"label-width":"80px",rules:e.rules,model:e.formData}},[r("el-form-item",{attrs:{label:"中文",prop:"chinese"}},[r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入中文"},model:{value:e.formData.chinese,callback:function(t){e.$set(e.formData,"chinese",t)},expression:"formData.chinese"}})],1),r("el-form-item",{attrs:{label:"英文",prop:"english"}},[r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入英文"},model:{value:e.formData.english,callback:function(t){e.$set(e.formData,"english",t)},expression:"formData.english"}})],1),r("el-form-item",{attrs:{label:"印度语",prop:"india"}},[r("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入印度语"},model:{value:e.formData.india,callback:function(t){e.$set(e.formData,"india",t)},expression:"formData.india"}})],1),e.passwordViewShow?r("el-form-item",{attrs:{label:"入库密码",prop:"passwordAdd"}},[r("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.formData.passwordAdd,callback:function(t){e.$set(e.formData,"passwordAdd",t)},expression:"formData.passwordAdd"}})],1):e._e(),r("el-form-item",{staticStyle:{"margin-left":"5px"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:function(t){return e.addLib("formData")}}},[e._v(e._s(e.confirmAddLan))])],1)],1)],1)])],1)],1)},g=[],v=r("1da1"),y=(r("d81d"),r("ac1f"),r("841c"),r("96cf"),r("53ca")),w=(r("00b4"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("4d90"),"/uploadWords");function j(e,t){if(0===arguments.length||!e)return null;var r,n=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(y["a"])(e)?r=e:("string"===typeof e&&(e=/^[0-9]+$/.test(e)?parseInt(e):e.replace(new RegExp(/-/gm),"/")),"number"===typeof e&&10===e.toString().length&&(e*=1e3),r=new Date(e));var a={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()},o=n.replace(/{([ymdhisa])+}/g,(function(e,t){var r=a[t];return"a"===t?["日","一","二","三","四","五","六"][r]:r.toString().padStart(2,"0")}));return o}r("466d"),r("99af"),r("b64b"),r("159b");var x=r("bc3a"),S=r.n(x);function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e4;return new Promise((function(a,o){var s;s="GET"===r?S.a.get(e,{headers:{"Content-Type":"application/x-www-form-urlencoded"},timeout:n,params:t}):S.a.post(e,t,{timeout:n,headers:{"Content-Type":"application/x-www-form-urlencoded"}}),s.then((function(e){a(e.data)})).catch((function(e){-1!==e.message.indexOf("timeout")?a({code:-101,msg:"超时了"}):Object(d["Message"])({showClose:!0,message:"请求出错了"+e.message,type:"error"})}))}))}function _(e){var t="";for(var r in e)t+="".concat(r,"=").concat(e[r],"&");return t=t.substr(0,t.length-1),t}r("dc02");var D="",R=function(e,t){var r=_(t);return k(D+"/setWordLibrary?action="+e,r,"POST")},L=function(e){var t=_(e);return k(D+"/downWordWords?"+t)},N=function(e,t){var r=_(t);return k(D+"/setThePhrase?action="+e,r,"POST")};r("e762").Base64;var U={name:"TableAdmin",filters:{parseTime:function(e){return j(e,"{y}-{m}-{d} {h}:{i}")}},data:function(){return{inputPassWord:null,divLoading:!1,labelPosition:"right",formData:{chinese:null,english:null,india:null,passwordAdd:null},searchData:{keyword:null},rules:{chinese:[{required:!0,message:"不允许为空,请填入中文",trigger:"change"}],english:[{required:!0,message:"不允许为空,请填入英文",trigger:"change"}],passwordAdd:[{required:!0,message:"不允许为空,请填入入库密码",trigger:"change"}]},rulesSearch:{keyword:[{required:!0,message:"不允许为空,请填入关键词",trigger:"change"}]},listData:[],parse_listData:[],drawer:!1,direction:"rtl",activeIndex:-1,uploadUrl:"",confirmAddLan:"确认入库",phrase_username_show:!0,passwordViewShow:!0,username:"",currUserName:"未知",normalShow:!0,localHanStr:"中英印"}},methods:{showAddDrawe:function(){this.direction="rtl",this.drawer=!0,this.confirmAddLan="确认入库",this.passwordViewShow=!0},commitUpload:function(){var e=this;this.$confirm("此操作将导入excel文件, 是否继续?","危险操作",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$prompt("请输入密码","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputErrorMessage:"密码不能为空",inputValidator:function(e){return!!e}}).then(function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=r.value,e.inputPassWord=n,e.$refs["fileRefs"].$refs["upload-inner"].handleClick();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){e.$notify({title:"提示",message:"取消导入操作",type:"info"})}));case 1:case"end":return t.stop()}}),t)})))).catch((function(){}))},uploadBefore:function(){this.divLoading=!0},uploadSuccess:function(e,t,r){this.divLoading=!1,200===e.code?this.$notify({title:"成功",message:e.msg,type:"success"}):this.$notify.error({title:"错误",message:e.msg})},uploadError:function(e,t,r){this.divLoading=!1,this.$notify.error({title:"错误",message:e.msg})},exportFile:function(){var e=this;this.$confirm("此操作将导出excel文件, 是否继续?","危险操作",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$prompt("请输入密码","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputErrorMessage:"密码不能为空",inputValidator:function(e){return!!e}}).then(function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(r){var n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=r.value,t.next=3,L({password:n});case 3:a=t.sent,200===a.code?(o=a.result,o&&window.open("../../"+o)):e.$notify({title:"错误",message:a.msg,type:"error"});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){e.$notify({title:"提示",message:"取消导出操作",type:"info"})}));case 1:case"end":return t.stop()}}),t)})))).catch((function(){}))},exportFile_web:function(){var e=this;this.$confirm("此操作将导出excel文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.export2Excel()})).catch((function(){}))},export2Excel:function(){var e=this;Promise.resolve().then(function(){var t=r("c842"),n=t.export_json_to_excel,a=["chinese","english","india"],o=["Chinese","English","India"],s=e.listData,i=e.formatJson(o,s);n(a,i,"话术导出excel")}.bind(null,r)).catch(r.oe)},formatJson:function(e,t){return t.map((function(t){return e.map((function(e){return t[e]}))}))},addLib:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$refs[e].validate((function(e){if(!e)return t.$notify({title:"错误",message:"无法查询,查询内容没通过校验",type:"error"}),!1;"rtl"===t.direction?t.handleSetWord():"ltr"===t.direction&&t.handleSetWordLan()}));case 1:case"end":return r.stop()}}),r)})))()},addCommon:function(){this.normalShow=!1,this.currUserName&&"未知"!==this.currUserName&&this.handleGetWordLan()},setUserName:function(){if(this.username&&""!==this.username){if("未知"===this.username)return this.$notify({title:"错误",message:"不能设置用户名为未知!",type:"error"}),!1;this.$notify({title:"成功",message:"用户名设置成功！",type:"success"}),localStorage.setItem("phrase_username",this.username),this.currUserName=this.username,this.username="",this.phrase_username_show=!1,this.handleGetWordLan()}else this.$notify({title:"错误",message:"用户名不能为空!",type:"error"}),this.phrase_username_show=!0},inputChange:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.searchData.keyword){t.next=17;break}return e.normalShow=!0,e.listData=[],r={},e.currUserName=localStorage.getItem("phrase_username"),e.currUserName&&"未知"!==e.currUserName&&(r.username=e.currUserName),r.search=encodeURIComponent(e.searchData.keyword),t.next=9,R("GET",r);case 9:if(n=t.sent,200!==n.code){t.next=16;break}if(0!==n.result.length){t.next=13;break}return t.abrupt("return",!1);case 13:e.listData=n.result,t.next=17;break;case 16:e.$notify({title:"错误",message:n.msg,type:"error"});case 17:case"end":return t.stop()}}),t)})))()},searchLib:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return t.$notify({title:"错误",message:"无法查询,查询内容没通过校验",type:"error"}),!1;t.handleGetWord()}))},handleGetWord:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.normalShow=!0,e.divLoading=!0,e.listData=[],r={},e.currUserName=localStorage.getItem("phrase_username"),e.currUserName&&"未知"!==e.currUserName&&(r.username=e.currUserName),r.search=encodeURIComponent(e.searchData.keyword),t.next=9,R("GET",r);case 9:if(n=t.sent,e.divLoading=!1,200!==n.code){t.next=18;break}if(0!==n.result.length){t.next=15;break}return e.$notify({title:"成功",message:"查询关键词内容为空,请确保话术是否存在库内或者查询的关键词是否正确！",type:"warning"}),t.abrupt("return",!1);case 15:e.listData=n.result,t.next=19;break;case 18:e.$notify({title:"错误",message:n.msg,type:"error"});case 19:case"end":return t.stop()}}),t)})))()},handleSetWord:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={},r.password=e.formData.passwordAdd,r.chinese=encodeURIComponent(e.formData.chinese),r.english=encodeURIComponent(e.formData.english),r.india=encodeURIComponent(e.formData.india),t.next=7,R("ADD",r);case 7:n=t.sent,200===n.code?(e.$notify({title:"成功",message:n.msg,type:"success"}),e.$refs["formData"].resetFields()):e.$notify({title:"错误",message:n.msg,type:"error"});case 9:case"end":return t.stop()}}),t)})))()},handleSetWordLan:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.currUserName&&"未知"!==e.currUserName){t.next=3;break}return e.$notify({title:"错误",message:"请先设置用户名,否则无法使用收藏功能!",type:"error"}),t.abrupt("return",!1);case 3:return r={},r.username=e.currUserName,r.chinese=encodeURIComponent(e.formData.chinese),r.english=encodeURIComponent(e.formData.english),r.india=encodeURIComponent(e.formData.india),t.next=10,N("ADD",r);case 10:n=t.sent,200===n.code?(e.$notify({title:"成功",message:n.msg,type:"success"}),e.$refs["formData"].resetFields(),e.handleGetWordLan()):e.$notify({title:"错误",message:n.msg,type:"error"});case 12:case"end":return t.stop()}}),t)})))()},handleGetWordLan:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.parse_listData=[],r={},r.username=e.currUserName,t.next=5,N("GET",r);case 5:n=t.sent,200===n.code&&(e.parse_listData=n.result);case 7:case"end":return t.stop()}}),t)})))()},onCopy:function(e){this.$notify({title:"成功",message:"已复制到剪贴板",type:"success"})},onError:function(e){this.$notify({title:"错误",message:"复制失败",type:"error"})},handleClose:function(){this.drawer=!1,this.$refs["formData"].resetFields()},ArticleDetail:function(e){this.activeIndex=this.activeIndex==e?-1:e},collNot:function(){this.$notify({title:"错误",message:"当前话术已收藏,无需重复收藏!",type:"error"})},collWordLib:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.currUserName&&"未知"!==t.currUserName){r.next=3;break}return t.$notify({title:"错误",message:"请先设置用户名,否则无法使用收藏功能!",type:"error"}),r.abrupt("return",!1);case 3:return n={},n.username=t.currUserName,n.id=e,r.next=8,R("collection",n);case 8:a=r.sent,200===a.code?(t.$notify({title:"成功",message:a.msg,type:"success"}),t.handleGetWord()):t.$notify({title:"错误",message:a.msg,type:"error"});case 10:case"end":return r.stop()}}),r)})))()},delWordLib:function(e){var t=this;this.normalShow?this.$prompt("请输入删除密码","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputErrorMessage:"密码不能为空",inputValidator:function(e){return!!e}}).then((function(r){var n=r.value;t.handleDeleteWord(e,n)})).catch((function(){t.$notify({title:"提示",message:"取消删除操作",type:"info"})})):this.handleDeleteWordLan(e)},handleDeleteWord:function(e,t){var r=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={},a.id=e,a.password=t,n.next=5,R("DEL",a);case 5:o=n.sent,200===o.code?(r.$notify({title:"成功",message:o.msg,type:"success"}),r.handleGetWord()):r.$notify({title:"错误",message:o.msg,type:"error"});case 7:case"end":return n.stop()}}),n)})))()},handleDeleteWordLan:function(e){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={},n.id=e,r.next=4,N("DEL",n);case 4:a=r.sent,200===a.code?(t.$notify({title:"成功",message:a.msg,type:"success"}),t.handleGetWordLan()):t.$notify({title:"错误",message:a.msg,type:"error"});case 6:case"end":return r.stop()}}),r)})))()},langClick:function(e){"zy"===e?(localStorage.setItem("localLangStr","zy"),this.localHanStr="中英"):"zyy"===e&&(localStorage.setItem("localLangStr","zyy"),this.localHanStr="中英印"),this.currLocalLangStr=localStorage.getItem("localLangStr")}},created:function(){this.uploadUrl=w,localStorage.getItem("phrase_username")?(this.phrase_username_show=!1,this.currUserName=localStorage.getItem("phrase_username"),this.currLocalLangStr=localStorage.getItem("localLangStr"),"zyy"===this.currLocalLangStr?this.localHanStr="中英印":this.localHanStr="中英"):this.phrase_username_show=!0},computed:{},mounted:function(){},beforeDestroy:function(){}},C=U,E=(r("2b03"),Object(c["a"])(C,b,g,!1,null,null,null)),O=E.exports,$=new h["a"]({mode:"hash",routes:[{path:"/",component:O}]}),A=$,z=(r("be35"),r("4eb5")),I=r.n(z);n["default"].filter("formatDate",(function(e){return m()(1e3*e).format("YYYY-MM-DD HH:mm:ss")})),I.a.config.autoSetContainer=!0,n["default"].config.productionTip=!1,n["default"].use(I.a),n["default"].use(f.a),n["default"].use(h["a"]),new n["default"]({render:function(e){return e(u)},router:A}).$mount("#app")},"91aa":function(e,t,r){r("ac1f"),r("466d"),r("d3b7"),r("b0c0"),r("1276"),r("a15b"),r("25f0"),r("fb6a"),
/*! @source http://purl.eligrey.com/github/Blob.js/blob/master/Blob.js */
function(e){"use strict";if(e.URL=e.URL||e.webkitURL,e.Blob&&e.URL)try{return void new Blob}catch(r){}var t=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||function(e){var t=function(e){return Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]},r=function(){this.data=[]},n=function(e,t,r){this.data=e,this.size=e.length,this.type=t,this.encoding=r},a=r.prototype,o=n.prototype,s=e.FileReaderSync,i=function(e){this.code=this[this.name=e]},c="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),l=c.length,u=e.URL||e.webkitURL||e,d=u.createObjectURL,f=u.revokeObjectURL,p=u,m=e.btoa,h=e.atob,b=e.ArrayBuffer,g=e.Uint8Array;n.fake=o.fake=!0;while(l--)i.prototype[c[l]]=l+1;return u.createObjectURL||(p=e.URL={}),p.createObjectURL=function(e){var t,r=e.type;return null===r&&(r="application/octet-stream"),e instanceof n?(t="data:"+r,"base64"===e.encoding?t+";base64,"+e.data:"URI"===e.encoding?t+","+decodeURIComponent(e.data):m?t+";base64,"+m(e.data):t+","+encodeURIComponent(e.data)):d?d.call(u,e):void 0},p.revokeObjectURL=function(e){"data:"!==e.substring(0,5)&&f&&f.call(u,e)},a.append=function(e){var r=this.data;if(g&&(e instanceof b||e instanceof g)){for(var a="",o=new g(e),c=0,l=o.length;c<l;c++)a+=String.fromCharCode(o[c]);r.push(a)}else if("Blob"===t(e)||"File"===t(e)){if(!s)throw new i("NOT_READABLE_ERR");var u=new s;r.push(u.readAsBinaryString(e))}else e instanceof n?"base64"===e.encoding&&h?r.push(h(e.data)):"URI"===e.encoding?r.push(decodeURIComponent(e.data)):"raw"===e.encoding&&r.push(e.data):("string"!==typeof e&&(e+=""),r.push(unescape(encodeURIComponent(e))))},a.getBlob=function(e){return arguments.length||(e=null),new n(this.data.join(""),e,"raw")},a.toString=function(){return"[object BlobBuilder]"},o.slice=function(e,t,r){var a=arguments.length;return a<3&&(r=null),new n(this.data.slice(e,a>1?t:this.data.length),r,this.encoding)},o.toString=function(){return"[object Blob]"},o.close=function(){this.size=this.data.length=0},r}(e);e.Blob=function(e,r){var n=r&&r.type||"",a=new t;if(e)for(var o=0,s=e.length;o<s;o++)a.append(e[o]);return a.getBlob(n)}}("undefined"!==typeof self&&self||"undefined"!==typeof window&&window||this.content||this)},be35:function(e,t,r){},c842:function(e,t,r){"use strict";r.r(t),r.d(t,"export_table_to_excel",(function(){return c})),r.d(t,"export_json_to_excel",(function(){return l}));r("d3b7"),r("c19f"),r("5cc6"),r("907a"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7");function n(e){for(var t=[],r=e.querySelectorAll("tr"),n=[],a=0;a<r.length;++a){for(var o=[],s=r[a],i=s.querySelectorAll("td"),c=0;c<i.length;++c){var l=i[c],u=l.getAttribute("colspan"),d=l.getAttribute("rowspan"),f=l.innerText;if(""!==f&&f==+f&&(f=+f),n.forEach((function(e){if(a>=e.s.r&&a<=e.e.r&&o.length>=e.s.c&&o.length<=e.e.c)for(var t=0;t<=e.e.c-e.s.c;++t)o.push(null)})),(d||u)&&(d=d||1,u=u||1,n.push({s:{r:a,c:o.length},e:{r:a+d-1,c:o.length+u-1}})),o.push(""!==f?f:null),u)for(var p=0;p<u-1;++p)o.push(null)}t.push(o)}return[t,n]}function a(e,t){t&&(e+=1462);var r=Date.parse(e);return(r-new Date(Date.UTC(1899,11,30)))/864e5}function o(e,t){for(var r={},n={s:{c:1e7,r:1e7},e:{c:0,r:0}},o=0;o!=e.length;++o)for(var s=0;s!=e[o].length;++s){n.s.r>o&&(n.s.r=o),n.s.c>s&&(n.s.c=s),n.e.r<o&&(n.e.r=o),n.e.c<s&&(n.e.c=s);var i={v:e[o][s]};if(null!=i.v){var c=XLSX.utils.encode_cell({c:s,r:o});"number"===typeof i.v?i.t="n":"boolean"===typeof i.v?i.t="b":i.v instanceof Date?(i.t="n",i.z=XLSX.SSF._table[14],i.v=a(i.v)):i.t="s",r[c]=i}}return n.s.c<1e7&&(r["!ref"]=XLSX.utils.encode_range(n)),r}function s(){if(!(this instanceof s))return new s;this.SheetNames=[],this.Sheets={}}function i(e){for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n!=e.length;++n)r[n]=255&e.charCodeAt(n);return t}function c(e){var t=document.getElementById(e);console.log("a");var r=n(t),a=r[1],c=r[0],l="SheetJS";console.log(c);var u=new s,d=o(c);d["!merges"]=a,u.SheetNames.push(l),u.Sheets[l]=d;var f=XLSX.write(u,{bookType:"xlsx",bookSST:!1,type:"binary"});saveAs(new Blob([i(f)],{type:"application/octet-stream"}),"test.xlsx")}function l(e,t,r){var n=t;n.unshift(e);var a="SheetJS",c=new s,l=o(n);c.SheetNames.push(a),c.Sheets[a]=l;var u=XLSX.write(c,{bookType:"xlsx",bookSST:!1,type:"binary"}),d=r||"列表";saveAs(new Blob([i(u)],{type:"application/octet-stream"}),d+".xlsx")}r("0fd4"),r("91aa"),r("1447")}});
//# sourceMappingURL=index.9bdc5042.js.map