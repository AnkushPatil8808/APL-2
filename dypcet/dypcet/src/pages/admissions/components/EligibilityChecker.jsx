import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const EligibilityChecker = () => {
  const [formData, setFormData] = useState({
    qualification: '',
    percentage: '',
    examType: '',
    examScore: '',
    category: '',
    state: ''
  });
  const [result, setResult] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const qualificationOptions = [
    { value: '12th-pcm', label: '12th Standard (PCM)' },
    { value: '12th-pcb', label: '12th Standard (PCB)' },
    { value: 'diploma', label: 'Diploma in Engineering' },
    { value: 'other', label: 'Other Qualification' }
  ];

  const examOptions = [
    { value: 'jee-main', label: 'JEE Main' },
    { value: 'mht-cet', label: 'MHT-CET' },
    { value: 'bitsat', label: 'BITSAT' },
    { value: 'other', label: 'Other Entrance Exam' }
  ];

  const categoryOptions = [
    { value: 'general', label: 'General' },
    { value: 'obc', label: 'OBC (Non-Creamy Layer)' },
    { value: 'sc', label: 'SC (Scheduled Caste)' },
    { value: 'st', label: 'ST (Scheduled Tribe)' },
    { value: 'ews', label: 'EWS (Economically Weaker Section)' }
  ];

  const stateOptions = [
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'other', label: 'Other State' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const checkEligibility = () => {
    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      const percentage = parseFloat(formData?.percentage);
      const examScore = parseFloat(formData?.examScore);
      
      let eligible = true;
      let messages = [];
      let programs = [];

      // Check basic eligibility
      if (formData?.qualification === '12th-pcm' && percentage >= 50) {
        messages?.push("✓ Academic qualification requirement met");
        
        if (examScore >= 60) {
          programs?.push("Computer Science Engineering", "Electronics & Communication", "Mechanical Engineering");
          messages?.push("✓ Eligible for premium engineering programs");
        } else if (examScore >= 40) {
          programs?.push("Civil Engineering", "Electrical Engineering");
          messages?.push("✓ Eligible for core engineering programs");
        } else {
          eligible = false;
          messages?.push("✗ Entrance exam score below minimum requirement");
        }
      } else if (percentage < 50) {
        eligible = false;
        messages?.push("✗ Minimum 50% required in 12th standard");
      }

      // Category-based adjustments
      if (formData?.category !== 'general' && percentage >= 45) {
        messages?.push("✓ Category relaxation applicable");
      }

      setResult({
        eligible,
        messages,
        programs,
        nextSteps: eligible ? [
          "Proceed with online application",
          "Prepare required documents",
          "Schedule document verification"
        ] : [
          "Improve entrance exam score",
          "Consider alternative programs",
          "Contact admission counselor"
        ]
      });
      
      setIsChecking(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Check Your Eligibility
          </h2>
          <p className="text-xl text-muted-foreground">
            Find out if you meet the admission requirements for your desired program
          </p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-brand border border-gray-200">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Select
              label="Highest Qualification"
              placeholder="Select your qualification"
              options={qualificationOptions}
              value={formData?.qualification}
              onChange={(value) => handleInputChange('qualification', value)}
              required
            />

            <Input
              label="Percentage/CGPA"
              type="number"
              placeholder="Enter percentage"
              value={formData?.percentage}
              onChange={(e) => handleInputChange('percentage', e?.target?.value)}
              description="Enter your 12th standard percentage"
              required
            />

            <Select
              label="Entrance Exam"
              placeholder="Select entrance exam"
              options={examOptions}
              value={formData?.examType}
              onChange={(value) => handleInputChange('examType', value)}
              required
            />

            <Input
              label="Exam Score/Percentile"
              type="number"
              placeholder="Enter your score"
              value={formData?.examScore}
              onChange={(e) => handleInputChange('examScore', e?.target?.value)}
              description="Enter your entrance exam percentile"
              required
            />

            <Select
              label="Category"
              placeholder="Select category"
              options={categoryOptions}
              value={formData?.category}
              onChange={(value) => handleInputChange('category', value)}
              required
            />

            <Select
              label="State of Domicile"
              placeholder="Select your state"
              options={stateOptions}
              value={formData?.state}
              onChange={(value) => handleInputChange('state', value)}
              required
            />
          </div>

          <div className="text-center mb-8">
            <Button
              variant="default"
              size="lg"
              onClick={checkEligibility}
              loading={isChecking}
              disabled={!formData?.qualification || !formData?.percentage || !formData?.examType || !formData?.examScore}
            >
              <Icon name="Search" size={20} className="mr-2" />
              Check Eligibility
            </Button>
          </div>

          {result && (
            <div className={`p-6 rounded-xl border-2 ${
              result?.eligible 
                ? 'border-success bg-success/5' :'border-warning bg-warning/5'
            }`}>
              <div className="flex items-center space-x-3 mb-4">
                <Icon 
                  name={result?.eligible ? "CheckCircle" : "AlertCircle"} 
                  size={24} 
                  className={result?.eligible ? "text-success" : "text-warning"}
                />
                <h3 className={`text-xl font-bold ${
                  result?.eligible ? "text-success" : "text-warning"
                }`}>
                  {result?.eligible ? "Congratulations! You're Eligible" : "Eligibility Requirements Not Met"}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Assessment Results:</h4>
                  <ul className="space-y-1">
                    {result?.messages?.map((message, index) => (
                      <li key={index} className="text-muted-foreground">{message}</li>
                    ))}
                  </ul>
                </div>

                {result?.programs?.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Eligible Programs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {result?.programs?.map((program, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Next Steps:</h4>
                  <ul className="space-y-1">
                    {result?.nextSteps?.map((step, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Icon name="ArrowRight" size={16} className="text-primary" />
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {result?.eligible && (
                <div className="mt-6 flex space-x-4">
                  <Button variant="default">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Start Application
                  </Button>
                  <Button variant="outline">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Book Counseling
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EligibilityChecker;