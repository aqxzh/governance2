// Снимает composed-графики (картинка + наложенный текст) с десктопной версии
// сайта на localhost:8443 и сохраняет их как готовые PNG для мобильного приложения.
import puppeteer from "puppeteer"
import { mkdirSync } from "node:fs"

mkdirSync("public/graphics", { recursive: true })

const browser = await puppeteer.launch({ headless: "shell" })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 1200, deviceScaleFactor: 2 })
await page.goto("http://localhost:8443/", {
  waitUntil: "networkidle2",
  timeout: 180000,
})
await page.evaluate(() => document.fonts.ready)
await new Promise((r) => setTimeout(r, 4000))

async function shot(findFn, out) {
  const handle = await page.evaluateHandle(findFn)
  const el = handle.asElement()
  if (!el) throw new Error(`Не найден элемент для ${out}`)
  const box = await el.boundingBox()
  if (!box || box.width < 10) throw new Error(`Пустой bounding box для ${out}`)
  await page.screenshot({
    path: `public/graphics/${out}`,
    clip: { x: box.x, y: box.y, width: box.width, height: box.height },
  })
  console.log(`✓ ${out}: ${Math.round(box.width)}×${Math.round(box.height)} @2x`)
}

try {
  // 06 AI-АССЕССМЕНТ: кнопка с картинкой + метрики справа (Group8)
  await shot(
    () => document.querySelector('img[alt="AI Assessment"]')?.closest("button")?.parentElement,
    "assessment.png",
  )

  // 07 EXECASSIST: Frame10 — панель с текстами поверх скриншота
  await shot(() => {
    const img = [...document.querySelectorAll("img")].find((i) =>
      i.src.includes("d905383f"),
    )
    let el = img
    while (el && el.offsetWidth < 900) el = el.parentElement
    return el
  }, "execassist.png")

  // 08 SERVICEFLOW: Group10 — схема с подписями барьеров
  await shot(() => {
    const img = [...document.querySelectorAll("img")].find((i) =>
      i.src.includes("29a3bee7"),
    )
    return img?.parentElement?.parentElement
  }, "serviceflow.png")

  // 09 БЕЗОПАСНОСТЬ: композиция иллюстраций (Group)
  await shot(() => {
    const img = [...document.querySelectorAll("img")].find((i) =>
      i.src.includes("c07407db"),
    )
    let el = img
    while (el && el.offsetWidth < 600) el = el.parentElement
    return el
  }, "security.png")
} finally {
  await browser.close()
}

console.log("Готово: public/graphics/")
