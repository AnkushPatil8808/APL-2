import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LiveUpdatesSection = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsUpdates = [
  {
    id: 1,
    title: "DYPCET Students Win National Robotics Championship 2024",
    summary: "Team DYPCET Innovators secured first place in the All India Robotics Competition with their autonomous navigation system.",
    timestamp: "2 hours ago",
    category: "Achievement",
    image: "https://images.unsplash.com/photo-1731149791398-404c444ed5c9",
    imageAlt: "Students working on advanced robotics project with mechanical components and circuit boards in engineering laboratory",
    link: "/campus-life"
  },
  {
    id: 2,
    title: "New AI & Machine Learning Lab Inaugurated",
    summary: "State-of-the-art facility equipped with latest GPU clusters and research infrastructure opens for student projects.",
    timestamp: "1 day ago",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee",
    imageAlt: "Modern computer laboratory with high-end workstations, multiple monitors, and students working on AI projects",
    link: "/research-innovation"
  },
  {
    id: 3,
    title: "Industry Partnership with Tech Mahindra Announced",
    summary: "New collaboration brings internship opportunities and research funding for IoT and cybersecurity projects.",
    timestamp: "3 days ago",
    category: "Partnership",
    image: "https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f",
    imageAlt: "Professional business handshake between industry executives and college administrators in modern conference room",
    link: "/placements-careers"
  }];


  const achievements = [
  {
    id: 1,
    title: "Research Paper Published in IEEE Journal",
    student: "Priya Sharma, Final Year CSE",
    description: "Breakthrough research on quantum computing algorithms recognized internationally",
    icon: "Award",
    color: "text-yellow-600"
  },
  {
    id: 2,
    title: "Startup Funding Success",
    student: "Rahul Patil, Alumni 2023",
    description: "EdTech startup receives ₹2 crore seed funding from leading venture capital firm",
    icon: "TrendingUp",
    color: "text-green-600"
  },
  {
    id: 3,
    title: "International Conference Speaker",
    student: "Dr. Anjali Desai, Faculty",
    description: "Keynote presentation at Global Engineering Innovation Summit in Singapore",
    icon: "Globe",
    color: "text-blue-600"
  }];


  const events = [
  {
    id: 1,
    title: "TechFest 2024",
    date: "Nov 15-17, 2024",
    description: "Annual technical festival featuring competitions, workshops, and industry talks",
    status: "upcoming",
    registrations: "2,500+"
  },
  {
    id: 2,
    title: "Industry Interaction Series",
    date: "Nov 20, 2024",
    description: "Guest lectures by industry experts on emerging technologies and career opportunities",
    status: "upcoming",
    registrations: "800+"
  },
  {
    id: 3,
    title: "Research Symposium",
    date: "Dec 5, 2024",
    description: "Showcase of student and faculty research projects with industry collaboration opportunities",
    status: "upcoming",
    registrations: "1,200+"
  }];


  const tabs = [
  { id: 'news', label: 'Latest News', icon: 'Newspaper' },
  { id: 'achievements', label: 'Achievements', icon: 'Trophy' },
  { id: 'events', label: 'Upcoming Events', icon: 'Calendar' }];


  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Live Campus Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with real-time updates on achievements, events, and institutional developments
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg p-2 shadow-brand max-w-md mx-auto">
          {tabs?.map((tab) =>
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === tab?.id ?
            'bg-primary text-white shadow-sm' :
            'text-muted-foreground hover:text-primary hover:bg-muted'}`
            }>

              <Icon name={tab?.icon} size={16} className="mr-2" />
              <span className="hidden sm:inline">{tab?.label}</span>
              <span className="sm:hidden">{tab?.label?.split(' ')?.[0]}</span>
            </button>
          )}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'news' &&
          <div className="space-y-6">
              {newsUpdates?.map((news) =>
            <Link
              key={news?.id}
              to={news?.link}
              className="block group">

                  <div className="bg-white rounded-lg shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden border border-gray-200">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <Image
                      src={news?.image}
                      alt={news?.imageAlt}
                      className="w-full h-48 md:h-full object-cover" />

                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {news?.category}
                          </span>
                          <span className="text-sm text-muted-foreground">{news?.timestamp}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                          {news?.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {news?.summary}
                        </p>
                        <div className="flex items-center text-primary font-medium text-sm">
                          <span>Read More</span>
                          <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
            )}
            </div>
          }

          {activeTab === 'achievements' &&
          <div className="grid gap-6">
              {achievements?.map((achievement) =>
            <div key={achievement?.id} className="bg-white rounded-lg shadow-brand p-6 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-gray-100 ${achievement?.color}`}>
                      <Icon name={achievement?.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {achievement?.title}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-2">
                        {achievement?.student}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement?.description}
                      </p>
                    </div>
                  </div>
                </div>
            )}
            </div>
          }

          {activeTab === 'events' &&
          <div className="grid gap-6">
              {events?.map((event) =>
            <div key={event?.id} className="bg-white rounded-lg shadow-brand p-6 border border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {event?.title}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {event?.date}
                      </p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {event?.registrations} registered
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {event?.description}
                  </p>
                  <Link
                to="/campus-life"
                className="inline-flex items-center text-primary font-medium text-sm hover:text-accent transition-colors duration-200">

                    <span>Learn More</span>
                    <Icon name="ExternalLink" size={16} className="ml-2" />
                  </Link>
                </div>
            )}
            </div>
          }
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link to="/campus-life">
            <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">
              View All Updates
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>);

};

export default LiveUpdatesSection;