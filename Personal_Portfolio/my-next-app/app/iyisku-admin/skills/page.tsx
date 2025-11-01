'use client';
import React, { useState, useEffect } from 'react';

export default function SkillsPage() {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');

  // Load skills from localStorage on component mount
  useEffect(() => {
    const savedSkills = localStorage.getItem('adminSkills');
    if (savedSkills) {
      setSkills(JSON.parse(savedSkills));
    }
  }, []);

  // Save skills to localStorage whenever skills change
  useEffect(() => {
    localStorage.setItem('adminSkills', JSON.stringify(skills));
  }, [skills]);

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddSkill();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Skills Management</h1>

      {/* Add Skill Form */}
      <div className="bg-black border border-white rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Skill</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter skill name"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 bg-black border border-white rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleAddSkill}
            className="bg-black hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Add Skill
          </button>
        </div>
      </div>

      {/* Skills List */}
      <div className="bg-black border border-white rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Skills List ({skills.length})</h2>
        
        {skills.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No skills added yet. Add your first skill above.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-black border border-white rounded-lg p-4 flex items-center justify-between group hover:bg-gray-700 transition-colors"
              >
                <span className="text-white font-medium">{skill}</span>
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}