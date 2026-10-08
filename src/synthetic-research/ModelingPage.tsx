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
                src="/graphics/ai-robot.png"
                alt="ИИ-робот"
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
          <div className="mt-[32px]">
            <RegistryTable rows={scenarioRows} onSelect={setSelectedRow} />
          </div>
        )}

        {activeTab === 2 && (
          <div className="mt-[32px]">
            <RegistryTable rows={supplyRows} onSelect={setSelectedRow} />
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
