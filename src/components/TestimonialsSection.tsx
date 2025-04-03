"use client";

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Rodriguez',
    position: 'HR Director, Tech Solutions Inc.',
    image: '/testimonials/person1.jpg',
    quote: 'StaffPoint EU has been instrumental in helping us find top talent for our expanding operations across Europe. Their understanding of our needs and ability to deliver quality candidates has been exceptional.',
  },
  {
    id: 2,
    name: 'John Smith',
    position: 'CEO, Global Innovations Ltd.',
    image: '/testimonials/person2.jpg',
    quote: 'We\'ve worked with StaffPoint EU for over 5 years, and they continue to exceed our expectations. Their team is professional, responsive, and truly understands the importance of finding the right fit for our organization.',
  },
  {
    id: 3,
    name: 'Anna Kowalski',
    position: 'Talent Acquisition Manager, European Retail Group',
    image: '/testimonials/person3.jpg',
    quote: 'The quality of candidates provided by StaffPoint EU is consistently high. They take the time to understand our company culture and requirements, which results in successful placements and long-term retention.',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="whitespace-section bg-bg-light">
      <div className="whitespace-container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 animate-fadeInUp">What Our Clients Say</h2>
          <p className="body-text max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Hear from businesses and professionals who have experienced our staffing solutions.
          </p>
        </div>
        
        <div className="bento-grid">
          {/* Main Testimonial */}
          <div className="bento-item col-span-12 md:col-span-8 bg-white rounded-xl shadow-md p-8 md:p-12 relative animate-fadeInUp card-3d">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="w-24 h-24 rounded-full bg-accent-peach/30 flex items-center justify-center overflow-hidden">
                  <span className="text-accent-purple text-3xl font-bold">
                    {testimonials[activeIndex].name.charAt(0)}
                  </span>
                </div>
              </div>
              
              <div className="flex-1">
                <blockquote className="text-lg md:text-xl italic mb-4">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div className="font-bold text-text-dark">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeIndex].position}
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-accent-purple' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-accent-purple transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-accent-purple transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Stats Card */}
          <div className="bento-item col-span-12 md:col-span-4 bg-white rounded-xl shadow-md p-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h3 className="heading-3 mb-6 text-center">Our Impact</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Successful Placements</span>
                <span className="text-2xl font-bold text-accent-purple">2,500+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Client Satisfaction</span>
                <span className="text-2xl font-bold text-accent-purple">98%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Countries Served</span>
                <span className="text-2xl font-bold text-accent-purple">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Years of Experience</span>
                <span className="text-2xl font-bold text-accent-purple">15+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 