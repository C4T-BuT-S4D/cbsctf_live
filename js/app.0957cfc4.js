(function(t){function e(e){for(var r,o,i=e[0],u=e[1],c=e[2],l=0,m=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/cbsctf_live/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0565":function(t,e,n){"use strict";var r=n("fd19"),a=n.n(r);a.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},s=[],o=n("2877"),i={},u=Object(o["a"])(i,a,s,!1,null,null,null),c=u.exports,p=n("8c4f"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("123")])},m=[],h=(n("96cf"),n("1da1")),d={created:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e,n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("Called created!"),console.log(this.$route.query),e=this.$route.query,e["id"]=parseInt(e["id"]),e["auth_date"]=parseInt(e["auth_date"]),t.next=7,this.$http.post("/telegram/callback/",e);case 7:n=t.sent,r=n.data,console.log("Got server response"),console.log(r),a=r.token,localStorage["access_token"]=a,this.$router.push({name:"index"});case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},g=d,f=Object(o["a"])(g,l,m,!1,null,null,null),v=f.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"terminal"},[n("div",{staticClass:"command-list"},t._l(t.history,(function(e,r){return n("div",{key:r,staticClass:"command"},[!0===e.isCommand?n("span",{staticClass:"prompt"},[t._v(t._s(t.prompt))]):n("span",{staticClass:"fake-prompt"}),!0===e.isCommand?n("form",{staticClass:"user-input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.history[r].command,expression:"history[index].command"}],staticClass:"user-input",attrs:{type:"text",disabled:""},domProps:{value:t.history[r].command},on:{input:function(e){e.target.composing||t.$set(t.history[r],"command",e.target.value)}}})]):"tg"===e.isCommand?n("div",{staticClass:"tg"},[n("vue-telegram-login",{attrs:{mode:"redirect","redirect-url":t.url,"telegram-login":"cbsctf_regbot",userpic:!0,requestAccess:"write"}})],1):"upload_configs"===e.isCommand?n("form",{attrs:{action:t.regApiURL+"/admin/configs/",method:"post",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.sendConfigFile(e)}}},[n("input",{attrs:{type:"file",name:"dump"}}),n("input",{staticClass:"upload",attrs:{type:"submit",value:"Upload",name:"submit"}})]):"upload_tokens"===e.isCommand?n("form",{attrs:{action:t.regApiURL+"/admin/tokens/",method:"post",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.sendTokensFile(e)}}},[n("input",{attrs:{type:"file",name:"tokens"}}),n("input",{staticClass:"upload",attrs:{type:"submit",value:"Upload",name:"submit"}})]):"err"===e.isCommand?n("div",{staticClass:"error"},[t._v(" "+t._s(e.command)+" ")]):n("pre",{staticClass:"output",domProps:{innerHTML:t._s(e.command)}})])})),0),n("div",{staticClass:"command-input"},[n("span",{staticClass:"prompt"},[t._v(t._s(t.prompt))]),n("form",{staticClass:"user-input-wrapper",on:{submit:function(e){return e.preventDefault(),t.enterCommand(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.command,expression:"command"}],ref:"input",staticClass:"user-input",attrs:{type:"text",maxlength:"44",placeholder:"Type help to get help"},domProps:{value:t.command},on:{input:function(e){e.target.composing||(t.command=e.target.value)}}})])])])},y=[],w=(n("99af"),n("caad"),n("fb6a"),n("ac1f"),n("2532"),n("1276"),n("2ca0"),n("2909")),k=n("b85c"),_=n("d226"),x="https://reg-api.cbsctf.live",C={components:{vueTelegramLogin:_["vueTelegramLogin"]},data:function(){return{regApiURL:x,history:[],prompt:"❯",command:"",commands:["help","auth","solo","register","show_reg","join","leave","get_status","set_status","list_reg","del_reg","yml","upload_config","upload_tokens","get_password","set_password"],url:"",admin:!1,suggestHistory:[],suggestPtr:-1,files:[]}},created:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.url=(window.location.pathname+"/tg").replaceAll("//","/"),t.next=3,this.$http.get("/state/");case 3:e=t.sent,n=e.data.game_role,this.admin="admin"===n;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){this.$refs.input.addEventListener("keydown",this.keydown)},beforeDestroy:function(){this.$refs.input.removeEventListener("keydown",this.keydown)},methods:{keydown:function(t){"ArrowUp"===t.key?(t.preventDefault(),this.suggestPtr>0&&(this.suggestPtr-=1),this.suggestPtr<this.suggestHistory.length&&(this.command=this.suggestHistory[this.suggestPtr])):"ArrowDown"===t.key?(t.preventDefault(),this.suggestPtr+1<this.suggestHistory.length&&(this.suggestPtr+=1),this.command=this.suggestHistory[this.suggestPtr]):"Tab"===t.key&&(t.preventDefault(),this.autocomplete())},autocomplete:function(){var t,e=0,n="",r=Object(k["a"])(this.commands);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.startsWith(this.command)&&(e+=1,n=a)}}catch(s){r.e(s)}finally{r.f()}1===e&&(this.command=n)},logCommand:function(t){this.history.unshift({command:t,isCommand:!0}),this.suggestHistory.push(t),this.suggestPtr=this.suggestHistory.length},logOutput:function(t){this.history.unshift({command:t,isCommand:!1})},logError:function(t){this.history.unshift({command:t,isCommand:"err"})},log:function(t,e){this.logCommand(t),this.logOutput(e)},logCmdError:function(t,e){this.logCommand(t),this.logError(e)},enterCommand:function(){var t=this.command.split(" "),e=t[0];this.commands.includes(e)?(this[e].apply(this,[this.command].concat(Object(w["a"])(t.slice(1)))),this.command=""):(this.log(e,"Unknown command"),this.command="")},help:function(t){var e="Type <b>auth</b> to authenticate with telegram\nType <b>solo</b> to register as solo player\nType <b>register (team_name)</b> to register team\nType <b>show_reg</b> to show your registration\nType <b>join (token)</b> to join team\nType <b>leave</b> to leave team\n  // If the captain leaves a team, it will be deleted\nType <b>get_password</b> to get archive password";this.admin&&(e+="\nType <b>get_status</b> to get status\nType <b>set_status (status)</b> to set status\nType <b>list_reg</b> to list registrations\nType <b>del_reg (user_id)</b> to delete registration\nType <b>yml</b> to get yaml dump\nType <b>upload_config</b> to upload config\nType <b>upload_tokens</b> to upload tokens\nType <b>set_password (password)</b> to set password"),this.log(t,e)},auth:function(t){this.logCommand(t),this.history.unshift({command:"roflan",isCommand:"tg"})},register:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0!==n){t.next=3;break}return this.log(e,"Missing argument: team_name"),t.abrupt("return");case 3:return t.prev=3,t.next=6,this.$http.post("/registrations/",{team_name:n});case 6:this.log(e,"OK"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](3),r=t.t0.response.data.error,this.logCmdError(e,r);case 13:case"end":return t.stop()}}),t,this,[[3,9]])})));function e(e,n){return t.apply(this,arguments)}return e}(),solo:function(t){this.log(t,"not implemented")},get_status:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/state/");case 2:n=t.sent,r=n.data.status,this.log(e,r);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),set_status:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0!==n){t.next=3;break}return this.log(e,"Missing argument: status"),t.abrupt("return");case 3:return t.prev=3,t.next=6,this.$http.post("/admin/state/",{status:n});case 6:this.log(e,"OK"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](3),r=t.t0.response.data.error,this.logCmdError(e,r);case 13:case"end":return t.stop()}}),t,this,[[3,9]])})));function e(e,n){return t.apply(this,arguments)}return e}(),leave:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.delete("/registrations/");case 3:this.log(e,"OK"),t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),n=t.t0.response.data.error,this.logCmdError(e,n);case 10:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(e){return t.apply(this,arguments)}return e}(),getTeamInfo:function(t){var e="Team name: ".concat(t.team_name,"\nTeam join token: ").concat(t.join_token,"\n");""===t.team_token?e+="Flag submission token: unavailable\n":e+="Flag submission token: ".concat(t.team_token,"\n"),t.config_exists?e+='Team VPN config: <a href="'.concat(x,"/download/config/?token=").concat(localStorage["access_token"],'" target="_blank">config</a>\n'):e+="Team VPN config: unavailable\n",e+="Members:";var n,r=Object(k["a"])(t.user_ids);try{for(r.s();!(n=r.n()).done;){var a=n.value;e+="\n - ".concat(a)}}catch(s){r.e(s)}finally{r.f()}return e},show_reg:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.get("/registrations/");case 3:n=t.sent,r=n.data,null===r?this.logCmdError(e,"not registered"):this.log(e,this.getTeamInfo(r)),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),a=t.t0.response.data.error,this.logCmdError(e,a);case 12:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}(),join:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0!==n){t.next=3;break}return this.log(e,"Missing argument: token"),t.abrupt("return");case 3:return t.prev=3,t.next=6,this.$http.post("/registrations/join/",{join_token:n});case 6:this.log(e,"OK"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](3),r=t.t0.response.data.error,this.logCmdError(e,r);case 13:case"end":return t.stop()}}),t,this,[[3,9]])})));function e(e,n){return t.apply(this,arguments)}return e}(),list_reg:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,s,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/registrations/list/");case 2:n=t.sent,r=n.data,a="",s=Object(k["a"])(r);try{for(s.s();!(o=s.n()).done;)i=o.value,a+="".concat(this.getTeamInfo(i),"\n\n")}catch(u){s.e(u)}finally{s.f()}this.log(e,a);case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),del_reg:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$http.post("/registrations/delete/",{user_id:n});case 3:this.log(e,"OK"),t.next=10;break;case 6:t.prev=6,t.t0=t["catch"](0),r=t.t0.response.data.error,this.logCmdError(e,r);case 10:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(e,n){return t.apply(this,arguments)}return e}(),yml:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/registrations/dump/");case 2:n=t.sent,r=n.data,this.log(e,r);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),upload_config:function(t){this.logCommand(t),this.history.unshift({command:"roflan",isCommand:"upload_configs"})},upload_tokens:function(t){this.logCommand(t),this.history.unshift({command:"roflan",isCommand:"upload_tokens"})},sendConfigFile:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.target.dump.files[0],void 0!==n){t.next=4;break}return this.logError("no file"),t.abrupt("return");case 4:return r=new FormData,r.append("dump",n),t.prev=6,t.next=9,this.$http.post("/admin/configs/",r,{headers:{"Content-Type":"multipart/form-data"}});case 9:this.logOutput("OK"),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](6),a=t.t0.response.data.error,this.logError(a);case 16:case"end":return t.stop()}}),t,this,[[6,12]])})));function e(e){return t.apply(this,arguments)}return e}(),sendTokensFile:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.target.tokens.files[0],void 0!==n){t.next=4;break}return this.logError("no file"),t.abrupt("return");case 4:return r=new FormData,r.append("tokens",n),t.prev=6,t.next=9,this.$http.post("/admin/tokens/",r,{headers:{"Content-Type":"multipart/form-data"}});case 9:this.logOutput("OK"),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](6),a=t.t0.response.data.error,this.logError(a);case 16:case"end":return t.stop()}}),t,this,[[6,12]])})));function e(e){return t.apply(this,arguments)}return e}(),get_password:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("/state/");case 2:n=t.sent,r=n.data.config_password,""===r?this.log(e,"not available"):this.log(e,r);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),set_password:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(void 0!==n){t.next=3;break}return this.log(e,"Missing argument: password"),t.abrupt("return");case 3:return t.prev=3,t.next=6,this.$http.post("/admin/config_password/",{config_password:n});case 6:this.log(e,"OK"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](3),r=t.t0.response.data.error,this.logCmdError(e,r);case 13:case"end":return t.stop()}}),t,this,[[3,9]])})));function e(e,n){return t.apply(this,arguments)}return e}()}},O=C,R=(n("0565"),n("df6d"),Object(o["a"])(O,b,y,!1,null,"272c2238",null)),j=R.exports;r["a"].use(p["a"]);var T=[{path:"/",name:"index",component:j},{path:"/tg",name:"telegram",component:v}],$=new p["a"]({mode:"history",base:"/cbsctf_live/",routes:T}),P=$,E=n("2f62"),S=n("bc3a"),D=n.n(S);r["a"].use(E["a"]);var M=new E["a"].Store({state:{registration:null,status:null},mutations:{setRegistration:function(t,e){t.registration=e},setStatus:function(t,e){t.status=e}},actions:{updateRegistration:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.a.get("/registrations/");case 3:n=t.sent,r=n.data,e.commit("setRegistration",r),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),e.commit("setRegistration",null);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));function e(e){return t.apply(this,arguments)}return e}(),updateStatus:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("/status/");case 2:n=t.sent,r=n.data,console.log("Status response:",r),e.commit("setStatus",r);case 6:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},getters:{getRegistration:function(t){return t.registration},getStatus:function(t){return t.status}},modules:{}}),L=n("8019"),A=n.n(L);r["a"].component("file-upload",A.a),r["a"].config.productionTip=!1,D.a.defaults.baseURL=x,D.a.interceptors.request.use((function(t){var e=localStorage["access_token"];return t.headers.Authorization="Token "+e,t})),r["a"].prototype.$http=D.a,new r["a"]({router:P,store:M,render:function(t){return t(c)}}).$mount("#app")},df6d:function(t,e,n){"use strict";var r=n("e95e"),a=n.n(r);a.a},e95e:function(t,e,n){},fd19:function(t,e,n){}});
//# sourceMappingURL=app.0957cfc4.js.map