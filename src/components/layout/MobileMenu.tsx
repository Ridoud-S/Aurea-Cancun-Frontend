"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { navLinks } from "@/constants/nav-links";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MobileMenu() {
    const t = useTranslations("nav");

    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="size-5" />
                    </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[300px]">
                    <div className="mt-10 flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.key}
                                href={link.href}
                                className="text-lg font-medium"
                            >
                                {t(link.key)}
                            </Link>
                        ))}

                        <div className="pt-4">
                            <LanguageSwitcher />
                        </div>

                        <Button className="mt-4 rounded-full">
                            {t("bookNow")}
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}