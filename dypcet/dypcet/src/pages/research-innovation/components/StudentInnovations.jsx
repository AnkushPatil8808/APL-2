import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StudentInnovations = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const innovations = [
  {
    id: 1,
    title: "AI-Powered Crop Disease Detection System",
    description: "Mobile application using computer vision to identify plant diseases and recommend treatments, helping farmers increase crop yield by 30%.",
    category: "ai",
    students: ["Rahul Patil", "Priya Sharma", "Amit Kumar"],
    year: "Final Year",
    department: "Computer Science",
    image: "https://images.unsplash.com/photo-1621263386764-d7febed4f2ab",
    imageAlt: "Students using smartphone app to scan crop leaves for disease detection in agricultural field",
    status: "Patent Filed",
    impact: "500+ Farmers Benefited",
    funding: "₹2.5L",
    awards: ["National Innovation Contest Winner 2024", "Best Student Project Award"],
    technologies: ["TensorFlow", "Flutter", "Cloud ML"],
    mentor: "Dr. Rajesh Kumar"
  },
  {
    id: 2,
    title: "Smart Prosthetic Hand with Neural Control",
    description: "Advanced prosthetic limb controlled by neural signals, providing natural movement and tactile feedback for amputees.",
    category: "biomedical",
    students: ["Sneha Desai", "Vikram Singh", "Anita Joshi"],
    year: "Third Year",
    department: "Biomedical Engineering",
    image: "https://images.unsplash.com/photo-1581090465357-c8a1f71f0407",
    imageAlt: "Engineering students testing advanced prosthetic hand with sensors and neural interface technology",
    status: "Prototype Ready",
    impact: "Clinical Trials Approved",
    funding: "₹5L",
    awards: ["Healthcare Innovation Award 2024", "Student Research Excellence"],
    technologies: ["EMG Sensors", "Arduino", "3D Printing"],
    mentor: "Dr. Sneha Desai"
  },
  {
    id: 3,
    title: "Solar-Powered Water Purification Unit",
    description: "Portable water purification system powered entirely by solar energy, designed for rural communities without electricity access.",
    category: "renewable",
    students: ["Kiran Patil", "Madhuri Kulkarni", "Suresh Yadav"],
    year: "Final Year",
    department: "Electrical Engineering",
    image: "https://images.unsplash.com/photo-1616996691973-0560486764f7",
    imageAlt: "Students demonstrating solar-powered water purification system with solar panels and filtration unit",
    status: "Field Testing",
    impact: "10 Villages Implemented",
    funding: "₹3L",
    awards: ["Sustainable Innovation Award 2024", "Social Impact Recognition"],
    technologies: ["Solar PV", "UV Sterilization", "IoT Monitoring"],
    mentor: "Dr. Priya Mehta"
  },
  {
    id: 4,
    title: "Self-Healing Concrete with Microcapsules",
    description: "Revolutionary concrete mixture embedded with healing agents that automatically repair cracks, extending infrastructure lifespan.",
    category: "materials",
    students: ["Rohit Sharma", "Kavya Nair", "Deepak Jain"],
    year: "Final Year",
    department: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1562789278-dac7af7fb5b1",
    imageAlt: "Civil engineering students testing concrete samples with microscopic healing agents in materials laboratory",
    status: "Patent Pending",
    impact: "40% Longer Lifespan",
    funding: "₹4L",
    awards: ["Materials Innovation Excellence 2024", "Industry Partnership Award"],
    technologies: ["Microcapsules", "Polymer Chemistry", "Durability Testing"],
    mentor: "Dr. Amit Patel"
  },
  {
    id: 5,
    title: "Drone-Based Traffic Management System",
    description: "Autonomous drone network for real-time traffic monitoring, accident detection, and emergency response coordination in urban areas.",
    category: "ai",
    students: ["Arjun Reddy", "Pooja Gupta", "Manish Tiwari"],
    year: "Third Year",
    department: "Electronics & Communication",
    image: "https://images.unsplash.com/photo-1604565640379-ef755d8ad8d6",
    imageAlt: "Students operating drone with camera equipment for traffic monitoring and urban surveillance applications",
    status: "Pilot Testing",
    impact: "30% Faster Response",
    funding: "₹3.5L",
    awards: ["Smart City Innovation Award 2024", "Technology Excellence"],
    technologies: ["Computer Vision", "Edge Computing", "5G Communication"],
    mentor: "Dr. Sunil Kumar"
  },
  {
    id: 6,
    title: "Biodegradable Plastic from Agricultural Waste",
    description: "Eco-friendly plastic alternative made from rice husk and sugarcane bagasse, completely biodegradable within 6 months.",
    category: "materials",
    students: ["Ravi Kumar", "Shweta Agarwal", "Nikhil Joshi"],
    year: "Final Year",
    department: "Chemical Engineering",
    image: "https://images.unsplash.com/photo-1562789278-dac7af7fb5b1",
    imageAlt: "Chemical engineering students working with agricultural waste materials to create biodegradable plastic samples",
    status: "Commercialization",
    impact: "Zero Plastic Waste",
    funding: "₹6L",
    awards: ["Environmental Innovation Award 2024", "Startup Incubation Grant"],
    technologies: ["Biopolymers", "Green Chemistry", "Waste Processing"],
    mentor: "Dr. Rajesh Gupta"
  }];


  const categories = [
  { id: 'all', name: 'All Innovations', icon: 'Lightbulb', count: innovations?.length },
  { id: 'ai', name: 'AI & Technology', icon: 'Brain', count: innovations?.filter((i) => i?.category === 'ai')?.length },
  { id: 'biomedical', name: 'Biomedical', icon: 'Heart', count: innovations?.filter((i) => i?.category === 'biomedical')?.length },
  { id: 'renewable', name: 'Renewable Energy', icon: 'Zap', count: innovations?.filter((i) => i?.category === 'renewable')?.length },
  { id: 'materials', name: 'Advanced Materials', icon: 'Atom', count: innovations?.filter((i) => i?.category === 'materials')?.length }];


  const filteredInnovations = activeCategory === 'all' ?
  innovations :
  innovations?.filter((innovation) => innovation?.category === activeCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Patent Filed':case 'Patent Pending':
        return 'bg-primary/10 text-primary';
      case 'Prototype Ready':
        return 'bg-accent/10 text-accent';
      case 'Field Testing':case 'Pilot Testing':
        return 'bg-warning/10 text-warning';
      case 'Commercialization':
        return 'bg-success/10 text-success';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Rocket" size={24} />
            <span className="text-sm font-semibold uppercase tracking-wider">Student Innovation</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Tomorrow's Innovators Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our students are creating breakthrough solutions that address real-world challenges, from healthcare to sustainability and beyond.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) =>
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            activeCategory === category?.id ?
            'bg-primary text-white shadow-md' :
            'bg-white text-muted-foreground hover:text-primary hover:bg-primary/5 border border-gray-200'}`
            }>

              <Icon name={category?.icon} size={18} />
              <span>{category?.name}</span>
              <span className="text-sm opacity-75">({category?.count})</span>
            </button>
          )}
        </div>

        {/* Innovations Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredInnovations?.map((innovation) =>
          <div key={innovation?.id} className="bg-card rounded-2xl shadow-brand border overflow-hidden hover:shadow-brand-lg transition-all duration-300 group">
              {/* Innovation Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                src={innovation?.image}
                alt={innovation?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(innovation?.status)}`}>
                  {innovation?.status}
                </div>

                {/* Impact Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-success" />
                    <span className="text-sm font-semibold text-foreground">{innovation?.impact}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {innovation?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {innovation?.description}
                  </p>
                </div>

                {/* Students & Department */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">Team Members:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {innovation?.students?.map((student, idx) =>
                  <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {student}
                      </span>
                  )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{innovation?.department} • {innovation?.year}</span>
                    <span>Mentor: {innovation?.mentor}</span>
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Code" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-foreground">Technologies:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {innovation?.technologies?.map((tech, idx) =>
                  <span key={idx} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                  )}
                  </div>
                </div>

                {/* Funding & Awards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-accent/5 rounded-lg">
                    <div className="text-lg font-bold text-accent">{innovation?.funding}</div>
                    <div className="text-xs text-muted-foreground">Funding Received</div>
                  </div>
                  <div className="text-center p-3 bg-success/5 rounded-lg">
                    <div className="text-lg font-bold text-success">{innovation?.awards?.length}</div>
                    <div className="text-xs text-muted-foreground">Awards Won</div>
                  </div>
                </div>

                {/* Awards List */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Trophy" size={16} className="text-accent" />
                    <span className="text-sm font-medium text-foreground">Recent Awards:</span>
                  </div>
                  <ul className="space-y-1">
                    {innovation?.awards?.slice(0, 2)?.map((award, idx) =>
                  <li key={idx} className="flex items-center space-x-2">
                        <Icon name="Award" size={12} className="text-success flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{award}</span>
                      </li>
                  )}
                  </ul>
                </div>

                {/* Action Button */}
                <Button variant="outline" fullWidth className="group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  View Project Details
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Have an Innovative Idea?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our innovation ecosystem and turn your ideas into reality. Get access to funding, mentorship, and state-of-the-art facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              <Icon name="Lightbulb" size={20} className="mr-2" />
              Submit Your Idea
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Users" size={20} className="mr-2" />
              Join Innovation Club
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default StudentInnovations;