import {
  Accomplishment,
  ContactLinks,
  EmploymentInfo,
  FilePanelObject,
  FileTree,
  PersonalDetailDisplayFields,
  PersonalInfo,
  Project,
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

export const RESTICONS: string[] = ['matchCase', 'matchWord'];
export const OTHERICONS: string[] = [
  ...SEARCHICONS,
  ...LAYOUTICONS,
  ...TERMINALICONS,
  ...RESTICONS,
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
    name: 'Persistent Systems',
    companyUrl: `https://www.persistent.com/company-overview/`,
    logoUrl: 'assets/other-images/persistent.png',
    description: 'Digital Engineering and Enterprise Modernization partner',
    startYear: 2020,
    endYear: 0,
    projectCompleted: 5,
    role: 'Senior Engineering Lead',
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
    name: 'BNY Mellon',
    companyUrl: `https://www.bny.com/corporate/global/en/about-us/about-bny.html`,
    logoUrl: 'assets/other-images/bnyMellon.png',
    description: 'Global financial services company',
    startYear: 2017,
    endYear: 2019,
    projectCompleted: 5,
    role: 'Software Engineer',
  },
];

export const FILETREE: FileTree[] = [
  {
    id: 1,
    name: 'ANKUR DESHWAL',
    children: [
      {
        id: 1,
        name: 'introduction.html',
        iconUrl: 'assets/file-icons/htmlFile.svg',
        inView: false,
        componentName: 'IntroductionComponent',
      },
      {
        id: 2,
        name: 'techstack.component.ts',
        iconUrl: 'assets/file-icons/typescriptFile.svg',
        inView: false,
        componentName: 'TechstackComponent',
      },
      {
        id: 3,
        name: 'employment.component.ts',
        iconUrl: 'assets/file-icons/typescriptFile.svg',
        inView: false,
        componentName: 'EmploymentComponent',
      },
      {
        id: 4,
        name: 'contact.json',
        iconUrl: 'assets/file-icons/jsonFile.svg',
        inView: false,
        componentName: 'ContactLinksComponent',
      },
      {
        id: 5,
        name: 'accomplishment.component.ts',
        iconUrl: 'assets/file-icons/typescriptFile.svg',
        inView: false,
        componentName: 'AccomplishmentComponent',
      },
      {
        id: 6,
        name: 'personalDetail.component.html',
        iconUrl: 'assets/file-icons/htmlFile.svg',
        inView: false,
        componentName: 'PersonalDetailsComponent',
      },
      {
        id: 7,
        name: 'projects.guard.ts',
        iconUrl: 'assets/file-icons/angularFile.svg',
        inView: false,
        componentName: 'ProjectsComponent',
      },
    ],
  },
];

export const CONTACTSANDLINKS: ContactLinks[] = [
  { name: 'Github', url: 'https://github.com/ankur46' },
  { name: 'Linkdin', url: 'https://www.linkedin.com/in/ankur-deshwal/' },
  { name: 'Portfolio', url: 'https://www.angularVsBlend.com/' },
  { name: 'Phone No ', url: '+91 7696-05-6272' },
  { name: 'Email Id', url: 'deshwal.ankur18@gmail.com' },
  {
    name: 'Upwork Id',
    url: 'https://www.upwork.com/freelancers/~01b3adaa988b028ff3',
  },
];

export const ACCOMPLISHMENT: Accomplishment[] = [
  {
    name: 'Angular Sr.Developer Certification',
    description:
      'This certification tested my knowledge of Angular along with Jasmine , HTML, CSS , Typescript and javascript',
    imageUrl: 'assets/certificates/angularLeadCertification.png',
  },
  {
    name: 'Top Talent 2023',
    description:
      'This award was given to me for my exceptional performance in the year 2023 and my contribution to the team',
    imageUrl: 'assets/certificates/topTalentCertification.png',
  },
  {
    name: 'Bravo Award for Media Automation Project',
    description:
      'This award was given for Excellent work done on Media automation project. This setup will help to minimize manual list pull requests for various uses',
    imageUrl: 'assets/certificates/mediaAutomationCertification.png',
  },
  {
    name: 'Bravo Award for QA Tool Project',
    description:
      'For your remarkable work in developing and launching the new felture "QA tool" and valuable contribution in hiring and training new team members',
    imageUrl: 'assets/certificates/qaToolCertification.jpg',
  },
  {
    name: 'Bravo Award for Mpush Project',
    description:
      'For valuable contribution in the successful launch of Mobile-Push project - timely, with good quality and well received by the client',
    imageUrl: 'assets/certificates/mpushCertification.jpg',
  },
  {
    name: 'Bravo Award for PNR Project',
    description:
      'For Contribution in Development of Pick and Roll UI - Notifications module. and also integrated Zeta API for PNR project',
    imageUrl: 'assets/certificates/pnrCertification.jpg',
  },
  {
    name: 'Google Cloud Digital Leader Certification',
    description:
      'This certification tested my knowledge of Google Cloud Platform and terminology used in it',
    imageUrl: 'assets/certificates/googleCloudCertification.png',
  },
  {
    name: 'Upwork Earnings',
    description:
      'I have earned more than 10k USD on Upwork and worked under different clients and projects',
    imageUrl: 'assets/certificates/upWorkCertification.png',
  },
];

export const PERSONALDETAILDISPLAYFIELDS: PersonalDetailDisplayFields[] = [
  { name: 'Full Name', key: 'name' },
  { name: 'Age', key: 'age' },
  { name: 'Birth Place', key: 'birthPlace' },
  { name: 'Total Experience', key: 'totalExperience' },
  { name: 'Work Location', key: 'workLocation' },
  { name: 'Total Projects', key: 'totalProjects' },
  { name: 'Hobbies', key: 'hobbies' },
  { name: 'Total Companies', key: 'totalCompanies' },
];

export const PROJECTDETAILS: Project[] = [
  {
    name: 'CanvasCraft: A Versatile Painting Tool with Konva.js',
    imageUrl: 'assets/other-images/projects/paintUI.png',
    techUsed: ['Angular 8', 'Konva.js', 'Typescript', 'HTML/SCSS', 'JS'],
    description:
      'CanvasCraft is a feature-rich painting tool developed using Angular 8 and Konva.js, offering an immersive canvas experience for users like doctors to highlight and plan over patient reports and highlight major concerns. With a sleek and intuitive user interface, CanvasCraft empowers users with a comprehensive set of tools and functionalities to create stunning artworks and designs effortlessly.',
    keyFeatures: [
      'Movement: Seamlessly move and manipulate elements on the canvas with precision and ease.',
      'Text: Add customizable text elements to your canvas, with options for font, size, color, and alignment.',
      'Shapes: Choose from a variety of shapes, including rectangles, circles, polygons, and more, to create intricate designs.',
      'Eraser: Correct mistakes and refine details with the eraser tool, offering precise control over erasing areas on the canvas.',
      'Pencil: Sketch and draw freehand with the pencil tool, allowing for fluid strokes and creative expression.',
      'Undo/Redo: Effortlessly undo and redo actions to experiment freely and revert changes as needed.',
      'Zoom: Zoom in and out of the canvas to focus on specific areas and work with greater detail.',
      'Color Palette: Access a rich color palette with a wide range of colors and shades to bring your creations to life.',
    ],
  },
  {
    name: 'Dynamic Appointment Calendar',
    imageUrl: 'assets/other-images/projects/calendarView.png',
    techUsed: [
      'Angular 8',
      'Angular Calendar',
      'Typescript',
      'HTML/SCSS',
      'JS',
    ],
    description: `This Dynamic Appointment Calendar is built using Angular 8, TypeScript, SCSS, and JavaScript, leveraging the Angular Calendar library to provide a robust scheduling system.

Designed for clinics, hospitals, and multi-doctor setups, this system allows users to easily schedule, edit, and manage appointments. The drag-and-drop functionality enables seamless reassignment of appointments from one doctor to another, making scheduling more flexible and efficient.

With multiple views and real-time updates, the application enhances workflow efficiency while ensuring an intuitive user experience.`,
    keyFeatures: [
      'Drag & Drop Appointments - Move appointments between doctors effortlessly',
      'Multi-Doctor Support - Assign, reassign, and manage doctor schedules',
      'Multiple Calendar Views - Day, Week, and Month views',
      'Dynamic Event Scheduling - Create, edit, and delete appointments',
      'Custom Time Slots - Define available time slots for each doctor',
      'Interactive UI with Theming - SCSS-based styling for a modern design',
      'Event Tooltips & Details - Show appointment details on hover/click',
      'Mobile-Friendly & Responsive - Works across all devices',
      'Data Binding & API Integration - Sync appointments with backend data',
    ],
  },
  {
    name: 'API-Driven SVG Renderer',
    imageUrl: 'assets/other-images/projects/dynamicSVG.png',
    techUsed: ['Angular 10', 'Typescript', 'HTML/SCSS', 'JS'],
    description: `This Dynamic SVG Component is built using Angular 9, TypeScript, JavaScript, and SCSS, designed to dynamically update SVG elements based on API responses. It allows for real-time rendering and modification of SVG components, making it ideal for applications involving live dashboards, data-driven graphics.

The system seamlessly integrates with APIs to fetch data and update the SVG structure automatically, ensuring that the UI reflects the most recent changes without requiring a manual refresh.`,
    keyFeatures: [
      'Real-Time SVG Updates - Automatically updates based on API responses',
      'Data-Driven Visualization - Dynamically modify SVG properties (size, color, position, etc.)',
      'API Integration - Fetch live data and render updates instantly',
    ],
  },
  {
    name: 'Fully Customizable Analytics Dashboard ',
    imageUrl: 'assets/other-images/projects/DynamicDashboard.png',
    techUsed: [
      'Angular 10',
      'chart.js',
      'HTML2canvas',
      'HTML/SCSS',
      'Typescript',
    ],
    description: `This Dynamic Dashboard is built using Angular 9, chart.js TypeScript, JavaScript, and SCSS, designed to provide real-time dashboard creation with data visualization and fully customizable charts. Users can modify chart properties, update data dynamically, print the dashboard, and save the entire configuration via API integration.

With support for multiple chart types and flexible configurations, this dashboard is perfect for analytics, monitoring systems, and business intelligence applications. It offers a seamless user experience with interactive UI components, ensuring high performance and smooth real-time updates.`,
    keyFeatures: [
      'Fully Customizable Charts - Modify chart type, colors, labels, and data dynamically',
      'Real-Time Data Updates - Sync charts with live API responses',
      'Multiple Chart Types - Supports bar, line, pie, and more',
      'Save Dashboard Configuration - Store custom dashboard settings via API',
      'Print & Export Dashboard - Generate and print reports instantly',
      'User-Friendly UI - Responsive and interactive interface',
      'Drag & Drop Widgets - Customize dashboard layout easily',
    ],
  },
  {
    name: 'Google Sheets-Powered Bulk Form Filling System',
    imageUrl: 'assets/other-images/projects/googleSheet.png',
    techUsed: [
      'Angular 13',
      'Google Sheet APIs',
      'HTML/SCSS',
      'Nodejs',
      'Typescript',
    ],
    description: `This Google Sheets Integration is built using Angular 12, TypeScript, JavaScript, SCSS , node JS and google sheets enabling real-time sheet creation with the logged-in user's name. The system allows users to validate sheet data, auto-fill forms using sheet data, and support bulk record creation efficiently.

This integration helps streamline workflows by allowing users to import structured data directly from Google Sheets, reducing manual data entry errors and improving productivity.`,
    keyFeatures: [
      "Real-Time Sheet Creation - Automatically generates sheets with the logged-in user's name",
      'Google Sheets API Integration - Seamless connection for data fetching and updating',
      'Bulk Record Creation - Populate multiple records efficiently using sheet data',
      'Data Validation - Ensure correct and structured data input',
      'Auto-Fill Forms - Fetch sheet data dynamically to pre-fill form fields',
      'User-Specific Data Handling - Secure and personalized sheet access',
      'Live Sync & Updates - Reflect changes instantly from the sheet',
    ],
  },
  {
    name: 'Generic Activity Logger with Deep Comparison',
    imageUrl: 'assets/other-images/projects/activityLogger.png',
    techUsed: ['Angular 13', 'Tailwind CSS', 'HTML', 'Typescript'],
    description: `This Activity Logger is built using Angular 14, TypeScript, and HTML and CSS, designed to track, compare, and log changes across deeply nested structures. It supports various data types and captures all minor to major modifications, This logger can be integrated into any module considering it generic building approach

Ideal for enterprise applications, data-intensive systems, and compliance monitoring, this logger helps developers track data mutations efficiently, enabling real-time insights and debugging.`,
    keyFeatures: [
      'Deep Nested Data Comparison - Tracks changes at every level of the data structure',
      'Supports Multiple Data Types - Handles JSON, arrays, objects, numbers, and more',
      'Minor & Major Change Detection - Identifies both small tweaks and significant updates',
      'Performance Optimized - Efficiently processes large data sets',
      'User-Friendly UI - Displays changes in a structured and readable format',
    ],
  },
  {
    name: 'Angular 17 Puppeteer-Based Ad Testing Tool',
    imageUrl: 'assets/other-images/projects/AutomationValidation.png',
    techUsed: ['Angular 17', 'Puppeteer', 'NodeJS', 'HTML/SCSS', 'Typescript'],
    description: `This Automated Ad Validation Tool is built using Angular 17 and Puppeteer, designed to validate how advertisements render on web pages and analyze their metadata.

By automating the ad verification process, this tool has significantly reduced the manual effort from 5 hours to just minutes, improving efficiency and accuracy. It supports multi-browser testing, captures webpage snapshots, and ensures ad placements meet expected standards.

Perfect for ad verification teams, digital marketing analysts, and developers, this system provides detailed insights into ad performance and compliance.`,
    keyFeatures: [
      'Automated Ad Rendering Validation - Ensures ads load correctly on different pages',
      'Metadata Extraction & Analysis - Validates ad content, placement, and tracking data',
      'Cross-Browser Testing Support - Runs ad validation on multiple browsers',
      'Page Screenshot Capture - Saves webpage snapshots for detailed verification',
      'Performance Optimization - Reduces ad verification time from hours to minutes',
      'Detailed Reporting & Insights - Logs all validations with pass/fail status',
    ],
  },
  {
    name: 'Advanced Role-Based Authorization System',
    imageUrl: 'assets/other-images/projects/authorizationUI.png',
    techUsed: ['Angular 13', 'Typescript', 'HTML/SCSS', 'JS'],
    description: `This Role-Based Access Control (RBAC) System is built using Angular 17, allowing user onboarding into different roles, each with its own module-level permissions. The system provides an intuitive UI to assign, modify, and control permissions in real-time, ensuring a seamless user management experience.

With dynamic module onboarding, organizations can expand their access control structure without modifying the core system. The real-time data storage ensures that any role or permission changes are immediately reflected in the system.`,
    keyFeatures: [
      'User Onboarding & Role Assignment - Easily add users and assign roles dynamically',
      'Module-Based Permissions - Control Read, Write, and Hidden access per role',
      'UI-Based Permission Management - No code changes needed for role adjustments',
      'Dynamic Module Onboarding - Add new modules directly from the UI',
    ],
  },
  {
    name: 'Interactive SQL Query Generator with Airflow Integration',
    imageUrl: 'assets/other-images/projects/sqlBuilderUI.png',
    techUsed: [
      'Angular 13',
      'Airflow Integration',
      'Node.js',
      'HTML/SCSS',
      'TS',
    ],
    description: `This SQL Query Builder is developed using Angular 17 ,javascript, HTML and CSS, providing a drag-and-drop interface for users to create complex queries effortlessly. It supports nested query structures, allowing users to define WHERE and JOIN clauses dynamically.

With an interactive UI, users can generate readable SQL output to better understand the query logic. Additionally, Airflow integration enables real-time updates on query execution, making the entire process seamless and efficient.

This tool simplifies SQL query creation without requiring deep database knowledge.`,
    keyFeatures: [
      'Drag-and-Drop Query Creation - Build complex SQL queries visually',
      'Nested Query Support - Handle deeply structured WHERE and JOIN conditions',
      'Readable SQL Output - Auto-generate human-friendly query explanations',
      'Table & Schema Browser - Easily select tables from the left panel',
      'Airflow Integration - Get real-time updates on query execution status',
    ],
  },
  {
    name: 'Campaign Insights Dashboard',
    imageUrl: 'assets/other-images/projects/dashboardUI.png',
    techUsed: ['Angular 13', 'Tailwind CSS', 'HTML', 'TS'],
    description: `This Campaign Insights Dashboard is built using Angular 17 and Tailwind CSS designed for quick and efficient campaign tracking. It provides a vibrant and intuitive UI to monitor campaign statuses, including initiated, running, success, and canceled campaigns[.](http://campaigns.It) It also provides date filter for retrospection on campaigns

Delivered within one sprint, this dashboard enables users to filter data, track performance, and get real-time campaign insights. The visually engaging interface was highly appreciated by the client for its usability and clarity in presenting key campaign metrics.`,
    keyFeatures: [
      'Real-Time Campaign Tracking - Monitor active, completed, and canceled campaigns',
      'Multiple Campaign Categories - Supports Mobile, Email, Finance, Fantasy, and more',
      'Quick Insights & Filtering - View metrics such as total, running, and successful campaigns',
      'User-Friendly & Vibrant UI - Clean design with color-coded status indicators',
      'Fast & Efficient Development - Built and delivered within one sprint',
    ],
  },
  {
    name: 'Angular 17-Based Push Campaign Creator',
    imageUrl: 'assets/other-images/projects/pushPreviewAndSchedulingUI.png',
    techUsed: [
      'Angular 17',
      'Yahoo APIs',
      'Node.js',
      'Tailwind CSS',
      'HTML',
      'TS',
    ],
    description: `This Mobile Push Campaign Management Tool is built using Angular 17 and integrated with Yahoo APIs to allow seamless creation and scheduling of push campaigns. Users can define campaign attributes, set targeted user bases, customize notifications, and preview how the push messages will appear on iOS and Android devices.

The tool also supports advanced scheduling with recurrence properties, ensuring efficient campaign management. Additionally, state management features provide real-time insights into different campaign stages, enabling better decision-making and optimization.`,
    keyFeatures: [
      'Seamless Campaign Creation - Define attributes, targeted users, and message content',
      'Yahoo API Integration - Fetch and utilize game, shares, and text data',
      'Push Notification Preview - Real-time visual of notifications on iOS and Android',
      'Advanced Scheduling & Recurrence - Set campaign timings with repeat options',
      'Customizable Content - Edit title, body, and media attachments dynamically',
      'User Targeting & Segmentation - Define audiences for precise campaign reach',
    ],
  },
  {
    name: 'Dynamic JSON-Based Template Form Builder',
    imageUrl: 'assets/other-images/projects/jsonToTemplateUI.png',
    techUsed: ['Angular 17', 'Tailwind CSS', 'Node.js', 'HTML', 'TS'],
    description: `This Template Input Form Builder is built using Angular 17 , HTML, tailwind css enabling users to dynamically generate input forms from JSON. With highly customizable features, it supports various input types, field labels, and predefined values, making form creation effortless.

Users can drag and drop fields to adjust their positions within the template and add default values to simplify data entry. This tool is designed to enhance workflow efficiency by allowing users to import JSON configurations and instantly generate structured forms for further processing.`,
    keyFeatures: [
      'JSON-Based Form Creation - Automatically generate forms from JSON configurations',
      'Drag & Drop Field Positioning - Reorder fields dynamically within the template',
      'Multiple Input Types Support - Text, dropdowns, checkboxes, and more',
      'Custom Labels & Default Values - Predefine values for easier data entry',
      'Real-Time Customization - Modify field properties, types, and constraints instantly',
      'Template Import & Export - Load and save form configurations easily',
      'User-Friendly UI - Simple and intuitive design for non-technical users',
    ],
  },
  {
    name: 'Drag-and-Drop Resume Builder in Angular',
    imageUrl: 'assets/other-images/projects/resumeBuilderUI.png',
    techUsed: ['Angular 17', 'Tailwind CSS', 'HTML', 'TS'],
    description: `This Resume Builder is developed using Angular 17 , tailwind and jsPDF with html2canvas, designed to help users create professional resumes instantly with a drag-and-drop interface. Users can fill out personal details, skills, experiences, and achievements through structured forms, and then simply drag predefined sections to format their resume.

The right-side panel provides a real-time preview of user data, making resume creation effortless. Once finalized, users can print or export their resume, streamlining the job application process.`,
    keyFeatures: [
      'Drag & Drop Resume Sections - Easily arrange predefined sections for customization',
      'Predefined Templates & Sections - Includes personal details, experience, skills, achievements, etc.',
      'Live Data Preview - View entered details in real-time before finalizing the resume',
      'Print & Export Support - Download or print resumes instantly',
      'User-Friendly UI - Intuitive design for effortless resume-building',
    ],
  },
  {
    name: 'Reusable Dynamic Detail View Component',
    imageUrl: 'assets/other-images/projects/dynamicFormBuilderInterface.png',
    techUsed: ['Angular 17', 'Angular Material', 'Tailwind CSS', 'HTML', 'TS'],
    description: `This Dynamic Detail Component is developed using Angular 17, designed to create detail views for any module with minimal effort. It supports multiple view types, including forms, cards, tables, tabs, and nested tabs, making it highly flexible.

Initially, this component was placed in the shared folder, where it accepted a single JSON structure and dynamically generated forms and views, abstracting complex UI logic. Later, it was extracted into a reusable library, enabling quick development and consistent UI implementation across multiple projects.

This approach significantly reduced development time while maintaining a standardized structure for all modules.`,
    keyFeatures: [
      'Multi-View Support - Create forms, tables, cards, tabs, and nested tabs dynamically',
      'JSON-Driven UI Generation - Accepts a single JSON structure to build detail views automatically',
      'Reusable Across Projects - Extracted as a library for quick integration into different applications',
      'Abstracted UI Logic - Eliminates the need for redundant detail view coding',
      'Consistent Design & Functionality - Ensures uniform UI across projects',
      'Supports Nested Components - Easily manage complex UI layouts',
    ],
  },
];

export const FILEPANELOBJECT: FilePanelObject[] = [
  {
    panelIcon: 'parentfiles',
    headerName: { name: 'EXPLORER', iconName: 'more_horiz' },
    componentNames: 'FileComponent',
  },
  {
    panelIcon: 'search',
    headerName: { name: 'SEARCH', iconName: 'more_horiz' },
    componentNames: 'SearchComponent',
  },
  {
    panelIcon: 'gitmerger',
    headerName: { name: 'SOURCE CONTROL' },
    componentNames: 'GitComponent',
  },
  {
    panelIcon: 'debugger',
    headerName: { name: 'RUN AND DEBUG: RUN', iconName: 'more_horiz' },
    componentNames: 'DebuggerComponent',
  },
  {
    panelIcon: 'extension',
    headerName: { name: 'EXTENSIONS', iconName: 'more_horiz' },
    componentNames: 'ExtensionsComponent',
  },
];

//OBJECTS------

export const PERSONALINFO: PersonalInfo = {
  name: 'Ankur Deshwal',
  designation: 'Senior Engineering Lead',
  displayPictureUrl: 'assets/other-images/displayPicture.png',
  age: 29,
  birthPlace: 'Chandigarh',
  totalExperience: 6,
  workLocation: ['Gurugram', 'Noida', 'Pune'],
  totalProjects: 15,
  hobbies: ['Running', 'Cycling', 'Chess'],
  totalCompanies: 3,
};

//ENUMS------

export enum ICONMAPPING {
  'parentfiles' = 'FileComponent',
  'search' = 'SearchComponent',
  'gitmerger' = 'GitComponent',
  'debugger' = 'DebuggerComponent',
  'extension' = 'ExtensionsComponent',
}
