import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BuilderView from "../views/BuilderView.vue";
import DesignsView from "../views/DesignsView.vue";
import LogsView from "../views/LogsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/builder',
      name: 'builder',
      component: BuilderView
    },
    {
      path: '/designs',
      name: 'designs',
      component: DesignsView
    },
    {
      path: '/logs',
      name: 'logs',
      component: LogsView
    }
  ]
})

export default router
