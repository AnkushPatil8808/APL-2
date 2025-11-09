import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import NewsTickerSection from './components/NewsTickerSection';
import QuickAccessTiles from './components/QuickAccessTiles';
import LiveUpdatesSection from './components/LiveUpdatesSection';
import ProgramExplorer from './components/ProgramExplorer';
import SocialProofSection from './components/SocialProofSection';
import CampusMapPreview from './components/CampusMapPreview';
import SocialMediaFeed from './components/SocialMediaFeed';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section with Carousel */}
        <HeroSection />
        
        {/* Live News Ticker */}
        <NewsTickerSection />
        
        {/* Quick Access for Different User Types */}
        <QuickAccessTiles />
        
        {/* Live Campus Updates */}
        <LiveUpdatesSection />
        
        {/* Interactive Program Explorer */}
        <ProgramExplorer />
        
        {/* Social Proof & Testimonials */}
        <SocialProofSection />
        
        {/* Campus Map Preview */}
        <CampusMapPreview />
        
        {/* Social Media Integration */}
        <SocialMediaFeed />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* College Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold">DYPCET</div>
                  <div className="text-white/80 text-sm">College of Engineering Kolhapur</div>
                </div>
              </div>
              <p className="text-white/80 mb-4 leading-relaxed">
                Established in 1947, DYPCET has been at the forefront of engineering education, 
                producing industry-ready professionals and fostering innovation for over 75 years.
              </p>
              <div className="text-white/80 text-sm">
                <p>Shivaji University Campus</p>
                <p>Kolhapur, Maharashtra 416004</p>
                <p>Phone: +91-231-2609000</p>
                <p>Email: info@dypcet.ac.in</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-white/80">
                <li><a href="/admissions" className="hover:text-white transition-colors">Admissions</a></li>
                <li><a href="/programs-departments" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="/placements-careers" className="hover:text-white transition-colors">Placements</a></li>
                <li><a href="/research-innovation" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="/campus-life" className="hover:text-white transition-colors">Campus Life</a></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-3 mb-4">
                <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <p className="text-white/80 text-sm">
                Follow us for latest updates and campus news
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80 text-sm">
            <p>&copy; {new Date()?.getFullYear()} College of Engineering Kolhapur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;