import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProgramExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
  { id: 'all', label: 'All Programs', icon: 'Grid3X3' },
  { id: 'core', label: 'Core Engineering', icon: 'Cog' },
  { id: 'emerging', label: 'Emerging Tech', icon: 'Zap' },
  { id: 'research', label: 'Research Focus', icon: 'Microscope' }];


  const programs = [
  {
    id: 1,
    name: "Computer Science & Engineering",
    category: 'core',
    duration: "4 Years",
    seats: "120",
    description: "Comprehensive program covering software development, AI, machine learning, and system design with industry-relevant curriculum.",
    image: "https://images.unsplash.com/photo-1651990892631-723da6447d7d",
    imageAlt: "Students working on computer programming projects with multiple monitors displaying code and software development environments",
    highlights: ["AI & ML Specialization", "Industry Partnerships", "100% Placement"],
    averagePackage: "₹8.5L",
    topRecruiters: ["Google", "Microsoft", "Amazon"]
  },
  {
    id: 2,
    name: "Electronics & Telecommunication",
    category: 'core',
    duration: "4 Years",
    seats: "60",
    description: "Advanced program in electronics, communication systems, IoT, and embedded systems with hands-on laboratory experience.",
    image: "https://images.unsplash.com/photo-1535612731405-1348d22b842f",
    imageAlt: "Engineering students working with electronic circuits, oscilloscopes, and communication equipment in modern electronics laboratory",
    highlights: ["IoT Integration", "5G Technology", "Research Projects"],
    averagePackage: "₹7.2L",
    topRecruiters: ["Qualcomm", "Intel", "Ericsson"]
  },
  {
    id: 3,
    name: "Artificial Intelligence & Data Science",
    category: 'emerging',
    duration: "4 Years",
    seats: "60",
    description: "Cutting-edge program focusing on AI algorithms, big data analytics, machine learning, and intelligent system development.",
    image: "https://images.unsplash.com/photo-1663780852957-0e1f8bda3d0d",
    imageAlt: "Data scientists analyzing complex datasets on large displays with AI visualization tools and machine learning models",
    highlights: ["Industry 4.0 Focus", "Research Opportunities", "Startup Incubation"],
    averagePackage: "₹9.8L",
    topRecruiters: ["IBM", "Accenture", "TCS"]
  },
  {
    id: 4,
    name: "Mechanical Engineering",
    category: 'core',
    duration: "4 Years",
    seats: "120",
    description: "Traditional engineering discipline with modern applications in automation, robotics, and sustainable manufacturing technologies.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
    imageAlt: "Mechanical engineering students working with precision machinery, CAD workstations, and manufacturing equipment in workshop",
    highlights: ["Automation Focus", "Industry Collaboration", "Innovation Labs"],
    averagePackage: "₹6.8L",
    topRecruiters: ["Tata Motors", "Mahindra", "L&T"]
  },
  {
    id: 5,
    name: "Cybersecurity Engineering",
    category: 'emerging',
    duration: "4 Years",
    seats: "30",
    description: "Specialized program addressing modern security challenges with focus on network security, ethical hacking, and digital forensics.",
    image: "https://images.unsplash.com/photo-1599045118108-bf9954418b76",
    imageAlt: "Cybersecurity professionals working on network security monitoring systems with multiple screens showing security dashboards",
    highlights: ["Ethical Hacking", "Industry Certification", "Government Projects"],
    averagePackage: "₹10.2L",
    topRecruiters: ["Wipro", "Infosys", "Deloitte"]
  },
  {
    id: 6,
    name: "Biotechnology Engineering",
    category: 'research',
    duration: "4 Years",
    seats: "30",
    description: "Interdisciplinary program combining biology and engineering for healthcare, pharmaceuticals, and environmental applications.",
    image: "https://images.unsplash.com/photo-1707944745905-1ba3ef7c0c83",
    imageAlt: "Biotechnology researchers in white lab coats working with advanced laboratory equipment, microscopes, and biological samples",
    highlights: ["Research Focus", "Healthcare Innovation", "Pharmaceutical Tie-ups"],
    averagePackage: "₹7.5L",
    topRecruiters: ["Biocon", "Dr. Reddy\'s", "Cipla"]
  }];


  const filteredPrograms = selectedCategory === 'all' ?
  programs :
  programs?.filter((program) => program?.category === selectedCategory);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Interactive Program Explorer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive engineering programs designed to meet industry demands and foster innovation
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) =>
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            selectedCategory === category?.id ?
            'bg-primary text-white shadow-brand' :
            'bg-white text-muted-foreground hover:text-primary hover:bg-muted border border-gray-200'}`
            }>

              <Icon name={category?.icon} size={20} className="mr-2" />
              {category?.label}
            </button>
          )}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms?.map((program) =>
          <div
            key={program?.id}
            className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden border border-gray-200 group hover:-translate-y-1">

              {/* Program Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                src={program?.image}
                alt={program?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                  {program?.seats} Seats
                </div>
              </div>

              {/* Program Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {program?.name}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                    {program?.duration}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {program?.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {program?.highlights?.map((highlight, index) =>
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">

                        {highlight}
                      </span>
                  )}
                  </div>
                </div>

                {/* Stats */}
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-muted-foreground">Avg. Package:</span>
                      <span className="font-semibold text-primary ml-1">{program?.averagePackage}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-muted-foreground text-xs">Top Recruiters</span>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-1 mt-1">
                    {program?.topRecruiters?.slice(0, 3)?.map((recruiter, index) =>
                  <span key={index} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {recruiter}
                      </span>
                  )}
                  </div>
                </div>

                {/* CTA */}
                <Link
                to="/programs-departments"
                className="block w-full text-center py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200">

                  Explore Program
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* View All Programs */}
        <div className="text-center mt-12">
          <Link to="/programs-departments">
            <button className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 text-lg">
              View All Programs
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>);

};

export default ProgramExplorer;