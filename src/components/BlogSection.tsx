import React, { useState, useEffect } from 'react'
import { Calendar } from 'lucide-react'

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

const BlogSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const fetchBlogPosts = () => {
      const storedPosts = localStorage.getItem('blogPosts')
      if (storedPosts) {
        setBlogPosts(JSON.parse(storedPosts))
      }
    }

    fetchBlogPosts()
    window.addEventListener('blogPostsUpdated', fetchBlogPosts)

    return () => {
      window.removeEventListener('blogPostsUpdated', fetchBlogPosts)
    }
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
        {blogPosts.length === 0 ? (
          <p className="text-center text-gray-600">No blog posts available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map(post => (
              <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <a href="#" className="text-blue-500 hover:underline font-semibold">Read more</a>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-12">
          <a href="#" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  )
}

export default BlogSection