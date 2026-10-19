import { useEffect, useRef, useState } from "react";

const assetPathPrefix = "/assets";
const imgPenOriginal1 = `${assetPathPrefix}/3747a.png`;
const img = `${assetPathPrefix}/b7289.svg`;
const imgVector = `${assetPathPrefix}/dfd4e.svg`;
const imgVector1 = `${assetPathPrefix}/562e5.svg`;
const imgVector2 = `${assetPathPrefix}/b728e.svg`;
const imgVector3 = `${assetPathPrefix}/e7aaa.svg`;
const imgVector4 = `${assetPathPrefix}/f5e4e.svg`;
const imgVector5 = `${assetPathPrefix}/49237.svg`;
const imgVector6 = `${assetPathPrefix}/066ab.svg`;
const imgVector7 = `${assetPathPrefix}/a6a60.svg`;
const imgVector8 = `${assetPathPrefix}/6af90.svg`;
const imgVector9 = `${assetPathPrefix}/1d2c0.svg`;
const imgVector10 = `${assetPathPrefix}/473ce.svg`;
const imgVector11 = `${assetPathPrefix}/feef1.svg`;
const imgVector12 = `${assetPathPrefix}/9bca9.svg`;
const imgVector13 = `${assetPathPrefix}/7dcd5.svg`;
const imgVector14 = `${assetPathPrefix}/ad747.svg`;
const imgVector15 = `${assetPathPrefix}/71b46.svg`;
const imgVector16 = `${assetPathPrefix}/600a3.svg`;
const imgVector17 = `${assetPathPrefix}/629d3.svg`;
const imgVector18 = `${assetPathPrefix}/fff33.svg`;
const imgVector19 = `${assetPathPrefix}/05b02.svg`;
const imgVector20 = `${assetPathPrefix}/76be6.svg`;
const imgVector21 = `${assetPathPrefix}/73240.svg`;
const imgVector22 = `${assetPathPrefix}/0a28b.svg`;
const imgVector23 = `${assetPathPrefix}/34f12.svg`;
const imgVector24 = `${assetPathPrefix}/a30e2.svg`;
const imgVector25 = `${assetPathPrefix}/b086c.svg`;
const imgVector26 = `${assetPathPrefix}/5ad25.svg`;
const imgVector27 = `${assetPathPrefix}/aad0d.svg`;
const imgGroup = `${assetPathPrefix}/34986.svg`;
const imgGroup1 = `${assetPathPrefix}/5f71d.svg`;
const imgGroup2 = `${assetPathPrefix}/796c7.svg`;
const imgGroup3 = `${assetPathPrefix}/0dc37.svg`;
const imgPenOriginal = `${assetPathPrefix}/eba2c.svg`;
const imgPenFinishOverlay = `${assetPathPrefix}/ecbfb.svg`;
const imgGroup4 = `${assetPathPrefix}/ff9ed.svg`;
const imgGroup5 = `${assetPathPrefix}/871ab.svg`;
const imgGroup6 = `${assetPathPrefix}/5e24c.svg`;
const imgVector28 = `${assetPathPrefix}/a19cc.svg`;
const imgVector29 = `${assetPathPrefix}/2a4d0.svg`;
const imgVector30 = `${assetPathPrefix}/34d83.svg`;

function DesignCanvas() {
  return (
    <div className="relative size-full" data-node-id="2:2" data-name="! Слайд">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
      <div className="absolute inset-[6.78%_4%_93.22%_4%]" data-node-id="2:4" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Arial:Bold'] inset-[12.11%_83.88%_79.67%_4%] leading-[normal] not-italic text-[#1d1d1f] text-[64px] whitespace-nowrap" data-node-id="2:5">
        АДАМ
      </p>
      <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[21.11%_71.38%_76.22%_4%] leading-[normal] not-italic text-[#6e6e73] text-[21px] whitespace-nowrap" data-node-id="2:6">
        ИИ-помощник на вашем рабочем столе.
      </p>
      <div className="absolute contents inset-[28.33%_66.88%_65.78%_4%]" data-node-id="2:7" data-name="Group">
        <div className="absolute inset-[28.33%_66.88%_65.78%_4%]" data-node-id="2:8" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[30.11%_81.44%_67.67%_6.94%] leading-[normal] not-italic text-[#e6e6e9] text-[17px] whitespace-nowrap" data-node-id="2:9">
          Спросить о чём-либо…
        </p>
        <div className="absolute inset-[29.28%_67.5%_66.72%_30.25%]" data-node-id="2:10" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
        </div>
        <div className="absolute inset-[30.61%_68.13%_68.06%_30.88%]" data-node-id="2:11" data-name="Vector">
          <div className="absolute inset-[-7.08%_-5.31%]">
            <img alt="" className="block max-w-none size-full" src={imgVector3} />
          </div>
        </div>
      </div>
      <div className="absolute contents inset-[36.11%_83.19%_61.22%_4.25%]" data-node-id="2:12" data-name="Group">
        <div className="absolute inset-[36.11%_94.5%_61.22%_4.25%]" data-node-id="2:13" data-name="Vector">
          <div className="absolute inset-[-3.13%_-3.75%]">
            <img alt="" className="block max-w-none size-full" src={imgVector4} />
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Bold'] inset-[36.33%_83.19%_61.67%_6.31%] leading-[normal] not-italic text-[#1d1d1f] text-[16px] whitespace-nowrap" data-node-id="2:14">
          Написать программу
        </p>
      </div>
      <div className="absolute contents inset-[36.11%_72.44%_61.44%_18.5%]" data-node-id="2:15" data-name="Group">
        <div className="absolute inset-[36.11%_80.13%_61.44%_18.5%]" data-node-id="2:16" data-name="Vector">
          <div className="absolute inset-[-3.41%]">
            <img alt="" className="block max-w-none size-full" src={imgVector5} />
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Bold'] inset-[36.33%_72.44%_61.67%_20.69%] leading-[normal] not-italic text-[#1d1d1f] text-[16px] whitespace-nowrap" data-node-id="2:17">
          Открыть сайт
        </p>
      </div>
      <div className="absolute inset-[13.11%_36.94%_39.33%_36.31%]" data-node-id="2:18" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
      </div>
      <div className="absolute contents inset-[13.11%_36.94%_39.33%_36.31%]" data-node-id="2:19" data-name="Clip path group" />
      <p className="[word-break:break-word] absolute font-['Arial:Bold'] inset-[13.44%_19.56%_83%_68.5%] leading-[normal] not-italic text-[#1d1d1f] text-[28px] whitespace-nowrap" data-node-id="2:22">
        Интуитивный
      </p>
      <p className="[word-break:break-word] absolute font-['Arial:Bold'] inset-[17.22%_21.44%_79.22%_68.5%] leading-[normal] not-italic text-[#1d1d1f] text-[28px] whitespace-nowrap" data-node-id="2:23">
        интерфейс.
      </p>
      <div className="absolute contents inset-[23.22%_19.13%_73.33%_68.5%]" data-node-id="2:24" data-name="Group">
        <div className="absolute inset-[23.22%_19.13%_73.33%_68.5%]" data-node-id="2:25" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
        </div>
        <div className="absolute inset-[24.5%_30.19%_74.61%_69.31%]" data-node-id="2:26" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[23.89%_26%_74.33%_70.38%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] whitespace-nowrap" data-node-id="2:27">
          На связи
        </p>
      </div>
      <div className="absolute contents inset-[23.22%_5.75%_73.33%_81.88%]" data-node-id="2:28" data-name="Group">
        <div className="absolute inset-[23.22%_5.75%_73.33%_81.88%]" data-node-id="2:29" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
        </div>
        <div className="absolute inset-[24.5%_16.81%_74.61%_82.69%]" data-node-id="2:30" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector10} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[23.89%_13.44%_74.33%_83.75%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] whitespace-nowrap" data-node-id="2:31">
          Думаю
        </p>
      </div>
      <div className="absolute contents inset-[27.78%_19.13%_68.78%_68.5%]" data-node-id="2:32" data-name="Group">
        <div className="absolute inset-[27.78%_19.13%_68.78%_68.5%]" data-node-id="2:33" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
        </div>
        <div className="absolute inset-[29.06%_30.19%_70.06%_69.31%]" data-node-id="2:34" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector11} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[28.44%_23%_69.78%_70.38%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] whitespace-nowrap" data-node-id="2:35">
          Фоновая задача
        </p>
      </div>
      <div className="absolute contents inset-[27.78%_5.75%_68.78%_81.88%]" data-node-id="2:36" data-name="Group">
        <div className="absolute inset-[27.78%_5.75%_68.78%_81.88%]" data-node-id="2:37" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
        </div>
        <div className="absolute inset-[29.06%_16.81%_70.06%_82.69%]" data-node-id="2:38" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector12} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[28.44%_13.5%_69.78%_83.75%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] whitespace-nowrap" data-node-id="2:39">
          Готово
        </p>
      </div>
      <div className="absolute contents inset-[32.33%_19.13%_64.22%_68.5%]" data-node-id="2:40" data-name="Group">
        <div className="absolute inset-[32.33%_19.13%_64.22%_68.5%]" data-node-id="2:41" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
        </div>
        <div className="absolute inset-[33.61%_30.19%_65.5%_69.31%]" data-node-id="2:42" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector13} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[33%_24%_65.22%_70.38%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] whitespace-nowrap" data-node-id="2:43">
          Жду решения
        </p>
      </div>
      <div className="absolute contents inset-[32.33%_5.75%_64.22%_81.88%]" data-node-id="2:44" data-name="Group">
        <div className="absolute inset-[32.33%_5.75%_64.22%_81.88%]" data-node-id="2:45" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector9} />
        </div>
        <div className="absolute inset-[33.61%_16.81%_65.5%_82.69%]" data-node-id="2:46" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector14} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[33%_10.25%_65.22%_83.75%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] whitespace-nowrap" data-node-id="2:47">
          Не беспокоить
        </p>
      </div>
      <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[37.33%_12.44%_60.67%_68.5%] leading-[normal] not-italic text-[#6e6e73] text-[16px] whitespace-nowrap" data-node-id="2:48">
        Поясок показывает ход фоновой задачи.
      </p>
      <div className="[word-break:break-word] absolute contents inset-[42.44%_10.25%_39.33%_68.5%] leading-[normal] not-italic whitespace-nowrap" data-node-id="2:49" data-name="Group">
        <p className="absolute font-['Arial:Bold'] inset-[42.44%_19.5%_54.11%_68.5%] text-[#1d1d1f] text-[27px]" data-node-id="2:50">
          Ваши данные.
        </p>
        <p className="absolute font-['Arial:Bold'] inset-[46.11%_18.69%_50.44%_68.5%] text-[#1d1d1f] text-[27px]" data-node-id="2:51">
          Ваше решение.
        </p>
        <p className="absolute font-['Arial:Regular'] inset-[51.56%_15.69%_46.11%_68.5%] text-[#6e6e73] text-[18px]" data-node-id="2:52">
          Замазывание личных данных.
        </p>
        <p className="absolute font-['Arial:Regular'] inset-[54.33%_13.13%_43.33%_68.5%] text-[#6e6e73] text-[18px]" data-node-id="2:53">
          Действия — с вашего разрешения.
        </p>
        <p className="absolute font-['Arial:Regular'] inset-[58.33%_10.25%_39.33%_68.5%] text-[#6e6e73] text-[18px]" data-node-id="2:54">
          Настройки и журнал хранятся локально.
        </p>
      </div>
      <div className="absolute contents inset-[69.44%_74.13%_9.22%_4%]" data-node-id="2:55" data-name="Group">
        <div className="absolute inset-[69.44%_74.13%_9.22%_4%]" data-node-id="2:56" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Bold'] inset-[71.22%_79.5%_25.89%_5.5%] leading-[normal] not-italic text-[#1d1d1f] text-[23px] whitespace-nowrap" data-node-id="2:57">
          Файлы. Фото. Экран.
        </p>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[75.33%_79.56%_22.67%_5.5%] leading-[normal] not-italic text-[#6e6e73] text-[16px] whitespace-nowrap" data-node-id="2:58">
          Перевод, сроки, готовые ответы
        </p>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[77.89%_81.06%_20.11%_5.5%] leading-[normal] not-italic text-[#6e6e73] text-[16px] whitespace-nowrap" data-node-id="2:59">
          и резолюции по документам.
        </p>
        <div className="absolute inset-[81.78%_89.75%_14.89%_5.5%]" data-node-id="2:60" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector16} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[82.44%_90.75%_15.78%_6.5%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:61">
          Кратко
        </p>
        <div className="absolute inset-[81.78%_82.44%_14.89%_10.75%]" data-node-id="2:62" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector17} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[82.44%_83.31%_15.78%_11.63%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:63">
          Найти сроки
        </p>
        <div className="absolute inset-[81.78%_75.63%_14.89%_18.06%]" data-node-id="2:64" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector18} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[82.44%_77.56%_15.78%_20%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:65">
          Ответ
        </p>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[86.89%_79.75%_11.44%_5.5%] leading-[normal] not-italic text-[#6e6e73] text-[13px] whitespace-nowrap" data-node-id="2:66">
          PDF · DOCX · таблицы · фото · ссылки
        </p>
      </div>
      <div className="absolute contents inset-[69.44%_50.75%_9.22%_27.38%]" data-node-id="2:67" data-name="Group">
        <div className="absolute inset-[69.44%_50.75%_9.22%_27.38%]" data-node-id="2:68" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Bold'] inset-[71.22%_56.63%_25.89%_28.88%] leading-[normal] not-italic text-[#1d1d1f] text-[23px] whitespace-nowrap" data-node-id="2:69">
          Сервисы под рукой.
        </p>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[75.33%_57.44%_22.67%_28.88%] leading-[normal] not-italic text-[#6e6e73] text-[16px] whitespace-nowrap" data-node-id="2:70">
          Рабочие сайты в мини-окнах.
        </p>
        <div className="absolute inset-[79.44%_66.69%_17.22%_28.88%]" data-node-id="2:71" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector19} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[80.11%_67.19%_18.11%_29.38%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:72">
          Новости
        </p>
        <div className="absolute inset-[79.44%_62.56%_17.22%_33.69%]" data-node-id="2:73" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector20} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[80.11%_63.22%_18.11%_34.34%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:74">
          Почта
        </p>
        <div className="absolute inset-[79.44%_56.06%_17.22%_37.81%]" data-node-id="2:75" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector21} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[80.11%_56.72%_18.11%_38.47%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:76">
          Обращения
        </p>
        <div className="absolute inset-[79.44%_52.25%_17.22%_44.31%]" data-node-id="2:77" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector22} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[80.11%_52.66%_18.11%_44.72%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:78">
          Кадры
        </p>
        <div className="absolute inset-[83.89%_66.38%_12.78%_28.88%]" data-node-id="2:79" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector16} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[84.56%_67.03%_13.67%_29.53%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:80">
          Соцсети
        </p>
        <div className="absolute inset-[83.89%_61.25%_12.78%_34%]" data-node-id="2:81" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector16} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[84.56%_61.78%_13.67%_34.53%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:82">
          Сервисы
        </p>
        <div className="absolute inset-[83.89%_52.25%_12.78%_39.13%]" data-node-id="2:83" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector23} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[84.56%_52.72%_13.67%_39.53%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:84">
          Карта организации
        </p>
      </div>
      <div className="absolute contents inset-[69.44%_27.38%_9.22%_50.75%]" data-node-id="2:85" data-name="Group">
        <div className="absolute inset-[69.44%_27.38%_9.22%_50.75%]" data-node-id="2:86" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Bold'] inset-[71.22%_34.31%_25.89%_52.25%] leading-[normal] not-italic text-[#1d1d1f] text-[23px] whitespace-nowrap" data-node-id="2:87">
          День — в порядке.
        </p>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[75.33%_38.19%_22.67%_52.25%] leading-[normal] not-italic text-[#6e6e73] text-[16px] whitespace-nowrap" data-node-id="2:88">
          Поручения, встречи,
        </p>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[77.89%_36.31%_20.11%_52.25%] leading-[normal] not-italic text-[#6e6e73] text-[16px] whitespace-nowrap" data-node-id="2:89">
          напоминания и дневник.
        </p>
        <div className="absolute inset-[81.78%_41.25%_14.89%_52.25%]" data-node-id="2:90" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector24} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[82.44%_42.88%_15.78%_53.87%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:91">
          Журнал
        </p>
        <div className="absolute inset-[81.78%_32.63%_14.89%_59.25%]" data-node-id="2:92" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector25} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[82.44%_34.91%_15.78%_61.53%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:93">
          Итог дня
        </p>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[86.89%_34.81%_11.44%_52.25%] leading-[normal] not-italic text-[#6e6e73] text-[13px] whitespace-nowrap" data-node-id="2:94">
          Утренний доклад · план на завтра
        </p>
      </div>
      <div className="absolute inset-[93.22%_4%_6.78%_4%]" data-node-id="2:95" data-name="Vector">
        <div className="absolute inset-[-0.5px_0]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <div className="absolute inset-[61.78%_47%_35.89%_46.5%]" data-node-id="2:96" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector26} />
      </div>
      <div className="absolute contents inset-[23.67%_35.81%_67.67%_53.63%]" data-node-id="2:97" data-name="Group">
        <div className="absolute inset-[23.67%_35.81%_67.67%_53.63%]" data-node-id="2:98" data-name="Vector">
          <div className="absolute inset-[-0.64%_-0.3%_-1.5%_-0.3%]">
            <img alt="" className="block max-w-none size-full" src={imgVector27} />
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Bold'] inset-[24.89%_39.31%_73.22%_54.5%] leading-[normal] not-italic text-[#405372] text-[15px] whitespace-nowrap" data-node-id="2:99">
          Чем помочь?
        </p>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[27.11%_36.94%_71.22%_54.5%] leading-[normal] not-italic text-[#738299] text-[13px] whitespace-nowrap" data-node-id="2:100">
          Вопрос или поручение
        </p>
      </div>
      <div className="absolute contents inset-[54.33%_83.38%_35.67%_4%]" data-node-id="2:101">
        <p className="[word-break:break-word] absolute font-['Arial:Bold'] inset-[54.33%_83.38%_43.33%_4.06%] leading-[normal] not-italic text-[#2a3950] text-[18px] whitespace-nowrap" data-node-id="2:102">
          ИЗМЕНИТЕ ПОД СЕБЯ
        </p>
        <div className="absolute inset-[57.78%_93.63%_38%_4%]" data-node-id="2:103" data-name="Group">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup} />
        </div>
        <div className="absolute inset-[57.78%_91%_38%_6.63%]" data-node-id="2:107" data-name="Group">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
        </div>
        <div className="absolute inset-[57.78%_88.38%_38%_9.25%]" data-node-id="2:111" data-name="Group">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
        </div>
        <div className="absolute inset-[57.78%_85.75%_38%_11.88%]" data-node-id="2:115" data-name="Group">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[62.56%_85.94%_35.67%_4.06%] leading-[normal] not-italic text-[#62738c] text-[14px] whitespace-nowrap" data-node-id="2:119">
          Голубой · новая отделка
        </p>
      </div>
      <div className="absolute contents inset-[11.33%_44.69%_37.56%_44.06%]" data-node-id="2:120" data-name="Group">
        <div className="absolute inset-[11.33%_44.69%_37.56%_44.06%] overflow-clip" data-node-id="2:121" data-name="penImage">
          <div className="absolute contents inset-[0.7%_21.74%]" data-node-id="2:122" data-name="Clip path group">
            <div className="absolute contents inset-[-2.01%_-0.74%_-2.21%_9.59%]" data-node-id="2:125" data-name="Group">
              <div className="absolute inset-[-2.01%_-0.74%_-2.21%_9.59%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[21.876px_12.495px] mask-size-[101.725px_453.521px]" data-node-id="2:126" style={{ maskImage: `url("${imgPenOriginal}")` }} data-name="penOriginal">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgPenOriginal1} />
                </div>
              </div>
              <div className="absolute inset-[15.9%_21.74%_22.64%_21.74%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-69.879px] mask-size-[101.725px_453.521px]" data-node-id="2:127" style={{ maskImage: `url("${imgPenOriginal}")` }} data-name="penFinishOverlay">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPenFinishOverlay} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute contents inset-[41.22%_54.25%_51.11%_37.06%]" data-node-id="2:136">
        <div className="absolute flex inset-[41.22%_54.25%_51.11%_37.06%] items-center justify-center" data-node-id="2:137" style={{ containerType: "size" }}>
          <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
            <div className="relative size-full" data-name="Group">
              <div className="absolute inset-[-0.91%_-0.45%_-2.31%_-0.45%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup4} />
              </div>
            </div>
          </div>
        </div>
        <div className="[word-break:break-word] absolute contents inset-[42.33%_55.5%_53.78%_38.06%] leading-[normal] not-italic whitespace-nowrap" data-node-id="2:139" data-name="Group">
          <p className="absolute font-['Arial:Bold'] inset-[42.33%_55.5%_55.78%_38.06%] text-[#405372] text-[15px]" data-node-id="2:140">
            Нужен совет?
          </p>
          <p className="absolute font-['Arial:Regular'] inset-[44.56%_57%_53.78%_38.06%] text-[#738299] text-[13px]" data-node-id="2:141">
            Я всегда тут!
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] absolute contents inset-[40.56%_76.88%_51.22%_4%] leading-[normal] not-italic whitespace-nowrap" data-node-id="2:142" data-name="Group">
        <p className="absolute font-['Arial:Bold'] inset-[40.56%_81.69%_57.11%_4%] text-[#2a3950] text-[18px]" data-node-id="2:143">
          С тактом к вашему ритму.
        </p>
        <p className="absolute font-['Arial:Regular'] inset-[44%_76.88%_54%_4%] text-[#6e6e73] text-[16px]" data-node-id="2:144">
          Не отвлекает в фокусе и на совещаниях.
        </p>
        <p className="absolute font-['Arial:Regular'] inset-[46.78%_79.44%_51.22%_4%] text-[#6e6e73] text-[16px]" data-node-id="2:145">
          «Вы» или «ты» — как вам удобнее.
        </p>
      </div>
      <div className="absolute contents inset-[69.44%_4%_9.22%_74.13%]" data-node-id="2:146" data-name="Group">
        <div className="absolute inset-[69.44%_4%_9.22%_74.13%]" data-node-id="2:147" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector15} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Bold'] inset-[71.22%_8.56%_25.89%_75.63%] leading-[normal] not-italic text-[#1d1d1f] text-[23px] whitespace-nowrap" data-node-id="2:148">
          Растёт вместе с вами.
        </p>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[75.33%_7.38%_22.67%_75.63%] leading-[normal] not-italic text-[#6e6e73] text-[16px] whitespace-nowrap" data-node-id="2:149">
          Помнит информацию о вас надолго.
        </p>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[77.89%_6.31%_20.11%_75.63%] leading-[normal] not-italic text-[#6e6e73] text-[16px] whitespace-nowrap" data-node-id="2:150">
          И подстраивается под ваши привычки.
        </p>
        <div className="absolute inset-[85.69%_23.27%_11.98%_75.63%]" data-node-id="2:151" data-name="Group">
          <div className="absolute inset-[-2.24%_-2.66%]">
            <img alt="" className="block max-w-none size-full" src={imgGroup5} />
          </div>
        </div>
        <div className="absolute inset-[85.94%_21.56%_11.67%_77.59%]" data-node-id="2:153" data-name="Group">
          <div className="absolute inset-[-1.16%_-1.84%_0_-1.84%]">
            <img alt="" className="block max-w-none size-full" src={imgGroup6} />
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[86.89%_10.75%_11.44%_79.25%] leading-[normal] not-italic text-[#6e6e73] text-[13px] whitespace-nowrap" data-node-id="2:156">
          Ранги · марки · украшения
        </p>
        <div className="absolute inset-[81.11%_20.19%_15.56%_75.63%]" data-node-id="2:157" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector28} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[81.78%_21.06%_16.44%_76.56%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:158">
          Уроки
        </p>
        <div className="absolute inset-[81.11%_14.56%_15.56%_80.44%]" data-node-id="2:159" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector29} />
        </div>
        <div className="absolute inset-[81.11%_6.69%_15.56%_86.06%]" data-node-id="2:160" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector30} />
        </div>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[81.78%_15.56%_16.44%_81.44%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:161">
          Зачёты
        </p>
        <p className="[word-break:break-word] absolute font-['Arial:Regular'] inset-[81.78%_7.88%_16.44%_87.19%] leading-[normal] not-italic text-[#1d1d1f] text-[14px] text-center whitespace-nowrap" data-node-id="2:162">
          Достижения
        </p>
      </div>
    </div>
  );
}

const DESIGN_WIDTH = 1600;
const DESIGN_HEIGHT = 900;

export default function App() {
  const viewportRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateScale = () => setScale(viewport.clientWidth / DESIGN_WIDTH);
    const observer = new ResizeObserver(updateScale);
    observer.observe(viewport);
    updateScale();

    return () => observer.disconnect();
  }, []);

  return (
    <main className="design-viewport" ref={viewportRef}>
      <div
        className="design-canvas"
        style={{ transform: `scale(${scale})` }}
      >
        <DesignCanvas />
      </div>
    </main>
  );
}
