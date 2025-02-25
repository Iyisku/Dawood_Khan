import React from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function LandingPage() {
  return (
    <main >
      <div className="flex flex-col-reverse md:flex-row justify-center items-center min-h-screen px-6">
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
          I’m Dawood Khan. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a specimen book.
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
