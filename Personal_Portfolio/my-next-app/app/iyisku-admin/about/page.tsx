'use client';

import React, { useState, useEffect } from 'react';
import { useAbout, useUpdateAbout } from '@/app/apiHooks';

export default function AboutPage() {
  const { data: aboutData, isLoading } = useAbout();
  const updateAbout = useUpdateAbout();

  const [formData, setFormData] = useState({
    introText: '',
    detailedBio: '',
  });

  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  useEffect(() => {
    if (aboutData) {
      setFormData({
        introText: aboutData.introText || '',
        detailedBio: aboutData.detailedBio || '',
      });
    }
  }, [aboutData]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setMessage(null);
    updateAbout.mutate(formData, {
      onSuccess: () => {
        setMessage({ type: 'success', text: 'About section updated successfully!' });
        setTimeout(() => setMessage(null), 3000);
      },
      onError: (error) => {
        setMessage({ type: 'error', text: error.message || 'Failed to update data' });
      }
    });
  };

  const handleReset = () => {
    if (aboutData) {
      setFormData({
        introText: aboutData.introText || '',
        detailedBio: aboutData.detailedBio || '',
      });
    }
  };

  if (isLoading) {
    return <div className="p-6 text-white">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">About Management</h1>
      
      {message && (
        <div className={`mb-4 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-900 border-green-500 text-green-200' : 'bg-red-900 border-red-500 text-red-200'} border`}>
          {message.text}
        </div>
      )}

      <div className="bg-black rounded-lg p-6 border border-gray-700">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Introduction Text</label>
            <textarea 
              name="introText"
              value={formData.introText}
              onChange={handleChange}
              className="w-full bg-black border border-gray-600 rounded-lg p-3 text-white min-h-[120px]"
              placeholder="I'm a passionate..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Detailed Bio</label>
            <textarea 
              name="detailedBio"
              value={formData.detailedBio}
              onChange={handleChange}
              className="w-full bg-black border border-gray-600 rounded-lg p-3 text-white min-h-[200px]"
              placeholder="I began my journey..."
            />
          </div>
          
          <div className="flex space-x-4 pt-4">
            <button 
              onClick={handleSave}
              disabled={updateAbout.isPending}
              className="bg-black border-white border hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
            >
              {updateAbout.isPending ? 'Saving...' : 'Save Changes'}
            </button>
            <button 
              onClick={handleReset}
              disabled={updateAbout.isPending}
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