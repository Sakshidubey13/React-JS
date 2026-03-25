import React from "react";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router";
import Users from "./components/Users/Users";

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/users" element={<Users />} />
      </Routes>

     
    </div>
  );
}

//routes ->way
