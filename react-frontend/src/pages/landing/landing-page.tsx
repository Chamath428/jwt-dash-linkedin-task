import type { FC } from "react";
import { Link } from "react-router-dom";
import "./landing-page.css";

const LandingPage: FC = () => {
  return (
    <section id="center">
      <h1>Welcome to the Dashboard&trade;</h1>
      <div className="auth-buttons-section">
        <Link to="/login" className="auth-button">
          Login
        </Link>
        <Link to="/register" className="auth-button">
          Register
        </Link>
      </div>
    </section>
  );
};

export default LandingPage;
