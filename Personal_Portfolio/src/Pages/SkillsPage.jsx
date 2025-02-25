import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiReact, SiTailwindcss, SiRedis, SiSocketdotio } from "react-icons/si";

export default function SkillsPage() {
  const skills = [
    { name: "Node.js", icon: <FaNodeJs className="text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-4xl" /> },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-4xl" />, highlighted: true },
    { name: "React", icon: <SiReact className="text-4xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-4xl" /> },
    { name: "Redis", icon: <SiRedis className="text-4xl" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-4xl" /> },
  ];

  return (
    <section className="mt-20 flex flex-col items-center">
      {/* Title */}
      <h1 className="font-Sora text-4xl font-extrabold text-center mb-14">
        My Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-10 border-2 border-black rounded-lg text-center 
              transition-all duration-300 hover:bg-black hover:text-white cursor-pointer"
          >
            {skill.icon}
            <p className="mt-2 font-semibold text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
