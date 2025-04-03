
import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin
    },
    {
      name: "Email",
      url: "mailto:contact@example.com",
      icon: Mail
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">DataAI<span className="text-primary">Nexus</span></h3>
            <p className="text-gray-300 mb-4 max-w-xs">
              Transforming data into intelligent solutions for businesses and organizations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Data Engineering Solutions</span></li>
              <li><span className="text-gray-300">AI & ML Models</span></li>
              <li><span className="text-gray-300">Cloud & DevOps</span></li>
              <li><span className="text-gray-300">Data Visualization</span></li>
              <li><span className="text-gray-300">Freelance Consulting</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} DataAINexus. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
