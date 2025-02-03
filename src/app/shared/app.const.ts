import {
  EmploymentInfo,
  FileTree,
  PersonalInfo,
  TechStack,
} from './app.interface';

//STRINGS------

//ARRAYS------

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

export const TECHSTACKINFO: TechStack[] = [
  {
    name: 'Web Technologies and Frameworks:',
    techInfo: [
      {
        name: 'Angular',
        imageUrl: 'assets/other-images/angular.jpeg',
        description: '',
      },
      {
        name: 'JavaScript',
        imageUrl: 'assets/other-images/javascript.png',
        description: '',
      },
      {
        name: 'HTML/CSS',
        imageUrl: 'assets/other-images/htmlCss.png',
        description: '',
      },
      {
        name: 'SASS',
        imageUrl: 'assets/other-images/sass.png',
        description: '',
      },
      {
        name: 'TypeScript',
        imageUrl: 'assets/other-images/typescript.png',
        description: '',
      },
      {
        name: 'JSON',
        imageUrl: 'assets/other-images/json.png',
        description: '',
      },
      {
        name: 'Konva.js',
        imageUrl: 'assets/other-images/konva.png',
        description: '',
      },
      {
        name: 'Chart.js',
        imageUrl: 'assets/other-images/chartJs.png',
        description: '',
      },
    ],
  },
  {
    name: 'Server-side Technologies:',
    techInfo: [
      {
        name: 'Node.js',
        imageUrl: 'assets/other-images/node.png',
        description: '',
      },
      {
        name: 'Docker',
        imageUrl: 'assets/other-images/docker.png',
        description: '',
      },
      {
        name: 'Kubernetes',
        imageUrl: 'assets/other-images/kubernetes.png',
        description: '',
      },
    ],
  },
  {
    name: 'Testing and Quality Assurance:',
    techInfo: [
      {
        name: 'Jest',
        imageUrl: 'assets/other-images/jest.png',
        description: '',
      },
      {
        name: 'Karma',
        imageUrl: 'assets/other-images/karma.png',
        description: '',
      },
      {
        name: 'Puppeteer',
        imageUrl: 'assets/other-images/puppeteer.png',
        description: '',
      },
      {
        name: 'Postman API Platform',
        imageUrl: 'assets/other-images/postman.png',
        description: '',
      },
    ],
  },
  {
    name: 'Integration and Collaboration Tools:',
    techInfo: [
      {
        name: 'GitHub',
        imageUrl: 'assets/other-images/github.png',
        description: '',
      },
      {
        name: 'JIRA',
        imageUrl: 'assets/other-images/jira.jpeg',
        description: '',
      },
      {
        name: 'Auth0',
        imageUrl: 'assets/other-images/auth0.png',
        description: '',
      },
      {
        name: 'Tailwind CSS',
        imageUrl: 'assets/other-images/tailwindCss.png',
        description: '',
      },
      {
        name: 'Full Calendar',
        imageUrl: 'assets/other-images/fullCalendar.png',
        description: '',
      },
      {
        name: 'Google Maps',
        imageUrl: 'assets/other-images/googleMaps.jpg',
        description: '',
      },
      {
        name: 'Google Sheets',
        imageUrl: 'assets/other-images/googleSheets.png',
        description: '',
      },
      {
        name: 'Screwdriver',
        imageUrl: 'assets/other-images/screwdriver.png',
        description: '',
      },
      {
        name: 'Jenkins',
        imageUrl: 'assets/other-images/jenkin.png',
        description: '',
      },
      {
        name: 'Angular Material',
        imageUrl: 'assets/other-images/angularMaterial.png',
        description: '',
      },
    ],
  },
];

export const EMPLOYMENTINFO: EmploymentInfo[] = [
  {
    name: 'BNY Mellon',
    companyUrl: `https://www.bny.com/corporate/global/en/about-us/about-bny.html`,
    logoUrl: 'assets/other-images/bnyMellon.png',
    description: 'Global financial services company',
    startYear: 2017,
    endYear: 2019,
    projectCompleted: 5,
    role: 'Software Engineer',
  },
  {
    name: 'Coditas',
    companyUrl: `https://coditas.com/about-us`,
    logoUrl: 'assets/other-images/coditas.jpg',
    description: 'UX & quality-focused digital engineering company',
    startYear: 2019,
    endYear: 2020,
    projectCompleted: 4,
    role: 'UI Developer',
  },
  {
    name: 'Persistent Systems',
    companyUrl: `https://www.persistent.com/company-overview/`,
    logoUrl: 'assets/other-images/persistent.png',
    description: 'Digital Engineering and Enterprise Modernization partner',
    startYear: 2020,
    endYear: 0,
    projectCompleted: 5,
    role: 'Senior Engineering Lead',
  },
];

//OBJECTS------

export const FILETREE: FileTree[] = [
  {
    name: 'ANKUR DESHWAL',
    children: [
      {
        name: 'introduction.html',
        iconUrl: 'assets/file-icons/htmlFile.svg',
      },
      {
        name: 'techstack.component.ts',
        iconUrl: 'assets/file-icons/typescriptFile.svg',
      },
      {
        name: 'employment.component.ts',
        iconUrl: 'assets/file-icons/typescriptFile.svg',
      },
    ],
  },
];

export const PERSONALINFO: PersonalInfo = {
  name: 'Ankur Deshwal',
  designation: 'Senior Engineering Lead',
  displayPictureUrl: 'assets/other-images/displayPicture.png',
};
