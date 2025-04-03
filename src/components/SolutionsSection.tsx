"use client";

import { useState } from 'react';
import Link from 'next/link';

const solutions = [
  {
    icon: '🌍',
    title: 'International Recruitment',
    description: 'Access global talent pools and find the perfect candidates for your organization across borders.',
    categories: ['employers', 'public-sector', 'health-care', 'industry'],
    link: '/services/international-recruitment'
  },
  {
    icon: '🧑‍💼',
    title: 'HR & Payroll Services',
    description: 'Comprehensive HR administration and payroll management solutions for businesses of all sizes.',
    categories: ['employers', 'public-sector', 'industry'],
    link: '/services/hr-payroll-services'
  },
  {
    icon: '📈',
    title: 'Workforce Planning & Consulting',
    description: 'Strategic workforce planning and expert consulting to optimize your organizational structure.',
    categories: ['employers', 'public-sector', 'industry', 'hospitality'],
    link: '/services/workforce-planning'
  },
  {
    icon: '🔄',
    title: 'Temporary & Flexible Staffing',
    description: 'Flexible staffing solutions to meet your temporary and seasonal workforce needs.',
    categories: ['employers', 'health-care', 'industry', 'hospitality'],
    link: '/services/temporary-staffing'
  },
  {
    icon: '🧑‍🎓',
    title: 'Training & Reskilling',
    description: 'Professional development and reskilling programs to enhance workforce capabilities.',
    categories: ['jobseekers', 'employers', 'public-sector'],
    link: '/services/training-reskilling'
  }
];

const categories = [
  { id: 'all', label: 'All Solutions' },
  { id: 'employers', label: 'Employers' },
  { id: 'jobseekers', label: 'Jobseekers' },
  { id: 'public-sector', label: 'Public Sector' },
  { id: 'health-care', label: 'Health & Care' },
  { id: 'industry', label: 'Industry' },
  { id: 'hospitality', label: 'Hospitality' }
];

export default function SolutionsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSolutions = activeCategory === 'all'
    ? solutions
    : solutions.filter(solution => solution.categories.includes(activeCategory));

  return (
    <section className="whitespace-section bg-bg-light">
      <div className="whitespace-container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="heading-2 mb-6 animate-fadeInUp">Solutions We Offer</h2>
          <p className="body-text text-text-gray animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Comprehensive workforce solutions tailored to your specific industry needs and challenges.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent-purple text-white shadow-md scale-105'
                  : 'bg-white text-text-gray hover:bg-accent-peach hover:text-accent-purple'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution, index) => (
            <div
              key={solution.title}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <Link href={solution.link} className="block p-6">
                <div className="flex flex-col h-full">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="heading-3 mb-3 group-hover:text-accent-purple transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="body-text text-text-gray mb-4 flex-grow">
                    {solution.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.categories.map((category) => (
                      <span
                        key={category}
                        className="text-xs px-2 py-1 rounded-full bg-accent-peach/30 text-accent-purple"
                      >
                        {categories.find(c => c.id === category)?.label}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-accent-purple font-semibold flex items-center">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 