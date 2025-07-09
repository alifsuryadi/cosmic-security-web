import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, ShoppingCart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const Merch = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current?.children,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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

  const merchandise = [
    {
      name: t('merch.hoodie'),
      description: t('merch.hoodie.desc'),
      price: "$59",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      whatsappLink: "https://wa.me/1234567890?text=I want to order the Cosmic Security Hoodie - $59"
    },
    {
      name: t('merch.tshirt'),
      description: t('merch.tshirt.desc'),
      price: "$29",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      whatsappLink: "https://wa.me/1234567890?text=I want to order the Hacker Terminal T-Shirt - $29"
    },
    {
      name: t('merch.stickers'),
      description: t('merch.stickers.desc'),
      price: "$15",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
      whatsappLink: "https://wa.me/1234567890?text=I want to order the Cybersec Sticker Pack - $15"
    },
    {
      name: t('merch.mug'),
      description: t('merch.mug.desc'),
      price: "$25",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop",
      whatsappLink: "https://wa.me/1234567890?text=I want to order the Elite Hacker Mug - $25"
    },
    {
      name: t('merch.cap'),
      description: t('merch.cap.desc'),
      price: "$35",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
      whatsappLink: "https://wa.me/1234567890?text=I want to order the Security Cap - $35"
    },
    {
      name: t('merch.poster'),
      description: t('merch.poster.desc'),
      price: "$20",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&fit=crop",
      whatsappLink: "https://wa.me/1234567890?text=I want to order the Code Warrior Poster - $20"
    }
  ];

  return (
    <section id="merch" ref={sectionRef} className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-accent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-cyber mb-6">
            {t('merch.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            {t('merch.subtitle')}
          </p>
        </div>

        {/* Merchandise Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchandise.map((item, index) => (
            <div
              key={index}
              className="bg-cyber-card border border-cyber-grid rounded-xl overflow-hidden 
                        hover:border-cyber-green/50 transition-all duration-300 hover:shadow-glow 
                        hover:-translate-y-2 group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cyber-green/90 text-cyber-dark px-3 py-1 rounded-full font-mono font-bold">
                  {item.price}
                </div>
                <div className="absolute bottom-4 left-4">
                  <ShoppingCart className="text-cyber-green" size={24} />
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-cyber mb-3 text-foreground group-hover:text-cyber-green transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Buy Button */}
                <Button
                  variant="neon"
                  className="w-full"
                  onClick={() => window.open(item.whatsappLink, '_blank')}
                >
                  {t('merch.buy')}
                  <ExternalLink size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Shipping Info */}
        <div className="mt-16 text-center">
          <div className="bg-cyber-card border border-cyber-green/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold font-cyber mb-4 text-cyber-green">{t('merch.shipping.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-mono">
              <div>
                <div className="text-cyber-blue font-bold mb-2">📦 {t('merch.shipping.free')}</div>
                <div className="text-muted-foreground">{t('merch.shipping.free.desc')}</div>
              </div>
              <div>
                <div className="text-cyber-purple font-bold mb-2">🚚 {t('merch.shipping.fast')}</div>
                <div className="text-muted-foreground">{t('merch.shipping.fast.desc')}</div>
              </div>
              <div>
                <div className="text-cyber-green font-bold mb-2">💬 {t('merch.shipping.whatsapp')}</div>
                <div className="text-muted-foreground">{t('merch.shipping.whatsapp.desc')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merch;