import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AdmissionHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                <Icon name="Calendar" size={16} className="mr-2" />
                Admissions Open for 2024-25
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Your Engineering
                <span className="block text-accent">Journey Starts Here</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Join DYPCET's legacy of excellence with our streamlined admission process. 
                From application to enrollment, we guide you every step of the way.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Icon name="FileText" size={20} className="mr-2" />
                Start Application
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-brand-lg">
              <h3 className="text-2xl font-bold mb-6">Quick Application Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                  <span className="font-medium">Application Deadline</span>
                  <span className="text-accent font-bold">31st March 2025</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                  <span className="font-medium">Seats Available</span>
                  <span className="text-success font-bold">480+ Seats</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/20 rounded-lg">
                  <span className="font-medium">Application Fee</span>
                  <span className="font-bold">₹1,200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionHero;