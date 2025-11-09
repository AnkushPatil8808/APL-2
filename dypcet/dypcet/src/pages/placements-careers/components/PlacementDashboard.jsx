import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const PlacementDashboard = () => {
  const [selectedYear, setSelectedYear] = useState('2023-24');
  const [selectedBranch, setSelectedBranch] = useState('all');

  const years = ['2023-24', '2022-23', '2021-22', '2020-21'];
  const branches = [
    { id: 'all', label: 'All Branches' },
    { id: 'cse', label: 'Computer Science' },
    { id: 'it', label: 'Information Technology' },
    { id: 'mech', label: 'Mechanical' },
    { id: 'ece', label: 'Electronics & Telecom' },
    { id: 'civil', label: 'Civil Engineering' }
  ];

  const placementData = [
    { branch: 'CSE', placed: 95, total: 100, percentage: 95, avgPackage: 12.5 },
    { branch: 'IT', placed: 88, total: 92, percentage: 95.7, avgPackage: 11.8 },
    { branch: 'ECE', placed: 76, total: 85, percentage: 89.4, avgPackage: 9.2 },
    { branch: 'MECH', placed: 68, total: 78, percentage: 87.2, avgPackage: 8.5 },
    { branch: 'CIVIL', placed: 45, total: 55, percentage: 81.8, avgPackage: 7.2 }
  ];

  const companyWiseData = [
    { name: 'TCS', students: 45, color: '#1E40AF' },
    { name: 'Infosys', students: 38, color: '#F97316' },
    { name: 'Wipro', students: 32, color: '#059669' },
    { name: 'L&T', students: 28, color: '#DC2626' },
    { name: 'Mahindra', students: 25, color: '#7C3AED' },
    { name: 'Others', students: 85, color: '#64748B' }
  ];

  const trendData = [
    { year: '2020-21', placement: 78.5, avgPackage: 6.2 },
    { year: '2021-22', placement: 85.2, avgPackage: 7.1 },
    { year: '2022-23', placement: 91.8, avgPackage: 8.3 },
    { year: '2023-24', placement: 94.2, avgPackage: 9.1 }
  ];

  const packageRanges = [
    { range: '< 5 LPA', count: 45, percentage: 15.2 },
    { range: '5-10 LPA', count: 158, percentage: 53.4 },
    { range: '10-15 LPA', count: 67, percentage: 22.6 },
    { range: '15-25 LPA', count: 18, percentage: 6.1 },
    { range: '> 25 LPA', count: 8, percentage: 2.7 }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-2">Placement Dashboard</h2>
          <p className="text-muted-foreground">
            Interactive analytics and insights into placement performance
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(e?.target?.value)}
            className="px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {years?.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          
          <select 
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e?.target?.value)}
            className="px-4 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {branches?.map(branch => (
              <option key={branch?.id} value={branch?.id}>{branch?.label}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Branch-wise Placement Chart */}
      <div className="bg-card rounded-lg p-6 shadow-brand border border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Branch-wise Placement Statistics</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={placementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="branch" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="percentage" fill="#1E40AF" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Company-wise Distribution */}
        <div className="bg-card rounded-lg p-6 shadow-brand border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6">Company-wise Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={companyWiseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="students"
                >
                  {companyWiseData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry?.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {companyWiseData?.map((company, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: company?.color }}
                ></div>
                <span className="text-sm text-muted-foreground">
                  {company?.name}: {company?.students}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Trends */}
        <div className="bg-card rounded-lg p-6 shadow-brand border border-border">
          <h3 className="text-xl font-semibold text-foreground mb-6">Placement Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="year" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#FFFFFF', 
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="placement" 
                  stroke="#1E40AF" 
                  strokeWidth={3}
                  dot={{ fill: '#1E40AF', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      {/* Package Distribution */}
      <div className="bg-card rounded-lg p-6 shadow-brand border border-border">
        <h3 className="text-xl font-semibold text-foreground mb-6">Package Distribution</h3>
        <div className="space-y-4">
          {packageRanges?.map((range, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-24 text-sm font-medium text-foreground">
                {range?.range}
              </div>
              <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${range?.percentage}%` }}
                ></div>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-foreground font-medium">{range?.count}</span>
                <span className="text-muted-foreground">({range?.percentage}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Export Options */}
      <div className="bg-muted/30 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-foreground mb-4">Export Placement Data</h3>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200">
            <Icon name="Download" size={16} />
            <span>Download PDF Report</span>
          </button>
          <button className="inline-flex items-center space-x-2 border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors duration-200">
            <Icon name="FileSpreadsheet" size={16} />
            <span>Export to Excel</span>
          </button>
          <button className="inline-flex items-center space-x-2 border border-secondary text-secondary px-4 py-2 rounded-lg hover:bg-secondary/5 transition-colors duration-200">
            <Icon name="Share2" size={16} />
            <span>Share Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacementDashboard;