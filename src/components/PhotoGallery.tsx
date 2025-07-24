import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, ZoomIn } from "lucide-react";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Photos from Fahad's journey
  const photos = [
    {
      src: "/src/assets/1711509964596.jpeg",
      alt: "Fahad Hussain working",
      caption: "Working on data analysis projects"
    },
    {
      src: "/src/assets/atomcamp.jpeg",
      alt: "AtomCamp event",
      caption: "Participating in AtomCamp tech event"
    },
    {
      src: "/src/assets/atomcamp2.jpeg",
      alt: "AtomCamp presentation",
      caption: "Presenting at AtomCamp"
    },
    {
      src: "/src/assets/Fahad.jpeg",
      alt: "Fahad Hussain",
      caption: "Professional headshot"
    },
    {
      src: "/src/assets/Devfest2023.jpeg",
      alt: "DevFest 2023",
      caption: "Speaking at DevFest 2023"
    },
    {
      src: "/src/assets/GDSC.jpeg",
      alt: "GDSC activities",
      caption: "Google Developer Student Club activities"
    },
    {
      src: "/src/assets/Leverify.jpeg",
      alt: "Leverify project",
      caption: "Working on Leverify platform"
    },
    {
      src: "/src/assets/Operation.jpeg",
      alt: "Operation session",
      caption: "Technical operation session"
    },
    {
      src: "/src/assets/session.jpeg",
      alt: "Training session",
      caption: "Conducting training session"
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