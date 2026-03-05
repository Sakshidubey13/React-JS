import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/skills";
//import Navbar from "./Components/Navbar/Navbar"
import "./App.css";

function App() {
  return (
    <div>
      {/*<Navbar/>*/}
      <Header />
      <About />
      <Skills/>
      <Projects />
      <Footer />
      
    </div>
  );
}

export default App;