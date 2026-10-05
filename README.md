# Governance.kz

Сайт на SvelteKit: **понять проблему → проверить варианты → организовать исполнение**. Направления — диагностика, моделирование и координация. Сохранены 18 исходных сценариев, шесть презентаций, Advisor, FoodFlow и старые hash/query-входы.

Языки: RU / KK / EN; видимая метка казахского — **KZ**. Переводы требуют редакторского согласования. Техническая готовность не означает визуальную приёмку или публикацию.

## Запуск

Node **24.19.0**, pnpm **10.34.3** (см. `.mise.toml` и `package.json`).

```sh
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1 --port 5174 --strictPort
```

Откройте http://127.0.0.1:5174/ru/. Другие локали — `/kk/`, `/en/`; страницы — `/{locale}/{diagnostics,simulator,coordination,foodflow}/`.

```sh
pnpm exec playwright install chromium
pnpm verify
pnpm build
pnpm preview --host 127.0.0.1 --port 4173
```

`verify` проверяет типы, форматирование, ESLint, unit-тесты, production build, Playwright и статический HTML/SEO. Сеть формы в тестах замокана; реальные заявки не отправляются. Результат сборки — `build/`, постоянный Node-сервер для сайта не нужен.

## Структура

- `src/routes/` — страницы и глобальная тема.
- `src/lib/story.ts`, `story-legacy.ts` — смысловые группы и совместимость ссылок.
- `src/lib/components/site/` — прикладные страницы и демо.
- `src/lib/components/infographics/`, `src/lib/infographics.ts` — HTML/SVG-реконструкции и реестр исходных иллюстраций.
- `src/lib/components/ui/` — shadcn-svelte / Bits UI.
- `messages/{ru,kk,en}.json`, `project.inlang/` — Paraglide; генерируемые файлы не редактируются.
- `static/images/`, `static/videos/` — локальные медиа и растровые эталоны.
- `scripts/`, `tests/` — подготовка медиа, QA и регрессионные проверки.
- `.artifacts/preview/` — игнорируемые QA-артефакты, не runtime-зависимости.

Стек: Svelte 5, SvelteKit 2, strict TypeScript, Vite 8, adapter-static, Tailwind v4, LayerChart, Fontsource IBM Plex Sans/Mono. Дизайн — shadcn Vega / Zinc / Blue.

## Источники и медиа

React удалён из текущего дерева и сохранён в Git: `archive/react-reference`, коммит `37f31c2`. Для чтения исходников или подготовки медиа:

```sh
mkdir -p /tmp/governance-react-reference
git archive archive/react-reference | tar -x -C /tmp/governance-react-reference
REFERENCE_DIR=/tmp/governance-react-reference node scripts/prepare-infographic-photos.mjs
```

`prepare-contour-media.mjs` и `prepare-fullsite-media.mjs` также требуют явный `REFERENCE_DIR` и ImageMagick/FFmpeg. Install/build не зависят от React или соседнего worktree. Исторический browser capture требует отдельно согласованного запуска React и явного `REFERENCE_URL`.

## Документация

- [Статус и открытые вопросы](docs/migration-status.md)
- [Архитектура содержания](docs/storytelling-architecture.md)
- [Дизайн-система](docs/design-system.md)
- [Инфографики и ограничения источников](docs/infographic-reconstruction.md)
- [Происхождение портфельных кривых](docs/portfolio-trajectory.md)
- [Правила разработки](AGENTS.md)

Деплой и изменение VPS/nginx/SSL/второго сайта — отдельная согласованная задача. Push рабочей ветки не является публикацией сайта.
