import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        accessToken: "",
        registration: null,
        status: null,
    },
    mutations: {
        setAccessToken(state, accessToken) {
            state.accessToken = accessToken;
        },
        setRegistration(state, registration) {
            state.registration = registration;
        },
        setStatus(state, status) {
            state.status = status;
        },
    },
    actions: {
        setAccessToken: async function (context, accessToken) {
            context.commit("setAccessToken", accessToken);
            await context.dispatch("fetchUser");
        },
        updateRegistration: async function (context) {
            const { data } = await axios.get("/registrations/");
            console.log("User registration:", data);
            context.commit("setRegistration", data);
        },
        updateStatus: async function (context) {
            const { data } = await axios.get("/status/");
            console.log("Status response:", data);
            context.commit("setStatus", data);
        },
    },
    getters: {
        getAccessToken(state) {
            return state.accessToken;
        },
        getRegistration(state) {
            return state.registration;
        },
        getStatus(state) {
            return state.status;
        },
    },
    modules: {},
});
