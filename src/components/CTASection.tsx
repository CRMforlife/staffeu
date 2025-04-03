import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="full-screen-header bg-gradient-to-r from-ui-purple to-ui-pink text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="whitespace-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6 animate-fadeInUp">Ready to Find Your Next Opportunity?</h2>
          <p className="body-text text-white/90 mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Whether you're looking for a new job or seeking talent for your organization, 
            StaffPoint EU is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <Link 
              href="/jobs" 
              className="secondary-button text-center"
            >
              Browse Jobs
            </Link>
            <Link 
              href="/contact" 
              className="primary-button text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 