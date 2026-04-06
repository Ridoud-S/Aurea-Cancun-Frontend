import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <section className="py-24 text-center">
                    <h1 className="text-5xl font-bold">Aurea Cancún</h1>
                    <p className="mt-4 text-muted-foreground">
                        Luxury beachfront resort experience
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}