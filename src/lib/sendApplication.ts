export const CONTACT_EMAIL = "ssarimov@gmail.com"

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax"

export type ApplicationPayload = {
  name?: string
  contact?: string
  phone?: string
  message?: string
}

export async function sendApplication(
  payload: ApplicationPayload,
  recipient = CONTACT_EMAIL,
): Promise<void> {
  const body = {
    _subject: "Новая заявка с сайта Governance.kz",
    _template: "table",
    _captcha: "false",
    Имя: payload.name ?? "—",
    Телефон: payload.phone ?? payload.contact ?? "—",
    "Вопрос / тема встречи": payload.message ?? "—",
  }

  const response = await fetch(`${FORMSUBMIT_ENDPOINT}/${recipient}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error(`FormSubmit error: ${response.status}`)
  }

  const result = await response.json().catch(() => null)
  if (result?.success === false || result?.success === "false") {
    throw new Error("FormSubmit did not accept the application")
  }
}
