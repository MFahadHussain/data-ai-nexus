import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sample photos - in a real implementation, these would be loaded from the Photos folder
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Coding workspace",
      caption: "Working on data analysis projects"
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Data visualization",
      caption: "Creating interactive dashboards"
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Laptop setup",
      caption: "Mobile workstation setup"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Development environment",
      caption: "Building AI solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Clean workspace",
      caption: "Organized development environment"
    },
    {
      src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Design tools",
      caption: "UI/UX design process"
    },
    {
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Inspiration",
      caption: "Finding inspiration in nature"
    },
    {
      src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Ocean view",
      caption: "Peaceful workspace overlooking the ocean"
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Night sky",
      caption: "The vastness of data, like the universe"
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="bg-white dark:bg-gray-900 section-padding fade-in-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">My Work & Journey in Photos</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A visual journey through my work environment, projects, and sources of inspiration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group overflow-hidden rounded-photo cursor-pointer aspect-square shadow-card hover:shadow-card-hover transition-all duration-300"
              onClick={() => openLightbox(photo.src)}
            >
              <div className="relative h-full">
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            Photos are dynamically loaded from the /Photos folder
          </p>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </Button>
              <img 
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;