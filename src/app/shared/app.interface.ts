export type FileTree = {
  name: string;
  children?: FileTree[];
  iconName?: string;
};

export type PersonalInfo = {
  name: string;
  designation: string;
  displayPictureUrl: string;
};
