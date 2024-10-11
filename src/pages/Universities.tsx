import React from 'react'
import { Search } from 'lucide-react'

const universities = [
  { name: 'Harvard University', country: 'USA', image: './unofbath.png' },
  { name: 'University of Oxford', country: 'UK', image: './unofbgm.png' },
  { name: 'Massachusetts Institute of Technology', country: 'USA', image: '' },
  { name: 'Stanford University', country: 'USA', image: 'https://banner2.cleanpng.com/20180816/af/ffab1388d96363a735719e4a2ede0868.webp' },
  { name: 'University of Cambridge', country: 'UK', image: 'https://images.unsplash.com/photo-1580386179684-4e3f8b5b8b9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'ETH Zurich', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'University of Toronto', country: 'Canada', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'National University of Singapore', country: 'Singapore', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'University of Melbourne', country: 'Australia', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Peking University', country: 'China', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'University of Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Sorbonne University', country: 'France', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Technical University of Munich', country: 'Germany', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'University of Amsterdam', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'University of Copenhagen', country: 'Denmark', image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
]

const Universities: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const filteredUniversities = universities.filter(uni =>
    uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    uni.country.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Top 15 Universities</h1>
      <div className="mb-8 max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search universities..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredUniversities.map((uni, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={uni.image} alt={uni.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{uni.name}</h2>
              <p className="text-gray-600">{uni.country}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Universities