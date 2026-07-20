export interface User {
  'user-id': string;
  name: string;
  email: string;
  password: string;
}

export type AuthUser = Omit<User, 'password'>;

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthToken {
  token: string;
  user: AuthUser;
}
