import React from "react";
import Abt from "../assets/AboutMe.png";

const projects = [
  {
    id: "01",
    title: "Crypto Screener Application",
    description:
      "I'm Even Shah Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a specimen book.",
    image: Abt,
    link: "#",
  },
  {
    id: "02",
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    description:
      "I'm Even Shah Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a specimen book.",
    image: Abt,
    link: "#",
  },
  {
    id: "03",
    title: "Blog Website Template",
    description:
      "I'm Even Shah Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a specimen book.",
    image: Abt,
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 px-4">
          My <span className="text-white font-bold">Projects</span>
        </h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
            >
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">{project.id}</h3>
                <h4 className="text-xl font-semibold mb-4">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <a href={project.link} className="flex items-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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