// Генератор PWA-иконок: геометрический "G" на фирменном синем #2242d6.
// Без внешних зависимостей: PNG собирается вручную через zlib.
import { deflateSync } from "node:zlib"
import { writeFileSync, mkdirSync } from "node:fs"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const outDir = resolve(root, "public/icons")
mkdirSync(outDir, { recursive: true })

// ---------- PNG ----------
const CRC_TABLE = (() => {
  const t = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    t[n] = c >>> 0
  }
  return t
})()

function crc32(buf) {
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++)
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const typeBuf = Buffer.from(type, "ascii")
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])))
  return Buffer.concat([len, typeBuf, data, crc])
}

function encodePNG(width, height, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // RGBA
  const stride = width * 4
  const raw = Buffer.alloc((stride + 1) * height)
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0 // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
  }
  const idat = deflateSync(raw, { level: 9 })
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ])
}

// ---------- Геометрия глифа ----------
const hex = (h) => [
  parseInt(h.slice(1, 3), 16),
  parseInt(h.slice(3, 5), 16),
  parseInt(h.slice(5, 7), 16),
]
const TOP = hex("#2a49e0")
const BOTTOM = hex("#16319e")

function insideRoundedRect(x, y, size, radius) {
  const r = Math.min(radius, size / 2)
  if (x < r && y < r) return (x - r) ** 2 + (y - r) ** 2 <= r * r
  if (x > size - r && y < r) return (x - size + r) ** 2 + (y - r) ** 2 <= r * r
  if (x < r && y > size - r) return (x - r) ** 2 + (y - size + r) ** 2 <= r * r
  if (x > size - r && y > size - r)
    return (x - size + r) ** 2 + (y - size + r) ** 2 <= r * r
  return true
}

// Глиф "G": кольцо с вырезом справа + перекладина. true = белый.
function glyph(px, py, size, scale) {
  const cx = size / 2
  const cy = size / 2
  const m = 116 * scale // средний радиус кольца
  const t = 31 * scale // полуширина штриха
  const x = (px - cx) / scale
  const y = (py - cy) / scale
  const d = Math.hypot(x, y)
  if (Math.abs(d - 116) <= 31) {
    const theta = Math.atan2(y, x) // экранные координаты: 0 = вправо, + = вниз
    const deg = (theta * 180) / Math.PI
    if (!(deg > -45 && deg < 18)) return true // вырез
  }
  // Перекладина: соединяется с нижним концом выреза, идёт влево к центру
  if (x >= 30 && x <= 150 && y >= -8 && y <= 40) return true
  return false
}

function render(size, { maskable = false, cornerRadiusRatio = 0.225 } = {}) {
  const rgba = Buffer.alloc(size * size * 4)
  const SS = 3 // суперсэмплинг 3x3 на пиксель
  const cornerRadius = maskable ? 0 : size * cornerRadiusRatio
  const glyphScale = maskable ? 0.68 : 0.9

  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      let insideShape = 0
      let insideGlyph = 0
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const x = px + (sx + 0.5) / SS
          const y = py + (sy + 0.5) / SS
          if (maskable || insideRoundedRect(x, y, size, cornerRadius)) {
            insideShape++
            if (glyph(x, y, size, glyphScale)) insideGlyph++
          }
        }
      }
      const o = (py * size + px) * 4
      if (insideShape === 0) {
        rgba[o + 3] = 0 // прозрачные скруглённые углы
        continue
      }
      const g = Math.min(1, Math.max(0, py / size))
      rgba[o] = Math.round(TOP[0] + (BOTTOM[0] - TOP[0]) * g)
      rgba[o + 1] = Math.round(TOP[1] + (BOTTOM[1] - TOP[1]) * g)
      rgba[o + 2] = Math.round(TOP[2] + (BOTTOM[2] - TOP[2]) * g)
      rgba[o + 3] = 255
      // Смешивание белого глифа по покрытию
      const cov = insideGlyph / insideShape
      if (cov > 0) {
        rgba[o] = Math.round(rgba[o] + (255 - rgba[o]) * cov)
        rgba[o + 1] = Math.round(rgba[o + 1] + (255 - rgba[o + 1]) * cov)
        rgba[o + 2] = Math.round(rgba[o + 2] + (255 - rgba[o + 2]) * cov)
      }
    }
  }
  return encodePNG(size, size, rgba)
}

const targets = [
  ["icon-192.png", render(192)],
  ["icon-512.png", render(512)],
  ["icon-maskable-192.png", render(192, { maskable: true })],
  ["icon-maskable-512.png", render(512, { maskable: true })],
  ["apple-touch-icon.png", render(180, { maskable: true })],
]

for (const [name, png] of targets) {
  writeFileSync(resolve(outDir, name), png)
  console.log("✓", name, png.length, "bytes")
}
console.log("Готово:", outDir)
