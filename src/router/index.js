import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/indexVue.vue';
import info from '@/pages/userInfo/indexVue.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/userinfo',
      name: 'info',
      component: info
    }
  ]
});

export default router;