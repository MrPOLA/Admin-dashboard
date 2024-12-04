import React from 'react';
import { Bell, Settings, User } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export default function Header() {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{user?.name}</span>
              <User className="h-8 w-8 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}