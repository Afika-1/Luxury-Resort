import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Home } from 'lucide-react';
import BookingForm from './BookingForm';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Accommodations', href: '#accommodations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Dining', href: '#dining' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the highest intersection ratio that's visible
        let currentActive = '';
        let maxRatio = 0;

        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;
          
          // A section is considered active if it has any intersection and meets our criteria
          if (entry.isIntersecting && ratio > 0.1) {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              currentActive = entry.target.id;
            }
          }
        });

        // If we found an active section, update it
        if (currentActive) {
          setActiveSection(currentActive);
        } else {
          // Fallback: check which section is closest to the center of the viewport
          const sections = document.querySelectorAll('section[id]');
          let closestSection = '';
          let minDistance = Infinity;

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distance = Math.abs(sectionCenter - viewportCenter);

            if (distance < minDistance && rect.bottom > 0 && rect.top < window.innerHeight) {
              minDistance = distance;
              closestSection = section.id;
            }
          });

          if (closestSection) {
            setActiveSection(closestSection);
          }
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1.0], // Multiple thresholds for better detection
        rootMargin: '-60px 0px -60px 0px' // Reduced margin for better detection
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Also add a scroll listener as a backup
    const handleScrollBackup = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentActive = '';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        
        if (isVisible) {
          currentActive = section.id;
        }
      });

      if (currentActive && currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScrollBackup, { passive: true });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScrollBackup);
    };
  }, [activeSection]);

  const isActive = (href) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  const scrollToHome = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-lg' 
          : 'bg-white/90 backdrop-blur-md border-b border-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo Section */}
          <div className="flex-shrink-0 group">
            <button 
              onClick={scrollToHome}
              className="flex items-center gap-4 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 rounded-xl p-2"
            >
              {/* Logo Container */}
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl blur-md transition-all duration-300 ${
                  scrolled ? 'opacity-100' : 'opacity-0'
                }`}></div>
                <div className="relative w-20 h-12  overflow-hidden ring-white/50 group-hover:ring-amber-400/50 transition-all duration-300">
                  <img
                    src="./src/assets/images/logo.png"
                    alt="Coastal Beach Resort Logo"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if logo image doesn't exist
                      const target = e.target as HTMLImageElement;
                      if (target && target.nextElementSibling) {
                        target.style.display = 'none';
                        (target.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback icon if image doesn't load */}
                  <div className="hidden w-full h-full bg-gradient-to-br from-amber-400 to-amber-600 items-center justify-center">
                    <Home size={24} className="text-white" />
                  </div>
                </div>
              </div>
              
              {/* Resort Name */}
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent group-hover:from-amber-600 group-hover:to-amber-800 transition-all duration-300" style={{
                  fontFamily: 'Playfair Display, serif'
                }}>
                  Coastal Beach Resort
                </h1>
                <p className="text-xs text-slate-500 group-hover:text-amber-600 transition-colors duration-300" style={{
                  fontFamily: 'Crimson Text, serif',
                  letterSpacing: '0.5px'
                }}>
                  Luxury • Comfort • Experience
                </p>
              </div>
            </button>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                    isActive(item.href)
                      ? 'text-amber-600 font-medium bg-amber-50/80 backdrop-blur-sm' 
                      : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50/50'
                  }`}
                  style={{ fontFamily: 'Crimson Text, serif' }}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                  )}
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-amber-600/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Book Now Button */}
          <div className="hidden md:block">
            <BookingForm>
              <Button 
                className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Book Now
              </Button>
            </BookingForm>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <BookingForm>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                Book
              </Button>
            </BookingForm>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-amber-600 p-2 rounded-lg hover:bg-amber-50/50 transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-xl border-t border-slate-200/50 shadow-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-amber-600 font-medium bg-amber-50/80 backdrop-blur-sm shadow-sm' 
                      : 'text-slate-700 hover:text-amber-600 hover:bg-amber-50/50'
                  }`}
                  style={{ fontFamily: 'Crimson Text, serif' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-between">
                    {item.name}
                    {isActive(item.href) && (
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>


    </nav>
  );
}