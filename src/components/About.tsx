
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "Bachelor in Data Science",
      institution: "Institute of Management Sciences Peshawar",
      year: "2022 - 2026",
      description: "Focused on machine learning algorithms and data engineering."
    },
    {
      degree: "AI & Data Science Bootcamp",
      institution: "DataCamp",
      year: "2024",
      description: "Intensive training on AI applications and advanced data science techniques."
    },
    {
      degree: "Google Data Analytics Certificate",
      institution: "Google",
      year: "2024",
      description: "Professional certification in data analytics and visualization."
    }
  ];

  

  const skills = [
    "Python", "SQL", "ETL Pipelines", "Power BI",
    "Machine Learning",
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
            Skilled Data Analyst and AI Engineer with hands-on experience in building data pipelines, 
            automating dashboards, and deploying intelligent systems. Proficient in Python, SQL, Power BI, 
            Airflow, Spark, and cloud platforms like AWS, Azure, and GCP. Passionate about translating 
            data into actionable insights.
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
              <h3 className="text-2xl font-semibold">Key Strengths</h3>
            </div>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg">Data Engineering</h4>
                  <p className="text-gray-600 dark:text-gray-300">Building robust ETL pipelines and data infrastructure for scalable solutions.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg">AI Implementation</h4>
                  <p className="text-gray-600 dark:text-gray-300">Deploying machine learning models and AI systems for real-world applications.</p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg">Business Intelligence</h4>
                  <p className="text-gray-600 dark:text-gray-300">Creating interactive dashboards and actionable insights from complex data.</p>
                </CardContent>
              </Card>
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
