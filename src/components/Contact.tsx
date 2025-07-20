import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, MessageCircle, Users, Instagram } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards animation with 3D transform
      gsap.fromTo(cardsRef.current?.children,
        { 
          scale: 0.8, 
          opacity: 0,
          rotationY: 45,
          z: -100
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          z: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      // Motion path animation for floating elements
      gsap.to(cardsRef.current?.children, {
        y: "random(-10, 10)",
        x: "random(-5, 5)",
        rotation: "random(-2, 2)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5
      });

      // Stats counting animation
      if (statsRef.current) {
        const counters = statsRef.current.querySelectorAll('.counter-number');
        
        counters.forEach((counter) => {
          const target = counter.getAttribute('data-target');
          const numericTarget = parseInt(target?.replace(/[^\d]/g, '') || '0');
          const suffix = target?.includes('K') ? 'K+' : '+';
          
          gsap.fromTo(counter, 
            { innerText: 0 },
            {
              innerText: numericTarget,
              duration: 2.5,
              ease: "power2.out",
              snap: { innerText: 1 },
              onUpdate() {
                const currentValue = Math.round(this.targets()[0].innerText);
                (counter as HTMLElement).innerText = `${currentValue}${suffix}`;
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

  const contactMethods = [
    {
      icon: MessageCircle,
      title: t('contact.whatsapp.title'),
      description: t('contact.whatsapp.desc'),
      action: t('contact.whatsapp.action'),
      link: "https://wa.me/1234567890?text=I want to join the Cosmic Security community",
      color: "cyber-green"
    },
    {
      icon: Users,
      title: t('contact.discord.title'),
      description: t('contact.discord.desc'),
      action: t('contact.discord.action'),
      link: "https://discord.gg/cosmicsecurity",
      color: "cyber-purple"
    },
    {
      icon: Instagram,
      title: t('contact.instagram.title'),
      description: t('contact.instagram.desc'),
      action: t('contact.instagram.action'),
      link: "https://instagram.com/cosmicsecurity",
      color: "cyber-blue"
    },
    {
      icon: Mail,
      title: t('contact.email.title'),
      description: t('contact.email.desc'),
      action: t('contact.email.action'),
      link: "mailto:hello@cosmicsecurity.com",
      color: "cyber-green"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-cyber-dark/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-cyber mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="bg-cyber-card border border-cyber-grid rounded-xl p-6 text-center
                          hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-glow 
                          hover:-translate-y-2 group cursor-pointer"
                onClick={() => window.open(method.link, '_blank')}
              >
                <div className={`text-${method.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={48} />
                </div>
                <h3 className="text-xl font-bold font-cyber mb-3 text-foreground group-hover:text-cyber-blue transition-colors">
                  {method.title}
                </h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-6">
                  {method.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                >
                  {method.action}
                  <ExternalLink size={16} />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Community Stats */}
        <div ref={statsRef} className="text-center mb-16">
          <div className="bg-gradient-primary rounded-xl p-8 text-black max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold font-cyber mb-6 text-black">{t('contact.stats.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold font-cyber mb-2 text-black counter-number" data-target="18K+">0+</div>
                <div className="font-mono text-black">{t('contact.stats.community')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-cyber mb-2 text-black counter-number" data-target="5K+">0+</div>
                <div className="font-mono text-black">{t('contact.stats.discord')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-cyber mb-2 text-black counter-number" data-target="3K+">0+</div>
                <div className="font-mono text-black">{t('contact.stats.whatsapp')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-cyber mb-2 text-black counter-number" data-target="10K+">0+</div>
                <div className="font-mono text-black">{t('contact.stats.instagram')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-cyber mb-4 text-cyber-purple">
              {t('contact.cta.title')}
            </h3>
            <p className="text-muted-foreground font-mono mb-8">
              {t('contact.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hacker"
                size="lg"
                onClick={() => window.open('https://wa.me/1234567890?text=I want to start my cybersecurity journey with Cosmic Security', '_blank')}
              >
                {t('contact.cta.start')}
                <ExternalLink size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('courses');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('contact.cta.courses')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;