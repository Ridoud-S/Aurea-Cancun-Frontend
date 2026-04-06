import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/app/globals.css';

export const metadata: Metadata = {
    title: "Aurea Cancún | Luxury Beachfront Resort",
    description: "Descubre el lujo frente al mar en Cancún. Habitaciones premium, experiencias exclusivas y amenidades de primer nivel."
};

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as 'es' | 'en')) {
        notFound();
    }

    // Pasar el locale explícitamente para evitar que use el request context ambiguo
    const messages = await getMessages({ locale });

    return (
        <html lang={locale} suppressHydrationWarning>
            <body suppressHydrationWarning className="antialiased">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <TooltipProvider>
                        <Header />
                        <main className="min-h-screen flex flex-col">
                            {children}
                        </main>
                        <Footer />
                    </TooltipProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}