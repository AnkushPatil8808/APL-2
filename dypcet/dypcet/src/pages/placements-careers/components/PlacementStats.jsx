import React from 'react';
import Icon from '../../../components/AppIcon';

const PlacementStats = () => {
  const stats = [
    {
      id: 1,
      title: "Overall Placement Rate",
      value: "94.2%",
      change: "+3.5%",
      trend: "up",
      description: "Students placed in 2023-24",
      icon: "TrendingUp",
      color: "text-success"
    },
    {
      id: 2,
      title: "Average Package",
      value: "₹8.5 LPA",
      change: "+12%",
      trend: "up",
      description: "Across all branches",
      icon: "IndianRupee",
      color: "text-primary"
    },
    {
      id: 3,
      title: "Highest Package",
      value: "₹45 LPA",
      change: "New Record",
      trend: "up",
      description: "Computer Science 2024",
      icon: "Award",
      color: "text-accent"
    },
    {
      id: 4,
      title: "Recruiting Companies",
      value: "250+",
      change: "+35",
      trend: "up",
      description: "Active partnerships",
      icon: "Building2",
      color: "text-secondary"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats?.map((stat) => (
        <div 
          key={stat?.id}
          className="bg-card rounded-lg p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover-lift border border-border"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-muted ${stat?.color}`}>
              <Icon name={stat?.icon} size={24} />
            </div>
            <div className="flex items-center text-sm text-success">
              <Icon name="TrendingUp" size={16} className="mr-1" />
              {stat?.change}
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-foreground">{stat?.value}</h3>
            <p className="text-sm font-medium text-foreground">{stat?.title}</p>
            <p className="text-xs text-muted-foreground">{stat?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlacementStats;