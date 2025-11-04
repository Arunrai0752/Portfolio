import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiSend, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="w-8 h-8 text-emerald-400" />,
      title: "Location",
      content: "Bhopal, Madhya Pradesh, India",
      link: null
    },
    {
      icon: <FiPhone className="w-8 h-8 text-sky-400" />,
      title: "Phone",
      content: "+91 9098209835",
      link: "tel:90998209835"
    },
    {
      icon: <FiMail className="w-8 h-8 text-amber-400" />,
      title: "Email",
      content: "arunrai0752@gmail.com",
      link: "mailto:arunrai0752@gmail.com"
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-zinc-100 mb-6 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Let's connect and create something amazing together
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm text-center"
            >
              <div className="inline-flex p-4 rounded-2xl bg-zinc-800/50 mb-6">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-zinc-400 hover:text-emerald-400 transition-colors text-lg"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-zinc-400 text-lg">{info.content}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-zinc-100 mb-4">Let's Work Together</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects,
                or just having a chat about technology and innovation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-zinc-100 mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Arunrai0752"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700 text-zinc-300 hover:bg-emerald-400 hover:text-zinc-950 hover:border-emerald-400 transition-all"
                >
                  <FiGithub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700 text-zinc-300 hover:bg-sky-400 hover:text-zinc-950 hover:border-sky-400 transition-all"
                >
                  <FiLinkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-2xl bg-zinc-800/50 border border-zinc-700 text-zinc-300 hover:bg-cyan-400 hover:text-zinc-950 hover:border-cyan-400 transition-all"
                >
                  <FiTwitter className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-zinc-100 mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-zinc-100 placeholder-zinc-500 transition-all"
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
                  className="w-full px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-zinc-100 placeholder-zinc-500 transition-all"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  className="w-full px-6 py-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-zinc-100 placeholder-zinc-500 transition-all resize-none"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSending}
                className="w-full py-4 bg-emerald-400 text-zinc-950 font-semibold rounded-2xl flex items-center justify-center gap-3 hover:bg-emerald-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;