import React from "react";
import Navbar from "./components/Navbar/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Education from "./components/Education/Education.tsx";
import Contact from "./components/Contact/Contact.tsx";
import Footer from "./components/Footer/Footer.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
