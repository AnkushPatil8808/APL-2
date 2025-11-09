import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const DepartmentCard = ({ department, onExplore }) => {
  return (
    <div className="bg-white rounded-lg shadow-brand border border-gray-200 overflow-hidden hover-lift transition-all duration-300">
      <div className="relative h-40 overflow-hidden">
        <Image
          src={department?.image}
          alt={department?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold">{department?.name}</h3>
          <p className="text-sm opacity-90">{department?.established}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {department?.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-primary">{department?.faculty}</div>
            <div className="text-xs text-muted-foreground">Faculty Members</div>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold text-primary">{department?.students}</div>
            <div className="text-xs text-muted-foreground">Students</div>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm">
            <Icon name="Award" size={14} className="mr-2 text-accent" />
            <span className="text-muted-foreground">{department?.accreditation}</span>
          </div>
          <div className="flex items-center text-sm">
            <Icon name="BookOpen" size={14} className="mr-2 text-accent" />
            <span className="text-muted-foreground">{department?.programs} Programs</span>
          </div>
          <div className="flex items-center text-sm">
            <Icon name="Microscope" size={14} className="mr-2 text-accent" />
            <span className="text-muted-foreground">{department?.labs} Specialized Labs</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            fullWidth
            onClick={() => onExplore(department)}
          >
            <Icon name="Eye" size={16} className="mr-1" />
            Explore Department
          </Button>
          <Button variant="default" size="sm" fullWidth>
            <Icon name="Play" size={16} className="mr-1" />
            Virtual Tour
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;