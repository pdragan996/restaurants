export interface UserBasic {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  username: string;
  canCreateAdmin?: boolean;
}

export interface User extends UserBasic {
  _id: string;
}