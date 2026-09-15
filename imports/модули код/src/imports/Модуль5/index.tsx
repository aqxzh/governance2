import svgPaths from "./svg-x7ykw8rwt6";

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#d3af83] text-[22px] whitespace-nowrap">
        <span className="leading-[24px]">AI-Советник (</span>
        <span className="font-['Inter:Regular',sans-serif] font-normal leading-[24px]">AI ассистент руководителя, AI планирование, AI культура</span>
        <span className="leading-[24px]">)</span>
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Обновить данные</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] flex items-center justify-between px-[16px] py-[8px] relative rounded-[12px] shrink-0 w-full" data-name="Header">
      <Text />
      <Button />
    </div>
  );
}

function HeaderMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] px-[12px] relative shrink-0 w-full" data-name="Header:margin">
      <Header />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#4a5568] text-[0px] tracking-[0.3px] whitespace-nowrap">
        <span className="leading-[16px] text-[#ffefd9] text-[16px]">Контролируйте исполнение документов —</span>
        <span className="leading-[16px] text-[12px]">{` `}</span>
        <span className="leading-[16px] text-[#d3af83] text-[16px]">без ручной аналитики</span>
      </p>
    </div>
  );
}

function Paragraph1() {
  return <div className="h-[16px] relative shrink-0 w-0" data-name="Paragraph" />;
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between pl-[24px] pr-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0.723px] border-solid content-stretch flex flex-col h-[29.445px] items-start justify-center left-[8px] overflow-clip px-[8px] py-[6px] rounded-[4px] top-[8px] w-[159.99px]" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-full">Поиск дашбордов...</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[45.444px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] whitespace-nowrap">🌡️</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#eff6ff] border-[#bedbff] border-[0.723px] border-solid content-stretch flex gap-[6px] items-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Text1 />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] whitespace-nowrap">Тепловая карта</p>
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] px-[8px] relative shrink-0 w-full" data-name="Container:margin">
      <Container3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.286px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[0.5px] whitespace-nowrap">РУКОВОДСТВО</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[14.667px] not-italic relative shrink-0 text-[#193cb8] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[125.055px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#193cb8] text-[12px] whitespace-nowrap">Обзор для руковод...</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-[159.99px]" data-name="Button">
      <Text2 />
      <Text3 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-full" data-name="Button:margin">
      <Button1 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[126.908px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Приоритеты руково...</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[125.947px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Движение докумен...</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <ButtonMargin />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.286px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[0.5px] whitespace-nowrap">СРОКИ</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[100.728px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Контроль сроков</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-[159.99px]" data-name="Button">
      <Text8 />
      <Text9 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-full" data-name="Button:margin">
      <Button4 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[126.998px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Распределение сро...</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[100.073px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Риски по срокам</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[102.997px] items-start pt-[12px] relative shrink-0 w-[159.99px]" data-name="Container">
      <Paragraph3 />
      <ButtonMargin1 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.286px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[0.5px] whitespace-nowrap">ИСПОЛНИТЕЛИ</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[126.919px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Нагрузка на исполн...</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-[159.99px]" data-name="Button">
      <Text14 />
      <Text15 />
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-full" data-name="Button:margin">
      <Button7 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[126.716px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Эффективность исп...</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[130.399px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Детальный анализ и...</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col h-[102.997px] items-start pt-[12px] relative shrink-0 w-[159.99px]" data-name="Container">
      <Paragraph4 />
      <ButtonMargin2 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.286px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[0.5px] whitespace-nowrap">ДЕПАРТАМЕНТЫ</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[126.953px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Эффективность деп...</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-[159.99px]" data-name="Button">
      <Text20 />
      <Text21 />
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-full" data-name="Button:margin">
      <Button10 />
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[127.97px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Движение по депар...</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[130.67px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Детальный анализ д...</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col h-[102.997px] items-start pt-[12px] relative shrink-0 w-[159.99px]" data-name="Container">
      <Paragraph5 />
      <ButtonMargin3 />
      <Button11 />
      <Button12 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.286px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[0.5px] whitespace-nowrap">КОРРЕСПОНДЕНТЫ</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[126.365px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Анализ корреспонд...</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-[159.99px]" data-name="Button">
      <Text26 />
      <Text27 />
    </div>
  );
}

function ButtonMargin4() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-full" data-name="Button:margin">
      <Button13 />
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[128.297px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Типы корреспонден...</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[134.037px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#4a5565] text-[12px] text-ellipsis w-full whitespace-nowrap">Приоритеты корресп...</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-[159.99px]" data-name="Container">
      <Paragraph6 />
      <ButtonMargin4 />
      <Button14 />
      <Button15 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14.286px] not-italic relative shrink-0 text-[#99a1af] text-[10px] tracking-[0.5px] whitespace-nowrap">КАЧЕСТВО ДАННЫХ</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[102.288px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Качество данных</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-[159.99px]" data-name="Button">
      <Text32 />
      <Text33 />
    </div>
  );
}

function ButtonMargin5() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[4px] relative shrink-0 w-full" data-name="Button:margin">
      <Button16 />
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[96.559px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Полнота данных</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Text34 />
      <Text35 />
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.667px] not-italic relative shrink-0 text-[#4a5565] text-[11px] whitespace-nowrap">◆</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col h-[15.999px] items-start overflow-clip relative shrink-0 w-[116.716px]" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] whitespace-nowrap">Аномалии в данных</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="content-stretch flex gap-[6px] items-center px-[6px] py-[4px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Text36 />
      <Text37 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col h-[102.997px] items-start pt-[12px] relative shrink-0 w-[159.99px]" data-name="Container">
      <Paragraph7 />
      <ButtonMargin5 />
      <Button17 />
      <Button18 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-[631.261_0_0] flex-col items-start min-h-px overflow-clip pb-[16px] px-[8px] relative w-full" data-name="Navigation">
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[175.99px]" data-name="Sidebar">
      <Container2 />
      <ContainerMargin />
      <Navigation />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[287.994px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#364153] text-[14px] whitespace-nowrap">Чат с AI-Советником</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="border-[#f3f4f6] border-b-[0.723px] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col h-full items-start px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">Нагрузка на департаменты</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[35.489px] items-start justify-end relative shrink-0 w-[287.994px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#1e2939] text-[12px] w-[221px]">Отображаю аналитику по нагрузке на департаменты...</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[54.98px] items-start relative shrink-0 w-[287.994px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0" data-name="Container:margin">
      <Container16 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col h-full items-start px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">кто такой Пак?</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[47.489px] items-start justify-end pt-[12px] relative shrink-0 w-[287.994px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col h-full items-start px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] not-italic relative shrink-0 text-[#1e2939] text-[12px] w-[221px]">Пак Т.Е. — исполнитель с 31 просроченным документом, занимает 10-е место в рейтинге.</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[86.47px] items-start pt-[12px] relative shrink-0 w-[287.994px]" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[470.976_0_0] flex-col items-start min-h-px overflow-clip p-[16px] relative w-full" data-name="Container">
      <Container14 />
      <ContainerMargin1 />
      <Container18 />
      <Container20 />
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-[147.268_0_0] flex-col h-full items-center justify-center min-w-px py-[6px] relative" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">📊 Аналитика</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="content-stretch flex flex-[147.279_0_0] flex-col h-full items-center justify-center min-w-px py-[6px] relative" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6a7282] text-[12px] text-center whitespace-nowrap">💬 Чат</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="border-[#e5e7eb] border-[0.723px] border-solid content-stretch flex h-[29.445px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[295.994px]" data-name="Container">
      <Button19 />
      <Button20 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="border-[#e5e7eb] border-[0.723px] border-solid content-stretch flex flex-[211.116_0_0] flex-col h-full items-start justify-center min-w-px overflow-clip px-[12px] py-[8px] relative rounded-[8px]" data-name="Text Input">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.5)] w-full">Задайте ваш вопрос...</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#155dfc] content-stretch flex flex-col h-full items-center justify-center px-[12px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Send</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[6px] h-[41.444px] items-start pt-[8px] relative shrink-0 w-[295.994px]" data-name="Container">
      <TextInput1 />
      <Button21 />
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[22.281px] items-center justify-center left-0 px-[8px] py-[4px] rounded-[6px] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.286px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-center whitespace-nowrap">Нагрузка на департаменты</p>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[22.281px] items-center justify-center left-0 px-[8px] py-[4px] rounded-[6px] top-[28.28px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.286px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-center whitespace-nowrap">Аналитика по исполнителям</p>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[22.281px] items-center justify-center left-[161.61px] px-[8px] py-[4px] rounded-[6px] top-[28.28px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.286px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-center whitespace-nowrap">Дашборд по авторам</p>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[22.281px] items-center justify-center left-0 px-[8px] py-[4px] rounded-[6px] top-[56.56px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.286px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-center whitespace-nowrap">кто такой Пак?</p>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[22.281px] items-center justify-center left-[94.45px] px-[8px] py-[4px] rounded-[6px] top-[56.56px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.286px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-center whitespace-nowrap">График связей</p>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col h-[22.281px] items-center justify-center left-[188.07px] px-[8px] py-[4px] rounded-[6px] top-[56.56px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[14.286px] not-italic relative shrink-0 text-[#4a5565] text-[10px] text-center whitespace-nowrap">Тепловая карта</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[78.843px] relative shrink-0 w-[295.994px]" data-name="Container">
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Container:margin">
      <Container25 />
    </div>
  );
}

function Container22() {
  return (
    <div className="border-[#f3f4f6] border-solid border-t-[0.723px] content-stretch flex flex-col items-start p-[12px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container24 />
      <ContainerMargin2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[319.992px]" data-name="Container">
      <Container12 />
      <Container13 />
      <Container22 />
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap">📊</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">Обзор для руководства</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#99a1af] text-[12px] whitespace-nowrap">ⓘ</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Text38 />
      <Heading />
      <Text39 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start pt-[2px] relative shrink-0 w-[409.659px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15.714px] not-italic relative shrink-0 text-[#6a7282] text-[11px] whitespace-nowrap">Комплексная сводка по документообороту и исполнительской дисциплине</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[409.659px]" data-name="Container">
      <Container29 />
      <Paragraph9 />
    </div>
  );
}

function Button28() {
  return (
    <div className="border-[#d1d5dc] border-[0.723px] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-center whitespace-nowrap">Export Excel</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[944.023px]" data-name="Container">
      <Container28 />
      <Button28 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] whitespace-nowrap">Всего документов</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">10 000</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <div className="absolute inset-[14.44%_1.64%_41.11%_1.64%]" data-name="recharts-line-_r_0_">
        <div className="absolute inset-[-3.82%_-0.37%_-4.18%_-0.29%]">
          <svg className="block size-full" fill="none" height="17.2785" preserveAspectRatio="none" viewBox="0 0 118.768 17.2785" width="118.768">
            <path d={svgPaths.pe7a940} id="recharts-line-_r_0_" stroke="#60A5FA" strokeWidth="1.49991" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <Group2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[35.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col h-[35.998px] items-start relative shrink-0 w-[121.993px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-0" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col h-[39.998px] items-start pt-[4px] relative shrink-0 w-[121.891px]" data-name="Container">
      <Container33 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-start pt-[2px] relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.857px] not-italic relative shrink-0 text-[#99a1af] text-[9px] whitespace-nowrap">Всего</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[0.723px] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch p-[12px] relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
      <Container32 />
      <Paragraph12 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] whitespace-nowrap">Просрочено (шт)</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">5 000</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <div className="absolute inset-[14.44%_1.64%_41.11%_1.64%]" data-name="recharts-line-_r_1_">
        <div className="absolute inset-[-3.82%_-0.37%_-4.18%_-0.29%]">
          <svg className="block size-full" fill="none" height="17.2785" preserveAspectRatio="none" viewBox="0 0 118.768 17.2785" width="118.768">
            <path d={svgPaths.pe7a940} id="recharts-line-_r_1_" stroke="#F87171" strokeWidth="1.49991" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <Group5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <Group4 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[35.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group3 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col h-[35.998px] items-start relative shrink-0 w-[121.993px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-0" data-name="Container">
      <Container38 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col h-[39.998px] items-start pt-[4px] relative shrink-0 w-[121.891px]" data-name="Container">
      <Container37 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-start pt-[2px] relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.857px] not-italic relative shrink-0 text-[#99a1af] text-[9px] whitespace-nowrap">Просрочено</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[0.723px] border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch p-[12px] relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph13 />
      <Paragraph14 />
      <Container36 />
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] whitespace-nowrap">Просрочено (%)</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">0.5</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <div className="absolute inset-[14.44%_1.64%_41.11%_1.64%]" data-name="recharts-line-_r_2_">
        <div className="absolute inset-[-3.82%_-0.37%_-4.18%_-0.29%]">
          <svg className="block size-full" fill="none" height="17.2785" preserveAspectRatio="none" viewBox="0 0 118.768 17.2785" width="118.768">
            <path d={svgPaths.pe7a940} id="recharts-line-_r_2_" stroke="#FB923C" strokeWidth="1.49991" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <Group8 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <Group7 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[35.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group6 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col h-[35.998px] items-start relative shrink-0 w-[121.993px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-0" data-name="Container">
      <Container42 />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col h-[39.998px] items-start pt-[4px] relative shrink-0 w-[121.891px]" data-name="Container">
      <Container41 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-start pt-[2px] relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.857px] not-italic relative shrink-0 text-[#99a1af] text-[9px] whitespace-nowrap">% Просрочки</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[0.723px] border-solid col-3 content-stretch flex flex-col items-start justify-self-stretch p-[12px] relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
      <Container40 />
      <Paragraph18 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] whitespace-nowrap">Скоро срок (0-2 дн)</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">—</p>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <div className="absolute inset-[14.44%_1.64%_41.11%_1.64%]" data-name="recharts-line-_r_3_">
        <div className="absolute inset-[-3.82%_-0.37%_-4.18%_-0.29%]">
          <svg className="block size-full" fill="none" height="17.2785" preserveAspectRatio="none" viewBox="0 0 118.768 17.2785" width="118.768">
            <path d={svgPaths.pe7a940} id="recharts-line-_r_3_" stroke="#FBBF24" strokeWidth="1.49991" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <Group11 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <Group10 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[35.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group9 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col h-[35.998px] items-start relative shrink-0 w-[121.993px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-0" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col h-[39.998px] items-start pt-[4px] relative shrink-0 w-[121.891px]" data-name="Container">
      <Container45 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-start pt-[2px] relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.857px] not-italic relative shrink-0 text-[#99a1af] text-[9px] whitespace-nowrap">Скоро срок</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[0.723px] border-solid col-4 content-stretch flex flex-col items-start justify-self-stretch p-[12px] relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph19 />
      <Paragraph20 />
      <Container44 />
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] whitespace-nowrap">Исполнено</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">10 000</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <div className="absolute inset-[14.44%_1.64%_41.11%_1.64%]" data-name="recharts-line-_r_4_">
        <div className="absolute inset-[-3.82%_-0.37%_-4.18%_-0.29%]">
          <svg className="block size-full" fill="none" height="17.2785" preserveAspectRatio="none" viewBox="0 0 118.768 17.2785" width="118.768">
            <path d={svgPaths.pe7a940} id="recharts-line-_r_4_" stroke="#34D399" strokeWidth="1.49991" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <Group14 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <Group13 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[35.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group12 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col h-[35.998px] items-start relative shrink-0 w-[121.993px]" data-name="Container">
      <Icon4 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-0" data-name="Container">
      <Container50 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col h-[39.998px] items-start pt-[4px] relative shrink-0 w-[121.891px]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-start pt-[2px] relative shrink-0 w-[121.891px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.857px] not-italic relative shrink-0 text-[#99a1af] text-[9px] whitespace-nowrap">Исполнено</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[0.723px] border-solid col-5 content-stretch flex flex-col items-start justify-self-stretch p-[12px] relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph22 />
      <Paragraph23 />
      <Container48 />
      <Paragraph24 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[121.902px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.5px] not-italic relative shrink-0 text-[#6a7282] text-[10px] whitespace-nowrap">Исполнено в срок (%)</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-start pt-[4px] relative shrink-0 w-[121.902px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[18px] not-italic relative shrink-0 text-[#101828] text-[18px] whitespace-nowrap">1</p>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <div className="absolute inset-[14.44%_1.64%_41.11%_1.64%]" data-name="recharts-line-_r_5_">
        <div className="absolute inset-[-3.82%_-0.37%_-4.18%_-0.29%]">
          <svg className="block size-full" fill="none" height="17.2785" preserveAspectRatio="none" viewBox="0 0 118.768 17.2785" width="118.768">
            <path d={svgPaths.pe7a940} id="recharts-line-_r_4_" stroke="#34D399" strokeWidth="1.49991" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <Group17 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents inset-[14.44%_1.64%_41.11%_1.64%]" data-name="Group">
      <Group16 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[35.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group15 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col h-[35.998px] items-start relative shrink-0 w-[121.993px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-0" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col h-[39.998px] items-start pt-[4px] relative shrink-0 w-[121.902px]" data-name="Container">
      <Container53 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="content-stretch flex flex-col h-[15px] items-start pt-[2px] relative shrink-0 w-[121.902px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.857px] not-italic relative shrink-0 text-[#99a1af] text-[9px] whitespace-nowrap">% В срок</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[0.723px] border-solid col-6 content-stretch flex flex-col items-start justify-self-stretch p-[12px] relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph25 />
      <Paragraph26 />
      <Container52 />
      <Paragraph27 />
    </div>
  );
}

function Container30() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[______147.34px_147.34px_147.34px_147.34px_147.34px_147.35px] grid-rows-[_114.79px] relative shrink-0 w-[944.023px]" data-name="Container">
      <Container31 />
      <Container35 />
      <Container39 />
      <Container43 />
      <Container47 />
      <Container51 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Container:margin">
      <Container30 />
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15.714px] not-italic relative shrink-0 text-[11px] text-black whitespace-nowrap">📈</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Динамика поступления</p>
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[14.286px] not-italic relative shrink-0 text-[#99a1af] text-[10px] whitespace-nowrap">ⓘ</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Text40 />
      <Text41 />
      <Text42 />
    </div>
  );
}

function Text43() {
  return <div className="bg-[#51a2ff] h-[4px] relative rounded-[4px] shrink-0 w-[11.999px]" data-name="Text" />;
}

function Text44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.857px] not-italic relative shrink-0 text-[#6a7282] text-[9px] whitespace-nowrap">Поступило</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Text43 />
      <Text44 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[430.562px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents inset-[2.86%_1.86%_21.43%_10.21%]" data-name="Group">
      <div className="absolute inset-[78.57%_1.86%_21.43%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999943" preserveAspectRatio="none" viewBox="0 0 378.978 0.999943" width="378.978">
            <path d="M0 0.499971H378.978" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[40.71%_1.86%_59.29%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999943" preserveAspectRatio="none" viewBox="0 0 378.978 0.999943" width="378.978">
            <path d="M0 0.499971H378.978" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.86%_1.86%_97.14%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999943" preserveAspectRatio="none" viewBox="0 0 378.978 0.999943" width="378.978">
            <path d="M0 0.499971H378.978" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents inset-[2.86%_1.86%_21.43%_10.21%]" data-name="Group">
      <div className="absolute inset-[2.86%_89.79%_21.43%_10.21%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="105.994" preserveAspectRatio="none" viewBox="0 0 0.999943 105.994" width="0.999943">
            <path d="M0.499971 0V105.994" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.86%_73.8%_21.43%_26.2%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="105.994" preserveAspectRatio="none" viewBox="0 0 0.999943 105.994" width="0.999943">
            <path d="M0.499971 0V105.994" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.86%_57.81%_21.43%_42.19%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="105.994" preserveAspectRatio="none" viewBox="0 0 0.999943 105.994" width="0.999943">
            <path d="M0.499971 0V105.994" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.86%_41.83%_21.43%_58.17%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="105.994" preserveAspectRatio="none" viewBox="0 0 0.999943 105.994" width="0.999943">
            <path d="M0.499971 0V105.994" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.86%_25.84%_21.43%_74.16%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="105.994" preserveAspectRatio="none" viewBox="0 0 0.999943 105.994" width="0.999943">
            <path d="M0.499971 0V105.994" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.86%_1.86%_21.43%_98.14%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="105.994" preserveAspectRatio="none" viewBox="0 0 0.999943 105.994" width="0.999943">
            <path d="M0.499971 0V105.994" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents inset-[2.86%_1.86%_21.43%_10.21%]" data-name="Group">
      <Group20 />
      <Group21 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents inset-[2.86%_1.86%_21.43%_10.21%]" data-name="Group">
      <Group19 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute contents inset-[12.7%_1.86%_36.57%_10.21%]" data-name="Group">
      <div className="absolute inset-[12.7%_1.86%_36.57%_10.21%]" data-name="recharts-line-_r_6_">
        <div className="absolute inset-[-1.39%_-0.15%_-1.17%_0]">
          <svg className="block size-full" fill="none" height="72.8312" preserveAspectRatio="none" viewBox="0 0 379.698 72.8312" width="379.698">
            <path d={svgPaths.p234ebd80} id="recharts-line-_r_6_" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute contents inset-[12.7%_1.86%_36.57%_10.21%]" data-name="Group">
      <Group24 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents inset-[12.7%_1.86%_36.57%_10.21%]" data-name="Group">
      <Group23 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents inset-[78.57%_1.86%_21.43%_10.21%]" data-name="Group">
      <div className="absolute inset-[78.57%_1.86%_21.43%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999943" preserveAspectRatio="none" viewBox="0 0 378.978 0.999943" width="378.978">
            <path d="M0 0.499971H378.978" id="Vector" stroke="#666666" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute contents inset-[78.57%_1.86%_21.43%_10.21%]" data-name="Group">
      <Group26 />
    </div>
  );
}

function Group28() {
  return (
    <div className="absolute contents inset-[10.56%_1.16%_34.43%_9.51%]" data-name="Group">
      <div className="absolute inset-[10.56%_89.09%_85.16%_9.51%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#60A5FA" id="Vector" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[14.34%_81.1%_81.37%_17.51%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#60A5FA" id="Vector" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[17.37%_73.11%_78.34%_25.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#60A5FA" id="Vector" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.4%_65.11%_75.31%_33.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#60A5FA" id="Vector" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[23.43%_57.12%_72.29%_41.49%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#60A5FA" id="Vector" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[27.21%_49.12%_68.5%_49.48%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#60A5FA" id="Vector" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[30.24%_41.13%_65.47%_57.48%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#60A5FA" id="Vector" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[34.03%_33.14%_61.69%_65.47%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#60A5FA" id="Vector" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[40.09%_25.14%_55.63%_73.46%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#60A5FA" id="Vector" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[43.87%_17.15%_51.84%_81.46%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#60A5FA" id="Vector" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[47.66%_9.16%_48.06%_89.45%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#60A5FA" id="Vector" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[61.29%_1.16%_34.43%_97.45%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#60A5FA" id="Vector" stroke="#60A5FA" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group27() {
  return (
    <div className="absolute contents inset-[10.56%_1.16%_34.43%_9.51%]" data-name="Group">
      <Group28 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents inset-[82.42%_86.43%_9.72%_6.85%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_86.43%_9.72%_6.85%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`окт'24`}</p>
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents inset-[82.42%_78.43%_9.72%_14.84%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_78.43%_9.72%_14.84%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`ноя'24`}</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents inset-[82.42%_70.44%_9.72%_22.83%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_70.44%_9.72%_22.83%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`дек'24`}</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents inset-[82.42%_62.44%_9.72%_30.83%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_62.44%_9.72%_30.83%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`янв'25`}</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents inset-[82.42%_46.22%_9.72%_46.58%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_46.22%_9.72%_46.58%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`мар'25`}</p>
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents inset-[82.42%_30.24%_9.72%_62.57%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_30.24%_9.72%_62.57%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`май'25`}</p>
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents inset-[82.42%_14.25%_9.72%_78.56%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_14.25%_9.72%_78.56%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`июл'25`}</p>
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents inset-[82.42%_0.03%_9.72%_93.25%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_0.03%_9.72%_93.25%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`сен'25`}</p>
    </div>
  );
}

function Group30() {
  return (
    <div className="absolute contents inset-[82.42%_0.03%_9.72%_6.85%]" data-name="Group">
      <Group31 />
      <Group32 />
      <Group33 />
      <Group34 />
      <Group35 />
      <Group36 />
      <Group37 />
      <Group38 />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents inset-[74.42%_91.65%_17.72%_6.96%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[74.42%_91.65%_17.72%_6.96%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">0</p>
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents inset-[55.5%_91.65%_36.65%_4.41%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[55.5%_91.65%_36.65%_4.41%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">250</p>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents inset-[36.57%_91.65%_55.57%_4.41%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.57%_91.65%_55.57%_4.41%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">500</p>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents inset-[17.64%_91.65%_74.5%_4.41%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[17.64%_91.65%_74.5%_4.41%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">750</p>
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents inset-[0.68%_91.88%_91.47%_3.02%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.68%_91.88%_91.47%_3.02%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">1000</p>
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents inset-[0.68%_91.65%_17.72%_3.02%]" data-name="Group">
      <Group40 />
      <Group41 />
      <Group42 />
      <Group43 />
      <Group44 />
    </div>
  );
}

function Group29() {
  return (
    <div className="absolute contents inset-[0.68%_0.03%_9.72%_3.02%]" data-name="Group">
      <Group30 />
      <Group39 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[139.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group18 />
      <Group22 />
      <Group25 />
      <Group27 />
      <Group29 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col h-[139.992px] items-start relative shrink-0 w-[430.991px]" data-name="Container">
      <Icon6 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-0" data-name="Container">
      <Container62 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col h-[151.992px] items-start pt-[12px] relative shrink-0 w-[430.562px]" data-name="Container">
      <Container61 />
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[0.723px] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch p-[16px] relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <Container57 />
      <Container60 />
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15.714px] not-italic relative shrink-0 text-[11px] text-black whitespace-nowrap">📈</p>
    </div>
  );
}

function Text46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Динамика просрочки</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[14.286px] not-italic relative shrink-0 text-[#99a1af] text-[10px] whitespace-nowrap">ⓘ</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Container">
      <Text45 />
      <Text46 />
      <Text47 />
    </div>
  );
}

function Text48() {
  return <div className="bg-[#ff8904] h-[4px] relative rounded-[4px] shrink-0 w-[11.999px]" data-name="Text" />;
}

function Text49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[12.857px] not-italic relative shrink-0 text-[#6a7282] text-[9px] whitespace-nowrap">% Просрочки</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Text48 />
      <Text49 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[430.573px]" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents inset-[2.86%_1.86%_21.43%_10.21%]" data-name="Group">
      <div className="absolute inset-[78.57%_1.86%_21.43%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999943" preserveAspectRatio="none" viewBox="0 0 378.978 0.999943" width="378.978">
            <path d="M0 0.499971H378.978" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[40.71%_1.86%_59.29%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999943" preserveAspectRatio="none" viewBox="0 0 378.978 0.999943" width="378.978">
            <path d="M0 0.499971H378.978" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.86%_1.86%_97.14%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999943" preserveAspectRatio="none" viewBox="0 0 378.978 0.999943" width="378.978">
            <path d="M0 0.499971H378.978" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents inset-[2.86%_1.86%_21.43%_10.21%]" data-name="Group">
      <div className="absolute inset-[2.86%_89.79%_21.43%_10.21%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="105.994" preserveAspectRatio="none" viewBox="0 0 0.999943 105.994" width="0.999943">
            <path d="M0.499971 0V105.994" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.86%_73.8%_21.43%_26.2%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="105.994" preserveAspectRatio="none" viewBox="0 0 0.999943 105.994" width="0.999943">
            <path d="M0.499971 0V105.994" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.86%_57.81%_21.43%_42.19%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="105.994" preserveAspectRatio="none" viewBox="0 0 0.999943 105.994" width="0.999943">
            <path d="M0.499971 0V105.994" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.86%_41.83%_21.43%_58.17%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="105.994" preserveAspectRatio="none" viewBox="0 0 0.999943 105.994" width="0.999943">
            <path d="M0.499971 0V105.994" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.86%_25.84%_21.43%_74.16%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="105.994" preserveAspectRatio="none" viewBox="0 0 0.999943 105.994" width="0.999943">
            <path d="M0.499971 0V105.994" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.86%_1.86%_21.43%_98.14%]" data-name="Vector">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" height="105.994" preserveAspectRatio="none" viewBox="0 0 0.999943 105.994" width="0.999943">
            <path d="M0.499971 0V105.994" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents inset-[2.86%_1.86%_21.43%_10.21%]" data-name="Group">
      <Group47 />
      <Group48 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents inset-[2.86%_1.86%_21.43%_10.21%]" data-name="Group">
      <Group46 />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents inset-[12.32%_1.86%_27.11%_10.21%]" data-name="Group">
      <div className="absolute inset-[12.32%_1.86%_27.11%_10.21%]" data-name="recharts-line-_r_7_">
        <div className="absolute inset-[-1.03%_0_-1.18%_-0.13%]">
          <svg className="block size-full" fill="none" height="86.6655" preserveAspectRatio="none" viewBox="0 0 379.542 86.6655" width="379.542">
            <path d={svgPaths.p12e00980} id="recharts-line-_r_7_" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents inset-[12.32%_1.86%_27.11%_10.21%]" data-name="Group">
      <Group51 />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents inset-[12.32%_1.86%_27.11%_10.21%]" data-name="Group">
      <Group50 />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents inset-[78.57%_1.86%_21.43%_10.21%]" data-name="Group">
      <div className="absolute inset-[78.57%_1.86%_21.43%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999943" preserveAspectRatio="none" viewBox="0 0 378.978 0.999943" width="378.978">
            <path d="M0 0.499971H378.978" id="Vector" stroke="#666666" strokeWidth="0.999943" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents inset-[78.57%_1.86%_21.43%_10.21%]" data-name="Group">
      <Group53 />
    </div>
  );
}

function Group55() {
  return (
    <div className="absolute contents inset-[10.18%_1.16%_24.96%_9.51%]" data-name="Group">
      <div className="absolute inset-[10.18%_89.09%_85.54%_9.51%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#FB923C" id="Vector" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[23.43%_81.1%_72.29%_17.51%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#FB923C" id="Vector" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[34.79%_73.11%_60.93%_25.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#FB923C" id="Vector" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[42.36%_65.11%_53.36%_33.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p296f3b80} fill="#FB923C" id="Vector" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[48.04%_57.12%_47.68%_41.49%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#FB923C" id="Vector" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[53.71%_49.12%_42%_49.48%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#FB923C" id="Vector" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[57.5%_41.13%_38.21%_57.48%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#FB923C" id="Vector" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[61.29%_33.14%_34.43%_65.47%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#FB923C" id="Vector" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.18%_25.14%_32.54%_73.46%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#FB923C" id="Vector" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[66.96%_17.15%_28.75%_81.46%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#FB923C" id="Vector" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[68.86%_9.16%_26.86%_89.45%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#FB923C" id="Vector" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.75%_1.16%_24.96%_97.45%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" height="7.99989" preserveAspectRatio="none" viewBox="0 0 7.99989 7.99989" width="7.99989">
            <path d={svgPaths.p1589e300} fill="#FB923C" id="Vector" stroke="#FB923C" strokeWidth="1.99989" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents inset-[10.18%_1.16%_24.96%_9.51%]" data-name="Group">
      <Group55 />
    </div>
  );
}

function Group58() {
  return (
    <div className="absolute contents inset-[82.42%_86.43%_9.72%_6.85%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_86.43%_9.72%_6.85%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`дек'24`}</p>
    </div>
  );
}

function Group59() {
  return (
    <div className="absolute contents inset-[82.42%_70.55%_9.72%_22.49%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_70.55%_9.72%_22.49%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`фев'25`}</p>
    </div>
  );
}

function Group60() {
  return (
    <div className="absolute contents inset-[82.42%_54.45%_9.72%_38.82%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_54.45%_9.72%_38.82%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`апр'25`}</p>
    </div>
  );
}

function Group61() {
  return (
    <div className="absolute contents inset-[82.42%_38.23%_9.72%_54.58%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_38.23%_9.72%_54.58%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`июн'25`}</p>
    </div>
  );
}

function Group62() {
  return (
    <div className="absolute contents inset-[82.42%_22.82%_9.72%_70.68%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_22.82%_9.72%_70.68%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`авг'25`}</p>
    </div>
  );
}

function Group63() {
  return (
    <div className="absolute contents inset-[82.42%_14.48%_9.72%_78.79%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_14.48%_9.72%_78.79%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`сен'25`}</p>
    </div>
  );
}

function Group64() {
  return (
    <div className="absolute contents inset-[82.42%_0.02%_9.72%_93.25%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[82.42%_0.02%_9.72%_93.25%] leading-[normal] not-italic text-[#666] text-[8.999px] text-center whitespace-nowrap">{`ноя'25`}</p>
    </div>
  );
}

function Group57() {
  return (
    <div className="absolute contents inset-[82.42%_0.02%_9.72%_6.85%]" data-name="Group">
      <Group58 />
      <Group59 />
      <Group60 />
      <Group61 />
      <Group62 />
      <Group63 />
      <Group64 />
    </div>
  );
}

function Group66() {
  return (
    <div className="absolute contents inset-[74.42%_91.65%_17.72%_5.11%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[74.42%_91.65%_17.72%_5.11%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">0.2</p>
    </div>
  );
}

function Group67() {
  return (
    <div className="absolute contents inset-[55.5%_91.65%_36.65%_5.11%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[55.5%_91.65%_36.65%_5.11%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">0.3</p>
    </div>
  );
}

function Group68() {
  return (
    <div className="absolute contents inset-[36.57%_91.65%_55.57%_5.11%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.57%_91.65%_55.57%_5.11%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">0.4</p>
    </div>
  );
}

function Group69() {
  return (
    <div className="absolute contents inset-[17.64%_91.65%_74.5%_5.11%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[17.64%_91.65%_74.5%_5.11%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">0.5</p>
    </div>
  );
}

function Group70() {
  return (
    <div className="absolute contents inset-[0.68%_91.65%_91.47%_5.11%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.68%_91.65%_91.47%_5.11%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">0.6</p>
    </div>
  );
}

function Group65() {
  return (
    <div className="absolute contents inset-[0.68%_91.65%_17.72%_5.11%]" data-name="Group">
      <Group66 />
      <Group67 />
      <Group68 />
      <Group69 />
      <Group70 />
    </div>
  );
}

function Group56() {
  return (
    <div className="absolute contents inset-[0.68%_0.02%_9.72%_5.11%]" data-name="Group">
      <Group57 />
      <Group65 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[139.992px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group45 />
      <Group49 />
      <Group52 />
      <Group54 />
      <Group56 />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col h-[139.992px] items-start relative shrink-0 w-[430.991px]" data-name="Container">
      <Icon7 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-0" data-name="Container">
      <Container69 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col h-[151.992px] items-start pt-[12px] relative shrink-0 w-[430.573px]" data-name="Container">
      <Container68 />
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[0.723px] border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch p-[16px] relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <Container64 />
      <Container67 />
    </div>
  );
}

function Container55() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[__464.01px_464.02px] grid-rows-[_201.43px] relative shrink-0 w-[944.023px]" data-name="Container">
      <Container56 />
      <Container63 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Container:margin">
      <Container55 />
    </div>
  );
}

function Text50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15.714px] not-italic relative shrink-0 text-[11px] text-black whitespace-nowrap">📊</p>
    </div>
  );
}

function Text51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Топ департаментов по просрочке</p>
    </div>
  );
}

function Text52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[14.286px] not-italic relative shrink-0 text-[#99a1af] text-[10px] whitespace-nowrap">ⓘ</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[430.562px]" data-name="Container">
      <Text50 />
      <Text51 />
      <Text52 />
    </div>
  );
}

function Group73() {
  return (
    <div className="absolute contents inset-[2.5%_1.86%_43.75%_10.21%]" data-name="Group">
      <div className="absolute inset-[56.25%_1.86%_43.75%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999937" preserveAspectRatio="none" viewBox="0 0 378.976 0.999937" width="378.976">
            <path d="M0 0.499969H378.976" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.38%_1.86%_70.62%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999937" preserveAspectRatio="none" viewBox="0 0 378.976 0.999937" width="378.976">
            <path d="M0 0.499969H378.976" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.5%_1.86%_97.5%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999937" preserveAspectRatio="none" viewBox="0 0 378.976 0.999937" width="378.976">
            <path d="M0 0.499969H378.976" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group72() {
  return (
    <div className="absolute contents inset-[2.5%_1.86%_43.75%_10.21%]" data-name="Group">
      <Group73 />
    </div>
  );
}

function Group71() {
  return (
    <div className="absolute contents inset-[2.5%_1.86%_43.75%_10.21%]" data-name="Group">
      <Group72 />
    </div>
  );
}

function Group78() {
  return (
    <div className="absolute contents inset-[2.5%_81.95%_43.75%_11.09%]" data-name="Group">
      <div className="absolute inset-[2.5%_81.95%_43.75%_11.09%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="85.9946" preserveAspectRatio="none" viewBox="0 0 29.9981 85.9946" width="29.9981">
          <path d={svgPaths.p1fbc9e40} fill="#60A5FA" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group77() {
  return (
    <div className="absolute contents inset-[2.5%_81.95%_43.75%_11.09%]" data-name="Group">
      <Group78 />
    </div>
  );
}

function Group80() {
  return (
    <div className="absolute contents inset-[9.22%_73.16%_43.75%_19.88%]" data-name="Group">
      <div className="absolute inset-[9.22%_73.16%_43.75%_19.88%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="75.2453" preserveAspectRatio="none" viewBox="0 0 29.9981 75.2453" width="29.9981">
          <path d={svgPaths.p1885d100} fill="#60A5FA" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group79() {
  return (
    <div className="absolute contents inset-[9.22%_73.16%_43.75%_19.88%]" data-name="Group">
      <Group80 />
    </div>
  );
}

function Group82() {
  return (
    <div className="absolute contents inset-[15.94%_64.36%_43.75%_28.68%]" data-name="Group">
      <div className="absolute inset-[15.94%_64.36%_43.75%_28.68%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="64.496" preserveAspectRatio="none" viewBox="0 0 29.9981 64.496" width="29.9981">
          <path d={svgPaths.p3c68080} fill="#60A5FA" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group81() {
  return (
    <div className="absolute contents inset-[15.94%_64.36%_43.75%_28.68%]" data-name="Group">
      <Group82 />
    </div>
  );
}

function Group84() {
  return (
    <div className="absolute contents inset-[22.66%_55.57%_43.75%_37.47%]" data-name="Group">
      <div className="absolute inset-[22.66%_55.57%_43.75%_37.47%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="53.7466" preserveAspectRatio="none" viewBox="0 0 29.9981 53.7466" width="29.9981">
          <path d={svgPaths.p3898e980} fill="#60A5FA" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group83() {
  return (
    <div className="absolute contents inset-[22.66%_55.57%_43.75%_37.47%]" data-name="Group">
      <Group84 />
    </div>
  );
}

function Group86() {
  return (
    <div className="absolute contents inset-[27.7%_46.78%_43.75%_46.26%]" data-name="Group">
      <div className="absolute inset-[27.7%_46.78%_43.75%_46.26%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="45.6846" preserveAspectRatio="none" viewBox="0 0 29.9981 45.6846" width="29.9981">
          <path d={svgPaths.p3a93cb80} fill="#60A5FA" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group85() {
  return (
    <div className="absolute contents inset-[27.7%_46.78%_43.75%_46.26%]" data-name="Group">
      <Group86 />
    </div>
  );
}

function Group88() {
  return (
    <div className="absolute contents inset-[31.89%_37.98%_43.75%_55.06%]" data-name="Group">
      <div className="absolute inset-[31.89%_37.98%_43.75%_55.06%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="38.9663" preserveAspectRatio="none" viewBox="0 0 29.9981 38.9663" width="29.9981">
          <path d={svgPaths.p32345a80} fill="#60A5FA" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group87() {
  return (
    <div className="absolute contents inset-[31.89%_37.98%_43.75%_55.06%]" data-name="Group">
      <Group88 />
    </div>
  );
}

function Group90() {
  return (
    <div className="absolute contents inset-[36.09%_29.19%_43.75%_63.85%]" data-name="Group">
      <div className="absolute inset-[36.09%_29.19%_43.75%_63.85%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="32.248" preserveAspectRatio="none" viewBox="0 0 29.9981 32.248" width="29.9981">
          <path d={svgPaths.p333d4d80} fill="#60A5FA" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group89() {
  return (
    <div className="absolute contents inset-[36.09%_29.19%_43.75%_63.85%]" data-name="Group">
      <Group90 />
    </div>
  );
}

function Group92() {
  return (
    <div className="absolute contents inset-[40.29%_20.4%_43.75%_72.64%]" data-name="Group">
      <div className="absolute inset-[40.29%_20.4%_43.75%_72.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="25.5296" preserveAspectRatio="none" viewBox="0 0 29.9981 25.5296" width="29.9981">
          <path d={svgPaths.pb560c80} fill="#60A5FA" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group91() {
  return (
    <div className="absolute contents inset-[40.29%_20.4%_43.75%_72.64%]" data-name="Group">
      <Group92 />
    </div>
  );
}

function Group94() {
  return (
    <div className="absolute contents inset-[42.81%_11.6%_43.75%_81.43%]" data-name="Group">
      <div className="absolute inset-[42.81%_11.6%_43.75%_81.43%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="21.4987" preserveAspectRatio="none" viewBox="0 0 29.9981 21.4987" width="29.9981">
          <path d={svgPaths.p34ac0e80} fill="#60A5FA" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group93() {
  return (
    <div className="absolute contents inset-[42.81%_11.6%_43.75%_81.43%]" data-name="Group">
      <Group94 />
    </div>
  );
}

function Group96() {
  return (
    <div className="absolute contents inset-[45.33%_2.81%_43.75%_90.23%]" data-name="Group">
      <div className="absolute inset-[45.33%_2.81%_43.75%_90.23%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="17.4676" preserveAspectRatio="none" viewBox="0 0 29.9981 17.4676" width="29.9981">
          <path d={svgPaths.pab2ae00} fill="#60A5FA" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group95() {
  return (
    <div className="absolute contents inset-[45.33%_2.81%_43.75%_90.23%]" data-name="Group">
      <Group96 />
    </div>
  );
}

function Group76() {
  return (
    <div className="absolute contents inset-[2.5%_2.81%_43.75%_11.09%]" data-name="Group">
      <Group77 />
      <Group79 />
      <Group81 />
      <Group83 />
      <Group85 />
      <Group87 />
      <Group89 />
      <Group91 />
      <Group93 />
      <Group95 />
    </div>
  );
}

function Group75() {
  return (
    <div className="absolute contents inset-[2.5%_2.81%_43.75%_11.09%]" data-name="Group">
      <Group76 />
    </div>
  );
}

function RechartsBarR() {
  return (
    <div className="absolute contents inset-[2.5%_2.81%_43.75%_11.09%]" data-name="recharts-bar-_r_8_">
      <Group75 />
    </div>
  );
}

function Group74() {
  return (
    <div className="absolute contents inset-[2.5%_2.81%_43.75%_11.09%]" data-name="Group">
      <RechartsBarR />
    </div>
  );
}

function Group98() {
  return (
    <div className="absolute contents inset-[56.25%_1.86%_43.75%_10.21%]" data-name="Group">
      <div className="absolute inset-[56.25%_1.86%_43.75%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999937" preserveAspectRatio="none" viewBox="0 0 378.976 0.999937" width="378.976">
            <path d="M0 0.499969H378.976" id="Vector" stroke="#666666" strokeWidth="0.999937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group97() {
  return (
    <div className="absolute contents inset-[56.25%_1.86%_43.75%_10.21%]" data-name="Group">
      <Group98 />
    </div>
  );
}

function Group101() {
  return (
    <div className="absolute contents inset-[60.42%_84.56%_17.25%_4.99%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_84.56%_17.25%_4.99%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(12.7306cqw,22.9305cqh)] w-[hypot(87.2694cqw,-77.0695cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Канцелярия</p>
        </div>
      </div>
    </div>
  );
}

function Group102() {
  return (
    <div className="absolute contents inset-[60.42%_75.77%_19.76%_15.11%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_75.77%_19.76%_15.11%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(14.587cqw,25.8341cqh)] w-[hypot(85.413cqw,-74.1659cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Юр. отдел</p>
        </div>
      </div>
    </div>
  );
}

function Group103() {
  return (
    <div className="absolute contents inset-[60.42%_66.97%_21.55%_24.85%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_66.97%_21.55%_24.85%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(16.2831cqw,28.4031cqh)] w-[hypot(83.7169cqw,-71.5969cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Финансы</p>
        </div>
      </div>
    </div>
  );
}

function Group104() {
  return (
    <div className="absolute contents inset-[60.42%_58.18%_19.4%_32.51%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_58.18%_19.4%_32.51%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(14.2893cqw,25.3751cqh)] w-[hypot(85.7107cqw,-74.6249cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Аналитика</p>
        </div>
      </div>
    </div>
  );
}

function Group105() {
  return (
    <div className="absolute contents inset-[60.42%_49.39%_21.2%_42.25%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_49.39%_21.2%_42.25%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(15.9131cqw,27.8492cqh)] w-[hypot(84.0869cqw,-72.1508cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">ИТ-отдел</p>
        </div>
      </div>
    </div>
  );
}

function Group106() {
  return (
    <div className="absolute contents inset-[60.42%_40.59%_16.53%_48.57%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_40.59%_16.53%_48.57%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(12.2839cqw,22.2171cqh)] w-[hypot(87.7161cqw,-77.7829cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Бухгалтерия</p>
        </div>
      </div>
    </div>
  );
}

function Group107() {
  return (
    <div className="absolute contents inset-[60.42%_31.8%_25.14%_61.93%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_31.8%_25.14%_61.93%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(21.2171cqw,35.4542cqh)] w-[hypot(78.7829cqw,-64.5458cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Кадры</p>
        </div>
      </div>
    </div>
  );
}

function Group108() {
  return (
    <div className="absolute contents inset-[60.42%_23.01%_19.4%_67.68%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_23.01%_19.4%_67.68%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(14.2893cqw,25.3751cqh)] w-[hypot(85.7107cqw,-74.6249cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Логистика</p>
        </div>
      </div>
    </div>
  );
}

function Group109() {
  return (
    <div className="absolute contents inset-[60.42%_14.22%_19.04%_76.28%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_14.22%_19.04%_76.28%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(14.0036cqw,24.9321cqh)] w-[hypot(85.9964cqw,-75.0679cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Маркетинг</p>
        </div>
      </div>
    </div>
  );
}

function Group110() {
  return (
    <div className="absolute contents inset-[60.42%_5.42%_18.33%_84.69%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_5.42%_18.33%_84.69%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(13.465cqw,24.091cqh)] w-[hypot(86.535cqw,-75.909cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Снабжение</p>
        </div>
      </div>
    </div>
  );
}

function Group100() {
  return (
    <div className="absolute contents inset-[60.42%_5.42%_16.53%_4.99%]" data-name="Group">
      <Group101 />
      <Group102 />
      <Group103 />
      <Group104 />
      <Group105 />
      <Group106 />
      <Group107 />
      <Group108 />
      <Group109 />
      <Group110 />
    </div>
  );
}

function Group112() {
  return (
    <div className="absolute contents inset-[52.62%_91.65%_40.5%_6.96%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[52.62%_91.65%_40.5%_6.96%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">0</p>
    </div>
  );
}

function Group113() {
  return (
    <div className="absolute contents inset-[39.18%_91.65%_53.94%_5.57%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[39.18%_91.65%_53.94%_5.57%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">80</p>
    </div>
  );
}

function Group114() {
  return (
    <div className="absolute contents inset-[25.75%_91.88%_67.38%_4.41%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[25.75%_91.88%_67.38%_4.41%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">160</p>
    </div>
  );
}

function Group115() {
  return (
    <div className="absolute contents inset-[12.31%_91.88%_80.82%_4.18%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[12.31%_91.88%_80.82%_4.18%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">240</p>
    </div>
  );
}

function Group116() {
  return (
    <div className="absolute contents inset-[0.59%_91.88%_92.53%_4.18%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.59%_91.88%_92.53%_4.18%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">320</p>
    </div>
  );
}

function Group111() {
  return (
    <div className="absolute contents inset-[0.59%_91.65%_40.5%_4.18%]" data-name="Group">
      <Group112 />
      <Group113 />
      <Group114 />
      <Group115 />
      <Group116 />
    </div>
  );
}

function Group99() {
  return (
    <div className="absolute contents inset-[0.59%_5.42%_16.53%_4.18%]" data-name="Group">
      <Group100 />
      <Group111 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[159.99px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group71 />
      <Group74 />
      <Group97 />
      <Group99 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col h-[159.99px] items-start relative shrink-0 w-[430.991px]" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-0" data-name="Container">
      <Container75 />
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col h-[171.99px] items-start pt-[12px] relative shrink-0 w-[430.562px]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[0.723px] border-solid col-1 content-stretch flex flex-col items-start justify-self-stretch p-[16px] relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Text53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[15.714px] not-italic relative shrink-0 text-[11px] text-black whitespace-nowrap">👤</p>
    </div>
  );
}

function Text54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#364153] text-[12px] whitespace-nowrap">Топ исполнителей по просрочке</p>
    </div>
  );
}

function Text55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Inter:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] font-normal leading-[14.286px] not-italic relative shrink-0 text-[#99a1af] text-[10px] whitespace-nowrap">ⓘ</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[430.573px]" data-name="Container">
      <Text53 />
      <Text54 />
      <Text55 />
    </div>
  );
}

function Group119() {
  return (
    <div className="absolute contents inset-[2.5%_1.86%_43.75%_10.21%]" data-name="Group">
      <div className="absolute inset-[56.25%_1.86%_43.75%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999937" preserveAspectRatio="none" viewBox="0 0 378.976 0.999937" width="378.976">
            <path d="M0 0.499969H378.976" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.38%_1.86%_70.62%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999937" preserveAspectRatio="none" viewBox="0 0 378.976 0.999937" width="378.976">
            <path d="M0 0.499969H378.976" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999937" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[2.5%_1.86%_97.5%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999937" preserveAspectRatio="none" viewBox="0 0 378.976 0.999937" width="378.976">
            <path d="M0 0.499969H378.976" id="Vector" stroke="#F0F0F0" strokeDasharray="3 3" strokeWidth="0.999937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group118() {
  return (
    <div className="absolute contents inset-[2.5%_1.86%_43.75%_10.21%]" data-name="Group">
      <Group119 />
    </div>
  );
}

function Group117() {
  return (
    <div className="absolute contents inset-[2.5%_1.86%_43.75%_10.21%]" data-name="Group">
      <Group118 />
    </div>
  );
}

function Group124() {
  return (
    <div className="absolute contents inset-[7.54%_81.95%_43.75%_11.09%]" data-name="Group">
      <div className="absolute inset-[7.54%_81.95%_43.75%_11.09%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="77.9326" preserveAspectRatio="none" viewBox="0 0 29.9981 77.9326" width="29.9981">
          <path d={svgPaths.p1d1b1400} fill="#818CF8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group123() {
  return (
    <div className="absolute contents inset-[7.54%_81.95%_43.75%_11.09%]" data-name="Group">
      <Group124 />
    </div>
  );
}

function Group126() {
  return (
    <div className="absolute contents inset-[15.94%_73.16%_43.75%_19.88%]" data-name="Group">
      <div className="absolute inset-[15.94%_73.16%_43.75%_19.88%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="64.496" preserveAspectRatio="none" viewBox="0 0 29.9981 64.496" width="29.9981">
          <path d={svgPaths.p208a4480} fill="#818CF8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group125() {
  return (
    <div className="absolute contents inset-[15.94%_73.16%_43.75%_19.88%]" data-name="Group">
      <Group126 />
    </div>
  );
}

function Group128() {
  return (
    <div className="absolute contents inset-[23.33%_64.36%_43.75%_28.68%]" data-name="Group">
      <div className="absolute inset-[23.33%_64.36%_43.75%_28.68%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="52.6717" preserveAspectRatio="none" viewBox="0 0 29.9981 52.6717" width="29.9981">
          <path d={svgPaths.p2f7f2a00} fill="#818CF8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group127() {
  return (
    <div className="absolute contents inset-[23.33%_64.36%_43.75%_28.68%]" data-name="Group">
      <Group128 />
    </div>
  );
}

function Group130() {
  return (
    <div className="absolute contents inset-[27.02%_55.57%_43.75%_37.47%]" data-name="Group">
      <div className="absolute inset-[27.02%_55.57%_43.75%_37.47%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="46.7596" preserveAspectRatio="none" viewBox="0 0 29.9981 46.7596" width="29.9981">
          <path d={svgPaths.p17705df0} fill="#818CF8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group129() {
  return (
    <div className="absolute contents inset-[27.02%_55.57%_43.75%_37.47%]" data-name="Group">
      <Group130 />
    </div>
  );
}

function Group132() {
  return (
    <div className="absolute contents inset-[31.39%_46.78%_43.75%_46.26%]" data-name="Group">
      <div className="absolute inset-[31.39%_46.78%_43.75%_46.26%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="39.7725" preserveAspectRatio="none" viewBox="0 0 29.9981 39.7725" width="29.9981">
          <path d={svgPaths.p24060800} fill="#818CF8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group131() {
  return (
    <div className="absolute contents inset-[31.39%_46.78%_43.75%_46.26%]" data-name="Group">
      <Group132 />
    </div>
  );
}

function Group134() {
  return (
    <div className="absolute contents inset-[35.09%_37.98%_43.75%_55.06%]" data-name="Group">
      <div className="absolute inset-[35.09%_37.98%_43.75%_55.06%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="33.8604" preserveAspectRatio="none" viewBox="0 0 29.9981 33.8604" width="29.9981">
          <path d={svgPaths.p2d459880} fill="#818CF8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group133() {
  return (
    <div className="absolute contents inset-[35.09%_37.98%_43.75%_55.06%]" data-name="Group">
      <Group134 />
    </div>
  );
}

function Group136() {
  return (
    <div className="absolute contents inset-[38.11%_29.19%_43.75%_63.85%]" data-name="Group">
      <div className="absolute inset-[38.11%_29.19%_43.75%_63.85%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="29.0232" preserveAspectRatio="none" viewBox="0 0 29.9981 29.0232" width="29.9981">
          <path d={svgPaths.p9796800} fill="#818CF8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group135() {
  return (
    <div className="absolute contents inset-[38.11%_29.19%_43.75%_63.85%]" data-name="Group">
      <Group136 />
    </div>
  );
}

function Group138() {
  return (
    <div className="absolute contents inset-[42.14%_20.4%_43.75%_72.64%]" data-name="Group">
      <div className="absolute inset-[42.14%_20.4%_43.75%_72.64%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="22.5736" preserveAspectRatio="none" viewBox="0 0 29.9981 22.5736" width="29.9981">
          <path d={svgPaths.p247d9f30} fill="#818CF8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group137() {
  return (
    <div className="absolute contents inset-[42.14%_20.4%_43.75%_72.64%]" data-name="Group">
      <Group138 />
    </div>
  );
}

function Group140() {
  return (
    <div className="absolute contents inset-[43.48%_11.6%_43.75%_81.43%]" data-name="Group">
      <div className="absolute inset-[43.48%_11.6%_43.75%_81.43%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="20.4237" preserveAspectRatio="none" viewBox="0 0 29.9981 20.4237" width="29.9981">
          <path d={svgPaths.p39ace680} fill="#818CF8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group139() {
  return (
    <div className="absolute contents inset-[43.48%_11.6%_43.75%_81.43%]" data-name="Group">
      <Group140 />
    </div>
  );
}

function Group142() {
  return (
    <div className="absolute contents inset-[45.84%_2.81%_43.75%_90.23%]" data-name="Group">
      <div className="absolute inset-[45.84%_2.81%_43.75%_90.23%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" height="16.6615" preserveAspectRatio="none" viewBox="0 0 29.9981 16.6615" width="29.9981">
          <path d={svgPaths.p27f17780} fill="#818CF8" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group141() {
  return (
    <div className="absolute contents inset-[45.84%_2.81%_43.75%_90.23%]" data-name="Group">
      <Group142 />
    </div>
  );
}

function Group122() {
  return (
    <div className="absolute contents inset-[7.54%_2.81%_43.75%_11.09%]" data-name="Group">
      <Group123 />
      <Group125 />
      <Group127 />
      <Group129 />
      <Group131 />
      <Group133 />
      <Group135 />
      <Group137 />
      <Group139 />
      <Group141 />
    </div>
  );
}

function Group121() {
  return (
    <div className="absolute contents inset-[7.54%_2.81%_43.75%_11.09%]" data-name="Group">
      <Group122 />
    </div>
  );
}

function RechartsBarR1() {
  return (
    <div className="absolute contents inset-[7.54%_2.81%_43.75%_11.09%]" data-name="recharts-bar-_r_9_">
      <Group121 />
    </div>
  );
}

function Group120() {
  return (
    <div className="absolute contents inset-[7.54%_2.81%_43.75%_11.09%]" data-name="Group">
      <RechartsBarR1 />
    </div>
  );
}

function Group144() {
  return (
    <div className="absolute contents inset-[56.25%_1.86%_43.75%_10.21%]" data-name="Group">
      <div className="absolute inset-[56.25%_1.86%_43.75%_10.21%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" height="0.999937" preserveAspectRatio="none" viewBox="0 0 378.976 0.999937" width="378.976">
            <path d="M0 0.499969H378.976" id="Vector" stroke="#666666" strokeWidth="0.999937" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group143() {
  return (
    <div className="absolute contents inset-[56.25%_1.86%_43.75%_10.21%]" data-name="Group">
      <Group144 />
    </div>
  );
}

function Group147() {
  return (
    <div className="absolute contents inset-[60.42%_84.56%_17.25%_4.99%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_84.56%_17.25%_4.99%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(12.7306cqw,22.9305cqh)] w-[hypot(87.2694cqw,-77.0695cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Иванов И.И.</p>
        </div>
      </div>
    </div>
  );
}

function Group148() {
  return (
    <div className="absolute contents inset-[60.42%_75.77%_16.53%_13.4%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_75.77%_16.53%_13.4%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(12.2839cqw,22.2171cqh)] w-[hypot(87.7161cqw,-77.7829cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Дулатов Е.А.</p>
        </div>
      </div>
    </div>
  );
}

function Group149() {
  return (
    <div className="absolute contents inset-[60.42%_66.97%_14.74%_21.24%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_66.97%_14.74%_21.24%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(11.2933cqw,20.6137cqh)] w-[hypot(88.7067cqw,-79.3863cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Сейткали С.Е.</p>
        </div>
      </div>
    </div>
  );
}

function Group150() {
  return (
    <div className="absolute contents inset-[60.42%_58.18%_12.23%_28.7%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_58.18%_12.23%_28.7%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(10.1476cqw,18.7221cqh)] w-[hypot(89.8524cqw,-81.2779cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Абдуллаев М.К.</p>
        </div>
      </div>
    </div>
  );
}

function Group151() {
  return (
    <div className="absolute contents inset-[60.42%_49.39%_13.67%_38.26%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_49.39%_13.67%_38.26%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(10.7721cqw,19.7581cqh)] w-[hypot(89.2279cqw,-80.2419cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Байжанов А.Н.</p>
        </div>
      </div>
    </div>
  );
}

function Group152() {
  return (
    <div className="absolute contents inset-[60.42%_40.59%_14.38%_47.43%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_40.59%_14.38%_47.43%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(11.114cqw,20.3204cqh)] w-[hypot(88.886cqw,-79.6796cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Шевченко Г.В.</p>
        </div>
      </div>
    </div>
  );
}

function Group153() {
  return (
    <div className="absolute contents inset-[60.42%_31.8%_16.89%_57.55%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_31.8%_16.89%_57.55%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(12.5032cqw,22.5682cqh)] w-[hypot(87.4968cqw,-77.4318cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Куспаев Т.Б.</p>
        </div>
      </div>
    </div>
  );
}

function Group154() {
  return (
    <div className="absolute contents inset-[60.42%_23.01%_18.33%_67.11%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_23.01%_18.33%_67.11%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(13.465cqw,24.091cqh)] w-[hypot(86.535cqw,-75.909cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Исахов Р.Е.</p>
        </div>
      </div>
    </div>
  );
}

function Group155() {
  return (
    <div className="absolute contents inset-[60.42%_14.22%_13.67%_73.43%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_14.22%_13.67%_73.43%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(10.7721cqw,19.7581cqh)] w-[hypot(89.2279cqw,-80.2419cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Вырупаев М.А.</p>
        </div>
      </div>
    </div>
  );
}

function Group156() {
  return (
    <div className="absolute contents inset-[60.42%_5.42%_23.35%_87.35%]" data-name="Group">
      <div className="absolute flex inset-[60.42%_5.42%_23.35%_87.35%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-35 flex-none h-[hypot(18.4255cqw,31.5393cqh)] w-[hypot(81.5745cqw,-68.4607cqh)]">
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[#666] text-[7.999px] text-right whitespace-nowrap">Пак Т.Е.</p>
        </div>
      </div>
    </div>
  );
}

function Group146() {
  return (
    <div className="absolute contents inset-[60.42%_5.42%_12.23%_4.99%]" data-name="Group">
      <Group147 />
      <Group148 />
      <Group149 />
      <Group150 />
      <Group151 />
      <Group152 />
      <Group153 />
      <Group154 />
      <Group155 />
      <Group156 />
    </div>
  );
}

function Group158() {
  return (
    <div className="absolute contents inset-[52.62%_91.65%_40.5%_6.96%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[52.62%_91.65%_40.5%_6.96%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">0</p>
    </div>
  );
}

function Group159() {
  return (
    <div className="absolute contents inset-[39.18%_91.65%_53.94%_5.57%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[39.18%_91.65%_53.94%_5.57%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">40</p>
    </div>
  );
}

function Group160() {
  return (
    <div className="absolute contents inset-[25.75%_91.65%_67.38%_5.57%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[25.75%_91.65%_67.38%_5.57%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">80</p>
    </div>
  );
}

function Group161() {
  return (
    <div className="absolute contents inset-[12.31%_91.88%_80.82%_4.41%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[12.31%_91.88%_80.82%_4.41%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">120</p>
    </div>
  );
}

function Group162() {
  return (
    <div className="absolute contents inset-[0.59%_91.88%_92.53%_4.41%]" data-name="Group">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal inset-[0.59%_91.88%_92.53%_4.41%] leading-[normal] not-italic text-[#666] text-[8.999px] text-right whitespace-nowrap">160</p>
    </div>
  );
}

function Group157() {
  return (
    <div className="absolute contents inset-[0.59%_91.65%_40.5%_4.41%]" data-name="Group">
      <Group158 />
      <Group159 />
      <Group160 />
      <Group161 />
      <Group162 />
    </div>
  );
}

function Group145() {
  return (
    <div className="absolute contents inset-[0.59%_5.42%_12.23%_4.41%]" data-name="Group">
      <Group146 />
      <Group157 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[159.99px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group117 />
      <Group120 />
      <Group143 />
      <Group145 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col h-[159.99px] items-start relative shrink-0 w-[430.991px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-0" data-name="Container">
      <Container80 />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col h-[171.99px] items-start pt-[12px] relative shrink-0 w-[430.573px]" data-name="Container">
      <Container79 />
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-white border-[#e5e7eb] border-[0.723px] border-solid col-2 content-stretch flex flex-col items-start justify-self-stretch p-[16px] relative rounded-[4px] row-1 self-stretch shrink-0" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container70() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[__464.01px_464.02px] grid-rows-[_221.43px] relative shrink-0 w-[944.023px]" data-name="Container">
      <Container71 />
      <Container76 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Container:margin">
      <Container70 />
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white content-stretch flex flex-[944.021_0_0] flex-col h-full items-start min-w-px overflow-clip p-[16px] relative rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Container">
      <Container27 />
      <ContainerMargin3 />
      <ContainerMargin4 />
      <ContainerMargin5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1308.013_0_0] gap-[12px] h-full items-start min-w-px overflow-clip relative" data-name="Container">
      <Container11 />
      <Container26 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[723px] items-start overflow-clip pt-[12px] px-[12px] relative shrink-0 w-full" data-name="Container">
      <Sidebar />
      <Container10 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#0d1117] content-stretch flex flex-col h-[830.143px] items-start relative shrink-0 w-[1520px]" data-name="App">
      <HeaderMargin />
      <Container />
      <Container1 />
    </div>
  );
}

function Group163() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[word-break:break-word] col-1 font-['Inter:Regular',sans-serif] font-normal ml-0 mt-0 not-italic relative row-1 text-[20px] text-black w-[1233px] whitespace-pre-wrap">
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
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Модуль 5">
      <App />
      <Group163 />
    </div>
  );
}