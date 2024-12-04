import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  name: string;
  value: string;
  icon: LucideIcon;
  change: string;
  changeType: 'increase' | 'decrease' | 'neutral';
}

export default function StatCard({ name, value, icon: Icon, change, changeType }: StatCardProps) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className="h-6 w-6 text-gray-400" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">
                {name}
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">
                  {value}
                </div>
                <div
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    changeType === 'increase'
                      ? 'text-green-600'
                      : changeType === 'decrease'
                      ? 'text-red-600'
                      : 'text-gray-500'
                  }`}
                >
                  {change}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}