import { Router } from "express";
import { getDashboardData } from "../dashboard/dashboard.controller";
import { authGuard } from "../middleware/authGuard";
import { asyncHandler } from "../util/asyncHandler";

const dashboardRouter = Router();

dashboardRouter.get("", authGuard, asyncHandler(getDashboardData));

export default dashboardRouter;
