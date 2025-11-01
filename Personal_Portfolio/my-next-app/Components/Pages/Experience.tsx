import React from "react";
import { FaGamepad, FaMagento, FaTableTennis } from "react-icons/fa";
import { Experience as ExperienceType } from '@/types/index';

const experiences: ExperienceType[] = [
  {
    role: "Full Stack Web Developer at TECHXSERVE",
    company: "TechXServe",
    icon: <FaTableTennis className="text-xl group-hover:text-black text-red-500" />,
    description: "As a Full stack Web Developer at TechXServe, I played a pivotal role in developing innovative solutions. Collaborating with a team of engineers, I contributed to more than 3 Projects and Completed Clients Requirements On Schedule.",
    date: "July 2024 – Present",
    Techused: "Js, TailwindCss, Node.js, React.Js, Next.js, Express.js, MongoDB, Git, Github, Visual Studio, Figma, Redis",
  },
  {
    role: "C# Developer at Metal Heart Games Studio",
    company: "Metal Heart Studio",
    icon: <FaGamepad className="text-xl group-hover:text-black text-red-500" />,
    description: "As a C# Developer with Unity at Metal Heart Studio, I played a pivotal role in developing Engaging Games. I contributed to more than 2 Projects and Learned Industry Best Practices In programming.",
    date: "January 2024 – July 2024",
    Techused: "Unity, C# , .Net, Git, Github, Visual Studio, Figma",
  },
  {
    role: "Intern Software Engineer at Arkaen Solutions",
    company: "Arkaen Solutions",
    icon: <FaMagento className="text-xl group-hover:text-black text-red-500" />,
    description: "As a Software Engineer at Arkaen Solutions, I got to learn from the very basics of programming. Collaborating with Senior Developers, I got to work with different Technologies and guidance from the best of developers.",
    date: "July 2023 – January 2024",
    Techused: "Html, Css, Js, Go, Azure, C# , Git, Github, Visual Studio, Figma, Discord, Slack",
  },
];

export default function Experience() {
  return (
    <section className="bg-black text-white py-16 px-6 mt-12" id="experience">
      {/* Title */}
      <h1 className="text-4xl text-center font-Sora font-extrabold mb-10">
        My <span className="font-bold">Experience</span>
      </h1>

      {/* Experience Cards */}
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group bg-black p-8 rounded-lg flex flex-col md:flex-row justify-between 
            border border-white transition duration-300 ease-in-out 
            hover:bg-white hover:text-black hover:cursor-pointer shadow-lg shadow-white"
          >
            {/* Left Side - Icon & Role */}
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gray-800 rounded-full group-hover:bg-white">
                {exp.icon}
              </div>
              <div>
                <h2 className="text-lg font-bold group-hover:text-black">{exp.role}</h2>
                <p className="text-gray-400 text-sm mt-2 group-hover:text-black">
                  {exp.description}
                </p>
                <p className="text-gray-300 text-sm mt-2 group-hover:text-black">
                  <strong>Technologies Used:</strong> {exp.Techused}
                </p>
              </div>
            </div>

            {/* Right Side - Date */}
            <p className="text-gray-300 text-sm md:text-right mt-4 md:mt-0 whitespace-nowrap group-hover:text-black">
              {exp.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}