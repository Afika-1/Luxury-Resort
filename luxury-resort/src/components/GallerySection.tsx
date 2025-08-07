import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

import { Slot } from "@radix-ui/react-slot"; 
import { Separator } from "@radix-ui/react-separator"; 
   

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      // src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      src: "./src/assets/images/436739232.jpg",
      alt: "Resort exterior view"
    },
    {
      id: 2,
      // src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      src: "./src/assets/images/431141506.jpg",
      alt: "Luxury suite interior"
    },
    {
      id: 3,
      // src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      src: "./src/assets/images/436739230.jpg",
      alt: "Spa treatment room"
    },
    {
      id: 4,
      // src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      src: "./src/assets/images/437273343.jpg",
      alt: "Fine dining experience"
    },
    {
      id: 5,
      // src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      src: "./src/assets/images/439011570.jpg",
      alt: "Mountain landscape"
    },
    {
      id: 6,
      // src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      src: "./src/assets/images/436738802.jpg",
      alt: "Forest trails"
    },
    {
      id: 7,
      // src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            src: "./src/assets/images/436739238.jpg",
alt: "Lake activities"
    },
    {
      id: 8,
      // src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      src: "./src/assets/images/437213456.jpg",
      alt: "Lakeside pavilion"
    }
  ];

  return (
    <section id="gallery" className="py-20  bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Gallery</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Discover the beauty that awaits you through our curated collection of moments and spaces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg cursor-pointer group aspect-square"
              onClick={() => setSelectedImage(image.src)}
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>
            <ImageWithFallback
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}