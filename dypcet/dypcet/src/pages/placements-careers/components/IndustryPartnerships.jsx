import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IndustryPartnerships = () => {
  const partners = [
  {
    id: 1,
    name: "Tata Consultancy Services",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b3dd71e1-1762436507926.png",
    logoAlt: "TCS corporate logo with distinctive blue branding and professional typography",
    category: "IT Services",
    partnership: "Platinum Partner",
    hiredLastYear: 45,
    avgPackage: "₹6.5 LPA",
    roles: ["Software Developer", "System Analyst", "Technical Consultant"]
  },
  {
    id: 2,
    name: "Infosys Limited",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_15d67c3ea-1762436508146.png",
    logoAlt: "Infosys company logo featuring modern blue and orange design elements",
    category: "IT Services",
    partnership: "Gold Partner",
    hiredLastYear: 38,
    avgPackage: "₹7.2 LPA",
    roles: ["Software Engineer", "Business Analyst", "Quality Analyst"]
  },
  {
    id: 3,
    name: "Mahindra & Mahindra",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11431791e-1762436511678.png",
    logoAlt: "Mahindra corporate logo with red branding and automotive industry symbolism",
    category: "Automotive",
    partnership: "Strategic Partner",
    hiredLastYear: 28,
    avgPackage: "₹8.5 LPA",
    roles: ["Design Engineer", "Production Engineer", "R&D Engineer"]
  },
  {
    id: 4,
    name: "L&T Technology Services",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_165528b6d-1762436508273.png",
    logoAlt: "L&T Technology Services logo with engineering-focused blue and gray design",
    category: "Engineering Services",
    partnership: "Platinum Partner",
    hiredLastYear: 35,
    avgPackage: "₹9.2 LPA",
    roles: ["Project Engineer", "Technical Lead", "Design Specialist"]
  },
  {
    id: 5,
    name: "Bajaj Auto",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1520d3738-1762436508532.png",
    logoAlt: "Bajaj Auto logo with distinctive red and white automotive branding",
    category: "Automotive",
    partnership: "Gold Partner",
    hiredLastYear: 22,
    avgPackage: "₹7.8 LPA",
    roles: ["Manufacturing Engineer", "Quality Engineer", "Product Developer"]
  },
  {
    id: 6,
    name: "Persistent Systems",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1adeb3322-1762436508681.png",
    logoAlt: "Persistent Systems corporate logo with modern tech industry styling",
    category: "Software",
    partnership: "Strategic Partner",
    hiredLastYear: 31,
    avgPackage: "₹8.8 LPA",
    roles: ["Software Developer", "DevOps Engineer", "Product Manager"]
  }];


  const getPartnershipBadge = (partnership) => {
    const badges = {
      "Platinum Partner": "bg-accent/10 text-accent border-accent/20",
      "Gold Partner": "bg-warning/10 text-warning border-warning/20",
      "Strategic Partner": "bg-primary/10 text-primary border-primary/20"
    };
    return badges?.[partnership] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Industry Partnerships</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Strong collaborations with leading companies ensuring excellent placement opportunities and industry exposure
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners?.map((partner) =>
        <div
          key={partner?.id}
          className="bg-card rounded-lg p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover-lift border border-border">

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                  src={partner?.logo}
                  alt={partner?.logoAlt}
                  className="w-full h-full object-contain" />

                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{partner?.name}</h3>
                  <p className="text-xs text-muted-foreground">{partner?.category}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPartnershipBadge(partner?.partnership)}`}>
                {partner?.partnership}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Students Hired (2023-24)</span>
                <span className="font-semibold text-foreground">{partner?.hiredLastYear}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Average Package</span>
                <span className="font-semibold text-primary">{partner?.avgPackage}</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Key Roles:</p>
              <div className="flex flex-wrap gap-1">
                {partner?.roles?.map((role, index) =>
              <span
                key={index}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">

                    {role}
                  </span>
              )}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm">
                <Icon name="ExternalLink" size={16} />
                <span>View Partnership Details</span>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="bg-muted/30 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-foreground mb-2">Interested in Partnership?</h3>
        <p className="text-muted-foreground mb-4">
          Join our network of industry partners and access top engineering talent from DYPCET
        </p>
        <button className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200">
          <Icon name="Handshake" size={20} />
          <span>Become a Partner</span>
        </button>
      </div>
    </div>);

};

export default IndustryPartnerships;