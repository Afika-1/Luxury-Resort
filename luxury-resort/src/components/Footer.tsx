import { Button } from './ui/button';
import { Input } from './ui/input';
// import { Separator } from './ui/separator';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Slot } from "@radix-ui/react-slot"; 
import { Separator } from "@radix-ui/react-separator"; 
   

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl mb-4">Luxury Resort</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Your beachfront getaway in beautiful Amanzimtoti. Experience direct beach access, 
              comfortable accommodations, and exceptional South African hospitality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#accommodations" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Accommodations</a></li>
              <li><a href="#experiences" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Facilities</a></li>
              <li><a href="#dining" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Restaurant & Bar</a></li>
              <li><a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact & Booking</a></li>
            </ul>
          </div>

          {/* Services & Facilities */}
          <div>
            <h4 className="mb-4">Facilities</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Outdoor Swimming Pool</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Beachfront Access</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Kids' Pool</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Free Parking</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Free WiFi</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4">Stay Connected</h4>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe for special offers and updates about our beachfront resort.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                Subscribe
              </Button>
            </div>
            <div className="mt-4 text-sm text-primary-foreground/80">
              <p>King Shaka International Airport: 75km</p>
              <p>Umkomaas Golf Club: 5km</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 Luxury Resort, Amanzimtoti. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Booking Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}