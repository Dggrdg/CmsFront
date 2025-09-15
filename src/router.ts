import { createWebHistory, createRouter } from 'vue-router'

import JsonCheck from '@/view/JsonCheck.vue'

const routes = [
    { path: '/', component: JsonCheck },
    { path: '/jsonCheck', component: JsonCheck },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router