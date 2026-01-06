import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiSend, FiGithub, FiLinkedin, FiTwitter, FiMessageSquare } from "react-icons/fi";
import { FaSignal } from "react-icons/fa";
import emailjs from 'emailjs-com';
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSending, setIsSending] = useState(false);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [signalStrength, setSignalStrength] = useState(0);

  useEffect(() => {
    // Signal strength animation
    const signalInterval = setInterval(() => {
      setSignalStrength(Math.floor(Math.random() * 100));
      setIsTransmitting(true);
      setTimeout(() => setIsTransmitting(false), 300);
    }, 3000);

    return () => clearInterval(signalInterval);
  }, []);

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
    setIsTransmitting(true);

    const templateParams = {
      ...formData,
      date: new Date().toLocaleString(),
      year: new Date().getFullYear(),
      code: Math.random().toString(36).substring(7).toUpperCase()
    };

    emailjs.send(
      'service_bf6xuaf',
      'template_fa04w5l',
      templateParams,
      'H8ViTJ7BTW0N2KrSD'
    )
    .then((response) => {
      console.log('Transmission successful!', response.status, response.text);
      toast.success("Message transmitted successfully!");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    })
    .catch((err) => {
      console.error('Transmission failed:', err);
      toast.error("Transmission failed. Please try again.");
    })
    .finally(() => {
      setIsSending(false);
      setTimeout(() => setIsTransmitting(false), 2000);
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const stagger = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="w-8 h-8" />,
      title: "LOCATION",
      content: "Bhopal, Madhya Pradesh, India",
      link: null,
      color: "#e60a14"
    },
    {
      icon: <FiPhone className="w-8 h-8" />,
      title: "PHONE",
      content: "+91 9098209835",
      link: "tel:90998209835",
      color: "#dc2626"
    },
    {
      icon: <FiMail className="w-8 h-8" />,
      title: "EMAIL",
      content: "arunrai0752@gmail.com",
      link: "mailto:arunrai0752@gmail.com",
      color: "#b91c1c"
    }
  ];

  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Signal waves */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border-2 border-red-500/20 rounded-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.5, opacity: [0, 0.5, 0] }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>

      <section 
        id="contact" 
        className="relative min-h-screen py-32 px-6 overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 80% 20%, #111111 0%, #000000 100%)'
        }}
      >
        {/* Portal effects */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

        {/* Transmission lines */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="relative inline-block">
              <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tighter"
                style={{
                  color: '#e60a14',
                  fontFamily: "'Bebas Neue', cursive",
                  letterSpacing: '0.15em',
                  textShadow: '0 0 25px rgba(230, 10, 20, 0.7)'
                }}
              >
                TRANSMISSION
              </h1>
              
              {/* Signal indicator */}
              <div className="absolute -top-10 right-0 flex items-center gap-2">
                <FaSignal className="text-red-400" />
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((bar) => (
                    <div
                      key={bar}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        signalStrength >= bar * 20 
                          ? 'bg-red-500' 
                          : 'bg-red-500/30'
                      }`}
                      style={{
                        height: `${bar * 4}px`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Animated divider */}
            <div className="relative w-72 h-1 mx-auto mb-12 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-600 to-red-900" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            
            <p className="text-2xl max-w-2xl mx-auto leading-relaxed px-6 py-5 rounded-xl border border-red-500/20 bg-black/30 backdrop-blur-sm"
              style={{
                color: '#94a3b8',
                fontFamily: "'Bebas Neue', cursive",
                letterSpacing: '0.1em'
              }}
            >
              INITIATE CONTACT PROTOCOL
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ 
                  y: -12,
                  scale: 1.05,
                  boxShadow: `0 20px 40px ${info.color}30`
                }}
                className="relative p-8 rounded-3xl text-center overflow-hidden group"
                style={{
                  background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.9))',
                  border: `2px solid ${info.color}40`
                }}
              >
                {/* Binary code background */}
                <div className="absolute inset-0 opacity-10 font-mono text-xs text-red-500">
                  010101
                </div>

                {/* Icon */}
                <div className="relative inline-flex p-5 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `rgba(${parseInt(info.color.slice(1,3), 16)}, ${parseInt(info.color.slice(3,5), 16)}, ${parseInt(info.color.slice(5,7), 16)}, 0.1)`,
                    border: `1px solid ${info.color}30`
                  }}
                >
                  {React.cloneElement(info.icon, { style: { color: info.color } })}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 tracking-wider"
                  style={{
                    color: '#ffffff',
                    fontFamily: "'Bebas Neue', cursive",
                    letterSpacing: '0.1em'
                  }}
                >
                  {info.title}
                </h3>

                {info.link ? (
                  <a
                    href={info.link}
                    className="text-lg hover:text-red-400 transition-all duration-300 inline-block"
                    style={{
                      color: info.color,
                      fontFamily: "'Bebas Neue', cursive",
                      letterSpacing: '0.05em'
                    }}
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-lg"
                    style={{
                      color: info.color,
                      fontFamily: "'Bebas Neue', cursive",
                      letterSpacing: '0.05em'
                    }}
                  >
                    {info.content}
                  </p>
                )}

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${info.color}20 0%, transparent 70%)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Message */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-4xl font-bold mb-6 tracking-wider"
                  style={{
                    color: '#ffffff',
                    fontFamily: "'Bebas Neue', cursive",
                    letterSpacing: '0.1em'
                  }}
                >
                  TRANSMISSION PROTOCOL
                </h2>
                <p className="text-lg leading-relaxed p-6 rounded-xl border-l-4 border-red-500"
                  style={{
                    color: '#cbd5e1',
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderLeft: '4px solid #e60a14'
                  }}
                >
                  I'm always open to discussing new opportunities, interesting projects,
                  or just having a chat about technology and innovation. Let's connect and create something amazing together.
                </p>
              </div>

              {/* Social Links */}
              <div className="p-8 rounded-3xl border-2 border-red-500/20 bg-black/40 backdrop-blur-lg">
                <h3 className="text-2xl font-bold mb-8 tracking-wider"
                  style={{
                    color: '#e60a14',
                    fontFamily: "'Bebas Neue', cursive",
                    letterSpacing: '0.1em'
                  }}
                >
                  COMMUNICATION CHANNELS
                </h3>
                <div className="flex gap-6">
                  {[
                    { icon: FiGithub, link: "https://github.com/Arunrai0752", color: "#ffffff", label: "GitHub" },
                    { icon: FiLinkedin, link: "https://www.linkedin.com/in/arun-fullstack/", color: "#0ea5e9", label: "LinkedIn" },
                    { icon: FiTwitter, link: "#", color: "#1d9bf0", label: "Twitter" },
                    { icon: FiMessageSquare, link: "#", color: "#e60a14", label: "Message" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.2, 
                        y: -5,
                        rotate: i % 2 === 0 ? 5 : -5
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="relative p-5 rounded-2xl group overflow-hidden"
                      style={{
                        background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.9))',
                        border: `2px solid rgba(230, 10, 20, 0.2)`
                      }}
                      aria-label={social.label}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/20 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <social.icon className="w-7 h-7 relative z-10" style={{ color: social.color }} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="relative p-10 rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(15, 15, 15, 0.9), rgba(0, 0, 0, 0.95))',
                border: '2px solid rgba(230, 10, 20, 0.4)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.8), inset 0 0 40px rgba(230, 10, 20, 0.1)'
              }}
            >
              {/* Transmission status */}
              <div className="absolute top-6 right-6 flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${isTransmitting ? 'bg-red-500 animate-pulse' : 'bg-red-500/30'}`} />
                <span className="text-sm font-bold tracking-wider"
                  style={{
                    color: isTransmitting ? '#e60a14' : '#9ca3af',
                    fontFamily: "'Bebas Neue', cursive",
                    letterSpacing: '0.1em'
                  }}
                >
                  {isTransmitting ? 'TRANSMITTING...' : 'STANDBY'}
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-8 tracking-wider"
                style={{
                  color: '#ffffff',
                  fontFamily: "'Bebas Neue', cursive",
                  letterSpacing: '0.1em'
                }}
              >
                SEND TRANSMISSION
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Input */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="YOUR NAME"
                    className="w-full px-8 py-5 rounded-2xl focus:outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: '2px solid rgba(230, 10, 20, 0.3)',
                      color: '#ffffff',
                      fontFamily: "'Bebas Neue', cursive",
                      letterSpacing: '0.1em'
                    }}
                    required
                  />
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Email Input */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="YOUR EMAIL"
                    className="w-full px-8 py-5 rounded-2xl focus:outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: '2px solid rgba(230, 10, 20, 0.3)',
                      color: '#ffffff',
                      fontFamily: "'Bebas Neue', cursive",
                      letterSpacing: '0.1em'
                    }}
                    required
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div whileHover={{ scale: 1.02 }} className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="YOUR MESSAGE"
                    rows="6"
                    className="w-full px-8 py-5 rounded-2xl focus:outline-none transition-all duration-300 resize-none"
                    style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: '2px solid rgba(230, 10, 20, 0.3)',
                      color: '#ffffff',
                      fontFamily: "'Bebas Neue', cursive",
                      letterSpacing: '0.1em'
                    }}
                    required
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(230, 10, 20, 0.7)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSending}
                  className="w-full py-5 font-bold rounded-2xl flex items-center justify-center gap-4 relative overflow-hidden group transition-all"
                  style={{
                    background: isSending 
                      ? 'linear-gradient(135deg, #b80c14, #8c0c10)' 
                      : 'linear-gradient(135deg, #e60a14, #b80c14)',
                    color: '#ffffff',
                    fontFamily: "'Bebas Neue', cursive",
                    letterSpacing: '0.1em',
                    fontSize: '1.1rem'
                  }}
                >
                  {/* Transmission effect */}
                  {isSending && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  )}

                  <div className="flex items-center gap-3 relative z-10">
                    {isSending ? (
                      <>
                        <svg className="animate-spin h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>TRANSMITTING...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-6 h-6" />
                        <span>INITIATE TRANSMISSION</span>
                      </>
                    )}
                  </div>
                </motion.button>
              </form>

              {/* Binary footer */}
              <div className="mt-8 pt-6 border-t border-red-500/20">
                <div className="flex items-center justify-between text-xs font-mono text-red-500/50">
                  <span>STATUS: {isSending ? 'TRANSMITTING' : 'READY'}</span>
                  <span>CODE: {Math.random().toString(36).substring(7).toUpperCase()}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        
        input::placeholder,
        textarea::placeholder {
          color: #6b7280;
          opacity: 0.7;
        }
        
        input:focus,
        textarea:focus {
          border-color: #e60a14 !important;
          box-shadow: 0 0 20px rgba(230, 10, 20, 0.3);
        }
      `}</style>
    </>
  );
};

export default Contact;