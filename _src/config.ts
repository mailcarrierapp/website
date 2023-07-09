export const SITE = {
	title: 'MailCarrier',
	description: 'Mailing platform with templates and logs included.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://mailcarrier.app/images/og-image.png',
		alt: 'MailCarrier'
	},
	twitter: 'theraloss',
};

export const GITHUB_EDIT_URL = `https://github.com/mailcarrierapp/docs/blob/master/docs/`;

export const COMMUNITY_INVITE_URL = null;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = [
	{ text: '', header: true },
	{ text: 'Getting started', header: true },
	{ text: 'Installation', link: 'docs/getting-started/installation' },
	{ text: 'Running with Docker', link: 'docs/getting-started/running-docker' },
	{ text: 'Authentication', link: 'docs/getting-started/authentication' },
	{ text: 'Your first template', link: 'docs/getting-started/your-first-template' },

	{ text: 'Sending mails', header: true },
	{ text: 'API Endpoint', link: 'docs/sending-mails/api-endpoint' },
	{ text: 'Protecting the API', link: 'docs/sending-mails/protecting-api' },
	{ text: 'Middleware', link: 'docs/sending-mails/middleware' },
	{ text: 'Recipient', link: 'docs/sending-mails/recipient' },
	{ text: 'Variables', link: 'docs/sending-mails/variables' },
	{ text: 'Attachments', link: 'docs/sending-mails/attachments' },
	{ text: 'Tags & Metadata', link: 'docs/sending-mails/tags-metadata' },
	{ text: 'Queue', link: 'docs/sending-mails/queue' },
	{ text: 'Errors', link: 'docs/sending-mails/errors' },

	{ text: 'Configuration', header: true },
	{ text: 'API Endpoint', link: 'docs/configuration/api-endpoint' },
	{ text: 'Logs', link: 'docs/configuration/logs' },
	{ text: 'Attachments', link: 'docs/configuration/attachments' },
	{ text: 'Queue', link: 'docs/configuration/queue' },

	{ text: 'Examples', header: true },
	{ text: 'Installing a social provider', link: 'docs/examples/other-social-provider' },
];
