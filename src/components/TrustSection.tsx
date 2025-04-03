"use client";

import Image from 'next/image';

const stats = [
  { number: '20,000+', label: 'Workers Placed Annually', color: 'bg-purple-50' },
  { number: '30+', label: 'Years of Experience', color: 'bg-purple-100' },
  { number: '1,000+', label: 'Global Client Companies', color: 'bg-purple-50' },
  { number: '95%', label: 'Client Satisfaction Rate', color: 'bg-purple-100' }
];

const trustedCompanies = [
  { name: 'Company 1', logo: '/images/logos/company1.svg' },
  { name: 'Company 2', logo: '/images/logos/company2.svg' },
  { name: 'Company 3', logo: '/images/logos/company3.svg' },
  { name: 'Company 4', logo: '/images/logos/company4.svg' },
  { name: 'Company 5', logo: '/images/logos/company5.svg' }
];

const awards = [
  { name: 'Award 1', logo: '/images/awards/award1.svg' },
  { name: 'Award 2', logo: '/images/awards/award2.svg' },
  { name: 'Award 3', logo: '/images/awards/award3.svg' }
];

export default function TrustSection() {
  return (
    <section className="whitespace-section bg-white">
      <div className="whitespace-container">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Title Card - Spans 2 columns */}
          <div className="md:col-span-2 lg:col-span-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-3xl p-8 md:p-12">
            <h2 className="heading-2 mb-6 animate-fadeInUp">Why StaffPoint?</h2>
            <p className="body-text text-gray-600 max-w-3xl animate-fadeInUp">
              Since 1993, StaffPoint has been Finland's trusted partner in workforce solutions. From
              our Helsinki headquarters to our expanding international presence, we've built a
              reputation for excellence in connecting global talent with opportunities across
              Europe.
            </p>
          </div>

          {/* Stats Cards */}
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`${stat.color} rounded-3xl p-6 md:p-8 transform hover:scale-[1.02] transition-all duration-300 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}

          {/* Trusted Companies Card - Spans full width */}
          <div className="lg:col-span-4 bg-purple-50 rounded-3xl p-8 md:p-12">
            <h3 className="heading-3 mb-8 text-center">Trusted by Global Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              {trustedCompanies.map((company) => (
                <div 
                  key={company.name}
                  className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Awards Card - Spans full width */}
          <div className="lg:col-span-4 bg-gradient-to-r from-purple-100 to-purple-50 rounded-3xl p-8 md:p-12">
            <h3 className="heading-3 mb-8 text-center">Awards & Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
              {awards.map((award) => (
                <div 
                  key={award.name}
                  className="relative w-40 h-40 hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={award.logo}
                    alt={award.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 