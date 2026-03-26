import React, { useState } from "react";
import { useNavigate } from "react-router";
//array = is to store multiple value of same datatype.
//object(hasmap) = to store multiple values of different data type or diffrent behavior.

export default function Form() {
  const navigate = useNavigate();

  //setuse -> value update.
  const [user, setUser] = useState({});
  const [check, setCheck] = useState(false);

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(user)); //data convert in string to use stringify
    alert("Form Submitted !!");
    navigate("/home");
  };

return (
  <div style={{ height: "100vh" }} className=" position-relative">
    <div className="col-3 position-absolute top-50 start-50 translate-middle">
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            onChange={(e) => setUser({ ...user, name: e.target.value })}
      
      
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>

        {/* email */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/* contact sec */}
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Contact
          </label>
          <input
            onChange={(e) => setUser({ ...user, contact: e.target.value })}
            type="number"
            className="form-control"
            id="number"
            aria-describedby="emailHelp"
          />
        </div>

        {/* password */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={() => setUser({ ...user, password: e.target.value })}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {/* submit */}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            checked={check}
            onChange={() => setCheck(!check)}
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check after reading all Terms & Condition
          </label>
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${check ? "" : "disabled"}`}
        >
          Submit
        </button>
      </form>
    </div>
  </div>
);
}