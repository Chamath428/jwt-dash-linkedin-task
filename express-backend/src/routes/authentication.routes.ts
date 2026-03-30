import { Router } from "express";
import { login, signup } from "../authentication/authentication.controller";
import { validate } from "../middleware/validator";
import { SignupSchema } from "../authentication/dto/signup.dto";
import { LoginSchema } from "../authentication/dto/login.dto";
import { asyncHandler } from "../util/asyncHandler";

const authenticationRouter = Router();

authenticationRouter.post(
  "/signup",
  validate(SignupSchema),
  asyncHandler(signup),
);
authenticationRouter.post("/login", validate(LoginSchema), asyncHandler(login));

export default authenticationRouter;
