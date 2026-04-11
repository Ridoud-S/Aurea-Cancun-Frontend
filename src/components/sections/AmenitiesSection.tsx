import { getTranslations } from "next-intl/server";
import {
    Waves,
    UtensilsCrossed,
    Dumbbell,
    Sparkles,
    Wine,
    Umbrella,
    Wifi,
    CarFront,
    ConciergeBell,
    Sailboat,
    Flower2,
    ShowerHead,
} from "lucide-react";
import Container from "@/components/common/Container";

const amenities = [
    { id: "beachAccess",     icon: Waves           },
    { id: "restaurant",      icon: UtensilsCrossed },
    { id: "fitnessCenter",   icon: Dumbbell        },
    { id: "spa",             icon: Sparkles        },
    { id: "bar",             icon: Wine            },
    { id: "poolBar",         icon: Umbrella        },
    { id: "freeWifi",        icon: Wifi            },
    { id: "valetParking",    icon: CarFront        },
    { id: "concierge",       icon: ConciergeBell   },
    { id: "watersports",     icon: Sailboat        },
    { id: "gardenTerrace",   icon: Flower2         },
    { id: "rainShower",      icon: ShowerHead      },
] as const;

export default async function AmenitiesSection() {
    const tSection   = await getTranslations("home.amenitiesSection");
    const tAmenities = await getTranslations("amenities");

    return (
        <section className="bg-background py-20">
            <Container>
                {/* Encabezado */}
                <div className="mb-10 md:mb-14 flex flex-col items-center gap-3 text-center">
                    <p className="text-xs font-semibold tracking-widest uppercase text-primary">
                        {tSection("eyebrow")}
                    </p>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-foreground md:text-4xl">
                        {tSection("title")}
                    </h2>
                    <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base hidden md:block">
                        {tSection("subtitle")}
                    </p>
                </div>

                {/* Grid de amenidades */}
                <ul className="grid grid-cols-3 gap-2 md:grid-cols-3 lg:grid-cols-6 md:gap-4">
                    {amenities.map(({ id, icon: Icon }) => (
                        <li
                            key={id}
                            className="
                                group flex flex-col items-center gap-2 rounded-xl
                                bg-background/0 px-2 py-4 md:px-4 md:py-6 text-center
                                transition-all duration-500 ease-in-out
                                hover:-translate-y-1 hover:bg-background hover:shadow-lg
                                cursor-default
                            "
                        >
                            <Icon className="h-7 w-7 md:h-10 md:w-10 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(var(--color-primary),0.5)]" />
                            <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-muted-foreground leading-tight">
                                {tAmenities(id)}
                            </span>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}