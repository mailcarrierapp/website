import { defineConfig } from 'vitepress';
import head from './head';
import sidebar from './sidebar';
import onBuildEnd from './onBuildEnd';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MailCarrier',
  description: 'Design emails once, send them everywhere',
  lastUpdated: true,
  buildEnd: onBuildEnd,
  // @ts-ignore
  head,
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
    search: {
      provider: 'local',
    },
    sidebar,
  }
})
