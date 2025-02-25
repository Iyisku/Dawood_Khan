import React, { useState } from "react";
import { GiKeyboard } from "react-icons/gi";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="m-2 text-white bg-[#000000] rounded-xl mx-4 md:mx-8 lg:mx-14 px-4 pt-1 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-4xl md:text-5xl hover:scale-110 cursor-pointer transition-transform">
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
            <li className="hover:scale-110 cursor-pointer transition-transform">About Me</li>
            <li className="hover:scale-110 cursor-pointer transition-transform">Skills</li>
            <li className="hover:scale-110 cursor-pointer transition-transform">Projects</li>
            <li className="hover:scale-110 cursor-pointer transition-transform">Contact</li>
          </ul>

          {/* Resume Button (Desktop) */}
          <div className="hidden md:flex text-base lg:text-lg font-semibold font-Sora relative items-center pr-5 hover:scale-110 cursor-pointer transition-transform">
            <a className="pr-2">Resume</a>
            <MdOutlineFileDownload className="absolute right-0 text-xl lg:text-2xl" />
          </div>
        </div>

        {/* Mobile Menu - Absolutely positioned with z-index */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black z-50 mt-1 rounded-b-xl py-4 shadow-lg animate-fadeIn">
            <ul className="flex flex-col space-y-4 text-center font-Sora font-semibold">
              <li className="py-2 hover:bg-gray-800 rounded cursor-pointer">About Me</li>
              <li className="py-2 hover:bg-gray-800 rounded cursor-pointer">Skills</li>
              <li className="py-2 hover:bg-gray-800 rounded cursor-pointer">Projects</li>
              <li className="py-2 hover:bg-gray-800 rounded cursor-pointer">Contact</li>
              <li className="py-2 hover:bg-gray-800 rounded cursor-pointer flex items-center justify-center">
                Resume <MdOutlineFileDownload className="ml-2 text-xl" />
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