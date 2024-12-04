import React from 'react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your application settings and preferences.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <div className="bg-white shadow sm:rounded-lg">
          <div className="min-h-[400px] flex items-center justify-center">
            <p className="text-gray-500">Settings configuration coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}