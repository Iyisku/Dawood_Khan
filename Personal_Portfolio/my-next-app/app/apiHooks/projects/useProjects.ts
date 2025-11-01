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
  Project,
  ProjectsResponse,
  CreateProjectRequest,
  UpdateProjectRequest,
} from './types';

const PROJECTS_QUERY_KEY = ['projects'];

/**
 * Fetch all projects
 */
export const useProjects = (
  options?: UseQueryOptions<Project[], Error>
) => {
  return useQuery<Project[], Error>({
    queryKey: PROJECTS_QUERY_KEY,
    queryFn: async () => {
      const response = await getRequest<ProjectsResponse>('/projects');
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    ...options,
  });
};

/**
 * Fetch single project by ID
 */
export const useProjectById = (
  id: string | number,
  options?: UseQueryOptions<Project, Error>
) => {
  return useQuery<Project, Error>({
    queryKey: [...PROJECTS_QUERY_KEY, id],
    queryFn: async () => {
      return getRequest<Project>(`/projects/${id}`);
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    ...options,
  });
};

/**
 * Create new project
 */
export const useCreateProject = (
  options?: UseMutationOptions<Project, Error, CreateProjectRequest>
) => {
  const queryClient = useQueryClient();

  return useMutation<Project, Error, CreateProjectRequest>({
    mutationFn: async (data) => {
      return postRequest<Project>('/projects', data);
    },
    onSuccess: (newProject) => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY });
    },
    ...options,
  });
};

/**
 * Update project
 */
export const useUpdateProject = (
  id: string | number,
  options?: UseMutationOptions<Project, Error, UpdateProjectRequest>
) => {
  const queryClient = useQueryClient();

  return useMutation<Project, Error, UpdateProjectRequest>({
    mutationFn: async (data) => {
      return patchRequest<Project>(`/projects/${id}`, data);
    },
    onSuccess: (updatedProject) => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: [...PROJECTS_QUERY_KEY, id] });
    },
    ...options,
  });
};

/**
 * Delete project
 */
export const useDeleteProject = (
  options?: UseMutationOptions<void, Error, string | number>
) => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, string | number>({
    mutationFn: async (id) => {
      await deleteRequest(`/projects/${id}`);
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: PROJECTS_QUERY_KEY });
      queryClient.removeQueries({ queryKey: [...PROJECTS_QUERY_KEY, id] });
    },
    ...options,
  });
};
