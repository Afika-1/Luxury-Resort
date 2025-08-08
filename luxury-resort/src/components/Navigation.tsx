import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import  BookingForm  from './BookingForm';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Accommodations', href: '#accommodations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Dining', href: '#dining' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-80px 0px -80px 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isActive = (href) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-medium">Coastal Beach Resort</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 relative ${
                    isActive(item.href)
                      ? 'text-primary font-medium underline underline-offset-4 decoration-2'
    : 'text-foreground hover:text-primary hover:underline hover:underline-offset-4 hover:decoration-1'

                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:block">
        
            <Button className="bg-black text-white hover:bg-primary/90">
              Book Now
            </Button>
           
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
           
            <Button size="sm" className="bg-black text-white">
              Book Now
            </Button>
           
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-black/10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary font-medium bg-primary/5'
                      : 'text-foreground hover:text-primary'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}