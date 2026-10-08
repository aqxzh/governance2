import React, { useEffect, useRef, useState } from "react"
import imgTeamMain from "./team-main.png"
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
import { CONTACT_EMAIL, sendApplication } from "../src/lib/sendApplication"

import imgTabDiagnostics from "./tab-diagnostics.png"
import imgTabCoordination from "./tab-coordination.png"

import { VideoModal } from "../src/simulator/VideoModal"
import AISimulatorPage from "../src/simulator/AISimulatorPage"
import SyntheticResearchSection from "../src/synthetic-research/SyntheticResearchSection"
import { RegistryTable } from "../src/synthetic-research/ModelingPage"
import { ImageModal } from "../src/synthetic-research/ImageModal"

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

function ContoursSection({
  onTabClick,
}: {
  onTabClick: (key: TabKey) => void
}) {
  const cards: {
    key: TabKey
    num: string
    title: string
    text: string
    items: string[]
  }[] = [
    {
      key: "recruitment",
      num: "01",
      title: "Диагностика",
      text: "ИИ анализирует функции, кадры и услуги госорганов в единой логике данных: находит дублирования полномочий, скрытые барьеры и аномалии. Диагностика показывает, как процессы ломаются и почему.",
      items: ["Функции и услуги", "Кадры и оценка", "Данные и риски"],
    },
    {
      key: "analytics",
      num: "02",
      title: "Координация",
      text: "Помощник руководителя агрегирует ЭДО, задачи и метрики в чистый управленческий сигнал. Координация задач и умные боты работают прямо в мессенджерах сотрудников.",
      items: ["AI-советник", "Задачи и боты"],
    },
    {
      key: "modeling",
      num: "03",
      title: "Моделирование",
      text: "Проверить варианты до внедрения: исследовать реакции аудитории, сравнить сценарии и рассчитать поставки с учётом сроков годности.",
      items: [
        "Синтетические исследования",
        "Сценарии и расчёты",
        "Поставки и срок годности",
      ],
    },
  ]

  return (
    <section id="contours" className="relative w-full">
      <div className="content-stretch flex flex-col items-start pb-[56px] pt-[52px] px-[20px] sm:px-[28px] relative size-full w-full max-w-[1170px] mx-auto">
        <div className="font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px] text-[#2242d6]">
          ВЫБРАТЬ ЗАДАЧУ
        </div>
        <h2
          className="mt-[14px] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[30px] tracking-[-0.3px] w-full"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Понять. Организовать. Проверить.
        </h2>

        <div className="mt-[28px] grid w-full grid-cols-1 gap-[20px] md:grid-cols-3">
          {cards.map((card) => (
            <button
              key={card.key}
              type="button"
              onClick={() => onTabClick(card.key)}
              className="group flex flex-col rounded-[16px] border border-[#e6e8ee] bg-white p-[20px] text-left transition-colors hover:border-[#0d0f16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
            >
              <span className="font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[13px] tabular-nums text-[#2242d6]">
                {card.num}
              </span>
              <span
                className="mt-[10px] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[20px] text-[#0d0f16]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {card.title}
              </span>
              <span className="mt-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[14px] leading-[1.6] text-[#5a606e]">
                {card.text}
              </span>
              <span className="mt-[16px] flex flex-col gap-[10px]">
                {card.items.map((item) => (
                  <span
                    key={item}
                    className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[14px] text-[#0d0f16]"
                  >
                    {item}
                  </span>
                ))}
              </span>
              <span className="mt-auto pt-[20px]">
                <span className="block w-full whitespace-nowrap rounded-[8px] border border-[#0d0f16] bg-white px-[8px] py-[12px] text-center font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[13px] text-[#0d0f16] transition-colors group-hover:border-[#2242d6] group-hover:bg-[#2242d6] group-hover:text-white">
                  Разобрать направление
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function Container3() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Container"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[17px] tracking-[-0.17px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">GOVERNANCE.KZ</p>
      </div>
    </div>
  )
}

function Container2({ onHomeClick }: { onHomeClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onHomeClick}
      className="content-stretch flex gap-[11px] items-center relative shrink-0 cursor-pointer outline-none"
      data-name="Container"
      aria-label="На главную"
    >
      <div className="relative shrink-0 size-[26px]" data-name="Border">
        <div
          aria-hidden
          className="absolute border-[3px] border-[#2242d6] border-solid inset-0 pointer-events-none"
        />
      </div>
      <Container3 />
    </button>
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

function HorizontalBorder({
  onTabClick,
  onHomeClick,
  language,
  onLanguageChange,
}: {
  onTabClick: (id: TabKey) => void
  onHomeClick?: () => void
  language: Language
  onLanguageChange: (lang: Language) => void
}) {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[22px] pt-[20px] px-[20px] sm:px-[28px] relative size-full gap-[24px]">
          <Container2 onHomeClick={onHomeClick} />
          <div className="flex flex-row items-center gap-[16px]">
            <HeroTabs onTabClick={onTabClick} />
            <LanguageSwitcher language={language} onChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </div>
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

function Background2({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-[#2242d6] relative shrink-0 cursor-pointer transition-colors hover:bg-[#1a35ad]"
      data-name="Background"
    >
      <div className="content-stretch flex flex-col items-start px-[22px] py-[14px] relative size-full">
        <div
          className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[13px] text-white whitespace-nowrap"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <p className="leading-[normal]">Записаться на встречу →</p>
        </div>
      </div>
    </div>
  )
}

function Border1({ onClick }: { onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="relative shrink-0 cursor-pointer bg-white"
      data-name="Border"
    >
      <div
        aria-hidden
        className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col items-start px-[24px] py-[15px] relative size-full">
        <div
          className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[13px] whitespace-nowrap"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          <p className="leading-[normal]">Аналитическая записка</p>
        </div>
      </div>
    </div>
  )
}

function Container12({
  onMeetingClick,
  onNoteClick,
}: {
  onMeetingClick: () => void
  onNoteClick: () => void
}) {
  return (
    <div
      className="col-0 content-stretch flex flex-row gap-[10px] items-start justify-self-stretch relative row-0 self-end shrink-0 w-full"
      data-name="Container"
    >
      <Background2 onClick={onMeetingClick} />
      <Border1 onClick={onNoteClick} />
    </div>
  )
}

const CONTACTS = {
  email: CONTACT_EMAIL,
  phoneDisplay: "+7 (776) 173-82-91",
  phoneHref: "+777761738291",
}

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
      await sendApplication({
        name: name.trim(),
        phone: phone.trim(),
        message: question.trim() || undefined,
      })
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  const inputClass =
    "w-full rounded-[10px] border border-[#e6e8ee] bg-[#f6f7fb] px-[16px] py-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] text-[#0d0f16] outline-none transition-colors focus:border-[#2242d6] focus:bg-white placeholder:text-[#9aa0ad]"

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0f16]/60 p-4 backdrop-blur-[3px] animate-[imgmodal-fade_.18s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Записаться на встречу"
    >
      <div
        className="relative w-full max-w-[560px] rounded-[24px] bg-white p-[32px] shadow-[0_40px_80px_rgba(13,15,22,0.35)] animate-[imgmodal-pop_.24s_cubic-bezier(0.2,0.8,0.2,1)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-6 top-5 text-[26px] leading-none text-[#5a606e] transition-colors hover:text-[#0d0f16] cursor-pointer"
        >
          ×
        </button>

        <h2
          className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[26px] leading-[1.15] tracking-[-0.26px] text-[#0d0f16]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Записаться на встречу
        </h2>
        <p className="mt-[14px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] leading-[1.5] text-[#5a606e]">
          Опишите ваш вопрос — и мы свяжемся с вами.
        </p>

        {status === "sent" ? (
          <div className="mt-[26px] flex flex-col items-center gap-[8px] rounded-[14px] border border-[#d7f0dd] bg-[#effaf2] px-[22px] py-[18px] text-center">
            <span className="font-['IBM_Plex_Sans:Bold',sans-serif] text-[16px] text-[#137333]">
              Заявка отправлена
            </span>
            <span className="font-['IBM_Plex_Sans:Regular',sans-serif] text-[13px] leading-[1.5] text-[#41754d]">
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
              className="mt-[26px] flex w-full cursor-pointer items-center justify-center gap-[8px] rounded-full bg-[#2242d6] px-[22px] py-[14px] font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[15px] whitespace-nowrap text-white transition-colors hover:bg-[#1a35ad] disabled:cursor-not-allowed disabled:opacity-70"
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
              <p className="mt-[10px] text-center font-['IBM_Plex_Sans:Regular',sans-serif] text-[13px] leading-[1.5] text-[#c5221f]">
                Не удалось отправить заявку. Попробуйте ещё раз или напишите нам
                напрямую на {CONTACTS.email}.
              </p>
            )}
            <p className="mt-[12px] text-center font-['IBM_Plex_Sans:Regular',sans-serif] text-[13px] leading-[1.5] text-[#9aa0ad]">
              Заявка придёт на {CONTACTS.email}
            </p>
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
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-[24px] bg-white p-8 shadow-[0_40px_80px_rgba(0,0,0,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 text-[24px] font-bold text-slate-500 hover:text-slate-900"
        >
          ×
        </button>
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">{title}</h2>
        <div className="space-y-4 text-sm leading-6 text-slate-700">
          {description}
        </div>
      </div>
    </div>
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
function HorizontalBorder1({
  onTabClick,
}: {
  onTabClick: (id: TabKey) => void
}) {
  const [showMeeting, setShowMeeting] = useState(false)
  const [showNote, setShowNote] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    let rafId = 0
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const el = heroRef.current
        const v = videoRef.current
        if (!el || !v) return
        const rect = el.getBoundingClientRect()
        const progress = Math.max(-1, Math.min(1, -rect.top / rect.height))
        v.style.transform = `translateY(${progress * 8}%) scale(1.12)`
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={heroRef}
      className="relative w-full overflow-hidden"
      data-name="HorizontalBorder"
    >
      {/* Фоновое зацикленное видео с параллаксом */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/graphs.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 size-full object-cover will-change-transform"
          style={{ transform: "scale(1.12)" }}
        />
        {/* Затемнение для читаемости текста */}
        <div className="absolute inset-0 bg-[#0d0f16]/65" />
        {/* Плавный fade в белый снизу — бесшовный переход в контент */}
        <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* Контент поверх фона */}
      <div className="relative z-10 px-[20px] sm:px-[28px] py-[48px] sm:py-[64px]">
        {/* Label */}
        <div className="flex w-full flex-col font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px] text-white mb-[24px]">
          <p className="leading-[normal]">ИИ ИНФРАСТРУКТУРА УПРАВЛЕНИЯ</p>
        </div>

        {/* Hero content: text left, image and buttons right */}
        <div className="flex flex-col lg:flex-row gap-[40px] items-start mt-[32px] mb-[40px]">
          <div className="flex-1">
            {/* Main heading */}
            <div
              className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-white text-[48px] lg:text-[52px] tracking-[-1.04px] leading-[55px] mb-[24px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p className="mb-0">Организации,</p>
              <p className="mb-0">которые видят свои</p>
              <p>процессы целиком</p>
            </div>

            {/* Description text only */}
            <div
              className="max-w-[620px] [word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[18px] leading-[28.8px] text-white/75"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              <p>
                Governance.kz — прикладной центр цифровой трансформации
                управления. ИИ анализирует кадры, услуги и нагрузку в единой
                логике данных.
              </p>
            </div>
          </div>

          {/* Right column: image + buttons */}
          <div className="flex-shrink-0 w-full lg:w-auto flex flex-col gap-[24px]">
            {/* Hero image */}
            <div className="w-full lg:w-[516px] min-h-[200px] bg-[#f4f5f8] rounded-[8px] overflow-hidden">
              <img
                alt="Governance.kz"
                className="block w-full h-auto object-cover rounded-[8px]"
                src={imgTeamMain}
              />
            </div>

            {/* Buttons */}
            <Container12
              onMeetingClick={() => setShowMeeting(true)}
              onNoteClick={() => setShowNote(true)}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      {showMeeting && <MeetingModal onClose={() => setShowMeeting(false)} />}
      {showNote && (
        <InfoModal
          title="Аналитическая записка"
          onClose={() => setShowNote(false)}
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
    </div>
  )
}

function Frame21({ onTabClick }: { onTabClick: (id: TabKey) => void }) {
  return (
    <div className="w-full">
      <HorizontalBorder1 onTabClick={onTabClick} />
    </div>
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
      className={`${teamMonoLabel} grid size-[34px] shrink-0 place-items-center rounded-[8px] border-[1.5px] border-[#0d0f16] bg-white text-[13px] tabular-nums text-[#0d0f16]`}
    >
      {n}
    </span>
  )
}

function TeamPort({ label }: { label: string }) {
  return (
    <span
      className={`${teamMonoLabel} shrink-0 whitespace-nowrap bg-white px-[16px] py-[6px] text-[11.5px] tracking-[1.1px] text-[#5a606e]`}
    >
      {label}
    </span>
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
      className="relative w-full shrink-0 bg-white border-t border-[#e6e8ee]"
      data-name="HorizontalBorder"
    >
      <style>{`
        .team-rail { background-image: repeating-linear-gradient(to right, #b9c0d0 0 3px, transparent 3px 6px); }
        @keyframes team-rail-move { to { background-position-x: -6px; } }
        @media (prefers-reduced-motion: no-preference) {
          .team-rail { animation: team-rail-move 1.1s linear infinite; }
        }
      `}</style>
      <div className="content-stretch relative flex size-full w-full flex-col items-start gap-[8px] px-[20px] pb-[68px] pt-[66px] sm:px-[28px]">
        {/* label */}
        <div className="[word-break:break-word] flex w-full flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] tracking-[1.2px] text-[#2242d6]">
          <p className="leading-[normal]">КОМАНДА</p>
        </div>
        <h2
          className="w-full font-['IBM_Plex_Sans:Bold',sans-serif] text-[30px] font-bold leading-[1.1] tracking-[-0.3px] text-[#0d0f16]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Те, кто превращают сложное в рабочее
          <span className="text-[#2242d6]">.</span>
        </h2>
        <p
          className="mt-[6px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.55] text-[#5a606e] sm:text-[17px] xl:whitespace-nowrap"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Задача не переходит из кабинета в кабинет — она проходит по цепочке
          профилей: от диагностики аппарата до работающей системы.
        </p>

        {/* mechanism */}
        <div ref={ref} className="mt-[24px] flex w-full flex-col">
          {/* input port on narrow screens */}
          <div className="lg:hidden" style={step(0)}>
            <TeamPort label="ВХОД · ВАША ЗАДАЧА" />
          </div>

          {/* desktop track: rail with input/output labels */}
          <div
            className="hidden items-start gap-[10px] lg:flex"
            style={step(0)}
          >
            <div className="pt-[3px]">
              <TeamPort label="ВХОД · ВАША ЗАДАЧА" />
            </div>
            <div className="relative flex-1">
              <span
                aria-hidden
                className="team-rail absolute -left-[10px] -right-[10px] top-[16px] h-px"
              />
            </div>
            <div className="pt-[3px]">
              <TeamPort label="ВЫХОД · РАБОЧИЙ РЕЗУЛЬТАТ" />
            </div>
          </div>

          {/* stages */}
          <div className="relative mt-[14px] lg:mt-0">
            <span
              aria-hidden
              className="absolute -top-[6px] bottom-[8px] left-[16px] w-0 border-l border-dashed border-[#c3cad9] lg:hidden"
            />
            <ol className="flex flex-col gap-[24px] lg:grid lg:grid-cols-4 lg:gap-[32px]">
              {teamStages.map((s, i) => (
                <li
                  key={s.n}
                  className="group relative ml-[48px] flex flex-col rounded-[12px] border border-[#e0e4ee] bg-white p-[24px] transition-colors duration-200 hover:border-[#0d0f16] lg:ml-0"
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
                      className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[18px] font-semibold leading-[1.25] text-[#0d0f16]"
                      style={{ fontVariationSettings: '"wdth" 100' }}
                    >
                      {s.phase}
                    </h3>
                  </div>
                  <p
                    className="mt-[4px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[15px] font-medium leading-[1.35] text-[#2242d6]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {s.role}
                  </p>
                  <p
                    className="mt-[10px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-[#3a4050]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {s.does}
                  </p>
                  <p
                    className={`${teamMonoLabel} mt-[12px] text-[11px] uppercase tracking-[1.2px] text-[#6a7080]`}
                  >
                    Метод
                  </p>
                  <p
                    className={`${teamMonoLabel} mt-[3px] text-[12px] leading-[1.4] text-[#6a7080]`}
                  >
                    {s.method}
                  </p>
                  <div className="mt-auto pt-[16px]">
                    <div className="border-t border-[#eceff5] pt-[12px]">
                      <p
                        className={`${teamMonoLabel} text-[11px] uppercase tracking-[1.2px] text-[#6a7080]`}
                      >
                        Артефакт
                      </p>
                      <p className="mt-[4px] flex items-start gap-[8px]">
                        <span
                          aria-hidden
                          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[14px] font-semibold leading-[1.45] text-[#2242d6]"
                        >
                          →
                        </span>
                        <span
                          className="font-['IBM_Plex_Sans:Medium',sans-serif] text-[14px] font-medium leading-[1.45] text-[#0d0f16]"
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
                  className="mx-auto w-0 border-l border-dashed border-[#c3cad9]"
                />
              ))}
            </div>
            <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#d8dde8] bg-white px-[20px] py-[16px] transition-colors duration-200 hover:border-[#0d0f16] lg:flex-row lg:items-center lg:gap-[24px]">
              <div className="flex shrink-0 items-center gap-[12px]">
                <TeamNode n={teamOwner.n} />
                <h3
                  className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[18px] font-semibold leading-[1.25] text-[#0d0f16]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {teamOwner.role}
                </h3>
              </div>
              <p
                className="flex-1 font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-[#5a606e]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {teamOwner.does}
              </p>
              <p className="shrink-0 lg:text-right">
                <span
                  className={`${teamMonoLabel} text-[11px] uppercase tracking-[1.2px] text-[#6a7080]`}
                >
                  Артефакт
                </span>
                <span
                  className="ml-[6px] font-['IBM_Plex_Sans:Medium',sans-serif] text-[14px] font-medium leading-[1.45] text-[#0d0f16]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {teamOwner.artifact}
                </span>
              </p>
            </div>
          </div>

          {/* output port on narrow screens */}
          <div className="mt-[14px] lg:hidden" style={step(6)}>
            <TeamPort label="ВЫХОД · РАБОЧИЙ РЕЗУЛЬТАТ" />
          </div>
        </div>

        {/* seal */}
        <div className="mt-[24px] w-full" style={step(7)}>
          <ul className="grid w-full grid-cols-1 gap-[16px] sm:grid-cols-3">
            {teamSeal.map((s, i) => (
              <li
                key={s}
                className="flex items-baseline gap-[10px] rounded-[12px] border border-[#d8dde8] bg-white px-[20px] py-[18px]"
              >
                <span
                  className={`${teamMonoLabel} text-[11.5px] tabular-nums tracking-[1px] text-[#2242d6]`}
                >
                  0{i + 1}
                </span>
                <span className="text-[15px] font-medium leading-[1.45] text-[#0d0f16]">
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
      <div className="font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px]">
        <span className="text-[#2242d6]">БЫЛО</span>
        <span className="text-[#2242d6]"> → </span>
        <span className="text-[#2242d6]">СТАЛО</span>
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
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[30px] tracking-[-0.3px] w-full"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">
          Когда данные не складываются в картину
        </p>
      </div>
    </div>
  )
}

function Group4() {
  return (
    <div className="flex flex-col gap-[24px]">
      <p className="max-w-[760px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[17px] leading-[1.6] text-[#5a606e]">
        Функции пересекаются, услуги состоят из лишних этапов, а нагрузка видна
        только по отдельным отчётам. Начинаем с того, как устроен процесс, а не
        с выбора ИИ.
      </p>
      <div className="grid grid-cols-1 gap-y-[20px] md:grid-cols-2 md:gap-x-[40px]">
        <div className="relative rounded-[20px] border-[0.75px] border-[#dbe2ec] border-solid bg-white">
          <img
            alt="Было"
            className="block w-full rounded-[20px]"
            src={imgBefore}
          />
          <span className="absolute left-[16px] top-[16px] rounded-[8px] bg-white/90 px-[12px] py-[6px] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[16px] leading-none text-[#0d0f16] backdrop-blur-sm">
            Было
          </span>
        </div>
        <div className="relative rounded-[20px] border-[0.75px] border-[#dbe2ec] border-solid bg-white">
          <img
            alt="Стало"
            className="block w-full rounded-[20px]"
            src={imgAfter}
          />
          <span className="absolute left-[16px] top-[16px] rounded-[8px] bg-white/90 px-[12px] py-[6px] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[16px] leading-none text-[#0d0f16] backdrop-blur-sm">
            Стало
          </span>
        </div>
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
        className="group flex cursor-pointer items-center gap-[10px] rounded-[8px] border border-[#0d0f16] border-solid bg-white px-[19px] py-[12px] transition-colors hover:bg-[#0d0f16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
      >
        <span
          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#0d0f16] whitespace-nowrap transition-colors group-hover:text-white"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {expanded ? "Скрыть схему" : "Разобрать схему процесса"}
        </span>
        <span
          aria-hidden
          className={`text-[14px] leading-none text-[#0d0f16] transition-all duration-300 group-hover:text-white ${
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
              className="group/card flex cursor-pointer flex-col overflow-hidden rounded-[14px] border-[0.75px] border-[#dbe2ec] border-solid bg-white text-left transition-colors duration-300 hover:border-[#2242d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
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
                  <span className="font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[13px] tabular-nums text-[#2242d6]">
                    {card.num}
                  </span>
                  <span
                    className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[16px] text-[#0d0f16]"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {card.title}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-[16px] leading-none text-[#2242d6] opacity-0 transition-opacity group-hover/card:opacity-100"
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

function BackgroundHorizontalBorder2() {
  return (
    <div
      className="bg-white relative shrink-0 w-full overflow-hidden"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-[#e6e8ee] border-b border-t border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[68px] pt-[66px] px-[20px] sm:px-[28px] relative size-full">
        <Container47 />
        <Heading5 />
        <Group4 />
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
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">СТРАТЕГИЯ</p>
      </div>
    </div>
  )
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div
        className="col-1 h-[511.807px] ml-[271.9px] mt-0 relative row-1 w-[840.103px]"
        data-name="image 55"
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgImage55}
        />
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[56px] justify-center ml-[830px] mt-[18px] not-italic relative row-1 text-[#0d0f16] text-[14px] text-center w-[260px]">
        <p className="leading-[normal] mb-0">governance.kz — сложные</p>
        <p className="leading-[normal] mb-0">ИИ-продукты на доступных</p>
        <p className="leading-[normal]">вычислительных мощностях</p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[100px] justify-center ml-[78px] mt-[99px] not-italic relative row-1 text-[#3a4050] text-[20px] w-[552px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`«Будущее инноваций и ИИ упирается в `}</p>
        <p className="leading-[normal]">энергию и вычислительные мощности.»</p>
      </div>
      <div
        className="col-1 h-[68.247px] ml-0 mt-[161.62px] relative row-1 w-[627.918px]"
        data-name="Rectangle"
      />
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[68px] justify-center ml-[59px] mt-[215px] not-italic relative row-1 text-[#3a4050] text-[20px] w-[305px]">
        <p className="leading-[normal] mb-0">Передовая экосистема eGov,</p>
        <p className="leading-[normal]">суперкомпьютеры, ЦОДы.</p>
      </div>
      <div
        className="col-1 h-[120.332px] ml-0 mt-[359.44px] relative row-1 w-[504.237px]"
        data-name="Rectangle"
      />
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[88px] justify-center ml-[16px] mt-[297px] not-italic relative row-1 text-[#3a4050] text-[20px] w-[463px]">
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

function Heading6() {
  return (
    <div
      className="content-stretch flex flex-col h-[523px] items-start leading-[0] relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[#0d0f16] text-[30px] tracking-[-0.3px] w-[min-content]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal]">Стратегический фундамент</p>
      </div>
      <Group6 />
      <Group5 />
    </div>
  )
}

function BackgroundHorizontalBorder3() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Background+HorizontalBorder"
    >
      <div
        aria-hidden
        className="absolute border-[#e6e8ee] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[68px] pt-[66px] px-[20px] sm:px-[28px] relative size-full">
        <Container48 />
        <Heading6 />
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
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
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
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[30px] tracking-[-0.3px] w-full"
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
      <div className="rounded-[12px] border border-[#e0e4ee] bg-white px-[15px] py-[18px]">
        <h3
          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.3] tracking-[-0.1px] text-[#0d0f16]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Human-in-the-loop
        </h3>
        <p
          className="mt-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-[#5a606e]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Ответственность — за уполномоченными лицами
        </p>
      </div>
      <div className="rounded-[12px] border border-[#e0e4ee] bg-white px-[15px] py-[18px]">
        <h3
          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.3] tracking-[-0.1px] text-[#0d0f16]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Замкнутый контур
        </h3>
        <p
          className="mt-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-[#5a606e]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Безопасная среда апробации
        </p>
      </div>
      <div className="rounded-[12px] border border-[#e0e4ee] bg-white px-[15px] py-[18px]">
        <h3
          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.3] tracking-[-0.1px] text-[#0d0f16]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Защита данных
        </h3>
        <p
          className="mt-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-[#5a606e]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Этика и законодательство РК
        </p>
      </div>
      <div className="rounded-[12px] border border-[#e0e4ee] bg-white px-[15px] py-[18px]">
        <h3
          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.3] tracking-[-0.1px] text-[#0d0f16]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Межведомственность
        </h3>
        <p
          className="mt-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-[#5a606e]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Устранение барьеров данных
        </p>
      </div>
      <div className="rounded-[12px] border border-[#e0e4ee] bg-white px-[15px] py-[18px]">
        <h3
          className="font-['IBM_Plex_Sans:SemiBold',sans-serif] text-[16px] font-semibold leading-[1.3] tracking-[-0.1px] text-[#0d0f16]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Прозрачность и аудит
        </h3>
        <p
          className="mt-[12px] font-['IBM_Plex_Sans:Regular',sans-serif] text-[15px] font-normal leading-[1.5] text-[#5a606e]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Проверяемость процессов
        </p>
      </div>
    </div>
  )
}

function HorizontalBorder10() {
  const [showFoundation, setShowFoundation] = useState(false)
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div
        aria-hidden
        className="absolute border-[#e6e8ee] border-b border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center pb-[68px] pt-[66px] px-[20px] sm:px-[28px] relative size-full">
          <Container52 />
          <Heading10 />
          <Container53 />
          <button
            type="button"
            onClick={() => setShowFoundation((v) => !v)}
            aria-expanded={showFoundation}
            className="group mt-[16px] flex cursor-pointer items-center justify-center gap-[10px] self-start rounded-[8px] border border-[#0d0f16] bg-white px-[19px] py-[12px] transition-colors hover:bg-[#0d0f16] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
          >
            <span
              className="font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#0d0f16] transition-colors group-hover:text-white"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Стратегический фундамент
            </span>
            <span
              aria-hidden
              className={`text-[14px] leading-none text-[#0d0f16] transition-all group-hover:text-white ${
                showFoundation ? "rotate-180" : ""
              }`}
            >
              ↓
            </span>
          </button>
          {showFoundation && (
            <div className="relative left-1/2 mt-[20px] w-screen max-w-[1600px] -translate-x-1/2 overflow-hidden rounded-[16px] border border-[#e6e8ee] bg-white">
              <img
                src={imgImage56}
                alt="Стратегический фундамент"
                className="block w-full"
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
    <div
      className="content-stretch flex flex-col items-start max-w-[448.79998779296875px] relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div
        className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white tracking-[-0.24px] whitespace-nowrap"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        <p className="leading-[normal] mb-0">Готовы показать модель на</p>
        <p className="leading-[normal]">ваших данных</p>
      </div>
    </div>
  )
}

function Container64() {
  return (
    <div
      className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[440px]"
      data-name="Container"
    >
      <Container65 />
      <Heading11 />
      <div className="mt-[10px] flex flex-wrap gap-x-[48px] gap-y-[16px]">
        <ContactChannel
          label="ПОЧТА"
          value={CONTACTS.email}
          href={`mailto:${CONTACTS.email}`}
        />
        <ContactChannel
          label="ТЕЛЕФОН"
          value={CONTACTS.phoneDisplay}
          href={`tel:${CONTACTS.phoneHref}`}
        />
      </div>
    </div>
  )
}

function Background8({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[#2242d6] content-stretch flex flex-col items-start px-[26px] py-[14px] relative shrink-0 cursor-pointer transition-colors hover:bg-[#1a35ad]"
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

function ContactChannel({
  label,
  value,
  href,
  external,
}: {
  label: string
  value: string
  href: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex flex-col gap-[8px] no-underline"
    >
      <span className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[11.5px] tracking-[1.2px] text-[#8fa6ff] transition-colors group-hover:text-white">
        {label}
      </span>
      <span
        className="font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-white transition-colors group-hover:text-[#8fa6ff]"
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {value}
      </span>
    </a>
  )
}

function Background7() {
  const [showMeeting, setShowMeeting] = useState(false)
  return (
    <>
      <div
        className="bg-[#0d0f16] relative shrink-0 w-full"
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
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8990a0] text-[11.5px] whitespace-nowrap">
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
function HeroTabs({ onTabClick }: { onTabClick: (id: TabKey) => void }) {
  const tabs: TabKey[] = ["recruitment", "analytics", "modeling"]
  return (
    <div className="hidden md:flex flex-row gap-[6px] shrink-0">
      {tabs.map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => onTabClick(key)}
          className="group flex items-center gap-[6px] rounded-[6px] border border-[#e6e8ee] bg-white px-[12px] py-[8px] text-left cursor-pointer transition-colors hover:border-[#0d0f16] hover:bg-[#f6f7fb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
        >
          <span className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[13px] text-[#2242d6] tabular-nums shrink-0">
            {tabData[key].index}
          </span>
          <span
            className="font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#0d0f16] whitespace-nowrap"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {tabData[key].label}
          </span>
        </button>
      ))}
    </div>
  )
}

type Language = "RU" | "KZ" | "EN"

function LanguageSwitcher({
  language,
  onChange,
}: {
  language: Language
  onChange: (lang: Language) => void
}) {
  const langs: Language[] = ["RU", "KZ", "EN"]
  return (
    <div className="flex flex-row items-center gap-[2px] shrink-0">
      {langs.map((lang, i) => (
        <React.Fragment key={lang}>
          {i > 0 && (
            <span className="text-[12px] text-[#b9c1e8] select-none">·</span>
          )}
          <button
            type="button"
            onClick={() => onChange(lang)}
            className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[11.5px] tracking-[0.46px] px-[6px] py-[4px] cursor-pointer transition-colors hover:text-[#2242d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6] rounded-[4px]"
            style={{
              color: lang === language ? "#2242d6" : "#3a4050",
              fontWeight: lang === language ? 700 : 400,
            }}
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
          className="inline-flex items-center gap-[8px] font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px] text-[#3a4050] cursor-pointer transition-colors hover:text-[#2242d6]"
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
            <div className="absolute inset-0 bg-[#0d0f16]/65" />
            <div className="absolute inset-x-0 bottom-0 h-[160px] bg-gradient-to-b from-transparent via-white/40 to-white" />
          </div>
        )}

        {/* Контент поверх фона */}
        <div className="relative z-10 flex flex-col gap-[20px] px-[20px] sm:px-[44px] pb-[40px] pt-[20px] w-full max-w-[1170px] mx-auto min-h-[300px] sm:min-h-[360px]">
          {/* Heading */}
          <h2
            className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[36px] tracking-[-0.36px] text-white sm:text-[42px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {data.title}
          </h2>

          {/* Description */}
          <p
            className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[18px] leading-[1.65] text-white/75 max-w-[900px]"
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
            <span className="pointer-events-none absolute bottom-[22px] left-1/2 z-30 flex -translate-x-1/2 items-center gap-[10px] rounded-full px-[18px] py-[10px] text-white/85 ring-1 ring-white/30 backdrop-blur-xl transition-all duration-300 group-hover:scale-[1.05] group-hover:text-white group-hover:ring-white/50">
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
                className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 animate-[glass-video-flow_4s_linear_infinite] group-hover:opacity-100"
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

function Background() {
  const [imageModal, setImageModal] = useState<ProductImageKey | null>(null)
  const [activeTab, setActiveTab] = useState<TabKey | null>(null)
  const [language, setLanguage] = useState<Language>("RU")

  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash.replace("#", "")
      const tab =
        h === "diagnostics"
          ? "recruitment"
          : h === "coordination"
            ? "analytics"
            : h === "modeling"
              ? "modeling"
              : null
      if (tab) {
        setActiveTab(tab as TabKey)
      } else if (!h) {
        setActiveTab(null)
      }
    }
    // Поддерживаем прямые ссылки: site.com/#modeling открывает моделирование сразу.
    applyHash()
    window.addEventListener("hashchange", applyHash)
    return () => window.removeEventListener("hashchange", applyHash)
  }, [])

  // Вкладки шапки открывают отдельную страницу контура, как раньше
  const handleTabChange = (key: TabKey) => {
    setActiveTab(key)
    const hash =
      key === "recruitment"
        ? "diagnostics"
        : key === "analytics"
          ? "coordination"
          : "modeling"
    window.history.replaceState(null, "", `#${hash}`)
    window.scrollTo(0, 0)
  }

  const handleBack = () => {
    setActiveTab(null)
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      )
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const isSimulator = activeTab === "modeling"

  return (
    <div
      className={`${isSimulator ? "bg-black" : "bg-white"} content-stretch flex flex-col items-stretch relative shrink-0 w-full`}
      data-name="Background"
    >
      {isSimulator ? (
        <>
          {/* Белая шапка остаётся, ниже — полноэкранная чёрная страница симуляторов */}
          <div className="bg-white w-full">
            <HorizontalBorder
              onTabClick={handleTabChange}
              onHomeClick={handleBack}
              language={language}
              onLanguageChange={setLanguage}
            />
          </div>
          <AISimulatorPage onBack={handleBack} />
          <div className="bg-black w-full">
            <Container66 />
          </div>
        </>
      ) : (
        <>
          <div className="bg-white w-full">
            <HorizontalBorder
              onTabClick={handleTabChange}
              onHomeClick={handleBack}
              language={language}
              onLanguageChange={setLanguage}
            />
          </div>
          <div className="w-full max-w-[1170px] mx-auto flex flex-col items-center">
            {activeTab ? (
              <TabPage tabKey={activeTab} onBack={handleBack} />
            ) : (
              <>
                <Frame21 onTabClick={handleTabChange} />
                <ContoursSection onTabClick={handleTabChange} />
                <TeamSection />
                <SyntheticResearchSection onTabClick={handleTabChange} />
                <BackgroundHorizontalBorder2 />
                <BackgroundHorizontalBorder3 />
                <HorizontalBorder10 />
                <Background7 />
              </>
            )}
            <Container66 />
          </div>
        </>
      )}
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
