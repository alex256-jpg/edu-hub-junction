
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import StatsSection from '@/components/StatsSection';
import NoticeBoard from '@/components/NoticeBoard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <StatsSection />
        <NoticeBoard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
