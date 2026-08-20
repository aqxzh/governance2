import React, { useEffect, useState } from "react";
import imgLabaMain from "./laba-main.png";
import imgDemkaPhoto from "./demka-photo.png";
import imgBrain from "./024996798644ee39e17d62182850eebdd0609893.png";
import imgFrame from "./abf3bb7accbdf5e82f4b0b47958890c444c8104e.png";
import imgFrame1 from "./57ff537c2189b0a378566d8a505380f1ac26642d.png";
import imgFrame2 from "./a9248cf50efe8245aba6b07afe6d67b31ad55a5a.png";
import imgAfter from "./after.png";
import imgBefore from "./before.png";
import imgImage55 from "./762e3da223b722c4708edaa513edb7fb81d065dc.png";
import imgImage57 from "./a1f65cf94f5b3c805215dfdc6c26bc10642d5405.png";
import imgFrame5 from "./d905383f33c1e237129302dc61291c1114ce4e71.png";
import imgImage58 from "./29a3bee7660df8358ecf16a3422d11eb33c3cb17.png";
import imgImage56 from "./c07407db45f5b55ba113edc2d3987e4a10064c6c.png";
import imgImage59 from "./29ec613a87bc4f3acf7213fc4f5fc665e405cb89.png";
import imgImage60 from "./139f115f8c2e5f0ed078adfaed1ec6bced7ee40c.png";
import imgImage61 from "./8a984d7d3fd8f76fd80c78c281b414d9286b59ad.png";
import imgImage62 from "./f69f67e473112b2672b4d0eedc1b935c373c076e.png";
import imgProductSmartHr from "./smart-hr.png";
import imgProductOnlineAssessment from "./online-assessment.png";
import imgProductAssistant from "./assistant.png";
import imgProductSovereignty from "./sovereignty.png";

import imgSolutionFunctionalAnalysis from "./functional-analysis.png";
import imgSolutionGovFunctionsAnalytics from "./gov-functions-analytics.png";
import imgSolutionDigitalTwin from "./digital-twin.png";
import imgSolutionGovServicesAnalytics from "./gov-services-analytics.png";
import imgSolutionAiRecruitment from "./ai-recruitment.png";
import imgSolutionCivilServiceSelection from "./civil-service-selection.png";
import imgSolutionAiManagementAdvisor from "./ai-management-advisor.png";
import imgSolutionEkyzmetAnalytics from "./ekyzmet-analytics.png";
import imgSolutionBotAssistants from "./bot-assistants.png";
import imgSolutionIndustryBank from "./industry-bank.png";
import imgSolutionAnticorruptionMonitoring from "./anticorruption-monitoring.png";
import imgSolutionEksEnbekReconciliation from "./eks-enbek-reconciliation.png";

import imgTabDiagnostics from "./tab-diagnostics.png";
import imgTabCoordination from "./tab-coordination.png";
import imgTabActors from "./tab-actors.png";

type ProductImageKey = "smarthr" | "assessment" | "assistant" | "sovereignty";

const productImages: Record<ProductImageKey, { index: string; title: string; image: string; description: string }> = {
  smarthr: {
    index: "01",
    title: "Smart HR",
    image: imgProductSmartHr,
    description: "Кадровые профили, подбор и аналитика кандидатов в едином контуре данных.",
  },
  assessment: {
    index: "02",
    title: "AI Assessment",
    image: imgProductOnlineAssessment,
    description: "Поведенческий анализ, компьютерное зрение и аудиоанализ для оценки кандидатов.",
  },
  assistant: {
    index: "03",
    title: "Помощник руководителя",
    image: imgProductAssistant,
    description: "Управленческий сигнал, координация задач и приоритизация действий.",
  },
  sovereignty: {
    index: "04",
    title: "Цифровой суверенитет",
    image: imgProductSovereignty,
    description: "Закрытый контур, локальная инфраструктура и защита данных национального уровня.",
  },
};

type TabKey = "recruitment" | "analytics" | "assessment";

type TabRow = {
  num: string;
  name: string;
  does: string;
  feature: string;
  image?: string;
};

type TabData = {
  index: string;
  label: string;
  title: string;
  description: string;
  image?: string;
  rows: TabRow[];
};

const tabData: Record<TabKey, TabData> = {
  recruitment: {
    index: "01",
    label: "Диагностика",
    title: "Диагностика",
    description:
      "ИИ анализирует функции, кадры и услуги госорганов в единой логике данных: находит дублирования полномочий, скрытые барьеры и аномалии. Диагностика показывает, где процессы ломаются и почему.",
    image: imgBrain,
    rows: [
      { num: "01", name: "Функциональный анализ", does: "Платформа выявляет коллизии между ведомствами, дублирование полномочий и несоответствие функций декларируемой миссии", feature: "Передача функций частному сектору", image: imgSolutionFunctionalAnalysis },
      { num: "02", name: "Аналитика госфункций", does: "Карта сравнительного среза по госорганам: объём обращений, собственные и не родные функции, внешние связи", feature: "Переход от обзора к профилю в один клик", image: imgSolutionGovFunctionsAnalytics },
      { num: "03", name: "Рекрутинг с ИИ", does: "AI-платформа подбора кадровного резерва из 50 000+ профилей по опыту, компетенциям, рангу и параметрам", feature: "50 000+ профилей", image: imgSolutionAiRecruitment },
      { num: "04", name: "Аналитика госуслуг", does: "Автоматизированный аудит реестра госуслуг и НПА: выявление неэффективных процедур и ошибок в нормативке", feature: "Пошаговый план автоматизации", image: imgSolutionGovServicesAnalytics },
      { num: "05", name: "Аналитика Екызмет", does: "Платформа анализа качества данных о сотрудниках ИС eqyzmet.kz: демографические и профессиональные характеристики", feature: "Повышение точности метрик", image: imgSolutionEkyzmetAnalytics },
      { num: "06", name: "Антикоррупционный мониторинг", does: "Сквозной анализ данных для выявления скрытой аффилированности, мониторинга фискальной дисциплины и оценки рисков", feature: "Предиктивная оценка рисков", image: imgSolutionAnticorruptionMonitoring },
      { num: "07", name: "Сверка ЕКС и «Енбек»", does: "Интеллектуальный аудит расхождений между ИС «ЕКС» (ручной ввод) и ИС «Енбек» (автообновление) с проверкой ИИН/БИН", feature: "Аналитика качества данных", image: imgSolutionEksEnbekReconciliation },
    ],
  },
  analytics: {
    index: "02",
    label: "Координация",
    title: "Координация",
    description:
      "Помощник руководителя агрегирует ЭДО, задачи и метрики в чистый управленческий сигнал. Координация задач и умные боты работают прямо в мессенджерах сотрудников.",
    image: imgTabCoordination,
    rows: [
      { num: "01", name: "Цифровой двойник", does: "Моделирование перераспределения функций и сотрудников между ведомствами с мгновенным расчётом нагрузки и баланса", feature: "Drag-and-drop интерфейс", image: imgSolutionDigitalTwin },
      { num: "02", name: "Отбор на госслужбу с ИИ", does: "Оценка кандидатов через анализ видео, голосовых ответов и текста по 15 компетенциям: логика, коммуникация, устойчивость", feature: "15 компетенций", image: imgSolutionCivilServiceSelection },
      { num: "03", name: "ИИ-советник по управлению", does: "Единый интеллектуальный центр доступа к знаниям организации на данных eOtinish и Documentolog — вопросы на естественном языке", feature: "Интерактивные панели и упреждающие сигналы", image: imgSolutionAiManagementAdvisor },
      { num: "04", name: "Банк отраслевых направлений", does: "Единая база данных по всем госслужащим Казахстана: стаж, прошлые места работы, быстрый подбор кандидата на вакансию", feature: "Поиск по всем регионам", image: imgSolutionIndustryBank },
    ],
  },
  assessment: {
    index: "03",
    label: "Акторы",
    title: "Акторы",
    description:
      "Smart HR и онлайн-ассессмент: подбор, оценка и развитие кадров госслужбы на основе данных. Снижение ручной нагрузки, структурный отбор, поведенческий анализ.",
    image: imgTabActors,
    rows: [
      { num: "01", name: "Разработка ботов-ассистентов", does: "Telegram и WhatsApp-боты на платформе ИИ для ответов на вопросы по заданной теме в нескольких группах", feature: "Изолированные сессии", image: imgSolutionBotAssistants },
    ],
  },
};

function ImageModal({ index, title, image, description, onClose }: { index: string; title: string; image: string; description: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-[6px] p-4 sm:p-6 animate-[imgmodal-fade_.18s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative flex w-full max-w-[1100px] max-h-[90vh] flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] animate-[imgmodal-pop_.24s_cubic-bezier(0.2,0.8,0.2,1)]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-6 border-b border-[#e6e8ee] px-7 pt-6 pb-5">
          <div className="flex min-w-0 flex-col">
            <div className="flex items-baseline gap-[14px] min-w-0">
              <span className="font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[22px] leading-none text-[#2242d6] tabular-nums shrink-0">
                {index}
              </span>
              <h2
                className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[26px] leading-[1.1] tracking-[-0.26px] text-[#0d0f16]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="shrink-0 grid size-11 place-items-center rounded-full border border-[#e6e8ee] text-[26px] leading-none text-[#3a4050] transition-colors hover:border-[#0d0f16] hover:bg-[#0d0f16] hover:text-white cursor-pointer"
          >
            ×
          </button>
        </div>

        {/* Image stage */}
        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[#f6f7fb] p-4 sm:p-8">
          <img
            src={image}
            alt={title}
            className="block max-h-[64vh] max-w-full object-contain shadow-[0_8px_32px_rgba(13,15,22,0.12)]"
          />
        </div>

        {/* Footer description */}
        <div className="border-t border-[#e6e8ee] px-7 py-5">
          <p
            className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[15px] leading-[1.55] text-[#3a4050]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function VideoModal({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-[6px] p-4 sm:p-6 animate-[imgmodal-fade_.18s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative flex w-full max-w-[1100px] flex-col overflow-hidden rounded-[14px] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.5)] animate-[imgmodal-pop_.24s_cubic-bezier(0.2,0.8,0.2,1)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-6 border-b border-white/10 px-7 pt-6 pb-5">
          <h2
            className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[26px] leading-[1.1] tracking-[-0.26px] text-white"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="shrink-0 grid size-11 place-items-center rounded-full border border-white/20 text-[26px] leading-none text-white transition-colors hover:bg-white hover:text-[#0d0f16] cursor-pointer"
          >
            ×
          </button>
        </div>
        <div className="relative flex min-h-0 items-center justify-center bg-black">
          <video
            src={src}
            controls
            autoPlay
            playsInline
            className="block max-h-[72vh] max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white tracking-[0.46px] whitespace-nowrap">
        <p className="leading-[normal] hidden sm:block">ЛАБОРАТОРИЯ ИСКУССТВЕННОГО ИНТЕЛЛЕКТА · ГОСУДАРСТВЕННАЯ СЛУЖБА РК</p>
        <p className="leading-[normal] sm:hidden">ЛАБОРАТОРИЯ ИИ · ГС РК</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white tracking-[0.46px] whitespace-nowrap">
        <p className="leading-[normal]">RU / KZ / EN</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#0d0f16] h-[33px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between px-[20px] sm:px-[44px] py-[9px] relative size-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[17px] tracking-[-0.17px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">GOVERNANCE.KZ</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[26px]" data-name="Border">
        <div aria-hidden className="absolute border-[3px] border-[#2242d6] border-solid inset-0 pointer-events-none" />
      </div>
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[13.5px] whitespace-nowrap transition-colors hover:text-[#2242d6]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Контуры</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[13.5px] whitespace-nowrap transition-colors hover:text-[#2242d6]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Продукты</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[13.5px] whitespace-nowrap transition-colors hover:text-[#2242d6]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Видение</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0 cursor-pointer" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[13.5px] whitespace-nowrap transition-colors hover:text-[#2242d6]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Принципы</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex flex-col items-start px-[19px] py-[10px] relative shrink-0 cursor-pointer transition-colors hover:bg-[#0d0f16] group" data-name="Border">
      <div aria-hidden className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none group-hover:border-[#0d0f16]" />
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[13px] whitespace-nowrap transition-colors group-hover:text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Записаться на встречу →</p>
      </div>
    </div>
  );
}

function HorizontalBorder({ onTabClick }: { onTabClick: (id: TabKey) => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[22px] pt-[20px] px-[20px] sm:px-[44px] relative size-full gap-[24px]">
          <Container2 />
          <HeroTabs onTabClick={onTabClick} />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">01 / ИНФРАСТРУКТУРА УПРАВЛЕНИЯ</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-0 content-stretch flex flex-col items-start max-w-[620px] relative row-0 self-end shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[18px] text-black" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[28.8px] mb-0">Governance.kz — прикладной центр цифровой трансформации</p>
        <p className="leading-[28.8px] mb-0">управления. ИИ анализирует функции, кадры, услуги и нагрузку в</p>
        <p className="leading-[28.8px] mb-0">единой логике данных: находит дублирования, барьеры и аномалии —</p>
        <p className="leading-[28.8px]">а решения остаются за людьми.</p>
      </div>
    </div>
  );
}

function Background2({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="bg-[#2242d6] relative shrink-0 cursor-pointer transition-colors hover:bg-[#1a35ad]" data-name="Background">
      <div className="content-stretch flex flex-col items-start px-[22px] py-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[13px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Записаться на встречу →</p>
        </div>
      </div>
    </div>
  );
}

function Border1({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="relative shrink-0 cursor-pointer bg-white" data-name="Border">
      <div aria-hidden className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start px-[24px] py-[15px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[13px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Аналитическая записка</p>
        </div>
      </div>
    </div>
  );
}

function Container12({ onMeetingClick, onNoteClick }: { onMeetingClick: () => void; onNoteClick: () => void }) {
  return (
    <div className="col-0 content-stretch flex flex-row gap-[10px] items-start justify-self-stretch relative row-0 self-end shrink-0 w-full" data-name="Container">
      <Background2 onClick={onMeetingClick} />
      <Border1 onClick={onNoteClick} />
    </div>
  );
}

function InfoModal({ title, description, onClose }: { title: string; description: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="relative w-full max-w-2xl rounded-[24px] bg-white p-8 shadow-[0_40px_80px_rgba(0,0,0,0.18)]" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 text-[24px] font-bold text-slate-500 hover:text-slate-900"
        >
          ×
        </button>
        <h2 className="mb-4 text-2xl font-semibold text-slate-900">{title}</h2>
        <div className="space-y-4 text-sm leading-6 text-slate-700">{description}</div>
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex items-start pb-[2px] relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#b9c1e8] border-b-2 border-dashed inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[30px] whitespace-nowrap">
        <p className="leading-[normal]">0 000</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.5px] text-black w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">профилей · Smart HR</p>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] pr-[21px] py-[18px] relative size-full">
        <HorizontalBorder2 />
        <Container13 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex items-start pb-[2px] relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#b9c1e8] border-b-2 border-dashed inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[30px] whitespace-nowrap">
        <p className="leading-[normal]">0 000</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.5px] text-black w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">госуслуг проверено</p>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] pr-[21px] py-[18px] relative size-full">
        <HorizontalBorder3 />
        <Container14 />
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="content-stretch flex items-start pb-[2px] relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#b9c1e8] border-b-2 border-dashed inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[30px] whitespace-nowrap">
        <p className="leading-[normal]">00</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.5px] text-black w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">госорганов в пилоте</p>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="VerticalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[20px] pr-[21px] py-[18px] relative size-full">
        <HorizontalBorder4 />
        <Container15 />
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="content-stretch flex items-start pb-[2px] relative shrink-0" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#b9c1e8] border-b-2 border-dashed inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[30px] whitespace-nowrap">
        <p className="leading-[normal]">+00%</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.5px] text-black w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">эффективность управления</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[20px] py-[18px] relative size-full">
        <HorizontalBorder5 />
        <Container17 />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="content-stretch flex h-[103px] items-start justify-center p-px relative w-full max-w-[1112px] mx-auto" data-name="Border">
      <div aria-hidden className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none" />
      <VerticalBorder />
      <VerticalBorder1 />
      <VerticalBorder2 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start mt-[14px] w-full max-w-[1112px] mx-auto" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11px] text-black w-full">
        <p className="leading-[normal]">{`// плейсхолдеры — подставить фактические показатели`}</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">02 / АРХИТЕКТУРА</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[22px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[30px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Три взаимосвязанных контура</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[143px] relative shrink-0 w-[189px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[124.48%] left-[0.35%] max-w-none top-[-11.24%] w-full" src={imgFrame} />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[13px] w-full">
        <p className="leading-[normal]">К1</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[2.8px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[19px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">
          <span>Диагностика</span>
          <span className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[#5a606e]">{` (Прозрачность аппарата)`}</span>
        </p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.68px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[14.5px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.48px] mb-0">Функциональный анализ госорганов и</p>
        <p className="leading-[22.48px] mb-0">аналитика госуслуг: дублирования, коллизии,</p>
        <p className="leading-[22.48px] mb-0">скрытые барьеры, перевод в проактивный</p>
        <p className="leading-[22.48px]">формат.</p>
      </div>
    </div>
  );
}

function Background3({ onTabClick }: { onTabClick: (id: TabKey) => void }) {
  return (
    <button
      type="button"
      onClick={() => onTabClick("recruitment")}
      aria-label="Открыть вкладку Диагностика"
      className="group bg-white flex flex-col gap-[12px] items-center justify-start pb-[28px] pt-[28px] px-[24px] relative shrink min-w-0 flex-1 min-h-[346px] rounded-[2px] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(13,15,22,0.08)] hover:-translate-y-1 cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]" data-name="Background">
      <div aria-hidden className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none transition-colors duration-300 group-hover:border-[#2242d6]" />
      <Frame />
      <Container20 />
      <Heading1 />
      <Container21 />
    </button>
  );
}

function Frame1() {
  return (
    <div className="h-[165.6px] relative shrink-0 w-[174.24px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFrame1} />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[13px] w-full">
        <p className="leading-[normal]">К2</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[3px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[19px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Координация</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[14.5px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.48px] mb-0">Smart HR и онлайн-ассессмент: подбор и</p>
        <p className="leading-[22.48px] mb-0">оценка кандидатов на данных, снижение</p>
        <p className="leading-[22.48px]">ручной нагрузки, структурный отбор.</p>
      </div>
    </div>
  );
}

function Background4({ onTabClick }: { onTabClick: (id: TabKey) => void }) {
  return (
    <button
      type="button"
      onClick={() => onTabClick("analytics")}
      aria-label="Открыть вкладку Координация"
      className="group bg-white flex flex-col gap-[12px] items-center justify-start pb-[28px] pt-[28px] px-[24px] relative shrink min-w-0 flex-1 min-h-[346px] rounded-[2px] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(13,15,22,0.08)] hover:-translate-y-1 cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]" data-name="Background">
      <div aria-hidden className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none transition-colors duration-300 group-hover:border-[#2242d6]" />
      <Frame1 />
      <Container22 />
      <Heading2 />
      <Container23 />
    </button>
  );
}

function Frame2() {
  return (
    <div className="h-[135px] relative shrink-0 w-[216px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[122.67%] left-0 max-w-none top-[-13.53%] w-full" src={imgFrame2} />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[13px] w-full">
        <p className="leading-[normal]">К3</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[3px] relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[19px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">
          <span>Акторы</span>
          <span className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[#5a606e]">{` (Управленческий интеллект)`}</span>
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[14.5px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[22.48px] mb-0">Помощник руководителя поверх ЭДО:</p>
        <p className="leading-[22.48px] mb-0">управленческий сигнал, рекомендации и</p>
        <p className="leading-[22.48px]">действия вместо избыточных данных.</p>
      </div>
    </div>
  );
}

function Background5({ onTabClick }: { onTabClick: (id: TabKey) => void }) {
  return (
    <button
      type="button"
      onClick={() => onTabClick("assessment")}
      aria-label="Открыть вкладку Акторы"
      className="group bg-white flex flex-col gap-[12px] items-center justify-start pb-[28px] pt-[28px] px-[24px] relative shrink min-w-0 flex-1 min-h-[345px] rounded-[2px] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(13,15,22,0.08)] hover:-translate-y-1 cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]" data-name="Background">
      <div aria-hidden className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none transition-colors duration-300 group-hover:border-[#2242d6]" />
      <Frame2 />
      <Container24 />
      <Heading3 />
      <Container25 />
    </button>
  );
}

function BackgroundBorder({ onTabClick }: { onTabClick: (id: TabKey) => void }) {
  return (
    <div className="bg-white flex flex-col md:flex-row items-stretch justify-center p-px relative w-full max-w-[1112px] mx-auto gap-0" data-name="Background+Border">
      <Background3 onTabClick={onTabClick} />
      <Background4 onTabClick={onTabClick} />
      <Background5 onTabClick={onTabClick} />
    </div>
  );
}

function HorizontalBorder6({ onTabClick }: { onTabClick: (id: TabKey) => void }) {
  return (
    <div className="relative w-full" data-name="HorizontalBorder">
      <div className="flex flex-col gap-[8px] items-start px-[20px] sm:px-[44px] py-[52px]">
        <Container19 />
        <Heading />
        <BackgroundBorder onTabClick={onTabClick} />
      </div>
    </div>
  );
}

function HorizontalBorder1({ onTabClick }: { onTabClick: (id: TabKey) => void }) {
  const [modal, setModal] = useState<{title: string; description: React.ReactNode} | null>(null);

  return (
    <div className="relative w-full overflow-hidden" data-name="HorizontalBorder">
      {/* Фоновое зацикленное видео */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/graphs.mov"
          autoPlay
          muted
          loop
          playsInline
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0d0f16]/55" />
      </div>

      {/* Контент поверх фона */}
      <div className="relative z-10 px-[20px] sm:px-[44px] py-[48px] sm:py-[64px]">
        {/* Label */}
        <div className="flex w-full flex-col font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px] text-[#7d92ff] mb-[24px]">
          <p className="leading-[normal]">01 / ИНФРАСТРУКТУРА УПРАВЛЕНИЯ</p>
        </div>

        {/* Hero content: text left, image and buttons right */}
        <div className="flex flex-col lg:flex-row gap-[40px] items-start mt-[32px] mb-[40px]">
          <div className="flex-1">
            {/* Main heading */}
            <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-white text-[48px] lg:text-[52px] tracking-[-1.04px] leading-[55px] mb-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="mb-0">Государство и бизнес,</p>
              <p className="mb-0">которые видят свои</p>
              <p>процессы целиком</p>
            </div>

            {/* Description text only */}
            <div className="max-w-[620px] [word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[18px] text-white/75" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="leading-[28.8px] mb-0">Governance.kz — прикладной центр цифровой трансформации</p>
              <p className="leading-[28.8px] mb-0">управления. ИИ анализирует функции, кадры, услуги и нагрузку в</p>
              <p className="leading-[28.8px] mb-0">единой логике данных: находит дублирования, барьеры и аномалии —</p>
              <p className="leading-[28.8px]">а решения остаются за людьми.</p>
            </div>
          </div>

          {/* Right column: image + buttons */}
          <div className="flex-shrink-0 w-full lg:w-auto flex flex-col gap-[24px]">
            {/* Hero image */}
            <div className="w-full lg:w-[516px] min-h-[200px] bg-[#f4f5f8] rounded-[8px] overflow-hidden">
              <img alt="Governance.kz" className="block w-full h-auto object-cover rounded-[8px]" src={imgLabaMain} />
            </div>

            {/* Buttons */}
            <Container12 onMeetingClick={() => setModal({title: "Записаться на встречу", description: "Описание встречи"})} onNoteClick={() => setModal({title: "Аналитическая записка", description: "Описание записки"})} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && <InfoModal title={modal.title} description={modal.description} onClose={() => setModal(null)} />}
    </div>
  );
}

function Frame21({ onTabClick }: { onTabClick: (id: TabKey) => void }) {
  return (
    <div className="w-full">
      <HorizontalBorder1 onTabClick={onTabClick} />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">03 / ПРОДУКТЫ</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[30px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Реестр решений</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white tracking-[0.69px] whitespace-nowrap">
          <p className="leading-[normal]">№</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white tracking-[0.69px] whitespace-nowrap">
          <p className="leading-[normal]">РЕШЕНИЕ</p>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white tracking-[0.69px] whitespace-nowrap">
          <p className="leading-[normal]">ЧТО ДЕЛАЕТ</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white tracking-[0.69px] whitespace-nowrap">
          <p className="leading-[normal]">ОСОБЕННОСТЬ</p>
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#0d0f16] grid grid-cols-[____60px_minmax(0,1.10fr)_minmax(0,2fr)_minmax(0,1.10fr)] grid-rows-[_39px] h-[39px] relative shrink-0 w-full" data-name="Background">
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container31() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">01</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Smart HR</p>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[14px] whitespace-normal" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[21px] mb-0">Диалоговый помощник KZ/RU/EN, фильтр профилей, аналитика</p>
          <p className="leading-[21px]">кандидатов</p>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">3 модуля</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder8({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-solid border-t inset-0 pointer-events-none" />
      <div onClick={onClick} className="group grid cursor-pointer grid-cols-[____60px_minmax(0,1.10fr)_minmax(0,2fr)_minmax(0,1.10fr)] grid-rows-[auto] min-h-[64px] pt-px relative shrink-0 w-full transition-colors hover:bg-[#f6f7fb]">
        <span aria-hidden className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2242d6] opacity-0 transition-opacity group-hover:opacity-100" />
        <span aria-hidden className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[16px] leading-none text-[#2242d6] opacity-0 transition-opacity group-hover:opacity-100">→</span>
        <Container31 />
        <Container32 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">02</p>
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Онлайн-ассессмент</p>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[14px] whitespace-normal" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[21px]">Компьютерное зрение, анализ видео/аудио, поведенческие паттерны</p>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Human-in-the-loop</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#f6f7fb] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-solid border-t inset-0 pointer-events-none" />
      <div onClick={onClick} className="group grid cursor-pointer grid-cols-[____60px_minmax(0,1.10fr)_minmax(0,2fr)_minmax(0,1.10fr)] grid-rows-[auto] min-h-[64px] pt-px relative shrink-0 w-full transition-colors hover:bg-white">
        <span aria-hidden className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2242d6] opacity-0 transition-opacity group-hover:opacity-100" />
        <span aria-hidden className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[16px] leading-none text-[#2242d6] opacity-0 transition-opacity group-hover:opacity-100">→</span>
        <Container35 />
        <Container36 />
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">03</p>
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Помощник руководителя</p>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[14px] whitespace-normal" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[21px]">Интеграция ЭДО, нагрузка, узкие места, управленческий сигнал</p>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Для ЛПР</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder9({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-solid border-t inset-0 pointer-events-none" />
      <div onClick={onClick} className="group grid cursor-pointer grid-cols-[____60px_minmax(0,1.10fr)_minmax(0,2fr)_minmax(0,1.10fr)] grid-rows-[auto] min-h-[64px] pt-px relative shrink-0 w-full transition-colors hover:bg-[#f6f7fb]">
        <span aria-hidden className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2242d6] opacity-0 transition-opacity group-hover:opacity-100" />
        <span aria-hidden className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[16px] leading-none text-[#2242d6] opacity-0 transition-opacity group-hover:opacity-100">→</span>
        <Container39 />
        <Container40 />
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">04</p>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Цифровой суверенитет</p>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#3a4050] text-[14px] whitespace-normal" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[21px] mb-0">Закрытый контур, суперкомпьютер и локальные сервера, защита</p>
          <p className="leading-[21px]">данных РК</p>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <p className="leading-[normal]">Инфраструктура</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1({ onClick }: { onClick: () => void }) {
  return (
    <div className="bg-[#f6f7fb] relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-solid border-t inset-0 pointer-events-none" />
      <div onClick={onClick} className="group grid cursor-pointer grid-cols-[____60px_minmax(0,1.10fr)_minmax(0,2fr)_minmax(0,1.10fr)] grid-rows-[auto] min-h-[64px] pt-px relative shrink-0 w-full transition-colors hover:bg-white">
        <span aria-hidden className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2242d6] opacity-0 transition-opacity group-hover:opacity-100" />
        <span aria-hidden className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[16px] leading-none text-[#2242d6] opacity-0 transition-opacity group-hover:opacity-100">→</span>
        <Container43 />
        <Container44 />
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Border3({ onImageClick }: { onImageClick: (id: ProductImageKey) => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="Border">
      <div aria-hidden className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none z-10" />
      <div className="content-stretch flex flex-col items-start relative size-full">
        <Background6 />
        <HorizontalBorder8 onClick={() => onImageClick("smarthr")} />
        <BackgroundHorizontalBorder onClick={() => onImageClick("assessment")} />
        <HorizontalBorder9 onClick={() => onImageClick("assistant")} />
        <BackgroundHorizontalBorder1 onClick={() => onImageClick("sovereignty")} />
      </div>
    </div>
  );
}

function HorizontalBorder7({ onImageClick }: { onImageClick: (id: ProductImageKey) => void }) {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[53px] pt-[52px] px-[20px] sm:px-[44px] relative size-full">
        <Container26 />
        <Heading4 />
        <div className="w-full overflow-x-auto">
          <Border3 onImageClick={onImageClick} />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">04 / ИНФОГРАФИКА</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[30px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Инфографика: Философия “Укрощения хаоса”</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="col-1 h-[55.677px] ml-[20.87px] mt-0 relative row-1 w-full max-w-[1082px]" data-name="Frame">
      <div className="absolute h-[63.5px] left-0 top-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="col-1 h-[103.399px] ml-0 mt-[11px] relative row-1 w-full max-w-[1082px]" data-name="Frame">
      <div className="absolute h-[117.086px] left-0 top-0 w-full" data-name="Rectangle" />
      <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[117px] leading-[normal] left-0 not-italic text-[#3a4050] text-[22px] top-0 w-full">В Governance.kz инфографика — это не украшение. Это функциональный инструмент, который переводит сложнейшие процессы (коллизии полномочий, скрытые барьеры) в кристально чистую визуальную структуру. От хаоса неструктурированных данных — к математическому порядку.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="col-1 h-[60.537px] ml-[540.71px] mt-[412.71px] relative row-1 w-[58.063px]" data-name="Frame">
      <div className="absolute h-[68.5px] left-0 top-0 w-[64px]" data-name="Rectangle" />
    </div>
  );
}

function Frame6({ src }: { src: string }) {
  return (
    <div className="col-1 h-[293.898px] ml-[30.41px] mt-[31.38px] relative rounded-[40px] row-1 w-[437.528px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
        <img alt="" className="absolute h-[113.85%] left-0 max-w-none top-[-10.68%] w-[101.79%] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-hover:-rotate-[0.5deg]" src={src} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="col-1 h-[19.654px] ml-[11.05px] mt-[5.2px] relative row-1 w-[49.772px]" data-name="Frame">
      <div className="absolute h-[31.5px] left-0 top-0 w-[77.023px]" data-name="Rectangle" />
      <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans:Bold',sans-serif] font-bold h-[31.5px] leading-[normal] left-0 not-italic text-[24px] text-white top-0 w-[77.023px]">Стало</p>
    </div>
  );
}

function Group3({ src }: { src: string }) {
  return (
    <div className="group col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[610.57px] mt-[128px] place-items-start relative row-1">
      <div className="bg-white border-[#dbe2ec] border-[0.75px] border-solid col-1 h-[351.737px] ml-0 mt-[1.77px] relative rounded-[100.58px] row-1 w-[498.977px] transition-colors duration-300 group-hover:border-[#2242d6]" data-name="Rectangle" />
      <Frame6 src={src} />
      <div className="bg-[#2242d6] col-1 h-[41px] ml-[0.43px] mt-0 relative rounded-[7.191px] row-1 w-[95px] transition-colors duration-300 group-hover:bg-[#1a35ad]" data-name="Rectangle" />
      <Frame7 />
    </div>
  );
}

function Frame8({ src }: { src: string }) {
  return (
    <div className="col-1 h-[308.645px] ml-[30.47px] mt-[23.12px] relative rounded-[40px] row-1 w-[437.398px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
        <img alt="" className="absolute h-[109.41%] left-[-1.51%] max-w-none top-[-9.36%] w-[101.51%] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] group-hover:rotate-[0.5deg]" src={src} />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#2242d6] col-1 h-[23.248px] ml-[12.72px] mt-[6.1px] relative row-1 w-[50.425px] transition-colors duration-300 group-hover:bg-[#1a35ad]" data-name="Frame">
      <div className="absolute h-[31.5px] left-0 top-0 w-[68.625px]" data-name="Rectangle" />
      <p className="[word-break:break-word] absolute font-['IBM_Plex_Sans:Bold',sans-serif] font-bold h-[31.5px] leading-[normal] left-0 not-italic text-[24px] text-white top-0 w-[68.625px]">Было</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <div className="bg-[#2242d6] col-1 h-[41px] ml-0 mt-0 relative rounded-[7.191px] row-1 w-[89px] transition-colors duration-300 group-hover:bg-[#1a35ad]" data-name="Rectangle" />
      <Frame9 />
    </div>
  );
}

function Group2({ src }: { src: string }) {
  return (
    <div className="group col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[128px] place-items-start relative row-1">
      <div className="bg-white border-[#dbe2ec] border-[0.75px] border-solid col-1 h-[353.502px] ml-0 mt-0 relative rounded-[101.703px] row-1 w-[498.977px] transition-colors duration-300 group-hover:border-[#2242d6]" data-name="Rectangle" />
      <Frame8 src={src} />
      <Group1 />
    </div>
  );
}

function Group4() {
  const [swapped, setSwapped] = useState(false);

  const beforeSrc = swapped ? imgAfter : imgBefore;
  const afterSrc = swapped ? imgBefore : imgAfter;

  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <button
        type="button"
        onClick={() => setSwapped((v) => !v)}
        aria-label={swapped ? "Вернуть к исходному состоянию" : "Поменять «Было» и «Стало» местами"}
        title={swapped ? "Вернуть" : "Поменять местами"}
        className="col-1 group relative ml-[517.12px] mt-[244.92px] row-1 flex h-[84.841px] w-[81.651px] cursor-pointer items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
        data-name="Arrow"
      >
        <span aria-hidden className="absolute inset-0 rounded-full bg-[#2242d6]/10 transition-transform duration-300 group-hover:scale-110 group-active:scale-95" />
        <span aria-hidden className="absolute -inset-[6px] rounded-full border border-[#2242d6]/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="pointer-events-none select-none font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-none text-[#2242d6] text-[80px] transition-transform duration-500 ease-out group-hover:translate-x-[2px] group-hover:text-[#1a35ad]" style={{ display: 'inline-block', transform: swapped ? 'scaleX(-1)' : 'none' }}>
          →
        </span>
      </button>
      <Group2 src={beforeSrc} />
      <Group3 src={afterSrc} />
    </div>
  );
}

function BackgroundHorizontalBorder2() {
  return (
    <div className="bg-white relative shrink-0 w-full overflow-hidden" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[53px] pt-[52px] px-[44px] relative size-full">
        <Container47 />
        <Heading5 />
        <Group4 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">05 / СТРАТЕГИЯ</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[511.807px] ml-[271.9px] mt-0 relative row-1 w-[840.103px]" data-name="image 55">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage55} />
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[93px] justify-center ml-[843px] mt-[0.5px] not-italic relative row-1 text-[#0d0f16] text-[16px] text-center w-[265px]">
        <p className="leading-[normal] mb-0">governance.kz — создание сложных</p>
        <p className="leading-[normal] mb-0">ИИ-продуктов на базе доступных</p>
        <p className="leading-[normal]">вычислительных мощностей.</p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[100px] justify-center ml-[130px] mt-[111.5px] not-italic relative row-1 text-[#3a4050] text-[20px] w-[552px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`«Будущее инноваций и ИИ упирается в `}</p>
        <p className="leading-[normal]">энергию и вычислительные мощности.»</p>
      </div>
      <div className="col-1 h-[68.247px] ml-0 mt-[161.62px] relative row-1 w-[627.918px]" data-name="Rectangle" />
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[68px] justify-center ml-[83px] mt-[229.5px] not-italic relative row-1 text-[#3a4050] text-[20px] w-[305px]">
        <p className="leading-[normal] mb-0">Передовая экосистема eGov,</p>
        <p className="leading-[normal]">суперкомпьютеры, ЦОДы.</p>
      </div>
      <div className="col-1 h-[120.332px] ml-0 mt-[359.44px] relative row-1 w-[504.237px]" data-name="Rectangle" />
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[79px] justify-center ml-[40px] mt-[362.5px] not-italic relative row-1 text-[#3a4050] text-[20px] w-[463px]">
        <p className="leading-[normal] mb-0">Дешевая электроэнергия,</p>
        <p className="leading-[normal] mb-0">запасы редкоземельных металлов</p>
        <p className="leading-[normal]">(кремний, литий), критичные для вычислений.</p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold h-[72.394px] justify-center ml-[694.47px] mt-[149.84px] not-italic relative row-1 text-[#0d0f16] text-[20px] text-center w-[119.534px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`Технологии `}</p>
        <p className="leading-[normal] mb-0">{`&`}</p>
        <p className="leading-[normal]">Продукты</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="col-1 h-[109.199px] ml-0 mt-0 relative row-1 w-[617.147px]" data-name="Rectangle" />
      <div className="col-1 h-[85.579px] ml-[524px] mt-[45px] relative row-1 w-[261.761px]" data-name="Rectangle" />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col h-[523px] items-start leading-[0] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[#0d0f16] text-[30px] tracking-[-0.3px] w-[min-content]" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Стратегический фундамент: Почему Казахстан?</p>
      </div>
      <Group6 />
      <Group5 />
    </div>
  );
}

function BackgroundHorizontalBorder3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-[53px] pt-[52px] px-[44px] relative size-full">
        <Container48 />
        <Heading6 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">06 / AI-АССЕССМЕНТ</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col h-[53px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[30px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">AI-Ассессмент: Поведенческий анализ</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[427.5px] place-items-start relative row-1">
      <div className="bg-[#e5e9ec] border-[#9fa6ae] border-[0.5px] border-solid col-1 h-[79px] ml-0 mt-0 relative rounded-[15px] row-1 w-[1001px]" />
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[63px] justify-center ml-[31.75px] mt-[8px] not-italic relative row-1 text-[#0d0f16] text-[19px] w-[954px]">
        <p className="leading-[normal] mb-0">Использование компьютерного зрения и аудиоаналитики в реальном времени. Прогнозирование</p>
        <p className="leading-[normal]">эффективности на основе поведенческих паттернов как дополнение к экспертной оценке.</p>
      </div>
    </div>
  );
}

function Group8({ onImageClick }: { onImageClick: () => void }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <button
        type="button"
        onClick={onImageClick}
        aria-label="Открыть AI Assessment"
        className="group col-1 relative h-[387.656px] ml-[110.47px] mt-0 row-1 w-[786.737px] cursor-zoom-in overflow-hidden rounded-[14px] outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6]"
        data-name="image 57"
      >
        <img alt="AI Assessment" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full transition-transform duration-500 group-hover:scale-[1.03]" src={imgImage57} />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-black/60 to-transparent py-4">
          <span className="flex items-center gap-[8px] rounded-full border border-white/60 bg-white/15 px-4 py-2 text-[14px] font-medium tracking-[0.12em] text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
            <span className="text-[16px] leading-none">⤢</span>
            AI ASSESSMENT — ОТКРЫТЬ
          </span>
        </div>
      </button>
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[31.403px] justify-center ml-[591px] mt-[73.95px] not-italic relative row-1 text-[#3a4050] text-[0px] w-[270px]">
        <p className="text-[18px]">
          <span className="leading-[normal]">{`Уровень вовлеченности: `}</span>
          <span className="[word-break:break-word] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#3a4050]">87%</span>
        </p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[30.39px] justify-center ml-[591px] mt-[188.42px] not-italic relative row-1 text-[#0d0f16] text-[0px] w-[203px]">
        <p className="text-[18px]">
          <span className="leading-[normal]">{`Уровень стресса: `}</span>
          <span className="[word-break:break-word] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#0d0f16]">12%</span>
        </p>
      </div>
      <div className="[word-break:break-word] col-1 flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[46.598px] justify-center ml-[591px] mt-[303.9px] not-italic relative row-1 text-[#0d0f16] text-[0px] w-[292px]">
        <p className="leading-[normal] mb-0 text-[18px]">Эмоциональное состояние:</p>
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[normal] text-[18px]">Стабильное</p>
      </div>
      <Group7 />
    </div>
  );
}

function BackgroundHorizontalBorder4({ onImageClick }: { onImageClick: () => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[6px] items-center justify-center pb-[53px] pt-[52px] px-[44px] relative size-full">
          <Container49 />
          <Heading7 />
          <Group8 onImageClick={onImageClick} />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">07 / EXECASSIST</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[30px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">ExecAssist: Помощник Руководителя</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder5() {
  return (
    <div className="bg-white relative shrink-0 w-full overflow-hidden" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[20px] items-start pb-[53px] pt-[52px] px-[44px] relative size-full max-w-[1170px] mx-auto">
        <Container50 />
        <Heading8 />
        <Frame22 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[44.511px] left-[19px] top-[3px] w-[457.523px]" data-name="Frame">
      <div className="absolute h-[44.511px] left-0 top-0 w-[457.523px]" data-name="Rectangle" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium h-[44.511px] justify-center leading-[0] left-0 not-italic text-[#0d0f16] text-[26px] top-[27.26px] w-[457.523px]">
        <p className="leading-[normal]">Управленческий сигнал</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[44.511px] left-[629px] top-[7px] w-[408.548px]" data-name="Frame">
      <div className="absolute h-[44.511px] left-0 top-0 w-[408.548px]" data-name="Rectangle" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IBM_Plex_Sans:Medium',sans-serif] font-medium h-[44.511px] justify-center leading-[0] left-[-62px] not-italic text-[#0d0f16] text-[26px] top-[22.26px] w-[408.548px]">
        <p className="leading-[normal]">Прямая координация</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[48.17px] left-[51px] top-[72px] w-[540.963px]" data-name="Frame">
      <div className="absolute h-[48.17px] left-0 top-0 w-[540.963px]" data-name="Rectangle" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[48.17px] justify-center leading-[0] left-0 not-italic text-[#3a4050] text-[24px] top-[24.09px] w-[540.963px]">
        <p className="leading-[normal]">Эффективность департаментов</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[42.818px] left-[37px] top-[176px] w-[245.296px]" data-name="Frame">
      <div className="absolute h-[42.818px] left-0 top-0 w-[245.296px]" data-name="Rectangle" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[42.818px] left-[36px] top-[219px] w-[223.529px]" data-name="Frame">
      <div className="absolute h-[42.818px] left-0 top-0 w-[223.529px]" data-name="Rectangle" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-[48.17px] left-[36px] top-[259.07px] w-[270.691px]" data-name="Frame">
      <div className="absolute h-[48.17px] left-0 top-0 w-[270.691px]" data-name="Rectangle" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[48.17px] justify-center leading-[0] left-[-7px] not-italic text-[#3a4050] text-[0px] top-[-30.91px] w-[270.691px]">
        <p className="text-[19px]">
          <span className="leading-[normal]">{`Разработка: `}</span>
          <span className="[word-break:break-word] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#3a4050]">95%</span>
        </p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute h-[48.17px] left-[93px] top-[290px] w-[428.501px]" data-name="Frame">
      <div className="absolute h-[48.17px] left-0 top-0 w-[428.501px]" data-name="Rectangle" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[48.17px] justify-center leading-[0] left-0 not-italic text-[#3a4050] text-[24px] top-[24.09px] w-[428.501px]">
        <p className="leading-[normal]">Общий уровень нагрузки</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute h-[39.159px] left-[479.99px] top-[740.34px] w-[316.039px]" data-name="Frame">
      <div className="absolute h-[39.159px] left-0 top-0 w-[316.039px]" data-name="Rectangle" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[39.159px] justify-center leading-[0] left-0 not-italic text-[#0d0f16] text-[0px] top-[19.58px] w-[316.039px]">
        <p className="text-[23px]">
          <span className="leading-[normal]">{`Оптимальный: `}</span>
          <span className="[word-break:break-word] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#0d0f16]">70%</span>
        </p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute h-[159.927px] left-[651px] top-[76px] w-[473.849px]" data-name="Frame">
      <div className="absolute h-[159.927px] left-0 top-0 w-[473.849px]" data-name="Rectangle" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold h-[159.927px] justify-center leading-[0] left-0 not-italic text-[#3a4050] text-[0px] top-[79.96px] w-[473.849px]">
        <p className="mb-0 text-[19px]">
          <span className="leading-[normal]">{`Робот: `}</span>
          <span className="[word-break:break-word] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#3a4050]">Назначена задача</span>
        </p>
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[normal] mb-0 text-[19px]">на основе анализа.</p>
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[normal] mb-0 text-[19px]">@Иванов, просьба</p>
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[normal] mb-0 text-[19px]">подготовить отчет по проекту</p>
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[normal] text-[19px]">{`"Альфа" к 15:00.`}</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute h-[73.586px] left-[929px] top-[332px] w-[419.431px]" data-name="Frame">
      <div className="absolute h-[73.586px] left-0 top-0 w-[419.431px]" data-name="Rectangle" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[510px] overflow-clip relative rounded-[20px] shrink-0 w-[1064px]" data-name="Frame">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[162.9%] left-[-19.45%] max-w-none top-[-27.9%] w-[138.83%]" src={imgFrame5} />
      </div>
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[42.818px] justify-center leading-[0] left-[30px] not-italic text-[#3a4050] text-[0px] top-[142.41px] w-[245.296px]">
        <p className="text-[19px]">
          <span className="leading-[normal]">{`Маркетинг: `}</span>
          <span className="[word-break:break-word] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#3a4050]">92%</span>
        </p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[42.818px] justify-center leading-[0] left-[29px] not-italic text-[#3a4050] text-[0px] top-[185.41px] w-[223.529px]">
        <p className="text-[19px]">
          <span className="leading-[normal]">{`Продажи: `}</span>
          <span className="[word-break:break-word] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#3a4050]">88%</span>
        </p>
      </div>
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold h-[73.586px] justify-center leading-[0] left-[706px] not-italic text-[#3a4050] text-[0px] top-[282.79px] w-[419.431px]">
        <p className="mb-0 text-[19px]">
          <span className="leading-[normal]">{`Иванов: `}</span>
          <span className="[word-break:break-word] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[normal] not-italic text-[#3a4050]">Принято в работу.</span>
        </p>
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal leading-[normal] text-[19px]">Будет готово.</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="[word-break:break-word] font-['IBM_Plex_Sans:Regular',sans-serif] font-normal h-[117px] leading-[0] not-italic relative shrink-0 text-[#3a4050] text-[22px] w-[1064px]">
        <p className="leading-[normal] mb-0">ИИ видит ведомство изнутри в реальном времени. Координация задач и умные боты работают прямо в рабочих мессенджерах сотрудников.</p>
        <p className="leading-[normal]">Переход от избыточных данных к чистому управленческому сигналу.</p>
      </div>
      <Frame10 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">08 / SERVICEFLOW</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[#0d0f16] text-[30px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">{`ServiceFlow: Проактивный клиентский сервис`}</p>
      </div>
    </div>
  );
}

function ServiceFlowText() {
  return (
    <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center not-italic relative shrink-0 text-[#0d0f16] text-[0px] w-full max-w-[350px]" data-name="ServiceFlow Text">
      <p className="mb-0 text-[26px]">
        <span className="leading-[normal]">{`Проанализировано `}</span>
        <span className="[word-break:break-word] font-['IBM_Plex_Sans:Bold',sans-serif] font-bold leading-[normal] not-italic text-[#0d0f16]">1 500</span>
        <span className="leading-[normal]">{` государственных услуг`}</span>
      </p>
      <p className="leading-[normal] mb-0 text-[26px]">с помощью ИИ.</p>
      <p className="leading-[normal] mb-0 text-[26px]">Выявление аномалий,</p>
      <p className="leading-[normal] mb-0 text-[26px]">скрытых офлайн-процессов</p>
      <p className="leading-[normal] text-[26px]">и нормативных барьеров.</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="relative w-full h-[321.121px]" data-name="image 58">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage58} />
      <div className="absolute left-[6%] top-[37%] [word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal not-italic text-[#0d0f16] text-[24px] leading-[normal]">
        <p className="mb-0">Спрятанный</p>
        <p>барьер</p>
      </div>
      <div className="absolute left-[44%] top-[68%] [word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold not-italic text-[#0d0f16] text-[24px] leading-[normal]">
        <p className="leading-[normal]">Проактивный формат</p>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="relative w-full max-w-[723.175px]">
      <Group9 />
      <div className="absolute left-[48%] top-[37%] [word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal not-italic text-[#0d0f16] text-[24px] leading-[normal]">
        <p className="mb-0">Лишний</p>
        <p>документ</p>
      </div>
      <div className="absolute left-[80%] top-[37%] [word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal not-italic text-[#0d0f16] text-[24px] leading-[normal]">
        <p className="mb-0">Потеря</p>
        <p>времени</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-start justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center pb-[53px] pt-[52px] px-[44px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
              <p className="leading-[normal]">08 / SERVICEFLOW</p>
            </div>
          </div>
          <Heading9 />
          <div className="flex flex-col lg:flex-row items-start gap-[40px] w-full">
            <ServiceFlowText />
            <div className="w-full lg:flex-1 lg:min-w-0">
              <Group10 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[12px] tracking-[1.2px] w-full">
        <p className="leading-[normal]">09 / БЕЗОПАСНОСТЬ И ДОВЕРИЕ</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[30px] tracking-[-0.3px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Безопасность и доверие</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Human-in-the-loop</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[23px] mb-0">Ответственность — за</p>
        <p className="leading-[23px]">уполномоченными лицами</p>
      </div>
    </div>
  );
}

function HorizontalBorder11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[21px] pt-[16px] relative shrink-0 w-[210px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#2242d6] border-solid border-t-2 inset-0 pointer-events-none" />
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Замкнутый контур</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[23px]">Безопасная среда апробации</p>
      </div>
    </div>
  );
}

function HorizontalBorder12() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[21px] pt-[16px] relative shrink-0 w-[210px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#2242d6] border-solid border-t-2 inset-0 pointer-events-none" />
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Защита данных</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[23px]">Этика и законодательство РК</p>
      </div>
    </div>
  );
}

function HorizontalBorder13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[21px] pt-[16px] relative shrink-0 w-[210px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#2242d6] border-solid border-t-2 inset-0 pointer-events-none" />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Межведомственность</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[23px]">Устранение барьеров данных</p>
      </div>
    </div>
  );
}

function HorizontalBorder14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[21px] pt-[16px] relative shrink-0 w-[210px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#2242d6] border-solid border-t-2 inset-0 pointer-events-none" />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#0d0f16] text-[17px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Прозрачность и аудит</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a606e] text-[15px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[23px]">Проверяемость процессов</p>
      </div>
    </div>
  );
}

function HorizontalBorder15() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[21px] pt-[16px] relative shrink-0 w-[210px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#2242d6] border-solid border-t-2 inset-0 pointer-events-none" />
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[16px] h-auto items-start justify-center pt-[16px] relative shrink-0 w-full pb-[24px]" data-name="Container">
      <HorizontalBorder11 />
      <HorizontalBorder12 />
      <HorizontalBorder13 />
      <HorizontalBorder14 />
      <HorizontalBorder15 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[259.97px] ml-[216.62px] mt-0 relative row-1 w-[526.026px]" data-name="image 56">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.35%] left-[-40.37%] max-w-none top-[-10.22%] w-[159.35%]" src={imgImage56} />
        </div>
      </div>
      <div className="col-1 h-[259.848px] ml-0 mt-[0.73px] relative row-1 w-[217.687px]" data-name="image 59">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage59} />
      </div>
      <div className="col-1 h-[86.478px] ml-[742.01px] mt-[0.26px] relative row-1 w-[87.995px]" data-name="image 60">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage60} />
      </div>
      <div className="col-1 h-[86.478px] ml-[742.01px] mt-[86.89px] relative row-1 w-[87.995px]" data-name="image 61">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage61} />
      </div>
      <div className="col-1 h-[86.436px] ml-[741.96px] mt-[173.51px] relative row-1 w-[88.037px]" data-name="image 62">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[102.75%] left-0 max-w-none top-[-2.61%] w-full" src={imgImage62} />
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder10() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e6e8ee] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center pb-[53px] pt-[52px] px-[44px] relative size-full">
          <Container52 />
          <Heading10 />
          <Container53 />
          <Group />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8fa6ff] text-[12px] tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[normal]">КОНТАКТ</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448.79998779296875px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[34px] text-white tracking-[-0.68px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal] mb-0">Готовы показать модель на</p>
        <p className="leading-[normal]">ваших данных</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[440px]" data-name="Container">
      <Container65 />
      <Heading11 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#2242d6] content-stretch flex flex-col items-start px-[26px] py-[14px] relative shrink-0 transition-colors hover:bg-[#1a35ad]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14.5px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[normal]">Записаться на встречу →</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#0d0f16] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex justify-between items-center px-[20px] sm:px-[44px] py-[56px] relative size-full gap-[32px] flex-col sm:flex-row items-start sm:items-center">
          <Container64 />
          <Background8 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8990a0] text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">GOVERNANCE.KZ</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#8990a0] text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">ЛАБОРАТОРИЯ ИИ · КАЗАХСТАН · 2026</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[59px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between px-[20px] sm:px-[44px] py-[22px] relative size-full">
          <Container67 />
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function HeroTabs({ onTabClick }: { onTabClick: (id: TabKey) => void }) {
  const tabs: TabKey[] = ["recruitment", "analytics", "assessment"];
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
  );
}

function TabPage({ tabKey, onBack }: { tabKey: TabKey; onBack: () => void }) {
  const data = tabData[tabKey];
  const [selectedRow, setSelectedRow] = useState<TabRow | null>(null);
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

      {/* Page content */}
      <div className="content-stretch flex flex-col gap-[20px] px-[20px] sm:px-[44px] pb-[60px] pt-[20px] w-full max-w-[1170px] mx-auto">
        {/* Heading */}
        <h2
          className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[36px] tracking-[-0.36px] text-[#0d0f16] sm:text-[42px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {data.title}
        </h2>

        {/* Description */}
        <p
          className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[18px] leading-[1.65] text-[#3a4050] max-w-[900px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {data.description}
        </p>

        {/* Image */}
        {data.image && (
          <div className="flex items-center justify-center w-full h-[260px] sm:h-[320px] overflow-hidden">
            <img src={data.image} alt={data.title} className="block max-h-full max-w-full object-contain" />
          </div>
        )}

        {/* Registry table — same columns as "03 / ПРОДУКТЫ" */}
        <div className="relative w-full">
          <div aria-hidden className="absolute border border-[#0d0f16] border-solid inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-start pb-px pt-px relative size-full">
            {/* Header */}
            <div className="bg-[#0d0f16] grid grid-cols-[60px_minmax(0,1.10fr)_minmax(0,2fr)_minmax(0,1.10fr)] grid-rows-[39px] h-[39px] relative shrink-0 w-full">
              {["№", "РЕШЕНИЕ", "ЧТО ДЕЛАЕТ", "ОСОБЕННОСТЬ"].map((h) => (
                <div key={h} className="justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
                  <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[11.5px] text-white tracking-[0.69px] whitespace-nowrap">
                      <p className="leading-[normal]">{h}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Rows */}
            {data.rows.map((row, i) => {
              const clickable = Boolean(row.image);
              return (
                <div
                  key={row.num}
                  onClick={clickable ? () => setSelectedRow(row) : undefined}
                  className={`group grid grid-cols-[60px_minmax(0,1.10fr)_minmax(0,2fr)_minmax(0,1.10fr)] grid-rows-[auto] min-h-[64px] pt-px relative shrink-0 w-full transition-colors ${clickable ? "cursor-pointer hover:bg-[#eef0f5]" : ""} ${i % 2 === 0 ? "bg-white" : "bg-[#f6f7fb]"}`}
                >
                  <div aria-hidden className="absolute border-[#e6e8ee] border-solid border-t inset-0 pointer-events-none" />
                  <span aria-hidden className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#2242d6] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0">
                    <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Mono:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2242d6] text-[16px] whitespace-nowrap">
                        <p className="leading-[normal]">{row.num}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0">
                    <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-w-0 relative shrink-0 text-[#0d0f16] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[24px]">{row.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 justify-self-stretch relative row-1 self-start shrink-0">
                    <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-0 relative shrink-0 text-[#3a4050] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[24px]">{row.does}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 justify-self-stretch relative row-1 self-start shrink-0">
                    <div className="content-stretch flex flex-col items-start pb-[19px] pt-[16px] px-[16px] relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] font-normal justify-center leading-[0] min-w-0 relative shrink-0 text-[#5a606e] text-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                        <p className="leading-[24px]">{row.feature}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {selectedRow && selectedRow.image && (
        <ImageModal
          index={selectedRow.num}
          title={selectedRow.name}
          image={selectedRow.image}
          description={selectedRow.does}
          onClose={() => setSelectedRow(null)}
        />
      )}
    </div>
  );
}

function DemkaSection() {
  const [showVideo, setShowVideo] = useState(false);

  const steps = [
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
  ];

  return (
    <section className="w-full bg-white py-[52px]">
      <div className="mx-auto w-full max-w-[1112px] px-[20px] sm:px-[44px] flex flex-col items-center gap-[32px]">
        <div className="flex w-full flex-col gap-[10px]">
          <h3
            className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[#0d0f16] text-[28px] sm:text-[34px] tracking-[-0.34px] leading-[1.1]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Процесс работы
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setShowVideo(true)}
          aria-label="Смотреть видео демо"
          className="group relative block w-full max-w-[820px] overflow-hidden rounded-[16px] outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2242d6] border border-[#e6e8ee]"
        >
          <div className="relative aspect-video w-full bg-[#f4f5f8]">
            <img alt="Опрос синтетических покупателей" className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" src={imgDemkaPhoto} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

            <span className="absolute bottom-5 left-5 flex items-center gap-[12px] rounded-full bg-white/95 pl-[14px] pr-[20px] py-[10px] shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#2242d6] text-white transition-colors group-hover:bg-[#0d0f16]">
                <svg viewBox="0 0 24 24" className="ml-0.5 size-4 fill-current" aria-hidden>
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
              <span
                className="font-['IBM_Plex_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#0d0f16] whitespace-nowrap"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                Смотреть демо
              </span>
            </span>

            <span className="absolute top-5 right-5 rounded-full bg-black/45 px-[12px] py-[6px] font-['IBM_Plex_Mono:Regular',sans-serif] text-[11px] tracking-[0.6px] text-white/85 backdrop-blur-sm">
              ДЕМО · 100 РЕСПОНДЕНТОВ
            </span>
          </div>
        </button>

        <p
          className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[15px] leading-[1.65] text-[#3a4050] max-w-[760px] text-center"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Опрос 100 синтетических покупателей
        </p>

        <div className="grid w-full grid-cols-1 gap-px overflow-hidden rounded-[12px] border border-[#e6e8ee] bg-[#e6e8ee] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col gap-[8px] bg-white p-[20px]">
              <span className="font-['IBM_Plex_Mono:Regular',sans-serif] text-[13px] tabular-nums text-[#2242d6]">
                {s.num}
              </span>
              <span
                className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[15px] leading-[1.25] text-[#0d0f16]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {s.title}
              </span>
              <span
                className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[13px] leading-[1.5] text-[#5a606e]"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {s.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      {showVideo && (
        <VideoModal src="/videos/demka.mp4" title="Опрос 100 синтетических покупателей" onClose={() => setShowVideo(false)} />
      )}
    </section>
  );
}

function Background() {
  const [modal, setModal] = useState<"meeting" | "note" | null>(null);
  const [imageModal, setImageModal] = useState<ProductImageKey | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey | null>(null);

  const hashToTab: Record<string, TabKey> = {
    diagnostics: "recruitment",
    coordination: "analytics",
    actors: "assessment",
  };
  const tabToHash: Record<TabKey, string> = {
    recruitment: "diagnostics",
    analytics: "coordination",
    assessment: "actors",
  };

  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash.replace("#", "");
      if (hashToTab[h]) {
        setActiveTab(hashToTab[h]);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const handleTabChange = (key: TabKey) => {
    setActiveTab(key);
    if (window.location.hash !== `#${tabToHash[key]}`) {
      window.history.replaceState(null, "", `#${tabToHash[key]}`);
    }
  };

  const handleBack = () => {
    setActiveTab(null);
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Background">
      <Background1 />
      <HorizontalBorder onTabClick={(key) => handleTabChange(key)} />
      {activeTab ? (
        <TabPage tabKey={activeTab} onBack={handleBack} />
      ) : (
        <>
          <Frame21 onTabClick={(key) => handleTabChange(key)} />
          <DemkaSection />
          <div className="w-full px-[20px] sm:px-[44px] py-[40px]">
            <Border2 />
            <Container18 />
          </div>
          <HorizontalBorder6 onTabClick={(key) => handleTabChange(key)} />
          <HorizontalBorder7 onImageClick={(id) => setImageModal(id)} />
          <BackgroundHorizontalBorder2 />
          <BackgroundHorizontalBorder3 />
          <BackgroundHorizontalBorder4 onImageClick={() => setImageModal("assessment")} />
          <BackgroundHorizontalBorder5 />
          <BackgroundHorizontalBorder6 />
          <HorizontalBorder10 />
          <Background7 />
        </>
      )}
      <Container66 />
      {modal === "meeting" && (
        <InfoModal
          title="Записаться на встречу"
          onClose={() => setModal(null)}
          description={
            <>
              <p>Оставьте заявку на встречу с командой Governance.kz.</p>
              <p>Мы свяжемся с вами в ближайшее время и подготовим план цифровой трансформации.</p>
              <p>Для бронирования встречи укажите ваше имя, организацию и удобное время.</p>
            </>
          }
        />
      )}
      {modal === "note" && (
        <InfoModal
          title="Аналитическая записка"
          onClose={() => setModal(null)}
          description={
            <>
              <p>Аналитическая записка представляет ключевые выводы и советы по развитию управления.</p>
              <p>Она поможет понять текущие риски, возможности оптимизации и пути улучшения процессов.</p>
              <p>Документ включает краткий обзор модели, дорожную карту внедрения и ожидаемые результаты.</p>
            </>
          }
        />
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
  );
}

export default function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Background />
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}