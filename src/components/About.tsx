import React, { useEffect, useRef } from 'react';
import { Shield, Users, Award, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.fromTo(cardsRef.current?.children,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Expert Security",
      description: "Learn from certified cybersecurity professionals with real-world experience in defending against modern threats.",
      color: "cyber-blue"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a vibrant community of ethical hackers, security researchers, and industry professionals sharing knowledge.",
      color: "cyber-purple"
    },
    {
      icon: Award,
      title: "Industry Certified",
      description: "Gain recognized certifications and credentials that are valued by top security companies worldwide.",
      color: "cyber-green"
    },
    {
      icon: Target,
      title: "Hands-on Learning",
      description: "Practice on real-world scenarios and cutting-edge cyber ranges designed to challenge your skills.",
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
            Why Choose <span className="text-cyber-blue">Cosmic Security</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            We're not just another cybersecurity training platform. We're a community 
            dedicated to creating the next generation of digital defenders.
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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold font-cyber text-cyber-blue mb-2 
                           group-hover:text-cyber-purple transition-colors">
              1000+
            </div>
            <div className="text-muted-foreground font-mono">Active Students</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold font-cyber text-cyber-green mb-2 
                           group-hover:text-cyber-blue transition-colors">
              50+
            </div>
            <div className="text-muted-foreground font-mono">Expert Instructors</div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl md:text-5xl font-bold font-cyber text-cyber-purple mb-2 
                           group-hover:text-cyber-green transition-colors">
              95%
            </div>
            <div className="text-muted-foreground font-mono">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;