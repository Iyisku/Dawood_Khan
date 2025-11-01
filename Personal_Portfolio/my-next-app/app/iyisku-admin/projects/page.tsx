'use client';

import React, { useState } from 'react';
import { useProjects, useDeleteProject } from '@/app/apiHooks';
import ProjectModal from './ProjectModal';
import { Project } from '@/app/apiHooks/projects/types';

export default function ProjectsPage() {

  const { data: projects = [], isLoading, isError } = useProjects();
  const deleteProject = useDeleteProject();
  const [deletingId, setDeletingId] = useState<string | number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleDelete = async (id: string | number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setDeletingId(id);
      try {
        await deleteProject.mutateAsync(id);
      } finally {
        setDeletingId(null);
      }
    }
  };

  const handleOpenModal = (proj?: Project) => {
    setSelectedProject(proj || null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-400">Loading projects...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-500">Failed to load projects</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects Management</h1>
        <button
          onClick={() => handleOpenModal()}
          className="bg-black border border-white hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Add New Project
        </button>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />

      {projects.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <p>No projects found. Add your first project!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
          <div key={project._id} className="bg-black border border-white rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <span className="text-xs px-2 py-1 rounded bg-black border border-white">
                {project.status}
              </span>
            </div>
            
            <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
            
            <div className="mb-4">
              <span className="text-sm text-gray-400">Link: </span>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
                {project.link}
              </a>
            </div>
            
            <div className="flex space-x-2">
              <button
                onClick={() => handleOpenModal(project)}
                className="bg-black border border-white hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors disabled:opacity-50"
              >
                Edit
              </button>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border border-white hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors text-center"
              >
                View
              </a>
              <button
                onClick={() => project._id && handleDelete(project._id)}
                disabled={deletingId === project._id}
                className="bg-black border border-white hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {deletingId === project._id ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        ))}
        </div>
      )}
    </div>
  );
}
