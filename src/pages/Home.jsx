import React from "react";
import "../Styles/Home.scss";
import { SiAnytype } from "react-icons/si";


const Home = () => {
  return (
    <div className="company-info">
        <div className="home">
      <h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quis
        distinctio at iure itaque vero beatae odit nostrum ullam temporibus? At,
        ipsum natus.
      </h2>
      <h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quis
        distinctio at iure itaque vero beatae odit nostrum ullam temporibus? At,
        ipsum natus.
      </h3>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quis
        distinctio at iure itaque vero beatae odit nostrum ullam temporibus? At,
        ipsum natus.
      </h1>
      <button> <SiAnytype/>  Submit</button>
      <button>Type</button>
      <button>None</button>
      <button>Cancel</button>
   </div>
    </div>
  );
};

export default Home;
