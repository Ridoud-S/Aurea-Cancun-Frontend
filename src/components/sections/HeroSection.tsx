"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    imageSrc: string;
    size: "full" | "compact";
    ctaText?: string;
    ctaHref?: string;
}

export default function HeroSection({
    title,
    subtitle,
    imageSrc,
    size,
    ctaText,
    ctaHref = "/",
}: HeroSectionProps) {
    return (
        <section
            className={cn(
                "relative flex items-center justify-center overflow-hidden",
                size === "full" ? "min-h-[85vh]" : "h-[40vh]"
            )}
        >
            {/* Imagen de fondo */}
            <Image
                src={imageSrc}
                alt={title}
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center text-white">
                <h1
                    className={cn(
                        "font-serif font-semibold tracking-wide drop-shadow-md",
                        size === "full"
                            ? "text-5xl md:text-6xl lg:text-7xl"
                            : "text-3xl md:text-4xl"
                    )}
                >
                    {title}
                </h1>

                {subtitle && (
                    <p
                        className={cn(
                            "max-w-xl text-white/85 drop-shadow-sm",
                            size === "full"
                                ? "text-lg md:text-xl"
                                : "text-sm md:text-base"
                        )}
                    >
                        {subtitle}
                    </p>
                )}

                {ctaText && (
                    <Button
                        asChild
                        size={size === "full" ? "lg" : "sm"}
                        className="mt-2 rounded-full border border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white hover:text-slate-900 transition-all duration-300"
                    >
                        <Link href={ctaHref}>{ctaText}</Link>
                    </Button>
                )}
            </div>
        </section>
    );
}