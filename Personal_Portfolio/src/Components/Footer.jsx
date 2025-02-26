import React from "react";
import { GiKeyboard } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-4 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
        
            <GiKeyboard className="text-5xl"/>
          
          <span className="font-medium"></span>
        </div>
        <div className="text-sm font-Sora flex-col flex gap-2 align-center">
          <span>© 2024-2030 Personal</span>
        </div>
      </div>
      <div>
        <h1 className="text-center text-lg font-Sora font-extrabold">Thanks for visiting</h1>
        <h1 className="text-center text-xl font-Sora font-extrabold">Made by Dawood Khan</h1>
        <h1 className="text-center font-extrabold">.</h1>
      </div>
    </footer>
  );
}