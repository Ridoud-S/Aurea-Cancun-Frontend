"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (newLocale: 'es' | 'en') => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-2">
            <Button
                variant={locale === 'es' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleChange('es')}
            >
                ES
            </Button>
            <Button
                variant={locale === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleChange('en')}
            >
                EN
            </Button>
        </div>
    );
}