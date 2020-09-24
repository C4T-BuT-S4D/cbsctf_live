import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        accessToken: "",
        user: null,
    },
    mutations: {
        setAccessToken(state, accessToken) {
            state.accessToken = accessToken;
        },
        setUser(state, user) {
            state.user = user;
        },
    },
    actions: {
        setAccessToken: async function (context, accessToken) {
            context.commit("setAccessToken", accessToken);
            await context.dispatch("fetchUser");
        },
        fetchUser: async function (context) {
            const { data } = await axios.get("/registrations/");
            console.log("User data:", data);
            context.commit("setUser", data);
        },
    },
    getters: {
        getUser(state) {
            return state.user;
        },
    },
    modules: {},
});
