import React from 'react';
import Icon from '../../../components/AppIcon';

const ImportantDates = () => {
  const importantDates = [
    {
      id: 1,
      title: "Application Form Release",
      date: "15th February 2025",
      status: "completed",
      description: "Online application portal opens for all engineering programs",
      icon: "FileText"
    },
    {
      id: 2,
      title: "Last Date for Application",
      date: "31st March 2025",
      status: "upcoming",
      description: "Final deadline for submitting online applications with required documents",
      icon: "Clock"
    },
    {
      id: 3,
      title: "Entrance Exam Results",
      date: "15th April 2025",
      status: "upcoming",
      description: "JEE Main and MHT-CET results to be considered for admissions",
      icon: "Award"
    },
    {
      id: 4,
      title: "Merit List Publication",
      date: "25th April 2025",
      status: "upcoming",
      description: "First merit list will be published on official website",
      icon: "List"
    },
    {
      id: 5,
      title: "Document Verification",
      date: "1st May - 10th May 2025",
      status: "upcoming",
      description: "Physical verification of original documents at college campus",
      icon: "Shield"
    },
    {
      id: 6,
      title: "Fee Payment Deadline",
      date: "15th May 2025",
      status: "upcoming",
      description: "Last date for fee payment to confirm admission",
      icon: "CreditCard"
    },
    {
      id: 7,
      title: "Second Merit List",
      date: "20th May 2025",
      status: "upcoming",
      description: "Second merit list for remaining seats (if any)",
      icon: "List"
    },
    {
      id: 8,
      title: "Academic Session Begins",
      date: "1st June 2025",
      status: "upcoming",
      description: "Orientation program and commencement of regular classes",
      icon: "BookOpen"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success/10 text-success border-success/20';
      case 'active':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'upcoming':
        return 'bg-warning/10 text-warning border-warning/20';
      default:
        return 'bg-muted text-muted-foreground border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'CheckCircle';
      case 'active':
        return 'Clock';
      case 'upcoming':
        return 'Calendar';
      default:
        return 'Circle';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Important Dates & Deadlines
          </h2>
          <p className="text-xl text-muted-foreground">
            Stay updated with key admission dates and never miss important deadlines
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>

          <div className="space-y-8">
            {importantDates?.map((item, index) => (
              <div key={item?.id} className="relative flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full border-4 flex items-center justify-center ${getStatusColor(item?.status)}`}>
                  <Icon name={item?.icon} size={24} />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card rounded-xl p-6 shadow-brand border border-gray-200 hover:shadow-brand-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {item?.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={16} className="text-primary" />
                        <span className="text-lg font-semibold text-primary">
                          {item?.date}
                        </span>
                      </div>
                    </div>
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getStatusColor(item?.status)}`}>
                      <Icon name={getStatusIcon(item?.status)} size={16} />
                      <span className="text-sm font-medium capitalize">{item?.status}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item?.description}
                  </p>

                  {item?.status === 'upcoming' && (
                    <div className="mt-4 flex items-center space-x-2 text-sm text-primary">
                      <Icon name="Bell" size={16} />
                      <span>Set reminder for this date</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center border border-primary/20">
          <Icon name="Bell" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Never Miss Important Updates
          </h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to our admission alerts and get notified about important dates, 
            document requirements, and application status updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Icon name="Bell" size={16} />
              <span>Enable Notifications</span>
            </button>
            <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200 flex items-center justify-center space-x-2">
              <Icon name="Download" size={16} />
              <span>Download Calendar</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;