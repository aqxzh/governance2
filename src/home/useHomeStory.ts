import { useLayoutEffect, useRef, useState, type FocusEvent } from "react"

const horizontalQuery =
  "(min-width: 48rem) and (min-height: 37rem) and (prefers-reduced-motion: no-preference)"

type StoryLayout = {
  start: number
  stops: [number, number, number]
}

function clamp(value: number, max: number) {
  return Math.max(0, Math.min(value, max))
}

export function useHomeStory() {
  const storyRef = useRef<HTMLElement>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const layout = useRef<StoryLayout | null>(null)
  const currentChapter = useRef(0)
  const [horizontal, setHorizontal] = useState(false)
  const [activeChapter, setActiveChapter] = useState(0)

  useLayoutEffect(() => {
    if (
      !CSS.supports("overflow", "clip") ||
      !CSS.supports("selector(:has(*))")
    ) return

    const media = window.matchMedia(horizontalQuery)
    const sync = () => setHorizontal(media.matches)
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  useLayoutEffect(() => {
    const story = storyRef.current
    const scene = sceneRef.current
    const viewport = viewportRef.current
    const track = trackRef.current
    const middle = track?.children[1]
    if (!horizontal || !story || !scene || !viewport || !track ||
      !(middle instanceof HTMLElement)) return

    let frame = 0
    let lastX = Number.NaN

    const paint = () => {
      const position = layout.current
      if (!position) return

      const [, center, end] = position.stops
      const x = clamp(window.scrollY - position.start, end)
      if (x !== lastX) {
        track.style.transform = `translate3d(${-x}px, 0, 0)`
        lastX = x
      }

      const next = x < center / 2 ? 0 : x < (center + end) / 2 ? 1 : 2
      if (next !== currentChapter.current) {
        currentChapter.current = next
        setActiveChapter(next)
      }
    }

    const measure = () => {
      const travel = Math.max(0, track.offsetWidth - viewport.clientWidth)
      const center = middle.offsetLeft + (middle.offsetWidth - viewport.clientWidth) / 2
      const pinTop = Number.parseFloat(getComputedStyle(scene).top) || 0
      layout.current = {
        start: window.scrollY + story.getBoundingClientRect().top - pinTop,
        stops: [0, clamp(center, travel), travel],
      }
      story.style.setProperty("--home-scroll-distance", `${travel}px`)
      paint()
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(() => {
        frame = 0
        paint()
      })
    }

    // Native vertical scrolling drives only a horizontal transform, not wheel interception.
    measure()
    const resize = new ResizeObserver(measure)
    resize.observe(viewport)
    resize.observe(track)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      resize.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.cancelAnimationFrame(frame)
      layout.current = null
      story.style.removeProperty("--home-scroll-distance")
      track.style.removeProperty("transform")
    }
  }, [horizontal])

  function revealFocus(index: number, event: FocusEvent<HTMLElement>) {
    const position = layout.current
    const viewport = viewportRef.current?.getBoundingClientRect()
    if (!horizontal || !position || !viewport || !(event.target instanceof HTMLElement)) return

    const target = event.target.getBoundingClientRect()
    if (target.left < viewport.left || target.right > viewport.right) {
      window.scrollTo({ top: position.start + (position.stops[index] ?? 0), behavior: "auto" })
    }
  }

  return {
    storyRef,
    sceneRef,
    viewportRef,
    trackRef,
    horizontal,
    activeChapter,
    revealFocus,
  }
}
