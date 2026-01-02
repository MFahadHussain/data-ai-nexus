
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  demoUrl?: string;
}

const ProjectCard = ({ title, description, image, technologies, category, githubUrl, demoUrl }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden card-modern h-full flex flex-col group hover:shadow-lg transition-shadow">
      <div className="overflow-hidden h-48 bg-gray-100 dark:bg-gray-800">
        <img 
          src={image} 
          alt={`${title} project screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="flex-1">{title}</CardTitle>
          <Badge variant="secondary" className="ml-2">{category}</Badge>
        </div>
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
        {githubUrl && (
          <Button variant="outline" size="sm" asChild className="button-modern">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} on GitHub`}>
              <Github className="mr-1 h-4 w-4" /> Code
            </a>
          </Button>
        )}
        {demoUrl && (
          <Button size="sm" asChild className="button-modern">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} demo`}>
              <ExternalLink className="mr-1 h-4 w-4" /> Demo
            </a>
          </Button>
        )}
        {!githubUrl && !demoUrl && (
          <Button variant="outline" size="sm" className="button-modern" disabled>
            <Code className="mr-1 h-4 w-4" /> Project Details
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Face Recognition with Automated Barriers",
      description: "Computer vision system for real-time face recognition integrated with automated barrier control. Built using YOLO and deep learning models for high-accuracy identification.",
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Computer Vision", "YOLO", "PyTorch", "OpenCV", "Deep Learning", "Python"],
      category: "AI & Computer Vision",
      githubUrl: "https://github.com/MFahadHussain",
      demoUrl: undefined
    },
    {
      title: "Automatic Number Plate Recognition (ANPR)",
      description: "Real-time ANPR system for vehicle identification using computer vision and OCR. Optimized for edge devices with TensorRT for production deployment.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Computer Vision", "OCR", "TensorRT", "ONNX", "Python", "OpenCV"],
      category: "AI & Computer Vision",
      githubUrl: "https://github.com/MFahadHussain",
      demoUrl: undefined
    },
    {
      title: "Fire & Weapon Detection System",
      description: "AI-powered safety monitoring system using YOLOv8 for real-time fire and weapon detection in video streams. Deployed with REST API for integration.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["YOLOv8", "Computer Vision", "REST APIs", "Model Deployment", "Python", "TensorFlow"],
      category: "AI & Computer Vision",
      githubUrl: "https://github.com/MFahadHussain",
      demoUrl: undefined
    },
    {
      title: "Interactive Power BI Dashboards",
      description: "Comprehensive business intelligence dashboards with automated data refresh, advanced DAX calculations, and interactive visualizations for data-driven decision making.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
      technologies: ["Power BI", "DAX", "Data Modeling", "Excel", "Business Intelligence"],
      category: "Business Intelligence",
      githubUrl: "https://github.com/MFahadHussain",
      demoUrl: undefined
    },
    {
      title: "Machine Learning Model Deployment Pipeline",
      description: "End-to-end ML pipeline for model training, optimization, and deployment using ONNX and TensorRT. Includes REST API for real-time inference.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Machine Learning", "ONNX", "TensorRT", "REST APIs", "Python", "Model Deployment"],
      category: "AI & ML",
      githubUrl: "https://github.com/MFahadHussain",
      demoUrl: undefined
    },
    {
      title: "Data Analysis & ETL Pipelines",
      description: "Automated data cleaning, transformation, and analysis pipelines for business datasets. Includes SQL optimization and Excel automation for reporting.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
      technologies: ["Python", "SQL", "Excel", "Data Cleaning", "ETL", "Data Analysis"],
      category: "Data Analysis",
      githubUrl: "https://github.com/MFahadHussain"
    }
  ];

  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "AI & Computer Vision", "AI & ML", "Business Intelligence", "Data Analysis"];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="bg-white dark:bg-gray-900 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Portfolio & Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my AI, Computer Vision, Machine Learning, and Business Intelligence projects, 
            demonstrating technical expertise and problem-solving capabilities across various domains.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="button-modern"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              category={project.category}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="gap-2 button-modern" asChild>
            <a href="https://github.com/MFahadHussain" target="_blank" rel="noopener noreferrer">
              <Code className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
