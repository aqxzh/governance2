import { useEffect } from "react"

export function ImageModal({
  index,
  title,
  image,
  description,
  onClose,
  showTitle = true,
}: {
  index: string
  title: string
  image: string
  description: string
  onClose: () => void
  showTitle?: boolean
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0f16]/25 backdrop-blur-[3px] p-4 sm:p-6 animate-[imgmodal-fade_.18s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative flex w-full max-w-[1100px] max-h-[90vh] flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] animate-[imgmodal-pop_.24s_cubic-bezier(0.2,0.8,0.2,1)]"
        onClick={(event) => event.stopPropagation()}
      >
        {showTitle && (
          <div className="flex items-start justify-between gap-6 border-b border-[#e6e8ee] px-7 pt-6 pb-5">
            <div className="flex min-w-0 flex-col">
              <div className="flex items-baseline gap-[14px] min-w-0">
                <span className="font-['IBM_Plex_Mono:Regular',sans-serif] not-italic text-[22px] leading-none text-[#2242d6] tabular-nums shrink-0">
                  {index}
                </span>
                <h2
                  className="font-['IBM_Plex_Sans:Bold',sans-serif] font-bold text-[26px] leading-[1.1] tracking-[-0.26px] text-[#0d0f16]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {title}
                </h2>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть"
              className="shrink-0 grid size-11 place-items-center rounded-full border border-[#e6e8ee] text-[26px] leading-none text-[#3a4050] transition-colors hover:border-[#0d0f16] hover:bg-[#0d0f16] hover:text-white cursor-pointer"
            >
              ×
            </button>
          </div>
        )}

        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[#f6f7fb] p-4 sm:p-8">
          {!showTitle && (
            <button
              type="button"
              onClick={onClose}
              aria-label="Закрыть"
              className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full border border-[#e6e8ee] bg-white text-[24px] leading-none text-[#3a4050] transition-colors hover:border-[#0d0f16] hover:bg-[#0d0f16] hover:text-white cursor-pointer"
            >
              ×
            </button>
          )}
          <img
            src={image}
            alt=""
            className="block max-h-[64vh] max-w-full object-contain shadow-[0_8px_32px_rgba(13,15,22,0.12)]"
          />
        </div>

        <div className="border-t border-[#e6e8ee] px-7 py-5">
          <p
            className="font-['IBM_Plex_Sans:Regular',sans-serif] font-normal text-[15px] leading-[1.55] text-[#3a4050]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
