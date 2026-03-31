import { randomUUID } from "crypto";
import db from "../db";
import { User } from "../models/user.model";
import { SignupDto } from "./dto/signup.dto";
import { AppError, serviceErrorHandler } from "../util/AppError";
import { LoginDto } from "./dto/login.dto";
import { signToken } from "../middleware/jwtHandler";
import { ERROR_MESSAGES } from "../util/errorMessages";

export const signupService = async (signUpDto: SignupDto) => {
  try {
    const { firstName, lastName, email, password }: SignupDto = signUpDto;

    const newUser: User = {
      id: randomUUID(),
      firstName,
      lastName,
      email,
      password,
      createdAt: new Date(),
    };

    db.read();
    const userExists = db.data.users.find((u) => u.email === email);
    if (userExists) {
      throw new AppError(ERROR_MESSAGES.USER_ALREADY_EXISTS, 400);
    }

    db.data.users.push(newUser);
    db.write();

    return newUser;
  } catch (error) {
    serviceErrorHandler(error, ERROR_MESSAGES.SIGNUP_FAILED);
  }
};

export const loginService = async (loginDto: LoginDto) => {
  try {
    const { email, password } = loginDto;

    db.read();
    const user = db.data.users.find((u) => u.email === email);

    if (!user?.password || user.password !== password) {
      throw new AppError(ERROR_MESSAGES.INVALID_CREDENTIALS, 500);
    }
    const token = signToken({ id: user.id, email: user.email });

    return { user, token };
  } catch (error) {
    serviceErrorHandler(error, ERROR_MESSAGES.LOGIN_FAILED);
  }
};
