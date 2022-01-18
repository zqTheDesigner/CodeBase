// import { navService, navInterface } from 'src/services/navService';

interface navInterface {
  title: string;
  // For category grouping, don't need pathName
  pathName?: string;
  page: string;
  description?: string;
  children?: navInterface[];
}

/**
 * This whole nav variable can be import as a
 * JSON object in production
 *
 * page can be nested in sub folders, as long as
 * it's inside the page folder,just use the path
 *
 * use : props: { description: { type: String } }
 * and : <div v-html="description" />
 * to in the component to read the descriptions
 */

const nav = [
  // {
  //   title: 'Grand Parent',
  //   pathName: 'grand_parent',
  //   page: 'GrandParent.vue',
  //   description: 'Grand Parend Level Content',
  //   children: [
  //     {
  //       title: 'Parent',
  //       page: 'Parent.vue',
  //       description: 'Parent Level Content',
  //       children: [
  //         {
  //           title: 'Child',
  //           page: 'Child.vue',
  //           description: 'Child Level Content',
  //           children: [
  //             {
  //               title: 'GrandChild',
  //               page: 'GrandChild.vue',
  //               description: 'Grand Chuld Level Content',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       title: 'ParentSibling',
  //       page: 'ParentSibling.vue',
  //       description: 'ParentSibling Content',
  //       children: [
  //         {
  //           title: 'Child',
  //           page: 'Child.vue',
  //           description: 'Child Level Content',
  //           children: [
  //             {
  //               title: 'GrandChild',
  //               page: 'GrandChild.vue',
  //               description: 'Grand Chuld Level Content',
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    title: 'Data Visualisation',
    description: '',
    pathName: 'data_viz',
    page: '',
    children: [
      {
        title: 'Google Charts',
        pathName: 'g_charts',
        page: 'data-viz/DataViz_GCharts.vue',
        description: 'Page for google charts data visualisation components',
      },
      {
        title: 'Charts.js',
        pathName: 'chart_js',
        page: 'data-viz/DataViz_ChartJs.vue',
        description: 'Page for google charts data visualisation components',
      },
    ],
  },
  {
    title: 'Extended Style',
    pathName: 'extended_style',
    page: '',
    children: [
      {
        title: 'Extended Style',
        pathName: 'extended_style',
        page: 'ExtendedStyle.vue',
        description:
          'Extended css style for Quasar framework, access these styles by copy and embed <code class="bg-grey-2 q-px-sm">q-extended-style.scss</code> to <code class="bg-grey-2 q-px-sm">app.scss</code>. Take note, comment not used color variables as much as possible, else the css file size will be HUGE',
      },
      {
        title: 'Typography',
        pathName: 'typography',
        page: 'Typography.vue',
        description:
          'Extended css typography style. Font loaded from google fonts. ',
      },
    ],
  },
  {
    title: 'Backgrounds',
    pathName: 'bg_pattern',
    page: 'Backgrounds.vue',
    description: 'different animated backgrounds',
  },
  {
    title: 'Google Map',
    pathName: 'g_map',
    page: 'GoogleMapExample.vue',
    description:
      'Some useful google map functions. For costing purpose, each day been limited to 300 api calls.',
  },
  {
    title: 'Containers',
    pathName: 'containers',
    page: 'Containers.vue',
    description: 'Some handy mobile responsive containers',
    children: [],
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
