import React from "react";

export default function ContactPage() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded p-3"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded p-3"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Your website (if exists)"
                className="w-full border border-gray-300 rounded p-3"
              />
            </div>
            <div>
              <textarea
                placeholder="How can I help?"
                rows={6}
                className="w-full border border-gray-300 rounded p-3"
              ></textarea>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded font-medium"
              >
                Get In Touch
              </button>
              <a href="#" className="border border-gray-300 p-3 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="border border-gray-300 p-3 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="border border-gray-300 p-3 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="border border-gray-300 p-3 rounded flex items-center justify-center">
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
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's <span className=" text-white px-2" style={{
              WebkitTextStroke: "2px black",
              color: "white",
            }}>talk</span> for <br />
            Something special
          </h2>
          <p className="text-gray-600 mb-8">
            I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
          </p>
          <div className="space-y-2">
            <p className="font-medium">Youremail@gmail.com</p>
            <p className="font-medium">1234567890</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-16"></div>
    </section>
  );
}