# Governance.kz — SvelteKit migration

## Scope and status

This worktree is `/home/marinadec/projects/website-svelte`, branch `migration/sveltekit`.
The original React reference remains in `/home/marinadec/projects/website` on port 8443.
Implemented: the full landing in source order, all 18 solutions, standalone simulator/diagnostics/coordination/FoodFlow pages, six original simulator presentations with HTML alternatives and videos, interactive advisor/map, six FoodFlow tabs and consent-based FormSubmit integration. Locale routes and legacy hash/query entries are supported. This is a complete local frontend milestone, not publication or user acceptance; translations/media/delivery require external review.

Read `docs/migration-plan.md` and `docs/migration-status.md` before extending the implementation. `PRODUCT.md` is historical and contains stale claims; validate against the reference code.

## Stack and conventions

- Svelte 5 runes, SvelteKit 2, TypeScript strict, Vite 8, adapter-static with prerendering.
- Use shadcn-svelte components in `src/lib/components/ui/`. Do not reimplement Dialog, Sheet, focus management, inputs or buttons from scratch.
- Read `docs/design-system.md`: use standard shadcn Vega + Zinc neutrals + Blue accent. Theme lives in `src/routes/layout.css`; primary is Tailwind blue-700, not the legacy #2242D6. Components consume semantic tokens only. Keep standard shadcn radii, borders, shadows and variant styling; don't add local cosmetic overrides.
- Imports use the `#lib/*` package alias. Framework imports use `$app/*`.
- Use Paraglide JS for messages. Locale codes are ru, kk, en; the visible Kazakh switcher label is KZ. No hand-written translation runtime.
- Paraglide URL patterns must support ports, the root URL and nested pages. Preserve request isolation during prerendering.
- All published routes must have prerendered HTML with matching locale, metadata and content. The site is hosted at the domain root; `paths.relative: false` prevents temporary prerender origins leaking into links.
- Local fonts come from Fontsource (no Figma CDN).
- No fictitious PDFs, metrics, successful submissions or completed demoes. Mark drafts and unfinished sections honestly.
- Never send real email/lead submissions in tests or agent-driven browser checks: mock FormSubmit. Explicit consent is mandatory before external submission. Acknowledged API receipt is not verified email delivery; retain pending/error/timeout states and abort cleanup.
- Preserve honest demo semantics: source synthetic data, no live AI/database/camera, placeholder QR, and only the original spoilage calculation. Presentation images are not new functioning products.
- Keep `static/sw.js` as the old Governance cache/registration tombstone: no fetch handler, forced reload, unrelated-cache deletion or new registration.
- Do not change the VPS, nginx, SSL or the second site during local work.

## Commands

Node 24.19.0, pnpm 10.34.3 (`packageManager`, `.mise.toml`).

```sh
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1 --port 5174 --strictPort
pnpm format
pnpm verify
```

`pnpm verify` runs types, lint/format, unit tests, a production build + browser tests, and checks generated HTML. Playwright Chromium is installed separately using `pnpm exec playwright install chromium`.

Generated Paraglide output is ignored; `prepare` and `check` compile it. Do not edit generated messages/runtime. Screenshot evidence goes to ignored `.artifacts/preview/` via `node scripts/capture-preview.mjs` and `node scripts/capture-fullsite.mjs` while dev is running. Fullsite capture masks the offscreen fixed skip-link only in screenshots to avoid a CDP full-page-clip artefact; the live accessibility link stays intact. Media preparation/provenance is recorded in `docs/{contour-media,fullsite-media}.json`.

Use the Svelte MCP autofixer for authored/modified Svelte components. Inspect screenshots directly with the current vision-capable agent (per user instruction); use a separate vision model only if direct image access is unavailable. Verify behaviours with DOM, source and browser tests, not screenshots alone.
