import type { FC } from "react";
import "./landing-page.css";
import { Link } from "react-router-dom";

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
