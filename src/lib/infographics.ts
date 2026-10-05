export type Infographic =
	| { kind: 'system'; variant: 'before' | 'after' }
	| { kind: 'market'; variant: 'demand' | 'supply' | 'portfolio' | 'ecosystem' }
	| { kind: 'diagnostics'; variant: 1 | 2 | 3 | 4 | 5 | 6 | 7 }
	| { kind: 'coordination'; variant: number }
	| { kind: 'agent'; variant: 'advisor' | 'negotiation' }
	| {
			kind: 'panels';
			variant: 'strategy' | 'assessment' | 'assessmentDetail' | 'service' | 'exec' | 'advisor';
	  }
	| { kind: 'diagrams'; variant: string };
const market = ['demand', 'supply', 'portfolio', 'ecosystem'] as const;
const panels = [
	'strategy',
	'assessment',
	'assessmentDetail',
	'service',
	'exec',
	'advisor'
] as const;
const diagrams = [
	'scheme1',
	'scheme2',
	'process',
	'securityMap',
	'securitySymbol',
	'security1',
	'security2',
	'security3'
] as const;
/** Canonical renderer selection shared by inline, source, modal, poster and error-fallback views. */
export function infographicFor(src: string): Infographic | null {
	const path = src.replace(/^https?:\/\/[^/]+/, '').split(/[?#]/)[0];
	const module = path.match(/^\/images\/(?:simulator\/module-|contours\/simulator-)(\d+)\.webp$/);
	if (module) {
		const index = Number(module[1]);
		if (index >= 1 && index <= 4) return { kind: 'market', variant: market[index - 1] };
		if (index === 5) return { kind: 'agent', variant: 'advisor' };
		if (index === 6) return { kind: 'agent', variant: 'negotiation' };
	}
	const diagnostic = path.match(/^\/images\/contours\/diagnostics-(\d+)\.webp$/);
	if (diagnostic && Number(diagnostic[1]) >= 1 && Number(diagnostic[1]) <= 7)
		return { kind: 'diagnostics', variant: Number(diagnostic[1]) as 1 | 2 | 3 | 4 | 5 | 6 | 7 };
	const coordination = path.match(/^\/images\/contours\/coordination-(\d+)\.webp$/);
	if (coordination && Number(coordination[1]) >= 1 && Number(coordination[1]) <= 5)
		return { kind: 'coordination', variant: Number(coordination[1]) };
	if (/^\/images\/contours\/(simulator|diagnostics|coordination)-banner\.webp$/.test(path))
		return { kind: 'diagrams', variant: 'banner' };
	const landing = path.match(/^\/images\/landing\/(\w+)\.webp$/)?.[1];
	if (landing === 'before' || landing === 'after') return { kind: 'system', variant: landing };
	const panel = panels.find((x) => x === landing);
	if (panel) return { kind: 'panels', variant: panel };
	const diagram = diagrams.find((x) => x === landing);
	if (diagram) return { kind: 'diagrams', variant: diagram };
	return null;
}
