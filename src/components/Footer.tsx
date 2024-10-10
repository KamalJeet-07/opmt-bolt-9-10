import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Settling Abroad</h3>
            <p className="text-gray-300">Your trusted partner for all types of visa and travel services.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/universities" className="hover:text-primary">Universities</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-300">Cityville, State 12345</p>
            <p className="text-gray-300">Phone: +44 7440 101043</p>
            <p className="text-gray-300">Email: settlingabroad68@gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><Facebook /></a>
              <a href="#" className="hover:text-primary"><Twitter /></a>
              <a href="https://www.instagram.com/settlingabroad_" className="hover:text-primary"><Instagram /></a>
              <a href="#" className="hover:text-primary"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 Settling Abroad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer