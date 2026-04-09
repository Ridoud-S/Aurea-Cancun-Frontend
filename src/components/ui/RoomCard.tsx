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
        <div className="relative group overflow-hidden rounded-xl h-[450px] w-full cursor-pointer">
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

            {/* Tarjeta Flotante Blanca */}
            <div className="absolute bottom-6 left-6 right-6 bg-white p-6 shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 rounded-lg flex flex-col gap-3">
                <h3 className="text-2xl font-serif text-slate-900 leading-tight">
                    {t(`types.${room.id}`)}
                </h3>

                <div className="flex items-end justify-between mt-2">
                    <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest">{t("from")}</p>
                        <p className="text-lg font-bold text-amber-700">
                            ${room.price.toLocaleString("es-MX")} <span className="text-sm text-slate-500 font-normal lowercase">{t("night")}</span>
                        </p>
                    </div>

                    <Button asChild variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white transition-colors">
                        <Link href={{ pathname: '/rooms/[slug]', params: { slug: room.slug } }}>
                            {t("viewDetails")}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}