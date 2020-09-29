import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        registration: null,
        status: null,
    },

    mutations: {
        setRegistration(state, registration) {
            state.registration = registration;
        },

        setStatus(state, status) {
            state.status = status;
        },
    },

    actions: {
        updateRegistration: async function (context) {
            try {
                const { data } = await axios.get('/registrations/');
                context.commit('setRegistration', data);
            } catch (e) {
                context.commit('setRegistration', null);
            }
        },

        updateStatus: async function (context) {
            const { data } = await axios.get('/status/');
            console.log('Status response:', data);
            context.commit('setStatus', data);
        },
    },
    getters: {
        getRegistration(state) {
            return state.registration;
        },

        getStatus(state) {
            return state.status;
        },
    },

    modules: {},
});
