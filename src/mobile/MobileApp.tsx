import React, { useEffect, useRef, useState } from "react"
import { CONTACT_EMAIL, sendApplication } from "../lib/sendApplication"
import {
  tabData,
  productImages,
  type ProductImageKey,
  type TabKey,
} from "../../imports/index"
import imgDemkaPhoto from "../../imports/demka-photo.png"
import imgBefore from "../../imports/before.png"
import imgAfter from "../../imports/after.png"
import imgGraphic06 from "../../imports/graphic-06.png"
import imgGraphic07 from "../../imports/graphic-07.png"

/* ==================== Типы и данные ==================== */

type NavId = "home" | "contours" | "products" | "vision" | "contact"

const NAV_ANCHORS: Record<NavId, string> = {
  home: "top",
  contours: "s-contours",
  products: "s-products",
  vision: "s-vision",
  contact: "s-contact",
}

type FavItem = {
  id: string
  title: string
  context: string
  description: string
  image?: string
}

type SearchItem = FavItem & { tabKey?: TabKey }

const STATS = [
  { value: "0 000", label: "профилей · Smart HR" },
  { value: "0 000", label: "госуслуг проверено" },
  { value: "00", label: "госорганов в пилоте" },
  { value: "+00%", label: "эффективность" },
]

const CONTOUR_CARDS: {
  key: TabKey
  k: string
  title: string
  subtitle?: string
  text: string
}[] = [
  {
    key: "recruitment",
    k: "К1",
    title: "Диагностика",
    subtitle: "Прозрачность аппарата",
    text: "Функциональный анализ госорганов и аналитика госуслуг: дублирования, коллизии, скрытые барьеры, перевод в проактивный формат.",
  },
  {
    key: "analytics",
    k: "К2",
    title: "Координация",
    text: "Smart HR и онлайн-ассессмент: подбор и оценка кандидатов на данных, снижение ручной нагрузки, структурный отбор.",
  },
]

const DEMO_STEPS = [
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

const INFOGRAPHIC_TEXT =
  "В Governance.kz инфографика — это не украшение. Это функциональный инструмент, который переводит сложнейшие процессы (коллизии полномочий, скрытые барьеры) в кристально чистую визуальную структуру. От хаоса неструктурированных данных — к математическому порядку."

type VisionBlock = {
  num: string
  label: string
  title: string
  points: string[]
  video?: string
  image?: string
  imageDescription?: string
  quote?: string
}

const VISION_BLOCKS: VisionBlock[] = [
  {
    num: "05",
    label: "СТРАТЕГИЯ",
    title: "Стратегический фундамент: Почему Казахстан?",
    points: [
      "Передовая экосистема eGov, суперкомпьютеры, ЦОДы.",
      "Дешевая электроэнергия, запасы редкоземельных металлов (кремний, литий), критичные для вычислений.",
      "Технологии & Продукты — создание сложных ИИ-продуктов на базе доступных вычислительных мощностей.",
    ],
    video: "/videos/process.mp4",
    quote:
      "«Будущее инноваций и ИИ упирается в энергию и вычислительные мощности.»",
  },
  {
    num: "06",
    label: "AI-АССЕССМЕНТ",
    title: "AI-Ассессмент: Поведенческий анализ",
    points: [
      "Использование компьютерного зрения и аудиоаналитики в реальном времени.",
      "Прогнозирование эффективности на основе поведенческих паттернов как дополнение к экспертной оценке.",
    ],
    image: imgGraphic06,
    imageDescription:
      "AI-Ассессмент: компьютерное зрение и аудиоаналитика для поведенческого анализа кандидатов.",
  },
  {
    num: "07",
    label: "EXECASSIST",
    title: "ExecAssist: Помощник руководителя",
    points: [
      "ИИ видит ведомство изнутри в реальном времени.",
      "Координация задач и умные боты работают прямо в рабочих мессенджерах сотрудников.",
      "Переход от избыточных данных к чистому управленческому сигналу: управленческий сигнал, прямая координация, эффективность департаментов, общий уровень нагрузки.",
    ],
    image: imgGraphic07,
    imageDescription:
      "ExecAssist: управленческий сигнал, прямая координация и эффективность департаментов в одной панели.",
  },
  {
    num: "08",
    label: "SERVICEFLOW",
    title: "ServiceFlow: Проактивный клиентский сервис с помощью ИИ",
    points: [
      "Проанализировано 1 500 государственных услуг с помощью ИИ.",
      "Выявление аномалий, скрытых офлайн-процессов и нормативных барьеров.",
      "Проактивный формат работы с гражданами вместо ожидания обращений.",
    ],
    image: "/graphics/serviceflow.png",
    imageDescription:
      "ServiceFlow: выявление аномалий и скрытых процессов, проактивный формат обслуживания.",
  },
]

const PRINCIPLES = [
  {
    title: "Human-in-the-loop",
    text: "Ответственность — за уполномоченными лицами",
  },
  { title: "Замкнутый контур", text: "Безопасная среда апробации" },
  { title: "Защита данных", text: "Этика и законодательство РК" },
  { title: "Межведомственность", text: "Устранение барьеров данных" },
  { title: "Прозрачность и аудит", text: "Проверяемость процессов" },
]

const PRODUCT_IDS: ProductImageKey[] = [
  "smarthr",
  "assessment",
  "assistant",
  "sovereignty",
]

const REGISTRY: {
  key: ProductImageKey
  num: string
  title: string
  does: string
  feature: string
}[] = [
  {
    key: "smarthr",
    num: "01",
    title: "Smart HR",
    does: "Диалоговый помощник KZ/RU/EN, фильтр профилей, аналитика кандидатов",
    feature: "3 модуля",
  },
  {
    key: "assessment",
    num: "02",
    title: "Онлайн-ассессмент",
    does: "Компьютерное зрение, анализ видео/аудио, поведенческие паттерны",
    feature: "Human-in-the-loop",
  },
  {
    key: "assistant",
    num: "03",
    title: "Помощник руководителя",
    does: "Интеграция ЭДО, нагрузка, узкие места, управленческий сигнал",
    feature: "Для ЛПР",
  },
  {
    key: "sovereignty",
    num: "04",
    title: "Цифровой суверенитет",
    does: "Закрытый контур, суперкомпьютер и локальные сервера, защита данных РК",
    feature: "Инфраструктура",
  },
]

function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = PRODUCT_IDS.map((key) => ({
    id: `p:${key}`,
    title: productImages[key].title,
    context: `Продукт · ${productImages[key].index}`,
    description: productImages[key].description,
    image: productImages[key].image,
  }))
  ;(Object.keys(tabData) as TabKey[]).forEach((tk) => {
    tabData[tk].rows.forEach((row, i) => {
      items.push({
        id: `r:${tk}:${i}`,
        title: row.name,
        context: `${tabData[tk].title} · решение ${row.num}`,
        description: row.does,
        image: row.image,
        tabKey: tk,
      })
    })
  })
  return items
}

const SEARCH_INDEX = buildSearchIndex()

/* ==================== Мелкие блоки ==================== */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[1.2px] text-[#2242d6]">
      {children}
    </p>
  )
}

function TouchButton({
  onClick,
  variant = "primary",
  children,
  type = "button",
  className = "",
}: {
  onClick?: () => void
  variant?: "primary" | "outline" | "white"
  children: React.ReactNode
  type?: "button" | "submit"
  className?: string
}) {
  const base =
    "flex min-h-[48px] w-full items-center justify-center rounded-[8px] px-[20px] py-[14px] text-center font-['IBM_Plex_Sans',sans-serif] font-semibold text-[15px] transition-colors active:opacity-80 cursor-pointer"
  const variants = {
    primary: "bg-[#2242d6] text-white active:bg-[#1a35ad]",
    outline: "border border-[#0d0f16] bg-white text-[#0d0f16]",
    white: "border border-white/40 bg-transparent text-white",
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

function HeartButton({
  active,
  onClick,
  className = "",
}: {
  active: boolean
  onClick: (e: React.MouseEvent) => void
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={active ? "Убрать из избранного" : "Добавить в избранное"}
      aria-pressed={active}
      className={`grid size-10 shrink-0 place-items-center rounded-full backdrop-blur-sm transition-transform active:scale-90 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`size-5 ${
          active ? "fill-[#2242d6]" : "fill-none"
        } stroke-[#2242d6]`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 21s-7.5-4.7-9.7-9C.8 8.9 2.4 5 6 5c2.2 0 3.6 1.2 4.4 2.5h3.2C14.4 6.2 15.8 5 18 5c3.6 0 5.2 3.9 3.7 7-2.2 4.3-9.7 9-9.7 9Z" />
      </svg>
    </button>
  )
}

/* ==================== Шторки и модалки ==================== */

type SheetPayload = {
  index?: string
  title: string
  image?: string
  description: string
} | null

function useLockBody(active: boolean) {
  useEffect(() => {
    if (!active) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [active])
}

function useEscape(onClose: () => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])
}

function Sheet({
  payload,
  onClose,
}: {
  payload: SheetPayload
  onClose: () => void
}) {
  useLockBody(!!payload)
  useEscape(onClose)
  if (!payload) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#0d0f16]/60 backdrop-blur-[2px] animate-[imgmodal-fade_.18s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={payload.title}
    >
      <div
        className="relative flex max-h-[90vh] w-full flex-col overflow-hidden rounded-t-[20px] bg-white shadow-[0_-12px_48px_rgba(13,15,22,0.25)] animate-[msheet-up_.28s_cubic-bezier(0.2,0.8,0.2,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[#e6e8ee] px-5 pb-4 pt-3">
          <div className="flex min-w-0 items-baseline gap-3">
            {payload.index && (
              <span className="shrink-0 font-['IBM_Plex_Mono',monospace] text-[18px] leading-none text-[#2242d6] tabular-nums">
                {payload.index}
              </span>
            )}
            <h2 className="truncate font-['IBM_Plex_Sans',sans-serif] font-bold text-[19px] leading-tight tracking-[-0.2px] text-[#0d0f16]">
              {payload.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-[#e6e8ee] text-[24px] leading-none text-[#3a4050] active:bg-[#f6f7fb]"
          >
            ×
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-auto bg-[#f6f7fb] p-4">
          {payload.image && (
            <img
              src={payload.image}
              alt=""
              className="block max-h-[52vh] w-full rounded-[10px] object-contain shadow-[0_8px_32px_rgba(13,15,22,0.12)]"
            />
          )}
          <p className="mt-4 px-1 font-['IBM_Plex_Sans',sans-serif] text-[15px] leading-[1.55] text-[#3a4050]">
            {payload.description}
          </p>
        </div>
      </div>
    </div>
  )
}

function VideoPlayerModal({
  src,
  title,
  onClose,
}: {
  src: string
  title: string
  onClose: () => void
}) {
  useLockBody(true)
  useEscape(onClose)
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#0d0f16] animate-[imgmodal-fade_.18s_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Шапка — как у просмотрщика картинок */}
      <div
        className="flex shrink-0 items-center justify-between gap-3 px-4 pb-3"
        style={{ paddingTop: "calc(env(safe-area-inset-top) + 12px)" }}
      >
        <h2 className="min-w-0 truncate font-['IBM_Plex_Sans',sans-serif] font-bold text-[17px] leading-tight text-white">
          {title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-[24px] leading-none text-white active:bg-white/15"
        >
          ×
        </button>
      </div>

      {/* Видео на весь экран */}
      <div className="flex min-h-0 flex-1 items-center justify-center px-3">
        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="block max-h-full w-full rounded-[12px] object-contain"
        />
      </div>

      <div
        className="shrink-0"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 16px)" }}
      />
    </div>
  )
}

/* ---------- Полноэкранный просмотр картинки ---------- */

function ImageViewer({
  index,
  title,
  image,
  description,
  onClose,
}: {
  index?: string
  title: string
  image: string
  description: string
  onClose: () => void
}) {
  useLockBody(true)
  useEscape(onClose)
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#0d0f16] animate-[imgmodal-fade_.18s_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Шапка просмотрщика */}
      <div
        className="flex shrink-0 items-center justify-between gap-3 px-4 pb-3"
        style={{ paddingTop: "calc(env(safe-area-inset-top) + 12px)" }}
      >
        <div className="flex min-w-0 items-baseline gap-3">
          {index && (
            <span className="shrink-0 font-['IBM_Plex_Mono',monospace] text-[16px] leading-none text-[#8fa6ff] tabular-nums">
              {index}
            </span>
          )}
          <h2 className="truncate font-['IBM_Plex_Sans',sans-serif] font-bold text-[17px] leading-tight text-white">
            {title}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-[24px] leading-none text-white active:bg-white/15"
        >
          ×
        </button>
      </div>

      {/* Картинка на весь экран */}
      <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto px-3">
        <img
          src={image}
          alt={title}
          className="block max-h-full w-full rounded-[12px] object-contain"
        />
      </div>

      {/* Описание */}
      <div
        className="shrink-0 px-5 pt-4"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 16px)" }}
      >
        <p className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[1.6] text-white/70">
          {description}
        </p>
        <p className="mt-2 font-['IBM_Plex_Mono',monospace] text-[10px] tracking-[0.8px] text-white/30">
          ТАП ВНЕ КАРТИНКИ · ESC — ЗАКРЫТЬ
        </p>
      </div>
    </div>
  )
}

/* ---------- Поиск ---------- */

function SearchOverlay({
  onClose,
  onPick,
}: {
  onClose: () => void
  onPick: (item: SearchItem) => void
}) {
  const [query, setQuery] = useState("")
  useLockBody(true)
  useEscape(onClose)

  const q = query.trim().toLowerCase()
  const results =
    q.length < 2
      ? []
      : SEARCH_INDEX.filter(
          (it) =>
            it.title.toLowerCase().includes(q) ||
            it.description.toLowerCase().includes(q) ||
            it.context.toLowerCase().includes(q),
        )

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white animate-[imgmodal-fade_.18s_ease-out]">
      <div
        className="sticky top-0 flex items-center gap-2 border-b border-[#e6e8ee] bg-white px-3 py-2"
        style={{ paddingTop: "calc(env(safe-area-inset-top) + 8px)" }}
      >
        <div className="flex h-11 flex-1 items-center gap-2.5 rounded-[10px] bg-[#f6f7fb] px-3.5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8990a0"
            strokeWidth="2"
            strokeLinecap="round"
            className="size-[18px] shrink-0"
            aria-hidden
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск по решениям и продуктам…"
            className="w-full bg-transparent font-['IBM_Plex_Sans',sans-serif] text-[15px] text-[#0d0f16] placeholder:text-[#8990a0] focus:outline-none"
            aria-label="Поиск"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Очистить"
              className="grid size-7 shrink-0 place-items-center rounded-full bg-[#e6e8ee] text-[16px] leading-none text-[#5a606e]"
            >
              ×
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="grid size-11 shrink-0 place-items-center rounded-full text-[14px] font-semibold text-[#2242d6]"
        >
          Отмена
        </button>
      </div>

      <div className="flex-1 overflow-auto px-4 py-4">
        {q.length < 2 ? (
          <div className="flex flex-col gap-2 px-1 pt-6">
            <p className="font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[1px] text-[#8990a0]">
              ПОПРОБУЙТЕ НАЙТИ
            </p>
            {[
              "Smart HR",
              "Цифровой двойник",
              "Антикоррупционный мониторинг",
              "Telegram",
            ].map((hint) => (
              <button
                key={hint}
                type="button"
                onClick={() => setQuery(hint)}
                className="flex min-h-[44px] items-center gap-3 rounded-[10px] border border-[#e6e8ee] bg-white px-4 text-left active:bg-[#f6f7fb]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8990a0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="size-4 shrink-0"
                  aria-hidden
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-3.5-3.5" />
                </svg>
                <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] text-[#3a4050]">
                  {hint}
                </span>
              </button>
            ))}
          </div>
        ) : results.length === 0 ? (
          <div className="flex flex-col items-center gap-2 pt-14 text-center">
            <span className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[16px] text-[#0d0f16]">
              Ничего не найдено
            </span>
            <span className="font-['IBM_Plex_Sans',sans-serif] text-[13.5px] text-[#5a606e]">
              Попробуйте другой запрос — например, «Smart HR» или «двойник»
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <p className="px-1 font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[1px] text-[#8990a0]">
              НАЙДЕНО: {results.length}
            </p>
            {results.map((it) => (
              <button
                key={it.id}
                type="button"
                onClick={() => onPick(it)}
                className="flex items-center gap-3.5 rounded-[12px] border border-[#e6e8ee] bg-white p-3 text-left active:bg-[#f6f7fb]"
              >
                {it.image ? (
                  <img
                    src={it.image}
                    alt=""
                    className="size-14 shrink-0 rounded-[8px] object-cover"
                    loading="lazy"
                  />
                ) : (
                  <span className="grid size-14 shrink-0 place-items-center rounded-[8px] bg-[#f6f7fb] font-['IBM_Plex_Mono',monospace] text-[16px] text-[#2242d6]">
                    {it.title.slice(0, 1)}
                  </span>
                )}
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="truncate font-['IBM_Plex_Sans',sans-serif] font-semibold text-[14.5px] text-[#0d0f16]">
                    {it.title}
                  </span>
                  <span className="truncate font-['IBM_Plex_Mono',monospace] text-[10px] tracking-[0.8px] text-[#2242d6] uppercase">
                    {it.context}
                  </span>
                  <span className="line-clamp-2 font-['IBM_Plex_Sans',sans-serif] text-[12.5px] leading-[1.45] text-[#5a606e]">
                    {it.description}
                  </span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/* ---------- Избранное ---------- */

function FavoritesSheet({
  items,
  onClose,
  onPick,
  onRemove,
}: {
  items: FavItem[]
  onClose: () => void
  onPick: (item: FavItem) => void
  onRemove: (id: string) => void
}) {
  useLockBody(true)
  useEscape(onClose)
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#0d0f16]/60 backdrop-blur-[2px] animate-[imgmodal-fade_.18s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Избранное"
    >
      <div
        className="relative flex max-h-[80vh] w-full flex-col overflow-hidden rounded-t-[20px] bg-white shadow-[0_-12px_48px_rgba(13,15,22,0.25)] animate-[msheet-up_.28s_cubic-bezier(0.2,0.8,0.2,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[#e6e8ee] px-5 pb-4 pt-3">
          <h2 className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[19px] leading-tight text-[#0d0f16]">
            Избранное
            <span className="ml-2 font-['IBM_Plex_Mono',monospace] text-[13px] text-[#2242d6] tabular-nums">
              {items.length}
            </span>
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-[#e6e8ee] text-[24px] leading-none text-[#3a4050] active:bg-[#f6f7fb]"
          >
            ×
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-3 px-6 py-12 text-center">
              <span className="grid size-14 place-items-center rounded-full bg-[#f6f7fb]">
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 fill-none stroke-[#b9c1e8]"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M12 21s-7.5-4.7-9.7-9C.8 8.9 2.4 5 6 5c2.2 0 3.6 1.2 4.4 2.5h3.2C14.4 6.2 15.8 5 18 5c3.6 0 5.2 3.9 3.7 7-2.2 4.3-9.7 9-9.7 9Z" />
                </svg>
              </span>
              <p className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[1.55] text-[#5a606e]">
                Пока пусто. Нажимайте ♥ на продуктах и решениях — они сохранятся
                здесь, даже после закрытия приложения.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="flex items-center gap-3 rounded-[12px] border border-[#e6e8ee] bg-white p-3"
                >
                  <button
                    type="button"
                    onClick={() => onPick(it)}
                    className="flex min-w-0 flex-1 items-center gap-3.5 text-left"
                  >
                    {it.image ? (
                      <img
                        src={it.image}
                        alt=""
                        className="size-12 shrink-0 rounded-[8px] object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <span className="grid size-12 shrink-0 place-items-center rounded-[8px] bg-[#f6f7fb] font-['IBM_Plex_Mono',monospace] text-[15px] text-[#2242d6]">
                        {it.title.slice(0, 1)}
                      </span>
                    )}
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="truncate font-['IBM_Plex_Sans',sans-serif] font-semibold text-[14px] text-[#0d0f16]">
                        {it.title}
                      </span>
                      <span className="truncate font-['IBM_Plex_Mono',monospace] text-[10px] tracking-[0.8px] text-[#2242d6] uppercase">
                        {it.context}
                      </span>
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemove(it.id)}
                    aria-label={`Убрать ${it.title} из избранного`}
                    className="grid size-10 shrink-0 place-items-center rounded-full active:bg-[#f6f7fb]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-5 fill-[#2242d6]"
                      aria-hidden
                    >
                      <path d="M6 7h12l-1 13H7L6 7Zm3-3h6l1 2H8l1-2Z" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ==================== Экран контура (оверлей) ==================== */

function ContourDetail({
  tabKey,
  onBack,
  isFav,
  toggleFav,
}: {
  tabKey: TabKey
  onBack: () => void
  isFav: (id: string) => boolean
  toggleFav: (item: FavItem) => void
}) {
  const [rowSheet, setRowSheet] = useState<SheetPayload>(null)
  const t = tabData[tabKey]
  useLockBody(true)
  useEscape(onBack)

  return (
    <div className="fixed inset-0 z-40 flex flex-col bg-white animate-[imgmodal-fade_.18s_ease-out]">
      <div
        className="sticky top-0 z-10 flex items-center gap-3 border-b border-[#e6e8ee] bg-white/95 px-3 py-2 backdrop-blur-sm"
        style={{ paddingTop: "calc(env(safe-area-inset-top) + 8px)" }}
      >
        <button
          type="button"
          onClick={onBack}
          className="flex min-h-[44px] items-center gap-2 rounded-[8px] pr-3 pl-2 font-['IBM_Plex_Sans',sans-serif] font-semibold text-[14px] text-[#0d0f16] active:bg-[#f6f7fb]"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-5 fill-[#2242d6]"
            aria-hidden
          >
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
          Контуры
        </button>
        <span className="truncate font-['IBM_Plex_Sans',sans-serif] font-bold text-[15px] text-[#0d0f16]">
          {t.title}
        </span>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="flex flex-col gap-5 px-5 py-6">
          <div className="flex items-baseline gap-3">
            <span className="font-['IBM_Plex_Mono',monospace] text-[26px] leading-none text-[#2242d6] tabular-nums">
              {t.index}
            </span>
            <h1 className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[24px] leading-tight tracking-[-0.4px] text-[#0d0f16]">
              {t.title}
            </h1>
          </div>
          <p className="font-['IBM_Plex_Sans',sans-serif] text-[15px] leading-[1.6] text-[#3a4050]">
            {t.description}
          </p>
          <div className="overflow-hidden rounded-[12px] border border-[#e6e8ee]">
            {t.rows.map((row, i) => {
              const favId = `r:${tabKey}:${i}`
              return (
                <div
                  key={row.num}
                  className={`flex items-stretch ${
                    i > 0 ? "border-t border-[#e6e8ee]" : ""
                  } ${i % 2 === 1 ? "bg-[#f6f7fb]" : "bg-white"}`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setRowSheet({
                        index: row.num,
                        title: row.name,
                        image: row.image,
                        description: row.does,
                      })
                    }
                    className="flex min-w-0 flex-1 flex-col gap-1.5 px-4 py-4 text-left transition-colors active:bg-[#f6f7fb]"
                  >
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-['IBM_Plex_Mono',monospace] text-[13px] text-[#2242d6] tabular-nums">
                        {row.num}
                      </span>
                      <span className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[15px] leading-tight text-[#0d0f16]">
                        {row.name}
                      </span>
                    </div>
                    <p className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[1.5] text-[#5a606e]">
                      {row.does}
                    </p>
                  </button>
                  <div className="flex items-center pr-2">
                    <HeartButton
                      active={isFav(favId)}
                      onClick={() =>
                        toggleFav({
                          id: favId,
                          title: row.name,
                          context: `${t.title} · ${row.num}`,
                          description: row.does,
                          image: row.image,
                        })
                      }
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Sheet payload={rowSheet} onClose={() => setRowSheet(null)} />
    </div>
  )
}

/* ==================== Оболочка приложения ==================== */

const FAV_KEY = "governance-kz-favs"

function loadFavs(): FavItem[] {
  try {
    const raw = localStorage.getItem(FAV_KEY)
    return raw ? JSON.parse(raw) as FavItem[] : []
  } catch {
    return []
  }
}

type VideoPayload = {
  src: string
  title: string
}

export default function MobileApp() {
  const [contour, setContour] = useState<TabKey | null>(null)
  const [sheet, setSheet] = useState<SheetPayload>(null)
  const [imageViewer, setImageViewer] = useState<{
    index?: string
    title: string
    image: string
    description: string
  } | null>(null)
  const [video, setVideo] = useState<VideoPayload | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [favOpen, setFavOpen] = useState(false)
  const [favs, setFavs] = useState<FavItem[]>(loadFavs)
  const [activeNav, setActiveNav] = useState<NavId>("home")
  const [language, setLanguage] = useState<"RU" | "KZ" | "EN">("RU")
  const [toast, setToast] = useState<string | null>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify(favs))
  }, [favs])

  useEffect(() => {
    if (!toast) return
    const id = setTimeout(() => setToast(null), 2200)
    return () => clearTimeout(id)
  }, [toast])

  const isFav = (id: string) => favs.some((f) => f.id === id)

  const toggleFav = (item: FavItem) => {
    setFavs((prev) =>
      prev.some((f) => f.id === item.id)
        ? prev.filter((f) => f.id !== item.id)
        : [item, ...prev],
    )
    setToast(
      isFav(item.id)
        ? `«${item.title}» убрано из избранного`
        : `«${item.title}» в избранном`,
    )
  }

  /* Scroll-spy: какая вкладка активна */
  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const order: NavId[] = [
          "home",
          "contours",
          "products",
          "vision",
          "contact",
        ]
        let current: NavId = "home"
        for (const nav of order) {
          const el = document.getElementById(NAV_ANCHORS[nav])
          if (el && el.getBoundingClientRect().top <= 160) current = nav
        }
        setActiveNav(current)
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const go = (nav: NavId) => {
    setSearchOpen(false)
    setFavOpen(false)
    setContour(null)
    const el = document.getElementById(NAV_ANCHORS[nav])
    if (el) {
      window.scrollTo({ top: el.offsetTop - 52, behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const openProduct = (id: ProductImageKey) => {
    const p = productImages[id]
    const r = REGISTRY.find((x) => x.key === id)
    setImageViewer({
      index: r?.num ?? p.index,
      title: r?.title ?? p.title,
      image: p.image,
      description: p.description,
    })
  }

  const share = async () => {
    const data = {
      title: "Governance.kz",
      text: "Государство и бизнес, которые видят свои процессы целиком",
      url: window.location.origin,
    }
    if (navigator.share) {
      try {
        await navigator.share(data)
      } catch {
        /* пользователь отменил */
      }
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(data.url)
      setToast("Ссылка скопирована")
    }
  }

  return (
    <div className="flex min-h-dvh w-full flex-col bg-white">
      {/* Шапка */}
      <header
        className="sticky top-0 z-30 border-b border-[#e6e8ee] bg-white/95 backdrop-blur-sm"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="flex h-12 items-center justify-between gap-2 px-4">
          <button
            type="button"
            onClick={() => go("home")}
            className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[15px] leading-none tracking-[-0.15px] text-[#0d0f16]"
            aria-label="GOVERNANCE.KZ — наверх"
          >
            GOVERNANCE.KZ
          </button>
          <div className="flex items-center gap-1">
            <div className="flex items-center rounded-[6px] border border-[#e6e8ee] bg-white p-0.5">
              {(["RU", "KZ", "EN"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  aria-pressed={lang === language}
                  className="grid h-8 min-w-9 place-items-center rounded-[4px] px-1 font-['IBM_Plex_Sans',sans-serif] text-[12px] transition-colors active:bg-[#f6f7fb]"
                  style={{
                    color: lang === language ? "#2242d6" : "#3a4050",
                    fontWeight: lang === language ? 700 : 400,
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setFavOpen(true)}
              aria-label={`Избранное (${favs.length})`}
              className="relative grid size-10 place-items-center rounded-full active:bg-[#f6f7fb]"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5 fill-none stroke-[#3a4050]"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M12 21s-7.5-4.7-9.7-9C.8 8.9 2.4 5 6 5c2.2 0 3.6 1.2 4.4 2.5h3.2C14.4 6.2 15.8 5 18 5c3.6 0 5.2 3.9 3.7 7-2.2 4.3-9.7 9-9.7 9Z" />
              </svg>
              {favs.length > 0 && (
                <span className="absolute right-0.5 top-0.5 grid size-4 place-items-center rounded-full bg-[#2242d6] font-['IBM_Plex_Mono',monospace] text-[9px] leading-none text-white tabular-nums">
                  {favs.length}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Поиск"
              className="grid size-10 place-items-center rounded-full active:bg-[#f6f7fb]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3a4050"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="size-5"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Единая лента */}
      <main className="flex-1 pb-[calc(72px+env(safe-area-inset-bottom))]">
        <HomeFeed
          go={go}
          openProduct={openProduct}
          openImage={(p) => setImageViewer(p)}
          openContour={(k) => setContour(k)}
          openVideo={(src, title) => setVideo({ src, title })}
          isFav={isFav}
          toggleFav={toggleFav}
          share={share}
        />
      </main>

      {/* Нижняя навигация */}
      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-[#e6e8ee] bg-white/95 backdrop-blur-sm"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Основная навигация"
      >
        <div className="mx-auto grid h-[68px] max-w-md grid-cols-5">
          {([
            [
              "home",
              "Главная",
              "M3 10.5 12 3l9 7.5 M5.5 9.5V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V9.5",
            ],
            [
              "contours",
              "Контуры",
              "M12 3 3 7.5l9 4.5 9-4.5L12 3Z M3 12l9 4.5 9-4.5 M3 16.5 12 21l9-4.5",
            ],
            [
              "products",
              "Продукты",
              "M3.5 3.5h7v7h-7zM13.5 3.5h7v7h-7zM3.5 13.5h7v7h-7zM13.5 13.5h7v7h-7z",
            ],
            [
              "vision",
              "Видение",
              "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
            ],
            ["contact", "Контакт", "M3 5h18v14H3zM3.5 7l8.5 6 8.5-6"],
          ] as const).map(([id, label, paths]) => {
            const active = activeNav === id
            return (
              <button
                key={id}
                type="button"
                onClick={() => go(id as NavId)}
                aria-current={active ? "page" : undefined}
                className="flex min-h-[44px] flex-col items-center justify-center gap-1 transition-colors"
                style={{ color: active ? "#2242d6" : "#8990a0" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-[22px]"
                  aria-hidden
                >
                  {paths.split(" M").map((d, i) => (
                    <path key={i} d={i === 0 ? d : `M${d}`} />
                  ))}
                </svg>
                <span className="font-['IBM_Plex_Sans',sans-serif] text-[10.5px] font-semibold leading-none">
                  {label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>

      {/* Оверлеи */}
      {contour && (
        <ContourDetail
          tabKey={contour}
          onBack={() => setContour(null)}
          isFav={isFav}
          toggleFav={toggleFav}
        />
      )}
      <Sheet payload={sheet} onClose={() => setSheet(null)} />
      {imageViewer && (
        <ImageViewer
          index={imageViewer.index}
          title={imageViewer.title}
          image={imageViewer.image}
          description={imageViewer.description}
          onClose={() => setImageViewer(null)}
        />
      )}
      {video && (
        <VideoPlayerModal
          src={video.src}
          title={video.title}
          onClose={() => setVideo(null)}
        />
      )}
      {searchOpen && (
        <SearchOverlay
          onClose={() => setSearchOpen(false)}
          onPick={(item) => {
            setSearchOpen(false)
            if (item.image) {
              setImageViewer({
                title: item.title,
                image: item.image,
                description: item.description,
              })
            } else {
              setSheet({ title: item.title, description: item.description })
            }
          }}
        />
      )}
      {favOpen && (
        <FavoritesSheet
          items={favs}
          onClose={() => setFavOpen(false)}
          onPick={(item) => {
            setFavOpen(false)
            if (item.image) {
              setImageViewer({
                title: item.title,
                image: item.image,
                description: item.description,
              })
            } else {
              setSheet({ title: item.title, description: item.description })
            }
          }}
          onRemove={(id) => {
            setFavs((prev) => prev.filter((f) => f.id !== id))
          }}
        />
      )}

      {/* Тост */}
      {toast && (
        <div className="pointer-events-none fixed inset-x-0 bottom-[calc(84px+env(safe-area-inset-bottom))] z-[60] flex justify-center px-6">
          <div className="rounded-full bg-[#0d0f16] px-5 py-3 font-['IBM_Plex_Sans',sans-serif] text-[13px] text-white shadow-[0_8px_32px_rgba(13,15,22,0.35)] animate-[imgmodal-pop_.24s_cubic-bezier(0.2,0.8,0.2,1)]">
            {toast}
          </div>
        </div>
      )}
    </div>
  )
}

/* ==================== Единая лента ==================== */

function HomeFeed({
  go,
  openProduct,
  openImage,
  openContour,
  openVideo,
  isFav,
  toggleFav,
  share,
}: {
  go: (nav: NavId) => void
  openProduct: (id: ProductImageKey) => void
  openImage: (payload: {
    title: string
    image: string
    description: string
  }) => void
  openContour: (key: TabKey) => void
  openVideo: (src: string, title: string) => void
  isFav: (id: string) => boolean
  toggleFav: (item: FavItem) => void
  share: () => void
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [question, setQuestion] = useState("")

  const inputClass =
    "min-h-[48px] w-full rounded-[8px] border border-[#39406b] bg-white/[0.06] px-4 py-3 font-['IBM_Plex_Sans',sans-serif] text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#8fa6ff]"

  return (
    <div className="flex flex-col">
      {/* ===== 01 Hero ===== */}
      <div id="top" className="relative overflow-hidden">
        <video
          src="/videos/graphs.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d0f16]/65" />
        <div className="relative z-10 flex flex-col gap-6 px-5 pb-8 pt-7">
          <p className="font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[1.2px] text-white/90">
            01 / ИНФРАСТРУКТУРА УПРАВЛЕНИЯ
          </p>
          <h1 className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[30px] leading-[1.15] tracking-[-0.6px] text-white">
            Государство и бизнес, которые видят свои процессы целиком
          </h1>
          <p className="max-w-[560px] font-['IBM_Plex_Sans',sans-serif] text-[15px] leading-[1.6] text-white/75">
            Governance.kz — прикладной центр цифровой трансформации управления.
            ИИ анализирует функции, кадры, услуги и нагрузку в единой логике
            данных: находит дублирования, барьеры и аномалии — а решения
            остаются за людьми.
          </p>
          <div className="flex flex-col gap-3">
            <TouchButton variant="primary" onClick={() => go("contact")}>
              Записаться на встречу →
            </TouchButton>
            <TouchButton variant="white">Аналитическая записка</TouchButton>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* ===== Статистика ===== */}
      <section className="px-5 pt-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[10px] border border-[#e6e8ee] bg-[#e6e8ee]">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col gap-1.5 bg-white px-4 py-4"
            >
              <span className="w-fit border-b-2 border-dashed border-[#b9c1e8] pb-0.5 font-['IBM_Plex_Mono',monospace] text-[24px] leading-none text-[#2242d6] tabular-nums">
                {s.value}
              </span>
              <span className="font-['IBM_Plex_Sans',sans-serif] font-semibold text-[12.5px] leading-tight text-[#0d0f16]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-2 font-['IBM_Plex_Mono',monospace] text-[10.5px] text-[#0d0f16]/60">
          {"// плейсхолдеры — подставить фактические показатели"}
        </p>
      </section>

      {/* ===== Процесс работы ===== */}
      <section className="px-5 pt-8">
        <h2 className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[22px] leading-tight tracking-[-0.3px] text-[#0d0f16]">
          Процесс работы
        </h2>
        <button
          type="button"
          onClick={() => openVideo("/videos/demka.mp4", "Процесс работы")}
          className="relative mt-4 aspect-video w-full overflow-hidden rounded-[14px] bg-[#f4f5f8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
          aria-label="Смотреть демо"
        >
          <img
            src={imgDemkaPhoto}
            alt=""
            aria-hidden
            className="size-full object-cover"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
          <span className="absolute right-3 top-3 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 font-['IBM_Plex_Mono',monospace] text-[10.5px] tracking-[0.6px] text-white/85 backdrop-blur-md">
            ДЕМО · 100 РЕСПОНДЕНТОВ
          </span>
          <span className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-white/95 py-2.5 pl-3.5 pr-5 shadow-lg backdrop-blur-sm">
            <span className="grid size-9 place-items-center rounded-full bg-[#2242d6] text-white">
              <svg
                viewBox="0 0 24 24"
                className="ml-0.5 size-4 fill-current"
                aria-hidden
              >
                <path d="M8 5.14v13.72L19 12 8 5.14z" />
              </svg>
            </span>
            <span className="font-['IBM_Plex_Sans',sans-serif] font-semibold text-[14px] text-[#0d0f16]">
              Смотреть демо
            </span>
          </span>
        </button>
        <p className="mt-4 text-center font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[1.6] text-[#3a4050]">
          Опрос 100 синтетических покупателей
        </p>
        <div className="mt-4 divide-y divide-[#e6e8ee] overflow-hidden rounded-[12px] border border-[#e6e8ee] bg-white">
          {DEMO_STEPS.map((s) => (
            <details key={s.num} className="group">
              <summary className="flex min-h-[48px] cursor-pointer select-none list-none items-center gap-3 px-4 py-3 marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="font-['IBM_Plex_Mono',monospace] text-[13px] tabular-nums text-[#2242d6]">
                  {s.num}
                </span>
                <span className="flex-1 font-['IBM_Plex_Sans',sans-serif] font-semibold text-[14.5px] leading-tight text-[#0d0f16]">
                  {s.title}
                </span>
                <span
                  className="grid size-7 shrink-0 place-items-center rounded-full border border-[#e6e8ee] text-[16px] font-normal leading-none text-[#2242d6] transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="px-4 pb-4 pl-11 font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[1.55] text-[#5a606e]">
                {s.text}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ===== 02 Архитектура ===== */}
      <section id="s-contours" className="scroll-mt-16 px-5 pt-10">
        <SectionLabel>02 / АРХИТЕКТУРА</SectionLabel>
        <h2 className="mt-2 font-['IBM_Plex_Sans',sans-serif] font-bold text-[22px] leading-tight tracking-[-0.3px] text-[#0d0f16]">
          Три взаимосвязанных контура
        </h2>
        <div className="mt-4 flex flex-col gap-3">
          {CONTOUR_CARDS.map((c) => {
            const t = tabData[c.key]
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => openContour(c.key)}
                className="flex min-h-[44px] flex-col gap-2.5 rounded-[12px] border border-[#e6e8ee] bg-white p-5 text-left transition-colors active:bg-[#f6f7fb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="rounded-[6px] bg-[#2242d6] px-2 py-0.5 font-['IBM_Plex_Mono',monospace] text-[12px] tracking-[0.5px] text-white">
                      {c.k}
                    </span>
                    <span className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[18px] leading-none text-[#0d0f16]">
                      {c.title}
                    </span>
                    {c.subtitle && (
                      <span className="font-['IBM_Plex_Sans',sans-serif] text-[13px] text-[#5a606e]">
                        ({c.subtitle})
                      </span>
                    )}
                  </div>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#e6e8ee] text-[#2242d6]">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4 fill-current"
                      aria-hidden
                    >
                      <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                    </svg>
                  </span>
                </div>
                <p className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[1.5] text-[#5a606e]">
                  {c.text}
                </p>
                <p className="font-['IBM_Plex_Mono',monospace] text-[11.5px] tracking-[0.5px] text-[#8990a0]">
                  {t.rows.length} РЕШЕНИЙ
                </p>
              </button>
            )
          })}
        </div>
      </section>

      {/* ===== 03 Продукты ===== */}
      <section id="s-products" className="scroll-mt-16 px-5 pt-10">
        <SectionLabel>03 / ПРОДУКТЫ</SectionLabel>
        <h2 className="mt-2 font-['IBM_Plex_Sans',sans-serif] font-bold text-[22px] leading-tight tracking-[-0.3px] text-[#0d0f16]">
          Реестр решений
        </h2>
        <div className="mt-4 overflow-hidden rounded-[12px] border border-[#0d0f16]">
          {/* Шапка таблицы */}
          <div className="grid grid-cols-[38px_minmax(0,1fr)_minmax(0,1.5fr)] bg-[#0d0f16]">
            <span className="px-3 py-3 font-['IBM_Plex_Mono',monospace] text-[10.5px] tracking-[0.6px] text-white">
              №
            </span>
            <span className="px-2 py-3 font-['IBM_Plex_Mono',monospace] text-[10.5px] tracking-[0.6px] text-white">
              РЕШЕНИЕ
            </span>
            <span className="px-3 py-3 font-['IBM_Plex_Mono',monospace] text-[10.5px] tracking-[0.6px] text-white">
              ЧТО ДЕЛАЕТ
            </span>
          </div>
          {/* Строки */}
          {REGISTRY.map((r, i) => {
            const p = productImages[r.key]
            const favId = `p:${r.key}`
            return (
              <div
                key={r.key}
                className={`flex items-stretch border-t border-[#e6e8ee] first:border-t-0 ${
                  i % 2 === 1 ? "bg-[#f6f7fb]" : "bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => openProduct(r.key)}
                  aria-label={`${r.title} — открыть картинку`}
                  className="grid min-h-[64px] min-w-0 flex-1 grid-cols-[38px_minmax(0,1fr)_minmax(0,1.5fr)] items-start text-left transition-colors active:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2242d6]"
                >
                  <span className="px-3 pt-4 font-['IBM_Plex_Mono',monospace] text-[13px] text-[#2242d6] tabular-nums">
                    {r.num}
                  </span>
                  <span className="flex flex-col gap-1.5 px-2 pb-4 pt-4">
                    <span className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[14px] leading-[1.25] text-[#0d0f16]">
                      {r.title}
                    </span>
                    <span className="font-['IBM_Plex_Mono',monospace] text-[10.5px] tracking-[0.4px] text-[#5a606e]">
                      {r.feature}
                    </span>
                  </span>
                  <span className="flex items-start gap-2 px-3 pb-4 pt-4">
                    <span className="min-w-0 font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[1.45] text-[#3a4050]">
                      {r.does}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      className="mt-0.5 size-4 shrink-0 fill-[#2242d6]"
                      aria-hidden
                    >
                      <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                    </svg>
                  </span>
                </button>
                <div className="flex items-center pr-1.5">
                  <HeartButton
                    active={isFav(favId)}
                    onClick={() =>
                      toggleFav({
                        id: favId,
                        title: r.title,
                        context: `Продукт · ${r.num}`,
                        description: p.description,
                        image: p.image,
                      })
                    }
                  />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ===== 04 Инфографика ===== */}
      <section id="s-vision" className="scroll-mt-16 px-5 pt-10">
        <SectionLabel>04 / ИНФОГРАФИКА</SectionLabel>
        <h2 className="mt-2 font-['IBM_Plex_Sans',sans-serif] font-bold text-[22px] leading-tight tracking-[-0.3px] text-[#0d0f16]">
          Философия &laquo;Укрощения хаоса&raquo;
        </h2>
        <p className="mt-3 font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[1.6] text-[#3a4050]">
          {INFOGRAPHIC_TEXT}
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {([
            {
              src: imgBefore,
              label: "Было",
              alt: "Инфографика до трансформации: неструктурированные данные",
              description:
                "Хаос неструктурированных данных до обработки платформой.",
            },
            {
              src: imgAfter,
              label: "Стало",
              alt: "Инфографика после трансформации: чистая визуальная структура",
              description:
                "Кристально чистая визуальная структура после анализа Governance.kz.",
            },
          ] as const).map((img) => (
            <button
              key={img.label}
              type="button"
              onClick={() =>
                openImage({
                  title: img.label === "Было" ? "Было (до)" : "Стало (после)",
                  image: img.src,
                  description: img.description,
                })
              }
              aria-label={`${img.label} — открыть на весь экран`}
              className="group flex flex-col gap-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6] rounded-[12px]"
            >
              <span className="block overflow-hidden rounded-[12px] border border-[#dbe2ec]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="block aspect-[4/3] w-full object-cover transition-transform duration-300 group-active:scale-[1.04]"
                  loading="lazy"
                />
              </span>
              <span className="flex items-center gap-1.5">
                <span className="rounded-[6px] bg-[#2242d6] px-2.5 py-0.5 font-['IBM_Plex_Sans',sans-serif] font-bold text-[11.5px] text-white">
                  {img.label}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="size-3.5 fill-none stroke-[#8990a0]"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ===== 05–08 Видение ===== */}
      {VISION_BLOCKS.map((b) => (
        <section key={b.num} className="px-5 pt-10">
          <div className="flex flex-col gap-3 rounded-[14px] border border-[#e6e8ee] bg-white p-5">
            <div className="flex items-baseline gap-3">
              <span className="font-['IBM_Plex_Mono',monospace] text-[13px] text-[#2242d6] tabular-nums">
                {b.num}
              </span>
              <span className="font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[1.2px] text-[#2242d6]">
                {b.label}
              </span>
            </div>
            <h2 className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[19px] leading-[1.25] tracking-[-0.2px] text-[#0d0f16]">
              {b.title}
            </h2>
            {b.quote && (
              <blockquote className="border-l-2 border-[#2242d6] pl-3.5 font-['IBM_Plex_Sans',sans-serif] text-[15px] leading-[1.5] text-[#3a4050]">
                {b.quote}
              </blockquote>
            )}
            {b.image && (
              <button
                type="button"
                onClick={() =>
                  openImage({
                    title: `${b.num} · ${b.title}`,
                    image: b.image!,
                    description: b.imageDescription ?? "",
                  })
                }
                aria-label={`Открыть графику — ${b.title}`}
                className="group relative block w-full overflow-hidden rounded-[12px] border border-[#e6e8ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
              >
                <img
                  src={b.image}
                  alt={b.title}
                  className="block w-full object-contain transition-transform duration-300 group-active:scale-[1.03]"
                  loading="lazy"
                />
              </button>
            )}
            <ul className="flex flex-col gap-2.5">
              {b.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[1.55] text-[#3a4050]"
                >
                  <span
                    className="mt-[7px] size-[5px] shrink-0 rounded-full bg-[#2242d6]"
                    aria-hidden
                  />
                  {p}
                </li>
              ))}
            </ul>
            {b.video && (
              <button
                type="button"
                onClick={() => openVideo(b.video!, b.title)}
                className="mt-1 flex min-h-[44px] w-fit items-center justify-center gap-2.5 rounded-full border border-[#e6e8ee] px-5 font-['IBM_Plex_Sans',sans-serif] font-semibold text-[14px] text-[#0d0f16] active:bg-[#f6f7fb]"
              >
                <span className="grid size-7 place-items-center rounded-full bg-[#2242d6] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-0.5 size-3.5 fill-current"
                    aria-hidden
                  >
                    <path d="M8 5.14v13.72L19 12 8 5.14z" />
                  </svg>
                </span>
                Смотреть видео
              </button>
            )}
          </div>
        </section>
      ))}

      {/* ===== 09 Принципы ===== */}
      <section className="px-5 pt-10">
        <div className="flex flex-col gap-3 rounded-[14px] border border-[#e6e8ee] bg-white p-5">
          <div className="flex items-baseline gap-3">
            <span className="font-['IBM_Plex_Mono',monospace] text-[13px] text-[#2242d6] tabular-nums">
              09
            </span>
            <span className="font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[1.2px] text-[#2242d6]">
              БЕЗОПАСНОСТЬ И ДОВЕРИЕ
            </span>
          </div>
          <h2 className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[19px] leading-[1.25] tracking-[-0.2px] text-[#0d0f16]">
            Безопасность и доверие
          </h2>
          <button
            type="button"
            onClick={() =>
              openImage({
                title: "09 · Безопасность и доверие",
                image: "/graphics/security.png",
                description:
                  "Human-in-the-loop, замкнутый контур, защита данных по законодательству РК, межведомственность и прозрачность процессов.",
              })
            }
            aria-label="Открыть графику — Безопасность и доверие"
            className="group block overflow-hidden rounded-[12px] border border-[#e6e8ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
          >
            <img
              src="/graphics/security.png"
              alt="Безопасность и доверие: принципы платформы"
              className="block w-full object-contain transition-transform duration-300 group-active:scale-[1.03]"
              loading="lazy"
            />
          </button>
          <div className="flex flex-col divide-y divide-[#e6e8ee]">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="flex flex-col gap-1 py-4">
                <span className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[15.5px] text-[#0d0f16]">
                  {p.title}
                </span>
                <span className="font-['IBM_Plex_Sans',sans-serif] text-[13.5px] leading-[1.5] text-[#5a606e]">
                  {p.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Контакт ===== */}
      <section id="s-contact" className="scroll-mt-16 pt-10">
        <div className="bg-[#0d0f16] px-5 pb-8 pt-7">
          <p className="font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[1.2px] text-[#8fa6ff]">
            КОНТАКТ
          </p>
          <h2 className="mt-3 font-['IBM_Plex_Sans',sans-serif] font-bold text-[26px] leading-[1.15] tracking-[-0.5px] text-white">
            Готовы показать модель на ваших данных
          </h2>
          <p className="mt-4 font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[1.6] text-white/60">
            Оставьте заявку на встречу с командой Governance.kz. Мы свяжемся с
            вами в ближайшее время и подготовим план цифровой трансформации.
          </p>

          {status === "sent" ? (
            <div className="mt-6 flex flex-col items-center gap-2 rounded-[14px] border border-white/10 bg-white/[0.04] px-6 py-7 text-center">
              <span className="font-['IBM_Plex_Sans',sans-serif] font-bold text-[17px] text-white">
                Заявка принята
              </span>
              <span className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[1.6] text-white/60">
                Спасибо! Мы свяжемся с вами в ближайшее время.
              </span>
            </div>
          ) : (
            <form
              className="mt-6 flex flex-col gap-4"
              onSubmit={async (e) => {
                e.preventDefault()
                setStatus("sending")
                try {
                  await sendApplication({
                    name: name.trim() || undefined,
                    phone: phone.trim() || undefined,
                    message: question.trim() || undefined,
                  })
                  setStatus("sent")
                } catch {
                  setStatus("error")
                }
              }}
            >
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как к вам обращаться"
                className={inputClass}
              />
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Телефон"
                className={inputClass}
              />
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={3}
                placeholder="Ваш вопрос / тема встречи"
                className={`${inputClass} min-h-[88px] resize-none`}
              />
              <TouchButton type="submit" variant="primary">
                {status === "sending" ? "Отправляем…" : "Отправить заявку →"}
              </TouchButton>
              {status === "error" && (
                <p className="text-center font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[1.6] text-[#ff9d9d]">
                  Не удалось отправить заявку. Попробуйте ещё раз или напишите
                  на {CONTACT_EMAIL}
                </p>
              )}
              <p className="font-['IBM_Plex_Mono',monospace] text-[11px] tracking-[0.6px] text-white/40">
                Заявка придёт на {CONTACT_EMAIL}
              </p>
            </form>
          )}
        </div>

        {/* Поделиться */}
        <div className="px-5 py-6">
          <TouchButton variant="outline" onClick={share}>
            <span className="flex items-center gap-2.5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0d0f16"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-[18px]"
                aria-hidden
              >
                <path d="M18 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM6 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM18 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM8.2 10.8l7.6-4.1M8.2 13.2l7.6 4.1" />
              </svg>
              Поделиться приложением
            </span>
          </TouchButton>
        </div>

        {/* Футер */}
        <div className="flex flex-col gap-1 px-5 pb-4">
          <span className="font-['IBM_Plex_Mono',monospace] text-[11.5px] text-[#8990a0]">
            GOVERNANCE.KZ
          </span>
          <span className="font-['IBM_Plex_Mono',monospace] text-[11.5px] text-[#8990a0]">
            ЛАБОРАТОРИЯ ИИ · КАЗАХСТАН · 2026
          </span>
        </div>
      </section>
    </div>
  )
}
