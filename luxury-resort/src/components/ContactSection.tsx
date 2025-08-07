import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ 
              fontFamily: 'Playfair Display, serif',}}>Get in Touch 
              <div 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-black to-transparent "
            style={{ width: '80%' }}
          ></div></h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground" style={{ 
            fontFamily: 'Crimson Text, serif',}}>
            Ready to experience the beauty of Amanzimtoti's coastline? Contact us to book your beachfront getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 ">
            <Card>
              <CardContent className="p-6 ">
                <div className="flex items-center space-x-4 ">
                  <div className="bg-gray-200 p-3 rounded-full ">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Location</h3>
                    <p className="text-muted-foreground text-sm text-gray-500" style={{ 
            fontFamily: 'Crimson Text, serif',}}>
                      Beachfront, Amanzimtoti<br />
                      KwaZulu-Natal, South Africa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-200 p-3 rounded-full">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Phone</h3>
                    <p className="text-muted-foreground text-sm text-gray-500" style={{ 
            fontFamily: 'Crimson Text, serif',}}>
                      +27 (0)31 903 1234
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-200 p-3 rounded-full">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Email</h3>
                    <p className="text-muted-foreground text-sm text-gray-500" style={{ 
            fontFamily: 'Crimson Text, serif',}}>
                      info@luxuryresort.co.za
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-200 p-3 rounded-full">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Check-in / Check-out</h3>
                    <p className="text-muted-foreground text-sm text-gray-500" style={{ 
            fontFamily: 'Crimson Text, serif',}}>
                      Check-in: 14:00<br />
                      Check-out: 10:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Airport Distance */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <h4 className="mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>King Shaka International Airport</h4>
                  <p className="text-2xl text-primary mb-1" style={{ 
            fontFamily: 'Crimson Text, serif ',}}>75 km</p>
                  <p className="text-sm text-muted-foreground text-gray-500" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Approximately 1 hour drive</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>First Name</label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Last Name</label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Email</label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Phone (Optional)</label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="checkin" className="block mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Check-in Date</label>
                      <Input id="checkin" type="date" />
                    </div>
                    <div>
                      <label htmlFor="checkout" className="block mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Check-out Date</label>
                      <Input id="checkout" type="date" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2" style={{ 
            fontFamily: 'Crimson Text, serif',}}>Message</label>
                    <Textarea 
                      id="message" 
                      rows={6} 
                      placeholder="Tell us about your planned stay, special requests, or any questions you may have..."
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}