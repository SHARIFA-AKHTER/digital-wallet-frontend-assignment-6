export interface UserProfile {
  name?: string;
  phone?: string;
  password?: string;
  data?: string;
}


export type UserProfileWithPassword = UserProfile & {
  password?: string;
}