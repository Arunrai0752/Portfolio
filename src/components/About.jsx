import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="bg-gray-600 jgrid justify-center items-center py-10  ">
        <h1 className=" px-4  text-6xl font-medium  text-white  ">About </h1>

        <div className="flex justify-center items-center">
          <div className="flex   items-center   w-screen p-2">
            <div className="flex text-1xl items-center justify-start ">
              <span className="px-2 text-[1.2rem]   p-2" htmlFor="callfor">
                <a
                  href="mailto:realarunrai0752@gmail.com"
                  className="  p-2 text-blue-900 "
                >
                  📧 realarunrai0752@gmail.com
                </a>
              </span>
            </div>
            <div className="flex text-1xl items-center justify-start ">
              <label className="px-2 text-[1.2rem]" htmlFor="callfor">
                <a href="tel:90998209835"  className="  p-2 text-green-700 ">
                  📞 9098209835
                </a>
              </label>
            </div>
          </div>

          <div className="flex  gap-5 p-4 items-center animate-pulse ">
            <div>
              <a href=" https://github.com/Arunrai0752 ">
                <FaGithub className="h-10 w-10 text-gray-900" />{" "}
              </a>
            </div>
            <div>
              <a href=" https://www.linkedin.com/in/arun-fullstack/">
                <FaLinkedin className="h-10 w-10 text-blue-900" />{" "}
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/">
                <FaInstagram className="h-10 w-10  text-red-900" />{" "}
              </a>
            </div>
          </div>
        </div>

     
      </div>
    </>
  );
};

export default About;
