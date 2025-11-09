import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickAccessTiles = () => {
  const userPersonas = [
    {
      id: 1,
      title: "Prospective Students",
      description: "Explore programs, admission process, and campus life",
      icon: "GraduationCap",
      color: "from-blue-500 to-blue-600",
      link: "/admissions",
      features: ["Program Explorer", "Admission Guide", "Campus Tour"]
    },
    {
      id: 2,
      title: "Current Students",
      description: "Access academic resources, schedules, and services",
      icon: "BookOpen",
      color: "from-green-500 to-green-600",
      link: "/campus-life",
      features: ["Academic Portal", "Exam Schedules", "Campus Services"]
    },
    {
      id: 3,
      title: "Industry Partners",
      description: "Explore collaboration and recruitment opportunities",
      icon: "Building2",
      color: "from-purple-500 to-purple-600",
      link: "/placements-careers",
      features: ["Placement Stats", "Collaboration", "Recruitment"]
    },
    {
      id: 4,
      title: "Alumni Network",
      description: "Stay connected, mentor students, and give back",
      icon: "Users",
      color: "from-orange-500 to-orange-600",
      link: "/campus-life",
      features: ["Alumni Directory", "Mentorship", "Events"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Welcome to DYPCET Digital Campus
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your pathway to explore our comprehensive ecosystem designed for every member of our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userPersonas?.map((persona) => (
            <Link
              key={persona?.id}
              to={persona?.link}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2 border border-gray-200">
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${persona?.color} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon name={persona?.icon} size={32} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/10 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {persona?.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {persona?.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-4">
                    {persona?.features?.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors duration-200">
                    <span>Get Started</span>
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">75+</div>
            <div className="text-sm text-muted-foreground">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15,000+</div>
            <div className="text-sm text-muted-foreground">Alumni Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Industry Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Placement Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessTiles;