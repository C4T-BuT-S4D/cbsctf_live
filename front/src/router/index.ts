import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Telegram from '@/pages/Telegram.vue';
import Terminal from '@/pages/Index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'index',
        component: Terminal,
    },

    {
        path: '/tg',
        name: 'telegram',
        component: Telegram,
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
