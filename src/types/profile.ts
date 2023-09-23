export interface ProfileForm {
  name?: string;
  email?: string;
  position?: Position;
  organization?: string;
  introduce?: string;
  annual?: number;
  profile_url?: (string | undefined)[];
}

export interface Profile extends ProfileForm {
  githubUrl?: string;
  linkedInUrl?: string;
  instagramUrl?: string;
}

export type Position = "FRONT_END" | "BACK_END" | "DESIGN" | "ANDROID" | "IOS" | "ETC" | "ALL";
export type Order = "ASC" | "DESC";
