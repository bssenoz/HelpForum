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
    path: '/content/:id',
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
    name: 'CategoryMenu',
    component: () => import('../views/home/CategoryMenu.vue'),
  },
  {
    path: '/categories/:id',
    name: 'CategoryContents',
    component: () => import('../views/home/CategoryContents.vue'),
  },
  {
    path: '/panel/content',
    name: 'ContentsPage',
    component: () => import('../views/auth/Contents.vue'),
  },
  {
    path: '/panel/category',
    name: 'CategoriesPage',
    component: () => import('../views/auth/Categories.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/home/Profile.vue'),
  },
  {
    path: '/user/:id',
    name: 'UserPage',
    component: () => import('../views/home/User.vue'),
  },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;