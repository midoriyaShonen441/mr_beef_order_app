import { createRouter, createWebHistory } from 'vue-router'
import OrderPage from '../views/OrderPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'OrderPage',
      component: OrderPage
    },
  ]
})

export default router
