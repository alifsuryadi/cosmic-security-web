import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Globe } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en" as Language, name: "English", flag: "🇺🇸" },
    { code: "id" as Language, name: "Indonesia", flag: "🇮🇩" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-cyber-blue border border-transparent  transition-colors"
        >
          <Globe size={16} className="mr-2" />
          {currentLanguage?.flag} {currentLanguage?.name}
          <ChevronDown size={14} className="ml-1" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="bg-cyber-card border-cyber-grid min-w-[160px]"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer font-mono ${
              language === lang.code
                ? "bg-cyber-blue/20 text-cyber-blue"
                : "text-muted-foreground hover:text-cyber-blue hover:bg-cyber-blue/10"
            }`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
