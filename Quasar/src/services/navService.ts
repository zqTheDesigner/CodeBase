// import { navService, navInterface } from 'src/services/navService';

interface navInterface {
  title: string;
  description?: string;
  children?: navInterface[];
}

/**
 * This whole nav variable can be import as a 
 * JSON object in production
 */

/**
 * TODO: add in path parameter, so title can contains space
 */
const nav = [
  {
    title: 'GrandParent',
    path:'grandparent',
    description: 'Grand Parend Level Content',
    children: [
      {
        title: 'Parent',
        description: 'Parent Level Content',
        children: [
          {
            title: 'Child',
            description: 'Child Level Content',
            children: [
              { title: 'GrandChild', description: 'Grand Chuld Level Content' },
            ],
          },
        ],
      },
      {
        title: 'ParentSibling',
        description: 'ParentSibling Content',
        children: [
          {
            title: 'Child',
            description: 'Child Level Content',
            children: [
              { title: 'GrandChild', description: 'Grand Chuld Level Content' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'GrandParentSibling',
    description: 'Test Page content',
  },
];

/** Import vue router's type */
import { RouteRecordRaw } from 'vue-router';

const generateRoutes = (n: navInterface[]) => {
  /**
 * Generate an array of vue routes following below format: 
 * {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  }
 */

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

const navService = () => {
  return {
    nav,
    navRoutes: generateRoutes(nav),
  };
};

export { navService, navInterface };
