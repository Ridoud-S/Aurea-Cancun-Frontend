import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

interface RoomCardProps {
    room: {
        id: string;
        imageSrc: string;
        price: number;
        slug: string;
    };
}

export default function RoomCard({ room }: RoomCardProps) {
    const t = useTranslations("rooms");

    return (
        <div className="relative group overflow-hidden rounded-[var(--radius-xl)] min-h-[500px] md:h-[550px] w-full cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-700">
            {/* Inner Ring (Efecto de cristal/marco fotográfico) */}
            <div className="absolute inset-0 ring-1 ring-white/20 rounded-[var(--radius-xl)] z-20 pointer-events-none" />
            {/* Imagen de fondo con Zoom */}
            <Image
                src={room.imageSrc}
                alt={t(`types.${room.id}`)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Gradiente oscuro inferior para contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Tarjeta Flotante con Glassmorphism */}
            <div className="absolute bottom-6 left-5 right-5 bg-background/95 backdrop-blur-md p-6 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out rounded-[var(--radius-lg)] ring-1 ring-black/5 flex flex-col gap-4 z-30">
                
                {/* Título y Separador Áureo */}
                <div className="border-b border-primary/20 pb-4">
                    <h3 className="text-2xl md:text-3xl font-serif text-foreground leading-tight tracking-wide">
                        {t(`types.${room.id}`)}
                    </h3>
                </div>

                <div className="flex items-end justify-between pt-1">
                    <div className="flex flex-col gap-1">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">{t("from")}</p>
                        <p className="text-xl font-serif font-medium text-primary">
                            ${room.price.toLocaleString("es-MX")} <span className="text-xs font-sans text-muted-foreground font-normal lowercase">{t("night")}</span>
                        </p>
                    </div>

                    <Button 
                        asChild 
                        variant="outline" 
                        size="sm"
                        className="rounded-full border-primary/50 text-foreground hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(var(--color-primary),0.3)] bg-transparent"
                    >
                        <Link href={{ pathname: '/rooms/[slug]', params: { slug: room.slug } }}>
                            {t("viewDetails")}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}