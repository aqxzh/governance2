import svgPaths from "./svg-yxwmsir2oj";
import imgRectangle1 from "./66dca440b38bcb4154e505b64a8e95cacb95f746.png";
import { imgRectangle } from "./svg-noitr";

function TitleBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Title Block">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[38px] text-white">Партия доедет — и успеет продаться</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8d99b9] text-[15px]">Разумное распределение охлаждённой курицы по времени в пути и скорости продажи: завод → склад → магазины/супермаркеты/и т. д.</p>
    </div>
  );
}

function PolygonButton() {
  return (
    <div className="bg-[#1f1f24] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[20px] shrink-0" data-name="Polygon Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">Полигон А</p>
    </div>
  );
}

function DayButton() {
  return (
    <div className="bg-[#3380ff] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[20px] shrink-0" data-name="Day Button">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-center text-white whitespace-nowrap">День 981 · 8 сент.</p>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0" data-name="Controls">
      <PolygonButton />
      <DayButton />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Header">
      <TitleBlock />
      <Controls />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f7faff] content-stretch flex gap-[9px] items-center px-[10px] py-[5px] relative rounded-[20px] shrink-0">
      <div aria-hidden className="absolute border border-[#e9eff8] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">🏭</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6a8f] text-[12px] whitespace-nowrap">завод</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f7faff] content-stretch flex gap-[9px] items-center px-[10px] py-[5px] relative rounded-[20px] shrink-0">
      <div aria-hidden className="absolute border border-[#e9eff8] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">📦</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6a8f] text-[12px] whitespace-nowrap">склады</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f7faff] content-stretch flex gap-[9px] items-center px-[10px] py-[5px] relative rounded-[20px] shrink-0">
      <div aria-hidden className="absolute border border-[#e9eff8] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      <div className="relative shrink-0 size-[10px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 10 10" width="10">
          <circle cx="5" cy="5" fill="#2F7BFF" id="Ellipse" r="5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6a8f] text-[12px] whitespace-nowrap">магазины</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f7faff] content-stretch flex gap-[7px] items-center px-[10px] py-[5px] relative rounded-[20px] shrink-0">
      <div aria-hidden className="absolute border border-[#e9eff8] border-solid inset-[-0.5px] pointer-events-none rounded-[20.5px]" />
      <div className="h-0 relative shrink-0 w-[14px]" data-name="Vector">
        <div className="absolute inset-[-1.25px_-8.93%]">
          <svg className="block size-full" fill="none" height="2.5" preserveAspectRatio="none" viewBox="0 0 16.5 2.5" width="16.5">
            <path d="M1.25 1.25H15.25" id="Vector" stroke="#6F9BF0" strokeDasharray="4 3" strokeLinecap="round" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6a8f] text-[12px] whitespace-nowrap">маршруты</p>
    </div>
  );
}

function Legend() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-start justify-end overflow-clip relative shrink-0" data-name="Legend">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function MapHeader() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-name="Map Header">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2348] text-[17px] whitespace-nowrap">Карта поставок — Алматы</p>
      <Legend />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Clip path group">
      <div className="col-1 h-[662.991px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[14px_2px] mask-size-[840px_601px] ml-[-14px] mt-[-2px] relative row-1 w-[927px]" style={{ maskImage: `url("${imgRectangle}")` }} data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
    </div>
  );
}

function MapCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] h-[658px] items-start overflow-clip p-[20px] relative rounded-[16px] shrink-0 w-[880px]" data-name="Map Card">
      <MapHeader />
      <ClipPathGroup />
    </div>
  );
}

function MetricBlock() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Metric Block">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[21px]">80</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5b6a8f] text-[11.5px]">рейсов за неделю</p>
    </div>
  );
}

function MetricBlock1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Metric Block">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[21px]">2 004</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5b6a8f] text-[11.5px]">км пробега</p>
    </div>
  );
}

function MetricBlock2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Metric Block">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[21px]">11,4</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5b6a8f] text-[11.5px]">рейса в день</p>
    </div>
  );
}

function MetricBlock3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-name="Metric Block">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[21px]">1 500 кг</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5b6a8f] text-[11.5px]">ёмкость фуры</p>
    </div>
  );
}

function MetricsRow() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Metrics Row">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <MetricBlock />
          <div className="h-[38px] relative shrink-0 w-0" data-name="Vector">
            <div className="absolute inset-[0_-0.5px]">
              <svg className="block size-full" fill="none" height="38" preserveAspectRatio="none" viewBox="0 0 1 38" width="1">
                <path d="M0.5 0V38" id="Vector" stroke="#E9EFF8" />
              </svg>
            </div>
          </div>
          <MetricBlock1 />
          <div className="h-[38px] relative shrink-0 w-0" data-name="Vector">
            <div className="absolute inset-[0_-0.5px]">
              <svg className="block size-full" fill="none" height="38" preserveAspectRatio="none" viewBox="0 0 1 38" width="1">
                <path d="M0.5 0V38" id="Vector" stroke="#E9EFF8" />
              </svg>
            </div>
          </div>
          <MetricBlock2 />
          <div className="h-[38px] relative shrink-0 w-0" data-name="Vector">
            <div className="absolute inset-[0_-0.5px]">
              <svg className="block size-full" fill="none" height="38" preserveAspectRatio="none" viewBox="0 0 1 38" width="1">
                <path d="M0.5 0V38" id="Vector" stroke="#E9EFF8" />
              </svg>
            </div>
          </div>
          <MetricBlock3 />
        </div>
      </div>
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[762px] items-start overflow-clip relative shrink-0 w-[880px]" data-name="Left Column">
      <MapCard />
      <MetricsRow />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="40" preserveAspectRatio="none" viewBox="0 0 40 40" width="40">
        <g id="Frame 13">
          <rect fill="#E7EFFF" height="40" rx="10" width="40" />
          <path d={svgPaths.pd365400} id="Vector" stroke="#2F7BFF" strokeWidth="2" />
          <path d="M20 13V20L25 23" id="Vector_2" stroke="#2F7BFF" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ShelfTitleBlock() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold items-start leading-[normal] min-w-px not-italic overflow-clip relative text-[#1a2348] text-[17px] whitespace-nowrap" data-name="Shelf Title Block">
      <p className="relative shrink-0">Отгрузка с прицелом на срок</p>
      <p className="relative shrink-0">годности партии</p>
    </div>
  );
}

function ShelfHeader() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-[305px]" data-name="Shelf Header">
      <Frame9 />
      <ShelfTitleBlock />
    </div>
  );
}

function BarRow() {
  return (
    <div className="bg-white content-stretch flex h-[30px] items-start overflow-clip relative shrink-0 w-full" data-name="Bar Row">
      <div className="bg-[#2f7bff] h-[30px] relative rounded-bl-[6px] rounded-tl-[6px] shrink-0 w-[46.3px]" data-name="Rectangle" />
      <div className="bg-[#16b364] h-[30px] relative shrink-0 w-[185.1px]" data-name="Rectangle" />
      <div className="bg-[#8cd8ae] h-[30px] relative shrink-0 w-[19.3px]" data-name="Rectangle" />
      <div className="bg-[#f1f5fb] h-[30px] relative rounded-br-[6px] rounded-tr-[6px] shrink-0 w-[289.3px]" data-name="Rectangle" />
    </div>
  );
}

function Day() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-[77.143px]" data-name="Day 0">
      <div className="bg-[#b2bfd9] h-[6px] relative shrink-0 w-px" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#66738c] text-[11px] whitespace-nowrap">0</p>
    </div>
  );
}

function Day1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-[77.143px]" data-name="Day 1">
      <div className="bg-[#b2bfd9] h-[6px] relative shrink-0 w-px" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#66738c] text-[11px] whitespace-nowrap">1</p>
    </div>
  );
}

function Day2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-[77.143px]" data-name="Day 2">
      <div className="bg-[#b2bfd9] h-[6px] relative shrink-0 w-px" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#66738c] text-[11px] whitespace-nowrap">2</p>
    </div>
  );
}

function Day3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-[77.143px]" data-name="Day 3">
      <div className="bg-[#b2bfd9] h-[6px] relative shrink-0 w-px" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#66738c] text-[11px] whitespace-nowrap">3</p>
    </div>
  );
}

function Day4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-[77.143px]" data-name="Day 4">
      <div className="bg-[#b2bfd9] h-[6px] relative shrink-0 w-px" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#66738c] text-[11px] whitespace-nowrap">4</p>
    </div>
  );
}

function Day5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-[77.143px]" data-name="Day 5">
      <div className="bg-[#b2bfd9] h-[6px] relative shrink-0 w-px" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#66738c] text-[11px] whitespace-nowrap">5</p>
    </div>
  );
}

function Day6() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-[77.143px]" data-name="Day 6">
      <div className="bg-[#b2bfd9] h-[6px] relative shrink-0 w-px" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#66738c] text-[11px] whitespace-nowrap">6</p>
    </div>
  );
}

function Day7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[2px] items-start justify-end overflow-clip relative shrink-0 w-[77.143px]" data-name="Day 7">
      <div className="bg-[#b2bfd9] h-[6px] relative shrink-0 w-px" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#66738c] text-[11px] whitespace-nowrap">7</p>
    </div>
  );
}

function DayWord() {
  return (
    <div className="bg-white content-stretch flex items-start justify-end overflow-clip relative shrink-0" data-name="Day Word">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#66738c] text-[11px] whitespace-nowrap">день</p>
    </div>
  );
}

function ScaleRow() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Scale Row">
      <Day />
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
      <Day6 />
      <Day7 />
      <DayWord />
    </div>
  );
}

function InPathLabel() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[80px]" data-name="In Path Label">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2f7bff] text-[12px] whitespace-nowrap">в пути 0,6 дн</p>
    </div>
  );
}

function SaleLabel() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 w-[151.4px]" data-name="Sale Label">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#16b364] text-[12px] whitespace-nowrap">продажа ≈ 2,4 дн</p>
    </div>
  );
}

function BufferLabel() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Buffer Label">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8cd8ae] text-[12px] whitespace-nowrap">+0,25 дн</p>
    </div>
  );
}

function LabelsRow() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Labels Row">
      <InPathLabel />
      <SaleLabel />
      <BufferLabel />
    </div>
  );
}

function BufferTextRow() {
  return (
    <div className="bg-white content-stretch flex items-start justify-end overflow-clip relative shrink-0 w-full" data-name="Buffer Text Row">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#66738c] text-[12px] whitespace-nowrap">неприкосновенный буфер до конца срока</p>
    </div>
  );
}

function Timeline() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Timeline">
      <BarRow />
      <ScaleRow />
      <LabelsRow />
      <BufferTextRow />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#e7efff] content-stretch flex gap-[10px] h-[44px] items-center pl-[12px] pr-[124px] py-[12px] relative rounded-[20px] shrink-0 w-[540px]">
      <div className="relative shrink-0 size-[20px]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
          <path d={svgPaths.p25566600} fill="#16B364" id="Vector" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2348] text-[13.5px] whitespace-nowrap">отправляем, если: в пути + продажа + 0,25 дн ≤ 7 дней</p>
      <div className="absolute inset-[40.91%_94.81%_40.91%_3.15%]" data-name="Vector">
        <div className="absolute inset-[-13.75%_-10%]">
          <svg className="block size-full" fill="none" height="10.2" preserveAspectRatio="none" viewBox="0 0 13.2 10.2" width="13.2">
            <path d={svgPaths.p3e0abb80} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[5px] items-start leading-[normal] not-italic relative shrink-0 text-[#5b6a8f] text-[12.5px] whitespace-nowrap">
      <p className="relative shrink-0">FEFO: первой уезжает старейшая партия — но только та, что пройдёт тест.</p>
      <p className="relative shrink-0">Если заказ не закрыт — спасательный проход отправляет старую партию,</p>
      <p className="relative shrink-0">которая хотя бы переживёт дорогу: сток никогда не застаивается.</p>
    </div>
  );
}

function ShelfLifeCard() {
  return (
    <div className="bg-white h-[428px] relative rounded-[16px] shrink-0 w-full" data-name="Shelf-Life Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
          <ShelfHeader />
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13.5px] whitespace-nowrap">Партия уезжает со склада, только если доедет и продастся</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#374151] text-[13.5px] whitespace-nowrap">раньше конца срока. Так мясо не гниёт на полках и складах.</p>
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#9aa6c3] text-[11px] whitespace-nowrap">ЖИЗНЬ ПАРТИИ — 7 ДНЕЙ</p>
          <Timeline />
          <Frame />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="Icon Wrapper">
      <svg className="absolute block inset-0 size-full" fill="none" height="38" preserveAspectRatio="none" viewBox="0 0 38 38" width="38">
        <g clipPath="url(#clip0_0_5)" id="Icon Wrapper">
          <path d={svgPaths.p53e2200} fill="#E4F7EE" id="Vector" />
          <path d={svgPaths.p15f8a00} id="Vector_2" stroke="#16B364" strokeWidth="2" />
          <path d="M10 16H28M19 11V16" id="Vector_3" stroke="#16B364" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_5">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MetricText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Metric Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#5b6a8f] text-[11px]">FILL RATE</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[24px]">105 %</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8d99b9] text-[11.5px]">спрос покрыт поставками</p>
    </div>
  );
}

function MetricCard() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[112px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-[262px]" data-name="Metric Card">
      <IconWrapper />
      <MetricText />
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="Icon Wrapper">
      <svg className="absolute block inset-0 size-full" fill="none" height="38" preserveAspectRatio="none" viewBox="0 0 38 38" width="38">
        <g clipPath="url(#clip0_0_12)" id="Icon Wrapper">
          <path d={svgPaths.p53e2200} fill="#FEF1DC" id="Vector" />
          <path d={svgPaths.p3984ec00} id="Vector_2" stroke="#B47A2A" strokeWidth="2" />
          <path d="M19 14V19L23 21" id="Vector_3" stroke="#B47A2A" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_0_12">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MetricText1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Metric Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#5b6a8f] text-[11px]">ПРОСРОЧКА</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[24px]">10,44 %</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8d99b9] text-[11.5px]">2 255,9 кг списано</p>
    </div>
  );
}

function MetricCard1() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[112px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-[262px]" data-name="Metric Card">
      <IconWrapper1 />
      <MetricText1 />
    </div>
  );
}

function GridRow() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0" data-name="Grid Row 1">
      <MetricCard />
      <MetricCard1 />
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="Icon Wrapper">
      <svg className="absolute block inset-0 size-full" fill="none" height="38" preserveAspectRatio="none" viewBox="0 0 38 38" width="38">
        <g clipPath="url(#clip0_0_9)" id="Icon Wrapper">
          <path d={svgPaths.p53e2200} fill="#FDECEC" id="Vector" />
          <path d="M12 13L26 25M20 25H26V19" id="Vector_2" stroke="#EF4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
        </g>
        <defs>
          <clipPath id="clip0_0_9">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MetricText2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Metric Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#5b6a8f] text-[11px]">УПУЩЕННЫЙ СПРОС</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[24px]">5,12 %</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8d99b9] text-[11.5px]">1 035,5 кг не обслужено</p>
    </div>
  );
}

function MetricCard2() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[112px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-[262px]" data-name="Metric Card">
      <IconWrapper2 />
      <MetricText2 />
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="Icon Wrapper">
      <svg className="absolute block inset-0 size-full" fill="none" height="38" preserveAspectRatio="none" viewBox="0 0 38 38" width="38">
        <g clipPath="url(#clip0_0_20)" id="Icon Wrapper">
          <path d={svgPaths.p53e2200} fill="#E7EFFF" id="Vector" />
          <path d={svgPaths.p1e454000} id="Vector_2" stroke="#2F7BFF" strokeWidth="2" />
          <path d={svgPaths.p2db90780} id="Vector_3" stroke="#2F7BFF" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p30285c80} fill="#2F7BFF" id="Vector_4" />
          <path d={svgPaths.pe5c6080} fill="#2F7BFF" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_0_20">
            <rect fill="white" height="38" width="38" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MetricText3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Metric Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#5b6a8f] text-[11px]">ЦЕНА ДОСТАВКИ</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[24px]">32,5 ₸/кг</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#8d99b9] text-[11.5px]">640 976 ₸ транспорт</p>
    </div>
  );
}

function MetricCard3() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] h-[112px] items-start overflow-clip p-[16px] relative rounded-[12px] shrink-0 w-[262px]" data-name="Metric Card">
      <IconWrapper3 />
      <MetricText3 />
    </div>
  );
}

function GridRow1() {
  return (
    <div className="bg-white content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0" data-name="Grid Row 2">
      <MetricCard2 />
      <MetricCard3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2348] text-[16px] whitespace-nowrap">Ключевые метрики недели</p>
      <GridRow />
      <GridRow1 />
    </div>
  );
}

function WeeklyMetricsCard() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Weekly Metrics Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function RightColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[779px] items-start overflow-clip relative shrink-0 w-[588px]" data-name="Right Column">
      <ShelfLifeCard />
      <WeeklyMetricsCard />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex gap-[24px] h-[762px] items-start overflow-clip relative shrink-0 w-full" data-name="Body">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#e7efff] content-stretch flex flex-col items-center justify-center left-0 px-[9px] py-[7px] rounded-[20px] size-[30px] top-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f7bff] text-[14px] text-center whitespace-nowrap">1</p>
    </div>
  );
}

function CircleWrapper() {
  return (
    <div className="bg-white overflow-clip relative shrink-0 size-[30px]" data-name="Circle Wrapper">
      <Frame6 />
    </div>
  );
}

function StepText() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Step Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[14.5px]">Спрос → заказы</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5b6a8f] text-[12.5px]">EMA фактических продаж ведёт объём заказа за рынком</p>
    </div>
  );
}

function Step() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px overflow-clip relative" data-name="Step">
      <CircleWrapper />
      <StepText />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#e7efff] content-stretch flex flex-col items-center justify-center left-0 px-[8px] py-[7px] rounded-[20px] size-[30px] top-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f7bff] text-[14px] text-center whitespace-nowrap">2</p>
    </div>
  );
}

function CircleWrapper1() {
  return (
    <div className="bg-white overflow-clip relative shrink-0 size-[30px]" data-name="Circle Wrapper">
      <Frame7 />
    </div>
  );
}

function StepText1() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Step Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[14.5px]">Сроки → точка заказа</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5b6a8f] text-[12.5px]">EMA реальной задержки доставки корректирует уровень дозаказа</p>
    </div>
  );
}

function Step1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px overflow-clip relative" data-name="Step">
      <CircleWrapper1 />
      <StepText1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[#e7efff] content-stretch flex flex-col items-center justify-center left-0 px-[8px] py-[7px] rounded-[20px] size-[30px] top-0">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2f7bff] text-[14px] text-center whitespace-nowrap">3</p>
    </div>
  );
}

function CircleWrapper2() {
  return (
    <div className="bg-white overflow-clip relative shrink-0 size-[30px]" data-name="Circle Wrapper">
      <Frame8 />
    </div>
  );
}

function StepText2() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-name="Step Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#1a2348] text-[14.5px]">Остатки → план завода</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5b6a8f] text-[12.5px]">покрытие складов в днях двигает производство 55–170 %</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] gap-[16px] items-start min-w-px overflow-clip relative" data-name="Step">
      <CircleWrapper2 />
      <StepText2 />
    </div>
  );
}

function StepsRow() {
  return (
    <div className="content-stretch flex items-start justify-between overflow-clip relative shrink-0 w-full" data-name="Steps Row">
      <Step />
      <Step1 />
      <Step2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Footer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-start px-[24px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1a2348] text-[15px] whitespace-nowrap">Почему система самобалансируется</p>
          <StepsRow />
        </div>
      </div>
    </div>
  );
}

export default function Component2AutoLayout() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[15px] items-start p-[26px] relative size-full" data-name="Модуль 2 — Auto Layout">
      <Header />
      <Body />
      <Footer />
      <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[1380px] whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">Живая бесконечная симуляция распределения охлаждённой курицы Aitas: завод → склады → магазины на карте.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">{`Шаг — один день. Заказами управляет точка перезаказа с двумя EMA (спрос магазина и фактический срок поставки), склады отдают старейшие партии по FEFO — только те, что переживут дорогу и успеют продаться, плюс спасательный проход для зависшего стока. `}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">Рейсы собираются жадной цепочкой до пяти магазинов и 1500 кг, производство дросселируется по покрытию складов.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">Каждый шаг пишется в журнал событий и воспроизводится на карте. LLM анализирует на недостатки и контролирует процесс с точки зрения рекомендациий.</p>
      </div>
    </div>
  );
}