import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import { regApiURL } from "@/config";

Vue.config.productionTip = false;

axios.defaults.baseURL = regApiURL;
axios.defaults.headers.common["Authorization"] =
    "Token " + store.getters.getAccessToken;

Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
