import React, { useState, useEffect } from "react";
import { GiKeyboard } from "react-icons/gi";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import resume from "../assets/M.Dawood_Resume.pdf"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollOpacity(scrollY > 0 ? 0.4 : 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Close the mobile menu after clicking a link
      setIsMenuOpen(false);
      
      // Smooth scroll to the section
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50" >
      <div className="m-2 text-white bg-[#000000] rounded-xl mx-4 md:mx-8 lg:mx-14 px-4 pt-1 relative" style={{ background: `rgba(0, 0, 0, ${scrollOpacity})` }}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-4xl md:text-5xl hover:scale-110 cursor-pointer transition-transform"
            onClick={() => scrollToSection("hero")}
          >
            <GiKeyboard />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 lg:gap-8 xl:gap-14 text-base lg:text-lg font-Sora font-semibold">
            <li 
              className="hover:scale-110 cursor-pointer transition-transform"
              onClick={() => scrollToSection("about")}
            >
              About Me
            </li>
            <li 
              className="hover:scale-110 cursor-pointer transition-transform"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </li>
            <li 
              className="hover:scale-110 cursor-pointer transition-transform"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </li>
            <li 
              className="hover:scale-110 cursor-pointer transition-transform"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>

          {/* Resume Button (Desktop) */}
          <div className="hidden md:flex text-base lg:text-lg font-semibold font-Sora relative items-center pr-5 hover:scale-110 cursor-pointer transition-transform">
            <a className="pr-2" href={resume} download>Resume</a>
            <MdOutlineFileDownload className="absolute right-0 text-xl lg:text-2xl" />
          </div>
        </div>

        {/* Mobile Menu - Absolutely positioned with z-index */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black z-50 mt-1 rounded-b-xl py-4 shadow-lg animate-fadeIn">
            <ul className="flex flex-col space-y-4 text-center font-Sora font-semibold">
              <li 
                className="py-2 hover:bg-gray-800 rounded cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                About Me
              </li>
              <li 
                className="py-2 hover:bg-gray-800 rounded cursor-pointer"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </li>
              <li 
                className="py-2 hover:bg-gray-800 rounded cursor-pointer"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </li>
              <li 
                className="py-2 hover:bg-gray-800 rounded cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </li>
              <li className="py-2 hover:bg-gray-800 rounded cursor-pointer flex items-center justify-center">
                <a href="/resume.pdf" download className="flex items-center">
                  Resume <MdOutlineFileDownload className="ml-2 text-xl" />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 md:h-20"></div>
    </header>
  );
}