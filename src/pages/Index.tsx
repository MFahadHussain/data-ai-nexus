
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Dashboards from "../components/Dashboards";
import Resume from "../components/Resume";
import Certifications from "../components/Certifications";
import PhotoGallery from "../components/PhotoGallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Chatbot } from "../components/chatbot/Chatbot";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Index = () => {
  const contactEmail = "bangashfahad98@gmail.com";
  
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <div className="fade-in-section">
          <About />
        </div>
        <div className="fade-in-section">
          <Skills />
        </div>
        <div className="fade-in-section">
          <Projects />
        </div>
        <div className="fade-in-section">
          <Dashboards />
        </div>
        <div className="fade-in-section">
          <Resume />
        </div>
        <div className="fade-in-section">
          <Certifications />
        </div>
        <PhotoGallery />
        <div className="fade-in-section">
          <Contact />
        </div>
      </main>
      <Footer />
      <Chatbot contactEmail={contactEmail} />
    </div>
  );
};

export default Index;
