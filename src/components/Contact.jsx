import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";
import emailjs from 'emailjs-com';
import toast from "react-hot-toast";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  const [isSending, setIsSending] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    
  const templateParams = {
    ...formData,
    date: new Date().toLocaleString(), 
    year: new Date().getFullYear() 
  };


    emailjs.send(
      'service_bf6xuaf',
      'template_fa04w5l',
      templateParams,
      'H8ViTJ7BTW0N2KrSD'
    )
    .then((response) => {
      console.log('Email sent!', response.status, response.text);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    })
    .catch((err) => {
      console.error('Failed to send:', err);
      toast.error("Failed to send message. Please try again.");
    })
    .finally(() => {
      setIsSending(false);
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
    
    <section id="contact" className=" bg-gradient-to-tr from-slate-900 via-slate-800 to-indigo-900  py-20 px-4">
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
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex justify-center items-center"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;