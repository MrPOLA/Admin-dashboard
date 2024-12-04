import React from 'react';
import { Users, ShieldCheck, Activity } from 'lucide-react';
import StatCard from '../components/Dashboard/StatCard';
import UserGrowthChart from '../components/Dashboard/UserGrowthChart';

const chartData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 600 },
  { name: 'Apr', users: 800 },
  { name: 'May', users: 700 },
];

const stats = [
  {
    name: 'Total Users',
    value: '2,800',
    icon: Users,
    change: '+12%',
    changeType: 'increase' as const,
  },
  {
    name: 'Active Roles',
    value: '3',
    icon: ShieldCheck,
    change: '0',
    changeType: 'neutral' as const,
  },
  {
    name: 'Daily Active Users',
    value: '1,200',
    icon: Activity,
    change: '+8%',
    changeType: 'increase' as const,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.name} {...stat} />
        ))}
      </div>
      <UserGrowthChart data={chartData} />
    </div>
  );
}