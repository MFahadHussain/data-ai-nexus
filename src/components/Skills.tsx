
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Database, 
  Brain, 
  Cloud, 
  BarChart3, 
  LucideIcon, 
  HeartHandshake 
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  skills: string[];
}

const ServiceCard = ({ title, description, Icon, skills }: ServiceCardProps) => {
  return (
    <Card className="card-modern group h-full">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-t-card pb-2">
        <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
          <Icon className="text-white h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-700 dark:text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  const services = [
    {
      title: "Programming & Languages",
      description: "Proficiency in multiple programming languages for data science and AI applications.",
      Icon: Database,
      skills: ["Python", "SQL", "JavaScript", "R"]
    },
    {
      title: "Data Engineering & Analytics",
      description: "Building robust data pipelines and performing advanced analytics on large datasets.",
      Icon: Brain,
      skills: ["Apache Spark", "Apache Airflow", "ETL Pipelines", "Pandas", "NumPy"]
    },
    {
      title: "Business Intelligence",
      description: "Creating powerful dashboards and automated reporting solutions for business insights.",
      Icon: BarChart3,
      skills: ["Power BI", "Tableau", "Excel", "Dashboard Automation"]
    },
    {
      title: "Cloud Platforms",
      description: "Deploying and managing data solutions across major cloud platforms.",
      Icon: Cloud,
      skills: ["AWS", "Azure", "Google Cloud Platform (GCP)", "Google Apps Script"]
    },
    {
      title: "Machine Learning & AI",
      description: "Developing and deploying AI solutions including computer vision and deep learning models.",
      Icon: HeartHandshake,
      skills: ["TensorFlow", "OpenCV", "Computer Vision", "Deep Learning"]
    }
  ];

  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-800 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Skills & Services</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized expertise and professional services in data engineering, artificial intelligence, 
            and cloud computing to help businesses leverage their data assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
              skills={service.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
