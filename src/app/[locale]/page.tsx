import HeroSection from "@/components/sections/HeroSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import { getTranslations } from "next-intl/server";
import FeaturedRooms from "@/components/sections/FeaturedRooms";

export default async function HomePage() {
    const t = await getTranslations("home.hero");

    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title={t("title")}
                subtitle={t("subtitle")}
                imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2560&auto=format&fit=crop"
                size="full"
                ctaText={t("button")}
                ctaHref="/rooms"
            />
            <FeaturedRooms />


            <AmenitiesSection />

            {/* El resto de las secciones de la Home irán aquí */}
        </div>
    );
}