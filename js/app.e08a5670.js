(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],l=0,g=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&g.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(g.length)g.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/cbsctf_live/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("vue-telegram-login",{attrs:{mode:"callback","telegram-login":"cbsctf_regbot",userpic:"true",requestAccess:"write"},on:{callback:e.telegramAuth}}),r("div",[e._v("My registration:")]),r("div",[e._v(e._s(e.registration))]),r("button",{staticClass:"unregister",attrs:{type:"button"},on:{click:e.unregister}},[e._v(" Unregister ")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.teamName,expression:"teamName"}],attrs:{type:"text",placeholder:"Team Name"},domProps:{value:e.teamName},on:{input:function(t){t.target.composing||(e.teamName=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Team Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("button",{staticClass:"register",attrs:{type:"button"},on:{click:e.register}},[e._v(" Register ")])])],1)},o=[],s=(r("96cf"),r("1da1")),i=r("5530"),c=r("d226"),u=r("2f62"),p={components:{vueTelegramLogin:c["vueTelegramLogin"]},data:function(){return{teamName:"",password:""}},methods:Object(i["a"])({telegramAuth:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Called the callback"),console.log(t),e.next=4,this.$http.post("/telegram/callback/",t);case 4:r=e.sent,n=r.data,console.log("Got server response"),console.log(n),a=n.token,this.setAccessToken(a),this.updateRegistration();case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),register:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("/registrations/",{team_name:this.teamName,password:this.password});case 2:this.updateRegistration();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),unregister:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.delete("/registrations/");case 2:this.updateRegistration();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},Object(u["b"])(["setAccessToken","updateRegistration"])),computed:Object(i["a"])({},Object(u["c"])({registration:"getRegistration"}))},l=p,g=r("2877"),f=Object(g["a"])(l,a,o,!1,null,null,null),d=f.exports,m=r("8c4f");n["a"].use(m["a"]);var h=[],v=new m["a"]({mode:"history",base:"/cbsctf_live/",routes:h}),b=v,w=r("bc3a"),y=r.n(w);n["a"].use(u["a"]);var k=new u["a"].Store({state:{accessToken:"",registration:null},mutations:{setAccessToken:function(e,t){e.accessToken=t},setRegistration:function(e,t){e.registration=t}},actions:{setAccessToken:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit("setAccessToken",r),e.next=3,t.dispatch("fetchUser");case 3:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),updateRegistration:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/registrations/");case 2:r=e.sent,n=r.data,console.log("User registration:",n),t.commit("setRegistration",n);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},getters:{getAccessToken:function(e){return e.accessToken},getRegistration:function(e){return e.registration}},modules:{}}),O="http://127.0.0.1:8000";n["a"].config.productionTip=!1,y.a.defaults.baseURL=O,y.a.interceptors.request.use((function(e){var t=k.getters.getAccessToken;return e.headers.Authorization="Token "+t,e})),n["a"].prototype.$http=y.a,new n["a"]({router:b,store:k,render:function(e){return e(d)}}).$mount("#app")}});
//# sourceMappingURL=app.e08a5670.js.map