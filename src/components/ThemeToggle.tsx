import type { SiteTheme } from "../lib/siteTheme"

export default function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: SiteTheme
  onToggle: () => void
}) {
  const dark = theme === "dark"

  return (
    <button
      type="button"
      aria-label="Тёмная тема"
      aria-pressed={dark}
      title={dark ? "Включить светлую тему" : "Включить тёмную тему"}
      onClick={onToggle}
      className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-[6px] border border-gov-line bg-gov-panel text-gov-ink transition-colors hover:border-gov-accent hover:bg-gov-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gov-accent aria-pressed:border-gov-outline aria-pressed:text-gov-accent"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {dark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" />
          </>
        ) : (
          <path d="M20.9 13.3A9 9 0 0 1 10.7 3.1a9 9 0 1 0 10.2 10.2Z" />
        )}
      </svg>
    </button>
  )
}
