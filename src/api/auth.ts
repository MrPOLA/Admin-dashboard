import axios from 'axios';
import type { LoginCredentials } from '../types/auth';

// For demo purposes, we'll simulate an API response
export const login = async (credentials: LoginCredentials) => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Demo credentials
  if (credentials.email === 'admin@example.com' && credentials.password === 'password123') {
    return {
      user: {
        id: '1',
        email: 'admin@example.com',
        name: 'Admin User',
        role: 'ADMIN' as const,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      },
      token: 'demo-jwt-token',
    };
  }

  throw new Error('Invalid credentials');
};