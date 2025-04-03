
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
    <Card className="border-none shadow-lg hover:shadow-xl transition-all group">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-t-lg pb-2">
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
      title: "Data Engineering Solutions",
      description: "Design and implementation of robust data pipelines and ETL processes for efficient data processing.",
      Icon: Database,
      skills: ["ETL Pipelines", "Data Warehousing", "Big Data Processing", "Database Design", "Data Modeling"]
    },
    {
      title: "AI & ML Models",
      description: "Development and deployment of machine learning and deep learning models for various applications.",
      Icon: Brain,
      skills: ["Deep Learning", "NLP", "Computer Vision", "MLOps", "Neural Networks", "Model Optimization"]
    },
    {
      title: "Cloud & DevOps",
      description: "Implement and manage cloud infrastructure for data and AI workloads with proper CI/CD practices.",
      Icon: Cloud,
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code"]
    },
    {
      title: "Data Visualization",
      description: "Create insightful dashboards and reports to communicate data findings and drive decision-making.",
      Icon: BarChart3,
      skills: ["Power BI", "Tableau", "Interactive Dashboards", "Data Storytelling", "Business Intelligence"]
    },
    {
      title: "Freelance Consulting",
      description: "End-to-end consulting services for data science and AI projects with personalized solutions.",
      Icon: HeartHandshake,
      skills: ["Project Management", "Requirements Analysis", "Technical Documentation", "Training & Workshops"]
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
