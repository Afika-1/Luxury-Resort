import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, Users, Star, ChefHat, Utensils } from 'lucide-react';

export function DiningSection() {
  const diningOptions = [
    {
      id: 1,
      name: "Main Restaurant",
      description: "Family-friendly restaurant serving fresh local cuisine with stunning sea views",
      image: "./src/assets/images/436739235.jpg",
      hours: "Lunch: 12:00 - 15:00 | Dinner: 18:00 - 22:00",
      specialties: ["Fresh Seafood", "Local Cuisine", "Family Meals", "Sea View Dining"],
      featured: true
    },
    {
      id: 2,
      name: "Pool Bar",
      description: "Casual poolside bar serving refreshing drinks and light snacks",
      image: "./src/assets/images/IMG-20250807-WA0022.jpg",
      hours: "Daily: 10:00 - 20:00",
      specialties: ["Cocktails", "Light Snacks", "Pool Service", "Refreshments"],
      featured: false
    },
    {
      id: 3,
      name: "Breakfast Service",
      description: "Start your day with a hearty breakfast featuring local and continental options",
      image: "./src/assets/images/IMG-20250807-WA0026.jpg",
      hours: "Daily: 06:30 - 10:00",
      specialties: ["Continental Breakfast", "Local Dishes", "Fresh Fruits", "Coffee & Tea"],
      featured: false
    }
  ];

  return (
    <section id="dining" className="py-24 bg-gradient-to-br from-slate-100 via-white to-slate-50 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #64748b 0.5px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Refined Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="mx-6 p-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-lg">
                <Utensils className="text-white" size={24} />
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
            <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent" style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: '300',
              letterSpacing: '-0.02em'
            }}>
              Dining Experience
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-slate-600 leading-relaxed" style={{
              fontFamily: 'Crimson Text, serif',
              fontWeight: '300'
            }}>
              Savor exceptional cuisine in a welcoming atmosphere. Our family-friendly restaurant
              and bar offer fresh local flavors with breathtaking ocean views, creating unforgettable culinary memories.
            </p>
          </div>
        </div>

        {/* Premium Dining Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {diningOptions.map((option, index) => (
            <Card 
              key={option.id} 
              className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-0 bg-white/70 backdrop-blur-sm ${
                option.featured ? 'lg:scale-105 ring-2 ring-amber-400/50' : ''
              }`}
              style={{
                borderRadius: '24px',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Featured Badge */}
              {option.featured && (
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  <ChefHat size={16} className="inline mr-2" />
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden" style={{ borderRadius: '24px 24px 0 0' }}>
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={option.image}
                    alt={option.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Sophisticated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                </div>

                {/* Floating name tag */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-white/50">
                    <h3 className="text-xl font-semibold text-slate-800 mb-1" style={{
                      fontFamily: 'Playfair Display, serif'
                    }}>
                      {option.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Clock size={14} />
                      <span style={{ fontFamily: 'Crimson Text, serif' }}>
                        {option.hours.split(' | ')[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-8 relative">
                {/* Elegant divider */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                
                <p className="text-slate-600 mb-6 leading-relaxed" style={{
                  fontFamily: 'Crimson Text, serif',
                  fontSize: '16px'
                }}>
                  {option.description}
                </p>

                <div className="space-y-4">
                  {/* Full hours display */}
                  <div className="flex items-start gap-3 p-4 bg-slate-50/80 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                      <Clock size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700 mb-1">Opening Hours</p>
                      <p className="text-sm text-slate-600" style={{ fontFamily: 'Crimson Text, serif' }}>
                        {option.hours}
                      </p>
                    </div>
                  </div>

                  {/* Specialties with refined styling */}
                  <div>
                    <p className="text-sm font-medium text-slate-700 mb-3">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {option.specialties.map((specialty, idx) => (
                        <span 
                          key={specialty} 
                          className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            idx === 0 
                              ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-md' 
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                          style={{ fontFamily: 'Crimson Text, serif' }}
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover effect decoration */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Guest Reviews Section */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-md rounded-3xl p-10 md:p-16 border border-white/50 shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-amber-400 to-amber-600 p-4 rounded-2xl shadow-xl">
                <Star className="text-white" size={24} />
              </div>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent" style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: '300'
              }}>
                What Guests Say About Our Food
              </h3>
              <div className="w-24 h-px bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  text: "Breakfast was amazing, friendly staff and chefs. They even had an event with free tickets and free food. The event was massive!!",
                  author: "Pretty, South Africa"
                },
                {
                  text: "Friendly staff. Great food. Exceptional facilities.",
                  author: "Ntobeko, South Africa"
                }
              ].map((review, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-white/50"
                >
                  {/* Quote decoration */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-lg font-bold">"</span>
                  </div>

                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        className="fill-amber-400 text-amber-400 drop-shadow-sm" 
                      />
                    ))}
                  </div>
                  
                  <p className="text-lg mb-6 text-slate-700 leading-relaxed" style={{
                    fontFamily: 'Crimson Text, serif',
                    fontStyle: 'italic'
                  }}>
                    "{review.text}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center shadow-md">
                      <Users size={20} className="text-slate-600" />
                    </div>
                    <p className="text-slate-600 font-medium" style={{
                      fontFamily: 'Crimson Text, serif'
                    }}>
                      — {review.author}
                    </p>
                  </div>

                  {/* Hover decoration */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>

            {/* Bottom decorative element */}
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}