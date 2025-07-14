import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.about': 'About',
    'nav.courses': 'Courses',
    'nav.merch': 'Merch',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Cosmic Security',
    'hero.subtitle': 'Elite Cyber Security Training for the Digital Generation',
    'hero.description': 'Master the art of digital defense and learn cutting-edge cybersecurity techniques from industry experts. Join our community of ethical hackers and security professionals.',
    'hero.explore': 'Explore Courses',
    'hero.learn': 'Learn More',
    
    // About
    'about.title': 'Why Choose Cosmic Security?',
    'about.subtitle': "We're not just another cybersecurity training platform. We're a community dedicated to creating the next generation of digital defenders.",
    'about.expert.title': 'Expert Security',
    'about.expert.desc': 'Learn from certified cybersecurity professionals with real-world experience in defending against modern threats.',
    'about.community.title': 'Community Driven',
    'about.community.desc': 'Join a vibrant community of ethical hackers, security researchers, and industry professionals sharing knowledge.',
    'about.certified.title': 'Industry Certified',
    'about.certified.desc': 'Gain recognized certifications and credentials that are valued by top security companies worldwide.',
    'about.handson.title': 'Hands-on Learning',
    'about.handson.desc': 'Practice on real-world scenarios and cutting-edge cyber ranges designed to challenge your skills.',
    'about.stats.students': 'Active Students',
    'about.stats.instructors': 'Expert Instructors',
    'about.stats.success': 'Success Rate',
    
    // Courses
    'courses.title': 'Our Training Programs',
    'courses.subtitle': 'Level up your cybersecurity skills with our comprehensive courses designed by industry experts and battle-tested professionals.',
    'courses.ethical.title': 'Ethical Hacking Fundamentals',
    'courses.ethical.desc': 'Master the basics of penetration testing, vulnerability assessment, and ethical hacking methodologies.',
    'courses.advanced.title': 'Advanced Penetration Testing',
    'courses.advanced.desc': 'Deep dive into advanced techniques, exploit development, and real-world penetration testing scenarios.',
    'courses.forensics.title': 'Digital Forensics Mastery',
    'courses.forensics.desc': 'Learn forensic investigation techniques, evidence collection, and digital crime scene analysis.',
    'courses.operations.title': 'Cybersecurity Operations',
    'courses.operations.desc': 'SOC operations, incident response, threat hunting, and security monitoring techniques.',
    'courses.webapp.title': 'Web Application Security',
    'courses.webapp.desc': 'Secure coding practices, OWASP Top 10, and web application penetration testing.',
    'courses.cloud.title': 'Cloud Security Architecture',
    'courses.cloud.desc': 'AWS, Azure, and GCP security, cloud-native security controls, and compliance frameworks.',
    'courses.register': 'Register Now',
    'courses.cta.title': 'Ready to Start Your Journey?',
    'courses.cta.desc': 'Join thousands of students who have transformed their careers with our training.',
    'courses.cta.contact': 'Contact Our Team',
    
    // Merch
    'merch.title': 'Cosmic Merchandise',
    'merch.subtitle': 'Show your cybersecurity pride with our exclusive merchandise. Each item is designed for the modern digital warrior.',
    'merch.hoodie': 'Cosmic Security Hoodie',
    'merch.hoodie.desc': 'Premium quality hoodie with embroidered logo and cyberpunk design elements.',
    'merch.tshirt': 'Hacker Terminal T-Shirt',
    'merch.tshirt.desc': 'Comfortable cotton tee featuring authentic terminal commands and cyber aesthetics.',
    'merch.stickers': 'Cybersec Sticker Pack',
    'merch.stickers.desc': 'Collection of 20 premium vinyl stickers with cyber security themed designs.',
    'merch.mug': 'Elite Hacker Mug',
    'merch.mug.desc': 'Heat-reactive mug that reveals hidden code when hot liquid is poured.',
    'merch.cap': 'Security Cap',
    'merch.cap.desc': 'Adjustable cap with 3D embroidered Cosmic Security logo and mesh back.',
    'merch.poster': 'Code Warrior Poster',
    'merch.poster.desc': 'High-quality poster featuring cyberpunk art and motivational hacker quotes.',
    'merch.buy': 'Buy Now',
    'merch.shipping.title': 'Shipping & Ordering',
    'merch.shipping.free': 'FREE SHIPPING',
    'merch.shipping.free.desc': 'On orders over $50',
    'merch.shipping.fast': 'FAST DELIVERY',
    'merch.shipping.fast.desc': '2-5 business days',
    'merch.shipping.whatsapp': 'WHATSAPP ORDER',
    'merch.shipping.whatsapp.desc': 'Easy ordering via WhatsApp',
    
    // Contact
    'contact.title': 'Join Our Community',
    'contact.subtitle': 'Connect with like-minded cybersecurity enthusiasts, get support, and stay updated with the latest in digital security.',
    'contact.whatsapp.title': 'WhatsApp Community',
    'contact.whatsapp.desc': 'Join our active WhatsApp group for instant support and community discussions.',
    'contact.whatsapp.action': 'Join WhatsApp',
    'contact.discord.title': 'Discord Server',
    'contact.discord.desc': 'Connect with fellow cyber warriors on our Discord server for real-time collaboration.',
    'contact.discord.action': 'Join Discord',
    'contact.instagram.title': 'Instagram',
    'contact.instagram.desc': 'Follow us for daily cybersecurity tips, behind-the-scenes content, and updates.',
    'contact.instagram.action': 'Follow Us',
    'contact.email.title': 'Email Support',
    'contact.email.desc': 'Get direct support from our team for course inquiries and technical assistance.',
    'contact.email.action': 'Send Email',
    'contact.stats.title': 'Our Growing Community',
    'contact.stats.discord': 'Discord Members',
    'contact.stats.whatsapp': 'WhatsApp Community',
    'contact.stats.instagram': 'Instagram Followers',
    'contact.cta.title': 'Ready to Become a Cyber Warrior?',
    'contact.cta.desc': 'Take the first step towards mastering cybersecurity. Join our community and start your journey to becoming an elite digital defender.',
    'contact.cta.start': 'Get Started Now',
    'contact.cta.courses': 'View Courses',
    
    // Footer
    'footer.tagline': 'Elite cybersecurity training for the digital generation. Join thousands of students worldwide in mastering the art of digital defense.',
    'footer.since': 'Protecting the digital frontier since 2020',
    'footer.links': 'Quick Links',
    'footer.community': 'Community',
    'footer.discord': 'Discord Server',
    'footer.whatsapp': 'WhatsApp Group',
    'footer.instagram': 'Instagram',
    'footer.email': 'Email Support',
    'footer.copyright': '© 2024 Cosmic Security. All rights reserved.',
    'footer.made': 'Made with',
    'footer.made.and': 'and',
    'footer.made.for': 'for cyber warriors'
  },
  id: {
    // Header
    'nav.about': 'Tentang',
    'nav.courses': 'Kursus',
    'nav.merch': 'Merchandise',
    'nav.contact': 'Kontak',
    
    // Hero
    'hero.title': 'Cosmic Security',
    'hero.subtitle': 'Pelatihan Keamanan Siber Elite untuk Generasi Digital',
    'hero.description': 'Kuasai seni pertahanan digital dan pelajari teknik keamanan siber terdepan dari para ahli industri. Bergabunglah dengan komunitas ethical hacker dan profesional keamanan kami.',
    'hero.explore': 'Jelajahi Kursus',
    'hero.learn': 'Pelajari Lebih Lanjut',
    
    // About
    'about.title': 'Mengapa Memilih Cosmic Security?',
    'about.subtitle': 'Kami bukan sekadar platform pelatihan keamanan siber biasa. Kami adalah komunitas yang berdedikasi untuk menciptakan generasi penjaga digital masa depan.',
    'about.expert.title': 'Keamanan Ahli',
    'about.expert.desc': 'Belajar dari profesional keamanan siber bersertifikat dengan pengalaman nyata dalam melawan ancaman modern.',
    'about.community.title': 'Berbasis Komunitas',
    'about.community.desc': 'Bergabung dengan komunitas yang dinamis dari ethical hacker, peneliti keamanan, dan profesional industri yang berbagi pengetahuan.',
    'about.certified.title': 'Tersertifikasi Industri',
    'about.certified.desc': 'Dapatkan sertifikasi dan kredensial yang diakui dan dihargai oleh perusahaan keamanan terkemuka di seluruh dunia.',
    'about.handson.title': 'Pembelajaran Praktis',
    'about.handson.desc': 'Berlatih pada skenario dunia nyata dan cyber range terdepan yang dirancang untuk menantang kemampuan Anda.',
    'about.stats.students': 'Siswa Aktif',
    'about.stats.instructors': 'Instruktur Ahli',
    'about.stats.success': 'Tingkat Keberhasilan',
    
    // Courses
    'courses.title': 'Program Pelatihan Kami',
    'courses.subtitle': 'Tingkatkan keterampilan keamanan siber Anda dengan kursus komprehensif yang dirancang oleh para ahli industri dan profesional yang telah teruji.',
    'courses.ethical.title': 'Dasar-dasar Ethical Hacking',
    'courses.ethical.desc': 'Kuasai dasar-dasar penetration testing, penilaian kerentanan, dan metodologi ethical hacking.',
    'courses.advanced.title': 'Penetration Testing Lanjutan',
    'courses.advanced.desc': 'Mendalami teknik lanjutan, pengembangan exploit, dan skenario penetration testing dunia nyata.',
    'courses.forensics.title': 'Penguasaan Digital Forensics',
    'courses.forensics.desc': 'Pelajari teknik investigasi forensik, pengumpulan bukti, dan analisis TKP digital.',
    'courses.operations.title': 'Operasi Keamanan Siber',
    'operations.desc': 'Operasi SOC, respons insiden, threat hunting, dan teknik monitoring keamanan.',
    'courses.webapp.title': 'Keamanan Aplikasi Web',
    'courses.webapp.desc': 'Praktik coding aman, OWASP Top 10, dan penetration testing aplikasi web.',
    'courses.cloud.title': 'Arsitektur Keamanan Cloud',
    'courses.cloud.desc': 'Keamanan AWS, Azure, dan GCP, kontrol keamanan cloud-native, dan framework compliance.',
    'courses.register': 'Daftar Sekarang',
    'courses.cta.title': 'Siap Memulai Perjalanan Anda?',
    'courses.cta.desc': 'Bergabunglah dengan ribuan siswa yang telah mengubah karir mereka dengan pelatihan kami.',
    'courses.cta.contact': 'Hubungi Tim Kami',
    
    // Merch
    'merch.title': 'Merchandise Cosmic',
    'merch.subtitle': 'Tunjukkan kebanggaan keamanan siber Anda dengan merchandise eksklusif kami. Setiap item dirancang untuk pejuang digital modern.',
    'merch.hoodie': 'Hoodie Cosmic Security',
    'merch.hoodie.desc': 'Hoodie kualitas premium dengan logo bordir dan elemen desain cyberpunk.',
    'merch.tshirt': 'Kaos Terminal Hacker',
    'merch.tshirt.desc': 'Kaos katun nyaman menampilkan perintah terminal otentik dan estetika cyber.',
    'merch.stickers': 'Paket Stiker Cybersec',
    'merch.stickers.desc': 'Koleksi 20 stiker vinyl premium dengan desain bertema keamanan siber.',
    'merch.mug': 'Mug Hacker Elite',
    'merch.mug.desc': 'Mug reaktif panas yang mengungkap kode tersembunyi saat cairan panas dituangkan.',
    'merch.cap': 'Topi Security',
    'merch.cap.desc': 'Topi adjustable dengan logo Cosmic Security bordir 3D dan bagian belakang mesh.',
    'merch.poster': 'Poster Code Warrior',
    'merch.poster.desc': 'Poster berkualitas tinggi menampilkan seni cyberpunk dan kutipan motivasi hacker.',
    'merch.buy': 'Beli Sekarang',
    'merch.shipping.title': 'Pengiriman & Pemesanan',
    'merch.shipping.free': 'GRATIS ONGKIR',
    'merch.shipping.free.desc': 'Untuk pesanan di atas $50',
    'merch.shipping.fast': 'PENGIRIMAN CEPAT',
    'merch.shipping.fast.desc': '2-5 hari kerja',
    'merch.shipping.whatsapp': 'PESAN WHATSAPP',
    'merch.shipping.whatsapp.desc': 'Pemesanan mudah via WhatsApp',
    
    // Contact
    'contact.title': 'Bergabung dengan Komunitas Kami',
    'contact.subtitle': 'Terhubung dengan para penggemar keamanan siber yang berpikiran sama, dapatkan dukungan, dan tetap update dengan yang terbaru dalam keamanan digital.',
    'contact.whatsapp.title': 'Komunitas WhatsApp',
    'contact.whatsapp.desc': 'Bergabunglah dengan grup WhatsApp aktif kami untuk dukungan instan dan diskusi komunitas.',
    'contact.whatsapp.action': 'Gabung WhatsApp',
    'contact.discord.title': 'Server Discord',
    'contact.discord.desc': 'Terhubung dengan sesama cyber warrior di server Discord kami untuk kolaborasi real-time.',
    'contact.discord.action': 'Gabung Discord',
    'contact.instagram.title': 'Instagram',
    'contact.instagram.desc': 'Ikuti kami untuk tips keamanan siber harian, konten behind-the-scenes, dan update.',
    'contact.instagram.action': 'Ikuti Kami',
    'contact.email.title': 'Dukungan Email',
    'contact.email.desc': 'Dapatkan dukungan langsung dari tim kami untuk pertanyaan kursus dan bantuan teknis.',
    'contact.email.action': 'Kirim Email',
    'contact.stats.title': 'Komunitas Kami yang Berkembang',
    'contact.stats.discord': 'Anggota Discord',
    'contact.stats.whatsapp': 'Komunitas WhatsApp',
    'contact.stats.instagram': 'Pengikut Instagram',
    'contact.cta.title': 'Siap Menjadi Cyber Warrior?',
    'contact.cta.desc': 'Ambil langkah pertama menuju penguasaan keamanan siber. Bergabunglah dengan komunitas kami dan mulai perjalanan Anda menjadi penjaga digital elit.',
    'contact.cta.start': 'Mulai Sekarang',
    'contact.cta.courses': 'Lihat Kursus',
    
    // Footer
    'footer.tagline': 'Pelatihan keamanan siber elite untuk generasi digital. Bergabunglah dengan ribuan siswa di seluruh dunia dalam menguasai seni pertahanan digital.',
    'footer.since': 'Melindungi perbatasan digital sejak 2020',
    'footer.links': 'Tautan Cepat',
    'footer.community': 'Komunitas',
    'footer.discord': 'Server Discord',
    'footer.whatsapp': 'Grup WhatsApp',
    'footer.instagram': 'Instagram',
    'footer.email': 'Dukungan Email',
    'footer.copyright': '© 2024 Cosmic Security. Hak cipta dilindungi.',
    'footer.made': 'Dibuat dengan',
    'footer.made.and': 'dan',
    'footer.made.for': 'untuk cyber warrior'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};