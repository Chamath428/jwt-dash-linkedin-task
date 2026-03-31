import type {
  AuthLoginResponse,
  AuthRegisterResponse,
  LoginDto,
  RegisterDto,
} from "../types/authentication.types";
import api from "../util/api";

export const registerUser = async (
  data: RegisterDto,
): Promise<AuthRegisterResponse> => {
  const response = await api.post<AuthRegisterResponse>(
    "/authentication/signup",
    data,
  );
  return response.data;
};

export const loginUser = async (data: LoginDto): Promise<AuthLoginResponse> => {
  const response = await api.post<AuthLoginResponse>(
    "/authentication/login",
    data,
  );
  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
  window.location.href = "/login";
}
