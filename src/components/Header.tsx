import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plane, Menu, X } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-secondary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Plane size={32} className="text-primary" />
          <span className="text-2xl font-bold">Settling Abroad</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/universities">Universities</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/services" onClick={toggleMenu}>Services</NavLink>
            <NavLink to="/universities" onClick={toggleMenu}>Universities</NavLink>
            <NavLink to="/testimonials" onClick={toggleMenu}>Testimonials</NavLink>
            <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
            <NavLink to="/admin" onClick={toggleMenu}>Admin</NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="hover:text-primary transition duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
)

export default Header