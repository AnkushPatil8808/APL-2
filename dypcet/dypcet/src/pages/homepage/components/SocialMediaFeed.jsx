import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialMediaFeed = () => {
  const [activeTab, setActiveTab] = useState('instagram');

  const socialPlatforms = [
  { id: 'instagram', label: 'Instagram', icon: 'Instagram', color: 'text-pink-600' },
  { id: 'linkedin', label: 'LinkedIn', icon: 'Linkedin', color: 'text-blue-600' },
  { id: 'twitter', label: 'Twitter', icon: 'Twitter', color: 'text-blue-400' },
  { id: 'youtube', label: 'YouTube', icon: 'Youtube', color: 'text-red-600' }];


  const socialPosts = {
    instagram: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1665567031505-49c536110178",
      imageAlt: "Group of engineering students celebrating in graduation caps and gowns on campus lawn with college building in background",
      caption: "Congratulations to our graduating class of 2024! 🎓 Ready to change the world with innovation and excellence. #DYPCETGraduation #EngineeringExcellence",
      likes: "2,847",
      comments: "156",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1529190869680-0c036581416d",
      imageAlt: "Students working intensively on robotics project with mechanical components and electronic circuits in modern laboratory",
      caption: "Innovation in action! Our robotics team preparing for the National Championship 🤖 #RoboticsChampionship #Innovation #DYPCET",
      likes: "1,923",
      comments: "89",
      timestamp: "1 day ago"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1651990892631-723da6447d7d",
      imageAlt: "Modern computer science laboratory with students coding on multiple monitors displaying programming interfaces",
      caption: "New AI & ML lab is now open! State-of-the-art facilities for next-gen learning 💻 #AIMLLab #TechEducation #FutureReady",
      likes: "3,156",
      comments: "234",
      timestamp: "3 days ago"
    }],

    linkedin: [
    {
      id: 1,
      type: 'article',
      title: "DYPCET Alumni Achieves Breakthrough in Quantum Computing Research",
      summary: "Dr. Priya Sharma, DYPCET alumna, publishes groundbreaking research in Nature Quantum Information journal...",
      engagement: "1,247 reactions • 89 comments",
      timestamp: "1 day ago"
    },
    {
      id: 2,
      type: 'update',
      title: "Industry Partnership Announcement",
      summary: "Excited to announce our new collaboration with Tech Mahindra for advanced IoT research and student internships...",
      engagement: "892 reactions • 156 comments",
      timestamp: "2 days ago"
    },
    {
      id: 3,
      type: 'achievement',
      title: "100% Placement Success for Batch 2024",
      summary: "Proud to announce that our graduating batch has achieved 100% placement with an average package of ₹8.5L...",
      engagement: "2,134 reactions • 298 comments",
      timestamp: "1 week ago"
    }],

    twitter: [
    {
      id: 1,
      text: "🏆 BREAKING: DYPCET students WIN National Robotics Championship 2024! Our autonomous navigation system impressed judges nationwide. Proud of Team DYPCET Innovators! #RoboticsChampion #ProudMoment",
      retweets: "234",
      likes: "1,567",
      timestamp: "3 hours ago"
    },
    {
      id: 2,
      text: "🚀 New AI & ML Lab inaugurated today! Equipped with latest GPU clusters, this facility will accelerate student research in artificial intelligence. The future of tech education starts here! #AIEducation #Innovation",
      retweets: "156",
      likes: "892",
      timestamp: "1 day ago"
    },
    {
      id: 3,
      text: "📚 Research milestone: Our faculty\'s quantum computing paper published in IEEE Journal! DYPCET continues to lead in cutting-edge research. #QuantumComputing #Research #AcademicExcellence",
      retweets: "89",
      likes: "445",
      timestamp: "2 days ago"
    }],

    youtube: [
    {
      id: 1,
      title: "Campus Tour 2024 | DYPCET Digital Experience",
      thumbnail: "https://images.unsplash.com/photo-1661776724291-2c55f1da5d44",
      thumbnailAlt: "Aerial view of modern college campus with students walking between buildings and green spaces",
      views: "45,678",
      duration: "12:34",
      timestamp: "1 week ago"
    },
    {
      id: 2,
      title: "Student Success Stories | Placement Journey 2024",
      thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_15ef4e921-1762274039720.png",
      thumbnailAlt: "Professional interview setting with confident student in business attire speaking to industry recruiters",
      views: "23,456",
      duration: "8:45",
      timestamp: "2 weeks ago"
    },
    {
      id: 3,
      title: "TechFest 2024 Highlights | Innovation Showcase",
      thumbnail: "https://images.unsplash.com/photo-1731149791398-404c444ed5c9",
      thumbnailAlt: "Vibrant tech festival with students presenting innovative projects and interactive technology demonstrations",
      views: "67,890",
      duration: "15:22",
      timestamp: "1 month ago"
    }]

  };

  const followersCount = {
    instagram: "25.4K",
    linkedin: "18.7K",
    twitter: "12.3K",
    youtube: "8.9K"
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our social media channels for the latest updates, achievements, and campus life moments
          </p>
        </div>

        {/* Social Platform Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialPlatforms?.map((platform) =>
          <button
            key={platform?.id}
            onClick={() => setActiveTab(platform?.id)}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
            activeTab === platform?.id ?
            'bg-white shadow-brand border-2 border-primary text-primary' :
            'bg-white border border-gray-200 text-muted-foreground hover:text-primary hover:border-primary/30'}`
            }>

              <Icon name={platform?.icon} size={20} className={`mr-2 ${platform?.color}`} />
              <span>{platform?.label}</span>
              <span className="ml-2 text-xs bg-muted px-2 py-1 rounded-full">
                {followersCount?.[platform?.id]}
              </span>
            </button>
          )}
        </div>

        {/* Social Media Content */}
        <div className="max-w-6xl mx-auto">
          {/* Instagram Posts */}
          {activeTab === 'instagram' &&
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialPosts?.instagram?.map((post) =>
            <div key={post?.id} className="bg-white rounded-lg shadow-brand overflow-hidden border border-gray-200">
                  <Image
                src={post?.image}
                alt={post?.imageAlt}
                className="w-full h-64 object-cover" />

                  <div className="p-4">
                    <p className="text-sm text-foreground mb-3 leading-relaxed">
                      {post?.caption}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Icon name="Heart" size={14} className="mr-1 text-red-500" />
                          {post?.likes}
                        </span>
                        <span className="flex items-center">
                          <Icon name="MessageCircle" size={14} className="mr-1" />
                          {post?.comments}
                        </span>
                      </div>
                      <span>{post?.timestamp}</span>
                    </div>
                  </div>
                </div>
            )}
            </div>
          }

          {/* LinkedIn Posts */}
          {activeTab === 'linkedin' &&
          <div className="space-y-6">
              {socialPosts?.linkedin?.map((post) =>
            <div key={post?.id} className="bg-white rounded-lg shadow-brand p-6 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                      DYPCET
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{post?.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                        {post?.summary}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{post?.engagement}</span>
                        <span>{post?.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
            )}
            </div>
          }

          {/* Twitter Posts */}
          {activeTab === 'twitter' &&
          <div className="space-y-6">
              {socialPosts?.twitter?.map((post) =>
            <div key={post?.id} className="bg-white rounded-lg shadow-brand p-6 border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                      DYPCET
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground mb-3 leading-relaxed">
                        {post?.text}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Icon name="Repeat2" size={14} className="mr-1" />
                            {post?.retweets}
                          </span>
                          <span className="flex items-center">
                            <Icon name="Heart" size={14} className="mr-1 text-red-500" />
                            {post?.likes}
                          </span>
                        </div>
                        <span>{post?.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
            )}
            </div>
          }

          {/* YouTube Videos */}
          {activeTab === 'youtube' &&
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socialPosts?.youtube?.map((video) =>
            <div key={video?.id} className="bg-white rounded-lg shadow-brand overflow-hidden border border-gray-200">
                  <div className="relative">
                    <Image
                  src={video?.thumbnail}
                  alt={video?.thumbnailAlt}
                  className="w-full h-48 object-cover" />

                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                        <Icon name="Play" size={24} className="text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video?.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-foreground mb-2 leading-tight">
                      {video?.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{video?.views} views</span>
                      <span>{video?.timestamp}</span>
                    </div>
                  </div>
                </div>
            )}
            </div>
          }
        </div>

        {/* Follow Us CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Community
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Follow us on social media to stay updated with the latest news, events, and achievements from DYPCET
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialPlatforms?.map((platform) =>
              <a
                key={platform?.id}
                href="#"
                className={`flex items-center px-6 py-3 bg-white rounded-lg font-medium hover:shadow-brand transition-all duration-200 border border-gray-200 hover:border-primary/30 ${platform?.color}`}>

                  <Icon name={platform?.icon} size={20} className="mr-2" />
                  Follow on {platform?.label}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SocialMediaFeed;