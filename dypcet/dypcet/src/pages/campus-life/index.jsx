import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FacilityCard from './components/FacilityCard';
import HostelCard from './components/HostelCard';
import ClubCard from './components/ClubCard';
import EventCard from './components/EventCard';
import TestimonialCard from './components/TestimonialCard';
import AchievementCard from './components/AchievementCard';
import VirtualTourSection from './components/VirtualTourSection';

const CampusLife = () => {
  const [activeTab, setActiveTab] = useState('facilities');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock data for facilities
  const facilities = [
  {
    id: 1,
    name: "Central Library",
    category: "Academic",
    description: "State-of-the-art library with over 50,000 books, digital resources, and quiet study spaces for focused learning.",
    image: "https://images.unsplash.com/photo-1628839083546-5f8cbd17bcc7",
    imageAlt: "Modern library interior with rows of bookshelves, study desks, and students reading in natural lighting",
    location: "Block A, Ground Floor",
    features: [
    "Digital Library Access",
    "24/7 Study Halls",
    "Research Databases",
    "Group Discussion Rooms"]

  },
  {
    id: 2,
    name: "Sports Complex",
    category: "Recreation",
    description: "Comprehensive sports facility with indoor and outdoor courts, gymnasium, and fitness equipment for all sports activities.",
    image: "https://images.unsplash.com/photo-1709949908244-6ebd4fc55b50",
    imageAlt: "Modern sports complex with basketball court, gymnasium equipment, and athletic facilities",
    location: "Sports Block",
    features: [
    "Multi-purpose Courts",
    "Fitness Center",
    "Swimming Pool",
    "Outdoor Grounds"]

  },
  {
    id: 3,
    name: "Computer Center",
    category: "Academic",
    description: "Advanced computing facility with latest hardware and software for programming, design, and research projects.",
    image: "https://images.unsplash.com/photo-1459231681433-c225cb3595ee",
    imageAlt: "Modern computer laboratory with rows of desktop computers and students working on programming projects",
    location: "Block B, 2nd Floor",
    features: [
    "High-speed Internet",
    "Latest Software",
    "24/7 Access",
    "Technical Support"]

  },
  {
    id: 4,
    name: "Student Cafeteria",
    category: "Dining",
    description: "Spacious dining facility serving nutritious meals with diverse menu options catering to different dietary preferences.",
    image: "https://images.unsplash.com/photo-1726919368073-27cf4333e498",
    imageAlt: "Modern cafeteria with dining tables, food service counters, and students enjoying meals together",
    location: "Central Campus",
    features: [
    "Diverse Menu Options",
    "Hygienic Food Preparation",
    "Affordable Pricing",
    "Extended Hours"]

  }];


  // Mock data for hostels
  const hostels = [
  {
    id: 1,
    name: "Shivaji Hostel",
    type: "Boys Hostel",
    description: "Modern accommodation facility with all essential amenities for comfortable living and focused studies.",
    image: "https://images.unsplash.com/photo-1702014859878-5d4743176d28",
    imageAlt: "Modern hostel room with study desk, bed, and storage facilities for engineering students",
    capacity: 200,
    roomType: "2/3 Sharing",
    mess: "Included",
    fee: 45000,
    availability: "Available",
    amenities: ["Wi-Fi", "Laundry", "Common Room", "Study Hall", "Security", "Mess"]
  },
  {
    id: 2,
    name: "Jijamata Hostel",
    type: "Girls Hostel",
    description: "Safe and secure accommodation with modern facilities designed specifically for female students' comfort and security.",
    image: "https://images.unsplash.com/photo-1651804279611-a0b8b4bdb4f4",
    imageAlt: "Clean and modern girls hostel room with twin beds, study area, and personal storage space",
    capacity: 150,
    roomType: "2 Sharing",
    mess: "Included",
    fee: 48000,
    availability: "Limited",
    amenities: ["Wi-Fi", "Laundry", "Common Room", "24/7 Security", "Mess", "Medical Aid"]
  }];


  // Mock data for clubs
  const clubs = [
  {
    id: 1,
    name: "Robotics Club",
    category: "Technical",
    description: "Explore the world of robotics through hands-on projects, competitions, and innovative research in automation and AI.",
    image: "https://images.unsplash.com/photo-1731149791398-404c444ed5c9",
    imageAlt: "Students working on robotic projects with circuit boards, sensors, and mechanical components in engineering lab",
    established: "Est. 2015",
    members: "120+ members",
    activities: ["Robot Building", "Competitions", "Workshops", "Research Projects"],
    meetingSchedule: "Twice a week",
    location: "Robotics Lab"
  },
  {
    id: 2,
    name: "Cultural Society",
    category: "Cultural",
    description: "Celebrate diversity through music, dance, drama, and cultural events that showcase talent and build community spirit.",
    image: "https://images.unsplash.com/photo-1707943598781-5fc46e48ea30",
    imageAlt: "Students performing traditional dance on stage during cultural festival with colorful costumes and lighting",
    established: "Est. 2010",
    members: "200+ members",
    activities: ["Dance", "Music", "Drama", "Cultural Events"],
    meetingSchedule: "Weekly",
    location: "Auditorium"
  },
  {
    id: 3,
    name: "Entrepreneurship Cell",
    category: "Business",
    description: "Foster innovation and business acumen through startup incubation, business plan competitions, and industry mentorship.",
    image: "https://images.unsplash.com/photo-1565350897149-38dfafa81d83",
    imageAlt: "Young entrepreneurs presenting business ideas with laptops, charts, and collaborative workspace environment",
    established: "Est. 2018",
    members: "80+ members",
    activities: ["Startup Incubation", "Business Plans", "Mentorship", "Networking"],
    meetingSchedule: "Bi-weekly",
    location: "Innovation Hub"
  }];


  // Mock data for events
  const events = [
  {
    id: 1,
    title: "TechFest 2025",
    category: "Technical Festival",
    description: "Annual technical festival featuring competitions, exhibitions, and guest lectures from industry experts.",
    image: "https://images.unsplash.com/photo-1735316943303-68884f718c11",
    imageAlt: "Students showcasing technical projects and innovations at engineering college tech fest with exhibition booths",
    date: "2025-02-15",
    time: "09:00",
    venue: "Main Auditorium",
    organizer: "Technical Committee",
    attendees: 500,
    status: "Upcoming"
  },
  {
    id: 2,
    title: "Industry Expert Lecture",
    category: "Guest Lecture",
    description: "Renowned industry expert sharing insights on emerging technologies and career opportunities in engineering.",
    image: "https://images.unsplash.com/photo-1719159381990-f1dd52d2c733",
    imageAlt: "Professional speaker presenting to audience of engineering students in modern lecture hall with projection screen",
    date: "2025-01-20",
    time: "14:00",
    venue: "Seminar Hall",
    organizer: "Computer Department",
    attendees: 150,
    status: "Upcoming"
  },
  {
    id: 3,
    title: "Sports Week",
    category: "Sports Event",
    description: "Inter-departmental sports competitions including cricket, football, basketball, and indoor games.",
    image: "https://images.unsplash.com/photo-1583736902831-1afaca256b97",
    imageAlt: "Students participating in various sports activities including basketball, cricket, and athletics on college grounds",
    date: "2025-01-10",
    time: "08:00",
    venue: "Sports Complex",
    organizer: "Sports Committee",
    attendees: 300,
    status: "Ongoing"
  }];


  // Mock data for testimonials
  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    program: "Computer Engineering",
    year: "Final Year",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b13c24a7-1762249012963.png",
    avatarAlt: "Professional headshot of young Indian woman with long black hair in blue engineering college uniform",
    content: "DYPCET has provided me with incredible opportunities to grow both academically and personally. The supportive faculty and vibrant campus life have made my engineering journey truly memorable.",
    rating: 5,
    location: "Mumbai, Maharashtra",
    date: "Nov 2024",
    achievements: ["Dean\'s List", "Coding Competition Winner", "Cultural Secretary"]
  },
  {
    id: 2,
    name: "Rahul Patil",
    program: "Mechanical Engineering",
    year: "Third Year",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b13c24a7-1762249012963.png",
    avatarAlt: "Professional headshot of young Indian man with short black hair in engineering college uniform smiling",
    content: "The hands-on learning approach and state-of-the-art laboratories at DYPCET have given me practical skills that complement theoretical knowledge perfectly.",
    rating: 5,
    location: "Pune, Maharashtra",
    date: "Oct 2024",
    achievements: ["Project Innovation Award", "Sports Captain"]
  },
  {
    id: 3,
    name: "Sneha Desai",
    program: "Electronics Engineering",
    year: "Second Year",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16914f83c-1762273604531.png",
    avatarAlt: "Professional headshot of young Indian woman with shoulder-length hair in casual college attire",
    content: "The diverse club activities and technical events have helped me discover my passion for robotics and develop leadership skills.",
    rating: 4,
    location: "Kolhapur, Maharashtra",
    date: "Nov 2024",
    achievements: ["Robotics Club President", "Technical Paper Presentation"]
  }];


  // Mock data for achievements
  const achievements = [
  {
    id: 1,
    title: "National Robotics Championship",
    category: "Technical",
    description: "DYPCET team secured first place in the National Robotics Championship with their innovative autonomous navigation robot.",
    image: "https://images.unsplash.com/photo-1659080925920-1683d25f772a",
    imageAlt: "Students holding trophy and celebrating victory at national robotics competition with their award-winning robot",
    student: "Team of 5 students",
    department: "Computer & Electronics",
    date: "October 2024",
    award: "1st Place",
    mentor: "Dr. Amit Kumar",
    highlights: [
    "Competed against 50+ teams nationwide",
    "Innovative AI-based navigation system",
    "₹2 lakh prize money awarded"]

  },
  {
    id: 2,
    title: "Inter-University Cricket Championship",
    category: "Sports",
    description: "DYPCET cricket team won the state-level inter-university championship after an outstanding performance throughout the tournament.",
    image: "https://images.unsplash.com/photo-1733850385657-6879736eefd9",
    imageAlt: "Cricket team celebrating championship victory with trophy on college sports ground with teammates cheering",
    student: "Cricket Team (15 players)",
    department: "Multi-Department",
    date: "September 2024",
    award: "Champions",
    mentor: "Coach Suresh Raina",
    highlights: [
    "Undefeated in 8 matches",
    "Best bowling performance in finals",
    "Qualified for national championship"]

  }];


  const tabs = [
  { id: 'facilities', label: 'Campus Facilities', icon: 'Building' },
  { id: 'hostels', label: 'Hostel Life', icon: 'Home' },
  { id: 'clubs', label: 'Clubs & Societies', icon: 'Users' },
  { id: 'events', label: 'Events Calendar', icon: 'Calendar' },
  { id: 'testimonials', label: 'Student Stories', icon: 'MessageSquare' },
  { id: 'achievements', label: 'Achievements', icon: 'Trophy' }];


  const categories = [
  { id: 'all', label: 'All Categories' },
  { id: 'academic', label: 'Academic' },
  { id: 'recreation', label: 'Recreation' },
  { id: 'dining', label: 'Dining' },
  { id: 'technical', label: 'Technical' },
  { id: 'cultural', label: 'Cultural' },
  { id: 'business', label: 'Business' }];


  const filteredFacilities = selectedCategory === 'all' ?
  facilities :
  facilities?.filter((facility) => facility?.category?.toLowerCase() === selectedCategory);

  const filteredClubs = selectedCategory === 'all' ?
  clubs :
  clubs?.filter((club) => club?.category?.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Campus Life at DYPCET
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Experience vibrant student community, world-class facilities, and endless opportunities 
              for growth, learning, and memorable experiences at our digital campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Icon name="Play" size={20} className="mr-2" />
                Virtual Campus Tour
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Download" size={20} className="mr-2" />
                Download Campus App
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
      </section>
      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Campus Facilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Active Clubs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Annual Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="py-8 bg-muted border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs?.map((tab) =>
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeTab === tab?.id ?
              'bg-primary text-white shadow-md' :
              'bg-white text-foreground hover:bg-primary/10'}`
              }>

                <Icon name={tab?.icon} size={16} className="mr-2" />
                {tab?.label}
              </button>
            )}
          </div>
        </div>
      </section>
      {/* Content Sections */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Campus Facilities */}
          {activeTab === 'facilities' &&
          <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  World-Class Campus Facilities
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Explore our state-of-the-art infrastructure designed to support academic excellence, 
                  research innovation, and holistic student development.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories?.slice(0, 4)?.map((category) =>
              <button
                key={category?.id}
                onClick={() => setSelectedCategory(category?.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category?.id ?
                'bg-primary text-white' : 'bg-white text-foreground hover:bg-primary/10 border border-gray-200'}`
                }>

                    {category?.label}
                  </button>
              )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFacilities?.map((facility) =>
              <FacilityCard key={facility?.id} facility={facility} />
              )}
              </div>
            </div>
          }

          {/* Hostel Life */}
          {activeTab === 'hostels' &&
          <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Comfortable Hostel Living
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Experience safe, comfortable, and conducive living environment with modern amenities 
                  and supportive community atmosphere.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {hostels?.map((hostel) =>
              <HostelCard key={hostel?.id} hostel={hostel} />
              )}
              </div>

              {/* Hostel Features */}
              <div className="bg-white rounded-lg shadow-brand p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  Why Choose DYPCET Hostels?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Shield" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">24/7 Security</h4>
                    <p className="text-muted-foreground">Round-the-clock security with CCTV monitoring and access control.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Wifi" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">High-Speed Internet</h4>
                    <p className="text-muted-foreground">Reliable Wi-Fi connectivity for seamless online learning and research.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Utensils" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Nutritious Meals</h4>
                    <p className="text-muted-foreground">Hygienic mess facilities serving balanced and nutritious meals.</p>
                  </div>
                </div>
              </div>
            </div>
          }

          {/* Clubs & Societies */}
          {activeTab === 'clubs' &&
          <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Clubs & Societies
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Join vibrant student communities, develop leadership skills, and pursue your passions 
                  through diverse extracurricular activities and organizations.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories?.filter((cat) => ['all', 'technical', 'cultural', 'business']?.includes(cat?.id))?.map((category) =>
              <button
                key={category?.id}
                onClick={() => setSelectedCategory(category?.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category?.id ?
                'bg-primary text-white' : 'bg-white text-foreground hover:bg-primary/10 border border-gray-200'}`
                }>

                    {category?.label}
                  </button>
              )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredClubs?.map((club) =>
              <ClubCard key={club?.id} club={club} />
              )}
              </div>
            </div>
          }

          {/* Events Calendar */}
          {activeTab === 'events' &&
          <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Campus Events Calendar
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Stay updated with exciting events, competitions, guest lectures, and cultural programs 
                  happening throughout the academic year.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events?.map((event) =>
              <EventCard key={event?.id} event={event} />
              )}
              </div>

              {/* Event Categories */}
              <div className="mt-12 bg-white rounded-lg shadow-brand p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  Event Categories
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Code" size={24} className="text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Technical Events</h4>
                    <p className="text-muted-foreground text-sm">Coding competitions, hackathons, and tech talks.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Music" size={24} className="text-accent" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Cultural Programs</h4>
                    <p className="text-muted-foreground text-sm">Music, dance, drama, and art competitions.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Trophy" size={24} className="text-success" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Sports Events</h4>
                    <p className="text-muted-foreground text-sm">Inter-department and inter-college tournaments.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Users" size={24} className="text-warning" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Guest Lectures</h4>
                    <p className="text-muted-foreground text-sm">Industry experts and academic leaders.</p>
                  </div>
                </div>
              </div>
            </div>
          }

          {/* Student Testimonials */}
          {activeTab === 'testimonials' &&
          <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Student Stories & Experiences
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Hear authentic experiences from our students about campus life, academics, 
                  and personal growth at DYPCET.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials?.map((testimonial) =>
              <TestimonialCard key={testimonial?.id} testimonial={testimonial} />
              )}
              </div>
            </div>
          }

          {/* Achievements Gallery */}
          {activeTab === 'achievements' &&
          <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Student Achievements Gallery
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Celebrate outstanding accomplishments of our students in academics, sports, 
                  cultural activities, and technical competitions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {achievements?.map((achievement) =>
              <AchievementCard key={achievement?.id} achievement={achievement} />
              )}
              </div>
            </div>
          }
        </div>
      </main>
      {/* Virtual Tour Section */}
      <VirtualTourSection />
      {/* Mobile App Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              DYPCET Campus App
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Stay connected with campus life through our mobile app. Access facilities, 
              book services, join events, and connect with the community on the go.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Event Updates</h3>
                <p className="text-white/80">Real-time notifications for campus events and activities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Campus Navigation</h3>
                <p className="text-white/80">Interactive maps and directions to campus facilities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Community Connect</h3>
                <p className="text-white/80">Connect with clubs, societies, and fellow students.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Icon name="Smartphone" size={20} className="mr-2" />
                Download for Android
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Icon name="Smartphone" size={20} className="mr-2" />
                Download for iOS
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Campus Life</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#facilities" className="hover:text-white">Facilities</a></li>
                <li><a href="#hostels" className="hover:text-white">Hostel Information</a></li>
                <li><a href="#clubs" className="hover:text-white">Clubs & Societies</a></li>
                <li><a href="#events" className="hover:text-white">Events Calendar</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Student Services</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#library" className="hover:text-white">Library Services</a></li>
                <li><a href="#counseling" className="hover:text-white">Student Counseling</a></li>
                <li><a href="#health" className="hover:text-white">Health Center</a></li>
                <li><a href="#transport" className="hover:text-white">Transportation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="/admissions" className="hover:text-white">Admissions</a></li>
                <li><a href="/programs-departments" className="hover:text-white">Academic Programs</a></li>
                <li><a href="/placements-careers" className="hover:text-white">Placements</a></li>
                <li><a href="/research-innovation" className="hover:text-white">Research</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p>D. Y. Patil College of Engineering & Technology</p>
                <p>Kolhapur, Maharashtra 416004</p>
                <p>Phone: +91-231-2690021</p>
                <p>Email: info@dypcet.ac.in</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date()?.getFullYear()} D. Y. Patil College of Engineering & Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>);

};

export default CampusLife;