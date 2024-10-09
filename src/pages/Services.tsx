import React from 'react'
import { CreditCard, GraduationCap, Users, Briefcase, Globe, FileText } from 'lucide-react'

const services = [
  { icon: <CreditCard size={48} />, title: 'Visa Assistance', description: 'Expert guidance for all types of visas, ensuring a smooth application process.' },
  { icon: <GraduationCap size={48} />, title: 'Study Abroad', description: 'Comprehensive support for students looking to pursue education overseas.' },
  { icon: <Users size={48} />, title: 'Immigration Services', description: 'Professional assistance for those seeking to immigrate to a new country.' },
  { icon: <Briefcase size={48} />, title: 'Work Permits', description: 'Assistance in obtaining work permits for various countries.' },
  { icon: <Globe size={48} />, title: 'Travel Planning', description: 'Customized travel itineraries and arrangements for your journey abroad.' },
  { icon: <FileText size={48} />, title: 'Document Translation', description: 'Certified translation services for all your important documents.' },
]

const Services: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-6 bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services