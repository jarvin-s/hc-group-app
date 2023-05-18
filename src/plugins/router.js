import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/repos',
        name: 'repos',
        component: () => import('@/views/Repos.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router