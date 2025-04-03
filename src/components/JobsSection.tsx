import Link from 'next/link';

const featuredJobs = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    location: 'Helsinki, Finland',
    type: 'Full-time',
    posted: '2 days ago',
    logo: '/companies/tech-solutions.png',
  },
  {
    id: 2,
    title: 'Marketing Manager',
    company: 'European Retail Group',
    location: 'Berlin, Germany',
    type: 'Full-time',
    posted: '1 week ago',
    logo: '/companies/retail-group.png',
  },
  {
    id: 3,
    title: 'Financial Analyst',
    company: 'Global Finance Ltd.',
    location: 'Amsterdam, Netherlands',
    type: 'Full-time',
    posted: '3 days ago',
    logo: '/companies/global-finance.png',
  },
  {
    id: 4,
    title: 'Customer Service Representative',
    company: 'Service Pro',
    location: 'Stockholm, Sweden',
    type: 'Part-time',
    posted: '5 days ago',
    logo: '/companies/service-pro.png',
  },
];

export default function JobsSection() {
  return (
    <section className="whitespace-section bg-bg-light-tinted">
      <div className="whitespace-container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 animate-fadeInUp">Featured Job Opportunities</h2>
          <p className="body-text max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Discover exciting career opportunities across Europe. Browse our featured jobs or search for your next role.
          </p>
        </div>
        
        <div className="bento-grid">
          {featuredJobs.map((job, index) => (
            <div 
              key={job.id} 
              className={`bento-item col-span-12 md:col-span-6 lg:col-span-3 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fadeInUp card-3d`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-peach/30 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent-purple font-bold text-lg">
                      {job.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="heading-3">{job.title}</h3>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6 flex-grow">
                  <div className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 mr-2 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 mr-2 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 mr-2 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{job.posted}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/jobs/${job.id}`} 
                  className="primary-button text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link href="/jobs" className="primary-button">
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
} 