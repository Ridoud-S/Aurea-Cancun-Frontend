import Image from "next/image";

type Props = {
  title: string;
};

const images = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    alt: "Playa Cancún",
  },
  {
    src: "https://images.unsplash.com/photo-1519821172141-b5d8e2b3b1f8",
    alt: "Alberca resort",
  },
  {
    src: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
    alt: "Cócteles tropicales",
  },
  {
    src: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d0",
    alt: "Vista hotel",
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    alt: "Habitación lujo",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    alt: "Experiencia lifestyle",
  },
];

export default function SocialGallery({ title }: Props) {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">

        <h2 className="text-center font-serif text-3xl md:text-4xl text-foreground mb-10">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[200px] gap-4">

          {images.map((img, index) => {
            const isLarge = index === 0;

            return (
              <div
                key={index}
                className={`
                  relative group overflow-hidden rounded-xl
                  ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
                `}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Instagram
                    </span>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}