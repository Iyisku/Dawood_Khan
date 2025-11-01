"use client";

import React from "react";
import Image from "next/image";
import { useProjects } from "@/app/apiHooks";

export default function ProjectsPage() {
  const { data: projects = [], isLoading } = useProjects();
  if (isLoading) {
    return (
      <section className="bg-black text-white py-12 px-6" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-12 px-4 font-Sora font-extrabold">
            My <span className="font-bold">Projects</span>
          </h2>
          <div className="text-center text-gray-400">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-12 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-12 px-4 font-Sora font-extrabold">
          My <span className="font-bold">Projects</span>
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project._id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8`}
            >
              {/* Project Image */}
              <div className="md:w-1/2 relative group">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative w-full h-64 md:h-80 bg-gray-800 rounded-lg overflow-hidden">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-80"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                          <h4 className="text-xl font-semibold text-white px-4 text-center">
                            {project.title}
                          </h4>
                        </div>
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-gray-500">No Image</span>
                      </div>
                    )}
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">{index + 1}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  <h4 className="text-xl font-semibold mb-4">
                    {project.title}
                  </h4>
                </a>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-gray-300 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
