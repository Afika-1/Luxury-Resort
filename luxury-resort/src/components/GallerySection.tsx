import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Eye } from 'lucide-react';

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const galleryImages = [
    {
      id: 1,
      src: "./src/assets/images/436739232.jpg",
      alt: "Resort exterior view",
      title: "Majestic Resort",
      description: "Where luxury meets nature in perfect harmony"
    },
    {
      id: 2,
      src: "./src/assets/images/431141506.jpg",
      alt: "Luxury suite interior",
      title: "Presidential Suite",
      description: "Indulge in unparalleled comfort and sophistication"
    },
    {
      id: 3,
      src: "./src/assets/images/436739230.jpg",
      alt: "Spa treatment room",
      title: "Wellness Sanctuary",
      description: "Rejuvenate your mind, body, and soul"
    },
    {
      id: 4,
      src: "./src/assets/images/437273343.jpg",
      alt: "Fine dining experience",
      title: "Culinary Excellence",
      description: "A gastronomic journey of exquisite flavors"
    },
    {
      id: 5,
      src: "./src/assets/images/439011570.jpg",
      alt: "Mountain landscape",
      title: "Alpine Majesty",
      description: "Breathtaking vistas that inspire the soul"
    },
    {
      id: 6,
      src: "./src/assets/images/436738802.jpg",
      alt: "Forest trails",
      title: "Nature's Path",
      description: "Discover tranquility in pristine wilderness"
    },
    {
      id: 7,
      src: "./src/assets/images/436739238.jpg",
      alt: "Lake activities",
      title: "Aquatic Adventures",
      description: "Crystal-clear waters for unforgettable moments"
    },
    {
      id: 8,
      src: "./src/assets/images/437213456.jpg",
      alt: "Lakeside pavilion",
      title: "Serene Retreat",
      description: "Your private oasis by the water's edge"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000); // Slower transition for elegance

    return () => clearInterval(interval);
  }, [isPlaying, galleryImages.length]);

  // Simulate loading effect
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-slate-200 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1f2937 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Refined Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
              <Eye className="mx-4 text-amber-600" size={24} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
            <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent" style={{ 
              fontFamily: 'Playfair Display, serif',
              fontWeight: '300',
              letterSpacing: '-0.02em'
            }}>
              Gallery
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-slate-600 leading-relaxed" style={{ 
              fontFamily: 'Crimson Text, serif',
              fontWeight: '300'
            }}>
              Experience the extraordinary through our curated collection of moments, 
              where every frame tells a story of unparalleled beauty and sophistication.
            </p>
          </div>
        </div>

        {/* Premium Slideshow Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Main Image Display with Glass Morphism */}
          <div className="relative group">
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              {/* Loading overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse z-10"></div>
              )}
              
              <img
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className={`w-full h-full object-cover transition-all duration-700 ${isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'}`}
                onLoad={() => setIsLoading(false)}
              />
              
              {/* Sophisticated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
              
              {/* Elegant content overlay */}
              <div className="absolute inset-0 flex items-end justify-start p-8 md:p-12">
                <div className="text-white max-w-2xl transform transition-all duration-700 translate-y-0 opacity-100">
                  <div className="mb-4">
                    <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs uppercase tracking-wider mb-4 border border-white/30">
                      {currentIndex + 1} of {galleryImages.length}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-light mb-4 leading-tight" style={{ 
                    fontFamily: 'Playfair Display, serif'
                  }}>
                    {galleryImages[currentIndex].title}
                  </h3>
                  <p className="text-lg md:text-xl opacity-90 leading-relaxed" style={{ 
                    fontFamily: 'Crimson Text, serif'
                  }}>
                    {galleryImages[currentIndex].description}
                  </p>
                </div>
              </div>

              {/* Refined Navigation Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={goToPrev}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-4 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
                >
                  <ChevronLeft size={28} className="text-white drop-shadow-lg" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-4 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
                >
                  <ChevronRight size={28} className="text-white drop-shadow-lg" />
                </button>
              </div>

              {/* Elegant Play/Pause Control */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={togglePlayPause}
                  className="bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-3 transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                  {isPlaying ? (
                    <Pause size={20} className="text-white drop-shadow-lg" />
                  ) : (
                    <Play size={20} className="text-white drop-shadow-lg ml-0.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Sophisticated Thumbnail Navigation */}
          <div className="mt-8 flex justify-center">
            <div className="flex gap-3 p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-xl overflow-hidden transition-all duration-500 ${
                    index === currentIndex 
                      ? 'ring-2 ring-amber-400 scale-110 shadow-lg' 
                      : 'opacity-50 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-400/20 to-transparent"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Minimalist Progress Indicators */}
          <div className="mt-6 flex justify-center gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 w-12 shadow-md' 
                    : 'bg-slate-300 hover:bg-slate-400 w-1 hover:w-4'
                }`}
              />
            ))}
          </div>

          {/* Status Indicator */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/30 backdrop-blur-sm rounded-full border border-white/20">
              <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-amber-400'}`}></div>
              <span className="text-sm text-slate-700 font-medium">
                {isPlaying ? 'Auto-playing' : 'Paused'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}