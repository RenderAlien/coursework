import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Department from '../views/Department.vue'
import Departments from '../views/Departments.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/dep',
      name: 'dep',
      component: Department
    },
    {
      path: '/deps',
      name: 'deps',
      component: Departments
    }
  ],
})

export default router
