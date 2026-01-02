
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
      title: "Core Expertise",
      description: "Specialized skills in AI, Computer Vision, and Data Analysis.",
      Icon: Brain,
      skills: ["Computer Vision", "Deep Learning", "AI & ML", "Data Analysis", "Business Intelligence"]
    },
    {
      title: "Programming & Tools",
      description: "Proficiency in programming languages and data tools for AI and BI applications.",
      Icon: Database,
      skills: ["Python", "PyTorch", "TensorFlow", "SQL", "Power BI", "Excel"]
    },
    {
      title: "Model Deployment & APIs",
      description: "Deploying AI models and building scalable API solutions for production environments.",
      Icon: Cloud,
      skills: ["ONNX", "TensorRT", "Model Deployment", "REST APIs"]
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
