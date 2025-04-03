import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-16 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-ui-purple to-ui-pink opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-3xl font-bold text-text-dark mb-4">Our Mission</h3>
                <p className="text-lg text-text-dark">
                  To connect talented professionals with outstanding opportunities across Europe.
                </p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-text-dark mb-6">About StaffPoint EU</h2>
            <p className="text-lg text-gray-600 mb-6">
              StaffPoint EU is a leading staffing and recruitment agency with offices across Europe. 
              We specialize in connecting businesses with the right talent and helping professionals 
              find their ideal career opportunities.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the industry, we have built a reputation for 
              delivering high-quality staffing solutions tailored to meet the unique needs of our clients.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-xl font-bold text-accent-purple mb-2">15+</h4>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent-purple mb-2">10+</h4>
                <p className="text-gray-600">European Countries</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent-purple mb-2">1000+</h4>
                <p className="text-gray-600">Successful Placements</p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent-purple mb-2">500+</h4>
                <p className="text-gray-600">Client Companies</p>
              </div>
            </div>
            <Link href="/about" className="inline-block bg-accent-purple text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 