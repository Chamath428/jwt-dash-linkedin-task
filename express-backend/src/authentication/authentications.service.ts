import { randomUUID } from "crypto";
import db from "../db";
import { User } from "../models/user.model";
import { SignupDto } from "./dto/signup.dto";
import { AppError } from "../util/AppError";
import { LoginDto } from "./dto/login.dto";
import { signToken } from "../middleware/jwtHandler";

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

    db.data.users.push(newUser);
    db.write();

    return newUser;
  } catch (error) {
    console.log("Error during signup:", error);
    throw new AppError(`Signup failed`, 500);
  }
};

export const loginService = async (loginDto: LoginDto) => {
  try {
    const { email, password } = loginDto;

    db.read();
    const user = db.data.users.find((u) => u.email === email);

    if (!user?.password || user.password !== password) {
      throw new AppError("Invalid email or password", 401);
    }
    const token = signToken({ id: user.id, email: user.email });

    return { user, token };
  } catch (error) {
    console.log("Error during login:", error);
    throw new AppError(`Invalid Email or Password`, 500);
  }
};
