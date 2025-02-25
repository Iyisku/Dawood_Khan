import React from "react";
import { FaGoogle, FaYoutube, FaApple } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Lead Software Engineer at Google",
      company: "Google",
      icon: <FaGoogle className="text-xl text-red-500" />,
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
      date: "Nov 2019 – Present",
    },
    {
      role: "Software Engineer at Youtube",
      company: "YouTube",
      icon: <FaYoutube className="text-xl text-red-500" />,
      description:
        "At YouTube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
      date: "Jan 2017 – Oct 2019",
    },
    {
      role: "Junior Software Engineer at Apple",
      company: "Apple",
      icon: <FaApple className="text-xl text-gray-300" />,
      description:
        "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
      date: "Jan 2016 – Dec 2017",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 mt-4">
      {/* Title */}
      <h1 className="text-4xl text-center font-Sora font-extrabold mb-10">
        My <span className="font-bold">Experience</span>
      </h1>

      {/* Experience Cards */}
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between border border-gray-700"
          >
            {/* Left Side - Icon & Role */}
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gray-800 rounded-full">{exp.icon}</div>
              <div>
                <h2 className="text-lg font-bold">{exp.role}</h2>
                <p className="text-gray-400 text-sm mt-2">{exp.description}</p>
              </div>
            </div>

            {/* Right Side - Date */}
            <p className="text-gray-300 text-sm md:text-right mt-4 md:mt-0 whitespace-nowrap">
              {exp.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
