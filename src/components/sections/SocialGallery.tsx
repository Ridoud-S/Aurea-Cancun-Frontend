import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  subtitle: string;
  followButton: string;
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    alt: "Playa Cancún",
  },
  {
    src: "https://images.unsplash.com/photo-1700903408967-ad03c40e51ce?w=600&auto=format&fit=crop&q=60",
    alt: "Alberca resort",
  },
   {
    src: "https://images.unsplash.com/photo-1772352214475-12f9a75618d8?w=600&auto=format&fit=crop&q=60",
    alt: "Mesa con vista al mar",
  },
  {
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&auto=format&fit=crop&q=60",
    alt: "Restaurante del hotel",
  },
   {
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
    alt: "Suite de lujo",
  },
  {
    src: "https://images.unsplash.com/photo-1743592322287-9144fa7074bf?w=600&auto=format&fit=crop&q=60",
    alt: "Experiencia lifestyle",
  },
  {
    src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop",
    alt: "Cócteles tropicales",
  },
  {
    src: "https://images.unsplash.com/photo-1647776112336-72f4c30fafc1?w=600&auto=format&fit=crop&q=60",
    alt: "Bartender preparando un cóctel",
  },
   {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
    alt: "Habitación con vista al mar",
  },
];

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function SocialGallery({ eyebrow, title, subtitle, followButton }: Props) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14 space-y-3">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">
            {title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto hidden md:block">
            {subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[200px] gap-3 md:gap-4">
          {images.map((img, index) => {
            const isLarge = index === 0;
            const hideOnMobile = index >= 6;

            return (
              <div
                key={index}
                className={`
                  relative group overflow-hidden rounded-xl cursor-pointer
                  ${hideOnMobile ? "hidden md:block" : ""}
                  ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                `}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={isLarge ? "(max-width: 768px) 50vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  priority={isLarge}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                    <InstagramIcon size={isLarge ? 36 : 24} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com/aureacancun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 px-6 py-3 rounded-full text-sm font-medium tracking-wide"
          >
            <InstagramIcon size={16} />
            {followButton}
          </a>
        </div>

      </div>
    </section>
  );
}