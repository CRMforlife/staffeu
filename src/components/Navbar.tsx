"use client";

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

// Navigation data structure
const navigation = [
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'International Recruitment', href: '/services/international-recruitment' },
      { name: 'HR & Payroll Services', href: '/services/hr-payroll-services' },
      { name: 'Workforce Planning & Consulting', href: '/services/workforce-planning' },
      { name: 'Temporary & Flexible Staffing', href: '/services/temporary-staffing' },
      { name: 'Training & Reskilling', href: '/services/training-reskilling' },
    ],
  },
  {
    name: 'For Employers',
    href: '/employers',
    children: [
      { name: 'Why Hire International Talent?', href: '/employers/why-hire-international' },
      { name: 'Success Stories', href: '/employers/success-stories' },
      { name: 'Process & Compliance', href: '/employers/process-compliance' },
      { name: 'FAQs', href: '/employers/faqs' },
      { name: 'Book a Discovery Call', href: '/employers/book-discovery-call' },
    ],
  },
  {
    name: 'For Jobseekers',
    href: '/jobseekers',
    children: [
      { name: 'Search Jobs', href: '/jobseekers/search-jobs' },
      { name: 'How It Works', href: '/jobseekers/how-it-works' },
      { name: 'Relocation Support', href: '/jobseekers/relocation-support' },
      { name: 'Training Programs', href: '/jobseekers/training-programs' },
      { name: 'Jobseeker FAQs', href: '/jobseekers/faqs' },
    ],
  },
  {
    name: 'Talent Hub',
    href: '/talent-hub',
    children: [
      { name: 'Where We Recruit', href: '/talent-hub/where-we-recruit' },
      { name: 'Candidate Stories', href: '/talent-hub/candidate-stories' },
      { name: 'Working in Finland', href: '/talent-hub/working-in-finland' },
      { name: 'Legal & Cultural Info', href: '/talent-hub/legal-cultural-info' },
    ],
  },
  {
    name: 'About Us',
    href: '/about',
    children: [
      { name: 'Mission & Vision', href: '/about/mission-vision' },
      { name: 'Our Story', href: '/about/our-story' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'DEI & Sustainability', href: '/about/dei-sustainability' },
      { name: 'Contact', href: '/about/contact' },
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle dropdown
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav 
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled 
          ? 'nav-scrolled backdrop-blur-md' 
          : 'nav-transparent backdrop-blur-sm'
      }`}
    >
      <div className="whitespace-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-white/85 font-bold text-xl">Staff</span>
              <span className="text-white/85 font-bold text-xl">Point</span>
              <span className="text-white/85 font-bold text-xl">EU</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1" ref={dropdownRef}>
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`px-4 py-2 text-white/85 rounded-md hover:bg-white/10 transition-all duration-300 flex items-center gap-2
                    ${activeDropdown === item.name ? 'bg-white/20' : ''}
                    hover:text-white`}
                >
                  {item.name}
                  <svg 
                    className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu */}
                <div 
                  className={`absolute left-0 mt-2 w-64 bg-white/95 rounded-lg shadow-xl py-2 z-10 transition-all duration-300
                    ${activeDropdown === item.name 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-4'}`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-text-dark hover:bg-gradient-to-r hover:from-[#5E0079]/5 hover:to-[#F28C00]/5 hover:text-[#F28C00] transition-all duration-300"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/85 hover:text-white transition-colors duration-300 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md rounded-b-lg shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`w-full text-left px-4 py-2 text-text-dark hover:text-[#F28C00] transition-all duration-300 flex justify-between items-center rounded-md
                      ${activeDropdown === item.name ? 'bg-gradient-to-r from-[#5E0079]/5 to-[#F28C00]/5 text-[#F28C00]' : ''}`}
                  >
                    <span className="flex items-center gap-2">
                      {item.name}
                    </span>
                    <svg 
                      className={`h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Mobile dropdown menu */}
                  {activeDropdown === item.name && (
                    <div className="pl-6 space-y-1 animate-fadeIn">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-text-dark hover:text-[#F28C00] transition-all duration-300 rounded-md hover:bg-gradient-to-r hover:from-[#5E0079]/5 hover:to-[#F28C00]/5"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 