import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      },
      {
        path: 'billpage',
        component: () => import('@/components/billpage.vue'),
      },
      {
        path: 'monitor',
        component: () => import('@/components/monitorpage.vue'),
      },
      {
        path: 'input',
        component: () => import('@/components/inputpage.vue'),
      },
      {
        path: 'chart',
        component: () => import('@/components/chart.vue'),
      },
    ],
  },
  {
    path: '/logging',
    component: () => import('@/components/loggingpage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;