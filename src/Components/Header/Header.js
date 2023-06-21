import React from "react";
import "./Header.css";
import trol from "../../Assets/troll-face.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={trol} alt="" />
        <h1>Meme Generator</h1>
      </div>

      <div className="header-text">
        <p>React course - Project 3</p>
      </div>
    </div>
  );
};

export default Header;
