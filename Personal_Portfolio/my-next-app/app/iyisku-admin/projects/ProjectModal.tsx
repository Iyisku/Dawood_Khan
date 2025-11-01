'use client';

import React, { useState, useEffect } from 'react';
import { useCreateProject, useUpdateProject } from '@/app/apiHooks';
import { Project } from '@/app/apiHooks/projects/types';
import ImageUploadWidget from '@/Components/ImageUploadWidget';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project?: Project | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: '',
    status: 'Active' as const,
    image: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const createProject = useCreateProject();
  const projectId = project?._id || project?.id;
  const updateProject = useUpdateProject(projectId!);

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        link: project.link,
        status: project.status || 'Active',
        image: project.image || '',
      });
    } else {
      setFormData({
        title: '',
        description: '',
        link: '',
        status: 'Active',
        image: '',
      });
    }
    setErrors({});
  }, [project, isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.link.trim()) newErrors.link = 'Link is required';
    else if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(formData.link)) {
      newErrors.link = 'Please provide a valid URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const submitData = {
        title: formData.title,
        description: formData.description,
        link: formData.link,
        status: formData.status,
        ...(formData.image && { image: formData.image }),
      };

      const projectId = project?._id || project?.id;
      if (projectId) {
        await updateProject.mutateAsync(submitData);
      } else {
        await createProject.mutateAsync(submitData);
      }
      onClose();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  if (!isOpen) return null;

  const isLoading = createProject.isPending || updateProject.isPending;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-black border border-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {project ? 'Edit Project' : 'Add New Project'}
          </h2>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="text-gray-400 hover:text-white text-xl disabled:opacity-50"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Project Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., TradxSell - B2B ECommerce"
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-white disabled:opacity-50"
              disabled={isLoading}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your project in detail..."
              rows={4}
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-white resize-none disabled:opacity-50"
              disabled={isLoading}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Link */}
          <div>
            <label className="block text-sm font-medium mb-1">Project Link *</label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              placeholder="https://example.com"
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-white disabled:opacity-50"
              disabled={isLoading}
            />
            {errors.link && <p className="text-red-500 text-sm mt-1">{errors.link}</p>}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-1">Project Image</label>
            <ImageUploadWidget
              value={formData.image}
              onUpload={(imageUrl) => {
                setFormData((prev) => ({
                  ...prev,
                  image: imageUrl,
                }));
              }}
            />
            <p className="text-gray-400 text-xs mt-1">Upload a project image or enter image URL manually below</p>
            <div className="mt-2">
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
                className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-white disabled:opacity-50 text-sm"
                disabled={isLoading}
              />
              <p className="text-gray-400 text-xs mt-1">Or paste a direct image URL here</p>
            </div>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-white disabled:opacity-50"
              disabled={isLoading}
            >
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Archived">Archived</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (project ? 'Updating...' : 'Creating...') : project ? 'Update' : 'Create'}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 bg-gray-700 text-white px-4 py-2 rounded font-medium hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
