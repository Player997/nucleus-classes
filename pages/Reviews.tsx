import React, { useState } from 'react';
import { Quote, Star, User, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export const Reviews: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  // Static reviews - these are manually approved/curated reviews
  const reviews = [
    {
      id: 1,
      name: "Aditi Sharma",
      stream: "Class 12 Science (PCM)",
      review: "Nucleus Classes changed my approach to Physics. The concepts became crystal clear, and the regular testing helped me identify my weak areas early on.",
      rating: 5
    },
    {
      id: 2,
      name: "Rohan Verma",
      stream: "JEE Advanced Aspirant",
      review: "The rigor of the test series here is comparable to the actual exam. It prepared me for the pressure. The faculty is extremely supportive even outside class hours.",
      rating: 5
    },
    {
      id: 3,
      name: "Sneha Gupta",
      stream: "Class 12 Commerce",
      review: "Economics was my weak point, but the faculty here made it my strongest subject. I scored 97.5% in my boards thanks to the conceptual clarity provided here.",
      rating: 5
    },
    {
      id: 4,
      name: "Arjun Mehta",
      stream: "Class 11 Science",
      review: "The small batch size really makes a difference. You can ask doubts without hesitation. The transition from Class 10 to 11 was made very smooth by the teachers.",
      rating: 4
    },
    {
      id: 5,
      name: "Priya Malhotra",
      stream: "NEET Aspirant",
      review: "Biology classes are interactive and not just about rote memorization. The diagrams and visual aids used in class helped me retain information much better.",
      rating: 5
    },
    {
      id: 6,
      name: "Vikram Singh",
      stream: "Class 12 Commerce",
      review: "The best place for Accountancy in the city. The logic behind every entry is explained, which helps in solving complex problems easily.",
      rating: 5
    }
  ];

  const handleReviewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const selectedRating = rating || 5;
    
    // --- GOOGLE SHEETS/FORMS INTEGRATION ---
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/formResponse";
    
    const googleFormData = new FormData();
    
    // TODO: Replace these keys with your actual Google Form entry IDs
    googleFormData.append("entry.100000001", formData.get('name') as string);   // Name
    googleFormData.append("entry.100000002", formData.get('stream') as string); // Class & Stream
    googleFormData.append("entry.100000003", formData.get('review') as string); // Review Text
    googleFormData.append("entry.100000004", selectedRating.toString());        // Rating
    
    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData
      });

      setTimeout(() => {
        setFormSubmitted(true);
        setRating(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsSubmitting(false);
      }, 800);
      
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("There was a problem submitting your review. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-secondary min-h-screen pt-16 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center reveal">
        <div className="inline-flex items-center justify-center px-4 py-1.5 bg-accent/10 rounded-full text-accent font-semibold text-sm mb-6 tracking-wide uppercase">
          Student Voices
        </div>
        <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6 tracking-tight">
          Hear from our <span className="text-accent">Nucleus</span> Family
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
          Real experiences from students who have transformed their academic journey with us. Authenticity is our hallmark.
        </p>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 flex flex-col reveal"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} 
                  />
                ))}
              </div>
              <div className="relative mb-6 flex-grow">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-slate-100 transform -scale-x-100" />
                <p className="relative z-10 text-slate-700 leading-relaxed italic">"{review.review}"</p>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-xs font-medium text-accent uppercase tracking-wide">{review.stream}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submission Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="bg-primary px-8 py-10 text-center">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">Share Your Experience</h2>
            <p className="text-slate-300">Your feedback helps us grow and inspires future students.</p>
          </div>
          
          <div className="p-8 md:p-10">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
                  Thank you for sharing your experience. Your review has been submitted for moderation and will be published after approval.
                </p>
                <Button onClick={() => setFormSubmitted(false)} variant="outline">Submit Another</Button>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit}>
                <div className="grid md:grid-cols-2 gap-x-6">
                  <Input 
                    label="Student Name"
                    name="name"
                    placeholder="e.g. Aryan Singh" 
                    required
                    disabled={isSubmitting}
                  />
                  <Input 
                    label="Class & Stream"
                    name="stream"
                    placeholder="e.g. Class 12 Science" 
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => !isSubmitting && setRating(star)}
                        onMouseEnter={() => !isSubmitting && setHoverRating(star)}
                        onMouseLeave={() => !isSubmitting && setHoverRating(0)}
                        className={`focus:outline-none transition-transform p-1 ${isSubmitting ? 'cursor-not-allowed opacity-70' : 'hover:scale-110 focus:scale-110'}`}
                        disabled={isSubmitting}
                      >
                        <Star 
                          className={`h-8 w-8 transition-colors duration-200 ${
                            star <= (hoverRating || rating) 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-slate-200'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="rating" value={rating || 5} />
                </div>

                <Input 
                  label="Your Review" 
                  name="review"
                  textarea 
                  placeholder="Tell us about your learning experience..." 
                  required
                  disabled={isSubmitting}
                />

                <div className="mt-8">
                  <Button type="submit" fullWidth className="flex items-center gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Processing <Loader2 className="h-4 w-4 animate-spin" /></>
                    ) : (
                      <>Submit Review <Send className="h-4 w-4" /></>
                    )}
                  </Button>
                </div>
                <p className="text-xs text-center text-slate-400 mt-4">
                  Reviews are moderated to ensure authenticity and maintain community guidelines.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};