import React, { useEffect } from "react";
import { createPortal } from "react-dom";

/*
 * Модалка видео. Рендерится через портал в body: вызывающие места могут
 * находиться внутри transform: scale() (слайды симулятора), а fixed-позиция
 * внутри трансформированного предка ломается — портал это обходит.
 */
export function VideoModal({
  src,
  title,
  onClose,
  onError,
  large = false,
}: {
  src: string;
  title: string;
  onClose: () => void;
  onError?: () => void;
  large?: boolean;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0f16]/60 backdrop-blur-[2px] p-4 sm:p-6 animate-[imgmodal-fade_.18s_ease-out]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative animate-[imgmodal-pop_.24s_cubic-bezier(0.2,0.8,0.2,1)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute -right-3 -top-3 z-10 grid size-9 place-items-center rounded-full bg-white text-[22px] leading-none text-[#0d0f16] shadow-lg transition-colors hover:bg-[#2242d6] hover:text-white cursor-pointer"
        >
          ×
        </button>
        <video
          src={src}
          controls
          autoPlay
          playsInline
          onError={onError}
          className={`block rounded-[12px] object-contain ring-4 ring-white ${large ? "max-h-[75vh] max-w-[1000px]" : "max-h-[65vh] max-w-[760px]"}`}
        />
      </div>
    </div>,
    document.body,
  );
}
