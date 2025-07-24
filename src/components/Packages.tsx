import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Basic",
      price: "$500",
      duration: "Starting from",
      description: "Perfect for small businesses getting started with AI automation",
      features: [
        "Basic chatbot setup",
        "Simple data dashboard",
        "Email support",
        "1 revision included",
        "Basic integration",
        "Documentation provided"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,500",
      duration: "Starting from",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Advanced chatbot with NLP",
        "Custom data pipelines",
        "Power BI dashboard",
        "Priority support",
        "3 revisions included",
        "API integrations",
        "Training session included",
        "30-day support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "Quote",
      description: "Tailored solutions for large organizations",
      features: [
        "Enterprise chatbot solution",
        "Complex data architecture",
        "Multi-dashboard setup",
        "Dedicated support",
        "Unlimited revisions",
        "Full system integration",
        "Team training program",
        "6-month support",
        "Ongoing consultation"
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="bg-background section-padding fade-in-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Service Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the perfect package for your business needs. All packages include consultation and project planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-card-hover ${
                pkg.popular ? 'border-primary scale-105 shadow-lg' : 'border-primary/20'
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">{pkg.duration}</span>
                </div>
                <CardDescription className="text-base mt-4">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full mt-6 ${
                    pkg.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'variant-outline'
                  }`}
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  {pkg.name === 'Enterprise' ? 'Get Custom Quote' : 'Get Started'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Need something custom? Let's discuss your specific requirements.
          </p>
          <Button variant="outline" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;