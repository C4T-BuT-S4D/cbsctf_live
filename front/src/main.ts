import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import { regApiURL } from "@/config";

Vue.config.productionTip = false;

axios.defaults.baseURL = regApiURL;
axios.interceptors.request.use(function (config) {
    const token = store.getters.getAccessToken;
    config.headers.Authorization = "Token " + token;

    return config;
});

Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
