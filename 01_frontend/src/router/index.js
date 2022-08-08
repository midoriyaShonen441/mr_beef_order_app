import { createRouter, createWebHistory } from 'vue-router'
import OrderPage from '../views/OrderPage.vue'
import LogInKitchen from '../frontend-kitchen/frontend-kitchen-login.vue'
import DashboardKitchen from "../frontend-kitchen/frontend-kitchen-manage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'OrderPage',
      component: OrderPage
    },
    {
      path: '/loginkitchen',
      name: 'LogInKitchen',
      component: LogInKitchen
    },
    {
      path:'/kitchendashboard',
      name: 'KitchenDashboard',
      component: DashboardKitchen
    }
  ]
})

export default router
