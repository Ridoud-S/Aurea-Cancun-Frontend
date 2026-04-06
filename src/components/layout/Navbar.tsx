"use client";

import { useTranslations } from 'next-intl';
import { navLinks } from '@/constants/nav-links';
import { Link, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
    const t = useTranslations('nav');
    const pathname = usePathname();

    return (
        <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link
                        key={link.key}
                        href={link.href}
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-cyan-600",
                            isActive ? "text-cyan-600" : "text-foreground"
                        )}
                    >
                        {t(link.key)}
                    </Link>
                );
            })}

            <LanguageSwitcher />

            <Button className="rounded-full px-6">
                {t("bookNow")}
            </Button>
        </nav>
    );
}