import { NextFunction, Request, Response } from "express";
import { AppError } from "../util/AppError";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  console.error("Error:", err);

  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err.message ?? "Internal Server Error";

  res.status(statusCode).json({ message });
};
