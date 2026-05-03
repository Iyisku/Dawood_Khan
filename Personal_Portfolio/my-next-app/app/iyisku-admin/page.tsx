'use client';

import React, { useEffect, useState } from 'react';

interface Stats {
  totalUniqueVisitors: number;
  totalViews: number;
  totalProjects: number;
  totalExperiences: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalUniqueVisitors: 0,
    totalViews: 0,
    totalProjects: 0,
    totalExperiences: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-black rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-sm">Total Projects</p>
              <p className="text-2xl font-bold mt-1">{loading ? '...' : stats.totalProjects}</p>
            </div>
            <span className="text-2xl">📊</span>
          </div>
        </div>
        
        <div className="bg-black rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-sm">Experiences</p>
              <p className="text-2xl font-bold mt-1">{loading ? '...' : stats.totalExperiences}</p>
            </div>
            <span className="text-2xl">💼</span>
          </div>
        </div>
        
        <div className="bg-black rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-sm">Unique Visitors</p>
              <p className="text-2xl font-bold mt-1">{loading ? '...' : stats.totalUniqueVisitors}</p>
            </div>
            <span className="text-2xl">👥</span>
          </div>
        </div>
        
       <div className="bg-black rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-sm">Total Views</p>
              <p className="text-2xl font-bold mt-1">{loading ? '...' : stats.totalViews}</p>
            </div>
            <span className="text-2xl">👁️</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-black border border-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              Add New Project
            </button>
            <button className="w-full text-left p-3 bg-black border border-gray-700 hover:bg-gray-600 transition-colors">
              Update Experience
            </button>
            <button className="w-full text-left p-3 bg-black border border-gray-700 hover:bg-gray-600 transition-colors">
              Edit About Section
            </button>
          </div>
        </div>
        
        <div className="bg-black rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-gray-300">Updated project: TradxSell</span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-gray-300">Added new experience</span>
              <span className="text-sm text-gray-500">1 day ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-300">Updated contact information</span>
              <span className="text-sm text-gray-500">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}