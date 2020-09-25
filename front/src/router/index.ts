import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Index from '@/pages/Index.vue';
import Telegram from '@/pages/Telegram.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    },

    {
        path: '/tg',
        name: 'Telegram',
        component: Telegram,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
