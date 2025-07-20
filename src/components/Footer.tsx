import React from "react";
import { Shield, Heart, Code } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import cosmicLogo from "../assets/cosmic-logo.png";

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-cyber-dark border-t border-cyber-blue/20 py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div
              className="text-2xl font-bold font-cyber text-cyber-blue cursor-pointer hover:text-cyber-purple transition-colors mb-4"
              onClick={scrollToTop}
            >
              <img src={cosmicLogo} alt="Cosmic Security" className="h-20" />
              <span className="animate-pulse-glow">{"<"}</span>
              Cosmic Security
              <span className="animate-pulse-glow">{"/>"}</span>
            </div>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4 max-w-md">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center text-cyber-green font-mono text-sm">
              <Shield size={16} className="mr-2" />
              {t("footer.since")}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-cyber text-foreground mb-4">
              {t("footer.links")}
            </h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  {t("nav.about")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("courses");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  {t("nav.courses")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("merch");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  {t("nav.merch")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  {t("nav.contact")}
                </button>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-lg font-bold font-cyber text-foreground mb-4">
              {t("footer.community")}
            </h4>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a
                  href="https://discord.gg/cosmicsecurity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyber-purple transition-colors"
                >
                  {t("footer.discord")}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyber-green transition-colors"
                >
                  {t("footer.whatsapp")}
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/cosmicsecurity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  {t("footer.instagram")}
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@cosmicsecurity.com"
                  className="text-muted-foreground hover:text-cyber-blue transition-colors"
                >
                  {t("footer.email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-primary mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground font-mono text-sm mb-4 md:mb-0">
            {t("footer.copyright")}
          </div>

          <div className="flex items-center text-muted-foreground font-mono text-sm">
            {t("footer.made")}
            <Heart size={16} className="mx-2 text-cyber-purple animate-pulse" />
            {t("footer.made.and")}
            <Code size={16} className="mx-2 text-cyber-blue" />
            {t("footer.made.for")}
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-cyber-blue text-cyber-dark p-3 rounded-full 
                   hover:bg-cyber-purple transition-all duration-300 hover:shadow-glow 
                   hover:-translate-y-1 z-40"
          aria-label="Scroll to top"
        >
          <Shield size={24} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
