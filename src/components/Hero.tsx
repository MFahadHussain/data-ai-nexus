
import React from "react";
import { Button } from "@/components/ui/button";
import { FileDown, ExternalLink, Mail, Linkedin, Phone } from "lucide-react";

const Hero = () => {
  // Function to handle download of resume
  const handleDownloadResume = () => {
    try {
      const link = document.createElement('a');
      link.href = '/Resume.pdf';
      link.download = 'Fahad_Hussain_Data_AI_Engineer_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab
      window.open('/Resume.pdf', '_blank');
    }
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
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold heading-gradient">
            Data & AI Engineer | BI Analyst | Building Scalable Pipelines & Smart Solutions
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
            Passionate about transforming complex data into actionable insights through AI, Computer Vision, and Business Intelligence.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-primary hover:bg-primary/90 px-6 py-6"
              asChild
            >
              <a href="https://www.linkedin.com/in/fahadbangash" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="px-6 py-6"
              asChild
            >
              <a href="mailto:bangashfahad98@gmail.com">
                <Mail className="mr-2 h-5 w-5" /> Email
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="px-6 py-6"
              asChild
            >
              <a href="tel:+923340072900">
                <Phone className="mr-2 h-5 w-5" /> Phone
              </a>
            </Button>
            <Button 
              variant="secondary" 
              className="px-6 py-6"
              onClick={handleDownloadResume}
            >
              <FileDown className="mr-2 h-5 w-5" /> Resume PDF
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
              <a href="mailto:bangashfahad98@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary">📧 bangashfahad98@gmail.com</a>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
              <a href="tel:+923340072900" className="text-gray-600 dark:text-gray-400 hover:text-primary">📞 0334-0072900</a>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
              <a href="https://www.linkedin.com/in/fahadbangash" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary">💼 LinkedIn</a>
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
                  alt="Fahad Hussain - Data & AI Engineer"
                  className="rounded-full w-80 h-80 object-cover object-top"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
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
