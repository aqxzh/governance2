import { useState } from "react"
import {
  HorizontalBorder,
  type Language,
  type TabKey,
} from "../../imports/index"
import BackToTopButton from "../components/BackToTopButton"

const SLIDE_SRC = `${import.meta.env.BASE_URL}adam-presentation.html`

export default function App() {
  const [language, setLanguage] = useState<Language>("RU")
  const [slideLoaded, setSlideLoaded] = useState(false)

  const homeHref =
    typeof window !== "undefined" ? window.location.pathname : "/"

  const goHome = () => {
    try {
      const referrer = new URL(document.referrer)
      if (referrer.origin === window.location.origin) {
        window.history.back()
        return
      }
    } catch {
      // referrer пустой или сторонний — возвращаемся на главную по прямой ссылке
    }
    window.location.href = homeHref
  }

  const handleTabClick = (key: TabKey) => {
    const hash =
      key === "recruitment"
        ? "diagnostics"
        : key === "analytics"
          ? "coordination"
          : "modeling"
    window.location.href = `${homeHref}#${hash}`
  }

  return (
    <main className="w-full bg-white">
      <div className="bg-white w-full">
        <HorizontalBorder
          onTabClick={handleTabClick}
          onHomeClick={goHome}
          language={language}
          onLanguageChange={setLanguage}
        />
      </div>
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-stretch">
        <div className="px-[20px] sm:px-[28px] pt-[4px] pb-[8px]">
          <a
            href={homeHref}
            className="inline-flex items-center gap-[8px] font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[12px] tracking-[1.2px] text-[#3a4050] cursor-pointer transition-colors hover:text-[#2242d6]"
          >
            <span className="text-[14px] leading-none">←</span>
            НАЗАД К ГЛАВНОЙ
          </a>
        </div>
        <div className="px-[20px] sm:px-[28px] pb-[32px]">
          <div className="relative">
            {!slideLoaded && (
              <div
                className="absolute inset-0 rounded-[15px] bg-[#f5f5f7] animate-pulse"
                style={{ aspectRatio: "16 / 9", minHeight: 480 }}
              />
            )}
            <iframe
              title="АДАМ — интерактивная презентация"
              src={SLIDE_SRC}
              onLoad={() => setSlideLoaded(true)}
              className="w-full bg-white transition-opacity duration-500"
              style={{
                aspectRatio: "16 / 9",
                minHeight: 480,
                opacity: slideLoaded ? 1 : 0,
              }}
            />
          </div>
        </div>
      </div>
      <BackToTopButton />
    </main>
  )
}
