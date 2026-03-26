import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ padding: "10px", background: "black" }}>
      
      <Link to="/" style={{ color: "white", marginRight: "10px" }}>
        Home
      </Link>

      <Link to="/add" style={{ color: "white" }}>
        Add Student
      </Link>

    </div>
  );
}

export default Navbar;