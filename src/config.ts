export const SITE = {
	title: 'MailCarrier',
	description: 'Mailing platform with templates and logs included.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
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
	{ text: 'Authentication', link: 'docs/getting-started/authentication' },
	{ text: 'Your first template', link: 'docs/getting-started/your-first-template' },

	{ text: 'Sending mails', header: true },
	{ text: 'API Endpoint', link: 'docs/sending-mails/api-endpoint' },

	{ text: 'Examples', header: true },
	{ text: 'Installing a social provider', link: 'docs/examples/other-social-provider' },
];
