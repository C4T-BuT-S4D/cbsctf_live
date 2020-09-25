(function(t){function e(e){for(var n,s,i=e[0],u=e[1],c=e[2],p=0,m=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&m.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/cbsctf_live/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-view")},o=[],s=r("2877"),i={},u=Object(s["a"])(i,a,o,!1,null,null,null),c=u.exports,l=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("vue-telegram-login",{attrs:{mode:"redirect","redirect-url":t.url,"telegram-login":"cbsctf_regbot",userpic:!0,requestAccess:"write"},on:{callback:t.telegramAuth}}),r("div",[r("p",[t._v("My registration:")]),r("p",[t._v(t._s(t.registration))])]),r("div",[r("button",{staticClass:"unregister",attrs:{type:"button"},on:{click:t.unregister}},[t._v("Unregister")])]),r("div",[r("p",[t._v("Registration form")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.teamName,expression:"teamName"}],attrs:{type:"text",placeholder:"Team Name"},domProps:{value:t.teamName},on:{input:function(e){e.target.composing||(t.teamName=e.target.value)}}}),r("button",{staticClass:"register",attrs:{type:"button"},on:{click:t.register}},[t._v("Register")])]),r("div",[r("p",[t._v("Join by token form")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.joinToken,expression:"joinToken"}],attrs:{type:"text",placeholder:"Join token"},domProps:{value:t.joinToken},on:{input:function(e){e.target.composing||(t.joinToken=e.target.value)}}}),r("button",{staticClass:"join",attrs:{type:"button"},on:{click:t.joinTeam}},[t._v("Join")])]),r("div",[r("p",[t._v("User status")]),r("p",[t._v(t._s(t.status))])]),r("div",[r("p",[t._v("Game state form (if user role is admin)")]),r("label",[t._v("Select status")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.gameStatus,expression:"gameStatus"}],attrs:{id:"state-select"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.gameStatus=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"0"}},[t._v("Not started")]),r("option",{attrs:{value:"1"}},[t._v("Registration open")]),r("option",{attrs:{value:"2"}},[t._v("Registration closed")]),r("option",{attrs:{value:"4"}},[t._v("Game started")]),r("option",{attrs:{value:"5"}},[t._v("Game finished")])]),r("button",{staticClass:"set-game-state",attrs:{type:"button"},on:{click:t.setGameState}},[t._v("Set game state")])])],1)},m=[],f=(r("d3b7"),r("25f0"),r("5530")),g=(r("96cf"),r("1da1")),h=r("d226"),v=r("2f62"),d={components:{vueTelegramLogin:h["vueTelegramLogin"]},data:function(){return{teamName:"",joinToken:"",gameStatus:"",url:""}},created:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.url=window.location.origin+"/telegram";case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.refreshAll();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:Object(f["a"])({telegramAuth:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Called the callback"),console.log(e),t.next=4,this.$http.post("/telegram/callback/",e);case 4:return r=t.sent,n=r.data,console.log("Got server response"),console.log(n),a=n.token,localStorage["access_token"]=a,t.next=12,this.refreshAll();case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),register:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post("/registrations/",{team_name:this.teamName});case 2:return t.next=4,this.refreshAll();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),unregister:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.delete("/registrations/");case 2:return t.next=4,this.refreshAll();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),joinTeam:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post("/registrations/join/",{join_token:this.joinToken});case 2:return t.next=4,this.refreshAll();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setGameState:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post("/admin/state/",{status:+this.gameStatus});case 2:return t.next=4,this.refreshAll();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),refreshAll:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.updateRegistration();case 2:return t.next=4,this.updateStatus();case 4:this.gameStatus=this.status.status.toString();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},Object(v["b"])(["updateRegistration","updateStatus"])),computed:Object(f["a"])({},Object(v["c"])({registration:"getRegistration",status:"getStatus"}))},b=d,w=Object(s["a"])(b,p,m,!1,null,null,null),x=w.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("123")])},_=[],j={created:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("Called created"),console.log(this.$route.query);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},k=j,R=Object(s["a"])(k,y,_,!1,null,null,null),O=R.exports;n["a"].use(l["a"]);var S=[{path:"/",name:"Index",component:x},{path:"/telegram",name:"Telegram",component:O}],T=new l["a"]({mode:"history",base:"/cbsctf_live/",routes:S}),A=T,N=r("bc3a"),$=r.n(N);n["a"].use(v["a"]);var P=new v["a"].Store({state:{registration:null,status:null},mutations:{setRegistration:function(t,e){t.registration=e},setStatus:function(t,e){t.status=e}},actions:{updateRegistration:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,$.a.get("/registrations/");case 3:r=t.sent,n=r.data,e.commit("setRegistration",n),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.commit("setRegistration",null);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}(),updateStatus:function(){var t=Object(g["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.a.get("/status/");case 2:r=t.sent,n=r.data,console.log("Status response:",n),e.commit("setStatus",n);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},getters:{getRegistration:function(t){return t.registration},getStatus:function(t){return t.status}},modules:{}}),C="https://mighty-tundra-69044.herokuapp.com/";n["a"].config.productionTip=!1,$.a.defaults.baseURL=C,$.a.interceptors.request.use((function(t){var e=localStorage["access_token"];return t.headers.Authorization="Token "+e,t})),n["a"].prototype.$http=$.a,new n["a"]({router:A,store:P,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.a5aa9aa9.js.map