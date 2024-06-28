import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import('../page/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../page/Home.vue'),
    children:[
      {
        path: '/nav',
        name: 'nav',
        component: ()=> import('../components/Navbar.vue')
      },
      {
        path: '/menu',
        name: 'menu',
        component: ()=> import('../components/Mnue.vue')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
