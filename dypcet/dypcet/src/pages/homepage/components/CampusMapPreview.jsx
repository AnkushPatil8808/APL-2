import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const CampusMapPreview = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const campusLocations = [
    {
      id: 1,
      name: "Main Academic Block",
      description: "Central hub with lecture halls, laboratories, and faculty offices",
      coordinates: { x: 35, y: 25 },
      icon: "Building",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Research & Innovation Center",
      description: "State-of-the-art research facilities and innovation labs",
      coordinates: { x: 65, y: 30 },
      icon: "Microscope",
      color: "bg-purple-500"
    },
    {
      id: 3,
      name: "Central Library",
      description: "Modern library with digital resources and study spaces",
      coordinates: { x: 50, y: 45 },
      icon: "BookOpen",
      color: "bg-green-500"
    },
    {
      id: 4,
      name: "Student Hostels",
      description: "Comfortable accommodation with modern amenities",
      coordinates: { x: 20, y: 60 },
      icon: "Home",
      color: "bg-orange-500"
    },
    {
      id: 5,
      name: "Sports Complex",
      description: "Comprehensive sports facilities and fitness center",
      coordinates: { x: 75, y: 65 },
      icon: "Trophy",
      color: "bg-red-500"
    },
    {
      id: 6,
      name: "Cafeteria & Food Court",
      description: "Multiple dining options and recreational spaces",
      coordinates: { x: 45, y: 70 },
      icon: "Coffee",
      color: "bg-yellow-500"
    }
  ];

  const campusStats = [
    { label: "Campus Area", value: "150 Acres", icon: "MapPin" },
    { label: "Buildings", value: "25+", icon: "Building2" },
    { label: "Laboratories", value: "80+", icon: "FlaskConical" },
    { label: "Hostels", value: "8", icon: "Home" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Explore Our Campus
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our world-class facilities spread across 150 acres of modern infrastructure designed for excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Campus Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-xl p-8 aspect-square relative overflow-hidden shadow-brand">
              {/* Campus Background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Campus Roads */}
                  <path d="M10,50 Q50,30 90,50" stroke="#6B7280" strokeWidth="0.5" fill="none" />
                  <path d="M50,10 Q30,50 50,90" stroke="#6B7280" strokeWidth="0.5" fill="none" />
                  
                  {/* Green Spaces */}
                  <circle cx="25" cy="35" r="8" fill="#10B981" opacity="0.3" />
                  <circle cx="75" cy="45" r="6" fill="#10B981" opacity="0.3" />
                  <circle cx="40" cy="80" r="10" fill="#10B981" opacity="0.3" />
                </svg>
              </div>

              {/* Location Markers */}
              {campusLocations?.map((location) => (
                <button
                  key={location?.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`absolute w-8 h-8 rounded-full ${location?.color} text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 z-10`}
                  style={{
                    left: `${location?.coordinates?.x}%`,
                    top: `${location?.coordinates?.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Icon name={location?.icon} size={16} />
                </button>
              ))}

              {/* Selected Location Info */}
              {selectedLocation && (
                <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-brand p-4 z-20">
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-full ${selectedLocation?.color} text-white flex items-center justify-center flex-shrink-0`}>
                      <Icon name={selectedLocation?.icon} size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {selectedLocation?.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {selectedLocation?.description}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Icon name="X" size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Map Legend */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="text-xs font-medium text-foreground mb-2">Campus Map</div>
                <div className="text-xs text-muted-foreground">Click markers to explore</div>
              </div>
            </div>

            {/* Virtual Tour CTA */}
            <div className="mt-6 text-center">
              <Link to="/campus-life">
                <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
                  <Icon name="Play" size={20} className="mr-2" />
                  Take Virtual Tour
                </button>
              </Link>
            </div>
          </div>

          {/* Campus Information */}
          <div className="space-y-8">
            {/* Campus Stats */}
            <div className="grid grid-cols-2 gap-6">
              {campusStats?.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-brand border border-gray-200">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Icon name={stat?.icon} size={24} />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
                  <div className="text-sm text-muted-foreground">{stat?.label}</div>
                </div>
              ))}
            </div>

            {/* Location List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Facilities</h3>
              {campusLocations?.map((location) => (
                <div
                  key={location?.id}
                  onClick={() => setSelectedLocation(location)}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-brand border border-gray-200 hover:border-primary/30 cursor-pointer transition-colors duration-200"
                >
                  <div className={`w-10 h-10 rounded-full ${location?.color} text-white flex items-center justify-center flex-shrink-0`}>
                    <Icon name={location?.icon} size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{location?.name}</h4>
                    <p className="text-sm text-muted-foreground">{location?.description}</p>
                  </div>
                  <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
                </div>
              ))}
            </div>

            {/* Google Maps Integration */}
            <div className="bg-white rounded-lg shadow-brand overflow-hidden border border-gray-200">
              <div className="p-4 border-b border-gray-200">
                <h4 className="font-semibold text-foreground flex items-center">
                  <Icon name="MapPin" size={20} className="mr-2 text-primary" />
                  Campus Location
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Shivaji University Campus, Kolhapur, Maharashtra 416004
                </p>
              </div>
              <div className="h-48">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title="DYPCET Campus Location"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=16.7050,74.2433&z=15&output=embed"
                  className="border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusMapPreview;