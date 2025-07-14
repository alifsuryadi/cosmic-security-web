import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock, Users, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';
gsap.registerPlugin(ScrollTrigger);
const Courses = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const {
    t
  } = useLanguage();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardsRef.current?.children, {
        y: 100,
        opacity: 0,
        rotationY: 45
      }, {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%"
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const courses = [{
    title: t('courses.ethical.title'),
    description: t('courses.ethical.desc'),
    price: "$299",
    duration: "8 weeks",
    students: "1.2k",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
    whatsappLink: "https://wa.me/1234567890?text=I'm interested in the Ethical Hacking Fundamentals course"
  }, {
    title: t('courses.advanced.title'),
    description: t('courses.advanced.desc'),
    price: "$499",
    duration: "12 weeks",
    students: "856",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    whatsappLink: "https://wa.me/1234567890?text=I'm interested in the Advanced Penetration Testing course"
  }, {
    title: t('courses.forensics.title'),
    description: t('courses.forensics.desc'),
    price: "$399",
    duration: "10 weeks",
    students: "642",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
    whatsappLink: "https://wa.me/1234567890?text=I'm interested in the Digital Forensics Mastery course"
  }, {
    title: t('courses.operations.title'),
    description: t('courses.operations.desc'),
    price: "$349",
    duration: "9 weeks",
    students: "923",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=250&fit=crop",
    whatsappLink: "https://wa.me/1234567890?text=I'm interested in the Cybersecurity Operations course"
  }, {
    title: t('courses.webapp.title'),
    description: t('courses.webapp.desc'),
    price: "$279",
    duration: "7 weeks",
    students: "1.5k",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
    whatsappLink: "https://wa.me/1234567890?text=I'm interested in the Web Application Security course"
  }, {
    title: t('courses.cloud.title'),
    description: t('courses.cloud.desc'),
    price: "$449",
    duration: "11 weeks",
    students: "734",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    whatsappLink: "https://wa.me/1234567890?text=I'm interested in the Cloud Security Architecture course"
  }];
  return <section id="courses" ref={sectionRef} className="py-20 bg-cyber-dark/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-cyber mb-6">
            {t('courses.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            {t('courses.subtitle')}
          </p>
        </div>

        {/* Courses Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => <div key={index} className="bg-cyber-card border border-cyber-grid rounded-xl overflow-hidden 
                        hover:border-cyber-blue/50 transition-all duration-300 hover:shadow-glow 
                        hover:-translate-y-2 group">
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-cyber-blue/90 text-cyber-dark px-3 py-1 rounded-full font-mono font-bold">
                  {course.price}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-cyber mb-3 text-foreground group-hover:text-cyber-blue transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center justify-between mb-6 text-sm">
                  <div className="flex items-center text-cyber-green">
                    <Clock size={16} className="mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-cyber-purple">
                    <Users size={16} className="mr-1" />
                    {course.students}
                  </div>
                  <div className="flex items-center text-cyber-blue">
                    <Star size={16} className="mr-1" />
                    {course.rating}
                  </div>
                </div>

                {/* Register Button */}
                <Button variant="terminal" className="w-full" onClick={() => window.open(course.whatsappLink, '_blank')}>
                  {t('courses.register')}
                  <ExternalLink size={16} />
                </Button>
              </div>
            </div>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-xl p-8 text-cyber-dark">
            <h3 className="text-2xl font-bold font-cyber mb-4 text-slate-950">{t('courses.cta.title')}</h3>
            <p className="mb-6 font-mono">{t('courses.cta.desc')}</p>
            <Button variant="outline" size="lg" className="border-cyber-dark text-cyber-dark hover:bg-cyber-dark hover:text-cyber-blue" onClick={() => window.open('https://wa.me/1234567890?text=I want to learn more about Cosmic Security courses', '_blank')}>
              {t('courses.cta.contact')}
              <ExternalLink size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Courses;