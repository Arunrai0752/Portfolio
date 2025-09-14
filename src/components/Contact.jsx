import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiSend, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="text-3xl text-amber-400" />,
      title: "Location",
      content: "Bhopal, Madhya Pradesh, India",
      link: null,
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: <FiPhone className="text-3xl text-green-400" />,
      title: "Phone",
      content: "+91 9098209835",
      link: "tel:90998209835",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <FiMail className="text-3xl text-blue-400" />,
      title: "Email",
      content: "arunrai0752@gmail.com",
      link: "mailto:arunrai0752@gmail.com",
      gradient: "from-blue-500 to-purple-600"
    }
  ];

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-600/5 to-cyan-600/5 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect and create something amazing together
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.5), 0 0 0 1px rgba(99, 102, 241, 0.3)",
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 text-center">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${info.gradient} shadow-lg mb-6`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-300 hover:text-amber-400 transition-colors text-lg"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-300 text-lg">{info.content}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div
            variants={item}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Arunrai0752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl text-white hover:from-gray-600 hover:to-gray-500 transition-all duration-300 shadow-lg"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl text-white hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-blue-400 to-blue-300 rounded-xl text-white hover:from-blue-300 hover:to-blue-200 transition-all duration-300 shadow-lg"
                >
                  <FaTwitter className="text-xl" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative"
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative"
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex justify-center items-center shadow-lg shadow-amber-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-3 text-lg" />
                    Send Message
                  </>
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
