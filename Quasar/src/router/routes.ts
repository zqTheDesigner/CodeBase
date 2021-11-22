import { RouteRecordRaw } from 'vue-router';

import { navService, navInterface } from 'src/services/navService';

const { nav } = navService();

const getNavItems = (n: navInterface[]) => {
  /* Returns an array of routes from nav titles and it's children */
  const navItems: RouteRecordRaw[] = [];

  const addNavItems = (m: navInterface[], p = '') =>
    m.forEach((navItem) => {
      const path = `${p}/${navItem.title}`;

      if (navItem.children) {
        /* Recursive function to handle child path */
        addNavItems(navItem.children, path);
      }

      navItems.push({
        path,
        component: () => import(`pages/${navItem.title}.vue`),
      });
    });

  addNavItems(n);
  return navItems;
};

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      ...getNavItems(nav),
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
