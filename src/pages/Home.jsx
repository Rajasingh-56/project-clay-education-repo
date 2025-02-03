import React from "react";
import "../Styles/Home.scss";
import { SiAnytype } from "react-icons/si";
// import Community from "./pages/Community";
import Community from "./Community";
import FormPage from "./FormPage";
import ScrollUniversity from "./ScrollUniversity";
import Layout from "./Layout";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

import Mini1 from "../assets/mini-1.webp";
import Mini2 from "../assets/mini-2.webp";
import Mini3 from "../assets/mini-3.webp";
import Mini4 from "../assets/mini-4.webp";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Pofessor1 from "../assets/pro1.png";
import Pofessor2 from "../assets/pro2.png";
import Pofessor3 from "../assets/pro3.png";
import Pofessor4 from "../assets/pro4.png";
import Pofessor5 from "../assets/pro5.png";
import Pofessor6 from "../assets/pro6.png";

const Home = () => {
  const navigate = useNavigate();

  const goToFormPage=()=>{
    navigate("/login")
  }
  return (
    <>
      <div className="home-section">
        <div className="home">
          <div className="right-side-img">
            <div className="pro pod-user clr-yellow">
              <div className="pro-img clr-yellow">
                <img src={Pofessor3} alt="" />
              </div>
              <div className="pro-info ">
                <p className="clr-yellow">
                  Chandan helps people get into podcasting
                </p>
              </div>
            </div>

            <div className="pro brand-user clr-blue">
              <div className="pro-img clr-blue">
                <img src={Pofessor4} alt="" />
              </div>{" "}
              <div className="pro-info">
                <p className="clr-blue">
                  Dyumna helps you build your personal brand!
                </p>
              </div>
            </div>

            <div className="pro song-user clr-pink">
              <div className="pro-img clr-pink">
                <img src={Pofessor6} alt="" />
              </div>{" "}
              <div className="pro-info">
                <p className="clr-pink">Mark helps you produce your song!</p>
              </div>
            </div>
          </div>

          <div className="info">
            <div className="student-details">
              <div className="user-image">
                <img src={Mini4} alt="" />
                <img src={Mini2} alt="" />
                <img src={Mini1} alt="" />
                <img src={Mini3} alt="" />
              </div>
              <p>
                Trusted by <strong>5000+</strong> students from{" "}
                <strong>30+ </strong>countries
              </p>
            </div>
            <h1>
              Any passion, any college. <br /> We're here for you.
            </h1>
            <div className="text-msg">
              <p>
                {" "}
                Traditional college counselling is out of touch and expensive.{" "}
                <br />
                Learning new skills is hard. We pair you with an elder sibling
                who will <br /> guide you through it.
              </p>
            </div>
            <div className="btns">
              <button className="search-btn" type="button">
                <span>
                  <CiSearch />
                </span>
              </button>
              <button className="register-btn" type="button" onClick={goToFormPage}>
                Register Now{" "}
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>

          <div className="right-side-img">
            <div className="pro prince-user clr-pink">
              <div className="pro-img clr-pink">
                <img src={Pofessor1} alt="" />
              </div>
              <div className="pro-info ">
                <p className="clr-pink">Hafsa helps you apply to Princeton</p>
              </div>
            </div>

            <div className="pro ai-user clr-blue">
              <div className="pro-img clr-blue">
                <img src={Pofessor5} alt="" />
              </div>{" "}
              <div className="pro-info">
                <p className="clr-blue">Karthik helps you build AI tools</p>
              </div>
            </div>

            <div className="pro startup-user clr-yellow">
              <div className="pro-img clr-yellow">
                <img src={Pofessor2} alt="" />
              </div>{" "}
              <div className="pro-info">
                <p className="clr-yellow">
                  Shreyans helps you build your startup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollUniversity />
      <Community />
      <FormPage />
      <Layout />
      <Footer />
    </>
  );
};

export default Home;
