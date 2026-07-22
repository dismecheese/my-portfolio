export interface ThemeInfo {
  name: string;
  theme: string;
  icon: string;
  publisher: string;
}

export const THEMES: ThemeInfo[] = [
  {
    name: 'Dark',
    theme: 'dark',
    icon: '/themes/dark-plus.png',
    publisher: 'Microsoft',
  },
  {
    name: 'Light',
    theme: 'light',
    icon: '/themes/dark-plus.png',
    publisher: 'Antigravity',
  },
  {
    name: 'Marzy',
    theme: 'marzy',
    icon: '/themes/dark-plus.png',
    publisher: 'Antigravity',
  },
];

export const THEME_KEYS = THEMES.map(t => t.theme) as [string, ...string[]];
