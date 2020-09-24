import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        accessToken: "",
    },
    mutations: {
        setAccessToken(state, accessToken) {
            state.accessToken = accessToken;
        },
    },
    actions: {
        setAccessToken(context, accessToken) {
            console.log("setting access token to", accessToken);
            context.commit("setAccessToken", accessToken);
        },
    },
    modules: {},
});
