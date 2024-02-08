import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: () => import('../views/Registration.vue')
    },
    {
      path: '/minhaconta',
      name: 'Minha Conta',
      component: () => import('../views/MyAccount.vue')
    },
  ]
})

export default router
