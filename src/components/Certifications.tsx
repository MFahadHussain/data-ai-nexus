import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Engineer",
      provider: "DataCamp",
      date: "2023",
      description: "Comprehensive data engineering track covering ETL pipelines, data warehousing, and big data technologies.",
      badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      verifyUrl: "https://datacamp.com/verify"
    },
    {
      title: "AI Fundamentals",
      provider: "AtomCamp",
      date: "2023",
      description: "Foundational AI concepts including machine learning algorithms, neural networks, and practical applications.",
      badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      verifyUrl: "https://atomcamp.com/verify"
    },
    {
      title: "Power BI Data Analyst",
      provider: "DataCamp",
      date: "2023",
      description: "Advanced Power BI skills including DAX, data modeling, and interactive dashboard creation.",
      badgeColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      verifyUrl: "https://datacamp.com/verify"
    },
    {
      title: "Google Data Analytics",
      provider: "Coursera",
      date: "2022",
      description: "Complete data analytics lifecycle from data collection to visualization and storytelling.",
      badgeColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      verifyUrl: "https://coursera.org/verify"
    },
    {
      title: "Cloud Computing",
      provider: "Google Skill Boost",
      date: "2022",
      description: "Google Cloud Platform fundamentals including compute, storage, networking, and data services.",
      badgeColor: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      verifyUrl: "https://cloudskillsboost.google/verify"
    }
  ];

  return (
    <section id="certifications" className="bg-gray-50 dark:bg-gray-800 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Certifications</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements in data science, AI, and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="relative overflow-hidden border-none shadow-lg hover:shadow-xl transition-all group">
              {/* Award icon decoration */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-12 h-12 text-primary" />
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className={`${cert.badgeColor} mb-2`}>
                    {cert.provider}
                  </Badge>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {cert.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <a 
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Verify Certificate
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Award className="w-5 h-5 text-primary" />
            <span>Continuously pursuing new certifications and skills</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;