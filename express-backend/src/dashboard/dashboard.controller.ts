import { Request, Response } from "express";
import { SUCCESS_MESSAGES } from "../util/success-messages";


export function getDashboardData(_req: Request, res: Response) {
    res.status(201).json({
        message: SUCCESS_MESSAGES.WELCOME_DASHBOARD,
        timestamp: new Date().toISOString(),
      });
}