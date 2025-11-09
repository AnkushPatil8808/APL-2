import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const heroSlides = [
  {
    id: 1,
    title: "Engineering Excellence, Industry Ready",
    subtitle: "Shaping Tomorrow\'s Engineers Today",
    description: "Join COEK\'s legacy of innovation where cutting-edge technology meets practical learning. Our graduates lead India\'s engineering revolution.",
    image: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee",
    imageAlt: "Modern engineering students working with advanced laboratory equipment and computers in a bright, well-equipped classroom",
    cta: { text: "Explore Programs", link: "/programs-departments" },
    stats: { label: "Years of Excellence", value: "75+" }
  },
  {
    id: 2,
    title: "Research & Innovation Hub",
    subtitle: "Breakthrough Discoveries Start Here",
    description: "Our state-of-the-art research facilities and expert faculty drive innovations that solve real-world challenges across industries.",
    image: "https://images.unsplash.com/photo-1707944745905-1ba3ef7c0c83",
    imageAlt: "Research laboratory with advanced scientific equipment, microscopes, and students conducting experiments in white lab coats",
    cta: { text: "Discover Research", link: "/research-innovation" },
    stats: { label: "Research Projects", value: "200+" }
  },
  {
    id: 3,
    title: "100% Placement Success",
    subtitle: "Your Career Journey Begins Here",
    description: "Top companies trust COEK graduates. Join our alumni network working at Google, Microsoft, Tata, and leading engineering firms worldwide.",
    image: "https://images.unsplash.com/photo-1573166675921-076ea6b621ce",
    imageAlt: "Professional business meeting with diverse group of young engineers in modern office conference room discussing projects",
    cta: { text: "View Placements", link: "/placements-careers" },
    stats: { label: "Average Package", value: "₹8.5L" }
  }];


  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, heroSlides?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentSlideData = heroSlides?.[currentSlide];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData?.image}
          alt={currentSlideData?.imageAlt}
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-1 bg-accent rounded-full"></div>
                <span className="text-white/90 font-medium text-sm uppercase tracking-wider">
                  {currentSlideData?.subtitle}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {currentSlideData?.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
                {currentSlideData?.description}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <Link to={currentSlideData?.cta?.link}>
                  <Button variant="default" size="lg" className="bg-accent hover:bg-accent/90">
                    {currentSlideData?.cta?.text}
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Button>
                </Link>
                
                <Link to="/campus-life">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    <Icon name="Play" size={20} className="mr-2" />
                    Campus Tour
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8">
                <div className="text-white">
                  <div className="text-3xl font-bold">{currentSlideData?.stats?.value}</div>
                  <div className="text-white/80 text-sm">{currentSlideData?.stats?.label}</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold">15,000+</div>
                  <div className="text-white/80 text-sm">Alumni Network</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-white/80 text-sm">Industry Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlayPause}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-200"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}>

            <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
          </button>
          
          <div className="flex space-x-2">
            {heroSlides?.map((_, index) =>
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ?
              'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'}`
              }
              aria-label={`Go to slide ${index + 1}`} />

            )}
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center text-white/80">
          <span className="text-xs mb-2 rotate-90 origin-center">Scroll</span>
          <div className="w-px h-8 bg-white/50"></div>
          <Icon name="ChevronDown" size={16} className="animate-bounce mt-2" />
        </div>
      </div>
    </section>);

};

export default HeroSection;