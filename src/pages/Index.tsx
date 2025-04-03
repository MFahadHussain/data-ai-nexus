
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Chatbot } from "../components/chatbot/Chatbot";

const Index = () => {
  const contactEmail = "bangashfahad98@gmail.com";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Chatbot contactEmail={contactEmail} />
    </div>
  );
};

export default Index;
