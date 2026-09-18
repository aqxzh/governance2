import React, { useState } from "react";
import { createPortal } from "react-dom";
import { VideoModal } from "../../VideoModal";

/* ── Sidebar menu data ─────────────────────────────────────── */
const MENU_SECTIONS = [
  {
    id: "digests",
    label: "ДАЙДЖЕСТЫ",
    items: [
      { id: "digest-today", label: "Дайджест за сегодня" },
      { id: "digest-week", label: "Дайджест за неделю" },
      { id: "digest-critical", label: "Критические события" },
    ],
  },
  {
    id: "documents",
    label: "ДОКУМЕНТЫ",
    items: [
      { id: "doc-overdue", label: "Просроченные" },
      { id: "doc-priority", label: "Приоритетные" },
      { id: "doc-control", label: "На контроле" },
    ],
  },
  {
    id: "social",
    label: "СОЦИАЛЬНЫЕ СЕТИ",
    items: [
      { id: "social-monitor", label: "Мониторинг" },
      { id: "social-sentiment", label: "Тональность" },
    ],
  },
];

/* ── Chat messages ──────────────────────────────────────────── */
const INITIAL_MESSAGES: { id: number; role: "user" | "bot"; text: string }[] = [];

/* ── Digest cards ───────────────────────────────────────────── */
const DIGESTS = [
  {
    id: 1,
    date: "18 сен 2026",
    title: "Дайджест за сегодня",
    badge: "🔴 Критично",
    badgeColor: "#fef2f2",
    badgeBorder: "#fca5a5",
    badgeText: "#dc2626",
    items: [
      "31 просроченный документ на исполнении",
      "Пак Т.Е. — 10-е место по нарушениям",
      "Департамент логистики: перегруз ×2.3",
    ],
  },
  {
    id: 2,
    date: "17 сен 2026",
    title: "Входящая корреспонденция",
    badge: "📄 Документы",
    badgeColor: "#eff6ff",
    badgeBorder: "#bfdbfe",
    badgeText: "#1d4ed8",
    items: [
      "Поступило 128 новых документов",
      "Из них приоритетных: 14",
      "Требуют резолюции до 20.09: 37",
    ],
  },
  {
    id: 3,
    date: "15 сен 2026",
    title: "Социальные сети",
    badge: "📣 Медиа",
    badgeColor: "#f5f3ff",
    badgeBorder: "#c4b5fd",
    badgeText: "#7c3aed",
    items: [
      "Упоминаний организации: 412",
      "Тональность: 68% позитив",
      "Критических публикаций: 3",
    ],
  },
];

/* ── Kazakhstan map ──────────────────────────────────────────── */
const KZ_OUTER =
  "M 32,111 L 53,55 L 106,55 L 148,42 L 232,28 L 274,14 " +
  "L 317,0 L 380,14 L 422,14 L 454,28 L 485,28 L 549,28 " +
  "L 633,55 L 718,97 L 739,124 L 781,152 " +
  "L 781,236 L 760,319 L 718,332 L 696,346 " +
  "L 633,374 L 612,374 L 570,388 L 528,402 " +
  "L 485,402 L 435,402 L 422,402 L 391,402 " +
  "L 359,402 L 317,402 L 274,415 L 232,415 " +
  "L 212,402 L 169,402 L 106,388 L 64,388 " +
  "L 32,374 L 21,374 " +
  "L 11,332 L 0,291 L 11,263 L 21,236 " +
  "L 11,208 L 21,180 L 21,152 Z";

interface Oblast {
  id: string; name: string; fullName: string; capital: string;
  value: number; points: string; lx: number; ly: number;
}

const OBLASTS: Oblast[] = [
  { id:"karaganda", name:"Карагандинская", fullName:"Карагандинская",         capital:"Қарағанды",          value:167, points:"274,152 633,152 633,319 274,319",                       lx:418, ly:238 },
  { id:"wko",       name:"ЗКО",           fullName:"Западно-Казахстанская",   capital:"Уральск",            value:54,  points:"32,111 53,55 148,42 148,208 21,208",                   lx:72,  ly:138 },
  { id:"atyrau",    name:"Атырауская",    fullName:"Атырауская",              capital:"Атырау",             value:61,  points:"21,208 148,208 148,263 84,319 21,319",                 lx:72,  ly:258 },
  { id:"mangystau", name:"Мангистауская", fullName:"Мангистауская",           capital:"Актау",              value:37,  points:"21,319 84,319 148,263 148,402 21,402",                 lx:68,  ly:356 },
  { id:"aktobe",    name:"Актюбинская",   fullName:"Актюбинская",             capital:"Актобе",             value:143, points:"148,97 274,97 274,208 148,208",                        lx:211, ly:152 },
  { id:"kostanay",  name:"Костанайская",  fullName:"Костанайская",            capital:"Қостанай",           value:93,  points:"148,42 380,14 380,97 148,97",                          lx:258, ly:65  },
  { id:"nko",       name:"СКО",           fullName:"Северо-Казахстанская",    capital:"Петропавловск",      value:44,  points:"380,14 464,14 464,97 380,97",                          lx:422, ly:60  },
  { id:"akmola",    name:"Акмолинская",   fullName:"Акмолинская",             capital:"Кокшетау",           value:87,  points:"274,97 464,97 464,152 274,152",                        lx:369, ly:127 },
  { id:"pavlodar",  name:"Павлодарская",  fullName:"Павлодарская",            capital:"Павлодар",           value:71,  points:"464,14 633,55 633,152 464,152",                        lx:546, ly:100 },
  { id:"ekz",       name:"ВКО",           fullName:"Восточно-Казахстанская",  capital:"Өскемен",            value:98,  points:"633,55 781,152 781,236 633,236",                       lx:700, ly:168 },
  { id:"abay",      name:"Абайская",      fullName:"Абайская",                capital:"Семей",              value:62,  points:"464,152 633,152 633,236 464,236",                      lx:548, ly:197 },
  { id:"ulytau",    name:"Ұлытау",        fullName:"Ұлытау",                  capital:"Жезқазған",          value:43,  points:"148,208 274,208 274,319 148,319",                      lx:211, ly:264 },
  { id:"kyzylorda", name:"Қызылорда",     fullName:"Қызылординская",          capital:"Қызылорда",          value:48,  points:"148,319 274,319 274,402 148,402",                      lx:211, ly:362 },
  { id:"turkestan", name:"Туркестан",     fullName:"Туркестанская",           capital:"Туркестан",          value:134, points:"274,319 447,319 447,402 274,402",                      lx:361, ly:362 },
  { id:"jambyl",    name:"Жамбылская",    fullName:"Жамбылская",              capital:"Тараз",              value:76,  points:"447,236 549,236 549,402 447,402",                      lx:498, ly:338 },
  { id:"almaty",    name:"Алматинская",   fullName:"Алматинская",             capital:"Қонаев",             value:212, points:"549,236 633,236 633,402 549,402",                      lx:591, ly:338 },
  { id:"zhetisu",   name:"Жетісу",        fullName:"Жетісу",                  capital:"Талдықорған",        value:58,  points:"633,236 781,236 781,402 633,402",                       lx:700, ly:330 },
];

const KZ_CITIES = [
  { name:"Астана",  x:453, y:120, capital:true,  value:198 },
  { name:"Алматы",  x:568, y:339, capital:false, value:312 },
  { name:"Шымкент", x:414, y:365, capital:false, value:155 },
];

function oblastColor(_id: string): { fill: string; stroke: string } {
  return { fill: "#e8eaed", stroke: "#c4c9d1" };
}

/* ── Kazakhstan detailed SVG map ────────────────────────────── */
function KazakhstanMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; oblast: Oblast } | null>(null);

  const handleEnter = (e: React.MouseEvent<SVGElement>, oblast: Oblast) => {
    setHovered(oblast.id);
    const rect = (e.currentTarget.closest("svg") as SVGElement).getBoundingClientRect();
    setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top, oblast });
  };
  const handleMove = (e: React.MouseEvent<SVGElement>) => {
    const rect = (e.currentTarget.closest("svg") as SVGElement).getBoundingClientRect();
    setTooltip(prev => prev ? { ...prev, x: e.clientX - rect.left, y: e.clientY - rect.top } : prev);
  };
  const handleLeave = () => { setHovered(null); setTooltip(null); };

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden" style={{ background: "#f7f8fa" }}>
      <svg className="absolute inset-0 w-full h-full" viewBox="-15 -10 810 440" preserveAspectRatio="xMidYMid meet">
        <defs>
          <clipPath id="kz-outer">
            <path d={KZ_OUTER} />
          </clipPath>
          <filter id="region-shadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#00000022" />
          </filter>
        </defs>

        <rect x="-15" y="-10" width="825" height="450" fill="#f7f8fa" />

        <text x="-4" y="270" textAnchor="middle" fill="#aab0bb" fontSize="7" fontStyle="italic"
          transform="rotate(-90,-4,270)">КАСПИЙСКОЕ МОРЕ</text>

        <path d={KZ_OUTER} fill="#e8eaed" stroke="none" />

        <g clipPath="url(#kz-outer)">
          {OBLASTS.map(ob => {
            const { fill, stroke } = oblastColor(ob.id);
            const isHov = hovered === ob.id;
            return (
              <polygon
                key={ob.id}
                points={ob.points}
                fill={isHov ? "#d0d4da" : fill}
                stroke="#c4c9d1"
                strokeWidth={isHov ? "1.5" : "0.7"}
                strokeLinejoin="round"
                style={{ cursor: "pointer", transition: "fill 0.12s" }}
                onMouseEnter={e => handleEnter(e, ob)}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
              />
            );
          })}

          <path d="M 487,243 L 502,238 L 525,236 L 552,237 L 578,241 L 601,247 L 610,254 L 598,260 L 572,263 L 544,262 L 516,258 L 495,253 Z"
            fill="#d4dfe8" stroke="#b8c8d8" strokeWidth="0.7" style={{ pointerEvents:"none" }} />
          <text x="548" y="254" textAnchor="middle" fill="#8fa8bc" fontSize="6" fontStyle="italic" style={{ pointerEvents:"none" }}>оз. Балхаш</text>

          <ellipse cx="212" cy="286" rx="16" ry="9" fill="#d4dfe8" stroke="#b8c8d8" strokeWidth="0.7" style={{ pointerEvents:"none" }} />
          <text x="212" y="290" textAnchor="middle" fill="#8fa8bc" fontSize="5.5" fontStyle="italic" style={{ pointerEvents:"none" }}>Арал</text>
        </g>

        <path d={KZ_OUTER} fill="none" stroke="#9aa3b0" strokeWidth="1.2" strokeLinejoin="round" />

        {OBLASTS.map(ob => (
          <text key={ob.id + "_lbl"} x={ob.lx} y={ob.ly} textAnchor="middle"
            fill="#7a8494" fontSize="6.5" fontWeight="600"
            style={{ pointerEvents:"none", letterSpacing:"0.03em" }}>
            {ob.name}
          </text>
        ))}

        {KZ_CITIES.map(c => (
          <g key={c.name} style={{ pointerEvents:"none" }}>
            <circle cx={c.x} cy={c.y} r={c.capital ? 3.5 : 2.5}
              fill={c.capital ? "#374151" : "#6b7280"}
              stroke="white" strokeWidth="1.2" />
            {c.capital && <text x={c.x + 6} y={c.y - 4} fill="#1f2937" fontSize="7" fontWeight="700">★ {c.name}</text>}
            {!c.capital && <text x={c.x + 5} y={c.y + 3} fill="#4b5563" fontSize="6" fontWeight="500">{c.name}</text>}
          </g>
        ))}

      </svg>

      {tooltip && (
        <div
          className="absolute pointer-events-none bg-white border border-[#e2e8f0] rounded-lg shadow-xl px-3 py-2"
          style={{ left: Math.min(tooltip.x + 14, 999), top: tooltip.y - 55, minWidth: 155, zIndex: 20 }}
        >
          <div className="text-[11px] font-semibold text-[#0f172a] mb-0.5">{tooltip.oblast.fullName}</div>
          <div className="text-[10px] text-[#64748b]">Область: <span className="font-medium text-[#1e293b]">{tooltip.oblast.name}</span></div>
          <div className="text-[10px] text-[#64748b]">Центр: <span className="font-medium text-[#1e293b]">{tooltip.oblast.capital}</span></div>
          <div className="text-[10px] text-[#64748b] mt-1">
            Просрочено: <span className="font-bold text-[#ef4444]">{tooltip.oblast.value} шт</span>
          </div>
        </div>
      )}
    </div>
  );
}

function VideoButton() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setShowVideo(true)}
        aria-label="Смотреть видео — Обзор для руководства"
        className="group absolute bottom-[12px] right-[12px] z-20 flex cursor-pointer items-center gap-[10px] rounded-full bg-black/55 pl-[14px] pr-[18px] py-[12px] text-white/95 ring-1 ring-white/30 backdrop-blur-md transition-all duration-300 hover:scale-[1.05] hover:bg-white/90 hover:text-[#0d1117] hover:ring-white/60 outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
          <path d="M8 5.14v13.72L19 12 8 5.14z" />
        </svg>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] leading-none whitespace-nowrap">
          Смотреть видео
        </span>
      </button>
      {showVideo &&
        createPortal(
          <VideoModal
            src="/videos/ai%20sovetnik.webm"
            title="AI-Советник — обзор для руководства"
            onClose={() => setShowVideo(false)}
            large
          />,
          document.body,
        )}
    </>
  );
}

/* ── Dashboard ─────────────────────────────────────────────── */
function DashboardBody() {
  const [activeItem, setActiveItem] = useState("digest-today");
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [chatMode, setChatMode] = useState("chat");

  const CHAT_MODES = [
    { id: "deep",  label: "Deep Research", icon: "🔬" },
    { id: "web",   label: "Веб поиск",     icon: "🌐" },
    { id: "debate",label: "Дебаты",        icon: "⚖️" },
    { id: "chat",  label: "Чат",           icon: "💬" },
    { id: "docs",  label: "Документы",     icon: "📄" },
  ];

  const handleSend = () => {
    if (!chatInput.trim()) return;
    const userMsg = { id: messages.length + 1, role: "user" as const, text: chatInput };
    setMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          role: "bot" as const,
          text: "Анализирую запрос и подготавливаю ответ...",
        },
      ]);
    }, 600);
  };

  return (
    <div
      className="w-[1540px] h-[830px] flex flex-col overflow-hidden"
      style={{ background: "#0d1117" }}
    >
      {/* ── Top header ────────────────────────────────────── */}
      <div className="px-[12px] pt-[12px]">
        <div className="flex items-center justify-between px-[16px] py-[8px] rounded-xl drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#d3af83] text-[22px] leading-[24px] whitespace-nowrap">
            AI-Советник{" "}
            <span className="font-['Inter:Regular',sans-serif] font-normal">(AI ассистент руководителя, AI планирование, AI культура)</span>
          </p>
          <button className="bg-[#155dfc] text-white text-[12px] font-['Inter:Medium',sans-serif] font-medium px-[12px] py-[6px] rounded cursor-pointer hover:bg-[#1a6aff] transition-colors shrink-0">
            Обновить данные
          </button>
        </div>
      </div>

      {/* ── Subtitle ──────────────────────────────────────── */}
      <div className="pl-[24px] pr-[16px] py-[8px]">
        <span className="font-['Inter:Regular',sans-serif] font-normal text-[#ffefd9] text-[16px] leading-[16px] tracking-[0.3px]">
          Контролируйте исполнение документов —
        </span>
        <span className="font-['Inter:Regular',sans-serif] font-normal text-[#d3af83] text-[16px] leading-[16px] tracking-[0.3px]">
          {" "}без ручной аналитики
        </span>
      </div>

      {/* ── Main content row ──────────────────────────────── */}
      <div className="flex gap-[9.4px] flex-1 min-h-0 px-[9.4px] pb-[9.4px] overflow-hidden">

        {/* ── Left sidebar ────────────────────────────────── */}
        <div
          className="bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden"
          style={{ width: 150, minWidth: 150 }}
        >
          {/* Search */}
          <div className="p-[6.3px]">
            <div className="border border-[#e5e7eb] rounded px-[6px] py-[4.5px]">
              <span className="font-['Inter:Regular',sans-serif] font-normal text-[#99a1af] text-[9.4px]">
                Поиск...
              </span>
            </div>
          </div>

          {/* Новый чат */}
          <div className="px-[6.3px] pb-[5px]">
            <button className="w-full bg-[#155dfc] hover:bg-[#1a6aff] transition-colors text-white text-[8.5px] font-['Inter:Medium',sans-serif] font-medium rounded py-[5px] flex items-center justify-center gap-[4px]">
              <span className="text-[10px] leading-none">＋</span> Новый чат
            </button>
          </div>

          {/* Active pill */}
          <div className="px-[6.3px] pb-[6.3px]">
            <div className="bg-[#eff6ff] border border-[#bedbff] rounded flex gap-[4.7px] items-center px-[6px] py-[4.5px]">
              <span className="text-[#1447e6] text-[9.4px] font-['Inter:Medium',sans-serif] font-medium">🌡️</span>
              <span className="text-[#1447e6] text-[9.4px] font-['Inter:Medium',sans-serif] font-medium">Тепловая карта</span>
            </div>
          </div>

          {/* Menu sections */}
          <div className="flex-1 overflow-y-auto px-[6.3px] pb-[6.3px]">
            {MENU_SECTIONS.map((section) => (
              <div key={section.id} className="mb-[8px]">
                <div className="font-['Inter:Bold',sans-serif] font-semibold text-[#99a1af] text-[7.8px] tracking-[0.4px] leading-[11.2px] mb-[3px]">
                  {section.label}
                </div>
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`flex gap-[4.7px] items-center w-full px-[4.7px] py-[3.1px] rounded text-left transition-colors ${
                      activeItem === item.id
                        ? "bg-[#dbeafe]"
                        : "hover:bg-[#f9fafb]"
                    }`}
                  >
                    <span
                      className={`text-[8.6px] font-['Inter:Regular',sans-serif] shrink-0 ${
                        activeItem === item.id ? "text-[#193cb8]" : "text-[#4a5565]"
                      }`}
                    >
                      ◆
                    </span>
                    <span
                      className={`text-[9.4px] font-['Inter:Regular',sans-serif] truncate leading-[12.5px] ${
                        activeItem === item.id
                          ? "text-[#193cb8] font-['Inter:Medium',sans-serif] font-medium"
                          : "text-[#4a5565]"
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Digest cards column ─────────────────────────── */}
        <div
          className="bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden"
          style={{ width: 220 }}
        >
          <div className="border-b border-[#f3f4f6] px-[10px] pt-[9.4px] pb-[8px] shrink-0">
            <div className="font-['Inter:Bold',sans-serif] font-semibold text-[#364153] text-[10.5px] leading-[15px]">
              Дайджесты и документы
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-[8px] flex flex-col gap-[7px]">
            {DIGESTS.map((doc) => (
              <div key={doc.id} className="bg-white border border-[#e5e7eb] rounded-lg p-[9px]">
                <div className="flex items-center justify-between mb-[6px]">
                  <span className="text-[9px] text-[#99a1af] font-['Inter:Regular',sans-serif]">{doc.date}</span>
                  <span
                    className="text-[8px] px-[6px] py-[2px] rounded-full border font-['Inter:Medium',sans-serif]"
                    style={{ background: doc.badgeColor, borderColor: doc.badgeBorder, color: doc.badgeText }}
                  >
                    {doc.badge}
                  </span>
                </div>
                <div className="text-[9.5px] font-['Inter:Bold',sans-serif] text-[#101828] mb-[5px] leading-[13px]">{doc.title}</div>
                <ul className="space-y-[3px]">
                  {doc.items.map((item, i) => (
                    <li key={i} className="flex gap-[5px] items-start">
                      <span className="text-[#d3af83] text-[7px] mt-[1px] shrink-0">◆</span>
                      <span className="text-[8px] text-[#4a5565] font-['Inter:Regular',sans-serif] leading-[1.35]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main content area ───────────────────────────── */}
        <div className="flex-1 bg-white rounded-xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between px-[12.5px] pt-[9.4px] pb-0 shrink-0">
            <div className="flex flex-col">
              <div className="flex gap-[6.3px] items-center">
                <span className="text-[12.5px]">📊</span>
                <span className="font-['Inter:Bold',sans-serif] font-semibold text-[#101828] text-[12.5px] leading-[18.8px]">
                  Карта исполнения по регионам Казахстана
                </span>
                <span className="text-[#99a1af] text-[9.4px]">ⓘ</span>
              </div>
              <span className="text-[#6a7282] text-[8.6px] font-['Inter:Regular',sans-serif] leading-[12.3px]">
                Распределение просроченных документов по областям Казахстана
              </span>
            </div>
            <button className="border border-[#d1d5dc] text-[#4a5565] text-[9.4px] font-['Inter:Regular',sans-serif] px-[9.2px] py-[4px] rounded hover:bg-[#f9fafb] transition-colors">
              Export Excel
            </button>
          </div>

          {/* Map + floating chat overlay + input */}
          <div className="px-[12.5px] pt-[9.4px] pb-[9.4px] flex-1 min-h-0 flex flex-col gap-[7px] overflow-hidden">
            {/* Map — full remaining height, relative for overlay */}
            <div className="relative rounded-lg overflow-hidden border border-[#e5e7eb] flex-1 min-h-0">
              <KazakhstanMap />
              <VideoButton />

              {/* Chat messages float over the map */}
              {messages.length > 0 && (
                <div className="absolute bottom-[8px] right-[8px] flex flex-col gap-[5px] items-end" style={{ maxWidth: 260, maxHeight: "60%", overflowY: "auto" }}>
                  {messages.slice(-6).map((msg) => (
                    <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} w-full`}>
                      <div className={`px-[8px] py-[5px] rounded-xl text-[8.5px] font-['Inter:Regular',sans-serif] leading-[13px] max-w-[90%] whitespace-pre-line shadow-md ${
                        msg.role === "user"
                          ? "bg-[#155dfc] text-white"
                          : "bg-white/90 text-[#1e2939] border border-[#e5e7eb] backdrop-blur-sm"
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mode buttons — from Figma design */}
            <div className="shrink-0 flex gap-[4px] items-center">
              {CHAT_MODES.map(m => (
                <button
                  key={m.id}
                  onClick={() => setChatMode(m.id)}
                  className={`flex items-center gap-[3px] px-[8px] py-[4px] rounded-full border font-['Inter:Medium',sans-serif] transition-all ${
                    chatMode === m.id
                      ? "bg-[#155dfc] border-[#155dfc] text-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]"
                      : "bg-white border-[#e5e7eb] text-[#4a5565] hover:border-[#155dfc] hover:text-[#155dfc]"
                  }`}
                >
                  <span className="text-[9px] font-['Inter:Medium',sans-serif] leading-[13.5px]">{m.icon}</span>
                  <span className="text-[8px] leading-[12px]">{m.label}</span>
                </button>
              ))}
            </div>

            {/* Chat input */}
            <div className="shrink-0 flex gap-[6px] items-center">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={`Спросите AI-Советника (${CHAT_MODES.find(m => m.id === chatMode)?.label})...`}
                className="flex-1 border border-[#e5e7eb] rounded-[8px] px-[10px] py-[6px] text-[9px] font-['Inter:Regular',sans-serif] bg-white text-[rgba(0,0,0,0.4)] outline-none focus:text-[rgba(0,0,0,0.8)] focus:border-[#155dfc] transition-colors shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]"
              />
              <button onClick={handleSend} className="bg-[#155dfc] text-white text-[8.5px] font-['Inter:Medium',sans-serif] px-[11px] py-[6px] rounded-[8px] hover:bg-[#1a6aff] transition-colors shrink-0 drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)]">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Notes() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative">
      <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal ml-0 mt-[32px] not-italic relative row-1 text-[20px] text-white w-[1233px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">Как работает ассистент — коротко для руководства</p>
        <p className="leading-[normal] mb-0">Ассистент помогает руководителю готовить решения и учится на них. Цикл из шести шагов:</p>
        <p className="leading-[normal] mb-0">1. Вопрос — руководитель спрашивает своими словами («рост цен на сырьё — как защитить маржу?»)</p>
        <p className="leading-[normal] mb-0">2. Контекст — ассистент находит похожие решения в журнале компании и привязанные к ним показатели (цены, производство, потребление)</p>
        <p className="leading-[normal] mb-0">3. Решение — руководитель фиксирует принятое решение по стандарту: контекст, рассмотренные альтернативы, ожидаемый результат</p>
        <p className="leading-[normal] mb-0">4. Факт — в контрольную точку вводится фактический результат, система сама считает отклонение «ожидание vs факт»</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">Данные пока открытые отраслевые (stat.gov.kz, FAOSTAT, Всемирный банк) + демо-журнал решений. С переходом на реальные данные журнала ассистент будет давать всё более точные рекомендации — чем больше решений зафиксировано, тем умнее ответы</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative size-full" data-name="Модуль 5">
      <DashboardBody />
      <Notes />
    </div>
  );
}
