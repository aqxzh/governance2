// Original diagrams remain presentation media; application controls are Svelte components.
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
const source = resolve(process.argv[2] || '../website');
mkdirSync('static/images/landing', { recursive: true });
const images = {
	process: 'demka-photo.png',
	before: 'before.png',
	after: 'after.png',
	scheme1: 'scheme-steps-1-9.png',
	scheme2: 'scheme-steps-10-17.png',
	strategy: '762e3da223b722c4708edaa513edb7fb81d065dc.png',
	assessment: 'a1f65cf94f5b3c805215dfdc6c26bc10642d5405.png',
	assessmentDetail: 'online-assessment.png',
	advisor: 'assistant.png',
	exec: 'd905383f33c1e237129302dc61291c1114ce4e71.png',
	service: '29a3bee7660df8358ecf16a3422d11eb33c3cb17.png',
	securityMap: 'c07407db45f5b55ba113edc2d3987e4a10064c6c.png',
	securitySymbol: '29ec613a87bc4f3acf7213fc4f5fc665e405cb89.png',
	security1: '139f115f8c2e5f0ed078adfaed1ec6bced7ee40c.png',
	security2: '8a984d7d3fd8f76fd80c78c281b414d9286b59ad.png',
	security3: 'f69f67e473112b2672b4d0eedc1b935c373c076e.png'
};
const manifest = {};
for (const [id, file] of Object.entries(images)) {
	const target = `static/images/landing/${id}.webp`;
	execFileSync('magick', [
		resolve(source, 'imports', file),
		'-resize',
		'1920x>',
		'-strip',
		'-quality',
		'85',
		target
	]);
	const [width, height] = execFileSync('magick', ['identify', '-format', '%w %h', target], {
		encoding: 'utf8'
	})
		.split(' ')
		.map(Number);
	manifest[id] = { src: target.replace('static', ''), width, height };
}
writeFileSync('src/lib/full-media.json', JSON.stringify(manifest, null, 2) + '\n');
const videos = {
	process: 'demka.mp4',
	map1: 'map 1.webm',
	map2: 'map 2.mp4',
	almaty: 'map almaty.webm',
	advisor: 'ai sovetnik.webm'
};
for (const [id, file] of Object.entries(videos)) {
	execFileSync(
		'ffmpeg',
		[
			'-y',
			'-i',
			resolve(source, 'public/videos', file),
			'-vf',
			"scale='trunc(min(1280,iw)/2)*2':-2",
			'-c:v',
			'libx264',
			'-threads',
			'2',
			'-preset',
			'medium',
			'-crf',
			'26',
			'-pix_fmt',
			'yuv420p',
			'-c:a',
			'aac',
			'-b:a',
			'96k',
			'-movflags',
			'+faststart',
			`static/videos/${id}.mp4`
		],
		{ stdio: 'ignore' }
	);
}
writeFileSync(
	'docs/fullsite-media.json',
	JSON.stringify(
		{
			source: 'Original React repository, base 089d964',
			images,
			videos,
			simulatorPosters:
				'Rendered at 1170px from src/simulator/slides/*; scripts/capture-simulator-reference.mjs',
			notes:
				'No imagery generated. Original Russian labels retained and disclosed. Captions/transcripts require editorial approval before publication.'
		},
		null,
		2
	) + '\n'
);
