import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import TrustSection from '@/components/TrustSection';
import SolutionsSection from '@/components/SolutionsSection';
import TalentHubSection from '@/components/TalentHubSection';
import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center">
        {/* Dynamic Background with Globe */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-ui-purple/90 to-ui-pink/90 z-10"></div>
          <div className="absolute inset-0 z-0">
            <div className="globe-container w-full h-full flex items-center justify-center">
              <div className="globe w-[800px] h-[800px] rounded-full bg-white/10 backdrop-blur-sm animate-spin-slow">
                <div className="globe-pin absolute top-1/4 left-1/4 w-4 h-4 bg-trend-coral rounded-full animate-pulse"></div>
                <div className="globe-pin absolute top-1/3 right-1/4 w-4 h-4 bg-trend-teal rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="globe-pin absolute bottom-1/3 left-1/3 w-4 h-4 bg-trend-lavender rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="globe-pin absolute bottom-1/4 right-1/3 w-4 h-4 bg-trend-sage rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <div className="globe-pin absolute top-1/2 left-1/2 w-4 h-4 bg-trend-coral rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="whitespace-container relative z-20 py-20">
          <div className="max-w-3xl">
            <h1 className="heading-1 text-white mb-6 animate-fadeInUp">
              Empowering Global Workforces
            </h1>
            <p className="body-text text-white/90 mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              International recruitment, HR services, and flexible workforce solutions by one of Finland's leading HR companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="primary-button text-center card-3d"
              >
                Hire International Talent
              </a>
              <a
                href="#jobs"
                className="secondary-button text-center card-3d"
              >
                Find Opportunities Abroad
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Section */}
      <Suspense fallback={<div className="h-96 bg-bg-light animate-pulse"></div>}>
        <TrustSection />
      </Suspense>

      {/* Solutions Section */}
      <Suspense fallback={<div className="h-96 bg-bg-light animate-pulse"></div>}>
        <SolutionsSection />
      </Suspense>

      {/* Global Talent Pool Section */}
      <Suspense fallback={<div className="h-96 bg-bg-light animate-pulse"></div>}>
        <TalentHubSection />
      </Suspense>
      
      {/* CTA Section with Trend Gradient */}
      <Suspense fallback={<div className="h-64 bg-bg-light-tinted animate-pulse"></div>}>
        <CTASection />
      </Suspense>
      
      {/* Contact Section with Progress Indicators */}
      <Suspense fallback={<div className="h-96 bg-bg-light-tinted animate-pulse"></div>}>
        <ContactSection />
      </Suspense>
    </main>
  );
} 