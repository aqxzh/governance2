import React, { useState } from "react";
import svgPaths from "./svg-i03o381urh";
import imgImage4 from "./69b427c3dcdb4e4c688ac0c19f78534e10f8c495.png";
import imgImage5 from "./5619dcc32a026213e7c0dea2f52371ea3e02f696.png";
import { VideoModal } from "../../VideoModal";

function TitleBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Title Block">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[38px] text-white">LLM говорит с LLM</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8d99b9] text-[15px]">Не человек пишет промпт — агенты ведут переговоры друг с другом</p>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-[#337fff] content-stretch flex items-start overflow-clip px-[16px] py-[10px] relative rounded-[20px] shrink-0" data-name="Chip — Симург">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Synthetic data</p>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Header Row">
      <TitleBlock />
      <Chip />
    </div>
  );
}

function NameBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Name Block">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[17px]">Head Buyer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5b6a8f] text-[12.5px]">Закупщик сети</p>
    </div>
  );
}

function AgentHeader() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Agent Header">
      <div className="relative shrink-0 size-[52px]" data-name="Avatar">
        <svg className="absolute block inset-0 size-full" fill="none" height="52" preserveAspectRatio="none" viewBox="0 0 52 52" width="52">
          <circle cx="26" cy="26" fill="#3B82F5" id="Avatar" r="26" />
        </svg>
      </div>
      <NameBlock />
    </div>
  );
}

function MessageBubble() {
  return (
    <div className="bg-[#f7f9ff] relative rounded-[14px] shrink-0 w-[688px]" data-name="Message Bubble">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1a2348] text-[15px] w-[648px]">«Прошу скидку 9% по охлаждённой курице. Объёмы растут, доля на полке тоже»</p>
      </div>
      <div aria-hidden className="absolute border border-[#e9eff8] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function HeadBuyerCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[16px] shrink-0 w-[728px]" data-name="Head Buyer Card">
      <AgentHeader />
      <MessageBubble />
    </div>
  );
}

function NameBlock1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Name Block">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[17px]">Supplier Agent</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5b6a8f] text-[12.5px]">Поставщик AITAS</p>
    </div>
  );
}

function AgentHeader1() {
  return (
    <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-name="Agent Header">
      <div className="relative shrink-0 size-[52px]" data-name="Avatar">
        <svg className="absolute block inset-0 size-full" fill="none" height="52" preserveAspectRatio="none" viewBox="0 0 52 52" width="52">
          <circle cx="26" cy="26" fill="#21C45E" id="Avatar" r="26" />
        </svg>
      </div>
      <NameBlock1 />
    </div>
  );
}

function MessageBubble1() {
  return (
    <div className="bg-[#f7f9ff] relative rounded-[14px] shrink-0 w-[688px]" data-name="Message Bubble">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1a2348] text-[15px] w-[648px]">«Готов уступить 7%. Сохраню маржу и долю на полке»</p>
      </div>
      <div aria-hidden className="absolute border border-[#e9eff8] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function SupplierAgentCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[20px] relative rounded-[16px] shrink-0 w-[728px]" data-name="Supplier Agent Card">
      <AgentHeader1 />
      <MessageBubble1 />
    </div>
  );
}

function MainVisual() {
  return (
    <div className="content-stretch flex gap-[32px] items-center overflow-clip relative shrink-0 w-full" data-name="Main Visual">
      <HeadBuyerCard />
      <SupplierAgentCard />
      <div className="absolute h-[15px] left-[684px] top-[48px] w-[120px]" data-name="Arrow Buyer→Supplier">
        <div className="absolute inset-[-10%_-1.25%]">
          <svg className="block size-full" fill="none" height="18.0003" preserveAspectRatio="none" viewBox="0 0 123 18.0003" width="123">
            <path d={svgPaths.p1bd4cd98} id="Arrow BuyerâSupplier" stroke="#5E9EFF" strokeDasharray="6 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[15px] left-[684px] top-[105px] w-[120px]" data-name="Arrow Supplier→Buyer">
        <div className="absolute inset-[-10%_-1.25%]">
          <svg className="block size-full" fill="none" height="18.0003" preserveAspectRatio="none" viewBox="0 0 123 18.0003" width="123">
            <path d={svgPaths.p397c1e80} id="Arrow SupplierâBuyer" stroke="#21C45E" strokeDasharray="6 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[701px] not-italic text-[#2f7bff] text-[12px] top-[27px] whitespace-nowrap">запрос скидки</p>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[690px] not-italic text-[#16b364] text-[12px] top-[128px] whitespace-nowrap">ответ поставщика</p>
    </div>
  );
}

function Glyph() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Glyph">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Glyph">
          <path d={svgPaths.pbc80780} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconChip() {
  return (
    <div className="bg-[#2f7bff] content-stretch flex items-center justify-center overflow-clip relative rounded-[18px] shrink-0 size-[36px]" data-name="Icon Chip">
      <Glyph />
    </div>
  );
}

function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative rounded-[16px] shrink-0 w-[482px]" data-name="Переговоры закупщика и поставщиков">
      <IconChip />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a2348] text-[15px] whitespace-nowrap">Переговоры закупщика и поставщиков</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6a8f] text-[13px] w-[442px]">Агент сети запрашивает скидки, поставщики отвечают уступками. Договорённости идут в формулы.</p>
    </div>
  );
}

function Glyph1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Glyph">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_4)" id="Glyph">
          <path d={svgPaths.p10d6a680} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2654e380} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_4">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconChip1() {
  return (
    <div className="bg-[#5b7ec9] content-stretch flex items-center justify-center overflow-clip relative rounded-[18px] shrink-0 size-[36px]" data-name="Icon Chip">
      <Glyph1 />
    </div>
  );
}

function RespondentsVsJudge() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative rounded-[16px] shrink-0 w-[482px]" data-name="Respondents vs Judge">
      <IconChip1 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a2348] text-[15px] whitespace-nowrap">Respondents vs Judge</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6a8f] text-[13px] w-[442px]">Один ИИ отвечает как покупатель, другой независимо оценивает ответ. Перекрёстная проверка.</p>
    </div>
  );
}

function Glyph2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Glyph">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Glyph">
          <path d="M13.5 15V7.5" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9 15V3" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M4.5 15V10.5" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconChip2() {
  return (
    <div className="bg-[#16b364] content-stretch flex items-center justify-center overflow-clip relative rounded-[18px] shrink-0 size-[36px]" data-name="Icon Chip">
      <Glyph2 />
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[20px] relative rounded-[16px] shrink-0 w-[482px]" data-name="Событие → расчёт → интерпретация">
      <IconChip2 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1a2348] text-[15px] whitespace-nowrap">Событие → расчёт → интерпретация</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6a8f] text-[13px] w-[442px]">Один ИИ превращает текст в параметры, ядро считает цифры, другой ИИ объясняет результат.</p>
    </div>
  );
}

function Examples() {
  return (
    <div className="content-stretch flex gap-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Examples">
      <Component />
      <RespondentsVsJudge />
      <Component1 />
    </div>
  );
}

function Frame() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
        <div className="h-[503px] relative rounded-[20px] shrink-0 w-[447px]" data-name="image 4">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgImage4} />
        </div>
        <button
          type="button"
          onClick={() => setShowVideo(true)}
          aria-label="Смотреть видео — карта симулятора"
          className="group relative h-[504px] rounded-[20px] shrink-0 w-[716px] cursor-pointer overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-white/80"
          data-name="image 5"
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgImage5} />
          <span className="pointer-events-none absolute bottom-[16px] left-[16px] z-10 flex items-center gap-[10px] rounded-full bg-black/55 pl-[14px] pr-[18px] py-[12px] text-white/95 ring-1 ring-white/30 backdrop-blur-md transition-all duration-300 group-hover:scale-[1.05] group-hover:bg-white/90 group-hover:text-[#0d0f16] group-hover:ring-white/60">
            <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[15px] leading-none whitespace-nowrap">Смотреть видео</span>
          </span>
        </button>
      </div>
      {showVideo && (
        <VideoModal src="/videos/map%202.mp4" title="Карта — LLM говорит с LLM" onClose={() => setShowVideo(false)} large />
      )}
    </>
  );
}

function Group() {
  return (
    <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 text-[20px] text-white w-[1380px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`«Сценарный симулятор рынка курицы: событие описывается текстом, а движок пересчитывает маржу, выручку, продажи и списания по каждой точке на карте; интерпретацию готовит локальный LLM. `}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">{`Три контура диалогов между агентами: ежемесячные переговоры закупщика сети с агентами поставщиков — уступки превращаются в ценовые множители и двигают доли полок; синтетические опросы домохозяйств, где ответы респондентов независимо проверяет строгий судья; цепочка «событие → расчёт → интерпретация». `}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">Числа принадлежат только детерминированному ядру формул, каждый шаг журналируется и воспроизводится без единого вызова LLM.</p>
      </div>
      <p className="col-1 leading-[normal] ml-0 mt-[212px] relative row-1 text-[#8d99b9] text-[13px] whitespace-pre">{`Структурированные каналы  ·  Формулы владеют цифрами  ·  Каждый шаг журналируется`}</p>
    </div>
  );
}

export default function LlmToLlmPitchSlide() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[20px] items-start p-[26px] relative size-full" data-name="LLM-to-LLM Pitch Slide">
      <HeaderRow />
      <MainVisual />
      <Examples />
      <Frame />
      <Group />
    </div>
  );
}