import React from 'react'
import { Link } from 'react-router-dom'
import { Globe, GraduationCap, Users, Briefcase, ArrowRight, MapPin, CheckCircle } from 'lucide-react'
import BlogSection from '../components/BlogSection'
import ServiceCard from '../components/ServiceCard'

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Travel Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Your Journey Abroad Starts Here</h1>
            <p className="text-xl md:text-2xl mb-8">Expert guidance for visas, university applications, and settling abroad.</p>
            <Link to="/contact" className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Globe className="w-12 h-12 text-blue-500" />}
              title="Visa Assistance"
              description="Expert guidance for all types of visas to ensure a smooth application process."
            />
            <ServiceCard
              icon={<GraduationCap className="w-12 h-12 text-blue-500" />}
              title="University Applications"
              description="Comprehensive support for students applying to universities abroad."
            />
            <ServiceCard
              icon={<Briefcase className="w-12 h-12 text-blue-500" />}
              title="Work Permits"
              description="Assistance in obtaining work permits for various countries."
            />
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 mb-4">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Our team of experienced professionals provides personalized advice for your unique situation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 mb-4">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Support</h3>
              <p className="text-gray-600">We offer tailored solutions to meet your specific needs and goals for studying or working abroad.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-500 mb-4">
                <MapPin size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">Our extensive network of partners worldwide ensures you have support wherever you go.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Top Universities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'University of Bath', country: 'UK', image: './unofbath.png' },
              { name: 'University of Birmingham', country: 'UK', image: './unofbgm.png' },
              { name: 'University of Exeter', country: 'USA', image: './unofexc.png' },
              { name: 'University of Manchester', country: 'USA', image: './unofmen.png' },
              { name: 'University of Sheffield', country: 'USA', image: './unofshh.png' },
              { name: 'University of St Andrews', country: 'USA', image: './unofst.png' },
              { name: 'University of York', country: 'USA', image: './unofyk.png' },
              { name: 'Loughborough University', country: 'USA', image: './lbun.png' },

            ].map((uni, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={uni.image} alt={uni.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{uni.name}</h3>
                  <p className="text-gray-600">{uni.country}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['USA', 'UK', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'Singapore'].map((country, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center hover:bg-gray-200 transition duration-300">
                <h3 className="font-semibold">{country}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation and take the first step towards your dream of studying or working abroad.</p>
          <Link to="/contact" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home