import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CareerServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    year: '',
    service: '',
    preferredDate: '',
    message: ''
  });

  const services = [
    {
      id: 1,
      title: "Resume Building Workshop",
      description: "Learn to create compelling resumes that stand out to recruiters",
      duration: "2 hours",
      mode: "In-person",
      nextSession: "15th Nov 2024",
      icon: "FileText",
      features: [
        "Professional resume templates",
        "ATS-friendly formatting",
        "Industry-specific guidance",
        "Personal branding tips"
      ]
    },
    {
      id: 2,
      title: "Interview Preparation",
      description: "Comprehensive training for technical and HR interviews",
      duration: "3 hours",
      mode: "Hybrid",
      nextSession: "18th Nov 2024",
      icon: "MessageSquare",
      features: [
        "Mock interviews",
        "Technical problem solving",
        "Behavioral questions",
        "Group discussion practice"
      ]
    },
    {
      id: 3,
      title: "Aptitude Training",
      description: "Enhance logical reasoning and quantitative skills",
      duration: "4 weeks",
      mode: "Online",
      nextSession: "20th Nov 2024",
      icon: "Calculator",
      features: [
        "Quantitative aptitude",
        "Logical reasoning",
        "Verbal ability",
        "Practice tests"
      ]
    },
    {
      id: 4,
      title: "Soft Skills Development",
      description: "Build communication and leadership skills",
      duration: "2 days",
      mode: "In-person",
      nextSession: "22nd Nov 2024",
      icon: "Users",
      features: [
        "Communication skills",
        "Leadership training",
        "Team collaboration",
        "Presentation skills"
      ]
    },
    {
      id: 5,
      title: "Industry Mentorship",
      description: "One-on-one guidance from industry professionals",
      duration: "Ongoing",
      mode: "Virtual",
      nextSession: "Available",
      icon: "UserCheck",
      features: [
        "Career guidance",
        "Industry insights",
        "Networking opportunities",
        "Skill development"
      ]
    },
    {
      id: 6,
      title: "Placement Preparation",
      description: "Complete preparation for campus placement drives",
      duration: "6 weeks",
      mode: "Hybrid",
      nextSession: "25th Nov 2024",
      icon: "Target",
      features: [
        "Company-specific preparation",
        "Technical assessments",
        "HR round training",
        "Salary negotiation"
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBooking = (e) => {
    e?.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', bookingForm);
    alert('Booking request submitted successfully! We will contact you soon.');
    setSelectedService(null);
    setBookingForm({
      name: '',
      email: '',
      phone: '',
      branch: '',
      year: '',
      service: '',
      preferredDate: '',
      message: ''
    });
  };

  const openBookingModal = (service) => {
    setSelectedService(service);
    setBookingForm(prev => ({
      ...prev,
      service: service?.title
    }));
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Career Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Comprehensive career development programs to enhance your employability and professional skills
        </p>
      </div>
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <div 
            key={service?.id}
            className="bg-card rounded-lg p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover-lift border border-border"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-primary/10 text-primary rounded-lg">
                <Icon name={service?.icon} size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{service?.title}</h3>
                <p className="text-sm text-muted-foreground">{service?.duration} • {service?.mode}</p>
              </div>
            </div>

            <p className="text-sm text-foreground mb-4">{service?.description}</p>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Next Session:</span>
                <span className="font-medium text-accent">{service?.nextSession}</span>
              </div>
              
              <div>
                <p className="text-sm font-medium text-foreground mb-2">What you'll learn:</p>
                <ul className="space-y-1">
                  {service?.features?.slice(0, 3)?.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {service?.features?.length > 3 && (
                    <li className="text-sm text-primary">
                      +{service?.features?.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <Button 
              variant="default" 
              fullWidth
              onClick={() => openBookingModal(service)}
            >
              Book Session
            </Button>
          </div>
        ))}
      </div>
      {/* Additional Resources */}
      <div className="bg-muted/30 rounded-lg p-8">
        <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Additional Resources</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="p-4 bg-primary/10 text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icon name="BookOpen" size={24} />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Study Materials</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Access comprehensive study materials, practice tests, and preparation guides
            </p>
            <Button variant="outline" size="sm">
              <Icon name="Download" size={16} className="mr-2" />
              Download Resources
            </Button>
          </div>

          <div className="text-center">
            <div className="p-4 bg-accent/10 text-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icon name="Video" size={24} />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Video Tutorials</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Watch expert-led video sessions on interview techniques and career guidance
            </p>
            <Button variant="outline" size="sm">
              <Icon name="Play" size={16} className="mr-2" />
              Watch Videos
            </Button>
          </div>

          <div className="text-center">
            <div className="p-4 bg-success/10 text-success rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Icon name="Calendar" size={24} />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Career Counseling</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Schedule one-on-one sessions with career counselors for personalized guidance
            </p>
            <Button variant="outline" size="sm">
              <Icon name="CalendarPlus" size={16} className="mr-2" />
              Schedule Session
            </Button>
          </div>
        </div>
      </div>
      {/* Booking Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Book {selectedService?.title}</h3>
              <button 
                onClick={() => setSelectedService(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            <form onSubmit={handleBooking} className="space-y-4">
              <Input
                label="Full Name"
                type="text"
                name="name"
                value={bookingForm?.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your full name"
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={bookingForm?.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
              />

              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={bookingForm?.phone}
                onChange={handleInputChange}
                required
                placeholder="Enter your phone number"
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Branch"
                  type="text"
                  name="branch"
                  value={bookingForm?.branch}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., CSE"
                />

                <Input
                  label="Year"
                  type="text"
                  name="year"
                  value={bookingForm?.year}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 3rd Year"
                />
              </div>

              <Input
                label="Preferred Date"
                type="date"
                name="preferredDate"
                value={bookingForm?.preferredDate}
                onChange={handleInputChange}
                required
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={bookingForm?.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  fullWidth
                  onClick={() => setSelectedService(null)}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="default" fullWidth>
                  Submit Booking
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerServices;