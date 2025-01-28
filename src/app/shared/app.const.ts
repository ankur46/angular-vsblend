import { FileTree } from './app.interface';

export const SVGICONS: string[] = [
  'parentfiles',
  'search',
  'gitmerger',
  'debugger',
  'extension',
  'account',
  'settings',
];

export const SEARCHICONS: string[] = ['arrowleft', 'arrowright'];
export const LAYOUTICONS: string[] = [
  'layout',
  'layoutpanel',
  'sidebarleft',
  'sidebarright',
];
export const OTHERICONS: string[] = [...SEARCHICONS, ...LAYOUTICONS];

export const FILETREE: FileTree[] = [
  {
    name: 'ANKUR DESHWAL',
    children: [
      {
        name: 'welcome.html',
        iconName: 'html',
      },
    ],
  },
];
