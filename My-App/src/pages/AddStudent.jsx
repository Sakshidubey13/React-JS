import React, { useState } from "react"; 
// Hook import

import { useNavigate } from "react-router-dom"; 
// Navigation

function AddStudent() {
  const [name, setName] = useState(""); 
  // Name state

  const [age, setAge] = useState(""); 
  // Age state

  const navigate = useNavigate(); 
  // Redirect ke liye

  const handleAdd = () => {
    const newStudent = {
      id: Date.now(), 
      // Unique id

      name,
      age,
    };

    const existing =
      JSON.parse(localStorage.getItem("students")) || []; 
    // Old data

    const updated = [...existing, newStudent]; 
    // New student add

    localStorage.setItem("students", JSON.stringify(updated)); 
    // Save

    navigate("/"); 
    // Home pe redirect
  };

  return (
    <div className="container mt-4">
      <h2>Add Student</h2>

      <input
        className="form-control mb-3"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-3"
        placeholder="Enter Age"
        onChange={(e) => setAge(e.target.value)}
      />

      <button className="btn btn-success" onClick={handleAdd}>
        Add Student
      </button>
    </div>
  );
}

export default AddStudent;