"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";

type EmpresaKey = `company.${"about" | "suites" | "experiences" | "gastronomy" | "spa"}`;
type LinkKey = `links.${"book" | "offers" | "contact" | "privacy" | "legal" | "bestRate"}`;

export default function Footer() {
  const t = useTranslations("footer");

  const empresa: Array<{ labelKey: EmpresaKey; href: "/about" | "/suites" | "/experiences" | "/gastronomy" | "/spa" }> = [
    { labelKey: "company.about", href: "/about" },
    { labelKey: "company.suites", href: "/suites" },
    { labelKey: "company.experiences", href: "/experiences" },
    { labelKey: "company.gastronomy", href: "/gastronomy" },
    { labelKey: "company.spa", href: "/spa" },
  ];

  const links: Array<{ labelKey: LinkKey; href: "/book" | "/offers" | "/contact" | "/privacy" | "/legal" | "/best-rate" }> = [
    { labelKey: "links.book", href: "/book" },
    { labelKey: "links.offers", href: "/offers" },
    { labelKey: "links.contact", href: "/contact" },
    { labelKey: "links.privacy", href: "/privacy" },
    { labelKey: "links.legal", href: "/legal" },
    { labelKey: "links.bestRate", href: "/best-rate" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main grid */}
      <Container className="py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Columna 1 — Marca */}
          <div className="flex flex-col gap-4 md:gap-6">
            <div>
              <p className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase text-background">
                Aurea Cancún
              </p>
              <Separator className="mt-3 w-12 bg-primary/60" />
            </div>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs hidden md:block">
              {t("tagline")}
            </p>
          </div>

          {/* Columnas 2 y 3 — Links en móvil side by side */}
          <div className="grid grid-cols-2 md:contents gap-8">

            {/* Empresa */}
            <div className="flex flex-col gap-3 md:gap-5">
              <h3 className="text-xs tracking-widest uppercase text-primary font-semibold">
                {t("columns.company")}
              </h3>
              <ul className="flex flex-col gap-2 md:gap-3">
                {empresa.map(({ labelKey, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="
                        text-sm text-background/70 hover:text-primary hover:-translate-y-1 block
                        transition-all duration-500 flex items-center gap-2
                        before:content-['·'] before:text-primary
                      "
                    >
                      {t(labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3 md:gap-5">
              <h3 className="text-xs tracking-widest uppercase text-primary font-semibold">
                {t("columns.links")}
              </h3>
              <ul className="flex flex-col gap-2 md:gap-3">
                {links.map(({ labelKey, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="
                        text-sm text-background/70 hover:text-primary hover:-translate-y-1 block
                        transition-all duration-500 flex items-center gap-2
                        before:content-['·'] before:text-primary
                      "
                    >
                      {t(labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <Container className="py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-1 md:gap-2">
          <p className="text-xs text-background/40">
            {t("copyright")}
          </p>
          <p className="text-xs text-background/30 tracking-widest uppercase">
            {t("location")}
          </p>
        </Container>
      </div>
    </footer>
  );
}