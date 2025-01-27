import React from "react";
import "../Styles/Navigation.scss";
import BrandLogo from "../assets/clay-image.png";
import { Link } from "react-router-dom";
import "../Styles/Navigation.scss";
import { Outlet } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

const Navigation = () => {
  return (
    <div className="navigation-section">
      <nav className="navigation">
        <div className="logo">
          <img src={BrandLogo} alt="" />
        </div>
        <div className="nav-list">
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/" className="home">
            Browse mentors
          </Link>
          <Link to="/school" className="home">
            Summer school
          </Link>
          <Link to="/call" className="home">
            Book a call{" "}
          </Link>
          <Link to="/community" className="home">
            Join community{" "}
          </Link>

          <button>Register Now <span><FaArrowRight/></span></button>
        </div>
      </nav>
      <div className="company-info">
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
