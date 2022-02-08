import { RouteRecordRaw } from 'vue-router';
import { pageDescriptions } from 'src/content/pageDescriptions';

/**
 * Route for side navigation items
 */

export const navRoutes: RouteRecordRaw[] = [
  {
    path: 'extended_style',
    name: 'Extended Style',
    component: () => import('../pages/ExtendedStyle.vue'),
    props: { description: pageDescriptions.extended_style },
  },
];
