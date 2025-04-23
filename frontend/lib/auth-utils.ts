// lib/auth-utils.ts
export function getAuthHeader(): HeadersInit {
    // Use client-side localStorage only when in the browser
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        return { 'Authorization': `Bearer ${token}` };
      }
    }
    return {};
  }
  
  export function isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('token');
    }
    return false;
  }
  
  export function getCurrentUser(): any | null {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        try {
          return JSON.parse(userStr);
        } catch (e) {
          return null;
        }
      }
    }
    return null;
  }
  
  export function logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Redirect to login page or refresh the current page
      window.location.href = '/login';
    }
  }