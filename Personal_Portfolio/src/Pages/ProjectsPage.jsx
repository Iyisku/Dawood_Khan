import React from "react";
import SixthLedger from "../assets/sixthledger.png";
import TechXServe from "../assets/techxserve.png";
import teskha from "../assets/teskha.png";
import Tradxsell from "../assets/TradXSell.png";
import Bonita from "../assets/bonitanails.png";
import xephra from "../assets/xephra.png"

const projects = [
  {
    id: "01",
    title: "TradxSell - B2B ECommerce",
    description:
      "TradXSell is an advanced B2B online marketplace designed to bridge the gap between businesses by providing a secure, efficient, and user-friendly platform for buying and selling high-quality products. Our platform caters to a wide range of industries, enabling businesses to connect, engage, and conduct transactions with ease.",
    image: Tradxsell,
    link: "https://tradxsell.com/",
  },
  {
    id: "02",
    title: "TECHXSERVE",
    description:
      "Techxserve is a dynamic and enterprising software development company which consists of an ambitious team of skilled and experienced professionals who are committed to Deliver Beyond Expectations and to Client's Satisfaction.",
    image: TechXServe,
    link: "https://techxserve.co/",
  },
  {
    id: "03",
    title: "Teskha",
    description:
      "Teskha Technologies is dedicated to transforming education through innovative technology, providing cutting-edge solutions that empower schools, institutions, and educators worldwide. With a strong commitment to digital transformation, we offer advanced educational tools, AI-driven learning platforms, and customized software to enhance accessibility, engagement, and efficiency in education",
    image: teskha,
    link: "https://teskha.com/",
  },{
    id: "04",
    title: "SixthLedger",
    description:
      "At Sixth Ledger, we Provide a comprehensive suite of accounting services, combining our expertise and advanced tools like QuickBooks and Xero to deliver comprehensive financial services. From accurate bookkeeping and custom Excel solutions to efficient payroll management, our team ensures every aspect of your business's financial needs is handled with precision.",
    image: SixthLedger,
    link: "https://sixthledger.com/",
  },{
    id: "05",
    title: "BonitaNailsShop",
    description:
      "Bonita is a premium nail care service dedicated to providing top-quality manicures, nail art, and advanced nail treatments. We offer a range of services, including classic manicures, intricate designs, and luxurious hand care treatments, all designed to help you express your individuality.",
    image: Bonita,
    link: "https://bonitanails.shop/",
  },{
    id: "06",
    title: "XEPHRA",
    description:
      "Xephra is a premier gaming tournament platform designed to bring gamers together for competitive events with real stakes. Whether you're a casual player or a professional competitor, Xephra offers a space to showcase your skills, participate in a variety of tournaments, and win exciting pool prizes.",
    image: xephra,
    link: "https://xephra.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-black text-white py-12 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl text-center mb-12 px-4">
            <span className="text-white font-bold">Projects</span>
        </h2>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
            >
              <div className="md:w-1/2 relative group">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full h-auto transition-all duration-300 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                    <h4 className="text-xl font-semibold text-white px-4 text-center">{project.title}</h4>
                  </div>
                </a>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">{project.id}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300">
                  <h4 className="text-xl font-semibold mb-4">{project.title}</h4>
                </a>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-gray-300 transition-colors duration-300">
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