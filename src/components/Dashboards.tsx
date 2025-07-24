import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Dashboards = () => {
  const dashboards = [
    {
      title: "Sales Analytics Dashboard",
      description: "Real-time sales performance metrics and forecasting",
      embedUrl: "https://drive.google.com/file/d/1ciIYJ_Of0j5mNp8WsQvsEN9gbM0_Fkob/view?usp=sharing",
      externalUrl: "https://drive.google.com/file/d/1ciIYJ_Of0j5mNp8WsQvsEN9gbM0_Fkob/view?usp=sharing"
    },
    {
      title: "Financial Performance Dashboard",
      description: "Comprehensive financial KPIs and trend analysis",
      embedUrl: "https://drive.google.com/file/d/1zYG63Q13UK5mDwZb7LxNx6c25kdw5EzR/view?usp=sharing",
      externalUrl: "https://drive.google.com/file/d/1zYG63Q13UK5mDwZb7LxNx6c25kdw5EzR/view?usp=sharing"
    },
    {
      title: "Operations Metrics Dashboard",
      description: "Operational efficiency and performance tracking",
      embedUrl: "https://drive.google.com/file/d/1dSRKFWI0iqVkFjLN03dMhhSlDDnz9eMg/view?usp=sharing",
      externalUrl: "https://drive.google.com/file/d/1dSRKFWI0iqVkFjLN03dMhhSlDDnz9eMg/view?usp=sharing"
    }
  ];

  return (
    <section id="dashboards" className="bg-gray-50 dark:bg-gray-800 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">Interactive Dashboards</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Live, interactive dashboards showcasing real-time data analytics and business intelligence solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboards.map((dashboard, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                {/* Placeholder for dashboard preview */}
                <iframe
                  src={dashboard.embedUrl}
                  className="w-full h-full border-0"
                  title={dashboard.title}
                  onError={(e) => {
                    const iframe = e.currentTarget as HTMLIFrameElement;
                    iframe.style.display = 'none';
                    const nextElement = iframe.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center hidden">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-lg flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Dashboard Preview</p>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{dashboard.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{dashboard.description}</p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href={dashboard.externalUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Full Dashboard
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Dashboards are dynamically loaded from the /dashboards folder
          </p>
          <Button variant="outline" size="lg">
            <ExternalLink className="mr-2 h-5 w-5" />
            View All Dashboards
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboards;
