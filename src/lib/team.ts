import { m } from '#lib/paraglide/messages.js';

export type TeamStage = {
	number: string;
	phase: () => string;
	role: () => string;
	description: () => string;
	method: () => string;
	artifact: () => string;
};

// Same four stages, owner and principles as the React TeamSection; no invented profiles.
export const teamStages: readonly TeamStage[] = [
	{
		number: '01',
		phase: m.team_stage_01_phase,
		role: m.team_stage_01_role,
		description: m.team_stage_01_description,
		method: m.team_stage_01_method,
		artifact: m.team_stage_01_artifact
	},
	{
		number: '02',
		phase: m.team_stage_02_phase,
		role: m.team_stage_02_role,
		description: m.team_stage_02_description,
		method: m.team_stage_02_method,
		artifact: m.team_stage_02_artifact
	},
	{
		number: '03',
		phase: m.team_stage_03_phase,
		role: m.team_stage_03_role,
		description: m.team_stage_03_description,
		method: m.team_stage_03_method,
		artifact: m.team_stage_03_artifact
	},
	{
		number: '04',
		phase: m.team_stage_04_phase,
		role: m.team_stage_04_role,
		description: m.team_stage_04_description,
		method: m.team_stage_04_method,
		artifact: m.team_stage_04_artifact
	}
];

export const teamOwner = {
	number: '05',
	role: m.team_owner_role,
	description: m.team_owner_description,
	artifact: m.team_owner_artifact
};

export const teamPrinciples = [m.team_seal_01, m.team_seal_02, m.team_seal_03] as const;
