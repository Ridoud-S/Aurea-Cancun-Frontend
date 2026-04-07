import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['es', 'en'],
    defaultLocale: 'es',
    pathnames: {
        // ── Raíz ────────────────────────────────────────────────────────
        '/': '/',

        // ── Navegación principal ─────────────────────────────────────────
        '/rooms': {
            es: '/habitaciones',
            en: '/rooms',
        },
        '/offers': {
            es: '/ofertas',
            en: '/offers',
        },
        '/amenities': {
            es: '/amenidades',
            en: '/amenities',
        },
        '/experiences': {
            es: '/experiencias',
            en: '/experiences',
        },
        '/contact': {
            es: '/contacto',
            en: '/contact',
        },

        // ── Footer — columna Empresa ─────────────────────────────────────
        '/about': {
            es: '/sobre-nosotros',
            en: '/about',
        },
        '/suites': {
            es: '/suites',
            en: '/suites',
        },
        '/gastronomy': {
            es: '/gastronomia',
            en: '/gastronomy',
        },
        '/spa': {
            es: '/spa',
            en: '/spa',
        },

        // ── Footer — columna Links ───────────────────────────────────────
        '/book': {
            es: '/reservar',
            en: '/book',
        },
        '/privacy': {
            es: '/privacidad',
            en: '/privacy',
        },
        '/legal': {
            es: '/legal',
            en: '/legal',
        },
        '/best-rate': {
            es: '/reservar-mejor-tarifa',
            en: '/best-rate',
        },
    },
});
