import { useMemo, useState } from "react";
import { agentDecisions, batches, journal, markdownSchedule, periodRows } from "./data";

const tabs = [
  { id: "batches", label: "Двойник партий" },
  { id: "order", label: "Физика заказа · pre-MVP" },
  { id: "graph", label: "Граф и память" },
  { id: "agent", label: "Агент закупок · MVP" },
  { id: "trace", label: "Прослеживаемость" },
  { id: "report", label: "Журнал и сдача" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function SectionTitle({ k, title, desc }: { k: string; title: string; desc: string }) {
  return (
    <div className="mb-4">
      <div className="text-[11px] font-semibold tracking-[0.14em] text-emerald-700 uppercase">{k}</div>
      <h2 className="text-xl font-bold text-zinc-900">{title}</h2>
      <p className="text-[13px] text-zinc-500 max-w-3xl mt-1">{desc}</p>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white border border-zinc-200 rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05)] ${className}`}>{children}</div>;
}

function Kpi({ label, value, sub, accent }: { label: string; value: string; sub: string; accent?: string }) {
  return (
    <div className="bg-white border border-zinc-200 rounded-xl px-4 py-3">
      <div className="text-[11px] uppercase tracking-wide text-zinc-500 font-semibold">{label}</div>
      <div className={`text-[22px] font-bold tabular-nums ${accent ?? "text-zinc-900"}`}>{value}</div>
      <div className="text-[12px] text-zinc-500">{sub}</div>
    </div>
  );
}

function freshnessColor(days: number) {
  if (days <= 1) return "bg-red-100 text-red-800 border-red-200";
  if (days <= 3) return "bg-orange-100 text-orange-800 border-orange-200";
  if (days <= 6) return "bg-amber-100 text-amber-800 border-amber-200";
  return "bg-emerald-100 text-emerald-800 border-emerald-200";
}

export default function FoodFlowApp() {
  const [tab, setTab] = useState<TabId>("batches");
  const [step, setStep] = useState("7 сут");
  const [spoil, setSpoil] = useState(2.1);
  const [memory, setMemory] = useState("активный");
  const [query, setQuery] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("B-1042");
  const [approved, setApproved] = useState<string[]>(["Овощи"]);

  const fefo = useMemo(() => [...batches].sort((a, b) => a.daysLeft - b.daysLeft), []);
  const filtered = useMemo(
    () => batches.filter((b) => (query ? (b.product + b.id + b.group).toLowerCase().includes(query.toLowerCase()) : true)),
    [query]
  );
  const batch = batches.find((b) => b.id === selectedBatch) ?? batches[0];

  const spoilTotal = useMemo(
    () => Math.round(periodRows.reduce((s, r) => s + r.spoil * (spoil / 2.1), 0)),
    [spoil]
  );

  return (
    <div className="min-h-screen w-full bg-[#f4f5f3] text-zinc-900" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* header */}
      <header className="sticky top-0 z-20 bg-[#101511]/95 backdrop-blur border-b border-zinc-800 text-white">
        <div className="max-w-[1280px] mx-auto px-5 py-3 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-400 text-zinc-950 font-black grid place-items-center text-lg">F</div>
            <div>
              <div className="text-[15px] font-bold leading-tight">Food Flow Advantage Portfolio</div>
              <div className="text-[12px] text-zinc-400 leading-tight">Двойники товародвижения и операций · видение → pre-MVP → MVP</div>
            </div>
          </div>
          <div className="ml-auto flex flex-wrap items-center gap-2 text-[12px]">
            <label className="flex items-center gap-1.5 bg-white/10 rounded-lg px-2.5 py-1.5">
              <span className="text-zinc-400">Горизонт</span>
              <select className="bg-transparent font-semibold outline-none" defaultValue="30 дней">
                <option className="text-black">30 дней</option>
                <option className="text-black">60 дней</option>
              </select>
            </label>
            <label className="flex items-center gap-1.5 bg-white/10 rounded-lg px-2.5 py-1.5">
              <span className="text-zinc-400">Шаг</span>
              <select value={step} onChange={(e) => setStep(e.target.value)} className="bg-transparent font-semibold outline-none">
                <option className="text-black">1 сут</option>
                <option className="text-black">3 сут</option>
                <option className="text-black">7 сут</option>
              </select>
            </label>
            <div className="flex items-center gap-1.5 bg-emerald-400/15 border border-emerald-300/30 rounded-lg px-2.5 py-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-emerald-200">граф synced · 12 узлов</span>
            </div>
          </div>
        </div>
        <nav className="max-w-[1280px] mx-auto px-5 pb-3 flex gap-1.5 overflow-x-auto scrollbar-none">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`whitespace-nowrap text-[13px] font-semibold px-3.5 py-2 rounded-lg border transition ${
                tab === t.id
                  ? "bg-emerald-400 text-zinc-950 border-emerald-400"
                  : "bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10"
              }`}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-[1280px] mx-auto px-5 py-5">
        {/* KPI */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2.5 mb-5">
          <Kpi label="Остаток двойника" value="4 621" sub="шт + кг · 8 партий" />
          <Kpi label="FEFO-дисциплина" value="96,4%" sub="отпуск по сроку годности" accent="text-emerald-700" />
          <Kpi label="Порча / период" value={`${spoilTotal} кг`} sub={`ставка ${spoil.toFixed(1)}% · шаг ${step}`} accent="text-orange-700" />
          <Kpi label="Списания" value="85 кг" sub="D-0 · акты сформированы" accent="text-red-700" />
          <Kpi label="Нереализ. остатки" value="1,9 млн ₸" sub="оценка на конец горизонта" />
          <Kpi label="Дефицит · память" value="0,82" sub="восстановление спроса ТТ-03" />
        </div>

        {tab === "batches" && (
          <div>
            <SectionTitle
              k="Видение и прототип"
              title="Объектная модель партии и дисциплина FEFO"
              desc="Каждая партия — объект: группа, закупочная цена, срок годности, остаток, происхождение. Отпуск и продажа строго в порядке возрастания срока годности. Уценка — по расписанию приближения срока."
            />
            <div className="grid lg:grid-cols-3 gap-3">
              <Card className="p-4 lg:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="font-bold text-[14px]">Партии товара · движение и остатки</div>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Поиск: молоко, B-10, мясо…"
                    className="ml-auto text-[13px] border border-zinc-200 rounded-lg px-2.5 py-1.5 w-56 outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12.5px]">
                    <thead>
                      <tr className="text-left text-zinc-500 border-b border-zinc-100">
                        <th className="py-2 pr-2 font-semibold">Партия</th>
                        <th className="py-2 pr-2 font-semibold">Группа / товар</th>
                        <th className="py-2 pr-2 font-semibold text-right">Закупка</th>
                        <th className="py-2 pr-2 font-semibold">Годен до</th>
                        <th className="py-2 pr-2 font-semibold text-right">Остаток</th>
                        <th className="py-2 font-semibold">Очерёдность FEFO</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fefo
                        .filter((b) => (query ? (b.product + b.id + b.group).toLowerCase().includes(query.toLowerCase()) : true))
                        .map((b, i) => (
                          <tr
                            key={b.id}
                            onClick={() => setSelectedBatch(b.id)}
                            className={`border-b border-zinc-50 cursor-pointer hover:bg-emerald-50/60 ${selectedBatch === b.id ? "bg-emerald-50" : ""}`}
                          >
                            <td className="py-2 pr-2 font-mono font-bold">{b.id}</td>
                            <td className="py-2 pr-2">
                              <div className="font-semibold">{b.product}</div>
                              <div className="text-zinc-500 text-[11.5px]">{b.group} · {b.origin}</div>
                            </td>
                            <td className="py-2 pr-2 text-right tabular-nums">{b.purchasePrice.toLocaleString("ru-RU")} ₸</td>
                            <td className="py-2 pr-2 tabular-nums">{b.expiry} · <span className="text-zinc-500">D-{b.daysLeft}</span></td>
                            <td className="py-2 pr-2 text-right tabular-nums font-bold">{b.stock.toLocaleString("ru-RU")} {b.unit}</td>
                            <td className="py-2">
                              <span className={`text-[11px] font-bold border rounded-full px-2 py-0.5 ${freshnessColor(b.daysLeft)}`}>
                                #{i + 1} к отпуску
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 text-[12px] text-zinc-500 bg-zinc-50 border border-zinc-100 rounded-lg p-2.5">
                  Прототип экрана движения: отпуск всегда забирает сначала <b>B-1043 (D-1)</b>, затем <b>B-2018 (D-2)</b>, затем <b>B-1042 (D-3)</b> — независимо от цены закупки. Нарушение порядка подсвечивается красным и блокирует продажу.
                </div>
              </Card>

              <div className="space-y-3">
                <Card className="p-4">
                  <div className="font-bold text-[14px] mb-1">Карточка партии · {batch.id}</div>
                  <div className="text-[13px] font-semibold">{batch.product}</div>
                  <div className="text-[12px] text-zinc-500 mb-3">{batch.group} · {batch.origin}</div>
                  <dl className="grid grid-cols-2 gap-2 text-[12.5px]">
                    <div className="bg-zinc-50 rounded-lg p-2"><dt className="text-zinc-500">Закупка</dt><dd className="font-bold tabular-nums">{batch.purchasePrice} ₸</dd></div>
                    <div className="bg-zinc-50 rounded-lg p-2"><dt className="text-zinc-500">Остаток</dt><dd className="font-bold tabular-nums">{batch.stock} {batch.unit}</dd></div>
                    <div className="bg-zinc-50 rounded-lg p-2"><dt className="text-zinc-500">Срок</dt><dd className="font-bold">{batch.expiry} (D-{batch.daysLeft})</dd></div>
                    <div className="bg-zinc-50 rounded-lg p-2"><dt className="text-zinc-500">Маршрут</dt><dd className="font-semibold text-[11.5px]">{batch.route.join(" → ")}</dd></div>
                  </dl>
                  <div className="mt-3">
                    <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-wide mb-1.5">Очередь отпуска FEFO</div>
                    <div className="flex gap-1">
                      {fefo.slice(0, 5).map((b) => (
                        <div key={b.id} title={b.id} className={`flex-1 h-9 rounded-md border grid place-items-center text-[10px] font-mono font-bold ${b.id === batch.id ? "border-emerald-500 bg-emerald-100" : "border-zinc-200 bg-zinc-50"}`}>
                          {b.id.replace("B-", "")}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="font-bold text-[14px] mb-2">Расписание уценки</div>
                  {markdownSchedule.map((m) => (
                    <div key={m.window} className="flex items-center gap-2 py-1.5 border-b border-zinc-50 last:border-0 text-[12.5px]">
                      <span className="font-mono font-bold w-24">{m.window}</span>
                      <span className="font-bold w-20">{m.price}</span>
                      <span className="text-zinc-500">{m.action}</span>
                    </div>
                  ))}
                  <div className="mt-2 text-[12px] text-zinc-500">Правило задаётся расписанием, а не вручную. D-1 −50% применяется автоматически при отпуске.</div>
                </Card>
              </div>
            </div>

            <Card className="p-4 mt-3">
              <div className="font-bold text-[14px] mb-2">Движение товара и остатки по группам (прототип экрана)</div>
              <div className="grid md:grid-cols-4 gap-3">
                {[
                  { g: "Молочка", in: 2280, out: 1940, left: 2280 - 1940 + 1120, pct: 72 },
                  { g: "Мясо охлажд.", in: 640, out: 520, left: 556, pct: 46 },
                  { g: "Овощи", in: 410, out: 330, left: 285, pct: 58 },
                  { g: "Заморозка", in: 1500, out: 210, left: 1500, pct: 18 },
                ].map((r) => (
                  <div key={r.g} className="border border-zinc-100 rounded-lg p-3">
                    <div className="font-bold text-[13px]">{r.g}</div>
                    <div className="text-[12px] text-zinc-500 tabular-nums">приход {r.in} · расход {r.out} · остаток {r.left}</div>
                    <div className="h-2 bg-zinc-100 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${r.pct}%` }} />
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-1">оборачиваемость {r.pct}% периода</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {tab === "order" && (
          <div>
            <SectionTitle
              k="pre-MVP операционный контур"
              title="Физика месячного заказа: периоды, порча, ограничения, дефицит"
              desc="Скоропорт разбивается по расчётным периодам (шаг настраиваемый), заморозка — единовременной поставкой. Ставки порчи и шаг — параметры калибровки, а не константы."
            />
            <div className="grid lg:grid-cols-3 gap-3">
              <Card className="p-4">
                <div className="font-bold text-[14px] mb-2">Параметры моделирования</div>
                <label className="block text-[12.5px] mb-3">
                  <span className="text-zinc-500 font-semibold">Шаг расчёта: {step}</span>
                  <div className="flex gap-1.5 mt-1.5">
                    {["1 сут", "3 сут", "7 сут"].map((s) => (
                      <button key={s} onClick={() => setStep(s)} className={`text-[12px] font-bold px-3 py-1.5 rounded-lg border ${step === s ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-200"}`}>{s}</button>
                    ))}
                  </div>
                </label>
                <label className="block text-[12.5px]">
                  <span className="text-zinc-500 font-semibold">Ставка порчи: {spoil.toFixed(1)}% / период</span>
                  <input type="range" min={0.5} max={5} step={0.1} value={spoil} onChange={(e) => setSpoil(Number(e.target.value))} className="w-full accent-emerald-600 mt-2" />
                </label>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5"><b>Скоропорт:</b> 4 завоза<br /><span className="text-zinc-600">1240 → 1240 → 980 → 860</span></div>
                  <div className="bg-sky-50 border border-sky-200 rounded-lg p-2.5"><b>Заморозка:</b> 1 завоз<br /><span className="text-zinc-600">1500 кг единовременно</span></div>
                </div>
                <div className="mt-2 text-[12px] text-zinc-500">Итого порча за горизонт: <b className="text-orange-700">{spoilTotal} кг</b> · списания D-0: <b>85 кг</b> · нереализованные остатки: <b>1,9 млн ₸</b></div>
              </Card>

              <Card className="p-4 lg:col-span-2">
                <div className="font-bold text-[14px] mb-2">Разбивка поставок и списания по периодам</div>
                <table className="w-full text-[12.5px]">
                  <thead><tr className="text-left text-zinc-500 border-b border-zinc-100"><th className="py-2">Период</th><th className="py-2 text-right">Скоропорт</th><th className="py-2 text-right">Заморозка</th><th className="py-2 text-right">Спрос</th><th className="py-2 text-right">Порча</th><th className="py-2 text-right">Списание</th></tr></thead>
                  <tbody>
                    {periodRows.map((r) => (
                      <tr key={r.p} className="border-b border-zinc-50">
                        <td className="py-2 font-bold">{r.p}</td>
                        <td className="py-2 text-right tabular-nums">{r.perish}</td>
                        <td className="py-2 text-right tabular-nums">{r.frozen || "—"}</td>
                        <td className="py-2 text-right tabular-nums">{r.demand}</td>
                        <td className="py-2 text-right tabular-nums text-orange-700 font-bold">{Math.round(r.spoil * (spoil / 2.1))}</td>
                        <td className="py-2 text-right tabular-nums text-red-700">{r.writeoff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-3 mt-3">
              <Card className="p-4">
                <div className="font-bold text-[14px] mb-2">Ограничения реального заказа</div>
                <div className="grid sm:grid-cols-2 gap-2 text-[12.5px]">
                  {[
                    ["Кратность упаковке", "Мясо — 20 кг, молочка — 12 шт. Заказ округляется вверх, излишек — в остаток."],
                    ["Вместимость полки", "ТТ-03: 140 кг холод. ТТ-07: 900 шт. Переполнение блокируется."],
                    ["Бюджет точки", "ТТ-07 лимит 2,4 млн ₸/нед. Заморозка 1,5 т — 78% лимита нед.1."],
                    ["Доступность поставки", "Теплицы «Green»: нед.3 −30%. Ядро сдвигает объём на нед.2."],
                  ].map(([t, d]) => (
                    <div key={t} className="border border-zinc-100 rounded-lg p-2.5 bg-zinc-50/60"><div className="font-bold">{t}</div><div className="text-zinc-600 mt-0.5">{d}</div></div>
                  ))}
                </div>
              </Card>
              <Card className="p-4">
                <div className="font-bold text-[14px]">Дефицитная эрозия и восстановление спроса</div>
                <div className="text-[12px] text-zinc-500 mb-2">ТТ-03, мясо: дефицит 6 ч → эрозия −6%, восстановление 0,82, память 9 дней</div>
                <svg viewBox="0 0 400 140" className="w-full h-36 bg-zinc-50 border border-zinc-100 rounded-lg">
                  <line x1="0" y1="40" x2="400" y2="40" stroke="#e4e4e7" strokeDasharray="4 4" />
                  <text x="8" y="34" fontSize="10" fill="#71717a">базовый спрос 100%</text>
                  <polyline points="0,40 90,40 130,86 170,78 220,62 280,50 340,44 400,42" fill="none" stroke="#059669" strokeWidth="2.5" />
                  <circle cx="130" cy="86" r="4" fill="#dc2626" />
                  <text x="138" y="90" fontSize="10" fill="#dc2626" fontWeight="bold">дефицит −6%</text>
                  <text x="230" y="70" fontSize="10" fill="#059669">восстановление 0,82 · память точки</text>
                </svg>
                <div className="text-[12px] text-zinc-500 mt-2">После дефицита спрос не возвращается мгновенно: эрозия учитывает накопленную память точки, восстановление — постепенное.</div>
              </Card>
            </div>
          </div>
        )}

        {tab === "graph" && (
          <div>
            <SectionTitle k="MVP · данные" title="Синхронизация мира с графовой БД" desc="Поставщики, товары, торговые точки, домохозяйства и связи с временными интервалами. Режимы памяти определяют обязательность графа для решений агента." />
            <div className="grid lg:grid-cols-3 gap-3">
              <Card className="p-4 lg:col-span-2">
                <div className="font-bold text-[14px] mb-1">Граф мира · 12 узлов</div>
                <div className="text-[12px] text-zinc-500 mb-2">Ребро подписано временным интервалом доступности связи</div>
                <svg viewBox="0 0 560 300" className="w-full h-72 bg-[#0f1512] rounded-xl">
                  {[
                    { x: 70, y: 60, label: "Ферма Айдар", type: "поставщик" },
                    { x: 70, y: 180, label: "Мясокомб. Ет", type: "поставщик" },
                    { x: 220, y: 110, label: "Молоко 2,5%", type: "товар" },
                    { x: 220, y: 210, label: "Говядина", type: "товар" },
                    { x: 370, y: 70, label: "ТТ-07 Самал", type: "точка" },
                    { x: 370, y: 170, label: "ТТ-03 Базар", type: "точка" },
                    { x: 370, y: 250, label: "ТТ-12 Орбита", type: "точка" },
                    { x: 500, y: 120, label: "Домохоз. A", type: "дом" },
                    { x: 500, y: 210, label: "Домохоз. B", type: "дом" },
                  ].map((n, i) => (
                    <g key={i}>
                      <circle cx={n.x} cy={n.y} r="16" fill={n.type === "поставщик" ? "#34d399" : n.type === "товар" ? "#fbbf24" : n.type === "точка" ? "#60a5fa" : "#f472b6"} opacity="0.95" />
                      <text x={n.x} y={n.y + 30} textAnchor="middle" fontSize="10" fill="#e4e4e7" fontWeight="bold">{n.label}</text>
                    </g>
                  ))}
                  {[
                    [70, 60, 220, 110], [70, 180, 220, 210], [220, 110, 370, 70], [220, 210, 370, 170], [220, 110, 370, 250], [370, 70, 500, 120], [370, 170, 500, 210],
                  ].map(([x1, y1, x2, y2], i) => (
                    <line key={i} x1={x1 + 14} y1={y1} x2={x2 - 14} y2={y2} stroke="#52525b" strokeWidth="1.5" />
                  ))}
                  <text x="130" y="80" fontSize="9" fill="#a1a1aa">09:00–18:00</text>
                  <text x="280" y="100" fontSize="9" fill="#a1a1aa">ежедневно</text>
                  <text x="420" y="150" fontSize="9" fill="#a1a1aa">память 9 дн.</text>
                </svg>
                <div className="flex gap-3 mt-2 text-[11.5px] text-zinc-500">
                  <span><i className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 mr-1" />поставщик</span>
                  <span><i className="inline-block w-2.5 h-2.5 rounded-full bg-amber-400 mr-1" />товар / партия</span>
                  <span><i className="inline-block w-2.5 h-2.5 rounded-full bg-blue-400 mr-1" />точка</span>
                  <span><i className="inline-block w-2.5 h-2.5 rounded-full bg-pink-400 mr-1" />домохозяйство</span>
                </div>
              </Card>
              <Card className="p-4">
                <div className="font-bold text-[14px] mb-2">Режимы памяти</div>
                {[
                  ["активный", "Граф обязателен. Агент видит дефициты, порчу и восстановление спроса."],
                  ["отключена", "Агент решает только по текущим остаткам. Память дефицита игнорируется."],
                  ["контроль обязательности", "Если граф недоступен — заказ блокируется, требуется подтверждение."],
                ].map(([m, d]) => (
                  <label key={m} className={`block border rounded-lg p-2.5 mb-2 cursor-pointer text-[12.5px] ${memory === m ? "border-emerald-500 bg-emerald-50" : "border-zinc-200"}`}>
                    <div className="flex items-center gap-2">
                      <input type="radio" checked={memory === m} onChange={() => setMemory(m)} className="accent-emerald-600" />
                      <b className="capitalize">{m}</b>
                      {memory === m && <span className="ml-auto text-[10px] font-bold bg-emerald-600 text-white rounded-full px-2 py-0.5">ON</span>}
                    </div>
                    <div className="text-zinc-600 mt-1">{d}</div>
                  </label>
                ))}
                <div className="text-[12px] bg-zinc-900 text-zinc-200 rounded-lg p-2.5 mt-2 font-mono">sync: 2 поставщика · 8 партий · 3 ТТ · 2 кластера · ok 08:00</div>
              </Card>
            </div>
          </div>
        )}

        {tab === "agent" && (
          <div>
            <SectionTitle k="MVP · решения" title="Головной агент закупок: решает, ядро — считает" desc="Расчёты выполняет вычислительное ядро. Агент выбирает объёмы по группам, обосновывает каждое решение и адаптируется к потерям и дефициту." />
            <div className="grid lg:grid-cols-2 gap-3">
              {agentDecisions.map((a) => {
                const on = approved.includes(a.group);
                return (
                  <Card key={a.group} className={`p-4 ${on ? "ring-1 ring-emerald-500" : ""}`}>
                    <div className="flex items-center gap-2">
                      <div className="font-bold text-[15px]">{a.group}</div>
                      <span className="text-[11px] font-bold bg-zinc-900 text-white rounded-full px-2 py-0.5">{a.vol}</span>
                      <span className="text-[11px] font-bold text-emerald-700">{a.delta}</span>
                      <button
                        onClick={() => setApproved((p) => (on ? p.filter((x) => x !== a.group) : [...p, a.group]))}
                        className={`ml-auto text-[12px] font-bold px-3 py-1.5 rounded-lg border ${on ? "bg-emerald-600 text-white border-emerald-600" : "border-zinc-200"}`}
                      >
                        {on ? "Одобрено ✓" : "Одобрить"}
                      </button>
                    </div>
                    <div className="mt-2 text-[13px] bg-amber-50 border border-amber-200 rounded-lg p-2.5"><b>Обоснование ИИ:</b> {a.reason}</div>
                    <div className="mt-2 text-[13px] bg-sky-50 border border-sky-200 rounded-lg p-2.5"><b>Адаптация:</b> {a.adapt}</div>
                    <div className="mt-2 text-[11px] text-zinc-500 font-mono">ядро: спрос − эрозия − порча − полка − бюджет → объём · агент: только решение</div>
                  </Card>
                );
              })}
            </div>
            <Card className="p-4 mt-3">
              <div className="font-bold text-[14px] mb-1">Разделение ответственности</div>
              <div className="grid md:grid-cols-2 gap-2 text-[13px]">
                <div className="border border-zinc-200 rounded-lg p-3"><b>Вычислительное ядро</b><ul className="list-disc ml-5 mt-1 text-zinc-600"><li>разбивка по периодам, порча, списания</li><li>эрозия и восстановление спроса</li><li>проверка кратности, полки, бюджета</li></ul></div>
                <div className="border border-emerald-300 bg-emerald-50/60 rounded-lg p-3"><b>Агент ИИ</b><ul className="list-disc ml-5 mt-1 text-zinc-700"><li>выбор объёма по группам</li><li>текстовое обоснование каждого решения</li><li>адаптация к потерям и дефициту</li></ul></div>
              </div>
            </Card>
          </div>
        )}

        {tab === "trace" && (
          <div>
            <SectionTitle k="Потребительский контур" title="Прослеживаемость: сканирование кода маркировки" desc="Привязка партии к происхождению и маршруту. Покупатель сканирует код — видит путь и свежесть." />
            <div className="grid lg:grid-cols-2 gap-3">
              <Card className="p-4">
                <div className="font-bold text-[14px] mb-2">Выбор партии для трассировки</div>
                <div className="flex flex-wrap gap-1.5">
                  {batches.map((b) => (
                    <button key={b.id} onClick={() => setSelectedBatch(b.id)} className={`text-[12px] font-mono font-bold px-2.5 py-1.5 rounded-lg border ${selectedBatch === b.id ? "bg-zinc-900 text-white border-zinc-900" : "border-zinc-200"}`}>{b.id}</button>
                  ))}
                </div>
                <div className="mt-3">
                  {batch.route.map((r, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold ${i === batch.route.length - 1 ? "bg-emerald-600 text-white" : "bg-zinc-900 text-white"}`}>{i + 1}</div>
                        {i < batch.route.length - 1 && <div className="w-0.5 flex-1 bg-zinc-200 min-h-[22px]" />}
                      </div>
                      <div className="pb-4">
                        <div className="font-bold text-[13px]">{r}</div>
                        <div className="text-[12px] text-zinc-500">{i === 0 ? `Происхождение · закупка ${batch.purchasePrice} ₸` : i === batch.route.length - 1 ? `Точка продажи · остаток ${batch.stock} ${batch.unit} · годен до ${batch.expiry}` : "Холодовая цепь 2–4°C · интервал доступен"}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Card className="p-4 bg-zinc-950 text-white !border-zinc-800">
                <div className="font-bold text-[14px]">Экран покупателя · скан кода</div>
                <div className="text-[12px] text-zinc-400">Маркировка {batch.id} · {batch.product}</div>
                <div className="mt-3 bg-white text-zinc-900 rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-16 rounded-lg bg-zinc-900 grid place-items-center text-white text-[10px] font-mono text-center leading-tight">QR<br />{batch.id}</div>
                    <div>
                      <div className="font-bold text-[14px]">{batch.product}</div>
                      <div className="text-[12px] text-zinc-500">Происхождение: {batch.origin}</div>
                      <div className={`inline-block mt-1 text-[11px] font-bold border rounded-full px-2 py-0.5 ${freshnessColor(batch.daysLeft)}`}>Свежесть D-{batch.daysLeft} · годен до {batch.expiry}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-[12px] text-zinc-600 border-t border-zinc-100 pt-2">Путь: {batch.route.join(" → ")}<br />Холодовая цепь не прерывалась · уценка по расписанию применяется честно.</div>
                </div>
                <div className="mt-2 text-[12px] text-zinc-400">Демо-режим контура прослеживаемости для приёмки модуля.</div>
              </Card>
            </div>
          </div>
        )}

        {tab === "report" && (
          <div>
            <SectionTitle k="Сдача модуля" title="Журнал решений ИИ и отчётность контура" desc="Временная шкала решений для интерфейса комплекса + пакет отчётности и сценарий демонстрации." />
            <div className="grid lg:grid-cols-2 gap-3">
              <Card className="p-4">
                <div className="font-bold text-[14px] mb-2">Журнал решений · timeline</div>
                {journal.map((j, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${j.who === "агент" ? "bg-emerald-500" : j.who === "ядро" ? "bg-zinc-900" : "bg-amber-500"}`} />
                      {i < journal.length - 1 && <div className="w-px flex-1 bg-zinc-200" />}
                    </div>
                    <div className="pb-3">
                      <div className="text-[11px] font-mono text-zinc-500">{j.t} · <b className="uppercase">{j.who}</b></div>
                      <div className="text-[13px]">{j.text}</div>
                    </div>
                  </div>
                ))}
              </Card>
              <div className="space-y-3">
                <Card className="p-4">
                  <div className="font-bold text-[14px] mb-2">Отчётность по контуру · к сдаче</div>
                  {[
                    "Ведомость партий: группа, закупка, срок, остаток — выгружено",
                    "Акты списания D-0: 85 кг, стоимость нереализованных остатков 1,9 млн ₸",
                    "Протокол FEFO: 96,4% отпусков в порядке срока, 3 нарушения заблокированы",
                    "Карта уценок: D-5 −10% · D-3 −25% · D-1 −50% — применена автоматически",
                    "Память дефицитов: ТТ-03 эрозия −6%, восстановление 0,82",
                  ].map((r) => (
                    <div key={r} className="flex gap-2 text-[13px] py-1.5 border-b border-zinc-50 last:border-0"><span className="text-emerald-600 font-bold">✓</span>{r}</div>
                  ))}
                </Card>
                <Card className="p-4">
                  <div className="font-bold text-[14px] mb-1">Демонстрация приёмки · 10 минут</div>
                  <ol className="list-decimal ml-5 text-[13px] text-zinc-700 space-y-1">
                    <li>Партия B-1042: FEFO-очередь и блокировка нарушения порядка.</li>
                    <li>Шаг 7→3 сут: пересчёт порчи и разбивки скоропорта.</li>
                    <li>Агент: обоснование +8% по молочке, одобрение.</li>
                    <li>Скан покупателем: происхождение и путь партии.</li>
                    <li>Журнал: ядро считает — агент решает.</li>
                  </ol>
                  <div className="mt-3 text-[12px] text-zinc-500">Использованы все {filtered.length} партий из двойника · данные синтетические.</div>
                </Card>
              </div>
            </div>
          </div>
        )}

        <footer className="mt-6 text-[12px] text-zinc-500 flex flex-wrap gap-2 items-center">
          <span>Food Flow Advantage Portfolio · двойник товародвижения и операций</span>
          <span className="ml-auto font-mono">шаг {step} · порча {spoil.toFixed(1)}% · память: {memory} · одобрено групп: {approved.length}/4</span>
        </footer>
      </main>
    </div>
  );
}
