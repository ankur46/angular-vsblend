export type FileTree = {
  id: number;
  name: string;
  children?: NavigationElement[];
};

export type NavigationElement = {
  id: number;
  name: string;
  iconUrl: string;
  inView: boolean;
  componentName: string;
};

export type PersonalInfo = {
  name: string;
  designation?: string;
  displayPictureUrl?: string;
  age: number;
  birthPlace: string;
  totalExperience: number;
  workLocation: string[];
  totalProjects: number;
  hobbies: string[];
  totalCompanies: number;
};

export type TechStack = {
  name: string;
  techInfo: IconInfo[];
};

export type IconInfo = {
  name: string;
  imageUrl: string;
  description: string;
};

export type EmploymentInfo = {
  name: string;
  companyUrl: string;
  logoUrl: string;
  startYear: number;
  endYear: number;
  description: string;
  projectCompleted: number;
  role: string;
};

export type ContactLinks = {
  name: string;
  url: string;
};

export type Accomplishment = {
  name: string;
  description: string;
  imageUrl: string;
};

export type PersonalDetailDisplayFields = {
  name: string;
  key: string;
};

export type Project = {
  name: string;
  description: string;
  imageUrl: string;
  techUsed: string[];
  keyFeatures: string[];
};

export type FilePanelObject = {
  panelIcon: string;
  headerName: FilePanelObjectHeader;
  componentNames: string;
};

export type FilePanelObjectHeader = {
  name: string;
  iconName?: string;
};
