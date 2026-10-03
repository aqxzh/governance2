# Governance.kz — локальная миграция на SvelteKit

**Локальный образец миграции, не готовая замена прод-сайта.** Реализованы шапка, hero, RU/KZ/EN, мобильное меню, контактные модалки и блок контуров: три вкладки, все 18 решений, иллюстрации и видео. Следом переносится команда. Полные страницы контуров, интерактивные демо и отправка формы ещё не перенесены.

## Запуск

Node **24.19.0**, pnpm **10.34.3**. Версии заданы в `.mise.toml`, `engines`, `packageManager`; зависимости — в `pnpm-lock.yaml`.

```sh
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1 --port 5174 --strictPort
```

- Новая версия: http://localhost:5174/ru/ (также `/kk/`, `/en/`).
- React-эталон в соседнем worktree: http://localhost:8443/.
- Прямые ссылки на React-эталон в обзоре контуров рассчитаны на локальный просмотр на этой машине, а не на публикацию.

## Проверки

```sh
pnpm exec playwright install chromium # один раз для окружения
pnpm verify
```

`verify`: svelte-check → Prettier/ESLint → Vitest → сборка + Playwright desktop/mobile → статический HTML/SEO. Браузерные тесты запускают свой production preview на порту 4173; порт должен быть свободен.

Дополнительно:

```sh
pnpm format
pnpm build
pnpm preview --host 127.0.0.1 --port 4173
node scripts/capture-preview.mjs # при запущенном dev, файлы в .artifacts/preview/
```

## Основа

- Svelte 5, SvelteKit 2, TypeScript strict, Vite 8.
- adapter-static: предрендеринг `/`, `/ru/`, `/kk/`, `/en/`, затем гидратация. Постоянный Node-процесс для публикации не нужен.
- shadcn-svelte + Bits UI, стиль **Vega**, готовые палитры **Zinc + Blue**. Семантические цвета и стандартная шкала радиусов задаются в `src/routes/layout.css`; локальные переопределения оформления примитивов убраны. Правила для следующих страниц — [система оформления](docs/design-system.md).
- Paraglide JS: `messages/{ru,kk,en}.json`, `project.inlang/paraglide.config.js`, URL-стратегия. KK/EN — черновые переводы, не утверждённый текст.
- Шрифты Fontsource размещаются в сборке локально. IBM Plex Sans/Mono имеют SIL Open Font License; лицензии входят в соответствующие пакеты в `node_modules`.
- Оптимизированные иллюстрации и видео — `static/images/`, `static/videos/`. Исходники сохранены в React-worktree и истории Git; происхождение и команды обработки — в `docs/migration-status.md` и `docs/contour-media.json`. Повторная подготовка медиа контуров: `node scripts/prepare-contour-media.mjs` (ImageMagick + FFmpeg; `REFERENCE_DIR` задаёт путь к React-источнику).

SvelteKit 2 выбран для совместимости с текущим Bits UI/runed; несовместимые peer-зависимости нового CLI-шаблона с Kit 3 не оставлены.

## Что пока намеренно отсутствует

- Полный лендинг, страницы контуров, интерактивный симулятор и FoodFlow.
- Реальная отправка заявок: Dialog показывает контакты и явно сообщает о локальном образце.
- PDF аналитической записки: без документа нет фиктивного скачивания.
- Service worker/PWA: старый sw.js не скопирован. Обновление старого кеша нужно спланировать перед публикацией.
- Деплой и замена nginx на Caddy. Ни сервер, ни работающий прод не менялись.

Подробности: [план](docs/migration-plan.md), [эталон](docs/migration-baseline.md), [статус](docs/migration-status.md).
