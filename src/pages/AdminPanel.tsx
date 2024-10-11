import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Newspaper } from 'lucide-react';

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
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Panel</h1>
      <div className="flex flex-wrap justify-center mb-8">
        <AdminButton icon={<Newspaper />} label="Blog Posts" active={true} />
      </div>
      <BlogPostForm />
    </div>
  );
};

const AdminButton: React.FC<{ icon: React.ReactNode; label: string; active: boolean }> = ({ icon, label, active }) => (
  <button
    className={`flex items-center px-4 py-2 m-2 rounded-full ${active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-500 hover:text-white transition duration-300`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);

const BlogPostForm: React.FC = () => {
  const [blogPost, setBlogPost] = useState<BlogPost>({
    id: Date.now(),
    title: '',
    content: '',
    image: '',
    author: '',
    date: '',
    category: '',
    excerpt: '',
  });
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  // Load blog posts from Supabase
  useEffect(() => {
    const fetchBlogPosts = async () => {
      const { data, error } = await supabase.from('blog_posts').select('*');
  
      if (error) {
        console.error('Error fetching blog posts:', error);
        alert('Failed to fetch blog posts. Check Supabase logs.');
      } else {
        console.log('Fetched blog posts:', data);
  
        if (data && data.length > 0) {
          setBlogPosts(data); 
          console.log('Blog posts set successfully:', data);
        } else {
          console.log('No blog posts found in Supabase.');
          setBlogPosts([]); // Empty array if no data
        }
      }
    };
    fetchBlogPosts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBlogPost(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Insert new blog post into Supabase
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([{ ...blogPost, id: Date.now() }])
      .select();

    if (error) {
      console.error('Error creating blog post:', error);
      alert('Failed to create blog post!');
    } else {
      console.log('Inserted blog post:', data);
      setBlogPosts([...blogPosts, ...(data || [])]); // Append new post to state
      alert('Blog post created successfully!');
      setBlogPost({
        id: Date.now(),
        title: '',
        content: '',
        image: '',
        author: '',
        date: '',
        category: '',
        excerpt: '',
      });
    }
  };

  const handleDelete = async (id: number) => {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog post:', error);
      alert('Failed to delete blog post!');
    } else {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
      alert('Blog post deleted successfully!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-4">Create Blog Post</h2>

        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title   Shown</label>
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
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">Image URL   Shown</label>
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
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date   Shown</label>
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
          <label htmlFor="excerpt" className="block text-gray-700 font-bold mb-2">Excerpt   Shown</label>
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

      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Existing Blog Posts</h2>
        {blogPosts.length === 0 ? (
          <p>No blog posts available.</p>
        ) : (
          <ul>
            {blogPosts.map(post => (
              <li key={post.id} className="mb-4 border-b border-gray-300 pb-4">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p className="text-sm text-gray-600">By {post.author} on {post.date}</p>
                <p>{post.excerpt}</p>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 text-white font-bold py-1 px-2 mt-2 rounded hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
