import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProgramCard from './components/ProgramCard';
import DepartmentCard from './components/DepartmentCard';
import FilterSidebar from './components/FilterSidebar';
import ComparisonModal from './components/ComparisonModal';
import SearchBar from './components/SearchBar';
import FacultyCard from './components/FacultyCard';

const ProgramsDepartments = () => {
  const [activeTab, setActiveTab] = useState('programs');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isComparing, setIsComparing] = useState(false);
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [filteredResults, setFilteredResults] = useState([]);

  // Mock data for programs
  const programs = [
  {
    id: 1,
    name: "Computer Science & Engineering",
    description: "Comprehensive program covering software development, algorithms, data structures, artificial intelligence, and emerging technologies with hands-on industry projects.",
    level: "Undergraduate",
    duration: "4 Years",
    seats: 120,
    fees: "85,000",
    image: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee",
    imageAlt: "Students working on computers in modern computer lab with multiple monitors and coding interfaces",
    isNew: false,
    eligibility: "10+2 with PCM, JEE Main",
    placement: "12.5",
    accreditation: "NBA Accredited"
  },
  {
    id: 2,
    name: "Artificial Intelligence & Machine Learning",
    description: "Cutting-edge program focusing on AI algorithms, deep learning, neural networks, computer vision, and natural language processing with industry partnerships.",
    level: "Undergraduate",
    duration: "4 Years",
    seats: 60,
    fees: "95,000",
    image: "https://images.unsplash.com/photo-1579803080960-3338e602608a",
    imageAlt: "Robotic arm and circuit boards representing artificial intelligence and machine learning technology",
    isNew: true,
    eligibility: "10+2 with PCM, JEE Main",
    placement: "15.2",
    accreditation: "AICTE Approved"
  },
  {
    id: 3,
    name: "Mechanical Engineering",
    description: "Traditional engineering discipline covering thermodynamics, fluid mechanics, manufacturing processes, CAD/CAM, and modern automation technologies.",
    level: "Undergraduate",
    duration: "4 Years",
    seats: 120,
    fees: "80,000",
    image: "https://images.unsplash.com/photo-1673807457059-09d5654d0169",
    imageAlt: "Industrial manufacturing facility with heavy machinery and mechanical equipment in operation",
    isNew: false,
    eligibility: "10+2 with PCM, JEE Main",
    placement: "8.5",
    accreditation: "NBA Accredited"
  },
  {
    id: 4,
    name: "Electronics & Telecommunication",
    description: "Advanced program in electronic circuits, communication systems, signal processing, embedded systems, and wireless technologies with practical applications.",
    level: "Undergraduate",
    duration: "4 Years",
    seats: 90,
    fees: "82,000",
    image: "https://images.unsplash.com/photo-1725896248701-3831cccabdd3",
    imageAlt: "Electronic circuit board with microchips and components showing telecommunications technology",
    isNew: false,
    eligibility: "10+2 with PCM, JEE Main",
    placement: "10.2",
    accreditation: "NBA Accredited"
  },
  {
    id: 5,
    name: "Civil Engineering",
    description: "Comprehensive program covering structural engineering, construction management, environmental engineering, transportation, and sustainable infrastructure development.",
    level: "Undergraduate",
    duration: "4 Years",
    seats: 120,
    fees: "75,000",
    image: "https://images.unsplash.com/photo-1676746042950-18671f22c0a6",
    imageAlt: "Construction site with concrete structures and engineering blueprints showing civil engineering work",
    isNew: false,
    eligibility: "10+2 with PCM, JEE Main",
    placement: "7.8",
    accreditation: "NBA Accredited"
  },
  {
    id: 6,
    name: "Data Science & Analytics",
    description: "Interdisciplinary program combining statistics, programming, machine learning, and business intelligence for data-driven decision making in various industries.",
    level: "Postgraduate",
    duration: "2 Years",
    seats: 40,
    fees: "120,000",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    imageAlt: "Data visualization charts and graphs on computer screens showing analytics and data science work",
    isNew: true,
    eligibility: "B.Tech/B.E. with GATE",
    placement: "18.5",
    accreditation: "AICTE Approved"
  }];


  // Mock data for departments
  const departments = [
  {
    id: 1,
    name: "Computer Engineering",
    description: "Leading department in software development, artificial intelligence, and emerging technologies with state-of-the-art laboratories and industry partnerships.",
    established: "Established 1985",
    faculty: 28,
    students: 450,
    programs: 3,
    labs: 8,
    accreditation: "NBA Accredited",
    image: "https://images.unsplash.com/photo-1656431756476-4dc873d79678",
    imageAlt: "Modern computer engineering laboratory with students working on advanced computing equipment"
  },
  {
    id: 2,
    name: "Mechanical Engineering",
    description: "Traditional engineering excellence with modern manufacturing technologies, robotics, and automation systems for comprehensive mechanical engineering education.",
    established: "Established 1960",
    faculty: 32,
    students: 520,
    programs: 2,
    labs: 12,
    accreditation: "NBA Accredited",
    image: "https://images.unsplash.com/photo-1631972241361-330c704b90f1",
    imageAlt: "Mechanical engineering workshop with precision tools and manufacturing equipment"
  },
  {
    id: 3,
    name: "Electronics & Telecommunication",
    description: "Advanced research and education in communication systems, embedded technologies, and signal processing with cutting-edge laboratory facilities.",
    established: "Established 1975",
    faculty: 24,
    students: 380,
    programs: 2,
    labs: 10,
    accreditation: "NBA Accredited",
    image: "https://images.unsplash.com/photo-1707458034304-0dadde8cc354",
    imageAlt: "Electronics laboratory with circuit boards and telecommunication equipment for hands-on learning"
  },
  {
    id: 4,
    name: "Civil Engineering",
    description: "Comprehensive infrastructure development education covering structural design, environmental engineering, and sustainable construction practices.",
    established: "Established 1965",
    faculty: 26,
    students: 480,
    programs: 2,
    labs: 9,
    accreditation: "NBA Accredited",
    image: "https://images.unsplash.com/photo-1619485338066-068eb56fe258",
    imageAlt: "Civil engineering students examining architectural blueprints and construction models"
  }];


  // Mock data for faculty
  const facultyMembers = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar Sharma",
    designation: "Professor & Head",
    department: "Computer Engineering",
    qualification: "Ph.D. in Computer Science",
    experience: 18,
    publications: 45,
    researchAreas: ["Artificial Intelligence", "Machine Learning", "Data Mining", "Computer Vision"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18036feac-1762248879237.png",
    imageAlt: "Professional headshot of middle-aged Indian professor in formal attire with glasses"
  },
  {
    id: 2,
    name: "Dr. Priya Mehta",
    designation: "Associate Professor",
    department: "Electronics & Telecommunication",
    qualification: "Ph.D. in Electronics Engineering",
    experience: 12,
    publications: 32,
    researchAreas: ["Signal Processing", "Wireless Communication", "IoT", "Embedded Systems"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15159ebf5-1762273977388.png",
    imageAlt: "Professional headshot of Indian woman professor in blue blazer with confident smile"
  },
  {
    id: 3,
    name: "Dr. Amit Patel",
    designation: "Professor",
    department: "Mechanical Engineering",
    qualification: "Ph.D. in Mechanical Engineering",
    experience: 20,
    publications: 52,
    researchAreas: ["Robotics", "Manufacturing", "Thermal Engineering", "CAD/CAM"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c2728c0-1762249088508.png",
    imageAlt: "Professional headshot of experienced Indian professor in formal shirt with engineering background"
  },
  {
    id: 4,
    name: "Dr. Sneha Joshi",
    designation: "Assistant Professor",
    department: "Civil Engineering",
    qualification: "Ph.D. in Structural Engineering",
    experience: 8,
    publications: 18,
    researchAreas: ["Structural Design", "Earthquake Engineering", "Sustainable Construction", "Smart Materials"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18036feac-1762248879237.png",
    imageAlt: "Professional headshot of young Indian woman professor in formal attire with architectural drawings background"
  }];


  // Filter and search logic
  useEffect(() => {
    let results = activeTab === 'programs' ? programs :
    activeTab === 'departments' ? departments : facultyMembers;

    // Apply search filter
    if (searchQuery) {
      results = results?.filter((item) =>
      item?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      item?.description && item?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      item?.department && item?.department?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    // Apply other filters
    Object.entries(filters)?.forEach(([key, values]) => {
      if (values && values?.length > 0) {
        results = results?.filter((item) => {
          switch (key) {
            case 'level':
              return values?.some((value) =>
              value === 'undergraduate' && item?.level === 'Undergraduate' ||
              value === 'postgraduate' && item?.level === 'Postgraduate'
              );
            case 'department':
              return values?.some((value) =>
              item?.name?.toLowerCase()?.includes(value) ||
              item?.department && item?.department?.toLowerCase()?.includes(value)
              );
            default:
              return true;
          }
        });
      }
    });

    setFilteredResults(results);
  }, [searchQuery, filters, activeTab]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (category, values) => {
    setFilters((prev) => ({
      ...prev,
      [category]: values
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  const handleCompareProgram = (program) => {
    if (selectedPrograms?.find((p) => p?.id === program?.id)) {
      setSelectedPrograms((prev) => prev?.filter((p) => p?.id !== program?.id));
    } else if (selectedPrograms?.length < 3) {
      setSelectedPrograms((prev) => [...prev, program]);
    }
  };

  const handleRemoveFromComparison = (programId) => {
    setSelectedPrograms((prev) => prev?.filter((p) => p?.id !== programId));
  };

  const tabs = [
  { id: 'programs', label: 'Programs', icon: 'BookOpen' },
  { id: 'departments', label: 'Departments', icon: 'Building' },
  { id: 'faculty', label: 'Faculty', icon: 'Users' }];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Academic Excellence
              <span className="block text-primary">Programs & Departments</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover world-class engineering programs, cutting-edge research opportunities, and distinguished faculty members shaping the future of technology and innovation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg">
                <Icon name="Download" size={20} className="mr-2" />
                Download Brochure
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                Schedule Campus Visit
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Play" size={20} className="mr-2" />
                Virtual Campus Tour
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-brand">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Academic Programs</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-brand">
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-sm text-muted-foreground">Departments</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-brand">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Faculty Members</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-brand">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-80">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)} />

            </div>

            {/* Main Content Area */}
            <div className="flex-1">
              {/* Search Bar */}
              <SearchBar
                onSearch={handleSearch}
                onFilterToggle={() => setIsFilterOpen(true)}
                resultsCount={filteredResults?.length} />


              {/* Tabs */}
              <div className="mt-8 mb-6">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-8">
                    {tabs?.map((tab) =>
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab?.id ?
                      'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground hover:border-gray-300'}`
                      }>

                        <Icon name={tab?.icon} size={20} className="mr-2" />
                        {tab?.label}
                      </button>
                    )}
                  </nav>
                </div>
              </div>

              {/* Compare Programs Bar */}
              {activeTab === 'programs' &&
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 p-4 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Button
                    variant={isComparing ? "default" : "outline"}
                    onClick={() => setIsComparing(!isComparing)}>

                      <Icon name="GitCompare" size={16} className="mr-2" />
                      {isComparing ? 'Exit Compare Mode' : 'Compare Programs'}
                    </Button>
                    
                    {selectedPrograms?.length > 0 &&
                  <span className="text-sm text-muted-foreground">
                        {selectedPrograms?.length} program{selectedPrograms?.length !== 1 ? 's' : ''} selected
                      </span>
                  }
                  </div>

                  {selectedPrograms?.length > 1 &&
                <Button
                  variant="default"
                  onClick={() => setShowComparison(true)}>

                      <Icon name="Eye" size={16} className="mr-2" />
                      View Comparison ({selectedPrograms?.length})
                    </Button>
                }
                </div>
              }

              {/* Content Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {activeTab === 'programs' && filteredResults?.map((program) =>
                <ProgramCard
                  key={program?.id}
                  program={program}
                  onCompare={handleCompareProgram}
                  isComparing={isComparing}
                  isSelected={selectedPrograms?.some((p) => p?.id === program?.id)} />

                )}

                {activeTab === 'departments' && filteredResults?.map((department) =>
                <DepartmentCard
                  key={department?.id}
                  department={department}
                  onExplore={(dept) => console.log('Explore department:', dept)} />

                )}

                {activeTab === 'faculty' && filteredResults?.map((faculty) =>
                <FacultyCard
                  key={faculty?.id}
                  faculty={faculty} />

                )}
              </div>

              {/* No Results */}
              {filteredResults?.length === 0 &&
              <div className="text-center py-12">
                  <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium text-foreground mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search criteria or filters to find what you're looking for.
                  </p>
                  <Button variant="outline" onClick={handleClearFilters}>
                    Clear All Filters
                  </Button>
                </div>
              }

              {/* Load More */}
              {filteredResults?.length > 0 &&
              <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Results
                  </Button>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Engineering Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of successful engineers who started their careers at DYPCET. 
            Apply now for the upcoming academic year.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg">
              <Icon name="FileText" size={20} className="mr-2" />
              Apply for Admission
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Schedule Counseling
            </Button>
          </div>
        </div>
      </section>
      {/* Comparison Modal */}
      {showComparison &&
      <ComparisonModal
        programs={selectedPrograms}
        onClose={() => setShowComparison(false)}
        onRemoveProgram={handleRemoveFromComparison} />

      }
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Admission Process</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Fee Structure</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Scholarships</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Academic Calendar</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Program Brochures</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Faculty Directory</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Research Publications</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Lab Facilities</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Admission Helpline</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Student Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Technical Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Campus Visit</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>College of Engineering Kolhapur</p>
                <p>Panhala Road, Kolhapur - 416004</p>
                <p>Phone: +91-231-2692000</p>
                <p>Email: info@dypcet.ac.in</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date()?.getFullYear()} College of Engineering Kolhapur. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

};

export default ProgramsDepartments;