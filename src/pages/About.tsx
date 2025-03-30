
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-school-primary text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">About EduHub Junction</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
              Providing quality education for O-level and A-level students in Uganda since 1995
            </p>
          </div>
        </div>
        
        {/* Mission and Vision */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-school-light p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-school-primary">Our Mission</h2>
                <p className="text-gray-700">
                  To provide quality education that nurtures the intellectual, physical, social, and emotional development of each student, preparing them to excel in both national examinations and life beyond school.
                </p>
              </div>
              
              <div className="bg-school-light p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-school-primary">Our Vision</h2>
                <p className="text-gray-700">
                  To be the leading secondary educational institution in Uganda, recognized for academic excellence, holistic development, and producing future leaders who make positive contributions to society.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* School History */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-school-primary">Our Story</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  Founded in 1995, EduHub Junction began as a small community school with just 50 students and 5 dedicated teachers. Our founder, Professor James Muwanga, had a vision of creating an educational institution that would provide quality education accessible to students from all backgrounds.
                </p>
                
                <p className="text-gray-700 mb-4">
                  Over the years, the school has grown steadily, expanding its facilities and programs to meet the evolving needs of students and the demands of modern education. Today, EduHub Junction is proud to be one of the top-performing schools in Uganda, consistently achieving excellent results in national examinations.
                </p>
                
                <p className="text-gray-700">
                  With a current enrollment of over 1,200 students and 32 highly qualified teachers, we remain committed to our founding principles of excellence, integrity, and holistic development for all students.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000" 
                  alt="School History" 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-school-primary">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-school-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-school-primary">Excellence</h3>
                <p className="text-gray-700">
                  We strive for excellence in all areas, encouraging students to reach their full potential academically, socially, and physically.
                </p>
              </div>
              
              <div className="bg-school-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-school-primary">Integrity</h3>
                <p className="text-gray-700">
                  We promote honesty, transparency, and ethical behavior in all aspects of school life.
                </p>
              </div>
              
              <div className="bg-school-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-school-primary">Respect</h3>
                <p className="text-gray-700">
                  We foster respect for self, others, and the environment, valuing diversity and promoting inclusion.
                </p>
              </div>
              
              <div className="bg-school-light p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-school-primary">Innovation</h3>
                <p className="text-gray-700">
                  We embrace innovation in teaching and learning, preparing students for a rapidly changing world.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* School Leadership */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-school-primary">School Leadership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Principal */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" 
                    alt="Principal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-school-primary">Dr. Samuel Okello</h3>
                <p className="text-gray-600 mb-3">Principal</p>
                <p className="text-gray-700 text-sm">
                  Dr. Okello brings over 20 years of experience in education management and leadership.
                </p>
              </div>
              
              {/* Deputy Principal */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" 
                    alt="Deputy Principal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-school-primary">Ms. Sarah Namuli</h3>
                <p className="text-gray-600 mb-3">Deputy Principal</p>
                <p className="text-gray-700 text-sm">
                  Ms. Namuli oversees academic affairs and curriculum implementation.
                </p>
              </div>
              
              {/* Administrator */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                    alt="Administrator" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-school-primary">Mr. David Mugisha</h3>
                <p className="text-gray-600 mb-3">School Administrator</p>
                <p className="text-gray-700 text-sm">
                  Mr. Mugisha manages the day-to-day operations of the school.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
