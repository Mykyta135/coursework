// src/utils/api.ts
import { getCookie } from 'cookies-next';



// Types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  statusCode?: number;
}

// Base API request function
async function apiRequest<T>(
  endpoint: string, 
  method: string = 'GET', 
  data?: any, 
  requiresAuth: boolean = true
): Promise<ApiResponse<T>> {
  try {
    const url = `${process.env.API_URL}/${endpoint}`;
    const token = getCookie('auth_token');
    
    if (!process.env.API_KEY) {
      throw new Error('API_KEY is required but missing!');
    }
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'X-API-Key': process.env.API_KEY, // Now guaranteed to be a string
    };
    
    if (requiresAuth && token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    const options: RequestInit = {
      method,
      headers,
      credentials: 'include',
    };
    
    if (data && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(data);
    }
    
    const response = await fetch(url, options);
    const result = await response.json();
    
    if (!response.ok) {
      return {
        error: result.message || 'An error occurred',
        statusCode: response.status
      };
    }
    
    return { data: result };
  } catch (error) {
    console.error('API Error:', error);
    return {
      error: 'Network error or server unavailable',
      statusCode: 500
    };
  }
}

// API utility functions for each entity
export const flightApi = {
  getAll: (searchParams?: any) => {
    const queryString = searchParams ? `?${new URLSearchParams(searchParams).toString()}` : '';
    return apiRequest<any[]>(`flights${queryString}`, 'GET', null, false);
  },
  getById: (id: string) => apiRequest<any>(`flights/${id}`, 'GET', null, false),
  getSeats: (id: string) => apiRequest<any[]>(`flights/${id}/seats`, 'GET', null, false),
  create: (data: any) => apiRequest<any>('flights', 'POST', data),
  update: (id: string, data: any) => apiRequest<any>(`flights/${id}`, 'PUT', data),
  delete: (id: string) => apiRequest<void>(`flights/${id}`, 'DELETE')
};

export const bookingApi = {
  getAll: () => apiRequest<any[]>('bookings', 'GET'),
  getById: (id: string) => apiRequest<any>(`bookings/${id}`, 'GET'),
  create: (data: any) => apiRequest<any>('bookings', 'POST', data),
  update: (id: string, data: any) => apiRequest<any>(`bookings/${id}`, 'PUT', data),
  delete: (id: string) => apiRequest<void>(`bookings/${id}`, 'DELETE'),
  getTickets: (id: string) => apiRequest<any[]>(`bookings/${id}/tickets`, 'GET'),
  confirm: (id: string) => apiRequest<any>(`bookings/${id}/confirm`, 'POST'),
  cancel: (id: string) => apiRequest<any>(`bookings/${id}/cancel`, 'POST')
};

export const ticketApi = {
  getAll: () => apiRequest<any[]>('tickets', 'GET'),
  getById: (id: string) => apiRequest<any>(`tickets/${id}`, 'GET'),
  create: (data: any) => apiRequest<any>('tickets', 'POST', data),
  update: (id: string, data: any) => apiRequest<any>(`tickets/${id}`, 'PUT', data),
  delete: (id: string) => apiRequest<void>(`tickets/${id}`, 'DELETE'),
  generateBoardingPass: (id: string) => apiRequest<any>(`tickets/${id}/generate-boarding-pass`, 'POST'),
  checkIn: (id: string) => apiRequest<any>(`tickets/${id}/check-in`, 'POST')
};

export const paymentApi = {
  getAll: () => apiRequest<any[]>('payments', 'GET'),
  getById: (id: string) => apiRequest<any>(`payments/${id}`, 'GET'),
  create: (data: any) => apiRequest<any>('payments', 'POST', data),
  process: (id: string) => apiRequest<any>(`payments/${id}/process`, 'POST')
};

export const refundApi = {
  getAll: () => apiRequest<any[]>('refunds', 'GET'),
  getById: (id: string) => apiRequest<any>(`refunds/${id}`, 'GET'),
  create: (data: any) => apiRequest<any>('refunds', 'POST', data),
  approve: (id: string) => apiRequest<any>(`refunds/${id}/approve`, 'PUT'),
  reject: (id: string) => apiRequest<any>(`refunds/${id}/reject`, 'PUT'),
  process: (id: string) => apiRequest<any>(`refunds/${id}/process`, 'PUT')
};

export const userApi = {
  getAll: () => apiRequest<any[]>('users', 'GET'),
  getById: (id: string) => apiRequest<any>(`users/${id}`, 'GET'),
  create: (data: any) => apiRequest<any>('users', 'POST', data),
  update: (id: string, data: any) => apiRequest<any>(`users/${id}`, 'PUT', data),
  delete: (id: string) => apiRequest<void>(`users/${id}`, 'DELETE'),
  getBookings: (id: string) => apiRequest<any[]>(`users/${id}/bookings`, 'GET'),
  login: (credentials: { email: string; password: string }) => 
    apiRequest<any>('users/login', 'POST', credentials, false),
  register: (data: any) => apiRequest<any>('users/register', 'POST', data, false),
  verify: (id: string) => apiRequest<any>(`users/${id}/verify`, 'POST')
};