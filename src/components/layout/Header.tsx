"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Container from "@/components/common/Container";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white text-slate-900 shadow-md py-3"
          : "bg-black/20 backdrop-blur-md text-white border-b border-white/10 py-5"
      )}
    >
      {/* Desktop — 3 zonas en una fila */}
      <Container className="hidden lg:flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Aurea Cancún"
            className={cn(
              "h-10 w-auto transition-all duration-300",
              isScrolled ? "brightness-0" : "brightness-100"
            )}
          />
        </Link>

        {/* Nav central */}
        <Navbar isScrolled={isScrolled} />

        {/* Derecha: idioma + CTA */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <LanguageSwitcher />
          <Button
            size="sm"
            className={cn(
              "rounded-full text-xs tracking-widest uppercase transition-all duration-300",
              isScrolled
                ? "bg-amber-700 text-white hover:bg-amber-800"
                : "bg-transparent border border-white text-white hover:bg-white hover:text-slate-900"
            )}
            asChild
          >
            <Link href="/reservar">{t("bookNow")}</Link>
          </Button>
        </div>
      </Container>

      {/* Mobile — logo izquierda + hamburguesa derecha */}
      <Container className="flex lg:hidden items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Aurea Cancún"
            className={cn(
              "h-8 w-auto transition-all duration-300",
              isScrolled ? "brightness-0" : "brightness-100"
            )}
          />
        </Link>
        <MobileMenu />
      </Container>
    </header>
  );
}