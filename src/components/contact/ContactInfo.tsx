
import React from "react";
import { Mail, User, MapPin } from "lucide-react";
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
        <div className="flex items-center gap-2">
          <User className="text-primary" />
          <h4 className="font-medium text-gray-800 dark:text-gray-200">Fahad Hussain</h4>
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          Available for data consulting, AI engineering projects, and dashboard development. 
          Let's discuss how I can help transform your data into actionable insights and automated solutions.
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
          <div className="flex items-center gap-2">
            <MapPin className="text-primary h-4 w-4" />
            <p className="text-gray-600 dark:text-gray-300">Peshawar, Pakistan</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <p className="font-medium text-gray-800 dark:text-gray-200 mb-3">Connect with me</p>
        <SocialLinks />
      </div>
    </div>
  );
};
