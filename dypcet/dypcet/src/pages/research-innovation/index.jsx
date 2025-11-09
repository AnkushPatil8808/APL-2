import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ResearchHero from './components/ResearchHero';
import ResearchAreas from './components/ResearchAreas';
import FacultyResearch from './components/FacultyResearch';
import StudentInnovations from './components/StudentInnovations';
import IndustryCollaborations from './components/IndustryCollaborations';
import ResearchFacilities from './components/ResearchFacilities';
import PublicationsDatabase from './components/PublicationsDatabase';

const ResearchInnovation = () => {
  return (
    <>
      <Helmet>
        <title>Research & Innovation - DYPCET Digital Campus</title>
        <meta name="description" content="Explore DYPCET's research excellence with faculty projects, student innovations, industry collaborations, and world-class facilities driving technological advancement." />
        <meta name="keywords" content="research, innovation, faculty research, student projects, industry collaboration, publications, research facilities, DYPCET" />
        <meta property="og:title" content="Research & Innovation - DYPCET Digital Campus" />
        <meta property="og:description" content="Discover groundbreaking research and innovation at DYPCET with cutting-edge facilities, expert faculty, and industry partnerships." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/research-innovation" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <ResearchHero />
          
          {/* Research Areas */}
          <ResearchAreas />
          
          {/* Faculty Research */}
          <FacultyResearch />
          
          {/* Student Innovations */}
          <StudentInnovations />
          
          {/* Industry Collaborations */}
          <IndustryCollaborations />
          
          {/* Research Facilities */}
          <ResearchFacilities />
          
          {/* Publications Database */}
          <PublicationsDatabase />
        </main>
      </div>
    </>
  );
};

export default ResearchInnovation;