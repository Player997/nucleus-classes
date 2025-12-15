import React from 'react';
import { Users, Brain, Clock, BarChart3, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-white" />,
      color: "bg-blue-600",
      title: "Experienced Faculty",
      description: "Our teachers are not just qualified; they are mentors with 10+ years of experience in guiding students through Boards and Competitive exams."
    },
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      color: "bg-teal-600",
      title: "Concept Over Rote",
      description: "We hate 'mugging up'. We use visual aids, real-life examples, and derivations to ensure you understand the core of Physics or Economics."
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      color: "bg-purple-600",
      title: "Small Batch Size",
      description: "We limit our batches to 20 students. This ensures the teacher knows your name, your strengths, and exactly where you are struggling."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      color: "bg-orange-600",
      title: "Performance Analytics",
      description: "Regular fortnightly tests with detailed graphical analysis of your performance. We track your trajectory and course-correct immediately."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      color: "bg-pink-600",
      title: "24/7 Doubt Support",
      description: "Stuck on a problem at 9 PM? Post it on our student app group or visit the center early next day. No doubt goes unanswered."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-primary py-24 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 tracking-tighter">Why Choose Nucleus?</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Because your education deserves more than just a lecture. It deserves a strategy.
          </p>
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className={`inline-flex p-5 rounded-2xl ${feature.color} shadow-lg mb-8`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-bold text-3xl text-primary mb-5 tracking-tight">{feature.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
                <div className="flex-1 w-full">
                  <img 
                    src={`https://picsum.photos/600/400?random=${index + 10}`} 
                    alt={feature.title}
                    className="rounded-3xl shadow-xl w-full object-cover h-64 md:h-80 hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Highlight */}
      <section className="bg-secondary py-24 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary tracking-tight">Meet Your Mentors</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="overflow-hidden">
                  <img src={`https://picsum.photos/400/300?random=${i+20}&grayscale`} alt="Faculty" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="font-bold text-xl text-primary mb-1">Senior Faculty Member</h3>
                  <p className="text-accent text-sm font-semibold mb-4 tracking-wide uppercase">M.Sc Physics, 15 Years Exp.</p>
                  <p className="text-slate-600 text-sm leading-relaxed italic">"I believe physics is not about equations, but about imagination."</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link to="/contact">
              <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Join the Nucleus Family
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};