'use client';

import React, { useState, useEffect } from 'react';
import { useLanding, useUpdateLanding } from '@/app/apiHooks';

export default function LandingAdminPage() {
  const { data: landingData, isLoading } = useLanding();
  const updateLanding = useUpdateLanding();

  const [formData, setFormData] = useState({
    name: '',
    rolePart1: '',
    rolePart2: '',
    description: '',
  });

  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    if (landingData) {
      setFormData({
        name: landingData.name || '',
        rolePart1: landingData.rolePart1 || '',
        rolePart2: landingData.rolePart2 || '',
        description: landingData.description || '',
      });
    }
  }, [landingData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setMessage(null);
    updateLanding.mutate(formData, {
      onSuccess: () => {
        setMessage({ type: 'success', text: 'Landing page data updated successfully!' });
        setTimeout(() => setMessage(null), 3000);
      },
      onError: (error) => {
        setMessage({ type: 'error', text: error.message || 'Failed to update data' });
      }
    });
  };

  const handleReset = () => {
    if (landingData) {
      setFormData({
        name: landingData.name || '',
        rolePart1: landingData.rolePart1 || '',
        rolePart2: landingData.rolePart2 || '',
        description: landingData.description || '',
      });
    }
  };

  if (isLoading) {
    return <div className="p-6 text-white">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Landing Page Management</h1>
      
      {message && (
        <div className={`mb-4 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-900 border-green-500 text-green-200' : 'bg-red-900 border-red-500 text-red-200'} border`}>
          {message.text}
        </div>
      )}

      <div className="bg-black rounded-lg p-6 border border-gray-700">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-black border border-gray-600 rounded-lg p-3 text-white"
              placeholder="e.g. Dawood Khan"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Role Part 1</label>
              <input 
                type="text"
                name="rolePart1"
                value={formData.rolePart1}
                onChange={handleChange}
                className="w-full bg-black border border-gray-600 rounded-lg p-3 text-white"
                placeholder="e.g. Software"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Role Part 2</label>
              <input 
                type="text"
                name="rolePart2"
                value={formData.rolePart2}
                onChange={handleChange}
                className="w-full bg-black border border-gray-600 rounded-lg p-3 text-white"
                placeholder="e.g. Engineer"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-black border border-gray-600 rounded-lg p-3 text-white min-h-[200px]"
              placeholder="Hi, I'm..."
            />
          </div>
          
          <div className="flex space-x-4 pt-4">
            <button 
              onClick={handleSave}
              disabled={updateLanding.isPending}
              className="bg-black border-white border hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              {updateLanding.isPending ? 'Saving...' : 'Save Changes'}
            </button>
            <button 
              onClick={handleReset}
              disabled={updateLanding.isPending}
              className="bg-black border border-white hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
