
import React from 'react';
import { BookOpen, Award, Users, Calendar, Book, Library } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-school-primary" />,
    title: "Quality Education",
    description: "Following Uganda's secondary curriculum for O-level and A-level to ensure academic excellence."
  },
  {
    icon: <Users className="h-8 w-8 text-school-primary" />,
    title: "Expert Teachers",
    description: "Our faculty consists of experienced educators passionate about student success."
  },
  {
    icon: <Award className="h-8 w-8 text-school-primary" />,
    title: "Holistic Development",
    description: "We focus on academic, physical, social, and emotional growth of each student."
  },
  {
    icon: <Calendar className="h-8 w-8 text-school-primary" />,
    title: "Modern Facilities",
    description: "State-of-the-art classrooms, laboratories, and sports facilities for comprehensive learning."
  },
  {
    icon: <Book className="h-8 w-8 text-school-primary" />,
    title: "Rich Curriculum",
    description: "Offering a wide range of subjects aligned with UNEB requirements and CBC standards."
  },
  {
    icon: <Library className="h-8 w-8 text-school-primary" />,
    title: "Digital Resources",
    description: "Access to digital libraries, past papers, and educational resources."
  },
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-school-primary">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At EduHub Junction, we provide a nurturing environment where students can excel academically while developing essential life skills.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-school-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
