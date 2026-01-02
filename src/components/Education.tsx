import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "BS Data Science",
      institution: "IMSciences (Institute of Management Sciences)",
      location: "Peshawar, Pakistan",
      period: "Oct 2022 – Present",
      description: "Pursuing Bachelor's degree in Data Science with focus on machine learning, data engineering, AI, and business intelligence. Active in tech community as Campus Ambassador and MLSA Lead."
    },
    {
      degree: "FSc Computer Science",
      institution: "Edwardes College Peshawar",
      location: "Peshawar, Pakistan",
      period: "Sep 2020 – Jun 2022",
      description: "Completed intermediate studies in Computer Science, building strong foundation in programming, algorithms, and computer fundamentals."
    }
  ];

  return (
    <section id="education" className="bg-gray-50 dark:bg-gray-800 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Education</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic journey and educational background in Data Science and Computer Science.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary/20"></div>
            
            {education.map((edu, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                
                {/* Content card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="card-modern">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-primary font-medium mb-2">{edu.institution}</p>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

