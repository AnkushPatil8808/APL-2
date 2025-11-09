import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EventCard = ({ event }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    return new Date(`2000-01-01T${timeString}`)?.toLocaleTimeString('en-IN', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-brand overflow-hidden hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event?.image}
          alt={event?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <div className="bg-white rounded-lg p-2 text-center shadow-md">
            <div className="text-xs font-medium text-muted-foreground uppercase">
              {new Date(event.date)?.toLocaleDateString('en-IN', { month: 'short' })}
            </div>
            <div className="text-lg font-bold text-foreground">
              {new Date(event.date)?.getDate()}
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            event?.status === 'Upcoming' ?'bg-primary text-white' 
              : event?.status === 'Ongoing' ?'bg-success text-white' :'bg-muted text-muted-foreground'
          }`}>
            {event?.status}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-foreground mb-1">{event?.title}</h3>
          <p className="text-accent font-medium">{event?.category}</p>
        </div>
        
        <p className="text-muted-foreground mb-4">{event?.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-foreground">
            <Icon name="Calendar" size={16} className="text-primary mr-2" />
            {formatDate(event?.date)}
          </div>
          <div className="flex items-center text-sm text-foreground">
            <Icon name="Clock" size={16} className="text-primary mr-2" />
            {formatTime(event?.time)}
          </div>
          <div className="flex items-center text-sm text-foreground">
            <Icon name="MapPin" size={16} className="text-primary mr-2" />
            {event?.venue}
          </div>
          {event?.organizer && (
            <div className="flex items-center text-sm text-foreground">
              <Icon name="User" size={16} className="text-primary mr-2" />
              Organized by {event?.organizer}
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Icon name="Users" size={16} className="mr-1" />
            {event?.attendees} registered
          </div>
          <Button 
            variant={event?.status === 'Upcoming' ? 'default' : 'outline'} 
            size="sm"
            disabled={event?.status === 'Completed'}
          >
            {event?.status === 'Upcoming' ? 'Register' : 
             event?.status === 'Ongoing' ? 'Join Now' : 'View Details'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;