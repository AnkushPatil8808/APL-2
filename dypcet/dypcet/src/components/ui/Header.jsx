import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/homepage', label: 'Home' },
    { path: '/programs-departments', label: 'Programs' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/campus-life', label: 'Campus Life' },
    { path: '/research-innovation', label: 'Research' }
  ];

  const secondaryItems = [
    { path: '/placements-careers', label: 'Placements & Careers' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location?.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-brand border-b border-gray-200' 
          : 'bg-white'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            onClick={closeMenu}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-engineering">
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 text-white"
                fill="currentColor"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-primary">DYPCET</div>
              <div className="text-xs text-muted-foreground font-medium -mt-1">Digital Campus</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-muted ${
                  isActiveLink(item?.path)
                    ? 'text-primary bg-primary/5 border-b-2 border-primary' :'text-foreground hover:text-primary'
                }`}
              >
                {item?.label}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-all duration-200">
                More
                <Icon name="ChevronDown" size={16} className="ml-1" />
              </button>
              
              <div className="absolute right-0 top-full mt-1 w-56 bg-white rounded-lg shadow-brand-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {secondaryItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        isActiveLink(item?.path)
                          ? 'text-primary bg-primary/5' :'text-foreground hover:text-primary hover:bg-muted'
                      }`}
                    >
                      {item?.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 my-2"></div>
                  <a 
                    href="#contact" 
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                  <a 
                    href="#virtual-tour" 
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
                  >
                    Virtual Tour
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('#virtual-tour', '_blank')}
            >
              <Icon name="Play" size={16} className="mr-2" />
              Virtual Tour
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => window.location.href = '/admissions'}
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-brand ${
            isMenuOpen 
              ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-4 bg-white border-t border-gray-200 shadow-brand">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                    isActiveLink(item?.path)
                      ? 'text-primary bg-primary/5 border-l-4 border-primary' :'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item?.label}
                </Link>
              ))}
              
              {secondaryItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                    isActiveLink(item?.path)
                      ? 'text-primary bg-primary/5 border-l-4 border-primary' :'text-foreground hover:text-primary hover:bg-muted'
                  }`}
                >
                  {item?.label}
                </Link>
              ))}
            </nav>
            
            <div className="mt-6 pt-4 border-t border-gray-200 space-y-3">
              <Button 
                variant="outline" 
                fullWidth
                onClick={() => {
                  closeMenu();
                  window.open('#virtual-tour', '_blank');
                }}
              >
                <Icon name="Play" size={16} className="mr-2" />
                Virtual Tour
              </Button>
              <Button 
                variant="default" 
                fullWidth
                onClick={() => {
                  closeMenu();
                  window.location.href = '/admissions';
                }}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;