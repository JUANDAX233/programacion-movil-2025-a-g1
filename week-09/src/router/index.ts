import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Layout from '../views/layout.vue';
import Profesor from '@/views/profesor.vue';
import Student from '@/views/student.vue';
import Provedor from '@/views/provedor.vue';
import Cliente from '@/views/cliente.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout
  },
  {
    path: '/profesor',
    name: 'profesor',
    component: Profesor
  },
  {
    path: '/student',
    name: 'student',
    component: Student
  },
  {
    path: '/provedor',
    name: 'provedor',
    component: Provedor
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: Cliente
  }

  

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
