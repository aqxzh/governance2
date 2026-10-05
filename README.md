# Governance.kz — SvelteKit

**SvelteKit — основная версия проекта в локальной `main`.** Канонический каталог: `/home/marinadec/projects/website`. React удалён из текущего дерева, но сохранён в Git. Перенос в main не является публикацией: удалённый репозиторий и production не обновлялись.

Главная выстроена по задачам: понять проблему → проверить варианты → организовать исполнение. Сохранены 18 исходных сценариев, шесть презентаций, Advisor, FoodFlow и старые hash/query входы. RU/KK/EN; видимая метка казахского языка — KZ.

## Запуск и проверка

Node **24.19.0**, pnpm **10.34.3**.

```sh
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1 --port 5174 --strictPort
```

Превью: http://localhost:5174/ru/ (также `/kk/`, `/en/`). Страницы направлений: `/{locale}/{simulator,diagnostics,coordination,foodflow}/`.

```sh
pnpm exec playwright install chromium
pnpm verify
pnpm build
pnpm preview --host 127.0.0.1 --port 4173
```

`verify`: типы → Prettier/ESLint → unit → production build и Playwright → статический HTML/SEO. Последний полный контроль инфографик: **43 unit, 161 browser passed, 1 намеренный skip**, svelte-check 0/0. После переноса проверка выполняется из основного каталога. Реальные формы в тестах не отправляются — только mock-сеть.

## Структура

- `src/routes/` — SvelteKit-страницы и глобальная тема.
- `src/lib/components/site/` — страницы/демо.
- `src/lib/components/infographics/` — локализуемые реконструкции; реестр `src/lib/infographics.ts`.
- `src/lib/components/ui/` — стандартные shadcn-svelte/Bits UI, Vega/Zinc/Blue.
- `messages/{ru,kk,en}.json` — Paraglide; нет собственного locale runtime. Переводы требуют редакторского согласования.
- `static/images/`, `static/videos/` — локальные медиа и исходные растровые эталоны.
- `.artifacts/preview/` — локальные QA-скриншоты, не runtime-зависимости.

Svelte 5, SvelteKit 2, strict TypeScript, Vite 8, adapter-static, Tailwind v4, LayerChart, локальные Fontsource IBM Plex Sans/Mono. Все страницы предрендерены; постоянный Node-сервер для публикации не требуется.

## Старый React и источники

React не хранится как второй действующий сайт и не запускается автоматически. Историческая ссылка: `archive/react-reference`, commit `37f31c2`. Если для сверки/перегенерации нужны оригинальные TSX/PNG:

```sh
mkdir -p /tmp/governance-react-reference
git archive archive/react-reference | tar -x -C /tmp/governance-react-reference
REFERENCE_DIR=/tmp/governance-react-reference node scripts/prepare-infographic-photos.mjs
```

`prepare-contour-media.mjs` и `prepare-fullsite-media.mjs` также требуют явный `REFERENCE_DIR` (ImageMagick/FFmpeg). Install/build не зависят от React, соседнего `website-svelte` или архива. Исторический browser capture требует отдельно разрешённого сервера и явного `REFERENCE_URL`; не запускайте React без согласования.

`/home/marinadec/projects/website-svelte` пока сохранён как вторичный migration worktree. Основные изменения и новые изолированные задачи следует вести от `main` в `website`.

## Незавершённое и публикация

- Семь fast-ревью выявили визуальные дефекты реконструкций. Их исправление продолжается; прохождение тестов не заменяет визуальную приёмку.
- Демо используют исходные синтетические данные: нет нового live AI/backend, БД, камеры или QR-сканера. Иллюстрации — HTML/SVG, не действующие интеграции; фотографии и видео остаются медиа.
- Содержание, KK/EN, маркетинговые обещания, неразборчивые части источников и субтитры требуют согласования.
- FormSubmit — только после явного согласия; API acknowledgement не подтверждает доставку. Тесты не посылают реальные заявки.
- Аналитический PDF не предоставлен; фиктивного скачивания нет.
- `static/sw.js` — tombstone старого Governance worker, без нового offline/PWA обещания.
- Push/deploy/VPS/nginx/SSL и второй сайт не изменялись; публикация требует отдельного разрешения.

[Статус](docs/migration-status.md) · [Инфографики](docs/infographic-reconstruction.md) · [Дизайн-система](docs/design-system.md) · [Исторический план](docs/migration-plan.md)
