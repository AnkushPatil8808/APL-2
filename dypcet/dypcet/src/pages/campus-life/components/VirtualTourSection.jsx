import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const virtualTours = [
{
  id: 'campus-overview',
  title: 'Campus Overview',
  description: 'Complete 360° tour of DYPCET campus including all major buildings and facilities',
  duration: '15 minutes',
  highlights: ['Main Building', 'Academic Blocks', 'Sports Complex', 'Hostels'],
  thumbnail: "https://images.unsplash.com/photo-1661776724291-2c55f1da5d44",
  thumbnailAlt: 'Aerial view of modern engineering college campus with multiple academic buildings and green spaces'
},
{
  id: 'laboratories',
  title: 'Laboratory Tour',
  description: 'Explore state-of-the-art laboratories and research facilities across all departments',
  duration: '20 minutes',
  highlights: ['Computer Labs', 'Mechanical Workshop', 'Electronics Lab', 'Civil Materials Lab'],
  thumbnail: "https://images.unsplash.com/photo-1656431756476-4dc873d79678",
  thumbnailAlt: 'Modern engineering laboratory with advanced equipment and students conducting experiments'
},
{
  id: 'hostel-life',
  title: 'Hostel Experience',
  description: 'Virtual walkthrough of hostel facilities, rooms, mess, and recreational areas',
  duration: '12 minutes',
  highlights: ['Hostel Rooms', 'Mess Hall', 'Common Areas', 'Recreation Facilities'],
  thumbnail: "https://images.unsplash.com/photo-1702014859878-5d4743176d28",
  thumbnailAlt: 'Modern hostel room with study desk, bed, and storage facilities for engineering students'
},
{
  id: 'sports-facilities',
  title: 'Sports & Recreation',
  description: 'Tour of sports complex, gymnasium, outdoor courts, and fitness facilities',
  duration: '10 minutes',
  highlights: ['Gymnasium', 'Cricket Ground', 'Basketball Court', 'Swimming Pool'],
  thumbnail: "https://images.unsplash.com/photo-1709949908244-6ebd4fc55b50",
  thumbnailAlt: 'Modern sports complex with basketball court, gymnasium equipment, and athletic facilities'
}];

const VirtualTourSection = () => {
  const [selectedTour, setSelectedTour] = useState('campus-overview');

  const currentTour = virtualTours?.find((tour) => tour?.id === selectedTour);

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Virtual Campus Tours
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience DYPCET campus from anywhere with our immersive 360° virtual tours. 
            Explore facilities, laboratories, hostels, and more at your own pace.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tour Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold text-foreground mb-6">Choose Your Tour</h3>
            <div className="space-y-4">
              {virtualTours?.map((tour) =>
              (<button
                key={tour?.id}
                onClick={() => setSelectedTour(tour?.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedTour === tour?.id ?
                'border-primary bg-primary/5' : 'border-gray-200 bg-white hover:border-primary/50'}`
                }>

                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{tour?.title}</h4>
                    <Icon
                    name="Clock"
                    size={16}
                    className="text-muted-foreground flex-shrink-0 ml-2" />

                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{tour?.description}</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{tour?.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{tour?.highlights?.length} locations</span>
                  </div>
                </button>)
              )}
            </div>
          </div>

          {/* Tour Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-brand overflow-hidden">
              <div className="relative h-96 bg-gray-900">
                <img
                  src={currentTour?.thumbnail}
                  alt={currentTour?.thumbnailAlt}
                  className="w-full h-full object-cover opacity-80" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30">

                    <Icon name="Play" size={24} className="mr-2" />
                    Start Virtual Tour
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  360° Interactive Tour
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {currentTour?.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  {currentTour?.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {currentTour?.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Tour Highlights:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentTour?.highlights?.map((highlight, index) =>
                    <div key={index} className="flex items-center text-sm text-foreground">
                        <Icon name="MapPin" size={14} className="text-primary mr-2" />
                        {highlight}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button variant="default" className="flex-1">
                    <Icon name="Play" size={16} className="mr-2" />
                    Start Tour
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="Download" size={16} className="mr-2" />
                    Download App
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Features */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Smartphone" size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Mobile Compatible</h3>
            <p className="text-muted-foreground">
              Access tours on any device - desktop, tablet, or smartphone with smooth navigation.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="RotateCcw" size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">360° Experience</h3>
            <p className="text-muted-foreground">
              Full panoramic views with interactive hotspots and detailed information overlays.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Headphones" size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Audio Guide</h3>
            <p className="text-muted-foreground">
              Professional narration with background information and student testimonials.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default VirtualTourSection;