import { useState } from "react";
import axios from "axios";
import { users_api } from "../utils/api.js";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router";
import {FaTwitter,FaUserAlt,FaEnvelope, FaPhoneAlt, FaLock} from "react-icons/fa";

export default function SignUp() {
  const [user, setUser] = useState({});

  const handleSignup = async () => {
    const res = await axios.post(users_api, user);

    if (res.status === 201) {
      alert("User signup successfully !!");
    } else {
      alert("Can not signup user !");
    }
  };

  return (
    <div className="bg-success  " style={{background: "linear-gradient(135deg, #1DA1F2, #0d8ddb)", }}>
    <div className="container" >
      <div className="container-fluid" >
        <div className="d-flex justify-content-center align-items-center h-100vh overflow-hidden">
          <div className="container-fluid bg-white w-50 p-4 overflow-hidden m-2 rounded-5 shadow-lg ">

            {/*Twitter Icon*/}
            <div className="text-center mb-4 ">
              <FaTwitter size={45} color="#1DA1F2" />
            </div>

            {/* Heading */}
            <h1 className="text-center fw-bold mb-4 h-25 " style={{ fontSize: "44px" }}>
              Sign Up to Twitter
            </h1>

            {/* Full Name */}
            <div className="mb-4">
              <label className="form-label text-secondary small ms-4">
                Name
              </label>
              <div className="input-group border border-info rounded-pill px-2 py-2" style={{ borderWidth: "3px" }}>
                <span className="input-group-text bg-transparent border-0">
                  <FaUserAlt className="text-secondary" />
                </span>
                <input onChange={(e) => setUser({ ...user, name: e.target.value })} type="text" className="form-control border-0 shadow-none"
                  placeholder="John" />
              </div>
            </div>

            {/* Last Name */}
            <div className="mb-4">
              <label className="form-label text-secondary small ms-3">
                Last Name
              </label>
              <div className="input-group border border-info rounded-pill px-3 py-2" style={{ borderWidth: "2px" }}>
                <span className="input-group-text bg-transparent border-0">
                  <FaUserAlt className="text-secondary" />
                </span>
                <input onChange={(e) => setUser({ ...user, lastName: e.target.value })} type="text" className="form-control border-0 shadow-none"
                  placeholder="Smith"/>
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="form-label text-secondary small ms-3">
                Email
              </label>
              <div className="input-group border border-info rounded-pill px-3 py-2" style={{ borderWidth: "2px" }} >
                <span className="input-group-text bg-transparent border-0">
                  <FaEnvelope className="text-secondary" />
                </span>
                <input onChange={(e) => setUser({ ...user, email: e.target.value })} type="email"  className="form-control border-0 shadow-none" placeholder="yourmail@twitter.com" />
              </div>
            </div>



            {/* Phone */}
            <div className="mb-4">
              <label className="form-label text-secondary small ms-3">
                Phone
              </label>
              <div className="input-group border border-info rounded-pill px-3 py-2" style={{ borderWidth: "2px" }} >
                <span className="input-group-text bg-transparent border-0">
                  <FaPhoneAlt className="text-secondary" />
                </span>
                <input onChange={(e) => setUser({ ...user, phone: e.target.value })} type="text" className="form-control border-0 shadow-none" placeholder="9876543210"  />
              </div>
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="form-label text-secondary small ms-3">
                Password
              </label>
              <div className="input-group border border-info rounded-pill px-3 py-2" style={{ borderWidth: "2px" }} >
                <span className="input-group-text bg-transparent border-0">
                  <FaLock className="text-secondary" />
                </span>
                <input onChange={(e) => setUser({ ...user, password: e.target.value })}type="password"  className="form-control border-0 shadow-none"  placeholder="••••••••"  />
              </div>
            </div>


            {/* Button */}
            <div className="d-grid mb-4">
              <button onClick={handleSignup}  className="btn text-white rounded-pill py-3 fw-semibold" style={{ background: "linear-gradient(to right, #1DA1F2, #00C6FF)", fontSize: "24px", boxShadow: "0px 8px 20px rgba(29, 161, 242, 0.4)", }}
              >
                Sign Up
                
              </button>
            </div>

            {/* Bottom Text */}
            <p className="text-center text-secondary">
              You have an account?{" "}
              <span className="text-info fw-semibold" style={{ cursor: "pointer" }}>
                <Link to="/signin">Sign In &gt;</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
     </div>
  );
}
