import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const AchievementCard = ({ achievement }) => {
  return (
    <div className="bg-white rounded-lg shadow-brand overflow-hidden hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={achievement?.image}
          alt={achievement?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
            {achievement?.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
            <div className="flex items-center text-sm font-medium text-foreground">
              <Icon name="Trophy" size={16} className="text-accent mr-1" />
              {achievement?.award}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{achievement?.title}</h3>
        <p className="text-muted-foreground mb-4">{achievement?.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-foreground">
            <Icon name="User" size={16} className="text-primary mr-2" />
            {achievement?.student}
          </div>
          <div className="flex items-center text-sm text-foreground">
            <Icon name="GraduationCap" size={16} className="text-primary mr-2" />
            {achievement?.department}
          </div>
          <div className="flex items-center text-sm text-foreground">
            <Icon name="Calendar" size={16} className="text-primary mr-2" />
            {achievement?.date}
          </div>
          {achievement?.mentor && (
            <div className="flex items-center text-sm text-foreground">
              <Icon name="UserCheck" size={16} className="text-primary mr-2" />
              Mentor: {achievement?.mentor}
            </div>
          )}
        </div>
        
        {achievement?.highlights && (
          <div className="space-y-2">
            <h4 className="font-medium text-foreground">Key Highlights:</h4>
            <div className="space-y-1">
              {achievement?.highlights?.map((highlight, index) => (
                <div key={index} className="flex items-start text-sm text-muted-foreground">
                  <Icon name="Check" size={14} className="text-success mr-2 mt-0.5 flex-shrink-0" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;