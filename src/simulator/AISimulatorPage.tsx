import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Module1 from "./slides/module-1";
import Module2 from "./slides/module-2";
import Module3 from "./slides/module-3";
import Module4 from "./slides/module-4";
import Module5 from "./slides/module-5";
import LlmToLlm from "./slides/llm-to-llm";

type SlideDef = { Component: React.ComponentType; height: number; minW?: number };

/*
 * Слайды ИИ-симулятора — оригинальные компоненты из Figma Make.
 * height — исходная высота из композиции проекта (верхняя граница).
 * minW — принудительная дизайн-ширина, если автозамер даёт меньше, чем нужно
 * фиксированному контенту (модуль 3: диаграмма 1040 + зазор 18 + панель 408
 * + поля 52 = 1518, а замер видит только 1339 и контент вылезает вправо).
 */
const SLIDES: SlideDef[] = [
  { Component: Module1, height: 1020 },
  { Component: Module2, height: 1250 },
  { Component: Module3, height: 1300, minW: 1520 },
  { Component: Module4, height: 1250 },
  { Component: Module5, height: 1350 },
  { Component: LlmToLlm, height: 1400 },
];

/* Единая рамка для всех слайдов */
const FRAME_GAP = 24;
const FRAME_RADIUS = 18;
const FRAME_MAX_W = 1600;
/* Отступ между слайдами и запас снизу (px) */
const GAP = FRAME_GAP;
const PAD_BOTTOM = 16;
/* Запас по ширине на погрешность округления */
const WIDTH_SAFETY = 2;
/* Верхний предел апскейла на широких экранах, чтобы не размывало */
const MAX_UPSCALE = 1.5;
/* Ширины пробных холстов: на них раскладка никогда не сжимается */
const PROBE_A = 2560;
const PROBE_B = 1920;
/* Границы холста слайда */
const MIN_SLIDE_W = 1200;
const MAX_SLIDE_W = 2560;

type Rect = { left: number; top: number; right: number; bottom: number };

type SlideBox = { w: number; h: number; s: number };

/*
 * Слайд как страница презентации:
 *  1) двумя пробными холстами (2200px и 1600px) определяем «дизайн-ширину»
 *     слайда — right-край элементов, которые НЕ двигаются при смене холста
 *     (фиксированные карточки, тексты, картинки);
 *  2) рендерим слайд на фиксированном холсте этой ширины — раскладка всегда
 *     ровно такая, как в Figma, элементы не сжимаются и не наползают;
 *  3) масштабируем весь холст под ширину окна (scale <= 1) и центрируем.
 *    При этом обрезаем пустоту снизу по фактическому контенту.
 */
function ScaledSlide({ Component, height, minW, isLast }: SlideDef & { isLast: boolean }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<SlideBox | null>(null);

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const intersects = (a: Rect, b: Rect): Rect | null => {
      const l = Math.max(a.left, b.left);
      const t = Math.max(a.top, b.top);
      const r = Math.min(a.right, b.right);
      const btm = Math.min(a.bottom, b.bottom);
      if (r - l < 1 || btm - t < 1) return null;
      return { left: l, top: t, right: r, bottom: btm };
    };

    /*
     * Обход дерева: right-край каждого видимого элемента (с учётом
     * обрезки overflow-предками) в Map + максимальный низ контента.
     */
    const collect = (): { rights: Map<Element, number>; bottom: number } => {
      const rights = new Map<Element, number>();
      let bottom = 0;
      const innerRect = inner.getBoundingClientRect();
      const innerBottom = innerRect.top + inner.offsetHeight;

      const walk = (node: HTMLElement, clip: Rect | null) => {
        const kids = node.children;
        for (let i = 0; i < kids.length; i++) {
          const el = kids[i] as HTMLElement;
          const st = getComputedStyle(el);
          if (st.display === "none" || st.visibility === "hidden" || st.opacity === "0") continue;

          const b = el.getBoundingClientRect();
          let r: Rect = { left: b.left, top: b.top, right: b.right, bottom: b.bottom };
          if (r.right - r.left < 1 && r.bottom - r.top < 1) continue;

          let localClip = clip;
          const ov = `${st.overflow} ${st.overflowX} ${st.overflowY}`;
          if (/hidden|clip|auto|scroll/.test(ov)) {
            const c: Rect = { left: b.left, top: b.top, right: b.right, bottom: b.bottom };
            localClip = clip ? intersects(clip, c) : c;
            if (!localClip) continue;
          }
          if (localClip) {
            const clipped = intersects(r, localClip);
            if (!clipped) continue;
            r = clipped;
          }

          rights.set(el, r.right);

          const isLeaf = el.children.length === 0;
          let painted = false;
          if (!isLeaf) {
            painted =
              (st.backgroundColor !== "rgba(0, 0, 0, 0)" && st.backgroundColor !== "transparent") ||
              st.backgroundImage !== "none" ||
              parseFloat(st.borderTopWidth || "0") > 0 ||
              parseFloat(st.borderLeftWidth || "0") > 0;
          }
          if ((isLeaf || painted) && r.bottom > bottom && r.bottom < innerBottom - 2) {
            bottom = r.bottom;
          }

          walk(el, localClip);
        }
      };
      walk(inner, null);
      return { rights, bottom };
    };

    const forceReflow = () => {
      void inner.offsetWidth;
    };

    const measure = () => {
      const avail = outer.clientWidth;
      if (!avail) return;

      const prevWidth = inner.style.width;
      const prevTransform = inner.style.transform;

      // --- Проба A: широкий холст (раскладка ничем не сжата) ---
      inner.style.transform = "none";
      inner.style.width = `${PROBE_A}px`;
      forceReflow();
      const A = collect();

      // --- Проба B: другой холст, чтобы отличить фиксированные элементы от тянущихся ---
      inner.style.width = `${PROBE_B}px`;
      forceReflow();
      const B = collect();

      // Фиксированные элементы: right-край не меняется между пробами
      let fixedRight = 0;
      A.rights.forEach((rightA, el) => {
        const rightB = B.rights.get(el);
        if (rightB === undefined) return;
        if (Math.abs(rightA - rightB) <= 3 && rightA > fixedRight) fixedRight = rightA;
      });

      if (fixedRight === 0) {
        B.rights.forEach((rightB) => {
          if (rightB > fixedRight) fixedRight = rightB;
        });
      }


      const innerLeftA = inner.getBoundingClientRect().left;
      const natural = fixedRight > 0 ? fixedRight - innerLeftA : 0;
      const floorW = Math.max(MIN_SLIDE_W, minW ?? 0);
      const slideW = Math.round(Math.max(floorW, Math.min(MAX_SLIDE_W, natural)));

      // --- Финальный холст: фиксируем дизайн-ширину и меряем высоту контента ---
      inner.style.width = `${slideW}px`;
      forceReflow();
      const C = collect();
      const innerTop = inner.getBoundingClientRect().top;
      const contentH = C.bottom > 0 ? Math.round(C.bottom - innerTop) : height;
      const slideH = Math.min(height, Math.max(240, contentH + PAD_BOTTOM));

      // масштаб только по ширине — слайд занимает всю доступную ширину рамки,
      // по высоте страница просто скроллится (раньше слайд вписывался в 92%
      // высоты окна и из-за этого выглядел мелким)
      const fitW = Math.min(MAX_UPSCALE, (avail - WIDTH_SAFETY) / slideW);
      const s = Math.max(0.2, fitW);

      // восстанавливаем стиль до коммита React
      inner.style.width = prevWidth;
      inner.style.transform = prevTransform;

      setBox((prev) =>
        prev && prev.w === slideW && prev.h === slideH && Math.abs(prev.s - s) < 0.002
          ? prev
          : { w: slideW, h: slideH, s }
      );
    };

    measure();

    const timers: number[] = [300, 1200, 3000].map((d) => window.setTimeout(measure, d));

    const ro = new ResizeObserver(measure);
    ro.observe(outer);

    // слайды с входными анимациями (motion): перемеряем при появлении в вьюпорте
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          measure();
          timers.push(window.setTimeout(measure, 700), window.setTimeout(measure, 2000));
        }
      },
      { threshold: 0.15 }
    );
    io.observe(outer);

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => measure()).catch(() => {});
    }

    // изменение высоты окна (RO на outer ловит только ширину)
    const onWinResize = () => measure();
    window.addEventListener("resize", onWinResize);

    return () => {
      ro.disconnect();
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("resize", onWinResize);
    };
  }, [height, minW]);

  const s = box?.s ?? 1;
  const w = box?.w ?? PROBE_A;
  const h = box?.h ?? height;

  return (
    <div
      ref={outerRef}
      style={{
        position: "relative",
        width: "100%",
        height: Math.round(h * s),
        marginBottom: isLast ? 0 : GAP,
        overflow: "hidden",
        backgroundColor: "#000",
        borderRadius: FRAME_RADIUS,
      }}
    >
      {/* Якорь горизонтального центрирования */}
      <div style={{ position: "absolute", left: "50%", top: 0, width: 0, height: 0 }}>
        <div
          ref={innerRef}
          style={{
            position: "absolute",
            top: 0,
            left: `${-(w * s) / 2}px`,
            width: w,
            height: h,
            transform: `scale(${s})`,
            transformOrigin: "top left",
          }}
        >
          <div style={{ width: "100%", height: "100%" }}>
            <Component />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AISimulatorPage({ onBack }: { onBack: () => void }) {
  // Браузер восстанавливает прокрутку при перезагрузке/возврате —
  // открываем страницу всегда с верха, чтобы были видны заголовок и описание
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-black">
      {/*
        Full-bleed black page: parent (Background in imports/index.tsx) is already
        full width with no max-width / overflow-clip, so plain w-full is enough.
        No 100vw + negative-margin hack needed.
      */}
      <div
        className="relative w-full overflow-x-clip bg-black"
        style={{
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Кнопка назад */}
        <div className="px-[20px] sm:px-[44px] pt-[16px] pb-[6px]">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-[8px] font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px] text-white/50 cursor-pointer transition-colors hover:text-white"
          >
            <span className="text-[14px] leading-none">←</span>
            НАЗАД К ГЛАВНОЙ
          </button>
        </div>

        {/* Шапка страницы — компактная, без больших отступов */}
        <div className="relative w-full overflow-hidden bg-black">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
          <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col gap-[12px] px-[20px] pb-[22px] pt-[10px] sm:px-[44px]">
            <div className="flex w-full flex-col font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px] text-white/60">
              <p className="leading-[normal]">04 / ИИ СИМУЛЯТОР</p>
            </div>
            <h2
              className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[30px] tracking-[-0.36px] text-white sm:text-[38px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              ИИ симулятор
            </h2>
            <p
              className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[16px] leading-[1.6] text-white/70 max-w-[900px] sm:text-[17px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Моделирование сценариев и поведение синтетической аудитории:
              опросы, реакции и прогнозы без полевых исследований.
            </p>
          </div>
        </div>

        {/* Слайды из Figma — единая рамка: одинаковые боковые поля,
            одинаковый радиус и одинаковый зазор у всех */}
        <div
          className="mx-auto w-full px-[20px] pb-[40px] pt-[8px] sm:px-[44px]"
          style={{ maxWidth: FRAME_MAX_W }}
        >
          {SLIDES.map((slide, i) => (
            <ScaledSlide key={i} {...slide} isLast={i === SLIDES.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
