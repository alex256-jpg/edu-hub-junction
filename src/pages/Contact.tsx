
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
