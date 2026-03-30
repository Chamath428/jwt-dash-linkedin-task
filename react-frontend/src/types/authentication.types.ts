import type { User } from "./user.type";

export interface RegisterDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthRegisterResponse {
  user: User;
}

export interface AuthLoginResponse {
  token: string;
  user: User;
}
