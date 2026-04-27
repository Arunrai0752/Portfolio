import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_bf6xuaf",
        "template_fa04w5l",
        { ...form, date: new Date().toLocaleString() },
        "H8ViTJ7BTW0N2KrSD"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Failed to send. Please try again."))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Get In Touch</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            Have a project in mind? Let's connect and discuss
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h3 className="font-bold text-lg mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                  <FiMapPin className="w-5 h-5 text-blue-600" />
                  <span>Bhopal, Madhya Pradesh, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="w-5 h-5 text-blue-600" />
                  <a href="tel:+919098209835" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 transition-colors">
                    +91 9098209835
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="w-5 h-5 text-blue-600" />
                  <a href="mailto:arunrai0752@gmail.com" className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 transition-colors">
                    arunrai0752@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://github.com/Arunrai0752"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 hover:border-blue-200 transition-all"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/arun-fullstack/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 hover:border-blue-200 transition-all"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-neutral-900 dark:text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-neutral-900 dark:text-white"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5 text-neutral-700 dark:text-neutral-300">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-neutral-900 dark:text-white"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
            >
              {sending ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <FiSend className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}