
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-school-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Login</h1>
            <p className="text-lg text-center max-w-3xl mx-auto">
              Access the EduHub Junction School Management System
            </p>
          </div>
        </div>
        
        <section className="py-12">
          <LoginForm />
          
          <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-center text-school-primary">Access Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">Students</h4>
                <p className="text-gray-600 text-sm">Your admission number is your username. The default password is your birth date (DDMMYYYY).</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Parents</h4>
                <p className="text-gray-600 text-sm">Your username is your child's admission number prefixed with 'P-'. The default password will be provided by the school administration.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Teachers & Staff</h4>
                <p className="text-gray-600 text-sm">Your staff ID is your username. The default password will be provided by the IT department.</p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800">Administrators</h4>
                <p className="text-gray-600 text-sm">Use your admin credentials to access the complete school management system with full control.</p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                For login issues, please contact: <span className="text-school-primary">support@eduhub-junction.com</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
