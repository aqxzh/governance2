import { defineConfig } from '@inlang/paraglide-js';

export default defineConfig({
	outdir: './src/lib/paraglide',
	emitTsDeclarations: true,
	strategy: ['url', 'baseLocale'],
	trailingSlash: 'always',
	urlPatterns: [
		{
			pattern: ':protocol://:domain(.*)::port?/:path(.*)?',
			localized: [
				['ru', ':protocol://:domain(.*)::port?/ru/:path(.*)?'],
				['kk', ':protocol://:domain(.*)::port?/kk/:path(.*)?'],
				['en', ':protocol://:domain(.*)::port?/en/:path(.*)?']
			]
		}
	]
});
