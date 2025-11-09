import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ResearchAreas = () => {
  const researchAreas = [
  {
    id: 1,
    title: "Artificial Intelligence & Machine Learning",
    description: "Advanced AI algorithms, deep learning models, and intelligent systems for real-world applications.",
    image: "https://images.unsplash.com/photo-1701848055770-effbdb148e15",
    imageAlt: "Computer screens displaying neural network diagrams and AI algorithm visualizations in modern tech lab",
    icon: "Brain",
    projects: 25,
    funding: "₹8.5Cr",
    publications: 85,
    highlights: [
    "Computer Vision for Medical Diagnosis",
    "Natural Language Processing Systems",
    "Autonomous Vehicle Navigation"]

  },
  {
    id: 2,
    title: "Renewable Energy Systems",
    description: "Sustainable energy solutions, solar technology optimization, and smart grid implementations.",
    image: "https://images.unsplash.com/photo-1695738655303-22ab8dbfee1b",
    imageAlt: "Solar panels and wind turbines in renewable energy research facility with monitoring equipment",
    icon: "Zap",
    projects: 18,
    funding: "₹6.2Cr",
    publications: 62,
    highlights: [
    "High-Efficiency Solar Cell Design",
    "Energy Storage Optimization",
    "Microgrid Management Systems"]

  },
  {
    id: 3,
    title: "Biomedical Engineering",
    description: "Medical device innovation, biomaterials research, and healthcare technology development.",
    image: "https://images.unsplash.com/photo-1668511237484-047dc0e76b3e",
    imageAlt: "Biomedical researchers examining tissue samples under microscopes in sterile laboratory environment",
    icon: "Heart",
    projects: 22,
    funding: "₹5.8Cr",
    publications: 74,
    highlights: [
    "Prosthetic Limb Development",
    "Drug Delivery Systems",
    "Medical Imaging Enhancement"]

  },
  {
    id: 4,
    title: "Advanced Materials Science",
    description: "Nanomaterials, composite structures, and smart materials for next-generation applications.",
    image: "https://images.unsplash.com/photo-1624957485467-f33854e1ad85",
    imageAlt: "Scientists analyzing molecular structures and material samples in advanced materials research laboratory",
    icon: "Atom",
    projects: 20,
    funding: "₹4.5Cr",
    publications: 58,
    highlights: [
    "Carbon Nanotube Applications",
    "Self-Healing Materials",
    "Aerospace Composites"]

  }];


  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <Icon name="Microscope" size={24} />
            <span className="text-sm font-semibold uppercase tracking-wider">Research Domains</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Leading Research Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our multidisciplinary research spans cutting-edge domains, driving innovation and creating solutions for tomorrow's challenges.
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="space-y-16">
          {researchAreas?.map((area, index) =>
          <div
            key={area?.id}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`
            }>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name={area?.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {area?.title}
                  </h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {area?.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold text-primary">{area?.projects}</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold text-accent">{area?.funding}</div>
                    <div className="text-sm text-muted-foreground">Funding</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg border">
                    <div className="text-2xl font-bold text-success">{area?.publications}</div>
                    <div className="text-sm text-muted-foreground">Papers</div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Research Highlights:</h4>
                  <ul className="space-y-2">
                    {area?.highlights?.map((highlight, idx) =>
                  <li key={idx} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                  )}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-brand-lg">
                  <Image
                  src={area?.image}
                  alt={area?.imageAlt}
                  className="w-full h-80 lg:h-96 object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" size={16} className="text-primary" />
                      <span className="text-sm font-semibold text-foreground">Active Research</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default ResearchAreas;