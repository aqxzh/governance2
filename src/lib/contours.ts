import { m } from '#lib/paraglide/messages.js';

export type ContourId = 'simulator' | 'diagnostics' | 'coordination';
export type ContourImage = { src: string; width: number; height: number };
export type Solution = {
	id: string;
	number: string;
	title: () => string;
	description: () => string;
	feature: () => string;
	image: ContourImage;
};
export type Contour = {
	id: ContourId;
	number: string;
	title: () => string;
	description: () => string;
	image: ContourImage;
	video?: string;
	rows: readonly Solution[];
};

// Preserve the original register order and content; messages resolve the current locale.
export const contours: readonly Contour[] = [
	{
		id: 'simulator',
		number: '01',
		title: m.nav_simulator,
		description: m.simulator_description,
		image: { src: '/images/contours/simulator-banner.webp', width: 1672, height: 941 },
		rows: [
			{
				id: 'simulator-01',
				number: '01',
				title: m.solution_simulator_01_title,
				description: m.solution_simulator_01_description,
				feature: m.solution_simulator_01_feature,
				image: { src: '/images/contours/simulator-01.webp', width: 1920, height: 1184 }
			},
			{
				id: 'simulator-02',
				number: '02',
				title: m.solution_simulator_02_title,
				description: m.solution_simulator_02_description,
				feature: m.solution_simulator_02_feature,
				image: { src: '/images/contours/simulator-02.webp', width: 1920, height: 1482 }
			},
			{
				id: 'simulator-03',
				number: '03',
				title: m.solution_simulator_03_title,
				description: m.solution_simulator_03_description,
				feature: m.solution_simulator_03_feature,
				image: { src: '/images/contours/simulator-03.webp', width: 1920, height: 1501 }
			},
			{
				id: 'simulator-04',
				number: '04',
				title: m.solution_simulator_04_title,
				description: m.solution_simulator_04_description,
				feature: m.solution_simulator_04_feature,
				image: { src: '/images/contours/simulator-04.webp', width: 1920, height: 1542 }
			},
			{
				id: 'simulator-05',
				number: '05',
				title: m.solution_simulator_05_title,
				description: m.solution_simulator_05_description,
				feature: m.solution_simulator_05_feature,
				image: { src: '/images/contours/simulator-05.webp', width: 1540, height: 1243 }
			},
			{
				id: 'simulator-06',
				number: '06',
				title: m.solution_simulator_06_title,
				description: m.solution_simulator_06_description,
				feature: m.solution_simulator_06_feature,
				image: { src: '/images/contours/simulator-06.webp', width: 1920, height: 1567 }
			}
		]
	},
	{
		id: 'diagnostics',
		number: '02',
		title: m.nav_diagnostics,
		description: m.diagnostics_description,
		image: { src: '/images/contours/diagnostics-banner.webp', width: 1376, height: 768 },
		video: '/videos/diagnostics.mp4',
		rows: [
			{
				id: 'diagnostics-01',
				number: '01',
				title: m.solution_diagnostics_01_title,
				description: m.solution_diagnostics_01_description,
				feature: m.solution_diagnostics_01_feature,
				image: { src: '/images/contours/diagnostics-01.webp', width: 1920, height: 937 }
			},
			{
				id: 'diagnostics-02',
				number: '02',
				title: m.solution_diagnostics_02_title,
				description: m.solution_diagnostics_02_description,
				feature: m.solution_diagnostics_02_feature,
				image: { src: '/images/contours/diagnostics-02.webp', width: 1920, height: 904 }
			},
			{
				id: 'diagnostics-03',
				number: '03',
				title: m.solution_diagnostics_03_title,
				description: m.solution_diagnostics_03_description,
				feature: m.solution_diagnostics_03_feature,
				image: { src: '/images/contours/diagnostics-03.webp', width: 1920, height: 892 }
			},
			{
				id: 'diagnostics-04',
				number: '04',
				title: m.solution_diagnostics_04_title,
				description: m.solution_diagnostics_04_description,
				feature: m.solution_diagnostics_04_feature,
				image: { src: '/images/contours/diagnostics-04.webp', width: 1920, height: 913 }
			},
			{
				id: 'diagnostics-05',
				number: '05',
				title: m.solution_diagnostics_05_title,
				description: m.solution_diagnostics_05_description,
				feature: m.solution_diagnostics_05_feature,
				image: { src: '/images/contours/diagnostics-05.webp', width: 1920, height: 931 }
			},
			{
				id: 'diagnostics-06',
				number: '06',
				title: m.solution_diagnostics_06_title,
				description: m.solution_diagnostics_06_description,
				feature: m.solution_diagnostics_06_feature,
				image: { src: '/images/contours/diagnostics-06.webp', width: 1920, height: 905 }
			},
			{
				id: 'diagnostics-07',
				number: '07',
				title: m.solution_diagnostics_07_title,
				description: m.solution_diagnostics_07_description,
				feature: m.solution_diagnostics_07_feature,
				image: { src: '/images/contours/diagnostics-07.webp', width: 1920, height: 937 }
			}
		]
	},
	{
		id: 'coordination',
		number: '03',
		title: m.nav_coordination,
		description: m.coordination_description,
		image: { src: '/images/contours/coordination-banner.webp', width: 1536, height: 1024 },
		video: '/videos/coordination.mp4',
		rows: [
			{
				id: 'coordination-01',
				number: '01',
				title: m.solution_coordination_01_title,
				description: m.solution_coordination_01_description,
				feature: m.solution_coordination_01_feature,
				image: { src: '/images/contours/coordination-01.webp', width: 1920, height: 871 }
			},
			{
				id: 'coordination-02',
				number: '02',
				title: m.solution_coordination_02_title,
				description: m.solution_coordination_02_description,
				feature: m.solution_coordination_02_feature,
				image: { src: '/images/contours/coordination-02.webp', width: 1920, height: 876 }
			},
			{
				id: 'coordination-03',
				number: '03',
				title: m.solution_coordination_03_title,
				description: m.solution_coordination_03_description,
				feature: m.solution_coordination_03_feature,
				image: { src: '/images/contours/coordination-03.webp', width: 1920, height: 876 }
			},
			{
				id: 'coordination-04',
				number: '04',
				title: m.solution_coordination_04_title,
				description: m.solution_coordination_04_description,
				feature: m.solution_coordination_04_feature,
				image: { src: '/images/contours/coordination-04.webp', width: 1920, height: 904 }
			},
			{
				id: 'coordination-05',
				number: '05',
				title: m.solution_coordination_05_title,
				description: m.solution_coordination_05_description,
				feature: m.solution_coordination_05_feature,
				image: { src: '/images/contours/coordination-05.webp', width: 1920, height: 892 }
			}
		]
	}
];
