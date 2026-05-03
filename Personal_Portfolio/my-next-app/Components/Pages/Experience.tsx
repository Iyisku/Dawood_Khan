'use client';
import { useExperiences } from "@/app/apiHooks";
import { FaGamepad, FaMagento, FaTableTennis } from "react-icons/fa";
import { FaMagnet } from "react-icons/fa6";

export default function Experience() {
  const { data: experiences = [], isLoading } = useExperiences();

  // Add this for debugging
  console.log("Experiences:", experiences);

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
      <h1 className="text-4xl text-center font-Sora mb-10">
        My <span className="font-bold">Experience</span>
      </h1>

      <div className="grid grid-cols-1 lg:gap-8 gap-5 lg:py-10 lg:px-6 justify-items-center">
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="hover:bg-zinc-800 transition-colors w-full max-w-[1168px] space-y-7 rounded-[10px] min-h-[192px] py-[30px] px-6 border border-zinc-500 group"
          >
            {/* Top Row */}
            <div className="flex max-md:flex-col gap-[30px] items-center justify-between">
              {/* Left Side: Icon & Role */}
              <div className="flex items-center gap-[30px]">
                <div className="text-4xl text-zinc-300">
                  {getIconByCompany(exp.company)}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-zinc-100">{exp.role} at {exp.company}</h2>

                </div>
              </div>

              {/* Right Side: Date */}
              <div className="text-white text-lg font-bold">
                {exp.date}
              </div>
            </div>

            {/* Bottom Row: Description & Tech */}
            <div className="space-y-4">
              <p className="text-zinc-300 text-md leading-relaxed max-w-4xl">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.techUsed.split(",").map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-medium text-zinc-400">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const getIconByCompany = (company: string) => {
  const companyLower = company.toLowerCase();

  if (companyLower.includes("techxserve") || companyLower.includes("serve")) {
    return <FaTableTennis className="text-xl group-hover:text-black text-red-500" />;
  } else if (companyLower.includes("metal") || companyLower.includes("heart") || companyLower.includes("game")) {
    return <FaGamepad className="text-xl group-hover:text-black text-red-500" />;
  } else if (companyLower.includes("arkaen") || companyLower.includes("arka") || companyLower.includes("magento")) {
    return <FaMagento className="text-xl group-hover:text-black text-red-500" />;
  }
  return <FaMagento className="text-xl group-hover:text-black text-red-500" />;
};