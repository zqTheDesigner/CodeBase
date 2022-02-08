import { RouteRecordRaw } from 'vue-router';

// import { navService } from 'src/services/navService';
import { navRoutes } from './navRoutes';
// const { navRoutes } = navService();

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // ...navRoutes,
      ...navRoutes,
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
