import { Request, Response, NextFunction } from "express";
import { JwtPayload, verifyToken } from "./jwtHandler";
import { AppError } from "../util/AppError";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const authGuard = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    throw new AppError("Unauthorized", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    req.user = verifyToken(token);
    next();
  } catch {
    throw new AppError("Invalid or session token", 401);
  }
};
