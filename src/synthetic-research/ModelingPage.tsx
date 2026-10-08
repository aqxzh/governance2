import { useState } from "react"
import { VideoModal } from "../simulator/VideoModal"
import { ImageModal } from "./ImageModal"

type TabRow = {
  num: string
  name: string
  does: string
  feature: string
  image?: string
}

const TABS = [
  "Синтетические исследования",
  "Сценарии и расчёты",
  "Поставки и срок годности",
]

const STEPS = [
  {
    num: "01",
    title: "Придумываем человека",
    text: "Сто покупателей с возрастом, профессией, доходом, составом семьи и отношением к новинкам. Всё записано обычными словами и передано модели как роль.",
  },
  {
    num: "02",
    title: "Задаём один вопрос",
    text: "Один и тот же продукт для всех. Меняется только цена — сначала повышенная, потом со скидкой. Так сравниваем сценарии между собой.",
  },
  {
    num: "03",
    title: "Получаем живой ответ",
    text: "Не цифру, а реплику — как в настоящем интервью. Это принципиально: если просить модель сразу назвать балл, она отвечает неохотно и однообразно.",
  },
  {
    num: "04",
    title: "Переводим слова в оценку",
    text: "Пять эталонных фраз — от «точно не куплю» до «обязательно куплю». Программа измеряет, на какую похож ответ, по смыслу, а не по совпадению слов.",
  },
]

export function RegistryTable({
  rows,
  onSelect,
}: {
  rows: TabRow[]
  onSelect: (row: TabRow) => void
}) {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col items-start pb-px pt-px relative size-full">
        <div className="bg-[#0d0f16] grid grid-cols-[60px_minmax(0,1.10fr)_minmax(0,2fr)_minmax(0,1.10fr)] grid-rows-[39px] h-[39px] relative shrink-0 w-full">
          {["№", "РЕШЕНИЕ", "ЧТО ДЕЛАЕТ", "ОСОБЕННОСТЬ"].map((h) => (
            <div
              key={h}
              className="justify-self-stretch relative row-1 self-start shrink-0"
              data-name="Container"
            >
              <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white tracking-[0.69px] whitespace-nowrap">
                  <p className="leading-[normal]">{h}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {rows.map((row, i) => {
          const clickable = Boolean(row.image)
          return (
            <div
              key={row.num}
              onClick={clickable ? () => onSelect(row) : undefined}
              className={`group grid grid-cols-[60px_minmax(0,1.10fr)_minmax(0,2fr)_minmax(0,1.10fr)] grid-rows-[auto] min-h-[64px] pt-px relative shrink-0 w-full transition-colors ${
                clickable ? "cursor-pointer hover:bg-[#eef0f5]" : ""
              } ${i % 2 === 0 ? "bg-white" : "bg-[#f6f7fb]"}`}
            >
              <div
                aria-hidden
                className="absolute border-[#e6e8ee] border-solid border-t inset-0 pointer-events-none"
              />
              <span
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2242d6] opacity-0 transition-opacity group-hover:opacity-100"
              />
              {clickable && (
                <span
                  aria-hidden
                  className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[16px] leading-none text-[#2242d6] opacity-0 transition-opacity group-hover:opacity-100"
                >
                  →
                </span>
              )}
              <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0">
                <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[16px] whitespace-nowrap">
                    <p className="leading-[normal]">{row.num}</p>
                  </div>
                </div>
              </div>
              <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0">
                <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
                  <div
                    className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-0 relative shrink-0 text-[#0d0f16] text-[16px]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[24px]">{row.name}</p>
                  </div>
                </div>
              </div>
              <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0">
                <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
                  <div
                    className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-0 relative shrink-0 text-[#3a4050] text-[16px]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[24px]">{row.does}</p>
                  </div>
                </div>
              </div>
              <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0">
                <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
                  <div
                    className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-0 relative shrink-0 text-[#5a606e] text-[16px]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    <p className="leading-[24px]">{row.feature}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const MARKET_EVENTS = [
  { label: "Изменение цен на сырьё", icon: "↗" },
  { label: "Акции конкурентов", icon: "↗" },
  { label: "Рост спроса на готовую еду", icon: "◫", active: true },
  { label: "Выход нового игрока", icon: "⁂" },
]

const MARKET_RESULTS = [
  { label: "Рост выручки", value: "68%", icon: "↗" },
  { label: "Изменение доли рынка", value: "54%", icon: "◫" },
  { label: "Новые продуктовые ниши", value: "81%", icon: "◍", active: true },
  { label: "Риски и ограничения", value: "47%", icon: "⚠" },
  { label: "Рекомендации", value: "72%", icon: "⁂" },
]

const ORG_FEATURES = [
  {
    title: "Структурная симуляция",
    text: "Виртуальное тестирование реорганизаций до их реального внедрения.",
  },
  {
    title: "Стресс-тестирование",
    text: "Предиктивный анализ бутылочных горлышек при передаче функций.",
  },
  {
    title: "Балансировка",
    text: "Оптимизация численности штата на основе симуляции потока документов.",
  },
]

function ScenariosTab() {
  return (
    <div className="mt-[32px] flex flex-col">
      <h3
        className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[20px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Сценарии и расчёты
      </h3>
      <p
        className="mt-[10px] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[16px] leading-[1.6] text-[#3a4050] max-w-[760px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Разные применения одного подхода: изменения на рынке и
        перераспределение функций в организации. Роль агентов и расчётного ядра
        объясняем рядом с соответствующим примером.
      </p>

      <div className="mt-[24px] grid grid-cols-1 gap-[20px] xl:grid-cols-2">
        {/* Рыночный пример */}
        <div className="flex flex-col rounded-[16px] border border-[#e6e8ee] bg-white p-[24px]">
          <h4
            className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[17px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Рыночный пример
          </h4>
          <p className="mt-[8px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[14px] leading-[1.6] text-[#5a606e]">
            What-if сценарии для портфеля продуктов: изменение цен на сырьё,
            акции конкурентов, рост спроса, выход нового игрока
          </p>

          <p className="mt-[18px] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[15px] text-[#0d0f16]">
            Продукты и офферы
          </p>
          <p className="mt-[8px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[13px] leading-[1.6] text-[#5a606e]">
            В источнике 35%, 50% и 15% показаны без подписи; это не
            установленные вероятности. Контекст портфеля: 2025–2030 и пять
            категорий.
          </p>
          <p className="mt-[8px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[13px] leading-[1.6] text-[#5a606e]">
            Превращайте рыночные изменения в продуктовые возможности с помощью
            AI.
          </p>

          <div className="mt-[14px] flex flex-wrap gap-[8px]">
            {["Продукты и офферы", "Рынок", "Эксперименты", "Портфель"].map(
              (c, i) => (
                <span
                  key={c}
                  className={`inline-flex items-center rounded-full px-[12px] py-[6px] text-[13px] ${
                    i === 0
                      ? "bg-[#2242d6] text-white"
                      : "border border-[#e6e8ee] text-[#3a4050]"
                  }`}
                >
                  {c}
                </span>
              ),
            )}
          </div>

          <div className="mt-[12px] flex items-center gap-[8px] rounded-[10px] border border-[#e6e8ee] bg-[#f8f9fc] px-[12px] py-[9px] text-[13px] text-[#8990a0]">
            <span aria-hidden>⌕</span>
            <span className="truncate">
              Найти инсайты, продукты, сценарии…
            </span>
          </div>

          <div className="mt-[12px]">
            <span className="inline-flex items-center rounded-full bg-[#2242d6] px-[14px] py-[7px] text-[13px] font-semibold text-white">
              + Новый сценарий
            </span>
          </div>
          <div className="mt-[10px] flex flex-wrap gap-[8px]">
            <span className="inline-flex items-center rounded-full bg-[#2242d6] px-[12px] py-[6px] text-[13px] text-white">
              ↗ Сценарии
            </span>
            {["◫ Тренды", "⚙ Конкуренты", "⊕ Новые продукты"].map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-full border border-[#e6e8ee] px-[12px] py-[6px] text-[13px] text-[#3a4050]"
              >
                {c}
              </span>
            ))}
          </div>

          {/* Схема связи событий и результатов */}
          <div className="mt-[16px] rounded-[14px] border border-[#e6e8ee] p-[16px]">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-[10px]">
              <div>
                <p className="text-[13px] font-bold text-[#0d0f16]">
                  Рыночные события
                </p>
                <div className="mt-[10px] flex flex-col gap-[8px]">
                  {MARKET_EVENTS.map((e) => (
                    <div
                      key={e.label}
                      className={`flex items-center gap-[8px] rounded-[10px] border px-[10px] py-[9px] text-[13px] leading-[1.35] ${
                        e.active
                          ? "border-[#2242d6] bg-[#eef2ff] text-[#2242d6]"
                          : "border-[#e6e8ee] text-[#0d0f16]"
                      }`}
                    >
                      <span aria-hidden className="text-[13px]">
                        {e.icon}
                      </span>
                      {e.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="grid size-[76px] place-items-center rounded-full border-2 border-[#2242d6] bg-white text-center shadow-[0_0_0_6px_#eef2ff]">
                  <div>
                    <div className="text-[15px] font-bold tabular-nums text-[#2242d6]">
                      87%
                    </div>
                    <div className="text-[10px] leading-tight text-[#8990a0]">
                      уверенность
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#0d0f16]">
                  Возможные результаты
                </p>
                <div className="mt-[10px] flex flex-col gap-[8px]">
                  {MARKET_RESULTS.map((r) => (
                    <div
                      key={r.label}
                      className={`flex items-center justify-between gap-[8px] rounded-[10px] border px-[10px] py-[9px] text-[13px] leading-[1.35] ${
                        r.active
                          ? "border-[#2242d6] bg-[#eef2ff]"
                          : "border-[#e6e8ee]"
                      }`}
                    >
                      <span className="flex items-center gap-[6px] text-[#0d0f16]">
                        <span aria-hidden className="text-[#2242d6]">
                          {r.icon}
                        </span>
                        {r.label}
                      </span>
                      <span className="font-bold tabular-nums text-[#2242d6]">
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-[10px] text-center text-[11px] text-[#8990a0]">
              Схема связей «событие → результат»; толщина линий условна.
            </p>
          </div>
        </div>

        {/* Организационный пример */}
        <div className="flex flex-col rounded-[16px] border border-[#e6e8ee] bg-white p-[24px]">
          <h4
            className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[17px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Организационный пример
          </h4>
          <p className="mt-[8px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[14px] leading-[1.6] text-[#5a606e]">
            Моделирование перераспределения функций и сотрудников между
            ведомствами с мгновенным расчётом нагрузки и баланса
          </p>

          <p className="mt-[16px] text-[22px] font-bold text-[#2242d6]">
            Участников симуляции: 38
          </p>
          <div className="mt-[10px]">
            <span className="inline-flex items-center gap-[8px] rounded-full border border-[#e6e8ee] px-[12px] py-[6px] text-[13px] text-[#3a4050]">
              <span aria-hidden className="size-[8px] rounded-full bg-[#2242d6]" />
              Симуляция потока документов: активна
            </span>
          </div>

          <div className="mt-[14px] rounded-[14px] border border-[#e6e8ee] bg-[#fafbfe] p-[16px]">
            <div className="mx-auto max-w-[320px] rounded-[12px] border border-[#d98a94] bg-white p-[14px] text-center shadow-[0_2px_12px_rgba(180,30,40,0.08)]">
              <p className="text-[14px] font-bold text-[#0d0f16]">
                Департамент по дебюрократизации
              </p>
              <span className="mt-[8px] inline-flex rounded-[6px] bg-[#b4232a] px-[10px] py-[4px] text-[13px] font-semibold text-white">
                Риск просрочки: 89%
              </span>
            </div>
            <div
              aria-hidden
              className="mx-auto h-[22px] w-px bg-[#c3c9d6]"
            />
            <div className="grid grid-cols-4 gap-[10px]">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-[10px] border border-[#e6e8ee] bg-white p-[10px]"
                >
                  <div className="h-[6px] rounded-full bg-[#eef0f5]" />
                  <div className="mt-[8px] flex gap-[6px]">
                    <div className="h-[14px] w-[24px] rounded-[4px] bg-[#2f6fed]" />
                    <div className="h-[14px] w-[16px] rounded-[4px] bg-[#a9bcf5]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-[12px] text-[13px] leading-[1.6] text-[#5a606e]">
            Чипы на карточках — искажённый псевдотекст исходного растра; их
            значения не переносились.
          </p>

          <div className="mt-[16px] grid grid-cols-1 gap-[14px] border-t border-[#e6e8ee] pt-[16px] sm:grid-cols-3">
            {ORG_FEATURES.map((f) => (
              <div key={f.title}>
                <p className="text-[14px] font-bold leading-[1.35] text-[#0d0f16]">
                  {f.title}
                </p>
                <p className="mt-[6px] text-[13px] leading-[1.6] text-[#5a606e]">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-[16px] text-[13px] leading-[1.6] text-[#8990a0]">
            Иллюстративная реконструкция исходной презентации. Цифры —
            демонстрационные, не подтверждённые результаты.
          </p>
        </div>
      </div>
    </div>
  )
}

function SupplyTab() {
  return (
    <div className="mt-[32px] flex flex-col">
      <h3
        className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[20px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Поставки и срок годности
      </h3>
      <p
        className="mt-[10px] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[16px] leading-[1.6] text-[#3a4050] max-w-[760px]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        Как связаны маршрут, остаток и время продажи? Карта поставок и FoodFlow
        показывают два исходных демо этой задачи; их данные и расчёты не
        объединены.
      </p>

      <div className="mt-[24px] rounded-[16px] border border-[#e6e8ee] bg-white p-[20px] sm:p-[24px]">
        <h4
          className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[16px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Поставки и срок годности
        </h4>
        <p className="mt-[10px] text-[14px] leading-[1.6] text-[#5a606e]">
          Схематическая иллюстрация, не географическая карта; положения, площади
          и расстояния не измерены.
        </p>
        <p className="mt-[8px] text-[14px] leading-[1.6] text-[#5a606e]">
          Разумное распределение охлаждённой курицы по времени в пути и скорости
          продажи: завод → склад → магазины/супермаркеты/и т. д.
        </p>

        <div className="mt-[14px] flex flex-wrap gap-[8px]">
          <span className="inline-flex items-center rounded-full border border-[#e6e8ee] px-[12px] py-[6px] text-[13px] text-[#3a4050]">
            Полигон А
          </span>
          <span className="inline-flex items-center rounded-full bg-[#2242d6] px-[12px] py-[6px] text-[13px] font-semibold text-white">
            День 981 · 8 сент.
          </span>
        </div>

        <div className="mt-[16px] grid grid-cols-1 gap-[16px] lg:grid-cols-[1.15fr_0.85fr]">
          {/* Карта */}
          <div className="flex flex-col">
            <div className="rounded-[14px] border border-[#e6e8ee] p-[16px]">
              <p className="text-[15px] font-bold text-[#0d0f16]">
                Карта поставок — Алматы
              </p>
              <div className="mt-[10px] flex flex-wrap gap-[8px] text-[12px] text-[#3a4050]">
                {["🏭 завод", "📦 склады", "● магазины", "⇝ маршруты"].map(
                  (l) => (
                    <span
                      key={l}
                      className="inline-flex items-center rounded-full border border-[#e6e8ee] px-[10px] py-[4px]"
                    >
                      {l}
                    </span>
                  ),
                )}
              </div>
              <svg
                viewBox="0 0 480 300"
                role="img"
                aria-label="Схематичная карта поставок: завод, склады и магазины"
                className="mt-[12px] block h-auto w-full rounded-[10px] border border-[#eef0f5] bg-[#fafbfe]"
              >
                <defs>
                  <pattern
                    id="supplyGrid"
                    width="36"
                    height="30"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 36 0 L 0 0 0 30"
                      fill="none"
                      stroke="#e6e8ee"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="480" height="300" fill="url(#supplyGrid)" />
                <polygon
                  points="150,70 260,55 330,90 350,160 300,230 180,240 120,180 110,110"
                  fill="none"
                  stroke="#a9bcf5"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />
                <path
                  d="M 165 95 L 200 150 L 245 130 L 290 165"
                  fill="none"
                  stroke="#2f6fed"
                  strokeWidth="2"
                  strokeDasharray="3 4"
                />
                <path
                  d="M 200 150 L 250 190 L 320 185"
                  fill="none"
                  stroke="#2f6fed"
                  strokeWidth="2"
                  strokeDasharray="3 4"
                />
                <g fontSize="10" fill="#8990a0" fontFamily="sans-serif">
                  <text x="18" y="140">Тузы</text>
                  <text x="120" y="205">Каскелен</text>
                  <text x="215" y="160">Алматы</text>
                  <text x="235" y="95">Карасай</text>
                  <text x="315" y="125">Бесагаш</text>
                  <text x="320" y="195">Бостандык</text>
                </g>
                <g>
                  <rect x="155" y="85" width="18" height="18" rx="5" fill="#fff" stroke="#b4232a" strokeWidth="1.5" />
                  <text x="159" y="98" fontSize="11">🏭</text>
                  <rect x="192" y="142" width="16" height="16" rx="4" fill="#fff" stroke="#0d0f16" strokeWidth="1.2" />
                  <text x="195" y="154" fontSize="9">🏠</text>
                  <rect x="238" y="122" width="16" height="16" rx="4" fill="#fff" stroke="#0d0f16" strokeWidth="1.2" />
                  <rect x="282" y="115" width="16" height="16" rx="4" fill="#fff" stroke="#0d0f16" strokeWidth="1.2" />
                </g>
                <g fill="#2f6fed">
                  {[
                    [205, 165], [225, 175], [245, 180], [265, 172], [285, 178],
                    [305, 170], [250, 195], [270, 200], [290, 195], [310, 190],
                    [225, 205], [245, 210], [265, 215], [180, 190], [195, 200],
                    [335, 250],
                  ].map(([x, y], i) => (
                    <circle key={i} cx={x} cy={y} r="3.2" />
                  ))}
                </g>
              </svg>
            </div>
            <div className="mt-[12px] grid grid-cols-2 gap-[10px] rounded-[14px] border border-[#e6e8ee] p-[16px] text-center sm:grid-cols-4">
              {[
                ["80", "рейсов за неделю"],
                ["2 004", "км пробега"],
                ["11,4", "рейса в день"],
                ["1 500 кг", "ёмкость фуры"],
              ].map(([v, l]) => (
                <div key={l} className="flex flex-col">
                  <span className="text-[18px] font-bold tabular-nums text-[#0d0f16]">
                    {v}
                  </span>
                  <span className="mt-[2px] text-[12px] leading-[1.4] text-[#5a606e]">
                    {l}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Жизнь партии */}
          <div className="flex flex-col gap-[16px]">
            <div className="rounded-[14px] border border-[#e6e8ee] p-[16px]">
              <p className="text-[15px] font-bold leading-[1.4] text-[#0d0f16]">
                Отгрузка с прицелом на срок годности партии
              </p>
              <p className="mt-[10px] text-[14px] leading-[1.6] text-[#5a606e]">
                Партия уезжает со склада, только если доедет и продастся раньше
                конца срока. Так мясо не гниёт на полках и складах.
              </p>
              <p className="mt-[14px] text-[13px] font-bold tracking-[0.6px] text-[#5a606e]">
                ЖИЗНЬ ПАРТИИ — 7 ДНЕЙ
              </p>
              <div className="mt-[10px] flex h-[26px] w-full overflow-hidden rounded-[8px] bg-[#eef0f5]">
                <div className="h-full bg-[#2f6fed]" style={{ width: "9%" }} />
                <div className="h-full bg-[#22b573]" style={{ width: "34%" }} />
                <div className="h-full bg-[#22b573]/40" style={{ width: "4%" }} />
              </div>
              <div className="mt-[6px] flex justify-between text-[12px] tabular-nums text-[#8990a0]">
                {["0", "1", "2", "3", "4", "5", "6", "7", "день"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              <p className="mt-[8px] text-[13px] font-semibold text-[#2242d6]">
                в пути 0,6 дн&nbsp;&nbsp;&nbsp; продажа ≈ 2,4 дн&nbsp;&nbsp;&nbsp; +0,25 дн
              </p>
              <p className="mt-[4px] text-[13px] text-[#5a606e]">
                неприкосновенный буфер до конца срока
              </p>
              <div className="mt-[12px] flex items-start gap-[8px] rounded-[12px] bg-[#eef2ff] p-[12px] text-[13px] font-semibold leading-[1.5] text-[#0d0f16]">
                <span aria-hidden className="grid size-[20px] shrink-0 place-items-center rounded-full bg-[#2242d6] text-[12px] text-white">✓</span>
                отправляем, если: в пути + продажа + 0,25 дн ≤ 7 дней
              </div>
              <p className="mt-[12px] text-[13px] leading-[1.6] text-[#5a606e]">
                FEFO: первой уезжает старейшая партия — но только та, что пройдёт
                тест. Если заказ не закрыт — спасательный проход отправляет
                старую партию, которая хотя бы переживёт дорогу: сток никогда не
                застаивается.
              </p>
            </div>
            <div className="rounded-[14px] border border-[#e6e8ee] p-[16px]">
              <p className="text-[15px] font-bold text-[#0d0f16]">
                Ключевые метрики недели
              </p>
              <p className="mt-[4px] text-[11px] text-[#8990a0]">
                Демо-значения исходного прогона; не фактические показатели.
              </p>
              <div className="mt-[12px] grid grid-cols-2 gap-[12px]">
                {[
                  ["ПОЛНОТА", "105 %", "спрос покрыт поставками"],
                  ["ПРОСРОЧКА", "10,44 %", "2 255,9 кг списано"],
                  ["УПУЩЕННЫЙ СПРОС", "5,12 %", "1 035,5 кг не обслужено"],
                  ["ЦЕНА ДОСТАВКИ", "32,5 ₸/кг", "640 976 ₸ транспорт"],
                ].map(([k, v, s]) => (
                  <div key={k} className="rounded-[10px] bg-[#f8f9fc] p-[10px]">
                    <p className="text-[11px] font-bold tracking-[0.4px] text-[#5a606e]">
                      {k}
                    </p>
                    <p className="mt-[2px] text-[18px] font-bold tabular-nums text-[#0d0f16]">
                      {v}
                    </p>
                    <p className="text-[12px] text-[#8990a0]">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ModelingPage({
  title,
  description,
  rows,
  onBack,
}: {
  title: string
  description: string
  rows: TabRow[]
  onBack: () => void
}) {
  const [activeTab, setActiveTab] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [showScreens, setShowScreens] = useState(false)
  const [selectedRow, setSelectedRow] = useState<TabRow | null>(null)

  const scenarioRows = rows.filter((r) => !r.name.includes("Партия"))
  const supplyRows = rows.filter((r) => r.name.includes("Партия"))

  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-[1170px] mx-auto px-[20px] sm:px-[44px] pt-[24px] pb-[60px] flex flex-col">
        <div className="flex flex-col gap-[8px]">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-[8px] self-start font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px] text-[#3a4050] cursor-pointer transition-colors hover:text-[#2242d6]"
          >
            <span className="text-[14px] leading-none">←</span>
            НАЗАД К ГЛАВНОЙ
          </button>
          <button
            type="button"
            onClick={onBack}
            className="self-start font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px] text-[#2242d6] cursor-pointer transition-colors hover:text-[#0d0f16]"
          >
            GOVERNANCE.KZ
          </button>
        </div>

        <h2
          className="mt-[16px] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[36px] sm:text-[42px] tracking-[-0.36px] leading-[1.1]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {title}
        </h2>

        <p
          className="mt-[16px] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[18px] leading-[1.65] text-[#3a4050] max-w-[900px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {description}
        </p>

        <p
          className="mt-[20px] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[16px] leading-[1.6] text-[#3a4050] max-w-[720px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Демонстрация на исходных синтетических данных. Это не подключённая
          информационная система и не результаты работы с вашими данными.
        </p>

        {/* Вкладки */}
        <div className="mt-[36px] flex items-center justify-between gap-[24px]">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`pb-[10px] font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[15px] cursor-pointer transition-colors border-b-2 ${
                activeTab === i
                  ? "text-[#0d0f16] border-[#0d0f16]"
                  : "text-[#8990a0] border-transparent hover:text-[#3a4050]"
              }`}
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 0 && (
          <div className="mt-[32px] flex flex-col">
            <h3
              className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[20px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Синтетические исследования
            </h3>
            <p
              className="mt-[10px] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[16px] leading-[1.6] text-[#3a4050] max-w-[760px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Профили аудитории → вопрос → ответ → оценка. Исследуем спрос и
              реакцию на цену, сравнивая ответы в разных сценариях.
            </p>

            <h4
              className="mt-[32px] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[28px] tracking-[-0.28px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Опрос 100 синтетических покупателей
            </h4>

            <div className="mt-[14px]">
              <span className="inline-flex items-center rounded-full bg-[#f1f3f8] px-[12px] py-[6px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[13px] text-[#3a4050]">
                Демо · 100 респондентов
              </span>
            </div>

            <h5
              className="mt-[28px] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[17px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Процесс работы
            </h5>

            <div className="mt-[20px] w-full max-w-[880px] mx-auto">
              <img
                src="/graphics/data-flow-ai-filtering.png"
                alt="Схема потока данных и ИИ-фильтрации"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>

            <p className="mt-[16px] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[13px] text-[#8990a0]">
              Статическая реконструкция исходной схемы; не работающий сервис.
            </p>

            <button
              type="button"
              onClick={() => setShowVideo(true)}
              className="mt-[28px] flex w-full items-center justify-center gap-[10px] rounded-[12px] border border-[#e6e8ee] bg-white py-[16px] font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[15px] text-[#0d0f16] transition-colors hover:bg-[#f8f9fc] cursor-pointer"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4 fill-current"
                aria-hidden
              >
                <path d="M8 5.14v13.72L19 12 8 5.14z" />
              </svg>
              Смотреть видео
            </button>

            <div className="mt-[28px] grid w-full grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <div
                  key={s.num}
                  className="flex flex-col gap-[10px] rounded-[14px] border border-[#e6e8ee] bg-white p-[24px]"
                >
                  <span className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[13px] tabular-nums text-[#2242d6]">
                    {s.num}
                  </span>
                  <span
                    className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[17px] leading-[1.25] text-[#0d0f16]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {s.title}
                  </span>
                  <span
                    className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[14px] leading-[1.6] text-[#5a606e]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {s.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-[28px">
              <button
                type="button"
                onClick={() => setShowScreens((v) => !v)}
                aria-expanded={showScreens}
                className="group inline-flex cursor-pointer items-center gap-[10px] rounded-[8px] border border-[#0d0f16] border-solid bg-white px-[19px] py-[12px] transition-colors hover:bg-[#0d0f16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
              >
                <span
                  className="font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#0d0f16] whitespace-nowrap transition-colors group-hover:text-white"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Исходные экраны и подробности
                </span>
                <span
                  aria-hidden
                  className={`text-[14px] leading-none text-[#0d0f16] transition-all duration-300 group-hover:text-white ${
                    showScreens ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>
            </div>

            {showScreens && (
              <div className="mt-[24px]">
                <RegistryTable rows={rows} onSelect={setSelectedRow} />
              </div>
            )}
          </div>
        )}

        {activeTab === 1 && (
          <div className="flex flex-col">
            <ScenariosTab />
            <div className="mt-[28px]">
              <button
                type="button"
                onClick={() => setShowScreens((v) => !v)}
                aria-expanded={showScreens}
                className="group inline-flex cursor-pointer items-center gap-[10px] rounded-[8px] border border-[#0d0f16] border-solid bg-white px-[19px] py-[12px] transition-colors hover:bg-[#0d0f16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
              >
                <span
                  className="font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#0d0f16] whitespace-nowrap transition-colors group-hover:text-white"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Исходные экраны и подробности
                </span>
                <span
                  aria-hidden
                  className={`text-[14px] leading-none text-[#0d0f16] transition-all duration-300 group-hover:text-white ${
                    showScreens ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>
            </div>
            {showScreens && (
              <div className="mt-[24px]">
                <RegistryTable rows={scenarioRows} onSelect={setSelectedRow} />
              </div>
            )}
          </div>
        )}

        {activeTab === 2 && (
          <div className="flex flex-col">
            <SupplyTab />
            <div className="mt-[28px] flex flex-wrap items-center gap-[12px]">
              <button
                type="button"
                onClick={() => setShowScreens((v) => !v)}
                aria-expanded={showScreens}
                className="group inline-flex cursor-pointer items-center gap-[10px] rounded-[8px] border border-[#0d0f16] border-solid bg-white px-[19px] py-[12px] transition-colors hover:bg-[#0d0f16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
              >
                <span
                  className="font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#0d0f16] whitespace-nowrap transition-colors group-hover:text-white"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  Исходные экраны и подробности
                </span>
                <span
                  aria-hidden
                  className={`text-[14px] leading-none text-[#0d0f16] transition-all duration-300 group-hover:text-white ${
                    showScreens ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>
              <a
                href="?food=1"
                className="inline-flex items-center justify-center rounded-[8px] bg-[#2242d6] px-[19px] py-[12px] font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-white transition-colors hover:bg-[#1a34b0]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Открыть живое демо FoodFlow →
              </a>
            </div>
            {showScreens && (
              <div className="mt-[24px]">
                <RegistryTable rows={supplyRows} onSelect={setSelectedRow} />
              </div>
            )}
          </div>
        )}
      </div>

      {showVideo && (
        <VideoModal
          src="/videos/demka.mp4"
          title="Опрос 100 синтетических покупателей"
          onClose={() => setShowVideo(false)}
          large
        />
      )}
      {selectedRow && selectedRow.image && (
        <ImageModal
          index={selectedRow.num}
          title={selectedRow.name}
          image={selectedRow.image}
          description={selectedRow.does}
          onClose={() => setSelectedRow(null)}
          showTitle={false}
        />
      )}
    </div>
  )
}
