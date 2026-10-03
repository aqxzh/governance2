# Governance.kz — SvelteKit migration

## Scope and status

This worktree is `/home/marinadec/projects/website-svelte`, branch `migration/sveltekit`.
The original React reference remains in `/home/marinadec/projects/website` on port 8443.
The first checkpoint implements the header, hero, translated contact/PDF dialogs, language switching and a temporary contour overview. Full landing sections, contour pages, simulator modules and FoodFlow are NOT migrated yet.

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
- Never send real email/lead submissions in tests. Current Dialog is contact-only; delivery integration is deliberately not enabled.
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

Generated Paraglide output is ignored; `prepare` and `check` compile it. Do not edit generated messages/runtime. Screenshot evidence goes to ignored `.artifacts/preview/` via `node scripts/capture-preview.mjs` while dev is running.

Use the Svelte MCP autofixer for authored/modified Svelte components. Vision comparisons may use SuperPC/glm-5.3-flash; verify suggested behaviours with DOM, source and browser tests, not screenshots alone.
