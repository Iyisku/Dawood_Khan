import React from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function LandingPage() {
  return (
    <main >
      <div className="flex flex-col-reverse md:flex-row justify-center items-center min-h-screen px-6" id="hero">
      {/* Left Content */}
      <div className="flex flex-col md:w-1/2 lg:w-2/5 lg:ml-22 text-center md:text-left mt-6 md:mt-20">
        <h1 className=" font-Sora text-3xl md:text-4xl">
          Hello, I’m <span className="font-extrabold">Dawood Khan.</span>
        </h1>
        <h1 className="font-Sora text-3xl md:text-4xl mt-1">
          <span className="font-extrabold">Full Stack</span>{" "}
          <span
            className="font-extrabold relative"
            style={{
              WebkitTextStroke: "2px black",
              color: "white",
            }}
          >
            Developer
          </span>
        </h1>
       
        <p className="font-Sora text-zinc-500 mt-4 text-sm md:text-base">
        Hi, I'm Dawood Khan, a passionate Full-Stack MERN Developer with a knack for quickly adapting to new technologies. With expertise in MongoDB, Express.js, React, and Node.js, I specialize in building dynamic, scalable, and high-performance web applications. My ability to swiftly grasp and implement emerging tools and frameworks allows me to stay ahead in the ever-evolving tech landscape. I thrive on solving complex challenges and delivering seamless user experiences.
        </p>
      </div>

      {/* Right Image */}
      <div className=" flex justify-center">
        <img
          src="../src/assets/Banner.svg"
          className="w-full max-[620px]: mt-20"
         
          alt="Banner"
        />
      </div>
      </div>       
    </main>
  );
}
