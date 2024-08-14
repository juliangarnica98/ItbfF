import { createRouter, createWebHistory } from 'vue-router'

import Form from '../views/FormView.vue'
import Home from '../views/HomeView.vue'
import Assigment from '@/views/AssigmentView.vue'
import Hotel from '@/views/HotelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home',component: Home},
    { path: '/new-hotel',name: 'new',component: Form},
    { path: '/hotel/:id', component:Assigment , props: true },
    { path: '/ver-hotel/:id', component:Hotel , props: true }
  ]
})

export default router
