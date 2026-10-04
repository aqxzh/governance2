import { m } from '#lib/paraglide/messages.js';
import media from '#lib/full-media.json';
export const processSteps = [
	{ number: '01', title: m.process_step_1_title, description: m.process_step_1_description },
	{ number: '02', title: m.process_step_2_title, description: m.process_step_2_description },
	{ number: '03', title: m.process_step_3_title, description: m.process_step_3_description },
	{ number: '04', title: m.process_step_4_title, description: m.process_step_4_description }
];
export const schemes = [
	{ image: media.scheme1, title: m.scheme_1_title, description: m.scheme_1_description },
	{ image: media.scheme2, title: m.scheme_2_title, description: m.scheme_2_description }
];
export const securityPrinciples = [
	{ title: m.security_human_title, description: m.security_human_description },
	{ title: m.security_closed_title, description: m.security_closed_description },
	{ title: m.security_data_title, description: m.security_data_description },
	{ title: m.security_interagency_title, description: m.security_interagency_description },
	{ title: m.security_audit_title, description: m.security_audit_description }
];
export const presentationTexts = [
	m.simulator_text_1,
	m.simulator_text_2,
	m.simulator_text_3,
	m.simulator_text_4,
	m.simulator_text_5,
	m.simulator_text_6
];
