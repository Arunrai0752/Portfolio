import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="flex justify-center items-center w-full h-screen  max-h-[600px] bg-gradient-to-br from-indigo-900 to-purple-800">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Hi, I'm <span className="text-amber-400">Arun</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-200">
            Full Stack Web Developer
          </h2>
         
        </div>
      </div>
    </main>
  );
};

export default Hero;