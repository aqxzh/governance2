import svgPaths from "./svg-s79tlu585m";
import imgChatGptImage1020261038161 from "./37d43d766ca73823b5e9f208875fcca6aa12c956.png";
import imgPhoto15003820174689049Fed747Ef from "./ccca115612b0c45b97732060b3f06c9ee8190b1e.png";
import imgPhoto156049367604071C5F467B from "./8f4a3d577e7d4e99bb812a0f46e3dc50eee9ec5f.png";
import imgPhoto1586528116311Ad8Dd3C8310D from "./1a99fd37c26e04fcec167e8d9ac34f3bd50db16f.png";
type ComponentProps = {
  className?: string;
  variant?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
};

function Component({ className, variant = "1" }: ComponentProps) {
  const is2 = variant === "2";
  const is3 = variant === "3";
  const is4 = variant === "4";
  const is4Or6 = ["4", "6"].includes(variant);
  const is5 = variant === "5";
  const is6 = variant === "6";
  const is7 = variant === "7";
  return (
    <div className={className || `overflow-clip relative ${is7 ? "size-[12px]" : ["3", "4", "5", "6"].includes(variant) ? "size-[28px]" : is2 ? "size-[16px]" : "size-[14px]"}`}>
      <div className={`absolute ${is6 ? "bottom-[54.17%] left-1/4 right-1/2 top-[20.83%]" : is5 ? "bottom-[16.67%] left-[16.67%] right-[16.67%] top-1/4" : is4 ? "inset-[58.33%_66.67%_16.67%_16.67%]" : is3 ? "inset-[12.5%_33.33%_12.5%_16.67%]" : is2 ? "inset-[8.33%_20.83%]" : "bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]"}`} data-name="Vector">
        {["2", "4", "5", "6"].includes(variant) && (
          <svg className="absolute block inset-0 size-full" fill="none" height={is5 ? "16.3333" : is4Or6 ? "7" : "13.3333"} preserveAspectRatio="none" viewBox={is6 ? "0 0 7 7" : is5 ? "0 0 18.6667 16.3333" : is4 ? "0 0 4.66667 7" : "0 0 9.33333 13.3333"} width={is6 ? "7" : is5 ? "18.6667" : is4 ? "4.66667" : "9.33333"}>
            <path d={is6 ? svgPaths.p33a5300 : is5 ? svgPaths.p3eff5100 : is4 ? svgPaths.p3e379400 : svgPaths.pfce2900} fill={["4", "5", "6"].includes(variant) ? "#5B9CF0" : "#5B7EC9"} id="Vector" />
          </svg>
        )}
        {["1", "3", "7"].includes(variant) && (
          <div className={`absolute ${is3 ? "inset-[-5.71%_-8.05%_-5%_-7.5%]" : "inset-[-14.73%_-7.37%_-29.46%_-7.37%]"}`}>
            <svg className="block size-full" fill="none" height={is7 ? "4.32583" : is3 ? "23.249" : "5.0468"} preserveAspectRatio="none" viewBox={is7 ? "0 0 6.88388 4.32583" : is3 ? "0 0 16.177 23.249" : "0 0 8.0312 5.0468"} width={is7 ? "6.88388" : is3 ? "16.177" : "8.0312"}>
              <path d={is7 ? svgPaths.pad40200 : is3 ? svgPaths.p2b7c6c00 : svgPaths.p1fdc4a90} id="Vector" stroke={is3 ? "#5B9CF0" : "#1A2348"} strokeWidth={is7 ? "1.25" : is3 ? "2.1" : "1.45833"} />
            </svg>
          </div>
        )}
      </div>
      {["3", "4", "6"].includes(variant) && (
        <div className={`absolute ${is6 ? "inset-[31.25%_18.75%_47.92%_60.42%]" : is4 ? "inset-[41.67%_41.67%_16.67%_41.67%]" : "inset-[33.33%_29.17%_20.83%_20.83%]"}`} data-name="Vector">
          {is4Or6 && (
            <svg className="absolute block inset-0 size-full" fill="none" height={is6 ? "5.83333" : "11.6667"} preserveAspectRatio="none" viewBox={is6 ? "0 0 5.83333 5.83333" : "0 0 4.66667 11.6667"} width={is6 ? "5.83333" : "4.66667"}>
              <path d={is6 ? svgPaths.p143a6b80 : svgPaths.pd292980} fill="#5B9CF0" id="Vector" />
            </svg>
          )}
          {is3 && (
            <div className="absolute inset-[-7.6%_-2.79%_-4.21%_-6.43%]">
              <svg className="block size-full" fill="none" height="14.3485" preserveAspectRatio="none" viewBox="0 0 15.2903 14.3485" width="15.2903">
                <path d={svgPaths.p11211280} id="Vector" stroke="#5B9CF0" strokeWidth="2.1" />
              </svg>
            </div>
          )}
        </div>
      )}
      {is4Or6 && (
        <div className={`absolute ${is6 ? "inset-[58.33%_20.83%_12.5%_12.5%]" : "inset-[16.67%_16.67%_16.67%_66.67%]"}`} data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" height={is6 ? "8.16667" : "18.6667"} preserveAspectRatio="none" viewBox={is6 ? "0 0 18.6667 8.16667" : "0 0 4.66667 18.6667"} width={is6 ? "18.6667" : "4.66667"}>
            <path d={is6 ? svgPaths.p1ac2b800 : svgPaths.p727ee80} fill="#5B9CF0" id="Vector" />
          </svg>
        </div>
      )}
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#b5a38d] text-[38px] tracking-[-0.5px] whitespace-nowrap">
        <p className="leading-[normal]">Продовольственная экосистема</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#fffff7] text-[15.5px] whitespace-nowrap">
        <p className="leading-[normal]">Анализируем потоки, находим точки роста, привлекаем капитал для устойчивого будущего.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container2 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ebebe3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">Период</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white border border-[#dfe8f5] border-solid content-stretch flex items-center justify-between min-w-[168px] px-[14px] py-[10px] relative rounded-[10px] shrink-0 w-full" data-name="Background+Border">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[14.5px] whitespace-nowrap">
        <p className="leading-[normal]">2024</p>
      </div>
      <Component className="overflow-clip relative shrink-0 size-[14px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative self-stretch shrink-0" data-name="Container">
      <Label />
      <BackgroundBorder />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#ebebe3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">Регион</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Component className="overflow-clip relative shrink-0 size-[16px]" variant="2" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[14.5px] whitespace-nowrap">
        <p className="leading-[normal]">Все регионы</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white border border-[#dfe8f5] border-solid content-stretch flex items-center justify-between min-w-[250px] px-[14px] py-[10px] relative rounded-[10px] shrink-0 w-full" data-name="Background+Border">
      <Container6 />
      <Component className="overflow-clip relative shrink-0 size-[14px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative self-stretch shrink-0" data-name="Container">
      <Label1 />
      <BackgroundBorder1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[28px] items-start relative shrink-0" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_335.98px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Background">
      <Component className="overflow-clip relative shrink-0 size-[28px]" variant="3" />
    </div>
  );
}

function Small() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Small">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b6a8f] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Общий объем рынка</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#16b364] text-[13.5px] whitespace-nowrap">
        <p className="leading-[normal]">↗ +7%</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pt-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[22px] whitespace-nowrap">
        <p className="leading-[normal]">$12.6 млрд</p>
      </div>
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9aa6c3] text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">к 2023 году</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0" data-name="Container">
      <Small />
      <Container9 />
      <Container11 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white border border-[#e9eff8] border-solid content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px px-[18px] py-[16px] relative rounded-[14px]" data-name="Background+Border">
      <Background />
      <Container8 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Background">
      <Component className="overflow-clip relative shrink-0 size-[28px]" variant="4" />
    </div>
  );
}

function Small1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Small">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b6a8f] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Привлеченный капитал</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#16b364] text-[13.5px] whitespace-nowrap">
        <p className="leading-[normal]">↗ +18%</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pt-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[22px] whitespace-nowrap">
        <p className="leading-[normal]">$3.1 млрд</p>
      </div>
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9aa6c3] text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">к 2023 году</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0" data-name="Container">
      <Small1 />
      <Container13 />
      <Container15 />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white border border-[#e9eff8] border-solid content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px px-[18px] py-[16px] relative rounded-[14px]" data-name="Background+Border">
      <Background1 />
      <Container12 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Background">
      <Component className="overflow-clip relative shrink-0 size-[28px]" variant="5" />
    </div>
  );
}

function Small2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Small">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b6a8f] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Объем производства</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#16b364] text-[13.5px] whitespace-nowrap">
        <p className="leading-[normal]">↗ +6%</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pt-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[22px] whitespace-nowrap">
        <p className="leading-[normal]">18.4 млн т</p>
      </div>
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9aa6c3] text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">к 2023 году</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0" data-name="Container">
      <Small2 />
      <Container17 />
      <Container19 />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-white border border-[#e9eff8] border-solid content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px px-[18px] py-[16px] relative rounded-[14px]" data-name="Background+Border">
      <Background2 />
      <Container16 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#eef4ff] content-stretch flex items-center justify-center relative rounded-[28px] shrink-0 size-[56px]" data-name="Background">
      <Component className="overflow-clip relative shrink-0 size-[28px]" variant="6" />
    </div>
  );
}

function Small3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Small">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5b6a8f] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Население (охват)</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#16b364] text-[13.5px] whitespace-nowrap">
        <p className="leading-[normal]">↗ +4%</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[10px] items-center pt-px relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[22px] whitespace-nowrap">
        <p className="leading-[normal]">12.8 млн</p>
      </div>
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9aa6c3] text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">к 2023 году</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0" data-name="Container">
      <Small3 />
      <Container21 />
      <Container23 />
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-white border border-[#e9eff8] border-solid content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px px-[18px] py-[16px] relative rounded-[14px]" data-name="Background+Border">
      <Background3 />
      <Container20 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder2 />
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[18.5px] whitespace-nowrap">
        <p className="leading-[normal]">Баланс производства и потребления</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8d99b9] text-[13.5px] whitespace-nowrap">
        <p className="leading-[normal]">По регионам, млн т</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading1 />
      <Container27 />
    </div>
  );
}

function Border() {
  return (
    <div className="border border-[#dfe8f5] border-solid content-stretch flex gap-[12px] items-center px-[12px] py-[7px] relative rounded-[9px] shrink-0" data-name="Border">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Производство</p>
      </div>
      <Component className="overflow-clip relative shrink-0 size-[12px]" variant="7" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Border />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center pb-[7.5px] pt-[6.5px] relative shrink-0 size-[36px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[normal]">+</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white border-[#e2e9f5] border-solid border-t content-stretch flex flex-col items-center justify-center pb-[7px] pt-[6px] relative shrink-0 size-[36px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[20px] text-center whitespace-nowrap">
        <p className="leading-[normal]">−</p>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="absolute bg-white border border-[#e2e9f5] border-solid bottom-[12px] content-stretch flex flex-col items-start overflow-clip right-[11.86px] rounded-[10px]" data-name="Background+Border">
      <Button />
      <Button1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[0.62px] top-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[13px] whitespace-nowrap">
        <p className="leading-[22.1px]">2.4 млн т</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[0.34px] top-[42.5px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[13px] whitespace-nowrap">
        <p className="leading-[22.1px]">1.8 млн т</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[57.24px] top-[63.75px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#16b364] text-[13px] whitespace-nowrap">
        <p className="leading-[22.1px]">+0.6 млн т</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[63.75px] relative shrink-0 w-[164.38px]" data-name="Container">
      <div className="absolute bg-[#6f9bf0] left-0 rounded-[5px] size-[10px] top-[6.59px]" data-name="Background" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[16px] not-italic text-[#1a2348] text-[12.5px] top-[10.5px] w-[89.128px]">
        <p className="leading-[21.25px]">Производство</p>
      </div>
      <Container29 />
      <div className="absolute bg-[#b9cdf3] left-0 rounded-[5px] size-[10px] top-[27.84px]" data-name="Background" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[16px] not-italic text-[#1a2348] text-[12.5px] top-[31.75px] w-[82.125px]">
        <p className="leading-[21.25px]">Потребление</p>
      </div>
      <Container30 />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#16b364] text-[0px] top-[53px] w-[60.118px]">
        <p className="text-[12.5px]">
          <span className="leading-[21.25px] text-[#16b364]">↗</span>
          <span className="leading-[21.25px] text-[#1a2348]">{` Баланс`}</span>
        </p>
      </div>
      <Container31 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute bg-white border border-[#eef2f9] border-solid content-stretch drop-shadow-[0px_12px_16px_rgba(30,50,100,0.18)] flex flex-col gap-[6px] items-start min-w-[188px] pb-[34.09px] pt-[12px] px-[14px] right-[17.85px] rounded-[12px] top-[18px]" data-name="Background+Border+Shadow">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">Астана</p>
      </div>
      <Container28 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-white min-h-[380px] relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[302.786px] relative shrink-0 w-[538px]" data-name="ChatGPT Image 10 сент. 2026 г., 10_38_16 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage1020261038161} />
        </div>
        <BackgroundBorder7 />
        <BackgroundBorderShadow />
      </div>
      <div aria-hidden className="absolute border border-[#dfe8f5] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[15px] relative shrink-0 w-[77.11px]" data-name="Container">
      <div className="absolute bg-[#2f7bff] left-0 rounded-[5px] size-[10px] top-[3.59px]" data-name="Background" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[16px] not-italic text-[#6b7a9e] text-[12.5px] top-[7.5px] w-[62.177px]">
        <p className="leading-[normal]">Профицит</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[15px] relative shrink-0 w-[70.19px]" data-name="Container">
      <div className="absolute bg-[#a48cf5] left-0 rounded-[5px] size-[10px] top-[3.59px]" data-name="Background" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[16px] not-italic text-[#6b7a9e] text-[12.5px] top-[7.5px] w-[55.157px]">
        <p className="leading-[normal]">Дефицит</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[15px] relative shrink-0 w-[119.75px]" data-name="Container">
      <div className="absolute bg-[#b9cdf3] left-0 rounded-[5px] size-[10px] top-[3.59px]" data-name="Background" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[16px] not-italic text-[#6b7a9e] text-[12.5px] top-[7.5px] w-[104.16px]">
        <p className="leading-[normal]">Сбалансировано</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[18px] items-center pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-white border border-[#e9eff8] border-solid col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-start px-[22px] py-[20px] relative rounded-[14px] row-1 self-stretch shrink-0 w-[917px]" data-name="Background+Border">
      <Container25 />
      <Background4 />
      <Container32 />
    </div>
  );
}

function Container37() {
  return (
    <div className="[word-break:break-word] h-[19.5px] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 text-[#8d99b9] text-[10px] top-[3.5px] tracking-[1px] uppercase">Куда идёт ценность</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[19.5px] left-[224.8px] text-[#1a2348] text-[13px] top-0">$13.3 млрд</p>
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] relative shrink-0 w-full" data-name="Container:margin">
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="[word-break:break-word] h-[19.5px] not-italic relative shrink-0 w-[273px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15.813px] left-0 text-[#4a587d] text-[11.5px] top-[3px]">Сельское хозяйство</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[19.5px] left-[204.82px] text-[#1a2348] text-[13px] top-0">$5.2 млрд</p>
    </div>
  );
}

function Container40() {
  return <div className="absolute bg-[#2fbf8f] h-[4px] left-0 rounded-[16777200px] top-0 w-[106.469px]" data-name="Container" />;
}

function Container39() {
  return (
    <div className="bg-[#eef2fa] h-[4px] overflow-clip relative rounded-[16777200px] shrink-0 w-[273px]" data-name="Container">
      <Container40 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15.75px] not-italic relative shrink-0 text-[#8d99b9] text-[10.5px] whitespace-nowrap">39% ценности</p>
    </div>
  );
}

function DestCard() {
  return (
    <div className="bg-white border border-[#eef2fa] border-solid content-stretch flex flex-col gap-[6px] items-start px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="DestCard">
      <Container38 />
      <Container39 />
      <Text />
    </div>
  );
}

function Container41() {
  return (
    <div className="[word-break:break-word] h-[19.5px] not-italic relative shrink-0 w-[273px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15.813px] left-0 text-[#4a587d] text-[11.5px] top-[3px]">Переработка</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[19.5px] left-[204.59px] text-[#1a2348] text-[13px] top-0">$3.6 млрд</p>
    </div>
  );
}

function Container43() {
  return <div className="absolute bg-[#ffa63d] h-[4px] left-0 rounded-[16777200px] top-0 w-[73.703px]" data-name="Container" />;
}

function Container42() {
  return (
    <div className="bg-[#eef2fa] h-[4px] overflow-clip relative rounded-[16777200px] shrink-0 w-[273px]" data-name="Container">
      <Container43 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15.75px] not-italic relative shrink-0 text-[#8d99b9] text-[10.5px] whitespace-nowrap">27% ценности</p>
    </div>
  );
}

function DestCard1() {
  return (
    <div className="bg-white border border-[#eef2fa] border-solid content-stretch flex flex-col gap-[6px] items-start px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="DestCard">
      <Container41 />
      <Container42 />
      <Text1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="[word-break:break-word] h-[19.5px] not-italic relative shrink-0 w-[273px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15.813px] left-0 text-[#4a587d] text-[11.5px] top-[3px]">Логистика и дистрибуция</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[19.5px] left-[204.55px] text-[#1a2348] text-[13px] top-0">$2.8 млрд</p>
    </div>
  );
}

function Container46() {
  return <div className="absolute bg-[#6aa6ff] h-[4px] left-0 rounded-[16777200px] top-0 w-[57.328px]" data-name="Container" />;
}

function Container45() {
  return (
    <div className="bg-[#eef2fa] h-[4px] overflow-clip relative rounded-[16777200px] shrink-0 w-[273px]" data-name="Container">
      <Container46 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15.75px] not-italic relative shrink-0 text-[#8d99b9] text-[10.5px] whitespace-nowrap">21% ценности</p>
    </div>
  );
}

function DestCard2() {
  return (
    <div className="bg-white border border-[#eef2fa] border-solid content-stretch flex flex-col gap-[6px] items-start px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="DestCard">
      <Container44 />
      <Container45 />
      <Text2 />
    </div>
  );
}

function Container47() {
  return (
    <div className="[word-break:break-word] h-[19.5px] not-italic relative shrink-0 w-[273px] whitespace-nowrap" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[15.813px] left-0 text-[#4a587d] text-[11.5px] top-[3px]">Розничный рынок</p>
      <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[19.5px] left-[208.09px] text-[#1a2348] text-[13px] top-0">$1.7 млрд</p>
    </div>
  );
}

function Container49() {
  return <div className="absolute bg-[#9b7bff] h-[4px] left-0 rounded-[16777200px] top-0 w-[35.484px]" data-name="Container" />;
}

function Container48() {
  return (
    <div className="bg-[#eef2fa] h-[4px] overflow-clip relative rounded-[16777200px] shrink-0 w-[273px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15.75px] not-italic relative shrink-0 text-[#8d99b9] text-[10.5px] whitespace-nowrap">13% ценности</p>
    </div>
  );
}

function DestCard3() {
  return (
    <div className="bg-white border border-[#eef2fa] border-solid content-stretch flex flex-col gap-[6px] items-start px-[12px] py-[10px] relative rounded-[10px] shrink-0" data-name="DestCard">
      <Container47 />
      <Container48 />
      <Text3 />
    </div>
  );
}

function Container36() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-center relative row-1 self-start shrink-0" data-name="Container">
      <ContainerMargin />
      <DestCard />
      <DestCard1 />
      <DestCard2 />
      <DestCard3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[__minmax(0,1.52fr)_minmax(0,1fr)] grid-rows-[__497px_497px] h-[475px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder6 />
      <Container36 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[24px] whitespace-nowrap">
        <p className="leading-[normal]">Приоритетные инвестиционные возможности</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#8d99b9] text-[13.5px] whitespace-nowrap">
        <p className="leading-[normal]">Проекты с наибольшим потенциалом и вкладом в рост экосистемы</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading2 />
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2f7bff] text-[18px] whitespace-nowrap">
        <p className="leading-[normal]">→</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2f7bff] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Смотреть все</p>
      </div>
      <Container53 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[752.65px] items-center relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Link />
    </div>
  );
}

function Photo15003820174689049Fed747Ef() {
  return (
    <div className="h-[88px] relative rounded-[10px] shrink-0 w-[104px]" data-name="photo-1500382017468-9049fed747ef">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute h-full left-[-25.21%] max-w-none top-0 w-[150.43%]" src={imgPhoto15003820174689049Fed747Ef} />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.92px] right-0 top-[-1px]" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[13.8px] whitespace-nowrap">
        <p className="leading-[17.94px]">Indriver</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#e7efff] content-stretch flex items-start left-0 px-[10px] py-[3px] rounded-[20px] top-[23.93px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a6fa5] text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">Логистика</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] absolute h-[41px] leading-[0] left-0 not-italic right-0 top-[51.93px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center left-0 text-[#1a2348] text-[18px] top-[11px] w-[89.144px]">
        <p className="leading-[normal]">$450 млн</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[99.52px] text-[#8d99b9] text-[11.5px] top-[13px] w-[137.101px]">
        <p className="leading-[normal]">Ожидаемая доходность</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center left-[6px] text-[#1a2348] text-[15px] top-[31px] w-[33.133px]">
        <p className="leading-[normal]">24%</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[92.92px] relative shrink-0 w-[274px]" data-name="Container">
      <Heading3 />
      <Background5 />
      <Paragraph />
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#f7faff] border border-[#e2e9f5] border-solid content-stretch flex items-center justify-center pb-[9px] pt-[7px] relative rounded-[19px] shrink-0 size-[38px]" data-name="Background+Border">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">→</p>
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-white border border-[#e9eff8] border-solid content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px pb-[20.97px] pt-[20.95px] px-[12px] relative rounded-[14px]" data-name="Background+Border">
      <Photo15003820174689049Fed747Ef />
      <Container55 />
      <BackgroundBorder10 />
    </div>
  );
}

function Photo156049367604071C5F467B() {
  return (
    <div className="h-[88px] relative rounded-[10px] shrink-0 w-[104px]" data-name="photo-1560493676-04071c5f467b">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute h-full left-[-6.41%] max-w-none top-0 w-[112.82%]" src={imgPhoto156049367604071C5F467B} />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.88px] right-0 top-[-1.04px]" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[13.8px] whitespace-nowrap">
        <p className="leading-[17.94px] mb-0">Модернизация молочного</p>
        <p className="leading-[17.94px]">производства</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#fef1dc] content-stretch flex items-start left-0 px-[10px] py-[3px] rounded-[20px] top-[41.84px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b47a2a] text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">Переработка</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[word-break:break-word] absolute h-[41px] leading-[0] left-0 not-italic right-0 top-[69.84px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center left-0 text-[#1a2348] text-[18px] top-[11px] w-[88.147px]">
        <p className="leading-[normal]">$320 млн</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[99.02px] text-[#8d99b9] text-[11.5px] top-[13px] w-[137.101px]">
        <p className="leading-[normal]">Ожидаемая доходность</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center left-[6px] text-[#1a2348] text-[15px] top-[31px] w-[31.105px]">
        <p className="leading-[normal]">19%</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[110.84px] relative shrink-0 w-[274px]" data-name="Container">
      <Heading4 />
      <Background6 />
      <Paragraph1 />
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-[#f7faff] border border-[#e2e9f5] border-solid content-stretch flex items-center justify-center pb-[9px] pt-[7px] relative rounded-[19px] shrink-0 size-[38px]" data-name="Background+Border">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">→</p>
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-white border border-[#e9eff8] border-solid content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px p-[12px] relative rounded-[14px]" data-name="Background+Border">
      <Photo156049367604071C5F467B />
      <Container56 />
      <BackgroundBorder12 />
    </div>
  );
}

function Photo1586528116311Ad8Dd3C8310D() {
  return (
    <div className="h-[88px] relative rounded-[10px] shrink-0 w-[104px]" data-name="photo-1586528116311-ad8dd3c8310d">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
        <img alt="" className="absolute h-full left-[-13.38%] max-w-none top-0 w-[126.76%]" src={imgPhoto1586528116311Ad8Dd3C8310D} />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.92px] right-0 top-[-1px]" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[13.8px] whitespace-nowrap">
        <p className="leading-[17.94px]">Экспортный коридор в Азию</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-[#e7efff] content-stretch flex items-start left-0 px-[10px] py-[3px] rounded-[20px] top-[23.93px]" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4a6fa5] text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">Логистика</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="[word-break:break-word] absolute h-[41px] leading-[0] left-0 not-italic right-0 top-[51.93px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Extra_Bold',sans-serif] font-extrabold justify-center left-0 text-[#1a2348] text-[18px] top-[11px] w-[88.148px]">
        <p className="leading-[normal]">$280 млн</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center left-[99.14px] text-[#8d99b9] text-[11.5px] top-[13px] w-[137.101px]">
        <p className="leading-[normal]">Ожидаемая доходность</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center left-[6px] text-[#1a2348] text-[15px] top-[31px] w-[32.14px]">
        <p className="leading-[normal]">22%</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[92.92px] relative shrink-0 w-[274px]" data-name="Container">
      <Heading5 />
      <Background7 />
      <Paragraph2 />
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="bg-[#f7faff] border border-[#e2e9f5] border-solid content-stretch flex items-center justify-center pb-[9px] pt-[7px] relative rounded-[19px] shrink-0 size-[38px]" data-name="Background+Border">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a2348] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">→</p>
      </div>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="bg-white border border-[#e9eff8] border-solid content-stretch flex flex-[1_0_0] gap-[14px] items-center min-w-px pb-[20.97px] pt-[20.95px] px-[12px] relative rounded-[14px]" data-name="Background+Border">
      <Photo1586528116311Ad8Dd3C8310D />
      <Container57 />
      <BackgroundBorder14 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder9 />
      <BackgroundBorder11 />
      <BackgroundBorder13 />
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-white border border-[#e9eff8] border-solid content-stretch flex flex-col gap-[14px] items-start px-[22px] py-[20px] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <Container50 />
      <Container54 />
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[16px] items-start pb-[30px] pt-[26px] px-[26px] relative rounded-[18px] size-full" data-name="модуль 4">
      <Container />
      <Container7 />
      <Container24 />
      <BackgroundBorder8 />
      <ul className="[word-break:break-word] block font-['Inter:Regular',sans-serif] font-normal h-[220px] leading-[0] list-disc not-italic relative shrink-0 text-[20px] text-white w-[1380px]">
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">{`концепция демонстрационной панели потоков продукции по республике: `}</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">исходя из общего стратегического направления развития.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">исходя из текущих и плановые объёмы продаж в целом на рынке</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">исходя из финансовые показатели, в том числе EBITDA.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">Короткий список приоритетных вариантов (продуктов, направлений или партнёров) для дальнейшей проработки.</span>
        </li>
        <li className="mb-0 ms-[30px]">
          <span className="leading-[normal]">учитывая объём производства и производственные мощности.</span>
        </li>
        <li className="ms-[30px]">
          <span className="leading-[normal]">учитывая имеющееся оборудование и потребность в новом.</span>
        </li>
      </ul>
    </div>
  );
}