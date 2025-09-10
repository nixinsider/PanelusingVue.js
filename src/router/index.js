import { createRouter, createWebHashHistory } from 'vue-router';
import MainContent from '../mainContent.vue';
import Customers from '../customers.vue';
import Reports from '../reports.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: MainContent
  },
  {
    path: '/customers',
    name: 'Customers',
    component: Customers
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
});

export default router;