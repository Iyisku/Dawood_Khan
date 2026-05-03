'use client';

import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
import { getRequest, putRequest } from '@/lib/api/request';
import { Landing, LandingResponse, UpdateLandingRequest } from './types';

const LANDING_QUERY_KEY = ['landing'];

/**
 * Fetch landing page data
 */
export const useLanding = (options?: UseQueryOptions<Landing, Error>) => {
  return useQuery<Landing, Error>({
    queryKey: LANDING_QUERY_KEY,
    queryFn: async () => {
      const response = await getRequest<LandingResponse>('/landing');
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    ...options,
  });
};

/**
 * Update landing page data
 */
export const useUpdateLanding = (
  options?: UseMutationOptions<Landing, Error, UpdateLandingRequest>
) => {
  const queryClient = useQueryClient();

  return useMutation<Landing, Error, UpdateLandingRequest>({
    mutationFn: async (data) => {
      const response = await putRequest<{ success: boolean; data: Landing }>('/landing', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: LANDING_QUERY_KEY });
    },
    ...options,
  });
};
