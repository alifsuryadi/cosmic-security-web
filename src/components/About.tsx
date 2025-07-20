import React, { useEffect, useRef } from 'react';
import { Shield, Users, Award, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Transform animation for cards on scroll
      gsap.fromTo(cardsRef.current?.children,
        { 
          y: 100, 
          opacity: 0, 
          scale: 0.8,
          rotationY: 45,
          z: -100,
          transformPerspective: 1000
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          z: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      // Motion path animation for floating cards
      gsap.to(cardsRef.current?.children, {
        y: "random(-15, 15)",
        x: "random(-8, 8)",
        rotation: "random(-3, 3)",
        duration: "random(4, 6)",
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.8
      });

      // Animate counting numbers
      if (statsRef.current) {
        const counters = statsRef.current.querySelectorAll('.counter-number');
        
        counters.forEach((counter) => {
          const target = counter.getAttribute('data-target');
          const isPercentage = target?.includes('%');
          const numericTarget = parseInt(target?.replace(/[^\d]/g, '') || '0');
          
          gsap.fromTo(counter, 
            { innerText: 0 },
            {
              innerText: numericTarget,
              duration: 2,
              ease: "power2.out",
              snap: { innerText: 1 },
              onUpdate() {
                const currentValue = Math.round(this.targets()[0].innerText);
                (counter as HTMLElement).innerText = isPercentage ? `${currentValue}%` : `${currentValue}+`;
              },
              scrollTrigger: {
                trigger: statsRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse",
              }
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Shield,
      title: t('about.expert.title'),
      description: t('about.expert.desc'),
      color: "cyber-blue"
    },
    {
      icon: Users,
      title: t('about.community.title'),
      description: t('about.community.desc'),
      color: "cyber-purple"
    },
    {
      icon: Award,
      title: t('about.certified.title'),
      description: t('about.certified.desc'),
      color: "cyber-green"
    },
    {
      icon: Target,
      title: t('about.handson.title'),
      description: t('about.handson.desc'),
      color: "cyber-blue"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-cyber mb-6">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-cyber-card border border-cyber-grid rounded-xl p-6 hover:border-cyber-blue/50 
                          transition-all duration-300 hover:shadow-glow hover:-translate-y-2 group"
              >
                <div className={`text-${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={48} />
                </div>
                <h3 className="text-xl font-bold font-cyber mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics */}
        <div ref={statsRef} className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold font-cyber text-hacker-green mb-2 
                           group-hover:text-hacker-green-glow transition-colors counter-number"
                 data-target="1000+">
              0+
            </div>
            <div className="text-muted-foreground font-mono">{t('about.stats.students')}</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold font-cyber text-hacker-green mb-2 
                           group-hover:text-hacker-green-glow transition-colors counter-number"
                 data-target="50+">
              0+
            </div>
            <div className="text-muted-foreground font-mono">{t('about.stats.instructors')}</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold font-cyber text-hacker-green mb-2 
                           group-hover:text-hacker-green-glow transition-colors counter-number"
                 data-target="95%">
              0%
            </div>
            <div className="text-muted-foreground font-mono">{t('about.stats.success')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;