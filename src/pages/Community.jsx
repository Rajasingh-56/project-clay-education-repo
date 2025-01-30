import React from "react";
import "../Styles/Community.scss";

const Community = () => {
  return (
    <div className="community-section">
      <div className="scroll-section">
        
      </div>
      <div className="community-info">
        <h2>Looking to apply to Harvard?</h2>
        <p>A Harvard student will guide you through the whole process.</p>
        <h2>Have the next big idea?</h2>
        <p>A Shark Tank founder will help you bring it to life.</p>
        <p>
          Our mentors are students at your dream universities, <br /> and young
          professionals at India’s top startups.
        </p>
      </div>
      <a href="_/">
        <button>Join Community</button>
      </a>
      <div className="ratio">
        <iframe
          frameBorder={0}
          src="https://www.youtube.com/embed/rt7o4Fh5PJw  "
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Community;
