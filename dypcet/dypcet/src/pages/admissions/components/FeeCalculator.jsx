import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const FeeCalculator = () => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [hostelRequired, setHostelRequired] = useState(false);
  const [transportRequired, setTransportRequired] = useState(false);
  const [calculatedFees, setCalculatedFees] = useState(null);

  const programOptions = [
    { value: 'cse', label: 'Computer Science Engineering', baseFee: 85000 },
    { value: 'ece', label: 'Electronics & Communication', baseFee: 80000 },
    { value: 'me', label: 'Mechanical Engineering', baseFee: 75000 },
    { value: 'ce', label: 'Civil Engineering', baseFee: 70000 },
    { value: 'ee', label: 'Electrical Engineering', baseFee: 75000 },
    { value: 'it', label: 'Information Technology', baseFee: 85000 }
  ];

  const categoryOptions = [
    { value: 'general', label: 'General', discount: 0 },
    { value: 'obc', label: 'OBC (Non-Creamy Layer)', discount: 0.1 },
    { value: 'sc', label: 'SC (Scheduled Caste)', discount: 0.5 },
    { value: 'st', label: 'ST (Scheduled Tribe)', discount: 0.5 },
    { value: 'ews', label: 'EWS (Economically Weaker Section)', discount: 0.1 }
  ];

  const additionalFees = {
    admission: 25000,
    caution: 10000,
    library: 5000,
    lab: 15000,
    sports: 3000,
    hostel: 45000,
    transport: 12000
  };

  const calculateFees = () => {
    if (!selectedProgram || !selectedCategory) return;

    const program = programOptions?.find(p => p?.value === selectedProgram);
    const category = categoryOptions?.find(c => c?.value === selectedCategory);
    
    const baseTuitionFee = program?.baseFee;
    const discount = baseTuitionFee * category?.discount;
    const discountedTuitionFee = baseTuitionFee - discount;

    const mandatoryFees = {
      admission: additionalFees?.admission,
      caution: additionalFees?.caution,
      library: additionalFees?.library,
      lab: additionalFees?.lab,
      sports: additionalFees?.sports
    };

    const optionalFees = {
      hostel: hostelRequired ? additionalFees?.hostel : 0,
      transport: transportRequired ? additionalFees?.transport : 0
    };

    const totalMandatory = Object.values(mandatoryFees)?.reduce((sum, fee) => sum + fee, 0);
    const totalOptional = Object.values(optionalFees)?.reduce((sum, fee) => sum + fee, 0);
    const grandTotal = discountedTuitionFee + totalMandatory + totalOptional;

    setCalculatedFees({
      program: program?.label,
      category: category?.label,
      baseTuitionFee,
      discount,
      discountedTuitionFee,
      mandatoryFees,
      optionalFees,
      totalMandatory,
      totalOptional,
      grandTotal
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(amount);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Fee Calculator
          </h2>
          <p className="text-xl text-muted-foreground">
            Calculate your total fees based on program selection and category
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-card rounded-2xl p-8 shadow-brand border border-gray-200">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Fee Calculation
            </h3>

            <div className="space-y-6">
              <Select
                label="Select Program"
                placeholder="Choose your engineering program"
                options={programOptions}
                value={selectedProgram}
                onChange={setSelectedProgram}
                required
              />

              <Select
                label="Category"
                placeholder="Select your category"
                options={categoryOptions}
                value={selectedCategory}
                onChange={setSelectedCategory}
                required
              />

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Additional Services</h4>
                
                <Checkbox
                  label="Hostel Accommodation"
                  description="On-campus hostel facility with meals"
                  checked={hostelRequired}
                  onChange={(e) => setHostelRequired(e?.target?.checked)}
                />

                <Checkbox
                  label="College Transport"
                  description="Daily bus service from various city points"
                  checked={transportRequired}
                  onChange={(e) => setTransportRequired(e?.target?.checked)}
                />
              </div>

              <Button
                variant="default"
                size="lg"
                fullWidth
                onClick={calculateFees}
                disabled={!selectedProgram || !selectedCategory}
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Calculate Total Fees
              </Button>
            </div>
          </div>

          {/* Fee Breakdown */}
          <div className="bg-card rounded-2xl p-8 shadow-brand border border-gray-200">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Fee Breakdown
            </h3>

            {calculatedFees ? (
              <div className="space-y-6">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">
                    {calculatedFees?.program} - {calculatedFees?.category}
                  </h4>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-muted-foreground">Base Tuition Fee</span>
                    <span className="font-medium">{formatCurrency(calculatedFees?.baseTuitionFee)}</span>
                  </div>

                  {calculatedFees?.discount > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-success">Category Discount</span>
                      <span className="font-medium text-success">-{formatCurrency(calculatedFees?.discount)}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center py-2 border-b border-gray-200 font-semibold">
                    <span>Net Tuition Fee</span>
                    <span>{formatCurrency(calculatedFees?.discountedTuitionFee)}</span>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-foreground mb-3">Mandatory Fees</h5>
                  <div className="space-y-2">
                    {Object.entries(calculatedFees?.mandatoryFees)?.map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-1">
                        <span className="text-muted-foreground capitalize">
                          {key === 'caution' ? 'Caution Deposit' : `${key} Fee`}
                        </span>
                        <span className="text-sm">{formatCurrency(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {(hostelRequired || transportRequired) && (
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Optional Services</h5>
                    <div className="space-y-2">
                      {Object.entries(calculatedFees?.optionalFees)?.map(([key, value]) => 
                        value > 0 && (
                          <div key={key} className="flex justify-between items-center py-1">
                            <span className="text-muted-foreground capitalize">{key} Fee</span>
                            <span className="text-sm">{formatCurrency(value)}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t-2 border-primary">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-foreground">Total Amount</span>
                    <span className="text-2xl font-bold text-primary">
                      {formatCurrency(calculatedFees?.grandTotal)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    *Fees are subject to annual revision
                  </p>
                </div>

                <div className="flex space-x-4 mt-6">
                  <Button variant="default" className="flex-1">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Apply Now
                  </Button>
                  <Button variant="outline">
                    <Icon name="Download" size={16} className="mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Calculator" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Select program and category to calculate fees
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeCalculator;