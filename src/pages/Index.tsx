import React, { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Merch from '@/components/Merch';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import gsap from 'gsap';

const Index = () => {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo("body", { opacity: 0 }, { opacity: 1, duration: 1 });
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-hacker-dark text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <Courses />
          <Merch />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
