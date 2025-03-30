
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">EduHub Junction</h3>
            <p className="mb-4">
              Providing quality education for O-level and A-level students in Uganda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-school-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-school-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-school-accent">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-school-accent">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-school-accent">About Us</Link>
              </li>
              <li>
                <Link to="/notice-board" className="text-gray-300 hover:text-school-accent">Notice Board</Link>
              </li>
              <li>
                <Link to="/admission" className="text-gray-300 hover:text-school-accent">Admission</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-school-accent">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Information</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-school-accent flex-shrink-0 mt-1" />
                <span>123 Education Road, Kampala, Uganda</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-school-accent flex-shrink-0" />
                <span>+256 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-school-accent flex-shrink-0" />
                <span>info@eduhub-junction.com</span>
              </li>
            </ul>
          </div>
          
          {/* School Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">School Hours</h4>
            <ul className="space-y-2">
              <li>
                <span className="block">Monday - Friday</span>
                <span className="text-gray-400">8:00 AM - 4:00 PM</span>
              </li>
              <li>
                <span className="block">Saturday</span>
                <span className="text-gray-400">9:00 AM - 1:00 PM</span>
              </li>
              <li>
                <span className="block">Sunday</span>
                <span className="text-gray-400">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EduHub Junction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
