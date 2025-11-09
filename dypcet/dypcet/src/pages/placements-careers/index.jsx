import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PlacementStats from './components/PlacementStats';
import RecruiterTestimonials from './components/RecruiterTestimonials';
import IndustryPartnerships from './components/IndustryPartnerships';
import AlumniSuccess from './components/AlumniSuccess';
import PlacementDashboard from './components/PlacementDashboard';
import CareerServices from './components/CareerServices';

const PlacementsCareers = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'dashboard', label: 'Dashboard', icon: 'PieChart' },
    { id: 'partnerships', label: 'Industry Partners', icon: 'Building2' },
    { id: 'alumni', label: 'Alumni Success', icon: 'Users' },
    { id: 'services', label: 'Career Services', icon: 'GraduationCap' }
  ];

  const quickStats = [
    {
      id: 1,
      title: "Placement Rate",
      value: "94.2%",
      description: "Students placed in 2023-24",
      icon: "TrendingUp",
      color: "text-success"
    },
    {
      id: 2,
      title: "Average Package",
      value: "₹8.5 LPA",
      description: "Across all branches",
      icon: "IndianRupee",
      color: "text-primary"
    },
    {
      id: 3,
      title: "Top Package",
      value: "₹45 LPA",
      description: "Highest offer 2024",
      icon: "Award",
      color: "text-accent"
    },
    {
      id: 4,
      title: "Companies",
      value: "250+",
      description: "Recruiting partners",
      icon: "Building2",
      color: "text-secondary"
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-12">
            <PlacementStats />
            <RecruiterTestimonials />
          </div>
        );
      case 'dashboard':
        return <PlacementDashboard />;
      case 'partnerships':
        return <IndustryPartnerships />;
      case 'alumni':
        return <AlumniSuccess />;
      case 'services':
        return <CareerServices />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Placements & Careers - DYPCET Digital Campus</title>
        <meta name="description" content="Explore DYPCET's excellent placement record, industry partnerships, and career development services. Join our network of successful alumni across leading companies." />
        <meta name="keywords" content="DYPCET placements, engineering careers, industry partnerships, alumni success, career services" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Briefcase" size={16} />
              <span>Industry Connect & Career Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Placements & 
              <span className="text-primary"> Careers</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Building confidence in career outcomes through industry partnerships, comprehensive placement support, and alumni success stories that inspire the next generation of engineers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Download Placement Report
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Schedule Career Counseling
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats?.map((stat) => (
              <div 
                key={stat?.id}
                className="bg-card/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-brand hover:shadow-brand-lg transition-all duration-300 hover-lift border border-border"
              >
                <div className={`inline-flex p-3 rounded-full bg-muted mb-4 ${stat?.color}`}>
                  <Icon name={stat?.icon} size={24} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{stat?.value}</h3>
                <p className="text-sm font-medium text-foreground mb-1">{stat?.title}</p>
                <p className="text-xs text-muted-foreground">{stat?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="bg-card border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'text-primary border-primary bg-primary/5' :'text-muted-foreground border-transparent hover:text-foreground hover:border-muted'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderTabContent()}
        </div>
      </main>
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join DYPCET's legacy of successful engineers and build a rewarding career with our comprehensive placement support and industry connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Apply for Admission
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Icon name="Phone" size={20} className="mr-2" />
              Contact Placement Cell
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                  <Icon name="GraduationCap" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">DYPCET</div>
                  <div className="text-sm text-white/70">Digital Campus</div>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Empowering engineers for tomorrow's challenges through excellence in education and industry collaboration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="/homepage" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/programs-departments" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="/admissions" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="/campus-life" className="hover:text-white transition-colors">Campus Life</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Placement Support</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#career-services" className="hover:text-white transition-colors">Career Services</a></li>
                <li><a href="#industry-partners" className="hover:text-white transition-colors">Industry Partners</a></li>
                <li><a href="#alumni-network" className="hover:text-white transition-colors">Alumni Network</a></li>
                <li><a href="#placement-stats" className="hover:text-white transition-colors">Placement Statistics</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Kolhapur, Maharashtra</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+91 231 260 1000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>placements@dypcet.ac.in</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
            <p>&copy; {new Date().getFullYear()} D. Y. Patil College of Engineering & Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlacementsCareers;