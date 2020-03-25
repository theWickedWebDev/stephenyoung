export const path = `${S3_URL}/images/favicon/`;

export const links = [
    { rel: 'apple-touch-icon', sizes: '57x57', href: `${path}apple-icon-57x57.png` },
    { rel: 'apple-touch-icon', sizes: '60x60', href: `${path}apple-icon-60x60.png` },
    { rel: 'apple-touch-icon', sizes: '72x72', href: `${path}apple-icon-72x72.png` },
    { rel: 'apple-touch-icon', sizes: '76x76', href: `${path}apple-icon-76x76.png` },
    { rel: 'apple-touch-icon', sizes: '114x114', href: `${path}apple-icon-114x114.png` },
    { rel: 'apple-touch-icon', sizes: '120x120', href: `${path}apple-icon-120x120.png` },
    { rel: 'apple-touch-icon', sizes: '144x144', href: `${path}apple-icon-144x144.png` },
    { rel: 'apple-touch-icon', sizes: '152x152', href: `${path}apple-icon-152x152.png` },
    { rel: 'apple-touch-icon', sizes: '180x180', href: `${path}apple-icon-180x180.png` },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: `${path}android-icon-192x192.png` },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${path}favicon-32x32.png` },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: `${path}favicon-96x96.png` },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${path}favicon-16x16.png` },
    { rel: 'manifest', href: `${path}manifest.json` },
];

export const meta = [
    { key: 'themecolor', name: 'theme-color', content: '#ffffff' },
    { key: 'tilecolor', name: 'msapplication-TileColor', content: '#ffffff' },
    { key: 'tileimage',
        name: 'msapplication-TileImage',
        content: `${path}ms-icon-144x144.png`
    }
];
