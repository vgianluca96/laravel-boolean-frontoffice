import { createRouter, createWebHistory } from "vue-router";

import HomeView from './views/HomeView.vue';
import ShowCocktail from './views/ShowCocktail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: `/show/:id`,
            name: 'show',
            component: ShowCocktail
        },
    ]
});

export { router };