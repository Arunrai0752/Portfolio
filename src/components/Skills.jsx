import React from "react";

const Skills = () => {
  const skills = [
    { name: "MongoDB", color: "text-green-500", url: "https://www.mongodb.com/" },
    { name: "Express", color: "text-gray-400", url: "https://expressjs.com/" },
    { name: "React", color: "text-blue-400", url: "https://reactjs.org/" },
    { name: "Node.js", color: "text-green-400", url: "https://nodejs.org/" },
    { name: "HTML", color: "text-orange-500", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", color: "text-blue-500", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", color: "text-yellow-400", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Tailwind", color: "text-cyan-400", url: "https://tailwindcss.com/" },
    { name: "Bootstrap", color: "text-purple-500", url: "https://getbootstrap.com/" },
  ];

  return (
    <div className="bg-gray-800 py-16 px-4">
      <h1 className="text-4xl font-bold text-white pb-4 border-b-2  border-amber-500 mb-8">
        Skills
      </h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-amber-400 mb-6">My Tech Stack</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${skill.color} bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors`}
            >
              {skill.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;