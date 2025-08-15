import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-800 to-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-white pb-4 border-b-2 border-amber-500 mb-12"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div 
            variants={item}
            className="bg-gray-700 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-amber-400 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <FaMapMarkerAlt className="text-amber-500 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="text-gray-300">Bhopal, Madhya Pradesh, India</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <FaPhone className="text-amber-500 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <a href="tel:90998209835" className="text-gray-300 hover:text-white transition-colors">
                    +91 9098209835
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start"
              >
                <FaPaperPlane className="text-amber-500 text-xl mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <a 
                    href="mailto:arunrai0752@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    arunrai0752@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-gray-700 p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-amber-400 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div whileHover={{ scale: 1.01 }}>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  required
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  required
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  required
                ></textarea>
              </motion.div>
              
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;