import React from 'react';
import Header from '../../components/ui/Header';
import AdmissionHero from './components/AdmissionHero';
import AdmissionProcess from './components/AdmissionProcess';
import EligibilityChecker from './components/EligibilityChecker';
import FeeCalculator from './components/FeeCalculator';
import ScholarshipFinder from './components/ScholarshipFinder';
// import VirtualCounseling from './components/VirtualCounseling';
import ImportantDates from './components/ImportantDates';

const Admissions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <AdmissionHero />
        <AdmissionProcess />
        <EligibilityChecker />
        <FeeCalculator />
        <ScholarshipFinder />
        {/* <VirtualCounseling /> */}
        <ImportantDates />
      </main>
    </div>
  );
};

export default Admissions;