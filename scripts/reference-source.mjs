import { existsSync } from 'node:fs';
import { resolve, join } from 'node:path';

/** Historical asset tooling must never silently treat current Svelte main as React. */
export function requireReferenceDirectory(argument) {
	const input = process.env.REFERENCE_DIR || argument;
	if (!input)
		throw new Error(
			'Set REFERENCE_DIR to an extracted archive/react-reference snapshot. React is no longer the working application; see README.md.'
		);
	const directory = resolve(input);
	if (!existsSync(join(directory, 'imports/index.tsx')))
		throw new Error(
			`Not a React reference snapshot: ${directory}. Extract archive/react-reference and set REFERENCE_DIR explicitly.`
		);
	return directory;
}
