import React from "react";
import "../Styles/Layout.scss";
import layout1 from "../assets/layout1.jpg";
import layout2 from "../assets/layout2.jpg";
import layout3 from "../assets/layout3.jpg";

const Layout = () => {
  return (
    <div className="layout-section">
      <div className="signup lyt">
        <img src={layout1} alt="" />
        <h2>Register for free</h2>
        <p>
          Sign up at no cost and take the first step toward unlocking expert
          guidance from top university mentors.
        </p>
      </div>
      <div className="discuss lyt">
        <img src={layout2} alt="" />
        <h2>We'll call you</h2>
        <p>
          We’ll give you a call to discuss your aspirations and needs, ensuring
          we tailor our support to your unique journey.
        </p>
      </div>
      <div className="matched lyt">
        <img src={layout3} alt="" />
        <h2>Get matched!</h2>
        <p>
          Based on your requirements, we’ll pair you with a mentor who aligns
          with your goals and has first-hand experience.
        </p>
      </div>
    </div>
  );
};

export default Layout;
