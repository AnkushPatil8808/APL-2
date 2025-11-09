import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ResearchFacilities = () => {
  const [activeTab, setActiveTab] = useState('all');

  const facilities = [
  {
    id: 1,
    name: "Advanced AI & Machine Learning Lab",
    category: "computing",
    area: "2,500 sq ft",
    capacity: "50 Students",
    established: "2022",
    image: "https://images.unsplash.com/photo-1656431756476-4dc873d79678",
    imageAlt: "Modern AI laboratory with high-performance computing clusters and machine learning workstations",
    description: "State-of-the-art facility equipped with GPU clusters, quantum computing simulators, and advanced visualization systems for AI research.",
    equipment: [
    "NVIDIA DGX A100 Systems (4 units)",
    "High-Performance Computing Cluster (128 cores)",
    "Quantum Computing Simulator",
    "Advanced Visualization Wall",
    "Edge Computing Devices"],

    researchAreas: [
    "Deep Learning & Neural Networks",
    "Computer Vision & Image Processing",
    "Natural Language Processing",
    "Quantum Machine Learning"],

    currentProjects: 15,
    publications: 45,
    funding: "₹8.5 Crores"
  },
  {
    id: 2,
    name: "Renewable Energy Research Center",
    category: "energy",
    area: "3,000 sq ft",
    capacity: "40 Students",
    established: "2020",
    image: "https://images.unsplash.com/photo-1680591483838-67a3fe473b93",
    imageAlt: "Renewable energy laboratory with solar panels, wind turbine models, and energy storage systems",
    description: "Comprehensive facility for renewable energy research including solar, wind, and energy storage technologies with grid integration capabilities.",
    equipment: [
    "Solar Cell Testing Station",
    "Wind Tunnel for Turbine Testing",
    "Battery Testing & Analysis System",
    "Grid Simulator & Power Electronics",
    "Weather Monitoring Station"],

    researchAreas: [
    "Photovoltaic Cell Optimization",
    "Wind Energy Harvesting",
    "Energy Storage Systems",
    "Smart Grid Integration"],

    currentProjects: 12,
    publications: 38,
    funding: "₹6.2 Crores"
  },
  {
    id: 3,
    name: "Biomedical Engineering Laboratory",
    category: "biomedical",
    area: "2,200 sq ft",
    capacity: "35 Students",
    established: "2021",
    image: "https://images.unsplash.com/photo-1691934286173-d366705baa83",
    imageAlt: "Biomedical engineering lab with medical imaging equipment, tissue culture facilities, and prosthetic development stations",
    description: "Advanced biomedical research facility with medical imaging, tissue engineering, and medical device development capabilities.",
    equipment: [
    "MRI & CT Imaging Systems",
    "3D Bioprinter for Tissue Engineering",
    "Cell Culture & Incubation Systems",
    "Prosthetic Development Station",
    "Medical Device Testing Equipment"],

    researchAreas: [
    "Medical Imaging & Diagnostics",
    "Tissue Engineering & Regeneration",
    "Prosthetic & Assistive Devices",
    "Drug Delivery Systems"],

    currentProjects: 18,
    publications: 32,
    funding: "₹5.8 Crores"
  },
  {
    id: 4,
    name: "Advanced Materials Characterization Lab",
    category: "materials",
    area: "2,800 sq ft",
    capacity: "30 Students",
    established: "2019",
    image: "https://images.unsplash.com/photo-1675957955387-9925839ef44f",
    imageAlt: "Materials science laboratory with electron microscopes, X-ray diffraction equipment, and material testing machines",
    description: "Cutting-edge facility for materials research with advanced characterization tools and nanomaterial synthesis capabilities.",
    equipment: [
    "Scanning Electron Microscope (SEM)",
    "X-Ray Diffraction (XRD) System",
    "Atomic Force Microscope (AFM)",
    "Universal Testing Machine",
    "Thermal Analysis Equipment"],

    researchAreas: [
    "Nanomaterials & Nanocomposites",
    "Smart & Functional Materials",
    "Biomaterials Development",
    "Materials Characterization"],

    currentProjects: 14,
    publications: 28,
    funding: "₹4.5 Crores"
  },
  {
    id: 5,
    name: "Robotics & Automation Laboratory",
    category: "robotics",
    area: "3,200 sq ft",
    capacity: "45 Students",
    established: "2021",
    image: "https://images.unsplash.com/photo-1700726783633-23c0c6383b00",
    imageAlt: "Robotics laboratory with industrial robots, autonomous vehicles, and automation systems for research",
    description: "Comprehensive robotics facility with industrial robots, autonomous systems, and advanced control systems for automation research.",
    equipment: [
    "Industrial Robot Arms (6 units)",
    "Autonomous Mobile Robots",
    "Drone Testing Arena",
    "Motion Capture System",
    "Real-time Control Systems"],

    researchAreas: [
    "Industrial Automation",
    "Autonomous Navigation",
    "Human-Robot Interaction",
    "Swarm Robotics"],

    currentProjects: 20,
    publications: 35,
    funding: "₹7.2 Crores"
  },
  {
    id: 6,
    name: "Environmental Engineering Research Lab",
    category: "environmental",
    area: "2,600 sq ft",
    capacity: "40 Students",
    established: "2020",
    image: "https://images.unsplash.com/photo-1657778752125-e981b86920a3",
    imageAlt: "Environmental engineering laboratory with water treatment systems, air quality monitoring, and waste processing equipment",
    description: "Specialized facility for environmental research focusing on water treatment, air quality monitoring, and sustainable waste management.",
    equipment: [
    "Water Quality Analysis System",
    "Air Pollution Monitoring Station",
    "Waste Treatment Pilot Plant",
    "Soil Analysis Equipment",
    "Environmental Simulation Chamber"],

    researchAreas: [
    "Water Treatment Technologies",
    "Air Quality Management",
    "Waste-to-Energy Systems",
    "Environmental Monitoring"],

    currentProjects: 16,
    publications: 25,
    funding: "₹4.8 Crores"
  }];


  const categories = [
  { id: 'all', name: 'All Facilities', icon: 'Building', count: facilities?.length },
  { id: 'computing', name: 'Computing & AI', icon: 'Brain', count: facilities?.filter((f) => f?.category === 'computing')?.length },
  { id: 'energy', name: 'Energy Systems', icon: 'Zap', count: facilities?.filter((f) => f?.category === 'energy')?.length },
  { id: 'biomedical', name: 'Biomedical', icon: 'Heart', count: facilities?.filter((f) => f?.category === 'biomedical')?.length },
  { id: 'materials', name: 'Materials Science', icon: 'Atom', count: facilities?.filter((f) => f?.category === 'materials')?.length },
  { id: 'robotics', name: 'Robotics', icon: 'Bot', count: facilities?.filter((f) => f?.category === 'robotics')?.length },
  { id: 'environmental', name: 'Environmental', icon: 'Leaf', count: facilities?.filter((f) => f?.category === 'environmental')?.length }];


  const filteredFacilities = activeTab === 'all' ?
  facilities :
  facilities?.filter((facility) => facility?.category === activeTab);

  const totalStats = {
    totalArea: facilities?.reduce((sum, f) => sum + parseInt(f?.area?.replace(/[^\d]/g, '')), 0),
    totalCapacity: facilities?.reduce((sum, f) => sum + parseInt(f?.capacity?.replace(/[^\d]/g, '')), 0),
    totalProjects: facilities?.reduce((sum, f) => sum + f?.currentProjects, 0),
    totalFunding: facilities?.reduce((sum, f) => sum + parseFloat(f?.funding?.replace(/[^\d.]/g, '')), 0)
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Building" size={24} />
            <span className="text-sm font-semibold uppercase tracking-wider">Research Infrastructure</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            World-Class Research Facilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art laboratories and research centers equipped with cutting-edge technology to support groundbreaking research and innovation.
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="text-3xl font-bold text-primary mb-2">{totalStats?.totalArea?.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Total Area (sq ft)</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="text-3xl font-bold text-accent mb-2">{totalStats?.totalCapacity}+</div>
            <div className="text-sm text-muted-foreground">Research Capacity</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="text-3xl font-bold text-success mb-2">{totalStats?.totalProjects}</div>
            <div className="text-sm text-muted-foreground">Active Projects</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="text-3xl font-bold text-warning mb-2">₹{totalStats?.totalFunding?.toFixed(1)}Cr</div>
            <div className="text-sm text-muted-foreground">Total Investment</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) =>
          <button
            key={category?.id}
            onClick={() => setActiveTab(category?.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            activeTab === category?.id ?
            'bg-primary text-white shadow-md' :
            'bg-white text-muted-foreground hover:text-primary hover:bg-primary/5 border border-gray-200'}`
            }>

              <Icon name={category?.icon} size={18} />
              <span>{category?.name}</span>
              <span className="text-sm opacity-75">({category?.count})</span>
            </button>
          )}
        </div>

        {/* Facilities Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredFacilities?.map((facility) =>
          <div key={facility?.id} className="bg-card rounded-2xl shadow-brand border overflow-hidden hover:shadow-brand-lg transition-all duration-300 group">
              {/* Facility Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                src={facility?.image}
                alt={facility?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Established Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} className="text-primary" />
                    <span className="text-sm font-semibold text-foreground">Est. {facility?.established}</span>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-success" />
                    <span className="text-sm font-semibold text-foreground">{facility?.currentProjects} Projects</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {facility?.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {facility?.description}
                  </p>
                </div>

                {/* Facility Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Maximize" size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">Area: {facility?.area}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} className="text-accent" />
                      <span className="text-sm font-medium text-foreground">Capacity: {facility?.capacity}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="FileText" size={16} className="text-success" />
                      <span className="text-sm font-medium text-foreground">{facility?.publications} Papers</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="DollarSign" size={16} className="text-warning" />
                      <span className="text-sm font-medium text-foreground">{facility?.funding}</span>
                    </div>
                  </div>
                </div>

                {/* Equipment */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Icon name="Settings" size={16} className="mr-2 text-primary" />
                    Key Equipment
                  </h4>
                  <ul className="space-y-2">
                    {facility?.equipment?.slice(0, 3)?.map((item, idx) =>
                  <li key={idx} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={14} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                  )}
                    {facility?.equipment?.length > 3 &&
                  <li className="text-sm text-primary font-medium">
                        +{facility?.equipment?.length - 3} more equipment
                      </li>
                  }
                  </ul>
                </div>

                {/* Research Areas */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center">
                    <Icon name="Target" size={16} className="mr-2 text-accent" />
                    Research Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {facility?.researchAreas?.map((area, idx) =>
                  <span key={idx} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {area}
                      </span>
                  )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Virtual Tour
                  </Button>
                  <Button variant="default" className="flex-1">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Book Visit
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Equipment Booking CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Access to Research Equipment?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our facilities are available for collaborative research, industry partnerships, and academic projects. Book equipment time or schedule a facility tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              <Icon name="Calendar" size={20} className="mr-2" />
              Book Equipment Time
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="MapPin" size={20} className="mr-2" />
              Schedule Facility Tour
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default ResearchFacilities;