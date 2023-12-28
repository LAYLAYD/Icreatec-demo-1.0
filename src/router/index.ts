import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import MonitorPage from '../components/MonitorPage.vue'; 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
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
        beforeEnter: (to, from, next) => {
          // Ensure that the component is loaded before navigating
          import('@/components/billpage.vue').then(() => {
            next();
          });
        }
      },
      // Add the new route for MonitorPage
      {
        path: 'monitor',
        component: MonitorPage
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
