'use client';

import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
import {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
} from '@/lib/api/request';
import {
  Experience,
  ExperienceResponse,
  CreateExperienceRequest,
  UpdateExperienceRequest,
} from './types';

const EXPERIENCE_QUERY_KEY = ['experiences'];

/**
 * Fetch all experiences
 */
export const useExperiences = (
  options?: UseQueryOptions<Experience[], Error>
) => {
  return useQuery<Experience[], Error>({
    queryKey: EXPERIENCE_QUERY_KEY,
    queryFn: async () => {
      const response = await getRequest<ExperienceResponse>('/experiences');
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    ...options,
  });
};

/**
 * Fetch single experience by ID
 */
export const useExperienceById = (
  id: string | number,
  options?: UseQueryOptions<Experience, Error>
) => {
  return useQuery<Experience, Error>({
    queryKey: [...EXPERIENCE_QUERY_KEY, id],
    queryFn: async () => {
      return getRequest<Experience>(`/experiences/${id}`);
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    ...options,
  });
};

/**
 * Create new experience
 */
export const useCreateExperience = (
  options?: UseMutationOptions<Experience, Error, CreateExperienceRequest>
) => {
  const queryClient = useQueryClient();

  return useMutation<Experience, Error, CreateExperienceRequest>({
    mutationFn: async (data) => {
      return postRequest<Experience>('/experiences', data);
    },
    onSuccess: (newExperience) => {
      queryClient.invalidateQueries({ queryKey: EXPERIENCE_QUERY_KEY });
    },
    ...options,
  });
};

/**
 * Update experience
 */
export const useUpdateExperience = (
  id: string | number,
  options?: UseMutationOptions<Experience, Error, UpdateExperienceRequest>
) => {
  const queryClient = useQueryClient();

  return useMutation<Experience, Error, UpdateExperienceRequest>({
    mutationFn: async (data) => {
      return patchRequest<Experience>(`/experiences/${id}`, data);
    },
    onSuccess: (updatedExperience) => {
      queryClient.invalidateQueries({ queryKey: EXPERIENCE_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: [...EXPERIENCE_QUERY_KEY, id] });
    },
    ...options,
  });
};

/**
 * Delete experience
 */
export const useDeleteExperience = (
  options?: UseMutationOptions<void, Error, string | number>
) => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string | number>({
    mutationFn: async (id) => {
      await deleteRequest(`/experiences/${id}`);
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: EXPERIENCE_QUERY_KEY });
      queryClient.removeQueries({ queryKey: [...EXPERIENCE_QUERY_KEY, id] });
    },
    ...options,
  });
};
