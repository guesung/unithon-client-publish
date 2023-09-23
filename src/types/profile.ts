export interface ProfileForm {
  name?: string;
  email?: string;
  position?: Position;
  organization?: string;
  annual?: number;
}

export interface Profile extends ProfileForm {
  introduce?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  instagramUrl?: string;
}

export type Position = "FRONT_END" | "BACK_END" | "DESIGN" | "ANDROID" | "IOS" | "ETC" | "ALL";
export type Order = "ASC" | "DESC";
