import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AdmissionProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const admissionSteps = [
    {
      id: 1,
      title: "Check Eligibility",
      description: "Verify your academic qualifications and entrance exam scores",
      icon: "CheckCircle",
      details: [
        "12th standard with Physics, Chemistry, Mathematics",
        "Minimum 50% aggregate marks (45% for reserved categories)",
        "Valid JEE Main/MHT-CET score",
        "Age limit: 17-25 years"
      ],
      action: "Check Now"
    },
    {
      id: 2,
      title: "Online Application",
      description: "Fill out the comprehensive application form with required documents",
      icon: "FileText",
      details: [
        "Personal and academic information",
        "Upload scanned documents (10th, 12th marksheets)",
        "Entrance exam scorecard",
        "Category certificate (if applicable)",
        "Passport size photograph"
      ],
      action: "Apply Online"
    },
    {
      id: 3,
      title: "Document Verification",
      description: "Submit original documents for verification process",
      icon: "Shield",
      details: [
        "Original certificates verification",
        "Entrance exam scorecard verification",
        "Category certificate validation",
        "Medical fitness certificate",
        "Character certificate from previous institution"
      ],
      action: "Schedule Visit"
    },
    {
      id: 4,
      title: "Fee Payment",
      description: "Complete the admission process with fee payment",
      icon: "CreditCard",
      details: [
        "Admission fee: ₹25,000",
        "Tuition fee (1st semester): ₹65,000",
        "Hostel fee (optional): ₹45,000",
        "Caution deposit: ₹10,000",
        "Online payment gateway available"
      ],
      action: "Pay Fees"
    },
    {
      id: 5,
      title: "Confirmation",
      description: "Receive admission confirmation and join the DYPCET family",
      icon: "Award",
      details: [
        "Admission confirmation letter",
        "Student ID card generation",
        "Hostel allotment (if opted)",
        "Academic calendar and orientation details",
        "Welcome kit with college merchandise"
      ],
      action: "Download"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple 5-Step Admission Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined admission process ensures a smooth journey from application to enrollment. 
            Follow these steps to secure your seat at DYPCET.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {admissionSteps?.map((step, index) => (
              <div
                key={step?.id}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? 'border-primary bg-primary/5 shadow-brand'
                    : 'border-gray-200 hover:border-primary/50 hover:shadow-sm'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    activeStep === index
                      ? 'bg-primary text-white' :'bg-muted text-muted-foreground'
                  }`}>
                    <Icon name={step?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className={`text-lg font-semibold ${
                        activeStep === index ? 'text-primary' : 'text-foreground'
                      }`}>
                        Step {step?.id}: {step?.title}
                      </h3>
                      <Icon 
                        name="ChevronRight" 
                        size={20} 
                        className={`transition-transform duration-300 ${
                          activeStep === index ? 'rotate-90 text-primary' : 'text-muted-foreground'
                        }`}
                      />
                    </div>
                    <p className="text-muted-foreground">{step?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Step Details */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-card rounded-2xl p-8 shadow-brand border border-gray-200">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Icon name={admissionSteps?.[activeStep]?.icon} size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {admissionSteps?.[activeStep]?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    Step {admissionSteps?.[activeStep]?.id} of 5
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Requirements & Details:</h4>
                <ul className="space-y-3">
                  {admissionSteps?.[activeStep]?.details?.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-4">
                <Button variant="default" className="flex-1">
                  <Icon name="ArrowRight" size={16} className="mr-2" />
                  {admissionSteps?.[activeStep]?.action}
                </Button>
                <Button variant="outline">
                  <Icon name="HelpCircle" size={16} className="mr-2" />
                  Get Help
                </Button>
              </div>

              {/* Progress Bar */}
              <div className="mt-8">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Progress</span>
                  <span>{Math.round(((activeStep + 1) / admissionSteps?.length) * 100)}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((activeStep + 1) / admissionSteps?.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionProcess;