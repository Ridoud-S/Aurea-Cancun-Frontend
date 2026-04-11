import HeroSection from "@/components/sections/HeroSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import { getTranslations } from "next-intl/server";
import FeaturedRooms from "@/components/sections/FeaturedRooms";
import SocialGallery from "@/components/sections/SocialGallery";

export default async function HomePage() {
    const t = await getTranslations("home");

    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title={t("hero.title")}
                subtitle={t("hero.subtitle")}
                imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2560&auto=format&fit=crop"
                size="full"
                ctaText={t("hero.button")}
                ctaHref="/rooms"
            />
            <FeaturedRooms />

            <AmenitiesSection />

            <SocialGallery
                eyebrow={t("socialGallery.eyebrow")}
                title={t("socialGallery.title")}
                subtitle={t("socialGallery.subtitle")}
                followButton={t("socialGallery.followButton")}
            />
        </div>
    );
}
