import React from 'react';

export default function AboutPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">About Management</h1>
      
      <div className="bg-black rounded-lg p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Introduction Text</label>
            <textarea 
              className="w-full bg-black border border-gray-600 rounded-lg p-3 text-white min-h-[120px]"
              defaultValue="I'm a passionate Developer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Detailed Bio</label>
            <textarea 
              className="w-full bg-black border border-gray-600 rounded-lg p-3 text-white min-h-[200px]"
              defaultValue="I began my journey as a web developer in 2023, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. I'm building cutting-edge web applications using modern technologies such as Next.js, React.js, TailwindCSS and much more."
            />
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-black border-white border hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Save Changes
            </button>
            <button className="bg-black border border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}