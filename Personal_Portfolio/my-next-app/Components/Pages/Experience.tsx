'use client';
import { useExperiences } from "@/app/apiHooks";
import { FaGamepad, FaMagento, FaTableTennis } from "react-icons/fa";

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
      <h1 className="text-4xl text-center font-Sora font-extrabold mb-10">
        My <span className="font-bold">Experience</span>
      </h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp._id}
            className="group bg-black p-8 rounded-lg flex flex-col md:flex-row justify-between 
            border border-white transition duration-300 ease-in-out 
            hover:bg-white hover:text-black hover:cursor-pointer shadow-lg shadow-white"
          >
            {/* Left Side - Icon & Role */}
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gray-800 rounded-full group-hover:bg-white">
                {getIconByCompany(exp.company)}
              </div>
              <div>
                <h2 className="text-lg font-bold group-hover:text-black">{exp.role}</h2>
                {/* Add company name display for debugging */}
                <p className="text-white font-bold text-sm mt-2 group-hover:text-black">
                  Company: {exp.company}
                </p>
                <p className="text-gray-400 text-sm mt-2 group-hover:text-black">
                  {exp.description}
                </p>
                <p className="text-gray-300 text-sm mt-2 group-hover:text-black">
                  <strong>Technologies Used:</strong> {exp.techUsed}
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm md:text-right mt-4 md:mt-0 whitespace-nowrap group-hover:text-black">
              {exp.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const getIconByCompany = (company: string) => {
  const companyLower = company.toLowerCase();
  
  if (companyLower.includes("techxserve") || companyLower.includes("tech") || companyLower.includes("serve")) {
    return <FaTableTennis className="text-xl group-hover:text-black text-red-500" />;
  } else if (companyLower.includes("metal") || companyLower.includes("heart") || companyLower.includes("game")) {
    return <FaGamepad className="text-xl group-hover:text-black text-red-500" />;
  } else if (companyLower.includes("arkaen") || companyLower.includes("arka") || companyLower.includes("magento")) {
    return <FaMagento className="text-xl group-hover:text-black text-red-500" />;
  }
  return <FaTableTennis className="text-xl group-hover:text-black text-red-500" />;
};