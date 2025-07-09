import React from "react";

const Skills = () => {
  return (
    <>
        <div className="pb-15 ps-2 bg-gray-500">
          <h1 className="text-4xl py-2 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 text-transparent bg-clip-text">
            <h1 >Arun | Full Stack Developer (MERN)</h1>
          </h1>

          <h2 className="text-3xl py-2 border-b-2 p-4">My Stack:</h2>

       <div className="flex">
           <h2 className="text-2xl py-4 flex gap-3 flex-wrap font-semibold text-white  px-4 rounded-md   w-fit">
            <span className="text-black text-4xl">MERN</span>
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600  px-2 py-1 rounded-md hover:text-green-700 transition"
            >
              MongoDB
            </a>
            <a
              href="https://expressjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 px-2 py-1 rounded-md hover:text-blue-700 transition"
            >
              Express
            </a>
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600  px-2 py-1 rounded-md hover:text-red-700 transition"
            >
              React
            </a>
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 px-2 py-1 rounded-md hover:text-pink-700 transition"
            >
              Node.js
            </a>
          </h2>
        

          <h2 className="text-2xl py-4 flex gap-3 flex-wrap font-semibold text-white px-4 rounded-md  w-fit">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600  px-3 py-1 rounded-md hover:text-orange-700 transition"
            >
              HTML
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600  px-3 py-1 rounded-md hover:text-blue-700 transition"
            >
              CSS
            </a>

            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600  px-3 py-1 rounded-md hover:text-purple-700 transition"
            >
              Bootstrap
            </a>

            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 px-3 py-1 rounded-md hover:text-cyan-700 transition"
            >
              Tailwind
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 px-3 py-1 rounded-md hover:text-yellow-600 transition"
            >
              JavaScript
            </a>
          </h2>
       </div>

         
        </div>
    </>
  );
};

export default Skills;
