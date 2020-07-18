import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/administracion',
    name: 'Administración',
    component: () => import('../views/Administracion.vue') 
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: () => import('../views/Favoritos.vue') 
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error.vue')  // 404
},
  {
    path: '/opiniones',
    name: 'Opiniones',
      component: () => import('../views/Opiniones.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
