export interface MenuItem {
  label: string;
  path: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'História',
    path: '/historia',
  },
  {
    label: 'Orixás',
    path: '/orixas',
  },
  {
    label: 'Casas',
    path: '/casas',
  },
  {
    label: 'Contato',
    path: '/contato',
  },
];