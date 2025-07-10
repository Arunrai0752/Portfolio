import React from "react";
import { FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 py-16 px-4">
      <h1 className="text-4xl font-bold text-white pb-4 border-b-2 border-amber-500 mb-12">
        Contact Me
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-700 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-amber-400 mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-amber-500 text-xl mt-1 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-white">Location</h3>
                <p className="text-gray-300">Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaPhone className="text-amber-500 text-xl mt-1 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-white">Phone</h3>
                <a href="tel:90998209835" className="text-gray-300 hover:text-white transition-colors">
                  +91 9098209835
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <FaPaperPlane className="text-amber-500 text-xl mt-1 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <a 
                  href="mailto:realarunrai0752@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  realarunrai0752@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-700 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold text-amber-400 mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message" 
                rows="5"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;