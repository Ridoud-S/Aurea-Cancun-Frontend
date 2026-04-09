"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { navLinks } from "@/constants/nav-links";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
    isScrolled: boolean;
}

export default function MobileMenu({ isScrolled }: MobileMenuProps) {
    const t = useTranslations("nav");

    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className={cn(
                            "transition-all duration-300",
                            isScrolled
                                ? "text-slate-900 border-slate-200"
                                : "bg-transparent text-white border-white/30 hover:bg-white/10"
                        )}
                    >
                        <Menu className="size-5" />
                    </Button>
                </SheetTrigger>

                <SheetContent
                    side="right"
                    className="w-[300px] flex flex-col"
                    aria-describedby={undefined}
                >
                    {/* Título accesible oculto visualmente */}
                    <VisuallyHidden.Root>
                        <SheetTitle>Menú de navegación</SheetTitle>
                    </VisuallyHidden.Root>

                    {/* Cabecera del Sheet */}
                    <div className="pt-8 px-2">
                        <p className="font-serif tracking-widest text-xl uppercase text-slate-800">
                            Aurea Cancún
                        </p>
                        <Separator className="my-6" />
                    </div>

                    {/* Links de navegación */}
                    <nav className="flex flex-col gap-5 px-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.key}
                                href={link.href}
                                className="font-serif text-2xl text-slate-800 hover:text-amber-700 transition-colors"
                            >
                                {t(link.key)}
                            </Link>
                        ))}
                    </nav>

                    {/* Footer del Sheet — pegado al fondo */}
                    <div className="mt-auto flex flex-col gap-4 px-2 pb-8">
                        <Separator className="mb-2" />
                        <LanguageSwitcher />
                        <Button
                            className="w-full rounded-full bg-amber-700 hover:bg-amber-800 text-white tracking-widest uppercase text-xs"
                            asChild
                        >
                            <Link href="/book">{t("bookNow")}</Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}