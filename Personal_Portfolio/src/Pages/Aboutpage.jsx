import React from 'react';
import aboutmeimg from '../assets/AboutMe.png'

export default function Aboutpage() {
  return (
    <div className="flex flex-col md:flex-row items-center p-6 md:p-12 bg-white text-gray-800" id='about'>
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 md:p-20">
        <img src={aboutmeimg} alt="About Me" className="w-full h-full object-fill rounded-lg " />
      </div>
      
      {/* Text Section */}
      <div className="md:w-2/3 text-md text-center md:text-left font-Sora">
        <h2 className="text-4xl mb-4">About <span className="text-black font-bold">Me</span></h2>
        <p className="text-gray-700 mb-4">
          I'm a passionate, Developer who specializes in full stack development (React.js & Node.js).
          I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience,
          pixel perfect design, and writing clear, readable, highly performant code matters to me.
        </p>
        <p className="text-gray-700 mb-4">
          I began my journey as a web developer in 2023, and since then, I've continued to grow and evolve as a developer,
          taking on new challenges and learning the latest technologies along the way.
          I'm building cutting-edge web applications using modern technologies such as
          Next.js, React.js, TailwindCSS and much more.
        </p>
        
      </div>
    </div>
  );
}