import React, { useEffect, useRef, useState } from "react"
import imgBrain from "./024996798644ee39e17d62182850eebdd0609893.png"
import imgAiSim from "./ai-sim.png"
import imgSimSlide1 from "./sim-slide-1.png"
import imgSimSlide2 from "./sim-slide-2.png"
import imgSimSlide3 from "./sim-slide-3.png"
import imgSimSlide4 from "./sim-slide-4.png"
import imgSimSlide5 from "./sim-slide-5.png"
import imgSimSlide6 from "./sim-slide-6.png"
import imgAfter from "./after.png"
import imgBefore from "./before.png"
import imgSchemeSteps19 from "./scheme-steps-1-9.png"
import imgSchemeSteps1017 from "./scheme-steps-10-17.png"
import imgImage55 from "./762e3da223b722c4708edaa513edb7fb81d065dc.png"
import imgImage56 from "./c07407db45f5b55ba113edc2d3987e4a10064c6c.png"
import imgAfterDark from "./dark/after.webp"
import imgBeforeDark from "./dark/before.webp"
import imgStrategyDark from "./dark/strategy.webp"
import imgVisualDark from "./dark/visual.webp"
import imgProductSmartHr from "./smart-hr.png"
import imgProductOnlineAssessment from "./online-assessment.png"
import imgProductAssistant from "./assistant.png"
import imgProductSovereignty from "./sovereignty.png"

import imgSolutionFunctionalAnalysis from "./functional-analysis.png"
import imgSolutionGovFunctionsAnalytics from "./gov-functions-analytics.png"
import imgSolutionDigitalTwin from "./digital-twin.png"
import imgSolutionGovServicesAnalytics from "./gov-services-analytics.png"
import imgSolutionAiRecruitment from "./ai-recruitment.png"
import imgSolutionCivilServiceSelection from "./civil-service-selection.png"
import imgSolutionAiManagementAdvisor from "./ai-management-advisor.png"
import imgSolutionEkyzmetAnalytics from "./ekyzmet-analytics.png"
import imgSolutionBotAssistants from "./bot-assistants.png"
import imgSolutionIndustryBank from "./industry-bank.png"
import imgSolutionAnticorruptionMonitoring from "./anticorruption-monitoring.png"
import imgSolutionEksEnbekReconciliation from "./eks-enbek-reconciliation.png"
import { sendApplication } from "../src/lib/sendApplication"

import imgTabDiagnostics from "./tab-diagnostics.png"
import imgTabCoordination from "./tab-coordination.png"

import { VideoModal } from "../src/simulator/VideoModal"
import AISimulatorPage from "../src/simulator/AISimulatorPage"
import SyntheticResearchSection from "../src/synthetic-research/SyntheticResearchSection"
import { useGeneralReveal } from "../src/general/useGeneralReveal"
import { RegistryTable } from "../src/synthetic-research/ModelingPage"
import { ImageModal } from "../src/synthetic-research/ImageModal"
import BackToTopButton from "../src/components/BackToTopButton"
import ThemeToggle from "../src/components/ThemeToggle"
import "../src/components/siteHeader.css"
import HomePage from "../src/home/HomePage"
import { useSiteTheme, type SiteTheme } from "../src/lib/siteTheme"

export type ProductImageKey = "smarthr" | "assessment" | "assistant" | "sovereignty"

export const productImages: Record<ProductImageKey, {
  index: string
  title: string
  image: string
  description: string
}> = {
  smarthr: {
    index: "01",
    title: "Smart HR",
    image: imgProductSmartHr,
    description:
      "Кадровые профили, подбор и аналитика кандидатов в едином контуре данных.",
  },
  assessment: {
    index: "02",
    title: "AI Assessment",
    image: imgProductOnlineAssessment,
    description:
      "Поведенческий анализ, компьютерное зрение и аудиоанализ для оценки кандидатов.",
  },
  assistant: {
    index: "03",
    title: "Помощник руководителя",
    image: imgProductAssistant,
    description:
      "Управленческий сигнал, координация задач и приоритизация действий.",
  },
  sovereignty: {
    index: "04",
    title: "Цифровой суверенитет",
    image: imgProductSovereignty,
    description:
      "Закрытый контур, локальная инфраструктура и защита данных национального уровня.",
  },
}

export type TabKey = "recruitment" | "modeling" | "analytics"

const pageHashes = {
  general: "#general",
  recruitment: "#diagnostics",
  analytics: "#coordination",
  modeling: "#modeling",
} as const satisfies Record<TabKey | "general", string>

type PageKey = keyof typeof pageHashes

const pageKeys = Object.keys(pageHashes) as PageKey[]

function getActivePage(): PageKey | null {
  if (typeof window === "undefined") return null
  const { hash } = window.location
  if (hash === "#contours") return "general"
  return pageKeys.find((key) => pageHashes[key] === hash) ?? null
}

type TabRow = {
  num: string
  name: string
  does: string
  feature: string
  image?: string
}

type TabData = {
  index: string
  label: string
  title: string
  description: string
  image?: string
  video?: string
  videoGradient?: [string, string, string]
  videoGlow?: string
  rows: TabRow[]
}

const slideImgBust = import.meta.env.DEV ? `?t=${Date.now()}` : ""
const slideImg = (src: string) => `${src}${slideImgBust}`

/* Модули моделирования — шесть сценариев */
export const modelingSlides: TabRow[] = [
  {
    num: "01",
    name: "Потребительский спрос и рост бренда",
    does: "Синтетический аналитик оценивает спрос по брендам и торговым зонам: свой магазин против конкурентов",
    feature: "Синтетические профили",
    image: slideImg(imgSimSlide1),
  },
  {
    num: "02",
    name: "Партия доедет — и успеет продаться",
    does: "Моделирование поставок охлаждённой продукции на карте Алматы: завод → склад → магазины, маршруты и сроки продажи партии",
    feature: "Карта поставок",
    image: slideImg(imgSimSlide2),
  },
  {
    num: "03",
    name: "Продукты и офферы",
    does: "What-if сценарии для портфеля продуктов: изменение цен на сырьё, акции конкурентов, рост спроса, выход нового игрока",
    feature: "Сценарии what-if",
    image: slideImg(imgSimSlide3),
  },
  {
    num: "04",
    name: "Продовольственная экосистема",
    does: "Срез продовольственного рынка: объём, производство, привлечённый капитал и охват населения по регионам",
    feature: "Все регионы",
    image: slideImg(imgSimSlide4),
  },
  {
    num: "05",
    name: "Контроль исполнения документов",
    does: "Дашборды AI-Советника: приоритеты руководителя, движение документов и контроль сроков без ручной аналитики",
    feature: "AI-Советник",
    image: slideImg(imgSimSlide5),
  },
  {
    num: "06",
    name: "LLM говорит с LLM",
    does: "Переговоры закупщика и поставщика ведут ИИ-агенты: запрос скидки, расчёт и интерпретация ответа",
    feature: "Агент ↔ агент",
    image: slideImg(imgSimSlide6),
  },
]

export const tabData: Record<TabKey, TabData> = {
  recruitment: {
    index: "01",
    label: "Диагностика",
    title: "Диагностика",
    description:
      "ИИ анализирует функции, кадры и услуги госорганов в единой логике данных: находит дублирования полномочий, скрытые барьеры и аномалии. Диагностика показывает, где процессы ломаются и почему.",
    image: imgBrain,
    video: "/videos/diagnostics.mov",
    videoGradient: ["#0d9488", "#14b8a6", "#22d3ee"],
    videoGlow: "rgba(20,184,166,0.55)",
    rows: [
      {
        num: "01",
        name: "Функциональный анализ",
        does: "Платформа выявляет коллизии между ведомствами, дублирование полномочий и несоответствие функций декларируемой миссии",
        feature: "Передача функций частному сектору",
        image: imgSolutionFunctionalAnalysis,
      },
      {
        num: "02",
        name: "Аналитика госфункций",
        does: "Карта сравнительного среза по госорганам: объём обращений, собственные и не родные функции, внешние связи",
        feature: "Переход от обзора к профилю в один клик",
        image: imgSolutionGovFunctionsAnalytics,
      },
      {
        num: "03",
        name: "Рекрутинг с ИИ",
        does: "AI-платформа подбора кадровного резерва из 50 000+ профилей по опыту, компетенциям, рангу и параметрам",
        feature: "50 000+ профилей",
        image: imgSolutionAiRecruitment,
      },
      {
        num: "04",
        name: "Аналитика госуслуг",
        does: "Автоматизированный аудит реестра госуслуг и НПА: выявление неэффективных процедур и ошибок в нормативке",
        feature: "Пошаговый план автоматизации",
        image: imgSolutionGovServicesAnalytics,
      },
      {
        num: "05",
        name: "Кадровая аналитика госслужащих",
        does: "Платформа анализа качества данных о сотрудниках государственных органов: демографические и профессиональные характеристики",
        feature: "Повышение точности метрик",
        image: imgSolutionEkyzmetAnalytics,
      },
      {
        num: "06",
        name: "Антикоррупционный мониторинг",
        does: "Сквозной анализ данных для выявления скрытой аффилированности, мониторинга фискальной дисциплины и оценки рисков",
        feature: "Предиктивная оценка рисков",
        image: imgSolutionAnticorruptionMonitoring,
      },
      {
        num: "07",
        name: "Сверка баз данных",
        does: "Интеллектуальный аудит расхождений между кадровой системой с ручным вводом и системой с автообновлением, с проверкой идентификаторов сотрудников",
        feature: "Аналитика качества данных",
        image: imgSolutionEksEnbekReconciliation,
      },
    ],
  },
  analytics: {
    index: "02",
    label: "Координация",
    title: "Координация",
    description:
      "Помощник руководителя агрегирует ЭДО, задачи и метрики в чистый управленческий сигнал. Координация задач и умные боты работают прямо в мессенджерах сотрудников.",
    image: imgTabCoordination,
    video: "/videos/coordination.mov",
    videoGradient: ["#1a35ad", "#2242d6", "#3b82f6"],
    videoGlow: "rgba(34,66,214,0.55)",
    rows: [
      {
        num: "01",
        name: "Цифровой двойник",
        does: "Моделирование перераспределения функций и сотрудников между ведомствами с мгновенным расчётом нагрузки и баланса",
        feature: "Drag-and-drop интерфейс",
        image: imgSolutionDigitalTwin,
      },
      {
        num: "02",
        name: "Отбор на госслужбу с ИИ",
        does: "Оценка кандидатов через анализ видео, голосовых ответов и текста по 15 компетенциям: логика, коммуникация, устойчивость",
        feature: "15 компетенций",
        image: imgSolutionCivilServiceSelection,
      },
      {
        num: "03",
        name: "ИИ-советник по управлению",
        does: "Единый интеллектуальный центр доступа к знаниям организации на данных систем документооборота и обращений граждан — вопросы на естественном языке",
        feature: "Интерактивные панели и упреждающие сигналы",
        image: imgSolutionAiManagementAdvisor,
      },
      {
        num: "04",
        name: "Банк отраслевых направлений",
        does: "Единая база данных по всем госслужащим Казахстана: стаж, прошлые места работы, быстрый подбор кандидата на вакансию",
        feature: "Поиск по всем регионам",
        image: imgSolutionIndustryBank,
      },
      {
        num: "05",
        name: "Разработка ботов-ассистентов",
        does: "Telegram и WhatsApp-боты на платформе ИИ для ответов на вопросы по заданной теме в нескольких группах",
        feature: "Изолированные сессии",
        image: imgSolutionBotAssistants,
      },
    ],
  },
  modeling: {
    index: "03",
    label: "Моделирование",
    title: "Моделирование",
    description:
      "Проверить варианты до внедрения: исследовать реакции аудитории, сравнить сценарии и рассчитать поставки с учётом сроков годности.",
    image: imgAiSim,
    rows: modelingSlides,
  },
}

function onRowKeyDown(onActivate: () => void) {
  return (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      onActivate()
    }
  }
}

function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="w-full"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity .55s cubic-bezier(0.2,0.8,0.2,1)",
      }}
    >
      {children}
    </div>
  )
}

function SolutionsRegistry({
  rows,
  onSelect,
}: {
  rows: TabRow[]
  onSelect: (row: TabRow) => void
}) {
  return (
    <div className="relative w-full overflow-x-auto">
      <div className="relative min-w-[760px]">
        <div
          aria-hidden
          className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none z-10"
        />
        <div className="content-stretch flex flex-col items-start pb-px pt-px relative size-full">
          {/* Header */}
          <div className="bg-[#0d0f16] grid grid-cols-[60px_minmax(0,1.10fr)_minmax(0,2fr)_minmax(0,1.10fr)] grid-rows-[39px] h-[39px] relative shrink-0 w-full">
            {["№", "РЕШЕНИЕ", "ЧТО ДЕЛАЕТ", "ОСОБЕННОСТЬ"].map((h) => (
              <div
                key={h}
                className="justify-self-stretch relative row-1 self-start shrink-0"
              >
                <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
                  <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white tracking-[0.69px] whitespace-nowrap">
                    <p className="leading-[normal]">{h}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Rows */}
          {rows.map((row, i) => {
            const clickable = Boolean(row.image)
            return (
              <div
                key={row.num}
                onClick={clickable ? () => onSelect(row) : undefined}
                onKeyDown={
                  clickable ? onRowKeyDown(() => onSelect(row)) : undefined
                }
                role={clickable ? "button" : undefined}
                tabIndex={clickable ? 0 : undefined}
                className={`group grid grid-cols-[60px_minmax(0,1.10fr)_minmax(0,2fr)_minmax(0,1.10fr)] grid-rows-[auto] min-h-[64px] pt-px relative shrink-0 w-full transition-colors ${
                  clickable
                    ? "cursor-pointer hover:bg-[#eef0f5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#2242d6]"
                    : ""
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
    </div>
  )
}

const directionCards: {
  key: TabKey
  num: string
  title: string
  summary: string
  text: string
  items: string[]
}[] = [
  {
    key: "recruitment",
    num: "01",
    title: "Обучение",
    summary: "Освоить ИИ на рабочих задачах.",
    text: "Научим команду применять ИИ в повседневной работе: готовить черновики, разбирать документы и анализировать таблицы.",
    items: [
      "Постановка задач для ИИ",
      "Проверка ответов ИИ",
      "Безопасная работа с данными",
    ],
  },
  {
    key: "analytics",
    num: "02",
    title: "Консультации",
    summary: "Разобрать процесс и выбрать, с чего начать.",
    text: "Разберём, где ИИ может сократить ручную работу, а где достаточно изменить сам процесс. Предложим, с какой задачи начать.",
    items: ["Разбор процессов", "Оценка данных и ограничений", "План пилота"],
  },
  {
    key: "modeling",
    num: "03",
    title: "Внедрение ИИ",
    summary: "Проверить решение на пилоте и встроить его в работу.",
    text: "Начнём с одного процесса и заранее договоримся, как измерить результат. Если пилот покажет пользу, подключим решение к вашим системам.",
    items: [
      "Прототип под вашу задачу",
      "Пилот в закрытом контуре",
      "Интеграция и запуск",
    ],
  },
]

function ContoursSection({
  onTabClick,
}: {
  onTabClick: (key: TabKey) => void
}) {
  return (
    <section id="contours" className="relative w-full">
      <div className="content-stretch flex flex-col items-start pb-[56px] pt-[52px] px-[20px] sm:px-[28px] relative size-full w-full max-w-[1170px] mx-auto">
        <div className="font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px] text-gov-accent">
          ВЫБРАТЬ ЗАДАЧУ
        </div>
        <h1
          className="mt-[14px] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-gov-ink text-[30px] tracking-[-0.3px] w-full"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Понять. Организовать. Проверить.
        </h1>

        <div className="mt-[28px] grid w-full grid-cols-1 gap-[20px] md:grid-cols-3">
          {directionCards.map((card) => (
            <article
              key={card.key}
              data-general-reveal=""
              className="flex flex-col rounded-[16px] border border-gov-line bg-gov-panel p-[20px] transition-colors hover:border-gov-outline"
            >
              <span className="font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[13px] tabular-nums text-gov-accent">
                {card.num}
              </span>
              <span
                className="mt-[10px] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[20px] text-gov-ink"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {card.title}
              </span>
              <span className="mt-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[14px] leading-[1.6] text-gov-muted">
                {card.text}
              </span>
              <span className="mt-[16px] flex flex-col gap-[10px]">
                {card.items.map((item) => (
                  <span
                    key={item}
                    className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[14px] text-gov-ink"
                  >
                    {item}
                  </span>
                ))}
              </span>
              <span className="mt-auto pt-[20px]">
                <button
                  type="button"
                  onClick={() => onTabClick(card.key)}
                  className="block w-full whitespace-nowrap rounded-[8px] border border-gov-outline bg-gov-panel px-[8px] py-[12px] text-center font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[13px] text-gov-ink transition-colors hover:border-gov-action hover:bg-gov-action hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gov-accent cursor-pointer"
                >
                  Разобрать направление
                </button>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Container5() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[13.5px] whitespace-nowrap transition-colors hover:text-[#2242d6]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Контуры</p>
      </div>
    </div>
  )
}

function Container6() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[13.5px] whitespace-nowrap transition-colors hover:text-[#2242d6]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Продукты</p>
      </div>
    </div>
  )
}

function Container7() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[13.5px] whitespace-nowrap transition-colors hover:text-[#2242d6]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Видение</p>
      </div>
    </div>
  )
}

function Container8() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[13.5px] whitespace-nowrap transition-colors hover:text-[#2242d6]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Принципы</p>
      </div>
    </div>
  )
}

function Border() {
  return (
    <div
      className="content-stretch flex flex-col items-start px-[19px] py-[10px] relative shrink-0 cursor-pointer transition-colors hover:bg-[#0d0f16] group"
      data-name="Border"
    >
      <div
        aria-hidden
        className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none group-hover:border-[#0d0f16]"
      />
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[13px] whitespace-nowrap transition-colors group-hover:text-white"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Записаться на встречу →</p>
      </div>
    </div>
  )
}

function SiteHeader({
  activePage,
  onHomeClick,
  language,
  onLanguageChange,
  theme,
  onThemeToggle,
}: {
  activePage: PageKey | null
  onHomeClick: () => void
  language: Language
  onLanguageChange: (lang: Language) => void
  theme: SiteTheme
  onThemeToggle: () => void
}) {
  return (
    <header className="site-header">
      <div className="site-shell site-header__bar">
        <button
          type="button"
          className="site-header__brand"
          onClick={onHomeClick}
          aria-label="Governance.kz — на главную"
        >
          <span aria-hidden="true" className="site-header__mark" />
          GOVERNANCE.KZ
        </button>
        <nav className="site-header__nav" aria-label="Основная навигация">
          {pageKeys.map((key) => (
            <a
              key={key}
              href={pageHashes[key]}
              aria-current={key === activePage ? "page" : undefined}
            >
              {key === "general" ? "Общее" : tabData[key].label}
            </a>
          ))}
        </nav>
        <div className="site-header__tools">
          <LanguageSwitcher language={language} onChange={onLanguageChange} />
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        </div>
      </div>
    </header>
  )
}

function Container9() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">ИНФРАСТРУКТУРА УПРАВЛЕНИЯ</p>
      </div>
    </div>
  )
}

function Container11() {
  return (
    <div
      className="col-0 content-stretch flex flex-col items-start max-w-[620px] relative row-0 self-end shrink-0"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-black"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[28.8px] mb-0">
          Governance.kz — прикладной центр цифровой трансформации
        </p>
        <p className="leading-[28.8px] mb-0">
          управления. ИИ анализирует функции, кадры, услуги и нагрузку в
        </p>
        <p className="leading-[28.8px] mb-0">
          единой логике данных: находит дублирования, барьеры и аномалии —
        </p>
        <p className="leading-[28.8px]">а решения остаются за людьми.</p>
      </div>
    </div>
  )
}

const meetingEmail = "altynbekus@gmail.com"

function MeetingModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [question, setQuestion] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const send = async () => {
    if (!name.trim() || !phone.trim()) return
    setStatus("sending")
    try {
      await sendApplication(
        {
          name: name.trim(),
          phone: phone.trim(),
          message: question.trim() || undefined,
        },
        meetingEmail,
      )
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full rounded-[10px] border border-gov-outline bg-gov-inset px-[16px] py-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] text-gov-ink outline-none transition-colors focus:border-gov-accent focus:bg-gov-panel focus:ring-1 focus:ring-gov-accent placeholder:text-gov-muted"

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0f16]/60 p-4 backdrop-blur-[3px] animate-[imgmodal-fade_.18s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Записаться на встречу"
    >
      <div
        className="relative max-h-[calc(100dvh-2rem)] w-full max-w-[560px] overflow-y-auto rounded-[24px] bg-gov-panel p-6 shadow-[0_40px_80px_rgba(13,15,22,0.35)] animate-[imgmodal-pop_.24s_cubic-bezier(0.2,0.8,0.2,1)] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-5 top-5 rounded text-[26px] leading-none text-gov-muted transition-colors hover:text-gov-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gov-accent cursor-pointer sm:right-6"
        >
          ×
        </button>

        <h2
          className="pr-6 font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[26px] leading-[1.15] tracking-[-0.26px] text-gov-ink"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Записаться на встречу
        </h2>
        <p className="mt-[14px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] leading-[1.5] text-gov-muted">
          Опишите ваш вопрос — и мы свяжемся с вами.
        </p>
        <p className="mt-[6px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] leading-[1.5] text-gov-muted">
          Заявка будет отправлена на{" "}
          <a
            href={`mailto:${meetingEmail}`}
            className="rounded-sm text-gov-accent underline underline-offset-2 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gov-accent"
          >
            {meetingEmail}
          </a>
          .
        </p>

        {status === "sent" ? (
          <div className="mt-[26px] flex flex-col items-center gap-[8px] rounded-[14px] border border-gov-success-line bg-gov-success-panel px-[22px] py-[18px] text-center text-gov-success">
            <span className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[16px]">
              Заявка отправлена
            </span>
            <span className="font-['IBM_Plex_Sans:Regular',sans-serif] text-[13px] leading-[1.5]">
              Спасибо! Мы свяжемся с вами в ближайшее время.
            </span>
          </div>
        ) : (
          <>
            <div className="mt-[22px] flex flex-col gap-[14px]">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Как к вам обращаться"
                className={inputClass}
              />
              <input
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
                className={`${inputClass} resize-none`}
              />
            </div>
            <button
              type="button"
              onClick={send}
              disabled={status === "sending" || !name.trim() || !phone.trim()}
              className="mt-[26px] flex w-full cursor-pointer items-center justify-center gap-[8px] rounded-full bg-gov-action px-[22px] py-[14px] font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[15px] whitespace-nowrap text-white transition-colors hover:bg-gov-action-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gov-accent disabled:cursor-not-allowed disabled:bg-gov-hover disabled:text-gov-muted"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4 fill-current"
                aria-hidden
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 5-8-5V6l8 5 8-5v2.24z" />
              </svg>
              {status === "sending" ? "Отправляем…" : "Отправить заявку"}
            </button>
            {status === "error" && (
              <p
                role="alert"
                className="mt-[10px] text-center font-['IBM_Plex_Sans:Regular',sans-serif] text-[13px] leading-[1.5] text-gov-error"
              >
                Не удалось отправить заявку. Попробуйте ещё раз.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}

function InfoModal({
  title,
  description,
  onClose,
}: {
  title: string
  description: React.ReactNode
  onClose: () => void
}) {
  const panel = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = panel.current
    if (!dialog) return
    dialog.showModal()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <dialog
      ref={panel}
      className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-2xl overflow-y-auto rounded-[24px] bg-gov-panel p-6 text-gov-ink shadow-[0_40px_80px_rgba(0,0,0,0.18)] backdrop:bg-[#0d0f16]/60 sm:p-8"
      aria-label={title}
      onClose={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return
        const { left, right, top, bottom } =
          event.currentTarget.getBoundingClientRect()
        if (
          event.clientX < left ||
          event.clientX > right ||
          event.clientY < top ||
          event.clientY > bottom
        ) {
          event.currentTarget.close()
        }
      }}
    >
      <button
        type="button"
        onClick={() => panel.current?.close()}
        aria-label="Закрыть"
        className="absolute right-5 top-5 cursor-pointer rounded text-[24px] font-bold text-gov-muted hover:text-gov-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gov-accent"
      >
        ×
      </button>
      <h2 className="mb-4 pr-6 text-2xl font-semibold">{title}</h2>
      <div className="space-y-4 text-sm leading-6 text-gov-body">
        {description}
      </div>
    </dialog>
  )
}

function HorizontalBorder2() {
  return (
    <div
      className="content-stretch flex items-start pb-[2px] relative shrink-0"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-[#b9c1e8] border-b-2 border-dashed inset-0 pointer-events-none"
      />
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[30px] whitespace-nowrap">
        <p className="leading-[normal]">0 000</p>
      </div>
    </div>
  )
}

function Container13() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.5px] text-black w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">профилей · Smart HR</p>
      </div>
    </div>
  )
}

function VerticalBorder() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="VerticalBorder">
      <div
        aria-hidden
        className="absolute border-[#e6e8ee] border-r border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] pr-[21px] py-[18px] relative size-full">
        <HorizontalBorder2 />
        <Container13 />
      </div>
    </div>
  )
}

function HorizontalBorder3() {
  return (
    <div
      className="content-stretch flex items-start pb-[2px] relative shrink-0"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-[#b9c1e8] border-b-2 border-dashed inset-0 pointer-events-none"
      />
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[30px] whitespace-nowrap">
        <p className="leading-[normal]">0 000</p>
      </div>
    </div>
  )
}

function Container14() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.5px] text-black w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">госуслуг проверено</p>
      </div>
    </div>
  )
}

function VerticalBorder1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="VerticalBorder">
      <div
        aria-hidden
        className="absolute border-[#e6e8ee] border-r border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] pr-[21px] py-[18px] relative size-full">
        <HorizontalBorder3 />
        <Container14 />
      </div>
    </div>
  )
}

function HorizontalBorder4() {
  return (
    <div
      className="content-stretch flex items-start pb-[2px] relative shrink-0"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-[#b9c1e8] border-b-2 border-dashed inset-0 pointer-events-none"
      />
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[30px] whitespace-nowrap">
        <p className="leading-[normal]">00</p>
      </div>
    </div>
  )
}

function Container15() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.5px] text-black w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">госорганов в пилоте</p>
      </div>
    </div>
  )
}

function VerticalBorder2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="VerticalBorder">
      <div
        aria-hidden
        className="absolute border-[#e6e8ee] border-r border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] pr-[21px] py-[18px] relative size-full">
        <HorizontalBorder4 />
        <Container15 />
      </div>
    </div>
  )
}

function HorizontalBorder5() {
  return (
    <div
      className="content-stretch flex items-start pb-[2px] relative shrink-0"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-[#b9c1e8] border-b-2 border-dashed inset-0 pointer-events-none"
      />
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[30px] whitespace-nowrap">
        <p className="leading-[normal]">+00%</p>
      </div>
    </div>
  )
}

function Container17() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.5px] text-black w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">эффективность управления</p>
      </div>
    </div>
  )
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
        <HorizontalBorder5 />
        <Container17 />
      </div>
    </div>
  )
}

function Border2() {
  return (
    <div
      className="content-stretch flex h-[103px] items-start justify-center p-px relative w-full"
      data-name="Border"
    >
      <div
        aria-hidden
        className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none"
      />
      <VerticalBorder />
      <VerticalBorder1 />
      <VerticalBorder2 />
      <Container16 />
    </div>
  )
}

function Container18() {
  return (
    <div
      className="content-stretch flex flex-col items-start mt-[14px] w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-full">
        <p className="leading-[normal]">{`// плейсхолдеры — подставить фактические показатели`}</p>
      </div>
    </div>
  )
}
function HomeLanding() {
  const [dialog, setDialog] = useState<"meeting" | "note" | null>(null)

  return (
    <>
      <HomePage
        directions={directionCards.map(({ title, summary }) => ({ title, summary }))}
        directionsHref={pageHashes.general}
        onMeetingClick={() => setDialog("meeting")}
        onNoteClick={() => setDialog("note")}
      />
      {dialog === "meeting" && <MeetingModal onClose={() => setDialog(null)} />}
      {dialog === "note" && (
        <InfoModal
          title="Аналитическая записка"
          onClose={() => setDialog(null)}
          description={
            <>
              <p>
                Аналитическая записка представляет ключевые выводы и советы по
                развитию управления.
              </p>
              <p>
                Она поможет понять текущие риски, возможности оптимизации и пути
                улучшения процессов.
              </p>
              <p>
                Документ включает краткий обзор модели, дорожную карту внедрения
                и ожидаемые результаты.
              </p>
            </>
          }
        />
      )}
    </>
  )
}

const teamStages = [
  {
    n: "01",
    phase: "Диагностика",
    role: "Аналитики управления",
    does: "Разбирают аппарат на функции и нагрузку — вскрывают дублирования и барьеры.",
    method: "функциональный анализ, регламенты против факта",
    artifact: "Карта функций и матрица дублирования",
  },
  {
    n: "02",
    phase: "Проектирование",
    role: "Проектировщики услуг",
    does: "Пересобирают услугу так, чтобы она приходила человеку до его обращения.",
    method: "проектирование от ситуации человека",
    artifact: "Целевой регламент и проактивная услуга",
  },
  {
    n: "03",
    phase: "Люди",
    role: "HR-эксперты",
    does: "Определяют, какие компетенции нужны новому процессу.",
    method: "профили компетенций, онлайн-ассессмент",
    artifact: "Модель компетенций и работающий отбор",
  },
  {
    n: "04",
    phase: "Инженерия",
    role: "Инженеры данных и ИИ",
    does: "Соединяют данные ведомств и запускают модели в закрытом контуре.",
    method: "онтологии, графовый анализ, LLM-контур",
    artifact: "Работающая система на ваших данных",
  },
] as const

const teamOwner = {
  n: "05",
  role: "Руководитель внедрения",
  does: "Ведёт пилот через все этапы — отвечает за срок и результат.",
  artifact: "Отчёт пилота и решение о масштабировании",
} as const

const teamSeal = [
  "Работаете напрямую с теми, кто делает",
  "Данные остаются в вашем контуре",
  "Решения остаются за людьми",
] as const

const teamMonoLabel = "font-['IBM_Plex_Mono:Regular',sans-serif] not-italic"

function TeamNode({ n }: { n: string }) {
  return (
    <span
      className={`${teamMonoLabel} grid size-[34px] shrink-0 place-items-center rounded-[8px] border-[1.5px] border-gov-outline bg-gov-panel text-[13px] tabular-nums text-gov-ink`}
    >
      {n}
    </span>
  )
}

function TeamPort({ direction }: { direction: "input" | "output" }) {
  const isInput = direction === "input"
  return (
    <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] leading-[1.3] font-semibold tracking-[0.02em] text-gov-ink sm:text-[17px]">
      <span className="font-bold text-gov-accent">
        {isInput ? "ВХОД" : "ВЫХОД"}
      </span>
      {isInput ? " · ВАША ЗАДАЧА" : " · РАБОЧИЙ РЕЗУЛЬТАТ"}
    </p>
  )
}

function TeamSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStarted(true)
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const step = (i: number) => ({
    opacity: started ? 1 : 0,
    transform: started ? "none" : "translateY(10px)",
    transition: `opacity .55s cubic-bezier(0.2,0.8,0.2,1) ${i * 90}ms, transform .55s cubic-bezier(0.2,0.8,0.2,1) ${i * 90}ms`,
  })

  return (
    <div
      className="relative w-full shrink-0 border-t border-gov-line bg-gov-canvas"
      data-name="HorizontalBorder"
    >
      <style>{`
        .team-rail { background-image: repeating-linear-gradient(to right, var(--gov-rail) 0 3px, transparent 3px 6px); }
        @keyframes team-rail-move { to { background-position-x: -6px; } }
        @media (prefers-reduced-motion: no-preference) {
          .team-rail { animation: team-rail-move 1.1s linear infinite; }
        }
      `}</style>
      <div className="content-stretch relative flex size-full w-full flex-col items-start gap-[8px] px-[20px] pb-[68px] pt-[66px] sm:px-[28px]">
        {/* label */}
        <div className="[word-break:break-word] flex w-full flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] tracking-[1.2px] text-gov-accent">
          <p className="leading-[normal]">КОМАНДА</p>
        </div>
        <h2
          className="w-full font-['IBM_Plex_Sans:Bold',sans-serif] text-[30px] font-bold leading-[1.1] tracking-[-0.3px] text-gov-ink"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Те, кто превращают сложное в рабочее
          <span className="text-gov-accent">.</span>
        </h2>
        <p
          className="mt-[6px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.55] text-gov-muted sm:text-[17px] xl:whitespace-nowrap"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Задача не переходит из кабинета в кабинет — она проходит по цепочке
          профилей: от диагностики аппарата до работающей системы.
        </p>

        {/* mechanism */}
        <div ref={ref} className="mt-[20px] flex w-full flex-col">
          {/* input port on narrow screens */}
          <div className="mb-[16px] lg:hidden">
            <TeamPort direction="input" />
          </div>

          {/* desktop track: rail with input/output labels */}
          <div className="mb-[16px] hidden items-center gap-[16px] lg:flex">
            <TeamPort direction="input" />
            <span aria-hidden className="team-rail h-[2px] flex-1" />
            <TeamPort direction="output" />
          </div>

          {/* stages */}
          <div className="relative">
            <span
              aria-hidden
              className="absolute -top-[6px] bottom-[8px] left-[16px] w-0 border-l border-dashed border-[color:var(--gov-rail)] lg:hidden"
            />
            <ol className="flex flex-col gap-[24px] lg:grid lg:grid-cols-4 lg:gap-[32px]">
              {teamStages.map((s, i) => (
                <li
                  key={s.n}
                  className="group relative ml-[48px] flex flex-col rounded-[12px] border border-gov-line bg-gov-panel p-[24px] transition-colors duration-200 hover:border-gov-outline lg:ml-0"
                  style={step(i + 1)}
                >
                  <span
                    aria-hidden
                    className="absolute -left-[48px] top-[14px] lg:hidden"
                  >
                    <TeamNode n={s.n} />
                  </span>
                  <div className="flex items-center gap-[10px]">
                    <TeamNode n={s.n} />
                    <h3
                      className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[18px] font-semibold leading-[1.25] text-gov-ink"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      {s.phase}
                    </h3>
                  </div>
                  <p
                    className="mt-[4px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[15px] font-medium leading-[1.35] text-gov-accent"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {s.role}
                  </p>
                  <p
                    className="mt-[10px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-gov-body"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {s.does}
                  </p>
                  <p
                    className={`${teamMonoLabel} mt-[12px] text-[11px] uppercase tracking-[1.2px] text-gov-muted`}
                  >
                    Метод
                  </p>
                  <p
                    className={`${teamMonoLabel} mt-[3px] text-[12px] leading-[1.4] text-gov-muted`}
                  >
                    {s.method}
                  </p>
                  <div className="mt-auto pt-[16px]">
                    <div className="border-t border-gov-line pt-[12px]">
                      <p
                        className={`${teamMonoLabel} text-[11px] uppercase tracking-[1.2px] text-gov-muted`}
                      >
                        Артефакт
                      </p>
                      <p className="mt-[4px] flex items-start gap-[8px]">
                        <span
                          aria-hidden
                          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[14px] font-semibold leading-[1.45] text-gov-accent"
                        >
                          →
                        </span>
                        <span
                          className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[14px] font-medium leading-[1.45] text-gov-ink"
                          style={{ fontVariationSettings: '"wdth" 100' }}
                        >
                          {s.artifact}
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* owner bar spanning all stages */}
          <div style={step(5)}>
            <div
              aria-hidden
              className="hidden h-[26px] w-full lg:grid lg:grid-cols-4 lg:gap-[32px]"
            >
              {teamStages.map((s) => (
                <span
                  key={s.n}
                  className="mx-auto w-0 border-l border-dashed border-[color:var(--gov-rail)]"
                />
              ))}
            </div>
            <div className="flex flex-col gap-[10px] rounded-[12px] border border-gov-line bg-gov-panel px-[20px] py-[16px] transition-colors duration-200 hover:border-gov-outline lg:flex-row lg:items-center lg:gap-[24px]">
              <div className="flex shrink-0 items-center gap-[12px]">
                <TeamNode n={teamOwner.n} />
                <h3
                  className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[18px] font-semibold leading-[1.25] text-gov-ink"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {teamOwner.role}
                </h3>
              </div>
              <p
                className="flex-1 font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-gov-muted"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {teamOwner.does}
              </p>
              <p className="shrink-0 lg:text-right">
                <span
                  className={`${teamMonoLabel} text-[11px] uppercase tracking-[1.2px] text-gov-muted`}
                >
                  Артефакт
                </span>
                <span
                  className="ml-[6px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[14px] font-medium leading-[1.45] text-gov-ink"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {teamOwner.artifact}
                </span>
              </p>
            </div>
          </div>

          {/* output port on narrow screens */}
          <div className="mt-[16px] lg:hidden">
            <TeamPort direction="output" />
          </div>
        </div>

        {/* seal */}
        <div className="mt-[24px] w-full" style={step(7)}>
          <ul className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-3">
            {teamSeal.map((s, i) => (
              <li
                key={s}
                className="flex items-baseline gap-[10px] rounded-[12px] border border-gov-line bg-gov-panel px-[20px] py-[18px]"
              >
                <span
                  className={`${teamMonoLabel} text-[11.5px] tabular-nums tracking-[1px] text-gov-accent`}
                >
                  0{i + 1}
                </span>
                <span className="text-[15px] font-medium leading-[1.45] text-gov-ink">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Container47() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px] text-gov-accent">
        БЫЛО → СТАЛО
      </div>
    </div>
  )
}

function Heading5() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-gov-ink text-[30px] tracking-[-0.3px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">
          Когда данные не складываются в картину
        </p>
      </div>
    </div>
  )
}

function Group4({ theme }: { theme: SiteTheme }) {
  const illustrations = [
    {
      label: "Было",
      alt: "Схема запутанных связей между функциями",
      image: theme === "dark" ? imgBeforeDark : imgBefore,
    },
    {
      label: "Стало",
      alt: "Схема функций в упорядоченной иерархии",
      image: theme === "dark" ? imgAfterDark : imgAfter,
    },
  ]

  return (
    <div className="flex flex-col gap-[24px]">
      <p className="max-w-[760px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[17px] leading-[1.6] text-gov-muted">
        Функции пересекаются, услуги состоят из лишних этапов, а нагрузка видна
        только по отдельным отчётам. Начинаем с того, как устроен процесс, а не
        с выбора ИИ.
      </p>
      <div className="grid grid-cols-1 gap-y-[20px] md:grid-cols-2 md:gap-x-[40px]">
        {illustrations.map(({ label, alt, image }) => (
          <div
            key={label}
            className="relative overflow-hidden rounded-[20px] border-[0.75px] border-gov-line bg-gov-panel transition-colors duration-300 hover:border-gov-outline"
          >
            <img
              key={theme}
              src={image}
              alt={alt}
              width={1076}
              height={778}
              loading="lazy"
              className="block h-auto w-full"
            />
            <span className="absolute left-[16px] top-[16px] rounded-[8px] bg-gov-panel/90 px-[12px] py-[6px] font-['IBM_Plex_Sans:Bold',sans-serif] text-[16px] leading-none font-bold text-gov-ink">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const schemeCards = [
  {
    num: "01",
    title: "Шаги 1–9",
    image: imgSchemeSteps19,
    description:
      "[1204011] Выдача разрешений на пользование животным миром (Охота): подача заявки, приём и регистрация, проверка полноты документов, рассмотрение по существу.",
  },
  {
    num: "02",
    title: "Шаги 10–17",
    image: imgSchemeSteps1017,
    description:
      "[1204011] Выдача разрешений на пользование животным миром (Охота): предварительный отказ, заслушивание, выдача разрешения или мотивированный отказ, обжалование.",
  },
]

function SchemeExplorer() {
  const [expanded, setExpanded] = useState(false)
  const [zoom, setZoom] = useState<typeof schemeCards[number] | null>(null)
  return (
    <div className="mt-[28px] w-full">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex cursor-pointer items-center gap-[10px] rounded-[8px] border border-gov-outline bg-gov-panel px-[19px] py-[12px] text-gov-ink transition-colors hover:border-gov-action hover:bg-gov-action hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gov-accent"
      >
        <span
          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[14px] whitespace-nowrap"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {expanded ? "Скрыть схему" : "Разобрать схему процесса"}
        </span>
        <span
          aria-hidden
          className={`text-[14px] leading-none transition-transform duration-300 ${
            expanded ? "rotate-180" : ""
          }`}
        >
          ↓
        </span>
      </button>

      {expanded && (
        <div className="mt-[16px] grid grid-cols-1 gap-[20px] sm:grid-cols-2">
          {schemeCards.map((card) => (
            <button
              key={card.num}
              type="button"
              onClick={() => setZoom(card)}
              className="group/card flex cursor-pointer flex-col overflow-hidden rounded-[14px] border-[0.75px] border-gov-line border-solid bg-gov-panel text-left transition-colors duration-300 hover:border-gov-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gov-accent"
            >
              <span className="block overflow-hidden">
                <img
                  alt=""
                  src={card.image}
                  className="block aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
                />
              </span>
              <span className="flex items-center justify-between gap-[12px] px-[18px] py-[14px]">
                <span className="flex items-baseline gap-[10px]">
                  <span className="font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[13px] tabular-nums text-gov-accent">
                    {card.num}
                  </span>
                  <span
                    className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[16px] text-gov-ink"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {card.title}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-[16px] leading-none text-gov-accent opacity-0 transition-opacity group-hover/card:opacity-100"
                >
                  ⤢
                </span>
              </span>
            </button>
          ))}
        </div>
      )}

      {zoom && (
        <ImageModal
          index={zoom.num}
          title={`Схема процесса: ${zoom.title}`}
          image={zoom.image}
          description={zoom.description}
          onClose={() => setZoom(null)}
        />
      )}
    </div>
  )
}

function BackgroundHorizontalBorder2({ theme }: { theme: SiteTheme }) {
  return (
    <div
      className="bg-gov-canvas relative shrink-0 w-full overflow-hidden"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-gov-line border-b border-t border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[68px] pt-[66px] px-[20px] sm:px-[28px] relative size-full">
        <Container47 />
        <Heading5 />
        <Group4 theme={theme} />
        <SchemeExplorer />
      </div>
    </div>
  )
}

function Container48() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-gov-accent text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">СТРАТЕГИЯ</p>
      </div>
    </div>
  )
}

function Group6({ theme }: { theme: SiteTheme }) {
  return (
    <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] place-items-start">
      <div
        className="col-1 h-[511.807px] ml-[271.9px] mt-0 relative row-1 w-[840.103px]"
        data-name="image 55"
      >
        <img
          key={theme}
          alt="Слои стратегии: материальные ресурсы и энергия, инфраструктура, технологии и продукты"
          loading="lazy"
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={theme === "dark" ? imgStrategyDark : imgImage55}
        />
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[56px] justify-center ml-[830px] mt-[18px] not-italic relative row-1 text-gov-ink text-[14px] text-center w-[260px]">
        <p className="leading-[normal] mb-0">governance.kz — сложные</p>
        <p className="leading-[normal] mb-0">ИИ-продукты на доступных</p>
        <p className="leading-[normal]">вычислительных мощностях</p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[100px] justify-center ml-[78px] mt-[99px] not-italic relative row-1 text-gov-body text-[20px] w-[552px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`«Будущее инноваций и ИИ упирается в `}</p>
        <p className="leading-[normal]">энергию и вычислительные мощности.»</p>
      </div>
      <div
        className="col-1 h-[68.247px] ml-0 mt-[161.62px] relative row-1 w-[627.918px]"
        data-name="Rectangle"
      />
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[68px] justify-center ml-[59px] mt-[215px] not-italic relative row-1 text-gov-body text-[20px] w-[305px]">
        <p className="leading-[normal] mb-0">Передовая экосистема eGov,</p>
        <p className="leading-[normal]">суперкомпьютеры, ЦОДы.</p>
      </div>
      <div
        className="col-1 h-[120.332px] ml-0 mt-[359.44px] relative row-1 w-[504.237px]"
        data-name="Rectangle"
      />
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[88px] justify-center ml-[16px] mt-[297px] not-italic relative row-1 text-gov-body text-[20px] w-[463px]">
        <p className="leading-[normal] mb-0">Дешевая электроэнергия,</p>
        <p className="leading-[normal] mb-0">запасы редкоземельных металлов</p>
        <p className="leading-[normal]">
          (кремний, литий), критичные для вычислений.
        </p>
      </div>
    </div>
  )
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div
        className="col-1 h-[109.199px] ml-0 mt-0 relative row-1 w-[617.147px]"
        data-name="Rectangle"
      />
      <div
        className="col-1 h-[85.579px] ml-[524px] mt-[45px] relative row-1 w-[261.761px]"
        data-name="Rectangle"
      />
    </div>
  )
}

function Heading6({ theme }: { theme: SiteTheme }) {
  return (
    <div
      className="content-stretch flex flex-col h-[523px] items-start leading-[0] relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center min-w-full relative shrink-0 text-gov-ink text-[30px] tracking-[-0.3px] w-[min-content]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Стратегический фундамент</p>
      </div>
      <div className="w-full shrink-0 overflow-x-auto rounded-[12px]">
        <Group6 theme={theme} />
      </div>
      <Group5 />
    </div>
  )
}

function BackgroundHorizontalBorder3({ theme }: { theme: SiteTheme }) {
  return (
    <div
      className="bg-gov-canvas relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-gov-line border-b border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[68px] pt-[66px] px-[20px] sm:px-[28px] relative size-full">
        <Container48 />
        <Heading6 theme={theme} />
      </div>
    </div>
  )
}

function Container52() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-gov-accent text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">БЕЗОПАСНОСТЬ И ДОВЕРИЕ</p>
      </div>
    </div>
  )
}

function Heading10() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-gov-ink text-[30px] tracking-[-0.3px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Безопасность и доверие</p>
      </div>
    </div>
  )
}

function Container54() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[17px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Human-in-the-loop</p>
      </div>
    </div>
  )
}

function Container55() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[15px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[23px] mb-0">Ответственность — за</p>
        <p className="leading-[23px]">уполномоченными лицами</p>
      </div>
    </div>
  )
}

function HorizontalBorder11() {
  return (
    <div
      className="content-stretch flex flex-col gap-[6px] items-start pb-[21px] pt-[16px] relative shrink-0 w-[210px]"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-[#2242d6] border-solid border-t-2 inset-0 pointer-events-none"
      />
      <Container54 />
      <Container55 />
    </div>
  )
}

function Container56() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[17px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Замкнутый контур</p>
      </div>
    </div>
  )
}

function Container57() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[15px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[23px]">Безопасная среда апробации</p>
      </div>
    </div>
  )
}

function HorizontalBorder12() {
  return (
    <div
      className="content-stretch flex flex-col gap-[6px] items-start pb-[21px] pt-[16px] relative shrink-0 w-[210px]"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-[#2242d6] border-solid border-t-2 inset-0 pointer-events-none"
      />
      <Container56 />
      <Container57 />
    </div>
  )
}

function Container58() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[17px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Защита данных</p>
      </div>
    </div>
  )
}

function Container59() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[15px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[23px]">Этика и законодательство РК</p>
      </div>
    </div>
  )
}

function HorizontalBorder13() {
  return (
    <div
      className="content-stretch flex flex-col gap-[6px] items-start pb-[21px] pt-[16px] relative shrink-0 w-[210px]"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-[#2242d6] border-solid border-t-2 inset-0 pointer-events-none"
      />
      <Container58 />
      <Container59 />
    </div>
  )
}

function Container60() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[17px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Межведомственность</p>
      </div>
    </div>
  )
}

function Container61() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[15px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[23px]">Устранение барьеров данных</p>
      </div>
    </div>
  )
}

function HorizontalBorder14() {
  return (
    <div
      className="content-stretch flex flex-col gap-[6px] items-start pb-[21px] pt-[16px] relative shrink-0 w-[210px]"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-[#2242d6] border-solid border-t-2 inset-0 pointer-events-none"
      />
      <Container60 />
      <Container61 />
    </div>
  )
}

function Container62() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[17px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Прозрачность и аудит</p>
      </div>
    </div>
  )
}

function Container63() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[15px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[23px]">Проверяемость процессов</p>
      </div>
    </div>
  )
}

function HorizontalBorder15() {
  return (
    <div
      className="content-stretch flex flex-col gap-[6px] items-start pb-[21px] pt-[16px] relative shrink-0 w-[210px]"
      data-name="HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-[#2242d6] border-solid border-t-2 inset-0 pointer-events-none"
      />
      <Container62 />
      <Container63 />
    </div>
  )
}

function Container53() {
  return (
    <div
      className="grid w-full grid-cols-1 gap-y-[20px] sm:grid-cols-2 sm:gap-x-[28px] lg:grid-cols-5 lg:gap-x-[20px]"
      data-name="Container"
    >
      <div className="rounded-[12px] border border-gov-line bg-gov-panel px-[15px] py-[18px] transition-colors hover:border-gov-outline">
        <h3
          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.3] tracking-[-0.1px] text-gov-ink"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Human-in-the-loop
        </h3>
        <p
          className="mt-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-gov-muted"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Ответственность — за уполномоченными лицами
        </p>
      </div>
      <div className="rounded-[12px] border border-gov-line bg-gov-panel px-[15px] py-[18px] transition-colors hover:border-gov-outline">
        <h3
          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.3] tracking-[-0.1px] text-gov-ink"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Замкнутый контур
        </h3>
        <p
          className="mt-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-gov-muted"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Безопасная среда апробации
        </p>
      </div>
      <div className="rounded-[12px] border border-gov-line bg-gov-panel px-[15px] py-[18px] transition-colors hover:border-gov-outline">
        <h3
          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.3] tracking-[-0.1px] text-gov-ink"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Защита данных
        </h3>
        <p
          className="mt-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-gov-muted"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Этика и законодательство РК
        </p>
      </div>
      <div className="rounded-[12px] border border-gov-line bg-gov-panel px-[15px] py-[18px] transition-colors hover:border-gov-outline">
        <h3
          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.3] tracking-[-0.1px] text-gov-ink"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Межведомственность
        </h3>
        <p
          className="mt-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-gov-muted"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Устранение барьеров данных
        </p>
      </div>
      <div className="rounded-[12px] border border-gov-line bg-gov-panel px-[15px] py-[18px] transition-colors hover:border-gov-outline">
        <h3
          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.3] tracking-[-0.1px] text-gov-ink"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Прозрачность и аудит
        </h3>
        <p
          className="mt-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-gov-muted"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Проверяемость процессов
        </p>
      </div>
    </div>
  )
}

function HorizontalBorder10({ theme }: { theme: SiteTheme }) {
  const [showVisual, setShowVisual] = useState(false)
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div
        aria-hidden
        className="absolute border-gov-line border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center pb-[68px] pt-[66px] px-[20px] sm:px-[28px] relative size-full">
          <Container52 />
          <Heading10 />
          <Container53 />
          <button
            type="button"
            onClick={() => setShowVisual((v) => !v)}
            aria-expanded={showVisual}
            className="mt-[16px] flex cursor-pointer items-center justify-center gap-[10px] self-start rounded-[8px] border border-gov-outline bg-gov-panel px-[19px] py-[12px] text-gov-ink transition-colors hover:border-gov-action hover:bg-gov-action hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gov-accent"
          >
            <span
              className="font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[14px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Визуал
            </span>
            <span
              aria-hidden
              className={`text-[14px] leading-none transition-transform ${
                showVisual ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
          {showVisual && (
            <div className="mt-[20px] w-full max-w-[960px] overflow-hidden rounded-[16px] border border-gov-line bg-gov-panel">
              <img
                key={theme}
                src={theme === "dark" ? imgVisualDark : imgImage56}
                alt="Схема фильтрации профилей и подбора кандидатов"
                width={2172}
                height={724}
                className="block h-auto w-full"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Container65() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8fa6ff] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[normal]">КОНТАКТ</p>
      </div>
    </div>
  )
}

function Heading11() {
  return (
    <h2
      className="max-w-[340px] font-['IBM_Plex_Sans:Bold',sans-serif] text-[24px] leading-[normal] font-bold tracking-[-0.24px] text-white"
      style={{ fontVariationSettings: '"wdth" 100' }}
    >
      Готовы показать модель на ваших данных
    </h2>
  )
}

function Container64() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative min-w-0 max-w-full"
      data-name="Container"
    >
      <Container65 />
      <Heading11 />
    </div>
  )
}

function Background8({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-gov-action rounded-[8px] content-stretch flex flex-col items-start px-[26px] py-[14px] relative shrink-0 cursor-pointer transition-colors hover:bg-gov-action-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      data-name="Background"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.5px] text-white whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Записаться на встречу →</p>
      </div>
    </button>
  )
}

function Background7() {
  const [showMeeting, setShowMeeting] = useState(false)
  return (
    <>
      <div
        className="bg-gov-emphasis relative shrink-0 w-full"
        data-name="Background"
      >
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex justify-between items-start sm:items-center px-[20px] sm:px-[28px] py-[56px] relative size-full gap-[36px] flex-col sm:flex-row">
            <Container64 />
            <Background8 onClick={() => setShowMeeting(true)} />
          </div>
        </div>
      </div>
      {showMeeting && <MeetingModal onClose={() => setShowMeeting(false)} />}
    </>
  )
}

function Container67() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative self-stretch shrink-0"
      data-name="Container"
    >
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-gov-muted text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">GOVERNANCE.KZ</p>
      </div>
    </div>
  )
}

function Container66() {
  return (
    <div className="h-[59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between px-[20px] sm:px-[28px] py-[22px] relative size-full">
          <Container67 />
        </div>
      </div>
    </div>
  )
}
export type Language = "RU" | "KZ" | "EN"

function LanguageSwitcher({
  language,
  onChange,
}: {
  language: Language
  onChange: (lang: Language) => void
}) {
  const langs: Language[] = ["RU", "KZ", "EN"]
  return (
    <div className="flex shrink-0 items-center gap-px min-[400px]:gap-[2px]">
      {langs.map((lang, i) => (
        <React.Fragment key={lang}>
          {i > 0 && (
            <span aria-hidden="true" className="select-none text-[12px] text-gov-muted">·</span>
          )}
          <button
            type="button"
            onClick={() => onChange(lang)}
            className="min-h-8 min-w-6 cursor-pointer rounded-[4px] px-[3px] font-['IBM_Plex_Mono:Regular',sans-serif] text-[11.5px] tracking-[0.46px] text-gov-body transition-colors hover:text-gov-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gov-accent aria-pressed:font-bold aria-pressed:text-gov-accent min-[400px]:px-[6px]"
            aria-pressed={lang === language}
            aria-label={`Сменить язык на ${lang}`}
          >
            {lang}
          </button>
        </React.Fragment>
      ))}
    </div>
  )
}
function TabPage({ tabKey, onBack }: { tabKey: TabKey; onBack: () => void }) {
  const data = tabData[tabKey]
  const [selectedRow, setSelectedRow] = useState<TabRow | null>(null)
  const [showHeroVideo, setShowHeroVideo] = useState(false)
  const [heroVideoFailed, setHeroVideoFailed] = useState(false)

  const closeHeroVideo = () => {
    setShowHeroVideo(false)
    setHeroVideoFailed(false)
  }

  return (
    <div className="w-full">
      {/* Back link */}
      <div className="px-[20px] sm:px-[44px] pt-[24px] pb-[8px]">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-[8px] font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px] text-gov-body cursor-pointer transition-colors hover:text-gov-accent"
        >
          <span className="text-[14px] leading-none">←</span>
          НАЗАД К ГЛАВНОЙ
        </button>
      </div>

      {/* Hero-фон вкладки с картинкой; клик по картинке открывает видео */}
      <div className="group relative w-full overflow-hidden">
        {/* Фоновая картинка с затемнением */}
        {data.image && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src={data.image}
              alt=""
              className="size-full object-cover"
              style={{ transform: "scale(1.05)" }}
            />
            <div className="absolute inset-0 bg-gov-media-scrim" />
            <div className="absolute inset-x-0 bottom-0 h-[88px] bg-gradient-to-b from-transparent to-gov-canvas" />
          </div>
        )}

        {/* Контент поверх фона */}
        <div className="relative z-10 flex flex-col gap-[20px] px-[20px] sm:px-[44px] pb-[96px] pt-[20px] w-full max-w-[1170px] mx-auto min-h-[300px] sm:min-h-[360px]">
          {/* Heading */}
          <h2
            className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[36px] tracking-[-0.36px] text-white sm:text-[42px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {data.title}
          </h2>

          {/* Description */}
          <p
            className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[18px] leading-[1.65] text-white/85 max-w-[900px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {data.description}
          </p>
        </div>

        {/* Клик по всей картинке открывает видео */}
        {data.video && (
          <>
            <button
              type="button"
              onClick={() => setShowHeroVideo(true)}
              aria-label={`Смотреть видео — ${data.title}`}
              className="absolute inset-0 z-20 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/80"
            />
            <span className="pointer-events-none absolute bottom-[22px] left-1/2 z-30 flex -translate-x-1/2 items-center gap-[10px] rounded-full bg-[#0d0f16]/90 px-[18px] py-[10px] text-white ring-1 ring-white/30 transition-all duration-300 group-hover:scale-[1.05] group-hover:ring-white/50">
              <span
                aria-hidden
                className="absolute -inset-[6px] rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60"
                style={{ background: data.videoGlow }}
              />
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
              />
              <span
                aria-hidden
                className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 animate-[glass-video-flow_4s_linear_infinite] group-hover:opacity-25"
                style={
                  data.videoGradient && {
                    backgroundImage: `linear-gradient(120deg, ${[...data.videoGradient, data.videoGradient[0]].join(", ")})`,
                    backgroundSize: "200% 100%",
                  }
                }
              />
              <svg
                viewBox="0 0 24 24"
                className="relative size-4 fill-current"
                aria-hidden
              >
                <path d="M8 5.14v13.72L19 12 8 5.14z" />
              </svg>
              <span
                className="relative font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[14px] whitespace-nowrap"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Смотреть видео
              </span>
            </span>
          </>
        )}
      </div>

      {/* Registry table */}
      <div className="content-stretch flex flex-col px-[20px] sm:px-[44px] pb-[60px] pt-[20px] w-full max-w-[1170px] mx-auto">
        <RegistryTable rows={data.rows} onSelect={setSelectedRow} />
      </div>
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
      {showHeroVideo &&
        (data.video && !heroVideoFailed ? (
          <VideoModal
            src={data.video}
            title={data.title}
            onClose={closeHeroVideo}
            onError={() => setHeroVideoFailed(true)}
            large
          />
        ) : (
          data.image && (
            <ImageModal
              index={data.index}
              title={data.title}
              image={data.image}
              description={data.description}
              onClose={closeHeroVideo}
            />
          )
        ))}
    </div>
  )
}

function GeneralRevealSection({ children }: { children: React.ReactNode }) {
  return <div data-general-reveal="">{children}</div>
}

function GeneralPage({
  onTabClick,
  theme,
}: {
  onTabClick: (key: TabKey) => void
  theme: SiteTheme
}) {
  const pageRef = useGeneralReveal()

  return (
    <main ref={pageRef} className="general-page w-full" aria-label="Общее">
      <ContoursSection onTabClick={onTabClick} />
      <GeneralRevealSection>
        <TeamSection />
      </GeneralRevealSection>
      <GeneralRevealSection>
        <SyntheticResearchSection onTabClick={onTabClick} theme={theme} />
      </GeneralRevealSection>
      <GeneralRevealSection>
        <BackgroundHorizontalBorder2 theme={theme} />
      </GeneralRevealSection>
      <GeneralRevealSection>
        <BackgroundHorizontalBorder3 theme={theme} />
      </GeneralRevealSection>
      <GeneralRevealSection>
        <HorizontalBorder10 theme={theme} />
      </GeneralRevealSection>
      <GeneralRevealSection>
        <Background7 />
      </GeneralRevealSection>
    </main>
  )
}

function Background() {
  const [imageModal, setImageModal] = useState<ProductImageKey | null>(null)
  const [activePage, setActivePage] = useState(getActivePage)
  const [language, setLanguage] = useState<Language>("RU")
  const { theme, toggleTheme } = useSiteTheme()

  // Если пользователь попал сюда переходом с другой страницы этого же сайта,
  // «НАЗАД К ГЛАВНОЙ» ведёт по истории — назад туда, откуда он начинал.
  const [cameFromInternalNavigation] = useState(() => {
    if (typeof document === "undefined") return false
    try {
      return (
        Boolean(document.referrer) &&
        new URL(document.referrer).origin === window.location.origin
      )
    } catch {
      return false
    }
  })

  useEffect(() => {
    const applyHash = () => setActivePage(getActivePage())
    window.addEventListener("hashchange", applyHash)
    return () => window.removeEventListener("hashchange", applyHash)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (activePage !== "general") return

    const siteTitle = document.title
    document.title = "Общее — Governance.kz"
    return () => {
      document.title = siteTitle
    }
  }, [activePage])

  const handleTabChange = (key: TabKey) => {
    window.location.hash = pageHashes[key]
  }

  const handleHome = () => {
    if (window.location.hash) {
      window.history.pushState(
        null,
        "",
        window.location.pathname + window.location.search,
      )
      setActivePage(null)
    }
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    if (cameFromInternalNavigation) {
      window.history.back()
      return
    }
    handleHome()
  }

  const isSimulator = activePage === "modeling"

  return (
    <div
      className="content-stretch flex flex-col items-stretch relative shrink-0 w-full bg-gov-canvas text-gov-ink"
      data-name="Background"
    >
      <SiteHeader
        activePage={activePage}
        onHomeClick={handleHome}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      {activePage === null ? (
        <HomeLanding />
      ) : isSimulator ? (
        <>
          <AISimulatorPage onBack={handleBack} />
          <Container66 />
        </>
      ) : (
        <div className="w-full max-w-[1170px] mx-auto flex flex-col items-center">
          {activePage === "general" ? (
            <GeneralPage onTabClick={handleTabChange} theme={theme} />
          ) : (
            <TabPage key={activePage} tabKey={activePage} onBack={handleBack} />
          )}
          <Container66 />
        </div>
      )}
      {activePage !== null && <BackToTopButton />}
      {imageModal && (
        <ImageModal
          index={productImages[imageModal].index}
          title={productImages[imageModal].title}
          image={productImages[imageModal].image}
          description={productImages[imageModal].description}
          onClose={() => setImageModal(null)}
        />
      )}
    </div>
  )
}

export default function BackgroundBorderShadow() {
  return (
    <div className="relative w-full" data-name="Background+Border+Shadow">
      <div className="flex flex-col items-stretch relative w-full">
        <Background />
      </div>
    </div>
  )
}
