import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Universities from './pages/Universities';
import ContactForm from './pages/ContactForm';
import AdminPanel from './pages/AdminPanel';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute'; // Import ProtectedRoute

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
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/login" element={<Login />} />
            
            {/* Wrap AdminPanel with ProtectedRoute */}
            <Route 
              path="/AdminPanel" 
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
