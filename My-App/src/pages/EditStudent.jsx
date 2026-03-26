import React, { useEffect, useState } from "react"; 
// Hooks

import { useParams, useNavigate } from "react-router-dom"; 
// URL se id lene ke liye

function EditStudent() {
  const { id } = useParams(); 
  // URL se id

  const navigate = useNavigate();

  const [name, setName] = useState(""); 
  const [age, setAge] = useState("");

  useEffect(() => {
    const students =
      JSON.parse(localStorage.getItem("students")) || []; 
    // Data load

    const student = students.find((s) => s.id == id); 
    // Specific student find

    if (student) {
      setName(student.name); 
      setAge(student.age);
    }
  }, [id]);

  const handleUpdate = () => {
    const students =
      JSON.parse(localStorage.getItem("students")) || [];

    const updated = students.map((s) =>
      s.id == id ? { ...s, name, age } : s
    );
    // Update specific student

    localStorage.setItem("students", JSON.stringify(updated)); 
    // Save

    navigate("/"); 
    // Redirect
  };

  return (
    <div className="container mt-4">
      <h2>Edit Student</h2>

      <input
        className="form-control mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-3"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleUpdate}>
        Update
      </button>
    </div>
  );
}

export default EditStudent;