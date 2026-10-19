import { useEffect, useState } from "react"

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      aria-label="Вернуться к началу"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-[28px] right-[28px] z-40 flex size-[52px] cursor-pointer items-center justify-center rounded-full bg-[#2242d6] text-white shadow-[0_10px_30px_rgba(34,66,214,0.35)] transition-all duration-300 hover:bg-[#1a35ad] hover:shadow-[0_12px_36px_rgba(34,66,214,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2242d6] focus-visible:ring-offset-2 ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-[12px] scale-95 opacity-0"
      }`}
    >
      <span className="text-[20px] leading-none font-bold">↑</span>
    </button>
  )
}
