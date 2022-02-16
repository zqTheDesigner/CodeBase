import { RouteRecordRaw } from 'vue-router';
import { pageDetails } from 'src/content/pageDetails';

/**
 * Route for side navigation items
 */

export const navRoutes: RouteRecordRaw[] = [
  // Styles
  {
    path: 'styles/extended_style',
    name: 'Extended Style',
    component: () => import('src/pages/styles/ExtendedStyle.vue'),
    props: { description: pageDetails.extended_style },
  },
  {
    path: 'styles/typography',
    name: 'Typography',
    component: () => import('src/pages/styles/Typography.vue'),
  },
  {
    path: 'styles/elevation',
    name: 'Elevation',
    component: () => import('src/pages/styles/Elevation.vue'),
    props: {
      detail: { description: pageDetails.elevation, title: 'Elevation' },
    },
  },
  // Data Visualisation
  {
    path: 'data_viz/g_charts',
    name: 'Google Charts',
    component: () => import('src/pages/data-viz/DataViz_GCharts.vue'),
  },
  {
    path: 'data_viz/chart_js',
    name: 'ChartJs',
    component: () => import('src/pages/data-viz/DataViz_ChartJs.vue'),
  },
  // Background
  {
    path: 'background',
    name: 'Background',
    component: () => import('src/pages/Backgrounds.vue'),
  },
  // Google Map
  {
    path: 'g_map',
    name: 'Google Map',
    component: () => import('src/pages/GoogleMapExample.vue'),
  },
  // Containers
  {
    path: 'containers',
    name: 'Containers',
    component: () => import('src/pages/Containers.vue'),
  },
  // CSV Parser
  {
    path: 'csv_parser',
    name: 'CSV Parser',
    component: () => import('src/pages/CSVParser.vue'),
    props: { detail: pageDetails.csvParser },
  },
  // Tag Selector
  {
    path: 'ui/tag_selector',
    name: 'Tag Selector',
    component: () => import('src/pages/ui-components/TagSelectorPage.vue'),
  },
];
