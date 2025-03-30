
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const AdmissionForm = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    tribe: '',
    
    // Contact Information
    homeAddress: '',
    phone: '',
    email: '',
    
    // Academic Information
    formerSchool: '',
    previousMarks: '',
    level: 'olevel',
    
    // Guardian Information
    parentName: '',
    parentContact: '',
    guardianName: '',
    guardianContact: '',
    
    // Health Information
    healthReport: '',
    
    // Documents
    photo: null,
    schoolId: null,
    otherDocuments: null
  });
  
  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    
    if (files) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const nextStep = () => {
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: "Your admission application has been submitted successfully. We will contact you shortly.",
      });
      setLoading(false);
      // Reset form or redirect
    }, 2000);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between">
            {[1, 2, 3, 4].map((num) => (
              <div 
                key={num} 
                className={`relative flex-1 ${num < 4 ? 'after:content-[""] after:h-1 after:w-full after:absolute after:top-4 after:left-0 after:bg-gray-200 after:z-0' : ''}`}
              >
                <div 
                  className={`h-8 w-8 rounded-full flex items-center justify-center z-10 relative 
                    ${num <= step ? 'bg-school-primary text-white' : 'bg-gray-200 text-gray-500'}`}
                >
                  {num}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-sm text-center flex-1">Personal Info</div>
            <div className="text-sm text-center flex-1">Academic Info</div>
            <div className="text-sm text-center flex-1">Guardian Info</div>
            <div className="text-sm text-center flex-1">Documents</div>
          </div>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Student Admission Application</CardTitle>
            <CardDescription>
              {step === 1 && "Please provide your personal information"}
              {step === 2 && "Tell us about your academic background"}
              {step === 3 && "Please provide details of your parents/guardians"}
              {step === 4 && "Upload required documents to complete your application"}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      placeholder="Enter first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      placeholder="Enter last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <RadioGroup 
                    name="gender"
                    value={formData.gender}
                    onValueChange={(value) => handleSelectChange('gender', value)}
                    className="flex space-x-8"
                    required
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input 
                    id="dateOfBirth" 
                    name="dateOfBirth" 
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tribe">Tribe/Ethnic Group</Label>
                  <Input 
                    id="tribe" 
                    name="tribe" 
                    placeholder="Enter your tribe"
                    value={formData.tribe}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="homeAddress">Home Address</Label>
                  <Textarea 
                    id="homeAddress" 
                    name="homeAddress" 
                    placeholder="Enter your home address"
                    value={formData.homeAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
            
            {/* Step 2: Academic Information */}
            {step === 2 && (
              <>
                <div className="space-y-2">
                  <Label>Education Level</Label>
                  <RadioGroup 
                    name="level"
                    value={formData.level}
                    onValueChange={(value) => handleSelectChange('level', value)}
                    className="flex space-x-8"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="olevel" id="olevel" />
                      <Label htmlFor="olevel">O-Level</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="alevel" id="alevel" />
                      <Label htmlFor="alevel">A-Level</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="formerSchool">Former School</Label>
                  <Input 
                    id="formerSchool" 
                    name="formerSchool" 
                    placeholder="Enter name of your previous school"
                    value={formData.formerSchool}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="previousMarks">Previous Academic Performance</Label>
                  <Input 
                    id="previousMarks" 
                    name="previousMarks" 
                    placeholder="Enter your previous marks/grades"
                    value={formData.previousMarks}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="healthReport">Health Information</Label>
                  <Textarea 
                    id="healthReport" 
                    name="healthReport" 
                    placeholder="Please provide any relevant health information"
                    value={formData.healthReport}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            
            {/* Step 3: Guardian Information */}
            {step === 3 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent's Full Name</Label>
                  <Input 
                    id="parentName" 
                    name="parentName" 
                    placeholder="Enter parent's name"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="parentContact">Parent's Contact Number</Label>
                  <Input 
                    id="parentContact" 
                    name="parentContact" 
                    placeholder="Enter parent's phone number"
                    value={formData.parentContact}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guardianName">Guardian's Full Name (if different from parent)</Label>
                  <Input 
                    id="guardianName" 
                    name="guardianName" 
                    placeholder="Enter guardian's name"
                    value={formData.guardianName}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="guardianContact">Guardian's Contact Number</Label>
                  <Input 
                    id="guardianContact" 
                    name="guardianContact" 
                    placeholder="Enter guardian's phone number"
                    value={formData.guardianContact}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            
            {/* Step 4: Document Upload */}
            {step === 4 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="photo">Upload Photo (Passport Size)</Label>
                  <Input 
                    id="photo" 
                    name="photo" 
                    type="file" 
                    onChange={handleChange}
                    required
                    accept="image/*"
                  />
                  <p className="text-xs text-gray-500 mt-1">Please upload a recent passport-sized photograph</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="schoolId">Previous School ID/Result Slip</Label>
                  <Input 
                    id="schoolId" 
                    name="schoolId" 
                    type="file" 
                    onChange={handleChange}
                    accept=".pdf,.jpg,.png,.jpeg"
                  />
                  <p className="text-xs text-gray-500 mt-1">Upload a copy of your previous school ID or result slip</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="otherDocuments">Other Supporting Documents</Label>
                  <Input 
                    id="otherDocuments" 
                    name="otherDocuments" 
                    type="file" 
                    onChange={handleChange}
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.png,.jpeg"
                  />
                  <p className="text-xs text-gray-500 mt-1">You may upload any additional documents (recommendation letters, certificates, etc.)</p>
                </div>
              </>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-between">
            {step > 1 && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep}
                disabled={loading}
              >
                Previous
              </Button>
            )}
            {step < 4 ? (
              <Button 
                type="button" 
                onClick={nextStep} 
                className="ml-auto"
              >
                Next
              </Button>
            ) : (
              <Button 
                type="submit" 
                className="ml-auto bg-school-primary hover:bg-blue-800"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default AdmissionForm;
