import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Waves, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6" style={{ 
              fontFamily: 'Playfair Display, serif',}}>About Luxury Resort</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" style={{ 
            fontFamily: 'Crimson Text, serif',}}>
              Located on the stunning coastline of Amanzimtoti, South Africa, Luxury Resort offers 
              direct beachfront access with Umkomaas Beach just metres away. Our resort combines 
              coastal beauty with modern comfort, providing guests with an unforgettable beach holiday experience.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" style={{ 
            fontFamily: 'Crimson Text, serif',}}>
              Whether you're seeking a romantic getaway, family vacation, or peaceful retreat, 
              our attentive staff and exceptional facilities ensure every guest enjoys outstanding 
              hospitality in our beautiful South African coastal setting.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Waves className="text-primary" size={24} />
                </div>
                <h3 className="mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Beachfront</h3>
                <p className="text-sm text-muted-foreground" style={{ 
            fontFamily: 'Crimson Text, serif',}}>
                  Direct access to pristine Umkomaas Beach
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Prime Location</h3>
                <p className="text-sm text-muted-foreground" style={{ 
            fontFamily: 'Crimson Text, serif',}}>
                  Amanzimtoti coastline, 75km from King Shaka Airport
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Highly Rated</h3>
                <p className="text-sm text-muted-foreground" style={{ 
            fontFamily: 'Crimson Text, serif',}}>
                  7.6/10 guest rating with excellent cleanliness scores
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-100 not-last:rounded-lg">
              <h4 className="mb-3" style={{ 
            fontFamily: 'Crimson Text, serif',}}>What Guests Love</h4>
              <ul className="space-y-2 text-sm text-muted-foreground" style={{ 
            fontFamily: 'Crimson Text, serif',}}>
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
              src="./src/assets/images/431141506.jpg"
              alt="Luxury Resort beachfront location in Amanzimtoti"
              className="w-full h-96 lg:h-full object-cover rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="mb-1" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Distance to Airport</h4>
              <p className="text-3xl text-primary" style={{ 
            fontFamily: 'Crimson Text, serif',}}>75km</p>
              <p className="text-sm text-muted-foreground" style={{ 
            fontFamily: 'Crimson Text, serif',}}>King Shaka International</p>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mt-20">
          <h3 className="text-3xl mb-8 text-center" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Nearby Attractions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="mb-2 font-medium" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Umkomaas Golf Club</h4>
              <p className="text-muted-foreground text-sm mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>5 km away</p>
              <p className="text-sm" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Championship golf course with stunning coastal views</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="mb-2 font-medium" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Kenneth Stainbank Nature Reserve</h4>
              <p className="text-muted-foreground text-sm mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>36 km away</p>
              <p className="text-sm" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Beautiful nature reserve perfect for hiking and wildlife viewing</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="mb-2 font-medium" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Local Beaches</h4>
              <p className="text-muted-foreground text-sm mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Walking distance</p>
              <p className="text-sm" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Umgababa, Illovo, and Clansthal beaches nearby</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}