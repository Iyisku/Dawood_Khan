'use client';

import React, { useState, useEffect } from 'react';
import { useCreateExperience, useUpdateExperience } from '@/app/apiHooks';
import { Experience } from '@/app/apiHooks/experience/types';

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  experience?: Experience | null;
}

export default function ExperienceModal({
  isOpen,
  onClose,
  experience,
}: ExperienceModalProps) {
  const [formData, setFormData] = useState({
    role: '',
    company: '',
    description: '',
    date: '',
    techUsed: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const createExperience = useCreateExperience();
  const experienceId = experience?._id || experience?.id;
  const updateExperience = useUpdateExperience(experienceId!);

  useEffect(() => {
    if (experience) {
      setFormData({
        role: experience.role,
        company: experience.company,
        description: experience.description,
        date: experience.date,
        techUsed: experience.techUsed,
      });
    } else {
      setFormData({
        role: '',
        company: '',
        description: '',
        date: '',
        techUsed: '',
      });
    }
    setErrors({});
  }, [experience, isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.role.trim()) newErrors.role = 'Role is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.date.trim()) newErrors.date = 'Date is required';
    if (!formData.techUsed.trim()) newErrors.techUsed = 'Technologies used is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const experienceId = experience?._id || experience?.id;
      if (experienceId) {
        await updateExperience.mutateAsync(formData);
      } else {
        await createExperience.mutateAsync(formData);
      }
      onClose();
    } catch (error) {
      console.error('Error saving experience:', error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  const isLoading = createExperience.isPending || updateExperience.isPending;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-black border border-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {experience ? 'Edit Experience' : 'Add New Experience'}
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
          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-1">Role *</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              placeholder="e.g., Full Stack Web Developer at TECHXSERVE"
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-white disabled:opacity-50"
              disabled={isLoading}
            />
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium mb-1">Company *</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="e.g., TechXServe"
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-white disabled:opacity-50"
              disabled={isLoading}
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">Date *</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              placeholder="e.g., July 2024 – Present"
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-white disabled:opacity-50"
              disabled={isLoading}
            />
            {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your role and achievements..."
              rows={4}
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-white resize-none disabled:opacity-50"
              disabled={isLoading}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Technologies Used */}
          <div>
            <label className="block text-sm font-medium mb-1">Technologies Used *</label>
            <textarea
              name="techUsed"
              value={formData.techUsed}
              onChange={handleInputChange}
              placeholder="e.g., React, Node.js, MongoDB, TypeScript"
              rows={2}
              className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-white resize-none disabled:opacity-50"
              disabled={isLoading}
            />
            {errors.techUsed && (
              <p className="text-red-500 text-sm mt-1">{errors.techUsed}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (experience ? 'Updating...' : 'Creating...') : experience ? 'Update' : 'Create'}
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
