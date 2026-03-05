import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div className="header text-center text-white">
      <h2>Sakshi Dubey</h2>
      <h1>Frontend Developer</h1>

      <div className="social">
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaGithub /></a>
      </div>

      <button className="btn btn-light m-2">Download CV</button>
      <button className="btn btn-warning m-2">View Projects</button>
    </div>
  );
}

export default Header;