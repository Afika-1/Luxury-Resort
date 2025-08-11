import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, X } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    message: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.firstName.trim()) {
      alert('Please enter your first name');
      return;
    }
    if (!formData.lastName.trim()) {
      alert('Please enter your last name');
      return;
    }
    if (!formData.email.trim()) {
      alert('Please enter your email address');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!formData.message.trim()) {
      alert('Please enter a message');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessPopup(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        checkin: '',
        checkout: '',
        message: ''
      });
    }, 1500);
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  // Auto-close popup after 5 seconds
  useEffect(() => {
    if (showSuccessPopup) {
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup]);

  return (
    <>
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Elegant background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Additional ambient lighting effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Refined Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <div className="flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
                <Send className="mx-4 text-amber-600" size={24} />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
              </div>
              <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent" style={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: '300',
                letterSpacing: '-0.02em'
              }}>
                Get in Touch
              </h2>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto text-slate-300 leading-relaxed" style={{ 
                fontFamily: 'Crimson Text, serif',
                fontWeight: '300'
              }}>
                Ready to experience the beauty of Amanzimtoti's coastline? Let us craft your perfect beachfront escape.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Enhanced Contact Information */}
            <div className="space-y-6">
              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-600/30 shadow-2xl hover:shadow-amber-500/10 hover:shadow-2xl transition-all duration-300 rounded-xl">
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-4 rounded-2xl shadow-lg">
                      <MapPin className="text-amber-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-3 text-white" style={{ 
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: '600'
                      }}>Location</h3>
                      <p className="text-slate-300 leading-relaxed" style={{ 
                        fontFamily: 'Crimson Text, serif'
                      }}>
                        Beachfront, Amanzimtoti<br />
                        KwaZulu-Natal, South Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-600/30 shadow-2xl hover:shadow-blue-500/10 hover:shadow-2xl transition-all duration-300 rounded-xl">
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-2xl shadow-lg">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-3 text-white" style={{ 
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: '600'
                      }}>Phone</h3>
                      <p className="text-slate-300 leading-relaxed" style={{ 
                        fontFamily: 'Crimson Text, serif'
                      }}>
                        +27 (0)31 903 1234
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-600/30 shadow-2xl hover:shadow-emerald-500/10 hover:shadow-2xl transition-all duration-300 rounded-xl">
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-4 rounded-2xl shadow-lg">
                      <Mail className="text-emerald-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-3 text-white" style={{ 
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: '600'
                      }}>Email</h3>
                      <p className="text-slate-300 leading-relaxed" style={{ 
                        fontFamily: 'Crimson Text, serif'
                      }}>
                        info@luxuryresort.co.za
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/40 backdrop-blur-md border border-slate-600/30 shadow-2xl hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300 rounded-xl">
                <div className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-4 rounded-2xl shadow-lg">
                      <Clock className="text-purple-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-3 text-white" style={{ 
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: '600'
                      }}>Check-in / Check-out</h3>
                      <p className="text-slate-300 leading-relaxed" style={{ 
                        fontFamily: 'Crimson Text, serif'
                      }}>
                        Check-in: 14:00<br />
                        Check-out: 10:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Airport Distance */}
              <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 backdrop-blur-md border border-slate-500/30 shadow-2xl rounded-xl">
                <div className="p-8 text-center">
                  <h4 className="text-xl mb-4 text-white" style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: '600'
                  }}>King Shaka International Airport</h4>
                  <p className="text-4xl text-transparent bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text mb-2" style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontWeight: '700'
                  }}>75 km</p>
                  <p className="text-slate-300" style={{ 
                    fontFamily: 'Crimson Text, serif'
                  }}>Approximately 1 hour drive</p>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="xl:col-span-2">
              <div className="bg-slate-800/50 backdrop-blur-md border border-slate-600/40 shadow-2xl rounded-xl">
                <div className="p-10">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl md:text-4xl mb-4 text-white" style={{ 
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: '400'
                    }}>Send us a message</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block mb-3 text-slate-300 font-medium" style={{ 
                          fontFamily: 'Crimson Text, serif'
                        }}>First Name</label>
                        <input 
                          id="firstName" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your first name" 
                          className="w-full h-12 px-4 bg-slate-700/50 border border-slate-600/40 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none rounded-xl transition-all duration-200 text-white placeholder-slate-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block mb-3 text-slate-300 font-medium" style={{ 
                          fontFamily: 'Crimson Text, serif'
                        }}>Last Name</label>
                        <input 
                          id="lastName" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name" 
                          className="w-full h-12 px-4 bg-slate-700/50 border border-slate-600/40 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none rounded-xl transition-all duration-200 text-white placeholder-slate-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-3 text-slate-300 font-medium" style={{ 
                        fontFamily: 'Crimson Text, serif'
                      }}>Email</label>
                      <input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email" 
                        className="w-full h-12 px-4 bg-slate-700/50 border border-slate-600/40 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none rounded-xl transition-all duration-200 text-white placeholder-slate-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-3 text-slate-300 font-medium" style={{ 
                        fontFamily: 'Crimson Text, serif'
                      }}>Phone (Optional)</label>
                      <input 
                        id="phone" 
                        type="tel" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number" 
                        className="w-full h-12 px-4 bg-slate-700/50 border border-slate-600/40 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none rounded-xl transition-all duration-200 text-white placeholder-slate-400"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="checkin" className="block mb-3 text-slate-300 font-medium" style={{ 
                          fontFamily: 'Crimson Text, serif'
                        }}>Check-in Date</label>
                        <input 
                          id="checkin" 
                          type="date" 
                          value={formData.checkin}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 bg-slate-700/50 border border-slate-600/40 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none rounded-xl transition-all duration-200 text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="checkout" className="block mb-3 text-slate-300 font-medium" style={{ 
                          fontFamily: 'Crimson Text, serif'
                        }}>Check-out Date</label>
                        <input 
                          id="checkout" 
                          type="date" 
                          value={formData.checkout}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 bg-slate-700/50 border border-slate-600/40 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none rounded-xl transition-all duration-200 text-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-3 text-slate-300 font-medium" style={{ 
                        fontFamily: 'Crimson Text, serif'
                      }}>Message</label>
                      <textarea 
                        id="message" 
                        rows={6} 
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your planned stay, special requests, or any questions you may have..."
                        className="w-full p-4 bg-slate-700/50 border border-slate-600/40 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 focus:outline-none rounded-xl resize-none transition-all duration-200 text-white placeholder-slate-400"
                      />
                    </div>
                    <div className="flex justify-center pt-4">
                      <button 
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <Send size={18} />
                            <span>Send Inquiry</span>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white/90 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl max-w-md w-full transform animate-in fade-in zoom-in duration-300">
            <div className="p-8 text-center">
              <div className="mb-6">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="text-green-600 w-10 h-10" />
                </div>
              </div>
              
              <h3 className="text-2xl mb-4 text-slate-800" style={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: '600'
              }}>
                Message Sent Successfully!
              </h3>
              
              <p className="text-slate-600 mb-6 leading-relaxed" style={{ 
                fontFamily: 'Crimson Text, serif'
              }}>
                Thank you for reaching out. We've received your inquiry and will get back to you within 24 hours.
              </p>
              
              <div className="flex justify-center">
                <button
                  onClick={closePopup}
                  className="px-8 py-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
            
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all duration-200"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}