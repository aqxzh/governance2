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
    const observers = new Map<HTMLElement, IntersectionObserver>()

    const stopObserving = (block: HTMLElement) => {
      observers.get(block)?.disconnect()
      observers.delete(block)
    }

    const clearObservers = () => {
      for (const observer of observers.values()) observer.disconnect()
      observers.clear()
    }

    const syncObservers = () => {
      clearObservers()
      const viewportHeight = window.innerHeight
      for (const block of blocks) {
        const state = block.dataset.generalReveal
        if (motion.matches) {
          block.dataset.generalReveal = "settled"
          continue
        }
        if (state === "settled" || state === "entered") continue

        const blockTop = block.getBoundingClientRect().top
        const lead = block.querySelector<HTMLElement>("h2, p")
        const leadTop = lead?.getBoundingClientRect().top ?? blockTop
        if (leadTop + window.scrollY < viewportHeight) {
          block.dataset.generalReveal = "settled"
          continue
        }

        // Wait for readable content, not just the section's top padding.
        // Observe the whole block so a fast scroll past its heading still reveals it.
        const inset = Math.max(0, leadTop - blockTop)
        const margin = Math.min(Math.ceil(inset + (lead ? 64 : 32)), Math.floor(viewportHeight / 2))
        const observer = new IntersectionObserver(([entry]) => {
          if (!entry?.isIntersecting || observers.get(block) !== observer ||
            block.dataset.generalReveal !== "pending" || motion.matches) return

          block.dataset.generalReveal = "entered"
          stopObserving(block)
        }, { rootMargin: `0px 0px -${margin}px 0px` })

        block.dataset.generalReveal = "pending"
        observers.set(block, observer)
        observer.observe(block)
      }
    }

    const settleOnInteraction = (event: Event) => {
      if (!(event.target instanceof Element)) return

      const block = event.target.closest<HTMLElement>(revealSelector)
      if (!block || !page.contains(block) || block.dataset.generalReveal === "settled") return

      // A pointer's focus must not reposition a moving button before its click.
      if (event.type === "focusin" && block.dataset.generalReveal === "entered" &&
        !event.target.matches(":focus-visible")) return

      block.dataset.generalReveal = "settled"
      stopObserving(block)
    }

    syncObservers()
    motion.addEventListener("change", syncObservers)
    window.addEventListener("resize", syncObservers, { passive: true })
    page.addEventListener("focusin", settleOnInteraction)
    page.addEventListener("click", settleOnInteraction, true)

    return () => {
      clearObservers()
      motion.removeEventListener("change", syncObservers)
      window.removeEventListener("resize", syncObservers)
      page.removeEventListener("focusin", settleOnInteraction)
      page.removeEventListener("click", settleOnInteraction, true)
      for (const block of blocks) block.dataset.generalReveal = ""
    }
  }, [])

  return pageRef
}
