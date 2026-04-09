import HeroSection from "@/components/sections/HeroSection";
import { getTranslations } from "next-intl/server";


export default async function AmenitiesPage() {
    const t = await getTranslations("amenitiesPage.hero");
    return (
        <main>
            <h1>Amenidades</h1>
            <HeroSection
                title={t("title")}
                subtitle={t("subtitle")}
                // URL temporal de alta calidad de una playa
                imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2560&auto=format&fit=crop"
                size="full"
                ctaText={t("button")}
                ctaHref="/amenities"
            />
        </main>
    );



}
