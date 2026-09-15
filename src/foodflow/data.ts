export type Batch = {
  id: string;
  group: string;
  product: string;
  purchasePrice: number;
  expiry: string;
  daysLeft: number;
  stock: number;
  unit: string;
  origin: string;
  route: string[];
};

export const batches: Batch[] = [
  { id: "B-1042", group: "Молочка", product: "Молоко 2,5% 1л", purchasePrice: 412, expiry: "12.09", daysLeft: 3, stock: 840, unit: "шт", origin: "Ферма «Айдар»", route: ["Ферма «Айдар»", "Хладокомбинат №1", "ТТ-07 «Самал»"] },
  { id: "B-1043", group: "Молочка", product: "Кефир 1% 0,5л", purchasePrice: 298, expiry: "10.09", daysLeft: 1, stock: 320, unit: "шт", origin: "Ферма «Айдар»", route: ["Ферма «Айдар»", "ТТ-07 «Самал»"] },
  { id: "B-1051", group: "Молочка", product: "Йогурт натуральный", purchasePrice: 355, expiry: "15.09", daysLeft: 6, stock: 1120, unit: "шт", origin: "Молочный завод «Юг»", route: ["Завод «Юг»", "РЦ-Север", "ТТ-07 «Самал»"] },
  { id: "B-2018", group: "Мясо охлажд.", product: "Говядина лопаточная", purchasePrice: 2850, expiry: "11.09", daysLeft: 2, stock: 146, unit: "кг", origin: "Мясокомбинат «Ет»", route: ["Мясокомбинат «Ет»", "ТТ-03 «Базар»"] },
  { id: "B-2022", group: "Мясо охлажд.", product: "Курица тушка", purchasePrice: 1240, expiry: "13.09", daysLeft: 4, stock: 410, unit: "кг", origin: "Птицефаб. «Куат»", route: ["Птицефаб. «Куат»", "РЦ-Север", "ТТ-03 «Базар»"] },
  { id: "B-3015", group: "Овощи", product: "Томаты розовые", purchasePrice: 690, expiry: "14.09", daysLeft: 5, stock: 285, unit: "кг", origin: "Теплицы «Green»", route: ["Теплицы «Green»", "ТТ-12 «Орбита»"] },
  { id: "B-4001", group: "Заморозка", product: "Пельмени говяжьи", purchasePrice: 1780, expiry: "08.12", daysLeft: 90, stock: 960, unit: "кг", origin: "Завод «Мороз»", route: ["Завод «Мороз»", "РЦ-Север", "ТТ-07 «Самал»"] },
  { id: "B-4004", group: "Заморозка", product: "Ягоды микс", purchasePrice: 2140, expiry: "20.01", daysLeft: 133, stock: 540, unit: "кг", origin: "Завод «Мороз»", route: ["Завод «Мороз»", "ТТ-12 «Орбита»"] },
];

export const markdownSchedule = [
  { window: "D-7 … D-6", price: "100%", action: "Полная цена", tone: "emerald" },
  { window: "D-5 … D-4", price: "−10%", action: "Стимул оборота", tone: "amber" },
  { window: "D-3 … D-2", price: "−25%", action: "Активная уценка", tone: "orange" },
  { window: "D-1", price: "−50%", action: "Распродажа остатка", tone: "red" },
  { window: "D-0", price: "списание", action: "Списание + акт", tone: "zinc" },
];

export const periodRows = [
  { p: "Нед. 1", perish: 1240, frozen: 1500, demand: 2610, spoil: 38, writeoff: 12 },
  { p: "Нед. 2", perish: 1240, frozen: 0, demand: 2380, spoil: 51, writeoff: 24 },
  { p: "Нед. 3", perish: 980, frozen: 0, demand: 2140, spoil: 44, writeoff: 18 },
  { p: "Нед. 4", perish: 860, frozen: 0, demand: 1980, spoil: 61, writeoff: 31 },
];

export const agentDecisions = [
  { group: "Молочка", vol: "4 320 шт", delta: "+8% к плану", reason: "Потери нед.2 выше нормы на 1,4 п.п., память дефицита ТТ-07 активна. Ядро пересчитало спрос с эрозией −6%.", adapt: "Разбить поставку на 2 подпериода, шаг 3 сут." },
  { group: "Мясо охлажд.", vol: "980 кг", delta: "−12% к плану", reason: "Накопленная память дефицита низкая, восстановление спроса 0,82. Риск списания D-1 высокий.", adapt: "Снизить партию до кратности 20 кг, полка ТТ-03 — 140 кг." },
  { group: "Овощи", vol: "1 150 кг", delta: "+4% к плану", reason: "Порча в пределах ставки 2,1%. Дефицита не было 14 дней, память затухла.", adapt: "Единый завоз, уценка D-3 по расписанию." },
  { group: "Заморозка", vol: "1 500 кг", delta: "план", reason: "Единовременная поставка. Дефицитная эрозия не применяется.", adapt: "Контроль бюджета ТТ: лимит не превышен." },
];

export const journal = [
  { t: "02.09 09:14", who: "ядро", text: "Расчёт месячного заказа: шаг 7 сут, ставка порчи 2,1%, горизонт 30 дней." },
  { t: "03.09 11:02", who: "агент", text: "Молочка +8%: обоснование — потери нед.2 и память ТТ-07. Решение принято." },
  { t: "04.09 15:40", who: "граф", text: "Синхронизировано 2 поставщика · 8 партий · 3 ТТ · 2 кластера домохозяйств." },
  { t: "06.09 10:21", who: "агент", text: "Мясо −12%: риск списания. Снижена кратность до упаковки 20 кг." },
  { t: "08.09 18:05", who: "память", text: "Фиксация дефицита ТТ-03 (6 ч). Запущена эрозия спроса −6% → восстановление 0,82." },
  { t: "09.09 08:00", who: "ядро", text: "Отчёт контура готов: списания 85 кг, нереализованные остатки 1,9 млн ₸." },
];
