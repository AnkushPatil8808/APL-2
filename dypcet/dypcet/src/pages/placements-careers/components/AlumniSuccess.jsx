import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AlumniSuccess = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
  { id: 'all', label: 'All Stories', count: 12 },
  { id: 'tech', label: 'Technology', count: 5 },
  { id: 'automotive', label: 'Automotive', count: 3 },
  { id: 'startup', label: 'Entrepreneurship', count: 2 },
  { id: 'research', label: 'Research', count: 2 }];


  const successStories = [
  {
    id: 1,
    name: "Arjun Deshmukh",
    batch: "2019",
    branch: "Computer Science",
    currentRole: "Senior Software Engineer",
    company: "Google India",
    location: "Bangalore",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_127155dc1-1762273813597.png",
    imageAlt: "Professional headshot of young Indian man in casual blue shirt with confident smile",
    category: "tech",
    package: "₹35 LPA",
    story: `Started as a fresher at a startup, worked my way up through dedication and continuous learning. The strong foundation I received at DYPCET in algorithms and system design helped me crack Google's interview process.\n\nCurrently working on machine learning infrastructure that serves millions of users globally.`,
    achievements: ["Google Cloud Certified", "Published 3 research papers", "Led team of 8 engineers"],
    linkedin: "https://linkedin.com/in/arjun-deshmukh"
  },
  {
    id: 2,
    name: "Priya Kulkarni",
    batch: "2018",
    branch: "Mechanical Engineering",
    currentRole: "Product Manager",
    company: "Tesla Motors",
    location: "California, USA",
    image: "https://images.unsplash.com/photo-1652396944757-ad27b62b33f6",
    imageAlt: "Professional portrait of young Indian woman in formal blazer with warm smile",
    category: "automotive",
    package: "$120K",
    story: `My journey from mechanical engineering to product management at Tesla has been incredible. The problem-solving skills and technical foundation from DYPCET gave me the confidence to transition into product roles.\n\nNow I'm working on sustainable transportation solutions that will shape the future.`,
    achievements: ["MBA from Stanford", "Led 5 product launches", "Patent holder"],
    linkedin: "https://linkedin.com/in/priya-kulkarni"
  },
  {
    id: 3,
    name: "Rohit Sharma",
    batch: "2017",
    branch: "Electronics & Telecom",
    currentRole: "Founder & CEO",
    company: "TechVision AI",
    location: "Pune",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d59044a1-1762274404379.png",
    imageAlt: "Executive portrait of young Indian entrepreneur in navy suit with determined expression",
    category: "startup",
    package: "₹50 LPA+",
    story: `Founded TechVision AI in 2020 with a vision to democratize artificial intelligence for small businesses. The entrepreneurial mindset and technical skills developed at DYPCET were crucial in building our product.\n\nWe've now raised Series A funding and serve over 500 clients across India.`,
    achievements: ["Raised ₹15 Cr funding", "Forbes 30 Under 30", "50+ team members"],
    linkedin: "https://linkedin.com/in/rohit-sharma-ceo"
  },
  {
    id: 4,
    name: "Sneha Patil",
    batch: "2020",
    branch: "Information Technology",
    currentRole: "Data Scientist",
    company: "Microsoft",
    location: "Hyderabad",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10c15adc3-1762273977638.png",
    imageAlt: "Professional headshot of young Indian woman with shoulder-length hair in corporate attire",
    category: "tech",
    package: "₹28 LPA",
    story: `Passionate about using data to solve real-world problems. The strong mathematical foundation and programming skills from DYPCET helped me transition into data science.\n\nCurrently working on AI models that help improve accessibility features in Microsoft products.`,
    achievements: ["Microsoft AI Certified", "Kaggle Expert", "Published in top conferences"],
    linkedin: "https://linkedin.com/in/sneha-patil-ds"
  },
  {
    id: 5,
    name: "Vikram Joshi",
    batch: "2016",
    branch: "Mechanical Engineering",
    currentRole: "Chief Design Engineer",
    company: "Mahindra Racing",
    location: "Chennai",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c2728c0-1762249088508.png",
    imageAlt: "Professional portrait of experienced Indian engineer in formal shirt with focused expression",
    category: "automotive",
    package: "₹32 LPA",
    story: `Living my dream of working in Formula E racing. The mechanical engineering fundamentals and hands-on project experience at DYPCET prepared me for the fast-paced world of motorsports.\n\nLeading the aerodynamics team for Mahindra's Formula E championship campaign.`,
    achievements: ["Formula E Championship", "15+ patents", "SAE International member"],
    linkedin: "https://linkedin.com/in/vikram-joshi-racing"
  },
  {
    id: 6,
    name: "Dr. Anita Rao",
    batch: "2015",
    branch: "Electronics & Telecom",
    currentRole: "Research Scientist",
    company: "IIT Bombay",
    location: "Mumbai",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10c15adc3-1762273977638.png",
    imageAlt: "Academic portrait of Indian woman researcher in professional attire with scholarly demeanor",
    category: "research",
    package: "₹18 LPA",
    story: `Pursuing my passion for research in wireless communications. The research culture and faculty mentorship at DYPCET inspired me to pursue higher studies and contribute to cutting-edge technology.\n\nCurrently working on 6G wireless technology that will revolutionize connectivity.`,
    achievements: ["PhD from IIT Bombay", "50+ publications", "IEEE Senior Member"],
    linkedin: "https://linkedin.com/in/dr-anita-rao"
  }];


  const filteredStories = selectedCategory === 'all' ?
  successStories :
  successStories?.filter((story) => story?.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Alumni Success Stories</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover how DYPCET graduates are making their mark across industries and shaping the future
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories?.map((category) =>
        <button
          key={category?.id}
          onClick={() => setSelectedCategory(category?.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          selectedCategory === category?.id ?
          'bg-primary text-primary-foreground shadow-brand' :
          'bg-muted text-muted-foreground hover:bg-muted/80'}`
          }>

            {category?.label} ({category?.count})
          </button>
        )}
      </div>
      {/* Success Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredStories?.map((story) =>
        <div
          key={story?.id}
          className="bg-card rounded-lg p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover-lift border border-border">

            <div className="flex items-start space-x-4 mb-4">
              <Image
              src={story?.image}
              alt={story?.imageAlt}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0" />

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground">{story?.name}</h3>
                <p className="text-sm text-primary font-medium">{story?.currentRole}</p>
                <p className="text-sm text-muted-foreground">{story?.company} • {story?.location}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                    {story?.branch} • {story?.batch}
                  </span>
                  <span className="text-xs font-semibold text-success">
                    {story?.package}
                  </span>
                </div>
              </div>
            </div>

            <blockquote className="text-sm text-foreground leading-relaxed mb-4 whitespace-pre-line">
              "{story?.story}"
            </blockquote>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-2">Key Achievements:</p>
                <div className="flex flex-wrap gap-1">
                  {story?.achievements?.map((achievement, index) =>
                <span
                  key={index}
                  className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">

                      {achievement}
                    </span>
                )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <a
                href={story?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm">

                  <Icon name="Linkedin" size={16} />
                  <span>Connect on LinkedIn</span>
                </a>
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm">
                  <Icon name="Share2" size={16} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold text-foreground mb-4">Join Our Alumni Network</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Connect with fellow DYPCET graduates, share your success story, and help current students with mentorship and guidance
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200">
            <Icon name="Users" size={20} />
            <span>Join Alumni Network</span>
          </button>
          <button className="inline-flex items-center space-x-2 border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors duration-200">
            <Icon name="PlusCircle" size={20} />
            <span>Share Your Story</span>
          </button>
        </div>
      </div>
    </div>);

};

export default AlumniSuccess;