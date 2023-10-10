import React from "react";
import locate from "../../Assets/locate.png";
import locate2 from "../../Assets/locate2.png";
import "./Locate.css";

export default function Locate() {
  return (
    <div className="locate">
      <img src={locate} className="img1" alt="" />
      <img src={locate2} className="img2" alt="" />
    </div>
  );
}
