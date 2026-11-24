import { useEffect, useLayoutEffect, useState } from "react"

export type SiteTheme = "light" | "dark"

const storageKey = "governance-theme"
const systemQuery = "(prefers-color-scheme: dark)"

function readTheme(): SiteTheme | null {
  try {
    const saved = window.localStorage.getItem(storageKey)
    return saved === "light" || saved === "dark" ? saved : null
  } catch {
    return null
  }
}

export function useSiteTheme() {
  const [preference, setPreference] = useState(readTheme)
  const [systemDark, setSystemDark] = useState(
    () => typeof window !== "undefined" && window.matchMedia(systemQuery).matches,
  )
  const theme: SiteTheme = preference ?? (systemDark ? "dark" : "light")

  useEffect(() => {
    if (preference !== null) return

    const system = window.matchMedia(systemQuery)
    const syncTheme = () => setSystemDark(system.matches)
    system.addEventListener("change", syncTheme)
    syncTheme()
    return () => system.removeEventListener("change", syncTheme)
  }, [preference])

  useLayoutEffect(() => {
    const root = document.documentElement
    root.dataset.governanceThemeSwitching = ""
    root.dataset.governanceTheme = theme
    // Paint the new palette together before restoring hover transitions.
    let frame = window.requestAnimationFrame(() => {
      frame = window.requestAnimationFrame(() => {
        delete root.dataset.governanceThemeSwitching
      })
    })
    return () => {
      window.cancelAnimationFrame(frame)
      delete root.dataset.governanceThemeSwitching
      delete root.dataset.governanceTheme
    }
  }, [theme])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setPreference(next)
    try {
      window.localStorage.setItem(storageKey, next)
    } catch {
      // The current tab still switches when storage is blocked.
    }
  }

  return { theme, toggleTheme }
}
