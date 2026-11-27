import { useEffect, useRef, useState } from "react"
import graphsPoster from "./graphs-poster.jpg"
import { useHomeStory } from "./useHomeStory"
import "./home.css"

const heroVideoSource = `${import.meta.env.BASE_URL}videos/graphs-hero.mp4`

function ArrowIcon({ direction = "right" }: { direction?: "right" | "down" | "up" | "external" }) {
  const paths = {
    right: "M3.5 10h12m-4.5-4.5 4.5 4.5-4.5 4.5",
    down: "M10 3.5v12m-4.5-4.5 4.5 4.5 4.5-4.5",
    up: "M10 16.5v-12M5.5 9 10 4.5 14.5 9",
    external: "M5 15 15 5m-6 0h6v6",
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d={paths[direction]}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function HomePage({
  directions,
  directionsHref,
  onMeetingClick,
  onNoteClick,
}: {
  directions: readonly { title: string; summary: string }[]
  directionsHref: string
  onMeetingClick: () => void
  onNoteClick: () => void
}) {
  const story = useHomeStory()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const syncPlayback = () => {
      if (motion.matches || document.hidden) {
        video.pause()
      } else if (!video.error) {
        void video.play().catch(() => {})
      }
    }

    // Keep the film running across chapters without playing in a hidden tab.
    motion.addEventListener("change", syncPlayback)
    document.addEventListener("visibilitychange", syncPlayback)
    syncPlayback()

    return () => {
      motion.removeEventListener("change", syncPlayback)
      document.removeEventListener("visibilitychange", syncPlayback)
      video.pause()
    }
  }, [])

  return (
    <main className="home-page">
      <section
        ref={story.storyRef}
        className="home-hero"
        data-horizontal={story.horizontal ? "" : undefined}
        aria-labelledby="home-title"
      >
        <div ref={story.sceneRef} className="home-hero__scene">
          <div ref={story.viewportRef} className="home-hero__viewport">
            <div ref={story.trackRef} className="home-hero__track">
              <div
                className="home-hero__panel home-hero__intro"
                onFocusCapture={(event) => story.revealFocus(0, event)}
              >
                <h1 id="home-title" className="home-hero__title">
                  Организации, которые видят свои процессы целиком
                </h1>
                <p className="home-hero__description">
                  Governance.kz — прикладной центр цифровой трансформации управления.
                  ИИ анализирует кадры, услуги и нагрузку в единой логике данных.
                </p>
                <div className="home-hero__actions">
                  <button
                    type="button"
                    className="home-meeting"
                    onClick={onMeetingClick}
                  >
                    Записаться на встречу
                    <ArrowIcon />
                  </button>
                  <button type="button" className="home-note" onClick={onNoteClick}>
                    Аналитическая записка
                  </button>
                </div>
                <ul className="home-hero__related" role="list" aria-label="ИИ в работе организаций">
                  <li>
                    <a
                      className="home-hero__related-row home-hero__adam-link"
                      href="https://adamai.kz/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>ADAM</strong>
                      <span className="home-hero__related-copy">ИИ-помощник для документов и сводок</span>
                      <span className="home-hero__related-domain">
                        <span>adamai.kz</span>
                        <ArrowIcon direction="external" />
                      </span>
                      <span className="sr-only"> (в новой вкладке)</span>
                    </a>
                  </li>
                  <li className="home-hero__related-row">
                    <strong>Gov LLM</strong>
                    <span className="home-hero__related-copy">Языковые модели для госуправления</span>
                  </li>
                </ul>
              </div>

              <div
                className="home-hero__panel home-hero__showcase"
                role="img"
                aria-label="Фрагмент интерфейса: граф связей и рабочая область ИИ"
              >
                <div className="home-hero__film" aria-hidden="true">
                  <div className="home-hero__media">
                    <video
                      ref={videoRef}
                      src={heroVideoSource}
                      poster={graphsPoster}
                      muted
                      loop
                      playsInline
                      preload="none"
                      hidden={videoFailed}
                      onError={() => setVideoFailed(true)}
                    />
                    {videoFailed && <img src={graphsPoster} alt="" />}
                  </div>
                </div>
              </div>

              <section
                className="home-hero__panel home-hero__closing"
                aria-labelledby="home-directions-title"
                onFocusCapture={(event) => story.revealFocus(2, event)}
              >
                <h2 id="home-directions-title" className="home-hero__title">
                  Решения остаются за людьми.
                </h2>
                <p className="home-hero__description">
                  Начните с того, что нужно вашей команде.
                </p>
                <dl className="home-hero__directions">
                  {directions.map(({ title, summary }) => (
                    <div key={title}>
                      <dt>{title}</dt>
                      <dd>{summary}</dd>
                    </div>
                  ))}
                </dl>
                <a className="home-hero__directions-link" href={directionsHref}>
                  Подробнее о направлениях
                  <ArrowIcon />
                </a>
              </section>
            </div>
          </div>

          {story.horizontal && (
            <div className="site-shell home-hero__rail">
              <span className="home-hero__descriptor">
                ИИ инфраструктура управления
              </span>
              <span className="home-hero__scroll-cue">
                <ArrowIcon direction={story.activeChapter === 2 ? "up" : "down"} />
                {story.activeChapter === 2 ? "Прокрутите вверх" : "Листайте дальше"}
              </span>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
