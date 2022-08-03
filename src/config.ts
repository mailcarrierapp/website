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

export const KNOWN_LANGUAGES = {
	English: 'en',
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

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Section Header', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Page 2', link: 'en/page-2' },
		{ text: 'Page 3', link: 'en/page-3' },

		{ text: 'Another Section', header: true },
		{ text: 'Page 4', link: 'en/page-4' },
	],
};
