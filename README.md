# Governance.kz — SvelteKit

**Локальная SvelteKit-версия; не опубликованная замена прод-сайта.** Главная выстроена по задачам: понять проблему → проверить варианты → организовать исполнение. Опросы собраны в моделировании, советник — в координации; FoodFlow разделён на три вкладки. Все 18 уникальных исходных сценариев, шесть презентаций и прежние входы сохранены. Пользовательская приёмка остаётся отдельно.

## Запуск

Node **24.19.0**, pnpm **10.34.3**; версии и зависимости закреплены.

```sh
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1 --port 5174 --strictPort
```

- Svelte: http://localhost:5174/ru/ (также `/kk/`, `/en/`).
- Страницы: `/ru/{simulator,diagnostics,coordination,foodflow}/`, аналогично KK/EN.
- React-эталон в соседнем worktree: http://localhost:8443/. Публичные ссылки новой версии на него не ведут.

## Проверки

```sh
pnpm exec playwright install chromium
pnpm verify
```

`verify`: svelte-check → Prettier/ESLint → Vitest → сборка + Playwright desktop/mobile → статический HTML/SEO. Playwright запускает production preview на порту 4173. Итог: **39 unit, 161 browser passed, 1 намеренный skip**, 0 ошибок/предупреждений svelte-check. Формы тестируются исключительно с mock-сетью, реальных заявок агент не отправлял.

```sh
pnpm format
pnpm build
pnpm preview --host 127.0.0.1 --port 4173
node scripts/capture-preview.mjs
node scripts/capture-fullsite.mjs
```

Скриншоты при работающем dev сохраняются в `.artifacts/preview/`, актуальная структура — `.artifacts/preview/story/` (скрипт `capture-story.mjs`; `capture-fullsite.mjs` — совместимый вход); просмотрены напрямую текущей vision-моделью. Это не заменяет пользовательскую приёмку или полную сертификацию WCAG.

## Основа и медиа

- Svelte 5, SvelteKit 2, TypeScript strict, Vite 8, adapter-static: все страницы предрендерены, затем гидратируются. Постоянный Node-сервер не нужен.
- shadcn-svelte/Bits UI, **Vega + Zinc + Blue**, Tailwind v4 и semantic tokens. [Правила оформления](docs/design-system.md).
- Paraglide JS, `messages/{ru,kk,en}.json`; locale `kk`, метка **KZ**. KK/EN остаются черновиками. Переключатель сохраняет путь/query/hash.
- Локальные Fontsource IBM Plex Sans/Mono, SIL Open Font License. Лицензии находятся в пакетах зависимостей.
- `static/images/`, `static/videos/`: оптимизированные производные исходных материалов. Происхождение: `docs/{contour-media,fullsite-media}.json`.
- Повторная генерация: `node scripts/prepare-contour-media.mjs`, `node scripts/prepare-fullsite-media.mjs` (ImageMagick/FFmpeg, `REFERENCE_DIR` для React-источника); `node scripts/capture-simulator-reference.mjs` требует работающий React-эталон и ImageMagick.

Kit 2 выбран из-за совместимости Bits UI/runed, без конфликтующих peer-зависимостей Kit 3.

## Ограничения и публикация

- Демо используют исходные синтетические данные: нет работающей AI/БД, камеры/QR-сканера или новой расчётной системы. Сложные презентации сохранены как изображения с локализованными HTML-текстами и рабочими исходными видеосценариями.
- Форма вызывает исходный FormSubmit только после явного согласия. Подтверждение API не означает доставку письма; активация/получатель/обработка данных требуют внешней проверки.
- PDF не предоставлен, фиктивного скачивания нет. Русские подписи в исходных медиа требуют редакторской проверки и субтитров.
- `static/sw.js` — переходный tombstone для старого Governance-кеша: новый worker не регистрируется, принудительной перезагрузки нет. Работа offline/PWA не заявляется.
- GitHub Write-доступ отсутствует. Push, PR, merge, деплой и изменения VPS/nginx/SSL не выполнялись. Публикация — отдельный этап после приёмки, с бэкапом и откатом.

[Статус](docs/migration-status.md) · [План](docs/migration-plan.md) · [Эталон](docs/migration-baseline.md)
