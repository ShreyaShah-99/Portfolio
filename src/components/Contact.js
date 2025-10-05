import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-black text-white relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-black/90 to-gray-900/95 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <h2 className="section-title fade-in text-white after:bg-white">Get In Touch</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="fade-in">
            <h3 className="text-2xl mb-5 font-light tracking-widest uppercase">Let's Work Together</h3>
            <p className="text-lg mb-8 opacity-90">I'm always interested in new opportunities and exciting projects.</p>
            <div className="flex items-center mb-5">
              <i className="fas fa-envelope text-xl mr-4 w-6"></i>
              <span>shreya.shah@example.com</span>
            </div>
            <div className="flex items-center mb-5">
              <i className="fas fa-phone text-xl mr-4 w-6"></i>
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center mb-8">
              <i className="fas fa-map-marker-alt text-xl mr-4 w-6"></i>
              <span>India</span>
            </div>
            <div className="flex gap-5">
              <a href="#" className="w-12 h-12 bg-white/10 flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <form className="bg-white/10 p-10 backdrop-blur-sm fade-in" onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white/90 text-black placeholder-gray-600 transition-all duration-300 focus:outline-none focus:bg-white focus:-translate-y-1 focus:shadow-md"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white/90 text-black placeholder-gray-600 transition-all duration-300 focus:outline-none focus:bg-white focus:-translate-y-1 focus:shadow-md"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 bg-white/90 text-black placeholder-gray-600 transition-all duration-300 focus:outline-none focus:bg-white focus:-translate-y-1 focus:shadow-md resize-none"
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black px-8 py-3 font-medium tracking-wider uppercase text-sm transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;