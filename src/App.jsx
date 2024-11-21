import { useState, useRef, createContext } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

export const ContactContext = createContext();

function App() {
  const contactRef = useRef(null);

  const focusInput = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      contactRef.current?.focus();
    }, 500);
  };

  return (
    <>
      <ContactContext.Provider value={{ focusInput }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact inputRef={contactRef} />
      </ContactContext.Provider>
    </>
  );
}

export default App;
