import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown, MapPin, Calendar } from "lucide-react";

const Resume = () => {
  const experiences = [
    {
      title: "AI Vision Engineer",
      company: "InterCraft Pvt. Ltd.",
      period: "Nov 2025 – Present",
      description: "Leading computer vision projects and AI solutions development for enterprise clients.",
      responsibilities: [
        "Design and implement computer vision systems for real-time applications",
        "Develop and optimize deep learning models for production deployment",
        "Collaborate with cross-functional teams to deliver scalable AI solutions"
      ],
      skills: ["Computer Vision", "Deep Learning", "PyTorch", "TensorFlow", "ONNX", "TensorRT", "Model Deployment"]
    },
    {
      title: "AI Engineer",
      company: "Upwork",
      period: "Jun 2024 – Present",
      description: "Freelance AI engineering services delivering custom AI solutions to global clients.",
      responsibilities: [
        "Develop custom AI models and computer vision applications",
        "Build REST APIs for model deployment and integration",
        "Provide end-to-end AI solution consulting and implementation"
      ],
      skills: ["AI & ML", "Computer Vision", "Python", "REST APIs", "Model Deployment", "Client Management"]
    },
    {
      title: "AI Engineer",
      company: "Zypher Enterprise Pvt. Ltd.",
      period: "Aug 2025 – Oct 2025",
      description: "Led the design and deployment of computer vision solutions for real-time analytics and automation.",
      responsibilities: [
        "Developed Face Recognition with Automated Barriers system",
        "Built Automatic Number Plate Recognition (ANPR) solutions",
        "Implemented Fire Detection and Weapon Detection systems using YOLO",
        "Optimized models for real-time performance on video streams and edge devices"
      ],
      skills: ["Computer Vision", "YOLOv5/v8", "TensorFlow", "PyTorch", "OpenCV", "Deep Learning", "Edge AI"]
    },
    {
      title: "AI Intern",
      company: "NCAI, UET Peshawar",
      period: "Jul 2025 – Aug 2025",
      description: "Computer Vision projects using YOLO and TensorFlow for object detection and image classification.",
      responsibilities: [
        "Developed object detection models using YOLO architecture",
        "Implemented image classification systems with TensorFlow",
        "Participated in research projects on computer vision applications"
      ],
      skills: ["Computer Vision", "YOLO", "TensorFlow", "Python", "Deep Learning"]
    },
    {
      title: "Internship Trainee",
      company: "Al Baraka Bank",
      period: "May 2025 – Jun 2025",
      description: "Analyzed banking operations data and assisted with process automation initiatives.",
      responsibilities: [
        "Performed data analysis on banking operations datasets",
        "Assisted in developing process automation solutions",
        "Created reports and dashboards for financial analytics"
      ],
      skills: ["Data Analysis", "Process Automation", "Financial Analytics", "Excel", "SQL"]
    },
    {
      title: "Trainee",
      company: "AtomCamp",
      period: "Feb 2024 – Nov 2024",
      description: "Intensive training program in Data Science and AI, covering machine learning, data engineering, and business intelligence.",
      responsibilities: [
        "Completed comprehensive Data Science & AI Bootcamp",
        "Developed multiple projects in ML, data analysis, and BI",
        "Gained hands-on experience with Python, SQL, Power BI, and AI frameworks"
      ],
      skills: ["Data Science", "Machine Learning", "Python", "SQL", "Power BI", "Data Analysis"]
    },
    {
      title: "Operations Team Member",
      company: "GDSC (Google Developer Student Clubs)",
      period: "2023 – 2024",
      description: "Supported technical events and workshops focused on Google technologies and developer tools.",
      responsibilities: [
        "Organized technical workshops and community events",
        "Supported operations for Google technology sessions",
        "Contributed to community building and knowledge sharing"
      ],
      skills: ["Event Operations", "Google Technologies", "Community Support", "Event Management"]
    },
    {
      title: "Early Career Roles",
      company: "Worldsol Technology Ltd. & Others",
      period: "2022 – 2023",
      description: "Initial professional experiences in technology and data-related roles.",
      responsibilities: [
        "Gained foundational experience in technology sector",
        "Developed core skills in data handling and analysis"
      ],
      skills: ["Data Analysis", "Technology", "Professional Development"]
    }
  ];

  const handleDownloadResume = () => {
    try {
      const link = document.createElement('a');
      link.href = '/Resume.pdf';
      link.download = 'Fahad_Hussain_Data_AI_Engineer_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab
      window.open('/Resume.pdf', '_blank');
    }
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
                  <Card className="card-modern">
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
                      {experience.responsibilities && (
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                          {experience.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="text-sm">{resp}</li>
                          ))}
                        </ul>
                      )}
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
          <Button size="lg" onClick={handleDownloadResume} className="gap-2 button-modern">
            <FileDown className="w-5 h-5" />
            Download Full Resume
          </Button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Download PDF resume
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
