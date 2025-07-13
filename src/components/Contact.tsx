'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const phone = '919000157795'; 
    const text = `Hi Prakash! I'm interested in your design services.

Name: ${name}
Email: ${email}
Number: ${number}
Message: ${message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappLink = `https://wa.me/${phone}?text=${encodedText}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 scroll-mt-28"
      style={{
        background: 'radial-gradient(circle at center, #eaf6ff 0%, #c1eaff 70%)',
      }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          Let’s{' '}
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Work Together
          </span>
        </h2>

        <motion.form
          onSubmit={handleSendWhatsApp}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-xl space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            placeholder="Your Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Send Message on WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

