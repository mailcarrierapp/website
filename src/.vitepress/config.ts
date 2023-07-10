import { defineConfig } from 'vitepress';
import sidebar from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MailCarrier',
  description: 'Design emails once, send them everywhere',
  head: [
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
  ],
  themeConfig: {
    siteTitle: false, // Hide title from navbar
    logo: {
      light: '/images/logos/logo-dark.svg',
      dark: '/images/logos/logo-light.svg',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mailcarrierapp/mailcarrier' },
    ],
    editLink: {
      pattern: 'https://github.com/mailcarrierapp/website/edit/master/src/:path',
    },
    sidebar,
  }
})
