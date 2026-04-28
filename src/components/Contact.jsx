import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const contactInfo = [
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Bhopal, Madhya Pradesh, India',
    link: null,
    accent: '#22d3ee',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 9098209835',
    link: 'tel:+919098209835',
    accent: '#a78bfa',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'arunrai0752@gmail.com',
    link: 'mailto:arunrai0752@gmail.com',
    accent: '#34d399',
  },
];

const socials = [
  { icon: FiGithub, href: 'https://github.com/Arunrai0752', label: 'GitHub', color: 'hover:text-slate-100 hover:border-slate-500' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/arun-fullstack/', label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/50' },
  { icon: FiTwitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400 hover:border-sky-400/50' },
];

const containerVariant = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      ...formData,
      date: new Date().toLocaleString(),
      year: new Date().getFullYear(),
      code: Math.random().toString(36).substring(7).toUpperCase(),
    };

    emailjs
      .send('service_bf6xuaf', 'template_fa04w5l', templateParams, 'H8ViTJ7BTW0N2KrSD')
      .then(() => {
        toast.success('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast.error('Failed to send. Please try again or email directly.');
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden bg-slate-950/50">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05),transparent_70%)]" />

      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-gradient-to-r from-violet-400 to-transparent" />
          <span className="text-violet-400 text-sm font-mono-custom font-medium tracking-widest uppercase">Get In Touch</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
        >
          <span className="text-slate-50">Let's Build</span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Something Great</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 font-body text-base max-w-xl mb-16"
        >
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology and innovation.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left: Info */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact cards */}
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  variants={fadeUp}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="flex items-start gap-4 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 hover:border-slate-600/60 transition-all duration-300 backdrop-blur-sm"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${info.accent}12`, border: `1px solid ${info.accent}25` }}
                  >
                    <Icon size={16} style={{ color: info.accent }} />
                  </div>
                  <div>
                    <p className="text-slate-500 font-mono-custom text-xs uppercase tracking-widest mb-0.5">{info.label}</p>
                    {info.link ? (
                      <a href={info.link} className="text-slate-200 font-body text-sm font-medium hover:text-cyan-400 transition-colors duration-200">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-200 font-body text-sm font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* Social links */}
            <motion.div variants={fadeUp} className="pt-2">
              <p className="text-slate-500 font-mono-custom text-xs uppercase tracking-widest mb-4">Connect With Me</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-400 transition-all duration-300 ${color}`}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-3 bg-slate-800/40 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-sm"
          >
            {/* Form status indicator */}
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isSending ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
              <span className="font-mono-custom text-xs text-slate-400 uppercase tracking-wide">
                {isSending ? 'Sending...' : 'Ready'}
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-slate-400 font-body text-xs font-medium uppercase tracking-widest">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Arun Rai"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 text-slate-200 font-body text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-slate-400 font-body text-xs font-medium uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 text-slate-200 font-body text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-slate-400 font-body text-xs font-medium uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and budget..."
                  rows={6}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 text-slate-200 font-body text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={!isSending ? { scale: 1.03, y: -2 } : {}}
                whileTap={!isSending ? { scale: 0.97 } : {}}
                className="w-full py-4 rounded-xl font-semibold text-sm text-slate-950 flex items-center justify-center gap-3 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #8b5cf6)' }}
              >
                {/* Shimmer on sending */}
                {isSending && (
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-shimmer" />
                )}
                {isSending ? (
                  <>
                    <svg className="animate-spin w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
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
}