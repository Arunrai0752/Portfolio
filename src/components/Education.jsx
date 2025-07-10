import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech",
      institution: "Technocrats Institute Of Technology, Bhopal",
      field: "Electronics and Communication",
      score: "CGPA: 8.35",
      year: "2020 - 2024"
    },
    {
      degree: "12th",
      institution: "Govt. Maharaja Multi Purpose H.S. Excellence School No.1, Chhatarpur",
      field: "MP Board",
      score: "Percentage: 63.8%",
      year: "2019-2020"
    },
    {
      degree: "10th",
      institution: "Govt. H.S. School, Kishangarh, Chhatarpur",
      field: "MP Board",
      score: "Percentage: 80.8%",
      year: "2017-2018"
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-800 pb-4 border-b-2 border-amber-500 mb-8">
        Education
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-4">Degree</th>
              <th className="p-4">Institution</th>
              <th className="p-4">Field</th>
              <th className="p-4">Score</th>
              <th className="p-4">Year</th>
            </tr>
          </thead>
          <tbody>
            {educationData.map((edu, index) => (
              <tr 
                key={index} 
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
              >
                <td className="p-4 font-medium">{edu.degree}</td>
                <td className="p-4">{edu.institution}</td>
                <td className="p-4">{edu.field}</td>
                <td className="p-4">{edu.score}</td>
                <td className="p-4">{edu.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Education;