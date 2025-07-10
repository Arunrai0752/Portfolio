import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-gray-900 py-16 px-4">
      <h1 className="text-4xl font-bold text-white  pb-4 border-b-2 border-amber-500 mb-8">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="flex items-center">
            <MdOutlineMail className="text-amber-500 text-2xl mr-2" />
            <a
              href="mailto:realarunrai0752@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              realarunrai0752@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-amber-500 text-xl mr-2" />
            <a
              href="tel:90998209835"
              className="text-gray-300 hover:text-white transition-colors"
            >
              9098209835
            </a>
          </div>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/Arunrai0752"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/arun-fullstack/"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;