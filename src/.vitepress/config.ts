import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitepress';
import head from './head';
import onBuildEnd from './onBuildEnd';
import sidebar from './sidebar';
import transformHtml from './transformHtml';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'MailCarrier',
  description: 'Design emails once, send them everywhere',
  lastUpdated: true,
  buildEnd: onBuildEnd,
  transformHtml: transformHtml,
  appearance: 'force-dark',
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
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFeatures\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/VPFeatures.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFeature\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/VPFeature.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPImage\.vue$/,
          replacement: fileURLToPath(
            new URL('./components/VPImage.vue', import.meta.url)
          )
        }
      ]
    }
  }

})
