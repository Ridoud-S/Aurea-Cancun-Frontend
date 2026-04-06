import Container from "@/components/common/Container";
import { Link } from "@/i18n/navigation";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
            <Container className="flex h-20 items-center justify-between">
                <Link href="/" className="text-xl font-semibold tracking-wide">
                    Aurea Cancún
                </Link>

                <Navbar />
                <MobileMenu />
            </Container>
        </header>
    );
}