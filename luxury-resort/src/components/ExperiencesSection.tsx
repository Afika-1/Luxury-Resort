import { useState } from 'react';
import { Waves, Utensils, Heart, Car, Wifi, Users, Star, Award, MapPin, Clock } from 'lucide-react';

export function ExperiencesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('facilities');

  const experiences = [
    {
      id: 1,
      name: "Beachfront Paradise",
      shortDesc: "Private Beach Access",
      description: "Direct access to pristine Umkomaas Beach just metres from your room. Wake up to ocean waves and sunset views.",
      image: "./src/assets/images/IMG-20250807-WA0009.jpg",
      icon: Waves,
      color: "from-blue-500 to-cyan-500",
      features: ["Private beach", "Ocean views", "Water sports", "Sunset dining"]
    },
    {
      id: 2,
      name: "Aquatic Sanctuary", 
      description: "Year-round outdoor swimming pool plus dedicated kids' pool for endless family fun and relaxation.",
      shortDesc: "Resort Swimming Pools",
      image: "./src/assets/images/IMG-20250807-WA0013.jpg",
      icon: Waves,
      color: "from-teal-500 to-blue-500",
      features: ["Adult pool", "Kids pool", "Pool bar", "Loungers"]
    },
    {
      id: 3,
      name: "Culinary Excellence",
      shortDesc: "Fine Dining Experience",
      description: "Family-friendly restaurant serving exquisite lunch and dinner with full bar service and ocean views.",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: Utensils,
      color: "from-orange-500 to-red-500",
      features: ["Ocean view dining", "Local cuisine", "Kids menu", "Cocktail bar"]
    },
    {
      id: 4,
      name: "Luxury Wellness",
      shortDesc: "Premium Comfort",
      description: "Indulge in air-conditioned comfort with premium amenities, spa services, and personalized attention.",
      image: "./src/assets/images/IMG-20250807-WA0019.jpg",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      features: ["AC rooms", "Spa services", "Premium linens", "Concierge"]
    },
    {
      id: 5,
      name: "Effortless Arrival",
      shortDesc: "Valet & Parking",
      description: "Complimentary on-site private parking with valet service available for all guests. Stress-free arrival.",
      image: "./src/assets/images/parking.jpg",
      icon: Car,
      color: "from-gray-500 to-slate-600",
      features: ["Free parking", "Valet service", "24/7 security", "EV charging"]
    },
    {
      id: 6,
      name: "Digital Connectivity",
      shortDesc: "Ultra-Fast WiFi",
      description: "High-speed complimentary WiFi throughout the property, rated 9.2/10 by guests for reliability.",
      image: "./src/assets/images/wifi 2.jpg",
      icon: Wifi,
      color: "from-violet-500 to-purple-500",
      features: ["Fiber optic", "Property-wide", "Business center", "Streaming ready"]
    }
  ];

  const stats = [
    { label: "Overall Experience", value: "7.6", icon: Star, color: "text-yellow-500" },
    { label: "Staff Excellence", value: "8.3", icon: Users, color: "text-blue-500" },
    { label: "Pristine Cleanliness", value: "8.4", icon: Award, color: "text-green-500" },
    { label: "WiFi Performance", value: "9.2", icon: Wifi, color: "text-purple-500" }
  ];

  return (
    <section id="experiences" className="py-24 bg-gradient-to-br from-slate-400 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Spectacular Header */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent" style={{ 
              fontFamily: 'Playfair Display, serif',
              fontWeight: '300',
              letterSpacing: '-0.02em'
            }}>
              Experiences & Amneties
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8 rounded-full"></div>
            
            <p className="text-2xl md:text-3xl max-w-5xl mx-auto text-slate-600 leading-relaxed font-light" style={{ 
              fontFamily: 'Crimson Text, serif'
            }}>
              Immerse yourself in extraordinary moments where luxury meets adventure, 
              and every detail is crafted to exceed your wildest expectations.
            </p>
          </div>
        </div>

        {/* Premium Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(experience.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Floating card container */}
              <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/50 transition-all duration-500 hover:shadow-4xl hover:-translate-y-8">
                
                {/* Gradient overlay for card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Image container with advanced effects */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={experience.image}
                    alt={experience.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  
                  {/* Dynamic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Floating icon */}
                  <div className={`absolute top-6 left-6 bg-gradient-to-r ${experience.color} p-3 rounded-2xl shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    <experience.icon size={24} className="text-white drop-shadow-lg" />
                  </div>
                  
                  {/* Feature badges */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                      <span className="text-white text-sm font-medium">Premium</span>
                    </div>
                  </div>
                  
                  {/* Bottom title overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-light text-white mb-2 transform transition-all duration-500 translate-y-2 group-hover:translate-y-0" style={{ 
                      fontFamily: 'Playfair Display, serif'
                    }}>
                      {experience.name}
                    </h3>
                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0" style={{ 
                      fontFamily: 'Crimson Text, serif'
                    }}>
                      {experience.shortDesc}
                    </p>
                  </div>
                </div>
                
                {/* Content section with reveal animation */}
                <div className="p-8 relative">
                  <p className="text-slate-600 leading-relaxed mb-6 transform transition-all duration-500" style={{ 
                    fontFamily: 'Crimson Text, serif'
                  }}>
                    {experience.description}
                  </p>
                  
                  {/* Feature list with staggered animation */}
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                    {experience.features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center text-sm text-slate-500 transition-all duration-300 hover:text-slate-700"
                        style={{ animationDelay: `${idx * 10}ms` }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full mr-3 animate-pulse`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Revolutionary Stats Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-white/40 via-white/60 to-white/40 backdrop-blur-xl rounded-3xl p-12 border border-white/30 shadow-2xl">
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-300"></div>
              <div className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-700"></div>
            </div>
            
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent" style={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: '300'
              }}>
                Guest Excellence Awards
              </h3>
              <p className="text-xl text-slate-600" style={{ 
                fontFamily: 'Crimson Text, serif'
              }}>
                Recognized for outstanding service and unforgettable experiences
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-110"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <stat.icon size={28} className={`${stat.color} transition-all duration-300 group-hover:scale-125`} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="text-5xl font-light mb-2 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110" style={{ 
                    fontFamily: 'Playfair Display, serif'
                  }}>
                    {stat.value}
                  </div>
                  
                  <div className="text-sm text-slate-600 font-medium" style={{ 
                    fontFamily: 'Crimson Text, serif'
                  }}>
                    {stat.label}
                  </div>
                  
                  <div className="mt-2 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-cyan-50 px-8 py-4 rounded-2xl border border-blue-100">
                <MapPin size={20} className="text-blue-600" />
                <p className="text-slate-700 italic" style={{ 
                  fontFamily: 'Crimson Text, serif',
                  fontSize: '1.125rem'
                }}>
                  "Couples particularly love our beachfront location — rated 8.2 out of 10 for romantic getaways"
                </p>
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}