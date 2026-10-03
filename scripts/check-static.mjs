import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

for (const locale of ['ru', 'kk', 'en']) {
	const html = await readFile(`build/${locale}/index.html`, 'utf8');
	assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`));
	assert.match(
		html,
		new RegExp(`<link[^>]*rel="canonical"[^>]*href="https://governance\\.kz/${locale}/"`)
	);
	assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `${locale}: one semantic H1`);
	assert.doesNotMatch(html, /noindex|static\.figma\.com|Figma Make App/);
	assert.doesNotMatch(html, /http:\/\/sveltekit-prerender/);
	for (const target of ['ru', 'kk', 'en']) {
		assert.match(
			html,
			new RegExp(`hreflang="${target}"[^>]*href="https://governance\\.kz/${target}/"`)
		);
	}
	assert.match(html, /team-main/);
	console.log(`${locale}: HTML, locale, heading, canonical, hreflang and local assets OK`);
}
const robots = await readFile('build/robots.txt', 'utf8');
assert.doesNotMatch(robots, /^Disallow:\s*\/$/m);
assert.match(robots, /Allow: \//);
const root = await readFile('build/index.html', 'utf8');
assert.match(root, /\/ru\//, 'the root entry leads to Russian');
const assets = await readdir('build/_app/immutable/assets');
assert.ok(
	assets.some((file) => file.endsWith('.woff2')),
	'fonts are self-hosted'
);
console.log('Static entry, robots.txt and self-hosted fonts OK');
