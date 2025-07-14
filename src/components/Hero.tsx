import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Shield, Code, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '@/contexts/LanguageContext';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation timeline
      const tl = gsap.timeline();

      tl.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(buttonRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(iconsRef.current?.children,
        { scale: 0, rotation: 180 },
        { scale: 1, rotation: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.5"
      );

      // Floating animation for icons
      gsap.to(iconsRef.current?.children, {
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative matrix-bg"
    >
      <ParticleBackground />
      
      {/* Professional Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark opacity-40"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-hacker-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-hacker-green/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        {/* Main Title with Glitch Effect */}
        <div ref={titleRef} className="mb-8">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-hacker mb-4 glitch" 
            data-text="COSMIC SECURITY"
          >
            {t('hero.title').split(' ').map((word, index) => (
              <span 
                key={index} 
                className={index === 0 ? "text-hacker-green" : "text-foreground"}
              >
                {word}{index === 0 ? ' ' : ''}
              </span>
            ))}
          </h1>
          <div className="text-xl md:text-2xl text-hacker-green font-hacker terminal-typing">
            {t('hero.subtitle')}
          </div>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="mb-12">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
            {t('hero.description')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div ref={buttonRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            variant="hacker" 
            size="hero"
            onClick={() => scrollToSection('courses')}
            className="hover-lift"
          >
            {t('hero.explore')}
          </Button>
          <Button 
            variant="terminal" 
            size="hero"
            onClick={() => scrollToSection('about')}
          >
            {t('hero.learn')}
          </Button>
        </div>

        {/* Floating Icons */}
        <div ref={iconsRef} className="flex justify-center space-x-12 mb-16">
          <div className="text-hacker-green hover:text-hacker-green-glow transition-colors cursor-pointer hover:scale-110 transform duration-300">
            <Shield size={48} />
          </div>
          <div className="text-hacker-green hover:text-hacker-green-glow transition-colors cursor-pointer hover:scale-110 transform duration-300">
            <Code size={48} />
          </div>
          <div className="text-hacker-green hover:text-hacker-green-glow transition-colors cursor-pointer hover:scale-110 transform duration-300">
            <Terminal size={48} />
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-hacker-green hover:text-hacker-green-glow transition-colors"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;