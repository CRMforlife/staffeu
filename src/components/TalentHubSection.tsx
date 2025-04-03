"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const recruitmentCountries = [
  { name: 'Philippines', lat: 14.5995, lng: 120.9842 },
  { name: 'Vietnam', lat: 21.0285, lng: 105.8542 },
  { name: 'Nepal', lat: 27.7172, lng: 85.3240 },
  { name: 'India', lat: 28.6139, lng: 77.2090 },
  { name: 'Ukraine', lat: 50.4501, lng: 30.5234 },
  { name: 'Poland', lat: 52.2297, lng: 21.0122 }
];

const testimonials = [
  {
    id: 1,
    name: 'Maria P.',
    role: 'Healthcare Professional',
    country: 'Philippines',
    image: '/images/testimonials/maria.svg',
    quote: 'StaffPoint made my transition to Finland smooth and welcoming. They supported me every step of the way.',
    video: '/videos/maria-testimonial.mp4'
  },
  {
    id: 2,
    name: 'Linh T.',
    role: 'Software Developer',
    country: 'Vietnam',
    image: '/images/testimonials/linh.svg',
    quote: 'The cultural training and language support helped me adapt quickly to my new work environment.',
    video: '/videos/linh-testimonial.mp4'
  },
  {
    id: 3,
    name: 'Raj K.',
    role: 'Industrial Engineer',
    country: 'India',
    image: '/images/testimonials/raj.svg',
    quote: "From visa assistance to finding accommodation, StaffPoint's comprehensive support made all the difference.",
    video: '/videos/raj-testimonial.mp4'
  }
];

const finlandInfo = [
  {
    title: 'Housing Support',
    description: 'We help you find suitable accommodation and handle rental agreements.'
  },
  {
    title: 'Visa & Permits',
    description: 'Expert assistance with work permits and residence documentation.'
  },
  {
    title: 'Language Training',
    description: 'Comprehensive Finnish language courses for professional development.'
  },
  {
    title: 'Healthcare Access',
    description: 'Guidance on healthcare services and insurance coverage.'
  }
];

export default function TalentHubSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="whitespace-section bg-bg-light-tinted relative overflow-hidden">
      <div className="whitespace-container">
        <h2 className="heading-2 text-center mb-12 animate-fadeInUp">Global Talent Pool</h2>
        
        {/* Recruitment Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {['Source', 'Screen', 'Onboard'].map((step, index) => (
            <div key={step} className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent-purple text-white rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="heading-3 mb-4">{step}</h3>
              <p className="body-text text-gray-600">
                {step === 'Source' && 'We identify and connect with talented professionals from our global network.'}
                {step === 'Screen' && 'Thorough evaluation of skills, experience, and cultural fit.'}
                {step === 'Onboard' && 'Comprehensive support for a smooth transition to Finland.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Map - Full Width */}
      <div className="relative w-full mb-16 bg-gradient-to-r from-[#5E0079] via-[#F5A5C5] to-[#F75D0D] py-16">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="relative max-w-[1920px] mx-auto h-[500px] px-4">
          <Image
            src="/images/maps/world-map.svg"
            alt="World map showing recruitment countries"
            fill
            className="object-contain"
          />
          {/* Location Markers */}
          {recruitmentCountries.map((country) => (
            <div
              key={country.name}
              className="absolute w-4 h-4 bg-white rounded-full shadow-lg animate-pulse"
              style={{
                left: `${(country.lng + 180) * (100 / 360)}%`,
                top: `${(90 - country.lat) * (100 / 180)}%`
              }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-sm font-medium">
                {country.name}
              </div>
              <div className="absolute inset-0 bg-white rounded-full animate-ping"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="whitespace-container">
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-6">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h4 className="heading-3 text-center mb-2">{testimonial.name}</h4>
              <p className="text-sm text-center text-gray-600 mb-4">
                {testimonial.role} from {testimonial.country}
              </p>
              <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
              <button
                onClick={() => setSelectedVideo(testimonial.video)}
                className="w-full py-2 px-4 bg-accent-purple text-white rounded hover:bg-accent-purple/90 transition-colors"
                aria-label={`Watch ${testimonial.name}'s story`}
              >
                Watch Story
              </button>
            </div>
          ))}
        </div>

        {/* Working in Finland Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {finlandInfo.map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h3 className="heading-3 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full mx-4">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100"
              aria-label="Close video"
            >
              ✕
            </button>
            <video
              src={selectedVideo}
              controls
              className="w-full aspect-video rounded"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
} 