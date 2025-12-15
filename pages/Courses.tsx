import React, { useState } from 'react';
import { Microscope, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Courses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'science' | 'commerce'>('science');

  return (
    <div className="bg-secondary min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6 tracking-tighter">Our Academic Programs</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Meticulously designed courses for Class 11 & 12 to help you conquer Board Exams and Competitive Entrances.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16 reveal">
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-slate-200 inline-flex">
            <button
              onClick={() => setActiveTab('science')}
              className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 tracking-wide ${
                activeTab === 'science' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Microscope className="h-5 w-5" />
              Science Stream
            </button>
            <button
              onClick={() => setActiveTab('commerce')}
              className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 tracking-wide ${
                activeTab === 'commerce' 
                  ? 'bg-accent text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Calculator className="h-5 w-5" />
              Commerce Stream
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Course Info */}
          <div className="lg:col-span-2">
            
            {activeTab === 'science' && (
              <div className="animate-fade-up space-y-8">
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm">
                  <h2 className="font-display font-bold text-3xl text-primary mb-4 tracking-tight">Class 11 & 12 Science (PCM/PCB)</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    Our flagship science program integrates Board preparation with foundational concepts required for JEE and NEET. We focus on numerical solving skills, derivation logic, and application of theory.
                  </p>
                  
                  <h3 className="font-bold text-xl mb-6 text-primary tracking-tight">Subjects Covered:</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Computer Science'].map(sub => (
                      <div key={sub} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <CheckCircle2 className="h-5 w-5 text-accent" />
                        <span className="text-slate-700 font-semibold">{sub}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-bold text-xl mb-6 text-primary tracking-tight">Course Highlights:</h3>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="leading-relaxed">Detailed coverage of NCERT & Reference Books.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="leading-relaxed">Weekly objective and subjective testing.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="leading-relaxed">Special focus on practicals and lab manuals.</span>
                    </li>
                  </ul>
                  
                  <Link to="/contact">
                    <button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                      Download Brochure
                    </button>
                  </Link>
                </div>
              </div>
            )}

            {activeTab === 'commerce' && (
              <div className="animate-fade-up space-y-8">
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm">
                  <h2 className="font-display font-bold text-3xl text-primary mb-4 tracking-tight">Class 11 & 12 Commerce</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                    A comprehensive program designed to build a strong foundation in finance, economics, and business studies. Ideal for students aspiring for CA, CS, CMA, or top commerce colleges via CUET.
                  </p>
                  
                  <h3 className="font-bold text-xl mb-6 text-primary tracking-tight">Subjects Covered:</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {['Accountancy', 'Economics', 'Business Studies', 'Mathematics', 'English', 'Informatics Practices'].map(sub => (
                      <div key={sub} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <CheckCircle2 className="h-5 w-5 text-yellow-600" />
                        <span className="text-slate-700 font-semibold">{sub}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-bold text-xl mb-6 text-primary tracking-tight">Course Highlights:</h3>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="leading-relaxed">Real-world case studies and balance sheet analysis.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="leading-relaxed">Regular updates on CBSE curriculum changes.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <span className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></span>
                      <span className="leading-relaxed">Preparation for college entrance exams.</span>
                    </li>
                  </ul>

                  <Link to="/contact">
                    <button className="bg-accent text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                      Download Brochure
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 reveal">
            <div className="bg-primary text-white rounded-3xl p-8 sticky top-24 shadow-lg">
              <h3 className="font-display font-bold text-2xl mb-8 tracking-tight">Why Join Now?</h3>
              <div className="space-y-8">
                <div className="border-l-4 border-accent pl-5">
                  <h4 className="font-bold text-lg mb-2 tracking-tight">Small Batches</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">Max 20 students per batch for personalized attention.</p>
                </div>
                <div className="border-l-4 border-accent pl-5">
                  <h4 className="font-bold text-lg mb-2 tracking-tight">Doubt Counters</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">Daily doubt clearing sessions post-class.</p>
                </div>
                <div className="border-l-4 border-accent pl-5">
                  <h4 className="font-bold text-lg mb-2 tracking-tight">Library Access</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">Access to our curated library of reference books.</p>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-slate-700">
                <p className="mb-4 font-semibold text-slate-200">Have specific questions?</p>
                <Link to="/contact" className="flex items-center justify-between bg-white/10 p-5 rounded-xl hover:bg-white/20 transition-colors group">
                  <span className="text-sm font-medium">Talk to a counselor</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};