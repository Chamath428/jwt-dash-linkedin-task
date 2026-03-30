
import type { DashboardData } from "../types/dashboard.type";
import api from "../util/api";

export const fetchDashboardData = async (): Promise<DashboardData> => {
  const response = await api.get("/dashboard");
  return response.data;
}