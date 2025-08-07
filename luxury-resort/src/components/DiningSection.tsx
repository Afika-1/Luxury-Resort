import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, Users, Star } from 'lucide-react';

export function DiningSection() {
  const diningOptions = [
    {
      id: 1,
      name: "Main Restaurant",
      description: "Family-friendly restaurant serving fresh local cuisine with stunning sea views",
      // image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            image: "./src/assets/images/436739235.jpg",

      hours: "Lunch: 12:00 - 15:00 | Dinner: 18:00 - 22:00",
      specialties: ["Fresh Seafood", "Local Cuisine", "Family Meals", "Sea View Dining"]
    },
    {
      id: 2,
      name: "Pool Bar",
      description: "Casual poolside bar serving refreshing drinks and light snacks",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      hours: "Daily: 10:00 - 20:00",
      specialties: ["Cocktails", "Light Snacks", "Pool Service", "Refreshments"]
    },
    {
      id: 3,
      name: "Breakfast Service",
      description: "Start your day with a hearty breakfast featuring local and continental options",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      hours: "Daily: 06:30 - 10:00",
      specialties: ["Continental Breakfast", "Local Dishes", "Fresh Fruits", "Coffee & Tea"]
    }
  ];

  return (
    <section id="dining" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ 
              fontFamily: 'Playfair Display, serif',}} >Dining Experience</h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground" style={{ 
            fontFamily: 'Crimson Text, serif',}}>
            Savor exceptional cuisine in a welcoming atmosphere. Our family-friendly restaurant 
            and bar offer fresh local flavors with breathtaking ocean views.
          </p>
        </div>
``
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {diningOptions.map((option) => (
            <Card key={option.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={option.image}
                  alt={option.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full">
                  <span className="text-sm font-medium" style={{ textShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)' }}>
                    {option.name}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl mb-2">{option.name}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                  <Clock size={16} />
                  <span>{option.hours}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {option.specialties.map((specialty) => (
                    <span key={specialty} className="px-2 py-1 bg-accent text-accent-foreground rounded text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guest Reviews for Dining */}
        <div className="bg-gray-100 rounded-lg p-8 max-w-4xl mx-auto ">
          <h3 className="text-2xl mb-6 text-center" style={{ 
            fontFamily: 'Crimson Text, serif',}}>What Guests Say About Our Food</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>"Breakfast was amazing, friendly staff and chefs. They even had an event with free tickets and free food. The event was massive!!"</p>
              <p className="text-xs text-muted-foreground">- Pretty, South Africa</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>"Friendly staff. Great food. Exceptional facilities."</p>
              <p className="text-xs text-muted-foreground" style={{ 
            fontFamily: 'Crimson Text, serif',}}>- Ntobeko, South Africa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}