import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Waves, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">About Luxury Resort</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Located on the stunning coastline of Amanzimtoti, South Africa, Luxury Resort offers 
              direct beachfront access with Umkomaas Beach just metres away. Our resort combines 
              coastal beauty with modern comfort, providing guests with an unforgettable beach holiday experience.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're seeking a romantic getaway, family vacation, or peaceful retreat, 
              our attentive staff and exceptional facilities ensure every guest enjoys outstanding 
              hospitality in our beautiful South African coastal setting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Waves className="text-primary" size={24} />
                </div>
                <h3 className="mb-2">Beachfront</h3>
                <p className="text-sm text-muted-foreground">
                  Direct access to pristine Umkomaas Beach
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="mb-2">Prime Location</h3>
                <p className="text-sm text-muted-foreground">
                  Amanzimtoti coastline, 75km from King Shaka Airport
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="mb-2">Highly Rated</h3>
                <p className="text-sm text-muted-foreground">
                  7.6/10 guest rating with excellent cleanliness scores
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/30 rounded-lg">
              <h4 className="mb-3">What Guests Love</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Walking distance to the beach</li>
                <li>• Friendly and welcoming staff</li>
                <li>• Clean and well-maintained facilities</li>
                <li>• Breathtaking sea views from rooms</li>
                <li>• Family-friendly atmosphere</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Luxury Resort beachfront location in Amanzimtoti"
              className="w-full h-96 lg:h-full object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mb-1">Distance to Airport</h4>
              <p className="text-3xl text-primary">75km</p>
              <p className="text-sm text-muted-foreground">King Shaka International</p>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-20">
          <h3 className="text-3xl mb-8 text-center">Nearby Attractions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="mb-2">Umkomaas Golf Club</h4>
              <p className="text-muted-foreground text-sm mb-2">5 km away</p>
              <p className="text-sm">Championship golf course with stunning coastal views</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="mb-2">Kenneth Stainbank Nature Reserve</h4>
              <p className="text-muted-foreground text-sm mb-2">36 km away</p>
              <p className="text-sm">Beautiful nature reserve perfect for hiking and wildlife viewing</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="mb-2">Local Beaches</h4>
              <p className="text-muted-foreground text-sm mb-2">Walking distance</p>
              <p className="text-sm">Umgababa, Illovo, and Clansthal beaches nearby</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}