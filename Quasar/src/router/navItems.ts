/**
 * A nested structure for side navigation listing
 */

interface NavItemsInterface {
  title: string;
  path?: string;
  children?: NavItemsInterface[];
}

export const navItems: NavItemsInterface[] = [
  {
    title: 'Styles',
    children: [{ title: 'Extended Style', path: 'styles/extended_style' }],
  },
];
