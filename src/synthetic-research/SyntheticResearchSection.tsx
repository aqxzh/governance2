import { useEffect, useRef, useState } from "react"

const BLUE = "#2242d6"
const BLUE_BRIGHT = "#2f6fed"
const PURPLE = "#7c5cff"
const PURPLE2 = "#8b5cf6"
const TEAL = "#14b8a6"
const ORANGE = "#f59e0b"
const GRAY_LINE = "#d6dbe5"
const BORDER = "#d8e2f4"

function DocIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g
      stroke={BLUE_BRIGHT}
      strokeWidth={4}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d={`M ${cx - 22} ${cy - 26} L ${cx + 8} ${cy - 26} L ${cx + 22} ${cy - 12} L ${cx + 22} ${cy + 26} L ${cx - 22} ${cy + 26} Z`}
      />
      <path
        d={`M ${cx + 8} ${cy - 26} L ${cx + 8} ${cy - 12} L ${cx + 22} ${cy - 12}`}
      />
      <line x1={cx - 13} y1={cy - 4} x2={cx + 13} y2={cy - 4} />
      <line x1={cx - 13} y1={cy + 6} x2={cx + 13} y2={cy + 6} />
      <line x1={cx - 13} y1={cy + 16} x2={cx + 3} y2={cy + 16} />
    </g>
  )
}

function DbIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g stroke={PURPLE} strokeWidth={4} fill="none" strokeLinecap="round">
      <ellipse cx={cx} cy={cy - 18} rx={24} ry={9} />
      <line x1={cx - 24} y1={cy - 18} x2={cx - 24} y2={cy + 18} />
      <line x1={cx + 24} y1={cy - 18} x2={cx + 24} y2={cy + 18} />
      <path d={`M ${cx - 24} ${cy + 18} A 24 9 0 0 1 ${cx + 24} ${cy + 18}`} />
      <path d={`M ${cx - 24} ${cy} A 24 9 0 0 1 ${cx + 24} ${cy}`} />
    </g>
  )
}

function ChartIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g fill={TEAL}>
      <rect x={cx - 26} y={cy + 2} width={10} height={12} rx={2.5} />
      <rect x={cx - 8} y={cy - 10} width={10} height={24} rx={2.5} />
      <rect x={cx + 10} y={cy - 24} width={10} height={38} rx={2.5} />
    </g>
  )
}

function PersonOrangeIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g stroke={ORANGE} strokeWidth={4.5} fill="none" strokeLinecap="round">
      <circle cx={cx} cy={cy - 12} r={11} fill={ORANGE} stroke="none" />
      <path
        d={`M ${cx - 20} ${cy + 24} C ${cx - 20} ${cy + 4}, ${cx + 20} ${cy + 4}, ${cx + 20} ${cy + 24}`}
      />
    </g>
  )
}

function CircleIcon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={22}
      stroke={PURPLE2}
      strokeWidth={5}
      fill="none"
    />
  )
}

function PersonIcon({ cx, cy, s = 1 }: { cx: number; cy: number; s?: number }) {
  return (
    <g stroke={BLUE} strokeWidth={4.5 * s} fill="none" strokeLinecap="round">
      <circle cx={cx} cy={cy - 14 * s} r={11 * s} fill={BLUE} stroke="none" />
      <path
        d={`M ${cx - 20 * s} ${cy + 22 * s} C ${cx - 20 * s} ${cy + 2 * s}, ${cx + 20 * s} ${cy + 2 * s}, ${cx + 20 * s} ${cy + 22 * s}`}
      />
    </g>
  )
}

function TextLines({
  x,
  cy,
  w1,
  w2,
}: {
  x: number
  cy: number
  w1: number
  w2: number
}) {
  return (
    <>
      <rect x={x} y={cy - 14} width={w1} height={8} rx={4} fill={GRAY_LINE} />
      <rect x={x} y={cy + 8} width={w2} height={8} rx={4} fill={GRAY_LINE} />
    </>
  )
}

function Checkmark({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M ${x} ${y - 2} L ${x + 8} ${y + 8} L ${x + 24} ${y - 14}`}
      stroke={BLUE}
      strokeWidth={5}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  )
}

function Robot({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={118} fill="#e3edff" opacity={0.45} />
      <circle cx={cx} cy={cy} r={104} fill="#eef4ff" opacity={0.6} />
      <circle
        cx={cx}
        cy={cy}
        r={92}
        fill="#ffffff"
        stroke={BORDER}
        strokeWidth={2}
      />
      <g
        stroke={BLUE}
        strokeWidth={5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1={cx} y1={cy - 66} x2={cx} y2={cy - 82} />
        <rect x={cx - 54} y={cy - 66} width={108} height={74} rx={20} />
        <line x1={cx - 54} y1={cy - 42} x2={cx - 64} y2={cy - 42} />
        <line x1={cx + 54} y1={cy - 42} x2={cx + 64} y2={cy - 42} />
        <line x1={cx - 17} y1={cy + 25} x2={cx + 17} y2={cy + 25} />
      </g>
      <circle cx={cx - 24} cy={cy - 36} r={7} fill={BLUE} />
      <circle cx={cx + 24} cy={cy - 36} r={7} fill={BLUE} />
      <circle cx={cx} cy={cy - 88} r={6.5} fill={BLUE} />
    </g>
  )
}

export function SyntheticDiagram() {
  const leftCards = [
    { y: 118, cy: 174 },
    { y: 262, cy: 318 },
    { y: 406, cy: 462 },
    { y: 550, cy: 606 },
    { y: 694, cy: 750 },
  ]
  const rightCards = [
    { y: 115, cy: 165, people: [{ cx: 1380, s: 1 }] },
    {
      y: 259,
      cy: 309,
      people: [
        { cx: 1362, s: 0.85 },
        { cx: 1398, s: 0.85 },
      ],
    },
    { y: 403, cy: 453, people: [{ cx: 1380, s: 1 }] },
    {
      y: 547,
      cy: 597,
      people: [
        { cx: 1350, s: 0.72 },
        { cx: 1380, s: 0.72 },
        { cx: 1410, s: 0.72 },
      ],
    },
    { y: 691, cy: 741, people: [{ cx: 1380, s: 1 }] },
  ]
  const barDots = [388, 462, 536]
  const barToCards: [number, number][] = [
    [388, 165],
    [388, 309],
    [462, 453],
    [536, 597],
    [536, 741],
  ]
  const leftIcons = [
    <DocIcon key="doc" cx={122} cy={174} />,
    <DbIcon key="db" cx={122} cy={318} />,
    <ChartIcon key="chart" cx={122} cy={462} />,
    <PersonOrangeIcon key="person" cx={122} cy={606} />,
    <CircleIcon key="circle" cx={122} cy={750} />,
  ]

  return (
    <svg
      viewBox="0 0 1640 920"
      className="block h-auto w-full"
      role="img"
      aria-label="Схема опроса синтетических покупателей"
    >
      <defs>
        <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx={0}
            dy={5}
            stdDeviation={10}
            floodColor="#1e3a8a"
            floodOpacity={0.08}
          />
        </filter>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef4ff" />
          <stop offset="100%" stopColor="#dbe7ff" />
        </linearGradient>
      </defs>

      {/* Нижняя пунктирная линия */}
      <path
        d="M 200 800 L 200 852 L 1440 852 L 1440 800"
        stroke={BLUE}
        strokeWidth={2.5}
        strokeDasharray="8 8"
        strokeOpacity={0.55}
        fill="none"
      />
      <rect
        x={706}
        y={818}
        width={272}
        height={38}
        rx={9}
        fill="#f2f7ff"
        stroke={BLUE}
        strokeWidth={2}
        strokeDasharray="7 7"
        strokeOpacity={0.8}
      />

      {/* Кривые от левых карточек к роботу */}
      {leftCards.map((c) => (
        <path
          key={`lc-${c.y}`}
          d={`M 362 ${c.cy} C 510 ${c.cy}, 575 462, 700 462`}
          stroke={BLUE}
          strokeWidth={3.5}
          strokeOpacity={0.9}
          fill="none"
        />
      ))}

      {/* Кривые от робота к вертикальной полосе */}
      {barDots.map((by) => (
        <path
          key={`rb-${by}`}
          d={`M 950 462 C 1000 462, 1012 ${by}, 1066 ${by}`}
          stroke={BLUE}
          strokeWidth={3.5}
          strokeOpacity={0.9}
          fill="none"
        />
      ))}

      {/* Кривые от полосы к правым карточкам */}
      {barToCards.map(([by, rcy]) => (
        <path
          key={`bc-${by}-${rcy}`}
          d={`M 1092 ${by} C 1160 ${by}, 1218 ${rcy}, 1288 ${rcy}`}
          stroke={BLUE}
          strokeWidth={3.5}
          strokeOpacity={0.9}
          fill="none"
        />
      ))}

      {/* Вертикальная полоса */}
      <rect
        x={1066}
        y={372}
        width={26}
        height={180}
        rx={13}
        fill="url(#barGrad)"
        stroke={BORDER}
        strokeWidth={1.5}
      />

      {/* Левые карточки */}
      {leftCards.map((c, i) => (
        <g key={`card-${c.y}`} filter="url(#cardShadow)">
          <rect
            x={60}
            y={c.y}
            width={300}
            height={112}
            rx={16}
            fill="#ffffff"
          />
          {leftIcons[i]}
          <TextLines x={172} cy={c.cy} w1={150} w2={105} />
        </g>
      ))}

      {/* Правые карточки */}
      {rightCards.map((c) => (
        <g key={`rcard-${c.y}`} filter="url(#cardShadow)">
          <rect
            x={1290}
            y={c.y}
            width={180}
            height={100}
            rx={14}
            fill="#ffffff"
          />
          {c.people.map((p) => (
            <PersonIcon key={p.cx} cx={p.cx} cy={c.cy} s={p.s} />
          ))}
        </g>
      ))}

      {/* Серые строки и галочки справа */}
      {rightCards.map((c) => (
        <g key={`rtext-${c.y}`}>
          <TextLines x={1492} cy={c.cy} w1={88} w2={58} />
          <Checkmark x={1600} y={c.cy} />
        </g>
      ))}

      {/* Робот */}
      <Robot cx={830} cy={462} />

      {/* Точки соединения */}
      {leftCards.map((c) => (
        <circle key={`ld-${c.y}`} cx={362} cy={c.cy} r={6.5} fill={BLUE} />
      ))}
      <circle cx={700} cy={462} r={7} fill={BLUE} />
      <line
        x1={700}
        y1={462}
        x2={736}
        y2={462}
        stroke={BLUE}
        strokeWidth={3.5}
      />
      <circle cx={950} cy={462} r={7} fill={BLUE} />
      {barDots.map((by) => (
        <circle key={`bd-${by}`} cx={1079} cy={by} r={6.5} fill={BLUE} />
      ))}
      {rightCards.map((c) => (
        <circle key={`rd-${c.y}`} cx={1290} cy={c.cy} r={6} fill={BLUE} />
      ))}
    </svg>
  )
}

export default function SyntheticResearchSection({
  onTabClick,
}: {
  onTabClick: (key: "recruitment" | "modeling" | "analytics") => void
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
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
    <section
      ref={sectionRef}
      className="w-full bg-white border-t border-[#e6e8ee]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition:
          "opacity .6s ease, transform .6s cubic-bezier(0.2,0.8,0.2,1)",
      }}
    >
      <div className="w-full max-w-[1170px] mx-auto px-[20px] sm:px-[28px] pt-[60px] pb-[64px] flex flex-col">
        <p className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[12px] not-italic leading-[normal] tracking-[1.2px] text-[#2242d6]">
          СИНТЕТИЧЕСКИЕ ИССЛЕДОВАНИЯ
        </p>
        <h2
          className="mt-[14px] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[34px] sm:text-[42px] tracking-[-0.34px] leading-[1.1]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Один вопрос. Разные сценарии.
        </h2>
        <p
          className="mt-[18px] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[18px] leading-[1.65] text-[#3a4050] max-w-[720px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Как исследовать реакцию на предложение без полевого опроса? В исходном
          примере 100 синтетических покупателей отвечают на один вопрос при
          разной цене. Ответы переводятся в оценку для сравнения сценариев.
        </p>
        <h3
          className="mt-[30px] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[20px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Опрос 100 синтетических покупателей
        </h3>

        <div className="mt-[24px] flex flex-col lg:flex-row items-center gap-[36px]">
          <div className="w-full lg:flex-1 min-w-0">
            <img
              src="/graphics/data-flow-ai-filtering.png"
              alt="Схема потока данных и ИИ-фильтрации"
              className="block w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="w-full lg:w-[340px] shrink-0 flex flex-col justify-center gap-[20px]">
            <p
              className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[16px] leading-[1.6] text-[#3a4050]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Демонстрация на исходных синтетических данных. Это не подключённая
              информационная система и не результаты работы с вашими данными.
            </p>
            <div>
              <button
                type="button"
                onClick={() => onTabClick("modeling")}
                className="inline-flex items-center justify-center rounded-[10px] bg-[#2242d6] px-[24px] py-[14px] font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[15px] text-white transition-colors hover:bg-[#1a34b0] cursor-pointer"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Посмотреть метод и пример
              </button>
            </div>
          </div>
        </div>

        <p className="mt-[28px] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[13px] text-[#8990a0]">
          Статическая реконструкция исходной схемы; не работающий сервис.
        </p>
      </div>
    </section>
  )
}
