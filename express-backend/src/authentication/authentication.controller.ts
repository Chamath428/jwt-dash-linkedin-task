import { Request, Response } from "express";
import { SignupDto } from "./dto/signup.dto";
import { SUCCESS_MESSAGES } from "../util/success-messages";


export const signup = (req: Request, res: Response): void => {
    const signUpDto: SignupDto = req.body;
    console.log("Signup data:", signUpDto);
    res.status(201).json({ message: SUCCESS_MESSAGES.USER_REGISTERED });
}