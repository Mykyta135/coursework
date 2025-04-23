// lib/api-client.ts
import { getAuthHeader } from "./auth-utils";
import { Ticket, Passenger, Booking, Flight, Airport } from "@/app/types";

const BASE_URL = "http://localhost:5005";

// Helper function to handle API responses
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || `API Error: ${response.status}`);
  }
  return response.json();
}

// Helper function to make API requests
async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const headers = {
    "Content-Type": "application/json",
    ...getAuthHeader(),
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    ...options,
    headers,
  });

  return handleResponse<T>(response);
}

// Authentication functions
export const AuthAPI = {
  login: async (email: string, password: string) => {
    return request<{ token: string; user: any }>("users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  },

  register: async (email: string, password: string) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error("Registration error:", errorData || response.statusText);
        throw new Error(
          errorData?.message || `Registration failed: ${response.status}`
        );
      }

      return response.json();
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  getUser: async () => {
    return request<{ user: any }>("users/me");
  },
};
// Flight API functions
export const FlightAPI = {
  search: async (params: {
    departureAirportCode?: string;
    arrivalAirportCode?: string;
    departureDate?: Date;
    returnDate?: Date;
    passengers?: number;
    seatClass?: string;
  }) => {
    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        if (value instanceof Date) {
          searchParams.append(key, value.toISOString().split("T")[0]); // Format date as YYYY-MM-DD
        } else {
          searchParams.append(key, String(value));
        }
      }
    }

    return request<Flight[]>(`flights?${searchParams.toString()}`);
  },

  getFlightById: async (id: string) => {
    return request<Flight>(`flights/${id}`);
  },

  getFlightSeats: async (id: string, seatClass?: string) => {
    const params = seatClass ? `?seatClass=${seatClass}` : "";
    return request<any[]>(`flights/${id}/seats${params}`);
  },

  searchAirports: async (searchQuery: string) => {
    if (!searchQuery || searchQuery.length < 2) {
      throw new Error("Search query must be at least 2 characters");
    }
    return request<Airport[]>(
      `flights/airports/search?query=${encodeURIComponent(searchQuery)}`
    );
  },

  getPopularRoutes: async () => {
    return request<
      Array<{
        departureCode: string;
        departureCity: string;
        arrivalCode: string;
        arrivalCity: string;
        flightCount: number;
      }>
    >("flights/schedules/routes");
  },
};

// Booking API functions
export const BookingAPI = {
  create: async (bookingData: any) => {
    return request<Booking>("bookings", {
      method: "POST",
      body: JSON.stringify(bookingData),
    });
  },

  getById: async (id: string) => {
    return request<Booking>(`bookings/${id}`);
  },
};

// Ticket API functions
export const TicketAPI = {
  getById: async (id: string) => {
    return request<Ticket>(`tickets/${id}`);
  },

  downloadTicket: async (id: string) => {
    const response = await fetch(`${BASE_URL}/tickets/${id}/download`, {
      headers: {
        ...getAuthHeader(),
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to download ticket: ${response.status}`);
    }

    const blob = await response.blob();
    return URL.createObjectURL(blob);
  },

  checkIn: async (id: string) => {
    return request<any>(`tickets/${id}/check-in`, {
      method: "POST",
    });
  },

  requestRefund: async (id: string) => {
    return request<any>(`tickets/${id}/refund`, {
      method: "POST",
    });
  },
};

// User API functions
export const UserAPI = {
  getUserBookings: async () => {
    return request<Booking[]>("users/bookings");
  },

  getUserTickets: async () => {
    return request<Ticket[]>("users/tickets");
  },

  updateProfile: async (profileData: Partial<Passenger>) => {
    return request<Passenger>("users/profile", {
      method: "PUT",
      body: JSON.stringify(profileData),
    });
  },
};
