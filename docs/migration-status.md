# Полный локальный результат миграции

## Актуальная локальная архитектура

После технического переноса реализована пробная перегруппировка по `storytelling-architecture.md`: главная «проблема → подход → пример → роли → доверие → контакт», направления диагностика → моделирование → координация. Все 18 уникальных исходных сценариев распределены по одному каноническому месту; исходные материалы раскрываются отдельно. Советник только в координации. FoodFlow: партии/маршрут, планирование, проверка/история; сохранены все шесть исходных секций и действия. Старые hash/query входы поддержаны. Реализация локальная, пользовательская приёмка и публикация не выполнены.

Текущая проверка: **43 unit, 161 browser passed + 1 намеренный skip; svelte-check 0 ошибок/0 предупреждений**, lint/build/static — успешно. Все 43 исходных infographic-пути заменены общими HTML/SVG/chart renderer-ами, включая архивы, Dialog, постеры и вложенные screenshots. `docs/infographic-reconstruction.md` фиксирует покрытие и честные ограничения источников. Актуальные infographic captures RU/KK/EN × 390/768/1440: `.artifacts/preview/infographics/` (531 PNG и manifest), без browser/hydration errors, duplicate IDs, raster dashboards и page overflow; проверены прокрутка Dialog и no-JS таблицы. Финальное read-only Sol low ревью технических блокеров не обнаружило; приёмку/переводы/публикацию это не заменяет. Приведённый ниже исходный порядок/6 вкладок описывает исторический этап переноса, а не текущую навигацию.

## Границы результата

Worktree `../website-svelte`, ветка `migration/sveltekit`. Перенесён весь согласованный публичный фронтенд. React-эталон в `../website`, main и работающий прод не заменены. **Техническая готовность локального фронтенда не означает пользовательскую приёмку или разрешение на публикацию.**

## Перенесённый объём

- Главная в исходном порядке: шапка/hero → реестр контуров → команда → процесс → инфографика/схемы → стратегия → assessment → ExecAssist → ServiceFlow → безопасность → контакты/футер.
- Реестр: 6/7/5 решений, все 18 иллюстраций, desktop Table и mobile Card, локальные видео и обработка ошибки загрузки.
- Самостоятельные `/simulator/`, `/diagnostics/`, `/coordination/`, `/foodflow/` и все RU/KK/EN варианты. Header ведёт на эти страницы; публичных ссылок на localhost React нет.
- Шесть исходных презентаций симулятора восстановлены как локализуемые HTML/SVG/chart компоненты; WebP остаются только исходными эталонами. Исходные видеосценарии модулей 1/2/5/6 и ссылка FoodFlow работают. Это не шесть новых независимых продуктов и не работающие элементы интерфейса внутри изображений.
- Advisor: исходные меню/дайджесты, 17 регионов и города, подписи, keyboard/hover selection, альтернативный native select, режимы чата и refresh. Сообщения экранируются Svelte; ответ явно демонстрационный, не live AI.
- FoodFlow: восемь исходных партий, фильтры/выбор партии, FEFO, markdown, движение, настройки периода/горизонта, source spoilage calculation, граф/память, approvals, происхождение/QR-placeholder, журнал/отчёт. Все шесть вкладок перенесены. Исходные статические значения и единицы не выдаются за live-метрики; сумма смешанных единиц отдельно поясняется. Никакой БД, камеры/сканера или новой расчётной системы нет.
- FormSubmit по исходному endpoint/получателю: обязательное явное согласие, labels/валидация, защита от дубля, pending/acknowledged/error/timeout, 15-секундный abort и cleanup. Payload сохранён: `_subject`, `_template`, `_captcha`, `Имя`, `Телефон`, `Вопрос / тема встречи`. API acknowledgement требует `success === true` или `'true'` и не утверждает доставку письма. Все сетевые проверки замоканы; реальных заявок агент не отправлял.
- Старые корневые hash/query входы, включая `#recruitment`, `#analytics`, `?food=1`, переводятся на локальные страницы с сохранением локали/посторонних query. Якоря реестра отделены: `#contours-*`.
- `static/sw.js` — tombstone: удаляет только старые Governance-кеши и своё registration; нет fetch handler, принудительного reload или регистрации у новых посетителей. Существующий root worker обновляется только при script URL `/sw.js`. Это локальная подготовка перехода, не опубликованное обновление PWA.
- `src/mobile/MobileApp.tsx` не импортирован публичным React-приложением; отдельной обязательной страницей не считается.

## Стек и технические решения

- Svelte 5 + SvelteKit 2.70.3 + adapter-static 3.0.10, TypeScript strict, Vite 8, pnpm. Kit 2 совместим с Bits UI/runed; конфликтующие peer-зависимости Kit 3 не оставлены.
- shadcn-svelte/Bits UI: штатные Button, Sheet, Dialog, Card, DropdownMenu, Tabs, Table, Badge, Input, Label, Textarea, Separator, Collapsible, Checkbox, Slider, NativeSelect, Alert.
- Tailwind v4, Vega + Zinc + Blue, semantic tokens и стандартные радиусы/тени. Primary — blue-700; destructive — red-700 для AA контраста небольшого Vega Badge. [Design system](design-system.md).
- Локальные IBM Plex Sans/Mono Fontsource с казахскими символами; no Figma CDN.
- Paraglide URL locale `ru/kk/en`, видимая метка KZ; глобус DropdownMenu сохраняет path/query/hash, fallback links доступны без JS. KK/EN — черновики.
- Все публичные страницы предрендерены; неактивный контент присутствует в HTML, No-JS показываются реестры/вкладки. SSR не отключён. Метаданные/canonical/hreflang/robots/sitemap охватывают весь объём.
- Paraglide patterns учитывают порты/root/nested paths; request isolation и `paths.relative: false` предотвращают утечку временного prerender-origin. Query/hash читаются только в браузере.
- Sheet/Dialog closeLabel локализован, управление фокусом остаётся Bits UI. Селекторы Tabs/Checkbox/Slider соответствуют реальным data-state/data-orientation установленного Bits UI.
- Узкие navigation ESLint suppressions нужны для Paraglide-wrapped resolve/goto виртуальных locale-путей; универсальный Button получает разрешённый href от caller. MCP может не воспроизводить проектное navigation правило; реальный ESLint проходит.
- Табличные scroll regions с labels доступны клавиатурой, включая Safari; обоснованный compiler ignore только для tabindex. `bind:this` сохранён как стандартный shadcn ref API.
- Телефон нормализован из отображаемого исходного `+7 (776) 173-82-91` в `+77761738291`; ошибочный исходный React href не скопирован.
- Hero запускается muted после гидратации; prefers-reduced-motion оставляет декоративный SVG без текста. Ручные pause/play работают. Остальные видео загружаются при открытии Dialog и удаляются при закрытии.

## Медиа и визуальная проверка

Исходные PNG/MOV/MP4 остаются в React-worktree/истории. Производные: `static/images/{landing,simulator}/`, изображения контуров/hero и `static/videos/`. Контуры: 21 WebP, H.264/AAC вместо HEVC MOV; оставшиеся ролики перекодированы в H.264/AAC с faststart. Неиспользуемый research.mp4 не входит в новую сборку.

Происхождение/размеры/команды: `contour-media.json`, `fullsite-media.json`; воспроизводимые инструменты: `scripts/prepare-contour-media.mjs`, `scripts/prepare-fullsite-media.mjs`, `scripts/capture-simulator-reference.mjs` (нужны ImageMagick/FFmpeg и локальный React для screenshot derivatives).

Все текстовые иллюстрации и вложенные dashboard screenshots заменены локализованными HTML/SVG. Сохранённые видео имеют исходную речь/подписи; для них KK/EN предупреждение остаётся. Субтитров исходных роликов нет; их редакторская подготовка остаётся перед публикацией.

Скриншоты: `.artifacts/preview/`, полный набор `.artifacts/preview/fullsite/` и `manifest.json`, RU/KK/EN на 390/768/1440px. Все типы экранов, landing sections, standalone contours, simulator/advisor и шесть FoodFlow panels просмотрены напрямую текущей vision-моделью; без модельного посредника. Исправлены layout процесса (wide preview + четыре шага), пересечение graph label и доступность/контраст. Захват FoodFlow включает всю активную панель, не только viewport над ней. CDP full-page clip иногда рисует offscreen fixed skip-link внутри снимка: capture-only CSS скрывает его в PNG, в живом приложении ссылка не меняется. Manifest: без browser/hydration errors и page overflow; горизонтальная прокрутка сложных food tables остаётся внутри именованных keyboard-accessible regions.

## Проверки исторического этапа переноса

Ниже результаты первоначального переноса; текущие 43/161 приведены выше. На историческом этапе `pnpm verify` прошёл полностью:

- svelte-check: **0 ошибок, 0 предупреждений**;
- Prettier/ESLint: OK;
- Vitest: **35 passed**;
- Playwright desktop/mobile: **141 passed, 1 intentional skip** (mobile-only сценарий на desktop);
- production build + проверки статического HTML всех локализованных маршрутов, SEO, fonts/assets/robots: OK.

Покрытие: исходные scope/data, matching translations/placeholders, URL strategy, source order, No-JS HTML, legacy/direct entries/history, locale switching, Sheet/Dialog/Escape/focus, media playback/fallback/reduced motion/autoplay, отсутствие page overflow на 320–1440px, advisor/map/chat, все FoodFlow состояния/keyboard controls и mock-проверки consent/payload/ack/error/timeout форм. Автоматические Axe A/AA проверки landing, dialogs, contours, advisor и каждой FoodFlow вкладки — не полная сертификация WCAG. Авторские/изменённые Svelte-компоненты проверены MCP autofixer; валидация реальным проектным компилятором/lint остаётся обязательной.

## Открыто перед публикацией

1. Пользовательская визуальная приёмка полного локального сайта.
2. Редакторское утверждение KK/EN, исходных маркетинговых показателей и русских media captions; подготовка субтитров.
3. Фактический аналитический PDF (сейчас честный unavailable Dialog, без фиктивного файла).
4. Согласование получателя/FormSubmit/обработки данных и отдельная проверка активации/доставки, не массовая тестовая отправка.
5. GitHub Write-доступ: Marinadec-kk имеет READ на aqxzh/governance2, push вернул 403. Нужен Write или явное разрешение на fork; PR отложен.
6. Отдельный согласованный план публикации: locale paths/404 на сервере, SW-переход, backup/rollback, совместное размещение eqyzmet-faq.kz. Бенчмарки LCP/CLS/initial JS на согласованном окружении не заменяются обещаниями от нового фреймворка.

VPS 92.38.49.8, nginx, SSL, Docker и второй сайт не изменялись. Push/PR/merge/deploy не выполнены.
