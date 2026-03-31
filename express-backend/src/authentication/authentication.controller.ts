import { Request, Response } from "express";
import { SUCCESS_MESSAGES } from "../util/successMessages";
import { loginService, signupService } from "./authentications.service";
import { LoginDto } from "./dto/login.dto";
import { SignupDto } from "./dto/signup.dto";

export const signup = async (req: Request, res: Response): Promise<void> => {
  const signUpDto: SignupDto = req.body;
  const newUser = await signupService(signUpDto);
  res.status(201).json({
    message: SUCCESS_MESSAGES.USER_REGISTERED,
    user: newUser,
  });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const loginDto: LoginDto = req.body;
  const user = await loginService(loginDto);
  res.status(200).json({
    message: SUCCESS_MESSAGES.LOGIN_SUCCESS,
    ...user,
  });
};
