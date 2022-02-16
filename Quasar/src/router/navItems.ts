/**
 * A nested structure for side navigation listing
 */

interface NavItemsInterface {
  title: string;
  name?:string;
  path?: string;
  children?: NavItemsInterface[];
}

export const navItems: NavItemsInterface[] = [
  {
    title: 'CSV Parser',
    path: '/csv_parser',
  },
  {
    title: 'Styles',
    children: [
      { title: 'Extended Style', path: '/styles/extended_style' },
      { title: 'Typography', path: '/styles/typography' },
      { title: 'Elevation', path: '/styles/elevation' },
    ],
  },
  {
    title: 'Data Visualisation',
    children: [
      {
        title: 'Google Charts',
        path: '/data_viz/g_charts',
      },
      {
        title: 'Chart.js',
        path: '/data_viz/chart_js',
      },
    ],
  },
  {
    title: 'Background',
    path: '/background',
  },
  {
    title: 'Google Map',
    path: '/g_map',
  },
  {
    title: 'UI Components',
    children: [
      {
        title: 'Tag Selector',
        name:'Tag Selector',
        path: '/ui/tag_selector',
      },
    ],
  },
  {
    title: 'Containers',
    path: '/containers',
  },
];
