"use client"

import { useEffect, useRef } from "react"

interface PixelMosaicProps {
  src: string
  cellSize?: number
  gap?: number
  radius?: number
  renderWidth?: number
  renderHeight?: number
  className?: string
}

export default function PixelMosaic({
  src,
  cellSize = 8,
  gap = 2,
  radius = 2,
  renderWidth = 600,
  renderHeight = 450,
  className = "",
}: PixelMosaicProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = renderWidth
    canvas.height = renderHeight

    const draw = (source: HTMLImageElement | null) => {
      ctx.clearRect(0, 0, renderWidth, renderHeight)
      const step = cellSize + gap
      const half = Math.floor(cellSize / 2)

      if (!source) {
        for (let y = 0; y < renderHeight; y += step) {
          for (let x = 0; x < renderWidth; x += step) {
            const lightness = 90 + Math.sin((x / renderWidth) * Math.PI) * 5
            ctx.fillStyle = `hsl(220, 10%, ${lightness}%)`
            ctx.beginPath()
            ctx.roundRect(x, y, cellSize, cellSize, radius)
            ctx.fill()
          }
        }
        return
      }

      const offscreen = document.createElement("canvas")
      offscreen.width = renderWidth
      offscreen.height = renderHeight
      const offCtx = offscreen.getContext("2d")!
      offCtx.drawImage(source, 0, 0, renderWidth, renderHeight)
      const { data } = offCtx.getImageData(0, 0, renderWidth, renderHeight)

      for (let y = 0; y < renderHeight; y += step) {
        for (let x = 0; x < renderWidth; x += step) {
          const cx = Math.min(x + half, renderWidth - 1)
          const cy = Math.min(y + half, renderHeight - 1)
          const i = (cy * renderWidth + cx) * 4
          const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3]
          if (a < 10) continue
          ctx.fillStyle = `rgba(${r},${g},${b},${a / 255})`
          ctx.beginPath()
          ctx.roundRect(x, y, cellSize, cellSize, radius)
          ctx.fill()
        }
      }
    }

    // Fade out → load → draw → fade in
    canvas.style.transition = "opacity 0.2s ease"
    canvas.style.opacity = "0"

    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => {
      draw(img)
      canvas.style.opacity = "1"
    }
    img.onerror = () => {
      draw(null)
      canvas.style.opacity = "1"
    }
    img.src = src
  }, [src, cellSize, gap, radius, renderWidth, renderHeight])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  )
}
