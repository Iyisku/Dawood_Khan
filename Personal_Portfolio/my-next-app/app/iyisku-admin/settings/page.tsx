import React from 'react';

export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <div className="bg-black border border-white rounded-lg p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Admin Credentials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white"
                  defaultValue="admin@dawoodkhan.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white"
                  placeholder="Enter new password"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Site Settings</h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500" />
                <span className="ml-2">Maintenance Mode</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2">Allow Contact Form</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500" defaultChecked />
                <span className="ml-2">Enable Analytics</span>
              </label>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Save Settings
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
              Reset to Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}