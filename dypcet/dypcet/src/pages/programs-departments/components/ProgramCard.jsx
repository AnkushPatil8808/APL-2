import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProgramCard = ({ program, onCompare, isComparing, isSelected }) => {
  return (
    <div className="bg-white rounded-lg shadow-brand border border-gray-200 overflow-hidden hover-lift transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={program?.image}
          alt={program?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            program?.level === 'Undergraduate' ?'bg-blue-100 text-blue-800' :'bg-purple-100 text-purple-800'
          }`}>
            {program?.level}
          </span>
        </div>
        {program?.isNew && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 bg-accent text-white rounded-full text-xs font-medium">
              New
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground line-clamp-2">
            {program?.name}
          </h3>
          {isComparing && (
            <button
              onClick={() => onCompare(program)}
              className={`ml-2 p-2 rounded-md transition-colors ${
                isSelected 
                  ? 'bg-primary text-white' :'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon name="Plus" size={16} />
            </button>
          )}
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {program?.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Clock" size={16} className="mr-2" />
            <span>{program?.duration}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Users" size={16} className="mr-2" />
            <span>{program?.seats} seats available</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Award" size={16} className="mr-2" />
            <span>AICTE Approved</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="text-sm">
            <span className="text-muted-foreground">Starting from</span>
            <div className="font-semibold text-primary">₹{program?.fees}/year</div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Icon name="Eye" size={16} className="mr-1" />
              View Details
            </Button>
            <Button variant="default" size="sm">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;