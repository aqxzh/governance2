import { CONTACT_EMAIL } from '#lib/site.js';
export const APPLICATION_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
export type Application = { name: string; phone: string; message?: string };
export function validApplication(application: Application, consent: boolean) {
	return (
		consent &&
		application.name.trim().length > 0 &&
		application.name.trim().length <= 128 &&
		/^\+?[\d\s().-]{7,32}$/.test(application.phone.trim()) &&
		application.phone.replace(/\D/g, '').length >= 7 &&
		(application.message?.length ?? 0) <= 4000
	);
}
// Only a service acknowledgement, never a claim that an email reached the recipient.
export async function sendApplication(application: Application, signal?: AbortSignal) {
	const response = await fetch(APPLICATION_ENDPOINT, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify({
			_subject: 'Новая заявка с сайта Governance.kz',
			_template: 'table',
			_captcha: 'false',
			Имя: application.name.trim(),
			Телефон: application.phone.trim(),
			'Вопрос / тема встречи': application.message?.trim() || '—'
		}),
		signal
	});
	if (!response.ok) throw new Error(`FormSubmit HTTP ${response.status}`);
	const result: unknown = await response.json();
	if (
		!result ||
		typeof result !== 'object' ||
		!('success' in result) ||
		(result.success !== true && result.success !== 'true')
	)
		throw new Error('FormSubmit did not acknowledge the application');
}
