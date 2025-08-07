import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AccommodationsSection() {
  const accommodations = [
    {
      id: 1,
      name: "Standard Sea View Room",
      description: "Comfortable room with air conditioning, private balcony and stunning sea views",
      // image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      image: "./src/assets/images/436738801.jpg",
      price: "From R850/night",
      features: ["Sea View", "Private Balcony", "Air Conditioning", "Free WiFi"]
    },
    {
      id: 2,
      name: "Family Room",
      description: "Spacious family accommodation with multiple beds and child-friendly amenities",
      // image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",

      image: "./src/assets/images/435398485.jpg",
      price: "From R1200/night",
      features: ["Family Setup", "Mini Refrigerator", "Work Desk", "Kids Pool Access"]
    },
    {
      id: 3,
      name: "Premium Beachfront Suite",
      description: "Luxury suite with direct beach access and panoramic ocean views",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      price: "From R1650/night",
      features: ["Beachfront Access", "Ocean Views", "Premium Amenities", "Private Bathroom"]
    }
  ];

  return (
    <section id="accommodations" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 " style={{
            fontFamily: 'Playfair Display, serif',
          }}>Comfortable Accommodations</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground" style={{
            fontFamily: 'Crimson Text, serif',
          }}>
            All rooms feature air conditioning, private bathrooms, and balconies with stunning views.
            Enjoy complimentary WiFi, refrigerators, and work desks for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((room) => (
            <Card key={room.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium" style={{ textShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)' }}>
                    {room.price}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-2">{room.name}</h3>
                <p className="text- mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature) => (
                    <span key={feature} className="px-2 py-1  bg-gray-300 text-accent-foreground rounded text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                <Button className="w-full">Check Availability</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}