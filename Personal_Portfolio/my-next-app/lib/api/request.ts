import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface RequestConfig extends AxiosRequestConfig {
  data?: any;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/**
 * Generic request function that handles all HTTP methods
 * @param url - API endpoint
 * @param method - HTTP method (GET, POST, PUT, PATCH, DELETE)
 * @param config - Additional axios config
 * @returns Promise with response data
 */
export const request = async <T = any>(
  url: string,
  method: HttpMethod = 'GET',
  config?: RequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient({
      url,
      method,
      ...config,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw error;
  }
};

/**
 * GET request
 */
export const getRequest = <T = any>(url: string, config?: RequestConfig): Promise<T> => {
  return request<T>(url, 'GET', config);
};

/**
 * POST request
 */
export const postRequest = <T = any>(
  url: string,
  data?: any,
  config?: RequestConfig
): Promise<T> => {
  return request<T>(url, 'POST', { ...config, data });
};

/**
 * PUT request
 */
export const putRequest = <T = any>(
  url: string,
  data?: any,
  config?: RequestConfig
): Promise<T> => {
  return request<T>(url, 'PUT', { ...config, data });
};

/**
 * PATCH request
 */
export const patchRequest = <T = any>(
  url: string,
  data?: any,
  config?: RequestConfig
): Promise<T> => {
  return request<T>(url, 'PATCH', { ...config, data });
};

/**
 * DELETE request
 */
export const deleteRequest = <T = any>(url: string, config?: RequestConfig): Promise<T> => {
  return request<T>(url, 'DELETE', config);
};

export default apiClient;
