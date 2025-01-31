export type FileTree = {
  name: string;
  children?: FileTree[];
  iconUrl?: string;
};

export type PersonalInfo = {
  name: string;
  designation: string;
  displayPictureUrl: string;
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
