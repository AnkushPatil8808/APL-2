import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FacultyCard = ({ faculty }) => {
  return (
    <div className="bg-white rounded-lg shadow-brand border border-gray-200 overflow-hidden hover-lift transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={faculty?.image}
              alt={faculty?.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground truncate">
              {faculty?.name}
            </h3>
            <p className="text-sm text-primary font-medium">{faculty?.designation}</p>
            <p className="text-sm text-muted-foreground">{faculty?.department}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="GraduationCap" size={16} className="mr-2" />
            <span>{faculty?.qualification}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Calendar" size={16} className="mr-2" />
            <span>{faculty?.experience} years experience</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="BookOpen" size={16} className="mr-2" />
            <span>{faculty?.publications} publications</span>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium text-foreground mb-2">Research Areas:</h4>
          <div className="flex flex-wrap gap-1">
            {faculty?.researchAreas?.slice(0, 3)?.map((area, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
              >
                {area}
              </span>
            ))}
            {faculty?.researchAreas?.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                +{faculty?.researchAreas?.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="mt-6 flex space-x-2">
          <Button variant="outline" size="sm" fullWidth>
            <Icon name="Eye" size={16} className="mr-1" />
            View Profile
          </Button>
          <Button variant="default" size="sm" fullWidth>
            <Icon name="Mail" size={16} className="mr-1" />
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;