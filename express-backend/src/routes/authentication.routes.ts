import { Router } from "express";
import { signup } from "../authentication/authentication.controller";
import { validate } from "../middleware/validator";
import { SignupSchema } from "../authentication/dto/signup.dto";

const authenticationRouter = Router();

authenticationRouter.post("/signup", validate(SignupSchema), signup);

export default authenticationRouter;
