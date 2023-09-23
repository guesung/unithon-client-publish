export interface ProfileForm {
  name: string;
  email: string;
  position: string;
  organization: string;
  annual: number;
}

export interface Profile extends ProfileForm {
  phoneNumber: string;
  profileImageUrl: string;
  introduce: string;
  githubUrl: string;
  linkedInUrl: string;
  instagramUrl: string;
}

export type Position = "FRONT_END" | "BACK_END" | "DESIGN" | "ANDROID" | "IOS" | "ETC";
export type Order = "ASC" | "DESC";
