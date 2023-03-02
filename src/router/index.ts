import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import VwLoginWhatsapp from "../views/vw-login-whatsapp/vw-login-whatsapp.vue";
import VwWhatsapp from '../views/vw-whatsapp/vw-whatsapp.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/vw-login-whatsapp',
    name: 'vw-login-whatsapp',
    component: VwLoginWhatsapp,
    meta: {
      title: 'Login WhatsApp'
    }
  },
  /*{
    path: '/vw-whatsapp',
    name: 'vw-whatsapp',
    component: VwWhatsapp,
    meta: {
      title: 'WhatsApp'
    }
  },*/
  {
    path: '/',
    name: 'whatsapp',
    component: VwWhatsapp,
    meta: {
      title: 'WhatsApp'
    }
  },
  { 
    path: "/:pathMatch(.*)*", 
    component: VwWhatsapp,
    meta: {
      title: 'WhatsApp'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})

export default router
