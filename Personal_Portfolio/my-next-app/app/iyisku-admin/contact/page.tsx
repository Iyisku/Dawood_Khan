import React from 'react';

export default function ContactPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Management</h1>
      
      <div className="bg-black border border-white rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              type="email" 
              className="w-full bg-black border border-white rounded-lg p-3 text-white"
              defaultValue="dawoodkhan3908@gmail.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input 
              type="text" 
              className="w-full bg-black border border-white rounded-lg p-3 text-white"
              defaultValue="+92-320-0911015"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">LinkedIn URL</label>
            <input 
              type="url" 
              className="w-full bg-black border border-white rounded-lg p-3 text-white"
              defaultValue="https://linkedin.com/in/muhammad-dawood-k-39880b229/"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">Address</label>
            <input 
              type="text" 
              className="w-full bg-black border border-white rounded-lg p-3 text-white"
              defaultValue="Pakistan"
            />
          </div>
        </div>
        
        <div className="flex space-x-4 mt-6">
          <button className="bg-black border border-white hover:bg-blue-950 text-white px-6 py-2 rounded-lg transition-colors">
            Update Contact Info
          </button>
          <button className="bg-black border border-white hover:bg-blue-950 text-white px-6 py-2 rounded-lg transition-colors">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}