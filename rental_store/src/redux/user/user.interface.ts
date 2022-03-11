export interface IUser {
  token: string;
  email: string;
  isActivated: boolean | null;
  id: string;
}

export interface IInitialState {
  user: IUser;
  isAuth: boolean;
  loading: boolean;
}
