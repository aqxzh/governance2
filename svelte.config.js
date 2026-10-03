import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	compilerOptions: { runes: true },
	kit: {
		// Deploy at the domain root. Keep prerendered links/assets origin-independent.
		paths: { relative: false },
		adapter: adapter({ precompress: true, strict: true }),
		prerender: { entries: ['/', '/ru/', '/kk/', '/en/'] }
	}
};
export default config;
