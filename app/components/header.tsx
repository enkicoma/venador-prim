"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";
import type React from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import enImg from "@/public/en.jpg";
import logo from "@/public/logo-color.svg";
import roImg from "@/public/roman.png";
import ruImg from "@/public/russia.jpg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const languages = [
  { value: "en", label: "English", img: enImg },
  { value: "ro", label: "Romanian", img: roImg },
  { value: "ru", label: "Russian", img: ruImg },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (value: string) => {
    changeLanguage(value);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ",
        isScrolled ? "py-2" : "py-4"
      )}
      style={{ backgroundColor: isScrolled ? "white" : "transparent" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between rounded-full bg-white py-3 px-6 shadow-sm">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <Image
                src={logo}
                width={200}
                height={200}
                alt="Venador Prim Logo"
                className="w-auto h-[25px] md:h-[38px]"
              />
            </div>
          </Link>
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-8">
              <NavLink href="/" onClick={()=>setIsMobileMenuOpen(false)}>{t("navigation.home")}</NavLink>
              <NavLink href="/products" onClick={()=>setIsMobileMenuOpen(false)}>{t("navigation.products")}</NavLink>
              <NavLink href="/services" onClick={()=>setIsMobileMenuOpen(false)}>{t("navigation.services")}</NavLink>
              <NavLink href="/projects" onClick={()=>setIsMobileMenuOpen(false)}>{t("navigation.projects")}</NavLink>
              <NavLink href="/certificates" onClick={()=>setIsMobileMenuOpen(false)}>
                {t("navigation.certificates")}
              </NavLink>
            </div>
          </nav>

          <div className="block md:hidden w-full" />
          {/* Right Side - Language & Contact */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Select
                value={currentLanguage}
                onValueChange={handleLanguageChange}
              >
                <SelectTrigger className="flex items-center h-10 space-x-1 rounded-full border border-gray-200 pl-1 pr-2 min-w-[60px] bg-transparent">
                  <div className="flex items-center gap-1">
                    <div className="relative h-6 w-6 overflow-hidden rounded-full">
                      <Image
                        src={
                          languages.find(
                            (lang) => lang.value === currentLanguage
                          )?.img || enImg
                        }
                        alt="Language Flag"
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {languages.map((language, i) => (
                    <SelectItem key={i} value={language.value}>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <div className="relative h-4 w-4 overflow-hidden rounded-full">
                          <Image
                            src={language.img}
                            alt={t(`languages.${language.value}`)}
                            width={16}
                            height={16}
                            className="object-cover"
                          />
                        </div>
                        <span>{t(`languages.${language.value}`)}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              asChild
              className="hidden md:flex rounded-lg py-5 bg-primary hover:bg-primary/90 text-white"
            >
              <Link
                href="/contact"
                className="flex items-center space-x-2 px-5"
                onClick={()=>setIsMobileMenuOpen(false)}
              >
                <span>{t("navigation.contact")}</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ms-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-gray-600"></span>
              <span className="block h-0.5 w-6 bg-gray-600"></span>
              <span className="block h-0.5 w-6 bg-gray-600"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-lg bg-white shadow-lg p-4">
            <nav className="flex flex-col space-y-4 text-center">
              <MobileNavLink href="/" onClick={()=>setIsMobileMenuOpen(false)}>{t("navigation.home")}</MobileNavLink>
              <MobileNavLink href="/products" onClick={()=>setIsMobileMenuOpen(false)}>
                {t("navigation.products")}
              </MobileNavLink>
              <MobileNavLink href="/services" onClick={()=>setIsMobileMenuOpen(false)}>
                {t("navigation.services")}
              </MobileNavLink>
              <MobileNavLink href="/projects" onClick={()=>setIsMobileMenuOpen(false)}>
                {t("navigation.projects")}
              </MobileNavLink>
              <MobileNavLink href="/certificates" onClick={()=>setIsMobileMenuOpen(false)}>
                {t("navigation.certificates")}
              </MobileNavLink>
              <Button
                asChild
                className="py-5 w-full justify-center rounded-lg mt-2 bg-primary hover:bg-primary/90 text-white"
              >
                <Link href="/contact" className="flex items-center space-x-2" onClick={()=>setIsMobileMenuOpen(false)}>
                  <span>{t("navigation.contact")}</span>
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-base font-medium transition-colors relative pb-1",
        isActive
          ? "text-primary border-b-2 border-primary"
          : "text-gray-700 hover:text-primary",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-base font-medium transition-colors py-2",
        isActive
          ? "text-primary border-b-2 border-primary"
          : "text-gray-700 hover:text-primary"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
