import React from "react";
import "../Styles/Footer.scss";
import FooterLogo from "../assets/clay-image.png";
import linkedin from "../assets/in.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goBackPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/")
  };

  return (
    <div className="footer-sec">
      <div className="links">
        <div className="footer-base">
          <div className="logo-sec">
            <img
              src={FooterLogo}
              alt=""
              className="clay-img"
              onClick={goBackPage}
            />
            <img src={linkedin} alt="" className="linkedin" />
          </div>

          <nav>
            <ul>
              <li>
                <a href="">Mentors</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Register now</a>
              </li>
            </ul>
          </nav>

          <div className="project-clay">
            <p> &copy;2024 Project Clay </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
