'use client'

import { useEffect, useRef, useState } from 'react'

type Sparkle = {
  id: number
  x: number
  y: number
  symbol: string
}

export default function PlayfulCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const trailRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const symbols = ['🐟', '🐠', '✦']

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)')
    const update = () => setEnabled(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!enabled) {
      return
    }

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.22
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.22

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${targetRef.current.x}px, ${targetRef.current.y}px, 0)`
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${currentRef.current.x}px, ${currentRef.current.y}px, 0)`
      }

      frameRef.current = window.requestAnimationFrame(animate)
    }

    const isInteractive = (target: EventTarget | null) =>
      target instanceof HTMLElement &&
      !!target.closest('a, button, input, textarea, select, summary, [role="button"]')

    const onMove = (event: MouseEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY }
      setActive(isInteractive(event.target))
    }

    const onDown = (event: MouseEvent) => {
      setPressed(true)
      setSparkles((current) => [
        ...current,
        {
          id: event.timeStamp,
          x: event.clientX,
          y: event.clientY,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
        },
      ])
    }

    const onUp = () => setPressed(false)

    frameRef.current = window.requestAnimationFrame(animate)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current)
      }
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [enabled])

  useEffect(() => {
    if (!sparkles.length) {
      return
    }

    const timeout = window.setTimeout(() => {
      setSparkles((current) => current.slice(-6).filter((item, index) => index > 0))
    }, 520)

    return () => window.clearTimeout(timeout)
  }, [sparkles])

  if (!enabled) {
    return null
  }

  return (
    <>
      <div
        ref={trailRef}
        className={`playful-cursor-trail ${active ? 'playful-cursor-trail-active' : ''}`}
      />
      <div
        ref={cursorRef}
        className={`playful-cursor ${active ? 'playful-cursor-active' : ''} ${
          pressed ? 'playful-cursor-pressed' : ''
        }`}
      >
        <span className="playful-cursor-face">{active ? '😺' : '🐱'}</span>
      </div>
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="playful-cursor-sparkle"
          style={{ left: sparkle.x, top: sparkle.y }}
        >
          {sparkle.symbol}
        </span>
      ))}
    </>
  )
}
