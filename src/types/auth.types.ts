export interface IAuthUser {
  email: string;
  role?: string;
  [key: string]: any;
}

export interface IAuthResponse {
  token: string;
  user: IAuthUser;
}

export interface ILoginCredentials {
  email: string;
  password: string;
}

export interface IResetPasswordData {
  password: string;
  token: string;
}

export interface IAuthState {
  user: IAuthUser | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}
