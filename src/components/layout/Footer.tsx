import { Link } from "@/i18n/navigation";
import Container from "@/components/common/Container";
import { Separator } from "@/components/ui/separator";


// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const empresa = [
  { label: "Sobre Aurea", href: "/sobre-nosotros" },
  { label: "Suites", href: "/suites" },
  { label: "Experiencias", href: "/experiencias" },
  { label: "Gastronomía", href: "/gastronomia" },
  { label: "Spa & Wellness", href: "/spa" },
];

const links = [
  { label: "Reservar ahora", href: "/reservar" },
  { label: "Ofertas exclusivas", href: "/ofertas" },
  { label: "Contacto", href: "/contacto" },
  { label: "Aviso de privacidad", href: "/privacidad" },
  { label: "Aviso legal", href: "/legal" },
  { label: "Mejor tarifa garantizada", href: "/reservar" },
];


// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white">
      {/* Main grid */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Columna 1 — Marca + descripción + redes */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-serif text-2xl tracking-[0.2em] uppercase text-white">
                Aurea Cancún
              </p>
              <Separator className="mt-3 w-12 bg-amber-700/60" />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Un oasis de lujo frente al mar Caribe. Experiencias únicas,
              gastronomía de autor y el servicio más refinado de la Riviera Maya.
            </p>
            {/* Redes sociales */}
          
          </div>

          {/* Columna 2 — Empresa */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs tracking-widest uppercase text-amber-600 font-semibold">
              Empresa
            </h3>
            <ul className="flex flex-col gap-3">
              {empresa.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="
                      text-sm text-white/70 hover:text-amber-400
                      transition-colors duration-200 flex items-center gap-2
                      before:content-['·'] before:text-amber-700
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs tracking-widest uppercase text-amber-600 font-semibold">
              Links
            </h3>
            <ul className="flex flex-col gap-3">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="
                      text-sm text-white/70 hover:text-amber-400
                      transition-colors duration-200 flex items-center gap-2
                      before:content-['·'] before:text-amber-700
                    "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © 2026 Aurea Cancún. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/30 tracking-widest uppercase">
            Luxury Beachfront · Cancún, México
          </p>
        </Container>
      </div>
    </footer>
  );
}