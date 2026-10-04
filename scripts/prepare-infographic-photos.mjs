import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const reference = process.env.REFERENCE_DIR ?? '../website';
const files = [
	['portfolio-1', 3, 'c09013a65bc761c52c69fa16f2f39ecb59763909.png'],
	['portfolio-2', 3, 'ca6b577cf5a8d129823f6dece1f1cba891b7613e.png'],
	['portfolio-3', 3, 'c45279bc31bae34f515ef0daec71b0eedc0083e8.png'],
	['ecosystem-1', 4, 'ccca115612b0c45b97732060b3f06c9ee8190b1e.png'],
	['ecosystem-2', 4, '8f4a3d577e7d4e99bb812a0f46e3dc50eee9ec5f.png'],
	['ecosystem-3', 4, '1a99fd37c26e04fcec167e8d9ac34f3bd50db16f.png']
];
await mkdir('static/images/infographics', { recursive: true });
const manifest = [];
for (const [name, module, file] of files) {
	const relative = `src/simulator/slides/module-${module}/${file}`;
	const source = resolve(reference, relative),
		target = `static/images/infographics/${name}.webp`;
	execFileSync('convert', [
		source,
		'-auto-orient',
		'-resize',
		'640x640>',
		'-strip',
		'-quality',
		'85',
		target
	]);
	const hash = async (path) =>
		createHash('sha256')
			.update(await readFile(path))
			.digest('hex');
	manifest.push({
		source: relative,
		target,
		sourceSHA256: await hash(source),
		targetSHA256: await hash(target),
		purpose:
			'Original text-free source photo; not a dashboard screenshot or verified image of the named project.'
	});
}
await writeFile('docs/infographic-photos.json', JSON.stringify(manifest, null, 2) + '\n');
console.log('Prepared six original text-free photos with provenance.');
