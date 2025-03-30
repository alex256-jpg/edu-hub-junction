
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-school-primary">EduHub</span>
              <span className="text-2xl font-bold text-school-secondary">Junction</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-school-primary px-3 py-2 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-school-primary px-3 py-2 font-medium">
              About
            </Link>
            <Link to="/notice-board" className="text-gray-700 hover:text-school-primary px-3 py-2 font-medium">
              Notice Board
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-school-primary px-3 py-2 font-medium">
              Contact
            </Link>
            <Link to="/admission" className="text-gray-700 hover:text-school-primary px-3 py-2 font-medium">
              Admission
            </Link>
            <Button asChild className="bg-school-primary hover:bg-blue-800 ml-4">
              <Link to="/login">Login</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-school-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-school-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-school-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/notice-board" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-school-primary"
              onClick={() => setIsOpen(false)}
            >
              Notice Board
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-school-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/admission" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-school-primary"
              onClick={() => setIsOpen(false)}
            >
              Admission
            </Link>
            <Link 
              to="/login" 
              className="block px-3 py-2 mt-2 text-base font-medium text-white bg-school-primary rounded"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
