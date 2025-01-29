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
export const TERMINALICONS: string[] = [
  'terminal',
  'add',
  'chevronup',
  'ellipsis',
  'close',
];
export const OTHERICONS: string[] = [
  ...SEARCHICONS,
  ...LAYOUTICONS,
  ...TERMINALICONS,
];

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

export const TERMINALTABS: string[] = [
  'PROBLEMS',
  'OUTPUT',
  'DEBUG CONSOLE',
  'TERMINAL',
  'PORTS',
];

export const VSFOOTER: string[] = [
  'Ln 21, Col 21',
  'Spaces: 2',
  'UTF-8',
  'LF',
  'TypeScript',
  'Prettier',
];
