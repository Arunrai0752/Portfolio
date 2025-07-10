import React from "react";

const Nav = () => {
  return (
    <nav className="w-full fixed top-0 bg-black text-white shadow-md z-50  ">
      <ul className="flex justify-evenly  py-4 text-lg font-semibold ">
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#education" className="hover:text-blue-500">Education</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
