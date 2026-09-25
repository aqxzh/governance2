export const CONTACT_EMAIL = "akbota.akylbek07@gmail.com";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export type ApplicationPayload = {
  name?: string;
  contact?: string;
  phone?: string;
  message?: string;
};

export async function sendApplication(payload: ApplicationPayload): Promise<void> {
  const body = {
    _subject: "Новая заявка с сайта Governance.kz",
    _template: "table",
    _captcha: "false",
    Имя: payload.name ?? "—",
    Телефон: payload.phone ?? payload.contact ?? "—",
    "Вопрос / тема встречи": payload.message ?? "—",
  };

  const response = await fetch(FORMSUBMIT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`FormSubmit error: ${response.status}`);
  }
}
