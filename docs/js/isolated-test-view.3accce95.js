(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["isolated-test-view"],{eb03:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("v-btn",{staticClass:"ml-2",attrs:{color:"primary",small:""},on:{click:function(n){e.hidePane2=!e.hidePane2}}},[e._v("Hide pane 2")]),t("v-btn",{staticClass:"ml-2",attrs:{color:"primary",small:""},on:{click:function(n){e.hidePane4=!e.hidePane4}}},[e._v("Hide pane 4")]),t("splitpanes",{staticClass:"default-theme example",staticStyle:{height:"400px"},on:{"pane-removed":function(n){return e.log("pane-removed",n)},"pane-added":function(n){return e.log("pane-added",n)},resized:function(n){return e.log("resized",n)}}},[t("pane",{attrs:{size:"85"}},[t("span",[e._v("1")])]),e.hidePane2?e._e():t("pane",{attrs:{size:"15"}},[t("span",[e._v("2")])])],1)],1)},s=[],i=t("1b4a"),o=(new Date,{components:{Splitpanes:i["b"],Pane:i["a"]},data:function(){return{horizontal:!0,hidePane2:!1,hidePane4:!1,panesNumber:3}},methods:{log:function(e,n){console.log(e,n)}},computed:{panesNumberAbs:function(){return this.panesNumber<0&&(this.panesNumber=0),this.panesNumber}}}),r=o,l=t("2877"),p=Object(l["a"])(r,a,s,!1,null,null,null);n["default"]=p.exports}}]);
//# sourceMappingURL=isolated-test-view.3accce95.js.map