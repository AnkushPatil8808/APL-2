import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecruiterTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Senior HR Manager",
    company: "Tata Consultancy Services",
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_114f59440-1762436508024.png",
    companyLogoAlt: "TCS company logo with blue and white corporate branding",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18b726723-1762274568454.png",
    imageAlt: "Professional headshot of middle-aged Indian man in navy blue suit with confident smile",
    testimonial: `DYPCET graduates consistently demonstrate exceptional technical skills and problem-solving abilities. Their practical approach to engineering challenges and strong work ethic make them valuable additions to our teams.\n\nWe've been recruiting from DYPCET for over 8 years and have always been impressed with the quality of talent.`,
    rating: 5,
    hiredCount: 45
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Technical Recruitment Lead",
    company: "Infosys Limited",
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_19c030096-1762436508771.png",
    companyLogoAlt: "Infosys company logo with modern blue and orange design elements",
    image: "https://images.unsplash.com/photo-1652396944757-ad27b62b33f6",
    imageAlt: "Professional portrait of young Indian woman in formal blazer with warm smile",
    testimonial: `The engineering graduates from DYPCET stand out for their strong foundation in both theoretical concepts and practical implementation. Their ability to adapt to new technologies and work collaboratively makes them ideal for our dynamic work environment.\n\nWe look forward to continuing our partnership with DYPCET.`,
    rating: 5,
    hiredCount: 38
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "VP Engineering",
    company: "Wipro Technologies",
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_1efc03317-1762436508281.png",
    companyLogoAlt: "Wipro company logo featuring distinctive orange and blue corporate identity",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_104f9bb1d-1762273762852.png",
    imageAlt: "Executive portrait of experienced Indian man in charcoal suit with professional demeanor",
    testimonial: `DYPCET has been one of our preferred recruitment partners. The students are well-prepared for industry challenges and show remarkable growth potential. Their technical competency combined with good communication skills makes them excellent team players.\n\nWe've consistently had positive experiences with DYPCET alumni in our organization.`,
    rating: 5,
    hiredCount: 52
  }];


  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <div className="bg-muted/30 rounded-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">What Recruiters Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear from industry leaders about the quality and capabilities of DYPCET graduates
        </p>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-card rounded-lg p-8 shadow-brand">
          <div className="flex items-start space-x-6 mb-6">
            <div className="flex-shrink-0">
              <Image
                src={testimonials?.[activeTestimonial]?.image}
                alt={testimonials?.[activeTestimonial]?.imageAlt}
                className="w-16 h-16 rounded-full object-cover" />

            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-2">
                <Image
                  src={testimonials?.[activeTestimonial]?.companyLogo}
                  alt={testimonials?.[activeTestimonial]?.companyLogoAlt}
                  className="w-12 h-12 object-contain" />

                <div>
                  <h3 className="font-semibold text-foreground">{testimonials?.[activeTestimonial]?.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonials?.[activeTestimonial]?.position}</p>
                  <p className="text-sm font-medium text-primary">{testimonials?.[activeTestimonial]?.company}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials?.[activeTestimonial]?.rating)]?.map((_, i) =>
                  <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                  )}
                </div>
                <span className="text-sm text-muted-foreground">
                  {testimonials?.[activeTestimonial]?.hiredCount} students hired
                </span>
              </div>
            </div>
          </div>

          <blockquote className="text-foreground leading-relaxed whitespace-pre-line">
            "{testimonials?.[activeTestimonial]?.testimonial}"
          </blockquote>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prevTestimonial}
            className="flex items-center space-x-2 px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-200">

            <Icon name="ChevronLeft" size={20} />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === activeTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'}`
              } />

            )}
          </div>

          <button
            onClick={nextTestimonial}
            className="flex items-center space-x-2 px-4 py-2 text-muted-foreground hover:text-primary transition-colors duration-200">

            <span>Next</span>
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
    </div>);

};

export default RecruiterTestimonials;