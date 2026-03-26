import React from "react"; 
// React import

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
// Routing ke liye components

import Navbar from "./components/Navbar"; 
// Navbar component import

import Home from "./pages/Home"; 
// Home page import

import AddStudent from "./pages/AddStudent"; 
// Add student page import

import EditStudent from "./pages/EditStudent"; 
// Edit page import

function App() {
  return (
    <BrowserRouter> 
      {/* Router start (poore app ko wrap karta hai) */}

      <Navbar /> 
      {/* Navbar har page pe show hoga */}

      <Routes> 
        {/* Routes container */}

        <Route path="/" element={<Home />} /> 
        {/* Home page */}

        <Route path="/add" element={<AddStudent />} /> 
        {/* Add page */}

        <Route path="/edit/:id" element={<EditStudent />} /> 
        {/* Dynamic route (id ke basis pe edit) */}

      </Routes>
    </BrowserRouter>
  );
}

export default App; 
// Component export