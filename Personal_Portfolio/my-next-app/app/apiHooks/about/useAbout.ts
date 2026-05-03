'use client';

import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
import { getRequest, putRequest } from '@/lib/api/request';
import { About, AboutResponse, UpdateAboutRequest } from './types';

const ABOUT_QUERY_KEY = ['about'];

/**
 * Fetch about page data
 */
export const useAbout = (options?: UseQueryOptions<About, Error>) => {
  return useQuery<About, Error>({
    queryKey: ABOUT_QUERY_KEY,
    queryFn: async () => {
      const response = await getRequest<AboutResponse>('/about');
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    ...options,
  });
};

/**
 * Update about page data
 */
export const useUpdateAbout = (
  options?: UseMutationOptions<About, Error, UpdateAboutRequest>
) => {
  const queryClient = useQueryClient();

  return useMutation<About, Error, UpdateAboutRequest>({
    mutationFn: async (data) => {
      const response = await putRequest<{ success: boolean; data: About }>('/about', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ABOUT_QUERY_KEY });
    },
    ...options,
  });
};
