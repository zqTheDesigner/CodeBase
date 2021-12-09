// import { navService, navInterface } from 'src/services/navService';

interface navInterface {
  title: string;
  pathName?: string;
  page: string;
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
    title: 'Grand Parent',
    pathName: 'grand_parent',
    page: 'GrandParent.vue',
    description: 'Grand Parend Level Content',
    children: [
      {
        title: 'Parent',
        page: 'Parent.vue',
        description: 'Parent Level Content',
        children: [
          {
            title: 'Child',
            page: 'Child.vue',
            description: 'Child Level Content',
            children: [
              {
                title: 'GrandChild',
                page: 'GrandChild.vue',
                description: 'Grand Chuld Level Content',
              },
            ],
          },
        ],
      },
      {
        title: 'ParentSibling',
        page: 'ParentSibling.vue',
        description: 'ParentSibling Content',
        children: [
          {
            title: 'Child',
            page: 'Child.vue',
            description: 'Child Level Content',
            children: [
              {
                title: 'GrandChild',
                page: 'GrandChild.vue',
                description: 'Grand Chuld Level Content',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Data Visualisation',
    pathName: 'data_viz',
    page: 'DataViz.vue',
    description: 'Page for google charts data visualisation components',
  },
  {
    title: 'Extended Style',
    pathName: 'extended_style',
    page: 'ExtendedStyle.vue',
    description:
      'Page for extended css style, access these styles by copy and embed <code class="bg-grey-2 q-px-sm">q-style-extended.scss</code> to <code class="bg-grey-2 q-px-sm">app.scss</code>. Take note, comment not used color variables as much as possible, else the css file size will be HUGE',
  },
  {
    title: 'Backgrounds',
    pathName: 'bg_pattern',
    page: 'Backgrounds.vue',
    description: 'different animated backgrounds',
  },
];

/** Import vue router's type */
import { RouteRecordRaw } from 'vue-router';

const generateRoutes = (n: navInterface[]) => {
  /**
 * Generate an array of vue routes following below format: 
 * !! The props:{description} can be accessed from page via :
 * !! props:{description:{type:String}}
 * {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', 
      component: () => import('pages/Index.vue'), 
      props:{description:"some page description"} 
    },
    ],
  }
 */

  const navItems: RouteRecordRaw[] = [];

  const addNavItems = (m: navInterface[], p = '') =>
    m.forEach((navItem) => {
      const path = `${p}/${
        navItem.pathName ? navItem.pathName : navItem.title
      }`;

      if (navItem.children) {
        /* Recursive function to handle child path */
        addNavItems(navItem.children, path);
      }

      navItems.push({
        path,
        component: () => import(`pages/${navItem.page}`),
        props: { description: navItem.description },
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
