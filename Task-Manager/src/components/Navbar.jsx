import React from "react";

 


export default function Navbar() {
  return (
    <div className="container-fluid position-relative p-4  my-3 fw-bold fs-1 bg-light p-3 mb-5 bg-body-tertiary  ">
        <div className="container position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center  ">
          <a className="navbar-brand" href="#">
            Task Manager Web Application.
          </a>
        </div>
      
    </div>
  );
}
