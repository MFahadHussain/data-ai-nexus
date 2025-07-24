import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Database, BarChart, Workflow, Brain, MessageSquare } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "Custom Chatbot Development",
      description: "AI-powered chatbots for customer service, lead generation, and business automation.",
      features: ["24/7 Customer Support", "Lead Qualification", "Multi-platform Integration", "Natural Language Processing"]
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data Engineering Pipelines",
      description: "End-to-end data solutions from collection to visualization and analytics.",
      features: ["ETL/ELT Pipelines", "Real-time Processing", "Data Warehousing", "API Integration"]
    },
    {
      icon: <Workflow className="h-8 w-8 text-primary" />,
      title: "AI Automation Solutions",
      description: "Streamline business processes with intelligent automation and workflow optimization.",
      features: ["Process Automation", "Document Processing", "Workflow Optimization", "Integration Setup"]
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Power BI & Data Visualization",
      description: "Transform your data into actionable insights with stunning dashboards and reports.",
      features: ["Interactive Dashboards", "Custom Reports", "KPI Monitoring", "Data Modeling"]
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI Consulting & Mentoring",
      description: "Expert guidance on AI strategy, implementation, and best practices for your business.",
      features: ["Strategy Development", "Technical Mentoring", "Team Training", "Solution Architecture"]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Technical Consultation",
      description: "One-on-one consultation for technical challenges and solution design.",
      features: ["Problem Analysis", "Solution Design", "Technology Selection", "Implementation Roadmap"]
    }
  ];

  return (
    <section id="services" className="bg-muted/30 section-padding fade-in-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Services I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive AI and data solutions to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 border-primary/20">
              <CardHeader>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;