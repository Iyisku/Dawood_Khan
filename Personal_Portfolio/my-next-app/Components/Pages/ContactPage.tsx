import React from "react";

export default function ContactPage() {
  return (
    <section className="py-16 px-6" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form action="https://formsubmit.co/dawoodkhan3908@gmail.com" target="_blank" method="POST" className="space-y-4">
            <div>
              <input
                type="text"
                name="Name"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded p-3"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded p-3"
                required
              />
            </div>
           
            <div>
              <textarea
                placeholder="How can I help?"
                rows={6}
                className="w-full border border-gray-300 rounded p-3"
                name="message"
                required
              ></textarea>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded border-black border-2 font-medium hover:text-black hover:cursor-pointer hover:bg-white transition-colors"
              >
                Get In Touch
              </button>
            
              {/* LinkedIn Icon */}
              <a 
                href="https://www.linkedin.com/in/muhammad-dawood-k-39880b229/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-300 p-3 rounded flex items-center justify-center transition-colors duration-300 hover:bg-black hover:border-black hover:text-white"
                aria-label="Visit my LinkedIn profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/2 flex flex-col justify-center pb-20">
          <h2 className="text-4xl font-bold mb-6">
            Let's <span className="text-white px-2" style={{
              WebkitTextStroke: "2px black",
              color: "white",
            }}>talk</span> for <br />
            Something special
          </h2>
          <p className="text-gray-600 mb-8">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>
          <div className="space-y-2">
            <p className="font-medium">Dawoodkhan3908@gmail.com</p>
            <p className="font-medium">+92-320-0911015</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-16"></div>
    </section>
  );
}