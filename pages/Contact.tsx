import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-secondary pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 reveal">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6 tracking-tighter">Get In Touch</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">Start your journey towards academic excellence. Visit us or leave a message.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8 reveal">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="font-display font-bold text-2xl text-primary mb-8 tracking-tight">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-blue-50 rounded-full text-primary flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Visit Us</h3>
                    <p className="text-slate-600 mt-2 leading-relaxed">
                      123 Academic Enclave, Knowledge Park II,<br />
                      Metro City, 110045
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-green-50 rounded-full text-accent flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Call Us</h3>
                    <p className="text-slate-600 mt-2 text-lg">+91 98765 43210</p>
                    <p className="text-slate-400 text-sm mt-1 font-medium">Mon-Sat, 10am - 7pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 bg-purple-50 rounded-full text-purple-600 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Email Us</h3>
                    <p className="text-slate-600 mt-2 text-lg">admissions@nucleusclasses.edu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="space-y-3">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 h-80 w-full relative bg-slate-100">
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5565690923204!2d77.0186659748168!3d28.492897990409226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19c6dd89c391%3A0x4fc48fa33283c927!2sNucleus%20Classes!5e0!3m2!1sen!2sin!4v1765783241998!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nucleus Classes Location"
                  className="w-full h-full"
                >
                </iframe>
              </div>
              <div className="flex justify-end px-2">
                <a 
                  href="https://maps.app.goo.gl/npY4z1utJKRxvVGV8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accentHover transition-colors group"
                >
                  <MapPin className="h-4 w-4 group-hover:animate-bounce" />
                  View on Google Maps
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-accent reveal">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h2 className="font-display font-bold text-3xl text-primary mb-4 tracking-tight">Message Sent!</h2>
                <p className="text-slate-600 mb-10 text-lg leading-relaxed">Thank you for contacting Nucleus Classes. Our academic counselor will reach out to you within 24 hours.</p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline">Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 className="font-display font-bold text-2xl text-primary mb-8 tracking-tight">Admission Enquiry</h2>
                
                <div className="grid md:grid-cols-2 gap-x-6">
                  <Input 
                    label="Full Name" 
                    name="name" 
                    placeholder="Student's Name" 
                    required 
                  />
                  <Input 
                    label="Phone Number" 
                    name="phone" 
                    type="tel" 
                    placeholder="10-digit Mobile Number" 
                    required 
                  />
                </div>

                <Input 
                  label="Email Address" 
                  name="email" 
                  type="email" 
                  placeholder="parent@example.com" 
                  required 
                />

                <div className="mb-6">
                  <label className="block text-sm font-bold text-slate-700 mb-3 tracking-wide">Interested Stream</label>
                  <select className="w-full px-4 py-3 bg-white border-2 border-slate-300 rounded-lg shadow-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors">
                    <option value="">Select a Stream</option>
                    <option value="science-11">Class 11 Science</option>
                    <option value="science-12">Class 12 Science</option>
                    <option value="commerce-11">Class 11 Commerce</option>
                    <option value="commerce-12">Class 12 Commerce</option>
                  </select>
                </div>

                <Input 
                  label="Message / Query" 
                  name="message" 
                  textarea 
                  placeholder="Any specific requirements or questions?" 
                />

                <Button type="submit" fullWidth className="mt-6 font-bold py-4 text-lg">
                  Submit Enquiry
                </Button>
                
                <p className="text-xs text-center text-slate-400 mt-6 font-medium">
                  By submitting this form, you agree to receive academic updates from us.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};