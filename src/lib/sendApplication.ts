export const CONTACT_EMAIL = "altynbekus@gmail.com";

const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

export type ApplicationPayload = {
  subject: string;
  message: string;
  name?: string;
  contact?: string;
  organization?: string;
};

export async function sendApplication(payload: ApplicationPayload): Promise<void> {
  const body = {
    _subject: payload.subject,
    _template: "table",
    _captcha: "false",
    Сообщение: payload.message,
    ...(payload.name ? { Имя: payload.name } : {}),
    ...(payload.contact ? { Контакт: payload.contact } : {}),
    ...(payload.organization ? { Организация: payload.organization } : {}),
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
