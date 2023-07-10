export default [
  {
    text: 'Getting started',
    collapsed: true,
    items: [
      { text: 'Installation', link: '/docs/getting-started/installation' },
      { text: 'Running with Docker', link: '/docs/getting-started/running-docker' },
      { text: 'Authentication', link: '/docs/getting-started/authentication' },
      { text: 'Your first template', link: '/docs/getting-started/your-first-template' },
    ],
  },

  {
    text: 'Sending mails',
    collapsed: true,
    items: [
      { text: 'API Endpoint', link: '/docs/sending-mails/api-endpoint' },
      { text: 'Protecting the API', link: '/docs/sending-mails/protecting-api' },
      { text: 'Middleware', link: '/docs/sending-mails/middleware' },
      { text: 'Recipient', link: '/docs/sending-mails/recipient' },
      { text: 'Variables', link: '/docs/sending-mails/variables' },
      { text: 'Attachments', link: '/docs/sending-mails/attachments' },
      { text: 'Tags & Metadata', link: '/docs/sending-mails/tags-metadata' },
      { text: 'Queue', link: '/docs/sending-mails/queue' },
      { text: 'Errors', link: '/docs/sending-mails/errors' },
    ],
  },

  {
    text: 'Configuration',
    collapsed: true,
    items: [
      { text: 'API Endpoint', link: '/docs/configuration/api-endpoint' },
      { text: 'Logs', link: '/docs/configuration/logs' },
      { text: 'Attachments', link: '/docs/configuration/attachments' },
      { text: 'Queue', link: '/docs/configuration/queue' },
    ],
  },

  {
    text: 'Examples',
    collapsed: true,
    items: [
      { text: 'Installing a social provider', link: '/docs/examples/other-social-provider' },
    ],
  },
];