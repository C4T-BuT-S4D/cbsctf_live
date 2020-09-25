(function(t){function e(e){for(var n,o,i=e[0],u=e[1],c=e[2],p=0,m=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/cbsctf_live/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},cd49:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("router-view")},s=[],o=r("2877"),i={},u=Object(o["a"])(i,a,s,!1,null,null,null),c=u.exports,l=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("vue-telegram-login",{attrs:{mode:"redirect","redirect-url":t.url,"telegram-login":"cbsctf_regbot",userpic:!0,requestAccess:"write"}}),r("div",[r("p",[t._v("My registration:")]),r("p",[t._v(t._s(t.registration))])]),r("div",[r("button",{staticClass:"unregister",attrs:{type:"button"},on:{click:t.unregister}},[t._v("Unregister")])]),r("div",[r("p",[t._v("Registration form")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.teamName,expression:"teamName"}],attrs:{type:"text",placeholder:"Team Name"},domProps:{value:t.teamName},on:{input:function(e){e.target.composing||(t.teamName=e.target.value)}}}),r("button",{staticClass:"register",attrs:{type:"button"},on:{click:t.register}},[t._v("Register")])]),r("div",[r("p",[t._v("Join by token form")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.joinToken,expression:"joinToken"}],attrs:{type:"text",placeholder:"Join token"},domProps:{value:t.joinToken},on:{input:function(e){e.target.composing||(t.joinToken=e.target.value)}}}),r("button",{staticClass:"join",attrs:{type:"button"},on:{click:t.joinTeam}},[t._v("Join")])]),r("div",[r("p",[t._v("User status")]),r("p",[t._v(t._s(t.status))])]),r("div",[r("p",[t._v("Game state form (if user role is admin)")]),r("label",[t._v("Select status")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.gameStatus,expression:"gameStatus"}],attrs:{id:"state-select"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.gameStatus=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"0"}},[t._v("Not started")]),r("option",{attrs:{value:"1"}},[t._v("Registration open")]),r("option",{attrs:{value:"2"}},[t._v("Registration closed")]),r("option",{attrs:{value:"4"}},[t._v("Game started")]),r("option",{attrs:{value:"5"}},[t._v("Game finished")])]),r("button",{staticClass:"set-game-state",attrs:{type:"button"},on:{click:t.setGameState}},[t._v("Set game state")])])],1)},m=[],f=(r("d3b7"),r("25f0"),r("5530")),h=(r("96cf"),r("1da1")),g=r("d226"),v=r("2f62"),d={components:{vueTelegramLogin:g["vueTelegramLogin"]},data:function(){return{teamName:"",joinToken:"",gameStatus:"",url:""}},created:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.url=(window.location.pathname+"/tg").replaceAll("//","/");case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.refreshAll();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:Object(f["a"])({register:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post("/registrations/",{team_name:this.teamName});case 2:return t.next=4,this.refreshAll();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),unregister:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.delete("/registrations/");case 2:return t.next=4,this.refreshAll();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),joinTeam:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post("/registrations/join/",{join_token:this.joinToken});case 2:return t.next=4,this.refreshAll();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),setGameState:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post("/admin/state/",{status:+this.gameStatus});case 2:return t.next=4,this.refreshAll();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),refreshAll:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.updateRegistration();case 2:return t.next=4,this.updateStatus();case 4:this.gameStatus=this.status.status.toString();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},Object(v["b"])(["updateRegistration","updateStatus"])),computed:Object(f["a"])({},Object(v["c"])({registration:"getRegistration",status:"getStatus"}))},b=d,w=Object(o["a"])(b,p,m,!1,null,null,null),_=w.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("123")])},x=[],j={created:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e,r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Called created!"),console.log(this.$route.query),e=this.$route.query,e["id"]=parseInt(e["id"]),e["auth_date"]=parseInt(e["auth_date"]),t.next=7,this.$http.post("/telegram/callback/",e);case 7:r=t.sent,n=r.data,console.log("Got server response"),console.log(n),a=n.token,localStorage["access_token"]=a,this.$router.push({name:"index"});case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},k=j,R=Object(o["a"])(k,y,x,!1,null,null,null),O=R.exports;n["a"].use(l["a"]);var S=[{path:"/",name:"index",component:_},{path:"/tg",name:"telegram",component:O}],T=new l["a"]({mode:"history",base:"/cbsctf_live/",routes:S}),$=T,N=r("bc3a"),A=r.n(N);n["a"].use(v["a"]);var P=new v["a"].Store({state:{registration:null,status:null},mutations:{setRegistration:function(t,e){t.registration=e},setStatus:function(t,e){t.status=e}},actions:{updateRegistration:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.a.get("/registrations/");case 3:r=t.sent,n=r.data,e.commit("setRegistration",n),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.commit("setRegistration",null);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}(),updateStatus:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,A.a.get("/status/");case 2:r=t.sent,n=r.data,console.log("Status response:",n),e.commit("setStatus",n);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},getters:{getRegistration:function(t){return t.registration},getStatus:function(t){return t.status}},modules:{}}),G="https://mighty-tundra-69044.herokuapp.com/";n["a"].config.productionTip=!1,A.a.defaults.baseURL=G,A.a.interceptors.request.use((function(t){var e=localStorage["access_token"];return t.headers.Authorization="Token "+e,t})),n["a"].prototype.$http=A.a,new n["a"]({router:$,store:P,render:function(t){return t(c)}}).$mount("#app")}});
//# sourceMappingURL=app.7dde7d8b.js.map