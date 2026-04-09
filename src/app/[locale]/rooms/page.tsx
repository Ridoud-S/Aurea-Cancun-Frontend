import HeroSection from "@/components/sections/HeroSection";
import { getTranslations } from "next-intl/server";

export default async function RoomsPage() {
    const t = await getTranslations("roomsPage.hero");
    return (
        <main >
            <HeroSection
                title={t("title")}
                subtitle={t("subtitle")}
                // Habitación de lujo tropical con vista
                imageSrc="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2560&auto=format&fit=crop"
                size="full"
                ctaText={t("button")}
                ctaHref="/rooms"
            />
        </main>
    );
}