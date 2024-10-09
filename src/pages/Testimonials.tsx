import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Doe',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    text: 'Settling Abroad made my dream of studying in the UK a reality. Their guidance throughout the visa process was invaluable.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    country: 'Canada',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    text: 'I couldn\'t have navigated the complex immigration process without Settling Abroad. They were with me every step of the way.',
    rating: 5,
  },
  {
    name: 'Alex Johnson',
    country: 'Australia',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    text: 'The team at Settling Abroad is professional, knowledgeable, and truly cares about their clients. Highly recommended!',
    rating: 4,
  },
  {
    name: 'Maria Garcia',
    country: 'Spain',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    text: 'Thanks to Settling Abroad, my work permit application was approved quickly. Their expertise made all the difference.',
    rating: 5,
  },
]

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h2 className="text-xl font-semibold">{testimonial.name}</h2>
                  <p className="text-gray-600">{testimonial.country}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials