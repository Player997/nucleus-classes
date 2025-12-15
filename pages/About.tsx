import React from 'react';
import { Target, Heart, Compass, Lightbulb } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-8 pb-24">
      {/* Header */}
      <section className="bg-white py-16 md:py-24 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display font-bold text-4xl md:text-6xl text-primary mb-6 tracking-tighter">About Nucleus Classes</h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              We are an educational institution driven by the belief that every student has the potential to excel when provided with the right guidance, environment, and mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <div className="w-full h-64 md:h-96 overflow-hidden reveal">
        <img 
          src="https://picsum.photos/1920/600?grayscale" 
          alt="Classroom environment" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vision & Mission */}
      <section className="py-24 bg-secondary reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="inline-block p-4 bg-blue-100 rounded-2xl text-primary mb-8">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="font-display font-bold text-3xl text-primary mb-6 tracking-tight">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To be the most trusted educational partner for students, empowering them to achieve not just academic success, but to develop a scientific temper and critical thinking abilities that serve them for life.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
              <div className="inline-block p-4 bg-green-100 rounded-2xl text-accent mb-8">
                <Compass className="h-8 w-8" />
              </div>
              <h2 className="font-display font-bold text-3xl text-primary mb-6 tracking-tight">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                To provide high-quality, concept-driven education in Science and Commerce. We aim to simplify complex concepts, foster curiosity, and build confidence in every student through personalized attention and rigorous practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4 tracking-tight">Teaching Philosophy</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">Our approach goes beyond textbooks. We believe in the holistic development of our students.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-4">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-bold shadow-lg">1</div>
              <h3 className="font-display font-bold text-2xl mb-4 tracking-tight text-primary">Conceptual Clarity</h3>
              <p className="text-slate-600 leading-relaxed">We dissect every topic to its core. Rote learning has no place here.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-20 h-20 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-bold shadow-lg">2</div>
              <h3 className="font-display font-bold text-2xl mb-4 tracking-tight text-primary">Student-Centric</h3>
              <p className="text-slate-600 leading-relaxed">Every student learns differently. We adapt our pace and methods to ensure no one is left behind.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-bold shadow-lg">3</div>
              <h3 className="font-display font-bold text-2xl mb-4 tracking-tight text-primary">Continuous Assessment</h3>
              <p className="text-slate-600 leading-relaxed">Regular tests and feedback loops help identify weak areas early for focused improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary text-white overflow-hidden reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 tracking-tight">Our Core Values</h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1 bg-white/10 p-2 rounded-lg"><Heart className="h-6 w-6 text-accent" /></div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 tracking-tight">Integrity</h3>
                    <p className="text-slate-400 leading-relaxed">We are honest in our feedback and transparent in our communications with parents and students.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 mt-1 bg-white/10 p-2 rounded-lg"><Lightbulb className="h-6 w-6 text-accent" /></div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 tracking-tight">Innovation</h3>
                    <p className="text-slate-400 leading-relaxed">We constantly update our teaching methodologies to keep up with changing exam patterns.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-40 h-40 bg-accent/20 rounded-full blur-2xl"></div>
              <img 
                src="https://picsum.photos/600/400?random=3" 
                alt="Teacher helping student" 
                className="rounded-2xl shadow-2xl border border-white/10 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};