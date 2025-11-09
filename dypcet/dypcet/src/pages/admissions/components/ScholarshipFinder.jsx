import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const ScholarshipFinder = () => {
  const [filters, setFilters] = useState({
    category: '',
    familyIncome: '',
    academicScore: '',
    program: ''
  });
  const [scholarships, setScholarships] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const categoryOptions = [
    { value: 'general', label: 'General' },
    { value: 'obc', label: 'OBC (Non-Creamy Layer)' },
    { value: 'sc', label: 'SC (Scheduled Caste)' },
    { value: 'st', label: 'ST (Scheduled Tribe)' },
    { value: 'ews', label: 'EWS (Economically Weaker Section)' }
  ];

  const incomeOptions = [
    { value: 'below-1', label: 'Below ₹1,00,000' },
    { value: '1-2', label: '₹1,00,000 - ₹2,00,000' },
    { value: '2-5', label: '₹2,00,000 - ₹5,00,000' },
    { value: '5-8', label: '₹5,00,000 - ₹8,00,000' },
    { value: 'above-8', label: 'Above ₹8,00,000' }
  ];

  const programOptions = [
    { value: 'cse', label: 'Computer Science Engineering' },
    { value: 'ece', label: 'Electronics & Communication' },
    { value: 'me', label: 'Mechanical Engineering' },
    { value: 'ce', label: 'Civil Engineering' },
    { value: 'ee', label: 'Electrical Engineering' }
  ];

  const allScholarships = [
    {
      id: 1,
      name: "Merit-Based Excellence Scholarship",
      provider: "DYPCET Foundation",
      amount: "₹50,000 - ₹1,00,000",
      type: "Merit",
      eligibility: ["90%+ in 12th standard", "Top 10% in entrance exam", "All categories eligible"],
      description: "Awarded to students with exceptional academic performance in qualifying examinations.",
      deadline: "30th April 2025",
      renewable: true,
      icon: "Award"
    },
    {
      id: 2,
      name: "SC/ST Fee Waiver Scheme",
      provider: "Government of Maharashtra",
      amount: "100% Tuition Fee Waiver",
      type: "Category",
      eligibility: ["SC/ST category certificate", "Family income below ₹2,50,000", "50%+ in 12th standard"],
      description: "Complete tuition fee waiver for students from SC/ST communities meeting income criteria.",
      deadline: "15th May 2025",
      renewable: true,
      icon: "Users"
    },
    {
      id: 3,
      name: "EBC (Economically Backward Class) Scholarship",
      provider: "Government of Maharashtra",
      amount: "₹30,000 per year",
      type: "Income",
      eligibility: ["Family income below ₹1,00,000", "60%+ in 12th standard", "Valid income certificate"],
      description: "Financial assistance for economically disadvantaged students to pursue engineering education.",
      deadline: "31st May 2025",
      renewable: true,
      icon: "DollarSign"
    },
    {
      id: 4,
      name: "Girl Child Engineering Scholarship",
      provider: "DYPCET Women Empowerment Cell",
      amount: "₹25,000 per year",
      type: "Gender",
      eligibility: ["Female candidates only", "75%+ in 12th standard", "All categories eligible"],
      description: "Encouraging female participation in engineering education through financial support.",
      deadline: "20th April 2025",
      renewable: true,
      icon: "Heart"
    },
    {
      id: 5,
      name: "Sports Excellence Scholarship",
      provider: "DYPCET Sports Committee",
      amount: "₹40,000 per year",
      type: "Sports",
      eligibility: ["State/National level sports participation", "Valid sports certificate", "60%+ in academics"],
      description: "Supporting talented athletes to balance sports and engineering education effectively.",
      deadline: "10th May 2025",
      renewable: true,
      icon: "Trophy"
    },
    {
      id: 6,
      name: "Innovation & Research Scholarship",
      provider: "DYPCET R&D Department",
      amount: "₹60,000 per year",
      type: "Research",
      eligibility: ["Innovative project portfolio", "Research aptitude test", "80%+ in 12th standard"],
      description: "Fostering innovation and research culture among engineering students through financial incentives.",
      deadline: "25th April 2025",
      renewable: true,
      icon: "Lightbulb"
    }
  ];

  const searchScholarships = () => {
    setIsSearching(true);
    
    setTimeout(() => {
      let filteredScholarships = [...allScholarships];
      
      // Filter based on category
      if (filters?.category) {
        if (filters?.category === 'sc' || filters?.category === 'st') {
          filteredScholarships = filteredScholarships?.filter(s => 
            s?.type === 'Category' || s?.type === 'Merit' || s?.type === 'Gender' || s?.type === 'Sports'
          );
        } else if (filters?.category === 'ews') {
          filteredScholarships = filteredScholarships?.filter(s => 
            s?.type === 'Income' || s?.type === 'Merit' || s?.type === 'Gender' || s?.type === 'Sports'
          );
        }
      }
      
      // Filter based on income
      if (filters?.familyIncome === 'below-1' || filters?.familyIncome === '1-2') {
        filteredScholarships = filteredScholarships?.filter(s => 
          s?.type === 'Income' || s?.type === 'Category' || s?.type === 'Merit'
        );
      }
      
      // Filter based on academic score
      if (filters?.academicScore) {
        const score = parseFloat(filters?.academicScore);
        if (score >= 90) {
          // All scholarships available
        } else if (score >= 80) {
          filteredScholarships = filteredScholarships?.filter(s => s?.type !== 'Research');
        } else if (score >= 75) {
          filteredScholarships = filteredScholarships?.filter(s => 
            s?.type === 'Category' || s?.type === 'Income' || s?.type === 'Gender'
          );
        } else if (score >= 60) {
          filteredScholarships = filteredScholarships?.filter(s => 
            s?.type === 'Category' || s?.type === 'Income' || s?.type === 'Sports'
          );
        }
      }
      
      setScholarships(filteredScholarships);
      setIsSearching(false);
    }, 1500);
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getTypeColor = (type) => {
    const colors = {
      Merit: 'bg-primary/10 text-primary',
      Category: 'bg-success/10 text-success',
      Income: 'bg-warning/10 text-warning',
      Gender: 'bg-pink-100 text-pink-700',
      Sports: 'bg-orange-100 text-orange-700',
      Research: 'bg-purple-100 text-purple-700'
    };
    return colors?.[type] || 'bg-muted text-muted-foreground';
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Scholarship Finder
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover scholarships and financial aid opportunities tailored to your profile
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-brand border border-gray-200 sticky top-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Filter Scholarships
              </h3>

              <div className="space-y-4">
                <Select
                  label="Category"
                  placeholder="Select category"
                  options={categoryOptions}
                  value={filters?.category}
                  onChange={(value) => handleFilterChange('category', value)}
                />

                <Select
                  label="Family Income"
                  placeholder="Select income range"
                  options={incomeOptions}
                  value={filters?.familyIncome}
                  onChange={(value) => handleFilterChange('familyIncome', value)}
                />

                <Input
                  label="Academic Score (%)"
                  type="number"
                  placeholder="Enter percentage"
                  value={filters?.academicScore}
                  onChange={(e) => handleFilterChange('academicScore', e?.target?.value)}
                  description="12th standard percentage"
                />

                <Select
                  label="Program Interest"
                  placeholder="Select program"
                  options={programOptions}
                  value={filters?.program}
                  onChange={(value) => handleFilterChange('program', value)}
                />

                <Button
                  variant="default"
                  fullWidth
                  onClick={searchScholarships}
                  loading={isSearching}
                >
                  <Icon name="Search" size={16} className="mr-2" />
                  Find Scholarships
                </Button>
              </div>
            </div>
          </div>

          {/* Scholarship Results */}
          <div className="lg:col-span-3">
            {scholarships?.length > 0 ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-foreground">
                    Available Scholarships ({scholarships?.length})
                  </h3>
                  <Button variant="outline" size="sm">
                    <Icon name="Download" size={16} className="mr-2" />
                    Export List
                  </Button>
                </div>

                <div className="grid gap-6">
                  {scholarships?.map((scholarship) => (
                    <div key={scholarship?.id} className="bg-card rounded-xl p-6 shadow-brand border border-gray-200 hover:shadow-brand-lg transition-shadow duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name={scholarship?.icon} size={24} className="text-primary" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-foreground mb-1">
                              {scholarship?.name}
                            </h4>
                            <p className="text-muted-foreground">{scholarship?.provider}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(scholarship?.type)}`}>
                            {scholarship?.type}
                          </div>
                          <div className="text-2xl font-bold text-primary mt-2">
                            {scholarship?.amount}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{scholarship?.description}</p>

                      <div className="mb-4">
                        <h5 className="font-semibold text-foreground mb-2">Eligibility Criteria:</h5>
                        <ul className="space-y-1">
                          {scholarship?.eligibility?.map((criteria, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="Calendar" size={16} />
                            <span>Deadline: {scholarship?.deadline}</span>
                          </div>
                          {scholarship?.renewable && (
                            <div className="flex items-center space-x-1">
                              <Icon name="RotateCcw" size={16} />
                              <span>Renewable</span>
                            </div>
                          )}
                        </div>
                        <Button variant="default" size="sm">
                          <Icon name="ExternalLink" size={16} className="mr-2" />
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-card rounded-2xl p-12 shadow-brand border border-gray-200 text-center">
                <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Find Your Perfect Scholarship
                </h3>
                <p className="text-muted-foreground mb-6">
                  Use the filters on the left to discover scholarships that match your profile and academic achievements.
                </p>
                <Button variant="outline">
                  <Icon name="HelpCircle" size={16} className="mr-2" />
                  Need Help?
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipFinder;