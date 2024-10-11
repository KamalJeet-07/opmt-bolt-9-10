import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Universities from './pages/Universities'
import ContactForm from './pages/ContactForm'
import AdminPanel from './pages/AdminPanel'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/mysettle2511" element={<AdminPanel />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App