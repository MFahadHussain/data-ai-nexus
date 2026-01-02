
import React from "react";
import { Mail, User, MapPin, Phone, Linkedin, ExternalLink } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

interface ContactInfoProps {
  contactEmail: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ contactEmail }) => {
  return (
    <div className="bg-white dark:bg-gray-900 card-modern p-6">
      <h3 className="text-xl font-semibold mb-6 flex items-center">
        <Mail className="mr-2 text-primary" /> Contact Information
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <User className="text-primary" />
          <h4 className="font-medium text-gray-800 dark:text-gray-200">Fahad Hussain</h4>
        </div>

        <p className="text-gray-600 dark:text-gray-300">
          Available for data consulting, AI engineering projects, and dashboard development. 
          Let's discuss how I can help transform your data into actionable insights and automated solutions.
        </p>
        
        <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-1 flex items-center">
              <Phone className="w-4 h-4 mr-2 text-primary" /> Phone
            </p>
            <a 
              href="tel:+923340072900"
              className="text-primary hover:underline"
            >
              0334-0072900
            </a>
          </div>
          
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-1 flex items-center">
              <Mail className="w-4 h-4 mr-2 text-primary" /> Email
            </p>
            <a 
              href={`mailto:${contactEmail}`}
              className="text-primary hover:underline"
            >
              {contactEmail}
            </a>
          </div>
          
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-1 flex items-center">
              <Linkedin className="w-4 h-4 mr-2 text-primary" /> LinkedIn
            </p>
            <a 
              href="https://www.linkedin.com/in/fahadbangash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center"
            >
              www.linkedin.com/in/fahadbangash
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
          
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-1 flex items-center">
              <ExternalLink className="w-4 h-4 mr-2 text-primary" /> Portfolio
            </p>
            <a 
              href="https://fahadai.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center"
            >
              fahadai.netlify.app
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
          
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-200 mb-1 flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary" /> Location
            </p>
            <p className="text-gray-600 dark:text-gray-300">Peshawar, Pakistan</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="font-medium text-gray-800 dark:text-gray-200 mb-3">Connect with me</p>
        <SocialLinks />
      </div>
    </div>
  );
};
