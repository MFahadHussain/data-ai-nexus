
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Bachelor in Data Science",
      institution: "Tech University",
      year: "2019 - 2023",
      description: "Focused on machine learning algorithms and data engineering."
    },
    {
      degree: "AI & Data Science Bootcamp",
      institution: "DataCamp",
      year: "2022",
      description: "Intensive training on AI applications and advanced data science techniques."
    },
    {
      degree: "Google Data Analytics Certificate",
      institution: "Google",
      year: "2021",
      description: "Professional certification in data analytics and visualization."
    }
  ];

  const experience = [
    {
      role: "MLSA Technical Lead",
      company: "Microsoft Learn Student Ambassadors",
      period: "2022 - Present",
      description: "Leading workshops on AI and cloud technologies. Mentoring students on data science projects."
    },
    {
      role: "Microsoft Lead Ambassador",
      company: "Microsoft",
      period: "2021 - 2022",
      description: "Organized tech events and hackathons focused on cloud computing and AI solutions."
    },
    {
      role: "Freelance Data Analyst",
      company: "Various Clients",
      period: "2020 - Present",
      description: "Delivering data-driven insights through analysis and visualization for business clients."
    }
  ];

  const skills = [
    "Python", "SQL", "ETL Pipelines", "Power BI", 
    "Apache Spark", "TensorFlow", "AWS", "GCP", 
    "Azure", "Docker", "Git", "Django",
    "NLP", "Computer Vision", "R", "Data Visualization"
  ];

  return (
    <section id="about" className="bg-white dark:bg-gray-900 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A passionate Data & AI Engineer with experience in building intelligent data solutions and 
            implementing machine learning models to solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-semibold">Education & Certifications</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg">{item.degree}</h4>
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <span>{item.institution}</span>
                      <span>{item.year}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg">{item.role}</h4>
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <span>{item.company}</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-6 justify-center">
            <BadgeCheck className="w-6 h-6 text-primary mr-2" />
            <h3 className="text-2xl font-semibold">Skills & Tech Stack</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
