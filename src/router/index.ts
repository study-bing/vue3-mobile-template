import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from '@/utils/progress'
import { toRouteType } from './types'

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('../views/login/LoginPage.vue'),
    },
    {
        path: '/',
        component: () => import('@/layout/Index.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior: () => ({ left: 0, top: 0 }),
})
router.addRoute({
    path: '/:pathMatch(.*)',
    redirect: '/404',
})
router.beforeEach((to: toRouteType, _from, next) => {
    NProgress.start()
    next()
})
router.afterEach(() => {
    NProgress.done()
})
export default router
