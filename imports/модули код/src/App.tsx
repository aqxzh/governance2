import Module0 from "@/imports/Модуль1-1/index";
import Module2 from "@/imports/Модуль2AutoLayout/index";
import Module3 from "@/imports/Модуль3/index";
import Module4 from "@/imports/Модуль4/index";
import Module5 from "@/imports/Модуль5-1/index";
import LlmToLlm from "@/imports/LlmToLlmPitchSlide/index";

export default function App() {
  return (
    <div className="w-full overflow-x-hidden bg-black">
      {/* Модуль 1 — абсолютное позиционирование, фиксированная высота */}
      <section style={{ height: 1020 }}>
        <Module0 />
      </section>
      {/* Остальные модули — flex-col, высота по контенту */}
      <section style={{ height: 1250 }}>
        <Module2 />
      </section>
      <section style={{ height: 1300 }}>
        <Module3 />
      </section>
      <section style={{ height: 1250 }}>
        <Module4 />
      </section>
      <section style={{ height: 1350 }}>
        <Module5 />
      </section>
      <section style={{ height: 1400 }}>
        <LlmToLlm />
      </section>
    </div>
  );
}
