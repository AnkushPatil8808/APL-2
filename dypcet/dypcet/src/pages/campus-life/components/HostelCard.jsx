import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HostelCard = ({ hostel }) => {
  return (
    <div className="bg-white rounded-lg shadow-brand overflow-hidden">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={hostel?.image}
          alt={hostel?.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            hostel?.availability === 'Available' ?'bg-success text-white' :'bg-warning text-white'
          }`}>
            {hostel?.availability}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{hostel?.name}</h3>
            <p className="text-muted-foreground">{hostel?.type}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">₹{hostel?.fee?.toLocaleString('en-IN')}</div>
            <div className="text-sm text-muted-foreground">per year</div>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4">{hostel?.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-sm">
            <Icon name="Users" size={16} className="text-primary mr-2" />
            {hostel?.capacity} students
          </div>
          <div className="flex items-center text-sm">
            <Icon name="Bed" size={16} className="text-primary mr-2" />
            {hostel?.roomType}
          </div>
          <div className="flex items-center text-sm">
            <Icon name="Utensils" size={16} className="text-primary mr-2" />
            {hostel?.mess}
          </div>
          <div className="flex items-center text-sm">
            <Icon name="Shield" size={16} className="text-primary mr-2" />
            24/7 Security
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <h4 className="font-medium text-foreground">Amenities:</h4>
          <div className="flex flex-wrap gap-2">
            {hostel?.amenities?.map((amenity, index) => (
              <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                {amenity}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex-1">
            Virtual Tour
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            Book Visit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HostelCard;