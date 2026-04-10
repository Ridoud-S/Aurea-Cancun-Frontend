"use client";

import { useTranslations } from "next-intl";
import { navLinks } from "@/constants/nav-links";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-7">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.key}
            href={link.href}
            className={cn(
              "text-sm font-medium tracking-wide transition-colors duration-500",
              isScrolled
                ? isActive
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
                : isActive
                  ? "text-white font-semibold"
                  : "text-white/80 hover:text-white"
            )}
          >
            {t(link.key)}
          </Link>
        );
      })}
    </nav>
  );
}