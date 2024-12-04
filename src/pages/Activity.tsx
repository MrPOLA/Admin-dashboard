import React from 'react';
import { Clock, User, Shield } from 'lucide-react';

const activities = [
  {
    id: 1,
    user: 'John Doe',
    action: 'Created new user',
    target: 'jane@example.com',
    timestamp: '2024-02-20T10:00:00Z',
    type: 'user',
  },
  {
    id: 2,
    user: 'Admin',
    action: 'Updated role permissions',
    target: 'Editor Role',
    timestamp: '2024-02-20T09:30:00Z',
    type: 'role',
  },
  // Add more mock data as needed
];

export default function Activity() {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Activity Log</h1>
          <p className="mt-2 text-sm text-gray-700">
            View all system activities and user actions.
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <div className="bg-white">
                <ul role="list" className="divide-y divide-gray-200">
                  {activities.map((activity) => (
                    <li key={activity.id} className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {activity.type === 'user' ? (
                            <User className="h-6 w-6 text-gray-400" />
                          ) : (
                            <Shield className="h-6 w-6 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.user}
                          </p>
                          <p className="text-sm text-gray-500">
                            {activity.action} - {activity.target}
                          </p>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {new Date(activity.timestamp).toLocaleString()}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}