import React, { useState, useEffect } from 'react'
import { Newspaper, GraduationCap, Users, Briefcase } from 'lucide-react'

type AdminSection = 'blog' | 'universities' | 'testimonials' | 'services'

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
}

const AdminPanel: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AdminSection>('blog')

  const renderSection = () => {
    switch (activeSection) {
      case 'blog':
        return <BlogPostForm />
      case 'universities':
        return <UniversityForm />
      case 'testimonials':
        return <TestimonialForm />
      case 'services':
        return <ServiceForm />
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Panel</h1>
      <div className="flex flex-wrap justify-center mb-8">
        <AdminButton icon={<Newspaper />} label="Blog Posts" onClick={() => setActiveSection('blog')} active={activeSection === 'blog'} />
        <AdminButton icon={<GraduationCap />} label="Universities" onClick={() => setActiveSection('universities')} active={activeSection === 'universities'} />
        <AdminButton icon={<Users />} label="Testimonials" onClick={() => setActiveSection('testimonials')} active={activeSection === 'testimonials'} />
        <AdminButton icon={<Briefcase />} label="Services" onClick={() => setActiveSection('services')} active={activeSection === 'services'} />
      </div>
      {renderSection()}
    </div>
  )
}

const AdminButton: React.FC<{ icon: React.ReactNode; label: string; onClick: () => void; active: boolean }> = ({ icon, label, onClick, active }) => (
  <button
    className={`flex items-center px-4 py-2 m-2 rounded-full ${active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-500 hover:text-white transition duration-300`}
    onClick={onClick}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
)

const BlogPostForm: React.FC = () => {
  const [blogPost, setBlogPost] = useState<BlogPost>({ 
    id: Date.now(),
    title: '', 
    content: '', 
    image: '', 
    author: '', 
    date: '', 
    category: '',
    excerpt: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBlogPost(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newBlogPost = { ...blogPost, id: Date.now() }
    const existingPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]')
    const updatedPosts = [newBlogPost, ...existingPosts]
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts))
    console.log('Blog post submitted:', newBlogPost)
    alert('Blog post created successfully!')
    setBlogPost({ 
      id: Date.now(),
      title: '', 
      content: '', 
      image: '', 
      author: '', 
      date: '', 
      category: '',
      excerpt: ''
    })
    // Trigger a custom event to notify other components
    window.dispatchEvent(new Event('blogPostsUpdated'))
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={blogPost.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image URL</label>
        <input
          type="url"
          id="image"
          name="image"
          value={blogPost.image}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={blogPost.author}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={blogPost.date}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
        <select
          id="category"
          name="category"
          value={blogPost.category}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a category</option>
          <option value="Travel Visa">Travel Visa</option>
          <option value="Work Visa">Work Visa</option>
          <option value="Study Visa">Study Visa</option>
          <option value="Immigration">Immigration</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="excerpt" className="block text-gray-700 font-bold mb-2">Excerpt</label>
        <textarea
          id="excerpt"
          name="excerpt"
          value={blogPost.excerpt}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
        <textarea
          id="content"
          name="content"
          value={blogPost.content}
          onChange={handleChange}
          required
          rows={8}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300">
        Create Blog Post
      </button>
    </form>
  )
}

const UniversityForm: React.FC = () => {
  return <div>University Form (To be implemented)</div>
}

const TestimonialForm: React.FC = () => {
  return <div>Testimonial Form (To be implemented)</div>
}

const ServiceForm: React.FC = () => {
  return <div>Service Form (To be implemented)</div>
}

export default AdminPanel