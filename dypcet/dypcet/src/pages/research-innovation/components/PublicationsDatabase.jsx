import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const PublicationsDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedJournal, setSelectedJournal] = useState('all');

  const publications = [
    {
      id: 1,
      title: "Advanced Neural Networks for Predictive Healthcare Analytics: A Comprehensive Study on Medical Image Classification",
      authors: ["Dr. Rajesh Kumar Sharma", "Dr. Priya Mehta", "Rahul Patil", "Sneha Desai"],
      journal: "IEEE Transactions on Biomedical Engineering",
      year: 2024,
      month: "October",
      category: "Artificial Intelligence",
      impactFactor: 4.8,
      citations: 15,
      doi: "10.1109/TBME.2024.3421567",
      abstract: "This paper presents a novel approach to medical image classification using advanced neural network architectures. The proposed method demonstrates significant improvements in diagnostic accuracy for various medical conditions including cancer detection, cardiovascular diseases, and neurological disorders.",
      keywords: ["Neural Networks", "Medical Imaging", "Healthcare Analytics", "Deep Learning"],
      type: "Journal Article",
      status: "Published",
      downloads: 1250,
      quartile: "Q1"
    },
    {
      id: 2,
      title: "Optimization of Perovskite Solar Cells for Enhanced Efficiency in Tropical Climate Conditions",
      authors: ["Dr. Priya Mehta", "Kiran Patil", "Dr. Amit Patel"],
      journal: "Solar Energy Materials and Solar Cells",
      year: 2024,
      month: "September",
      category: "Renewable Energy",
      impactFactor: 6.9,
      citations: 28,
      doi: "10.1016/j.solmat.2024.112456",
      abstract: "We investigate the performance optimization of perovskite solar cells under tropical climate conditions. Our findings reveal novel material compositions that maintain high efficiency despite high humidity and temperature variations typical of tropical regions.",
      keywords: ["Perovskite Solar Cells", "Tropical Climate", "Energy Efficiency", "Materials Science"],
      type: "Journal Article",
      status: "Published",
      downloads: 890,
      quartile: "Q1"
    },
    {
      id: 3,
      title: "Self-Healing Polymer Composites for Aerospace Applications: Synthesis and Characterization",
      authors: ["Dr. Amit Patel", "Rohit Sharma", "Dr. Sneha Desai", "Kavya Nair"],
      journal: "Composites Science and Technology",
      year: 2024,
      month: "August",
      category: "Materials Science",
      impactFactor: 8.5,
      citations: 42,
      doi: "10.1016/j.compscitech.2024.110234",
      abstract: "This study presents the development of novel self-healing polymer composites specifically designed for aerospace applications. The materials demonstrate exceptional mechanical properties and autonomous healing capabilities under various stress conditions.",
      keywords: ["Self-Healing Materials", "Polymer Composites", "Aerospace Engineering", "Smart Materials"],
      type: "Journal Article",
      status: "Published",
      downloads: 1456,
      quartile: "Q1"
    },
    {
      id: 4,
      title: "Machine Learning Approaches for Smart Grid Management and Energy Distribution Optimization",
      authors: ["Dr. Rajesh Kumar Sharma", "Dr. Priya Mehta", "Arjun Reddy", "Pooja Gupta"],
      journal: "IEEE Transactions on Smart Grid",
      year: 2024,
      month: "July",
      category: "Smart Systems",
      impactFactor: 10.1,
      citations: 67,
      doi: "10.1109/TSG.2024.3398765",
      abstract: "We propose a comprehensive machine learning framework for smart grid management that optimizes energy distribution, predicts demand patterns, and enhances grid stability through intelligent load balancing and renewable energy integration.",
      keywords: ["Smart Grid", "Machine Learning", "Energy Distribution", "Load Balancing"],
      type: "Journal Article",
      status: "Published",
      downloads: 2134,
      quartile: "Q1"
    },
    {
      id: 5,
      title: "Smart Contact Lenses for Continuous Glucose Monitoring: Design and Clinical Validation",
      authors: ["Dr. Sneha Desai", "Vikram Singh", "Dr. Rajesh Kumar Sharma"],
      journal: "Nature Biomedical Engineering",
      year: 2024,
      month: "June",
      category: "Biomedical Engineering",
      impactFactor: 29.2,
      citations: 89,
      doi: "10.1038/s41551-024-01234-x",
      abstract: "This work demonstrates the development and clinical validation of smart contact lenses capable of continuous glucose monitoring. The non-invasive approach shows promising results for diabetes management with high accuracy and patient comfort.",
      keywords: ["Smart Contact Lenses", "Glucose Monitoring", "Diabetes Management", "Biomedical Devices"],
      type: "Journal Article",
      status: "Published",
      downloads: 3245,
      quartile: "Q1"
    },
    {
      id: 6,
      title: "Federated Learning in Edge Computing Environments: Privacy-Preserving Distributed AI",
      authors: ["Dr. Rajesh Kumar Sharma", "Manish Tiwari", "Dr. Sunil Kumar"],
      journal: "Nature Machine Intelligence",
      year: 2024,
      month: "May",
      category: "Artificial Intelligence",
      impactFactor: 25.8,
      citations: 156,
      doi: "10.1038/s42256-024-00876-5",
      abstract: "We present a novel federated learning framework optimized for edge computing environments that ensures privacy preservation while maintaining high model accuracy. The approach addresses key challenges in distributed AI deployment.",
      keywords: ["Federated Learning", "Edge Computing", "Privacy Preservation", "Distributed AI"],
      type: "Journal Article",
      status: "Published",
      downloads: 4567,
      quartile: "Q1"
    }
  ];

  const yearOptions = [
    { value: 'all', label: 'All Years' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'Artificial Intelligence', label: 'Artificial Intelligence' },
    { value: 'Renewable Energy', label: 'Renewable Energy' },
    { value: 'Materials Science', label: 'Materials Science' },
    { value: 'Biomedical Engineering', label: 'Biomedical Engineering' },
    { value: 'Smart Systems', label: 'Smart Systems' }
  ];

  const journalOptions = [
    { value: 'all', label: 'All Journals' },
    { value: 'IEEE Transactions on Biomedical Engineering', label: 'IEEE Trans. Biomedical Eng.' },
    { value: 'Nature Biomedical Engineering', label: 'Nature Biomedical Engineering' },
    { value: 'Solar Energy Materials and Solar Cells', label: 'Solar Energy Materials' },
    { value: 'Composites Science and Technology', label: 'Composites Science & Tech.' }
  ];

  // Filter publications based on search and filters
  const filteredPublications = publications?.filter(pub => {
    const matchesSearch = pub?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
                         pub?.authors?.some(author => author?.toLowerCase()?.includes(searchTerm?.toLowerCase())) ||
                         pub?.keywords?.some(keyword => keyword?.toLowerCase()?.includes(searchTerm?.toLowerCase()));
    
    const matchesYear = selectedYear === 'all' || pub?.year?.toString() === selectedYear;
    const matchesCategory = selectedCategory === 'all' || pub?.category === selectedCategory;
    const matchesJournal = selectedJournal === 'all' || pub?.journal === selectedJournal;
    
    return matchesSearch && matchesYear && matchesCategory && matchesJournal;
  });

  const getImpactColor = (impactFactor) => {
    if (impactFactor >= 20) return 'text-success';
    if (impactFactor >= 10) return 'text-primary';
    if (impactFactor >= 5) return 'text-accent';
    return 'text-muted-foreground';
  };

  const getQuartileColor = (quartile) => {
    switch (quartile) {
      case 'Q1': return 'bg-success/10 text-success';
      case 'Q2': return 'bg-primary/10 text-primary';
      case 'Q3': return 'bg-accent/10 text-accent';
      case 'Q4': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const totalCitations = publications?.reduce((sum, pub) => sum + pub?.citations, 0);
  const totalDownloads = publications?.reduce((sum, pub) => sum + pub?.downloads, 0);
  const avgImpactFactor = (publications?.reduce((sum, pub) => sum + pub?.impactFactor, 0) / publications?.length)?.toFixed(1);

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="FileText" size={24} />
            <span className="text-sm font-semibold uppercase tracking-wider">Research Publications</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Publications Database
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive collection of research publications, academic papers, and scholarly contributions across various engineering disciplines.
          </p>
        </div>

        {/* Publication Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="text-3xl font-bold text-primary mb-2">{publications?.length}</div>
            <div className="text-sm text-muted-foreground">Total Publications</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="text-3xl font-bold text-accent mb-2">{totalCitations}</div>
            <div className="text-sm text-muted-foreground">Total Citations</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="text-3xl font-bold text-success mb-2">{avgImpactFactor}</div>
            <div className="text-sm text-muted-foreground">Avg Impact Factor</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="text-3xl font-bold text-warning mb-2">{(totalDownloads / 1000)?.toFixed(1)}K</div>
            <div className="text-sm text-muted-foreground">Total Downloads</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-2xl shadow-brand border p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <Input
                type="search"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e?.target?.value)}
                className="w-full"
              />
            </div>
            <div>
              <Select
                options={yearOptions}
                value={selectedYear}
                onChange={setSelectedYear}
                placeholder="Select Year"
              />
            </div>
            <div>
              <Select
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="Select Category"
              />
            </div>
            <div>
              <Select
                options={journalOptions}
                value={selectedJournal}
                onChange={setSelectedJournal}
                placeholder="Select Journal"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <span className="text-sm text-muted-foreground">
              Showing {filteredPublications?.length} of {publications?.length} publications
            </span>
            <Button variant="outline" size="sm">
              <Icon name="Download" size={16} className="mr-2" />
              Export Results
            </Button>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications?.map((publication) => (
            <div key={publication?.id} className="bg-card rounded-2xl shadow-brand border p-6 hover:shadow-brand-lg transition-all duration-300">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                      {publication?.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Icon name="Users" size={14} />
                        <span>{publication?.authors?.join(', ')}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{publication?.month} {publication?.year}</span>
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getQuartileColor(publication?.quartile)}`}>
                      {publication?.quartile}
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {publication?.category}
                    </span>
                  </div>
                </div>

                {/* Journal Info */}
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Icon name="BookOpen" size={16} className="text-primary" />
                      <span className="font-medium text-foreground">{publication?.journal}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={16} className={getImpactColor(publication?.impactFactor)} />
                      <span className={`font-semibold ${getImpactColor(publication?.impactFactor)}`}>
                        IF: {publication?.impactFactor}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <Icon name="Quote" size={14} className="text-accent" />
                      <span className="font-medium">{publication?.citations} Citations</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Download" size={14} className="text-success" />
                      <span className="font-medium">{publication?.downloads} Downloads</span>
                    </span>
                  </div>
                </div>

                {/* Abstract */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Abstract</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {publication?.abstract}
                  </p>
                </div>

                {/* Keywords */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {publication?.keywords?.map((keyword, idx) => (
                      <span key={idx} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Link" size={14} />
                    <span>DOI: {publication?.doi}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm">
                      <Icon name="ExternalLink" size={14} className="mr-2" />
                      View Full Text
                    </Button>
                    <Button variant="default" size="sm">
                      <Icon name="Download" size={14} className="mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Icon name="MoreHorizontal" size={20} className="mr-2" />
            Load More Publications
          </Button>
        </div>

        {/* Submit Publication CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Submit Your Research
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have you published new research? Submit your publications to be included in our database and increase visibility within the academic community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              <Icon name="Upload" size={20} className="mr-2" />
              Submit Publication
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="FileText" size={20} className="mr-2" />
              Submission Guidelines
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsDatabase;