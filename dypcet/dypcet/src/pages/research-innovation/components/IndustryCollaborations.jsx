import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const IndustryCollaborations = () => {
  const collaborations = [
  {
    id: 1,
    company: "Tata Consultancy Services",
    logo: "https://images.unsplash.com/photo-1687187616853-aa54a4ac8c32",
    logoAlt: "TCS corporate logo on modern office building representing technology partnership",
    type: "Technology Partnership",
    duration: "5 Years",
    value: "₹15 Crores",
    projects: [
    "AI-Driven Software Testing Automation",
    "Blockchain for Supply Chain Management",
    "IoT Solutions for Smart Manufacturing"],

    outcomes: [
    "25 Joint Research Papers",
    "150+ Student Internships",
    "12 Patent Applications"],

    keyAreas: ["Artificial Intelligence", "Blockchain Technology", "IoT Systems"],
    startYear: 2020,
    status: "Active",
    impact: "Industry-Ready Graduates"
  },
  {
    id: 2,
    company: "Mahindra & Mahindra",
    logo: "https://images.unsplash.com/photo-1685302822097-16f1e05bd855",
    logoAlt: "Mahindra automotive manufacturing facility showcasing industrial engineering collaboration",
    type: "Research Collaboration",
    duration: "3 Years",
    value: "₹8 Crores",
    projects: [
    "Electric Vehicle Battery Optimization",
    "Autonomous Driving Systems",
    "Sustainable Manufacturing Processes"],

    outcomes: [
    "18 Research Publications",
    "80+ Student Projects",
    "8 Technology Transfers"],

    keyAreas: ["Electric Vehicles", "Autonomous Systems", "Green Manufacturing"],
    startYear: 2021,
    status: "Active",
    impact: "Sustainable Mobility Solutions"
  },
  {
    id: 3,
    company: "Infosys Limited",
    logo: "https://images.unsplash.com/photo-1719169643140-1af8c57d5b58",
    logoAlt: "Infosys technology campus with modern architecture representing software innovation partnership",
    type: "Innovation Lab",
    duration: "4 Years",
    value: "₹12 Crores",
    projects: [
    "Machine Learning for Financial Services",
    "Cloud-Native Application Development",
    "Cybersecurity Framework Enhancement"],

    outcomes: [
    "30 Joint Publications",
    "200+ Trained Students",
    "15 Commercial Solutions"],

    keyAreas: ["Machine Learning", "Cloud Computing", "Cybersecurity"],
    startYear: 2019,
    status: "Active",
    impact: "Digital Transformation Leaders"
  },
  {
    id: 4,
    company: "Bajaj Auto Limited",
    logo: "https://images.unsplash.com/photo-1685302822097-16f1e05bd855",
    logoAlt: "Bajaj automotive assembly line showing advanced manufacturing and engineering processes",
    type: "Joint Research Center",
    duration: "6 Years",
    value: "₹20 Crores",
    projects: [
    "Advanced Engine Design Optimization",
    "Lightweight Material Development",
    "Smart Vehicle Connectivity Systems"],

    outcomes: [
    "35 Research Papers",
    "120+ Internship Placements",
    "20 Patent Filings"],

    keyAreas: ["Automotive Engineering", "Materials Science", "Connected Vehicles"],
    startYear: 2018,
    status: "Active",
    impact: "Next-Gen Automotive Technology"
  }];


  const partnerLogos = [
  {
    name: "Microsoft",
    logo: "https://images.unsplash.com/photo-1621181910510-ab55e3ec26a4",
    logoAlt: "Microsoft corporate headquarters building representing cloud computing partnership"
  },
  {
    name: "Google",
    logo: "https://images.unsplash.com/photo-1718838998627-f5bc4167c043",
    logoAlt: "Google technology campus showcasing AI and machine learning collaboration"
  },
  {
    name: "Amazon",
    logo: "https://images.unsplash.com/photo-1669003154621-c7599510ae25",
    logoAlt: "Amazon fulfillment center representing cloud services and logistics partnership"
  },
  {
    name: "IBM",
    logo: "https://images.unsplash.com/photo-1543085272-0cc8a5a95029",
    logoAlt: "IBM research facility showcasing enterprise technology and AI solutions partnership"
  },
  {
    name: "Intel",
    logo: "https://images.unsplash.com/photo-1679454690793-83340db232db",
    logoAlt: "Intel semiconductor manufacturing facility representing hardware innovation collaboration"
  },
  {
    name: "Siemens",
    logo: "https://images.unsplash.com/photo-1710949013099-8d05070ffdcb",
    logoAlt: "Siemens industrial automation facility showcasing engineering technology partnership"
  }];


  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-success/10 text-success';
      case 'Completed':
        return 'bg-muted text-muted-foreground';
      case 'Upcoming':
        return 'bg-primary/10 text-primary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Building" size={24} />
            <span className="text-sm font-semibold uppercase tracking-wider">Industry Partnerships</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Bridging Academia & Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic collaborations with leading companies drive innovation, create real-world solutions, and provide students with industry exposure.
          </p>
        </div>

        {/* Collaboration Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Industry Partners</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="text-3xl font-bold text-accent mb-2">₹55Cr</div>
            <div className="text-sm text-muted-foreground">Total Investment</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="text-3xl font-bold text-success mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Joint Projects</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="text-3xl font-bold text-warning mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Student Placements</div>
          </div>
        </div>

        {/* Major Collaborations */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Major Collaborations</h3>
          
          {collaborations?.map((collab, index) =>
          <div key={collab?.id} className="bg-card rounded-2xl shadow-brand border overflow-hidden">
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-muted rounded-xl overflow-hidden">
                        <Image
                        src={collab?.logo}
                        alt={collab?.logoAlt}
                        className="w-full h-full object-cover" />

                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{collab?.company}</h4>
                        <p className="text-primary font-medium">{collab?.type}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Duration:</span>
                        <span className="font-medium text-foreground">{collab?.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Investment:</span>
                        <span className="font-bold text-accent">{collab?.value}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Status:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(collab?.status)}`}>
                          {collab?.status}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-foreground">Key Focus Areas:</h5>
                      <div className="flex flex-wrap gap-2">
                        {collab?.keyAreas?.map((area, idx) =>
                      <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                            {area}
                          </span>
                      )}
                      </div>
                    </div>
                  </div>

                  {/* Projects */}
                  <div className="space-y-4">
                    <h5 className="font-semibold text-foreground flex items-center">
                      <Icon name="Lightbulb" size={16} className="mr-2 text-accent" />
                      Active Projects
                    </h5>
                    <ul className="space-y-3">
                      {collab?.projects?.map((project, idx) =>
                    <li key={idx} className="flex items-start space-x-3">
                          <Icon name="ArrowRight" size={14} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{project}</span>
                        </li>
                    )}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-4">
                    <h5 className="font-semibold text-foreground flex items-center">
                      <Icon name="TrendingUp" size={16} className="mr-2 text-success" />
                      Key Outcomes
                    </h5>
                    <ul className="space-y-3">
                      {collab?.outcomes?.map((outcome, idx) =>
                    <li key={idx} className="flex items-start space-x-3">
                          <Icon name="CheckCircle" size={14} className="text-success mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{outcome}</span>
                        </li>
                    )}
                    </ul>
                    
                    <div className="mt-4 p-4 bg-success/5 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="Target" size={16} className="text-success" />
                        <span className="text-sm font-medium text-success">Impact: {collab?.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Partner Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Technology Partners</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partnerLogos?.map((partner, index) =>
            <div key={index} className="flex items-center justify-center p-4 bg-card rounded-lg shadow-brand hover:shadow-brand-lg transition-all duration-300 grayscale hover:grayscale-0">
                <Image
                src={partner?.logo}
                alt={partner?.logoAlt}
                className="w-full h-12 object-contain" />

              </div>
            )}
          </div>
        </div>

        {/* Collaboration Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} className="text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Industry Exposure</h4>
            <p className="text-muted-foreground text-sm">Students gain hands-on experience with real-world projects and industry best practices.</p>
          </div>

          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Lightbulb" size={32} className="text-accent" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Innovation Hub</h4>
            <p className="text-muted-foreground text-sm">Collaborative research drives breakthrough innovations and technological advancements.</p>
          </div>

          <div className="text-center p-6 bg-card rounded-xl shadow-brand">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={32} className="text-success" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Career Growth</h4>
            <p className="text-muted-foreground text-sm">Direct pathways to employment and career advancement through industry connections.</p>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Partner With DYPCET
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our ecosystem of innovation and collaborate with the next generation of engineers. Together, we can create solutions that shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              <Icon name="Handshake" size={20} className="mr-2" />
              Explore Partnership
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="FileText" size={20} className="mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default IndustryCollaborations;