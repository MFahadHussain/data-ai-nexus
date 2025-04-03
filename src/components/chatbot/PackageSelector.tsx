
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface Package {
  id: string;
  name: string;
  description: string;
  features: string[];
}

interface PackageSelectorProps {
  packages: Package[];
  onSelectPackage: (pkg: Package) => void;
}

export const PackageSelector: React.FC<PackageSelectorProps> = ({ packages, onSelectPackage }) => {
  return (
    <div className="w-full space-y-4 py-2">
      <p className="font-medium text-center mb-4">Please select a package you're interested in:</p>
      <div className="grid gap-3">
        {packages.map((pkg) => (
          <Card 
            key={pkg.id}
            className="cursor-pointer border-primary/30 hover:border-primary transition-colors"
            onClick={() => onSelectPackage(pkg)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{pkg.name}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-xs">
              <ul className="list-disc list-inside">
                {pkg.features.slice(0, 2).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
                {pkg.features.length > 2 && (
                  <li>And {pkg.features.length - 2} more features...</li>
                )}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => onSelectPackage(pkg)}
              >
                Select {pkg.name}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
