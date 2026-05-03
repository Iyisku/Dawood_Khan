'use client';

import React from "react";
import heropic from "@/assets/Hero.png"; // Changed from hero-image.png to Hero.png
import { useLanding } from "@/app/apiHooks";
import { motion } from "framer-motion";

export default function LandingPage() {
  const { data: landingData, isLoading } = useLanding();

  // Use the fetched data, or fallback to the defaults if data is still loading or unavailable
  const name = landingData?.name || "Dawood Khan";
  const rolePart1 = landingData?.rolePart1 || "Software";
  const rolePart2 = landingData?.rolePart2 || "Engineer";
  const description = landingData?.description || "Hi, I’m a Software Engineer driven by building powerful and user-focused applications. \n I specialize in full-stack development and game development, blending creativity with performance to craft scalable, engaging experiences. I thrive on learning fast, solving real-world problems, and turning ideas into reality.";

  return (
    <main>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen px-6" id="hero">
        {/* Left Content */}
        <div className="flex flex-col md:w-1/2 lg:w-2/5 lg:ml-22 text-center md:text-left mt-6 md:mt-20">
          <h1 className="font-Sora text-3xl md:text-4xl">
            Hello, I'm <span className="font-extrabold">{name}.</span>
          </h1>
          <h1 className="font-Sora text-3xl md:text-4xl mt-1">
            <span className="font-extrabold">{rolePart1}</span>{" "}
            <span
              className="font-extrabold relative"
              style={{
                WebkitTextStroke: "2px black",
                color: "white",
              }}
            >
              {rolePart2}
            </span>
          </h1>

          <div className="font-Sora text-zinc-500 mt-4 text-sm md:text-base whitespace-pre-line">
            {description.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: i * 0.05 + 0.5,
                  ease: "easeOut"
                }}
                className="inline-block mr-1"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img
              src={heropic.src}
              className="w-full max-[620px]:mt-20"
              alt="Banner"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}