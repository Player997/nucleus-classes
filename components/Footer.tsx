import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <Atom className="h-6 w-6 text-accent" />
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">Nucleus Classes</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering students with conceptual clarity and academic excellence in Science and Commerce streams.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-slate-200">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">About Us</Link></li>
              <li><Link to="/courses" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Courses</Link></li>
              <li><Link to="/reviews" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Student Reviews</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-accent transition-colors text-sm font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-slate-200">Programs</h3>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm font-medium">Class 11 Science (PCM/B)</li>
              <li className="text-slate-400 text-sm font-medium">Class 12 Science (PCM/B)</li>
              <li className="text-slate-400 text-sm font-medium">Class 11 Commerce</li>
              <li className="text-slate-400 text-sm font-medium">Class 12 Commerce</li>
              <li className="text-slate-400 text-sm font-medium">Entrance Prep (JEE/NEET/CA)</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-slate-200">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm font-medium">123 Academic Enclave, Knowledge Park II, Metro City, 110045</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-slate-400 text-sm font-medium">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-slate-400 text-sm font-medium">admissions@nucleusclasses.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Nucleus Classes. All rights reserved.</p>
          <p className="text-slate-600 text-xs font-medium">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};