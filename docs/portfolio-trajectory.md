# Portfolio trajectory — source fidelity

New standalone component: `src/lib/components/infographics/PortfolioTrajectory.svelte`.
No integration or changes to MarketInfographic/messages are included.

## Provenance

Read-only original files in `/home/marinadec/projects/website/src/simulator/slides/module-3/`:

- `index.tsx`, `Component` variant `2`, lines 12–116: five trajectory SVGs, their nested viewBoxes, percentage placement, and stroke widths. Grid lines are at y=16, 52, 88, 124, 158 in the original 1040×178 design box; horizontal plot extent is approximately x=112–960.
- `svg-gjub12lwvb.ts`: the following `d` strings are copied **verbatim**, with no inferred numeric samples:

| Category     | Source path | Source viewBox        |
| ------------ | ----------- | --------------------- |
| Ready-To-Eat | `pa9e1bc0`  | `0 0 848.059 95.4988` |
| Sandwiches   | `p4b14440`  | `0 0 848.048 71.2008` |
| Nuggets      | `p313b9f00` | `0 0 848.043 59.2011` |
| Salads       | `p25f30400` | `0 0 848.041 43.0992` |
| Frozen meals | `p8027280`  | `0 0 848.059 43.0979` |

- `index.tsx`, `Container95`–`Container99`: original category/color mapping.
- `Container102`–`Container107`: years 2025, 2026, 2027, 2028, 2029, 2030.
- `Paragraph15`: axis numbers 400, 300, 200, 100, 0. No unit is reported; none is invented.
- `BackgroundBorderShadow1`: the only explicit category figures here are the 2027 tooltip values 320 / 240 / 180 (Ready-To-Eat / sandwiches / nuggets).
- Directly inspected `static/images/simulator/module-3.webp`: confirms five curves and the separate tooltip in the portfolio panel. The tooltip obscures some curve geometry in the raster; SVG source, not pixel tracing, is authoritative.

## Geometry versus data

These are **exact copied SVG curve path literals**, not a recovered annual dataset, measured forecasts, or live calculations. Bézier control coordinates are presentation geometry, not reported demand values. No sampling, interpolation library, generated annual values, or inferred salads/frozen numbers are introduced.

Nested SVG viewBoxes and percentage-derived placement preserve the source curves' relative positioning, including stroke-padding expansion. Source grid positions are retained. Source percentages are rounded in the React export, so the slight subpixel differences from integer grid endpoints are retained rather than “corrected”. The original first three decorative open-path fills, dashed tooltip guide, tooltip dots and overlay are intentionally omitted. Colors change to contrast-safe semantic `var(--primary)` with distinct dash patterns; this is not pixel-identical styling. The responsive SVG crops the unused left/right plot margins and keeps a 144px plot height so the HTML scale remains readable on mobile.

Axes and translated legend use HTML at readable text sizes, outside the SVG: year labels retain source order and the source's full-width distribution, rather than implying sampled points on the curves. Y labels align with source grid rows; this intentionally avoids reproducing the exported Paragraph15 typography's uneven spacing. The plot uses a responsive 1040×178 viewBox, no minimum-width overflow, raster, canvas, foreignObject, IDs, package additions, or React runtime imports.

## Integration contract

Required string props: `title` and `caption`. The parent supplies localized existing messages, e.g. `m.inf_market_portfolio_forecast_title()` and `m.inf_market_portfolio_forecast_caption()`. Caption wording must explicitly say these are copied illustrative source trajectories, not reported annual values; if the existing message does not say this, integration must resolve that wording separately. SVG has an accessible title/description and label; the visible HTML figure caption remains available to assistive technology. Category legend uses the five existing `m.inf_market_portfolio_cat_*` messages and remains reactive to locale rendering.

Keep MarketInfographic's **separate 2027 numeric chart/table** unchanged when adding this illustration. Do not replace it with a table derived from SVG coordinates, or label the curves as a new functioning simulator.

## Scoped validation

Svelte 5 MCP autofixer: no issues or suggestions. Scoped Prettier and ESLint checks and direct Svelte compiler validation are used; full-site integration/browser acceptance is outside this bounded task.
