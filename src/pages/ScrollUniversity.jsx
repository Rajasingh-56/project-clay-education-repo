import React from "react";
import "../Styles/ScrollUniversity.scss";
import univesity from "../assets/scroll-image/image.webp";
import univesity1 from "../assets/scroll-image/image (1).webp";
import univesity2 from "../assets/scroll-image/image (2).webp";
import univesity3 from "../assets/scroll-image/image (3).webp";
import univesity4 from "../assets/scroll-image/image (4).webp";
import univesity5 from "../assets/scroll-image/image (5).webp";
import univesity6 from "../assets/scroll-image/image (6).webp";
import univesity7 from "../assets/scroll-image/image (7).webp";

const universityImages = [
  univesity,
  univesity1,
  univesity2,
  univesity3,
  univesity4,
  univesity5,
  univesity6,
  univesity7,
];

const ScrollUniversity = () => {
  return (
    <div className="wrapper">
      {universityImages.map((img, index) => (
        <div key={index} className={`item item${index + 1}`}>
          <img src={img} alt={`university-${index + 1}`} />
        </div>
      ))}
      {universityImages.map((img, index) => (
        <div key={`duplicate-${index}`} className={`item item${index + 1}`}>
          <img src={img} alt={`university-${index + 1}`} />
        </div>
      ))}
    </div>
  );
};
export default ScrollUniversity;
