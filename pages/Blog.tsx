import React from 'react';
import { Calendar, User, ArrowRight, Tag, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Blog: React.FC = () => {
  const categories = ["All", "Exam Tips", "Career Guidance", "Subject Focus", "Institute News"];
  
  const posts = [
    {
      id: 1,
      title: "5 Time Management Strategies for CBSE Board Exams",
      excerpt: "The last month before boards is crucial. Here is how you can optimize your revision schedule without burning out.",
      category: "Exam Tips",
      author: "Rahul Sharma (Senior Faculty)",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      image: "https://picsum.photos/800/600?random=201",
      featured: true
    },
    {
      id: 2,
      title: "Understanding the New NEET Pattern for 2025",
      excerpt: "A breakdown of the recent changes announced by NTA and how it affects your preparation strategy.",
      category: "Career Guidance",
      author: "Dr. Anjali Gupta",
      date: "Mar 10, 2024",
      readTime: "4 min read",
      image: "https://picsum.photos/800/600?random=202",
      featured: false
    },
    {
      id: 3,
      title: "Why Commerce with Maths is a Winning Combination",
      excerpt: "Explore the career avenues that open up when you choose Mathematics with Commerce in Class 11.",
      category: "Subject Focus",
      author: "Vikram Singh",
      date: "Mar 05, 2024",
      readTime: "3 min read",
      image: "https://picsum.photos/800/600?random=203",
      featured: false
    },
    {
      id: 4,
      title: "Nucleus Classes Scholarship Test Results Announced",
      excerpt: "Check the list of top 50 students who have qualified for up to 100% scholarship for the upcoming session.",
      category: "Institute News",
      author: "Admin",
      date: "Feb 28, 2024",
      readTime: "2 min read",
      image: "https://picsum.photos/800/600?random=204",
      featured: false
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="font-display font-bold text-4xl text-primary mb-4">Nucleus Insights</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Expert advice, study tips, and the latest updates from the world of education.
        </p>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {posts.filter(p => p.featured).map(post => (
          <div key={post.id} className="relative rounded-2xl overflow-hidden group">
            <div className="absolute inset-0">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            </div>
            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col justify-end h-[500px] md:h-[600px] max-w-4xl">
              <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold self-start mb-4">
                {post.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-200 text-lg mb-8 line-clamp-2 md:line-clamp-none">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <span className="flex items-center gap-2"><User className="h-4 w-4" /> {post.author}</span>
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar / Filters */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <h3 className="font-display font-bold text-xl text-primary mb-6">Categories</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {categories.map((cat, idx) => (
                  <button 
                    key={idx}
                    className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      idx === 0 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-primary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-bold text-primary mb-2">Subscribe to Newsletter</h4>
                <p className="text-sm text-gray-600 mb-4">Get study tips directly to your inbox.</p>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-3 focus:outline-none focus:border-accent"
                />
                <button className="w-full bg-accent text-white py-2 rounded-md text-sm font-medium hover:bg-accentHover transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="lg:w-3/4">
            <div className="grid md:grid-cols-2 gap-8">
              {posts.filter(p => !p.featured).map(post => (
                <article key={post.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-primary mb-3 line-clamp-2">
                      <Link to={`/blog/${post.id}`} className="hover:text-accent transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center text-accent font-semibold text-sm hover:translate-x-1 transition-transform">
                      Read Article <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};