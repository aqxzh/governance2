# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** Decision-makers (ЛПР) in Kazakhstan’s public sector — ministers, agency heads, and senior officials evaluating AI-driven digital transformation.

**Situation:** They need to understand whether Governance.kz can deliver a credible pilot on their data, without wading through generic AI marketing.

**Job:** Grasp the model (three contours, product registry), assess institutional trust, and take action — request a meeting for a pilot demo or download the analytical note.

## Product Purpose

Governance.kz is the public landing surface for the **Laboratory of Artificial Intelligence · Government Service of the Republic of Kazakhstan**. It explains the applied center for digital transformation of governance and converts qualified government interest into meetings and document downloads.

**Success means:** a ЛПР visitor understands the offering, trusts the institutional positioning, and completes a primary CTA (meeting request or analytical note download).

## Positioning

Governance.kz analyzes government functions, staff, services, and workload in a **unified data logic** — surfacing duplications, collisions, hidden barriers, and anomalies — while **decisions remain with authorized people** (human-in-the-loop). Neighboring vendors can sell AI tools; this product’s mechanism is end-to-end governance transformation across apparatus transparency, HR, and executive intelligence inside Kazakhstan’s sovereign context.

## Operating Context

- Public-sector Kazakhstan; copy and UX assume institutional readers, not consumer audiences.
- **Trilingual surface:** RU / KZ / EN — language switching must become functional (currently label-only in the header).
- **Lead capture:** inline on-site contact form for “Записаться на встречу”; analytical note as a downloadable PDF from `/public/`.
- **Product proof:** demo videos expected in `public/videos/` (Smart HR, online assessment, executive assistant, digital sovereignty).
- **Hero metrics:** placeholder statistics in the live page (`// плейсхолдеры — подставить фактические показатели`) — real numbers pending.
- Site sections map to navigation anchors: Контуры, Продукты, Видение, Принципы.

## Capabilities and Constraints

**Confirmed capabilities (from current page):**

- Hero narrative: “Государство и бизнес, которые видят свои процессы целиком”
- Three contours: (K1) Прозрачность аппарата, (K2) Кадровая трансформация, (K3) Управленческий интеллект
- Product registry: Smart HR, Онлайн-ассессмент, Помощник руководителя, Цифровой суверенитет — rows open product demo videos
- Vision blocks: “Укрощение хаоса” philosophy, Kazakhstan strategic foundation, AI assessment, ExecAssist, ServiceFlow
- Principles: Human-in-the-loop, closed pilot loop, data protection under RK law, inter-agency data, transparency and audit
- Footer CTA: “Готовы показать модель на ваших данных”

**Confirmed constraints:**

- Do not fabricate statistics, testimonials, case studies, or pilot counts until supplied.
- Product demo videos are required assets — paths defined in code under `public/videos/`.
- WCAG 2.1 AA is the accessibility target.
- Multilingual support is a product requirement, not a cosmetic toggle.

**Open decisions:**

- Final hero statistics (profiles · Smart HR, services checked, pilot agencies, efficiency %).
- Contact form submission handling (backend, email service, or CRM endpoint).
- Analytical note PDF file and filename in `/public/`.

## Brand Commitments

- **Name:** GOVERNANCE.KZ / Governance.kz
- **Affiliation:** ЛАБОРАТОРИЯ ИСКУССТВЕННОГО ИНТЕЛЛЕКТА · ГОСУДАРСТВЕННАЯ СЛУЖБА РК
- **Primary language:** Russian; Kazakh and English are required locales.
- **Voice:** Institutional, precise, confident — technical credibility without hype. AI assists; people decide.
- **Binding product phrases:** “прикладной центр цифровой трансформации управления”; “решения остаются за людьми”; “Укрощение хаоса” (infographics as functional tools, not decoration).

## Evidence on Hand

| Asset | Location / status |
|---|---|
| Figma-export landing implementation | `imports/index.tsx` (primary UI source) |
| Product copy (Russian) | Embedded throughout `imports/index.tsx` |
| Infographic & section images | `imports/*.png` |
| Demo video slots | `public/videos/` — README lists expected `.mov` files; files not verified in repo |
| Hero statistics | Placeholders only — must not publish as factual until replaced |
| Analytical note PDF | Not present — must not invent content |
| Testimonials / press / case studies | None in repo — must not fabricate |

## Product Principles

1. **Human-in-the-loop** — AI surfaces signal; authorized officials retain responsibility for decisions.
2. **Sovereign closed loop** — pilot and production data stay within Kazakhstan’s protected infrastructure.
3. **Clarity over chaos** — complex inter-agency processes must become legible structure, not decorative infographics.
4. **Proactive service** — shift from hidden offline barriers to proactive public-service formats.
5. **Verifiable trust** — transparency, auditability, and RK legal compliance are non-negotiable proof points.

## Accessibility & Inclusion

Target **WCAG 2.1 AA** for this public-sector surface. Functional **RU / KZ / EN** language access is a product requirement alongside semantic structure, keyboard operability, and sufficient contrast.
