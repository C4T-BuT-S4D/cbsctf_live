import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Index from '@/pages/Index.vue';
import Telegram from '@/pages/Telegram.vue';
import Terminal from '@/pages/Terminal.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'index',
        component: Index,
    },

    {
        path: '/tg',
        name: 'telegram',
        component: Telegram,
    },

    {
        path: '/term',
        name: 'terminal',
        component: Terminal,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
