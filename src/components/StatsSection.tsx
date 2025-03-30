
import React from 'react';

const stats = [
  { value: '95%', label: 'Pass Rate' },
  { value: '32', label: 'Experienced Teachers' },
  { value: '1200+', label: 'Students Enrolled' },
  { value: '25+', label: 'Years of Excellence' },
];

const StatsSection = () => {
  return (
    <section className="bg-school-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-school-accent">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
