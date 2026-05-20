import React, { useState } from "react";
import axios from "axios";
import { FaTwitter } from "react-icons/fa";
import { users_api } from "../utils/api.js";
import {Link} from "react-router";
import {useNavigate} from "react-router";

export default function SignIn() {
  const navigate = useNavigate()
  const [user, setUser] = useState({});


         const handleSignIn = async () => {
         const res = await axios.get(users_api);
         const loginUser = res.data.find((e) => e.name == user.name && e.email == user.email && e.password == user.password )
          if(loginUser){
          localStorage.setItem("current-user",JSON.stringify(loginUser));
          alert("SignIn Successfully !")
          navigate("/home")
         }else{
         alert("SignIn Failed !")
          }
          };

  return (
    <div
      className="d-flex bg-black text-white justify-content-center align-items-center vh-100" style={{background: "linear-gradient(135deg, #1DA1F2, #0d8ddb)", }}>
      <div
        className="card p-5 shadow "

        style={{ width: "500px",height:"500px", borderRadius: "20px" }}>
        <div className="text-center mb-4">
          <FaTwitter size={60} color="#1DA1F2" />
          <h4 className="mt-5 fw-bold">Log in to Twitter</h4>
        </div>


         <div>
           <input  type="text" placeholder="Name"  className="form-control mb-3 border-2" onChange={(e) => setUser({ ...user, name: e.target.value })} />
           <input  type="text" placeholder="Email" className="form-control mb-3" onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <input type="text" placeholder="Password" className="form-control mb-3"  onChange={(e) => setUser({ ...user, password: e.target.value })} />
               <button onClick={handleSignIn} className="btn w-100 text-white" style={{ backgroundColor: "#1DA1F2" }}>SignIn</button>
         </div>

        <div className="text-center mt-3">
         <small>
              Forgot password?
           <Link to="/" className="text-primary">
              Sign up for Twitter
           </Link>
         </small>
        </div>
      </div>
    </div>
  );
}