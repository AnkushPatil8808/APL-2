import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const VirtualCounseling = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    query: ''
  });
  const [isBooking, setIsBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const counselors = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    designation: "Admission Counselor",
    specialization: "Computer Science & IT Programs",
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1668062527395-814b5d2e6d7b",
    imageAlt: "Professional woman with shoulder-length black hair wearing white blazer in office setting",
    rating: 4.9,
    languages: ["English", "Hindi", "Marathi"],
    availability: "Mon-Fri: 9 AM - 6 PM"
  },
  {
    id: 2,
    name: "Prof. Rajesh Patil",
    designation: "Senior Counselor",
    specialization: "Mechanical & Civil Engineering",
    experience: "12+ years",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_156075397-1762249047116.png",
    imageAlt: "Middle-aged Indian man with glasses wearing navy blue shirt in professional setting",
    rating: 4.8,
    languages: ["English", "Hindi", "Marathi"],
    availability: "Mon-Sat: 10 AM - 7 PM"
  },
  {
    id: 3,
    name: "Ms. Anita Desai",
    designation: "Program Advisor",
    specialization: "Electronics & Electrical Engineering",
    experience: "6+ years",
    image: "https://images.unsplash.com/photo-1643206687509-e152509f8eca",
    imageAlt: "Young professional woman with long dark hair wearing light blue blouse smiling at camera",
    rating: 4.7,
    languages: ["English", "Hindi", "Gujarati"],
    availability: "Tue-Sat: 11 AM - 8 PM"
  }];


  const timeSlots = [
  { time: "9:00 AM", available: true },
  { time: "10:00 AM", available: false },
  { time: "11:00 AM", available: true },
  { time: "12:00 PM", available: true },
  { time: "2:00 PM", available: true },
  { time: "3:00 PM", available: false },
  { time: "4:00 PM", available: true },
  { time: "5:00 PM", available: true }];


  const programOptions = [
  { value: 'cse', label: 'Computer Science Engineering' },
  { value: 'ece', label: 'Electronics & Communication' },
  { value: 'me', label: 'Mechanical Engineering' },
  { value: 'ce', label: 'Civil Engineering' },
  { value: 'ee', label: 'Electrical Engineering' },
  { value: 'it', label: 'Information Technology' }];


  const handleFormChange = (field, value) => {
    setBookingForm((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBooking = () => {
    setIsBooking(true);

    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false);
      setBookingSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setBookingSuccess(false);
        setSelectedSlot(null);
        setBookingForm({
          name: '',
          email: '',
          phone: '',
          program: '',
          query: ''
        });
      }, 3000);
    }, 2000);
  };

  if (bookingSuccess) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-12 shadow-brand border border-gray-200 text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-success" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Booking Confirmed!
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Your virtual counseling session has been successfully scheduled.
            </p>
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div>
                  <span className="text-sm text-muted-foreground">Date & Time</span>
                  <p className="font-semibold">Tomorrow, {selectedSlot}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Meeting Link</span>
                  <p className="font-semibold text-primary">Sent to your email</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Counselor</span>
                  <p className="font-semibold">Dr. Priya Sharma</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Session ID</span>
                  <p className="font-semibold">#DYPCET2024-{Math.random()?.toString(36)?.substr(2, 6)?.toUpperCase()}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="default">
                <Icon name="Calendar" size={16} className="mr-2" />
                Add to Calendar
              </Button>
              <Button variant="outline">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>);

  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Virtual Counseling Sessions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get personalized guidance from our expert counselors through one-on-one virtual sessions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Counselor Selection */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Choose Your Counselor</h3>
            
            {counselors?.map((counselor) =>
            <div key={counselor?.id} className="bg-card rounded-xl p-6 shadow-brand border border-gray-200 hover:shadow-brand-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img
                    src={counselor?.image}
                    alt={counselor?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{counselor?.name}</h4>
                        <p className="text-primary font-medium">{counselor?.designation}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{counselor?.rating}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="BookOpen" size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{counselor?.specialization}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{counselor?.experience} experience</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Globe" size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{counselor?.languages?.join(", ")}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Calendar" size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{counselor?.availability}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      <Icon name="Video" size={16} className="mr-2" />
                      Select Counselor
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-brand border border-gray-200 sticky top-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Book Your Session
              </h3>

              <div className="space-y-4 mb-6">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your name"
                  value={bookingForm?.name}
                  onChange={(e) => handleFormChange('name', e?.target?.value)}
                  required />


                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={bookingForm?.email}
                  onChange={(e) => handleFormChange('email', e?.target?.value)}
                  required />


                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone"
                  value={bookingForm?.phone}
                  onChange={(e) => handleFormChange('phone', e?.target?.value)}
                  required />


                <Select
                  label="Program of Interest"
                  placeholder="Select program"
                  options={programOptions}
                  value={bookingForm?.program}
                  onChange={(value) => handleFormChange('program', value)}
                  required />


                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Specific Query/Topic
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    rows={3}
                    placeholder="Describe what you'd like to discuss..."
                    value={bookingForm?.query}
                    onChange={(e) => handleFormChange('query', e?.target?.value)} />

                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">Available Time Slots (Tomorrow)</h4>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots?.map((slot, index) =>
                  <button
                    key={index}
                    onClick={() => slot?.available && setSelectedSlot(slot?.time)}
                    disabled={!slot?.available}
                    className={`p-2 text-sm rounded-lg border transition-colors duration-200 ${
                    selectedSlot === slot?.time ?
                    'border-primary bg-primary text-white' :
                    slot?.available ?
                    'border-gray-200 hover:border-primary hover:bg-primary/5' : 'border-gray-200 bg-muted text-muted-foreground cursor-not-allowed'}`
                    }>

                      {slot?.time}
                    </button>
                  )}
                </div>
              </div>

              <Button
                variant="default"
                fullWidth
                onClick={handleBooking}
                loading={isBooking}
                disabled={!bookingForm?.name || !bookingForm?.email || !bookingForm?.phone || !selectedSlot}>

                <Icon name="Calendar" size={16} className="mr-2" />
                Book Session
              </Button>

              <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Icon name="Info" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-muted-foreground">
                    <p className="font-medium mb-1">Session Details:</p>
                    <ul className="space-y-1">
                      <li>• Duration: 30 minutes</li>
                      <li>• Platform: Google Meet</li>
                      <li>• Free of charge</li>
                      <li>• Reschedule up to 2 hours before</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default VirtualCounseling;