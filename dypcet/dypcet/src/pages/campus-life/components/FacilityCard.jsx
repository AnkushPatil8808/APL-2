import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FacilityCard = ({ facility }) => {
  return (
    <div className="bg-white rounded-lg shadow-brand overflow-hidden hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={facility?.image}
          alt={facility?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            {facility?.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{facility?.name}</h3>
        <p className="text-muted-foreground mb-4">{facility?.description}</p>
        
        <div className="space-y-2 mb-4">
          {facility?.features?.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-foreground">
              <Icon name="Check" size={16} className="text-success mr-2" />
              {feature}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="MapPin" size={16} className="mr-1" />
            {facility?.location}
          </div>
          <button className="text-primary hover:text-primary/80 text-sm font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;