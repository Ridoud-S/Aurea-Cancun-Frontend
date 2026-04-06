"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname(); // next-intl devuelve el path SIN el prefijo de locale

    const nextLocale = locale === 'es' ? 'en' : 'es';

    const handleToggle = () => {
        // router.replace de next-intl acepta el pathname sin locale y lo construye correctamente
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={handleToggle}
            className="h-8 w-16 text-xs font-semibold tracking-widest uppercase"
        >
            {nextLocale}
        </Button>
    );
}