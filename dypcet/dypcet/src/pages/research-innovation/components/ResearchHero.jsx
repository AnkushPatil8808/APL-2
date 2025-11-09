import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResearchHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent">
                <Icon name="Atom" size={24} />
                <span className="text-sm font-semibold uppercase tracking-wider">Research Excellence</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Innovation Meets
                <span className="block text-accent">Discovery</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Pioneering research that shapes the future of engineering and technology through groundbreaking discoveries and industry partnerships.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent">150+</div>
                <div className="text-sm text-white/80">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent">₹25Cr</div>
                <div className="text-sm text-white/80">Research Funding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-accent">500+</div>
                <div className="text-sm text-white/80">Publications</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Icon name="FileText" size={20} className="mr-2" />
                Research Portfolio
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Users" size={20} className="mr-2" />
                Collaborate With Us
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1624957866395-ef59c756e4d9"
                alt="Researchers working with advanced laboratory equipment and microscopes in modern research facility"
                className="w-full h-96 lg:h-[500px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-success" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Patent Filed</div>
                  <div className="text-sm text-gray-600">AI-Based System</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Impact Factor</div>
                  <div className="text-sm text-gray-600">8.5 Average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ResearchHero;