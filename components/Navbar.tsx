import React, { useState } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { Menu, X, Atom } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Student Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <RouterNavLink to="/" className="flex-shrink-0 flex items-center gap-2 group" onClick={closeMenu}>
              <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors duration-300 shadow-sm">
                <Atom className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-primary leading-tight tracking-tight">Nucleus</span>
                <span className="font-sans text-xs font-semibold text-accent uppercase tracking-widest">Classes</span>
              </div>
            </RouterNavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <RouterNavLink
                key={item.path}
                to={item.path}
                className={`font-medium text-sm tracking-wide transition-colors duration-200 py-2 border-b-2 ${
                  isActive(item.path)
                    ? 'text-accent border-accent'
                    : 'text-slate-600 border-transparent hover:text-primary hover:border-slate-200'
                }`}
              >
                {item.label}
              </RouterNavLink>
            ))}
            <RouterNavLink to="/contact">
              <button className="ml-2 px-6 py-2.5 rounded-md bg-primary text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Enquire Now
              </button>
            </RouterNavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white border-b border-gray-200 shadow-lg`}>
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <RouterNavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`block px-3 py-3 rounded-md text-base font-medium ${
                isActive(item.path)
                  ? 'bg-blue-50 text-accent'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
              }`}
            >
              {item.label}
            </RouterNavLink>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-100">
             <RouterNavLink to="/contact" onClick={closeMenu}>
              <button className="w-full px-4 py-3 rounded-md bg-primary text-white font-medium hover:bg-slate-800 transition-colors">
                Enquire Now
              </button>
            </RouterNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};