"use client";
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

interface Props {
    isScrolled?: boolean;
}

export default function LanguageSwitcher({ isScrolled = false }: Props) {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const nextLocale = locale === 'es' ? 'en' : 'es';

    const handleToggle = () => {
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={handleToggle}
            className={`h-8 w-16 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                isScrolled
                    ? "border-slate-300 text-slate-900 bg-white hover:bg-slate-100"
                    : "border-white/60 text-white bg-transparent hover:bg-white/10"
            }`}
        >
            {nextLocale}
        </Button>
    );
}