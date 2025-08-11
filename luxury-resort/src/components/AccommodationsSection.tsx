import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Wifi, AirVent, MapPin, Star, Bed, Eye, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';

export function AccommodationsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const accommodations = [
    {
      id: 1,
      name: "Standard Sea View Room",
      description: "Comfortable room with air conditioning, private balcony and stunning sea views",
      images: [
        "./src/assets/images/435398940.jpg",
        "./src/assets/images/435398485.jpg",
        "./src/assets/images/436739230.jpg",
        "./src/assets/images/437273343.jpg",
        "./src/assets/images/439011570.jpg"
      ],
      price: "From R850/night",
      rating: 4.5,
      capacity: "2 guests",
      features: [
        { name: "Sea View", icon: MapPin },
        { name: "Private Balcony", icon: null },
        { name: "Air Conditioning", icon: AirVent },
        { name: "Free WiFi", icon: Wifi }
      ]
    },
    {
      id: 2,
      name: "Family Room",
      description: "Spacious family accommodation with multiple beds and child-friendly amenities",
      images: [
        "./src/assets/images/435398485.jpg",
        "./src/assets/images/435398940.jpg",
        "./src/assets/images/436738802.jpg",
        "./src/assets/images/436739238.jpg",
        "./src/assets/images/437213456.jpg"
      ],
      price: "From R1200/night",
      rating: 4.7,
      capacity: "4-6 guests",
      features: [
        { name: "Family Setup", icon: Users },
        { name: "Mini Refrigerator", icon: null },
        { name: "Work Desk", icon: null },
        { name: "Kids Pool Access", icon: null }
      ]
    },
    {
      id: 3,
      name: "Premium Beachfront Suite",
      description: "Luxury suite with direct beach access and panoramic ocean views",
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "./src/assets/images/436739232.jpg",
        "./src/assets/images/431141506.jpg",
        "./src/assets/images/439011570.jpg",
        "./src/assets/images/436739230.jpg"
      ],
      price: "From R1650/night",
      rating: 4.9,
      capacity: "2-3 guests",
      features: [
        { name: "Beachfront Access", icon: MapPin },
        { name: "Ocean Views", icon: null },
        { name: "Premium Amenities", icon: null },
        { name: "Private Bathroom", icon: null }
      ]
    }
  ];

  const openGallery = (roomId: number) => {
    setSelectedRoom(roomId);
    setCurrentImageIndex(0);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  // Handle escape key, scroll detection, and cleanup on unmount
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedRoom) {
        closeGallery();
      }
    };

    const handleScroll = () => {
      if (selectedRoom) {
        closeGallery();
      }
    };

    if (selectedRoom) {
      document.addEventListener('keydown', handleEscape);
      // Listen for scroll events on both window and document
      window.addEventListener('scroll', handleScroll, { passive: true });
      document.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      // Cleanup: restore scroll when component unmounts
      document.body.style.overflow = 'unset';
    };
  }, [selectedRoom]);

  const nextImage = () => {
    if (selectedRoom) {
      const room = accommodations.find(r => r.id === selectedRoom);
      if (room) {
        setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedRoom) {
      const room = accommodations.find(r => r.id === selectedRoom);
      if (room) {
        setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
      }
    }
  };

  const selectedRoomData = selectedRoom ? accommodations.find(r => r.id === selectedRoom) : null;

  return (
    <section id="accommodations" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1f2937 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Refined Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
              <Bed className="mx-4 text-amber-600" size={24} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
            <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent" style={{ 
              fontFamily: 'Playfair Display, serif',
              fontWeight: '300',
              letterSpacing: '-0.02em'
            }}>
              Comfortable Accommodations
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-slate-600 leading-relaxed" style={{ 
              fontFamily: 'Crimson Text, serif',
              fontWeight: '300'
            }}>
              All rooms feature air conditioning, private bathrooms, and balconies with stunning views.
              Enjoy complimentary WiFi, refrigerators, and work desks for your convenience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((room) => (
            <Card 
              key={room.id} 
              className="overflow-hidden group transition-all duration-500 bg-white/60 backdrop-blur-sm border border-white/30 shadow-xl hover:shadow-2xl hover:bg-white/80"
              onMouseEnter={() => setHoveredCard(room.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-2 rounded-full shadow-lg border border-white/30">
                  <span className="text-sm font-semibold text-slate-800">
                    {room.price}
                  </span>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-full shadow-lg border border-white/30 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium text-slate-800">{room.rating}</span>
                </div>
                
                {/* Image count indicator */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/20">
                  <span className="text-xs font-medium text-white">+{room.images.length - 1} more</span>
                </div>
                
                {/* Hover overlay with view icon */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  hoveredCard === room.id ? 'bg-black/20 backdrop-blur-sm' : 'bg-transparent pointer-events-none'
                }`} onClick={() => openGallery(room.id)}>
                  <div className={`transform transition-all duration-300 ${
                    hoveredCard === room.id ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                  }`}>
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3">
                      <Eye className="w-6 h-6 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 bg-white/40 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-medium text-slate-800 leading-tight" style={{
                    fontFamily: 'Playfair Display, serif',
                  }}>{room.name}</h3>
                  <div className="flex items-center gap-1.5 text-sm text-slate-600 bg-white/40 px-2 py-1 rounded-full">
                    <Users className="w-3.5 h-3.5" />
                    {room.capacity}
                  </div>
                </div>
                
                <p className="text-slate-700 mb-6 leading-relaxed" style={{
                  fontFamily: 'Crimson Text, serif',
                }}>{room.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature) => (
                    <div key={feature.name} className="flex items-center gap-2.5 text-sm text-slate-700 bg-white/30 px-3 py-2 rounded-lg border border-white/20">
                      {feature.icon && <feature.icon className="w-4 h-4 text-slate-500" />}
                      <span className="font-medium">{feature.name}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-medium py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] border border-slate-600/20" style={{
                  fontFamily: 'Crimson Text, serif',
                }}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Check Availability
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Gallery Modal */}
        {selectedRoom && selectedRoomData && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            <div 
              className="relative max-w-6xl w-full max-h-[90vh] bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 transition-all duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Room title */}
              <div className="absolute top-4 left-4 z-10 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
                <h3 className="text-white font-medium" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {selectedRoomData.name}
                </h3>
              </div>

              {/* Image counter */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                <span className="text-white text-sm">
                  {currentImageIndex + 1} / {selectedRoomData.images.length}
                </span>
              </div>

              {/* Main image */}
              <div className="relative aspect-[16/9] w-full">
                <img
                  src={selectedRoomData.images[currentImageIndex]}
                  alt={`${selectedRoomData.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Thumbnail navigation */}
              <div className="p-4 bg-white/5">
                <div className="flex gap-3 justify-center max-w-full overflow-x-auto pb-2">
                  {selectedRoomData.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'ring-2 ring-amber-400 scale-110' 
                          : 'opacity-60 hover:opacity-100 hover:scale-105'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${selectedRoomData.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}