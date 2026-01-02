
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Briefcase, GraduationCap, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                <img
                  src="/profile.jpg"
                  alt="Fahad Hussain - Data & AI Engineer"
                  className="w-48 h-48 rounded-full object-cover border-4 border-primary/20"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  A passionate Data Science and AI professional at IMSciences with hands-on experience in Data Analysis, AI, and Business Intelligence. Skilled in Python, SQL, Power BI, Excel, and modern AI frameworks. Actively contributing to the tech community as Campus Ambassador, MLSA Lead, and Freelance AI Engineer.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
