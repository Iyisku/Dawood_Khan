"use client";

import React from "react";
import { FaGamepad, FaMagento, FaTableTennis } from "react-icons/fa";
import { useExperiences } from "@/app/apiHooks";

const getIconByCompany = (company: string) => {
  if (company.toLowerCase().includes("techxserve")) {
    return <FaTableTennis className="text-xl group-hover:text-black text-red-500" />;
  } else if (company.toLowerCase().includes("metal heart")) {
    return <FaGamepad className="text-xl group-hover:text-black text-red-500" />;
  } else if (company.toLowerCase().includes("arkaen")) {
    return <FaMagento className="text-xl group-hover:text-black text-red-500" />;
  }
  return <FaTableTennis className="text-xl group-hover:text-black text-red-500" />;
};

export default function Experience() {
  const { data: experiences = [], isLoading } = useExperiences();
  if (isLoading) {
    return (
      <section className="bg-black text-white py-16 px-6 mt-12" id="experience">
        <h1 className="text-4xl text-center font-Sora font-extrabold mb-10">
          My <span className="font-bold">Experience</span>
        </h1>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center text-gray-400">Loading experiences...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-16 px-6 mt-12" id="experience">
      {/* Title */}
      <h1 className="text-4xl text-center font-Sora font-extrabold mb-10">
        My <span className="font-bold">Experience</span>
      </h1>

      {/* Experience Cards */}
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="group bg-black p-8 rounded-lg flex flex-col md:flex-row justify-between 
            border border-white transition duration-300 ease-in-out 
            hover:bg-white hover:text-black hover:cursor-pointer shadow-lg shadow-white"
          >
            {/* Left Side - Icon & Role */}
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gray-800 rounded-full group-hover:bg-white">
                {getIconByCompany(exp.company)}
              </div>
              <div>
                <h2 className="text-lg font-bold group-hover:text-black">{exp.role}</h2>
                <p className="text-gray-400 text-sm mt-2 group-hover:text-black">
                  {exp.description}
                </p>
                <p className="text-gray-300 text-sm mt-2 group-hover:text-black">
                  <strong>Technologies Used:</strong> {exp.techUsed}
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