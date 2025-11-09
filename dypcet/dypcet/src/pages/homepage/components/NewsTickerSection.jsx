import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const NewsTickerSection = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const newsItems = [
    {
      id: 1,
      text: "🏆 DYPCET students win National Robotics Championship 2024 with innovative autonomous navigation system",
      link: "/campus-life",
      category: "Achievement",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      text: "🚀 New AI & Machine Learning Lab inaugurated with state-of-the-art GPU clusters and research infrastructure",
      link: "/research-innovation",
      category: "Infrastructure",
      timestamp: "1 day ago"
    },
    {
      id: 3,
      text: "🤝 Industry partnership with Tech Mahindra announced for IoT and cybersecurity research collaboration",
      link: "/placements-careers",
      category: "Partnership",
      timestamp: "2 days ago"
    },
    {
      id: 4,
      text: "📚 DYPCET faculty research paper published in prestigious IEEE Journal on Quantum Computing",
      link: "/research-innovation",
      category: "Research",
      timestamp: "3 days ago"
    },
    {
      id: 5,
      text: "🎓 100% placement record achieved for batch 2024 with average package of ₹8.5L",
      link: "/placements-careers",
      category: "Placement",
      timestamp: "4 days ago"
    },
    {
      id: 6,
      text: "🌟 TechFest 2024 registration opens - India\'s largest student technical festival",
      link: "/campus-life",
      category: "Event",
      timestamp: "5 days ago"
    }
  ];

  const quickLinks = [
    { label: "Admission Portal", link: "/admissions", icon: "GraduationCap" },
    { label: "Academic Calendar", link: "/programs-departments", icon: "Calendar" },
    { label: "Examination Results", link: "/campus-life", icon: "FileText" },
    { label: "Fee Payment", link: "/admissions", icon: "CreditCard" }
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, newsItems?.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToNews = (index) => {
    setCurrentNewsIndex(index);
  };

  const currentNews = newsItems?.[currentNewsIndex];

  return (
    <section className="bg-primary text-white py-4 border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          {/* News Ticker */}
          <div className="flex-1 flex items-center space-x-4">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium uppercase tracking-wider">Live Updates</span>
            </div>

            <div className="flex-1 overflow-hidden">
              <Link
                to={currentNews?.link}
                className="block hover:text-accent transition-colors duration-200"
              >
                <div className="animate-fade-in">
                  <p className="text-sm lg:text-base font-medium truncate">
                    {currentNews?.text}
                  </p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-white/70">{currentNews?.category}</span>
                    <span className="text-xs text-white/70">{currentNews?.timestamp}</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* News Controls */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <button
                onClick={togglePlayPause}
                className="p-1 rounded hover:bg-white/10 transition-colors duration-200"
                aria-label={isPlaying ? "Pause news ticker" : "Play news ticker"}
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
              </button>
              
              <div className="hidden sm:flex space-x-1">
                {newsItems?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToNews(index)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                      index === currentNewsIndex 
                        ? 'bg-accent scale-110' :'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to news ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-1 lg:space-x-2">
            <span className="text-xs text-white/70 mr-2 hidden lg:inline">Quick Access:</span>
            {quickLinks?.map((link, index) => (
              <Link
                key={index}
                to={link?.link}
                className="flex items-center space-x-1 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-md text-xs font-medium transition-colors duration-200"
              >
                <Icon name={link?.icon} size={14} />
                <span className="hidden sm:inline">{link?.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile News Navigation */}
        <div className="lg:hidden mt-4 flex justify-center space-x-2">
          {newsItems?.map((_, index) => (
            <button
              key={index}
              onClick={() => goToNews(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentNewsIndex 
                  ? 'bg-accent scale-110' :'bg-white/40'
              }`}
              aria-label={`Go to news ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsTickerSection;