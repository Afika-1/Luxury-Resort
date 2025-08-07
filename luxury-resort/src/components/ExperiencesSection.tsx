import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Waves, Utensils, Heart, Car, Wifi, Users } from 'lucide-react';

export function ExperiencesSection() {
  const experiences = [
    {
      id: 1,
      name: "Beachfront Access",
      description: "Direct access to pristine Umkomaas Beach just metres from your room",
      // image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      image: "./src/assets/images/439009931.jpg",
      icon: Waves
    },
    {
      id: 2,
      name: "Swimming Pools", 
      description: "Year-round outdoor swimming pool plus dedicated kids' pool for family fun",
      // image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            image: "./src/assets/images/435398486.jpg",

      icon: Waves
    },
    {
      id: 3,
      name: "Restaurant & Bar",
      description: "Family-friendly restaurant serving lunch and dinner with full bar service",
      // image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                  image: "./src/assets/images/436739232.jpg",
icon: Utensils
    },
    {
      id: 4,
      name: "Wellness & Comfort",
      description: "Relax in air-conditioned comfort with premium amenities and attentive service",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      
      icon: Heart
    },
    {
      id: 5,
      name: "Free Parking",
      description: "Complimentary on-site private parking available for all guests",
      // image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      image: "./src/assets/images/parking.jpg",
      icon: Car
    },
    {
      id: 6,
      name: "Free WiFi",
      description: "High-speed complimentary WiFi throughout the property (rated 9.2/10)",
      // image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      image: "./src/assets/images/wifi 2.jpg",
      icon: Wifi
    }
  ];

  return (
    <section id="experiences" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Resort Facilities</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Enjoy our comprehensive range of facilities designed for comfort and convenience. 
            From beachfront access to family-friendly amenities, everything you need for a perfect stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={experience.image}
                  alt={experience.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full">
                  <experience.icon size={20} className="text-primary" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-2">{experience.name}</h3>
                <p className="text-muted-foreground">{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guest Rating Section */}
        <div className="mt-16 text-center ">
          <div className="bg-gray-100 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl mb-4">Guest Reviews</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl mb-1">7.6</div>
                <div className="text-sm text-muted-foreground">Overall Rating</div>
              </div>
              <div>
                <div className="text-3xl mb-1">8.3</div>
                <div className="text-sm text-muted-foreground">Staff</div>
              </div>
              <div>
                <div className="text-3xl mb-1">8.4</div>
                <div className="text-sm text-muted-foreground">Cleanliness</div>
              </div>
              <div>
                <div className="text-3xl mb-1">9.2</div>
                <div className="text-sm text-muted-foreground">Free WiFi</div>
              </div>
            </div>
            <p className="text-muted-foreground mt-4">
              "Couples particularly like the location — rated 8.2 for a two-person trip"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}