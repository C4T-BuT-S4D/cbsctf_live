import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import { regApiURL } from "@/config";

import VueUploadComponent from 'vue-upload-component';

Vue.component('file-upload', VueUploadComponent)

Vue.config.productionTip = false;

axios.defaults.baseURL = regApiURL;
axios.interceptors.request.use(function (config) {
    const token = localStorage["access_token"];
    config.headers.Authorization = "Token " + token;

    return config;
});

Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
