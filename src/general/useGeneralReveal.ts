import { useLayoutEffect, useRef } from "react"
import "./generalReveal.css"

const revealSelector = "[data-general-reveal]"

export function useGeneralReveal() {
  const pageRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const page = pageRef.current
    if (!page || typeof IntersectionObserver === "undefined") return

    const blocks = Array.from(page.querySelectorAll<HTMLElement>(revealSelector))
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const observer = new IntersectionObserver((entries) => {
      for (const { isIntersecting, target } of entries) {
        const block = target as HTMLElement
        if (!isIntersecting || block.dataset.generalReveal !== "pending" || motion.matches) continue

        block.dataset.generalReveal = "entered"
        observer.unobserve(block)
      }
    }, { rootMargin: "0px 0px -32px 0px" })

    const syncMotion = () => {
      observer.disconnect()
      for (const block of blocks) {
        const state = block.dataset.generalReveal
        if (motion.matches || block.getBoundingClientRect().top + window.scrollY < window.innerHeight) {
          block.dataset.generalReveal = "settled"
          continue
        }
        if (state === "settled" || state === "entered") continue

        block.dataset.generalReveal = "pending"
        observer.observe(block)
      }
    }

    const settleOnInteraction = (event: Event) => {
      if (!(event.target instanceof Element)) return

      const block = event.target.closest<HTMLElement>(revealSelector)
      if (!block || !page.contains(block) || block.dataset.generalReveal === "settled") return

      // Keyboard and pointer access never have to wait for an entrance.
      block.dataset.generalReveal = "settled"
      observer.unobserve(block)
    }

    syncMotion()
    motion.addEventListener("change", syncMotion)
    page.addEventListener("focusin", settleOnInteraction)
    page.addEventListener("click", settleOnInteraction, true)

    return () => {
      observer.disconnect()
      motion.removeEventListener("change", syncMotion)
      page.removeEventListener("focusin", settleOnInteraction)
      page.removeEventListener("click", settleOnInteraction, true)
      for (const block of blocks) block.dataset.generalReveal = ""
    }
  }, [])

  return pageRef
}
