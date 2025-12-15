import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, TrendingUp, Users, Award, Microscope, Calculator } from 'lucide-react';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Students studying" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 reveal">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold tracking-wide mb-8">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              Admissions Open for 2024-25
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter mb-8">
              Building the <span className="text-accent">Nucleus</span> of Your Academic Success
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-light">
              Premium coaching for Class 11 & 12 Science and Commerce. We don't just teach syllabus; we build concepts that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="primary" className="w-full sm:w-auto">Book a Demo Class</Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="w-full sm:w-auto !text-white !border-white hover:!bg-white hover:!text-primary">Explore Courses</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-100 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-1 tracking-tight">12+</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-1 tracking-tight">2k+</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Students Mentored</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-1 tracking-tight">100%</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Result Focus</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-1 tracking-tight">20:1</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Student-Teacher Ratio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nucleus */}
      <section className="py-24 bg-secondary reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 tracking-tight">Why Nucleus Classes?</h2>
            <p className="text-slate-600 text-lg leading-relaxed">We bridge the gap between rote learning and conceptual understanding.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-3 tracking-tight">Expert Faculty</h3>
              <p className="text-slate-600 leading-relaxed">
                Learn from seasoned educators and industry experts who are passionate about their subjects and your success.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="h-14 w-14 bg-green-50 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-3 tracking-tight">Concept-Based Learning</h3>
              <p className="text-slate-600 leading-relaxed">
                We focus on 'Why' and 'How' rather than just 'What', ensuring a deep fundamental understanding of every topic.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group">
              <div className="h-14 w-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-7 w-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-3 tracking-tight">Proven Results</h3>
              <p className="text-slate-600 leading-relaxed">
                Our consistent track record of board toppers and competitive exam selections speaks for our teaching methodology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Streams */}
      <section className="py-24 bg-white reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 tracking-tight">Our Specialized Streams</h2>
              <p className="text-slate-600 text-lg leading-relaxed">Tailored curriculum for Class 11 & 12 aiming for Board excellence and Entrance Exams.</p>
            </div>
            <Link to="/courses" className="hidden md:block">
              <span className="flex items-center text-accent font-semibold hover:text-accentHover transition-colors">
                View all courses <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Science Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900 aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] shadow-md">
              <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Science Lab" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent rounded-lg">
                    <Microscope className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-accent font-bold tracking-widest uppercase text-xs">Science Stream</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-3 tracking-tight">Physics, Chemistry, Maths & Biology</h3>
                <p className="text-slate-300 mb-8 max-w-xl leading-relaxed">Comprehensive preparation for CBSE/ISC Boards, JEE Main/Advanced, and NEET.</p>
                <Link to="/courses">
                  <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-primary transition-all">
                    Explore Science
                  </button>
                </Link>
              </div>
            </div>

            {/* Commerce Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-900 aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] shadow-md">
              <img 
                src="https://picsum.photos/800/600?random=2" 
                alt="Commerce Books" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-600 rounded-lg">
                    <Calculator className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs">Commerce Stream</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-3 tracking-tight">Accountancy, Economics & Business</h3>
                <p className="text-slate-300 mb-8 max-w-xl leading-relaxed">Master the financial world with Boards preparation, CA Foundation, and CUET.</p>
                <Link to="/courses">
                  <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-primary transition-all">
                    Explore Commerce
                  </button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/courses" className="inline-flex items-center text-accent font-semibold">
              View all courses <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial / Success Highlight */}
      <section className="py-24 bg-primary text-white reveal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Award className="h-14 w-14 text-accent mx-auto mb-8" />
          <h2 className="font-display font-bold text-3xl mb-10 tracking-tight">Student Success</h2>
          <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 tracking-tight">
            "The conceptual clarity I got at Nucleus Classes was unmatched. The faculty didn't just help me score 98% in my boards, but made me fall in love with Physics."
          </blockquote>
          <cite className="not-italic block">
            <div className="font-bold text-xl tracking-wide">Aryan Gupta</div>
            <div className="text-accent text-sm font-semibold tracking-wider uppercase mt-1">Class 12 Topper (Science), 2023</div>
          </cite>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent py-20 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-white text-center md:text-left">
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-3 tracking-tight">Ready to excel in your studies?</h2>
              <p className="text-teal-100 text-lg font-medium">Join the batch starting next week. Limited seats available.</p>
            </div>
            <Link to="/contact">
               <button className="px-10 py-4 bg-white text-accent font-bold rounded-xl shadow-xl hover:bg-slate-50 hover:scale-105 transition-all duration-300">
                Enquire for Admission
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};