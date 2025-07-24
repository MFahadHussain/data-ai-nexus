
import React from "react";
import { Button } from "@/components/ui/button";
import { FileDown, ExternalLink, Mail } from "lucide-react";

const Hero = () => {
  // Function to handle download of resume
  const handleDownloadResume = () => {
    // Create a link to download a sample resume PDF
    // In a real scenario, you would replace this with your actual resume file path
    const link = document.createElement('a');
    link.href ='/Resume.pdf'; // This assumes you've added a resume.pdf file in the public folder
    link.download = 'data_ai_engineer_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 section-padding pt-24"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-800 dark:text-gray-200">Fahad Hussain</span>
            <br />
            <span className="heading-gradient">Data & AI Engineer Consultant</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
            Helping teams turn complex data into smart decisions with AI and automation.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-primary hover:bg-primary/90 px-6 py-6"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Mail className="mr-2 h-5 w-5" /> Hire Me
            </Button>
            <Button 
              variant="outline" 
              className="px-6 py-6"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <ExternalLink className="mr-2 h-5 w-5" /> View Projects
            </Button>
            <Button 
              variant="secondary" 
              className="px-6 py-6"
              onClick={handleDownloadResume}
            >
              <FileDown className="mr-2 h-5 w-5" /> Download Resume
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
              <span className="text-gray-600 dark:text-gray-400">📧 bangashfahad98@gmail.com</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
              <span className="text-gray-600 dark:text-gray-400">📍 Peshawar, PK</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
              <a href="https://linkedin.com/in/fahadbangash/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary">💼 LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full p-1">
              <div className="bg-white dark:bg-gray-900 rounded-full p-2">
                <img
                  src="/profile.jpg" 
                  alt="Professional Data & AI Engineer"
                  className="rounded-full w-64 h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
