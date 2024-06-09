export interface IUser {
  id: number;
  name: string;
  lastName: string;
  username?: string;
}

export interface IModifiedUser {
  id: number;
  displayName: string;
  username?: string;
}