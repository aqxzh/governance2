---
target: imports/index.tsx
total_score: 24
max_score: 40
na_heuristics: 
p0_count: 3
p1_count: 2
target_identity: "file:/Users/akbota/Desktop/governance2/imports/index.tsx"
target_fingerprint: "sha256:d267850703d890be2ab375f1e95d37d3166b5b271f077fb0c4f24f6ad3460cd4"
target_path: /Users/akbota/Desktop/governance2/imports/index.tsx
timestamp: 2026-09-28T11-37-50Z
slug: imports-index-tsx
---
# Critique: imports/index.tsx (Governance.kz landing)

Method: dual-agent (A: ses_f1833a23effe2hbZ4ZJpQaVmDc · B: ses_f1833859affeokMrTYPbfKLdvg)

## Verdict on user question (is the site one whole?)
Partially. Macro-level yes: dark-hero/light-content/dark-footer rhythm, mono eyebrows 01/..., hairline-border motif, 1170px container discipline, single accent #2242d6. Micro-level no: 3 heading scales at same level (h2 30px vs h3 34/42px at 3228 vs h2 36/42px at 3015), 3 divergent implementations of the same registry table (SolutionsRegistry 296-366 w/ keyboard support; manual div-registry 1613-1895 14px no keyboard; TabPage copy 3073-3134), foreign InfoModal (995-1011 slate palette, default font) for primary CTA, radius chaos 4-24px, 11 gray-blue border tones, dead duplicate code (Container5-8 = nav from PRODUCT.md, dead 736-774), double navigation (header tabs leave site via replaceState vs integrated ContoursSection tabs), no h1, retail-themed simulator content breaking institutional audience.

## Heuristic Scores
| # | Heuristic | Score |
|---|-----------|-------|
| 1 | Visibility of status | 3 |
| 2 | Match real world | 3 |
| 3 | User control/freedom | 2 |
| 4 | Consistency | 2 |
| 5 | Error prevention | 2 |
| 6 | Recognition over recall | 3 |
| 7 | Flexibility/efficiency | 1 |
| 8 | Aesthetic/minimalist | 2 |
| 9 | Error recovery | 3 |
| 10 | Help/docs | 3 |
Total: 24/40 (Acceptable)

## Cognitive Load
Failed 4/8: chunking (5 principles row, 7-row diagnostics registry), visual hierarchy (h3 42px > h2 30px inversion, no h1), one-thing-at-a-time (vision collages 05-09 overloaded), working memory (metrics after contours, products duplicated without cross-links).

## Detector (Assessment B)
impeccable detect --json imports/index.tsx + src/App.tsx: exit 0, zero findings both, control pass --no-config also clean. Browser visualization skipped: no browser automation tool exposed.

## Priority Issues
1. [P0] Published placeholders: "0 000 profiles" + "// плейсхолдеры" comment (1160), phone "+7 (701) 000-00-00" (862). Fix: remove Border2 block until real numbers, remove phone or replace.
2. [P0] Vision sections 05-09 break below ~1160px: fixed w-[1064px] (2453), ml-[610.57px] (1978), px-[44px] gutters (2328) + overflow-x hidden silently clipping. Fix: rebuild on flex/grid relative positioning.
3. [P0] Broken browser Back: history.replaceState (3399) leaves site instead of returning to landing. Fix: pushState + popstate handler.
4. [P1] CTA "Аналитическая записка" promises download (844) but opens InfoModal about nonexistent PDF (1250-1262) styled in foreign slate design (995-1011). Fix: wire real PDF or rename CTA; bring modal into HEX/IBM Plex system.
5. [P1] Product registry rows keyboard-inaccessible: div onClick without role/tabIndex/keydown (1677, 1741, 1805, 1870) while SolutionsRegistry does it right (320-323). Fix: unify all three copies on SolutionsRegistry component (also fixes 14px vs 16px divergence).

## Persona Red Flags
- Jordan (first-timer advisor): sees dev placeholder comment (1160), header chips navigate away, browser Back exits site entirely - double credibility loss in first minute.
- Riley (stress tester): identical tables behave differently on keyboard; focus not trapped in modals; phone accepts "+7" unvalidated; KZ switch only changes button color (2965).
- Casey (mobile 390px): hero/demka/team adapt fine; "Было/Стало" off-screen at ml-[610.57px] (1978); ExecAssist dashboard clipped (2453); stats row fixed height 103px squeezed (1146).

## Minor Observations
- Two descriptions of Smart HR: table (1653) vs modal (57).
- "09 / SERVICEFLOW" duplicated: dead Container51 (2506) vs live inline (2577).
- Contrast #9aa0ae counters (603) and #8990a0 footer (2908) ~3:1 fails AA.
- fontVariationSettings inline duplicated ~60 times - CSS class candidate.
- Metrics placed after contours (3444), not under hero - narrative break.
- Hero bg #f4f5f8 vs systemic #f6f7fb near-indistinguishable pair.
- Registries require min-w-[760px] horizontal scroll on mobile without affordance (299).
- Typo #9aa0ad (901) vs #9aa0ae elsewhere.

## Strengths
- Unique bureaucratic-technical visual language: mono eyebrows, hairline frames, data registries - deliberate alternative to gradient AI cliches.
- Disciplined registry interaction pattern: blue 3px edge + arrow hover + modal open, identical across all three incarnations.
- A11y culture above typical Figma export: prefers-reduced-motion (263, 1351, 1381), Escape+scroll-lock, aria-pressed, focus-visible rings.

## Questions to Consider
- If a minister sees placeholder stats and phone 000-00-00, what do they conclude about care for their data before reaching "Data Protection"?
- Why does the header navigate away from the landing instead of guiding through it?
- If half the page physically breaks below ~1160px, who is this site really made for?
