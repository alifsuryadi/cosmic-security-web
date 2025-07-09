import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, MessageCircle, Users, Instagram } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current?.children,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Community",
      description: "Join our active WhatsApp group for instant support and community discussions.",
      action: "Join WhatsApp",
      link: "https://wa.me/1234567890?text=I want to join the Cosmic Security community",
      color: "cyber-green"
    },
    {
      icon: Users,
      title: "Discord Server",
      description: "Connect with fellow cyber warriors on our Discord server for real-time collaboration.",
      action: "Join Discord",
      link: "https://discord.gg/cosmicsecurity",
      color: "cyber-purple"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Follow us for daily cybersecurity tips, behind-the-scenes content, and updates.",
      action: "Follow Us",
      link: "https://instagram.com/cosmicsecurity",
      color: "cyber-blue"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get direct support from our team for course inquiries and technical assistance.",
      action: "Send Email",
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
            Join Our <span className="text-cyber-blue">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            Connect with like-minded cybersecurity enthusiasts, get support, 
            and stay updated with the latest in digital security.
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
        <div className="text-center mb-16">
          <div className="bg-gradient-primary rounded-xl p-8 text-cyber-dark max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold font-cyber mb-6">Our Growing Community</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold font-cyber mb-2">5K+</div>
                <div className="font-mono">Discord Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-cyber mb-2">3K+</div>
                <div className="font-mono">WhatsApp Community</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-cyber mb-2">10K+</div>
                <div className="font-mono">Instagram Followers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold font-cyber mb-4 text-cyber-purple">
              Ready to Become a Cyber Warrior?
            </h3>
            <p className="text-muted-foreground font-mono mb-8">
              Take the first step towards mastering cybersecurity. Join our community 
              and start your journey to becoming an elite digital defender.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="cyber"
                size="lg"
                onClick={() => window.open('https://wa.me/1234567890?text=I want to start my cybersecurity journey with Cosmic Security', '_blank')}
              >
                Get Started Now
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
                View Courses
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;