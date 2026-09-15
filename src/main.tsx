import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

if ("serviceWorker" in navigator) {
  if (import.meta.env.PROD) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch((err) => {
        console.warn("SW registration failed:", err)
      })
    })
  } else {
    // В dev-режиме service worker мешает: отдаёт stale-кэш вместо свежих модулей Vite.
    // Снимаем зарегистрированный SW и чистим его кэши.
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((r) => r.unregister())
    })
    if (typeof caches !== "undefined") {
      caches.keys().then((keys) => {
        keys
          .filter((k) => k.startsWith("governance-kz"))
          .forEach((k) => caches.delete(k))
      })
    }
  }
}
