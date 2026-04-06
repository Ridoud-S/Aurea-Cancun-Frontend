import Container from "@/components/common/Container";
import { Link } from "@/i18n/navigation";
import { getTranslations, getLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default async function Header() {
    const locale = await getLocale();
    const t = await getTranslations({ locale, namespace: "nav" });

    return (
        <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
            <Container className="flex h-20 items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-xl font-semibold tracking-wide">
                    Aurea Cancún
                </Link>

                {/* Desktop: links + switcher + CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <Navbar />
                    <LanguageSwitcher />
                    <Button size="sm" asChild>
                        <Link href="/reservar">{t("bookNow")}</Link>
                    </Button>
                </div>

                {/* Mobile/tablet: hamburguesa */}
                <div className="flex lg:hidden">
                    <MobileMenu />
                </div>

            </Container>
        </header>
    );
}