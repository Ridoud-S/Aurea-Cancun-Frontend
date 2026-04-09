import { useTranslations } from "next-intl";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import RoomCard from "@/components/ui/RoomCard";
import Container from "@/components/common/Container";

const FEATURED_ROOMS = [
    {
        id: "deluxe-ocean",
        imageSrc: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1080&auto=format&fit=crop",
        price: 4500,
        slug: "deluxe-ocean-view"
    },
    {
        id: "swim-up-suite",
        imageSrc: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1080&auto=format&fit=crop",
        price: 6200,
        slug: "swim-up-suite"
    },
    {
        id: "family-villa",
        imageSrc: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1080&auto=format&fit=crop",
        price: 8500,
        slug: "family-villa"
    },
    {
        id: "presidential",
        imageSrc: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1080&auto=format&fit=crop",
        price: 15000,
        slug: "presidential-suite"
    }
];

export default function FeaturedRooms() {
    const t = useTranslations("rooms");

    return (
        <section className="py-24 bg-background">
            <Container>
                {/* Cabecera de la sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
                        {t("sectionTitle")}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {t("sectionSubtitle")}
                    </p>
                </div>

                {/* Carrusel */}
                <div className="relative md:px-12"> {/* Padding solo en md+ para que las flechas no tapen las cards */}
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {FEATURED_ROOMS.map((room) => (
                                <CarouselItem key={room.id} className="basis-[85%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                                    <div className="p-2">
                                        <RoomCard room={room} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Controles del carrusel */}
                        <CarouselPrevious className="hidden md:flex -left-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(var(--color-primary),0.3)]" />
                        <CarouselNext className="hidden md:flex -right-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(var(--color-primary),0.3)]" />
                    </Carousel>
                </div>
            </Container>
        </section>
    );
}