import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isOpen, 
  onClose 
}) => {
  const filterCategories = [
    {
      id: 'level',
      title: 'Program Level',
      options: [
        { value: 'undergraduate', label: 'Undergraduate (B.Tech)' },
        { value: 'postgraduate', label: 'Postgraduate (M.Tech)' },
        { value: 'doctoral', label: 'Doctoral (Ph.D)' }
      ]
    },
    {
      id: 'department',
      title: 'Department',
      options: [
        { value: 'computer', label: 'Computer Engineering' },
        { value: 'mechanical', label: 'Mechanical Engineering' },
        { value: 'electrical', label: 'Electrical Engineering' },
        { value: 'civil', label: 'Civil Engineering' },
        { value: 'electronics', label: 'Electronics & Telecom' },
        { value: 'production', label: 'Production Engineering' }
      ]
    },
    {
      id: 'duration',
      title: 'Duration',
      options: [
        { value: '4-years', label: '4 Years' },
        { value: '2-years', label: '2 Years' },
        { value: '3-years', label: '3+ Years' }
      ]
    },
    {
      id: 'specialization',
      title: 'Specialization',
      options: [
        { value: 'ai-ml', label: 'AI & Machine Learning' },
        { value: 'data-science', label: 'Data Science' },
        { value: 'cyber-security', label: 'Cyber Security' },
        { value: 'robotics', label: 'Robotics & Automation' },
        { value: 'iot', label: 'Internet of Things' },
        { value: 'blockchain', label: 'Blockchain Technology' }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-full lg:h-auto w-80 lg:w-full
        bg-white border-r lg:border-r-0 lg:border border-gray-200 
        transform transition-transform duration-300 z-50 lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        overflow-y-auto
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Filters</h3>
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onClearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
              <button
                onClick={onClose}
                className="lg:hidden p-1 rounded-md hover:bg-gray-100"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
          </div>

          {/* Filter Categories */}
          <div className="space-y-6">
            {filterCategories?.map((category) => (
              <div key={category?.id} className="space-y-3">
                <h4 className="font-medium text-foreground">{category?.title}</h4>
                <div className="space-y-2">
                  {category?.options?.map((option) => (
                    <Checkbox
                      key={option?.value}
                      label={option?.label}
                      checked={filters?.[category?.id]?.includes(option?.value) || false}
                      onChange={(e) => {
                        const isChecked = e?.target?.checked;
                        const currentValues = filters?.[category?.id] || [];
                        
                        let newValues;
                        if (isChecked) {
                          newValues = [...currentValues, option?.value];
                        } else {
                          newValues = currentValues?.filter(v => v !== option?.value);
                        }
                        
                        onFilterChange(category?.id, newValues);
                      }}
                      className="text-sm"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="font-medium text-foreground mb-3">Quick Actions</h4>
            <div className="space-y-2">
              <Button variant="outline" size="sm" fullWidth>
                <Icon name="Download" size={16} className="mr-2" />
                Download Brochure
              </Button>
              <Button variant="outline" size="sm" fullWidth>
                <Icon name="Calendar" size={16} className="mr-2" />
                Academic Calendar
              </Button>
              <Button variant="outline" size="sm" fullWidth>
                <Icon name="Users" size={16} className="mr-2" />
                Faculty Directory
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;