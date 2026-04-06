import Container from "@/components/common/Container";

export default function Footer() {
    return (
        <footer className="border-t py-10">
            <Container className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                <p>© 2026 Aurea Cancún. All rights reserved.</p>
                <p>Luxury beachfront experience in Cancún.</p>
            </Container>
        </footer>
    );
}