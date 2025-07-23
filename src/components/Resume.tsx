import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown, MapPin, Calendar } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "NCAI",
      period: "2023 - 2024",
      description: "Computer Vision projects using YOLO and TensorFlow for object detection and image classification.",
      skills: ["Computer Vision", "YOLO", "TensorFlow", "Python"]
    },
    {
      title: "Banking Operations Intern",
      company: "Al Baraka Bank",
      period: "2023",
      description: "Analyzed banking operations data and assisted with process automation initiatives.",
      skills: ["Data Analysis", "Process Automation", "Financial Analytics"]
    },
    {
      title: "Technical Lead",
      company: "MLSA Peshawar",
      period: "2022 - 2024",
      description: "Led AI and Cloud Computing initiatives, mentored team members, and organized technical workshops.",
      skills: ["AI", "Cloud Computing", "Leadership", "Mentoring"]
    },
    {
      title: "Campus Ambassador",
      company: "Leverify",
      period: "2022 - 2023",
      description: "Promoted tech education and career development programs among university students.",
      skills: ["Community Building", "Event Management", "Marketing"]
    },
    {
      title: "Freelance Data Analyst",
      company: "Fiverr/Upwork",
      period: "2021 - Present",
      description: "Delivered data analysis and dashboard creation services to clients across various industries.",
      skills: ["Data Analysis", "Power BI", "Excel", "Client Management"]
    },
    {
      title: "Operations Member",
      company: "GDSC",
      period: "2021 - 2022",
      description: "Supported technical events and workshops focused on Google technologies and developer tools.",
      skills: ["Event Operations", "Google Technologies", "Community Support"]
    }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/Fahad_Hussain_Resume.pdf';
    link.download = 'Fahad_Hussain_Data_AI_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="bg-white dark:bg-gray-900 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional journey in data science, AI engineering, and technical leadership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary/20"></div>
            
            {experiences.map((experience, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                
                {/* Content card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{experience.title}</h3>
                          <p className="text-primary font-medium">{experience.company}</p>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {experience.period}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" onClick={handleDownloadResume} className="gap-2">
            <FileDown className="w-5 h-5" />
            Download Full Resume
          </Button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Resume loaded from /Resume folder
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;