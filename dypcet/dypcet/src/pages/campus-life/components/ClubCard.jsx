import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ClubCard = ({ club }) => {
  return (
    <div className="bg-white rounded-lg shadow-brand overflow-hidden hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={club?.image}
          alt={club?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
            {club?.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{club?.name}</h3>
            <p className="text-muted-foreground">{club?.established}</p>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Users" size={16} className="mr-1" />
            {club?.members}
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4">{club?.description}</p>
        
        <div className="space-y-2 mb-4">
          <h4 className="font-medium text-foreground">Activities:</h4>
          <div className="flex flex-wrap gap-2">
            {club?.activities?.map((activity, index) => (
              <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                {activity}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm">
            <Icon name="Calendar" size={16} className="text-primary mr-2" />
            Meets {club?.meetingSchedule}
          </div>
          <div className="flex items-center text-sm">
            <Icon name="MapPin" size={16} className="text-primary mr-2" />
            {club?.location}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1">
            Learn More
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            Join Club
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;