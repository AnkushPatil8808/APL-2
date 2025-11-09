import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import Admissions from './pages/admissions';
import PlacementsCareers from './pages/placements-careers';
import CampusLife from './pages/campus-life';
import ResearchInnovation from './pages/research-innovation';
import Homepage from './pages/homepage';
import ProgramsDepartments from './pages/programs-departments';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/placements-careers" element={<PlacementsCareers />} />
        <Route path="/campus-life" element={<CampusLife />} />
        <Route path="/research-innovation" element={<ResearchInnovation />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/programs-departments" element={<ProgramsDepartments />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
