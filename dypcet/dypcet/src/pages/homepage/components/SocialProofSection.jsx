import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProofSection = () => {
  const placementStats = [
  { label: "Placement Rate", value: "100%", icon: "TrendingUp", color: "text-green-600" },
  { label: "Average Package", value: "₹8.5L", icon: "IndianRupee", color: "text-blue-600" },
  { label: "Highest Package", value: "₹45L", icon: "Award", color: "text-purple-600" },
  { label: "Companies Visited", value: "250+", icon: "Building2", color: "text-orange-600" }];


  const recruiterLogos = [
  { name: "Google", logo: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1", logoAlt: "Google company logo in colorful letters on white background" },
  { name: "Microsoft", logo: "https://images.unsplash.com/photo-1706426634339-153de9f0c7f8", logoAlt: "Microsoft company logo with four colored squares forming window pattern" },
  { name: "Amazon", logo: "https://img.rocket.new/generatedImages/rocket_gen_img_175e8590c-1762436509241.png", logoAlt: "Amazon company logo with curved arrow from A to Z on white background" },
  { name: "TCS", logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c5c84745-1762436510015.png", logoAlt: "TCS Tata Consultancy Services company logo in blue corporate font" },
  { name: "Infosys", logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e71f69fb-1762436508773.png", logoAlt: "Infosys company logo in blue text with distinctive geometric design" },
  { name: "Wipro", logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1ac3d016c-1762436508863.png", logoAlt: "Wipro company logo in orange and blue colors with modern typography" }];


  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer at Google",
    batch: "CSE 2023",
    content: "DYPCET\'s comprehensive curriculum and industry exposure prepared me exceptionally well for my role at Google. The faculty\'s guidance and practical projects were instrumental in my success.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12a644799-1762274460529.png",
    imageAlt: "Professional headshot of young Indian woman with long dark hair in business attire smiling at camera",
    package: "₹42L"
  },
  {
    id: 2,
    name: "Rahul Patil",
    role: "Data Scientist at Microsoft",
    batch: "AI&DS 2023",
    content: "The AI & Data Science program at DYPCET is world-class. The research opportunities and industry collaborations gave me the edge I needed to secure my dream job.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_156075397-1762249047116.png",
    imageAlt: "Professional headshot of young Indian man with short black hair in navy blue suit smiling confidently",
    package: "₹38L"
  },
  {
    id: 3,
    name: "Sneha Desai",
    role: "Product Manager at Amazon",
    batch: "ECE 2022",
    content: "DYPCET's emphasis on innovation and entrepreneurship shaped my career path. The mentorship from faculty and alumni network opened doors to amazing opportunities.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12a644799-1762274460529.png",
    imageAlt: "Professional headshot of young Indian woman with shoulder-length hair in white blazer smiling warmly",
    package: "₹35L"
  }];


  const accreditations = [
  { name: "NAAC A+ Grade", icon: "Shield", description: "National Assessment and Accreditation Council" },
  { name: "NBA Accredited", icon: "CheckCircle", description: "National Board of Accreditation" },
  { name: "AICTE Approved", icon: "Award", description: "All India Council for Technical Education" },
  { name: "ISO 9001:2015", icon: "Star", description: "Quality Management System Certified" }];


  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Placement Statistics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Placement Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Our students consistently achieve outstanding career outcomes with top companies worldwide
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {placementStats?.map((stat, index) =>
            <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-brand mb-4 ${stat?.color}`}>
                  <Icon name={stat?.icon} size={32} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat?.value}</div>
                <div className="text-sm text-muted-foreground">{stat?.label}</div>
              </div>
            )}
          </div>
        </div>

        {/* Top Recruiters */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {recruiterLogos?.map((company, index) =>
            <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow duration-200">
                <Image
                src={company?.logo}
                alt={company?.logoAlt}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200" />

              </div>
            )}
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">
            Success Stories from Our Alumni
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) =>
            <div key={testimonial?.id} className="bg-white rounded-xl shadow-brand p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Image
                  src={testimonial?.image}
                  alt={testimonial?.imageAlt}
                  className="w-16 h-16 rounded-full object-cover mr-4" />

                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                    <p className="text-sm text-primary font-medium">{testimonial?.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial?.batch}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-lg font-bold text-accent">{testimonial?.package}</div>
                    <div className="text-xs text-muted-foreground">Package</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed italic">
                  "{testimonial?.content}"
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)]?.map((_, i) =>
                <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Accreditations */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Accreditations & Certifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {accreditations?.map((accreditation, index) =>
            <div key={index} className="bg-white rounded-lg shadow-brand p-6 text-center border border-gray-200">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Icon name={accreditation?.icon} size={24} />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{accreditation?.name}</h4>
                <p className="text-xs text-muted-foreground">{accreditation?.description}</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Success Story?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of successful alumni who started their journey at DYPCET. Your dream career awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admissions">
                <button className="px-8 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  Apply Now
                </button>
              </Link>
              <Link to="/placements-careers">
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary transition-colors duration-200">
                  View Placement Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SocialProofSection;