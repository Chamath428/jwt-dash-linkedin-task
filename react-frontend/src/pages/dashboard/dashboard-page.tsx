import { useEffect, useState, type FC } from "react";
import { logoutUser } from "../../services/authentication.service";
import { fetchDashboardData } from "../../services/dashboard.service";
import type { DashboardData } from "../../types/dashboard.type";
import "./dashboard-page.css";

const DashboardPage: FC = () => {
  const userData = localStorage.getItem("userData");
  const user = userData ? JSON.parse(userData) : null;

  const [dashboardData, setDashboardData] = useState<DashboardData | null>(
    null,
  );
  const [loading, setLoading] = useState(true);

  const getDashboardData = async () => {
    try {
      const data = await fetchDashboardData();
      setDashboardData(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <section id="center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Hi {user?.firstName}!</h2>
          <p>{dashboardData?.message}</p>
          <p>
            Data fetched at:{" "}
            {new Date(dashboardData?.timestamp || "").toLocaleTimeString()}
          </p>
          <button className="logout-button" onClick={logoutUser}>Logout</button>
        </div>
      )}
    </section>
  );
};

export default DashboardPage;
