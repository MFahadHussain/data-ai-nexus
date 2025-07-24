
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

const ProjectCard = ({ title, description, image, technologies, githubUrl, demoUrl }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden card-modern h-full flex flex-col">
      <div className="overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-end bg-gray-50 dark:bg-gray-800">
        <Button variant="outline" size="sm" asChild className="button-modern">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-1 h-4 w-4" /> Code
          </a>
        </Button>
        {demoUrl && (
          <Button size="sm" asChild className="button-modern">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 h-4 w-4" /> Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Automated Sales Analytics System",
      description: "Automates daily sales report generation and sends summaries via email using Gmail API integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Python", "Google Apps Script", "Gmail API", "Automation"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "Hand Gesture Recognition with Computer Vision",
      description: "Real-time gesture detection using webcam with deep learning integration for interactive applications.",
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com"
    },
    {
      title: "Business Models Data Cleaning",
      description: "Extracted and cleaned business datasets for downstream analysis, ensuring data quality and consistency.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      technologies: ["Python", "Excel", "SQL", "Data Cleaning"],
      githubUrl: "https://github.com"
    },
    {
      title: "Automated Power BI Dashboard",
      description: "Live-updating dashboard built for stakeholders using real-time data integration and automated refresh cycles.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      technologies: ["Power BI", "Excel", "DAX", "Data Modeling"],
      githubUrl: "https://github.com",
      demoUrl: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="bg-white dark:bg-gray-900 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent data and AI engineering projects, demonstrating technical 
            expertise and problem-solving capabilities across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2 button-modern">
            <Code className="w-5 h-5" />
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
