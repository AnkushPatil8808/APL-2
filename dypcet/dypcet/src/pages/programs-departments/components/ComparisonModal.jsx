import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ComparisonModal = ({ programs, onClose, onRemoveProgram }) => {
  if (!programs || programs?.length === 0) return null;

  const comparisonCriteria = [
    { key: 'duration', label: 'Duration' },
    { key: 'fees', label: 'Annual Fees', format: (value) => `₹${value}` },
    { key: 'seats', label: 'Available Seats' },
    { key: 'eligibility', label: 'Eligibility' },
    { key: 'placement', label: 'Average Placement', format: (value) => `₹${value} LPA` },
    { key: 'accreditation', label: 'Accreditation' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-brand-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-foreground">
            Program Comparison ({programs?.length})
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          <div className="p-6">
            {/* Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {programs?.map((program) => (
                <div key={program?.id} className="relative bg-gray-50 rounded-lg p-4">
                  <button
                    onClick={() => onRemoveProgram(program?.id)}
                    className="absolute top-2 right-2 p-1 rounded-full bg-white shadow-sm hover:bg-gray-100"
                  >
                    <Icon name="X" size={16} />
                  </button>
                  
                  <div className="h-32 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={program?.image}
                      alt={program?.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {program?.name}
                  </h3>
                  
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    program?.level === 'Undergraduate' ?'bg-blue-100 text-blue-800' :'bg-purple-100 text-purple-800'
                  }`}>
                    {program?.level}
                  </span>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 p-4 text-left font-semibold text-foreground">
                      Criteria
                    </th>
                    {programs?.map((program) => (
                      <th key={program?.id} className="border border-gray-200 p-4 text-left font-semibold text-foreground min-w-48">
                        {program?.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonCriteria?.map((criteria) => (
                    <tr key={criteria?.key} className="hover:bg-gray-50">
                      <td className="border border-gray-200 p-4 font-medium text-foreground bg-gray-50">
                        {criteria?.label}
                      </td>
                      {programs?.map((program) => (
                        <td key={program?.id} className="border border-gray-200 p-4 text-muted-foreground">
                          {criteria?.format 
                            ? criteria?.format(program?.[criteria?.key]) 
                            : program?.[criteria?.key] || 'N/A'
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200">
              <Button variant="default">
                <Icon name="Download" size={16} className="mr-2" />
                Download Comparison
              </Button>
              <Button variant="outline">
                <Icon name="Share" size={16} className="mr-2" />
                Share Comparison
              </Button>
              <Button variant="outline">
                <Icon name="BookOpen" size={16} className="mr-2" />
                View Detailed Curriculum
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;