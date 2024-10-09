import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [result, setResult] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Web3Forms API Submission
    setIsSubmitting(true);
    setResult('Sending....');

    const formDataToSend = new FormData(e.currentTarget);
    formDataToSend.append('access_key', 'b8c1f63a-6f20-4b89-b960-38a7689492fb'); // Use your Web3Forms access key

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });


      // Log the raw response for debugging
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      // Check if the response is JSON or not
      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await response.json(); // If response is JSON, parse it
        console.log('Response JSON:', data); // Log the parsed JSON
      } else {
        data = await response.text(); // If response is text, get the raw response
        console.log('Response Text:', data); // Log the raw text response
      }

      // Check if the response contains a success field
      if (data.success) {
        setResult('Form Submitted Successfully');
        e.currentTarget.reset(); // Reset the form after successful submission
      } else {
        setResult(data.message || 'There was an issue with submission.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setResult('Form submitted.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a subject</option>
                <option value="Visa Inquiry">Visa Inquiry</option>
                <option value="University Application">University Application</option>
                <option value="Immigration Services">Immigration Services</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </div>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
