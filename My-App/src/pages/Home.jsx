import React from "react"; 
// React import

import { Link } from "react-router-dom"; 
// Link use hota hai page navigate karne ke liye

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark p-3"> 
      {/* Bootstrap navbar */}

      <div className="container">

        <h3 className="text-white">Student Manager</h3> 
        {/* Title */}

        <div>
          <Link to="/" className="btn btn-light me-2"> 
            {/* Home button */}
            Home
          </Link>

          <Link to="/add" className="btn btn-warning"> 
            {/* Add button */}
            Add Student
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;