import {createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/guests/404.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/guests/Login.vue'),
    // meta: { layout: 'AuthenticationLayout' },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/guests/Register.vue'),
  },
  {
    path: '/help/id',
    name: 'ContentDetail',
    component: () => import('../views/home/ContentDetail.vue'),
  },
  {
    path: '/ask-question',
    name: 'ContentCreate',
    component: () => import('../views/home/ContentCreate.vue'),
  },  
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/home/Categories.vue'),
  },
  {
    path: '/categories/name',
    name: 'CategoriesName',
    component: () => import('../views/home/CategoriesAsk.vue'),
  },
  {
    path: '/contents',
    name: 'ContentsPage',
    component: () => import('../views/auth/Contents.vue'),
  },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;