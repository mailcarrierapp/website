export default [
  [
    'meta',
    { property: 'og:title', content: 'MailCarrier' },
  ],
  [
    'meta',
    { name: 'description', property: 'og:description', content: 'Design emails once, send them everywhere' },
  ],
  [
    'meta',
    { property: 'og:url', content: 'https://mailcarrier.app' },
  ],
  [
    'meta',
    { property: 'og:locale', content: 'en_US' },
  ],
  [
    'meta',
    { property: 'og:image', content: 'https://mailcarrier.app/images/og-image.png' },
  ],
  [
    'meta',
    { property: 'og:image:alt', content: 'MailCarrier' },
  ],

  // Twitter og
  [
    'meta',
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  [
    'meta',
    { name: 'twitter:site', content: 'theraloss' },
  ],
  [
    'meta',
    { name: 'twitter:title', content: 'MailCarrier' },
  ],
  [
    'meta',
    { name: 'twitter:description', content: 'Design emails once, send them everywhere' },
  ],
  [
    'meta',
    { name: 'twitter:image', content: 'https://mailcarrier.app/images/og-image.png' },
  ],
  [
    'meta',
    { name: 'twitter:image:alt', content: 'MailCarrier' },
  ],

  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png',
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png',
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png',
    },
  ],
  [
    'link',
    {
      rel: 'alternate icon',
      type: 'image/x-icon',
      sizes: '16x16',
      href: '/favicon/favicon.ico',
    },
  ],
  [
    'link',
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
  ],
  [
    'script',
    {
      defer: 'defer',
      'data-domain': 'mailcarrier.app',
      src: 'https://plausible.io/js/plausible.js',
    },
  ],
];