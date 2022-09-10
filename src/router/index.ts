import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import FirstPage from '../views/FirstPage.vue'
import SecondPage from '../views/SecondPage.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: SecondPage
  },
  {
    path: '/storage-proxy',
    name: 'Main',
    component: FirstPage
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
