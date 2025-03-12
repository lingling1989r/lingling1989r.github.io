import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/reference',
    component: () => import('../views/Reference.vue')
  },
  {
    path: '/gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/pricing',
    component: () => import('../views/Pricing.vue')
  },
  {
    path: '/profile',
    component: () => import('../views/Profile.vue')
  },
  // 添加 404 路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory('/ai-photo-studio/'),  // 添加基础路径
  routes
})

export default router