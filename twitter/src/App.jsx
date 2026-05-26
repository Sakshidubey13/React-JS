import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "../screen/HomePage";
import SignUp from "../screen/SignUp";
import SignIn from "../screen/SignIn";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}
