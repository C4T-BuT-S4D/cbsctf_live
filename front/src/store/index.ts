import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        accessToken: "",
        registration: null,
    },
    mutations: {
        setAccessToken(state, accessToken) {
            state.accessToken = accessToken;
        },
        setRegistration(state, registration) {
            state.registration = registration;
        },
    },
    actions: {
        setAccessToken: async function (context, accessToken) {
            context.commit("setAccessToken", accessToken);
            await context.dispatch("fetchUser");
        },
        fetchRegistration: async function (context) {
            const { data } = await axios.get("/registrations/");
            console.log("User registration:", data);
            context.commit("setRegistration", data);
        },
    },
    getters: {
        getAccessToken(state) {
            return state.accessToken;
        },
        getRegistration(state) {
            return state.registration;
        },
    },
    modules: {},
});
