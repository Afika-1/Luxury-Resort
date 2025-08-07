import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AccommodationsSection } from './components/AccommodationsSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { DiningSection } from './components/DiningSection';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        <AccommodationsSection />
        <ExperiencesSection />
        <DiningSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Floating Book Now Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
          Book Now
        </button>
      </div>
    </div>
  );
}