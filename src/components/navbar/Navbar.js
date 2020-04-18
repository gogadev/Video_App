import React from "react";

import Bounce from "react-reveal/Bounce";

import img from "../../assets/music.png";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <Bounce left>
        <h1 className="nav-title">
          <span>V</span>ideos <span>N</span>on<span>S</span>top
        </h1>
      </Bounce>
      <Bounce right>
        <img className="img" src={img} alt="" />
      </Bounce>
    </nav>
  );
};

export default Navbar;
