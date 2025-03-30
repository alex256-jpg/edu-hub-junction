
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-school-primary to-school-secondary text-white py-16 md:py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white opacity-5"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-white opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Shaping Tomorrow's Leaders Today
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-xl">
              EduHub Junction provides excellent O-level and A-level education based on Uganda's curriculum. Join us on a journey of academic excellence and holistic development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-school-accent hover:bg-amber-500 text-gray-900 font-semibold">
                <Link to="/admission">Apply Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-school-primary">
                <Link to="/about" className="flex items-center">
                  Learn More <ChevronRight size={16} className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-school-accent rounded-lg opacity-20"></div>
              <div className="relative z-10 bg-white p-4 rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                  alt="Students in classroom" 
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
