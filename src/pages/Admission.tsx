
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import AdmissionForm from '@/components/AdmissionForm';

const Admission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-school-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Online Admission</h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Thank you for your interest in EduHub Junction. Please complete the form below to apply for admission.
            </p>
          </div>
        </div>
        
        <div className="py-12 bg-gray-50">
          <AdmissionForm />
        </div>
        
        {/* Admission Requirements */}
        <div className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-school-primary">Admission Requirements</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-school-primary">O-Level Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Completed P7 with a minimum aggregate of 15</li>
                  <li>PLE result slip or certificate</li>
                  <li>Recommendation letter from previous school</li>
                  <li>Birth certificate or passport</li>
                  <li>Recent passport size photographs</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-school-primary">A-Level Requirements</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>UCE certificate with a minimum of 8 passes</li>
                  <li>Original UCE result slip</li>
                  <li>Recommendation letter from previous school</li>
                  <li>Birth certificate or passport</li>
                  <li>Recent passport size photographs</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-700">
                For more information about the admission process, please contact our admissions office:
              </p>
              <p className="mt-2 text-school-primary font-medium">
                admissions@eduhub-junction.com | +256 123 456 789
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admission;
