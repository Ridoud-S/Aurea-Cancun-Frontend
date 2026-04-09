"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
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

  // Logotipo en formato Horizontal
  const BrandLogo = () => (
    <Link 
      href="/" 
      className="flex items-center gap-3 md:gap-4 group"
    >
      <Image
        src="/logo.png"
        alt="Aurea Cancún"
        width={70}
        height={70}
        className="w-12 h-12 md:w-16 md:h-16 object-contain transition-all duration-300 group-hover:scale-105"
        priority
      />
      <div className="flex flex-col items-start justify-center">
        <span className={cn(
          "font-serif text-xl md:text-3xl leading-none font-medium transition-colors duration-500",
          isScrolled ? "text-foreground" : "text-white"
        )}>
          AUREA
        </span>
        <span className="text-[9px] md:text-xs tracking-[0.25em] uppercase font-semibold text-primary mt-1">
          CANCÚN
        </span>
      </div>
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-background text-foreground shadow-sm"
          : "bg-transparent text-white"
      )}
    >
      {/* ────────────────────────────────────────────────────────
          DESKTOP: Diseño apilado (2 filas) estilo Tesoro Ixtapa
          ──────────────────────────────────────────────────────── */}
      <div className="hidden lg:flex flex-col w-full">
        {/* Fila 1: Logo centrado */}
        <div className="flex justify-center items-center pt-3 pb-2">
          <BrandLogo />
        </div>

        {/* Línea divisoria */}
        <div className={cn(
          "w-full border-t transition-colors duration-500",
          isScrolled ? "border-border/50" : "border-white/20"
        )} />

        {/* Fila 2: Navegación y Acciones */}
        <Container className="flex items-center justify-between py-2">
          <div className="flex-1 flex justify-center lg:justify-start">
            <Navbar isScrolled={isScrolled} />
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <LanguageSwitcher isScrolled={isScrolled} />
            <Button
              size="sm"
              className={cn(
                "rounded-full text-xs tracking-widest uppercase transition-all duration-500",
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(var(--color-primary),0.4)]"
                  : "bg-transparent border border-white text-white hover:bg-white hover:text-foreground hover:-translate-y-0.5"
              )}
              asChild
            >
              <Link href="/book">{t("bookNow")}</Link>
            </Button>
          </div>
        </Container>
      </div>


      <div className={cn(
        "lg:hidden flex items-center justify-between w-full py-2 px-4",
        isScrolled ? "border-b border-border/50" : "border-b border-transparent"
      )}>
        <div className="w-10" /> {/* Espaciador invisible para balancear visualmente el menú */}

        {/* En móvil, el logo va centrado y puede hacer crecer la barra naturalmente */}
        <BrandLogo />

        <MobileMenu isScrolled={isScrolled} />
      </div>
    </header>
  );
}