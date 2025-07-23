
import React from "react";
import { Github, Linkedin, ExternalLink } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/fahadbangash/",
      icon: Linkedin
    },
    {
      name: "GitHub",
      url: "https://github.com/MFahadHussain",
      icon: Github
    },
    {
      name: "Fiverr",
      url: "https://fiverr.com",
      icon: ExternalLink
    },
    {
      name: "Upwork",
      url: "https://upwork.com",
      icon: ExternalLink
    }
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
          aria-label={link.name}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};
