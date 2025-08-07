import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          // src="./src/assets/images/435398486.jpg"
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"

          alt="Luxury beachfront resort with pristine beach access in Amanzimtoti"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" style={{ backdropFilter: 'blur(2px)' }}> </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        {/* Main Heading with Playfair Display */}
        <div className="relative inline-block mb-8">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl leading-tight font-bold italic tracking-wide text-white"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              textShadow: '4px 4px 8px rgba(0, 0, 0, 0.9), 2px 2px 4px rgba(0, 0, 0, 0.8), 0px 0px 20px rgba(0, 0, 0, 0.5)'
            }}
          >
            Luxury Resort
          </h1>
          {/* Elegant underline accent */}
          <div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
            style={{ width: '80%' }}
          ></div>
        </div>

        {/* Subtitle with Crimson Text */}
        <p 
          className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed font-medium opacity-95"
          style={{ 
            fontFamily: 'Crimson Text, serif',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
            letterSpacing: '0.5px'
          }}
        >
          Experience beachfront luxury on the stunning South African coast.
          <br className="hidden md:block" />
          <span className="block md:inline mt-2 md:mt-0">
            Direct access to Umkomaas Beach with world-class amenities and hospitality.
          </span>
        </p>

        {/* Buttons with enhanced styling */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 transition-all duration-300 px-10 py-4 rounded-none border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white transform hover:scale-105 shadow-2xl"
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontWeight: '500',
              letterSpacing: '1px',
              fontSize: '1.1rem'
            }}
          >
            Book Your Stay
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-10 py-4 rounded-none backdrop-blur-sm bg-white/10 transform hover:scale-105 shadow-2xl"
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontWeight: '400',
              letterSpacing: '1px',
              fontSize: '1.1rem'
            }}
          >
            Explore Facilities
          </Button>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center mb-2 backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span 
            className="text-xs tracking-widest opacity-80"
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            SCROLL
          </span>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-1 h-20 bg-gradient-to-b from-white/30 to-transparent hidden lg:block"></div>
      <div className="absolute top-1/4 right-8 w-1 h-20 bg-gradient-to-b from-white/30 to-transparent hidden lg:block"></div>
      
      {/* Corner decorative lines */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-white/40 hidden lg:block"></div>
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-white/40 hidden lg:block"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-white/40 hidden lg:block"></div>
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-white/40 hidden lg:block"></div>
    </section>
  );
}