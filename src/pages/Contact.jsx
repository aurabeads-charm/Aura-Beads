import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name} - Aura Beads Charm`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:harini3054@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <span className="text-amber-600 uppercase tracking-[0.4em] text-[10px] font-bold">Reach Out</span>
          <h1 className="text-5xl font-serif text-neutral-800 mt-2 mb-6 leading-tight">We'd Love to Hear From You</h1>
          <p className="text-neutral-500 leading-relaxed font-light mb-10">
            Have a question about our collections or want a custom design? 
            Our small artisanal team is here to help you find the perfect piece 
            that resonates with your unique charm.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-white soft-shadow rounded-full text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-800 mb-1">Email Us</h3>
                <p className="text-neutral-500 font-light">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-3 bg-white soft-shadow rounded-full text-amber-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-800 mb-1">Custom Orders</h3>
                <p className="text-neutral-500 font-light">For Customization, please message us for a quote.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-3 bg-white soft-shadow rounded-full text-amber-600">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-800 mb-1">WhatsApp Support</h3>
                <p className="text-neutral-500 font-light">Available Mon-Sat, 9AM to 6PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 soft-shadow rounded-sm border border-neutral-100">
          <h2 className="text-3xl font-serif text-neutral-800 mb-8 text-center italic">Direct Inquiry</h2>
          
          {isSubmitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm">
              <p className="text-green-700 text-center text-sm">
                ✓ Your email client has been opened. Please send the email to complete your inquiry.
              </p>
            </div>
          )}
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-neutral-50 border ${errors.name ? 'border-red-400' : 'border-neutral-100'} focus:border-amber-600 focus:outline-none transition-colors`} 
                placeholder="e.g. Elena Smith" 
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-xs">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-neutral-50 border ${errors.email ? 'border-red-400' : 'border-neutral-100'} focus:border-amber-600 focus:outline-none transition-colors`} 
                placeholder="elena@example.com" 
              />
              {errors.email && (
                <p className="mt-1 text-red-500 text-xs">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea 
                rows={4} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-neutral-50 border ${errors.message ? 'border-red-400' : 'border-neutral-100'} focus:border-amber-600 focus:outline-none transition-colors resize-none`} 
                placeholder="How can we help you?"
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-500 text-xs">{errors.message}</p>
              )}
            </div>
            <button 
              type="submit"
              className="w-full bg-neutral-900 text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-colors"
            >
              Send Message
            </button>
          </form>
          
          <div className="mt-8 flex justify-center space-x-6">
             <a href="https://www.instagram.com/aurabeads_.charm" className="text-neutral-400 hover:text-amber-600 transition-colors">
                <span className="text-xs uppercase tracking-widest font-semibold italic">Instagram</span>
             </a>
             <a href="#" className="text-neutral-400 hover:text-amber-600 transition-colors">
                <span className="text-xs uppercase tracking-widest font-semibold italic">Pinterest</span>
             </a>
             <a href="#" className="text-neutral-400 hover:text-amber-600 transition-colors">
                <span className="text-xs uppercase tracking-widest font-semibold italic">TikTok</span>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
