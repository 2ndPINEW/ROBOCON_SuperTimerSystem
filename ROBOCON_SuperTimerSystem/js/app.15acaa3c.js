(function(t){function e(e){for(var i,r,c=e[0],l=e[1],o=e[2],m=0,h=[];m<c.length;m++)r=c[m],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,o||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,c=1;c<s.length;c++){var l=s[c];0!==n[l]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={app:0},a=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0ecc":function(t,e,s){"use strict";var i=s("b114"),n=s.n(i);n.a},"28e6":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-app-bar",{attrs:{app:""}},[s("v-btn",{attrs:{text:""},on:{click:t.toHome}},[s("v-toolbar-title",{staticClass:"headline text-uppercase"},[s("span",[t._v("Super")]),s("span",{staticClass:"font-weight-light"},[t._v("TimerSystem")])])],1),s("v-spacer"),s("v-btn",{attrs:{text:"",href:"https://twitter.com/2ndpinew",target:"_blank"}},[s("span",{staticClass:"mr-2"},[t._v("Contact")])])],1),s("v-content",[s("router-view")],1)],1)},a=[],r={name:"App",methods:{toHome:function(){this.$router.push("/")}},components:{},data:()=>({})},c=r,l=s("2877"),o=s("6544"),u=s.n(o),m=s("7496"),h=s("40dc"),p=s("8336"),d=s("a75b"),v=s("2fa4"),_=s("2a7f"),f=Object(l["a"])(c,n,a,!1,null,null,null),b=f.exports;u()(f,{VApp:m["a"],VAppBar:h["a"],VBtn:p["a"],VContent:d["a"],VSpacer:v["a"],VToolbarTitle:_["a"]});var y=s("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{"text-center":"",wrap:""}},[s("v-flex",{attrs:{"mt-4":""}},[s("h1",{staticClass:"display-1"},[t._v("\n        すうぱあたいまあしすてむ(ロボケンversion)\n      ")]),s("p"),s("br"),s("p",{staticClass:"title"},[t._v("ロボコンの競技時間の表示と時間の読み上げを行います.")]),s("p",{staticClass:"title red ma-4"},[t._v(t._s(t.error_message))]),s("br"),s("v-btn",{attrs:{text:"",href:"./#/setting"}},[s("span",{staticClass:"title"},[t._v("設定画面へ")])]),s("p",[t._v("※PCオンリーです")])],1)],1)},O=[],g=s("a78e"),S=s.n(g),C={data(){return{error_message:""}},created:function(){S.a.set("check","true"),"true"==S.a.get("check")?this.error_message="":this.error_message="設定の保存にCookieを使用するため有効にしてください。"}},x=C,k=s("0e8f"),N=s("a722"),T=Object(l["a"])(x,w,O,!1,null,null,null),j=T.exports;u()(T,{VBtn:p["a"],VFlex:k["a"],VLayout:N["a"]});var B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"timer"}},[s("v-container",[s("div",{staticClass:"display-4 ma-4"},[t._v("競技時間"+t._s(t.message))]),s("v-card",{staticClass:"ma-4 text-center"},[s("div",{staticClass:"time font-weight-bold"},[t._v(t._s(t.formatTime))])]),s("div",{staticClass:"tool text-right ma-4"},[s("v-btn",{staticClass:"ma-2",on:{click:t.start_retly}},[t._v("リトライ")]),t.timerOn?t._e():s("v-btn",{staticClass:"ma-2",on:{click:t.start}},[t._v("スタート")]),t.timerOn?s("v-btn",{staticClass:"ma-2",on:{click:t.stop}},[t._v("一時停止")]):t._e(),s("v-btn",{staticClass:"ma-2",on:{click:t.toNextTimer}},[t._v("準備画面へ")]),s("v-btn",{staticClass:"ma-2",on:{click:t.toSetting}},[t._v("設定画面へ")])],1)],1),s("audio",{attrs:{id:"end_sound",src:"https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/buttle_end.wav"}}),s("audio",{attrs:{id:"retly_end",src:"https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/retly_end.wav"}}),s("audio",{attrs:{id:"retly_start",src:"https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/retly_start.wav"}}),s("audio",{attrs:{id:"retly_error",src:"https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/retly_error.wav"}}),s("audio",{attrs:{id:"30",src:"https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/30.wav"}}),s("audio",{attrs:{id:"60",src:"https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/60.wav"}}),s("audio",{attrs:{id:"90",src:"https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/90.wav"}}),s("audio",{attrs:{id:"120",src:"https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/120.wav"}})],1)},V=[],I={created:function(){var t=Number(S.a.get("buttle_min")),e=Number(S.a.get("buttle_sec"));this.min=t,this.sec=e},data(){return{min:0,sec:0,message:"",retly_sec:null,retlying:!1,timerOn:!1,timerObj:null,retly_timerObj:null,tineComplete:!1}},methods:{playEndSound:function(){var t=document.getElementById("end_sound");t.play()},playSound:function(t){var e=document.getElementById(t);e.play()},start_retly:function(){if(!this.retlying)if(this.retly_sec=Number(S.a.get("retly_sec")),this.retly_sec>this.sec)this.playSound("retly_error");else{this.message="(リトライ中)",this.retlying=!0;let t=this;this.playSound("retly_start"),this.retly_timerObj=setInterval((function(){t.count_retly()}),1e3)}},count_retly:function(){this.retly_sec--,this.retly_sec<=0&&(clearInterval(this.retly_timerObj),this.playSound("retly_end"),this.retlying=!1,this.message="")},toSetting:function(){clearInterval(this.timerObj),this.min=Number(S.a.get("buttle_min")),this.sec=Number(S.a.get("buttle_sec")),this.$router.push("/setting")},toNextTimer:function(){clearInterval(this.timerObj),this.min=Number(S.a.get("buttle_min")),this.sec=Number(S.a.get("buttle_sec")),this.$router.push("/waittimer")},count:function(){this.sec<=0&&this.min>=1?(this.min--,this.sec=59):this.sec<=0&&this.min<=0?(this.sleep(1100),this.min=Number(S.a.get("buttle_min")),this.sec=Number(S.a.get("buttle_sec")),this.complete()):(this.sec--,this.sec<=0&&this.min<=0&&this.playEndSound(),30==this.totalSec&&this.playSound("30"),60==this.totalSec&&this.playSound("60"),90==this.totalSec&&this.playSound("90"),120==this.totalSec&&this.playSound("120"))},start:function(){let t=this;this.timerObj=setInterval((function(){t.count()}),1e3),this.timerOn=!0},stop:function(){clearInterval(this.timerObj),this.timerOn=!1},complete:function(){clearInterval(this.timerObj),this.toNextTimer()},sleep:function(t){var e=new Date;while(new Date-e<t);}},computed:{formatTime:function(){let t=[this.min.toString(),this.sec.toString()].map((function(t){return t.length<2?"0"+t:t}));return this.retlying?this.retly_sec.length<2?"0"+this.retly_sec:this.retly_sec:t[0]+":"+t[1]},totalSec:function(){var t=this.sec+60*this.min;return t}}},E=I,R=(s("0ecc"),s("b0af")),$=s("a523"),q=Object(l["a"])(E,B,V,!1,null,"237a0b80",null),P=q.exports;u()(q,{VBtn:p["a"],VCard:R["a"],VContainer:$["a"]});var D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"timer"}},[s("v-container",[s("div",{staticClass:"display-4 ma-4"},[t._v("準備時間")]),s("v-card",{staticClass:"ma-4 text-center"},[s("div",{staticClass:"time font-weight-bold"},[t._v(t._s(t.formatTime))])]),s("div",{staticClass:"tool text-right ma-4"},[t.timerOn?t._e():s("v-btn",{staticClass:"ma-2",on:{click:t.start}},[t._v("スタート")]),t.timerOn?s("v-btn",{staticClass:"ma-2",on:{click:t.stop}},[t._v("一時停止")]):t._e(),s("v-btn",{staticClass:"ma-2",on:{click:t.toNextTimer}},[t._v("競技画面へ")]),s("v-btn",{staticClass:"ma-2",on:{click:t.toSetting}},[t._v("設定画面へ")])],1)],1),s("audio",{attrs:{id:"end_sound",src:"https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/wait_end.wav"}}),s("audio",{attrs:{id:"30",src:"https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/30.wav"}}),s("audio",{attrs:{id:"60",src:"https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/60.wav"}}),s("audio",{attrs:{id:"120",src:"https://2ndpinew.site/work/ROBOCON_SuperTimerSystem/assets/120.wav"}})],1)},M=[],A={created:function(){this.min=Number(S.a.get("wait_min")),this.sec=Number(S.a.get("wait_sec"))},data(){return{min:0,sec:0,timerOn:!1,timerObj:null,tineComplete:!1}},methods:{playEndSound:function(){var t=document.getElementById("end_sound");t.play()},playSound:function(t){var e=document.getElementById(t);e.play()},toSetting:function(){clearInterval(this.timerObj),this.min=Number(S.a.get("wait_min")),this.sec=Number(S.a.get("wait_sec")),this.$router.push("/setting")},toNextTimer:function(){clearInterval(this.timerObj),this.min=Number(S.a.get("wait_min")),this.sec=Number(S.a.get("wait_sec")),this.$router.push("/buttletimer")},count:function(){this.sec<=0&&this.min>=1?(this.min--,this.sec=59):this.sec<=0&&this.min<=0?(this.sleep(1100),this.min=Number(S.a.get("wait_min")),this.sec=Number(S.a.get("wait_sec")),this.complete()):(this.sec--,this.sec<=0&&this.min<=0&&this.playEndSound(),30==this.totalSec&&this.playSound("30"))},start:function(){let t=this;this.timerObj=setInterval((function(){t.count()}),1e3),this.timerOn=!0},stop:function(){clearInterval(this.timerObj),this.timerOn=!1},complete:function(){clearInterval(this.timerObj),this.toNextTimer()},sleep:function(t){var e=new Date;while(new Date-e<t);}},computed:{formatTime:function(){let t=[this.min.toString(),this.sec.toString()].map((function(t){return t.length<2?"0"+t:t}));return t[0]+":"+t[1]},totalSec:function(){var t=this.sec+60*this.min;return t}}},F=A,H=(s("5935"),Object(l["a"])(F,D,M,!1,null,"5774085e",null)),J=H.exports;u()(H,{VBtn:p["a"],VCard:R["a"],VContainer:$["a"]});var W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-card",{staticClass:"ma-4 d-xs-8"},[s("v-card-title",[t._v(" 準備時間")]),s("v-row",[s("v-col",[s("v-text-field",{staticClass:"ma-4",attrs:{label:"分",value:""},model:{value:t.speach_min,callback:function(e){t.speach_min=e},expression:"speach_min"}})],1),s("v-col",[s("v-text-field",{staticClass:"ma-4",attrs:{label:"秒",value:""},model:{value:t.speach_sec,callback:function(e){t.speach_sec=e},expression:"speach_sec"}})],1)],1)],1),s("v-card",{staticClass:"ma-4"},[s("v-card-title",[t._v(" 試合時間")]),s("v-row",[s("v-col",[s("v-text-field",{staticClass:"ma-4",attrs:{label:"分",value:""},model:{value:t.question_min,callback:function(e){t.question_min=e},expression:"question_min"}})],1),s("v-col",[s("v-text-field",{staticClass:"ma-4",attrs:{label:"秒",value:""},model:{value:t.question_sec,callback:function(e){t.question_sec=e},expression:"question_sec"}})],1)],1)],1),s("v-card",{staticClass:"ma-4"},[s("v-card-title",[t._v(" リトライペナルティ時間")]),s("v-row",[s("v-col",[s("v-text-field",{staticClass:"ma-4",attrs:{label:"秒",value:""},model:{value:t.retly_sec,callback:function(e){t.retly_sec=e},expression:"retly_sec"}})],1)],1)],1),s("div",{staticClass:"text-right"},[s("v-btn",{staticClass:"mx-4 mb-4",on:{click:t.toTimer}},[t._v("タイマー画面へ\n        ")])],1)],1)},L=[],z={data:function(){return{speach_min:"1",speach_sec:"00",question_min:"2",question_sec:"30",retly_sec:"15"}},methods:{toTimer:function(){S.a.set("wait_min",this.speach_min),S.a.set("wait_sec",this.speach_sec),S.a.set("buttle_min",this.question_min),S.a.set("buttle_sec",this.question_sec),S.a.set("retly_sec",this.retly_sec),this.$router.push({path:"/waittimer"})}}},G=z,K=s("99d9"),Q=s("62ad"),U=s("0fd9"),X=s("8654"),Y=Object(l["a"])(G,W,L,!1,null,null,null),Z=Y.exports;u()(Y,{VBtn:p["a"],VCard:R["a"],VCardTitle:K["a"],VCol:Q["a"],VContainer:$["a"],VRow:U["a"],VTextField:X["a"]}),i["a"].use(y["a"]);var tt=new y["a"]({routes:[{path:"/",name:"home",component:j},{path:"/ButtleTimer",name:"buttlrtimer",component:P},{path:"/WaitTimer",name:"Waittimer",component:J},{path:"/Setting",name:"setting",component:Z}]}),et=s("f309");i["a"].use(et["a"]);var st=new et["a"]({icons:{iconfont:"mdi"}});i["a"].config.productionTip=!1,new i["a"]({router:tt,vuetify:st,render:t=>t(b)}).$mount("#app")},5935:function(t,e,s){"use strict";var i=s("28e6"),n=s.n(i);n.a},b114:function(t,e,s){}});
//# sourceMappingURL=app.15acaa3c.js.map