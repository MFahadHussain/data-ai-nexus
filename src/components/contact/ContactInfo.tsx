
import React from "react";
import { Mail } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

interface ContactInfoProps {
  contactEmail: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ contactEmail }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-6 flex items-center">
        <Mail className="mr-2 text-primary" /> Contact Information
      </h3>
      
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">
          I'm currently available for freelance work and full-time positions. 
          If you have a project that needs data expertise, let's talk about how I can help you.
        </p>
        
        <div className="pt-4">
          <p className="font-medium text-gray-800 dark:text-gray-200">Email</p>
          <a 
            href={`mailto:${contactEmail}`}
            className="text-primary hover:underline"
          >
            {contactEmail}
          </a>
        </div>
        
        <div>
          <p className="font-medium text-gray-800 dark:text-gray-200">Location</p>
          <p className="text-gray-600 dark:text-gray-300">New York, USA</p>
        </div>
      </div>
      
      <div className="mt-8">
        <p className="font-medium text-gray-800 dark:text-gray-200 mb-3">Connect with me</p>
        <SocialLinks />
      </div>
    </div>
  );
};
