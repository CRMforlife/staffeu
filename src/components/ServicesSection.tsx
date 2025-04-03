import Link from 'next/link';

const services = [
  {
    title: 'Temporary Staffing',
    description: 'Flexible staffing solutions for short-term needs and seasonal work.',
    icon: (
      <svg className="h-12 w-12 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: '/services/temporary',
  },
  {
    title: 'Permanent Recruitment',
    description: 'Finding the perfect long-term candidates for your organization.',
    icon: (
      <svg className="h-12 w-12 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    link: '/services/permanent',
  },
  {
    title: 'Executive Search',
    description: 'Specialized recruitment for senior and executive positions.',
    icon: (
      <svg className="h-12 w-12 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    link: '/services/executive',
  },
  {
    title: 'HR Consulting',
    description: 'Strategic HR solutions to optimize your workforce management.',
    icon: (
      <svg className="h-12 w-12 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    link: '/services/consulting',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="whitespace-section bg-bg-light">
      <div className="whitespace-container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 animate-fadeInUp">Our Services</h2>
          <p className="body-text max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            We offer comprehensive staffing solutions tailored to meet the unique needs of businesses across Europe.
          </p>
        </div>
        
        <div className="bento-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bento-item col-span-12 md:col-span-6 lg:col-span-3 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp card-3d`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="bg-accent-peach p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="heading-3 mb-2">{service.title}</h3>
                <p className="body-text mb-6 flex-grow">{service.description}</p>
                <Link 
                  href={service.link} 
                  className="link-underline text-accent-purple font-semibold self-start"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/services" 
            className="primary-button"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
} 