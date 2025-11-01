'use client';

import React, { useState } from 'react';
import { useExperiences, useDeleteExperience } from '@/app/apiHooks';
import ExperienceModal from './ExperienceModal';
import { Experience } from '@/app/apiHooks/experience/types';

export default function ExperiencePage() {

  const { data: experiences = [], isLoading, isError } = useExperiences();
  const deleteExperience = useDeleteExperience();
  const [deletingId, setDeletingId] = useState<string | number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const handleDelete = async (id: string | number) => {
    if (confirm('Are you sure you want to delete this experience?')) {
      setDeletingId(id);
      try {
        await deleteExperience.mutateAsync(id);
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleOpenModal = (exp?: Experience) => {
    setSelectedExperience(exp || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-400">Loading experiences...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-500">Failed to load experiences</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Experience Management</h1>
        <button
          onClick={() => handleOpenModal()}
          className="bg-black border border-white text-white px-4 py-2 rounded-lg transition-colors hover:bg-white hover:text-black"
        >
          Add New Experience
        </button>
      </div>

      <ExperienceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        experience={selectedExperience}
      />

      {experiences.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <p>No experiences found. Add your first experience!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {experiences.map((exp) => (
          <div key={exp._id} className="bg-black border border-white rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-400 mt-1">{exp.company}</p>
              </div>
              <span className="text-sm text-black font-bold bg-white px-3 py-1 rounded">
                {exp.date}
              </span>
            </div>
            
            <p className="text-gray-300 mb-4">{exp.description}</p>
            
            <div className="mb-4">
              <span className="text-sm text-gray-400">Technologies: </span>
              <span className="text-gray-300">{exp.techUsed}</span>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => handleOpenModal(exp)}
                className="bg-black border border-white hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors disabled:opacity-50"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(exp._id)}
                disabled={deletingId === exp._id}
                className="bg-black border border-white hover:bg-red-700 text-white px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {deletingId === exp._id ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        ))}
        </div>
      )}
    </div>
  );
}
