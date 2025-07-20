import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import cosmicLogo from "../assets/cosmic-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check which section is in view
      const sections = ["hero", "about", "courses", "merch", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: t("nav.about"), id: "about" },
    { name: t("nav.courses"), id: "courses" },
    { name: t("nav.merch"), id: "merch" },
    { name: t("nav.contact"), id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cyber-dark/95 backdrop-blur-md border-b border-cyber-blue/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-2 text-2xl font-bold font-cyber text-cyber-blue cursor-pointer hover:text-cyber-purple transition-colors"
          onClick={() => scrollToSection("hero")}
        >
          <img src={cosmicLogo} alt="Cosmic Security" className="h-10" />
          <span className="animate-pulse-glow">{"<"}</span>
          Cosmic Security
          <span className="animate-pulse-glow">{"/>"}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`transition-colors font-mono font-medium relative after:content-[''] 
                         after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 
                         after:bg-cyber-blue after:transition-transform after:duration-300
                         ${
                           activeSection === item.id
                             ? "text-cyber-blue after:scale-x-100"
                             : "text-foreground hover:text-cyber-blue after:scale-x-0 hover:after:scale-x-100"
                         }`}
            >
              {item.name}
            </button>
          ))}
          <LanguageSelector />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-cyber-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-cyber-dark/95 backdrop-blur-md border-t border-cyber-blue/20 px-4 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left py-3 transition-colors font-mono border-b border-cyber-grid/30 last:border-b-0
                         ${
                           activeSection === item.id
                             ? "text-cyber-blue"
                             : "text-foreground hover:text-cyber-blue"
                         }`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-3 border-t border-cyber-grid/30 mt-3">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
