import React from 'react';
import { Quote, Star, Trophy, GraduationCap, User } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const achievers = [
    {
      name: "Aditi Sharma",
      course: "Class 12 Science (PCM)",
      result: "98.2% CBSE Boards",
      rank: "District Topper",
      image: "https://picsum.photos/400/400?random=101",
      quote: "Nucleus Classes changed my approach to Physics. The concepts became crystal clear."
    },
    {
      name: "Rohan Verma",
      course: "JEE Advanced",
      result: "AIR 1245",
      rank: "IIT Delhi",
      image: "https://picsum.photos/400/400?random=102",
      quote: "The rigor of the test series here is comparable to the actual exam. It prepared me for the pressure."
    },
    {
      name: "Sneha Gupta",
      course: "Class 12 Commerce",
      result: "97.5% ISC Boards",
      rank: "School Topper",
      image: "https://picsum.photos/400/400?random=103",
      quote: "Economics was my weak point, but the faculty here made it my strongest subject."
    }
  ];

  const parentReviews = [
    {
      parent: "Mrs. Kavita Reddy",
      child: "Mother of Arjun (Class 11)",
      text: "As a parent, I am very satisfied with the communication. I get regular updates on Arjun's attendance and test scores. The discipline at Nucleus is commendable."
    },
    {
      parent: "Mr. Rajesh Malhotra",
      child: "Father of Priya (Class 12)",
      text: "We switched three tuitions before finding Nucleus. Finally, Priya is confident in Mathematics. The small batch size really makes a difference."
    },
    {
      parent: "Dr. Anil Kumar",
      child: "Father of Neha (NEET Aspirant)",
      text: "The faculty is very approachable. Even late at night, doubts are resolved via the app. It's a very supportive environment for competitive exams."
    }
  ];

  return (
    <div className="bg-secondary min-h-screen pt-12 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full text-yellow-700 mb-6">
          <Trophy className="h-6 w-6 mr-2" />
          <span className="font-semibold">Celebrating Excellence</span>
        </div>
        <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">
          Stories of Success
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our greatest achievement is the success of our students. Hear from the toppers and their parents about their journey with Nucleus Classes.
        </p>
      </section>

      {/* Top Achievers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="font-display font-bold text-3xl text-primary mb-12 text-center md:text-left">
          Wall of Fame
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievers.map((student, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl">{student.name}</h3>
                    <p className="text-accent text-sm font-medium">{student.result}</p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                  <GraduationCap className="h-4 w-4" />
                  {student.course}
                </div>
                <div className="mb-6">
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {student.rank}
                  </span>
                </div>
                <div className="relative">
                  <Quote className="h-8 w-8 text-gray-200 absolute -top-4 -left-2" />
                  <p className="text-gray-600 relative z-10 italic pl-4">"{student.quote}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl mb-4">Trusted by Parents</h2>
            <p className="text-gray-300">We understand that your child's future is your top priority.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parentReviews.map((review, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl relative">
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-2 rounded-full">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">{review.parent}</p>
                    <p className="text-xs text-accent text-accent-light">{review.child}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Placeholder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-gray-900 relative min-h-[300px] flex items-center justify-center group cursor-pointer">
            <img 
              src="https://picsum.photos/800/600?random=105" 
              alt="Video Thumbnail" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
            />
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center z-10 shadow-xl group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-primary border-b-8 border-b-transparent ml-1"></div>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-bold text-lg">Annual Function & Awards 2023</p>
              <p className="text-sm opacity-80">Watch our students being felicitated</p>
            </div>
          </div>
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h3 className="font-display font-bold text-2xl text-primary mb-4">Beyond the Classroom</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Nucleus, we celebrate every milestone. From felicitation ceremonies for toppers to career counseling workshops and alumni meetups, we ensure our students feel valued and supported throughout their journey.
            </p>
            <button className="self-start text-accent font-semibold hover:text-accentHover transition-colors flex items-center gap-2">
              View Event Gallery <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};