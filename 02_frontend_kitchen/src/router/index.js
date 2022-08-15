import { createRouter, createWebHistory } from 'vue-router'
import LogInKitchen from '../frontend-kitchen-login.vue'
import DashboardKitchen from "../frontend-kitchen-manage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
