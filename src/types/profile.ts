export interface ProfileForm {
  name?: string;
  email?: string;
  position?: Position;
  organization?: string;
  annual?: number;
}

export interface Profile extends ProfileForm {
  introduce?: string;
  profile_url: string[];
}

export type Position = "FRONT_END" | "BACK_END" | "DESIGN" | "ANDROID" | "IOS" | "ETC" | "ALL";
export type Order = "ASC" | "DESC";
