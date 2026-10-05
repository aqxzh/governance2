import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { requireReferenceDirectory } from './reference-source.mjs';
import { dirname, resolve } from 'node:path';

// Optional asset preparation, not part of install/build. Requires ImageMagick + FFmpeg.
const reference = requireReferenceDirectory();

const manifestPath = 'docs/contour-media.json';
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
for (const item of manifest) {
	const input = resolve(reference, item.source);
	const output = `static${item.path}`;
	await mkdir(dirname(output), { recursive: true });
	if (item.kind === 'image') {
		execFileSync('magick', [input, '-resize', '1920x1920>', '-quality', '88', output]);
		const dimensions = execFileSync('magick', ['identify', '-format', '%w %h', output], {
			encoding: 'utf8'
		})
			.trim()
			.split(' ')
			.map(Number);
		[item.width, item.height] = dimensions;
	} else {
		let exists = false;
		try {
			await access(output);
			exists = true;
		} catch {
			/* first generation */
		}
		if (!exists || process.argv.includes('--force')) {
			execFileSync('ffmpeg', [
				'-hide_banner',
				'-loglevel',
				'error',
				'-y',
				'-i',
				input,
				'-vf',
				'scale=min(1280\\,iw):-2',
				'-c:v',
				'libx264',
				'-preset',
				'fast',
				'-crf',
				'24',
				'-pix_fmt',
				'yuv420p',
				'-c:a',
				'aac',
				'-b:a',
				'128k',
				'-movflags',
				'+faststart',
				output
			]);
		}
		const probe = JSON.parse(
			execFileSync(
				'ffprobe',
				[
					'-v',
					'error',
					'-show_entries',
					'stream=codec_type,codec_name,width,height',
					'-show_entries',
					'format=duration',
					'-of',
					'json',
					output
				],
				{ encoding: 'utf8' }
			)
		);
		const video = probe.streams.find((stream) => stream.codec_type === 'video');
		item.width = video.width;
		item.height = video.height;
		item.duration = Number(probe.format.duration);
		item.codecs = probe.streams.map((stream) => stream.codec_name);
	}
	console.log(`${item.source} → ${item.path} (${item.width}×${item.height})`);
}
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
