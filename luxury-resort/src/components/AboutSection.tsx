import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Waves, Award, Star, Heart, Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-orange-50 via-blue-50 to-slate-100 relative overflow-hidden">
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
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
              <Waves className="mx-4 text-blue-600" size={24} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400"></div>
            </div>
            <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text text-transparent" style={{ 
              fontFamily: 'Playfair Display, serif',
              fontWeight: '300',
              letterSpacing: '-0.02em'
            }}>
              About Us
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-slate-600 leading-relaxed" style={{ 
              fontFamily: 'Crimson Text, serif',
              fontWeight: '300'
            }}>
              Where the pristine coastline of Amanzimtoti meets unparalleled hospitality, 
              creating an extraordinary sanctuary for the discerning traveler.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl">
              <h3 className="text-3xl md:text-4xl mb-6 text-slate-800" style={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: '300'
              }}>
                Coastal Beach Resort
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed" style={{ 
                fontFamily: 'Crimson Text, serif',
              }}>
                Nestled along the stunning coastline of Amanzimtoti, South Africa, Coastal Beach Resort offers 
                direct beachfront access with Umkomaas Beach just metres away. Our resort seamlessly blends 
                coastal beauty with contemporary luxury, providing guests with an unforgettable beach holiday experience.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed" style={{ 
                fontFamily: 'Crimson Text, serif',
              }}>
                Whether you're seeking a romantic escape, memorable family vacation, or peaceful retreat, 
                our dedicated team and exceptional facilities ensure every guest enjoys outstanding 
                hospitality in our beautiful South African coastal paradise.
              </p>
            </div>

            {/* Premium Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group">
                <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Waves className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-medium mb-2 text-slate-800" style={{ 
                    fontFamily: 'Crimson Text, serif',
                  }}>
                    Beachfront Paradise
                  </h4>
                  <p className="text-sm text-slate-600" style={{ 
                    fontFamily: 'Crimson Text, serif',
                  }}>
                    Direct access to pristine Umkomaas Beach
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-medium mb-2 text-slate-800" style={{ 
                    fontFamily: 'Crimson Text, serif',
                  }}>
                    Prime Location
                  </h4>
                  <p className="text-sm text-slate-600" style={{ 
                    fontFamily: 'Crimson Text, serif',
                  }}>
                    Amanzimtoti coastline, 75km from King Shaka Airport
                  </p>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-medium mb-2 text-slate-800" style={{ 
                    fontFamily: 'Crimson Text, serif',
                  }}>
                    Highly Rated
                  </h4>
                  <p className="text-sm text-slate-600" style={{ 
                    fontFamily: 'Crimson Text, serif',
                  }}>
                    7.6/10 guest rating with excellent cleanliness scores
                  </p>
                </div>
              </div>
            </div>

            {/* What Guests Love - Glass Morphism Card */}
            <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl">
              <div className="flex items-center mb-6">
                <Heart className="text-rose-500 mr-3" size={24} />
                <h4 className="text-2xl text-slate-800" style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: '300'
                }}>
                  What Guests Love
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Walking distance to the beach",
                  "Friendly and welcoming staff", 
                  "Clean and well-maintained facilities",
                  "Breathtaking sea views from rooms",
                  "Family-friendly atmosphere",
                  "Exceptional coastal cuisine"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                    <p className="text-slate-600" style={{ 
                      fontFamily: 'Crimson Text, serif',
                    }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section with Glass Effects */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-4 border border-white/30 shadow-2xl">
                <ImageWithFallback
                  src="./src/assets/images/431141506.jpg"
                  alt="Coastal Beach Resort beachfront location in Amanzimtoti"
                  className="w-full h-96 lg:h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-2xl">
              <div className="flex items-center mb-2">
                <MapPin className="text-blue-500 mr-2" size={20} />
                <h5 className="text-slate-800 font-medium" style={{ 
                  fontFamily: 'Crimson Text, serif',
                }}>
                  Distance to Airport
                </h5>
              </div>
              <p className="text-4xl bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-light" style={{ 
                fontFamily: 'Playfair Display, serif',
              }}>
                75km
              </p>
              <p className="text-sm text-slate-600" style={{ 
                fontFamily: 'Crimson Text, serif',
              }}>
                King Shaka International
              </p>
            </div>
          </div>
        </div>

        {/* Nearby Attractions with Premium Styling */}
        <div className="relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-emerald-400"></div>
              <Users className="mx-4 text-emerald-600" size={24} />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-emerald-400"></div>
            </div>
            <h3 className="text-4xl md:text-5xl text-slate-800 mb-4" style={{ 
              fontFamily: 'Playfair Display, serif',
              fontWeight: '300'
            }}>
              Nearby Attractions
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto" style={{ 
              fontFamily: 'Crimson Text, serif',
            }}>
              Discover the wonders that surround our coastal paradise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl hover:bg-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Star className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-slate-800" style={{ 
                      fontFamily: 'Crimson Text, serif',
                    }}>
                      Umkomaas Golf Club
                    </h4>
                    <p className="text-sm text-blue-600 font-medium">5 km away</p>
                  </div>
                </div>
                <p className="text-slate-600" style={{ 
                  fontFamily: 'Crimson Text, serif',
                }}>
                  Championship golf course with stunning coastal views and pristine fairways
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl hover:bg-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Waves className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-slate-800" style={{ 
                      fontFamily: 'Crimson Text, serif',
                    }}>
                      Kenneth Stainbank Nature Reserve
                    </h4>
                    <p className="text-sm text-blue-600 font-medium">36 km away</p>
                  </div>
                </div>
                <p className="text-slate-600" style={{ 
                  fontFamily: 'Crimson Text, serif',
                }}>
                  Beautiful nature reserve perfect for hiking and wildlife viewing adventures
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl hover:bg-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-slate-800" style={{ 
                      fontFamily: 'Crimson Text, serif',
                    }}>
                      Local Beaches
                    </h4>
                    <p className="text-sm text-blue-600 font-medium">Walking distance</p>
                  </div>
                </div>
                <p className="text-slate-600" style={{ 
                  fontFamily: 'Crimson Text, serif',
                }}>
                  Umgababa, Illovo, and Clansthal beaches with pristine white sands nearby
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}